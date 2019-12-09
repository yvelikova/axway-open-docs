{
"title": "Configure rate limiting",
"linkTitle": "Configure rate limiting",
"date": "2019-10-17",
"description": " You can configure limits to the rate at which message requests pass through the API Gateway. The **Throttling**\\nfilter enables you to limit the number of requests that pass through API Gateway instances over a specified time period. For example, this enables you to enforce a specified message quota or *rate limit* on a client application, and to protect a back-end service from message flooding. This is especially useful under high volume and in elastic deployments, where dynamic topology changes can destabilize back-end servers."
}
﻿

You can configure limits to the rate at which message requests pass through the API Gateway. The **Throttling**
filter enables you to limit the number of requests that pass through API Gateway instances over a specified time period. For example, this enables you to enforce a specified message quota or *rate limit* on a client application, and to protect a back-end service from message flooding. This is especially useful under high volume and in elastic deployments, where dynamic topology changes can destabilize back-end servers.

The **Throttling** filter provides the following rate limit algorithms:

-   **Smooth Rate Limiting**: This algorithm smooths out the traffic by dividing per second limits into regular millisecond intervals. For example, a setting of 500 requests per second results in 1 request being accepted every 2 milliseconds. It provides most protection to back-end servers, and is especially suitable for back-end server throttling in elastic environments, but can also be used in on-premise deployments.
-   The Smooth Rate Limiting algorithm distributes rate limits among running API Gateways evenly (round robin) or dynamically (based on past traffic) to match your load balancing strategy. It also keeps track of the number of running API Gateways and dynamically updates the limits for each API Gateway when there is a change in the number of running API Gateways.
-   The smooth rate limits are stored in an Apache Cassandra database. If you want to use this algorithm, you must first configure an Apache Cassandra connection. For more details, see
-   **Floating Time Window**: This algorithm is provided for backwards compatibility with previous API Gateway versions. It does not include any traffic smoothing, and is suitable for lower traffic levels, over longer time intervals (for example, 10 transactions per minute or 100 transactions per hour). This means that if a rate limit is set to 100 requests per minute, all 100 can arrive in the first 10 seconds, and will be served. But any requests in next 50 seconds will be rejected. Floating time window is the default algorithm. Its rate limits are stored in a local or distributed cache.

To configure the rate limiting, you must include a **Throttling** filter in your API Gateway policy, and select the desired algorithm: **Smooth Rate Limiting** or **Floating Time Window**.

Further information
-------------------

For details on how to configure all available settings in the **Throttling** filter for each rate limiting algorithm, see the following:

-   [Throttling](/csh?context=530&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)

For details on how to deploy API Gateway in elastic and classic environments, see the following:

-   [API Gateway Container Deployment Guide](/bundle/APIGateway_77_ContainerGuide_allOS_en_HTML5/)
-   
