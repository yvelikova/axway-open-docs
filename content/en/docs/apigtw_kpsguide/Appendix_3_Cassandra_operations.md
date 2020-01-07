{
"title": "Apache Cassandra operations for API Gateway",
"linkTitle": "Apache Cassandra operations for API Gateway",
"date": "2020-01-06",
"description": "This appendix describes important Apache Cassandra operations for node repair and backup and recovery."
}
﻿

This appendix describes important Apache Cassandra operations for node repair and backup and recovery.

nodetool repair
---------------

The nodetool repair command repairs inconsistencies across all Cassandra replicas for a given range of data. For more details, see:

<http://www.datastax.com/documentation/cassandra/1.2/cassandra/operations/ops_repair_nodes_c.html>

You should execute this command weekly, at off-peak times, and stagger execution on different nodes.

The following is a simple crontab command that executes repair every 10 minutes:

vagrant@node-3:\~\$ crontab  

\*/10 \* \* \* \* /home/vagrant/from/apigateway/posix/bin/nodetool -h node-3 repair kps >> /home/vagrant/nodetool.log

{{< alert title="Note" color="primary" >}}This is a simple example from a development test. In production, do not execute repair every 10 minutes.{{< /alert >}}

Backup and recovery
-------------------

This section explains how to back up and restore all KPS data.

### Back up and restore Cassandra node data

To back up and restore Cassandra data (online and HA), use the following instructions:

<http://www.datastax.com/documentation/cassandra/1.2/cassandra/operations/ops_backup_restore_c.html>

{{< alert title="Note" color="primary" >}} When restoring from a snapshot, you should follow the node restart method.{{< /alert >}}

### Back up API Gateway KPS configuration

KPS configuration is stored in the API Gateway group configuration in the following directory:

INSTALL\_DIR/apigateway/group-n/conf

You should regularly back up this directory.

### Back up API Gateway Cassandra configuration and data

API Gateway group configuration and data is stored in the following directory:

INSTALL\_DIR/apigateway/group-n/instance-m/conf/kps/cassandra

This contains the Cassandra configuration (cassandra.yaml, client.yaml, and jvm.xml files). It also includes the Cassandra runtime data in the data, saved\_caches, and commitlog subdirectories.

You should regularly back up this directory.

{{< alert title="Note" color="primary" >}}For more details on API Gateway backup and disaster recovery, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.{{< /alert >}}

Replace dead node
-----------------

The procedure for a standard Cassandra installation is as follows:

<http://www.datastax.com/documentation/cassandra/1.2/cassandra/operations/ops_replace_node_t.html>

The procedure for API Gateway is as follows:

1.  Confirm that the node is dead using nodetool status (see the Cassandra procedure above).
2.  Note the address of the dead node (this is used in the last step).
3.  Install a new API Gateway, or restore a backup of an existing API Gateway. Do not start the API Gateway.
4.  The API Gateway Cassandra directory is:
5.  INSTALL\_DIR/apigateway/group-n/instance-m/conf/kps/cassandra
6.  Copy `cassandra.yaml`, `client.yaml` and` jvm.xml` from a backup or recreate in the API Gateway Cassandra directory.
7.  Backup and remove the data, saved\_caches, and commitlog directories if they exist. cassandra-topology.properties is required for multi-datacenter configuration. Axway currently does not test or support this kind of configuration. For more details on the cassandra.yaml file, see the standard Cassandra procedure above.

auto\_bootstrap should not be listed or should be set to false

1.  Start the API Gateway with the -Dcassandra.replace\_address option. Ensure JMX is enabled. For example:
2.  

    ./startinstance

    -g TeamA

    -n api2

    -Dcassandra.replace\_address=192.168.99.12

    -DenableJMX

3.  Remember to remove the -Dcassandra.replace\_address option for subsequent starts.

