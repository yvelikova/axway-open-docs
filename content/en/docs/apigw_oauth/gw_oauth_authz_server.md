---
title: API Gateway as an OAuth 2.0 authorization server
linkTitle: API Gateway as an OAuth 2.0 authorization server
weight: 40
date: 2019-11-18
description: Configure API Gateway as an OAuth authorization server using sample policies as a starting point, and set up a store for OAuth access tokens and authorization codes.
---

## Authorization server policies and filters

API Gateway provides the following sample policies that are exposed by the OAuth 2.0 Services listener on the following paths.

To view the paths exposed by the OAuth 2.0 Services listener, select **Environment Configuration > Listeners > API Gateway > OAuth 2.0 Services > Paths** in the Policy Studio tree. In the Resolvers window, click on the policy associated with a path to view the sample policy. Alternatively, to view all of the sample policies, select **Policies > OAuth 2.0** in the Policy Studio tree.

### Authorization Request sample policy

Exposed on path: `/api/oauth/authorize`

This policy is used in the authorization code grant flow to obtain an authorization code. It uses the **Authorization Code Flow** filter (see [Consume authorization requests](/docs/apigw_oauth/oauth_auth_server/oauth_authz_code_flow)). This policy is also used in the implicit grant flow to obtain an access token. It uses the **Create ID Token** filter (see [Create an OpenID Connect ID token](/docs/apigw_oauth/oauth_openid_filters/oauth_openid_create)).

### Access Token Service sample policy

Exposed on path: `/api/oauth/token`

This policy is used to obtain an access token. It calls another policy depending on the `grant_type` in the request: 

* For the authorization code grant flow it calls the Access Code policy, which uses the **Access token using Authorization Code** filter (see [Get access token using authorization code](/docs/apigw_oauth/gw_oauth_auth_server/oauth_access_tokens_auth_codes)) and the **Create ID Token** filter (see [Create an OpenID Connect ID token](/docs/apigw_oauth/oauth_openid_filters/oauth_openid_create)).
* For the resource owner password credentials flow it calls the Resource Owner Password Credentials policy, which uses the **Resource Owner Credentials** filter (see [Get access token using resource owner credentials](/docs/apigw_oauth/oauth_auth_server/oauth_resource_owner_credentials)).
* For the client credentials flow it calls the Resource Owner Password Credentials policy, which uses the **Access Token using Client Credentials** filter (see [Get access token using client credentials](/docs/apigw_oauth/oauth_auth_server/oauth_access_token_credentials)).
* For the JWT flow it calls the JWT policy, which uses the **Access Token using JWT** filter (see [Get access token using JWT](/docs/apigw_oauth/oauth_auth_server/oauth_access_token_jwt)).
* For the SAML flow it calls the SAML policy, which uses the **Access Token using SAML Assertion** filter (see [Get access token using SAML assertion](/docs/apigw_oauth/oauth_auth_server/oauth_access_token_saml)).
* For the refresh token flow it calls the Refresh policy, which uses the **Refresh Access Token** filter (see [Refresh access token](/docs/apigw_oauth/oauth_auth_server/oauth_access_token_refresh)).

### Revoke Token sample policy

Exposed on path: `/api/oauth/revoke`

This policy is used to revoke an access token or refresh token. It uses the **Revoke a Token** filter (see [Revoke token](/docs/apigw_oauth/oauth_auth_server/oauth_revoke_token)).

### Access Token Info sample policy

Exposed on path: `/api/oauth/tokeninfo`

This policy is used to request information about an access token. It uses the **Access Token Information** filter (see [Get access token information](/docs/apigw_oauth/oauth_auth_server/oauth_access_token_info)).

## Manage access tokens and authorization codes

API Gateway can store generated authorization codes and access tokens in its caches, in an Apache Cassandra database, or in a relational database. The authorization server issues tokens to clients on behalf of a resource owner. These tokens are used when authenticating subsequent API calls to the resource server. These issued tokens must be persisted so that subsequent client requests to the authorization server can be validated.

You can configure authorization code and access token stores under the **Environment Configuration > Libraries > OAuth2 Stores** node in the Policy Studio tree. The authorization server can cache authorization codes and access tokens depending on the OAuth flow. The steps for adding an authorization code cache are similar to adding an access token cache.

The authorization server offers the following persistent storage options for access tokens and authorization codes:

* API Gateway cache (default)
* Relational Database Management System (RDBMS)
* Apache Cassandra database

The following figure shows these options in Policy Studio:

![Add OAuth Token Store](/Images/OAuth/oauth_add_token_store.png)

The **Purge expired tokens every** setting enables you to configure a time interval in seconds after which a background process polls the database looking for expired access or refresh tokens or authorization codes and purges them.

### Store in a cache

To store access tokens or authorization codes in a cache, perform the following steps:

1. Right-click **Access Token Stores** in the Policy Studio tree, and select **Add Access Token Store**.
2. In the dialog, select **Store in a cache**, and select the browse button to display the cache configuration dialog.
3. Add a new cache (for example, `OAuth Access Token Cache`).

For more details on API Gateway caches, see [Configure caching](/docs/apigw_poldev/general_cache/).

### Store in a relational database

To store access tokens or authorization codes in a relational database, perform the following steps:

1. Create the supporting schema required for the storage of access tokens, refresh tokens, and authorization codes using the SQL commands in `INSTALL_DIR\apigateway\system\conf\sql\DBMS_TYPE\oauth-server.sql` where `DBMS_TYPE` is the database management system being used. Schema are provided for Microsoft SQL Server, MySQL, Oracle, and IBM DB2.
2. Right-click **Access Token Stores** in the Policy Studio tree, and select **Add Access Token Store**.
3. In the dialog, select **Store in a database**, and select the browse button to display a database configuration dialog.
4. Complete the database configuration details. The following example uses a MySQL instance named `oauth_db`.

    ![Database Connection](/Images/OAuth/oauth_db_cxn.png)

### Store in Apache Cassandra

To store access tokens or authorization codes in Apache Cassandra, perform the following steps:

1. Right-click **Access Token Stores** in the Policy Studio tree, and select **Add Access Token Store**.
2. Select **Store in Cassandra**.
3. You can configure **Read** and **Write** consistency levels for the Cassandra database. These control how up-to-date and synchronized a row of data is on all of its replicas. The default **Read** setting of `ONE` means that the database returns a response from the closest replica. The default **Write** setting of `ANY` means that a write must be written to at least one replica node.

For more details on Apache Cassandra, see [Administer Apache Cassandra](/docs/cass_admin/).
