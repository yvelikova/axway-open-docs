{
"title": "Configure a transparent proxy",
"linkTitle": "Configure a transparent proxy",
"date": "2019-10-17",
"description": "On Linux systems with the `TPROXY`\\nkernel option enabled, you can configure the API Gateway as a *transparent proxy*. This enables the API Gateway to present itself as having the server's IP address from the point of view of the client, or having the client's IP address from the point of view of the server. This can be useful for administrative or network infrastructure purposes (for example, to keep using existing client/server IP addresses, and for load-balancing). "
}
﻿
<div id="p_common_transparent_proxy_overview">

Overview
--------

On Linux systems with the `TPROXY`
kernel option enabled, you can configure the API Gateway as a *transparent proxy*. This enables the API Gateway to present itself as having the server's IP address from the point of view of the client, or having the client's IP address from the point of view of the server. This can be useful for administrative or network infrastructure purposes (for example, to keep using existing client/server IP addresses, and for load-balancing).

You can configure transparent proxy mode both for inbound and outbound API Gateway connections:

-   Incoming interfaces can listen on IP addresses that are not assigned to any interface on the local host.
-   Outbound calls can present the originating client's IP address to the destination server.

Both of these options act independently of each other.

</div>

<div id="p_common_transparent_proxy_incoming_config">

Configure transparent proxy mode for incoming interfaces
--------------------------------------------------------

To enable transparent proxy mode on an incoming interface, perform the following steps:

1.  In the Policy Studio tree, expand the **Environment Configuration** > **Listeners** > **API Gateway**
    node.
2.  Right-click your service, and select **Add Interface** > **HTTP**
    or **HTTPS**
    to display the appropriate dialog (for example, **Configure HTTP Interface**).
3.  Select the check box labeled **Transparent Proxy (allow bind to foreign address)**. When selected, the value in the **Address**
    field can specify any IP address, and incoming traffic for the configured address/port combinations is handled by the API Gateway.

For more details on configuring interfaces, see [*Configure HTTP services* on page 1](general_services.htm).

</div>

<div id="p_common_transparent_proxy_outgoing_config">

Configure transparent proxy mode for outgoing calls
---------------------------------------------------

Transparent proxy mode for outgoing calls must be enabled at the level of a connection filter in a policy. To enable transparent proxy mode for outbound calls, perform the following steps:

1.  Ensure that your policy contains a connection filter (for example, **Connect to URL**
    or **Connection**, available from the **Routing**
    category in the filter palette).
2.  In your connection filter, select the **Settings**
    tab and expand the **Proxy** section.
3.  Select the check box labeled **Transparent Proxy (present client's IP address to server)**. When selected, the IP address of the original client connection that caused the policy to be invoked is used as the local address of the TCP connection to the destination server.

For more details on configuring connection filters, see
[Connection](/csh?context=503&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
and
[Connect to URL](/csh?context=502&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

</div>

<div id="p_common_transparent_proxy_example_config">

Transparent proxy example
-------------------------

A typical configuration example of transparent proxy mode is shown as follows:

![Transparent proxy example](/Images/docbook/images/transparent_proxy/transparent_proxy_example.png)

In this example, the remote client’s address is `172.16.0.99`, and it is attempting to connect to the server at `10.0.0.99`
on port `80`. The front-facing firewall is configured to route traffic for `10.0.0.99`
through the API Gateway at address `192.168.0.9`. The server is configured to use the API Gateway at address `10.0.0.1`
as its default IP router.

The API Gateway is multihomed, and sits on both the `192.168.0.0/24`
and `10.0.0.0/24`
networks. In the Configure HTTP Interface
dialog, the API Gateway is configured with a listening address of `10.0.0.99`
and port of `80`
on the **Network**
tab, and with transparent proxy mode enabled on the **Advanced**
tab. For example:

![Configure HTTP interface](/Images/docbook/images/transparent_proxy/configure_http_interface.png)

The API Gateway accepts the incoming call from the client, and processes it locally. However, there is no communication with the server yet. The API Gateway can process the call to completion and respond to the client—it is masquerading as the server.

If the API Gateway invokes a connection filter when processing this call (with transparent proxying enabled), the connection filter consults the originating address of the client, and binds the local address of the new outbound connection to that address before connecting. The server then sees the incoming call on the API Gateway originating from the client (`172.16.0.99`), rather than either of the API Gateway's IP addresses.

The following dialog shows the example configuration for the **Connect to URL**
filter:

![Configure connection](/Images/docbook/images/transparent_proxy/configure_connect_to_url.png)

The result is a transparent proxy, where the client sees itself as connecting directly to the server, and the server sees an incoming call directly from the client. The API Gateway processes two separate TCP connections, one to the client, one to the server, with both masquerading as the other on each connection.

{{< alert title="Note" color="primary" >}}Either side of the transparent proxy is optional. By configuring the appropriate settings for the incoming interface or the connection filter, you can masquerade only to the server, or only to the client. {{< /alert >}}

</div>
