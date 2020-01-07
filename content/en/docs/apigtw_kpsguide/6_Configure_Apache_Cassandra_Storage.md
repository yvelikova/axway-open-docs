{
"title": "Configure Apache Cassandra KPS storage",
"linkTitle": "Configure Apache Cassandra KPS storage",
"date": "2020-01-06",
"description": "Apache Cassandra provides a highly available (HA) data storage option for KPS. API Gateway can connect to an external Cassandra database cluster. You must configure three Cassandra nodes to provide a HA data service. A default single Cassandra node, non-HA system typically does not require additional configuration."
}
﻿

Apache Cassandra provides a highly available (HA) data storage option for KPS. API Gateway can connect to an external Cassandra database cluster. You must configure three Cassandra nodes to provide a HA data service. A default single Cassandra node, non-HA system typically does not require additional configuration.

{{< alert title="Note" color="primary" >}}Custom KPS data defined in Policy Studio supports Cassandra, database, and file data stores. However, API Manager KPS tables (Client Registry and API Catalog) support Cassandra only. Database and file data stores are not supported for API Manager. Three-node Cassandra HA with full consistency is required for API Manager.{{< /alert >}}

For details on installing and configuring Apache Cassandra HA for API Gateway and API Manager, see the
[API Gateway Apache Cassandra Administrator Guide](/bundle/APIGateway_77_CassandraGuide_allOS_en_HTML5/)
.
