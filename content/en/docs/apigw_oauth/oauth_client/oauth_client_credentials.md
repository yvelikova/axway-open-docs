---
title: Configure OAuth client application credentials
linkTitle: Configure OAuth client application credentials
date: 2019-11-18
description: OAuth 2.0 client credential profiles enable you to globally configure authentication settings for OAuth 2.0 as a client. An OAuth 2.0 credential profile is the combination of OAuth service provider details and a specific OAuth client application. An OAuth service provider defines the authorization and token endpoints. API Gateway includes the following preconfigured OAuth providers.
weight: 3
---

* API Gateway
* Google
* SalesForce

You can access the preconfigured OAuth providers and add client application credentials under the **Environment Configuration > External Connections > Client Credentials > OAuth2**
node in the Policy Studio tree. For more information, see [Add application credentials](/docs/apigw_oauth/oauth_client/oauth_add_client_credentials). You can also add new OAuth providers. For more information, see [Add OAuth 2.0 provider](/docs/apigw_oauth/oauth_client/oauth_add_credential_provider).

You must register client applications with the OAuth service provider (for example, Google) to obtain a client ID and secret. You can also register additional details with the service provider where required, such as the OAuth flow type and the redirect URL. The redirect URL is the location where the OAuth provider sends the authorization code. This is implemented on API Gateway as an HTTP listener. For more information, see [Create a callback URL listener](/docs/apigw_oauth/oauth_client/oauth_callback).

* Google applications can be registered at <https://cloud.google.com/console>
* SalesForce applications can be registered at [https://www.salesforce.com](https://www.salesforce.com/)
* API Gateway applications can be registered in the Client Application Registry (port 8089).

If you have installed API Manager, you can register API Gateway applications in API Manager (port 8075). For more information, see the
[API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/).

The API Gateway provider represents OAuth services running on an API Gateway. For more information on setting up the OAuth server on API Gateway, see [Set up as an OAuth 2.0 server](/docs/apigw_oauth/oauth_server_setup_part/). The API Gateway provider uses the existing OAuth server samples for authorization and token endpoints (for example, `https://127.0.0.1:8089/api/oauth/authorize` and `https://127.0.0.1:8089/api/oauth/token`). The Google and SalesForce provider settings ship with the current public endpoints.
