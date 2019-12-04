{
"title": "Kerberos service authentication",
"linkTitle": "Kerberos service authentication",
"date": "2019-10-17",
"description": "The API Gateway can act as a Kerberos service to consume Kerberos tokens sent from a client in the HTTP header or in the message itself. The Kerberos client must have obtained a ticket from the Ticket Granting Server (TGS) for this Kerberos service. The service ticket makes up part of the Kerberos client-side token that is sent to the Kerberos service. If the service can validate the token, the client is authenticated successfully."
}
﻿

Overview
--------

The API Gateway can act as a Kerberos service to consume Kerberos tokens sent from a client in the HTTP header or in the message itself. The Kerberos client must have obtained a ticket from the Ticket Granting Server (TGS) for this Kerberos service. The service ticket makes up part of the Kerberos client-side token that is sent to the Kerberos service. If the service can validate the token, the client is authenticated successfully.

For more details on different Kerberos setups with API Gateway, see
[API Gateway Kerberos Integration Guide](/bundle/APIGateway_77_IntegrationKerberos_allOS_en_HTML5)
.

To add a **Kerberos Service** filter, open the **Authentication** category, and drag the filter onto the policy canvas. The following sections describe how to configure the different fields of this filter.

General settings
----------------

The fields configured on the **Kerberos Client**
tab determine how the Kerberos service consumes a Kerberos token from a specific Kerberos client.

Configure the following fields:

**Kerberos Service**:\
The **Kerberos Service**
you select in this field is responsible for consuming the Kerberos client's Kerberos token. The Kerberos client must have obtained a ticket for the Kerberos service's principal name to be able to authenticate to the Kerberos service.

Click the **...** button, and select a previously configured Kerberos service. To add a Kerberos service, right-click **Kerberos Services**, and select **Add Kerberos Service**. You can also add Kerberos services under **Environment Configuration > External Connections** in the node tree. For more details, see
[Configure Kerberos services](/csh?context=614&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Kerberos standard settings
--------------------------

Configure the following fields on the **Kerberos Standard**
tab:

**Kerberos Standard**:\
Select one of the following Kerberos standards:

-   Kerberos Token Profile
-   WS-Trust for SPNEGO
-   SPNEGO over HTTP

{{< alert title="Note" color="primary" >}}The Kerberos Service filter consumes the Kerberos client-side tokens regardless of whether the token is sent at the message layer in the SOAP message, or at the transport layer in an HTTP header. {{< /alert >}}

**Client Token Location for Message-Level Standards**:\
The Kerberos service ticket can be sent in the `Authorization`
HTTP header, or inside the message itself (for example, inside a `<BinarySecurityToken>` element). Alternatively, the Kerberos token can be in a message attribute.

Select one of the following options:

-   **Message Body**:\
    Select this option if you expect the Kerberos service ticket to be contained in the message. You must enter an XPath expression to point to the expected location of the Kerberos token. You can select some default expressions that point to common locations from the list. To add a new XPath expression, click **Add**. You can also edit or delete existing expressions, if needed. For more details, see
    [Configure XPath expressions](/csh?context=640&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Selector Expression**:\
    When using the **WS-Trust for SPNEGO**
    standard, the **Consume WS-Trust**
    filter places the client-side Kerberos token inside the `ws.trust.spnego.token`
    message attribute.

Message level settings
----------------------

You can configure settings adhering to the message-level standards (for example, Kerberos Token Profile and WS-Trust for SPNEGO) on the **Message Level**
tab.

**Extract Session Keys**:\
You must select this option to use the Kerberos/SPNEGO session keys to sign, encrypt, or decrypt a message in a subsequent filter. This option is only available when the token is extracted from the message body.

**Key Length**:\
When using **WS-Trust for SPNEGO** standard, the **Kerberos Service**
filter generates a new symmetric key and wraps it using the Kerberos session key. This setting determines the length of the new symmetric key.

**Cache Security Context Session Key**:\
The service-side policy might need to cache the session key in order to process (decrypt and verify) multiple requests from a Kerberos client. Use this field to select a cache for the session key.

Transport level settings
------------------------

The options on the **Transport Level**
tab are specific to Kerberos tokens received over HTTP, and are only relevant if you selected to use **SPNEGO Over HTTP**
standard.

**Cookie Name**:\
The initial handshake between a Kerberos client and a Kerberos service can sometimes involve the exchange of a series of request and responses until the secure context has been established. In such cases, you can use a HTTP cookie to keep track of the context across multiple request and response messages. Enter the name of the cookie in the text field.

**Allow Client Challenge**:\
In some cases, a Kerberos client might not authenticate (send the `Authorization`
HTTP header) to the Kerberos service on first request. The Kerberos service then responds with an HTTP 401 response code, instructing the client to authenticate to the server by sending the `Authorization`
header. The Kerberos client sends a second request, this time with the `Authorization`
header containing the relevant Kerberos token. Select this option to allow this kind of negotiation between the Kerberos client and service.

**Client Sends Body Only After Context is Established**:\
The Kerberos client might wait to mutually authenticate the Kerberos service before sending the body of the message. Select this option to enable the Kerberos service to accept the body after the context has been established if the Kerberos client provides the known cookie. The cookies are cached in the cache you configure.

Advanced SPNEGO settings
------------------------

The settings on the **Advanced SPNEGO**
tab apply only to the **WS-Trust for SPENGO**
and **SPENGO over HTTP**
standards.

**Cache Partially Established Contexts**:\
In theory, a Kerberos client and a Kerberos service may need to send and receive a number of tokens between each other to authenticate. In this case, the **Kerberos Service**
filter must cache the partially established context for each Kerberos client. The contexts are only cached during the establishment of the context.

In practice, however, a single client-side Kerberos token is normally enough to establish a context on the service-side, making this setting redundant.
