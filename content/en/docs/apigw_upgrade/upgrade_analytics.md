{
    "title": "Upgrade API Gateway Analytics",
    "linkTitle": "Upgrade API Gateway Analytics",
    "date": "2019-10-07",
    "description": "If you are using an earlier version of API Gateway Analytics, you must follow the steps in this section to upgrade API Gateway Analytics to version 7.8. Data in your old API Gateway Analytics metrics database will be preserved and the upgraded database will be fully compatible with version 7.8."
}

If you are using an earlier version of API Gateway Analytics, you must follow the steps in this section to upgrade API Gateway Analytics to version 7.8. Data in your old API Gateway Analytics metrics database will be preserved and the upgraded database will be fully compatible with version 7.8.

{{< alert title="Note" color="primary" >}}For details on upgrading a metrics database for use with API Manager, see [Upgrade your metrics database for API Manager](upgrade_metrics.htm) instead.{{< /alert >}}

You can upgrade API Gateway Analytics before or after you upgrade API Gateway. This depends on the version of API Gateway Analytics you are upgrading from:

-   If you are upgrading from 7.4.0 and later versions, we recommend that you upgrade API Gateway Analytics before upgrading API Gateway using the `sysupgrade` command.
-   If you create a new API Gateway Analytics metrics database as part of a rollback strategy, you must run `managedomain` on every host to change the database URL to that of the newly created database after you have completed the `sysupgrade apply` step.
-   If you are upgrading from versions earlier than 7.4.0, we recommend that you upgrade API Gateway Analytics after upgrading API Gateway using the `sysupgrade` command.

