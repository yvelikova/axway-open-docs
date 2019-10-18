{
"title": "Configure client credentials",
"linkTitle": "Configure client credentials",
"date": "2019-10-17",
"description": "Client credentials enable you to globally configure client authentication settings for the following authentication options:"
}
﻿

Overview
--------

Client credentials enable you to globally configure client authentication settings for the following authentication options:

-   API keys as a client
-   HTTP basic
-   Kerberos
-   OAuth 2.0 as a client

{{< alert title="Note" color="primary" >}}
For more information on configuring OAuth 2.0 client credentials, see the
[API Gateway OAuth User Guide](/bundle/APIGateway_77_OAuthUserGuide_allOS_en_HTML5/)
.
{{< /alert >}}

You can configure settings for client credentials under the **Environment Configuration > External Connections > Client Credentials**
node in the Policy Studio tree, which you can then specify at the filter level, for example, in the **Connection**
and **Connect To URL**
filters.

Configure API key client credential profiles
--------------------------------------------

API key client credential profiles enable you to globally configure authentication settings for API keys as a client. API keys are supplied by client users and applications calling REST APIs to allow the API service provider to track and control how the APIs are used (for example, to meter access and prevent abuse or malicious attack).

To configure API key client credential profiles, you must first configure a provider. The following Amazon Web Services provider configurations are included in an out-of-the-box installation of API Gateway:

-   Amazon AWS V2 Signing
-   Amazon AWS V4 Signing

### Add API keys

To add an API key for an existing API key provider, click an API key client credential node (for example, **Amazon AWS V2 Signing**), and click the **Add**
button on the **API Key Credential Profiles**
tab of the **API Key Credential Profile**
window. Complete the following fields on the **Add API Key**
dialog:

**Name**:\
Enter a suitable name for this API key.

**API Key ID**:\
Enter an identifier for this API key. This is the Amazon client ID associated with your Amazon account.

**API Key Secret**:\
Enter a secret for this API key. This is the Amazon secret associated with your Amazon account.

{{< alert title="Tip" color="primary" >}}
To sort the list view of client credential profiles, click the column heading.
{{< /alert >}}

