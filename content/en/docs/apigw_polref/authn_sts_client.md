{
"title": "STS client authentication",
"linkTitle": "STS client authentication",
"date": "2019-10-17",
"description": "The **Security Token Service Client**\\nfilter enables the API Gateway to act as a client to a Security Token Service (STS). An STS is a third-party web service that authenticates clients by validating credentials and issuing security tokens across different formats (for example, SAML, Kerberos, or X.509). The API Gateway can use the **Security Token Service Client**\\nfilter to request security tokens from an STS using WS-Trust. WS-Trust specifies the protocol for issuing, exchanging, and validating security tokens. "
}
﻿
<div id="p_authn_sts_client_over">

Overview
--------

The **Security Token Service Client**
filter enables the API Gateway to act as a client to a Security Token Service (STS). An STS is a third-party web service that authenticates clients by validating credentials and issuing security tokens across different formats (for example, SAML, Kerberos, or X.509). The API Gateway can use the **Security Token Service Client**
filter to request security tokens from an STS using WS-Trust. WS-Trust specifies the protocol for issuing, exchanging, and validating security tokens.

An STS has its own security requirements for authenticating and authorizing requests for tokens. This means that the API Gateway might need to insert tokens, digitally sign, and encrypt the request that it sends to the STS for the required token. Because the STS is exposed as a web service, it should have a WSDL file with WS-Policies that describe its security requirements.

For example, the API Gateway can use the **Security Token Service Client**
filter to request tokens that it cannot issue itself, and which might be required by an endpoint service. The endpoint service might require tokens to be signed by a particular authority (STS), or there might be a requirement for a token that contains a key encrypted for the endpoint service, and which only the STS can generate. You can also use the **Security Token Service Client**
filter to virtualize an STS using the API Gateway.

</div>

<div id="p_authn_sts_client_example_request">

Example request
---------------

Using WS-Trust, requests for tokens are placed in a `RequestSecurityToken`
(RST) element in the SOAP `Body`
element. The STS returns the requested token in a `RequestSecurityTokenResponse`
(RSTR) element in the SOAP `Body`. The following example is an extract from a token request message sent from the API Gateway to the STS:

``` {space="preserve"}
<soap:Body
  xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/
  oasis-200401-wss-wssecurity-utility-1.0.xsd"
  wsu:Id="Id-0000012e71431904-00000000011d5641-19">
    <wst:RequestSecurityToken
      xmlns:wst="http://docs.oasis-open.org/ws-sx/ws-trust/200512"
      Context="Id-0000012e71431904-00000000011d5641-15">
        <wst:RequestType>
          http://docs.oasis-open.org/ws-sx/ws-trust/200512/Issue
        </wst:RequestType>
        <wst:TokenType>
          http://docs.oasis-open.org/wss/oasis-wss-saml-token-profile-1.1#SAMLV1.1
        </wst:TokenType>
        <wst:KeyType>
          http://docs.oasis-open.org/ws-sx/ws-trust/200512/SymmetricKey
        </wst:KeyType>
        <wst:Entropy>
            <wst:BinarySecret
              Type="http://schemas.xmlsoap.org/ws/2005/02/trust/SymmetricKey">
              WLQmo5mRYiBRqq2D7677Dg==
            </wst:BinarySecret>
        </wst:Entropy>
        <wsp:AppliesTo
          xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy">
            <wsa:EndpointReference
              xmlns:wsa="http://www.w3.org/2005/08/addressing">
                <wsa:Address>default</wsa:Address>
            </wsa:EndpointReference>
        </wsp:AppliesTo>
    </wst:RequestSecurityToken>
</soap:Body>
```

In this simple example, the client (API Gateway) requests a SAML token with a symmetric `KeyType`. The SAML token is requested for an endpoint service named `default`. An optional `OnBehalfOf`
token is not supplied.

</div>

<div id="p_authn_sts_client_request">

Request settings
----------------

Configure the following general request settings on the **Request**
tab:

**Request Type**:\
Select one of the following request types:

-   **Issue**: A request to issue a token. This is the default request type.
-   **Validate**: A request to validate a token.

