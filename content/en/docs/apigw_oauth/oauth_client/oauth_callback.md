---
title: Create a callback URL listener
linkTitle: Create a callback URL listener
date: 2019-11-18
description: The callback URL that is registered with an OAuth provider is implemented very simply by creating a matching relative path in an HTTP listener. The policy for this path needs only to add a **Redirect resource owner to Authz Server** filter (see [Redirect resource owner to authorization server](/docs/apigw_oauth/oauth_client_filters/oauth_client_redirect)). The filter must be configured with a reference to the relevant provider profile for this callback URL.
weight : 6
---

### Callback sample

In the client demo configuration the callback policy first checks if the current session is for an authenticated user. If it is an anonymous session the policy exchanges the code for an access token and  attempts to verify an ID token if one is received. If the ID token is valid it sets the `authentication.subject.id` to the `sub` identifier and saves the token. Using the `sub` the policy then checks the local user store for additional user information (in this case the local user store is a cache set up to simulate an actual user store). If an entry cannot be found for the user, a request is made to the provider's UserInfo endpoint using the access token. A successful request updates the local user store with the returned user data. Finally, a new authenticated session is created for the user and they are returned to the client application home page where they are now signed in. (In a real world example, a user might be presented with a form to alter or embellish the retrieved data before it is persisted).

![Sample callback policy](/Images/OAuth/openid_policy.png)

For more information on the client demo, see *OAuth client demo*.
