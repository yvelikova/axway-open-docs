{"title":"API Portal single datacenter failover scenarios","linkTitle":"API Portal single datacenter failover scenarios","date":"2019-08-09","description":"This topic describes the expected behavior in case of a failover in API Portal high-availability (HA) deployment in a single datacenter. The following scenarios are covered:"} ﻿

This topic describes the expected behavior in case of a failover in API Portal high-availability (HA) deployment in a single datacenter. The following scenarios are covered:

-   [One API Portal instance is down](#One%C2%A0API)
-   [One database node is down](#One)
-   [The whole datacenter is down](#A)

One API Portal instance is down
-------------------------------

In this scenario, one of the API Portal instances in the datacenter goes down:

![Illustration of API Portal HA configuration with one instance down.](/Images/APIPortal/API_Portal_HA_failover_instance.png)

The following applies on this scenario:

-   The API Portal instance that is down can no longer handle requests.
-   All requests are handled by the remaining API Portal instances.
-   You must restart the API Portal instance that is down.

One database node is down
-------------------------

In this scenario, one database node in a database cluster goes down:

![Illlustration of API Portal HA configuration with one database node down](/Images/APIPortal/API_Portal_HA_failover_db.png)

The following applies in this scenario:

-   The database cluster tolerates the loss of a node in the cluster, and ensures 100% data consistency.
-   You must restart the database node that is down, and connect it to the cluster to synchronize and start operation.

{{< alert title="Note" color="primary" >}}When a database node has been down and absent from a cluster for a time, you must repair the node after re-integrating it into the cluster. By design, the database node eventually becomes consistent with the other nodes. {{< /alert >}}

The whole datacenter is down
----------------------------

In this scenario, the whole datacenter goes down:

![Illustration of API Portal HA setup when the datacenter is down](/Images/APIPortal/API_Portal_HA_failover_dc.png)

The following applies in this scenario:

-   No requests can be handled.
-   Load balancer must properly handle failures.
-   No data can be deployed until the system is back to normal.

### Restart the datacenter

Restart the datacenter in the following sequence:

1.  Restart the database nodes and reconfigure the cluster.
2.  When all database nodes are running and synchronized, restart the API Portal instances.
3.  Synchronize the shared file system on the API Portal instances.