**Token Type to Request**:\
Select the token type to request from the STS (for example, `SAML 1.0`, `SAML 1.1`, `SAML 2.0`, or `UsernameToken`). You can also request a custom token type by entering the custom token URI (for example, `http://www.mycustomtoken.com/EmailToken`). The default is `SAML 1.1`.

<div id="p_authn_sts_client_issue_pop_key">

### Issue: POP Key

A *proof-of-possession*
(POP) security token contains secret data used to demonstrate authorized use of an associated security token. Typically, the POP data is encrypted with a key known only to the recipient of the POP token. For **Issue**
requests, you can configure the following POP key settings on the **Issue: POP Key**
tab:

**Proof of Possession Key Type**:\
Select the POP key type for the token you are requesting. This only applies to certain types of tokens (for example, SAML tokens). Select one of the following key types from the list:

|                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SymmetricKey` | When a SAML token is requested with a symmetric POP key, the SAML assertion returned by the STS has a subject confirmation type of `holder-of-key`. The subject confirmation data contains a symmetric key encrypted for the endpoint service. The API Gateway (the client) can request the SAML token from the STS with the endpoint service specified as the token scope, so the STS knows what certificate to use to encrypt the symmetric key it places in the SAML assertion’s subject confirmation data.                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  The API Gateway cannot decrypt the symmetric key in the SAML assertion because it is encrypted for the endpoint service. The STS passes the symmetric key to the requesting API Gateway in the RSTR so that the API Gateway also has the symmetric key. It can then use the SAML assertion (symmetric key) to sign the message to the endpoint service, proving that it holds the key in the SAML assertion. The endpoint service can verify the signature because it can decrypt the key in the SAML assertion. This is the default POP key type.  |
| `PublicKey`    | When a SAML token is requested with a public asymmetric POP key, the SAML assertion returned by the STS has a subject confirmation type of `holder-of-key`. The subject confirmation data contains a public key or certificate. The API Gateway (the client) can also use this SAML assertion to sign messages to the endpoint service using the related private key, thus proving they hold the key referenced in the SAML assertion. The public key in the SAML assertion is not encrypted because it is not sensitive data.                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  This SAML assertion can be used to sign messages to multiple endpoint services because it does not contain a key encrypted for a specific service. The API Gateway can specify the public key used in the **Public Proof of Possession Key**                                                                                                                                                                                                                                                                                                        
  settings. This public key can be associated with a certificate in the certificate store, or generated on-the-fly using the **Generate Key**                                                                                                                                                                                                                                                                                                                                                                                                         
  filter. For more details, see *Generate key* on page 1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `Bearer`       | When a SAML token is requested with a bearer POP key, the SAML assertion returned by the STS has a subject confirmation type of `bearer`. In this case, the SAML token does not contain a POP key.                                                                                                                                                                                                                                                                                                                                                 |

{{< alert title="Note" color="primary" >}}An STS can also generate a SAML token with a subject confirmation type of `sender-vouches`. In this case, the endpoint service trusts the client directly, the SAML assertion does not need to be signed by the STS. The client signs the SAML assertion and the SOAP `Body`
before sending the message to the endpoint service. This type of SAML assertion does not map to a value for **Proof of Possession Key Type**, but can be returned from the STS if no key type is specified. {{< /alert >}}
**Key Size**:\
Enter the key size in bits to indicate the desired strength of the security. Defaults to `256`
bits.

**Entropy Type**:\
If the **Proof of Possession Key Type**
requested is a `SymmetricKey`, you must specify an **Entropy Type**. If the API Gateway provides *entropy*, this means that it provides some of the binary material used to generate the symmetric key. In general, both the API Gateway and the STS provide some entropy for the symmetric key (a computed key). However, either side can also fully generate the symmetric key. Select one of the following options:

-   **None**: The API Gateway does not provide any entropy, so the STS must fully generate the symmetric key.
-   **Binary Secret**: The API Gateway provides entropy in the form of a Base64-encoded binary secret (or key). You must specify a **Binary Secret Type**. For details, see the next setting.
-   **Encrypted Key**: The API Gateway provides entropy in the form of an `EncryptedKey`
    element. You must configure an **XML-Encryption**
    filter in the policy, which applies security before creating the WS-Trust message. This filter generates a symmetric key and encrypts it, but does not encrypt any data. The key must be encrypted with the STS certificate.

**Binary Secret Type**:\
If the **Entropy Type**
is **Binary Secret**, you must specify a **Binary Secret Type**. Select one of the following:

-   Nonce: The API Gateway generates a nonce value and places it in the RST.
-   SymmetricKey: The **Binary Secret Message Attribute**
    value must be specified. In this case, this is the name of the message attribute that contains the symmetric key passed to the STS to be used as entropy for generating the POP symmetric key. The type of this message attribute must be `byte[]`
    when the **Binary Secret Type**
    is `SymmetricKey`.
-   AsymmetricKey: The **Binary Secret Message Attribute**
    value must be specified. In this case, this is the name of the message attribute that contains the private asymmetric key passed to the STS to be used as entropy for generating the POP symmetric key. The type of this message attribute must be `byte[]`, `PrivateKey`, `KeyPair`, or `X509Certificate`
    when the **Binary Secret Type**
    is `AsymmetricKey`. In each case, the private key is used.

**Binary Secret Message Attribute**:\
Enter or select the message attribute that contains the binary secret. This setting is required when the **Binary Secret Type**
is `SymmetricKey`
or `AsymmetricKey`.

**Computed Key Algorithm**:\
When both the API Gateway and STS provide entropy values for the symmetric POP key, you can specify a computed key algorithm (for example, `PSHA1`). This is used when the key resulting from the token request is not directly returned, and is computed.

**Public Proof of Possession Key**:\
If the **Proof of Possession Key Type**
requested is a `PublicKey`, you can specify what public key to include in the token using the following settings:

-   **Use Key Format**: Select how the `UseKey`
    element in the RST formats the public key from the list (for example, `PublicKey`, `Certificate`, `BinarySecurityToken`, and so on).
-   **Use Key Selector Expression**: Select or enter the selector expression that contains the public key. The public key can be of type `X509Certificate`, `PublicKey`, or `KeyPair`.

</div>

<div id="p_authn_sts_client_issue_on_behalf">

### Issue: On Behalf Of Token

For **Issue**
requests, you can optionally configure the `OnBehalfOf`
token for the RST. If an `OnBehalfOf`
token is in the RST, this means you are requesting a token on behalf of the subject identified by the token or endpoint reference in the `OnBehalfOf`
element. You can configure the following settings on the **Issue: On Behalf Of Token**
tab:

**On Behalf Of**:\
Select one of the following options:

-   **None**: No `OnBehalfOf`
    token is specified. This is the default.
-   **Token**: The token is embedded directly under the `<OnBehalfOf>`
    element in the RST.
-   **EmbeddedSTR**: The token is placed in the `<OnBehalfOf><SecurityTokenReference><Embedded>`
    element in the RST.
-   **Endpoint Reference**: A reference to the token is placed in the `<OnBehalfOf><SecurityTokenReference>`
    element. The token is placed in the WS-Security header.

**On Behalf Of Token Selector Expression**:\
Enter the selector expression for the message attribute that contains the `OnBehalfOf`
token. This can be a `UsernameToken`, SAML token, X.509 certificate, and so on. The type of this message attribute can be `Node`, `List`
of Nodes, `String`, or `X509Certificate`. This message attribute must be populated using a filter configured in the policy that applies security before creating the WS-Trust message. For example, this includes a filter to extract a `UsernameToken`
from the incoming message, or a **Find Certificate**
filter.

**Endpoint Address**:\
When the **On Behalf Of**
type is **Endpoint Reference**, no token is placed in the `OnBehalfOf`
element. Instead, you can enter an endpoint address in this field that identifies the subject on whose behalf you are requesting the token.

**Identity Type**:\
When the **On Behalf Of**
type is **Endpoint Reference**, you can select an identity type from the list (for example, `DNSName`, `ServicePrincipaName`, or `UserPrincipalName`).

**Identity**:\
When the **Identity Type**
is set to `DNSName`, `ServicePrincipaName`, or `UserPrincipalName`, you must specify a value in this field.

**Identity Selector Expression**:\
When the selected **Identity Type**
is one of `PublicKey`, `Certificate`, `BinarySecurityToken`, `SecurityTokenReference_x509v3`, or `SecurityTokenReference_ThumbprintSHA1`, you must specify a selector expression in this field. This specifies the name of the message attribute that contains the certificate for the subject on whose behalf you are requesting the token. The type of this message attribute must be `X509Certificate`.

</div>

<div id="p_authn_sts_client_issue_token_scope">

### Issue: Token Scope and Lifetime

For **Issue**
requests, you can optionally specify details for the scope of the requested token (for example, the endpoint service this token is used for). These details are placed in the `AppliesTo`
element of the RST. You can configure the following settings on the **Issue: Token Scope and Lifetime**
tab:

**Endpoint Address**:\
Enter an address for the endpoint.

**Identity Type**:\
Select an identity type from the list (for example, `Certificate`, `BinarySecurityToken``DNSName`, `ServicePrincipalName`, or `UserPrincipalName`).

**Identity**:\
When the **Identity Type**
is set to `DNSName`, `ServicePrincipaName`, or `UserPrincipalName`, you must specify a value in this field.

**Identity Selector Expression**:\
When the **Identity Type**
selected is one of `PublicKey`, `Certificate`, `BinarySecurityToken`, `SecurityTokenReference_x509v3`, or `SecurityTokenReference_ThumbprintSHA1`, you must specify a selector expression in this field. This specifies the name of the message attribute that contains the certificate for the endpoint service that the token is sent to. The type of this message attribute must be `X509Certificate`.

**Expires In**:\
Specify when the token is due to expire in the fields provided.

**Lifetime Format**:\
Enter the date and time format in which the token lifetime is specified. Defaults to `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`.

{{< alert title="Note" color="primary" >}}The STS can choose to ignore the token lifetime specified in the RST.{{< /alert >}}

</div>

<div id="p_authn_sts_client_issue_validate_target">

### Validate:Target

If the request type is set to **Validate**, you can use the **Validate:Target**
tab to specify the token that you require the STS to validate. In this case, the STS does not issue a token. It validates the token passed to it in the RST and returns a status. The STS response is placed in the `sts.validate.code`
and `sts.validate.reason`
message attributes.

You can configure the following settings on the **Validate:Target**
tab:

**Token**:\
Specifies that the token is placed directly under the `<ValidateTarget>`
element in the RST.

**EmbeddedSTR**:\
Specifies that the token is placed in the `<ValidateTarget><SecurityTokenReference><Embedded>`
element.

**STR**:\
Specifies that a reference to the token is placed in the `<ValidateTarget><SecurityTokenReference>`
element. The token is placed in the WS-Security header.

**Validate Target Selector Expression**:\
Enter a selector expression for the message attribute that contains the token to validate. The attribute type can be `Node`, a `List`
of Nodes, or `String`. This message attribute must be populated using a filter configured in the policy that applies security before creating the WS-Trust message. For example, you can run a filter to extract a SAML token from the incoming message.

</div>

</div>

<div id="p_authn_sts_client_policies">

Policies settings
-----------------

The **Policies**
tab enables you to specify the policies that the **Security Token Service Client**
filter delegates to. You can configure the following settings on this tab by clicking the button next to each field:

**Policy apply security before creating the WS-Trust message**:\
Specifies the policy that runs before the **Security Token Service Client**
filter creates the RST (the WS-Trust request message for the STS). The filters in this policy are used to set up message attribute values that the STS client filter requires (for example, the `OnBehalfOf`
token).

**Policy to apply security to the WS-Trust request**:\
Specifies the policy that runs after the **Security Token Service Client**
filter has created the RST. The filters in this policy can sign and/or encrypt the message as required by the STS. It can also inject other security tokens into the WS-Security header if required.

**Policy to apply security to the WS-Trust response**:\
Specifies the policy that runs to apply security to the WS-Trust response. This policy runs when the response is received from the STS. The filters in this policy can decrypt and verify signatures on the response message.

</div>

<div id="p_authn_sts_client_routing">

Routing settings
----------------

When routing to an STS, you can specify a direct connection to the web service endpoint by entering a URL on the **Routing**
tab. Alternatively, when the routing behavior is more complex, you can delegate to a custom routing policy to handle the added complexity. The options on the **Routing**
tab allow for these alternative routing configurations.

**Use the following URL**:\
Select this option to route to the specified URL. You can enter the URL in the text box, or specify the URL as a selector so that the URL is built dynamically at runtime from the specified message attributes (for example `${host}:${port}`, or `${http.destination.protocol}://${http.destination.host}:${http.destination.port}`). For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

