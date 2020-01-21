{
"title": "Configure API Gateway policy",
"linkTitle": "Configure API Gateway policy",
"date": "2020-01-20",
"description": "This section describes how to configure a policy for RSA Access Manager integration in Policy Studio. For more information on working in Policy Studio, see the \\n \\n \\n ."
}
﻿

This section describes how to configure a policy for RSA Access Manager integration in Policy Studio. For more information on working in Policy Studio, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

The RSA Access Manager authentication repository is available from all authentication filters. Here, the example policy uses the **HTTP Basic** authentication filter to authenticate a client against a RSA Access Manager repository using a user name and password combination. You can configure a different authentication mechanism as required.

To start, add a new policy named, for example, `RSA Access Manager`.

1.  Open the **Authentication** category in the palette, and drag a **HTTP Basic** filter onto the policy canvas.
2.  Set the following, and click **Finish**:
3.  -   **Credential Format**: `User Name`.
    -   **Allow client challenge**: Select this.
    -   **Repository Name**: The repository you configured (`RSA Access Manager Repository`).

4.  For more details on the fields and options in this configuration window, see
    [HTTP basic authentication](/csh?context=506&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
    .
5.  Right click the filter, and select **Set as Start**.
6.  Open the **Authorization** category in the palette, and drag an **Access Manager** filter onto the policy canvas.
7.  Select which server type API Gateway connects to (**Authorization Server** or **Dispatch Server**), and select the connection group.
8.  In **Server**, enter the name of the server that hosts the requested resource. The name entered must correspond to a preconfigured server name in RSA Access Manager.
9.  In **Resource**, enter the name of the requested resource, and click **Finish**. The resource must be preconfigured in RSA Access Manager.\
    For more details on the fields and options in this configuration window, see
    [RSA Access Manager authorization](/csh?context=514&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
    .\
10. Connect the filters with a success path.
11. Click on the **Add Relative Path** icon to create a new relative path (for example, `/rsa`) that links to this policy.
12. Deploy the new configuration to API Gateway.

The policy looks like this:

![](/Images/IntegrationGuides/auth_auth/rsa_policy.png)

The policy has the following flow:

-   API Gateway authenticates the end user using HTTP Basic.
-   API Gateway passes the end user’s credentials to RSA Access Manager.
-   RSA Access Manager authenticates the end user, authorizes the end user for the particular resource, and sends a response to API Gateway.
-   API Gateway relays the response to the end user.

