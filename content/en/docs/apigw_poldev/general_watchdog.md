{
"title": "Configure HTTP watchdog",
"linkTitle": "Configure HTTP watchdog",
"date": "2019-10-17",
"description": "An HTTP Watchdog can be added to a Remote Host configuration in order to periodically poll the Remote Host to check its availability. For example, if the Remote Host becomes unavailable for some reason, an HTTP interface can be brought down and can stop accepting requests. Once the Remote Host comes back online, the HTTP interface automatically starts up and starts accepting requests again."
}
﻿
<div id="p_general_watchdog_overview">

Overview
--------

An HTTP Watchdog can be added to a Remote Host configuration in order to periodically poll the Remote Host to check its availability. For example, if the Remote Host becomes unavailable for some reason, an HTTP interface can be brought down and can stop accepting requests. Once the Remote Host comes back online, the HTTP interface automatically starts up and starts accepting requests again.

To learn more about the reasons for shutting down an HTTP interface if certain *conditions*
do not hold, see [*Configure conditions for HTTP interfaces* on page 1](general_conditions.htm).

To configure an HTTP Watchdog, right-click a previously configured Remote Host in the Policy Studio tree (for example, under **Environment Configuration** > **Listeners** > **API Gateway**). Then select **Watchdog**
> **Add**, and configure the settings in the dialog.

</div>

<div id="p_general_watchdog_conf">

Configuration
-------------

Configure the following settings:

**Valid HTTP Response Code Ranges**:\
You can use this section to specify the HTTP response codes that you can regard as proof that the Remote Host is available. For example, if a 200 OK HTTP response is received for the poll request, the Remote Host can be considered available.

To specify a range of HTTP status codes, click the **Add**
button and enter the **Start**
and **End**
of the range of HTTP response codes in the fields provided. An exact response code can be specified by entering the response code in both fields (for example, `200`).

**HTTP Request for Polling**:\
The fields in this section enable you to configure the type and URI of the HTTP request to poll the Remote Host with. The default is the *Options*
HTTP command with a URI of `*`, which is typically used to retrieve status information about the HTTP server. To use an alternative HTTP request to poll the Remote Host, select an HTTP request method from the **Method**, and specify the **URI**
field.

**Remote Host Polling**:\
The settings in this section determine when and how the HTTP Watchdog polls the Remote Host. The **Poll Frequency**
determines how often the Watchdog is to send the polling request to the Remote Host.

By default, the Watchdog uses real HTTP requests to the Remote Host to determine its availability. In other words, if the API Gateway is sending a batch of requests to the Remote Host, it uses the response codes from these requests to decide whether or not the Remote Host is up. Therefore, the Watchdog effectively "polls" the Remote Host by sending real HTTP requests to it.

To configure the Watchdog to send poll requests during periods when it is not sending requests to and receiving responses from the Remote Host, select **Poll if up**. In this case, the Watchdog uses real HTTP requests to poll the Remote Host as long as it sends them, but starts sending test poll requests when it is not sending HTTP requests to the Remote Host to test its availability.

{{< alert title="Note" color="primary" >}}When a Remote Host is deemed to be down (an invalid HTTP response code was received) the Watchdog continues to poll it at the configured **Poll Frequency**
until it comes back up again (until a valid HTTP response code is received).{{< /alert >}}

</div>
