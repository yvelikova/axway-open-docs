{
"title": "API key authentication",
"linkTitle": "API key authentication",
"date": "2019-10-17",
"description": "API keys are supplied by client users and applications calling REST APIs to track and control how the APIs are used (for example, to meter access and prevent abuse or malicious attack). The **Authenticate API Key**\\nfilter enables you to securely authenticate an API key with the API Gateway. "
}
﻿
<div id="p_authn_api_key_overview">

Overview
--------

API keys are supplied by client users and applications calling REST APIs to track and control how the APIs are used (for example, to meter access and prevent abuse or malicious attack). The **Authenticate API Key**
filter enables you to securely authenticate an API key with the API Gateway.

API keys include a key ID that identifies the client responsible for the API service request. This key ID is not a secret, and must be included in each request. API keys can also include a confidential secret key used for authentication, which should only be known to the client and to the API service. You can use the **Authenticate API Key**
filter to specify where to find the API key ID and secret key in the request message, and to specify timestamp and expiry options.

An example use case for this filter would be a client accessing a REST API service to invoke specific methods (for example, `startVM()`
or `stopVM()`). To invoke these methods, you are required to provide your API key ID and secret key to the API Gateway. You can keep the secret key private by sending the request over HTTPS.

Alternatively, you can use the secret key to generate an HMAC digital signature. This means that the secret key is not sent in the request, but is inferred instead, because the message must have been signed using the required secret key. When the API service receives the request, it uses the API key ID to look up the corresponding secret key, and uses it to validate the signature and confirm the request sender.

The API Gateway supports the following API key types:

-   Simple API keys including a key ID only. The API key ID is included in all requests to authenticate the client.
-   Amazon Web Services style API keys including a key ID and a secret key, which are used together to securely authenticate the client. The API key ID is included in all requests to identify the client. The secret key is known only to the client and the API Gateway.

For more details on authenticating Amazon Web Services API keys, go to:\
<http://s3.amazonaws.com/doc/s3-developer-guide/RESTAuthentication.html>

</div>

<div id="p_authn_api_key_general">

General settings
----------------

Configure the following general settings:

**Name**:\
Enter a suitable name for this filter in your policy.

**KPS Alias**:\
Enter the alias name of the Key Property Store (KPS) used to store the API keys. For more details, see
[Key Property Store](/csh?context=616&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
. Defaults to the example `ClientRegistry`
supplied with the API Gateway. For details on storing API keys in the Axway Client Application Registry, see the
[API Gateway OAuth User Guide](/bundle/APIGateway_77_OAuthUserGuide_allOS_en_HTML5/)
.

**Field Containing Secret**:\
Enter the name of the field in the KPS that contains the secret. Defaults to `secretKey`.

</div>

<div id="p_authn_api_key_settings">

API key settings
----------------

Configure the following fields on the **API Key**
tab:

**Where to find API key**:\
To specify where to find the API key in the request message, select one of the following options:

-   **API key is located in**:\
-   Select one of the following from the list:
    -   `Query String`
    -   `Header`
    -   `Parameter`
-   The default option is `Query String`. Enter the name in the text box. Defaults to `KeyId`.
-   **API key is in Authorization header with format**:\
-   Select one of the following Authorization headers from the list:
    -   `Amazon AWS s3 Authorization Header - "AWS apiKey + ":" + base64(signature)"`
    -   `HTTP Basic Authentication Header - "Basic base64(apiKey:secret)"`
-   Defaults to the `Amazon AWS s3 Authorization Header`.
-   **API key can be found using the following selector**:\
-   Enter the selector value that specifies the location of the API key. For details on selectors, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    . Defaults to `${http.client.getCgiArgument("KeyId")}`.

**Where to find Secret key**:\
To specify where to find the secret key in the request message, select the **Extract Secret**
setting, and select one of the following options:

-   **Secret key is in**:\
-   Select one of the following from the list:
    -   `Query String`
    -   `Header`
    -   `Parameter`
-   The default option is `Query String`. Enter the name in the text box. Defaults to `SecretKey`.
-   **Secret key is in Authorization header with format**:\
-   Select the Authorization header from the list. Defaults to `HTTP Basic Authentication Header - "Basic base64(apiKey:secret)"`.
-   **Secret key can be inferred from signature**:\
-   The client can use the secret key to generate a digital signature that is included in the request. When the API Gateway receives the request, it uses the API key ID to identify the client and look up the corresponding secret key in the Axway Client Application Registry. The secret key is then used to validate the signature and authenticate the client. To specify the signature format, select one of the following from the list:
    -   `Amazon AWS s3 Authorization Header Authentication - "AWS apiKey + ":" + base64(signature)"`
    -   `Amazon AWS s3 REST Authentication - "?Signature=<base64(signature)> &Expires=<seconds since epoch>&AWSAccessKeyId=<aws-id>"`
-   Defaults to `Amazon AWS s3 Authorization Header Authentication`.
-   **Secret key can be found using the following selector**:\
-   Enter the selector value that specifies the location of the secret key. For details on selectors, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    . Defaults to `${http.client.getCgiArgument("SecretKey")}`.

**Authenticate API key and secret**:\
Select whether to authenticate both the API key ID and the secret key. This means that the client must supply the API key ID and the secret key in the request message. This setting is selected by default.

</div>

<div id="p_authn_api_key_advanced">

Advanced settings
-----------------

Configure the following fields on the **Advanced**
tab:

**Validate Timestamp**:\
Select whether to validate the API key timestamp using the settings specified below. This setting is unselected by default.

**Timestamp is located in**:\
To specify where the timestamp is located in the request message, select one of the following from the list:

-   `Header`
-   `Parameter`
-   `Query String`

The default option is `Header`. Enter the name in the text box. Defaults to `Date`.

**Timestamp format is**
:\
To specify the timestamp format, select one of the following from the list:

-   `Simple Date Format`
-   `Milliseconds since epoch`
-   `Seconds since epoch`

The default option is `Simple Date Format`. Enter the format in the text box. Defaults to `EEE, dd MMM yyyy HH:mm:ss zzz`.

**Timestamp Drift +/-**:\
You can specify a drift time in milliseconds to allow differences in the clock times between the machine on which the API key was generated and the machine on which the API Gateway is running. Defaults to +-`60000`
milliseconds (one minute).

**Validate Expires**:\
Select whether to validate the API key expiry details using the settings specified below. This setting is unselected by default.

**Expires is located in**:\
To specify the location of the expiry details in the request message, select one of the following from the list:

-   `Query String`
-   `Header`
-   `Parameter`

The default option is `Query String`. Enter the name in the text box. Defaults to `Expires`.

**Expires format is**:\
To specify the format of the expiry details, select one of the following from the list:

-   `Milliseconds since epoch`
-   `Seconds since epoch`
-   `Simple Date Format`

The default option is `Milliseconds since epoch`. Enter the format in the text box.

**Timestamp Drift +/-**:\
You can specify a drift time in milliseconds to allow differences in the clock times between the machine on which the API key was generated and the machine on which the API Gateway is running. Defaults to `60000`
milliseconds (one minute).

</div>
