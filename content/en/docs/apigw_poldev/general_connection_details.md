{
"title": "Manage API Gateway connections",
"linkTitle": "Manage API Gateway connections",
"date": "2019-10-17",
"description": "Use Policy Studio to manage API Gateway server instances."
}

You can open a server connection when creating an project based on an API Gateway instance, when opening an existing project, or when deploying a configuration.

## Create a new project based on an API Gateway instance

When you select **File** > **New Project** to create a new project, you can select to use an API Gateway instance as the starting point for the project configuration. For details on configuring the server connection for the new project, see [Create a project](/docs/apigw_poldev/gs_project/).

{{< alert title="Note" color="primary" >}}You must first create an API Gateway project before you can connect to a server.{{< /alert >}}

## Open an existing project

You can open an existing project using **File** > **Open Project** in the main menu, or by clicking **Open Project** on the welcome page or clicking a link to the existing project in the **Recent Projects** pane.

When you select **File** > **Open Project** or click **Open Project** on the welcome page, you can configure the following connection settings in the **Open project** window:

**Location**:
Enter or browse to the full path to the project in the file system (for example, `C:\Users\john\apiprojects\my_test_project`). You can select from the connection history of existing projects in the list.

**Project Name**:
If a valid project location is selected, Policy Studio completes this field with the project name configured in the `.project` file in the specified project **Location**.

**Passphrase**:
Enter the encryption passphrase if one has been configured.

## Open a connection when deploying

When you select **Deploy** in the toolbar to deploy updated API Gateway configuration to a server, you must first open the server connection. For details on configuring the server connection when deploying, see [Deploy configuration](../CommonTopics/deploy_wizard.htm#Open_connection).

{{< alert title="Note" color="primary" >}}You must first create an API Gateway project before you can deploy configuration.{{< /alert >}}

## Unlock a server connection

You can also unlock an existing connection to a server. This is for emergency use if you have changed configuration, and this results in you being locked out from the **Management Services** on port `8090`. In this case, you have incorrectly configured the authentication filter in the **Protect Management Interfaces** policy.

For example, if you created and deployed an LDAP connection without specifying the correct associated user accounts, and are now unable to connect to the Admin Node Manager.

To unlock a server connection, perform the following steps:

1. Download all the files in the server's `conf/fed` directory to the machine on which Policy Studio is installed.
2. Start Policy Studio.
3. Create a new project from existing configuration based on the `conf/fed` directory that you downloaded from the server in step 1.
4. Change the configuration details as required (for example, specify the correct user account details for the LDAP connection under the **Environment Configuration** > **External Connections** node).
5. Upload the files back to the server's `conf/fed` directory.
6. Restart the Admin Node Manager.

For more details on **Management Services**, see [Configure HTTP services](general_services.htm).
