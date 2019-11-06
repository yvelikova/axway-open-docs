{
"title": "Oracle Entitlements Server 11g authorization",
"linkTitle": "Oracle Entitlements Server 11g authorization",
"date": "2019-10-17",
"description": "This filter enables you to authorize an authenticated user for a particular resource against Oracle Entitlements Server (OES) 11g. The user must first have been authenticated to OES 11g (for example, using [*HTTP basic authentication* on page 1](%3Ca%20href=)\\nor [*HTTP digest authentication* on page 1](%3Ca%20href=)). "
}
﻿
<div id="p_connector_oes_authz11g_over">

Overview
--------

This filter enables you to authorize an authenticated user for a particular resource against Oracle Entitlements Server (OES) 11g. The user must first have been authenticated to OES 11g (for example, using *HTTP basic authentication* on page 1
or *HTTP digest authentication* on page 1).

This filter enables you to configure API Gateway to delegate authorization to OES 11g. You can configure API Gateway to authorize an authenticated user for a particular resource against OES 11g. Credentials used for authentication can be extracted from the HTTP Basic header, WS-Security Username Token, or the message payload. After successful authentication, the API Gateway can authorize the user to access a resource using OES 11g.

</div>

<div id="p_connector_oes_authz11g_config">

Configuration
-------------

Configure the following fields:

**Name**:\
Enter an appropriate descriptive name for this filter.

**Resource**:\
Enter the URL for the target resource to be authorized (for example, web service). Alternatively, if this policy is reused for multiple services, enter a URL using selectors, which are expanded at runtime to the value of the specified attributes. For example:

    ${http.destination.protocol}://${http.destination.host}:${http.destination.port}${http.request.uri}

**Action**:\
Enter the HTTP verb (for example, `POST`, `GET`, `DELETE`, and so on). Alternatively, if this policy is reused for multiple services, enter a selector, which is expanded at runtime to the value of the specified attribute (for example, `${http.request.verb}`). For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Environment/Context attributes**:\
Click **Add**
to specify optional Application Contexts as name-value pairs. Enter a **Name**
and **Value**
in the **Properties**
dialog. Repeat to specify multiple properties.

</div>
