{
"title": "Oracle Access Manager authorization",
"linkTitle": "Oracle Access Manager authorization",
"date": "2019-10-17",
"description": "The **Authorization**\\nfilter enables you to authorize an authenticated user for a particular resource against Oracle Access Manager (OAM). The user must first have been authenticated to OAM using HTTP basic or digest authentication (see [*HTTP basic authentication* on page 1](%3Ca%20href=)\\nor [*HTTP digest authentication* on page 1](%3Ca%20href=)). After successful authentication, OAM issues a Single Sign On (SSO) token, which can then be used instead of the user name and password. "
}
﻿
<div id="p_connector_oam_authz_over">

Overview
--------

The **Authorization**
filter enables you to authorize an authenticated user for a particular resource against Oracle Access Manager (OAM). The user must first have been authenticated to OAM using HTTP basic or digest authentication (see [*HTTP basic authentication* on page 1](authn_http_basic.htm)
or [*HTTP digest authentication* on page 1](authn_http_digest.htm)). After successful authentication, OAM issues a Single Sign On (SSO) token, which can then be used instead of the user name and password.

See also [*Oracle Access Manager certificate authentication* on page 1](connector_oam_authn_cert.htm).

</div>

<div id="p_connector_oam_authz_gen_conf">

General settings
----------------

Configure the following general fields:

**Name**:\
Enter a descriptive name for this filter to display in a policy.

**Attribute Containing SSO Token**:\
Enter the name of the message attribute that contains the user's SSO token. This attribute is populated when authenticating to Oracle Access Manager using *HTTP basic authentication* on page 1
or *HTTP digest authentication* on page 1. By default, the SSO token is stored in the `oracle.sso.token`
message attribute.

</div>

<div id="p_connector_oam_authz_request_conf">

Request settings
----------------

Configure the following fields to authorize a user for a particular resource against Oracle Access Manager:

**Resource Type**:\
Enter the resource type for which you are requesting access (for example, `http`
for access to a web-based URL).

**Resource Name**:\
Enter the name of the resource for which the user is requesting access. The default is `//hostname${http.request.uri}`, which contains the original path requested by the client.

**Operation**:\
In most access management products, it is common to authorize users fora limited set of actions on the requested resource. For example, users with management roles may be able to write (HTTP POST) to a certain web service, but users with more junior roles might only have read access (HTTP GET) to the same service.

You can use this field to specify the operation to grant the user access to on the specified resource. By default, this field is set to the `http.request.verb`
message attribute, which contains the HTTP verb used by the client to send the message to the API Gateway (for example, POST).

**Include Query String**:\
Select whether the OAM server uses the HTTP query string parameters to determine the policy that protects this resource. This setting is optional if the configured policies do not rely on the query string parameters. This setting is not configured by default.

</div>

<div id="p_connector_oam_authz_sdk_config">

OAM Access SDK settings
-----------------------

Configure the following fields for the OAM Access SDK:

**OAM ASDK Directory**:\
Enter the path to your OAM Access SDK directory. For more details on the OAM Access SDK, see your Oracle Access Manager documentation.

**OAM ASDK Compatibility Mode**:\
Select the Oracle Access Manager server version to which this filter connects (`OAM 10g`
or `OAM 11g`). Defaults to `OAM 11g`.

</div>
