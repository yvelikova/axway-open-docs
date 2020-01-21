{
"title": "Configure API Gateway",
"linkTitle": "Configure API Gateway",
"date": "2020-01-20",
"description": "This section describes how to configure API Gateway to work with Oracle Access Manager."
}
﻿

This section describes how to configure API Gateway to work with Oracle Access Manager.

Start API Gateway
-----------------

Refer to the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
for instructions on how to start API Gateway.

Command example:

``` {space="preserve"}
> startinstance -n "APIGateway1" -g "Group1"
```

Configure API Gateway to authenticate and authorize against OAM
---------------------------------------------------------------

This section explains how to configure API Gateway to delegate authentication and authorization decisions to Oracle Access Manager.

The following steps are required:

-   [*Step 1 - Configure the OAM authentication repository* on page 1](#Configure_oam_auth_repo)
-   [*Step 2 - Create a new policy* on page 1](#Create_policy)
-   [*Step 3 - Add the HTTP Basic Authentication filter* on page 1](#Add_http_basic_auth_filter)
-   [*Step 4 - Add the OAM Authorization filter* on page 1](#Add_oam_auth_filter)
-   [*Step 5 - Add the Success Message filter* on page 1](#Add_success_mssg_filter)
-   [*Step 6 - Add the Failure Message filter* on page 1](#Add_failure_mssg_filter)
-   [*Step 7 - Add a relative path for the OAM authentication and authorization policy* on page 1](#Add_relative_path)
-   [*Step 8 - Deploy the policy* on page 1](#Deploy_policy)

The resulting policy created will appear as follows:

![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_13.png)

### **Step 1 - Configure the OAM authentication repository**

To configure the OAM authentication repository, perform the following steps:

1.  In Policy Studio, expand the **Environment Configuration > External Connections** node in the tree.
2.  Expand the **Authentication Repositories** node and click **Oracle Access Manager Repositories**.
3.  Click the **Add a New Repository** link in the main window.
4.  Configure the following fields in the **Authentication Repository** window. Refer to the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    for more details on the fields.
    -   **Name**: Name of the authentication repository. For example: `OAM 11g R2 Repo`.
    -   **Resource Type**: `http`
    -   **Resource Name**: For a 10g OAM server, enter `${http.request.uri}`.\
        For an 11g OAM server, you must also enter the host name in the resource. For example, `//oam.example.com${http.request.uri}`. Enter the exact same host name as you did for the **Host Identifier** field when creating the OAM 11g WebGate. The value is case-sensitive.
    -   **Operation**: `${http.request.verb}`
    -   **Client Location**: `${http.request.clientaddr.getAddress().getHostAddress()}`
    -   **Create SSO Token**: Select the check box.
    -   **Store SSO token in attribute named**: `oracle.sso.token`
    -   **Add SSO Token to user attributes**: This option is checked by default in order to store the OAM token for consumption by downstream OAM filters, for example, the OAM Authorization filter.
    -   **OAM ASDK Directory**: For **OAM ASDK 10g (10.1.4.3.0)**, enter: `C:\Program Files x86)\NetPoint\AccessServerSDK\oblix\lib`\
        For **OAM ASDK 11gR2 (11.1.2.0.0)**, enter: `C:\Oracle\AccessServerSDK11\config`\
    -   **OAM ASDK Compatibility Mode**: For a 11g OAM server, select **OAM 11g**.\
        For a 10g OAM server, select **OAM 10g**.

>

Click **OK** to complete the configuration.

The following figure shows the OAM authentication repository configured to talk to an 11g OAM server:

![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_14.png)

### **Step 2 - Create a new policy**

Create a new policy in Policy Studio called, for example, `OAM 11gR2 Authentication and Authorization`. The OAM authentication and authorization filters will be added here.

### **Step 3 - Add the HTTP Basic Authentication filter**

Create an HTTP Basic Authentication filter and configure it to authenticate users against the OAM authentication repository created in [*Step 1 - Configure the OAM authentication repository* on page 1](#Configure_oam_auth_repo).

1.  Open the newly created `OAM 11gR2 Authentication and Authorization` policy.
2.  Drag an **HTTP Basic** filter from the **Authentication** category in the palette and drop it onto the canvas and configure it as follows. Refer to the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    for more details on the fields.
    -   **Name**: Name of the filter. For example: `HTTP Basic via OAM 11g R2 Repository`.
    -   **Credential Format**: Select **User Name**.
    -   **Allow Client Challenge**: Select the **Allow client challenge** check box.
    -   **Repository Name**: Select **OAM 11gR2 Repo**.
3.  Click **OK**.
4.  The completed configuration for the HTTP Basic Authentication filter is displayed as follows:\

![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_15.png)

1.  Right-click the filter and select the **Set as Start** menu option.

### **Step 4 - Add the OAM Authorization filter**

The next step is to add the OAM Authorization filter, which will authorize authenticated users against OAM. Complete the following steps to configure the OAM Authorization filter:

1.  From the **Oracle Access Manager category** in the palette of Policy Studio, drag the **Authorization** filter and drop it onto the **HTTP Basic Authentication** filter created in [*Step 3 - Add the HTTP Basic Authentication filter* on page 1](#Add_http_basic_auth_filter). By dropping a filter directly on to another filter, the new filter will be automatically connected to the first filter with a `success` path.
2.  Configure the fields on the filter as follows. Refer to the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    for more details on the fields.
    -   **Name**: Enter a suitable name, such as `Authorization via OAM 11gR2`.
    -   **Attribute Containing SSO Token**: Enter the name of the message attribute configured in the authentication repository earlier where the SSO token is stored, that is to say `oracle.sso.token`.
    -   **Resource Type**: `http`
    -   **Resource Name**: For a 10g OAM server, enter `${http.request.uri}`.\
        For an 11g OAM server, you must also enter the host name in the resource. For example, `//oam.example.com${http.request.uri}`. Enter the exact same host name as you did for the **Host Identifier** field when creating the OAM 11g WebGate. The value is case-sensitive.
    -   **Operation**: `${http.request.verb}`
    -   **OAM ASDK Directory**: For **OAM ASDK 10g (10.1.4.3.0)**, enter: `C:\Program Files x86)\NetPoint\AccessServerSDK\oblix\lib`\
        For **OAM ASDK 11gR2 (11.1.2.0.0)**, enter: `C:\Oracle\AccessServerSDK11\config`\
    -   **OAM ASDK Compatibility Mode**: For a 11g OAM server, select **OAM 11g**.\
        For a 10g OAM server, select **OAM 10g**.
3.  Click **OK**.

The following figure shows the OAM Authorization filter configured to talk to an 11g R2 OAM server:

![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_16.png)

### **Step 5 - Add the Success Message filter**

To display a success message to the user after successfully authorizing the user you can add a Set Message filter as follows. Refer to the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
for more details on the fields.

1.  Drag a **Set Message** filter from the **Conversion** category in the palette and drop it onto the **OAM Authorization** filter created in [*Step 4 - Add the OAM Authorization filter* on page 1](#Add_oam_auth_filter).
2.  Configure the following fields on this filter:
    -   **Name**: Enter `Set Success Message`.
    -   **Content-type**: `text/plain`
    -   **Message Body**: `User '${authentication.subject.id}' was authenticated and authorized successfully!`
3.  Click **OK**.

The configuration for the **Set Success Message** filter should now look like this:

![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_17.png)

### **Step 6 - Add the Failure Message filter**

If OAM fails to authenticate or authorize the user, an appropriate error message must be returned to the client. To display a failure message to the client after an unsuccessful authentication/authorization event you can add another **Set Message** filter as follows:

1.  Drag a **Set Message** filter from the **Conversion** category in the palette and drop it onto the **OAM Authorization** filter. Because this filter already has the "Set Success Message" filter connected on its success path, the new **Set Message** filter will be automatically added on its *failure* path.
2.  Configure the following fields on this filter. Refer to the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    for more details on the fields.
    -   **Name**: Enter `Set Blocked Message`.
    -   **Content-type**: `text/plain`
    -   **Message Body**: `Access Denied!`
3.  Click **OK**.

The configuration for the **Set Blocked Message** filter should now look like this:

![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_18.png)

The following figure shows the policy you have configured so far:

![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_19.png)

For completion, it would be useful to connect the Set Blocked Message filter to the HTTP Basic via OAM 11g R2 Repository filter along its failure path to get an appropriate failure message when authentication *and* authorization fail. Click the **Failure Path** item at the top of the palette to select it. Then simply click the **HTTP Basic via OAM 11g R2 Repository** filter and then click the **Set Blocked Message** filter to connect the failure path. The final policy is now displayed as follows:

![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_13.png)

### **Step 7 - Add a relative path for the OAM authentication and authorization policy**

In order for API Gateway to invoke the new policy for certain requests you must create a **Relative Path** and map it to the policy. All requests received on this path will be automatically forwarded to the policy for processing. For more information on relative paths, refer to the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

To add a **Relative Path** for this policy click **Add Relative Path** in the toolbar beneath the canvas.

Enter the path on which API Gateway will receive requests for this policy in the field provided in the **Resolve Path to Policies** dialog box:

![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_21.png)

Enter a relative path of `/oam` in the field provided. You can see that this path is automatically mapped to the **OAM 11g Authentication and Authorization** policy created earlier in this section.

### **Step 8 - Deploy the policy**

To push the configuration changes to the live API Gateway instance you must deploy the new policy. You can do this by pressing the **F6** button.
