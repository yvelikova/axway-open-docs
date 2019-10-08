{
    "title": "Upgrade your metrics database for API Manager",
    "linkTitle": "Upgrade your metrics database for API Manager",
    "date": "2019-10-07",
    "description": "If you are using a metrics database with an earlier version of API Gateway for monitoring in API Manager or third partly tools, you must follow the steps in this section to upgrade the database. Data in your old metrics database will be preserved and the upgraded database will be fully compatible with version 7.8."
}

If you are using a metrics database with an earlier version of API Gateway for monitoring in API Manager or third partly tools, you must follow the steps in this section to upgrade the database. Data in your old metrics database will be preserved and the upgraded database will be fully compatible with version 7.8.

{{< alert title="Note" color="primary" >}}For details on upgrading a metrics database for use with API Gateway Analytics, see [Upgrade API Gateway Analytics](upgrade_analytics.htm) instead.{{< /alert >}}

For frequently asked questions about upgrading your metrics database, see [API Gateway Analytics upgrades](upgrade_faq.htm#upgrade).

Summary of steps
----------------

The following summarizes the steps to upgrade your metrics database, depending on what version you are upgrading from.

1.  Back up your old metrics database.
2.  If your version of API Gateway is earlier than 7.4.0, run `dbsetup` to upgrade your database. Otherwise, skip to the next step.
3.  If you are not upgrading from 7.4.0, 7.4.1, or 7.4.2 with metrics already enabled, run `managedomain` to enable metrics for Node Managers, if this is not already done. You must also run `managedomain` to update the database URL if you created a new database (for example, as part of a rollback strategy).

### Rollback strategy

If you want to be able to revert back to your old version of API Gateway, the best approach is to create a new metrics database for version 7.8. The old versions can then be relaunched without changes. Where appropriate, this topic details additional tasks that you need to perform to implement this rollback strategy.

Step 1 – Back up the metrics database in your old installation
--------------------------------------------------------------

You must backup the metrics database being used in the old installation before upgrading. For more details on backing up your database, see your database user documentation.

### Rollback strategy

To rollback, you must perform the relevant SQL Restore operation to overwrite the newly created blank database (for example, `MetricsNew`) with the data and schema from the old metrics database.

Step 2 – Run dbsetup to upgrade the metrics database (with versions earlier than 7.4.0)
---------------------------------------------------------------------------------------

{{< alert title="Note" color="primary" >}}If you are upgrading from API Gateway version 7.4.0 or later, you do not need to run `dbsetup` to upgrade the metrics database as it is already compatible with version 7.8. You can skip to the next step.{{< /alert >}}

You can use the utility `dbsetup` to upgrade the metrics database schema and data. This enables you to retain your old database data, but upgrade your database so that it is compatible with API Gateway7.8.The `dbsetup`
utility always checks the existing version, and modifies the database only if an update is required.

The `dbsetup` utility is located in:

    INSTALL_DIR/apigateway/posix/bin

To upgrade the database:

1.  Stop any API Gateway processes or services in the old installation. This is necessary to prevent writes to the database from the old system during the upgrade.
2.  Run `dbsetup` with the `--dburl`, `--dbuser`, and `--dbpass` options at a minimum. For example:

``` {space="preserve"}
> cd /opt/Axway-7.8/apigateway/posix/bin
```

``` {space="preserve"}
> ./dbsetup --dburl=jdbc:mysql://127.0.0.1:3306/Metrics --dbuser=root --dbpass=secret
```

{{< alert title="Note" color="primary" >}}Do not specify `--reinstall` because you are not recreating the database. For more information on `dbsetup` command-line options, see
[Configure the metrics database](/csh?context=302&product=prod-api-gateway-77)
in the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
.{{< /alert >}}

1.  The following is an example of the output when upgrading a 7.3.x database to version 7.8:

``` {space="preserve"}
Current schema version: 001-topology
Latest schema version: 002-leaf
About to upgrade schema. Please note that this operation may take some time for very large databases
Schema successfully upgraded to: 002-leaf
```

### Rollback strategy

If you have created a new database as part of a rollback strategy, the database URL must contain the name of this new database (for example, `--dburl=jdbc:mysql://127.0.0.1:3306/MetricsNew`).

### Available database upgrades

The following upgrades are currently available:

| Upgrade Name   | Description                                                       | Compatibility            |
|----------------|-------------------------------------------------------------------|--------------------------|
| `000-initial`  | Schema used from version 6.3 up to but not including version 7.0. | Must be upgraded to 7.8. |
| `001-topology` | Schema used from version 7.0 up to but not including 7.4.         | Must be upgraded to 7.8. |
| `002-leaf`     | Schema used from version 7.4.                                     | Compatible with 7.8.     |

Step 3 – Enable metrics using managedomain
------------------------------------------

{{< alert title="Note" color="primary" >}}If you are upgrading API Gateway from 7.4.0, 7.4.1, or 7.4.2, and you were already using metrics, you do not need to perform this step. If you are upgrading from a version earlier than 7.4.0, you must perform this step.\
If you have created a new database as part of a rollback strategy (for example, `MetricsNew`), you must perform this step to specify the database URL of the newly created database to `managedomain`.{{< /alert >}}

If you have not already done so, you must use the `managedomain`
tool to enable the Node Manager to process event logs from your API Gateway host, and to write metrics data to the metrics database.

All API Gateway instances running on the host node generate transaction event log files. These files are all written to the same folder, and are collectively processed and aggregated by the Node Manager on the host, and then written to the metrics database. The metrics database provides the data for the graphical charts in the **Monitoring**
view in API Manager, or for third-party tools such as Splunk. For more details on the transaction event log , see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

{{< alert title="Note" color="primary" >}}In versions earlier than 7.4.0, the API Gateway instance was responsible for writing metrics data to the database. In version 7.4.0 and later, the Node Manager is responsible for writing metrics data to the database.{{< /alert >}}

To enable metrics in the new installation:

1.  You must ensure that the new API Gateway service is running. Additionally, if you have a multi-node domain with multiple Node Managers, you must ensure that metrics is enabled for each Node Manager.
2.  Enable metrics using the `managedomain` utility in the following directory:

<!-- -->

    INSTALL_DIR/apigateway/posix/bin

The following example shows how to modify the host to enable metrics and specify the database settings:

``` {space="preserve"}
./managedomain --edit_host  --metrics_enabled y --metrics_dburl jdbc:mysql://127.0.0.1:3306/Metrics 
--metrics_dbuser root --metrics_dbpass secretpass
```

The following is an example of the output:

``` {space="preserve"}
There is only one Node Manager in this domain so it must remain as an Admin Node Manager
Testing Database connectivity for : jdbc:mysql://127.0.0.1:3306/Metrics, user : root
Metrics database connectivity succeeded
Metrics generation enabled. All other specified metrics settings updated.
Metrics settings updated successfully. Please reboot Node Manager on completion of this program.
Completed successfully.
```

1.  Restart the Node Manager service. When the Node Manager service has restarted, the upgrade of metrics database is complete.

### managedomain options

The following table describes the `managedomain` options used:

| Option                 | Description                                                                                |
|------------------------|--------------------------------------------------------------------------------------------|
| ``` {space="preserve"} 
 --edit_host             
 ```                     | Modify the host settings.                                                                  |
| ``` {space="preserve"} 
 --metrics_enabled       
 ```                     | Flag to enable or disable metrics. Set to `y` to enable metrics, or set to `n` to disable. |
| ``` {space="preserve"} 
 --metrics_dburl         
 ```                     | The JDBC connection string for the metrics database.                                       |
| ``` {space="preserve"} 
 --metrics_dbuser        
 ```                     | The database user name.                                                                    |
| ``` {space="preserve"} 
 --metrics_dbpass        
 ```                     | The password associated with the database user name.                                       |

For more information on using the `managedomain` utility to enable metrics, see the monitoring and metrics section in the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

### Rollback strategy

If you have created a new database as part of a rollback strategy, the database URL must contain the name of the new database (for example, `jdbc:mysql://127.0.0.1:3306/MetricsNew`).

Perform a rollback
------------------

If you have implemented the rollback strategy described in the preceding sections, follow these steps to revert back to the old version of API Gateway:

1.  Stop the API Gateways and the Node Managers in the new installation.
2.  Restart the API Gateways and the Node Managers in the old installation.

Further information
-------------------

For more details on API Manager monitoring metrics, see the
[API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
.

 
