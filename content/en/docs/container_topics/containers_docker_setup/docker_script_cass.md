---
title: Step 2 - Start external data stores
linkTitle: Step 2 Start external data stores
date: 2019-09-18
description: 
---
If you are using any external data stores, such as Apache Cassandra for API Manager, or a metrics database for API Manager or API Gateway Analytics, you must start these data stores.

## Start Apache Cassandra

Deploying a Cassandra container is only recommended for development environments. In a production environment, you must configure Cassandra for high availability (HA) as detailed in
[Configure a Cassandra HA cluster](/csh?context=1300&product=prod-api-gateway-77)
in the
[API Gateway Apache Cassandra Administrator Guide](/bundle/APIGateway_77_CassandraGuide_allOS_en_HTML5/).

For details on starting Apache Cassandra in a Docker container, see <https://hub.docker.com/_/cassandra>.

## Start the metrics database

If you are using a metrics database, you can use the `docker run` command to start a database container.

```
$ cd emt_containers-<version>
$ cp quickstart/mysql-analytics.sql /tmp/sql
$ docker run -d --name metricsdb --network=api-gateway-domain 
-v /tmp/sql:/docker-entrypoint-initdb.d 
-e MYSQL_ROOT_PASSWORD=root01 -e MYSQL_DATABASE=metrics 
mysql:5.7
```

The above `docker run` command performs the following:

* Downloads a MySQL 5.7 Docker image from the public Docker registry.
* Mounts the host directory `/tmp/sql` (containing a MySQL metrics database creation script) inside the container.
* Uses environment variables `MYSQL_ROOT_PASSWORD` and `MYSQL_DATABASE` to specify the database root password and the database name.
* Starts a MySQL container named `metricsdb`.
