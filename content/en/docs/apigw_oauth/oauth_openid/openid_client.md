---
title: Build an OpenID Connect client
linkTitle: Build an OpenID Connect client
date: 2019-11-28
description: Building a simple OpenID Connect client involves adding only one additional step to the OAuth authorization code flow for an OAuth client (see [OAuth 2.0 example client workflow](/docs/apigw_oauth/oauth_client/oauth_client_intro#OAuth))
---

* Verify the ID token in the callback policy of the client application. To verify the ID token, use the **Verify ID Token** filter (see [Verify an OpenID Connect ID token](/docs/apigw_oauth/oauth_openid_filters/oauth_openid_verify)) after the **Get OAuth Access Token** filter (see [Get OAuth client access token](/docs/apigw_oauth/oauth_client_filters/oauth_client_authorise)). If the **Verify ID Token** filter relies on a JSON Web Key (JWK) set for verification, you must download (and optionally cache) the IdP key set. The client demo includes an example of using the Google JWK set (see [API Gateway OAuth client demo](/docs/apigw_oauth/client_demo)).

If the ID token is successfully verified, the filter passes and the following message properties are created:

* claim (`openid.idtoken.claim`): The claim is a JSON object representing basic claims about the user.
* subject (`openid.idtoken.sub`): The subject is the IdP's unique identifier for the user.

The policy designer can decide how best to use these properties. For example, the subject could be used to look up a local user store to see if there is an existing relationship with the user. If there is no existing user, the claim could be used to generate a new user record for future use. At this point, the user can be considered authenticated and a new session can be created. If an access token was returned it can be used to retrieve additional claims from the IdP's UserInfo endpoint.

{{< alert title="Note" color="primary" >}}When API Gateway is acting as a client application, the implicit grant type is not supported. {{< /alert >}}
