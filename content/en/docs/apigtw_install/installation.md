{
"title": "[]{#\"top\"}Installation options",
"linkTitle": "[]{#\"top\"}Installation options",
"date": "2019-10-02",
"description": "When you run the installation setup file it launches in GUI mode by default. The following sections detail the installation options in GUI mode."
}
﻿

When you run the installation setup file it launches in GUI mode by default. The following sections detail the installation options in GUI mode.

{{< alert title="Note" color="primary" >}}Windows is supported only for a limited set of developer tools, see [Install developer tools on Windows](../../../InstallGuideTopics/install_dev_tools.htm). API Gateway and API Manager do not support Windows.{{< /alert >}}

Welcome
-------

When you run the setup file in GUI mode, you are presented with an introductory welcome window. Click **Next** to continue with the installation.

License agreement
-----------------

Read the Axway standard license terms, and click **I accept the agreement** to accept the terms. You cannot proceed with the installation until you make a selection. If you click **I do not accept the agreement**, the installer exits.

Click **Next** to continue.

Select setup type
-----------------

You can install API Gateway using the following setup types:

|              |                                                                                                                                                                                                                                                         |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Standard** | Select this option to install all API Gateway components without API Manager. This includes API Gateway Analytics, the QuickStart tutorial, Apache Cassandra database, package and deployment tools, Policy Studio, and Configuration Studio.           |
| **Complete** | Select this option to install all API Gateway components with API Manager. This includes API Manager, API Gateway Analytics, the QuickStart tutorial, Apache Cassandra database, package and deployment tools, Policy Studio, and Configuration Studio. |
| **Custom**   | Select this option to customize which components are installed. You must select this option if you are upgrading from a previous API Gateway version. For more details, see the                                                                         
  [API Gateway Upgrade Guide](/bundle/APIGateway_77_UpgradeGuide_allOS_en_HTML5)                                                                                                                                                                           
  .                                                                                                                                                                                                                                                        |

{{< alert title="Note" color="primary" >}}The API Tester component is deprecated, and is only installed in a **Custom** setup. For more details, see [Install API Tester](install_api_tester.htm).{{< /alert >}}

### QuickStart tutorial

