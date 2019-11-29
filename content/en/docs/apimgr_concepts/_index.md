{
    "title": "API management overview",
    "linkTitle": "API management overview",
    "no_list": "true",
    "weight":"10",
    "date": "2019-09-17",
    "description": "An overview of API management, including API registration and API development, and the overall API management lifecycle. An introduction to Axway API management tools."
}

API management is the process of publishing, promoting and managing Application Programming Interfaces (APIs) in a secure, scalable environment. It includes the creation of API consumer support resources that define and document APIs to facilitate easy consumption. API management supports business initiatives to enable easy interaction with customers and partners.

A well-executed API strategy helps create more selling channels, better engage with customers, and offer more value to partners. This practice of doing better business through the effective delivery of APIs enables the API economy. API management uses new Web-Oriented Architecture (WOA) technologies such as REST, JSON, and OAuth instead of traditional Service-Oriented Architecture (SOA) technologies.

Axway API Manager and API Gateway provide a comprehensive solution for creating, virtualizing, and managing APIs of varying complexity and capability. This includes the following approaches:

* API registration — virtualizing existing REST APIs and SOAP web services in API Manager
* API development — developing new REST APIs in Policy Studio to be exposed in API Manager (for example, virtualizing non-REST APIs)

## API registration

API management focuses on registering existing REST APIs, and managing their consumption by customers and partners to support their business objectives. REST APIs are registered using the API Manager web console. REST APIs are managed directly by API Manager using authentication, authorization, and quota policies defined in the client registry. API administrators can use API Manager to manage API consumption, and API consumers can consume the virtualized APIs using API Manager, or using a customized self-service API Portal.

API management is performed by an *API owner* (a technical business or IT operational role). Registration of REST APIs in API Manager, and application of policies to those APIs, is a configuration task rather than a development task. It can be performed on a running API Gateway in a production environment. This approach enables you to manage and promote APIs more dynamically, more rapidly, and with less overhead than typical IT projects.

API Manager provides a web-based interface that enables API owners to register existing back-end REST APIs, apply standard policies, and virtualize them on API Gateway as public front-end APIs. The APIs are immediately available for management in API Manager, and for consumption in API Manager, or in a self-service API Portal.

The following diagram shows a simplified API management architecture:

![API management simplified architecture](/Images/docbook/images/api_mgmt/api_mgmt_architecture_simple.png)

### API registration terms

The following terms are used to describe API registration using API Manager:

* *Back-end API* — the actual REST API that is routed to, secured, and exposed on the network (for example, application server), or in the Cloud (for example, Twitter). This REST API can be registered manually in API Manager, or by importing a Swagger or Web Application Description Language (WADL) definition in API Manager.
* *Front-end API* — the virtualized publicly exposed REST API in API Manager that is hosted on the API Gateway, and which client applications invoke (for example, iPhone or Android client apps). By default, the front-end API is the same as the back-end API, proxying the API as is. However, you can edit the front-end API to present an enriched, public-facing API to client applications.
* *API package* — the complete package of artifacts associated with an API registered in API Manager. This is used to export and import the API in a single package to enable promotion from sandbox to production APIs.

## API development

This approach focuses on developing new REST APIs from existing non-REST legacy back-end applications, cloud-based applications, and SOA or security infrastructure. For example, this includes exposing a SOAP Web service as a REST API, or combining multiple cloud application API calls into higher level business methods, or implementing an OAuth client. API development is performed by a policy developer using Policy Studio.

The REST API development wizard is provided in the Policy Studio tool. This enables policy developers to create a REST API, and route it to a pre-built policy (for example, which connects to a back-end SOAP Web service, database, or cloud application).

APIs developed using the REST API development wizard are then registered (by importing) as a back-end APIs in API Manager. This means that there is a single consistent approach for registering APIs, virtualizing as front-end APIs, and managing how APIs are consumed in API Manager, regardless of the back-end API.

Registered APIs are virtualized by API Gateway, which protects the back-end services, and makes the APIs available for management and consumption in API Manager, and for consumption in the self-service API Portal.

For more details on creating APIs using the REST API development wizard, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

## API management lifecycle

The following diagram summarizes the API management lifecycle:

![API management lifecycle](/Images/docbook/images/api_mgmt/api_mgmt_lifecycle.png)

The API management lifecycle is described in the diagram as follows:

### 1 - API registration

