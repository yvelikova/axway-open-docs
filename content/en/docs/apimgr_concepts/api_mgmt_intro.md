{
    "title": "Overview of API Management tools",
    "linkTitle": "Overview of API Management tools",
    "weight": "1",
    "date": "2019-09-17",
    "description": "An overview of the API management tools and the features they provide, and information about organizations, user roles, and API lifecycle states in API Manager."
}

API Manager provides a web-based interface that enables an API owner (technical business or IT operational role) to easily register back-end REST APIs, apply policies, and to virtualize them on API Gateway. Policy Studio also provides a REST API development wizard, which enables policy developers to virtualize non-REST back-end APIs as REST APIs (for example, virtualize a SOAP web service as a REST API). API Portal is a self-service web-based portal that enables API consumers to consume the APIs that you have exposed in API Manager.

## API management tools

Axway provides the following tools to enable you to virtualize and manage your APIs.

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

API Portal is implemented as a stand-alone CMS-based portal, which you can run using the default Axway branding and functionality, or customize and extend to meet your specific requirements and those of your target API consumers. You can deploy the internet-facing API Portal separately from the API Gateway and API Manager, with a dedicated web interface to limit potential security breaches. For more details, see [API Portal Installation and Upgrade Guide](/bundle/APIPortal_77_InstallationGuide_allOS_en_HTML5).

### API Manager API

This REST-based API provides the underlying capabilities supporting API Portal and API Manager. This API enables the management of the data in the Client Registry and the browsing of registered APIs, with API documentation returned in Swagger format. The API Manager API enables the development of custom API consumer portals and integration with external partner management systems.

## API Manager features

