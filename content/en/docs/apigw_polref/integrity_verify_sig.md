{
"title": "XML signature verification",
"linkTitle": "XML signature verification",
"date": "2019-10-17",
"description": "In addition to validating XML signatures for authentication purposes, the API Gateway can also use XML signatures to prove message integrity. By signing an XML message, a client can be sure that any changes made to the message do not go unnoticed by the API Gateway. Therefore by validating the XML signature on a message, the API Gateway can guarantee the *integrity*\\n of the message."
}
﻿
<div id="p_content_integrity_overview">

Overview
--------

In addition to validating XML signatures for authentication purposes, the API Gateway can also use XML signatures to prove message integrity. By signing an XML message, a client can be sure that any changes made to the message do not go unnoticed by the API Gateway. Therefore by validating the XML signature on a message, the API Gateway can guarantee the *integrity*
of the message.

See also [*XML signature generation* on page 1](content_sign_message.htm).

</div>

<div id="p_content_integrity_sig_location">

Signature verification settings
-------------------------------

The following sections are available on the **Signature Verification**
tab:

**Signature Location**:\
Because there may be multiple signatures in the message, you must specify which signature API Gateway uses to verify the integrity of the message. The signature can be extracted from one of the following:

-   From the SOAP header
-   Using WS-Security actors
-   Using XPath

Select the appropriate option from the list. For more details on signature location options, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Find Signing Key**:\
The public key used to verify the signature can be taken from the following locations:

-   **Via KeyInfo in Message**:\
    Typically, a `<KeyInfo>`
    block is used in an XML signature to reference the key used to sign the message. For example, it is common for a `<KeyInfo>`
    block to reference a `<BinarySecurityToken>`
    that contains the certificate associated with the public key used to verify the signature.
-   **Via Selector Expression**:\
    The certificate used to verify the signature can be extracted from a selector expression. For example, a previous filter (for example, **Find Certificate**) may have already located a certificate and populated the `certificate`
    message attribute. To use this certificate to verify the signature, specify the selector expression in the field provided (for example, `${certificate}`). Using a selector enables settings to be evaluated and expanded at runtime based on metadata (for example, in a message attribute, KPS, or environment variable). For more details, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Via Certificate in LDAP**:\
    Clients may not always want to include their public keys in their signatures. In such cases, the public key can be retrieved from a specified LDAP directory. This setting enables you to select a previously configured LDAP directory from a list. You can add LDAP connections under the **Environment Configuration** > **External Connections**
    node in the Policy Studio tree. Right-click the **LDAP Connection**
    tree node, and select **Add an LDAP Connection**.
-   **Via Certificate in Store**:\
    Similarly, you can retrieve a certificate from the certificate store by selecting this option, and clicking the **Select**
    button. Select the check box next to the certificate that contains the public key to use to verify the signature, and click **OK**.

</div>

<div id="p_content_integrity_what_must_be">

What must be signed settings
----------------------------

The **What Must Be Signed**
tab defines the content that must be signed for a SOAP message to pass the filter. This ensures that the client has signed something meaningful (part of the SOAP message), instead of arbitrary data that would pass a blind signature validation. This further strengthens the integrity verification process. The nodeset that must be signed can be identified by a combination of XPath expressions, node locations, and the contents of a message attribute. For more details, see [*What to sign settings* on page 1](content_sign_message.htm#What).

{{< alert title="Note" color="primary" >}}If all attachments are required to be signed, select **All attachments**
to enforce this.{{< /alert >}}

</div>

<div id="p_content_integrity_advanced">

Advanced settings
-----------------

The following advanced configuration options are available on the **Advanced**
tab:

**Signature Confirmation**:\
If this filter is configured as part of an initiator policy, where the API Gateway acts as the client in a web services transaction, select the **Initiator**
option. This means that the filter keeps a record of the signature that it has verified, and checks the `SignatureConfirmation`
returned by the recipient.

Alternatively, if the API Gateway acts as the recipient in the transaction, select the **Recipient**
option. In this case, the API Gateway returns the `SignatureConfirmation`
elements in the response to the initiator.

**Default Derived Key Label**:\
If the API Gateway consumes a `DerivedKeyToken`, use the default value to recreate the derived key.

**Algorithm Suite**:\
Select the WS-Security Policy *Algorithm Suite*
that must have been used when signing the message. This check ensures that the appropriate algorithms were used to sign the message.

**Fail if No Signatures to Verify**:\
Select this to configure the filter to fail if no XML signatures are present in the incoming message.

**Verify Signature for Authentication Purposes**:\
You can use the **XML Signature Verification**
filter to authenticate an end user. If the message can be successfully validated, it proves that only the private key associated with the public key used to verify the signature was used to sign the message. Because the private key is only accessible to its owner, a successful verification can be used to effectively authenticate the message signer.

**Retrieve DOM using Selector Expression**:\
You can configure this field to verify the response from a SAML PDP. When the API Gateway receives a response from the SAML PDP, it stores the signature on the response in a message attribute. You can specify this attribute using a selector expression to verify this signature. Using a selector enables settings to be evaluated and expanded at runtime based on metadata (for example, in a message attribute, Key Property Store, or environment variable).

For more details, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Remove enclosing WS-Security element on successful verification**:\
Select this check box if you wish to remove the enclosing WS-Security block when the signature has been successfully verified. This setting is not selected by default.

</div>
