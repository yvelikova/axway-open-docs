{
"title": "Install API Gateway Analytics",
"linkTitle": "Install API Gateway Analytics",
"weight":"24",
"date": "2019-10-02",
"description": "API Gateway Analytics is a server runtime and web-based console for analyzing and reporting on API use over extended periods of time"
}

API Gateway Analytics is a server runtime and web-based console for analyzing and reporting on API use over extended periods of time. For more details, see the [API Gateway Analytics User Guide](/bundle/APIGateway_77_AnalyticsUserGuide_allOS_en_HTML5/).

## Prerequisites

Ensure that all of the prerequisites detailed in [Prerequisites](/docs/apigtw_install/system_requirements) are met.

### Axway license file {#axway-license-file "api_gateway_conditions.axway"=""}

You must have a valid Axway license file to install API Gateway Analytics. To obtain an evaluation trial license or a full license, contact your Axway Account Manager.

## Install API Gateway Analytics

To install API Gateway Analytics in GUI mode, perform an installation following the steps described in [Installation options](/docs/apigtw_install/installation), using the following selections:

* Select the **Custom** setup type.
* Select to install the API Gateway Analytics component.

To install API Gateway Analytics in unattended mode, follow the steps described in [Unattended installation](/docs/apigtw_install/installation_unattended).

The following example shows how to install the API Gateway Analytics component in unattended mode:

## Configure your metrics database for API Gateway Analytics

{{< alert title="Note" color="primary" >}}Before starting API Gateway Analytics, you must perform the following steps:{{< /alert >}}

1. Create a database instance to store metrics for API Gateway Analytics. Alternatively, if you already have an existing database, skip to the next step.
2. Update your API Gateway Analytics configuration with the database details using the `configureserver` script.
3. Configure the database tables using the `dbsetup` script.
4. Enable writing of metrics from your API Gateway instance to the database using the `managedomain` tool.

For more details on how to perform these steps, see the [API Gateway Analytics User Guide](/bundle/APIGateway_77_AnalyticsUserGuide_allOS_en_HTML5/).

## Start API Gateway Analytics

When you have configured your metrics database and API Gateway Analytics, you can start up API Gateway Analytics. For more details, see the [API Gateway Analytics User Guide](/bundle/APIGateway_77_AnalyticsUserGuide_allOS_en_HTML5/).

### Start as a service

You can also run API Gateway Analytics as a service. For more information, see [Set up services](TemplateTopics/post-install/post_overview.htm#Set2).

## Further information

For details on how to set up scheduled reports, view monitoring data in API Gateway Analytics, or purge the metrics database, see the [API Gateway Analytics User Guide](/bundle/APIGateway_77_AnalyticsUserGuide_allOS_en_HTML5/).

For details on using Policy Studio to configure policies, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).
