{
"title": "Configure SiteMinder connection",
"linkTitle": "Configure SiteMinder connection",
"date": "2020-01-21",
"description": "This section describes how to configure API Gateway to connect to CA SiteMinder using Policy Studio. For more details on working in Policy Studio, see \\n \\n \\n ."
}
﻿

This section describes how to configure API Gateway to connect to CA SiteMinder using Policy Studio. For more details on working in Policy Studio, see
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Before you start, you need the following information for your CA SiteMinder Policy Server:

-   Web Agent name
-   Agent Configuration Object name

To obtain this information, contact your SiteMinder administrator.

1.  In the node tree, click **Environment Configuration > External Connections > SiteMinder/SOA Security Manager Connections**.
2.  Select **Add a SiteMinder connection**.
3.  Enter your agent name (`apigateway.axway.int`) and agent configuration object name (`V6HostConfObject`) you created in [Register API Gateway as the SiteMinder agent](configure_agent_sm.htm#top).
4.  Click **Browse**, select the `SmHost.conf` file for your agent, and click **OK**.

For more details on the fields and options in this configuration window, see
[Configure SiteMinder/SOA Security Manager connections](/csh?context=602&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
