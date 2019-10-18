{
"title": "Deploy API Gateway configuration",
"linkTitle": "Deploy API Gateway configuration",
"date": "2019-10-18",
"description": "You can edit API Gateway configuration in a Policy Studio project, and deploy to specified API Gateway instances running in an API Gateway group. You can deploy projects based on existing configuration, configuration packages, factory configuration, or a running API Gateway instance."
}
﻿

You can edit API Gateway configuration in a Policy Studio project, and deploy to specified API Gateway instances running in an API Gateway group. You can deploy projects based on existing configuration, configuration packages, factory configuration, or a running API Gateway instance.

Policy Studio also enables you to create configuration packages (`.fed`, `.pol`, or `.env` files), and to deploy projects based on configuration packages to API Gateway instances.

You can also deploy API Gateway configuration packages in the API Gateway Manager web console. Alternatively, you can use the `managedomain`
script to create and deploy deployment packages (`.fed` files) on the command line.

Deploy configuration in Policy Studio
-------------------------------------

You can deploy updates to a currently loaded configuration when editing the configuration in Policy Studio. To deploy a currently loaded configuration, perform the following steps:

1.  Click the **Deploy** button on the right in the toolbar.
2.  In the **Open Connection** dialog, in the **Saved Session**s section, select the server session to use from the list. You can edit a session name by entering a new name and clicking **Save**. You can also click the appropriate button to **Add**, **Clone**, or **Remove** saved sessions.
3.  In the **Connection Details** section, configure the following:
    -   **Host**:\
        Enter the server host to connect to. The default is `localhost`.
    -   **Port**:\
        Enter the port to connect on. The default Admin Node Manager port is `8090`.
    -   **User name**:\
        The deployment service is protected by HTTP basic authentication. Enter the administrator user name to use to authenticate to the server. For more details, see [Manage admin users](user_mgmt.htm).
    -   **Password**:\
        Enter the password for the administrator user.

>

Click **Advanced** to enter the **URL** of the deployment service exposed by the server. This setting is optional. The default Admin Node Manager URL is `https://localhost:8090/api`.

Click **Next** to configure deployment options.

If an advisory warning has been configured, you must click **Next** again. For more details,
see [Configure an advisory banner](../AdminGuideTopics/advisory_banner.htm). see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

In the **Select the servers(s) you wish to deploy to** section, select an API Gateway group from the **Group** list, and select the server instance(s) in the box below.

If the server uses a different API Gateway encryption passphrase for its environment, click **Advanced**, select **The target server uses a different passphrase**, and enter the **Passphrase** used by the target server.

Click **Next**, and wait for the deployment to complete.

Click **Finish**.

{{< alert title="Note" color="primary" >}}You must connect to the Admin Node Manager server to deploy API Gateway configuration or manage multiple API Gateway instances in your network.{{< /alert >}}

View deployment results in Policy Studio
----------------------------------------

When you click **Deploy**, the **Deployment Results** screen is displayed, and deployment to each server occurs sequentially. Feedback is provided using icons in the **Task** column, and text in the **Status** column. When the configuration has deployed, click **Finish**.

### Cancel deployments

You can cancel deployments by clicking the **Cancel** button. Feedback is provided in the **Status** column. You cannot cancel a deployment when it has started. The wizard performs the cancellation at the end of the current deployment, with all remaining deployments being canceled.

### Deployment errors

Client-side and server-side errors can occur. Client-side errors are displayed in the **System Trace** in the **Console** view. If any server-side deployment errors occur during the deployment process, you can review these in the **Deployment Error Log**
view. This is displayed at the bottom of the screen when you click **Finish**, and lists any errors that occur for each instance. The corresponding Console **Deployment Log** is also available in the **Console** view.

### Redeploy

When you have deployed a configuration to one or more instances, you can click back through the wizard to change your selections and redeploy, without needing to exit and relaunch the wizard.

API Gateway configuration packages
----------------------------------

You can deploy configuration based on API Gateway configuration packages in Policy Studio and in the API Gateway Manager web console. API Gateway includes the following types of configuration package:

-   A *deployment package* is a `.fed` file that contains all API Gateway configuration. This includes policies, listeners, external connections, users, certificates, and environment settings.
-   A *policy package* is a `.pol` file that contains policies, listeners, external connections, and environment settings.
-   An *environment package* is an `.env` file that contains users, certificates, and environment settings. The content of the `.fed` file is equivalent to the combined contents of the `.pol` and `.env` files.
-   A *package property* is a name-value pair that applies to a specific configuration package (`.fed`, `.pol`, or `.env`). Specifying a property associates metadata with the configuration in that package. For example, the **Name**
    property with a value of `Default Factory Configuration` is associated with a default installation.

For more details on configuration packages and properties, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
.

Create a configuration package in Policy Studio
-----------------------------------------------

You can create an API Gateway configuration package for a currently loaded project configuration. To create a package (`.fed`, `.pol`, or `.env`), perform the following steps:

1.  In the main menu, select **File > Save Package** followed by the appropriate option:
    -   **Deployment Package** (`.fed`)
    -   **Policy Package** (`.pol`)
    -   **Environment Package** (`.env`)
2.  Enter a file name, and click **Save**.

### Configure package properties in Policy Studio

You can view or modify API Gateway configuration package properties for a currently loaded project configuration. To view and modify configuration properties, perform the following steps:

1.  In the Policy Studio tree, and select **Environment Configuration > Package Properties > Policy** or **Environment**.
2.  If you wish to create any additional properties (for example, **Department**), click the green (+) button on the right, and enter a property value (for example, `Engineering`).
3.  If you wish to remove a property, click the red (x) button on the right of the property.
4.  Click **Save** at the top right of the screen.

Deploy packages in Policy Studio
--------------------------------

You can use the Policy Studio to create projects based on configuration packages. For more details, see [Create a Policy Studio project](../PolicyDevTopics/gs_project.htm)
the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

You can deploy the configuration as normal using the **Deploy** button in the toolbar. For more details, see [Deploy configuration in Policy Studio](#Deploy2).

Deploy packages in API Gateway Manager
--------------------------------------

You can also use the API Gateway Manager web console to deploy configuration packages to a group of API Gateway instances. This functionality is available on the default **Dashboard**
tab.

For more details,
see [Manage domain topology in API Gateway Manager](../AdminGuideTopics/managetopology.htm). see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

Deploy packages on the command line
-----------------------------------

You can create and deploy a deployment package (`.fed`) using the `managedomain --menu` command in the following directory:

`INSTALL_DIR/apigateway/posix/bin`

The deployment options for the `managedomain --menu` command are as follows:

``` {space="preserve"}
18) Deploy to a group
19) List deployment information
20) Create deployment archive
21) Download deployment archive
22) Update deployment archive properties
```

For more details,
see [Managedomain command reference](../AdminGuideTopics/managedomain_ref.htm). see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.
