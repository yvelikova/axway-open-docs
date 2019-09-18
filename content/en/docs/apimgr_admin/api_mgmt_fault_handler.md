{
"title": "Add API Manager fault handler policies",
"linkTitle": "Add API Manager fault handler policies",
"date": "2019-09-17",
"description": "This topic explains how to enable organizations and their governance teams to use API Manager to add a fault handler policy at the global, API, and API method level. The configured fault handler is then executed when an error or exception occurs during the API Manager runtime API invocation."
}
﻿

This topic explains how to enable organizations and their governance teams to use API Manager to add a fault handler policy at the global, API, and API method level. The configured fault handler is then executed when an error or exception occurs during the API Manager runtime API invocation.

You can enable fault handler policies in API Manager as follows:

-   Policy developers can configure policies in Policy Studio as API Manager fault handler policies, which are then displayed in API Manager.
-   API administrators can enable and configure a global API Manager fault handler policy that is executed when an error occurs for all virtualized API methods.
-   API developers can configure specific fault handler policies at the front-end API and method levels, which override any other fault handler policies that are configured.

{{< alert title="Note" color="primary" >}}API Manager fault handler policies are optional features that you can configure depending on your requirements.{{< /alert >}}

API Manager fault handler template
----------------------------------

API Manager provides a fault handler template, which acts as the default fault handler for an API Manager instance. This simple fault handler policy consists of an API Gateway **Generic Error** filter:

![API Manager default fault handler](/Images/docbook/images/api_mgmt/api_mgmt_fault_handler_default.png)

When API Manager fault handlers are executed
--------------------------------------------

API Manager fault handlers are switched off in a vanilla API Manager installation. However, the API Manager default fault handler policy is configured and selected. This maintains existing functionality post-installation or upgrade, and also makes the transition to employing API Manager fault handlers a simple toggle of a button.

You can configure fault handlers at the following levels:

| Fault Handler       | Description                                                                                                                                                                                                                                                     |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Global              | System global fault handler, configured using Policy Studio. This is existing functionality (pre-version 7.6.2) for all API Manager instances.                                                                                                                  |
| API Manager default | Configured for a specific API Manager instance by the API administrator. This fault handler acts as the default for all virtualized APIs, and overrides any fault handler configured at the global level. See also [API Manager default fault handler](#fault). |
| API                 | Configured for a specific front-end API (in the **Outbound** > **Advanced** view). This fault handler overrides any fault handler configured at the API Manager default or global levels.                                                                    |
| API method          | Configured for a specific front-end API as a per-method override (in the **Outbound** > **Advanced** view). This fault handler overrides any fault handler configured at the API, API Manager instance, or global level.                                     |

Configure API Manager fault handler policies in Policy Studio
-------------------------------------------------------------

You must first configure API Manager fault handler policies in Policy Studio before you can apply them in API Manager at the API Manager default, API, or API method levels.

### Configure fault handler policies

To configure API Manager fault handler policies, perform the following steps:

1.  In the Policy Studio tree, select **Server Settings** > **API Manager** > **Fault Handler Policies**.
2.  Click **Add**, and select policies in the dialog. The API Manager **Default Fault Handler** policy is configured by default.
3.  Click **Save** at the bottom right.
4.  Click the **Deploy** button at the right of the toolbar to deploy the configuration to the API Gateway.

![Configure API Manager Fault Handler Policies in Policy Studio](/Images/docbook/images/api_mgmt/api_mgmt_fault_handler_config_ps.png)

Enable fault handlers and select a global fault handler in API Manager
----------------------------------------------------------------------

When API Manager fault handler policies are configured in Policy Studio, the API administrator can enable this feature and select a global fault handler from the available policies in on the **Settings** > **API Manager settings** page.

{{< alert title="Note" color="primary" >}}The API administrator is the only user than can enable fault handlers and select a global fault handler policy in API Manager.{{< /alert >}}

![Apply an API Manager Global Fault Handler Policy](/Images/docbook/images/api_mgmt/api_mgmt_fault_handler_global.png)

To enable fault handlers and select a global API Manager fault handler policy, perform the following steps:

1.  In API Manager, under **Settings** > **API Manager settings** > **Fault Handlers**, select **Enable API Manager fault handlers**. This setting is switched off by default.
2.  Select a policy from the **Global Fault Handler Policy** list. This setting defaults to the **Default Fault Handler** policy described in [API Manager fault handler template](#fault).

Select API and API method fault handler policies in API Manager
---------------------------------------------------------------

When API Manager fault handler policies have been enabled by the API administrator, you can then also select API and API method-level fault handler policies for a front-end API.

### Select an API-level fault handler policy

To select a fault handler policy for a specific front-end API, perform the following steps:

1.  In API Manager, select **Frontend API** > **Outbound**, and click **Advanced** at the top right.
2.  Select a policy for this front-end API from the **Fault Handler Policy** list.
3.  Click **Save** at the top left.

For example:

![API Manager Fault Handler Policy for Frontend API](/Images/docbook/images/api_mgmt/api_mgmt_fault_handler_api.png)

### Select an API method-level fault handler policy

To select a fault handler policy for a specific front-end API method, perform the following steps:

1.  In API Manager, select **Frontend API** > **Outbound**, and click **Advanced** at the top right.
2.  Under **PER-METHOD OVERRIDE**, click the plus sign (**+**) to add an API method.
3.  Select a policy for this front-end API method from the **FAULT HANDLER POLICY** list.
4.  Click **Save** at the top left.

For example:

![API Manager Fault Handler Policy for Frontend API Method](/Images/docbook/images/api_mgmt/api_mgmt_fault_handler_api_method.png)

Tips and tricks
---------------

The following apply when working with fault handlers in API Manager:

-   When editing a front-end API, if you wish to enable fault handlers, perform the following steps:
-   1.  Remain in edit mode on the front-end API.
    2.  Navigate to the **Settings** > **API Manager settings** page.
    3.  Switch on the **Enable API Manager fault handlers** setting.
    4.  Navigate back to the front-end API (notice that the **Apply** button at the top left is now enabled).
    5.  Click **Apply** so that API Manager is updated to reflect the system configuration change.
    6.  You should now be able to select a fault handler for your front-end API.

-   To output a complete list of attributes available to the fault handler, add a **Trace** filter to your fault handler policy. Not all attributes are available for every API invocation, depending whether authentication is performed, the error that occurs, where the error originates, and so on.

### Order of precedence of fault handlers

-   When you have switched on the fault handler feature, because the **Default Fault Handler** policy is pre-selected in API Manager, there is no need to select the same fault handler at the API level. If an error occurs, the **Default Fault Handler** is invoked.
-   If a **Global Fault Handler Policy** is configured in API Manager, and the API Manager fault handler feature is switched off, this policy is executed when an error or exception occurs in the API Manager policy flow. This does not apply when a successful connection is made to the back-end, and the server responds with a non-`2xx` response. In this case, no exception handler is invoked.
-   If API Manager fault handlers are enabled and an API Gateway global fault handler policy is configured, and then an exception occurs in the API Manager fault handler (global, API, or method-level), both the API Manager fault handler and API Gateway global fault handler are executed. The API Manager fault handler is executed first, followed by the API Gateway global fault handler. For more details on global API Gateway policies, see the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   If a local fault handler is configured for any custom API Manager policies (global request, request, routing, response, or global response), and an exception occurs in any of these policies, the local fault handler is executed for the exception. The flow then continues as if the exception never occurred, which may not be the desired behavior.
-   A workaround is to define a policy that acts as the fault handler (using an API Gateway **Policy Shortcut** filter), and for that policy to return `false`. This ensures that the API Manager fault handler (global, API, or method-level) also gets executed.

Export of API collections
-------------------------

Fault handler policies configured in API Manager are not exported as part of the API collection in the same way that custom request, routing, or response policies are not exported. The exported API collection only contains references to any configured fault handler policies. The policies themselves remain in the API Manager configuration.

{{< alert title="Note" color="primary" >}}When moving API collections to upstream environments (for example, from Test to Pre-production to Production), and fault handler policies are configured in Policy Studio, the fault handler policies must be deployed before the API collection is imported.{{< /alert >}}

For more details on exporting API collections, see [Manage front-end REST API lifecycle](api_mgmt_virtualize_web.htm#Manage).

Fault handler generated errors
------------------------------

The following tables describe the circumstances under which fault handlers configured in API Manager are executed.

### API Manager generated errors

The following errors are generated by the API Manager default fault handler:

| Error                                    | Description                                                                                                                                                                                |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ApiShunt.noApiMatched`                  | The inbound request does not match any configured virtualized APIs.                                                                                                                        |
| `ApiShunt.noMethodMatched`               | The inbound request does not match any configured virtualized API method. In this case, a match is found at the API level.                                                                 |
| `ApiShunt.noMethodAllowed`               | The inbound method does not match any configured virtualized API method. In this case, the API and method paths both match, but there is no match on the verb.                             |
| `ApiShunt.allAuthNDevicesFailed    `     | Inbound authentication has failed.                                                                                                                                                         |
| `ApiShunt.applicationNotAuthorized `     | The client application does not have access to the API being invoked. Inbound security is set to something other than pass through. The application credentials are sent with the request. |
| `ApiShunt.invokableMethodParamFailure  ` | API method parameter validation has failed.                                                                                                                                                |
| `ApiShunt.tooManyRequests  `             | The configured quota has been exceeded.                                                                                                                                                    |
| `ApiShunt.originNotAllowed `             | The JavaScript `Origin` specified for the application credentials does not match the supplied `Origin`.                                                                                    |
| `ApiShunt.invokableMethodFailure   `     | Content-type mapping has failed. Content-type mapping is disabled for APIs registered in API Manager.                                                                                      |
| `ApiShunt.noAuthNDevicesConfigured`      | No inbound authentication has been configured for the API.                                                                                                                                 |
| `ApiShunt.unexpectedAPI    `             | The configured `resourcePath` does not match the resource path presented in the request.                                                                                                   |

### Policy generated errors

The following errors are generated by any custom policies configure in API Manager:

| Error                         | Description                                                                                                                                                                       |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Custom request policy fails   | Custom request policy returns false.                                                                                                                                              |
| Custom request policy aborts  | Custom request policy throws an exception.                                                                                                                                        |
| Custom routing policy fails   | Custom routing policy returns false.                                                                                                                                              |
| Custom routing policy aborts  | Custom routing policy throws an exception.                                                                                                                                        |
| Custom response policy fails  | Custom response policy returns false. The response code and message may need to be updated because the back-end may have returned `200 OK`, depending on your requirements.       |
| Custom response policy aborts | Custom response policy throws an exception. The response code and message may need to be updated because the back-end may have returned `200 OK`, depending on your requirements. |
| Global request policy fails   | Global request policy returns false.                                                                                                                                              |
| Global request policy aborts  | Global request policy throws an exception.                                                                                                                                        |
| Global response policy fails  | Global response policy returns False. The response code and message may need to be updated because the back-end may have returned `200 OK`, depending on requirements.            |
| Global response policy aborts | Global response policy throws an exception.                                                                                                                                       
  The response code and message may need to be updated because the back-end may have returned `200 OK`, depending on your requirements.                                              |

### Back-end generated errors

The following errors are generated by the back-end API service.

| Error | Description                                                                                                                                                                                                                                                                                            |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `3xx` | Back-end service has responded with a redirect.                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                          
  Technically, redirects are not errors, but some users may wish to perform additional processing of the response in the fault handler policy. If you have enabled the fault handler feature, but do not consider `3xx` responses as errors, you must add specific logic to your fault handler policies.  |
| `4xx` | Back-end service has responded with a client error.                                                                                                                                                                                                                                                    |
| `5xx` | Back-end service has responded with a server error.                                                                                                                                                                                                                                                    |

Fault handler message attributes
--------------------------------

An `api.error.source` message attribute is added to the message whiteboard prior to the fault handler policy being executed, so that users can make decisions on the source of the error being processed. This attribute is in `java.lang.String` format.

The possible values for this attribute are:

| Error        | Description                                                                                  |
|--------------|----------------------------------------------------------------------------------------------|
| `apiManager` | The error was generated by the API Manager runtime.                                          |
| `backend   ` | The error was generated by the back-end service by returning a status code other than `2xx`. |

Further information
-------------------

For more details, see the following related topics:

-   [Configure API Manager settings in Policy Studio](api_mgmt_config_ps.htm)
-   [Configure web-based settings in API Manager](api_mgmt_config_web.htm)
-   [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm)
-   [Enforce API Manager global policies](api_mgmt_global_policies.htm)
-   [Add custom API Manager routing policies](api_mgmt_custom_routing_policies.htm)

For more details on configuring policies in Policy Studio, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
