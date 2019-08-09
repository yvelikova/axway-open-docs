{"title":"Configure API Portal for HA in single datacenter","linkTitle":"Configure API Portal for HA in single datacenter","date":"2019-08-09","description":"This topic describes how to deploy API Portal high availability (HA) in a single datacenter."} ﻿

This topic describes how to deploy API Portal high availability (HA) in a single datacenter.

-   [Configure the database cluster](#Configur)
-   [Configure the shared file storage](#Configur2)
-   [Configure API Portal](#Configur3)
-   [Configure load balancer](#Configur4)

Configure the database cluster
------------------------------

You must configure a relational database management system (RDBMS) to store API Portal data.

{{< alert title="Note" color="primary" >}}You must install and configure the database on each database node before installing and configuring API Portal.{{< /alert >}}

The database cluster has the following requirements in a production environment:

-   The database must be supported by API Portal. For more information on supported databases, see [Software requirements](install_software_prereqs.htm#Software).
-   For HA, it is best to have at least three database nodes in each datacenter (for example, to prevent data corruption due to split-brain syndrome). Install the database on each node.
-   Choose a unique name for the database cluster.
-   Do not start any of the databases until the database cluster is fully configured.
-   You must synchronize time on all servers.
-   To avoid firewall issues, you must open the RDBMS ports needed to allow bidirectional communication among the database nodes.

For more details on installing and configuring your database, see [MySQL documentation](https://dev.mysql.com/doc/refman/5.6/en/) or [MariaDB documentation](https://mariadb.com/kb/en/mariadb/documentation/).

### Fine-tune database settings

You can use advanced settings to fine-tune the database and its performance:

-   To automatically set increment IDs in the database and synchronize the IDs between the API Portal instances, check the settings for `auto_increment_increment` and `auto_increment_offset`.
-   To avoid timeout issues, check the `master-connect-retry` setting.
-   To avoid filling disk space with database replication logs, adjust the `expire_log_days` and `max_binlog_size` as needed.

For more details on the database settings, see [MySQL documentation](https://dev.mysql.com/doc/refman/5.6/en/) or [MariaDB documentation](https://mariadb.com/kb/en/mariadb/documentation/).

Configure the shared file storage
---------------------------------

You must set up a shared file system between API Portal instances to keep them synchronized.

Configure API Portal
--------------------

After setting up the database cluster, install API Portal. For HA, you must have at least two API Portal instances.

### Install API Portal for HA as a software installation

For HA, install API Portal on the first node, and then install it on each of the other nodes.

1.  Install API Portal on the first node as detailed in [Install API Portal as software installation](../../../APIPortalInstallGuideTopics/install_software_overview.htm).
    -   When prompted for database connection settings during the API Portal software installation, enter the access host of the database you created for this node.
    -   When asked if this is going to be HA setup with database replication, enter `y`.

>

Install the EasyBlog and EasyDiscuss components on the first node as detailed in [Install Joomla! components](../../../APIPortalInstallGuideTopics/install_software_install.htm#Install3).

{{< alert title="Note" color="primary" >}}When you change the Joomla! admininstrator password on the first node, the password is changed for all nodes. {{< /alert >}}

Install API Portal on each of the other nodes as detailed in [Install API Portal as software installation](../../../APIPortalInstallGuideTopics/install_software_overview.htm). For each node:

-   When prompted for database connection settings, use the same database server or cluster you used for the first API Portal instance.
-   The installation checks the database connection and if it is successful for any node other than the first node, it asks you to confirm that this is a HA setup. Enter `y`.

Install the EasyBlog and EasyDiscuss components on each other node as detailed in [Install Joomla! components](../../../APIPortalInstallGuideTopics/install_software_install.htm#Install3).

### Upgrade API Portal for HA as a software installation

For HA upgrade, upgrade API Portal and perform the post-upgrade steps on each node as detailed in [Upgrade API Portal software installation](../../../APIPortalInstallGuideTopics/Upgrade_software.htm).

Configure load balancer
-----------------------

Configuring the load balancer may vary depending on the load balancer in question. Set up and configure the load balancer as instructed in the documentation of your load balancer.

You must situate the load balancer between the two API Portal instances.