You can configure SSL settings, credential profiles for authentication, and other settings for the direct connection using the tabs in the **Connection Details**
group. For more details, see [*Connect to URL* on page 1](connection_to_url.htm).

**Delegate routing to the following policy**:\
Select this option to use a dedicated routing policy to send messages on to the STS. Click the browse button next to the **Routing policy**
field to select the policy to use to route messages.

**No routing**:\
Select this option to only allow request reflection for test purposes.

</div>

<div id="p_authn_sts_client_response">

Response settings
-----------------

The **Response**
tab enables you to specify options for processing the response message from the STS. You can configure the following settings on this tab:

**Verify returned security token type**:\
When selected, the filter checks that the `TokenType`
returned is what was requested. This is selected by default.

**Put security token into message attribute**:\
When specified, the token returned from the STS is placed in the specified message attribute. The type of this attribute is `String`. Defaults to `sts.security.token`. An element version of the token is placed in a message attribute named `attrname.element`.

**Insert security token into original message in SOAP Actor/Role**:\
When specified, the token returned from the STS is inserted into the original message. This is the original message received by the API Gateway (was the current message before the **Security Token Service Client**
filter ran). Defaults to `Current actor/role only`.

**Extract Token Lifetime**:\
When selected, the token lifetime is extracted from the response, and the `sts.token.lifetime.created`
and `sts.token.lifetime.expires`
message attributes are populated. This setting is selected by default.

