{
"title": "Deploy sandbox and production APIs",
"linkTitle": "Deploy sandbox and production APIs",
"date": "2019-09-17",
"description": "In a production environment, enterprises should create and deploy the following separate API Gateway groups:\\n"
}
﻿

<div id="p_api_mgmt_environment_over">

Overview
--------

In a production environment, enterprises should create and deploy the following separate API Gateway groups:

-   *Sandbox API group*—the APIs that API consumers use against test back-end systems before going live (for example, a test credit card payment system)
-   *Production API group*—the production APIs that front the production back-end systems (for example, a live credit card payment system)

This production environment topology is recommended by Axway. For details on creating a domain environment topology, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

This topic shows an example production environment topology with Sandbox and Production API groups, and shows examples of promoting and onboarding Sandbox APIs to Production APIs.

</div>

<div id="p_api_mgmt_environment_intro">

Production environment topology
-------------------------------

The following diagram shows the environment topology in a typical production domain. This environment topology includes two separate API Gateway groups, each of which includes two API Gateway instances with API Manager deployed on each, and its own Client Registry and API Manager. This enables the message traffic for the Sandbox API and the Production API to be kept separate.

For example, in named organization X, when an API consumer builds a client application, they log into API Manager in the Sandbox API group. The development application sends requests to the API Gateway instances in the Sandbox API group. Similarly, when an operator manages the production application, they log in to API Manager in the Production API group. The production application sends requests to the API Gateway instances in Production API group. In this way, the Sandbox test traffic can be isolated from the live Production traffic.

The Sandbox API group can support both the Community organization and named organizations, including self-registration. API consumers are registered to create applications, and applications are registered for testing prior to onboarding to the Production APIs. However, the Production API group should support named organizations only, and not the Community, with registration restricted to the API administrator and organization administrator.

![Example production domain](/Images/docbook/images/api_mgmt/api_mgmt_production.png)

</div>

Promote configuration to sandbox and production APIs
----------------------------------------------------

The following diagram shows the process of promoting API Gateway policy-based configuration from the downstream environment (for example, development or testing) to both the Sandbox API and Production API groups in the production environment.

Both the Sandbox API and Production API groups are virtualizing the same APIs and therefore must use the same policy package (`.pol`). During configuration promotion, the policy package from the downstream environment (for example, testing) is copied and deployed to both API groups.

However, both API groups use different environment specific configuration (for example, to connect to different back-end systems, which require different connection information). Therefore each API group has a specific environment package (`.env`) that is deployed to the API group along with the common policy package. For more details on promoting API Gateway configuration between environments, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
.

![Promote production APIs](/Images/docbook/images/api_mgmt/api_mgmt_promotion.png)

If your deployment does not use API Gateway policy-based configuration, you can promote APIs from a downstream environment using the API Manager export/import mechanism. For more details, see [*Promote managed APIs* on page 1](api_mgmt_promote.htm).

<div id="p_api_mgmt_environment_onboarding">

Onboard to production APIs
--------------------------

The following diagram shows the process of onboarding a client application from the Sandbox API group to the Production API group. For the API Provider, production onboarding involves registering the API Client in the Production API group, and copying or importing client application information from the Client Registry in the Sandbox API group. For the API Client, the client application is deployed into the API Client production environment, and is configured to invoke the Productions APIs.

![Onboarding production APIs](/Images/docbook/images/api_mgmt/api_mgmt_onboarding.png)

{{< alert title="Note" color="primary" >}}Production onboarding involves more than the technical task of onboarding information between API groups. Internal business processes, which are out of the scope of this document, also need to be considered. {{< /alert >}}
These include commercial or legal issues that need to be resolved when setting up a formal business partnership between an API Provider and API Client. For example, will the client be charged for API use, and what quotas are required to service the demand from the end users of client applications.

</div>

<div id="p_api_mgmt_environment_ha">

Configure high availability
---------------------------

Each API Gateway instance connects to an external Apache Cassandra for default persistent data storage. This Cassandra database is used by features such as API Manager, API keys, and OAuth.

If you configure multiple API Gateways in a group, you should configure high availability in the Apache Cassandra database. For more details, see the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
.

</div>
