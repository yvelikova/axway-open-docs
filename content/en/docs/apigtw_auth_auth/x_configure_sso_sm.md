{
"title": "Configure single sign-on",
"linkTitle": "Configure single sign-on",
"date": "2020-01-21",
"description": "In a production deployment, it is not practical to authenticate and authorize each user for each request. Instead, you can configure API Gateway to store the SiteMinder session cookie for single sign-on (SSO)."
}
﻿

In a production deployment, it is not practical to authenticate and authorize each user for each request. Instead, you can configure API Gateway to store the SiteMinder session cookie for single sign-on (SSO).

After an end user is successfully authenticated, API Gateway can create a custom cookie and place the SiteMinder session cookie validated for that end user as the cookie value. On later request, instead of re-authenticating the user every time, API Gateway can check if the request contains a valid session cookie. If a valid session cookie is found, the end user does not have to be authenticate again. API Gateway can also insert a SAML authorization assertion for downstream web services to consume.

-   [Configure custom cookie creation](#Configur)
-   [Configure the cookie check](#Configur2)
-   [Configure SiteMinder session validation](#Configur3)
-   [Deploy the policy](#Deploy)
-   [Configure inserting a SAML token](#Configur4)

This section expands the previously configured SiteMinder authentication policy. To start, copy your SiteMinder authentication and authorization policy (`SiteMinder`), and rename it (for example, `SiteMinder Single Sign-On`.

Configure custom cookie creation
--------------------------------

1.  Open the **Conversion** category, and drag a **Create Cookie** filter onto the policy canvas.
2.  Set the following:
3.  -   **Cookie Name**: `smcookie`
    -   **Cookie Value**: `${siteminder.session}`
    -   **Path**: /

4.  Set **Max-Age** to how long you want the cookie to remain valid, and click **Finish**.
5.  Connect the **Authorization** filter (`Authorize user with SiteMinder`) to the **Create Cookie** filter with a success path.
6.  ![CA SSO policy with custom cookie creation](/Images/IntegrationGuides/auth_auth/sm_create_cookie.png)

The message attribute `${siteminder.session}` was specified in [Create an authentication repository](configure_policy_sm.htm#Create). After the end user is successfully authenticated to SiteMinder, this is the message attribute that contains the end user’s SiteMinder session cookie.

For more details on the fields and options in this configuration window, see
[Create cookie](/csh?context=504&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

Configure the cookie check
--------------------------

1.  Open the **Attributes** category, and drag a **Get Cookie** filter onto the policy canvas.
2.  Set the **Cookie Name** to `smcookie`.
3.  Select **Fail if cookie not found in the message**, and click **Finish**.
4.  Right-click the **Get Cookie** filter, and select **Set as Start**.
5.  Connect the **Get Cookie** filter to the **HTTP Basic** filter with a failure path.
6.  ![CA SSO policy with the check for a vliad session cookie.](/Images/IntegrationGuides/auth_auth/sm_get_cookie.png)

If the request from then end user does not contain a valid SiteMinder cookie, the end user is prompted to provide login credentials.

For more details on the fields and options in this configuration window, see
[Get cookie](/csh?context=505&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

Configure SiteMinder session validation
---------------------------------------

If API Gateway finds a valid session cookie from an incoming request, it uses the cookie value to validate the end user's SiteMinder session.

1.  Open the **CA SiteMinder** category, and drag a **Session Validation** filter onto the policy canvas.
2.  Set **Agent Name** to your registered SiteMinder agent (`GatewayAgent`).
3.  Set **Selector Expression to retrieve session** to `${cookie.smcookie.value}`, and click **Finish**.
4.  Connect the **Get Cookie** filter to the **Session Validation** filter with a success path.
5.  Connect the **Session Validation** filter to the **Authorization** filter (`Authorize user with SiteMinder`) with a success path.
6.  Connect the **Session Validation** filter to the **HTTP Basic** filter with a failure path.
7.  ![CA SSO policy with session validation](/Images/IntegrationGuides/auth_auth/sm_validate_session.png)

If the SiteMinder session cannot be validated, the end user is prompted to provide login credentials.

For more details on the fields and options in this configuration window, see
[SiteMinder session validation](/csh?context=517&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)

Deploy the policy
-----------------

1.  Click on the **Add Relative Path** icon to create a new relative path (for example, `/siteminder_sso`) that links to this policy.
2.  Deploy the new configuration to API Gateway.

You have now configured a simple policy for single sign-on in SiteMinder authentication.

The policy has the following flow:

-   API Gateway checks if the request contains a valid custom cookie. If a valid custom cookie is not found, the end user is prompted to provide login credentials.
-   If a valid custom cookie is found, API Gateway retrieves the value of the cookie and uses that to check if the end user's session cookie in SiteMinder is still valid. If the session cookie is no longer valid, the end user is prompted to provide login credentials.
-   SiteMinder authorizes the user to access the requested resource and sends response with the SiteMinder cookie back to API Gateway.
-   API Gateway creates a custom cookie to hold the end user's SiteMinder session cookie.
-   API Gateway calls to the protected resource using the routing policy.
-   API Gateway sends the response along with the custom cookie to the end user.

This policy can be part of a larger policy, including features such as XML threat detection and conditional routing (not described in this guide). You can also authenticate the user with some other authentication method instead of HTTP Basic. In addition, you can add additional filters, such as messages in case of failures:

![CA SSO single sing-on policy with failure messages](/Images/IntegrationGuides/auth_auth/sm_messages.png)

Configure inserting a SAML token
--------------------------------

You can extend the single sign-on to downstream web services, if required. After the end user is successfully authenticated and authorized, API Gateway adds a SAML authentication assertion to the response message for the web services to consume.

1.  Open the **Authorization** category, and drag a **Insert SAML Authentication Assertion** filter onto the policy canvas.
2.  On the **Assertion details** tab, select any issuer on the **Issuer Name** list, and set the expiry date for the SAML authentication assertion.
3.  On the **Assertion Location** tab, make sure that **Add to WS-Security Block with SOAP Actor/Role** is selected and **SOAP Actor/Role** set to **Current Actor/Role Only**.
4.  On the **Advanced** tab, select **Insert SAML Attribute Statement** and **Indent**, then click **Finish**.
5.  Connect the filter between the **Create Cookie** and the **Policy Shortcut** filters with success paths.
6.  ![Adding Insert SAML Authorization Assertion to the policy](/Images/IntegrationGuides/auth_auth/sm_policy_SAML.png)

For more details on the fields and options in this configuration window, see
[Insert SAML authorization assertion](/csh?context=508&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.
