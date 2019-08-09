{"title":"Deploy API Portal HA in a single datacenter","linkTitle":"Deploy API Portal HA in a single datacenter","date":"2019-08-09","description":"The HA deployment provides both high availability and horizontal scalability. To achieve a API Portal high-availability (HA) deployment, you must deploy at least two API Portal instances with a shared file system for data storage behind a load balancer. "} ﻿

The HA deployment provides both high availability and horizontal scalability. To achieve a API Portal high-availability (HA) deployment, you must deploy at least two API Portal instances with a shared file system for data storage behind a load balancer.

This section describes the infrastructure and the steps required for deploying API Portal HA configuration in a single datacenter.

Deployment architecture
-----------------------

The load balancer performs Transmission Control Protocol (TCP) checks at the network level on both active API Portal instances. If either of the crucial services (Apache or MySQL) becomes unavailable in one instance, the load balancer redirects traffic to another available instance. When the failed instance returns to normal operation, the traffic is again evenly distributed between all instances.

The following diagram illustrates the HA setup with two API Portal instances:

![Illustration of a reference architecture for API Portal HA in a single datacenter](/Images/APIPortal/API_Portal_sigle_dc_HA.png)

A load balancer sits outside the external firewall and routes the traffic from the Internet and end users to the API Portal instances. The Apache web servers are located in the demilitarized zone (DMZ), and communicate with the shared file system and the database cluster located in the internal zone.

The shared file system synchronizes static files (such as images uploaded by users) between the API Portal instances. The database cluster stores data (for example, configuration data) that API Portal queries as required. You must have at least three database nodes for HA.

For more details on data storage in API Portal HA configuration, see [Data storage](HA_overview.htm#Data).
