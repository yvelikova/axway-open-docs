{
"title": "API Gateway backup and disaster recovery",
"linkTitle": "API Gateway backup and disaster recovery",
"date": "2019-10-14",
"description": "You must ensure that your API Gateway system can recover from any natural disasters (for example, floods, hurricanes, or earthquakes) and human-induced disasters (for example, failures, fires, or explosions)."
}
﻿

You must ensure that your API Gateway system can recover from any natural disasters (for example, floods, hurricanes, or earthquakes) and human-induced disasters (for example, failures, fires, or explosions).

Many organizations have a mirrored backup and disaster recovery site with full capacity to recover from any major incidents. These systems are typically kept in a separate physical location on cold stand-by until they need to be brought into action. In this case, the backup and disaster site must be a mirrored image of production environment that replicates all resources and assets (for example, LDAP and databases), and with the same number of API Gateway instances. You should ensure that any required third-party systems are included in your backup and recovery solution.

Example approaches to keeping production and backup environments in sync include making backups to disk or tape, and sending these off-site at regular intervals, or cloud-based solutions that replicate on-site systems, and back up to off-site datacenters.

{{< alert title="Tip" color="primary" >}}For details on backing up and restoring an Admin Node Manager in a highly available environment, see [Configure Admin Node Manager high availability](admin_node_mngr.htm).{{< /alert >}}

Components that must be backed up
---------------------------------

Whichever backup strategy you choose, in a production environment you must ensure that API Gateway installations on all API Gateway host nodes are backed up on a regular basis. For example, this includes hosts that run the following components:

-   API Gateway instance
-   Admin Node Manager
-   Node Manager
-   API Manager
-   API Gateway Analytics

You must also back up all databases and third-party systems used with the API Gateway. For example, this includes the following:

-   Databases used by API Gateway and API Manager to store metrics (for example, MySQL, Oracle, MS SQL, or DB2)
-   Apache Cassandra database used by API Gateway and API Manager for internal data storage.
-   Shared disks used by embedded ActiveMQ to store JMS messages
-   Any databases or third-party systems that the API Gateway connects to in External Connections

{{< alert title="Note" color="primary" >}}

You do not need to back up Policy Studio, Configuration Studio, or API Tester because these tools run in a temporary workspace when required.

{{< /alert >}}

However, if you have modified any third-party dependencies on the **Preferences**
page (for example, to connect to a specific database), you must also add the relevant `.jar`
on the **Runtime Dependencies**
page in your disaster recovery environment.

Back up API Gateway
-------------------

To back up an API Gateway installation, you must back up files that have changed in the following directory:

<install-dir>/apigateway

This backs up all Admin Node Manager, Node Manager, API Manager
, and API Gateway instances in that installation.

For example, the following directories include API Gateway configuration, and will typically need to be backed up on a regular basis:

<install-dir>/apigateway/conf\
<install-dir>/apigateway/groups\
<install-dir>/apigateway/ext\
<install-dir>/apigateway/system/conf/nodemanager.xml

{{< alert title="Note" color="primary" >}}

Before backing up, you can remove the contents of the `apigateway/conf/opsdb.d`
directory. This contains transient monitoring data, which can be quite large in some cases, and does not need to be backed up.

{{< /alert >}}

### Back up before applying a service pack

A service pack requires a full backup of the API Gateway installation, to enable you to restore the previous installation.
For example, the following directories should always be backed up before applying a service pack:

<install-dir>/apigateway/conf\
<install-dir>/apigateway/groups\
<install-dir>/apigateway/samples\
<install-dir>/apigateway/skel\
<install-dir>/apigateway/system\
<install-dir>/apigateway/platform (Win32 for Windows)\
<install-dir>/apigateway/tools\
<install-dir>/apigateway/upgrade\
<install-dir>/apigateway/webapps\

Back up API Gateway Analytics
-----------------------------

Similarly, to back up an API Gateway Analytics installation, you must back up files that have changed in the following directory:

<install-dir>\\analytics

For example, the following directories include API Gateway Analytics configuration, and will typically need to be backed up on a regular basis:

``` {space="preserve"}
<install-dir>\analytics\conf
<install-dir>\analytics\ext
```

{{< alert title="Note" color="primary" >}}This backs up the API Gateway Analytics installation only. You must also back up the metrics database separately. For more details, see the next section.{{< /alert >}}

Back up databases and third-party systems
-----------------------------------------

You must back up all databases and third-party systems used with API Gateway. For example, you can back a MySQL database by creating a dump file of the tables in use:

mysqldump -u root temp\_backup > db\_tables.dump

For more details, see the user documentation for your third-party system.

Disaster recovery plan and tests
--------------------------------

To ensure that your backup and disaster recovery processes are successful, you should conduct full restoration tests on a regular basis. You must ensure that you can restore all required files as quickly and easily as possible.

To ensure this, your backup and disaster recovery plan should include key metrics for recovery points and recovery times for your real-world business processes (for example, creating a purchase order, booking a reservation, and so on).

Example of creating an API Gateway disaster recovery site
---------------------------------------------------------

This simple example shows how to create a disaster recovery site from a backup of an API Gateway production deployment. It assumes that both the disaster recovery site and the primary production site have the same version of API Gateway installed. In this scenario, the disaster recovery site is a cold standby, and the configuration from production is replicated using a backup of production configuration.

### Back up the production environment

To back up the production environment, perform the following steps.

1.  Browse to the directory where the API Gateway is installed (for example, `/opt/apigateway`).
2.  Tar or zip the following:
    -   `apigateway/groups`
    -   `apigateway/conf`
    -   `apigateway/system/conf/nodemanager.xml`
    -   `apigateway/ext`

    >
3.  If you want the API Gateway and Node Manager to start up automatically on the new host, you should also include `/etc/init.d/vshell-*`.

{{< alert title="Note" color="primary" >}}

This includes separate startup scripts files for the Node Manager and API Gateway instances if an `init.d` script was created using `managedomain` during initial setup.

{{< /alert >}}

You can create these at any time using `managedomain`, and choosing option `2`, Edit a host, for a Node Manager, or option `10`, Add script or service for an existing local API Gateway. For moredetails, see [Managedomain command reference](managedomain_ref.htm).

For example, the following command creates a `.tar` file running from the root directory:

>tar -cvf apigateway\_backup.tar /opt/apigateway/conf /opt/apigateway/groups\
/opt/apigateway/system/conf/nodemanager.xml

The following example creates a `.tar`file containing the startup scripts running from the root directory:

>tar -cvf startup\_scripts.tar /etc/init.d/vshell-\*

### Copy to the disaster recovery site

To replicate to the disaster recovery site:

1.  Copy the created `.tar` file(s) from the primary production machine to the cold standby machine.
2.  {{< alert title="Note" color="primary" >}}Ensure the files are tarred before copying because this preserves the permissions and ownership of the files.{{< /alert >}}
3.  Extract the files so that they are extracted in the same directories, overwriting existing files if necessary. The following example extracts the files from the root directory:
4.  The following is optional:
5.  When all the files are copied over and extracted successfully, you should be able to start the Admin Node Manager and API Gateway instances the same way as in primary production site running the same topology and configurations.

{{< alert title="Note" color="primary" >}}

This example assumes that backups are collected on regular basis from the master node in the production site.

{{< /alert >}}

Further information
-------------------

For details on how to back up and restore an Admin Node Manager for signing SSL certificates in an API Gateway domain, see [Configure Admin Node Manager high availability](admin_node_mngr.htm).

For details on how to back and restore internal data stored in Apache Cassandra (for example, API Gateway KPS data or API Manager data), see the
[API Gateway Apache Cassandra Administrator Guide](/bundle/APIGateway_77_CassandraGuide_allOS_en_HTML5/)
.
