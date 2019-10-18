{
"title": "Create a Policy Studio project",
"linkTitle": "Create a Policy Studio project",
"date": "2019-10-17",
"description": " A Policy Studio project is a design-time store of API Gateway configuration on a local file system, which can be deployed to a running API Gateway instance on a server. This topic explains how to create a new Policy Studio project from the following starting points:"
}
﻿

A Policy Studio project is a design-time store of API Gateway configuration on a local file system, which can be deployed to a running API Gateway instance on a server. This topic explains how to create a new Policy Studio project from the following starting points:

-   Template configuration (for example, factory)
-   Deployment package (`.fed` file)
-   Policy and environment packages (`.pol` and .`env` files)
-   API Gateway instance
-   Existing API Gateway configuration

For details on opening an existing project, see [*Manage API Gateway connections* on page 1](general_connection_details.htm).

Launch the New Project wizard
-----------------------------

To launch the **New Project** wizard in Policy Studio, select **File** > **New Project** in the main menu. Alternatively, click **New Project** on the welcome page.

Enter project details
---------------------

Enter the following in the **Project Details** screen:

-   **Name**: Enter the Policy Studio project name. This field is required.
-   **Use default location**: Select whether to use the default location. This is selected by default.
-   **Location**: Enter or browse to the project location (for example, `C:\Users\jane\apiprojects\my_test_project`). When **Use default location** is selected, the default location is `${user.home}/apiprojects/${project.name}`.

Click **Next**.

Select a project starting point
-------------------------------

Select one of the following in the **Project starting point** window:

-   **From a template configuration**
-   **From a .fed file**
-   **From .pol and .env files**
-   **From an API Gateway instance**
-   **From existing configuration**

### New project from a template configuration

To create a new project based on template configuration:

1.  Select the configuration template to use as a starting point:
2.  -   **Factory template**
    -   Blank template that contains default factory configuration.
    -   **Factory template with samples**
    -   Blank template that contains sample policies and other entities. This is for creating a project used for demo purposes.
    -   **Team Development – Common Project (with Server Settings)**
    -   Blank template that contains **Server Settings**. This is for creating your common project only. This should include policies common to multiple API projects (for example, authentication and authorization). Your API Gateway configuration must contain only one project with **Server Settings**. All other projects must have no **Server Settings**.
    -   **Team Development – API Project (without Server Settings)**
    -   Blank template that does not contain **Server Settings**. This is for creating all your projects (except your common project). Your API Gateway configuration must contain only one project with **Server Settings**. All other projects must have no **Server Settings**.

The team development templates are only available if team development is enabled in Policy Studio. For more details on enabling team development, see [*Policy Studio preferences* on page 1](general_ps_settings.htm). For more details on team development, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
.

1.  Click **Finish**.

{{< alert title="Note" color="primary" >}}There is no project template for API Manager configuration. For more details, see [Create API Manager projects](#project).{{< /alert >}}

### New project from a .fed file

To create a new project based on a deployment package (`.fed` file):

1.  Configure the following:
2.  -   **File**: Enter or browse to the location of an API Gateway deployment package (`.fed` file). For more details on deployment packages, see the
        [API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
        .
    -   **Passphrase**: Enter the encryption passphrase for the `.fed` file if one has been configured.

3.  Click **Finish**.

### New project from a policy package (.pol) file

To create a new project based on a policy package (`.pol` file):

1.  Configure the following:
2.  -   **Policy Package**: Enter or browse to the location of an API Gateway policy package (`.pol` file). This is required.
    -   **Environment Package**: Enter or browse to the location of an API Gateway environment package (`.env` file). This is optional.
    -   **Passphrase**: Enter the encryption passphrase if one has been configured.
    -   **Advanced**: Click to expand, and select whether to **Allow unresolved references in policy package**. This setting is optional.

3.  Click **Finish**.

For more details on policy packages and environment packages, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
.

### New project from an API Gateway instance

To create a new project based on an API Gateway instance:

1.  In the **Saved Session**s section, select the server session to use from the list. You can edit a session name by entering a new name and clicking **Save**. You can also click the appropriate button to **Add**, **Clone**, or **Remove** saved sessions.
2.  In the **Connection Details**
    section, configure the following:
3.  -   **Host**:\
        Enter the server host to connect to. The default is `localhost`.
    -   **Port**:\
        Enter the port to connect on. The default Admin Node Manager port is `8090`.
    -   **User name**:\
        The deployment service is protected by HTTP basic authentication. Enter the administrator user name to use to authenticate to the server. For more details, see [*Manage Admin users* on page 1](../CommonTopics/user_mgmt.htm).
    -   **Password**:\
        Enter the password for the administrator user.

<!-- -->

<!-- -->

5.  Configure the following in the **Make a server connection** window:

-   **Group**:\
    Select the API Gateway group from the list (for example, **QuickStart Group**), and select the server instance in the panel below (for example, **QuickStart Server**).
-   **Passphrase**:\
    Enter the API Gateway passphrase if one has been configured.

6.  Click **Finish**.

{{< alert title="Note" color="primary" >}}To manage API Gateways in your network, you must connect to the Admin Node Manager server URL.{{< /alert >}}

### New project from existing configuration

To create a new project based on an existing configuration directory:

1.  Configure the following:
2.  -   **File**: Enter or browse to the location of the configuration directory (for example, `INSTALL_DIR\apigateway\conf\fed` is the Admin Node Manager configuration directory).
    -   **Passphrase**: Enter the encryption passphrase if one has been configured.

3.  Click **Finish**.

Create API Manager projects
---------------------------

To create a project with API Manager configuration, perform the following steps:

1.  Create a new project using any of the options detailed in [*Select a project starting point* on page 1](#Select).
2.  Select **File > Configure API Manager**. For more details on configuring API Manager in Policy Studio, see the
    [API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
    .

Alternatively, if you already have API Manager configured you can create the project from the existing API Gateway configuration directory.

{{< alert title="Note" color="primary" >}}There is no project template currently available for API Manager configuration.{{< /alert >}}

Automatic upgrade of project configuration from earlier versions
----------------------------------------------------------------

If you create a project from a `.fed` file, a `.pol` file, or a configuration directory from an earlier API Gateway version, the configuration is automatically upgraded to API Gateway 7.8 when the new project is created. The configuration directory can be from an API Gateway instance, Admin Node Manager, or API Gateway Analytics.

{{< alert title="Note" color="primary" >}}This feature does not apply when creating a project from an API Gateway instance. You can only download configuration from an API Gateway instance if the Policy Studio version is the same as the API Gateway version.{{< /alert >}}

For more details on upgrading, see the
[API Gateway Upgrade Guide](/bundle/APIGateway_77_UpgradeGuide_allOS_en_HTML5)
.
