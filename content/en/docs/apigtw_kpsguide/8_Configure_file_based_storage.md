{
"title": "Configure file-based KPS storage",
"linkTitle": "Configure file-based KPS storage",
"date": "2020-01-06",
"description": "You can store KPS data in a directory on the file system. Each table is stored in a single JSON file. File-based storage is specified at the KPS collection or KPS table level. "
}
﻿

You can store KPS data in a directory on the file system. Each table is stored in a single JSON file. File-based storage is specified at the KPS collection or KPS table level.

{{< alert title="Note" color="primary" >}} File-based KPS storage is deprecated and will be removed in a future release.{{< /alert >}}

<div class="indentTableNested">

File-based KPS storage is most suited to single API Gateway deployments. In a multi-API Gateway scenario, file replication or a shared disk is required to ensure that all API Gateways use the same data.

KPS data defined in Policy Studio supports Cassandra, database, and file data stores. API Manager. KPS data (Client Registry and API Catalog) supports Cassandra only.

</div>

File-based KPS tables are read and cached by API Gateways when they start up. If data is modified, all API Gateways must be restarted to pick up the changes.

Configure a file-based KPS collection
-------------------------------------

You can configure a file-based KPS data source when creating a KPS collection, or add one later on the **Data Source** tab. For example, the following settings are available when editing file-based collection:

![](/Images/APIGatewayKPSUserGuide/03000036.png)

These settings are described as follows:

| Name               | Description                                                                                                                                                                                                                          |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**           | Collection-unique data source name.                                                                                                                                                                                                  |
| **Description**    | Optional description.                                                                                                                                                                                                                |
| **Directory Path** | The directory name where table data for the collection is stored. If the directory does not exist, it is automatically created. If this directory is not specified, the directory path defaults to \${VINSTDIR}/conf/kps.            
                                                                                                                                                                                                                                        
  The path can include VDISTDIR or VINSTDIR variables. These are resolved to the API Gateway instance and installation directories. For example, \${VDISTDIR}/mydata/samples. Remember to use the correct path separator (/ on Linux).  |

Further information
-------------------

See also the following:

-   [*Configure Apache Cassandra KPS storage* on page 1](6_Configure_Apache_Cassandra_Storage.htm)
-   [*Configure database KPS storage* on page 1](7_Configure_database_storage.htm)

