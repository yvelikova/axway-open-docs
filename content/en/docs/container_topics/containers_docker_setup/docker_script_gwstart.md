---
title: Step 8 - Start the API Gateway Docker container
linkTitle: Step 8 Start the API Gateway Docker container
date: 2019-09-18
description: 
---
Use the `docker run` command to start the API Gateway container.

## Start an API Manager-enabled API Gateway container

The following example shows how to run an API Manager-enabled API Gateway container in the background on a specific port:

```
$ docker run -d --name=apimgr --network=api-gateway-domain
  -p 8075:8075 -p 8065:8065 -p 8080:8080
  -v /tmp/events:/opt/Axway/apigateway/events
  -e EMT_ANM_HOSTS=anm:8090 -e CASS_HOST=casshost1
  -e METRICS_DB_URL=jdbc:mysql://metricsdb:3306/metrics?useSSL=false
  -e METRICS_DB_USERNAME=root -e METRICS_DB_PASS=my_db_pwd
  -e EMT_TRACE_LEVEL=DEBU
  api-gateway-my-group:1.0
```

This example performs the following:

* Starts an API Manager-enabled container from an image named `api-gateway-my-group:1.0`. You must specify the name of the API Gateway Docker image that you created in [Step 7 – Create an API Gateway Docker image](/docs/container_topics/containers_docker_setup/docker_script_gwimage).
* Runs the container in the background using the `-d` option.
* Binds the default traffic port `8080` of the container to port `8080` on the host machine, which enables you to test the API Gateway on your host machine.
* Mounts the `/tmp/events` host directory in the container using the `-v` option. This directory contains API Gateway transaction event logs. For more details, see [Mount volumes to persist logs outside the API Gateway container](#Mount). For best practice, you can parametrize this directory by way of the `quickstart.sh` script included in the Docker scripts package.
* Sets the `CASS_HOST` environment variable with the Apache Cassandra
    host that is used to store the API Manager data.
* Uses `METRICS_DB_URL`, `METRICS_DB_USERNAME` and `METRICS_DB_PASS` environment variables to specify connection details for the metrics database.
* Uses an environment variable `EMT_TRACE_LEVEL` to set a trace level inside the container. In the above example a trace level switches from INFO to DEBUG level during container startup.
* Sets the `EMT_ANM_HOSTS` environment variable to `anm:8090` in the container. This enables the API Gateway to communicate with the Admin Node Manager container on port `8090`. The API Gateway is now visible in the API Gateway Manager topology view.

![API Gateway container in topology view](/Images/ContainerGuide/gw_mgr_topology.png)

## Start an API Gateway container with topology logging enabled

If you have started an Admin Node Manager with topology logging enabled, you must specify the gateway host identity in the `EMT_PARENT_HOST` environment variable to identify the host of the log records, and restart the host.

The following example shows how to set `acme-DC1-server2` as the name of the parent host in the topology log records.

```
$ docker run -e EMT_PARENT_HOST=acme-DC1-server2 ... api-gateway-my-group:1.0
```

{{< alert title="Note" color="primary" >}} If you do not specify this variable, the topology log records for the gateway will contain the value `<UNKNOWN>` for the parent host.{{< /alert >}}

## Mount volumes to persist logs outside the API Gateway container {#Mount}

You can persist API Gateway trace and event logs to a directory on your host machine. For example, run the following `docker run` command to start an API Gateway container from an image named `api-gateway-my-group:1.0` and mount volumes for trace and event logs:

```
$ docker run -it -v /tmp/events:/opt/Axway/apigateway/events
-v /tmp/trace:/opt/Axway/apigateway/groups/emt-group/emt-service/trace
-e EMT_ANM_HOSTS=anm:8090 -p 8080:8080 --network=api-gateway-domain api-gateway-my-group:1.0
```

This example starts the API Gateway container and writes the trace and log files to `/tmp/events` and `/tmp/trace` on your host machine. The trace and log files contain the container ID of the API Gateway container in the file names.

{{< alert title="Note" color="primary" >}}To enable an Admin Node Manager container to process the event logs from API Gateway containers, you must run the Admin Node Manager container with the same volume mounted. For more details, see [Create a metrics-enabled ANM image](/docs/container_topics/containers_docker_setup/docker_script_anmimage#Create9) and [Start a metrics-enabled Admin Node Manager container](/docs/container_topics/containers_docker_setup/docker_script_anmstart#Start).{{< /alert >}}

## Start a deployment-enabled API Gateway container in a development environment

The following simple example sets the `EMT_DEPLOYMENT_ENABLED` environment variable to `true` to enable you to deploy configuration directly from Policy Studio to the running API Gateway container:

```
$ docker run -d -e EMT_DEPLOYMENT_ENABLED=true -e EMT_ANM_HOSTS=anm:8090
-p 8080:8080 --network=api-gateway-domain api-gateway-my-group:1.0
```

{{< alert title="Caution" color="warning" >}}The `EMT_DEPLOYMENT_ENABLED` environment variable is provided as a convenience for development environments only:{{< /alert >}}

* Do not set `EMT_DEPLOYMENT_ENABLED=true` on production systems. In production environments, to deploy changes in API Gateway configuration, you must export a `.fed` file from Policy Studio, rebuild the API Gateway Docker image, and restart the API Gateway Docker container.
* The `EMT_DEPLOYMENT_ENABLED=true` setting only enables you to deploy changes to a running container from Policy Studio. You cannot deploy changes using the API Gateway Manager, `managedomain`, or `projdeploy` tools.

## Further information

For more information on the environment variables that you can specify at runtime, see [Environment variables reference](/docs/container_topics/container_env_variables#Environm).
