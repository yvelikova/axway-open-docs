---
title: Scopes in API Manager
linkTitle: Scopes in API Manager
date: 2019-11-28
description: API Manager supports an explicit API model with scopes assigned to APIs during API registration.
weight: 2
---

When a client application is authorized (granted access) to use an API, then all the API’s scopes are associated with (available to) that application. When the client application makes an authorization request, it includes the scopes it is requesting in the request. In the authorization code flow, these scopes are displayed to the resource owner and the resource owner can select which scopes are granted to the client application.

## Enable global scopes in API Manager

To enable OAuth scopes at the level of the client application, in API Manager select **Settings > API Manager Settings > General settings > Enable application scopes**. This allows API administrators to create application-level scopes to permit access to OAuth resources that are not covered by API-level scopes. This setting can be used if you are using the API Gateway global scopes model. For more information, see [Scopes in API Gateway](/docs/apigw_oauth/gw_oauth_resource_server/oauth_scopes).

When you select the **Enable application scopes** setting, you can configure the scopes that a client application can access. When editing a client application in API Manager, select the **Authentication** tab. In the **Application Scopes** section you can specify scopes as free-form text or select a scope from a list of known configured scopes. You can also select a scope as a default scope for the client application.

For more information on API Manager settings, see the [API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/).
