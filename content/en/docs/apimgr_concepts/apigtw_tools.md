{
"title": "API Gateway tools",
"linkTitle": "API Gateway tools",
"weight":"11",
"date": "2019-11-07",
"description": "API Gateway tools to develop, deploy, and manage API solutions."
}

<!-- TODO Resolve duplication between apimgr_concepts topics (e.g. tools) and these topics -->

Axway API Gateway provides powerful easy-to-use tools that enable you to develop, deploy, and manage API solutions.

![API Gateway tools](/Images/docbook/images/concepts/api_server_tools_rs.png)

## API Gateway

The central API Gateway core component is described as follows:

* Provides the runtime environment for exposing virtualized APIs and executing policies
* Implemented using combination of native code for performance and Java for extensibility
* Deployed and managed in a distributed environment of multiple servers providing scalability and availability
* Available in the following form factors:
    * Software — Linux
    * Container deployment in Docker
    * Axway Cloud

In enterprise organizations, the API Gateway is typically deployed in the DMZ between the public Internet and private intranet.

For more details, see [API Gateway architecture](/docs/apigtw_concepts/apigtw_architecture/).

## API Manager

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

**REST API development wizard**\

This plug-in wizard to Policy Studio enables you to create new REST APIs that route to policies developed in Policy Studio. This enables you to develop REST APIs from non-REST back-end applications and services, integrating with them at the application and security levels.

**API Manager REST API**\

This REST-based API provides the underlying capabilities supporting API Manager. This API enables the management of the data in the Client Registry and the browsing of registered APIs, with API documentation returned in Swagger format. The API Manager API enables the development of custom API consumer portals and integration with external partner management systems.

## API Portal

API Portal is a self-service web-based portal that enables API consumers to consume APIs that you have exposed using API Manager. API consumers can register and manage their user profile, register applications, manage application credentials, browse front-end APIs and supporting documentation, monitor application API usage, and access blogs, forums, and so on.

API Portal is implemented as a stand-alone CMS-based portal, which you can run using the default Axway branding and functionality, or customize and extend to meet your specific requirements and those of your target API consumers. You can deploy the internet-facing API Portal separately from the API Gateway and API Manager, with a dedicated web interface to limit potential security breaches.

The main API Portal features are as follows:

**Developer self-registration and profile management**\

Client application developers can self-register and manage their profiles.

**Browse and test APIs in the API Catalog**\

The API Catalog contains the APIs that have been registered in API Manager and are available for use by client application developers. They can browse these APIs and their associated documentation, and invoke APIs using the built-in test capability.

**Create and manage applications**\

Application developers can register their applications that will use the APIs, and obtain API key or OAuth credentials for the application. They can also monitor their application's use of APIs using graphical data sourced from your API Manager metrics database.

**Content management, blogs, and discussion forums**\

API Portal runs on Joomla!™, an open source CMS platform for developing and deploying web sites. You can use the content management capabilities of Joomla! to store additional content, such as PDF documents and video, for display in API Portal. Joomla! also provides plugins for third-party blog and discussion forums.

**Customizable to provide a branded experience**\

You can deploy API Portal with no customization, using the out-of-the-box Axway branding, which is suitable for internal-facing API deployments. For external-facing API deployments, you can customize API Portal to provide a branded developer portal experience. You can customize API Portal using Joomla configuration screens (upgradeable), or by editing the API Portal PHP source code (not upgradeable).

## Policy Studio

Policy Studio is graphical tool that enables you to virtualize APIs and develop policies (for example, to enforce security, compliance, and operational requirements). It includes the following features:

* Flow-chart style visualization for easy development and maintenance
* Graphical drag-and-drop user interface that enables you to drag filters (processing rules) on to the policy canvas and configure them
* Extensive library of filters to build powerful policies

The following example shows the policy canvas at the center and the filter library on the right:

![Policy Studio](/Images/docbook/images/concepts/policy_studio.png)

A *filter* is an executable rule that performs a specific type of processing on a message. For example, the **Message Size** filter rejects messages that are greater or less than a specified size.

There are many categories of message filters available with the API Gateway (for example, Authentication, Authorization, Content Filtering, Conversion, Trust, and so on). In Policy Studio, a filter is displayed as a block of business logic that forms part of an execution flow known as a policy.

A *policy* is a network of filters in which each filter is a modular unit that processes a message. A message can traverse different paths through the policy, depending on which filters succeed or fail. For example, this enables you to configure policies that route messages that pass a **Schema Validation** filter to a back-end system, and route messages that pass a different **Schema Validation** filter to a different system.

A policy can also contain other policies, which enables you to build modular reusable policies. In Policy Studio, the policy is displayed as a path through a set of filters, as shown in the previous example.

Policy Studio is available also on Windows.

## Configuration Studio

Configuration Studio is a graphical tool used to promote API Gateway configuration from development environments to upstream environments (for example, testing or production).

