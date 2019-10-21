{
"title": "Configure API Gateway with the metrics database",
"linkTitle": "Configure API Gateway with the metrics database",
"date": "2019-10-14",
"description": "This topic explains how to configure an API Gateway instance and Node Manager to store metrics on historic traffic in a relational database used to store metrics. For example, you can configure monitoring in API Gateway Analytics or API Manager to view data stored in the metrics database, or write custom SQL queries to retrieve metrics data as required."
}
﻿

{{< alert title="Note" color="primary" >}}This topic explains how to configure API Gateway with a metrics database. This topic assumes that you have already created your metrics database using the steps described in [Set up the metrics database for API Gateway Analytics](metrics_db_install.htm) the [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/).{{< /alert >}}

API Gateway metrics data streams
--------------------------------

<div id="p_reporter_gw_config_connect">

Connect to the API Gateway in Policy Studio
-------------------------------------------

</div>

<div id="p_reporter_gw_config_db">

Configure the metrics database connection
-----------------------------------------

{{< alert title="Tip" color="primary" >}}You can troubleshoot your database connection by viewing the contents of your server `.trc`
file in the `INSTALL_DIR/apigateway/trace` directory. For more details, see [*Configure diagnostic trace* on page 1](../AdminGuideTopics/tracing.htm) [Configure API Gateway diagnostic trace](/csh?context=106&product=prod-api-gateway-77) in the [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/).{{< /alert >}}

</div>

<div id="p_reporter_gw_config_db_log">

Configure transaction audit logging to the metrics database
-----------------------------------------------------------

{{< alert title="Tip" color="primary" >}}To write the content of message transactions to the database, you must also configure the **Log Message Payload**
filter in your policies (for example, at the start and end of the policy). For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.{{< /alert >}}

</div>

<div id="p_reporter_gw_config_monitoring">

Configure the API Gateway to write to the transaction event log
---------------------------------------------------------------

</div>

<div id="p_reporter_gw_config_deploy">

Deploy the updated configuration to the API Gateway
---------------------------------------------------

</div>

<div id="p_reporter_gw_config_metrics">

Configure the Node Manager to process event logs and update the metrics database
--------------------------------------------------------------------------------

{{< alert title="Note" color="primary" >}}The Node Manager on each host in the domain must be configured to write metrics data to the same database that API Gateway Analytics reads from. The API Gateway can write to the same database for transaction audit logging if required.{{< /alert >}}
<div>

### Use the managedomain interactive menu

``` {space="preserve"}
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

</div>

<div>

### Use the managedomain command options

``` {space="preserve"}
./managedomain --initialize --metrics_enabled y 
  --metrics_dburl jdbc:mysql://127.0.0.1:3306/reports 
  --metrics_dbuser root --metrics_dbpass MY_DB_PWD
```

``` {space="preserve"}
./managedomain --add --anm_host MY_HOSTNAME --nm_entitystore_passphrase MY_CONFIG_PWD 
  --metrics_enabled y --metrics_dbuser root --metrics_dbpass MY_DB_PWD 
  --metrics_dburl jdbc:mysql://1.2.3.4:3306/reports --nm_name MY_NODE_MNGR --port 8055
```

``` {space="preserve"}
./managedomain --edit_host --nm_entitystore_passphrase bonjour 
   --metrics_enabled y --metrics_dburl jdbc:mysql://127.0.0.1:3306/reports 
   --metrics_dbuser root --metrics_dbpass MY_DB_PWD
```

| Option                  | Description                                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------|
| `--nm_entitystore_pass` |                                                                                                       |
| `--metrics_enabled`     | Specifies whether writing of metrics data is enabled. Enter `y`                                       
  or `n`                                                                                                 
  .                                                                                                      |
| `--metrics_dburl`       | Specifies the JDBC URL for the metrics database (for example, `jdbc:mysql://127.0.0.1:3306/reports`). |
| `--metrics_dbuser`      | Specifies the metrics database user (for example, `root` or metrics DB user name).                    |
| `--metrics_dbpass`      | Specifies the password for the metrics database user.                                                 |

</div>

{{< alert title="Note" color="primary" >}}When the `managedomain` command has finished, you must restart the Node Manager. {{< /alert >}}
<div id="p_reporter_gw_config_metrics_adv">

Configure additional options for event log processing in the Node Manager
-------------------------------------------------------------------------

The parameters described in this section specify how transaction event logs are processed in the Node Manager. You can configure these optional settings by editing the Node Manager configuration using the `esexplorer` tool.

For example, perform the following steps:

1.  Enter the `esexplorer`     command.
2.  Select **Store** > **Connect**.
3.  Browse to `INSTALL_DIR/apigateway/conf/fed/configs.xml`.
4.  Select **System Components** > **Metrics Generation Configuration**     in the tree on the left.
5.  Configure the appropriate fields in the window on the right:

`sourceEventLogDir`

Specifies the folder in which the Node Manager looks for event log files. This should match the API Gateway transaction event log directory set in Policy Studio (see [Transaction event log settings](log_event_settings). Defaults to `${environment.VDISTDIR}/events`.                                                                                                                                                                                                                                                                      |
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

1.  Stop and restart the Node Manager after editing its configuration using `esexplorer`.

</div>

</div>

<div id="p_reporter_gw_config">

Further information {#further-information "api_gateway_conditions.adminguide"=""}
-------------------

For details on viewing metrics in API Manager, see the
[API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
. For details on viewing metrics in API Gateway Analytics, see the
[API Gateway Analytics User Guide](/bundle/APIGateway_77_AnalyticsUserGuide_allOS_en_HTML5/)
.

</div>
