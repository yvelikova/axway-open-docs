---
title: Retrieve OAuth client access token from token storage
linkTitle: Retrieve OAuth client access token from token storage
date: 2019-11-18
description: You can use the **Retrieve OAuth Client Access Token from Token Storage** filter to retrieve a stored access token from a client access token store.
weight: 6
---

## Overview

Tokens received from OAuth providers are stored in a **Client Access Token Store**. You can configure client access token stores under the **Environment Configuration > Libraries > OAuth2 Stores** node in the Policy Studio tree. Similar to an **Access Token Store**, this store can be backed by an API Gateway cache (default), a relational database, or an Apache Cassandra database. For more details on client access token stores, see [Manage client access tokens](/docs/apigw_oauth/oauth_client/oauth_client_access_tokens).

A configured token store is associated with an OAuth provider (see [Add OAuth 2.0 provider](/docs/apigw_oauth/oauth_client/oauth_add_credential_provider)) and is shared by all client applications registered with that provider.

These stored tokens can be retrieved by this filter by specifying the OAuth 2.0 provider profile (the client application registered with a provider) and the token key (for example, the authentication subject id of the current user). Stored tokens are indexed by the client ID of the the client application and the token key. If `authentication.subject.id` is not available, the client ID is used for both indexes. This is valid for grant types that treat the client application as the resource owner, that is, client credentials, JWT, and SAML (when no resource owner is specified).

If a valid token is found by this filter it is placed on the message board as `oauth.client.accesstoken`, and the filter passes. If the token is expired, or there is no token found, the filter fails (expired tokens are still placed on the message board). The fail path can be used to refresh an expired token or start the process of requesting a token. The client application is also placed on the message board, under the attribute name `oauth.client.application`, for use in subsequent filters.

## General settings

Configure the following general settings for the **Retrieve OAuth Client Access Token from Token Storage** filter:

**Name**:\
Enter a suitable name for this filter.

**Choose OAuth Token Key**:\
Enter the message attribute to be used as the key to lookup the token. Defaults to `${authentication.subject.id}`.

**Choose profile to be used for token request**:\
Click the browse button to select an OAuth 2.0 client credential profile.
