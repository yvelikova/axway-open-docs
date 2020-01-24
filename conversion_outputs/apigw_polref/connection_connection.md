{
"title": "Connection",
"linkTitle": "Connection",
"date": "2019-10-17",
"description": "The **Connection**\\nfilter makes the connection to the remote web service. It relies on connection details that are set by the other filters in the **Routing**\\ncategory. Because the **Connection**\\nfilter connects out to other services, it negotiates the SSL handshake involved in setting up a mutually authenticated secure channel."
}
﻿

The **Connection**
filter makes the connection to the remote web service. It relies on connection details that are set by the other filters in the **Routing**
category. Because the **Connection**
filter connects out to other services, it negotiates the SSL handshake involved in setting up a mutually authenticated secure channel.

Depending on how the API Gateway is perceived by the client, different combinations of routing filters can be used. For an introduction to using the various filters in the **Routing**
category, see
[Get started with routing configuration](/csh?context=625&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

SSL settings
------------

You can configure SSL settings, such as trusted certificates, client certificates, SSL/TLS protocols, and ciphers on the **SSL**
tab. For details on the fields on this tab, see [*SSL settings* on page 1](connection_to_url.htm#SSL).

Authentication settings
-----------------------

You can select credential profiles to use for authentication on the **Authentication**
tab. For details on the fields on this tab, see [*Authentication settings* on page 1](connection_to_url.htm#Authenti).

Additional settings
-------------------

The **Settings**
tab allows you to configure the following additional settings:

-   **Retry**
-   **Failure**
-   **Proxy**
-   **Redirect**
-   **Headers**
-   **Response Body**
-   **Connection**

By default, these sections are collapsed. Click a section to expand it. For details on the fields on this tab, see [*Additional settings* on page 1](connection_to_url.htm#Addition).
