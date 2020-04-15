{
    "title": "API management components",
    "linkTitle": "Components",
    "no_list": "true",
    "weight":"15",
    "date": "2019-09-17",
    "description": "An overview of API management components and there role in the API-Lifecycle."
}

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

This wizard in Policy Studio enables you to create new REST APIs that route to policies developed in Policy Studio. This enables you to develop REST APIs from non-REST back-end applications and services, integrating with them at the application and security levels.

### API Portal

API Portal is a self-service web-based portal that enables API consumers to consume APIs that you have exposed for organizations API Manager. API consumers can register and manage their user profile, register applications, manage application credentials, browse front-end APIs and supporting documentation, monitor application API usage, and access blogs, forums, and so on.

API Portal is implemented as a stand-alone CMS-based portal, which you can run using the default Axway branding and functionality, or customize and extend to meet your specific requirements and those of your target API consumers. You can deploy the internet-facing API Portal separately from the API Gateway and API Manager, with a dedicated web interface to limit potential security breaches. For more details, see [API Portal Installation and Upgrade Guide](/docs/apim_installation/apiportal_install/).

### API Manager API

This REST-based API provides the underlying capabilities supporting API Portal and API Manager. This API enables the management of the data in the Client Registry and the browsing of registered APIs, with API documentation returned in Swagger format. The API Manager API enables the development of custom API consumer portals and integration with external partner management systems.