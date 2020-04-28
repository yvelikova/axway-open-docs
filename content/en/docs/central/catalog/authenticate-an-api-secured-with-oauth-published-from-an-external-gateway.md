---
title: Authenticate an API secured with OAuth published from an external gateway
description: Demonstration on how to authenticate an API that is secured with
  OAuth credentials that is not managed by AMPLIFY Central
---
The Unified Catalog has the ability to test API Methods for OAS2 and OAS3 API's. The current support for testing methods from the browser includes API's secured with an API key, JWT authentication, and no authentication at all. At this time there is no support for OAuth from the catalog in the browser. You may still publish your API's to the Unified Catalog even if your API is secured with OAuth. The only limitation is that you cannot use the built in support for trying methods from the browser. We recommend you use a tool like Postman for testing your API's. You can reference their OAuth documentation [here](https://learning.postman.com/docs/postman/sending-api-requests/authorization/#oauth-20).

To get started go through the Postman documentation linked above. This article will demonstrate authenticating your API. To get started open up postman, and create a request to your API.