The main API Manager features are API registration, API promotion, API administration, and API consumption. For details, see [API management lifecycle](/docs/apimgr_concepts/#api-management-lifecycle).

In addition to the main features, API Manager also provides the following features to enable you to manage your APIs:

* Partner organization management - API Manager includes partner-based management of API consumers that browse the API Catalog and client applications that use the APIs. Delegated partner administration enables partner organizations to manage their own API consumers, easing the management of large partners, or a large number of partners. A wide range of client application credentials are supported, including OAuth 2.0 and API keys.
* Policy management - API Manager enables you to apply authorization and quota policies to APIs at the partner and client application levels. Custom policies can also be developed in Policy Studio, and applied to APIs.
* API alerting - API Manager enables you to configure API, partner, policy and runtime events to generate alerts that trigger governance processes. For example, this includes sending an email notification or starting application workflows.
* API import and export - Registered APIs can be exported from API Manager and imported to another API Manager using a file-based package. This enables APIs to be promoted from a sandbox API group (where client applications are developed and tested) to the production API group. You can configure an API promotion policy to automate this process.

## API Portal features

See [API Portal overview](/docs/apiportal_admin/apip_overview/) for details of API Portal key capabilities and features.

## Organizations and user roles

Organization types in API Manager include the following:

* Named organization - This is an organization that is known, trusted, and preapproved (for example, a business partner of the API provider). This organization is defined in the client registry, and organization-specific access to the APIs can be managed (for example, specifying which API consumers can browse, and which applications can invoke).
* Community organization - This is the organization of unverified, untrusted API consumers that are not explicitly tied to any specific organization. These are API consumers that register to browse the APIs and develop applications. The Community organization is intended to be a mechanism to recruit API consumers to build client applications. 

    Community API consumers can subsequently be associated with a named organization and become trusted. It is not intended that production-level client applications run in the Community organization, but that these users and their applications move into trusted named organizations before the application goes into production.

* API owner organization - This is an organization that is enabled in API Manager for registration of APIs. It supports all the capabilities of organizations for consuming APIs with the additional capability of supporting the registration of APIs.

    In API Manager, each organization includes an option to enable it as an API owner organization:

    * If this is not selected, the organization only supports the consumption of APIs (the default).
    * If this is selected, APIs can be registered in the organization

    The APIs that are displayed for an API owner organization are as follows:

    * APIs that have been registered in that API owner organization.
    * Other APIs that the API owner organization has been given authorization for by the API administrator.

The following diagram shows where the API Management user roles fit into the API management architecture:

![API management user roles](/Images/docbook/images/api_mgmt/api_mgmt_architecture_roles.png)

The *API provider* is the enterprise that makes the virtualized APIs for back-end applications available for API clients to consume. The API provider runs API Gateway and API Manager. For example, the API provider could be a credit card company that provides payment services to various customers.

The *API clients* are the end-user customer and partner organizations that consume the APIs made available by the API provider. For example, these could be specific hotel and retail organizations that enable their customers to make payments by credit card.

The API provider user roles in the diagram are described as follows:

* API owner - The API owner uses API Manager to virtualize managed APIs and apply standard policies. This role has the privileges of the client-side API consumer role but with the additional privileges of API registration in the API owner organization that they are assigned to. This is a non-technical role, and is typically more of a business or operational user who has knowledge of what the APIs do, and why clients need to access them. However, in some organizations this role will be performed by an API developer.
* API administrator - This is the administrator role responsible for managing the consumption of APIs by registered API clients. This role manages and monitors the virtualized APIs and the client applications that use those APIs. The tasks include managing organization and user registration, application authentication credentials, authorization and quota entitlement policies, and monitoring API use. These tasks are performed using API Manager. This administrator role is typically more of a business or operational user who has knowledge of what the APIs do, and why clients need to access them.
* API Gateway administrator - This administrator role monitors, manages, and troubleshoots API Gateway using the API Gateway Manager web console. They have full administrative privileges, including deployment of API Gateway configurations. This is the system administration or operational role for API Gateway. It involves keeping API Gateway running, monitoring its operation, managing any settings, and performing any troubleshooting. For more details, see the *API Gateway Administrator Guide*.
* Policy developer - This is the API Gateway developer who uses the REST API development wizard in Policy Studio to virtualize APIs and create API Gateway policies. Policies are rules used to govern or manage an API (for example, for security, integration, SLA monitoring, or transformation). This is a technical developer role.

The API client user roles in the diagram are described as follows:

* API consumer - The API consumer or client application developer implements and tests client applications that consume some managed APIs. API consumers can be from named organizations or from the Community organization. This role can also include operator users who are responsible for managing client applications in production, and need to monitor their API use. Each user has an account on API Manager. API consumers can create applications, manage their registration details, and monitor API use by their applications.
* Organization administrator - This is the onsite administrator responsible for managing the API consumers and applications in a particular named organization. The API administrator may delegate administrative privileges to the organization administrator allowing them to use API Manager to manage API consumers and applications in their organization (for example, assigning application privileges to a new API consumer).

    In addition, the organization administrator in an API owner organization also has API registration capabilities. Finally, a community organization does not have an organization administrator, and is managed by the API administrator.

{{< alert title="Note" color="primary" >}}In this architecture, client applications are authenticated by API Gateway. The end users of client applications are not authenticated by API Gateway. To authenticate end users, you must build additional request policy logic when virtualizing the REST API.{{< /alert >}}

## API registration and lifecycle management

API Manager enables you to register APIs and manage their lifecycle from registration through publishing and retirement. Delegated API registration enables different teams of API owners to register and test their own APIs in isolation prior to publishing to other organizations in the API Catalog.

In API Manager, the lifecycle of an API includes the following states:

1. Unpublished - The API is registered and tested in isolation in an API owner organization. The API is available to the API administrator and API owners who are members of that organization. The API can be edited, or be moved to the published state, or deleted. These actions can only be performed by the API owner or the API administrator.

    Unpublished APIs are displayed in the API Catalog view to users in the same organization. The users in this organization are the API owners and developers on the same team working on these APIs. However, an unpublished API is not displayed to users in other organizations. The API must first be published, and then that organization must be authorized to access the API. The API is then displayed in the API Catalog for users in that organization.

    All APIs (published and unpublished) are displayed in the API Catalog for the API administrator.

2. Published - When an API is ready to be consumed by other organizations, it is published in the API Catalog by the API owner. The API administrator must then approve the API as the final step to publish to other organizations in the API Catalog. When the API is published, the API administrator can authorize other organizations to access the API. This displays the API in API Manager and API Portal to API consumers who are members of the authorized organization.

    When an API is published, only the API administrator can make changes. The published API can only be deprecated or unpublished, and cannot be deleted. Unpublishing an API stops client applications in other organizations using the API. A published API cannot be edited, and must first be unpublished. However, the API administrator can edit the API documentation of a published API. This allows changes in the API documentation without impacting the API availability.

3. Deprecated - The published API in API Manager is flagged with a date when it will be unpublished in the API Catalog, and is no longer available to client applications in other organizations. The retirement date is displayed to API consumers in API Manager and API Portal. Retiring the API is achieved by unpublishing the API in the API Catalog. Only a published API can be deprecated and unpublished. When the API is unpublished, it is then available for API owners to edit.

    When an API is deprecated, it is still in the published state, and clients can continue to discover and use the API. This gives API consumers time to port their existing applications to adopt a newer version of the API. You can undeprecate an API by selecting the undeprecate option, which removes the retirement date flag in the API Catalog.