</div>

<div id="p_authn_sts_client_advanced">

Advanced settings
-----------------

The **Advanced**
tab enables you to specify the following options:

**Versions and Namespaces**:\
The version and namespace options are as follows:

-   **WS-Trust Version**: Specifies the WS-Trust namespace to use in the generated RST. Defaults to `WS-Trust 1.3`.
-   **SOAP version**: Specifies the SOAP version to use in the generated RST. Defaults to `SOAP 1.1`.
-   **WS-Addressing Namespace**: Specifies the WS-Addressing namespace to use in the generated RST. Defaults to `http://www.w3.org/2005/08/addressing`.
-   **WS-Policy Namespace**: Specifies the WS-Policy namespace to use in the generated RST. Defaults to `WS-Policy 1.2`.
-   **WS-Security Actor**: Specifies the actor in which to place tokens that are referred to from the RST using STRs (for example, `OnBehalfOf`). Defaults to `Current actor/role only`.

**Algorithms**:\
The algorithm options are as follows:

-   **Canonicalization Algorithm**: When selected, additional elements are added to the RST, which specify a client-requested canonicalization algorithm (for example, `ExC14n`).
-   **Encryption Algorithm**: When selected, additional elements are added to the RST, which specify a client-requested encryption algorithm (for example, `Aes256`).
-   **Encrypt with**: When selected, specifies the encryption algorithm with which to encrypt the RSTR (for example, `Aes256`).
-   **Sign with**: When selected, specifies the signature algorithm with which to digitally sign the RSTR (for example, `RsaSha256`).

**Advanced Settings**:\
The advanced options are as follows:

**Content-Type**: Specifies the `Content-Type`
of the message to be sent to the STS. For example, for Microsoft Windows Communication Foundation (WCF), select `application/soap+xml`. Defaults to `text/xml`.

**Store and restore original message**: When selected, the original message is saved before messages sent from the API Gateway to the STS and messages sent from the STS to the API Gateway are processed. It is then reinstated after this filter finishes processing the STS response. This is the default behavior.

For debug purposes, you might wish to return the STS response from your policy. In this case, deselect this setting, and the current message after this filter completes should then be the STS response. You might also wish to debug the RST (the request to the STS), and return that from your policy. In this case, disable this setting, click the **Routing**
tab, and select the **No routing**
option.

</div>