After you have configured your API key client credentials globally, you can select the client credential profile to use for authentication on the **Authentication**
tab of your filter (for example, in the **Connection**
and **Connect To URL**
filters). For more information, see
[Connection](/csh?context=503&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
and
[Connect to URL](/csh?context=502&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

### Add API key providers

To configure a new API key provider, right-click **API Keys**, and select **Add API Key Client Credential**. Complete the following fields on the **API Key Service Provider Configuration**
dialog:

**Name**:\
Enter a suitable name for this API key service provider configuration.

**Sign the request using**:\
Select an option to specify how the request is signed. The options are:

-   Amazon Access Key Signing V2
-   Amazon Access Key Signing V4
-   No Signing

**Put the API key in**:\
Select an option to specify where to put the API key in the request and enter a name in the **named**
field. The options are:

-   Header – The parameter is added to the header of the request.
-   Query String/Form Body – If the incoming request is a GET request, the parameter is added to the query string. If the incoming request is a POST request, the parameter is added to the content body.

Version 2 of the Amazon Signing API only supports the GET operation and only recognizes a limited set of query string parameters. Any unsupported query string parameters result in a `HTTP 400 Bad Request`
response from the V2 Amazon web service.

For example, to put the API key in the header of the request in a field named `AWSKeyId`, choose **Header**
and enter `AWSKeyId`.

{{< alert title="Tip" color="primary" >}}To change the configuration of an existing API key service provider, click the API key client credential node, and edit the settings on the **API Key Configuration**
tab of the **API Key Credential Profile**
window.{{< /alert >}}

Configure HTTP basic/digest client credential profiles
------------------------------------------------------

A client can authenticate to the API service provider with a user name and password combination using HTTP basic authentication or HTTP digest authentication.

To add a HTTP basic/digest client credential profile, click the **HTTP Basic**
node, and click the **Add**
button on the **HTTP Basic/Digest Client Credentials**
window. Complete the following fields on the **Add HTTP Authentication Profile**
dialog:

**Profile Name**:\
Enter a suitable name for this HTTP authentication profile.

**Choose Authentication Type**:\
Select the **Basic**
or **Digest**
radio button to specify the type of HTTP authentication to use, and enter a user name and password in the **Username**
and **Password**
fields.

**Automatically send credentials**:\
Select this option to automatically send credentials in the request. This is the equivalent of **Send token with first request**
in Kerberos. This option is selected by default.

After you have configured your HTTP client credentials globally, you can select the client credential profile to use for authentication on the **Authentication**
tab of your filter (for example, in the **Connection**
and **Connect To URL**
filters). For more information, see
[Connection](/csh?context=503&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
and
[Connect to URL](/csh?context=502&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

Configure Kerberos client credential profiles
---------------------------------------------

A Kerberos client can authenticate to a Kerberos service by sending a Kerberos service ticket in the HTTP request to that service.

{{< alert title="Note" color="primary" >}}You can also configure the API Gateway to authenticate to a Kerberos service by including the relevant Kerberos tokens inside the XML message. For more details, see
[Kerberos client authentication](/csh?context=509&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
. For more details on different Kerberos setups with API Gateway, see
[API Gateway Kerberos Integration Guide](/bundle/APIGateway_77_IntegrationKerberos_allOS_en_HTML5)
.{{< /alert >}}

To add a credential profile for a Kerberos client, click **Kerberos**, and select **Add**
in the **Kerberos Client Credentials**
window.

Configure the following fields on the **Add Kerberos Profile**
dialog:

**Profile Name**:\
Enter a suitable name for this Kerberos authentication profile.

**Kerberos Client**:\
Click the **...** button, and select a previously configured Kerberos client from the list. To add a Kerberos client, right-click **Kerberos Clients**, and select **Add Kerberos Client**. You can also add Kerberos clients globally under **Environment Configuration > External Connections** in the node tree.

The selected Kerberos client has two roles. First, it must obtain a Kerberos Ticket Granting Ticket (TGT). Second, it uses this TGT to obtain a service ticket for the **Kerberos Service Principal**
selected in this profile.

For more details on configuring Kerberos clients, see [*Configure Kerberos clients* on page 1](kerberos_client.htm).

**Kerberos Service Principal**:\
Click the **...** button, and select a previously configured Kerberos service principal from the list. To add a Kerberos principal, right-click **Kerberos Principals**, and select **Add Kerberos Principal**. You can also add Kerberos principals under **Environment Configuration > External Connections** in the node tree.

The Kerberos client must obtain a ticket from the Kerberos Ticket Granting Server (TGS) for the selected Kerberos service principal. The TGS grants a ticket for the principal, and the Kerberos client can then send the ticket to the Kerberos service. The principal in the ticket must match the principal of the Kerberos service for the client to be successfully authenticated. A service principal name (SPN) can be used to uniquely identify the service in the Kerberos realm.

For more details on configuring Kerberos principals, see [*Configure Kerberos principals* on page 1](kerberos_principal.htm).

**Send token with first request**:\
In some cases, a Kerberos client might not authenticate (send the `Authorization`
HTTP header) to the Kerberos service on first request. The Kerberos service then responds with an HTTP 401 response code, instructing the client to authenticate to the server by sending the `Authorization`
header. The Kerberos client sends a second request, this time with the `Authorization`
header containing the relevant Kerberos token. Select this option to *always*
send the `Authorization`
HTTP header containing the Kerberos service ticket on the first request to the Kerberos service. This option is selected by default.

**Send body only after establish context**:\
Select this option if you want the Kerberos client to only send the message body after the context with the Kerberos service has been fully established (the client has mutually authenticated with the service).

**Pass when service returns 200 even if context not established**:\
In rare cases, a Kerberos service might return a `200 OK`
response to the initial request from a Kerberos client even though the security context has not yet been fully established. This `200 OK`
response might not contain the `WWW-authenticate`
HTTP header. Select this option to send the request with the `Authorization`
header to the Kerberos service *even if* the context has not been established. The Kerberos service then decides whether to process the request depending on the status of the security context.

After you have configured your Kerberos client credentials profile globally, you can select the client credential profile to use for authentication on the **Authentication**
tab of your filter (for example, in the **Connection**
and **Connect To URL**
filters). For more information, see
[Connection](/csh?context=503&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
and
[Connect to URL](/csh?context=502&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.
