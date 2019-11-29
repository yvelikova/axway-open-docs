---
title: OpenID Connect flow
linkTitle: OpenID Connect flow
date: 2019-11-28
description: The OpenID Connect process follows the OAuth 2.0 three-legged authorization code flow (see [Authorization code grant (or web server) flow](/docs/apigw_oauth/oauth_flows/oauth_flows_auth_code)), but with the additional concepts of an ID token and a UserInfo endpoint.
weight: 2
---

The authorization code flow consists of the following steps:

1. Relying party prepares an authentication request containing the desired request parameters.
2. Relying party sends the request to the authorization server by redirecting the end user via their user agent (browser).
3. Authorization server authenticates the end user.
4. Authorization server obtains end user consent and authorization.
5. Authorization server sends the end user back to the relying party with an authorization code.
6. Relying party requests a response using the authorization code at the token endpoint.
7. Client receives a response that contains an ID token and access token in the response body.
8. Client validates the ID token and retrieves the end user's subject identifier.

On successful completion of these steps the user can be considered authenticated in the relying party's application. At this point the client application can make a request for further claims and, if required, create a local record of this user for future use, or retrieve a previously created user record.

The following diagram illustrates these steps.

![OpenID Connect flow](/Images/OAuth/APIgw_Relationship_Oauth2.png)
