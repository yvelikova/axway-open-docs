{
"title": "Configure a connector for ServiceNow APIs",
"linkTitle": "Configure a connector for ServiceNow APIs",
"date": "2019-09-17",
"description": "API Manager enables you to import and manage cloud application APIs such as ServiceNow. The policy developer can configure client authentication profiles for use with the ServiceNow API connector in Policy Studio. "
}
﻿

API Manager enables you to import and manage cloud application APIs such as ServiceNow. The policy developer can configure client authentication profiles for use with the ServiceNow API connector in Policy Studio.

When the policy developer has connected to the ServiceNow cloud API provider, the API administrator can then import and manage ServiceNow application APIs in the API Manager web console.

ServiceNow API use cases
------------------------

ServiceNow provides cloud-based service management solutions (for example, IT, human resources, facilities, field service, and so on). ServiceNow provides the following types of API:

-   **Table API**: Used to manipulate business objects in the system.
-   **Aggregate API**: Used to compute statistics on business objects.
-   **Import Set API**: Provides a REST interface for importing and exporting set of data.

For example, the API administrator can use the Table API to expose ServiceNow incidents to support and service teams on their desktop and mobile devices. Each team member can collaborate and exchange information on the same incident using different tools in real time.

The API administrator can use the Aggregate API to expose a set of statistics on customer incidents on a web dashboard. The support team manager and the customer account manager use the dashboard to manage the status of customer issues.

The API administrator can use the Import Set API to extract a daily set of incidents from ServiceNow and store them in an archive.

Configure an API connector for ServiceNow
-----------------------------------------

The policy developer can configure an API connector in Policy Studio. To configure a connector, perform the following steps:

1.  Select **Server Settings** > **API Manager** > **API Connectors** in the Policy Studio tree on the left.
2.  Click **Add** to add a new connector.
3.  Configure the following settings to suit your environment: 
    -   **Name**:\
        The name of the API connector: `ServiceNow`.
    -   **Resource Prefix**:\
        The resource prefix used for the API connector: `servicenow`.
    -   **Description**:\
        A short description of the API connector:`ServiceNow connector`.
    -   **URL**:\
        Enter the URL for the ServiceNow API connector. This setting is required for ServiceNow:\
        `https://myinstance.service-now.com`\
    -   **Class**:\
        The Java class for the API connector:\
        `com.vordel.apiportal.api.connector.sn.ServiceNowConnector`
    -   **Client Credentials**:\
        ServiceNow APIs use HTTP basic authentication. Click the browse button to select the client credential required for ServiceNow. For more details, see [*Configure HTTP basic credentials for ServiceNow* on page 1](#Example:).
    -   **Max APIs/Import**:\
        Enter the maximum number of APIs that can be imported from the ServiceNow cloud API provider into a single API in API Manager. A very large number makes it harder for an API owner to manage. The ServiceNow connector defaults to `100` APIs per import. For more details, see [*Import cloud APIs in* on page 1.](#Import)
    -   **Custom Configuration**:\
        Enter custom configuration details: `{"apiVersion":"1.0"}`.

>

Click **OK**.

The following example shows the default API connector configuration for the ServiceNow connector in Policy Studio:

![ServiceNow API connector configuration](/Images/docbook/images/api_mgmt/api_mgmt_connector_service_now.png)

Configure HTTP basic credentials for ServiceNow
-----------------------------------------------

To configure client credentials for ServiceNow, perform the following steps:

1.  Register an account with ServiceNow to obtain your ServiceNow credentials.
2.  In the Policy Studio tree, select **Environment Configuration** > **External Connections** > **Client Credentials** > **HTTP Basic**, and click **Add** on the bottom right.
3.  Enter a **Profile Name** (for example, `ServiceNow Credentials`).
4.  Ensure **Choose Authentication Type** is set to **Basic**. Connecting to ServiceNow with **Digest** authentication is not supported.
5.  Enter your ServiceNow account credentials in the **Username** and **Password** fields.

{{< alert title="Note" color="primary" >}}Alternatively, you can enter an API Gateway selector (`${authentication.subject.id}`) in the **Username** field. This setting causes the ServiceNow connector in API Manager to prompt you for your ServiceNow credentials before importing APIs.{{< /alert >}}

The following shows a completed example:

![HTTP basic credentials for ServiceNow](/Images/docbook/images/api_mgmt/api_mgmt_connector_credentials_servicenow.png)

Import ServiceNow APIs in API Manager
-------------------------------------

When the policy developer has configured the API connector and the associated client authentication credentials in Policy Studio, the API administrator can import the ServiceNow cloud API in the API Manager web console. When importing APIs, the import dialog displays the list of available ServiceNow Table, Aggregate and Import Set APIs. You can filter this list to display the required APIs.

You can then select multiple different APIs to be part of an API definition imported in API Manager, and governed as a single back-end API. You can virtualize and manage the resulting back-end API just like any other API in API Manager.

{{< alert title="Note" color="primary" >}}Due to the large number of APIs available from ServiceNow, importing all of them is not possible with the default API Gateway configuration, and might take over an hour. It is recommended that you import only the APIs that will be used.{{< /alert >}}

To import a ServiceNow API in API Manager, perform the following steps:

1.  Select **API Registration** > **Backend API**.
2.  Click **New API**, and select **Import from ServiceNow**.
3.  If the client credentials profile for ServiceNow is configured with a wildcard resource owner password, you are prompted to enter valid ServiceNow login credentials. For more details, see [*Configure HTTP basic credentials for ServiceNow* on page 1](#Example:).
4.  Alternatively, if the credentials profile for ServiceNow is configured with a valid system account, the ServiceNow connector automatically attempts to connect to ServiceNow.
5.  Complete the following details in the import dialog:
    -   **API Name**: Enter a name for the back-end API to display in API Manager.
    -   **Description**: Enter a short description for the back-end API.
    -   **Organization**: Select the organization name from the list.
    -   **APIs Filter**: Enter a filter string, and click **Filter** to display the results in the **APIs** tree.
    -   **APIs**: Select the ServiceNow object API that you require in the tree. You can continue to filter and select multiple APIs.
    -   **Selected APIs**: View the APIs selected for import, and click to remove any that do not apply.
    -   The following example shows a completed import dialog:
    -   ![Import API from ServiceNow](/Images/docbook/images/api_mgmt/api_mgmt_connector_import_servicenow.png)

<!-- -->

1.  When you have selected all the APIs you require, click **Import** at the bottom. The imported APIs are displayed as a single back-end API in API Manager.
2.  ![Imported ServiceNowAPI](/Images/docbook/images/api_mgmt/api_mgmt_connector_servicenow_imported.png)

For more details on importing APIs, see [*Register REST APIs in* on page 1](api_mgmt_register_web.htm).

Manage ServiceNow APIs in API Manager
-------------------------------------

When you import a cloud API and register it as a back-end API, you can virtualize and manage it as a front-end API, just like any other API in API Manager. For example, this includes selecting different authentication mechanisms and testing API methods.

### Virtualize ServiceNow APIs

When you have imported a set of ServiceNow objects into API Manager as a back-end API, you can then virtualize it as a front-end API and secure it in different ways. In one of the most common scenarios, API Manager acts as an HTTP basic authentication client to ServiceNow APIs. To achieve this, you should configure the virtualized front-end API in API Manager to use HTTP basic as the outbound authentication profile.

#### Using a system account

If the HTTP basic credentials are set to literal values (username and password), at runtime API Manager uses these credentials to authenticate with ServiceNow. For more details, see [*Configure HTTP basic credentials for ServiceNow* on page 1](#Example:).

{{< alert title="Note" color="primary" >}}The front-end API exposed to consumers can use any application or end user authentication or authorization mechanism. The ServiceNow access rights defined by the system account are shared equally by all consumers.{{< /alert >}}

#### Using end user credentials

If the HTTP basic credentials are set to a wildcard selector value (such as `${authentication.subject.id}`), at runtime API Manager resolves the selector, and dynamically determines the user credentials to authenticate with ServiceNow. This is the default. For more details, see [*Configure HTTP basic credentials for ServiceNow* on page 1](#Example:).

{{< alert title="Note" color="primary" >}}The front-end API exposed to consumers can use any application or end user authentication or authorization mechanism, as long as the configured selectors can be resolved to valid credentials. The ServiceNow access rights defined by the credentials resolved at runtime are used.{{< /alert >}}

#### Create the front-end API in API Manager

When you have configured the HTTP basic credentials in Policy Studio, you can virtualize the back-end ServiceNow API as a front-end API in API Manager. Perform the following steps:

1.  Select **API Registration** > **Frontend API**.
2.  Click **New API**, and select **New API from backend API**.
3.  Select the existing ServiceNow back-end API in the dialog.
4.  Enter a **Resource Path** (for example `/servicenow`).
5.  On the **Inbound** tab, select a security device for authentication from the **Inbound security** setting. For more details, see [*Configure Inbound settings* on page 1](api_mgmt_virtualize_web.htm#Configur4).

{{< alert title="Note" color="primary" >}}If the HTTP basic credentials are set to a wildcard selector value (for example, `${authentication.subject.id}`), this must be resolved by API Manager before calling ServiceNow.{{< /alert >}}

1.  On the **Outbound** tab, select a security device from the **Outbound authentication profile** setting. For example, HTTP basic is a commonly used outbound authentication profile in this scenario. For more details, see [*Configure Outbound settings* on page 1](api_mgmt_virtualize_web.htm#Configur7).
2.  The response contents of ServiceNow APIs can include relative links to other associated resources. Because the virtualized API in API Manager might present a different relative path to the consuming client application, URL rewriting might be necessary.
3.  A sample URL rewriting policy is available in Policy Studio under **Sample Policies** > **API Management URL Rewriting**. Click **Advanced**, and add this as a **Response policy** to leverage URL rewriting. For more details, see [*Configure Advanced Outbound settings* on page 1](api_mgmt_virtualize_web.htm#Configur5)).

<!-- -->

1.  Click **Save** or **Apply**.
2.  On the **API Methods** tab, you can select a method, and click **Try method** to test it. For more details, see [*Configure API method information* on page 1](api_mgmt_virtualize_web.htm#Configur6).

The following example shows a virtualized front-end ServiceNow API with HTTP basic selected for outbound authentication:

![Virtualized ServiceNow API](/Images/docbook/images/api_mgmt/api_mgmt_connector_virtualized_servicenow.png)

For more details on virtualizing APIs, see [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm).

Submit XML requests to ServiceNow using API Gateway
---------------------------------------------------

Currently, you cannot submit XML requests to ServiceNow through API Gateway out-of-the-box. This is because ServiceNow returns an error if there is whitespace at the end of an XML request.

To workaround this issue, you can use either of the following approaches:

-   Set the `Content-Type` of the XML request to the following:

<!-- -->

-   `Content-Type: charset=”UTF-8”; application/xml`

<!-- -->

-   Create a custom request policy to remove all whitespace at the end of a request. For example:

<!-- -->

-   ![Example policy to remove whitespace at the end of a request](/Images/docbook/images/api_mgmt/api_mgmt_connector_sn_wspace_policy.png)

### Custom policy to remove whitespace at end of request

The custom request policy to remove all whitespace at the end of a request is described as follows:

1.  A **Set Attribute** filter copies the contents of the request to a temporary variable:
2.  ![Example Set Attribute filter](/Images/docbook/images/api_mgmt/api_mgmt_connector_sn_wspace_policy1.png)
3.  A **Trace** filter is used for tracking purposes:
4.  ![Example Trace filter](/Images/docbook/images/api_mgmt/api_mgmt_connector_sn_wspace_policy2.png)
5.  A **String Replace** filter removes the whitespace at the end of the request body (using the `\s*$` regular expression):
6.  ![Example String Replace filter](/Images/docbook/images/api_mgmt/api_mgmt_connector_sn_wspace_policy3.png)
7.  Another **Trace** filter is used for tracking purposes.
8.  A **Set Message** filter sets the contents of the temporary variable (in which the replacement took place) as a request body:
9.  ![Example Set Message filter](/Images/docbook/images/api_mgmt/api_mgmt_connector_sn_wspace_policy5.png)

Further information
-------------------

For more details on ServiceNow APIs, see [http://wiki.servicenow.com](http://wiki.servicenow.com/ "http://wiki.servicenow.com").
