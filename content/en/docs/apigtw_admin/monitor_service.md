{
"title": "Monitoring and metrics",
"linkTitle": "Monitoring and metrics",
"weight":"18",
"date": "2019-10-14",
"description": "Monitor services in API Gateway Manager, configure an API Gateway and Node Manager to store metrics on historic traffic, and purge, retain, or archive data."
}

## Monitor services in API Gateway Manager

This section explains how to monitor example services using the API Gateway Manager monitoring tools. For example, real-time monitoring metrics, message traffic monitoring, and performance statistics.

{{< alert title="Note" color="primary" >}}API Gateway Manager is designed as an operational diagnostics tool only. API Gateway Analytics is recommended for monitoring and reporting of large volumes of historical data. For more details, see the [API Gateway Analytics User Guide](/bundle/APIGateway_77_AnalyticsUserGuide_allOS_en_HTML5/)
.{{< /alert >}}

### Before you start

* Ensure that the API Gateway, Admin Node Manager, and API Gateway tools are running.
* Ensure that real-time monitoring and traffic monitoring are enabled:
    1. In the Policy Studio tree, select **Server Settings > Monitoring**.
    2. To enable traffic monitoring, select **Traffic Monitor > Enable Traffic Monitor**.
    3. To enable real-time monitoring, select **Real Time Monitoring > Enable Real Time Monitoring**.

{{< alert title="Note" color="primary" >}}Enabling traffic monitoring might have a negative impact on performance. To maximize performance, disable these settings. For more details, see [*Traffic monitoring settings* on page 1](traffic_monitor_settings).{{< /alert >}}

### View real-time monitoring

You can view a wide range of monitoring data in the API Gateway Manager. For example, this includes message status, message traffic, filter execution path, message content, system, services, and remote hosts. You can view real-time traffic monitoring summary data on the main **Dashboard**
tab in the **TRAFFIC** section. The following example shows the number of messages that have been passed by the API Gateway on to a service:

![Real-time monitoring](/Images/APIGateway/rt_monitoring.gif)

Each time you send messages through the API Gateway to a service, the message status is displayed in the **TRAFFIC** section.

**View traffic monitoring**:

You can use the traffic monitoring tools in API Gateway Manager for operational diagnostics and root cause analysis. The **Traffic**
view provides a web-based message log of the HTTP, HTTPS, JMS, and FTP traffic processed by the API Gateway. You can perform tasks such as the following:

* Filter messages on a range of criteria (for example, transaction ID, service name, or remote host)
* Drill down to view message contents
* View performance statistics (for example, number of requests, average bytes sent, or average duration)

For example, you can click the **Traffic** button in the API Gateway Manager to view summary information for each message sent to the API Gateway. Alternatively, you can click one of the summary charts displayed on the **Dashboard** (for example, **Messages passed** or **Messages failed**). This displays the message traffic automatically filtered according to your selection.

The following example shows the details displayed on the **Traffic** tab for **Messages passed** by the API Gateway:

![Message monitoring](/Images/APIGateway/message_monitoring.png)

**Filter message traffic**:

In the **SELECTION** pane on the left of the **Traffic** tab, click the **Apply** button to filter the messages based on default criteria such as **REQUEST FROM**(Client or API Gateway), **MAX RESULTS PER SERVER**, **TRANSACTION STATUS**, and **TIME INTERVAL**.

Click **Add Filter** to define your own filter criteria (for example, Service Name, Remote Host, Authentication Subject, Transaction ID, and Operation).

API Gateway inserts a transaction ID in all HTTP and HTTPS traffic in a header named `X-CorrelationID`.

**Filter JMS traffic by custom property**:

To filter JMS traffic using a custom property as a filter criteria, enter the property `name` and optionally the property `value`.
Both fields are case-sensitive.

* If only a property name is provided, all transactions with the specified property are displayed.
* If a property value is provided, all transactions where `name`=`value` are displayed (for example, `MyProp`=`Value1`).

### View message content

When you click a selected message listed on the **Traffic** tab, this displays the message filter execution path and the contents of each request message and response message. The following example displays the message path for a simple Google Search message:

![Message path](/Images/APIGateway/message_path.gif)

The following example shows the corresponding message content for the selected message displayed below:

![Message content](/Images/APIGateway/message_content.gif)

Click **Save Request** or **Save Response** to download the message contents and save them to a file.

### View performance statistics

The **Performance** tab displays performance statistics for the HTTP and HTTPS traffic processed by the API Gateway. For example, these include the number of requests, average bytes sent, and average duration:

![Performance statistics](/Images/APIGateway/message_traffic_perf.gif)

### Filter performance statistics