If the back-end API is an existing REST API, an API owner uses API Manager to register the APIs and apply standard policies. The registered APIs are virtualized by API Gateway, which protects the back-end services, and makes the APIs available for consumption. This describes the typical API management approach.

For more details, see the following:

* [Register REST APIs in API Manager](/docs/apimgr_admin/api_mgmt_register_web/)
* [Virtualize REST APIs in API Manager](/docs/apimgr_admin/api_mgmt_virtualize_web/)

If the existing back-end API is not a REST API, or if custom policies are required, a policy developer uses Policy Studio to create a new API (for example, for SOAP to REST, or cloud-based applications). APIs developed in Policy Studio are then imported as back-end APIs in API Manager.

For more details, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

### 2 - API promotion

When APIs are registered using API Manager, an API administrator can promote them between environments directly using API Manager (for example, from sandbox to production APIs). When APIs are created using the REST API development wizard in Policy Studio, an API Gateway administrator can promote them using the API Gateway mechanism for promotion and deployment of API Gateway configuration.

For more details, see [Promote managed APIs between environments](/docs/apimgr_admin/api_mgmt_promote).

### 3 - API administration

The API administrator manages and monitors the APIs at runtime using API Manager. For example, this includes all organizations and users registered to log into API Manager, client applications and their authentication credentials, and authorization and quota policies. The API administrator manages who can consume, what they can consume, and how much can they consume. For example, which business partners are permitted to consume which APIs, and what are their quota levels.

For more details, see [Manage access to APIs](/docs/apimgr_admin/api_mgmt_admin/).

### 4 - API consumption

API consumers can self-register in API Manager or API Portal. They browse and consume the managed APIs provided by API Gateway, and use them to develop and test their applications. The organization administrators in named organizations manage the applications and API consumer users.

For example, API consumers might be internal developers or external business partners. They can log into API Manager or API Portal, and browse APIs and their associated documentation for consumption. They can then develop and test client applications that use these APIs. In this way, API Manager builds a community around the APIs, enabling organizations and consumers to register themselves, and to create and manage their own applications.

For more details, see [Consume APIs](/docs/apimgr_admin/api_mgmt_consume/).

## Tools for API management

Axway provides a number of tools to enable you to virtualize and manage your APIs:

* API Manager provides a web-based interface that enables an API owner (technical business or IT operational role) to easily register back-end REST APIs, apply policies, and to virtualize them on API Gateway.
* Policy Studio also provides a REST API development wizard, which enables policy developers to virtualize non-REST back-end APIs as REST APIs (for example, virtualize a SOAP web service as a REST API).
* API Portal is a self-service web-based portal that enables API consumers to consume the APIs that you have exposed in API Manager.

### API Manager

The API Manager web interface enables business or operational users (API owners) to easily register REST APIs and apply standard policies defined in the client registry to virtualize the APIs. It enables organizations and API consumers to consume APIs, browse the API Catalog, and monitor their API use. It also enables business or operational users (API administrators) to manage API clients and their consumption of APIs.

API Manager provides a role-based interface, in which API Manager users are assigned a role (for example, API consumer, API administrator, API owner, or organization administrator). The operations that a user can perform in API Manager depend on the role they are assigned. For example, a user assigned the API owner role can register and virtualize REST APIs.

API Manager is implemented as a web application that is hosted on the API Gateway. The default API Manager has Axway branding, and can be customized to use different branding. API Manager also has a management API that enables organizations to integrate with custom portals and other existing systems.

### API Gateway

This is the runtime gateway that proxies the REST APIs registered in API Manager, and that enforces configured policies on client requests and responses. API Manager is a layered product running on API Gateway, and which provides all the underlying gateway capabilities. API Gateway is a prerequisite product for API Manager.

### API Catalog

This is the read-only catalog of APIs and their associated documentation registered in API Manager. Client application developers can browse API Catalog in API Manager and in API Portal. APIs can be tagged for classification and searching. API Catalog is represented in Swagger format for tool integration.

### Client Registry

This is the repository of organizations and partners, API consumers, and client applications that consume the REST APIs. The Client Registry also contains the authentication credentials of the client applications, and authorization and quota policies defined at the organization and application level. The Client Registry is persisted in an Apache Cassandra backing store.

Policy Studio includes API Management filters that provide read-only access to the Client Registry. These enable policy developers to develop policies in Policy Studio that leverage the information in the Client Registry. Write access to the Client Registry must be performed using the API Manager API because data consistency checks are required.

### REST API development wizard

