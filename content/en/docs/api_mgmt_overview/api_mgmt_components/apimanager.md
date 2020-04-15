{
"title": "Introduction to API Manager",
"linkTitle": "API Manager",
"weight":"15",
"date": "2020-04-14",
"description": ""
}

## API Manager

The API Manager, along with the API Gateway, is the core component of the Axway API management solution and provides the following functionality

The main API Manager features are:

* API registration - Adding APIs to the API Catalog. For details, see [API Regsitration](#api-regsitration)
* Partner organization management - API Manager includes partner-based management of API consumers that browse the API Catalog and client applications that use the APIs. Delegated partner administration enables partner organizations to manage their own API consumers, easing the management of large partners, or a large number of partners. A wide range of client application credentials are supported, including OAuth 2.0 and API keys.
* Policy management - API Manager enables you to apply authorization and quota policies to APIs at the partner and client application levels. Custom policies can also be developed in Policy Studio, and applied to APIs.
* API alerting - API Manager enables you to configure API, partner, policy and runtime events to generate alerts that trigger governance processes. For example, this includes sending an email notification or starting application workflows.
* API import and export - Registered APIs can be exported from API Manager and imported to another API Manager using a file-based package. This enables APIs to be promoted from a sandbox API group (where client applications are developed and tested) to the production API group. You can configure an API promotion policy to automate this process.

API Manager provides the following tools to enable you to virtualize and manage your APIs:

**API Manager web console**\

The API Manager web interface enables business or operational users (API owners) to easily register REST APIs and apply standard policies defined in the client registry to virtualize the APIs. It enables organizations and API consumers to consume APIs, browse the API Catalog, and monitor their API use. It also enables business or operational users (API administrators) to manage API clients and their consumption of APIs.

API Manager provides a role-based interface, in which API Manager users are assigned a role (for example, API developer, API consumer, API administrator, API owner, or organization administrator). The operations that a user can perform in API Manager depend on the role they are assigned. For example, a user assigned the API developer role can register and virtualize REST APIs.

API Manager is implemented as a web application that is hosted on the API Gateway. The default API Manager has Axway branding, and can be customized to use different branding. API Manager also has a management API that enables organizations to integrate with custom portals and other existing systems.

**API Gateway runtime**\

This is the runtime gateway that proxies the REST APIs registered in API Manager, and that enforces configured policies on client requests and responses. API Manager is a layered product running on API Gateway, and which provides all the underlying gateway capabilities. API Gateway is a prerequisite product for API Manager.

**API Catalog**\

This is the catalog of published APIs and their associated documentation that have been registered in API Manager. Client application developers can browse the API Catalog in API Manager and in API Portal. APIs can be tagged for classification and searching. The API Catalog is represented in Swagger format for tool integration.

**Client Registry**\

This is the repository of organizations and partners, API consumers, and client applications that consume the REST APIs. The Client Registry also contains the authentication credentials of the client applications, and authorization and quota policies defined at the organization and application level. The Client Registry is persisted in an Apache Cassandra backing store.

Policy Studio includes API Management filters that provide read-only access to the Client Registry. These enable policy developers to develop policies that leverage the information in the Client Registry. Write access to the Client Registry must be performed using the API Portal API because data consistency checks are required.

**API Manager REST API**\

This REST-based API provides the underlying capabilities supporting API Manager. This API enables the management of the data in the Client Registry and the browsing of registered APIs, with API documentation returned in Swagger format. The API Manager API enables the development of custom API consumer portals and integration with external partner management systems.

## API registration

API management focuses on registering existing REST APIs, and managing their consumption by customers and partners to support their business objectives. REST APIs are registered using the API Manager web console. REST APIs are managed directly by API Manager using authentication, authorization, and quota policies defined in the client registry. API administrators can use API Manager to manage API consumption, and API consumers can consume the virtualized APIs using API Manager, or using a customized self-service API Portal.

API management is performed by an *API owner* (a technical business or IT operational role). Registration of REST APIs in API Manager, and application of policies to those APIs, is a configuration task rather than a development task. It can be performed on a running API Gateway in a production environment. This approach enables you to manage and promote APIs more dynamically, more rapidly, and with less overhead than typical IT projects.

API Manager provides a web-based interface that enables API owners to register existing back-end REST APIs, apply standard policies, and virtualize them on API Gateway as public front-end APIs. The APIs are immediately available for management in API Manager, and for consumption in API Manager, or in a self-service API Portal.

The following diagram shows a simplified API management architecture:

![API management simplified architecture](/Images/docbook/images/api_mgmt/api_mgmt_architecture_simple.png)

The Axway AMPLIFY API-Management solution provide a comprehensive solution for creating, virtualizing, and managing APIs of varying complexity and capability. This includes the following approaches:

* API registration — virtualizing existing REST APIs and SOAP web services in API Manager
* API development — developing new REST APIs in Policy Studio to be exposed in API Manager (for example, virtualizing non-REST APIs)

## API Lifecycle-Management within the API-Manager

The following diagram summarizes the API lifecycle in API-Manager:

![API management lifecycle](/Images/docbook/images/api_mgmt/api_mgmt_lifecycle.png)

The API management lifecycle is described in the diagram as follows:

### 1 - API registration

If the back-end API is an existing REST API, an API owner uses API Manager to register the APIs and apply standard policies. The registered APIs are virtualized by API Gateway, which protects the back-end services, and makes the APIs available for consumption. This describes the typical API management approach.

For more details, see the following:

* [Register REST APIs in API Manager](/docs/apim_administration/apimgr_admin/api_mgmt_register_web/)
* [Virtualize REST APIs in API Manager](/docs/apim_administration/apimgr_admin/api_mgmt_virtualize_web/)

If the existing back-end API is not a REST API, or if custom policies are required, a policy developer uses Policy Studio to create a new API (for example, for SOAP to REST, or cloud-based applications). APIs developed in Policy Studio are then imported as back-end APIs in API Manager.

### 2 - API administration

The API administrator manages and monitors the APIs at runtime using API Manager. For example, this includes all organizations and users registered to log into API Manager, client applications and their authentication credentials, and authorization and quota policies. The API administrator manages who can consume, what they can consume, and how much can they consume. For example, which business partners are permitted to consume which APIs, and what are their quota levels.

For more details, see [Manage access to APIs](/docs/apim_administration/apimgr_admin/api_mgmt_admin/).

### 3 - API consumption

API consumers can self-register in API Manager or API Portal. They browse and consume the managed APIs provided by API Gateway, and use them to develop and test their applications. The organization administrators in named organizations manage the applications and API consumer users.

For example, API consumers might be internal developers or external business partners. They can log into API Manager or API Portal, and browse APIs and their associated documentation for consumption. They can then develop and test client applications that use these APIs. In this way, API Manager builds a community around the APIs, enabling organizations and consumers to register themselves, and to create and manage their own applications.

For more details, see [Consume APIs](/docs/apim_administration/apimgr_admin/api_mgmt_consume/).