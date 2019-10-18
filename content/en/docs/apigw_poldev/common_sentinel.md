{
"title": "Configure Sentinel servers",
"linkTitle": "Configure Sentinel servers",
"date": "2019-10-17",
"description": "Axway Sentinel is a Business Activity Monitoring (BAM) product that collects, aggregates, correlates, and reports events from API Gateway and other Axway products, applications, and systems throughout your infrastructure. Sentinel is a separate product that you can buy from Axway or an authorized partner. This topic describes how you can configure API Gateway to send events to Axway Sentinel server. "
}
﻿
<div id="p_common_sentinel_over">

Sentinel server overview
------------------------

Axway Sentinel is a Business Activity Monitoring (BAM) product that collects, aggregates, correlates, and reports events from API Gateway and other Axway products, applications, and systems throughout your infrastructure. Sentinel is a separate product that you can buy from Axway or an authorized partner. This topic describes how you can configure API Gateway to send events to Axway Sentinel server.

{{< alert title="Note" color="primary" >}}A complete documentation set for Axway Sentinel is available on the Axway Support website: [https://support.axway.com](https://support.axway.com/).{{< /alert >}}
To add a new Sentinel server connection, in the Policy Studio tree, under the **Environment Configuration** > **External Connections**
node, right-click the **Sentinel Servers**
node, and select **Add a Sentinel Server**.

</div>

<div id="p_common_sentinel_config">

General settings
----------------

You can configure the following general settings for the Sentinel server:

**Name**:\
Enter a suitable name for this Sentinel server.

**Host**:\
Enter the host name (FQDN) or IP address of the Sentinel server.

**Port**:\
Enter the port number that the Sentinel server is listening for events on.

**Use overflow file**:\
Select this option to use an overflow file to store API Gateway event data when there is no connection between API Gateway and Sentinel.

**Name**:\
Enter a suitable name for the overflow file.

**Size (MB)**:\
Enter the maximum size of the overflow file.

**Encoding**:\
Enter the encoding type to use. The default is `utf-8`.

**User agent settings**:\
By default API Gateway registers events against the API Gateway's name in the topology. To use another name, select the **Or the following name**
option and enter an alternative name to use.

By default API Gateway registers events against the host name of the machine running the API Gateway. To use another host name, select the **Or the following name**
option and enter an alternative host name to use.

</div>

<div id="p_common_sentinel_info">

Further information
-------------------

For more detailed information, see the
[API Gateway Sentinel Interoperability Guide](/bundle/APIGateway_77_Sentinel_InteropGuide_allOS_en_HTML5)
.

</div>