The **Standard** and **Complete** setup types install the QuickStart tutorial by default, or you can select to install it during the **Custom** setup type. This installs a preconfigured domain and API Gateway instance. If you do not install the QuickStart tutorial, you must configure a domain and API Gateway instance when the installation is complete. For more details, see [Initial configuration](TemplateTopics/post-install/post_overview.htm#Initial).

Click **Next** to continue.

Select components
-----------------

This window is only displayed during an **Custom** installation.

Select the components to be installed, and deselect those that are not to be installed. The following components are selected by default:

-   API Gateway Server
-   Admin Node Manager
-   Policy Studio desktop tool

Click **Next** to continue.

Specify installation directory
------------------------------

Enter a location or click the browse button to specify the directory where the API Gateway components are to be installed, for example:

    /opt/Axway-7.8

Click **Next** to continue.

Specify license file
--------------------

Enter the location or click the browse button to specify a valid Axway license file. For more details, see [Software and license keys](TemplateTopics/prereqs/prereqs_software_and_license_keys.htm#top).

{{< alert title="Note" color="primary" >}}API Gateway, API Gateway Analytics, and API Manager each require a valid Axway license file. If you have separate license files for each of these components, specify the API Gateway license at this step, and you will be prompted for the API Gateway Analytics and API Manager license files at a later step. Alternatively, you can specify a single license file that covers all licensed components.{{< /alert >}}

Cassandra configuration
-----------------------

If you selected to install an Apache Cassandra database, configure the following settings:

-   **Installation Directory**:\
    Enter the directory in which to install the Cassandra server (for example, `/opt/db/cassandra`).
-   {{< alert title="Caution" color="warning" >}}Do not install Apache Cassandra in the same directory as the API Gateway components to avoid errors during the Cassandra upgrade.{{< /alert >}}
-   **JRE Location**:\
    Enter the directory of the Java Runtime Environment used by Cassandra. The default value is the location of the JRE provided by API Gateway (for example, `INSTALL_DIR/apigateway/Linux.x86_64/jre/bin`). If you have installed a separate JRE for Cassandra, enter its location instead.
-   For details of the Cassandra JRE requirements and recommendations, see [Cassandra prerequisites](cassandra_install.htm#Cassandr).

Set the administrator credentials for the Admin Node Manager
------------------------------------------------------------

It is important to secure your API Gateway system to protect it from internal and external threats. This window enables you to set the administrator user name and password used to log in to Policy Studio and API Gateway Manager. These administrator credentials are also used by `managedomain` when connecting to an Admin Node Manager.

Select **Change the default user name and password** to set the user name and password for the administrator account, and enter a user name and password. This option is selected by default to ensure that you set your own administrator user name and password. To use a default administrator user name and password, you must deselect this option. The default credentials are available from your Axway account manager.

{{< alert title="Caution" color="warning" >}}You must ensure that you remember these credentials or you will not be able to log in to Policy Studio or API Gateway Manager.
This is especially important when planning to install Policy Studio on Windows later because you do not have the option to set the credentials then.{{< /alert >}}

Click **Next** to continue.

Specify QuickStart Node Manager details
---------------------------------------

This window is only displayed if you selected to install the QuickStart tutorial.

Configure the following settings for the Node Manager:

-   **Host Name or IP Address**:\
    Select a host address from the list (defaults to the installation host name).
-   **Local Management Port**:\
    Enter the local port used to manage the Node Manager. Defaults to `8090`.

Click **Next** to continue.

Specify QuickStart server details
---------------------------------

This window is only displayed if you selected to install the QuickStart tutorial.

Configure the following settings:

-   **Local Management Port**:\
    Enter the local port that the Node Manager uses to manage the API Gateway instance. Defaults to `8085`.
-   **External Traffic Port**:\
    Enter the port that the API Gateway uses for message traffic from external clients. Defaults to `8080`.

Click **Next** to continue.

Set the administrator credentials for API Manager
-------------------------------------------------

It is important to secure your API Manager system to protect it from internal and external threats. This window enables you to set the API administrator user name and password used to log in to the API Manager web console.

Select **Change the default user name and password** to set the user name and password for the API administrator account, and enter a user name and password. This option is selected by default to ensure that you set your own API administrator user name and password. To use a default API administrator user name and password, you must deselect this option. The default credentials are available from your Axway account manager.

{{< alert title="Caution" color="warning" >}}Ensure that you remember these credentials or you will not be able to log in to API Manager.{{< /alert >}}

Click **Next** to continue.

Set the administrator credentials for API Gateway Analytics
-----------------------------------------------------------

It is important to secure your API Gateway Analytics system to protect it from internal and external threats. This window enables you to set the administrator user name and password used to log in to the API Gateway Analytics web console.

Select **Change the default user name and password** to set the user name and password for the administrator account, and enter a user name and password. This option is selected by default to ensure that you set your own administrator user name and password. To use a default administrator user name and password, you must deselect this option. The default credentials are available from your Axway account manager.

{{< alert title="Caution" color="warning" >}}You must ensure that you remember these credentials or you will not be able to log in to API Gateway Analytics.{{< /alert >}}

Click **Next** to continue.

Installation summary
--------------------

The installer displays a summary of the components that will be installed on your system.

Review the information and click **Next** to begin installing.

Installing
----------

A progress window is displayed showing the progress of the installation. When the installation is complete, click **Next** to continue.

Installation complete
---------------------

A window is displayed to indicate that the installation is complete. If you selected to install Policy Studio you can select the option to **Launch Axway Policy Studio**.

The URL of the Admin Node Manager is displayed (for example, `https://127.0.0.1:8090`). You can go to this URL in your browser to access the API Gateway Manager tools.

Click **Finish** to complete the installation. Policy Studio is launched if you selected that option. If you selected to install the QuickStart tutorial, it is also launched in a browser window.
