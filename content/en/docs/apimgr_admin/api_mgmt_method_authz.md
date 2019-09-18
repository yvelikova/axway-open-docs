{
"title": "Configure API method-level authorization for client applications",
"linkTitle": "Configure API method-level authorization for client applications",
"date": "2019-09-17",
"description": "This topic explains the advanced API administration use case of API method-level authorization for client applications in API Manager."
}

This topic explains the advanced API administration use case of API method-level authorization for client applications in API Manager.

A typical API has both read and write methods. The majority of client applications have access to the read methods, but only a minority of applications have access to the write methods. API method-level authorization in API Manager enables you to control which applications have access to which API methods.

API Manager provides application scopes to enable you to define a set of authorizations (for example, all read methods) that can be assigned to specific client applications. The scopes associated with an application in the client registry are matched against the scopes defined for an API security device using an any or all condition. If the scopes match, the application is authorized to invoke the API method and the request is authorized. Otherwise, the request is blocked.

This approach provides administrative scaling because the set of methods can be changed and automatically applied to applications. Similarly, granting or removing application access to the set of authorizations only involves adding or removing a scope from the set of application scopes.

Example API method-level authorization scenario
-----------------------------------------------

This example scenario uses a simple Petstore API to show how to control client application access to specific API methods using application scopes. The example application uses an API key for authentication. This scenario describes how to create an application, create an API key, and define application scopes and security profiles to enable method-level authorization.

The Petstore API used in this example is available from:\
<http://petstore.swagger.io/v2/swagger.json>

Configure application scopes in API Manager
-------------------------------------------

This section assumes that you have already imported an example back-end API (in this case, Petstore), and virtualized it as a front-end API. For more details, see [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm).

Perform the following steps to configure application scopes in API Manager:

1.  Ensure that you are logged into API Manager as an API administrator, and that the organization is enabled for API development. For more details, see [Manage organizations](api_mgmt_admin.htm#Manage2).
2.  Select **Settings > API Manager Settings > General settings > Enable application scopes**. Enabling this setting allows you to specify authorization scopes for client applications at both the API level and method level. For details, see [API Manager settings](api_mgmt_config_web.htm#API_Manager_settings).
3.  Select **Clients** > **Applications**, and click **New application**. You must enter an **Application Name** and select your **Organization**, and click **Create**.
4.  On the default **Application** tab, under **API Access**, click **Add API**, and select **Petstore** to grant API access to the application.
5.  Select the **Authentication** tab, click **New API Key**, and select the API key to save to a file for later use.
6.  Enter a hostname in the **JAVASCRIPT ORIGINS** field to configure cross-site origin requests (for example, you can enter `*` to accept all requests for test purposes). For more details, see [Configure Advanced Inbound settings](api_mgmt_virtualize_web.htm#Configur8).
7.  ![Create API key for client application](/Images/docbook/images/api_mgmt/api_mgmt_application_scopes_app_authn.png)
8.  When the **Enable application scopes** setting has been enabled in **API Manager Settings**, the **Application Scopes** section is displayed at the bottom. Click **Add scope**, and enter `app.all` in the text box.
9.  Select **API** > **Frontend API**, and select the Petstore API. On the **Inbound** tab, in the **Inbound security** field, select **API Key**.
10. On the **API Key Device** dialog, configure the following settings:
11. -   **Scopes must match**: Select a value of **Any** from the list.
    -   **Scopes**: Enter a scope of `app.all` in the text box. For example:

12. ![Configure application scopes for API method-level authorization](/Images/docbook/images/api_mgmt/api_mgmt_application_scopes_frontend.png)
13. If you try to invoke a test method on the **API Methods** tab (for example, `findPetByStatus`), the method will succeed because the application has access to all methods, and you have not defined any method-level scopes yet. The following example shows the result of **Try method** when you specify a **status** of `sold` and the API **KeyID** that you created earlier:
14. ![](/Images/docbook/images/api_mgmt/api_mgmt_application_scopes_app_try_method_all.png)

Configure method-level application scopes in API Manager
--------------------------------------------------------

Perform the following steps to configure method-level application scopes in API Manager:

1.  On the **Security Profiles** tab, click the add (+) icon, enter a **Name** of `READ` for the new security profile.
2.  Under the **Devices** field, click the add icon, select **API Key**, and configure the following settings in the dialog:
3.  -   **Scopes must match**: Select a value of **Any** from the list.
    -   **Scopes**: Enter a scope of `app.read` in the text box. For example:

4.  5.  ![Create a security profile](/Images/docbook/images/api_mgmt/api_mgmt_application_scopes_app_security_profile.png)
6.  Select **API** > **Frontend API**, and select the Petstore API. On the **Inbound** tab, click **Advanced** at the top right, and expand the **PER-METHOD OVERRIDE** settings at the bottom.
7.  Click the add icon, enter `getPetById`, and select it from the list of methods. Repeat for the `findPetsByStatus` method. For example:
8.  ![Configure API method-level security profiles](/Images/docbook/images/api_mgmt/api_mgmt_application_scopes_read_methods.png)
9.  For both of these `GET` methods, select **READ** from the **INBOUND SECURITY PROFILE** field, and click **Apply**.
10. Now if you try to invoke either method on the **API Methods** tab, this returns a `Security failure`. For example, for the `findPetsByStatus` method, specify a **status** of `sold` and the API **KeyID** created earlier, and click **Try Method**.
11. To enable method-level API access, select **Clients** > **Applications**, and select the **Authentication** tab.
12. Under **Applications Scopes**, click **Add scope**, and enter the `app.read` scope in the text box.
13. Now if you try to invoke either method on the **API Methods** tab, the method will succeed because it has been configured with the correct application scope.

Finally, if you view the Petstore API in the **API Catalog**, and click the `findPetsByStatus` or `getPetById` method, the **Authentication Supported** section displays the scopes and the type of scope matching that has been defined (in this case, `app.read` and `Any`).

{{< alert title="Note" color="primary" >}}Only API administrators can add or delete application scopes in API Manager. Application scopes are displayed as read only for all other users.{{< /alert >}}

Further information
-------------------

For more details, see the following related topics:

-   [Configure web-based settings in API Manager](api_mgmt_config_web.htm)
-   [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm)
-   [Consume APIs in API Manager](api_mgmt_consume.htm)

