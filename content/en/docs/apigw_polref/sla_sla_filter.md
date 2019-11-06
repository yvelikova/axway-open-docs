{
"title": "Service level agreement",
"linkTitle": "Service level agreement",
"date": "2019-10-17",
"description": "A service level agreement (SLA) is an agreement put in place between a web services host and a client of that web service in order to guarantee a certain minimum quality of service. It is common to see SLAs in place to ensure that a minimum number of messages result in a communications failure and that responses are received within an acceptable time frame. In cases where the conditions of the SLA are breached, it is crucial that an alert can be sent to the appropriate party."
}
﻿
<div id="p_sla_sla_filter_over">

Overview
--------

A service level agreement (SLA) is an agreement put in place between a web services host and a client of that web service in order to guarantee a certain minimum quality of service. It is common to see SLAs in place to ensure that a minimum number of messages result in a communications failure and that responses are received within an acceptable time frame. In cases where the conditions of the SLA are breached, it is crucial that an alert can be sent to the appropriate party.

When one of the specified thresholds is breached, an alert is sent to a configured alert destination to ensure that interested parties are notified promptly of the SLA breach. For more details on configuring system alerts, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

API Gateway satisfies these requirements by allowing SLAs to be configured at the policy level. You can configure SLAs to monitor the following types of problems:

-   Response times
-   HTTP status codes returned from the web service
-   Communication failures

The SLA monitoring performed by API Gateway is *statistical*. Because of this, a single message (or even a small number of messages) is not considered a sufficient sample to cause an alert to be triggered. The monitoring engine actually uses an *exponential decay*
algorithm to determine whether an SLA is failing or not. This algorithm is best explained with an example.

### Example SLA

Assume the *poll rate*
is set to 3 seconds (3000 ms), the *data age*
is set to 6 seconds (6000 ms), and you have a web service with an average processing time of 100 ms. A single client sending a stream of requests through API Gateway can generate about 10 requests per second, given the web service's 100 ms response time.

At every 3 seconds poll period you have data from a previous 30 samples to consider the average response times of. However, rather than simply using the response time of the *last*
3 seconds worth of data, historical data is "smoothed" into the current estimate of the failing percentage. The new data is combined with the existing data such that it will take approximately the data age time for a sample to disappear from the average.

Therefore the closer the data age is to the sampling rate, the less significant historical data becomes, and the more significant the "last" sample becomes.

To generate an alert, you must also have enough significant samples at each poll period to consider the date to be statistically valid. For example, if a single request arrives over a period of 1 hour it might not be fair to say that "less than 20%" of all received requests have failed the response time requirements. For this reason, statistical analysis provides a more realistic SLA monitoring mechanism than a solution based purely on absolute metrics.

</div>

<div id="p_sla_sla_filter_">

Response time requirements
--------------------------

You can monitor the response times of web services protected by the **SLA Filter**. This filter provides different ways of measuring response times:

| Response Time Measurement  | Description                                                                                |
|----------------------------|--------------------------------------------------------------------------------------------|
| **receive-request-start**  | The time that the API Gateway receives the first byte of the request from the client.      |
| **receive-request-end**    | The time that the API Gateway receives the last byte of the request from the client.       |
| **send-request-start**     | The time that the API Gateway sends the first byte of the request to the web service.      |
| **send-request-end**       | The time that the API Gateway sends the last byte of the request to the web service        |
| **receive-response-start** | The time that the API Gateway receives the first byte of the response from the web service |
| **receive-response-end**   | The time that the API Gateway receives the last byte of the response from the web service. |
| **send-response-start**    | The time that the API Gateway sends the first byte of the response to the client.          |
| **send-response-end**      | The time that the API Gateway sends the last byte of the response to the client.           |

API Gateway measures each of the 8 time values. They are available for processing after the policy has completed for a single request. These 8 options are available for the following reasons:

-   API Gateway might start to send the first byte to the web service before the last byte is received from the client (send-request-start <receive-request-end). This occurs if the invoked policy does not require the full message to be read into memory.
-   API Gateway might start to send the response to the client before the complete response has been received from the web service (send-response-start < receive-response-end). This occurs when invoked policy does not require the full message to be read into memory.
-   It is possible that the web service might start to send the response before it has received the complete request. However, API Gateway does not start to read the response until it has sent the complete request. This means that the following is always true: send-request-end < receive-response-start.
-   The time value for send-response-end depends upon the client application. This value is larger if the client is slow to read the response.

To add a response time requirement for an SLA, click **Add**.

