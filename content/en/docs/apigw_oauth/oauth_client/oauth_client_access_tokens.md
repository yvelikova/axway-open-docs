---
title: Manage client access tokens
linkTitle: Manage client access tokens
date: 2019-11-18
description: You can configure client access token stores under the **Environment Configuration > Libraries > OAuth2 Stores** node in the Policy Studio tree. API Gateway can store client access tokens in its cache, in an embedded database, or in a relational database. For more information on the persistent storage options, see [Manage access tokens and authorization codes](/docs/apigw_oauth/gw_oauth_auth_server/oauth_access_tokens_auth_codes).
weight: 7
---

To store client access tokens in a relational database, create the supporting schema using the `oauth-client.sql` SQL scripts that you can find in the following directory:

``` {space="preserve"}
    INSTALL_DIR/apigateway/system/conf/sql/
```

OAuth client access tokens are purged on expiry. After a successful token request the OAuth client access token (and potentially a refresh token) are stored in persistent storage. OAuth authorization servers usually return an expiry with the access token, otherwise the default expiry of 3600 seconds is used. An expiry is not usually returned with a refresh token, but a default expiry of 30 days is used. You can alter these expiry settings in the **Client Token Cleanup Settings** section of the client access token store.

{{< alert title="Note" color="primary" >}}For client access token stores backed by a database, you can configure the **Purge expired tokens** field to perform a purge (for example, run a query to remove tokens) at a specified interval.{{< /alert >}}
