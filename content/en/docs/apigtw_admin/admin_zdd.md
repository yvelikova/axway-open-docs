{
"title": "Perform zero downtime deployment",
"linkTitle": "Perform zero downtime deployment",
"date": "2019-10-14",
"description": "This topic describes how to perform a zero downtime policy deployment to API Gateway in a multi-node API Gateway environment with a load balancer."
}
﻿

This topic describes how to perform a zero downtime policy deployment to API Gateway in a multi-node API Gateway environment with a load balancer.

When you deploy configuration (for example, a `.fed` file) to a group of API Gateways, the configuration is deployed sequentially to each API Gateway in the group. While the configuration is being deployed to a given API Gateway there is a service interruption during which that API Gateway cannot process traffic.

Zero downtime deployment enables you to orchestrate deployment to a load-balanced set of API Gateways, ensuring that a subset can always process traffic.

The following diagram illustrates the process:

![ZDD flows](/Images/AdminGuide/ZDD_process.png)

1.  A user initiates deployment of new configuration from Policy Studio.
2.  The Admin Node Manager starts deployment in `API Gateway 1`.
3.  `API Gateway 1` starts responding to a ping from the load balancer with `503 Service Unavailable`. The load balancer stops routing traffic to `API Gateway 1`.
4.  `API Gateway 1` performs the deployment.
5.  `API Gateway 1` starts responding to the load balancer ping with `200 OK`. The load balancer starts routing traffic to `API Gateway 1` again.
6.  `API Gateway 1` informs the Admin Node Manager that deployment is complete.
7.  The Admin Node Manager repeats step 2 through step 6 for `API Gateway 2`.

Deploy configuration using zero downtime deployment
---------------------------------------------------

To perform a zero downtime policy deployment, follow these steps:

1.  Enable zero downtime deployment in Policy Studio, and set the delays before and after deployment. For more information, see [*Zero downtime settings* on page 1](general_zdd_settings.htm).
2.  Configure your load balancer to ping the Health Check LB policy periodically to determine if each API Gateway is healthy. This is available on the following default URL:

``` {space="preserve"}
http://APIGATEWAY_HOST:8080/healthchecklb
```

1.  Initiate deployment to a group of API Gateways using API Gateway Manager, Policy Studio, or managedomain. For more information, see [*Deploy API Gateway configuration* on page 1](../CommonTopics/deploy_wizard.htm). The configuration is deployed sequentially to each API Gateway in the group.
2.  When deployment is initiated on each API Gateway:
    -   The Health Check LB policy returns a `503 Service Unavailable` response. This indicates to the load balancer that this API Gateway is not available for traffic and the load balancer stops routing to it.
    -   After the specified delay before deployment (for example, 10 seconds), the configuration is deployed to the API Gateway.
    -   When the deployment is complete, the Health Check LB policy returns a `200 OK` response. This indicates to the load balancer that this API Gateway is available for traffic again.
    -   After the specified delay after deployment (for example, 10 seconds), a response is sent to the deployment request. Deployment can now be initiated to the next API Gateway in the group.

    >

