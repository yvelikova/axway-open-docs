{
"title": "Configure RSA Access Manager connection",
"linkTitle": "Configure RSA Access Manager connection",
"date": "2020-01-20",
"description": "This section describes how to configure a RSA Access Manager connection in Policy Studio. For details on working in Policy Studio, see the \\n \\n \\n ."
}
﻿

This section describes how to configure a RSA Access Manager connection in Policy Studio. For details on working in Policy Studio, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

The RSA Access Manager connection is configured as a connection set. A connection set consists of a globally configured set of servers that API Gateway connects to. You can reuse these global sets when configuring policies in Policy Studio.

{{< alert title="Note" color="primary" >}}All servers in the connection set must be of the same type (authorization servers or dispatcher servers). {{< /alert >}}

1.  In the node tree, click **Environment Configuration > External Connections > Connection Sets**.
2.  Select **RSA Access Manager Connection Sets**, and click **Add a Connection Set**.
3.  Enter a name for the connection set (for example, `Authorization` or `Dispatch`), and click **Add** to add a server.
4.  Enter the host name and port the server is listening on.
5.  Select the security type for the server connection.
6.  {{< alert title="Note" color="primary" >}}The security type (**Clear**, **SSL (Anonymous)**, or **SSL Authentication**) you select must match the security requirement of the server.{{< /alert >}}
7.  If you selected **SSL Authentication**, click **Signing Key:**, and select the certificate you want to use, then select **OK**.
8.  To change the priority of a server in the set, select the server, and click **Up** or **Down**.
9.  Repeat for all the servers you want to include in the connection set, and click **OK**.

For more details on the fields and options in this configuration window, see
[Configure connection groups](/csh?context=606&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

To later view or edit your connection sets, click **Environment Configuration > External Connections > Connection Sets**, double-click **RSA Access Manager Connection Sets**, and select the connection you want.
