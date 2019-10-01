---
title: Operate and monitor API Gateway containers
linkTitle: Operate and monitor API Gateway containers
weight: 8
date: 2019-09-18
description: You can use the API Gateway Manager web UI to operate and monitor API Gateways running in containers.
---

## Connect to API Gateway Manager

To access the web-based API Gateway Manager UI in a container environment, enter the following URL in a web browser:

``` 
https://HOST:8090/
```

`HOST`
refers to the host name or IP address of the host machine (for example, `https://localhost:8090/`).

{{< alert title="Note" color="primary" >}}To access API Gateway Manager from your host machine you must have mapped the Admin Node Manager container port 8090 to port 8090 on your host machine, as detailed in [Step 6 – Start the Admin Node Manager Docker container](/docs/container_topics/containers_docker_setup/docker_script_anmstart).{{< /alert >}}

## Monitor API Gateway containers in API Gateway Manager

![API Gateway Manager web UI](/Images/ContainerGuide/gw_mgr_ui.png)

API Gateway Manager includes the following features for operating and monitoring API Gateway running in containers:

### Dashboard

* View traffic summary.
* Monitor network topology (API Gateway containers and groups).

You cannot create or delete groups, start or stop API Gateways, or deploy new configuration from API Gateway Manager when running API Gateway in containers.

### Monitoring

* Monitor traffic processed in real-time.

### Traffic

* View message log and performance statistics on the traffic processed.

### Logs

* View domain audit logs, transaction audit logs, transaction access logs, and trace information.

### Events

* View transaction audit events, alerts, and SLA alerts.

### Settings

* Configure dynamic settings.

## Where to go next

For more information on redirecting logs to stdout, see [Redirect logs to stdout](/docs/container_topics/configure_log_streaming/).

For more information on monitoring traffic, see [Monitor services in API Gateway Manager](/csh?context=100&product=prod-api-gateway-77) in the [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/).

For more information on monitoring topology, see [Manage domain topology in API Gateway Manager](/csh?context=107&product=prod-api-gateway-77) in the [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/).

For more information on viewing logs and events, and configuring dynamic settings, see [Configure API Gateway logging and events](/csh?context=108&product=prod-api-gateway-77) in the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/).
