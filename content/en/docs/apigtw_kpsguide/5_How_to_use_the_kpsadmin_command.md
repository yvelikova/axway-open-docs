{
"title": "Manage KPS using the kpsadmin tool",
"linkTitle": "Manage KPS using the kpsadmin tool",
"date": "2020-01-06",
"description": "The kpsadmin command-line tool provides KPS managment functions, independent of data source. For example, this includes KPS data backup, restore, encryption, and diagnostics. This topic explains how to use the `kpsadmin` tool in interactive and scriptable command modes. "
}
﻿

The kpsadmin command-line tool provides KPS managment functions, independent of data source. For example, this includes KPS data backup, restore, encryption, and diagnostics. This topic explains how to use the `kpsadmin` tool in interactive and scriptable command modes.

The kpsadmin tool is especially useful in a development environment. In a production environment, you should also use data source-specific tools and administration procedures for data backup, restore, security, optimization, monitoring and so on.

{{< alert title="Caution" color="warning" >}}You must use kpsadmin operations with caution. Ensure that you have a verified backup before you run destructive operations such as clear, restore, and re-encrypt. You should always try out these options in a development environment first.{{< /alert >}}

For an example of using Cassandra storage, see
[Perform essential Cassandra operations](/csh?context=1302&product=prod-api-gateway-77)
in the
[API Gateway Apache Cassandra Administrator Guide](/bundle/APIGateway_77_CassandraGuide_allOS_en_HTML5/)
.

Start kpsadmin
--------------

From a command prompt, enter kpsadmin. For example:

INSTALL\_DIR/posix/bin/kpsadmin

