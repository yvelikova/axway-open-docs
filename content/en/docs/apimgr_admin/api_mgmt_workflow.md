{
"title": "API management workflow",
"linkTitle": "API management workflow",
"date": "2019-09-17",
"description": "This topic provides a quick workflow summary of the steps required to register and virtualize APIs in API Manager. It shows simple configuration options to help get started. The topics that follow explain concepts such as back-end and front-end APIs, provide detailed steps with examples, and describe the advanced options. "
}
﻿
<div id="p_api_mgmt_workflow_over">

Overview
--------

This topic provides a quick workflow summary of the steps required to register and virtualize APIs in API Manager. It shows simple configuration options to help get started. The topics that follow explain concepts such as back-end and front-end APIs, provide detailed steps with examples, and describe the advanced options.

{{< alert title="Note" color="primary" >}}
Before you can register APIs in API Manager, you must first enable an organization for API registration and development. The API Manager welcome screen prompts you to automatically create an `API Development`
organization, which is enabled for API development by default. For more details, see [Register REST APIs in](api_mgmt_register_web.htm).
{{< /alert >}}

</div>

<div id="p_api_mgmt_workflow_register">

Register a back-end REST API in API Manager
-------------------------------------------

To register a back-end API in API Manager, perform the following steps:

1.  In API Manager, select **API Registration** > **Backend API**.
2.  Click **New API**, and select one of the following:
    -   **Import API from Topology**: Import a REST API deployed on an API Gateway.
    -   **Import RAML API**: Import a REST API in RAML format.
    -   **Import Swagger API**: Import a REST API in JSON format.
    -   **Import WADL API**: Import a REST API in WADL format.
    -   **Import WSDL API**: Import a web service in WSDL format.

    >

<!-- -->

1.  Specify the API details (for example, location, name, and organization), and click **Import**.
2.  When the API is imported, click **OK**.

For more details, see [Register REST APIs in](api_mgmt_register_web.htm). The following example shows imported APIs based on RAML, Swagger, and Web service definitions:

![Imported APIs in the web console](/Images/docbook/images/api_mgmt/api_mgmt_backend_api_import.png)

Alternatively, if you do not have a Swagger or WADL file to import for an existing API, see [*Manually register a new back-end REST API* on page 1](api_mgmt_register_web.htm#Manually).

</div>

<div id="p_api_mgmt_workflow_virtualize">

Virtualize a front-end REST API in API Manager
----------------------------------------------

To virtualize a front-end API in API Manager, perform the following steps:

1.  In API Manager, select **API Registration** > **Frontend API**.
2.  Click **New API**, and select **New API from backend API**.
3.  Select the existing back-end API, and click **OK**.
4.  Select an **Inbound security**
    device from the list. The most commonly used security devices are as follows:

</div>

|                  |                                                                                                                                                                                                                |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **API key**      | Enables API Manager to control and monitor client applications that can access APIs by requiring users to authenticate with an API key.                                                                        |
| **Pass through** | API Manager does not control and monitor access to the API, and does not use its client registry for the API, which is effectively public. However, the backend API may have its own authentication mechanism. |

<div id="p_api_mgmt_workflow_virtualize">

5.  Specify the settings for the security device in the dialog, and click **OK**.
6.  If the back-end API is accessed using HTTPS, click the **Trusted Certificates**
    tab, and click the plus icon on the left. In the dialog, you can specify the URL to valid back-end content, and authentication parameters (if required). For example, you can use the URL for the Swagger or WADL file that you already used to import the back-end API.
7.  When finished, click **Save**.

For more details, see [Virtualize REST APIs in](api_mgmt_virtualize_web.htm). The following example shows an existing Swagger-based back-end API virtualized as a front-end API:

![Virtualized API details in the web console](/Images/docbook/images/api_mgmt/api_mgmt_frontend_api_edit.png)

</div>
