---
title: Testing an API from the Browser
description: >
  Learn how to explore the API documentation and test an API from the browser
  using the built-in test capability.
---
The Unified Catalog has an inbuilt testing tool that allows you to explore the list of API endpoints and their related documentation, and test the API methods directly in the browser. It is built over the official Swagger.io and supports both OAS2 and OAS3 specifications. 

{{< alert title="Note" color="info" >}}Unified Catalog can contain APIs that have been registered in AMPLIFY Central as an API proxy or APIs that have been published from external gateways. How you authenticate to make an API call from the browser depends on how the API has been published. 
{{< /alert >}}

## Test an API secured with OAuth

The AMPLIFY Central OAuth proxy support is RFC 7662 compliant and it should work with any standard OAuth 2.0 authorization server. At this time, Okta is the only verified supported third-party OAuth provider. See more detailed configuration examples showing Okta as an integrated (external) authorization server in [Okta documentation](https://developer.okta.com/docs/guides/customize-authz-server/overview/).

Before you start: 

* You will need to create an application withing your third-party OAuth server.
* You must create an OAuth profile in your app. 
* You will need to subscribe to the API with your created app. 

To test your API that has been registered in AMPLIFY Central as proxy and it is secured with OAuth:

* Select **Catalog** in the left navigation bar to open the **Explore Catalog** sub-menu
* Click an API asset in the list to see its details. 
* Click on the **Test Methods** tab. 
* If you have more than one valid **OAuth profile**, choose the one to test. If you only have one, it is automatically selected for you.
* When you select a valid OAuth profile, you will see your Client ID displayed in a read-only field. This will assist you in generating an OAuth token from the correct application in your third-party OAuth server.
* After your third-party OAuth server has generated a valid OAuth token, paste that token into the **OAuth token** field. You can now attempt to make valid API calls with your proxy.

{{< alert title="Note" color="info" >}}If your token is invalid, expired, or empty, the API call will result in a`403: Unauthorized`response.{{< /alert >}}

## Test an API with JWT authentication

Before you start: 

* You will need to subscribe to the API 
* You need to create a JWT token. See [Create a JWT token](https://axway-open-docs.netlify.app/docs/central/secure_api_jwt/#create-a-jwt-token).

To test your API that has been registered in AMPLIFY Central as proxy:

* Select **Catalog** in the left navigation bar to open the **Explore Catalog** sub-menu.
* Click an API asset in the list to see its details. 
* Click on the **Test Methods** tab. 
* Use the **Application ID** and **JWT Key ID** on this screen to create the JWT token as detailed in [Create a JWT token](https://axway-open-docs.netlify.app/docs/central/secure_api_jwt/#create-a-jwt-token). 
* Paste your JWT token in the **JWT Token** field.
* Execute an API method. It should be successful and return a`200 OK`response.