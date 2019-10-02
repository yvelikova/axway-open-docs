{
"title": "Install the QuickStart tutorial",
"linkTitle": "Install the QuickStart tutorial",
"date": "2019-10-02",
"description": "The API Gateway QuickStart tutorial is available on Linux. It demonstrates the main API Gateway features and tools, and enables you to invoke some example APIs and to monitor API Gateway using API Gateway Manager."
}
﻿

The API Gateway QuickStart tutorial is available on Linux. It demonstrates the main API Gateway features and tools, and enables you to invoke some example APIs and to monitor API Gateway using API Gateway Manager.

The API Gateway QuickStart tutorial demonstrates the main API Gateway features and tools, and enables you to invoke some example APIs and to monitor API Gateway using API Gateway Manager.

{{< alert title="Tip" color="primary" >}}The QuickStart tutorial is automatically installed as part of a default **Standard** or **Complete** setup. For more details, For more details, see [Installation options](installation.htm).{{< /alert >}}

Prerequisites
-------------

Ensure that all of the prerequisites detailed in [Prerequisites](TemplateTopics/prereqs/prereqs_overview.htm#top)
are met.

Install the QuickStart tutorial
-------------------------------

{{< alert title="Note" color="primary" >}}The QuickStart tutorial is dependent on the API Gateway Server. You cannot install the QuickStart tutorial without the API Gateway Server.{{< /alert >}}

To install the API Gateway Server and the QuickStart tutorial in GUI mode, perform an installation following the steps described in [Installation options](installation.htm#top), using the following selections:

-   Select the **Custom** setup type.
-   Select to install the API Gateway Server, Admin Node Manager, and QuickStart tutorial components.

To install the API Gateway Server, Admin Node Manager, and QuickStart tutorial in unattended mode, follow the steps described in [Unattended installation](installation_unattended.htm#Unattend).

The following example shows how to install the API Gateway Server component and the QuickStart tutorial in unattended mode:

``` {space="preserve"}
APIGateway_7.8_Install_linux-x86-32_BNyyyyMMdd.run --mode unattended 
--setup_type advanced 
--enable-components apigateway,nodemanager,qstart 
--disable-components,policystudio,apitester,
configurationstudio,apimgmt,cassandra,packagedeploytools 
--licenseFilePath mylicense.lic
```

QuickStart domain configuration
-------------------------------

When the QuickStart tutorial is installed, a sample API Gateway domain is automatically configured in your installation. This includes a `QuickStart Server` API Gateway instance that runs in a `QuickStart Group` group. The QuickStart server and Admin Node Manager start automatically when installation is complete.

Start the QuickStart tutorial
-----------------------------

The QuickStart tutorial launches automatically in your browser when installation is complete. Follow the instructions in your browser to perform the steps in the tutorial.

For example, the following screen shows invoking a sample API in the tutorial:

![QuickStart Overview](/Images/docbook/images/install/quickstart_api.png)

You can click the **Try it** button to invoke the sample API. This displays a JSON list of available products. You can click the **Show Me** button to view the traffic monitored by API Gateway in API Gateway Manager.

Restart the QuickStart tutorial
-------------------------------

At any point, if you need to restart the QuickStart tutorial, perform the following steps:

1.  Open a command prompt in the following directory:
2.  `INSTALL_DIR/apigateway/posix/bin`
    |             |                                    |
    |-------------|------------------------------------|
    | **Linux**   | `INSTALL_DIR/apigateway/posix/bin` |
    | **Windows** | `INSTALL_DIR\apigateway\Win32\bin` |

3.  Run the `startinstance` command, for example:
4.  startinstance -n "QuickStart Server" -g "QuickStart Group"

    {{< alert title="Note" color="primary" >}}You must ensure that the `startinstance` has execute permissions. {{< /alert >}}
    {{< alert title="Note" color="primary" >}}On Linux, you must ensure that the `startinstance` has execute permissions. {{< /alert >}}

5.  To manage and monitor the API Gateway, you must ensure that the Admin Node Manager is running. Use the `nodemanager` command to start the Admin Node Manager from the same directory.
6.  To launch API Gateway Manager, enter the following address in your browser:
7.  ``` {space="preserve"}
    https://127.0.0.1:8090/
    ```

8.  Enter the administrator user name and password. This is the administrator user name and password you entered during installation.
9.  To launch the QuickStart tutorial, enter the following address in your browser:
10. http://127.0.0.1:8080/quickstart/index.html?mgr=8090


