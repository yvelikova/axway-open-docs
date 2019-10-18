{
"title": "Perform zero downtime shutdown",
"linkTitle": "Perform zero downtime shutdown",
"date": "2019-10-14",
"description": "This topic describes how to perform a zero downtime shutdown of API Gateway in a multi-node API Gateway environment with a load balancer."
}
﻿

This topic describes how to perform a zero downtime shutdown of API Gateway in a multi-node API Gateway environment with a load balancer.

When you need to shut down an API Gateway for any reason (for example, during an upgrade), zero downtime shutdown enables you to indicate this to the load balancer for a set amount of time before the shutdown begins, avoiding traffic loss.

Shut down an API Gateway using zero downtime shutdown
-----------------------------------------------------

To perform a zero downtime shutdown, follow these steps:

1.  Enable zero downtime shutdown in Policy Studio, and set the delay before shutdown. For more information, see [*Zero downtime settings* on page 1](general_zdd_settings.htm).
2.  Configure your load balancer to ping the Health Check LB policy periodically to determine if each API Gateway is healthy. This is available on the following default URL:

``` {space="preserve"}
http://APIGATEWAY_HOST:8080/healthchecklb
```

1.  Initiate shutdown of an API Gateway using the command line or API Gateway Manager. For more information, see [*Start and stop the API Gateway* on page 1](general_startup.htm) or [*Manage API Gateway instances* on page 1](managetopology.htm#Manage).
2.  When shutdown is initiated on the API Gateway:
    -   The Health Check LB policy returns a `503 Service Unavailable` response. This indicates to the load balancer that the API Gateway is not available for traffic and the load balancer stops routing to it.
    -   After the specified delay before shutdown (for example, 10 seconds), the API Gateway is shut down.

    >