This wizard in Policy Studio enables you to create new REST APIs that route to policies developed in Policy Studio. This enables you to develop REST APIs from non-REST back-end applications and services, integrating with them at the application and security levels. For more details on creating APIs using the REST API development wizard, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

### API Portal

API Portal is a self-service web-based portal that enables API consumers to consume APIs that you have exposed for organizations API Manager. API consumers can register and manage their user profile, register applications, manage application credentials, browse front-end APIs and supporting documentation, monitor application API usage, and access blogs, forums, and so on.

API Portal is implemented as a stand-alone CMS-based portal, which you can run using the default Axway branding and functionality, or customize and extend to meet your specific requirements and those of your target API consumers. You can deploy the internet-facing API Portal separately from the API Gateway and API Manager, with a dedicated web interface to limit potential security breaches. For more details, see [API Portal Installation and Upgrade Guide](/docs/apiportal_install/).

### API Manager API

This REST-based API provides the underlying capabilities supporting API Portal and API Manager. This API enables the management of the data in the Client Registry and the browsing of registered APIs, with API documentation returned in Swagger format. The API Manager API enables the development of custom API consumer portals and integration with external partner management systems.

## API Manager features

The main API Manager features are API registration, API promotion, API administration, and API consumption. For details, see [API management lifecycle](#api-management-lifecycle).

In addition to the main features, API Manager also provides the following features to enable you to manage your APIs:

* Partner organization management - API Manager includes partner-based management of API consumers that browse the API Catalog and client applications that use the APIs. Delegated partner administration enables partner organizations to manage their own API consumers, easing the management of large partners, or a large number of partners. A wide range of client application credentials are supported, including OAuth 2.0 and API keys.
* Policy management - API Manager enables you to apply authorization and quota policies to APIs at the partner and client application levels. Custom policies can also be developed in Policy Studio, and applied to APIs.
* API alerting - API Manager enables you to configure API, partner, policy and runtime events to generate alerts that trigger governance processes. For example, this includes sending an email notification or starting application workflows.
* API import and export - Registered APIs can be exported from API Manager and imported to another API Manager using a file-based package. This enables APIs to be promoted from a sandbox API group (where client applications are developed and tested) to the production API group. You can configure an API promotion policy to automate this process.

## API Portal features

See [API Portal overview](/docs/apiportal_admin/apip_overview/) for details of API Portal key capabilities and features.

## API registration and lifecycle management in API Manager

API Manager enables you to register APIs and manage their lifecycle from registration through publishing and retirement. Delegated API registration enables different teams of API owners to register and test their own APIs in isolation prior to publishing to other organizations in the API Catalog.

In API Manager, the lifecycle of an API includes the following states:

1. Unpublished - The API is registered and tested in isolation in an API owner organization. The API is available to the API administrator and API owners who are members of that organization. The API can be edited, or be moved to the published state, or deleted. These actions can only be performed by the API owner or the API administrator.

    Unpublished APIs are displayed in the API Catalog view to users in the same organization. The users in this organization are the API owners and developers on the same team working on these APIs. However, an unpublished API is not displayed to users in other organizations. The API must first be published, and then that organization must be authorized to access the API. The API is then displayed in the API Catalog for users in that organization.

    All APIs (published and unpublished) are displayed in the API Catalog for the API administrator.

2. Published - When an API is ready to be consumed by other organizations, it is published in the API Catalog by the API owner. The API administrator must then approve the API as the final step to publish to other organizations in the API Catalog. When the API is published, the API administrator can authorize other organizations to access the API. This displays the API in API Manager and API Portal to API consumers who are members of the authorized organization.

    When an API is published, only the API administrator can make changes. The published API can only be deprecated or unpublished, and cannot be deleted. Unpublishing an API stops client applications in other organizations using the API. A published API cannot be edited, and must first be unpublished. However, the API administrator can edit the API documentation of a published API. This allows changes in the API documentation without impacting the API availability.

3. Deprecated - The published API in API Manager is flagged with a date when it will be unpublished in the API Catalog, and is no longer available to client applications in other organizations. The retirement date is displayed to API consumers in API Manager and API Portal. Retiring the API is achieved by unpublishing the API in the API Catalog. Only a published API can be deprecated and unpublished. When the API is unpublished, it is then available for API owners to edit.

    When an API is deprecated, it is still in the published state, and clients can continue to discover and use the API. This gives API consumers time to port their existing applications to adopt a newer version of the API. You can undeprecate an API by selecting the undeprecate option, which removes the retirement date flag in the API Catalog.
