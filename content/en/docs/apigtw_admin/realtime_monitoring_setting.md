{
"title": "Real-time monitoring metrics",
"linkTitle": "Real-time monitoring metrics",
"date": "2019-10-14",
"description": "You can configure real-time monitoring metrics for an API Gateway instance. For example, this enables you to specify monitoring of messages at the level of API services, methods,clients, and remote hosts. This is important when managing APIs because of requirements to bill clients for their API usage. "
}
﻿

You can configure real-time monitoring metrics for an API Gateway instance. For example, this enables you to specify monitoring of messages at the level of API services, methods,clients, and remote hosts. This is important when managing APIs because of requirements to bill clients for their API usage.

When real-time monitoring is enabled, monitoring data is stored in API Gateway memory and displayed in the API Gateway Manager web console. API Gateway Manager uses the configured real-time monitoring metrics to display graphical reports in its **Dashboard**
and **Monitoring**
views. For more details on viewing real-time metrics, see [*Monitor services in* on page 1](monitor_service.htm).

To configure real-time monitoring settings in the Policy Studio tree, select the **Server Settings**
node, and click **Monitoring**
> **Real Time Monitoring**.

Enable monitoring
-----------------

Configure the following general settings:

**Enable real-time monitoring**:\
This enables real-time monitoring globally for the API Gateway instance in the API Gateway Manager web console. This setting must be enabled to display monitoring data in the **Dashboard**
and **Monitoring**
views in API Gateway Manager, and is selected by default. To disable real-time monitoring, deselect this setting.

**System metrics update frequency (secs)**:\
Specifies how often in seconds that system metrics are measured (for example, CPU, disk space, and memory usage). Defaults to `3`
seconds.

Configure real-time metrics
---------------------------

Configure the following settings in the **Real Time Monitoring Limits**
section:

{{< alert title="Note" color="primary" >}}Real-time monitoring may have a negative impact on API Gateway performance. To optimize performance, disable monitoring for one or more metrics.{{< /alert >}}

<div class="indentTable">

You should set the maximum services, methods, and remote hosts to values that will never be reached in normal operation. These settings protect the API Gateway by setting an upper limit on the amount of memory consumed by real-time monitoring.

</div>

**Service**:\
Enables real-time monitoring of metrics data on the **API Services**
tab. This is enabled by default.

**Maximum Services**:\
Specifies the maximum number of API services that are monitored by the API Gateway. When the maximum is reached, the API Gateway stops collecting metrics for new services. Defaults to `10000`.

**Method**:\
Enables real-time monitoring of metrics data on the **API Methods**
tab. This is enabled by default.

{{< alert title="Note" color="primary" >}}To enable method monitoring, you must ensure that service monitoring is also enabled. Disabling service monitoring also disables method monitoring. {{< /alert >}}

**Maximum Methods**:\
Specifies the maximum number of API methods that are monitored by the API Gateway. When the maximum is reached, the API Gateway stops collecting metrics for new methods. Defaults to `100000`.

**Remote Host**:\
Enables real-time monitoring of metrics data on the **Remote Hosts**
tab. This is enabled by default. For more details on remote hosts, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Maximum Remote Hosts**:\
Specifies the maximum number of remote hosts that are monitored by the API Gateway. When the maximum is reached, the API Gateway stops collecting metrics for new remote hosts. Defaults to `10000`.

**Client**:\
Enables real-time monitoring of metrics data on the **Clients**
tab. This is enabled by default.

**Maximum Clients**:\
Specifies the maximum number of clients that are monitored by the API Gateway. When the maximum is reached, the API Gateway stops collecting metrics for new clients. Defaults to `10000`.

{{< alert title="Note" color="primary" >}}The number of unique clients that communicate with an API Gateway is potentially unbounded. The maximum number of clients is therefore a soft limit. When this is reached, monitoring stops for the oldest client and begins for the newest client instead. {{< /alert >}}

<div class="indentTable">

For the other maximum values (services, methods, and remote hosts), exceptions are thrown and logged when the limits are reached.

</div>

To confirm updates to these settings, click **Save**
at the bottom right of the window. Click **Deploy**
in the toolbar to deploy the updated configuration to the API Gateway.

{{< alert title="Note" color="primary" >}}

You must restart the API Gateway instance after changing any of the maximum values (for example, **Maximum Services**, **Maximum Methods**, **Maximum Clients**, or **Maximum Remote Hosts**).

{{< /alert >}}
