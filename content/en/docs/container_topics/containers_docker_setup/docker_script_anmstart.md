---
title: Step 6 - Start the Admin Node Manager Docker container
linkTitle: Step 6 Start the Admin Node Manager Docker container
date: 2019-09-18
description: 
---
Use the `docker run` command to start the Admin Node Manager container.

## Start a metrics-enabled Admin Node Manager container {#Start}

The following example shows how to run a metrics-enabled Admin Node Manager container in the background on a specific port:

```
$ docker run -d -p 8090:8090 --name=anm --network=api-gateway-domain
-v /tmp/events:/opt/Axway/apigateway/events
-e METRICS_DB_URL=jdbc:mysql://metricsdb:3306/metrics?useSSL=false
-e METRICS_DB_USERNAME=db_user1 -e METRICS_DB_PASS=my_db_pwd admin-node-manager:1.0
-e EMT_TRACE_LEVEL=DEBUG
```

This example performs the following:

* Starts an Admin Node Manager container named `anm` from an image named `admin-node-manager:1.0`. You must specify the name of the image that you created in [Step 5 Create an Admin Node Manager Docker image](/docs/container_topics/containers_docker_setup/docker_script_anmimage).
* Binds the default management port `8090` of the container to port `8090` on the host machine. This enables you to access the API Gateway Manager web console on port `8090` of your host machine.
* Runs the container in the background using the `-d` option.
* Mounts the `/tmp/events` host directory in the container, which contains API Gateway transaction event logs. For best practice, you can parametrize this directory by way of the `quickstart.sh` script included in the Docker scripts package.
* Uses `METRICS_DB_URL`, `METRICS_DB_USERNAME` and `METRICS_DB_PASS` environment variables to specify connection details for the metrics database.
* Uses an environment variable `EMT_TRACE_LEVEL` to set a trace level inside the container. In the above example a trace level switches from INFO to DEBUG level during container startup.

## Start an Admin Node Manager container with topology logging enabled

Topology logging contains usage statistics that can be used for billing. It records the number of gateways that are running and the number of transactions (for example: HTTP, JMS, FTP, and directory scanner) processed by each. This can be useful for tracking the distribution of gateways across hosts.

The Admin Node Manager is responsible for writing the topology log, which is configured by way of environment variables. Topology logging is disabled by default.

{{< alert title="Note" color="primary" >}} Topology logging and subscription-based billing are restricted to container-based API Gateway installations that are running in EMT mode.{{< /alert >}}

The following example shows how to configure environment variables to start an Admin Node Manager container with topology logging enabled:

```
$ docker run -e EMT_TOPOLOGY_LOG_ENABLED=true -e EMT_TOPOLOGY_LOG_INTERVAL=30
  -e EMT_TOPOLOGY_LOG_DEST=3 -e EMT_TOPOLOGY_LOG_DIR=/tmp/topology-logs
  ... admin-node-manager:1.0
```

This example performs the following:

* Starts an Admin Node Manager with topology logging enabled.
* Sets the time interval to write log records.
* Sets the destination of the log records.
* Specifies a directory to write log records.

{{< alert title="Note" color="primary" >}} You must specify the API Gateway host identity in [Step 8 Start the API Gateway Docker container](/docs/container_topics/containers_docker_setup/docker_script_gwstart) to be able to identify the host of the log records.{{< /alert >}}

## Further information

For more details on the `docker run` command, see the [Docker user documentation](https://docs.docker.com/ "https://docs.docker.com/").

For more information on the environment variables that you can specify at runtime, see [Environment variables reference](/docs/container_topics/container_env_variables#Environm).
