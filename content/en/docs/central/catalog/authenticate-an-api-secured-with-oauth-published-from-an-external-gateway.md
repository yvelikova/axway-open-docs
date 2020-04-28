---
title: Authenticate an API secured with OAuth published from an external gateway
description: Demonstration on how to authenticate an API that is secured with
  OAuth credentials that is published from an external gateway
---
The Unified Catalog has the ability to test API Methods for OAS2 and OAS3 API's. The current support for testing API's published from an external gateway from the browser includes API's secured with an API key, JWT authentication, and no authentication at all. At this time there is no support for OAuth from the catalog in the browser. You may still publish your API's to the Unified Catalog if your API is secured with OAuth. We recommend you use a tool like Postman for testing your API's. You can reference their OAuth documentation [here](https://learning.postman.com/docs/postman/sending-api-requests/authorization/#oauth-20).

To begin read through the Postman documentation on OAuth. Then, navigate to the Unified Catalog, and go to the details page of an API secured with OAuth that is published from an external gateway.

![Download specification from catalog](/Images/central/catalog/catalog-details.png)

Click the Download button from the catalog details page to download the specification file. Once the file is downloaded open Postman and click the button that says "Import".

![Postman import specification](/Images/central/catalog/postman-import.png)

This will allow you to select a file from your computer. Upload the file downloaded from the catalog and generate a Postman Collection from the file.

![Postman select a file for import](/Images/central/catalog/postman-select-file.png)

![Postman generate a collection](/Images/central/catalog/postman-generate-collection.png)

After the Postman Collection has been created from the catalog item specification  click the three dots that appear at the bottom right when hovering over the collection. After clicking the  three dots click the "Edit" button.

![Postman edit button](/Images/central/catalog/postman-edit-dots.png)

This will open up a modal where you can edit the authorization for the API. Click the "Authorization" tab, and then click the dropdown that is labeled "Type" and select "OAuth 2.0".

![Postman edit auth](/Images/central/catalog/postman-edit-auth.png)

After selecting OAuth 2.0 click the button that appeared to the right that says "Get New Access Token".

![Postman get token button](/Images/central/catalog/postman-get-token-button.png)

This will open another modal with authorization details to retrieve the OAuth token. The details displayed here will depend on the API you have downloaded, and will not reflect every OAuth use case. Set the Callback URL to "https://www.postman.com/oauth2/callback". This value will need to be listed as an acceptable callback url defined within the application you are using to perform the OAuth login. Values like Client ID and Client Secret will be defined in the OAuth 2.0 application you have with the provider of the catalog item. These values also may or may not be needed depending on the Grant Type of the token.  Please check with the provider of the catalog item if you have questions on how to authenticate using OAuth 2.0. After filling out the details for the token click the "Request Token" button.

![Postman add token details](/Images/central/catalog/postman-token-details.png)

You will then be taken through the applications OAuth login flow. Sign in with your credentials to the application. Upon a successful login you will be re-directed back to Postman and presented with your OAuth token credentials. Finish up by clicking the "Update" button in the bottom right of the modal.

![Postman use new token](/Images/central/catalog/postman-use-token.png)

![Postman update collection authentication](/Images/central/catalog/postman-update-collection-auth.png)

After authenticating and setting the OAuth token expand the collection and select a method. Once you select a method click on the "Authorization" tab and then click the dropdown labeled "Type". Select "Inherit auth from parent" to use the new OAuth token.

![Postman select method](/Images/central/catalog/postman-select-method.png)

After setting the authentication you can then try the method by clicking the "Send" button.

![Postman try method](/Images/central/catalog/postman-try-method.png)