{
"title": "Add custom API Manager routing policies",
"linkTitle": "Add custom API Manager routing policies",
"date": "2019-09-17",
"description": "This topic explains advanced uses cases of how to configure custom API Manager routing policies. API Manager custom routing policies support all outbound API authentication profiles configured in API Manager (for example, HTTP Basic, HTTP Digest, API key, OAuth, and SSL). This topic shows detailed examples of using API key, OAuth, and SSL as the outbound authentication profile."
}
﻿

This topic explains advanced uses cases of how to configure custom API Manager routing policies. API Manager custom routing policies support all outbound API authentication profiles configured in API Manager (for example, HTTP Basic, HTTP Digest, API key, OAuth, and SSL). This topic shows detailed examples of using API key, OAuth, and SSL as the outbound authentication profile.

{{< alert title="Note" color="primary" >}}This topic assumes that you are already familiar with basic API Manager tasks such as importing an existing back-end API and virtualizing a front-end API and with authentication mechanisms such as API key, OAuth, and SSL.{{< /alert >}}

API Manager custom routing policy templates
-------------------------------------------

API Manager provides reserved routing policy templates in Policy Studio under **Policies** > **Generated Policies** > **REST APIs** > **Templates**. For any customization, you should make copies of these reserved templates, which may be changed in future releases:

-   **Default API Proxy Routing**: API Manager custom routing is based on this template by default.
-   **Default Profile-based Routing**: This is used by the **Default API Proxy Routing** template to process the following outbound authentication profiles:
    -   Pass through
    -   HTTP Basic
    -   HTTP Digest
    -   API Key
-   **Default OAuth-based Routing**: This is used by the **Default API Proxy Routing** template to process the OAuth authentication profile.
-   **Default SSL-based Routing**: This is used by the **Default API Proxy Routing** template to process the SSL authentication profile.
-   **Default URL-based Routing**: This is used by API Gateway only since version 7.6.2.

### Customize a template policy

You can customize a default routing policy by modifying its **Connect To URL** filter in Policy Studio. To edit a default policy, select **Policies > Generated Policies > REST APIs > Templates > My Default Routing Policy**, and double-click the **Connect to URL** filter in the policy canvas on the right.

For example, under **Settings > Failure > Call connection policy on failure**, you could configure a custom policy with a **Reflect** message filter that modifies the default `HTTP 500` response code to `HTTP 503` when the API Manager runtime cannot connect to a back-end service. Updating a default routing policy modifies how API Manager manages connection failures globally for all APIs, without needing to modify each API.

{{< alert title="Tip" color="primary" >}}After updating a default routing policy, you do not need to restart the underlying API Gateway, redeploying the updated configuration is sufficient.{{< /alert >}}

### Message attributes

The API Manager custom routing policy message whiteboard includes the following message attributes:

-   `params.out` contains the API authentication profile for the policy customization.

<!-- -->

-   `params.authn` contains the connection handler to be consumed by the **Connect To URL** filter in the custom routing policy. To use the authentication handler, the `${params.authn}` value must be set in the required credential profile in the **Connect To URL** filter.
-   Additional message attributes are also set depending on the authentication profile used. For example, these include `params.ssl.cacertificates` for SSL, and `oauth.token.id` and `oauth.client.application` for OAuth

{{< alert title="Note" color="primary" >}}API Manager custom routing policies designed for outbound SSL authentication profiles must include a **Connect To URL** filter named `apimanager.outbound.ssl`. The corresponding SSL profile settings will apply only to such **Connect To URL** filters. For example, see the **Default SSL-based Routing** template policy. {{< /alert >}}

### Default TLS settings

The **Connect To URL** filters in the custom routing templates use TLS version 1.2 with strong FIPS-compliant ciphers by default for SSL/TLS connections. You can modify the SSL/TLS protocols and ciphers in custom routing policies as needed.

Add a custom routing policy with API key authentication
-------------------------------------------------------

This section explains how to set up a custom API Manager routing policy that uses API key as the outbound authentication type. It shows how to create the policy in Policy Studio, and how to configure it for use in API Manager.

### Create the custom API key routing policy in Policy Studio

You must first create a new policy in Policy Studio that will be used as the custom API key routing policy in API Manager.

Perform the following steps:

1.  Right-click the **Policies** node in the tree, and select **Add Policy**.
2.  Enter a meaningful **Name** for the new policy (for example, **Custom routing policy for PetStore API**).
3.  Click the new policy in the tree to start configuring its filters. You can do this by dragging the required filters from the filter palette on the right, and dropping them on to the policy canvas. This example includes **Trace** and **Connect to URL** filters:

![Create custom routing policy for API key](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_create.png)

1.  Open the **Connect to URL** filter, and in the **URL** field, enter `${destinationURL}`.
2.  On the **Authentication** tab, the client credential is set to the `${params.authn}` selector by default, but you can enter a different selector or select a credential profile if necessary:

![Connect to URL with Authentication set to selector](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_authn_tab.png)

For more details on how to configure policies, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Configure the list of API Manager routing policies in Policy Studio

You must add the new custom API key routing policy to the list of available routing policies that APIs registered in API Manager can use.

Perform the following steps:

1.  Select **Server Settings** in the tree, and select **API Manager** > **Routing Policies**.
2.  Click **Add** on the right, and select the custom routing policy that you created (for example, **Custom routing policy for PetStore API**).
3.  Click **OK**, and click **Save** at the bottom right.

![Configure an API Manager routing policy](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_configure.png)

### Configure the custom API key routing policy in API Manager

When the custom routing policy has been added to the list of available routing policies in Policy Studio, perform the following steps in API Manager:

1.  Click **API** > **Backend** > **New API** to import a back-end API, and ensure the **Base path URL** is set to the API on the remote server. For more details, see [Register REST APIs in API Manager](api_mgmt_register_web.htm).
2.  Click **API** > **Frontend** > **New API** to create a front-end virtualized API from the back-end API. For more details, see [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm).
3.  On the **Inbound** tab, set **Inbound security** to **Pass Through**.
4.  On the **Outbound** tab , set **Outbound authentication profile** to **API Key**, click **Edit** and configure the following settings:
5.  -   **API key field name**: Use the default value of `KeyId`.
    -   **API key**: Enter the API key for your API.
    -   **Pass credentials as HTTP**: Select **Header** from the list.

![Configure API key authentication in API Manager](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_configure_api_key.png)

5.  Click **Advanced** on the right, and set **Default method routing** to use your custom routing policy. For example:

<!-- -->

1.  ![Configure custom routing policy in API Manager](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_configure_apimgr.png)

### Invoke the registered API and view the API key in the request

You can now invoke the API registered in API Manager and view that the API key header is specified in the outbound request and that a successful response is returned. The following example in the API Gateway Manager web console shows the **KeyId** in the request at the bottom left:

![Invoke API and view API key in header](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_monitor_api_key.png)

For more details on the API Gateway Manager web console, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

Add a custom routing policy with OAuth authentication
-----------------------------------------------------

This section describes how to use API Manager to invoke an API with outbound OAuth authentication using a custom routing policy. In this scenario, one API Gateway instance acts as an OAuth client and the other API Gateway instance acts as an OAuth server. This section shows how to configure both API Gateway instances appropriately using the Client Credentials OAuth flow.

{{< alert title="Note" color="primary" >}}This section assumes that you are already familiar with the Client Credentials OAuth flow. For more details on configuring OAuth flows, see the
[API Gateway OAuth User Guide](/bundle/APIGateway_77_OAuthUserGuide_allOS_en_HTML5/)
.{{< /alert >}}

### Configure the remote API Gateway as OAuth server in API Manager

To configure a remote API Gateway instance to act as an OAuth server, perform the following steps in API Manager:

1.  Click **Clients** > **Applications** > **New application**. For more details, see [Consume APIs in API Manager](api_mgmt_consume.htm).
2.  On the **Authentication** tab, under **OAuth Credentials**, click **New client ID** > **Create**, and use the default settings:
3.  ![Create new OAuth credentials for API Manager application](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_oauth_credentials.png)
4.  Click **API** > **Backend** > **New API** to import a back-end API. For more details, see [Register REST APIs in API Manager](api_mgmt_register_web.htm).
5.  Click **API** > **Frontend** > **New API** to create a front-end virtualized API from the back-end API. For more details, see [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm).
6.  Set the **Inbound security** to **OAuth**. This example uses the default setting to obtain the access token from the header:
7.  ![API Manager OAuth authorization settings](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_oauth_authz.png)

