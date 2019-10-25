{
"title": "Introduction to API Gateway administration",
"linkTitle": "Introduction to API Gateway administration",
"weight":"2",
"date": "2019-10-14",
"description": "Axway API Gateway is a comprehensive platform for managing, delivering, and securing APIs."
}

This topic introduces the main issues involved in you API gateway administration.

* For an introduction to API Gateway features, tools, and architecture, see the [API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5).

## API Gateway form factors

The API Gateway is available in software and hardware form factors. The available platforms are as follows:

* Software installation
* Container deployment in Docker containers

## Who owns the API Gateway platform and how is it administered?

The API Gateway platform is administered by the following groups:

* Operations—Runtime management of message traffic, logs and alerts, and high availability is performed by Operations staff.
* Architecture—Design-time policy definition, which determines the behavior of the API Gateway platform, is performed by Security Architects and Systems Architects.

### Operations team

Operations staff are responsible for making sure that the gateway platform is running correctly. They are concerned with the following problems:

* System status and health
* Network connectivity
* Security alerts
* System security
* Backups and recovery
* Maintenance of logs

The gateway platform provides a web-based console named API Gateway Manager that is dedicated to the Operations team. The API Gateway Manager includes the following features:

* Dashboard for monitoring overall system health and network topology.
* Real-time monitoring and metrics for all messages processed by the API Gateway.
* Traffic monitoring to quickly isolate failed or blocked message transactions and provide detailed information about each transaction, payload, and so on.
* API Gateway logs, trace, events, and alerts.
* Messaging based on Java Message System (JMS). This includes managing queues, topics, subscribers, consumers, and messages in Apache ActiveMQ.
* Dynamic system settings, user roles, and credentials.

As well as providing operational management functionality of its own, the API Gateway also interoperates with third-party network operations tools such as HP OpenView, BMC Control, and CA UniCenter. Finally, all functionality available in the API Gateway Manager is also available as a REST API.

### Architecture team

System architects and security architects have an overarching view of enterprise IT infrastructures, and so are more concerned with using the gateway to help integrate and secure existing enterprise systems. Architects wish to create API policies and integrate with third-party systems.

Policy Studio is a rich API Gateway policy development tool that enables architects and policy developers to create and control the gateway policies. You can use Policy Studio to visually define policy workflows in a drag-n-drop environment. This means that configuration is performed at the systems architecture level, without needing to write code.

For more details on using Policy Studio to create gateway policies, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

## Where do you deploy an API Gateway?

API Gateways can be deployed in the Demilitarized Zone (DMZ) or in the Local Area Network (LAN) depending on policies or requirements, as shown in the following diagram:

![API Gateway network location](/Images/APIGateway/admin_gw_location.png)

The following guidelines help you to decide where to deploy the gateway:

* If you are processing only traffic from external sources, consider locating the gateway in the DMZ. If the gateway is also processing internal traffic, consider locating it in the LAN.
* If you are processing traffic internally and externally, a combination of gateways in the DMZ and internally on the LAN is considered best practice. The reason for this is that different policies should be applied to traffic depending on its origin.
* Both internal and external traffic should be checked for threats and to make sure that they contain the correct parameters for REST API requests, or correspond to Web service definitions.
* External traffic carries a greater potential risk and should be scanned by the gateway located in the DMZ to make sure that it does not in any way affect the performance of internal applications.
* Internal traffic and pre-scanned external traffic should then be processed by the gateway located in the LAN. This type of checking includes:
    * Checking API service level agreements and enforcing throttle threshold levels
    * Integration with a wide range of third-party systems
    * Web service standards support

## Where do you deploy API Gateway Analytics?

Although you can select the API Gateway Analytics component in the API Gateway installer, it is good practice to install API Gateway Analytics on a separate host from your gateway installations. You should ensure that API Gateway Analytics runs on a dedicated host, or on a host that is not a running an API Gateway instance or Node Manager.

You can deploy API Gateway Analytics on any supported host platform depending on its availability in your architecture. For more details on supported platform versions, see the
[API Gateway Installation Guide](/docs/apigtw_install/).

{{< alert title="Note" color="primary" >}}API Gateway Analytics supports a range of databases for storing historic reports and metrics (for example, Oracle, DB2, MySQL, and Microsoft SQL Server). You should not install the database used for API Gateway Analytics in the DMZ. You should install this database in the LAN on a separate host from your API Gateway installations.{{< /alert >}}

You can secure the connection to the API Gateway Analytics database by dedicating it to one IP address. For more details on configuring the API Gateway Analytics database, see the
[API Gateway Analytics User Guide](/bundle/APIGateway_77_AnalyticsUserGuide_allOS_en_HTML5/).

## Secure the last mile

Securing the last mile refers to preventing internal users from directly accessing services without going through the gateway. This can be achieved in multiple ways. You should carefully choose which option is best for your use case, taking into account the security level you want to achieve, and the impact on performance the solution will have. You should choose from the following approaches:

* **Controlling traffic at the network level**: Services can only be accessed if the traffic is coming from pre-approved IP addresses. This is the simplest solution to put in place, is very secure, and has no impact on performance or existing applications.
* **Establishing a mutual SSL connection between API Gateways and services**: This solution is the easiest to put in place and has little to no impact on existing applications. However, it does have a non-negligible impact on latency.
* **Passing authentication tokens from API Gateways to back-end services**: This involves passing authentication tokens for WS-Security, Security Assertion Markup Language (SAML), and so on. This solution has a low impact on latency but requires some development because the target service container must validate the presence and the contents of the token.

For more details on configuring mutual SSL, and configuring WS-Security and SAML authentication tokens, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

## API Gateway administration lifecycle

The main stages in the overall API Gateway administration lifecycle are as follows:

1. Planning an API Gateway system. This is described in [Plan an API Gateway system](admin_planning).
2. Installing API Gateway components. See the [API Gateway Installation Guide](/docs/apigtw_install/).
3. Configuring a domain. This is described in [Configure an API Gateway domain](/docs/apigtw_install/makegateway).
4. Operating and managing the API Gateway. This is described in the rest of this guide.
5. Upgrading an API Gateway. See the [API Gateway Upgrade Guide](/docs/apigtw_upgrade).
