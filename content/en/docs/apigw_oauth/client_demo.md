---
title: API Gateway OAuth client demo
linkTitle: API Gateway OAuth client demo
date: 2019-11-28
description: API Gateway ships with a client demo that shows a typical use case for OAuth 2.0 and OpenID Connect.
weight: 14
---

There are a number of actors involved in this demo:

* API Gateway acts as both a OpenID Connect relying party (RP) and an OpenID Connect identity provider (IdP). It also acts as a basic OAuth client application, an OAuth authorization server (AS) and an OAuth resource server (RS).
* Google is configured as an OAuth AS and RS and as an OpenID Connect IdP
* Salesforce is configured as an OAuth AS and RS but not as an OpenID Connect IdP.

To complete the configuration for Google and Salesforce you must register a client application with each provider, and update the relevant provider profiles with the received client ID and secrets. For more information, see [Configure OAuth client application credentials](/docs/apigw_oauth/oauth_client/oauth_client_credentials).

When you connect to the client demo (for example, at `https://localhost:8088`), a login page is displayed:

![Client demo login](/Images/OAuth/demo_login.png)

This page presents three login options:

1. Enter a user name and password and click **Sign In**. When you sign in with this option, API Gateway acts as a direct authentication server. This is regular form-based authentication backed by the relevant filter. The user credentials are checked against the local user store and a session is created for a valid user. After being authenticated the user can instantiate an OAuth 2.0 authorization flow to get an access token for one of the configured OAuth authentication servers.
2. **Sign in with API Gateway**. When you sign in with this option API Gateway acts as both the RP and the corresponding IdP. The IdP role is conceptually a separate API Gateway instance but for the purposes of the demo a single instance fulfills both roles. This option causes the API Gateway as RP to issue an authorization redirect through the user agent to the IdP. The request includes scopes for an ID token and a regular access token. After being authenticated the access token can be used to access a protected resource as well as the UserInfo endpoint.
3. **Sign in with Google**. When you sign in with this option the API Gateway acts as the RP with Google acting as the IdP. You must update the configuration in Policy Studio to add a valid set of Google OAuth credentials (see [Add application credentials](/docs/apigw_oauth/oauth_client/oauth_add_client_credentials)). This option redirects the user to Google for authentication and authorization. The authorization request asks for OpenID and access to the users calendar.

    {{< alert title="Note" color="primary" >}}The credentials you create with Google must have access to the Calendar and Google+ APIs.{{< /alert >}}

After successful authentication, you are presented with the following page:

![Client demo](/Images/OAuth/client_sample.png)

When using one of OpenID Connect options the user information presented on this page is acquired by accessing the UserInfo endpoint of the relevant IdP. The **Get Resource** button uses the received access token to access a protected resource (for example, the Google resource accessed is the user's Google calendar).

## Client policies

The majority of the work in this demo is carried out in the client policies. To support the different methods of authentication (form-based and OpenID Connect), the demo is configured to issue an anonymous session to start the process. This anonymous session is replaced with an updated user session after the user has been identified with either a successful form login or an ID token. For an example of the client policies used, see [Callback sample](/docs/apigw_oauth/oauth_client/oauth_callback#Callback).
