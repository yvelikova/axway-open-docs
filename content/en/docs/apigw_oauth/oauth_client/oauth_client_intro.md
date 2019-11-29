---
title: Introduction to API Gateway OAuth client
linkTitle: Introduction to API Gateway OAuth client
date: 2019-11-18
description: OAuth is an open standard for authorization that enables client applications to access server resources on behalf of a specific resource owner. OAuth also enables resource owners (end users) to authorize limited third-party access to their server resources without sharing their credentials.
weight: 1
---

API Gateway can act as the client application in an OAuth 2.0 scenario, and as such API Gateway can instigate the authorization process handle redirects, and request OAuth tokens from an authorization server. Received tokens are stored securely and subsequently used to access protected resources on behalf of users. This provides the following benefits:

* The OAuth client burden is moved to API Gateway
* The resource owner's credentials are never shared with the client application
* The access token is never shared with the resource owner's user agent

{{< alert title="Note" color="primary" >}}This document assumes that you are familiar with both the terms and concepts described in the [OAuth 2.0 Authorization Framework](http://tools.ietf.org/html/rfc6749)
and the OAuth server features of API Gateway (for more information, see [Introduction to OAuth 2.0 server](/docs/apigw_oauth/oauth_intro)). {{< /alert >}}

## API Gateway OAuth client features

API Gateway provides the following features to support OAuth 2.0 client functionality:

* Provider profiles for defining OAuth service providers and the applications registered with them.
* A set of preconfigured sample provider profiles for use with Axway, Google, and Salesforce OAuth services.
* Storage of received tokens.
* Support for the following OAuth flows:
  * Authorization code grant
  * Resource owner password credentials
  * Client credentials grant
  * JWT
  * SAML assertion

        {{< alert title="Note" color="primary" >}}The implicit grant type is not supported as it is designed to support client applications that do not have a secure server component, and as such it is not applicable for API Gateway acting as an OAuth client. {{< /alert >}}

The following diagram shows the role of API Gateway as an OAuth 2.0 client application accessing OAuth services provided by Axway API Gateway, Google, and Salesforce:

![OAuth client roles](/Images/OAuth/oauth_client_flow_with_apig.png)

The OAuth client capability of API Gateway supports the following scenario:

* An internal application needs to invoke a back-end API X, for example offered by a cloud application. API X is protected by OAuth using the provider’s implementation.
* The internal application does not invoke API X directly.
* Instead API X is proxied by API Gateway as API Y, and exposed into the enterprise for internal applications to use. A policy implements API Y, including all the OAuth client capability to invoke API X.
* The internal application invokes API Y using an internal authentication mechanism (for example, HTTP basic). The policy authenticates the internal application and then invokes API X using OAuth.

You can test the OAuth client capabilities of API Gateway using a web-based OAuth client demo. For more information, see [OAuth client demo](/docs/apigw_oauth/client_demo).

Contact Axway Support for more information on integrating your application with Google or Salesforce APIs using API Gateway and OAuth 2.0.

## OAuth 2.0 example client workflow

This example is similar to the [OAuth 2.0 example workflow](/docs/apigw_oauth/oauth_intro#oauth_server_workflow){.hyperlink}, but in this context API Gateway acts as a client, and the service provider is Google.

Assume that you, as a resource owner, are using a service that wants to access your Google calendar (a protected resource). The service is defined on API Gateway (API Gateway is an OAuth client). You do not want to reveal your Google credentials to API Gateway. This problem can be solved using the example OAuth 2.0 web server flow shown in the following diagram:

![OAuth client workflow](/Images/OAuth/APIgw_Oauth_ex_client_workfl.png)

Out of band, API Gateway preregisters with Google and obtains a client ID and secret. API Gateway also registers a redirect URL to receive the authorization code from Google when you, as resource owner, authorize access to your Google calendar. The application has also requested access to an API named `/google/calendar`, which has an OAuth scope of `calendar`.

The credentials received from Google are added to the Google client credential profile using Policy Studio (for more information, see [Add application credentials](/docs/apigw_oauth/oauth_client/oauth_add_client_credentials)). The provider profile is also configured with the authorization endpoint and token endpoint of the Google authorization server (for more information, see [Add OAuth provider](/docs/apigw_oauth/oauth_client/oauth_add_credential_provider)). The redirect URL is also created as an HTTP listener on API Gateway, with a filter for receiving the authorization code (for more information, see [Create a callback URL listener](/docs/apigw_oauth/oauth_client/oauth_callback)).

The steps in the diagram are described as follows:

1. Using a browser or mobile phone, you access a service defined on API Gateway, which needs to access your Google calendar on your behalf. The client application initiates the authorization flow by redirecting your browser to the authorization endpoint defined in the Google OAuth provider profile.
2. After following the redirect, you log in to your Google account and authorize the application for the requested scope.
       {{< alert title="Note" color="primary" >}}You have not shared your Google user name and password with the API Gateway application. At this point, you, as the resource owner, are no longer involved in the process.{{< /alert >}}

3. The authorization server then redirects your browser to the callback URL on API Gateway, along with an authorization code.
4. The API Gateway client application gets the authorization code, and must exchange this short-lived code for an access token. The client application sends another request to the authorization server, this time to the token endpoint, saying it has a code that proves the user has authorized it to access their calendar, and now issues the access token to be sent on to the API (resource server). The authorization server verifies the authorization code and returns an access token.
5. The client application sends the access token to the API (resource server), and receives the calendar information as requested.
