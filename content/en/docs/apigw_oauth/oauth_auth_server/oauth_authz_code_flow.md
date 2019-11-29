---
title: Consume authorization requests
linkTitle: Consume authorization requests
date: 2019-11-18
description: The OAuth 2.0 **Authorization Code Flow** filter is used to consume OAuth authorization requests. This filter supports the OAuth 2.0 authorization code (web server) flow, which is used by applications hosted on a secure server. A critical aspect of this flow is that the server must be able to protect the issued client application's secret. The web server flow is suitable for clients capable of interacting with the end user's user-agent (typically a web browser), and capable of receiving incoming requests from the authorization server (acting as an HTTP server). The authorization code flow is also known as the three-legged OAuth flow. 
weight: 6
---

The OAuth 2.0 authorization code flow is as follows:

1. The web server redirects the user to the API Gateway acting as an authorization server to authenticate and authorize the server to access data on their behalf.
2. After the user approves access, the web server receives a callback with an authorization code.
3. After obtaining the authorization code, the web server passes back the authorization code to obtain an access token response.
4. After validating the authorization code, the API Gateway passes back a token response to the web server.
5. After the token is granted, the web server accesses their data.

OAuth access tokens are used to grant access to specific resources in an HTTP service for a specific period of time (for example, photos on a photo sharing website). This enables users to grant third-party applications access to their resources without sharing all of their data and access permissions. An OAuth access token can be sent to the resource server to access the protected resources of the resource owner (user). This token is a string that denotes a specific scope, lifetime, and other access attributes.

The OAuth 2.0 **Authorization Code Flow** filter also supports the implicit grant (user agent) flow. This is used by client applications (consumers) residing on the user's device (for example, in a browser using JavaScript, or from a mobile device, or desktop application). These consumers cannot keep the client secret confidential (application password or private key).

For more details on these OAuth flows, see [Authorization code grant flow](/docs/apigw_oauth/oauth_flows/oauth_flows_auth_code) and [Implicit grant (or user agent) flow](/docs/apigw_oauth/oauth_flows/oauth_flows_user_agent).

## Validation settings

The settings on the **Validation/Templates** tab enable you to specify login and authorization forms to authenticate the resource owner.

Configure the following fields:

**Login Form**\
Enter the full path to the HTML form that the resource owner can use to log in. Defaults to the value `${environment.VDISTDIR}/samples/oauth/templates/login.html`.

**Authorization Form**\
Enter the full path to the HTML form that the resource owner can use to grant (allow or deny) client application access to the resources. Defaults to the value `${environment.VDISTDIR}/samples/oauth/templates/requestAccess.html`.

