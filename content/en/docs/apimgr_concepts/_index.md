{
"title": "API management overview",
"linkTitle": "API management overview",
"no_list": "true",
"date": "2019-09-17",
"description": "An overview of API management, including API registration and API development, and the overall API management lifecycle."
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

For more details, see [Promote managed APIs](/docs/apimgr_admin/api_mgmt_promote).

### 3 - API administration

The API administrator manages and monitors the APIs at runtime using API Manager. For example, this includes all organizations and users registered to log into API Manager, client applications and their authentication credentials, and authorization and quota policies. The API administrator manages who can consume, what they can consume, and how much can they consume. For example, which business partners are permitted to consume which APIs, and what are their quota levels. 

For more details, see [Administer APIs in API Manager](/docs/apimgr_admin/api_mgmt_admin/).

### 4 - API consumption

API consumers can self-register in API Manager or API Portal. They browse and consume the managed APIs provided by API Gateway, and use them to develop and test their applications. The organization administrators in named organizations manage the applications and API consumer users.

For example, API consumers might be internal developers or external business partners. They can log into API Manager or API Portal, and browse APIs and their associated documentation for consumption. They can then develop and test client applications that use these APIs. In this way, API Manager builds a community around the APIs, enabling organizations and consumers to register themselves, and to create and manage their own applications. 

For more details, see [Consume APIs in API Manager](/docs/apimgr_admin/api_mgmt_consume/).
