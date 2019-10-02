{
"title": "Install the API Gateway server",
"linkTitle": "Install the API Gateway server",
"date": "2019-10-02",
"description": "The API Gateway server is the main runtime environment consisting of an API Gateway instance and a Node Manager."
}
﻿

The API Gateway server is the main runtime environment consisting of an API Gateway instance and a Node Manager.
This topic describes how to install API Gateway on Linux.

{{< alert title="Note" color="primary" >}}Windows is supported only for a limited set of developer tools, see [Install developer tools on Windows](../../../InstallGuideTopics/install_dev_tools.htm). API Gateway and API Manager do not support Windows.{{< /alert >}}

For more details on API Gateway components and concepts, see the
[API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5)
.

Prerequisites
-------------

Ensure that all of the prerequisites detailed in [Prerequisites](TemplateTopics/prereqs/prereqs_overview.htm#top)
are met.

### **Axway license file** {#axway-license-file "api_gateway_conditions.axway"=""}

You must have a valid Axway license file to install the API Gateway server. Also, if you intend to run API Gateway in FIPS-compliant mode, ensure that your license file allows this. To obtain an evaluation trial license or a full license, contact your Axway Account Manager.

{{< alert title="Note" color="primary" >}}If you are using Apache Cassandra, before starting API Gateway, you must first ensure that Cassandra is installed and running. For more details, see [Install an Apache Cassandra database](cassandra_install.htm).{{< /alert >}}

Install the API Gateway server
------------------------------

To install the API Gateway server in GUI mode, perform an installation following the steps described in [Installation options](installation.htm#top), using the following selections:

-   Select the **Custom** setup type.
-   Select to install the API Gateway server component.

To install the API Gateway server in unattended mode, follow the steps described in [Unattended installation](installation_unattended.htm#Unattend).

The following example shows how to install the API Gateway server component in unattended mode:

Before you start API Gateway
----------------------------

Before you can start API Gateway, you must first use the `managedomain` script to create a new domain that includes an API Gateway instance. If you installed the QuickStart tutorial, a sample API Gateway domain is automatically configured in your installation. Otherwise, you must first create a new domain. For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

If you installed the QuickStart tutorial, the QuickStart server and Admin Node Manager start automatically. Otherwise, you must start them manually.

Start API Gateway
-----------------

To start API Gateway manually, follow these steps:

1.  Open a command prompt in the following directory:
2.  `INSTALL_DIR/apigateway/posix/bin`
3.  Run the `startinstance` command, for example:
4.  ``` {space="preserve"}
    startinstance -n "Server1" -g "Group1"
    ```

    {{< alert title="Note" color="primary" >}}You must ensure that the `startinstance` has execute permissions. {{< /alert >}}

5.  To manage and monitor API Gateway, you must ensure that the Admin Node Manager is running. Use the `nodemanager` command to start the Admin Node Manager from the same directory.
6.  To launch API Gateway Manager, enter the following address in your browser:
7.  ``` {space="preserve"}
    https://HOST:8090/
    ```

    `HOST` refers to the host name or IP address of the machine on which API Gateway is running (for example, `https://localhost:8090/`).

8.  Enter the administrator user name and password. This is the administrator user name and password you entered during installation.

{{< alert title="Note" color="primary" >}}You can encrypt all sensitive API Gateway configuration data with an encryption passphrase. For example, you can specify this passphrase in your API Gateway configuration file, or on the command line when the API Gateway is starting up. For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
. {{< /alert >}}

### Start as a service

You can also run API Gateway instances and Node Managers as services. For more information, see [Set up services](TemplateTopics/post-install/post_overview.htm#Set2).
