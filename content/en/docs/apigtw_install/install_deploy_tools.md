{
"title": "Install the Package and Deploy tools",
"linkTitle": "Install the Package and Deploy tools",
"weight":"22",
"date": "2019-10-02",
"description": "Install tools to automate processes for continuous integration."
}

You can use the API Gateway Package and Deploy tools to automate processes in your API Gateway system for continuous integration. For example, this includes generating gateway configuration packages from API team development projects, and building and deploying configurations to the gateway group instances.

You can install the Package and Deploy tools component on both Linux and Windows without an API Gateway license.

{{< alert title="Note" color="primary" >}}Windows is supported only for a limited set of developer tools, see [Install developer tools on Windows](/docs/apigtw_install/install_dev_tools). API Gateway and API Manager do not support Windows.{{< /alert >}}

For more details on API Gateway configuration packages, see the [API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/).

## Prerequisites

Ensure that all of the prerequisites detailed in [Prerequisites](/docs/apigtw_install/system_requirements) are met.

## Install the Package and Deploy tools

To install the Package and Deploy tools in GUI mode, perform an installation following the steps described in [Installation options](/docs/apigtw_install/installation#select-setup-type), using the following selections:

* Select the **Custom** setup type.
* Select to install the **Package and Deploy Tools** component.

To install the Package and Deploy tools component in unattended mode, follow the steps described in [Unattended installation](/docs/apigtw_install/installation_unattended).

For example, the following command shows how to install the API Gateway Package and Deploy tools only in unattended mode on Linux:

```
./APIGateway_7.8_Install_linux-x86-32_BN<n>.run --mode unattended --setup_type advanced --enable-components packagedeploytools --disable-components apigateway,qstart,policystudio,analytics,configurationstudio,apitester,apimgmt,cassandra
```

For details on using the Package and Deploy tools to automate processes for continuous integration, see [Upgrade an API Gateway project](/csh?context=461&product=prod-api-gateway-77)
in the [API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/).
