---
title: Step 1 Create a Docker network
linkTitle: Step 1 Create a Docker network
date: 2019-09-18
description: You must run the `docker network` command to create a Docker network for the API Gateway domain. This enables all of the containers in the domain to communicate with each another easily (for example, the API Gateway container and Admin Node Manager container). A containerized API Gateway domain must include one Admin Node Manager container and one or more API Gateway containers.
---

Run the `docker network` command

```
$ docker network create api-gateway-domain
```

This example creates a Docker network called `api-gateway-domain`. For more details on the `docker network` command, see the [Docker user documentation](https://docs.docker.com/ "https://docs.docker.com/").

## Example API Gateway domain

The example Quick Start API Gateway domain topology provided with the API Gateway Docker scripts includes the following Docker containers:

![Example containerized API Gateway domain](/Images/ContainerGuide/container_gw_domain.png)

This simple API Gateway domain topology is described as follows:

* Container 1 runs an Apache Cassandra database that stores API Manager data.
* Container 2 runs a MySQL database that stores API Gateway metrics data.
* Container 3 runs an API Gateway that writes transaction event logs, and includes API Manager is an optional component. For more details, see [Deploy API Manager or OAuth in Docker containers](/docs/container_topics/container_apimgr_oauth).
* Container 4 runs an Admin Node Manager that generates metrics from transaction event logs, which are then read from the metrics database by API Manager and API Gateway Analytics.
* Container 5 runs API Gateway Analytics, which is an optional standalone client of the metrics database. For more details, see [Deploy API Gateway Analytics in Docker containers](/docs/container_topics/container_apigateway_analytics).

{{< alert title="Note" color="primary" >}}The example Quick Start domain topology is suitable for a development environment only. For more details, see the readme file provided with the API Gateway Docker scripts.{{< /alert >}}
