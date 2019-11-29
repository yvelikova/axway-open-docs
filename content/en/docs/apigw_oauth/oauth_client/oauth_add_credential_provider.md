---
title: Add OAuth provider
linkTitle: Add OAuth provider
date: 2019-11-18
description: To configure a new OAuth 2.0 provider, right-click **OAuth2**, and select **Add OAuth2 Client Credential**. Complete the following fields on the **OAuth2 Provider Configuration** dialog.
weight: 5
---

**Profile Name**:\
Enter a suitable name for this OAuth provider configuration (for example, `Google` or `Microsoft`).

**Authorization Endpoint**:\
Enter the URL of the OAuth provider's authorization endpoint (for example, `https://accounts.google.com/o/oauth2/auth`). This is a public URL where a resource owner is directed to authorize a client application. This is used in the authorization code flow.

**Token Endpoint**:\
Enter the URL of the OAuth provider's token endpoint (for example, `https://accounts.google.com/o/oauth2/token`). This is a public URL where a client application can request a token.

**Token Store**:\
Click the browse button to choose an access token store. This is where received tokens are persisted.

You can configure OAuth access token stores globally under the **Environment Configuration > Libraries** node in the Policy Studio tree. These can then be selected in the **Access Token Store** field. For more details on configuring access token stores, see [Manage client access tokens](/docs/apigw_oauth/oauth_client/oauth_client_access_tokens).

**Store OAuth State in this Cache**:\
Click the browse button to choose a cache. This is where the state of an authorization request is stored. This is used in the authorization code flow to maintain state when the user is directed to the authorization server for authorization.

{{< alert title="Tip" color="primary" >}}To change the configuration of an existing OAuth 2.0 provider, click the OAuth client credential node, and edit the settings on the **OAuth2 Provider Settings** tab of the **OAuth2 Credential Profile** window.{{< /alert >}}
