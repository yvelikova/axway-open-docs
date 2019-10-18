{
"title": "Oracle Access Manager SSO token validation",
"linkTitle": "Oracle Access Manager SSO token validation",
"date": "2019-10-17",
"description": "The **SSO Token Validation**\\nfilter enables you to check an Oracle Access Manager Single Sign On (SSO) token to ensure that it is still valid. The SSO token is issued by Oracle Access Manager (OAM) after the API Gateway authenticates to it on behalf of an end user using [*HTTP basic authentication* on page 1](%3Ca%20href=)\\nor [*HTTP digest authentication* on page 1](%3Ca%20href=). After successfully authenticating to OAM, the SSO token is stored in the `oracle.sso.token`\\nmessage attribute."
}
﻿
<div id="p_connector_oam_token_over">

Overview
--------

The **SSO Token Validation**
filter enables you to check an Oracle Access Manager Single Sign On (SSO) token to ensure that it is still valid. The SSO token is issued by Oracle Access Manager (OAM) after the API Gateway authenticates to it on behalf of an end user using [*HTTP basic authentication* on page 1](authn_http_basic.htm)
or [*HTTP digest authentication* on page 1](authn_http_digest.htm). After successfully authenticating to OAM, the SSO token is stored in the `oracle.sso.token`
message attribute.

Oracle Access Manager SSO enables a client to send up its user name and password once, and then receive an SSO token (for example, in a cookie or in the XML payload). The client can then send up the SSO token instead of the user name and password.

See also [*Oracle Access Manager certificate authentication* on page 1](connector_oam_authn_cert.htm).

</div>

<div id="p_connector_oam_token_conf">

Configuration
-------------

Configure the following fields to validate an SSO token issued by Oracle Access Manager:

**Name**:\
Enter a descriptive name for the filter to display in a policy.

**Attribute Containing SSO Token ID**:\
Enter the name of the message attribute that contains the SSO token to validate. This attribute is populated when authenticating to Oracle Access Manager using *HTTP basic authentication* on page 1
or *HTTP digest authentication* on page 1. By default, the SSO token is stored in the `oracle.sso.token`
message attribute.

**OAM ASDK Directory**:\
Enter the path to your OAM Access SDK directory. For more details on the OAM Access SDK, see your Oracle Access Manager documentation.

**OAM ASDK Compatibility Mode**:\
Select the Oracle Access Manager server version to which this filter connects (`OAM 10g`
or `OAM 11g`). Defaults to `OAM 11g`.

</div>
