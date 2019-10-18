{
"title": "Configure URL groups",
"linkTitle": "Configure URL groups",
"date": "2019-10-17",
"description": "The API Gateway can make connections on a round-robin basis to the URLs listed in a URL group, thus enabling a high degree of failover to external servers (for example, Entrust GetAccess, SAML PDP, or XKMS). The API Gateway attempts to connect to the listed servers according to the priorities assigned to them. "
}
﻿
<div id="p_common_url_groups_over">

Overview
--------

The API Gateway can make connections on a round-robin basis to the URLs listed in a URL group, thus enabling a high degree of failover to external servers (for example, Entrust GetAccess, SAML PDP, or XKMS). The API Gateway attempts to connect to the listed servers according to the priorities assigned to them.

For example, assume there are two High priority URLs, one Medium URL, and one Low URL configured. Assuming the API Gateway can successfully connect to the two High priority URLs, it alternates requests between these two URLs only in a round-robin fashion. The other group URLs are not used. However, if both of the High priority URLs become unavailable, the API Gateway then tries to use the Medium priority URL, and only if this fails is the Low priority URL used.

URL groups are available in the Policy Studio tree under the **Environment Configuration** > **External Connections** > **URL Connection Sets**
node.

</div>

<div id="p_common_url_groups_config">

Configure a URL group
---------------------

Configure the following fields:

**URL Group Name**:\
Enter a name for the URL group.

To add URLs to the group, click the **Add** button and complete the following fields:

-   **URL**:\
    Enter the full URL of the external server.
-   **Timeout (secs)**:\
    Specify the timeout in seconds for connections to the specified server.
-   **Retry After (secs)**:\
    Whenever the server becomes unavailable for whatever reason (for example, maintenance), no attempt is made to connect to that server until the time specified here has elapsed. In other words, when a connection failure is detected, the next connection to that URL is after this amount of time.
-   **SSL mutual authentication certificate**:\
    If the specified server requires clients to authenticate to it over two-way SSL, click the **Signing Key** button to select an SSL certificate
    from the Certificate Store for authentication.
-   **Host/IP**:\
    If the specified server sits behind a proxy server, you must enter the host name or IP address of the proxy server.
-   **Port**:\
    Enter the port on which the proxy is listening.

To edit or delete a URL, select the URL from the table, and click the **Edit**
or **Delete**
buttons.

In general, the API Gateway attempts to round-robin requests over URLs of the same priority, but uses higher priority URLs before lower priority ones. When a new URL is added to the group, it is automatically given the highest priority. You can change priorities by selecting the URL in the table, and clicking the **Up**
or **Down**
buttons.

</div>
