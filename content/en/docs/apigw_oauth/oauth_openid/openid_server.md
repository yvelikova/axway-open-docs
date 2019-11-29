---
title: Build an OpenID Connect IdP server
linkTitle: Build an OpenID Connect IdP server
date: 2019-11-28
description: To build an IdP server on top of an existing OAuth deployment, follow these steps.
weight: 3
---


1. Add a **Create ID Token** filter (see [Create an OpenID Connect ID token](/docs/apigw_oauth/oauth_openid_filters/oauth_openid_create)) to the token endpoint policy after the **Access Token using Authorization Cod** filter (see [Get access token using authorization code](/docs/apigw_oauth/oauth_auth_server/oauth_access_token_authz_code)). If API Gateway will also support implicit or hybrid grant types then add a **Create ID Token** filter to the authorization endpoint policy after the **Authorization Code Flow** filter (see [Consume authorization requests](/docs/apigw_oauth/oauth_auth_server/oauth_authz_code_flow)).
2. Create a User/Info endpoint. This is similar to any OAuth protected resource using a **Validate Access Token** filter (see [Validate access token](/docs/apigw_oauth/oauth_resource_server_filters/oauth_validate_token)) with a minimum scope requirement of `openid`. After a successful validation the UserInfo policy must create a JSON object response representing claims about the user associated with the access token. The user can be identified by the **Validate Access Token** filter with the `authentication.subject.id` message property. The following is a non-normative example of the JSON response:

``` {space="preserve"}
    {
     "kind": "APIGatewayOpenIdConnect",
     "gender": "femail",
     "sub": "sampleuser",
     "name": "Sample User",
     "given_name": "Sample",
     "family_name": "${User}",
     "picture": "https://URL.TO.IMAGE/",
     "email": "sampleuser@gatweway",
     "email_verified": "true",
     "locale": "en"
    }
```
