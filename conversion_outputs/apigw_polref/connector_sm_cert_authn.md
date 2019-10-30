{
"title": "CA SiteMinder certificate authentication",
"linkTitle": "CA SiteMinder certificate authentication",
"date": "2019-10-17",
"description": "CA SiteMinder can authenticate end users and authorize them to access protected web resources. When API Gateway retrieves an X.509 certificate from a message or during an SSL handshake, it can use the **Certificate Authentication** filter to authenticate to SiteMinder on behalf of the user using the certificate. SiteMinder decides whether the user should be authenticated, and API Gateway then enforces this decision."
}
﻿

CA SiteMinder can authenticate end users and authorize them to access protected web resources. When API Gateway retrieves an X.509 certificate from a message or during an SSL handshake, it can use the **Certificate Authentication** filter to authenticate to SiteMinder on behalf of the user using the certificate. SiteMinder decides whether the user should be authenticated, and API Gateway then enforces this decision.

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

**Single Sign-On Token**:\
By default, when an end user has been authenticated for a given resource, SiteMinder generates a *single sign-on token* (a session cookie). API Gateway stores this cookie in a user-specified message attribute. API Gateway returns the cookie to the end user along with the response. The end user can then pass this cookie with future requests to API Gateway. When API Gateway receives such a request, it can validate the session cookie using the **Session Validation** filter. The end user stays authenticated for the entire lifetime of the session cookie. As long as the session cookie is valid, API Gateway does not need to re-authenticate the end user against SiteMinder for every request. This increases throughput and performance considerably.

Typically, API Gateway copies the cookie to the `attribute.lookup.list` message attribute using the **Copy / Modify Attributes**
filter, before inserting the cookie into a SAML attribute statement using the **Insert SAML Attribute Assertion** filter. The attribute statement is then returned to the end user to be used use in subsequent requests.

**Put Token in Message Attribute**:\
Enter the name of the message attribute where you wish to store the session cookie. By default, the cookie is stored in the `siteminder.session` attribute.

For more details how to integrate API Gateway with SiteMinder, see the
[API Gateway Authentication and Authorization Integration Guide](/bundle/APIGateway_77_AuthAuthIntegrationGuide_allOS_en_HTML5)
.
