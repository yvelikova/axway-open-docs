{
"title": "Plan the deployment",
"linkTitle": "Plan the deployment",
"weight":"6",
"date": "2019-10-07",
"description": "Learn about the platforms, components, and types of connection required for the deployment of your gateway."
}

This topic discusses how to plan your deployment. For more information on planning an API Gateway system, and how API Gateway interacts with existing infrastructure, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/).

## Platforms

For more information on the exact platforms that Axway supports for API Gateway, see [System requirements](system_requirements).

{{< alert title="Note" color="primary" >}}Windows is supported only for a limited set of developer tools, see [Install developer tools on Windows](install_dev_tools). API Gateway and API Manager do not support Windows.{{< /alert >}}

## API Gateway components

Before installing API Gateway you need to consider which components you require. Some components (for example, API Manager or API Gateway Analytics) have additional requirements, such as databases. For more information, see [Specific component requirements](system_requirements#specific_component_requirements).

For more information on API Gateway components, see the [API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5).

## Client components

API Gateway includes the Policy Studio developer tool, a thick client that is supported on both Linux and Windows. It also includes several web-based tools (for example, API Gateway Manager and API Gateway Analytics).

For more details on supported thick client platforms and supported web browsers, see [Web browsers](../../system_requirements.htm#web_browsers) and [Thick client platforms](../../system_requirements.htm#thick_client_platforms).

## High availability

The following components have specific requirements for high availability (HA):

### API Gateway HA

For resilient API Gateway and API Manager HA configuration, a minimum of at least two API Gateway instances is required. For details on configuring API Gateway high availability, see the [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/).

### Apache Cassandra HA

In addition, the Apache Cassandra database is required to store data for the API Manager component. You can also use Cassandra to store data for API Gateway components such as the Key Property Store, OAuth, and API keys. For Cassandra HA configuration, a minimum of three Cassandra nodes is required. For more details, see
[Configure a Cassandra HA cluster](cassandra_install).

### Multiple datacenters

For details on how to configure different types of API Gateway and API Manager data in a multi-datacenter environment, see [Configure API Management in multiple datacenters](multi_datacenter_intro).

## Connection to other products

API Gateway supports integration with a wide range of Axway products (for example,
Axway PassPort) and third-party products (for example, LDAP, JMS, or database providers). The requirements for a deployment of API Gateway with such an integration differs based on the specific product being integrated.

For more details on a particular integration, see the appropriate integration or interoperability guide, available in the Axway Documentation portal at <https://docs.axway.com>.

For more details on the versions of Axway products that API Gateway 7.8 interoperates with, see the following:

* [API Gateway PassPort Interoperability Guide](/bundle/APIGateway_77_PassPort_InteropGuide_allOS_en_HTML5)
* [API Gateway Sentinel Interoperability Guide](/bundle/APIGateway_77_Sentinel_InteropGuide_allOS_en_HTML5)
* [API Gateway Validation Authority Interoperability Guide](/bundle/APIGateway_77_VA_InteropGuide_allOS_en_HTML5)