Configuration Studio enables API Gateway administrators to take configuration prepared by policy developers, and to create environment-specific configuration for deployment. Configuration Studio is designed for the skills of upstream administrators, and does not assume expertise in policy development and policy configuration.

![Configuration Studio](/Images/docbook/images/concepts/config_studio.png)

Configuration Studio enables administrators to perform tasks such as the following:

* Open a policy package (`.pol`) received from a development environment.
* Specify values for environment-specific settings selected in a development environment (for example, policy, listener, and external connections).
* Import or create environment-specific certificates and keys.
* Define environment-specific users and user groups.
* Export the environment package to a file on disk. The environment package is implemented as an `.env` file.

Configuration Studio is available also on Windows.

## API Gateway Manager

API Gateway Manager is a web-based administration console that enables you to perform operational monitoring, management, and troubleshooting.

![API Gateway Manager](/Images/docbook/images/concepts/vordel_mngr.png)

API Gateway Manager includes the following features:

* Dashboard displaying the distributed topology with a real-time overview of message traffic by domain, group, and API Gateway
* Real-time monitoring of message traffic and content, enabling easy identification of exceptions and drilling into message details
* Real-time monitoring of performance metrics by API service, system, and remote host
* Aggregated view of audit, alert, and SLA alert messages across the domain
* Centralized viewing of audit and debug logs of each API Gateway instance
* Managing dynamic system settings
* Managing user roles assigned in the domain

## API Gateway Analytics

API Gateway Analytics is a server runtime and web-based monitoring and reporting console that enables you to generate scheduled reports and analyze API use over time in multiple API Gateways across the domain.

![API Gateway Analytics](/Images/docbook/images/concepts/reporter.png)

API Gateway Analytics includes the following features:

* Web-based console that monitors and reports on all API Gateways in the domain (multiple API Gateways are shown on the left in the diagram)
* Reporting over an extended time period rather than immediate operational monitoring
* Analysis of what APIs are used, how often APIs are used, when APIs are used, and who is using APIs
* Scheduled reports in PDF format can be emailed to specific users

## Embedded Analytics

The Embedded Analytics web console enables you to monitor and analyze key metrics in your system. For example:

![Embedded Analytics](/Images/docbook/images/concepts/embedded_analytics.png)

The Embedded Analytics dashboards enable you to monitor key metrics such as the following:

* **API heath**— response time, failure rates, exception rates, and transactions per second
* **Infrastructure health**— CPU and disk usage, SLA breaches, bytes exchanged, traffic, and latency
* **API usage**— traffic, active APIs, and active applications
* **Client application health**— number of methods with high response time, failure rate, exception rate

For more details, see the [Embedded Analytics for AMPLIFY API Management documentation](https://docs.axway.com/bundle/EmbeddedAnalyticsAPIM_allOS_en_HTML5/).

## Key Property Store

The API Gateway Key Property Store (KPS) is used to store configuration parameters that are dynamically passed into policies at runtime. This enables policy configuration data to be managed directly by business or operational users at runtime, and allows dynamic change of policy behavior.

![Key Property Store](/Images/docbook/images/concepts/kps.png)

The KPS includes the following features:

* Policies look up configuration data in the KPS at runtime to dynamically determine behavior
* Policies developed in the Policy Studio use a selector syntax to specify context-sensitive lookup of policy configuration data at runtime from the KPS (for example, `${kps.CustomerProfiles[JoeBloggs].age}` obtains the age of the specified customer)
* Provides a cached read-frequently, write occasionally cache with backing stores
* Policy-specific UIs can be developed for business or operational users to manage the policy configuration data in the KPS

## Embedded Apache ActiveMQ

API Gateway can act as a native Java Message Service (JMS) provider by embedding Apache ActiveMQ. This enables the API Gateway to integrate external facing REST APIs and SOAP Web services with back-end systems and applications using reliable, asynchronous messaging.

For internal integration and ESB-style projects, API Gateway provides a messaging and mediation solution to route and transform messages flowing between applications and services. In addition, JMS queues hosted on the embedded ActiveMQ can be used by API Gateway policies to provide asynchronous policy behavior.

An ActiveMQ broker is embedded in each API Gateway instance, with brokers organized by API Gateway groups. An active/active deployment is supported to ensure high availability of the messaging infrastructure, with an external shared file system used for the persistent message store.

Queue and topic management is integrated into the API Gateway Manager web console, which enables the API administrator to view queues and topics, messages on queues, and individual message contents. For example:

![ActiveMQ message](/Images/docbook/images/concepts/admin_messaging_content.png)

The API Gateway installation includes the ActiveMQ Java JMS 1.1 client library, which applications can use to send and receives message to and from the queues and topics hosted on the embedded ActiveMQ broker. In addition, ActiveMQ clients that use the OpenWire protocol (ActiveMQ default transport protocol) can interact with the embedded broker. For more details, see [Apache ActiveMQ OpenWire documentation](http://activemq.apache.org/openwire.html).
