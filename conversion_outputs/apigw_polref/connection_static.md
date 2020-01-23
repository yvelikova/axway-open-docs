{
"title": "Static router",
"linkTitle": "Static router",
"date": "2019-10-17",
"description": "API Gateway uses the information configured in the **Static Router**\\nfilter to connect to a machine that is hosting a web service. You should use the **Static Router**\\nfilter in conjunction with a **Rewrite URL**\\nfilter to specify the path to send the message to on the remote machine. For more details, see [*Rewrite URL* on page 1](%3Ca%20href=)."
}
﻿
<div id="p_connection_static_overview">

Overview
--------

API Gateway uses the information configured in the **Static Router**
filter to connect to a machine that is hosting a web service. You should use the **Static Router**
filter in conjunction with a **Rewrite URL**
filter to specify the path to send the message to on the remote machine. For more details, see *Rewrite URL* on page 1.

Depending on how API Gateway is perceived by the client, different combinations of routing filters can be used. For an introduction to using the various filters in the **Routing**
category, see
[Get started with routing configuration](/csh?context=625&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_connection_static_conf">

Configuration
-------------

Configure the following fields on the **Static Router**
configuration window:

**Name**:\
Enter a name for the filter.

**Host**:\
Enter the host name or IP address of the remote machine that is hosting the destination web service.

**Port**:\
Enter the port on which the remote service is listening.

**HTTP**:\
Select this option if API Gateway should send the message to the remote machine over plain HTTP.

**HTTPS**
:\
Select this option if API Gateway should send the message to the remote machine over a secure channel using SSL. You can use a **Connection**
filter to configure API Gateway to mutually authenticate to the remote system.

</div>
