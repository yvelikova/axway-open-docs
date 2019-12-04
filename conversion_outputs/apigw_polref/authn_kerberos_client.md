{
"title": "Kerberos client authentication",
"linkTitle": "Kerberos client authentication",
"date": "2019-10-17",
"description": "You can configure the API Gateway to act as a Kerberos client and to obtain a service ticket for a specific Kerberos service. The service ticket makes up part of the Kerberos client-side token that is sent to the Kerberos service. If the service can validate the token, the client is authenticated successfully."
}
﻿

Overview
--------

You can configure the API Gateway to act as a Kerberos client and to obtain a service ticket for a specific Kerberos service. The service ticket makes up part of the Kerberos client-side token that is sent to the Kerberos service. If the service can validate the token, the client is authenticated successfully.

For more details on different Kerberos setups with API Gateway, see
[API Gateway Kerberos Integration Guide](/bundle/APIGateway_77_IntegrationKerberos_allOS_en_HTML5)
.

There are two filters you can use to configure the client-side transaction:

-   Use a **Connection**
    filter to authenticate to a Kerberos service by inserting a client-side Kerberos token into the `Authorization`
    HTTP header. For more information on authenticating to a Kerberos service using a client-side Kerberos token, see [*Connection* on page 1](connection_connection.htm).
-   Use a **Kerberos Client**
    filter to send the client-side Kerberos token in a `BinarySecurityToken`
    block in the SOAP message.

To add a **Kerberos Client** filter, open the **Authentication** category, and drag the filter onto the policy canvas. The following sections describe how to configure the different fields of this filter.

Kerberos client settings
------------------------

The fields configured on the **Kerberos Client**
tab determine how the Kerberos client obtains a service ticket for a specific Kerberos service.

Configure the following fields:

**Kerberos Client**:\
The role of the Kerberos client selected in this field is twofold. First, it must obtain a Kerberos Ticket Granting Ticket (TGT) and second, it uses this TGT to obtain a service ticket for the selected **Kerberos Service Principal**. The TGT is acquired at server startup, server refresh (for example, when an update to configuration is deployed), and when the TGT expires.

To select which Kerberos client to use, click the **...** button, and select a previously configured Kerberos client. To add a Kerberos client, right-click **Kerberos Clients**, and select **Add Kerberos Client**. You can also add Kerberos clients under **Environment Configuration > External Connections** in the node tree. For more details, see
[Configure Kerberos clients](/csh?context=611&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Kerberos Service Principal**:\
The Kerberos client must obtain a service ticket from the Kerberos Ticket Granting Server (TGS) for the Kerberos service principal you set in this field. The TGS grants the Kerberos client a ticket for the selected principal, and the client can then send this ticket to the Kerberos service. The principal in the ticket must match the Kerberos service's principal for the client to be successfully authenticated.

The service principal name (SPN) can be used to uniquely identify the Kerberos service in the Kerberos realm.

To select which Kerberos service principal to use, click the **...** button on the right, and select a previously configured Kerberos principal in the tree (for example, the default `HTTP/host Service Principal`). To add a Kerberos principal, right-click **Kerberos Principals**, and select **Add Kerberos Principal**. You can also add Kerberos principals under **Environment Configuration > External Connections** in the node tree. For more details, see
[Configure Kerberos principals](/csh?context=612&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Kerberos Standard**:\
When using the **Kerberos Client**
filter to insert Kerberos tokens into SOAP messages, the Kerberos client can authenticate to Kerberos services using to two standards:

-   **Web Services Security Kerberos Token Profile 1.1** – When using the Kerberos Token Profile, the client-side Kerberos token is inserted into a `BinarySecurityToken`
    block in the SOAP message. If you select this option, you must configure the fields on the **Kerberos Token Profile**
    tab. You can use signing and encryption filters to sign and encrypt the SOAP message using the Kerberos session key.
-   **WS-Trust for Simple and Protected Negotiation Protocol (SPNEGO)** – When using the WS-Trust for SPNEGO standard, a series of requests and responses occur between the Kerberos client and the Kerberos service to establish a secure context using WS-Trust and WS-SecureConversation. After establishing the secure context, a further series of requests and responses produce a shared secret key that can be used to sign and encrypt *real* requests to the Kerberos service.If you select this option, it is not necessary to configure the fields on the **Kerberos Token Profile**
    tab, but you must configure the **Kerberos Client** filter as a part of a complicated policy set up to handle the multiple request and response messages involved in establishing the secure context between the Kerberos client and service.

Kerberos token profile settings
-------------------------------

You only need to configure the fields on the **Kerberos Token Profile** tab if you set **Kerberos Standard** to **Web Services Security Kerberos Token Profile 1.1** on the **Kerberos Client**
tab. This tab allows you to configure where to insert the `BinarySecurityToken`
in the SOAP message.

**Where to Place BinarySecurityToken**:\
You can insert the `BinarySecurityToken`
inside a named WS-Security Actor/Role in the SOAP message, or you can specify an XPath expression to indicate where the token should be inserted.

To insert the token into a WS-Security element in the SOAP Header element, select **WS-Security Element**. The `BinarySecurityToken`
is inserted into a WS-Security block for the specified actor/role. You can use the default option `Current actor/role only`,
or enter a named actor/role in the field provided.

Alternatively, to use an XPath expression to specify where to insert the `BinarySecurityToken`, select **XPath Location**. Click the **Add**
button to add a new XPath expression, or select an existing XPath expression from the list. You can also edit or delete existing expressions, if needed. For more information, see
[Configure XPath expressions](/csh?context=640&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

{{< alert title="Note" color="primary" >}}You can control inserting the `BinarySecurityToken` relative to the node pointed to by the XPath expression. Select the **Append**
to insert the token after or **Before** to insert the token before the node. {{< /alert >}}

**BinarySecurityToken Value Type**:\
Currently, the only supported `BinarySecurityToken`
type is `GSS_Kerberosv5_AP_REQ`. The selected type is specified in the generated `BinarySecurityToken`.