**Selector**\
Enter a selector for the message attribute that contains the `authentication.subject.id` of the current user if they have already been authenticated. Defaults to the `${authentication.subject.id}` message attribute. For more details on selectors, see the [API Gateway Policy Developer Guide](/bundleAPIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

{{< alert title="Note" color="primary" >}}Previous versions of API Gateway enabled you to call a policy to authorize the resource owner, and store the subject in a message attribute. This field is used to provide backward compatibility with configurations using that option. If an authenticated user is not found in the message, the filter automatically uses the internal flow and returns the specified login form.{{< /alert >}}

**Skip Authorization**\
Select this option to skip the authorization check and automatically accept the valid scopes in the request, or the scopes from the policy set in **Get scopes by calling the policy** on the **Access Token Details** tab.

## Authorization code settings

Configure the following fields on the **Authz Code Details** tab:

**Authorization Code will be stored here**:\
Click the browse button to select where to cache the authorization code (for example, in the default **Authz Code Store**). To add an authorization code store, right-click **Authorization Code Stores**, and select **Add Authorization Code Store**. You can store codes in a cache, in a relational database, or in an Apache Cassandra database. For more details, see [Manage access tokens and authorization codes](/docs/apigw_oauth/gw_oauth_auth_server/oauth_access_tokens_auth_codes#Manage).

**Location of Access Code redirect page**:\
Enter the full path to the HTML page used for the access code HTTP redirect. Defaults to the following:

``` {space="preserve"}
    ${environment.VDISTDIR}/samples/oauth/templates/showAccessCode.html
```

`VDISTDIR` specifies the directory in which the API Gateway is installed.

**Length**: \
Enter the number of characters in the authorization code. Defaults to `30`.

**Expiry (in secs)**: \
Enter the number of seconds before the authorization code expires. Defaults to `600`
(10 minutes).

**Additional parameters to store for this Authorization Code**: \
To store additional metadata with the authorization code, click **Add**, and enter the **Name** and **Value** in the dialog (for example, `Department`
and `Engineering`). When additional data is set, it is then available in the **Access Token using Authorization Code** filter when the authorization code is exchanged for an access token. You can also specify the fields in this table using selectors. For more details on selectors, see the API Gateway Policy Developer Guide.

{{< alert title="Note" color="primary" >}}If you entered parameters for the authorization code and parameters for the access token, the data will be merged. For example, if you set `Name:John`and `Department:Engineering`as additional parameters for the authorization code, and set `Department:HR`as an additional parameter for the access token, the token is created with `Name:John`and `Department:HR`.{{< /alert >}}

## Access token settings

Configure the following fields on the **Access Token Details** tab:

**Access Token will be stored here**: \
Click the browse button to select where to cache the access token (for example, in the default `OAuth Access Token Store`). To add an access token store, right-click **Access Token Stores**, and select **Add Access Token Store**. You can store tokens in a cache, in a relational database, or in an Apache Cassandra database. For more details, see [Manage access tokens and authorization codes](/docs/apigw_oauth/gw_oauth_auth_server/oauth_access_tokens_auth_codes#Manage).

**Expiry (in secs)**: \
Enter the number of seconds before the access token expires. Defaults to `3600`
(one hour).

**Length**: \
Enter the number of characters in the access token. Defaults to `54`.

**Type**: \
Enter the access token type. This provides the client with information required to use the access token to make a protected resource request. The client cannot use an access token if it does not understand the token type. Defaults to `Bearer`.

**Additional parameters to store for this Access Token**: \
Click **Add** to store additional access token parameters, and enter the **Name** and **Value** in the dialog (for example, `Department`, `Engineering`).

**Generate Token Scopes**: \
When requesting a token from the authorization server, you can specify a parameter for the OAuth scopes that you wish to access. When scopes are sent in the request, you can select whether the access token is generated only if the scopes in the request match all or any scopes registered for the application. Alternatively, for extra flexibility, you can get the scopes by calling out to a policy.

Select one of the following options to configure how access tokens are generated based on specified scopes:

* **Get scopes from a registered application**: \
Select whether the scopes must match **Any** or **All** of the scopes registered for the application in the Client Application Registry. Defaults to **Any**. If no scopes are sent in the request, the token is generated with the scopes registered for the application.
* **Get scopes by calling policy**: \
Select a preconfigured policy to get the scopes, and enter the attribute that stores the scopes in the **Scopes approved for token are stored in the attribute** field. Defaults to `scopes.for.token`. The configured filter requires the scopes as a set of strings on the message whiteboard.

## Advanced settings

The settings on the **Advanced** tab include monitoring settings and cookie settings.

The real-time monitoring options enable you to view service usage in API Gateway Manager. For more information on real-time monitoring, see the .

**Enable monitoring** \
Select this option to enable real-time monitoring. If this is enabled you can view service usage in the web-based API Gateway Manager tool.

**Which attribute is used to identify the client** \
Enter the message attribute to use to identify authenticated clients. The default is `authentication.subject.id`, which stores the identifier of the authenticated user (for example, the user name or user's X.509 Distinguished Name).

**Composite Context** \
This setting enables you to select a service context as a composite context in which multiple service contexts are monitored during the processing of a message. This setting is not selected by default.

For example, the API Gateway receives a message and sends it to `serviceA` first, and then to `serviceB`. Monitoring is performed separately for each service by default. However, you can set a composite service context before `serviceA` and `serviceB` that includes both services. This composite service passes if both services complete successfully, and monitoring is also performed on the composite service context.

The traffic monitoring options enable you to view message traffic in API Gateway Manager. For more information on traffic monitoring, see the .

**Record Outbound Transactions** \
Select whether to record outbound message traffic. You can use this setting to override the **Record Outbound Transactions** setting in **Server Settings
> Monitoring > Traffic Monitor**. This setting is selected by default.

**Resource Owner Cookie** \
Enter the name of the resource owner's cookie in the **Cookie Name** field. This is the cookie created to manage the session between the authorization server and the resource owner.

**Authorization Session Cookie** \
This cookie is needed to manage the session between the client application and the OAuth authorization server. Enter the following details for the session cookie:

* Cookie Name – Name of the session cookie
* Domain – Domain value for the `Set-Cookie` header
* Path – Path value for the `Set-Cookie` header
* Expires in – The length of time until the cookie expires
* Secure – Select the check box to add a `secure` flag to the `Set-Cookie` header
* HttpOnly – Select the check box to add a HttpOnly flag to the `Set-Cookie` header
