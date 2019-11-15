{
"title": "Configure API Gateway policy",
"linkTitle": "Configure API Gateway policy",
"date": "2019-11-14",
"description": "This section describes how to configure API Gateway for the KCD using Policy Studio. For more information on working in Policy Studio, see the \\n \\n \\n ."
}
﻿

This section describes how to configure API Gateway for the KCD using Policy Studio. For more information on working in Policy Studio, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

-   [Configure the Kerberos client](#Configur)
-   [Configure a Kerberos profile for the Kerberos client](#Configur2)
-   [Configure a Kerberos policy](#Configur4)
    -   [Configure the end user authentication method](#Configur3)
    -   [Configure connection to the back-end service](#Configur6)
    -   [Build the policy](#Build)
-   [Configure the Kerberos system settings](#Configur5)
-   [Deploy the configuration](#Deploy)
-   [Test the configuration](#Test)

Configure the Kerberos client
-----------------------------

Although the trusted Kerberos principal can be referred to as a Kerberos service principal, it is acting on the client-side of the Kerberos authentication transaction, and needs a Kerberos client for KCD.

1.  In the node tree, click **Environment Configuration > External Connections > Kerberos Clients**.
2.  Click **Add a Kerberos Client**, and enter a name for your client (`Trusted Kerberos Client for KCD`).
3.  On the **Kerberos Endpoint** tab, set the following:
4.  -   **Load via JAAS Login**: Select this option and the **Request from KDC** option.
    -   **Kerberos Principal**: `TrustedAPIGateway for KCD`.
    -   **Enter Password**: Enter the password for `TrustedAPIGateway@AXWAY.COM`.
    -   **Enabled**: Ensure this option is selected.

5.  On the **Kerberos Constrained Delegation** tab, set the following:
6.  -   **Kerberos Principal to Impersonate**: `End User Principal to Impersonate in KCD`
    -   **Select Cache for Impersonated Subjects**: `Kerberos Constrained Delegation Impersonated Subject Cache`

7.  On the **Advanced** tab, set the following:
8.  -   **Mechanism**: `SPNEGO_MECHANISM`.
    -   **Context Settings**: Select the following options:
    -   -   **Mutual authentication**
        -   **Integrity**
        -   **Confidentiality**
        -   **Anonymity**
        -   **Replay Detection**
        -   **Sequence Checking**

    -   **Synchronize to Avoid Replay Errors at Service**:
        Deselect this option to improve performance.
    -   **Refresh when remaining validity is <value> seconds**: Set to `300`.

For more details on the fields and options in this configuration window, see
[Configure Kerberos clients](/csh?context=611&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Configure a Kerberos profile for the Kerberos client
----------------------------------------------------

1.  In the node tree, click **Environment Configuration > External Connections > Client Credentials > Kerberos**.
2.  Add a Kerberos profile as follows:
3.  -   **Profile Name**: `Authenticate to BackEndService using KCD`.
    -   **Kerberos Client**: `Trusted Kerberos Client for KCD`.
    -   **Kerberos Service Principal**: `<Back-end Kerberos Service>`.
    -   **Send token with first request**: Select this option.

For more details on the fields and options in this configuration window, see
[Configure Kerberos client credential profiles](/csh?context=613&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Configure a Kerberos policy
---------------------------

The following section describes how to configure the Kerberos policy for KCD.

To start, add a new policy named, for example, `Kerberos KCD SPNEGO Client-Side`.

### Configure the end user authentication method

1.  Configure the authentication mechanism the end user application requires. The required filters and configuration details depend on the type of authentication, for more details, see
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    . For an example configuration, see [Configure a KCD demo setup](configure_gw_to_act_as_test_svc_CD.htm).
2.  Right-click the first filter in your policy, and select **Set as Start**.

### Configure connection to the back-end service

1.  Open the **Routing** category in the filter palette, and drag a **Connect to URL** filter onto the policy canvas.
2.  Enter the **URL** used to invoke the back-end service.
3.  On the **Authentication** tab, select the Kerberos credential profile configured earlier (`Authenticate to BackEndService using KCD`), and click **Finish**.\
    For more details on the fields and options in this configuration window, see
    [Connect to URL](/csh?context=502&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
    .

### Build the policy

1.  Click the **Add Relative Path** icon to create a new relative path `/kcd` that links to this Kerberos client-side policy.
2.  Connect the filters with a success path.
3.  ![](/Images/IntegrationGuides/KerberosIntegration/KerberosConstrainedDelegation/Overview_6.png)

The policy has the following flow:

-   API Gateway authenticates the end user using a non-Kerberos authentication mechanism, and sets the message attribute `authentication.subject.id` to the user name of the end user.
-   API Gateway generates a Kerberos principal name for the end user using the selector `${authentication.subject.id}@AXWAY.COM`.
-   API Gateway checks the cache of impersonated subjects for valid credentials for the end user Kerberos principal name.
-   If valid credentials are not found, API Gateway impersonates the end user, and sends a service ticket request in the name of the end user to the KDC.
-   API Gateway sends the Kerberos token containing the service ticket in the name of the end user to the back-end Kerberos service.
-   The back-end Kerberos service authenticates the end user and returns its response.

Configure the Kerberos system settings
--------------------------------------

1.  In the node tree, click **Environment Configuration > Server Settings > Security > Kerberos**, and click **Add Kerberos Configuration**.
2.  On the **krb5.conf** tab, add the Kerberos settings as follows:
3.  `[libdefaults]`

    `default_realm = AXWAY.COM`

    `renewable=true`

    `proxiable=true`

    `forwardable=true`

     

    `[realms]`

    `AXWAY.COM = {`

    `kdc = dc.axway.com`

    `}`

    For KCD, the setting `forwardable` must be `true`.

    Replace the realm settings in the example with your Kerberos realm, and set the `kdc` setting to the host name of your Windows Domain Controller.

For more details on the fields and options in this configuration window, see
[Kerberos configuration](/csh?context=615&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Deploy the configuration
------------------------

To deploy the configuration to API Gateway, click the **Deploy** icon.

You have now configured and deployed a simple KCD policy for SPNEGO authentication where API Gateway acts as the trusted Kerberos principal for KCD. The end user application that invokes this policy in API Gateway must provide authentication credentials to satisfy the chosen non-Kerberos authentication mechanism.

For demonstration purposes, you can add API Gateway as the back-end service as well as sample users. See [Configure a KCD demo setup](configure_gw_to_act_as_test_svc_CD.htm).

For other use cases covered in this guide, see [Kerberos use cases](../kerberos_overview.htm#Kerberos).

Test the configuration
----------------------

Use a client application to call the KCD policy in API Gateway.

The back-end Kerberos service should send a confirmation on a successful authentication.

The **Traffic Monitor** tab on the API Gateway Manager (`https://localhost:8090`) is an excellent place to view and troubleshoot the message flows. For more details, see .
