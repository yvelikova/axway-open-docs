{
"title": "Dynamic router",
"linkTitle": "Dynamic router",
"date": "2019-10-17",
"description": "API Gateway can act as a proxy for clients of the secured web service. When a client\\tuses a proxy, it includes the fully qualified URL of the destination in the request line of the HTTP request. It sends this request to the configured proxy, which then forwards the request to the host specified in the URL. The relative path used in the original request is preserved by the proxy on the outbound connection. "
}
﻿
<div id="p_connection_dynamic_overview">

Overview
--------

API Gateway can act as a proxy for clients of the secured web service. When a client uses a proxy, it includes the fully qualified URL of the destination in the request line of the HTTP request. It sends this request to the configured proxy, which then forwards the request to the host specified in the URL. The relative path used in the original request is preserved by the proxy on the outbound connection.

The following is an example of an HTTP request line that was made through a proxy, where `WEB_SERVICE_HOST`
is the name or IP address of the machine hosting the destination web service:

    POST http://WEB_SERVICE_HOST:80/myService HTTP/1.0

When API Gateway acts as a proxy for clients, it can receive requests like the one above. The **Dynamic Router**
filter can route the request on to the URL specified in the request line (`http://WEB_SERVICE_HOST:80/myService`).

Depending on how API Gateway is perceived by the client, different combinations of routing filters can be used. For an introduction to using the various filters in the **Routing**
category, see
[Get started with routing configuration](/csh?context=625&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
