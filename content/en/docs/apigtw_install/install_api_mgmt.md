{
"title": "Install API Manager",
"linkTitle": "Install API Manager",
"date": "2019-10-02",
"description": "API Manager is an additional licensed layered product running on the Axway API Gateway. For more details, see the \\n \\n \\n ."
}
﻿

API Manager is an additional licensed layered product running on the Axway API Gateway. For more details, see the
[API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
.

{{< alert title="Note" color="primary" >}}Windows is supported only for a limited set of developer tools, see [Install developer tools on Windows](../../../InstallGuideTopics/install_dev_tools.htm). API Gateway and API Manager do not support Windows.{{< /alert >}}

Prerequisites
-------------

Ensure that all of the prerequisites detailed in [Prerequisites](TemplateTopics/prereqs/prereqs_overview.htm#top)
are met.

### Axway license file

You must have a valid Axway license file to install API Manager. To obtain an evaluation trial license or a full license, contact your Axway Account Manager.

{{< alert title="Note" color="primary" >}}Your API Gateway installation must also be licensed. If you do not have a license for API Gateway, you cannot install API Manager.{{< /alert >}}

### Domains with multiple nodes

In an API Gateway domain environment with multiple machine nodes, API Manager must be installed on API Gateway instance nodes.

### Apache Cassandra

The Apache Cassandra database is required to store API Manager data. You can install Cassandra separately before installing API Manager, or when installing API Manager. For more details, see topic '*Install an Apache Cassandra database*' in the [Install API Gateway](TemplateTopics/install/install_overview.htm) section.

Install API Manager
-------------------

To install API Manager in GUI mode, perform an installation following the steps described in [Installation options](installation.htm#top), using the following selections:

-   Select the **Custom**
    setup type.
-   Select to install the following components:
    -   API Manager
    -   API Gateway Server
    -   Admin Node Manager
    -   Cassandra (if not already installed separately before API Manager)

    >

For more details, see the following:

-   [Install the API Gateway server](install_gateway.htm)
-   [Install the Admin Node Manager](install_node_manager.htm)
-   [Install an Apache Cassandra database](cassandra_install.htm)

### Unattended mode

To install API Manager in unattended mode, follow the steps described in [Unattended installation](installation_unattended.htm#Unattend).

The following example shows how to install the API Manager, API Gateway Server, Admin Node Manager, and Cassandra components in unattended mode:

``` {space="preserve"}
./APIGateway_7.8_Install_linux-x86-32_BN<n>.run --mode unattended 
--setup_type advanced  
--enable-components apimgmt,apigateway,nodemanager,cassandra
--disable-components qstart,policystudio,configurationstudio,
analytics,apitester,packagedeploytools
--licenseFilePath mylicense.lic
--apimgmtLicenseFilePath mymgmtlicense.lic
```

Configure API Manager
---------------------

If you selected to install the QuickStart tutorial, API Manager is configured by default. If you did not install the QuickStart tutorial, you must configure API Manager. For more details, see the
[API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
.

Start API Manager
-----------------

{{< alert title="Note" color="primary" >}}Before starting API Manager, ensure that Apache Cassandra, the Admin Node Manager and API Gateway instance are running. For more details, see [Start API Gateway](install_gateway.htm#Start).{{< /alert >}}

When API Manager is configured, you can use the following URL to log into the API Manager web console:

    https://HOST:8075

The default URL is:

    https://localhost:8075

Enter your API administrator user credentials. This is the API administrator user name and password you entered during installation.

For more information on using API Manager, see the
[API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
.
