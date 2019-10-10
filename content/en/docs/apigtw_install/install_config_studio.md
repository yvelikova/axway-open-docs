{
"title": "Install Configuration Studio",
"linkTitle": "Install Configuration Studio",
"weight":"18",
"date": "2019-10-02",
"description": "Configuration Studio allows you to configure environment-specific properties to deploy APIs and policies in non-development environments."
}

Configuration Studio is a graphical tool that enables administrators to configure environment-specific properties to deploy APIs and policies in non-development environments.
You can install Configuration Studio on both Linux and Windows.

For more details on using Configuration Studio, see the [API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/).

{{< alert title="Note" color="primary" >}}Windows is supported only for a limited set of developer tools, see [Install developer tools on Windows](/docs/apigtw_install/install_dev_tools). API Gateway and API Manager do not support Windows.{{< /alert >}}

## Prerequisites

Ensure that all of the prerequisites detailed in [Prerequisites](/docs/apigtw_install/system_requirements) are met.

## Install Configuration Studio

To install Configuration Studio in GUI mode, perform an installation following the steps described in [Installation options](/docs/apigtw_install/installation#select-setup-type), using the following selections:

* Select the **Custom** setup type.
    This screen is omitted on Windows.
* Select to install the Configuration Studio component.

To install Configuration Studio in unattended mode, follow the steps described in [Unattended installation](/docs/apigtw_install/installation_unattended).

The following example shows how to install the Configuration Studio component in unattended mode on Linux:

## Start Configuration Studio

To start Configuration Studio after installation, perform the following steps:

1. Open a command prompt.
2. Change to your Configuration Studio installation directory (for example, `INSTALL_DIR/configurationstudio`).
3. Run `configurationstudio`.
