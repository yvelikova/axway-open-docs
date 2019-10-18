{
"title": "Traffic monitoring settings",
"linkTitle": "Traffic monitoring settings",
"date": "2019-10-14",
"description": "The **Traffic Monitor**\\nsettings enable you to configure the traffic monitoring available in the web-based API Gateway Manager tool. For example, you can configure where the data is stored and what message transaction details are recorded in the message traffic log."
}
﻿

The **Traffic Monitor**
settings enable you to configure the traffic monitoring available in the web-based API Gateway Manager tool. For example, you can configure where the data is stored and what message transaction details are recorded in the message traffic log.

To access the **Traffic Monitor**
settings, click the **Server Settings**
node in the Policy Studio tree, and click **Monitoring**
> **Traffic Monitor**. To confirm updates to these settings, click **Save**
at the bottom right of the screen.

To access traffic monitoring in API Gateway Manager, go to `http://localhost:8090`, and click the **Traffic**
button in the toolbar.

Configuration
-------------

You can configure the following **Traffic Monitor**
settings:

**Enable Traffic Monitor**:\

Select whether to enable the web-based traffic monitoring in in API Gateway Manager. This is enabled by default.

**Transaction Store Location Settings**:\

Enter the **Transaction Directory**
that stores the traffic monitoring data files and database. You must enter either an absolute path, or a path relative to the API Gateway instance directory, which is the location where the server instance runs. For example:\

``` {space="preserve"}
INSTALL_DIR/apigateway/groups/GROUP/INSTANCE
```

The **Transaction Directory**
defaults to `conf/opsdb.d`. If this directory or the database does not exist when the API Gateway starts up, they are recreated automatically.

**Persistence Settings**:\

You can configure the following data persistence settings:

|                                           |                                                                                                                                                            |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Record inbound transactions**           | Select whether to record inbound message transactions received by the API Gateway. This is enabled by default.                                             |
| **Record outbound transactions**          | Select whether to record outbound message transactions sent from the API Gateway to remote hosts. This is enabled by default.                              |
| **Record policy path**                    | Select whether to record the policy path for the message transaction, which shows the filters that the message passes through. This is enabled by default. |
| **Record trace**                          | Select whether to record the trace output for the message transaction. This is enabled by default.                                                         |
| **Record sent data for transactions**     | Select whether to record the sent payload data for the message transaction. This is enabled by default.                                                    |
| **Record received data for transactions** | Select whether to record the received payload data for the message transaction. This is enabled by default.                                                |

{{< alert title="Note" color="primary" >}}These settings are global for all traffic passing through the API Gateway. You can override these persistence settings at the port level when configuring an HTTP or HTTPS interface. For more details, see
[Configure HTTP services](/csh?context=610&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.\
Details of inbound and outbound transactions are also written to the transaction event log. If recording of inbound or outbound transactions is disabled in **Traffic Monitor**
settings, transaction data will not be written to the event log. For more details, see [*Transaction event log settings* on page 1](log_event_settings.htm). {{< /alert >}}

**Transaction File Management Settings**:\
You can use the following settings to configure transaction file management.

|                                                                 |                                                                                                                                                                                                                                              |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Maximum transaction file size**                               | Enter the maximum size of the transaction file, and select the units from the list. The default value is 8 MiB. When this limit is reached, a new file is created.                                                                           |
| **Create new transaction file every day**                       | Select the check box to force creation of a new transaction file every day at midnight, even if the maximum file size was not exceeded.                                                                                                      |
| **Maximum number of transaction files**                         | Enter the maximum number of transaction files to store on disk. The default value is 128. When this limit is reached, old files that have no open transactions are purged.                                                                   
  The number of transaction files might be exceeded if the oldest file still has open transactions.                                                                                                                                             |
| **Number of days after which transaction files will be purged** | Enter the maximum number of days after which transaction files are purged. Files older than the specified number of days (based on their modification date) are purged. You can use a value of 0 to disable purging. The default value is 0. |


