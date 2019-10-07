{
"title": "Multi-datacenter deployment",
"linkTitle": "Multi-datacenter deployment",
"weight":"30"
"date": "2019-10-02",
"description": "Learn about the recommended multi-datacenter configuration that applies to the various types of API Management data in storage."
}

This page describes the infrastructure required for API Management multi-datacenter deployment, and the various types of API Management data. For example, this includes API catalog, client registry, OAuth tokens, quota, Key Property Store (KPS), and so on. It also describes where the data is stored. For example, this includes files on disk, Apache Cassandra database, Ehcache, or Relational Database Management System (RDBMS). For details on supported database versions, see [System requirements](/docs/apigtw_install/system_requirements).

## Multi-datacenter deployment architecture

The following diagram shows the minimum infrastructure required for API Management multi-datacenter deployment.

![Multi-datacenter overview](/Images/APIGateway/multi-dc_overview.png)

This deployment architecture is described as follows:

* Each datacenter includes the same components deployed in active/active mode. Each datacenter can handle all of the traffic load and can scale in the same way. The API Gateway instances and Cassandra nodes in each datacenter are all highly available.
* API Gateway group configuration is shared across both datacenters. This means that all API Gateway instances in a group are managed as a single unit, and run the same configuration to virtualize the same APIs and execute the same policies.
* You must have at least two API Gateway instances per datacenter, at least one of which is an Admin Node Manager. However, you can configure mutliple Admin Node Managers per datacenter for high availability. For more details, see the [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)    .
* The API Gateway group in the internal zone is responsible for API management. The Admin Node Manager is the central administration server responsible for all management operations. For example, this enables API Gateway administrators to perform monitoring in the API Gateway Manager web console.
* The API Gateway group in the internal zone also hosts the API Manager web console used by API administrators. For more details, see the [API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/).
* The API Gateway group in the outer DMZ is responsible for securing traffic. The Node Manager manages local API Gateways instances on that host only.
* The Cassandra database cluster is required to store data for API Manager or API Gateway client registry (API key or OAuth). You can use Cassandra as an option to store custom KPS data and OAuth tokens. You can also use an RDBMS to store custom KPS, OAuth tokens, or metrics for API Manager or API Gateway Analytics.
* Caching is replicated between API Gateway instances using the Ehcache distributed caching system. For more details, see [Global caches](/csh?context=604&product=prod-api-gateway-77)
    in the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

## API Management data storage

This section describes what API Management data can be persisted and where.

### API Gateway data

| Data type                      | Storage location                                                                         |
|--------------------------------|------------------------------------------------------------------------------------------|
| API Gateway configuration      | Files on disk:                                                                           |
|                                | * API Gateway instance: `INSTALL_DIR/apigateway/groups/group-n/instance-n/conf/fed`      |
|                                | * Node Manager/Admin Node Manager: ` INSTALL_DIR/apigateway/conf/fed`                    |
|                                | Alternatively, you can use a deployment archive (`.fed` file).                           |
|                                | For more details, see the [API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/).|
+--------------------------------|------------------------------------------------------------------------------------------|
| API Gateway logs               | Files on disk: <br> * API Gateway instance: `INSTALL_DIR/apigateway/groups/group-n/instance-n/logs`<br> * Node Manager/Admin Node Manager:           |                                | `INSTALL_DIR/apigateway/logs`    |
| API Gateway traffic monitoring | Files on disk: <br> * API Gateway instance: `INSTALL_DIR/apigateway/groups/group-n/instance-n/conf/opsdb.d`<br> * Node Manager/Admin Node Manager: `INSTALL_DIR/apigateway/conf/opsdb.d`|
| API Gateway KPS custom tables  | Cassandra or RDBMS  |

### API Manager data

+-----------------------------------+-----------------------------------+
| Data type                         | Storage location                  |
+===================================+===================================+
| API Manager catalog, client       | Cassandra                         |
| registry,                         |                                   |
| web-based settings                |                                   |
+-----------------------------------+-----------------------------------+
| API Manager quota counters        | In memory, Cassandra, or RDBMS    |
+-----------------------------------+-----------------------------------+
| API Manager metrics               | RDBMS                             |
+-----------------------------------+-----------------------------------+

## Further details

For more details on concepts such as shared group configuration, Node Manager, and Admin Node Manager, see the [API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5).

For details on how to configure API Management in multiple datacenters, see:

* [Multi-datacenter configuration](/docs/apigtw_install/multi_datacenter_config)
* [Multi-datacenter failover scenarios](/docs/apigtw_install/multi_datacenter_failover)
