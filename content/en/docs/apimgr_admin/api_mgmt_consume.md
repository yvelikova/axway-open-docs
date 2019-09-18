{
"title": "Consume APIs in API Manager",
"linkTitle": "Consume APIs in API Manager",
"date": "2019-09-17",
"description": "API consumer users consume managed APIs exposed by the API Gateway, using them to build and test client applications. API consumers can be client application developers from named organizations or the community organization. They can also include operator users who are responsible for monitoring production applications that invoke managed APIs. API Manager provides an intuitive user interface to enable API consumers to consume the managed APIs exposed by the API Gateway."
}
﻿

API consumer users consume managed APIs exposed by the API Gateway, using them to build and test client applications. API consumers can be client application developers from named organizations or the community organization. They can also include operator users who are responsible for monitoring production applications that invoke managed APIs. API Manager provides an intuitive user interface to enable API consumers to consume the managed APIs exposed by the API Gateway.

Consume REST APIs
-----------------

Each API consumer user has an account in API Manager. They can use API Manager to perform tasks such as the following:

-   Create applications
-   Manage application authentication credentials
-   Give other API consumers permission to view or manage their applications
-   Monitor application API usage
-   Manage their own account settings

API consumers are concerned only with applications, credentials, and APIs. They do not require detailed knowledge of the API Gateway

Register an API Manager user account
------------------------------------

The API consumer can use to following URL to register an API Manager user account:

    https://HOSTNAME:8075

When the user account has been registered, an email is sent to the user to enable them to activate their account. They can then log into API Manager using their registered user name and password.

For details on optional registration codes for organizations, see [Administer APIs in](api_mgmt_admin.htm).

API consumer view
-----------------

When an API consumer user logs in to API Manager, this displays a specific view for the API consumer. This includes the following subset of menu options:

-   **API Catalog**: Browse all virtualized APIs available to the organization.
-   **Clients**: Create, manage, or delete client applications that invoke APIs.
-   **Monitoring**: View historical reports and statistics on all client applications created by the API consumer.
-   **Settings**: Manage user **Account Settings**
    (for example, change password or user details).

### Browse and retrieve APIs

You can use the **API Catalog**
view to browse and retrieve APIs in API Manager.

### Retrieve APIs using tags

When tags have been added in API Manager by the API administrator, you can use them to browse and retrieve APIs.

You can click the **Tags**
button in the API Manager toolbar to select tags to filter, or you can filter tags manually by entering the `tag:`
prefix followed by the tag value in the filter box (for example, `tag:Swagger`). You can also filter multiple tags by entering a comma-separated list without any spaces between values (for example, `tag:REST,R+D`)
.

### Manage client applications

You can use the **Clients**
tab to manage client applications (for example, create, update, or remove client applications that invoke specific APIs). When an application is created, API administrators can also set authentication, quota, and sharing settings on the appropriate tab.

{{< alert title="Note" color="primary" >}}The API administrator must first specify the APIs that an organization is allowed to access before any of its client applications can have access to them. In API Manager, you can only add APIs to an application when they have been added to the organization. For more details, see [*Administer APIs in* on page 1](api_mgmt_admin.htm).{{< /alert >}}

### Create an application

To create an application, perform the following steps:

1.  Click **New application** in the toolbar, and configure the following general fields:
    -   **Image**: Click to add a graphical image for the application (for example, .png, `.gif`, or `.jpeg` file).
    -   **Application name**: Enter the name of the application. This field is required.
    -   **Organization**: Enter the name of the organization that the application belongs to. This field is required. The choice of organization determines which APIs are available to the application. For more details, see [*Administer APIs in* on page 1](api_mgmt_admin.htm).
    -   **Enabled**: Select whether the application is enabled. Applications are enabled by default.

>

2.  Configure the following additional attributes:
    -   **Email**: Enter an email address for the application.
    -   **Phone**: Enter a phone number for the application.
    -   **Description**: Enter a short description of the application.

<!-- -->

3.  Click **Add API**
    to select the APIs and methods used by the application. You can add multiple APIs for an application.
4.  Click **Create** in the toolbar.

### Edit an application

