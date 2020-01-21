{
"title": "Configure SiteMinder authentication policy",
"linkTitle": "Configure SiteMinder authentication policy",
"date": "2020-01-21",
"description": "This section describes how to configure an authentication policy in Policy Studio for API Gateway to authenticate to CA SiteMinder. For more details on working in Policy Studio, see \\n \\n \\n ."
}
﻿

This section describes how to configure an authentication policy in Policy Studio for API Gateway to authenticate to CA SiteMinder. For more details on working in Policy Studio, see
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

-   [Create an authentication repository](#Create)
-   [Configure routing to the protected resource](#Configur)
-   [Configure the SiteMinder authentication and authorization policy](#Configur2)

Create an authentication repository
-----------------------------------

1.  In the node tree, click **Environment Configuration > Authentication Repositories> SiteMinder Repositories**.
2.  Select **Add a new Repository**, and enter a name for your repository (for example, `SiteMinder repository`).
3.  Set **Agent Name** to the agent you registered (`GatewayAgent`), and click **OK**.

For more details on the fields and options in this configuration window, see
[CA SiteMinder repositories](/csh?context=603&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Configure routing to the protected resource
-------------------------------------------

1.  In the node tree, click **Policies**.
2.  Add a new policy , and enter a name for it (`Route to protected resource`).
3.  Open the **Routing** category in the palette, drag a **Connect to URL** filter onto the policy canvas, and enter a name for your filter (`Route to protected resource`).
4.  Enter the URL for your protected resource, and click **Finish**.
5.  Right click the filter, and select **Set as Start**.

The SiteMinder authentication and authorization policy calls to this protected routing policy using a **Policy Shortcut** filter.

For more details on the fields and options in this configuration window, see
[Connect to URL](/csh?context=502&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

Configure the SiteMinder authentication and authorization policy
----------------------------------------------------------------

This sections describes how to configure a policy to authenticate and authorize an end user existing in a CA SiteMinder repository.

To start, add a new policy named, for example, `SiteMinder`.

1.  Open the **Authentication** category, and drag a **HTTP Basic** filter onto the policy canvas.
2.  Set the following, and click **Finish**:
3.  -   **Credential Format**: `User name`
    -   **Repository name**: `<your SiteMinder repository>` (`SiteMinder repository`)

    For more details on the fields and options in this configuration window, see
    [HTTP basic authentication](/csh?context=506&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
    .

4.  Open the **CA SiteMinder** category, and drag a **Authorization** filter onto the policy canvas.
5.  Enter a name for the filter (for example, `Authorize user with SiteMinder`), and click **Finish**.
6.  For more details on the fields and options in this configuration window, see
    [SiteMinder authorization](/csh?context=516&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
    .
7.  Open the **Utility** category, drag a **Policy Shortcut** filter onto the policy canvas.
8.  Set **Policy Shortcut** to the routing policy you created (`Route to protected resource`), and click **Finish**.
9.  Connect the filters with a success path.
10. Click on the **Add Relative Path** icon to create a new relative path (for example, `/siteminder`) that links to this policy.
11. Deploy the new configuration to API Gateway.

The policy looks like this:

![CA SSO authentication and authorization policy structure](/Images/IntegrationGuides/auth_auth/sm_policy.png)

The policy has the following flow:

-   API Gateway authenticates the end user using HTTP Basic.
-   API Gateway passes the end user’s credentials to SiteMinder.
-   SiteMinder authenticates the end user, authorizes the end user for the particular resource, and sends a response to API Gateway.
-   API Gateway routes the request to a policy shortcut calling the protected resource.