Click the **Apply** in the left pane to filter the performance statistics displayed based on different criteria. By default, the statistics are grouped by path name, with a time interval of 1 day. You can select different criteria from the **GROUP BY** and **TIME INTERVAL** lists.

### Detect malformed messages

Messages with malformed content or an incorrect relative path are blocked by the API Gateway and displayed on the **Dashboard** tab in the **TRAFFIC** section as follows:

![Message blocked](/Images/APIGateway/blocked_message.gif)

Click the chart to display the list of blocked messages automatically filtered on the **Traffic** tab. Click a message in the list to display the filter execution path and message content. The following example shows the execution path of a malformed message that has been blocked by the API Gateway:

![Message blocked](/Images/APIGateway/blocked_message_path.gif)

{{< alert title="Note" color="primary" >}}When a blocked message has failed in API Gateway, this means that a filter executed in a policy has returned a failure status. When a blocked message generates an exception, this means that a filter executed in a policy has aborted (thrown an exception). For more details on filters and policies, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).{{< /alert >}}

### Monitor real-time metrics

The **Monitoring** view enables you to monitor successes, failures, exceptions, and real-time metrics for the following:

* **System**: Metrics for memory, disk space, and CPU.
* **API Services**: Metrics for messages and processing times.
* **API Methods**: Metrics for messages and processing times.
* **Clients**: Metrics for messages.
* **Remote Hosts**: Metrics for transactions, bytes sent and received, and response times.

For example, on the **System** tab, when you click a panel in the **ALL SYSTEMS** section at the top, a graph for the selected setting is displayed below. The following example shows the graph displayed for the **System CPU Avg (Max)** setting selected on the right:

![System data](/Images/APIGateway/system.png)

Drill down to view metrics for specific components at the bottom (for example, for a specific API Gateway group or instance, service, client, method, or remote host). You can also configure the metrics time window on the right (for example, 10 minutes, 10 hours, or 5 days).

### Configure dynamic trace, logging, and monitoring

Click the **Settings** > **Dynamic** tab to configure trace, logging, and monitoring settings on-the-fly. These are dynamic settings, which means that you do not need to refresh or deploy to the API Gateway. For example, you can specify these settings for an API Gateway system, instance, service, interface, or path. For more details, see [*Configure API Gateway logging and events* on page 1](logging.htm).

## Configure API Gateway with the metrics database

Configure a gateway instance and Node Manager to store metrics on historic traffic in a relational database used to store metrics. For example, you can configure monitoring in API Gateway Analytics or API Manager to view data stored in the metrics database, or write custom SQL queries to retrieve metrics data as required.

{{< alert title="Note" color="primary" >}}This section explains how to configure your gateway with a metrics database. It assumes that you have already created your metrics database using the steps described in [Set up the metrics database for API Gateway Analytics](metrics_db_install).{{< /alert >}}

The following data streams are used to populate the metrics database:

* **Transaction and system data**: Transaction data includes clients, services, remote hosts, and protocols. System data includes CPU, memory and disk usage, and SLA breaches. The gateway writes this data to a transaction event log, with a new log file automatically created every 5 minutes. The Node Manager parses completed event logs and updates the metrics database.
* **Transaction audit log events**: These are written directly to the metrics database by the gateway instance.

This section explains how to perform the following tasks:

* Use Policy Studio to configure an API Gateway instance to write audit logging events to the metrics database, and to write metrics data to the transaction event log.
* Use the `managedomain` command to configure the Node Manager to process event logs and update the metrics database.

### Connect to the API Gateway in Policy Studio

To connect to the gateway in Policy Studio, perform the following steps:

1. Ensure the Admin Node Manager and API Gateway are running. For more details, see [Start and stop the API Gateway](/docs/apigtw_admin/general_startup).
2. Create a new project or open an existing project based on a running API Gateway instance. 

### Configure the metrics database connection

To configure the API Gateway connection to the metrics database, perform the following steps:

1. Expand the **Environment Configuration > External Connections > Database Connections** node in the Policy Studio tree.
2. Right-click the **Default Database Connection** tree node, and select **Edit**.
3. Configure the database connection to point to your metrics database.
4. Verify that your database connection is configured correctly by clicking the **Test Connection** button on the **Configure Database Connection** dialog.

* To write the content of message transactions to the database, you must also configure the **Log Message Payload** filter in your policies (for example, at the start and end of the policy).

### Configure the API Gateway to write to the transaction event log

To configure the API Gateway instance to write transaction data to the transaction event log, perform the following steps:

1. In the Policy Studio tree, select the **Environment Configuration > Server Settings** node, and select **Logging > Transaction Event Log** in the window on the right.
2. Ensure **Writing to Transaction Event Log** is selected.
3. To enable monitoring of protocol and remote host metrics, select the **Monitoring > Traffic Monitor** node, and ensure the following settings are selected:

    * Enable Traffic Monitor
    * Record inbound transactions
    * Record outbound transactions

For more details, see [Transaction event log settings](link here).

### Deploy the updated configuration to the API Gateway

You must deploy these configuration changes to the gateway. Click the **Deploy** button in the toolbar, or press F6.

The gateway now sends transaction audit logging to the metrics database, and writes transaction data to the transaction event log. The final step is to configure the Node Manager to read the transaction event logs and write system and transaction metrics to the metrics database

### Configure the Node Manager to process event logs and update the metrics database

If you have not already done so, you must use the `managedomain` tool to enable the Node Manager to process event logs from your gateway host, and to write metrics data to the metrics database.

All gateway instances running on the host node generate transaction event log files. These files are all written to the same folder, and are collectively processed and aggregated by the Node Manager on the host, and then written to the metrics database. The metrics database provides the data for the graphical charts in the monitoring views in API Gateway Analytics and API Manager.

* The Node Manager on each host in the domain must be configured to write metrics data to the same database that API Gateway Analytics reads from. The gateway can write to the same database for transaction audit logging if required.

**Use the managedomain interactive menu**:

You can enable metrics using the interactive `managedomain --menu` command. The following shows an example:

```
Select option:2
Select a host:
   1) LinuxMint01
   2) Enter host nameEnter selection from 1-2 [2]:1
Enter a new host name [LinuxMint01]:
Enter a new Node Manager name [Node Manager on LinuxMint01]:
Enter a new Node Manager port [8090]:
There is only one Node Manager in this domain so it must remain as an Admin Node Manager
Do you want to create an init.d script for this Node Manager [n]:
Do you want to reset the passphrase for the Node Manager on this host ? [n]:
Do you wish to edit metrics configuration (y or n) ? [n]:y
Do you wish to enable metrics (y or n) ? [y]:y
Enter metrics database URL [jdbc:mysql://127.0.0.1:3306/reports]:
Enter metrics database username [root]:
Enter metrics database plaintext password [*******]:
Testing Database connectivity for :jdbc:mysql://127.0.0.1:3306/reports, user :root
Metrics database connectivity succeeded
Metrics generation enabled. All other specified metrics settings updated.
Metrics settings updated successfully. Please reboot Node Manager on completion of this program.
Completed successfully.
Hit enter to continue...
```

**Use the managedomain command options**:

Alternatively, you can use `managedomain` command options to enable metrics when initializing a host, adding a host other than the Admin Node Manager, or editing a host.

The following example shows enabling metrics when initializing a host machine:

```
./managedomain --initialize --metrics_enabled y
  --metrics_dburl jdbc:mysql://127.0.0.1:3306/reports
  --metrics_dbuser root --metrics_dbpass MY_DB_PWD
```

The following example shows enabling metrics when adding a host machine other than the Admin Node Manager:

```
./managedomain --add --anm_host MY_HOSTNAME --nm_entitystore_passphrase MY_CONFIG_PWD
  --metrics_enabled y --metrics_dbuser root --metrics_dbpass MY_DB_PWD
  --metrics_dburl jdbc:mysql://1.2.3.4:3306/reports --nm_name MY_NODE_MNGR --port 8055
```

The following example shows enabling metrics when editing a host machine in the domain:

```
./managedomain --edit_host --nm_entitystore_passphrase bonjour
   --metrics_enabled y --metrics_dburl jdbc:mysql://127.0.0.1:3306/reports
   --metrics_dbuser root --metrics_dbpass MY_DB_PWD
```

The `managedomain` metrics options are described as follows:

`--nm_entitystore_pass`

