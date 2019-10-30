{
"title": "Oracle Access Manager SSO session logout",
"linkTitle": "Oracle Access Manager SSO session logout",
"date": "2019-10-17",
"description": "The **Log out session**\\nfilter enables you to log out a session from Oracle Access Manager by invalidating the SSO token that is associated with this session."
}
﻿
<div id="p_connector_oam_logout_over">

Overview
--------

The **Log out session**
filter enables you to log out a session from Oracle Access Manager by invalidating the SSO token that is associated with this session.

See also [*Oracle Access Manager certificate authentication* on page 1](connector_oam_authn_cert.htm).

</div>

<div id="p_connector_oam_logout_conf">

Configuration
-------------

Configure the following fields to explicitly log out (invalidate)an SSO token from Oracle Access Manager:

**Name**:\
Enter a descriptive name for this filter to display in a policy.

**Attribute Containing SSO Token ID**:\
Enter the name of the message attribute that contains the SSO token to invalidate. This attribute is populated when authenticating to Oracle Access Manager using [*HTTP basic authentication* on page 1](authn_http_basic.htm)
or [*HTTP digest authentication* on page 1](authn_http_digest.htm). By default, the SSO token is stored in the `oracle.sso.token`
message attribute.

**OAM ASDK Directory**:\
Enter the path to your OAM Access SDK directory. For more details on the OAM Access SDK, see your Oracle Access Manager documentation.

**OAM ASDK Compatibility Mode**:\
Select the Oracle Access Manager server version to which this filter connects (`OAM 10g`
or `OAM 11g`). Defaults to `OAM 11g`.

</div>
