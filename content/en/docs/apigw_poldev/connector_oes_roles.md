{
"title": "Get roles from Oracle Entitlements Server 10g",
"linkTitle": "Get roles from Oracle Entitlements Server 10g",
"date": "2019-10-17",
"description": "This filter enables you to get the set of roles that are assigned to an identity for a specific resource (for example, web service) and a specific action (for example, HTTP POST) from Oracle Entitlements Server (OES) 10g. "
}
﻿
<div id="p_connector_oes_roles_over">

Overview
--------

This filter enables you to get the set of roles that are assigned to an identity for a specific resource (for example, web service) and a specific action (for example, HTTP POST) from Oracle Entitlements Server (OES) 10g.

See also [*Oracle Entitlements Server 10g authorization* on page 1](connector_oes_authz.htm).

</div>

<div id="p_connector_oes_roles_general">

Configuration
-------------

Configure the following fields:

<div id="p_connector_oes_roles_settings">

### Settings

Configure the following fields on the **Settings**
tab:

**Resource**:\
Enter the URL of the target resource (for example, web service). Alternatively, if this policy is reused for multiple services, enter a URL using message attribute selectors, which are expanded at runtime to the value of the specified attribute. For example:

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

</div>

<div id="p_connector_oes_roles_context">

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