For frequently asked questions about upgrading API Gateway Analytics, see [*upgrades* on page 1](upgrade_faq.htm#upgrade).

Summary of steps
----------------

The following summarizes the steps to upgrade API Gateway Analytics. Some of the steps are optional, depending on what version you are upgrading from.

1.  Install API Gateway Analytics7.8 to a new directory.
2.  Copy any third-party JDBC drivers to the new installation.
3.  Back up the old API Gateway Analytics metrics database.
4.  If your version of API Gateway Analytics is earlier than 7.4.0, run `dbsetup` to upgrade your metrics database.
5.  Run `upgradeconfig` to migrate your old API Gateway Analytics Entity Store customizations to the new installation.
6.  Run `configureserver` to configure your new API Gateway Analytics Entity Store.
7.  Migrate any custom reports.
8.  Stop the old version of the API Gateway Analytics service and start the new 7.8 version.
9.  If you are not upgrading from 7.4.0, 7.4.1, or 7.4.2 with metrics already enabled, run `managedomain` to enable API Gateway Analytics for the Node Managers. You must also run `managedomain` to update the metrics database URL if you created a new database (for example, as part of a rollback strategy).

Rollback strategy
-----------------

If you want to be able to revert back to your old version of API Gateway Analytics and API Gateway, the best approach is to create a new API Gateway Analytics metrics database for version 7.8. The old versions can then be relaunched without changes. Where appropriate, this section details additional tasks that you need to perform to implement this rollback strategy.

Step 1 – Install API Gateway Analytics 7.8
------------------------------------------

You can install API Gateway Analytics on the same machine as your old API Gateway Analytics, or on a different machine. If you install it on the same machine as your old installation, you must install it in a new directory (and not in the same directory as the old installation). You do not need to install API Gateway Analytics on the same machine as any running API Gateways, therefore, you can install it on a dedicated machine if required.

### Rollback strategy

To be able to rollback, you must create a new database with a different name to the old database, so that your old database remains unmodified. In the following sections, the new database is called `ReporterNew`.

If you are not implementing a rollback strategy, and your old database is earlier than version 7.4.0, you must upgrade your database as detailed in [*Step 4 – Run dbsetup to upgrade the database* on page 1](#Step). You must also back up your old database as detailed in [*Step 3 – Back up the database in the old installation* on page 1](#Step2).

Step 2 – Copy third-party JDBC drivers to the new installation
--------------------------------------------------------------

You must copy the JDBC driver files for your chosen database from your old installation to your new installation of API Gateway, API Gateway Analytics, and Policy Studio.

For more information on where to copy the JDBC driver files from, see the section on configuring the database for API Gateway Analytics in the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
. Copy them to the same locations in your new installation.

Step 3 – Back up the database in the old installation
-----------------------------------------------------

You must backup the API Gateway Analytics database being used in the old installation before upgrading. For more details on backing up your database, see your database user documentation.

### Rollback strategy

To rollback, you must perform the relevant SQL Restore operation to overwrite the newly created blank database (for example, `ReporterNew`) with the data and schema from the old API Gateway Analytics database.

Step 4 – Run dbsetup to upgrade the database
--------------------------------------------

{{< alert title="Note" color="primary" >}}If you are upgrading from API Gateway Analytics version 7.4.0 or later, you do not need to run `dbsetup` to upgrade the database as it is already compatible with version 7.8.{{< /alert >}}

You can use the utility `dbsetup` to upgrade the API Gateway Analytics database schema and data. This enables you to retain your old database data, but upgrade your database so that it is compatible with API Gateway Analytics7.8.The `dbsetup`
utility always checks the existing version, and modifies the database only if an update is required.

The `dbsetup` utility is located in:

**Windows**

    INSTALL_DIR\analytics\Win32\bin

**Linux**

    INSTALL_DIR/analytics/posix/bin

To upgrade the database, follow these steps:

1.  Stop any API Gateway processes or services in the old installation. This is necessary to prevent writes to the database from the old system during the upgrade.
2.  Run `dbsetup` with the `--dburl`, `--dbuser`, and `--dbpass` options at a minimum. For example:

``` {space="preserve"}
> cd /opt/Axway-7.8/analytics/posix/bin
```

``` {space="preserve"}
> ./dbsetup --dburl=jdbc:mysql://127.0.0.1:3306/Reporter --dbuser=root --dbpass=secret
```

1.  Do not specify `--reinstall` as you are not recreating the database. For more information on `dbsetup` command-line options, see the section on configuring the database for API Gateway Analytics in the
    [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
    .
2.  The following is an example of the output when upgrading a 7.3.x database to version 7.8:

``` {space="preserve"}
Current schema version: 001-topology
Latest schema version: 002-leaf
About to upgrade schema. Please note that this operation may take some time for very large databases
Schema successfully upgraded to: 002-leaf
```

### Rollback strategy

If you have created a new database as part of a rollback strategy, the database URL must contain the name of this new database (for example, `--dburl=jdbc:mysql://127.0.0.1:3306/ReporterNew`).

### Available database upgrades

The following upgrades are currently available:

| Upgrade Name   | Description                                                       | Compatibility            |
|----------------|-------------------------------------------------------------------|--------------------------|
| `000-initial`  | Schema used from version 6.3 up to but not including version 7.0. | Must be upgraded to 7.8. |
| `001-topology` | Schema used from version 7.0 up to but not including 7.4.         | Must be upgraded to 7.8. |
| `002-leaf`     | Schema used from version 7.4.                                     | Compatible with 7.8.     |

Step 5 – Run upgradeconfig to migrate API Gateway Analytics Entity Store customizations
---------------------------------------------------------------------------------------

If you have made customizations to the API Gateway Analytics Entity Store in your old installation (for example, if you have added SSL listeners, setup LDAP authentication, or added new users to the user store), you can migrate these changes to your new installation using the utility `upgradeconfig`, rather than setting them up again in the new installation.

{{< alert title="Note" color="primary" >}}If you have not made any changes then you are using a default API Gateway Analytics configuration, and you do not need to run `upgradeconfig`.{{< /alert >}}

The `upgradeconfig` utility is located in:

**Windows**

    INSTALL_DIR\analytics\Win32\bin

**Linux**

    INSTALL_DIR/analytics/posix/bin

{{< alert title="Note" color="primary" >}}You must not use `upgradeconfig` from the API Gateway installation directory; you must use the version in the API Gateway Analytics directory to upgrade API Gateway Analytics configuration.{{< /alert >}}

To run `upgradeconfig`, perform the following steps:

1.  Back up your factory configuration by copying the `conf/fed` directory in the new installation (for example, `/opt/Axway-7.8/analytics/conf/fed`) to a backup directory.
2.  Run `upgradeconfig` with the `-u` and `-o` options. For example:

``` {space="preserve"}
> cd /opt/Axway-7.8/analytics/posix/bin
```

``` {space="preserve"}
> ./upgradeconfig -u federated:file:////opt/Axway-7.3.1/analytics/conf/fed/configs.xml 
-o /opt/Axway-7.8/analytics/conf/fed
```

### upgradeconfig options

The following table describes the `upgradeconfig` options:

| Option                 | Description                                                                                                                                                                                            |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` {space="preserve"} 
 -u                      
 ```                     | The URL of configuration to upgrade (for example, `federated:file:///C:/Axway730/analytics/conf/fed/configs.xml`).                                                                                     |
| ``` {space="preserve"} 
 -o                      
 ```                     | The output directory which will contain the upgraded configuration. Typically this is the `fed` folder of the new API Gateway Analytics installation (for example, `C:\Axway-7.8\analytics\conf\fed`). |

### Use Policy Studio to change API Gateway Analytics configuration

You cannot use Policy Studio instead of `upgradeconfig` to migrate customizations. However, you can use Policy Studio to view the upgraded configuration:

1.  In Policy Studio, select **New Project**. Enter a name for the project and make a note of the project location, then select **From existing configuration**.
2.  Browse to the `conf/fed` directory in your new API Gateway Analytics installation (for example, `/opt/Axway-7.8/analytics/conf/fed`). The API Gateway Analytics configuration is displayed in Policy Studio.
3.  Make any required changes to the configuration and save them (**File > Save**).
4.  Exit Policy Studio and copy the contents of the project directory (the location you noted earlier) to the `conf/fed` directory of the new API Gateway Analytics installation.

{{< alert title="Tip" color="primary" >}}You can also use Policy Studio to view or change any API Gateway Analytics configuration (for example, a 7.8 factory configuration).{{< /alert >}}

Step 6 – Run configureserver to configure your new API Gateway Analytics Entity Store
-------------------------------------------------------------------------------------

You can use the `configureserver` utility to configure the database connection for API Gateway Analytics (for example, you can specify the database JDBC connection string, the database user, and the database password).

The `configureserver` utility is located in:

**Windows**

    INSTALL_DIR\analytics\Win32\bin

**Linux**

    INSTALL_DIR/analytics/posix/bin

To run `configureserver`, enter the following commands:

``` {space="preserve"}
> cd /opt/Axway-7.8/analytics/posix/bin
```

``` {space="preserve"}
> ./configureserver
```

You are prompted for various settings. Enter a new value for any setting that you wish to change, or press **Enter** to use the default setting.

For more information on `configureserver`, see the section on configuring API Gateway Analytics in the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
.

### Rollback strategy

If you have created a new database as part of a rollback strategy, the database URL must contain the name of the new database (for example, `jdbc:mysql://127.0.0.1:3306/ReporterNew`).

Step 7 – Migrate custom reports
-------------------------------

If you have created your own custom reports in your old API Gateway Analytics installation, you can migrate them to the new installation by copying the files.

Copy all `.json` files from the directory `conf/emc/analytics/reports` in the old installation, for example:

``` {space="preserve"}
/opt/Axway-7.4.1/analytics/conf/emc/analytics/reports
```

Copy the files to the same location in the new installation, for example:

``` {space="preserve"}
/opt/Axway-7.8/analytics/conf/emc/analytics/reports
```

### Modify API Services report for API Gateway Analytics 7.3.x and earlier

If you are upgrading from API Gateway Analytics version 7.3.x or earlier, you might need to update any API Services custom reports in the new installation.

A report is an API Services report if the report was created with the type `API Service`. In this case, the JSON file will contain:

``` {space="preserve"}
"type":"Service"
```

If the `groupBy` field contains the values `[ "CLIENTNAME", "SERVICENAME" ]`, you must add two extra fields `additionalFields` and `hiddenFields`. For example:

``` {space="preserve"}
      "groupBy" : [ "CLIENTNAME", "SERVICENAME" ],
      "additionalFields" : [ "DISPLAYNAME" ],
      "hiddenFields" : [ "CLIENTNAME" ],
```

### Migrate other files

If you have made customizations to the `envSettings.props` file in your old API Gateway Analytics installation, you can migrate them to the new installation by copying the files.

Copy the `envSettings.props` file from the `conf` directory in the old installation, for example:

``` {space="preserve"}
/opt/Axway-7.4.1/analytics/conf
```

Copy the file to the same location in the new installation, for example:

``` {space="preserve"}
/opt/Axway-7.8/analytics/conf
```

Step 8 – Stop the old version of API Gateway Analytics and start the new version
--------------------------------------------------------------------------------

If you have installed API Gateway Analytics7.8 on the same machine as the old installation, you must stop the old version before starting the new version. You can use the `analytics` script to start and stop API Gateway Analytics.

The `analytics` script is located in:

**Windows**

    INSTALL_DIR\analytics\Win32\bin

**Linux**

    INSTALL_DIR/analytics/posix/bin

For example, to stop API Gateway Analytics in the old installation, enter the following commands:

``` {space="preserve"}
> cd /opt/Axway-7.4.1/analytics/posix/bin
```

``` {space="preserve"}
> ./analytics -k
```

For example, to start API Gateway Analytics in the 7.8 installation, enter the following commands:

``` {space="preserve"}
> cd /opt/Axway-7.8/analytics/posix/bin
```

``` {space="preserve"}
> ./analytics -d
```

You can now launch the API Gateway Analytics web application. Enter the following address in your browser:

``` {space="preserve"}
http://HOST:8040/
```

`HOST` refers to the host name or IP address of the machine on which API Gateway Analytics is running (for example, `http://localhost:8040/`).

Step 9 – Enable metrics using managedomain
------------------------------------------

If you have not already done so, you must use the `managedomain`
tool to enable the Node Manager to process event logs from your API Gateway host, and to write metrics data to the metrics database.

All API Gateway instances running on the host node generate transaction event log files. These files are all written to the same folder, and are collectively processed and aggregated by the Node Manager on the host, and then written to the metrics database. The metrics database provides the data for the graphical charts in the **Monitoring**
view in API Manager and API Gateway Analytics.

{{< alert title="Note" color="primary" >}}If you are upgrading API Gateway Analytics from 7.4.0, 7.4.1, or 7.4.2 and you were already using metrics, you do not need to perform this step. If you are upgrading from a version earlier than 7.4.0, you must perform this step.\
If you have created a new database as part of a rollback strategy (for example, `ReporterNew`), you must perform this step to specify the database URL of the newly created database to `managedomain`.{{< /alert >}}

In versions earlier than 7.4.0, the API Gateway instance was responsible for writing metrics data to the database. In version 7.4.0 and later, the Node Manager is responsible for writing metrics data to the database.

Before you enable metrics in the Node Manager, you must ensure that the new API Gateway Analytics service is running. Additionally, if you have a multi-node domain with multiple Node Managers, you must ensure that metrics is enabled for each Node Manager.

To enable metrics in the new installation, you can use the `managedomain` utility.

The `managedomain` utility is located in:

**Windows**

    INSTALL_DIR\apigateway\Win32\bin

**Linux**

    INSTALL_DIR/apigateway/posix/bin

The following example shows how to modify the host to enable metrics and specify the database settings:

``` {space="preserve"}
./managedomain --edit_host  --metrics_enabled y --metrics_dburl jdbc:mysql://127.0.0.1:3306/Reporter 
--metrics_dbuser root --metrics_dbpass secretpass
```

The following is an example of the output:

``` {space="preserve"}
There is only one Node Manager in this domain so it must remain as an Admin Node Manager
Testing Database connectivity for : jdbc:mysql://127.0.0.1:3306/Reporter, user : root
Metrics database connectivity succeeded
Metrics generation enabled. All other specified metrics settings updated.
Metrics settings updated successfully. Please reboot Node Manager on completion of this program.
Completed successfully.
```

After you have enabled metrics using the `managedomain` utility, you must restart the Node Manager service. When the Node Manager service has restarted, the upgrade of API Gateway Analytics is complete.

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
 ```                     | The JDBC connection string for the API Gateway Analytics database.                         |
| ``` {space="preserve"} 
 --metrics_dbuser        
 ```                     | The database user name.                                                                    |
| ``` {space="preserve"} 
 --metrics_dbpass        
 ```                     | The password associated with the database user name.                                       |

For more information on using the `managedomain` utility to enable metrics, see the monitoring and reporting section of the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

### Rollback strategy

If you have created a new database as part of a rollback strategy, the database URL must contain the name of the new database (for example, `jdbc:mysql://127.0.0.1:3306/ReporterNew`).

Perform a rollback
------------------

If you have implemented the rollback strategy described in the preceding sections, follow these steps to revert back to the old version of API Gateway Analytics:

1.  Stop the API Gateway Analytics service, the API Gateways, and the Node Managers in the new installation.
2.  Restart the API Gateway Analytics service, the API Gateways, and the Node Managers in the old installation.

Further information
-------------------

For more details on using API Gateway Analytics, see the
[API Gateway Analytics User Guide](/bundle/APIGateway_77_AnalyticsUserGuide_allOS_en_HTML5/)
.
