---
title: Resource server policies and filters
linkTitle: Resource server policies and filters
date: 2019-11-18
description: API Gateway provides a sample Resource Service policy that is exposed by the OAuth 2.0 Services listener on the path `/api/oauth/protected`. The Resource Service sample policy contains a **Validate Access Token** filter (see [Validate access token](/docs/apigw_oauth/oauth_resource_server_filters/oauth_validate_token)), which is responsible for validating the access token. 
weight: 1
---

![Sample Resource Service policy](/Images/OAuth/sample_resource_service_policy.png)

When an HTTP request for the protected resource comes into the listener, this request contains an Authorization Header containing the access token string. The **Validate Access Token** filter takes the access token string and looks it up in a token store. The token information returned from the store contains the scopes that were issued for this token, its expiry time, the ID of the resource owner, and the Client ID of the application for which it was issued. It also contains any additional information specified at token generation.

The filter checks that the token has not expired and that the token scopes match the scopes required. If the token has expired or the scopes do not match, the filter will fail. Otherwise, it will pass and the request can continue to be processed.

The **Validate Access Token** filter does not take into account the access rights of the resource owner or the HTTP verb used, only that the token has the required access (scopes). These considerations are intentionally left open for policy developers to manage as per their application's requirements. For example, a successfully passing filter will set the `authentication.subject.id` to that of the resource owner who originally authorized the token, and a subsequent filter could decide if the resource owner has individual rights to the resource, or the resource can be modified to represent a user specific resource.

Scopes defined in the filter can use selectors. This can be useful to tie the validation of a token to a request specific attribute, such as the HTTP verb. A filter scope defined as `${http.request.verb}` would ensure that the access token must have a scope called POST when the request is a POST, GET when the request is a GET, and so on. However, this type of configuration must be considered when defining the client application in the Client Application Registry, as to be able to request a token with scopes like POST and GET those scopes must be available to the application. For more information, see [Register and manage OAuth client applications](/docs/apigw_oauth/gw_oauth_resource_server/oauth_app_registration).

## Create custom OAuth protected resources

Protected resources are created in Policy Studio by simply adding a **Validate Access Token** filter to a policy that is reachable through a path in a listener. The following steps show an example of creating a suitable policy:

1. Create a policy called `Protected Resource`. In the Policy Studio tree, right click **Policies** and select **Add Policy**.
2. Drag and drop a **Validate Access Token** filter from the OAuth 2.0 filter category onto the policy canvas.
3. To configure the filter select the OAuth access token store against which the token value will be checked, and specify the scopes that must be associated with the token for the filter to pass. The following example specifies `scope.WRITE` and `${http.request.verb}`as the scopes. You can also change the expected location of the token string. This is typically in the Authorization Header, but nonstandard locations are also supported. For more information on the configuration options, see *Validate access token* on page 1.

![Validate Access Token example](/Images/OAuth/sample_resource_service_filter.png)

After you have created the policy, you can expose it on the existing path, `/api/oauth/protected`, or you can create a new path. For more information on configuring relative paths, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).
