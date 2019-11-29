---
title: Set Bearer token in authorization header
linkTitle: Set Bearer token in authorization header
date: 2019-11-18
description: You can configure a OAuth credential profile to set a Bearer token in the authorization header on API Gateway when calling a resource server. This example uses a call policy with **Connect to URL** filter to call the resource server.
weight: 8
---

1. In the Policy Studio tree, click **External Connections > Client Credentials > OAuth2**.
2. On the OAuth Credentials tab, double-click the credential profile you want to edit. To create a new credentials profile, see [Add application credentials](/docs/apigw_oauth/oauth_client/oauth_add_client_credentials).
3. Call the Resource server:

    * Select the filter **Connect to URL**.
    * Select the **Authentication** tab.
    * Select a Credential profile.

4. Select the Client Credential. This links back to the access token store which holds the Access token you received from the OAuth2 server.
5. Invoke this filter to call the Resource Server. The Bearer token in the authorization header is set.
