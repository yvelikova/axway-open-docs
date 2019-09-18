{
"title": "Enforce API Manager global policies",
"linkTitle": "Enforce API Manager global policies",
"date": "2019-09-17",
"description": "This topic explains how organizations and their governance teams can use API Manager to apply mandatory security, compliance, or governance policies, which are executed as part of every API call across their entire API portfolio."
}
﻿

This topic explains how organizations and their governance teams can use API Manager to apply mandatory security, compliance, or governance policies, which are executed as part of every API call across their entire API portfolio.

Global enforcement of policies enables API administrators to configure global request and response policies that are executed for every virtualized API method invocation. You can achieve this as follows:

-   In Policy Studio, as a policy developer, you must first configure your chosen policies as API Manager global request and response policies, which are then displayed in API Manager on the API Manager settings page.
-   In API Manager, as an API administrator, select a global request policy and a global response policy from the list of available global policies.

{{< alert title="Note" color="primary" >}}API Manager global request and global response policies are both optional features, and you can configure one without the other, or neither, depending on your requirements.{{< /alert >}}

API Manager global policy flow
------------------------------

Configuring global policies in API Manager extends the policy execution path for front-end APIs as follows:

![API Manager Global Policy Flow](/Images/docbook/images/api_mgmt/api_mgmt_global_policy_flow.png)

In this policy flow, all policies are optional, and the global policies are executed as follows:

-   The global request policy is executed after inbound authentication but before any non-global request, routing, or response policies configured for the front-end API.
-   The global response policy is executed last after any non-global response policy configured for the front-end API.

{{< alert title="Tip" color="primary" >}}For details on configuring non-global request, routing, and response policies, see [Configure API Manager settings in Policy Studio](api_mgmt_config_ps.htm).{{< /alert >}}

Configure API Manager global policies in Policy Studio
------------------------------------------------------

You must first configure API Manager global request and response policies in Policy Studio before you can apply them in API Manager.

### Configure global request policies

To configure API Manager global request policies, perform the following steps:

1.  In the Policy Studio tree, select **Server Settings** > **API Manager** > **Global Request Policies**.
2.  Click **Add**, and select policies in the dialog. By default, no global request policies are configured.
3.  Click **Save** at the bottom right.
4.  Click the **Deploy** button at the right of the toolbar to deploy the configuration to the API Gateway.

![Configure API Manager Global Request Policies in Policy Studio](/Images/docbook/images/api_mgmt/api_mgmt_global_request_policy_config.png)

### Configure global response policies

To configure API Manager global response policies, perform the following steps:

1.  In the Policy Studio tree, select **Server Settings** > **API Manager** > **Global Response Policies**.
2.  Click **Add**, and select policies in the dialog. By default, no global response policies are configured.
3.  Click **Save** at the bottom right.

![Configure API Manager Global Response Policies in Policy Studio](/Images/docbook/images/api_mgmt/api_mgmt_global_response_policy_config.png)

Select global policies in API Manager
-------------------------------------

When API Manager global request and response policies are configured in Policy Studio, the API administrator can select the available policies in API Manager on the **Settings** > **API Manager settings** page.

{{< alert title="Note" color="primary" >}}The API administrator is the only user than can configure global policies in API Manager.{{< /alert >}}

![Apply an API Manager Global Policy](/Images/docbook/images/api_mgmt/api_mgmt_global_policy_apply.png)

To apply API Manager global policies, perform the following steps:

1.  In API Manager, under **Settings** > **API Manager settings** > **Global Policies**, select **Enable Global Policies**. This setting is disabled by default.
2.  Select a global policy from the **Global Request Policy** list (for example, a corporate security policy).
3.  Select a global policy from the **Global Response Policy** list (for example, a corporate governance policy).

When global policies have been selected by the API administrator, they are then displayed for all APIs on the **Frontend API** > **Outbound** tab when you click **Advanced** (in the read-only **Global request policy** and **Global response policy** fields). For example:

![API Manager Global Policy Selected for Front-end API](/Images/docbook/images/api_mgmt/api_mgmt_global_policy_frontend.png)

API transaction analysis in API Gateway Manager
-----------------------------------------------

When a global policy is selected in API Manager, it is also displayed for all API runtime invocations in the API Gateway Manager console in the **Filter Execution Path** on the **Traffic** page. The following example shows both global request and response policies:

![API Manager Global Policy in API Gateway Manager](/Images/docbook/images/api_mgmt/api_mgmt_global_policy_monitor.png)

Export of API collections
-------------------------

Global policies configured in API Manager are not exported as part of the API collection. This is because global policies are part of the API Manager system settings only. When a global policy is selected, it is displayed as being executed on the **Frontend API** > **Outbound** > **Advanced** tab. For more details, see [Select a global policiy in API Manager](#Select).

{{< alert title="Note" color="primary" >}}When moving API collections to upstream environments (for example, from Test to Pre-production to Production), and global policies are configured in Policy Studio, the global policies must be enabled in API Manager and must be available in those upstream environments. These steps must be performed out-of-band of any export or import of API collections.{{< /alert >}}

For more details on exporting API collections, see [Manage front-end REST API lifecycle](api_mgmt_virtualize_web.htm#Manage).

Further information
-------------------

For more details, see the following related topics:

-   [Configure API Manager settings in Policy Studio](api_mgmt_config_ps.htm)
-   [Configure web-based settings in API Manager](api_mgmt_config_web.htm)
-   [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm)

For more details on configuring policies in Policy Studio, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
