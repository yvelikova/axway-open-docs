{
"title": "Install the Admin Node Manager",
"linkTitle": "Install the Admin Node Manager",
"date": "2019-10-02",
"description": "You can install an Admin Node Manager component in isolation without an API Gateway license. For more details on API Gateway components and concepts, see the \\n \\n \\n \\n ."
}
﻿

You can install an Admin Node Manager component
on Linux in isolation without an API Gateway license. For more details on API Gateway components and concepts, see the
[API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5)
.

Prerequisites
-------------

Ensure that all of the prerequisites detailed in [Prerequisites](TemplateTopics/prereqs/prereqs_overview.htm#top)
are met.

Install the Admin Node Manager
------------------------------

To install the Admin Node Manager in GUI mode, perform an installation following the steps described in [Installation options](installation.htm#top), using the following selections:

-   Select the **Custom** setup type.
-   Select to install the Admin Node Manager component.

To install the Admin Node Manager in unattended mode, follow the steps described in [Unattended installation](installation_unattended.htm#Unattend).

The following example shows how to install the Admin Node Manager component in unattended mode:

``` {space="preserve"}
./APIGateway_7.8_Install_linux-x86-32_BN<n>.run --mode unattended 
--setup_type advanced 
--enable-components apigateway
--disable-components qstart,policystudio,configurationstudio,analytics,
apitester,apimgmt,cassandra,packagedeploytools
```

Start the Admin Node Manager
----------------------------

For more information on starting the Admin Node Manager, see [Start API Gateway](install_gateway.htm#Start).
