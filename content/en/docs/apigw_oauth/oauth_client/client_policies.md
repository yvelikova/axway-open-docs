---
title: Client policies and filters
linkTitle: Client policies and filters
date: 2019-11-18
description: API Gateway provides a number of sample policies for when API Gateway is acting as an OAuth client. Sample policies are provided for the following OAuth providers.
weight: 2
---

* API Gateway
* Google
* SalesForce

The following Google sample policies are exposed by the OAuth2 Client API Keys Demo listener on the following paths:

| Sample policy                   | Exposed on path            | Description                                                                                                                                                                                                                                                                                                        |
|---------------------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Google Authorize                | `/client/google/authorize` | This policy is used in the authorization code flow when API Gateway is acting as an OAuth client. It redirects the resource owner's user agent to the Google authorization server, where they are asked to log in and grant access to the requested scope. It uses the **Redirect resource owner to Authz Server** filter (see [Redirect resource owner to authorization server](/docs/apigw_oauth/oauth_client_filters/oauth_client_redirect)).                                                                                                                                                                                                              |
| Google Access Calendar Resource | `/client/google/calendar`  | This policy is used to access the protected resource (Google Calendar). It uses the the **Retrieve OAuth Client Access Token from Token Storage**                                                       filter (see [Retrieve OAuth client access token from token storage](/docs/apigw_oauth/oauth_client_filters/oauth_client_get_token) to retrieve the access token received from Google from the API Gateway client access token store.                                                                                                      |
| Google Authorize Callback       | `/client/google/callback`  | This policy is used when Google returns the authorization code to the callback URL listener on API Gateway. It uses the **Get OAuth Access Token**                                                           filter (see [Get OAuth client access token](/docs/apigw_oauth/oauth_client_filters/oauth_client_authorise)) to exchange the authorization code for an access token.                                                                                                                                                                        |
To view the paths exposed by the OAuth2 Client API Keys Demo listener, select **Environment Configuration > Listeners > API Gateway > OAuth2 Client API Keys Demo > Paths** in the Policy Studio tree. In the Resolvers window, click on the policy associated with a path to view the sample policy. Alternatively, to view all of the sample policies, select **Policies > OAuth Client** in the Policy Studio tree.
