{
"title": "Install Policy Studio",
"linkTitle": "Install Policy Studio",
"weight":"16",
"date": "2019-10-02",
"description": "Use Policy Studio to virtualize APIs and develop policies."
}

Policy Studio is a graphical IDE that enables developers to virtualize APIs and develop policies to enforce security, compliance, and operational requirements.
You can install Policy Studio on both Linux and Windows.

{{< alert title="Note" color="primary" >}}Windows is supported only for a limited set of developer tools, see [Install developer tools on Windows](../../../InstallGuideTopics/install_dev_tools.htm). API Gateway and API Manager do not support Windows.{{< /alert >}}

For more details on API Gateway components and concepts, see the [API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5).

## Prerequisites

Ensure that all of the prerequisites detailed in [Prerequisites](/docs/apigtw_install/system_requirements) are met.

## Install Policy Studio

To install Policy Studio in GUI mode, perform an installation following the steps described in [Installation options](/docs/apigtw_install/installation), using the following selections:

* Select the **Custom** setup type.
    This screen is omitted on Windows.
* Select to install the Policy Studio component.

To install Policy Studio in unattended mode, follow the steps described in [Unattended installation](/docs/apigtw_install/installation_unattended).

The following example shows how to install the Policy Studio component in unattended mode on Linux:

## Start Policy Studio

{{< alert title="Note" color="primary" >}}Before starting Policy Studio, ensure both the Admin Node Manager and the API Gateway instance are running. For more details, see [Start API Gateway](/docs/apigtw_install/install_gateway).{{< /alert >}}

If you did not select to launch Policy Studio after installation, perform the following steps:

1. Open a command prompt.
2. Change to your Policy Studio installation directory (for example, `INSTALL_DIR/policystudio`).
3. Run `policystudio`.
4. When Policy Studio starts up, select **File > New Project**.
5. In the New Project dialog, enter a name for the project and click **Next**.
6. Select **From a running API Gateway instance** and click **Next**.

{{< alert title="Tip" color="primary" >}}You can also create configuration projects from `.fed` files or from existing configurations. For more information, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).{{< /alert >}}

1. In the Open Connection dialog, select the Admin Node Manager session to connect to, enter the administrator user name and password you specified when you installed API Gateway, and click **OK**.
2. In the Download Options dialog, select a group and an API Gateway instance to download its configuration.
3. If a passphrase has been set, enter it in the **Passphrase** field, and click **Finish**. Alternatively, if no passphrase has been set, click **Finish**. For more details on setting a passphrase, see the  [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/).
