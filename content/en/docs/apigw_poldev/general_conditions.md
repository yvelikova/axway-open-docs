{
"title": "Configure conditions for HTTP interfaces",
"linkTitle": "Configure conditions for HTTP interfaces",
"date": "2019-10-17",
"description": "In certain cases, it may be desirable to pull down the HTTP interface that accepts traffic for the API Gateway. For example, if the back-end web service is unavailable or if the physical interface on the machine loses connectivity to the network, it is possible to shut down the HTTP interface so that it stops accepting requests. "
}
﻿
<div id="p_general_conditions_overview">

Overview
--------

In certain cases, it may be desirable to pull down the HTTP interface that accepts traffic for the API Gateway. For example, if the back-end web service is unavailable or if the physical interface on the machine loses connectivity to the network, it is possible to shut down the HTTP interface so that it stops accepting requests.

A typical scenario where this functionality proves useful is as follows:

-   A load balancer sits in front of several running instances of the API Gateway and round-robins requests between them all.
-   A client sends SSL requests through the load balancer, which forwards them opaquely to one of the API Gateway instances.
-   The API Gateway terminates the SSL connection, processes the message with the configured policy, and forwards the request onto the back-end web service.

In this deployment scenario, the load balancer does not want to keep sending requests to an instance of the API Gateway if it has either lost connectivity to the network or if the back-end web service is unavailable. If either of these *conditions*
hold, the load balancer should stop attempting to route requests through this instance of the API Gateway and use the other instances instead.

So then, how can the load balancer determine the availability of the web service and also the connectivity of the machine hosting the API Gateway to the network on which the web service resides? Given that the request from the client to the API Gateway is over SSL, the load balancer has no way of decrypting the encrypted SSL data to determine whether or not a SOAP Fault, for example, has been returned from the API Gateway to indicate a connection failure.

The solution is to configure certain *conditions*
for each HTTP interface, which must hold for the HTTP interface to remain available and accept requests. If any of the associated conditions fail, the interface is brought down and does not accept any more requests until the failed condition becomes true and the HTTP interface is restarted.

When the load balancer receives a connection failure from the API Gateway (which it does when the HTTP interface is down) it stops sending requests to this API Gateway and chooses to round-robin requests amongst the other instances instead.

The following conditions can be configured on the HTTP interface:

-   Requires Endpoint:\
    The HTTP interface remains up only if the remote host is available. The remote host is polled periodically to determine availability so that the HTTP interface can be brought back up automatically when the Remote Host becomes available again.
-   Requires Link:\
    The HTTP interface remains up only if a named physical interface has connectivity to the network. As soon as a down physical interface regains connectivity, the HTTP interface automatically comes back up again.

You can configure conditions for an HTTP interface using the HTTP interface **Ports** node (for example, `*:8080`) under the API Gateway instance in the Policy Studio tree. For example, this is available under **Environment Configuration** > **Listeners** > **API Gateway**.

Right click the HTTP interface in the right pane, and select **Add Condition**
menu option, and then either the **Requires Endpoint**
or **Requires Link**
option depending on your requirements. The sections below describe how to configure these conditions.

</div>

<div id="p_general_conditions_endpoint">

Configure Requires Endpoint condition
-------------------------------------

A **Requires Endpoint**
condition can be configured in cases where you only want to keep the HTTP interface up if the back-end web service (the Remote Host) is available. An HTTP Watchdog can be configured for the Remote Host, which is then responsible for polling the Remote Host periodically to ensure that the web service is available. See *Configure remote host settings* on page 1
and *Configure HTTP watchdog* on page 1
for more information.

**Remote Host**:\
The HTTP interface shuts down if the Remote Host selected here is deemed to be unavailable. The Remote Host can be continuously polled so that the interface can be brought up again when the Remote Host becomes available again.

</div>

<div id="p_general_conditions_link">

Configure Requires Link condition
---------------------------------

The **Requires Link**
condition is used to bring down the HTTP interface if a named physical network interface is no longer connected to the network. For example, if the cable is removed from the Ethernet switch, the dependent HTTP interface is brought down immediately. The HTTP interface only starts listening again when the physical interface is connected to the network again (when the Ethernet cable is plugged back in).

{{< alert title="Note" color="primary" >}}The **Requires Link**
condition is only available on Linux platforms.{{< /alert >}}
**Interface Name**:\
The HTTP interface is brought down if the physical network interface named here is no longer connected to the network. On UNIX platforms, physical network interfaces are usually named `eth0`, `eth1`, and so on.

</div>
