{"title":"AMPLIFY Central overview","linkTitle":"AMPLIFY Central overview","date":"2019-07-30","description":"Deploy and secure your services in any environment (for example, cloud, on-premise, and so on) and govern your APIs through a central platform that allows you to integrate your services safely and easily with both internal and external consumers."}

*Estimated reading time: 2 minutes*

AMPLIFY Central is a governance platform that enables a self-service centralized API and microservices management across virtualized networks in any cloud platform or in a private datacenter. Its core features provide API security, monitoring, and traffic management independent of the implementation of the API.

The following diagram shows full lifecycle API management, and the role of AMPLIFY Central in governing, exposing, and monitoring API traffic flowing within your organization.

![full lifecycle API management](/Images/central/api_central_overview.png)

API management
--------------

AMPLIFY Central capabilities for managing APIs include registering and deploying your APIs to test and production environments, securing the API with an API key, and monitoring the API usage and traffic.

DevOps integration
------------------

AMPLIFY Central supports your DevOps processes by providing an API and a CLI for you to automate your configuration and deployments.

You can create API proxies and deploy them to runtime groups using the AMPLIFY Central DevOps API and the AMPLIFY CLI. You can test the API proxies and view the traffic monitoring results through the AMPLIFY Central UI.

To learn how to integrate AMPLIFY Central in your DevOps pipeline and automate managing your API proxies, see the [AMPLIFY Central DevOps API documentation](https://d-api.docs.stoplight.io/) and [Manage an API proxy using AMPLIFY CLI](../devops/cli_proxy_flow.htm).

Traffic management
------------------

AMPLIFY Central provides centralized control and governance for the API traffic flowing within the organization across multiple environments. By handling service's needs like common network functions (for example, routing and load balancing), resiliency functions (for example, retries and timeouts), and security functions (for example, authentication, authorization) it frees up the development teams to focus on the business logic of your company.

AMPLIFY Catalog
---------------

AMPLIFY Catalog provides a registry of all endpoints belonging to an organization. Examples of endpoints are APIs, MFT flows, SOAP, or gRPC, and they can be in different environments such as in the cloud, on-premise, within a microservice mesh, or at the edge (DMZ) of an organization. AMPLIFY Catalog allows developers to quickly discover and understand the endpoints and protocols that they can use to integrate quickly with your services.