To configure the start time and end time for the response time measurement, click **Add**. On the **Settings**
tab, specify the percentage of response times that must be below a specified time interval (in milliseconds) in the fields provided. The purpose of these options is to allow for situations where a very small number of unusually slow requests might cause an SLA to trigger unnecessarily. By using percentages, such requests do not distort the statistics collected by API Gateway.

Click the **Message Text**
tab to configure the messages to appear in the alert message when the SLA is breached and also when the SLA is cleared, that is, when the breached conditions are no longer in breach of the SLA.

Finally, click the **Advanced**
tab to configure timing information. Select a **Start Timing Point**
from the 8 times listed in the table above. API Gateway *starts*
measuring the response time from this time. Then select an **End Timing Point**
from the 8 times listed in the table above. API Gateway *stops*
measuring the response time from this time.

</div>

<div id="p_sla_sla_filter_http_status">

HTTP status requirements
------------------------

HTTP status codes might be received from a web service. API Gateway can be configured to monitor these and generate alerts based on the number of occurrences of certain types of status code response. HTTP status codes are three digit codes that can be grouped into standard status classes, with the first digit indicating the status class.

The status classes are as follows:

| HTTP Status Code Class | Description                                                                                                                                                                                         |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1xx**                | These status codes indicate a provisional response.                                                                                                                                                 |
| **2xx**                | These status codes indicate that the client's request was successfully received, understood, and accepted.                                                                                          |
| **3xx**                | These status codes indicate that further action needs to be taken by the user agent in order to fulfill the request.                                                                                |
| **4xx**                | These status codes are intended for cases in which the client seems to have erred. For example 401, means that authentication has failed.                                                           |
| **5xx**                | These status codes are intended for cases where the server has encountered an unexpected condition that prevented it from fulfilling the request. For example, 500 is used to transmit SOAP faults. |

API Gateway might monitor a class (that is, range) of status codes, or it might monitor specific status codes. For example, it is possible to configure the following HTTP status code requirements:

-   At least 97% of the requests must yield HTTP status codes between 200 and 299
-   At most 2% of requests can yield HTTP status codes between 400 and 499
-   At most 0% of requests can yield HTTP status code 500

Click **Add**
in the **HTTP Status Code Requirements**
section.

Select an existing status code or class of status codes from the **HTTP Status Code**
field. To add a new code or range of codes, click **Add**.

Enter a name for the new code or range of codes in the **Name**
field of the **Configure HTTP Status Code**
dialog. Enter the *first*
HTTP status code in the range of status codes that you want to monitor in the **Start Status**
field. Then enter the *last*
HTTP status code in the range of status codes that you want to monitor in the **End Status**
field.

To monitor just one specific status code, enter the same code in the **Start Status**
and **End Status**
fields.

Click **OK**
when you are satisfied with the selected range of status codes to return to the previous dialog. The remaining 2 fields allow the administrator to specify the minimum or maximum percentage of received HTTP status codes that fall into the configured range before an alert is triggered.

Again, the use of percentages here is to allow for situations where a very small number of requests return the status codes within the "forbidden" range. By using percentages, such requests do not distort the statistics collected by API Gateway.

Click the **Message Text**
tab to configure the messages to appear in the alert message when the SLA is breached and also when the SLA is cleared, (when the breached conditions are no longer in breach of the SLA).

</div>

<div id="p_sla_sla_filter_commns_failure">

Communications failure requirements
-----------------------------------

API Gateway is deemed to have experienced a *communications failure*
when it fails to connect to the web service, fails to send the request, or fails to receive the response.

The requirements for communications failures can be expressed as follows:

-   No more than 4% of requests can result in communications failures.

Enter the percentage of allowable communications failures in the field provided. An alert is configured if the percentage of communicates failures rises above this level.

Click the **Message Text**
tab to configure the messages to appear in the alert message when the SLA is breached and also when the SLA is cleared (when the breached conditions are no longer in breach of the SLA).

</div>

<div id="p_sla_sla_filter_alert_system">

Select alerting system
----------------------

If an alert is triggered, it must be sent to an alerting destination. API Gateway can send alerts to the following destinations:

-   Windows Event Log
-   Email Recipient
-   SNMP Network Management System
-   Local Syslog
-   Remote Syslog
-   CheckPoint FireWall-1 (OPSEC)
-   Twitter

The **Select Alerting System**
table at the bottom of the window displays all available alerting destinations that have been configured. You can click **Add**
to configure an alert destination. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Select one or more alerting systems in the table. An alert is sent to each selected system in the event of a violation of the performance requirements. Alert clearances will be generated when the violation no longer exists.

</div>