Specifies the encryption passphrase used to access the API Gateway instance configuration. If no passphrase has been set, omit this argument. For more details, see [Configure an API Gateway encryption passphrase](/docs/apigtw_admin//general_passphrase).

`--metrics_enabled`

Specifies whether writing of metrics data is enabled. Enter `y` or `n`.

`--metrics_dburl`

Specifies the JDBC URL for the metrics database (for example, `jdbc:mysql://127.0.0.1:3306/reports`).

`--metrics_dbuser`

Specifies the metrics database user (for example, `root` or metrics DB user name).

`--metrics_dbpass`

Specifies the password for the metrics database user.

* When the `managedomain` command has finished, you must restart the Node Manager. For more details on `managedomain`, see [Managedomain command reference](/docs/apigtw_admin/managedomain_ref).

### Configure additional options for event log processing in the Node Manager

The parameters described in this section specify how transaction event logs are processed in the Node Manager. You can configure these optional settings by editing the Node Manager configuration using the `esexplorer` tool.

For example, perform the following steps:

1. Enter the `esexplorer` command.
2. Select **Store** > **Connect**.
3. Browse to `INSTALL_DIR/apigateway/conf/fed/configs.xml`.
4. Select **System Components** > **Metrics Generation Configuration** in the tree on the left.
5. Configure the appropriate fields in the window on the right:

    `sourceEventLogDir`

    Specifies the folder in which the Node Manager looks for event log files. This should match the API Gateway transaction event log directory set in Policy Studio (see [Transaction event log settings](log_event_settings). Defaults to `${environment.VDISTDIR}/events`.

    `retainProcessedEventLogs`

    Specifies whether processed event logs should be deleted or retained in a separate directory. By default, event logs are deleted when their contents are written to the metrics database. Logs can be retained if they are needed for audit purposes or as input to a custom analytics process. Defaults to `false`.

    `processedEventLogDir`

    When `retainProcessedEventLogs` is `true`, specifies the directory to which event files are moved after being processed by the Node Manager. Defaults to `${environment.VDISTDIR}/events/processed`.

    `dirSizeMb`

    If `retainProcessedEventLogs` is `true`, specifies the maximum size of the `processedEventLogDir`. When the configured size is reached, the oldest log files in the directory are deleted. Defaults to 1024 MB.

    `processCustomMessageAttributes`

    Specifies whether message attributes contained in the transaction event log, are written to the database `transaction_data` table. Defaults to `true`. For more details, see [Transaction event log settings](log_event_settings).

    `processCustomMetrics`

    Specifies whether custom metrics generated by the API Gateway Java Metrics API and written to the transaction event log are written to the database. Defaults to `true`. For more details, see the following:

    [API Gateway Javadoc](https://support.axway.com/htmldoc/1433380)
    [Transaction event log settings](log_event_settings)

    When making changes using `esexplorer`, ensure that you open the latest configuration. For example, you could overwrite changes made using `managedomain` if an old version of the configuration was loaded into `esexplorer` and then updated.

6. Stop and restart the Node Manager after editing its configuration using `esexplorer`.

## Purge the metrics database

You can use the `dbpurger` command to connect to your metrics database and to purge old data (for example, from API Manager or third-party tools). This command also enables you to retain a specified amount of data, and to archive all data.

This section assumes that you have already configured the connection to your metrics database. For more details, see:

* [Configure API Gateway with your metrics database](metrics_gw_config)

### Run the dbpurger command

For API Gateway Analytics metrics, you can run the `dbpurger` command from the following directory:

```
INSTALL_DIR/apigateway/posix/bin
```

* You must run `-h, --help` to see all `dbpurger` command options.

**Run dbpurger in interactive mode**:

The following example shows the output when running the `dbpurger` command in interactive mode. This example archives all data, retains three months of data, and purges older data from the database:

```
dbpurger
Choosing:Default Database Connection
Archive database (Y, N) [N]:y
Archive path [./archive]:Purge an amount of data from the database (Y, N) [N]:y
Amount of data to retain (e.g. 1year, 3months, 7days) [3months]:
Wrote archive:./archive/process_groups.xml
Wrote archive:./archive/processes.xml
Wrote archive:./archive/metric_types.xml
Wrote archive:./archive/audit_log_sign.xml
Wrote archive:./archive/time_window_types.xml
Wrote archive:./archive/audit_log_points.xml
Wrote archive:./archive/audit_message_payload.xml
Wrote archive:./archive/transaction_data.xml
Wrote archive:./archive/metric_groups.xml
Wrote archive:./archive/metric_group_types.xml
Wrote archive:./archive/metrics_alerts.xml
Wrote archive:./archive/metrics_data.xml
Purging data older than:Wed Jun 27 15:26:00 BST 2012
Purging table:audit_log_sign... deleted 0 rows
Purging table:transaction_data... deleted 0 rows
Purging table:audit_message_payload... deleted 7 rows
Purging table:audit_log_points... deleted 16 rows
Purging table:metrics_alerts... deleted 4 rows
Purging table:metrics_data... deleted 703 rows
```

**Specify dbpurger command options**:

The following example shows the output when specifying options the `dbpurger` command. This example retains 30 days of data, and purges older data from the database:

```
dbpurger --dburl=jdbc:mysql://127.0.0.1:3306/reports --dbuser=root --dbpass=fred --purge --retain=30days
```

{{< alert title="Note" color="primary" >}}You can run `dbpurger` without a password by specifying the name of the database connection. For example:{{< /alert >}}

```
dbpurger --dbname="Default Database Connection" --archive --out=archive.dat
```
