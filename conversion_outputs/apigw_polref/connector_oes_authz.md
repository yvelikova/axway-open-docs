{
"title": "Oracle Entitlements Server 10g authorization",
"linkTitle": "Oracle Entitlements Server 10g authorization",
"date": "2019-10-17",
"description": "This filter enables you to authorize an authenticated user for a particular resource against Oracle Entitlements Server (OES) 10g. The user must first have been authenticated to OES 10g (for example, using [*HTTP basic authentication* on page 1](%3Ca%20href=)\\nor [*HTTP digest authentication* on page 1](%3Ca%20href=)). "
}
﻿
<div id="p_connector_oes_authz_over">

Overview
--------

This filter enables you to authorize an authenticated user for a particular resource against Oracle Entitlements Server (OES) 10g. The user must first have been authenticated to OES 10g (for example, using [*HTTP basic authentication* on page 1](authn_http_basic.htm)
or *HTTP digest authentication* on page 1).

This filter enables you to configure API Gateway to delegate authorization to OES 10g. You can configure API Gateway to authorize an authenticated user for a particular resource against OES 10g. Credentials used for authentication can be extracted from the HTTP Basic header, WS-Security Username Token, or the message payload. After successful authentication, the API Gateway can authorize the user to access a resource using OES 10g.

See also *Get roles from Oracle Entitlements Server 10g* on page 1.

</div>

<div id="p_connector_oes_authz_general">

Configuration
-------------

Configure the following fields:

<div id="p_connector_oes_authz_settings">

### Settings

Configure the following fields on the **Settings**
tab:

**Resource**:\
Enter the URL for the target resource (for example, web service). Alternatively, if this policy is reused for multiple services, enter a URL using message attribute selectors, which are expanded at runtime to the value of the specified attribute. For example:

    ${http.destination.protocol}://${http.destination.host}:${http.destination.port}${http.request.uri}

**Resource Naming Authority**:\
Enter `apigatewayResource`
to match the Naming Authority Definition loaded in the OES 10g settings. For more details, see
[Oracle Security Service Module settings (10g)](/csh?context=621&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Action**:\
Enter the HTTP verb (for example, `POST`, `GET`, `DELETE`, and so on). Alternatively, if this policy is reused for multiple services, enter a message attribute selector, which is expanded at runtime to the value of the specified attribute (for example, `${http.request.verb}`). For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Action Naming Authority**:\
Enter `apigatewayAction`
to match the Naming Authority Definition loaded in the OES 10g settings. For more details, see
[Oracle Security Service Module settings (10g)](/csh?context=621&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**How access request is processed**:\
Select one of the following options:

-   `ONCE`
-   Specifies that the authorization query is only asked once for a resource and action.
-   `POST`
-   Specifies that the authorization query is asked after a resource is acquired, but before it has been processed or presented.
-   `PRIOR`
-   Specifies that the authorization query is asked before a resource is acquired.

</div>

<div id="p_connector_oes_authz_context">

### Application Context

Configure the following field on the **Application Context**
tab:

**Application's Current Context**:\
Click **Add**
to specify optional Application Contexts as name-value pairs. Enter a **Name**
and **Value**
in the **Properties**
dialog. Repeat to specify multiple properties.

</div>

</div>
