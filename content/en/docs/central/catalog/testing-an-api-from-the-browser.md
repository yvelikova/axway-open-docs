---
title: Testing an API from the Browser
description: >
  Learn how to explore the API documentation and test an API from the browser
  using the built-in test capability.
---
The Unified Catalog has an inbuilt testing tool that allows you to explore the list of API endpoints and their related documentation, and test the API methods directly in the browser. It is built over the official Swagger.io and supports both OAS2 and OAS3 specifications. 

{{< alert title="Note" color="info" >}}Unified Catalog can contain APIs that have been registered in AMPLIFY Central as API proxies or APIs that have been published from external gateways. How you authenticate to make an API call from the browser depends on how the API has been published.{{< /alert >}}

## Authenticate an API with an API Key

Before you start: 

* You will need to create an application with an API key
* You will need to subscribe to an API with your application



To test your API that has been registered in AMPLIFY Central as proxy and it is secured with an API key:

* Select **Catalog** in the left navigation bar to open the **Explore Catalog** sub-menu
* Click an API asset in the list to see its details. 
* Click on the **Test Methods** tab. 
* Choose your **Application** from the list of existing apps. If you only have one, it is automatically selected for you.
* Select you **API Key** from the list of existing API keys. If you don't have an API Key, you can create one by clicking "**+",**  that is displayed next to the API Key list. 
* Execute an API method. It should be successful and return a`200 OK`response.

## Authenticate an API with OAuth

Before you start: 

* You will need to create an application within your third-party OAuth server.
* You must create an OAuth profile in your app. 
* You will need to subscribe to the API with your created app. 

To test your API that has been registered in AMPLIFY Central as proxy and it is secured with OAuth:

* Select **Catalog** in the left navigation bar to open the **Explore Catalog** sub-menu
* Click an API asset in the list to see its details. 
* Click on the **Test Methods** tab. 
* If you have more than one valid **OAuth profile**, choose the one to test. If you only have one, it is automatically selected for you.
* When you select a valid OAuth profile, you will see your Client ID displayed in a read-only field. This will assist you in generating an OAuth token from the correct application in your third-party OAuth server.
* After your third-party OAuth server has generated a valid OAuth token, paste that token into the **OAuth token** field. You can now attempt to make valid API calls with your API.

{{< alert title="Note" color="info" >}}The AMPLIFY Central OAuth proxy support is RFC 7662 compliant and it should work with any standard OAuth 2.0 authorization server. At this time, Okta is the only verified supported third-party OAuth provider. See more detailed configuration examples showing Okta as an integrated (external) authorization server in [Okta documentation](https://developer.okta.com/docs/guides/customize-authz-server/overview/).{{< /alert >}}

## Authenticate an API with JWT token

Before you start: 

* You will need to create an application with an JWT token.  See [Create a JWT token](https://axway-open-docs.netlify.app/docs/central/secure_api_jwt/#create-a-jwt-token)
* You will need to subscribe to an API with your application. See [Subscribe to an API](https://deploy-preview-672--axway-open-docs.netlify.app/docs/central/catalog/discover-and-consume-catalog-assets-3/#subscribe-to-an-api)

To test your API that has been registered in AMPLIFY Central as a proxy:

* Select **Catalog** in the left navigation bar to open the **Explore Catalog** sub-menu.
* Click an API asset in the list to see its details. 
* Click on the **Test Methods** tab. 
* Use the **Application ID** and **JWT Key ID** to create the JWT token.
* Paste your JWT token in the **JWT Token** field.
* Execute an API method. It should be successful and return a`200 OK`response.