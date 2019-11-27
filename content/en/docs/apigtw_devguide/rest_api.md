{
"title": "API Gateway REST APIs",
"linkTitle": "API Gateway REST APIs",
"date": "2019-11-27",
"description": "API Gateway exposes some services as REST APIs. These APIs provide access and basic create, read, update, and delete (CRUD) operations for the service resources. API Gateway contains a Jersey Servlet (<http://jersey.java.net/>) that scans a predefined list of packages to identify RESTful resources to be exposed over HTTP or HTTPS. "
}
﻿

API Gateway exposes some services as REST APIs. These APIs provide access and basic create, read, update, and delete (CRUD) operations for the service resources. API Gateway contains a Jersey Servlet (<http://jersey.java.net/>) that scans a predefined list of packages to identify RESTful resources to be exposed over HTTP or HTTPS.

Jersey REST services are exposed on the internal management HTTPS listener that is running on every API Gateway. This HTTPS listener is not accessible to the outside world and only accepts traffic over two-way SSL from the local Node Manager. Therefore, to call any REST service exposed on the management interface, you must call it via the Admin Node Manager using the Routing API.

The API Gateway REST APIs are available from the following locations:

-   `INSTALL_DIR/apigateway/samples/swagger`
-   [Product APIs](/category/api) page on the Axway Documentation portal
-   {{< alert title="Note" color="primary" >}}When viewing REST APIs on the Axway Documentation portal, the `consumes` field is not displayed if you are using `formData` type parameters in an API, due to limitations in the Swagger UI version.{{< /alert >}}

API Gateway component REST APIs
-------------------------------

The following table summarizes the API Gateway component REST APIs that are available:

| API                | Description                                                                                                                                                                                                                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Router             | The Router REST API is available in the Node Manager. It acts as a relay that forwards requests to the appropriate API Gateway registered with the Node Manager.                                                                                                                                                                                              |
| Management         | The Management REST API is available in the Node Manager and all API Gateways. It provides the ability to retrieve the following API Gateway information: API Gateway name, group name, service type, product version, and the domain ID assigned to the Admin Node Manager on creation. This API can also be used to update the service name and group name. |
| Deployment         | The Deployment REST API is available in the Node Manager. It provides the ability to manage deployment archives for API Gateways.                                                                                                                                                                                                                             |
| Configuration      | The Configuration REST API is available in the API Gateway. It provides the ability to upload configurations to API Gateway Admin Node Manager instances. It is used in conjunction with the Deployment API.                                                                                                                                                  |
| API Manager        | The API Manager REST API is available in the API Manager. It provides the ability to view and update the configured users, organizations, applications and events related to the API Manager.                                                                                                                                                                 |
| Admin Users        | The Admin Users REST API is available in the Node Manager. It provides the ability to manage administrator users and roles for the API Gateway installation.                                                                                                                                                                                                  |
| Topology           | The Topology REST API is available in the Node Manager. It provides the ability to manage hosts, groups, and services in the topology.                                                                                                                                                                                                                        |
| Traffic Monitor    | The Traffic Monitor REST API is available in the API Gateway. It provides the ability to monitor traffic in and out of the API Gateway.                                                                                                                                                                                                                       |
| Service Manager    | The Service Manager REST API is available in the Node Manager. It provides the ability to manage virtualized REST APIs configured in the topology.                                                                                                                                                                                                            |
| Analytics          | The Analytics REST API is available in API Gateway Analytics. It provides read-only access to the database audit log and audit message/payload details, metrics for charting, and CRUD for custom reporting.                                                                                                                                                  |
| RBAC               | The RBAC (Role Based Access Control) REST API is available in the Node Manager. It ensures that only users with the assigned role can access parts of the management services exposed by the Admin Node Manager.                                                                                                                                              |
| Monitoring         | The Monitoring REST API is available in the API Gateway. It provides access to process summary details and listings of the real-time metrics for items that metrics are recorded for (for example, web services, external APIs, authenticated clients, external target servers, and so on).                                                                   |
| KPS                | The KPS REST API is exposed by the API Gateway and the Node Manager. The API Gateway interface provides a persistence mechanism. The Node Manager service provides administration functions.                                                                                                                                                                  |
| Domain Audit       | The Domain Audit REST API is available in the Node Manager and API Gateway. It provides the ability to read domain audit events recorded by the Node Manager and API Gateway.                                                                                                                                                                                 |
| Embedded Active MQ | The Embedded Active MQ REST API is exposed by the API Gateway.                                                                                                                                                                                                                                                                                                |

Import the API Gateway REST API into API Manager
------------------------------------------------

You can import the API Gateway REST API Swagger 2.0 definitions into API Manager in the same way that you import any other APIs. For example:

1.  Click the **API Registration** > **Backend API**
    view in API Manager.
2.  Click **New API**
    and select **Import Swagger API**.

<!-- -->

1.  In the **Import API**
    dialog, complete the following:
    -   **Source**: Select Swagger definition file.
    -   **File**
        or **URL**: Click the browse button to select the definition file. For example:
    -   `INSTALL_DIR/apigateway/samples/swagger/api-gateway-swagger.json`
    -   **API Name**: Enter a user-friendly name for the API. The default is **api-gateway-swagger.json**.
    -   **Organization**: Select the organization from the list (for example, **API Development**).

    >
2.  Click **Import**
    to import the API Gateway API.

For more details, see the
[API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
.

![API Gateway REST API Swagger 2.0 Definition](/Images/APIGatewayDeveloperGuide/api_gateway_rest_api.png)
