{
"title": "Transaction event log settings",
"linkTitle": "Transaction event log settings",
"date": "2019-10-14",
"description": "The **Transaction Event Log**\\nprovides a summary of each API Gateway message transaction, which is written to a log file, and used to generate metrics for historic traffic (for example, in API Gateway Analytics or the **Monitoring**\\nview in ). In a distributed system with multiple API Gateway instances running, the events data is written to separate transaction event log files for each API Gateway instance."
}
﻿

The **Transaction Event Log** provides a summary of each gateway message transaction, which is written to a log file, and used to generate metrics for historic traffic (for example, in API Gateway Analytics or the **Monitoring** view in API Manager). In a distributed system with multiple gateway instances running, the events data is written to separate transaction event log files for each API Gateway instance.

The event log file data is processed by the local Node Manager every 5 minutes, aggregated into the appropriate metrics data, and then written to a database. API Manager can use the data from the database to display metrics in the system. Event log file data is written in JSON format, which also enables it to be integrated with third-party logging tools such as Splunk.

{{< alert title="Note" color="primary" >}}
Node Manager processing of event log data is not enabled by default. You must enable the Node Manager to write metrics to the database. For more details, see [Configure API Gateway with a metrics database](/docs/apigtw_admin/monitor_service#configure-api-gateway-with-the-metrics-database).
{{< /alert >}}

### Transaction event log formats

Event log files are located in the `events` directory of your API Gateway installation by default. For example:

```
INSTALL-DIR/apigateway/events/group-2_instance-1.log
```

When each event log file has been processed (every 5 minutes), it can be moved to a `processed` directory. For example:

```
INSTALL-DIR/apigateway/events/processed
```

By default, files are deleted after being processed.

Entries in the transaction event log file are generated for different event types (for example, `header`, `system`, `transaction`, `alert`, and `custom`).

**Event log header entries**:

Event log `header` entries contain details about the creation of the log file. For example, this includes when the log file is created, and on which host, domain, group, instance, and so on.

The fields in the header entries include the following:

| Field           | Description                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------|
| type            | `header`. Entries of type header identify the API Gateway group and instance, one record per log file.  |
| logCreationTime | Time the event log file was created.                                                         |
| hostname        | Name of the host the API Gateway process is running on.                                      |
| domainId        | Topology ID of the API Gateway system.                                                       |
| groupId         | API Gateway group ID.                                                                        |
| groupName       | API Gateway group name.                                                                      |
| serviceId       | API Gateway instance ID.                                                                     |
| serviceName     | API Gateway instance name.                                                                   |
| version         | API Gateway version.                                                                         |

The following example shows the JSON format used for `header` events:

```
{
   "type":"header",
   "logCreationTime":"2015-01-23 12:25:00.120",
   "hostname":"user1-PC",
   "domainId":"cfbe55d1-be45-4968-8b4b-f06a4db858b8",
   "groupId":"group-2",
   "groupName":"QuickStart Group",
   "serviceId":"instance-1",
   "serviceName":"QuickStart Server",
   "version":"7.8"
}
...
```

**Event log system entries**:

Event log `system` entries contain details about the API Gateway system. For example, this includes details such as the amounts of disk space, memory, and CPU.

The fields in the system entries include the following:

| Field       | Description                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------|
| type        | `system`. Entries of type system contain CPU and memory information, written once every minute.    |
| time        | Timestamp of the event (in milliseconds since the epoch, taken from `System.currentTimeMillis()`). |
| diskUsed    | Percentage of disk used (disk on which the API Gateway instance is running: `$VINSTDIR`).          |
| instCpu     | Percentage of current process CPU usage (total usage divided by the number of cores).              |
| sysCpu      | Percentage of the global CPU usage on the system.                                                  |
| instMem     | Current process resident memory size (in KB).                                                      |
| sysMem      | System memory used (in KB).                                                                        |
| sysMemTotal | System total memory size (in KB).                                                                  |

The following example shows the JSON format used for `system` events:

```
{
   "type":"system",
   "time":1422015900120,
   "diskUsed":30,
   "instCpu":1,
   "sysCpu":5,
   "instMem":533436,
   "sysMem":4641996,
   "sysMemTotal":16759240
}
...
```

**Event log transaction entries**:

Event log `transaction` entries contain details about a specific message transaction. For example, this includes details such as the protocol, method, bytes sent and received, IP addresses, ports, service name, and so on.

The fields in the transaction entries include the following:

**type**:

`transaction`

Entries of type transaction describe a transaction and the transaction legs. A transaction entry is recorded for each API call.

**time**:

Timestamp of the event (in milliseconds since the epoch, taken from `System.currentTimeMillis()`).

**path**:

Resource path representing the transaction.

**protocol**:

Inbound protocol.

**protocolSrc**:

Local inbound protocol port (or path).

**duration**:

Execution time of the transaction element (in ms).

**status**:

Transaction result status.

**serviceContexts**:

OAuth, web service, and service context elements. Each service context contains the following fields:

* **monitor**: Indicates if metrics monitoring is enabled for this service.
* **client**: Identity of the client.
* **org**: Authentication organization name.
* **app**: Authentication application name.
* **method**: Protocol method used.
* **status**: Execution status of this service context.
* **duration**: Processing time of this service context.

**customMsgAtts**:

Custom message attributes that have been added to the event log (see [Configure the transaction event log](#configure-the-transaction-event-log) for details of how to configure these attributes globally).

**correlationId**:

Transaction correlation ID.

**legs**:

Legs processed during the transaction. Each leg contains the following fields:

**status**:

HTTP status code returned.

**statustext**:

HTTP status message returned.

**method**:

HTTP method used.

**Vhost**:

Virtualized API's host.

**wafStatus**:

Threat protection profile status.

**bytesSent**:

Number of bytes sent.

**bytesReceived**:

Number of bytes received.

**remoteName**:

Name representing remote host of the transaction.

**remoteAddr**:

Remote host address of transaction.

**localAddr**:

Local host of transaction.

**remotePort**:

Remote port of transaction.

**localPort**:

Local port of transaction.

**Sslsubject**:

Subject name of peer certificate used to establish SSL connection.

**leg**:

Transaction element number.

**timestamp**:

Event timestamp.

**duration**:

Execution time of the transaction element (in ms).

**serviceName**:

API Gateway instance name.

**subject**:

Authenticated user (content of attribute `authentication.subject.id`).

**operation**:

SOAP request method used.

**type**:

Protocol used.

**finalStatus**:

Status text of the transaction element execution.                      

The following example shows the JSON format used for an HTTP `transaction` event with a service context and inbound and outbound transaction legs:

```
{
   "type":"transaction",
   "time":1425291330502,
   "path":"/stockquote.asmx",
   "protocol":"http",
   "protocolSrc":"8080",
   "duration":1842,
   "status":"success",
   "serviceContexts":[
   {
      "service":"StockQuote",
      "monitor":true,
      "client":null,
      "org":null,
      "app":null,
      "method":"GetQuote",
      "status":"success",
      "duration":1824}],
   "customMsgAtts":{},
   "correlationId":"4038f4540400788ebe4f84ca",
   "legs":[
     {
        "uri":"/stockquote.asmx",
        "status":200,
        "statustext":"OK",
        "method":"POST",
        "vhost":null,
        "wafStatus":0,
        "bytesSent":1278,
        "bytesReceived":612,
        "remoteName":"127.0.0.1",
        "remoteAddr":"127.0.0.1",
        "localAddr":"127.0.0.1",
        "remotePort":"49104",
        "localPort":"8080",
        "sslsubject":null,
        "leg":0,
        "timestamp":1425291328660,
        "duration":1843,
        "serviceName":"StockQuote",
        "subject":null,
        "operation":"GetQuote",
        "type":"http",
        "finalStatus":"Pass"
     },
     {
      "uri":"/stockquote.asmx",
      "status":200,
      "statustext":"OK",
      "method":"POST",
      "vhost":null,
      "wafStatus":0,
      "bytesSent":736,
      "bytesReceived":1202,
      "remoteName":"www.webservicex.net",
      "remoteAddr":"173.201.44.188",
      "localAddr":"10.142.10.142",
      "remotePort":"80",
      "localPort":"49438",
      "sslsubject":null,
      "leg":1,
      "timestamp":1425291329916,
      "duration":566,
      "serviceName":"StockQuote",
      "subject":null,
      "operation":"GetQuote",
      "type":"http",
      "finalStatus":null
     }
   ]
}
...
```

#### Inbound and outbound transaction legs

In this example, the `legs` data is based on traffic monitoring, and its `duration` fields provide useful information. Leg `0` is always the inbound transaction, so its `duration` value is the overall transaction duration observed by API Gateway. Subsequent legs are outbound calls, so their `duration` value represents the back-end transaction duration observed by API Gateway.

* The `duration` value for leg `0` minus the sum of the duration of all subsequent legs should give you the time spent in the API Gateway for that transaction. In this example, this is 1843 ms – 566 ms = 1277 ms.

For more information about transactions and legs, see [Introduction to transactions and legs in API Gateway](/docs/apigtw_admin/admin_transactions).

The service context is an abstract concept, and the `duration` at this level measures time spent in that context only. The service context might be set in an arbitrary place in a policy, so this information is typically not as useful as the leg data—unless in composite services scenarios.

The top-level transaction `duration` is obtained separately, but should be similar to the leg `0` value.

### Event log alert entries

Event log `alert` entries contain details about a specific system alert. For example, this includes details such as the protocol, method, bytes sent and received, IP addresses, ports, service name, and so on.

The fields in the alert entries include the following:

**type**:

`alert`

Entries of type alert describe API Gateway alerts.

**time**:

Time the alert event was created.

**alertType**:

Type of the alert:

* AlertMessage
* SlaBreachAlertMessage
* SlaClearAlertMessage

**level**:

Integer representing the level of the alert:

* 1 (ERROR)
* 2 (WARNING)
* 3 (INFO)

**id**:

Unique ID of the alert record.

**srcId**:

API Gateway instance ID.

**msgId**:

ID of the message processed during the alert.

**defaultMsg**:

Custom message configured in the alert.

**clientIP**:

Client IP address in use when alert was triggered.

**policy**:

Policy name.

**filter**:

Alert filter name.

The following example shows the JSON format used for an HTTP `transaction` event with a service context and inbound and outbound transaction legs:

```
{
   "type": "alert",
   "time": 1431948768350,
   "alertType": "AlertMessage",
   "level": 1,
   "id": "6985e4fe:14d66cc3493:-8000",
   "srcId": "user1-LinuxDev1:instance-1",
   "msgId": "Id-e0cd59550500ad6f16e3ce38",
   "defaultMsg": "This is an alert",
   "clientIP": "127.0.0.1",
   "policy": "My Policy Name",
   "filter": "Alert Filter Name"
}
```

For details on `custom` event entries, see the [API Gateway Javadoc](https://support.axway.com/htmldoc/1433380). The `com.vordel.reporting.rtm.api.MetricGroup class` includes details on the Java API and the resulting metric event in the transaction event log.{{< /alert >}}

### Configure the transaction event log

To configure the transaction event log in the Policy Studio tree, select the **Server Settings** node, and click **Logging** > **Transaction Event Log**.

Configure the following fields to enable the API Gateway instance to write a transaction event log to a file:

**Writing to Transaction Event Log**:

Enables writing to an event log for all message transactions received by the API Gateway. This setting is enabled by default, and is required for API Gateway Analytics and API Manager metrics. For example, you could deselect this setting to optimize performance.

**Write transaction event logs to directory**:

Specifies the directory where transaction event logs are written. Defaults to `${environment.VDISTDIR}/events`.

* If transaction event logs are being used to populate the metrics database, you must also update the `sourceEventLogDir` property in the Node Manager configuration if you change this directory.

**System event frequency (secs)**:

Specifies how often in seconds that a system entry is written to each event log file. Defaults to `60` seconds. For more details, see [Event log system entries](#event-log-system-entries).

**Maximum disk space for event logs (MB)**:

Specifies the maximum amount of disk space used for event logs. When the directory reaches the specified limit, the oldest log files are deleted. Defaults to `1024` MB.

**Check disk space interval (secs)**:

Specifies how often the amount of available disk space used for event logs is checked. Defaults to `600` seconds.

**Select the message attributes to be stored in transaction events**:

Enables you to specify custom message attributes to write to the transaction event logs (for example, the HTTP request URI). To specify an attribute, click **Add**, and enter the attribute name in the dialog.

To confirm updates to these settings, click **Save** at the bottom right of the window. Click **Deploy** in the toolbar to deploy the updated configuration to the API Gateway.
