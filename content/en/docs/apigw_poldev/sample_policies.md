{
"title": "Configure the sample policies",
"linkTitle": "Configure the sample policies",
"date": "2019-10-17",
"description": "This topic introduces and explains how to set up the example policies available in the `samples`\\ndirectory of your API Gateway installation. These include the following:"
}
﻿
<div id="p_sample_policies_overview">

Overview
--------

This topic introduces and explains how to set up the example policies available in the `samples`
directory of your API Gateway installation. These include the following:

-   **Conversion**: exposes a SOAP service over REST.
-   **Security**:\
    -   Verifies the digital signature on the request and creates a signature on the response.
    -   Decrypts the request and encrypts part of the response.

    >
-   **Throttling**: limits the number of calls for a service.
-   **Virtualized Service**: combines threat protection, content-based routing (target a server according to request contents), and message transformation.

{{< alert title="Tip" color="primary" >}}If you are new to the API Gateway, you should first read the following to get familiar with the main concepts and basic steps:{{< /alert >}}
<div class="indentTable">

-   *[API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5)*
-   [*Policy development with* on page 1](gs_concepts.htm)
-   [*Start the tools* on page 1](../CommonTopics/gs_getting_started.htm)

</div>

This guide assumes that you have already installed and started the API Gateway and Policy Studio. The API Tester client GUI testing tool is optional.

</div>

<div id="p_sample_policies_enable_port">

Enable the sample services interface
------------------------------------

The HTTP interface for the sample policy services is disabled by default. To enable this interface in Policy Studio, perform the following steps:

1.  In the navigation tree, select **Environment Configuration** > **Listeners** > **API Gateway** > **Sample Services** > **Ports**.
2.  In the **Interfaces** pane on the right, select **\*:\${env.PORT\_SAMPLE\_SERVICES}**.
3.  Right-click, and select **Edit**
    to display the Configure HTTP Interface
    dialog.
4.  Select the **Enable interface**
    setting.
5.  Click **OK**.

![Configure HTTP Interface](/Images/docbook/images/samples/enable_interface.png)

Alternatively, you can also enable this HTTP interface using the web-based API Gateway Manager tool running on `http://HOST:8090`, where `HOST`
is the machine on which the Node Manager is running.

1.  Click the **Settings**
    button in the API Gateway Manager toolbar.
2.  Select the HTTP interface node under **Sample Services**
    on the left.
3.  Select the **Interface Enabled**
    setting on the right.
4.  Click the **Apply**
    button.

{{< alert title="Note" color="primary" >}}Settings made in the web-based API Gateway Manager tool are dynamic settings only, which are not persisted.{{< /alert >}}

</div>

<div id="p_sample_policies_set_port">

Configure a different sample services interface
-----------------------------------------------

All sample policy services are defined in an HTTP services group named `Sample Services`. This group uses an HTTP interface running on the port specified in the `${env.PORT_SAMPLE_SERVICES}`
environment variable. This external environment variable is set to `8081`
by default. To use a different port, you must configure this variable in the `INSTALL_DIR/conf/envSettings.props`
file. For example, you could add the following entry:

    env.PORT.SAMPLE.SERVICES=8082

For more details on setting external environment variables for API Gateway instances, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
.

</div>

<div id="p_sample_policies_stockquote">

StockQuote demo service
-----------------------

All sample policies use a demo service named `StockQuote`, which is implemented using a set of policies. This service exposes two operations:

-   **getPrice**: the policy for this operation uses a sample script to randomly calculate a quote value. Each call to `getPrice()`
    returns a different value.
-   **update**: returns an `Accepted`
    HTTP code (202).

The `StockQuote`
service is exposed on the following relative paths:

-   `/stockquote/instance1`
-   `/stockquote/instance2`

These relative paths are used in the virtualized service sample for content-based routing.

A **Connect to URL**
filter with the following URL is used to invoke the `StockQuote`
service from each of the sample policies:

    http://stockquote.com/stockquote/instance1

The first part of this URL uses a *remote host*
definition of `stockquote.com`. Remote hosts are logical names that decouple the host name in a URL from the server (or group of servers) that handles the request.

</div>

<div id="p_sample_policies_remote_host">

Remote host settings
--------------------

In Policy Studio, the remote host configuration is displayed under the API Gateway instance name (`API Gateway`) in the navigation tree, and is named `stockquote.com:80`. To view the remote host configuration, select **Environment Configuration** > **Listeners** > **StockQuote Host** and click **Edit**:

![Remote Host Settings](/Images/docbook/images/samples/remote_host_settings.png)

On the **General**
tab, the remote host is set to:

-   Use HTTP 1.1.
-   Use port `80`
    by default.
-   Include the `ContentLength`
    header in the request to the back-end server.
-   In case of an SSL connection, verify the Distinguished Name (DN) in the certificate presented by the server against the server’s host name.

On the **Addresses and Load Balancing**
tab, the remote host is set to send requests to `localhost:${env.PORT_SAMPLE_SERVICES}`, which resolves to `localhost:8081`
by default. You could also specify several servers in the **Addresses to use instead of DNS lookup**
list, and the API Gateway would load balance the requests across servers in the same group using the specified algorithm.

![Remote Host Address Settings](/Images/docbook/images/samples/remote_host_address_settings.png)

For more details on these settings, see [*Configure remote host settings* on page 1](general_remote_hosts.htm).

</div>
