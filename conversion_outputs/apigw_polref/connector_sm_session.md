{
"title": "CA SiteMinder session validation",
"linkTitle": "CA SiteMinder session validation",
"date": "2019-10-17",
"description": "CA SiteMinder can authenticate end users and authorize them to access protected web resources. When API Gateway has authenticated successfully to SiteMinder on behalf of an end user, SiteMinder can issue a *single sign-on* token (a session cookie) and return it to API Gateway. API Gateway returns the cookie along with the response to the end user. API Gateway can also insert the cookie into a SAML attribute assertion for downstream web services to consume."
}
﻿

CA SiteMinder can authenticate end users and authorize them to access protected web resources. When API Gateway has authenticated successfully to SiteMinder on behalf of an end user, SiteMinder can issue a *single sign-on* token (a session cookie) and return it to API Gateway. API Gateway returns the cookie along with the response to the end user. API Gateway can also insert the cookie into a SAML attribute assertion for downstream web services to consume.

The client then includes the session cookie in subsequent requests to API Gateway. API Gateway can then use the **Session Validation**
filter to ensure that the session cookie is still valid and hence that the user is still authenticated. This means that API Gateway does not have to authenticate every request to SiteMinder and unnecessary round-trips to SiteMinder can be avoided.

Integration with CA SiteMinder requires adding the required third-party binaries to your API Gateway and Policy Studio installations. For more details, see [Prerequisites](part_siteminder_filters.htm#Prerequi).

Configuration
-------------

Configure the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Agent Name**:\
Click the browse button, and select a previously configured agent to connect to SiteMinder. This name *must* correspond with the name of an agent previously configured in the CA SiteMinder Policy Server. At runtime, API Gateway connects as this agent to a running instance of SiteMinder.

To add an agent, in the node tree, click **Environment Configuration > External Connections**, right-click the **SiteMinder/SOA Security Manager Connections**, and select **Add a SiteMinder Connection**. For more details on how to configure a SiteMinder connection, see
[Configure SiteMinder/SOA Security Manager connections](/csh?context=602&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Resource**:\
Enter the name of the protected resource for which the end user must be authenticated. You can enter a selector representing a message attribute that is expanded to a value at runtime. For example, by default API Gateway specifies the original path the end user requested as the resource:

    ${http.request.uri}

**Action**:\
The user must be authenticated for a specific action on the protected resource. By default, API Gateway takes this action from the HTTP verb used in the incoming request. You can use the following selector to get the HTTP verb:

    ${http.request.verb}

Alternatively, any user-specified value can be entered. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Selector Expression to retrieve session**:\
Enter the name of the message attribute that contains the session cookie SiteMinder generated. By default, the token is stored in the `siteminder.session`
message attribute.
