{
"title": "Configure a connector for Salesforce APIs",
"linkTitle": "Configure a connector for Salesforce APIs",
"date": "2019-09-17",
"description": "API Manager enables you to import and manage cloud application APIs such as Salesforce.com. The policy developer can configure client authentication profiles for use with the Salesforce.com API connector in Policy Studio. "
}
﻿

API Manager enables you to import and manage cloud application APIs such as Salesforce.com. The policy developer can configure client authentication profiles for use with the Salesforce.com API connector in Policy Studio.

When the policy developer has connected to the Salesforce.com cloud API provider, the API administrator can then import and manage Salesforce.com application APIs in the API Manager web console.

Salesforce.com API use cases
----------------------------

Salesforce.com provides cloud-based customer relationship management (CRM) solutions. Salesforce.com provides the following types of API:

-   **Standard Object API**: Used to manipulate business objects in the system.
-   **Bulk API**: Provides a REST interface for importing and exporting a set of data.

For example, the API administrator can use the Standard Object API to expose SalesForce.com opportunities to sales teams on their desktop and mobile devices. Salespeople can also create new opportunities while on-site with customers.

The API administrator can use the Bulk API to extract a daily set of opportunities from SalesForce.com and store them in an archive.

Configure an API connector for Salesforce.com
---------------------------------------------

The policy developer can configure an API connector in Policy Studio. To configure a connector, perform the following steps:

1.  Select **Server Settings** > **API Manager** > **API Connectors** in the Policy Studio tree on the left.
2.  Click **Add** to add a new connector.
3.  Configure the following settings to suit your environment:
    -   **Name**:\
        The name of the API connector: `Salesforce.com`.
    -   **Resource Prefix**:\
        The resource prefix used for the API connector: `salesforce`.
    -   **Description**:\
        A short description of the API connector.
    -   **URL**:\
        Leave this field blank for Salesforce.com (applies to SeviceNow only).
    -   **Class**:\
        The Java class for the API connector:\
        `com.vordel.apiportal.api.connector.sf.SalesforceConnector`
    -   **Client Credentials**:\
    -   Salesforce.com APIs require OAuth-based authentication. For more details, see [Configure OAuth client credentials for Salesforce.com](#Configur). You can also right-click the parent **Salesforce** node to edit the OAuth provider settings (for example, provider URLs and token stores). For more details, see [Configure OAuth provider settings for Salesforce.com](#Configure_OAuth_provider_settings_for_Salesforce.com).
    -   **Max APIs/Import**:\
        Enter the maximum number of APIs that can be imported from the Salesforce.com cloud provider into a single API in API Manager. A very large number makes it harder for an API owner to manage. The Salesforce.com connector defaults to `100` APIs per import. For more details, see [*Import Salesforce.com APIs in* on page 1.](#Import)
    -   **Custom Configuration**:\
        Enter custom configuration details if any. For example, the supported versions for Salesforce.com are `{"apiVersion":"33"}` or `{"apiVersion":"34"}`.

>

Click **OK**.

The following example shows the API connector configuration for the Salesforce.com connector in Policy Studio:

![Salesforce.com API connector configuration](/Images/docbook/images/api_mgmt/api_mgmt_connector.png)

Configure OAuth client credentials for Salesforce.com
-----------------------------------------------------

Under **Environment Configuration** > **External Connections** > **Client Credentials** > **OAuth2** > **Salesforce**, the default **Salesforce.com Connector OAuth Credentials** client profile includes basic settings, which you can customize for your environment.

The following shows an example when you click **Edit** on the **OAuth2 Credentials** tab, and select **Advanced**:

![OAuth credentials for Salesforce.com](/Images/docbook/images/api_mgmt/api_mgmt_connector_credentials.png)

API Manager behaves as an OAuth client to Salesforce.com APIs, so you must configure valid client application credentials.

To configure client credentials for Salesforce.com, perform the following steps.

1.  Your Salesforce.com administrator must first create a Connected app to represent API Manager in your Salesforce.com account.
2.  When the Connected app is set up, Salesforce.com provides a **Consumer Key** and **Consumer Secret** for the app, which are used to configure the Saleforce.com connector in Policy Studio.

{{< alert title="Note" color="primary" >}}When accessing data using its APIs, Salesforce.com asks its users to use their account password concatenated with a security token that is randomly generated and emailed to users. You must ensure that the security token is added to the end of the password to log in.{{< /alert >}}

1.  Update the **Client Id** and **Client Secret** fields with the **Consumer Key** and **Consumer Secret** values that you obtained from the Connected app.
2.  Select an **OAuth Flow Type** of **Resource Owner**. API Manager does not support the **Authz Code** flow when accessing Salesforce.com APIs. Other flows are not supported by Salesforce.com.
3.  On the **Advanced** tab, the **Resource Owner Credentials** settings are important. The default Salesforce.com OAuth profile is configured to use selectors for the **Resource Owner ID** and **Password** (`${oauth.resource.owner.id}` and `${oauth.resource.owner.password}`). These settings cause the Salesforce.com connector in API Manager to prompt the user for their Salesforce.com credentials before importing APIs.
4.  Alternatively, you can configure the OAuth profile with a system account. In this case, the **Resource Owner ID** should have a literal value, and the **Resource Owner Password** should be set to **Password**, along with the corresponding password value.

Configure OAuth provider settings for Salesforce.com
----------------------------------------------------

Under **Environment Configuration** > **External Connections** > **Client Credentials** > **OAuth2** > **Salesforce**, the default **OAuth2 Provider Settings** tab includes basic settings, which you can customize for your environment. The following shows an example on the **OAuth2 Provider Settings** tab:

![OAuth provider settings for Salesforce.com](/Images/docbook/images/api_mgmt/api_mgmt_connector_provider_settings.png)

The OAuth provider settings are as follows:

-   **Profile Name**: Enter a profile name for the OAuth provider settings. Defaults to `SalesForce`.
-   **Authorization Endpoint**: Enter the Salesforce.com URL for the OAuth authorization endpoint. Defaults to `https://login.salesforce.com/services/oauth2/authorize`.
-   **Token Endpoint**: Enter the Salesforce.com URL for the OAuth token endpoint. Defaults to `https://login.salesforce.com/services/oauth2/token`.

Click **Advanced** to configure the following:

-   **Token Store**: Click browse to select the API Gateway OAuth token store. Defaults to `OAuth Client Access Token Store`.
-   **Store OAuth State in this cache**: Click browse to select the cache in which API Gateway stores the OAuth client state. Defaults to `OAuth Client State Cache`.

Click **Save** when finished editing these settings.

Import Salesforce.com APIs in API Manager
-----------------------------------------

When the policy developer has configured the API connector and the associated client authentication credentials in Policy Studio, the API administrator can import the Salesforce.com cloud API in the API Manager web console. When importing APIs, the import dialog displays the list of available Salesforce.com APIs. For example, these include the standard object, Query, Query All, Search, and Bulk APIs. You can filter this list to display the required APIs.

You can then select multiple different APIs to be part of an API definition imported in API Manager, and governed as a single back-end API. You can virtualize and manage the resulting back-end API just like any other API in API Manager.

{{< alert title="Note" color="primary" >}}You can import the Salesforce.com Bulk API alone only, and not in combination with other APIs.{{< /alert >}}

To import a Salesforce.com API in API Manager, perform the following steps:

1.  Select **API Registration** > **Backend API**.
2.  Click **New API**, and select **Import from Salesforce.com**.
3.  If the OAuth profile for Salesforce.com is configured with a wildcard resource owner password, you are prompted to enter valid Salesforce.com login credentials. Remember to add the Salesforce security token to the end of the password to log in. For more details, see [Configure OAuth client credentials for Salesforce.com](#Configur).
4.  Alternatively, if the OAuth profile for Salesforce.com is configured with a valid system account, the Salesforce.com connector automatically attempts to connect to Salesforce.com.
5.  Complete the following details in the import dialog:
    -   **API Name**: Enter a name for the back-end API to display in API Manager.
    -   **Description**: Enter a short description for the back-end API.
    -   **Organization**: Select the organization name from the list.
    -   **APIs Filter**: Enter a filter string, and click **Filter** to display the results in the **APIs** tree.
    -   **APIs**: Select the Salesforce.com object API that you require in the tree. You can continue to filter and select multiple APIs.
    -   **Selected APIs**: View the APIs selected for import, and click to remove any that do not apply.
    -   The following example shows a completed import dialog:

![Import Salesforce APIs](/Images/docbook/images/api_mgmt/api_mgmt_connector_import.png)

1.  When you have selected all the APIs you require, click **Import** at the bottom. The imported APIs are displayed as a single back-end API in API Manager. For example:

![Imported Salesforce API](/Images/docbook/images/api_mgmt/api_mgmt_connector_imported.png)

For more details on importing APIs, see [*Register REST APIs in* on page 1](api_mgmt_register_web.htm).

Manage Salesforce.com APIs in API Manager
-----------------------------------------

When you import a cloud API and register it as a back-end API, you can virtualize and manage it as a front-end API, just like any other API in API Manager. For example, this includes selecting different authentication mechanisms and testing API methods.

### Virtualize Salesforce.com APIs

When you have imported a set of Salesforce.com objects in API Manager as a back-end API, you can virtualize it as a front-end API and secure it in different ways. In the most common scenario, API Manager acts as an OAuth client to Salesforce.com APIs. To achieve this, you must configure the virtualized front-end API in API Manager to use OAuth as the outbound authentication profile.

#### Configure the OAuth credentials in Policy Studio

To use OAuth for authentication with Salesforce.com, you must first configure an OAuth credential profile in Policy Studio. You can use the same OAuth credential profile used for the Salesforce.com connector at runtime, or you can configure a new profile. For more details, see [Configure OAuth provider settings for Salesforce.com](#Configure_OAuth_provider_settings_for_Salesforce.com).

{{< alert title="Note" color="primary" >}}The OAuth credential profile must use the **Resource Owner** flow and send the **Client Id** and **Client Secret** in the **Query String** setting.{{< /alert >}}

After deciding which OAuth profile will be used in API Manager for authenticating against Salesforce.com at runtime, you must add the profile to the list of **OAuth Outbound Credentials** in Policy Studio. Perform the following steps:

1.  In the Policy Studio tree, select **Server Settings** > **API Manager** > **OAuth Outbound Credentials**.
2.  Click **Add** to add the profile (for example, the default **Salesforce.com Connector OAuth Credentials**).
3.  Click **Apply Changes** at the bottom right.
4.  Click **Deploy** in the toolbar.

For example:

![OAuth Outbound Credentials setting ](/Images/docbook/images/api_mgmt/api_mgmt_connector_credentials_profile.png)

When the profile has been added, it is available for use in API Manager.

##### Using a system account

If the **Resource Owner Credentials** configured in the OAuth profile are set to literal values (username and password), at runtime API Manager uses these credentials to negotiate an OAuth token with Salesforce.com.

{{< alert title="Note" color="primary" >}}The front-end API exposed to consumers can use any application or end user authentication or authorization mechanism. The Salesforce.com access rights defined by the system account are shared equally by all consumers.{{< /alert >}}

##### Using end user credentials

If the **Resource Owner Credentials** configured in the OAuth profile are set to wildcard selector values (such as `${oauth.resource.owner.id}` and `${oauth.resource.owner.password}`), at runtime API Manager resolves these selectors, and dynamically determines the user credentials to negotiate an OAuth token with Salesforce.com.

{{< alert title="Note" color="primary" >}}The front-end API exposed to consumers can use any application or end user authentication or authorization mechanism, as long as the configured selectors can be resolved to valid credentials. The Salesforce.com access rights defined by the credentials resolved at runtime are used.{{< /alert >}}

#### Create the front-end API in API Manager

When you have configured the OAuth credentials in Policy Studio, you can virtualize the back-end Salesforce.com API as a front-end API in API Manager. Perform the following steps:

1.  Select **API Registration** > **Frontend API**.
2.  Click **New API**, and select **New API from backend API**.
3.  Select the existing Salesforce back-end API in the dialog.
4.  Enter a **Resource Path** (for example, `/salesforce`).
5.  On the **Inbound** tab, select a security device for authentication from the **Inbound security** setting. For more details, see [*Configure Inbound settings* on page 1](api_mgmt_virtualize_web.htm#Configur4).

{{< alert title="Note" color="primary" >}}If the **Resource Owner Credentials** in the OAuth for Salesforce.com are configured as selectors (for example, `${oauth.resource.owner.id}` and `${oauth.resource.owner.password}`), these must be resolved by API Manager before calling Salesforce.com. {{< /alert >}}

<div class="indentTable">

The logic for resolving selectors depends on each use case, but an **Invoke Policy** security device is recommended. This enables you to use a custom policy to analyze incoming requests, and decide which resource owner credentials to use with Salesforce.com. The simplest case involves the client application sending the end user credentials in the request, and a policy mapping those credentials to the configured selectors.

</div>

1.  On the **Outbound** tab, select the **OAuth** security device from the **Outbound authentication profile** setting.
2.  Salesforce.com users and resources are bound to instances (such as `na1`, `ap1`,` eu1`). Upon successful OAuth authentication, Salesforce.com indicates the instance to be used in the API endpoint (for example, `eu5.salesforce.com`). When **OAuth** is selected as the **Outbound authentication profile**, the back-end API URL is dynamically assigned based on the Salesforce.com indication. This ensures that API manager routes to the Salesforce.com instance according to the end user authentication credentials.
3.  Select the OAuth credentials that you configured in Policy Studio as the **OAuth Provider Profile** (for example, the default **Salesforce.com Connector OAuth Credentials**).
4.  The response contents of Salesforce.com APIs can include relative links to other associated resources. Because the virtualized API in API Manager might present a different relative path to the consuming client application, URL rewriting might be necessary.
5.  A sample URL rewriting policy is available in Policy Studio under **Sample Policies** > **API Management URL Rewriting**. Click **Advanced**, and add this as a **Response policy** to leverage URL rewriting. For more details, see [*Configure Advanced Outbound settings* on page 1](api_mgmt_virtualize_web.htm#Configur5)).

<!-- -->

1.  Click **Save** or **Apply**.
2.  On the **API Methods** tab, you can select a method, and click **Try method** to test it. For more details, see [*Configure API method information* on page 1](api_mgmt_virtualize_web.htm#Configur6).

The following example shows a virtualized front-end Salesforce API with OAuth selected for outbound authentication:

![Virtualized Salesforce API](/Images/docbook/images/api_mgmt/api_mgmt_connector_virtualized.png)

For more details on virtualizing APIs, see [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm).

Further information
-------------------

For more details on Salesforce.com APIs, see <https://developer.salesforce.com/>
