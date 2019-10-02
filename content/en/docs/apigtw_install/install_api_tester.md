{
"title": "Install API Tester",
"linkTitle": "Install API Tester",
"date": "2019-10-02",
"description": "API Tester is a graphical tool that enables you to test API functionality, performance, and security. For more details on API Gateway components and concepts, see the \\n \\n \\n \\n ."
}
﻿

API Tester is a graphical tool
on Linux that enables you to test API functionality, performance, and security. For more details on API Gateway components and concepts, see the
[API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5)
.

{{< alert title="Note" color="primary" >}}API Tester is deprecated and will be removed in a future release. API Tester is no longer installed in a **Standard** or **Complete** setup, and is only installed in a **Custom** setup.{{< /alert >}}

Prerequisites
-------------

Ensure that all of the prerequisites detailed in [Prerequisites](TemplateTopics/prereqs/prereqs_overview.htm#top)
are met.

Install API Tester
------------------

To install API Tester in GUI mode, perform an installation following the steps described in [Installation options](installation.htm#top), using the following selections:

-   Select the **Custom**
    setup type.
-   Select to install the API Tester component.

To install API Tester in unattended mode, follow the steps described in [Unattended installation](installation_unattended.htm#Unattend).

The following example shows how to install the API Tester component in unattended mode:

Start API Tester
----------------

{{< alert title="Note" color="primary" >}}Before starting API Tester, ensure that the Admin Node Manager and the API Gateway instance are running. For more details, see [Start API Gateway](install_gateway.htm#Start).{{< /alert >}}

To start API Tester after installation, perform the following steps:

1.  Open a command prompt.
2.  Change to your API Tester installation directory (for example, `INSTALL_DIR/apitester`).
3.  Run `apitester`.

For more details on API Tester, see the *API Tester User Guide*
available from Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}.
