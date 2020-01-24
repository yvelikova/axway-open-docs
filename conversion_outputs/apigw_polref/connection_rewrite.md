{
"title": "Rewrite URL",
"linkTitle": "Rewrite URL",
"date": "2019-10-17",
"description": "You can use the **Rewrite URL**\\nfilter to specify the path on the remote machine to send the request to. This filter normally used in conjunction with a **Static Router**\\nfilter, whose role is to supply the host and port of the remote service. For more details, see [*Static router* on page 1](%3Ca%20href=)."
}
﻿
<div id="p_connection_rewrite_over">

Overview
--------

You can use the **Rewrite URL**
filter to specify the path on the remote machine to send the request to. This filter normally used in conjunction with a **Static Router**
filter, whose role is to supply the host and port of the remote service. For more details, see *Static router* on page 1.

Depending on how API Gateway is perceived by the client, different combinations of routing filters can be used. For an introduction to using the various filters in the **Routing**
category, see
[Get started with routing configuration](/csh?context=625&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_connection_rewrite_conf">

Configuration
-------------

Configure the following fields on the **Rewrite URL**
filter configuration window:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**URL**:\
Enter the relative path of the web service in the **URL**
field. API Gateway combines the specified path with the host and port number specified in the **Static Router**
filter to build up the complete URL to route to.

Alternatively, you can perform simple URL rewrites by specifying a fully qualified URL into the **URL**
field. You can then use a **Dynamic Router**
to route the message to the specified URL.

</div>