{{< alert title="Tip" color="primary" >}}You must select an OAuth access token store on the **General** tab. For details on how to add OAuth access token stores, see [Configure API Manager settings in Policy Studio](api_mgmt_config_ps.htm#Configur).{{< /alert >}}

1.  Click **Clients** > **Applications** > **API Access** > **Add API** to add the virtualized front-end API to the list of APIs that the application can access.
2.  Click **Settings** > **API Manager Settings** >**General settings**, and ensure that **Enable OAuth scopes per application** is set.
3.  Click **Clients** > **Applications** > **Authentication** > **OAuth Scopes** > **Add scopes**, and select the **resource.READ** and **resource.WRITE** scopes:
4.  ![](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_oauth_scopes.png)

{{< alert title="Tip" color="primary" >}}You may need to refresh your browser if **OAuth Scopes** are not displayed.{{< /alert >}}

### Configure the client credentials in Policy Studio

When using the Client Credentials OAuth flow for the client, you must first configure the client credentials correctly in Policy Studio. This ensures that the client can request an OAuth access token using only its client credentials and that the authorization is specified in the header as expected.

Perform the following steps:

1.  In the Policy Studio tree, select **Policies** > **OAuth 2.0** > **Access Token Service** > **Client Credentials**.
2.  Right-click the **Access Token using client credentials** filter, and select **Edit**.
3.  On the **Application Validation** tab, select the **In Authorization Header** option:

![Configure OAuth Client Credentials in Policy Studio](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_oauth_client_credentials.png)

For more details on OAuth flows, see the
[API Gateway OAuth User Guide](/bundle/APIGateway_77_OAuthUserGuide_allOS_en_HTML5/)
.

### Configure the local API Gateway as OAuth client in Policy Studio

To configure a local API Gateway instance to act as an OAuth client, perform the following steps:

1.  To create an OAuth2 credentials application using the Client Credentials flow, select **Environment Configuration** > **External Connections** > **Client Credentials** > **OAuth2**, right-click and select **Add OAuth2 Client Credential**. For more details, see the
    [API Gateway OAuth User Guide](/bundle/APIGateway_77_OAuthUserGuide_allOS_en_HTML5/)
    .
2.  Click **Add OAuth2 Application Settings** on the right, and ensure the following settings are configured:
    -   Enter the **Client ID** and **Client Secret** that were generated on the remote API Gateway instance. See [Configure the remote API Gateway as OAuth server in API Manager](#Configur).
    -   Select an **OAuth Flow Type** of **Client Credentials**.
    -   On the **Scopes** tab, click **Add** to add the **resource.READ** and **resource.WRITE** scopes.
3.  ![Configure OAuth2 Application Settings in Policy Studio](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_oauth_client_credentials_app.png)
4.  On the **Advanced** tab, you must also ensure that **In Authorization Header** is selected for the location of the client ID and client secret:
5.  ![Configure Advanced OAuth2 Application Settings in Policy Studio](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_oauth_client_credentials_app_adv.png)
6.  Click **Save** on the right to save the application.
7.  On the **OAuth2 Provider Settings** tab, enter the IP address of the remote instance in the **Authorization Endpoint** and **Token Endpoint**:
8.  ![](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_oauth_provider_settings.png)

### Create the custom OAuth routing policy in Policy Studio\

To create a new policy to use as the custom OAuth routing policy in API Manager, perform the following steps in Policy Studio:

1.  Right-click the **Policies** node in the tree, and select **Add Policy**.
2.  Enter a meaningful **Name** for the new policy (for example, **Custom routing policy with OAuth**).
3.  Click the new policy in the tree to start configuring the filters for this policy. You can do this by dragging the required filters from the filter palette on the right, and dropping them on to the policy canvas. This example includes **Get OAuth Access Token** and **Connect to URL** filters:
4.  ![Create custom routing policy using OAuth in Policy Studio](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_create_oauth.png)
5.  In the **Get OAuth Access Token** filter, the client credentials profile is obtained from the message whiteboard by default, so the token should now be available.
6.  Open the **Connect to URL** filter, and in the **URL** field, enter `${destinationURL}`.
7.  On the **Authentication** tab, the client credential is set to the `${params.authn}` selector by default, but you can enter a different selector or select a credential profile if necessary:

![Connect to URL with Authentication set to selector](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_authn_tab.png)

For more details on how to configure policies, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Configure the list of API Manager routing policies and OAuth outbound credentials in Policy Studio

You must add the new custom routing policy and OAuth credentials to the lists of available routing policies and credentials that APIs registered in API Manager can use.

Perform the following steps:

1.  Select **Server Settings** in the tree, and select **API Manager** > **Routing Policies**.
2.  Click **Add** on the right, and select the custom routing policy that you created (for example, **Custom routing policy with OAuth**).
3.  Select **API Manager** > **OAuth Outbound Credentials**.
4.  Click **Add** on the right, and select the OAuth client credentials that you created (for example, **Test OAuth**).
5.  Click **OK**, and click **Save** at the bottom right.

![Configure API Manager OAuth Outbound Credentials in Policy Studio](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_configure_oauth.png)

### Configure the custom OAuth routing policy in API Manager

When the custom routing policy and OAuth outbound credentials have been added in Policy Studio, perform the following steps in API Manager:

1.  Click **API** > **Backend** > **New API** to import a back-end API, and ensure the **Base path URL** is set to the API on the remote server. For more details, see [Register REST APIs in API Manager](api_mgmt_register_web.htm).
2.  Click **API** > **Frontend** > **New API** to create a front-end virtualized API from the back-end API. For more details, see [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm).
3.  On the **Inbound** tab, set the **Inbound security** to **Pass Through**.
4.  On the **Outbound** tab, set the **Outbound authentication profile** to **OAuth**, and configure the following:
    -   **Provider profile**: Enter the OAuth outbound credentials profile that you created in Policy Studio (for example, **Test OAuth**).
    -   **Token Key (Owner ID)**: Use the default `${authentication.subject.id}` selector setting to obtain this value.

<!-- -->

5.  Click **Advanced** at the top right, and set the **Default method routing** to use your custom routing policy. For example:

![Configure the OAuth custom routing policy in API Manager](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_configure_apimgr_oauth.png)

### Invoke the registered API with OAuth authorization header in request

You can now invoke the API registered in API Manager and view that the authorization header is specified in the outbound request and that a successful response is returned. The following example in the API Gateway Manager web console shows the OAuth custom routing policy in the execution path:

![OAuth custom routing policy displayed in API Gateway Manager](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_monitor_oauth.png)

The following example shows the **Authorization** `Bearer` header correctly displayed in the request in the bottom panel in API Gateway Manager:

![ Authorization Bearer header displayed in API Gateway Manager](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_monitor_oauth_header.png)

For more details on the API Gateway Manager web console, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

Add a custom routing policy with SSL authentication
---------------------------------------------------

This section explains how to configure mutual authentication using a custom API Manager routing policy with SSL as the outbound authentication type. It first shows how to configure the back-end SSL server for mutual authentication, and then shows how to create the custom policy in Policy Studio and how to configure this policy in API Manager.

### Set up the back-end SSL server for mutual authentication

You must first configure the certificates for the SSL server and client, and then create an HTTPS interface:

#### Create a certificate for the SSL server

1.  Ensure that your SSL certificate has been created and imported into the API Gateway certificate store. In Policy Studio, select **Environment Configuration** > **Certifcates and Keys** > **Certifcates** > **Create/Import**.
2.  On the **Configure Certificate and Private Key** dialog, click **Edit** to configure the distinguished name. For example:
3.  ![Configure SSL Certficate and Private Key](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_ssl_dname.png)
4.  Select the validity dates, and click **Use Subject**.
5.  Click **Sign Certificate** to create the certificate and keys.

#### Export the client certificate and key

1.  To select the client certificate that you wish to export, select **Environment Configuration** > **Certifcates and Keys** > **Certificates**, select the certificate, and click **Edit**.
2.  Click **Export Certificate + Key** to set a password and export your SSL client certificate (`.p12` file). You will add this certificate to the list of certificates you trust when creating your HTTPS interface.

#### Create an HTTPS interface

1.  Select **Environment Configuration** > **API Gateway** > **Listeners** > **Default Services** > **Ports**.
2.  Click **Add** > **HTTPS Interface** on the right, and configure the tabs as follows:

    -   **Network**: Click **X.509 Certificate** and select the certificate that you created.
    -   **Mutual Authentication**: Select **Requires client certificate**, and select the **Root Certificate Authorities trusted for mutual authentication**.
    -   **Traffic Monitor**: Use the default settings.
    -   **Advanced**: Use the default settings.
    -   **Advanced (SSL)**: You must deselect **Check that the SLL certificate's Subject CN resolves to network address**. You can use the defaults for the other settings, for example:

    ![Configure HTTPS Interface - Advanced (SSL) Settings](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_https_adv_settings.png)

For more details on configuring SSL certificates and HTTPS interfaces, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Create the custom SSL routing policy in Policy Studio

You must create a new policy in Policy Studio that will be used as the custom routing policy in API Manager.

Perform the following steps:

1.  Right-click the **Policies** node in the tree, and select **Add Policy**.
2.  Enter a meaningful **Name** for the new policy (for example, **Custom SSL routing policy**).
3.  Click the new policy in the tree to start configuring its filters. You can do this by dragging the required filters from the filter palette on the right, and dropping them on to the policy canvas. You must include a **Connect to URL** filter for SSL:

![Create Custom Routing Policy for SSL](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_create_ssl.png)

1.  In the **Connect to URL** filter, you must enter a **Name** of `apimanager.outbound.ssl`, which is only used for API Manager.

<!-- -->

1.  In the **URL** field, enter `${destinationURL}`.
2.  On the **SSL** > **Advanced (SSL)** tab specifies TLS version 1.2 with strong FIPS-compliant ciphers by default for SSL/TLS connections, but you can modify these settings to suit your requirements.
3.  On the **Authentication** tab, the client credential is not set by default.

![Connect to URL with SSL settings](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_ssl_tab.png)

For more details on how to configure policies, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Configure the list of API Manager routing policies in Policy Studio

You must add the new custom SSL routing policy to the list of available routing policies that APIs registered in API Manager can use.

Perform the following steps:

1.  Select **Server Settings** in the tree, and select **API Manager** > **Routing Policies**.
2.  Click **Add** on the right, and select the custom routing policy that you created (for example, **Custom SSL Routing Policy**).
3.  Click **OK**, and click **Save** at the bottom right.

![Configure a Custom SSL Routing Policy](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_configure_ssl.png)

### Configure the custom SSL routing policy in API Manager

When the custom routing policy has been added to the list of available routing policies in Policy Studio, perform the following steps in API Manager:

1.  Click **API** > **Backend** > **New API** to import a back-end API, and ensure the **Base path URL** is set to the host and port of your SSL server. For more details, see [Register REST APIs in API Manager](api_mgmt_register_web.htm).
2.  On the **API Methods** tab, add a method for testing purposes (for example, `healthcheck`).
3.  Click **API** > **Frontend** > **New API** to create a front-end virtualized API from the back-end API. For more details, see [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm).
4.  On the **Inbound** tab, set **Inbound security** to **Pass Through**.
5.  On the **Trusted Certificates** tab, click the **+** sign and import the SSL server certificate.
6.  On the **Authentication Profiles** tab, click the **+** sign, select **SSL** to specify the **PFX/P12 file** for the SSL client certificate and enter the password.
7.  On the **Outbound** tab, set **Outbound authentication profile** to **SSL**, click **Edit**, and configure the following settings:
8.  -   **PFX/P12 file**: Select the SSL client certificate
    -   **PFX/P12 password**: Enter the password for the SSL client certificate.
    -   **Trust all certificates in chain**: Ensure this setting is selected.

![Configure SSL Authentication in API Manager](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_configure_apimgr_ssl.png)

5.  Click **Advanced** on the right, and set **Default method routing** to use your custom SSL routing policy. For example:

<!-- -->

1.  ![Configure custom SSL routing policy in API Manager](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_configure_apimgr_ssl_policy.png)

### Invoke the registered API and view the API key in the request

You can now invoke the API registered in API Manager and view that the SSL Two-way authentication works correctly. The following example shows using the **Try Method** feature on the **API Methods** tab to test with a `healthcheck` method:

![Invoke API and test SSL mutual authentication](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_test_ssl.png)

{{< alert title="Tip" color="primary" >}}You may need to configure your localhost and port in **API Manager settings** -> **API Registration** -> **API default virtual host**. For example: {{< /alert >}}

![](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_test_ssl_settings.png)
