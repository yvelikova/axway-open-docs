{
"title": "Sun Access Manager SSO token validation",
"linkTitle": "Sun Access Manager SSO token validation",
"date": "2019-10-17",
"description": "This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](%3Ca%20href=)."
}
﻿

{{< alert title="Note" color="primary" >}}This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](part_oam_filters.htm).{{< /alert >}}

Sun Access Manager is an identity management product that provides authentication, authorization, and single sing-on (SSO) capabilities. When a user authenticates to Sun Access Manager they are granted an SSO token, which they can use to obtain access to other services without having to reauthenticate at each service. Each service employs an access manager policy agent to simply validate the SSO token to determine whether or not to grant the user access to the requested resource.

API Gateway can act as an access manager policy agent in this manner through the use of the **SSO Token Validation** filter. This filter validates the SSO token that has already been stored in a specified message attribute.

{{< alert title="Note" color="primary" >}}This filter validates the SSO token only. It does not reauthenticate the user to Sun Access Manager.{{< /alert >}}

Configuration
-------------

Complete the following fields to validate the SSO token:

**Name**:\
Enter a name for the filter.

**Selector expression to retrieve SSO token ID**:\
Specify the name of the message attribute that contains the Sun Access Manager SSO token. Typically this token is obtained by authenticating to Sun Access Manager. In this case, the token is stored by default in the `sun.sso.token` message attribute.

Alternatively, the SSO token might have been stored within the message after an authentication event to Sun Access Manager, for example, in a SAML authentication or authorization statement. In such cases, API Gateway can retrieve the SSO token using the **Retrieve from Message** filter (see [Retrieve attribute from message](attributes_message.htm)) and store it in a message attribute, for example, the `sun.sso.token` attribute. This attribute can then be specified here.

Similarly, if the SSO token was inserted into an HTTP header, the **Retrieve from HTTP Header** filter (see Retrieve attribute from HTTP header) can be used to extract the token from the HTTP header and store it in a message attribute.
