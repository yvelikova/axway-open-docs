{"title":"API Portal multi-datacenter failover scenarios","linkTitle":"API Portal multi-datacenter failover scenarios","date":"2019-08-09","description":"This topic describes the expected behavior in case of a failover in API Portal multi-datacenter deployment. The following scenarios are covered:"} ﻿

This topic describes the expected behavior in case of a failover in API Portal multi-datacenter deployment. The following scenarios are covered:

-   [One API Portal instance is down](#One%C2%A0API)
-   [One database node is down](#One)
-   [A full datacenter is down](#A)
-   [The network between two datacenters is down](#The)

One API Portal instance is down
-------------------------------

In this scenario, one of the API Portal instances in a datacenter goes down:

![Reference architecture with one API Portal node down](/Images/APIPortal/API_Portal_multidc_failover_instance.png)

The following applies on this scenario:

-   The API Portal instance that is down can no longer handle requests.
-   All requests are handled by the remaining API Portal instances in the datacenter.
-   You must restart the API Portal instance that is down.

One database node is down
-------------------------

In this scenario, one database node in a database cluster goes down:

![Illustration of the reference architecture with one database node down](/Images/APIPortal/API_Portal_multidc_failover_db.png)

The following applies in this scenario:

-   The database cluster tolerates the loss of a node in the cluster, and ensures 100% data consistency when the database cluster is configured for multiple datacenters.
-   You must restart the database node that is down, and connect it to the cluster to synchronize and start operation.

{{< alert title="Note" color="primary" >}}When a database node has been down and absent from a cluster for a time, you must repair the node after re-integrating it into the cluster. By design, the database node eventually becomes consistent with the other nodes. {{< /alert >}}

A full datacenter is down
-------------------------

In this scenario, a full datacenter goes down:

![Illustration of the API Portal multi-datacenter reference architecture with one datacenter down](/Images/APIPortal/API_Portal_multidc_failover_dc.png)

The following applies in this scenario:

-   The datacenter that is down can no longer handle requests.
-   Load balancer automaticalle routes all requests to the remaining datacenters.
-   API Portal quotas remain the same but over less servers.
-   Do not deploy more data to the remaining API Portal instances until the system is back to normal.

### Restart the datacenter

Restart the failed datacenter in the following sequence:

1.  Restart the database nodes on the failed datacenter.
2.  When all database nodes are running and synchronized with rest of the clusters in the running datacenters, restart the API Portal instances on the failed datacenter.
3.  Synchronize the shared file system on in the failed datacenter with the other datacenters.

The network between two datacenters is down
-------------------------------------------

In this case, the network between DC 1 and DC 2 is down, while both datacenters remain active:

![Illustration of the API Portal multi-datacenter reference architecture with failed network between the datacenters](/Images/APIPortal/API_Portal_multidc_failover_network.png)

The following applies in this scenario:

-   Datacenters are still operating independently.
-   The data in the database clusters or in the shared file system is not synchronized between the datacenters until the network recovers. Do not deploy any updates to data.
-   When the network recovers, all data is resynchronized automatically.