If you do not specify a command operation (for example, `kpsadmin backup` or `restore`), `kpsadmin` enters its default interactive menu mode. For details on available operations in scriptable command mode, see [Run kpsadmin operations in scriptable command mode](#Run).

In default interactive mode, you are first prompted to enter your admin credentials to authenticate to the Admin Node Manager. These are the credentials that you supplied when installing API Gateway. For more details, see the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
.

### Start in verbose mode {#start-in-verbose-mode .cover_page_left}

To run kpsadmin in verbose mode, use the `-v` option. `kpsadmin` will then show all REST messages that are exchanged with API Gateway. This is useful for debugging. For example:

kpsadmin -v

For details on available options, enter `kpsadmin -h`, or see [kpsadmin command options](#kpsadmin).

Select kpsadmin operations in interactive mode
----------------------------------------------

This section describes the `kpsadmin` operations that are available in default interactive mode. When you first select an operation in interactive mode, you must enter the following:

-   API Gateway group to use
-   KPS Admin API Gateway in that group that handles KPS requests.

{{< alert title="Note" color="primary" >}}`kpsadmin` requires you to specify an API Gateway in a group. This is known as the *KPS Admin API Gateway*, which fields KPS requests only. Any API Gateway in the group can be used. For example, you might change this if you want to check that data is available from any API Gateway in the group.{{< /alert >}}

-   KPS collection to use in the group
-   KPS table to use in the collection

You can change this selection at any time.

### KPS table operations

The `kpsadmin` table operations are as follows:

| Table operation | Description                                                              |
|-----------------|--------------------------------------------------------------------------|
| Create Row      | Create a row in the selected table.                                      |
| Read Row        | Read a row by primary key in the selected table.                         |
| Update Row      | Update a row in the selected table. The row is specified by primary key. |
| Delete Row      | Delete a row in the selected table. The row is specified by primary key. |
| List Rows       | List all rows in the table.                                              |

### KPS table administration operations

The `kpsadmin` operations for table administration are as follows:

+-----------------------------------+-----------------------------------+
| Table Administration              | Description                       |
+===================================+===================================+
| Clear                             | Clear all rows in the table.      |
+-----------------------------------+-----------------------------------+
| Backup                            | Back up the table data. The       |
|                                   | generated backup UUID is required |
|                                   | when restoring the data.          |
+-----------------------------------+-----------------------------------+
| Restore                           | Restore table data. The table     |
|                                   | must be empty before you restore. |
+-----------------------------------+-----------------------------------+
| Re-encrypt                        | Re-encrypt encrypted data in the  |
|                                   | table.                            |
|                                   |                                   |
|                                   | This option should only be used   |
|                                   | if group-level re-encryption      |
|                                   | fails. For more details, see      |
|                                   | [Re-encrypt KPS data](#Re-encry). |
+-----------------------------------+-----------------------------------+
| Recreate                          | Recreate a table. This is useful  |
|                                   | in development if you wish to     |
|                                   | change the table structure. This  |
|                                   | procedure involves dropping and   |
|                                   | recreating the table, so all      |
|                                   | existing data will be lost. The   |
|                                   | steps are as follows:             |
|                                   |                                   |
|                                   | 1.  Back up (optional).\          |
|                                   |     Backup the data if necessary  |
|                                   |     using kpsadmin.               |
|                                   | 2.  Deploy the correct            |
|                                   |     configuration.\               |
|                                   |     First redeploy the correct    |
|                                   |     configuration using Policy    |
|                                   |     Studio. This may result in    |
|                                   |     some KPS deployment errors.   |
|                                   |     The changes you have made may |
|                                   |     no longer match the stored    |
|                                   |     data structure.               |
|                                   | 3.  Recreate the table with the   |
|                                   |     correct configuration.\       |
|                                   |     Select the Recreate option    |
|                                   |     using kpsadmin.               |
|                                   | 4.  Restore (optional)\           |
|                                   |     Restore the data using        |
|                                   |     kpsadmin. If you have made    |
|                                   |     key or index changes, the     |
|                                   |     data should import directly.  |
|                                   |     If you have made more         |
|                                   |     extensive changes (for        |
|                                   |     example, renaming fields or   |
|                                   |     changing types), you must     |
|                                   |     upgrade the data to match the |
|                                   |     new table structure.          |
+-----------------------------------+-----------------------------------+
| Table Details                     | Display information about a table |
|                                   | and its properties.               |
+-----------------------------------+-----------------------------------+

### KPS collection administration operations

The kpsadmin operations for collection administration are as follows:

| Collection Administration | Description                                                                                                                 |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Clear All                 | Clear all data in all tables in the collection.                                                                             |
| Backup All                | Back up all data in all tables in the collection.                                                                           |
| Restore All               | Restore all data in all tables in the collection.                                                                           |
| Re-encrypt All            | Re-encrypt all data in all tables in the collection.                                                                        
                                                                                                                               
  This option should only be used if group-level re-encryption fails. For more details, see [Re-encrypt KPS data](#Re-encry).  |
| Collection Details        | Display information about all tables in the collection.                                                                     |

### API Gateway group administration operations

The kpsadmin operations for API Gateway group administration are as follows:

| Collection Administration | Description                                                                                                                                                                                                                                                                                                                                                                     |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Clear All                 | Clear all data in all collections in the group.                                                                                                                                                                                                                                                                                                                                 |
| Backup All                | Back up all data in all collections in the group.                                                                                                                                                                                                                                                                                                                               |
| Restore All               | Restore all data in all collections in the group.                                                                                                                                                                                                                                                                                                                               |
| Re-encrypt All            | Re-encrypt all data in all collections in the group. Use this option when the encryption passphrase has been changed for the API Gateway group. The tables will be offline after a passphrase change. You must use this option to re-encrypt the data. You must enter the old API Gateway passphrase to proceed. Data is re-encrypted using the current API Gateway passphrase. 
                                                                                                                                                                                                                                                                                                                                                                                   
  You must restart the API Gateway instance(s) in the group. For more details, see [Re-encrypt KPS data](#Re-encry).                                                                                                                                                                                                                                                               |
| Collection Details        | Display information about all collections in the group.                                                                                                                                                                                                                                                                                                                         |

### Cassandra administration operations {#cassandra-administration-operations style="page-break-before: always;"}

The kpsadmin operations for Cassandra administration are as follows:

| Cassandra Administration | Description                                                                    |
|--------------------------|--------------------------------------------------------------------------------|
| Show Configuration       | Show the current configuration for the KPS storage service (Apache Cassandra). |
| Run Diagnostic Checks    | Run diagnostic checks including HA configuration checks.                       
  You must specify if this is a single or multi-datacenter configuration.         |

### General administration operations

The kpsadmin operations for general administration are as follows:

| General Administration      | Description                                                                                                                                                                                                |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Change Table                | Change the currently selected table.                                                                                                                                                                       |
| Change Collection           | Change the currently selected collection.                                                                                                                                                                  |
| Change Group or API Gateway | Refresh the configuration, and change the currently selected API Gateway group and KPS Admin API Gateway.                                                                                                  |
| Debug Mode                  | Enable or disable debug mode. To enable, you must enter the API Gateway group passphrase. Encrypted data in KPS tables is then shown in the clear. This can be useful for debugging issues on API Gateway. |

### Example of switching a data source in interactive mode

This example shows how to switch from Cassandra storage to file storage.

#### Step 1: Backup collection data using kpsadmin

To copy the current data in the collection to the new data source, back up the collection data using kpsadmin option 21) Backup All.

The backup UUID is highlighted in the following example:

![kpsadmin Backup All operation](/Images/APIGatewayKPSUserGuide/03000019.png)

#### Step 2: Create a new data source

To create the new data source, perform the following steps:

1.  In the Policy Studio tree, select **Key Property Stores > Samples**.
2.  Select the collection **Data Sources** tab.
3.  Click **Add > Add File** at the bottom right.
4.  ![KPS collection Data Sources tab](/Images/APIGatewayKPSUserGuide/0300001A.png)
5.  Enter a file data source **Name** and **Description**.
6.  Enter a **Directory Path** (for example, \${VINSTDIR/kps/samples).
7.  {{< alert title="Tip" color="primary" >}}You can include \${VINSTDIR} or \${VDISTDIR} to indicate the API Gateway instance directory or install directory respectively. Make sure to use / on Linux. If the directory does not exist, it is automatically created.{{< /alert >}}
8.  Select the collection **Properties** tab.
9.  Change the collection **Default data source** to use the new data source:

![](/Images/APIGatewayKPSUserGuide/0300001C.png)

#### Step 3: Deploy the configuration

Click the **Deploy** button in the Policy Studio toolbar.

#### Step 4: Restore collection data using kpsadmin

If you made a backup in step 1, to restore the collection data, perform the following steps:

1.  Using kpsadmin, select option 22) Restore All.
2.  Enter the backup UUID noted in step 1. For example:

![](/Images/APIGatewayKPSUserGuide/0300001D.png)

Run kpsadmin operations in scriptable command mode
--------------------------------------------------

You can also control `kpsadmin` directly from the command line or from a script by specifying command operations (for example, `kpsadmin backup` or `restore`). If an operation is not specified, `kpsadmin` enters its default interactive menu mode. You must also specify a username/password, and an API Gateway group, KPS collection, or KPS table. For example:

./kpsadmin --username admin --password changeme --group "myGroup" --name "myGateway" backup

### kpsadmin command operations

The available `kpsadmin` command operations in this mode are:

| Operation                 | Description                                                                                                                                      |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `clear`                   | Clear all data in the specified table, collection, or group.                                                                                     |
| `backup`                  | Back up all data in the specified table, collection, or group.                                                                                   |
| `restore`                 | Restore all data in the specified table, collection, or group.                                                                                   |
| `reencrypt`               | Re-encrypt all data in the specified table, collection, or group. For more details, see [Re-encrypt KPS data](#Re-encry).                        |
| `details`                 | Display information about the specified table, collection, or group.                                                                             |
| `list_rows`               | List all rows in the specified table, collection, or group.                                                                                      |
| `cassandra_configuration` | Show the current configuration for the KPS storage service (Apache Cassandra).                                                                   |
| `diagnostics`             | Run diagnostic checks including HA configuration checks. You must specify the `--mdc` option only when this is a multi-datacenter configuration. |

{{< alert title="Note" color="primary" >}}If this kind of `kpsadmin` command invocation succeeds, `0` is returned. If it fails, `1` is returned. This can be captured on Linux bash shell using `$?` (for example, `echo $?` will work on both platforms). On Linux, `0` means success, `1` means error.{{< /alert >}}
{{< alert title="Tip" color="primary" >}}You can specify the username and password on the command line or using a secure script. For details on how to script username and password input for API Gateway scripts, see the `managedomain` command reference in the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.{{< /alert >}}

### kpsadmin command options

The full `kpsadmin` command options are:

| Option                        | Description                                                                                  |
|-------------------------------|----------------------------------------------------------------------------------------------|
| `-h, --help`                  | Show help message and exit.                                                                  |
| `-u, --username=USERNAME`     | Specify the current Admin Node Manager username.                                             |
| `-p, --password=PASSWORD`     | Specify the current Admin Node Manager password.                                             |
| `-v, --verbose`               | Enable verbose mode for debugging. This shows all REST messages exchanged with API Gateway.  |
| `-g, --group=GROUP`           | Specify the API Gateway group to target.                                                     |
| `-n, --name=INSTANCE`         | Specify the KPS Admin API Gateway instance that fields all KPS requests for the group.       |
| `-c, --collection=COLLECTION` | Specify the KPS collection to target.                                                        |
| `-t TABLE, --table=TABLE`     | Specify the KPS table to target.                                                             |
| `--uuid=UUID`                 | Specify the UUID required when backing up or restoring data.                                 |
| `--mdc`                       | When using the `diagnostics` command, specify that this is a multi-datacenter configuration. |

### Example kpsadmin scriptable commands

This section shows some example `kpsadmin` operations in scriptable command mode.

#### Back up and restore

To back up and restore an API Gateway group from a staging environment to a production environment, perform the following steps:

1.  Specify the `kpsadmin backup` command:
2.  You must copy the files from the staging `backup` directory to the production `backup` directory and note the UUID. This is output by` kpsadmin` and is also a prefix on the exported filenames.
3.  Specify the `kpsadmin clear` command:
4.  Specify the `kpsadmin restore` command with the UUID noted earlier:

#### Re-encrypt KPS data

After an encryption passphrase change and deployment, you must re-encrypt the KPS data. To re-encrypt at the group level:

./kpsadmin --username admin --password changeme --group "Staging" --name "Gateway1" reencrypt

You are prompted to enter the passphrase. For more details, see [Re-encrypt KPS data](#Re-encry).

#### Show KPS table details

To show table details:

./kpsadmin --username admin --password changeme --group "Staging" --name "Gateway1" --collection "My Collection" --table "My Table" details

#### Show KPS collection details

To show collection details:

./kpsadmin --username admin --password changeme --group "Staging" --name "Gateway1" --collection "My Collection" details

#### Show Apache Cassandra configuration

To show Cassandra configuration:

./kpsadmin --username admin --password changeme --group "Staging" --name "Gateway1" cassandra\_configuration

#### Run diagnostics checks

To output diagnostic information for a group:

./kpsadmin --username admin --password changeme --group "Staging" --name "Gateway1" diagnostics

To output diagnostic information for a group in a Cassandra multi-datacenter system:

./kpsadmin --username admin --password changeme --group "Staging" --name "Gateway1" --mdc diagnostics

Re-encrypt KPS data
-------------------

You can use the `kpsadmin` re-encrypt option to re-encrypt previously encrypted KPS data. When you use this option, a backup of the data is first made in the following directory:

INSTALL\_DIR/apigateway/groups/<group-id>/<instance-id>/conf/kps/backup

The data is decrypted with the old encryption passphrase, which you must supply. The data is then re-encrypted with the current encryption passphrase, which API Gateway already knows.

{{< alert title="Caution" color="warning" >}}You must use the re-encrypt option *only* when:{{< /alert >}}

-   The encryption passphrase has been changed for an API Gateway group configuration.
-   This change has been deployed to all API Gateways in the group.
-   You see `INFO` messages in all API Gateway trace logs as follows:

INFO Loading KPS configuration.\
INFO Checking for passphrase changes...\
INFO Passphrase change has been detected for the following table(s).\
INFO Use kpsadmin to re-encrypt data and passphrase test.\
INFO Table(s) will remain in admin mode until this is done.
{{< alert title="Note" color="primary" >}}You should re-encrypt the data using the group-level `28) Re-encrypt All` interactive option, or the `kpsadmin --group reencrypt` scriptable command. Do not use the table or collection level re-encrypt options. These should only be used if group level encryption fails. You will then need to re-encrypt at collection and/or table level.{{< /alert >}}

<div class="indentTableNested">

After re-encryption, you must restart all API Gateways in the group.

</div>