When applications have been created, you can click an application name in the **Managing applications** screen to edit its existing settings on the **Application** tab. API administrators can also configure additional settings on the following tabs.

#### Authentication

The following settings are available on the **Authentication** tab:

-   **API Keys**: Click **New API Key** to create an API key for the application. API keys are enabled by default. Click **Show Secret** to obtain the associated secret key. You can also specify **JavaScript Origins** to allow the application to run on specific protocols or domains (for example, `https://my_test_url.example.com`) for Cross Origins Resource Sharing (CORS). You can enter `*` to allow all domains. For more details, see [Virtualize REST APIs in](api_mgmt_virtualize_web.htm).
-   **OAuth Credentials**: Click **New client ID** to create a client ID for the application, and enter the following settings in the dialog:
-   -   **Application Type**: Applications set to **Confidential** must always send the generated secret along with their `OAuth-Authorization` request. Applications set to **Public** may ommit the secret, when not using the `client_credentials` grant type. Defaults to **Confidential**.
    -   **Redirect URLs**: You can enter optional redirect URLs for the application (one URL per line). The application can then redirect users only to the specified URLs, which helps prevent attacks.
    -   **X.509 Certificate**: You can paste the contents of a Base64-encoded public X.509 certificate for the application. This certificate is used to verify the signature of JWT tokens and SAML assertions used in the appropriate OAuth grant types.

-   Newly created client IDs are enabled by default. You can click **Show Secret** to obtain the associated secret key. You can specify **JavaScript Origins** to allow the application to run on specific protocols or domains for CORS. For more details, see [Virtualize REST APIs in](api_mgmt_virtualize_web.htm).
-   **External Credentials**: Click **New client ID**, and enter the external client ID for the application. Client IDs are enabled by default. You can specify **JavaScript Origins** to allow the application to run on specific protocols or domains for CORS. For more details, see [Virtualize REST APIs in](api_mgmt_virtualize_web.htm).
-   **Application Scopes**: Click **Add scope**, and select one of the following scopes to manage application access to protected resources:
-   -   **resource.READ**: Read-only access to the resource.
    -   **resource.WRITE**: Write access to the resource.
    -   **openid**: OpenID Connect access to the resource.
    -   **Add New Scope**: Enter a custom scope name to manage access to the resource.

-   These settings
    are displayed only when **Enable application scopes** is selected in
    **Settings > API Manager settings > General settings**.
    Any new scopes added in an API Key or OAuth security device are also displayed. For example, see [Example API 
    administration use cases](api_mgmt_method_authz.htm).

#### Quota

The **Quota** tab enables API administrators to override the application-default quota and specify application-specific quota rules. For more details, see [Administer APIs in](api_mgmt_admin.htm).

#### Sharing

The **Sharing** tab enables API administrators to manage access to the application for specified users. Click **Add User**, select an existing user name from the list, and select whether the user can **View** or **Manage** the application. The default is **View**.

You can add multiple existing users. For details on creating users, see [Administer APIs in](api_mgmt_admin.htm). To remove user access to the application, select the user name, and click **Remove**.

Manage the client application lifecycle
---------------------------------------

When you have created client applications, you can select them in the **Applications**
view, click **Manage selected**, and chose one of the following options:

-   **Delete selected item(s)**: Permanently deletes the selected applications from the client registry.
-   **Disable**: Disables the selected applications in the client registry. Applications are enabled by default.
-   **Enable**: Enables the selected applications that have previously been disabled in the client registry.
-   **Export**: Exports a copy of the selected applications to your chosen directory. The APIs are exported in JSON format in a default `app-export.dat` file. You can specify the following options in the dialog:
    -   Specify a different file name
    -   Select whether to encrypt the application data
    -   Add a password
    -   Export API keys, OAuth credentials, and quota overrides
-   You can then import this file into API Manager as required (for example, when promoting between environments). See also [Promote managed APIs between environments](api_mgmt_promote.htm#Import).

{{< alert title="Tip" color="primary" >}}You can click **Export all** in the menu bar at the top to export all client applications in the client registry. You can click **Import** to import previously exported applications in the selected `.dat` file.{{< /alert >}}
