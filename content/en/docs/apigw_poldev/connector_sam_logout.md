{
"title": "Sun Access Manager SSO session logout",
"linkTitle": "Sun Access Manager SSO session logout",
"date": "2019-10-17",
"description": "This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](%3Ca%20href=)."
}
﻿

{{< alert title="Note" color="primary" >}}This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](part_oam_filters.htm).{{< /alert >}}

Sun Access Manager is an identity management product that provides authentication, authorization, and single sign-on (SSO) capabilities. When a user authenticates to Sun Access Manager, they are granted an SSO token, which they can use to obtain access to other services without having to reauthenticate at each service. Each service employs an access manager policy agent to validate the SSO token to determine whether to grant the user access to the requested resource.

API Gateway can act as an access manager policy agent in this manner through the use of the **Log out session** filter. This filter can be used to invalidate an SSO token that has been obtained from Sun Access Manager. After a token has been invalidated, the user is effectively logged out of all services that are protected by the Sun Access Manager server. The user is no longer able to use the token and so must reauthenticate to access manager to obtain an SSO token again.

Configuration
-------------

Complete the following fields to configure this filter:

**Name**:\
Enter an appropriate name for the filter.

**Selector expression to retrieve SSO token ID**:\
Specify the name of API Gateway message attribute that contains the SSO token to log out from Sun Access Manager. Typically this token is obtained by authenticating to Sun Access Manager. In this case, the token is stored by default in the `sun.sso.token` message attribute.

Alternatively, if the SSO token is inserted into an HTTP header (for example, as a cookie), you can use the **Retrieve from HTTP Header** filter (see [Retrieve attribute from HTTP header](attributes_http_header.htm)) to extract the token from the HTTP header, and store it in the specified message attribute (for example, the `sun.sso.token`
attribute).

Similarly, the SSO token might have been stored in the message after an authentication event to Sun Access Manager (for example, in a SAML authentication or authorization statement). In such cases, API Gateway can retrieve the SSO token using the **Retrieve from Message** filter (see Retrieve attribute from message), and then store it in a message attribute.
