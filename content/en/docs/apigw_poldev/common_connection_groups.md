{
"title": "Configure connection groups",
"linkTitle": "Configure connection groups",
"date": "2019-10-17",
"description": "A *connection group* consists of a number of external servers that API Gateway connects to (for example, RSA Access Manager servers for authorization)."
}
﻿

A *connection group* consists of a number of external servers that API Gateway connects to (for example, RSA Access Manager servers for authorization).

API Gateway attempts to connect to all the servers in the group in a round-robin fashion, therefore providing a high degree of failover. If one or more servers are unavailable, API Gateway can still connect to an alternative server. API Gateway attempts to connect to the listed servers according to the priorities assigned to them.

For example, assume there are two high-priority servers, one medium-priority server, and one low-priority server configured. Assuming API Gateway can successfully connect to the two high-priority servers, it alternates requests only between these two servers in a round-robin fashion. The other group servers are not used. However, if both high-priority servers become unavailable, API Gateway then tries to use the medium-priority server. Only if this fails is the low-priority server used.

Connection groups are available in the Policy Studio tree under the **Environment Configuration > External Connections > Connection Sets** node according to the filter from which they are available.

Configure a connection group
----------------------------

You can configure a connection group using the **Connection Group** dialog. The external servers are listed in order of priority in the table on the **Connection Group** dialog.

API Gateway attempts to connect to the server at the top of the list first. If this server is not available, a connection attempt is made to the second server, and so on until an available server is found. If none of the listed servers are available, the client is not authorized, and a SOAP fault is returned to the client.

You can increase or decrease the priorities of the listed external servers using the **Up** and **Down** buttons. You can add, edit, and delete connections in the group using the **Add**, **Edit**, and **Remove** buttons.

Configure a connection
----------------------

You can configure a connection within a connection group using the **Connection Configuration** dialog. Perform the following steps:

1.  Enter the name or IP address of the machine hosting the selected Access Manager server in the **Location** field.
2.  Enter the **Port** on which the specified Access Manager server is listening.
3.  Select a suitable **Timeout** in seconds for connections to this server.
4.  Select the appropriate **Connection Type** for API Gateway to use when connecting to the specified Access Manager server. The available connections types are clear, over Anonymous SSL, or Mutual SSL Authentication (two-way SSL).
5.  If you select **SSL Authentication**, you must also select an **SSL mutual authentication certificate**. This certificate is then used to authenticate to the Access Manager server.

