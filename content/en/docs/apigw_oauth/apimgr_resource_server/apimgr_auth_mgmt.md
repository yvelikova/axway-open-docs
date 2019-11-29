---
title: Authorization management in API Manager
linkTitle: Authorization management in API Manager
date: 2019-11-28
description: During the OAuth authorization process, the OAuth authorization server asks a resource owner to authorize access to a given set of scopes requested by the client application. If the resource owner accepts the authorization request, the client application can interact with the OAuth authorization server to obtain an access token and subsequently access the resource owner's protected resources.
weight: 3
---

OAuth authorizations are stored in the Authorizations table in the OAuth KPS collection. This is a hidden KPS collection that is not visible in Policy Studio by default. For more information on viewing hidden KPS collections in Policy Studio, see the
[API Gateway Key Property Store User Guide](/bundle/APIGateway_77_KPSUserGuide_allOS_en_HTML5).

There is only one authorization record per client application/resource owner. When a client application requests authorization and a record already exists for the client application/resource owner, the resource owner is only asked to grant access to any additional scopes requested, and not to the scopes previously authorized. If the resource owner grants access, the authorization record is updated to include the additional scopes.

There are several ways to view the OAuth authorizations:

* API Manager – See [View and revoke OAuth authorizations in API Manager](#Revoke)
* REST API – For more information, see the [API Manager REST API](https://support.axway.com/htmldoc/1433378) 
* `kpsadmin` tool – For more information, see the [API Gateway Key Property Store User Guide](/bundle/APIGateway_77_KPSUserGuide_allOS_en_HTML5)

## View and revoke OAuth authorizations in API Manager{#Revoke}

API Manager enables you to view and revoke OAuth authorizations that have been granted to client applications by resource owners. This enables you to manage all client application authorizations to access OAuth-protected APIs. This also means that resource owners do not need to reauthorize application requests.

To view the OAuth authorizations in API Manager, select **Policy Management** > **OAuth Authorizations**.

![Manage OAuth authorizations](/Images/OAuth/oauth_authorizations.png)

For each client application, the following details are displayed:

* Application – The name of the client application
* Owner – The resource owner that granted the authorization
* Scopes – The scopes that the resource owner is allowing this client application to access

To revoke an authorization, select the check box next to the authorization, and select ****Manage selected** > Delete selected item**.

When client applications are authorized to access OAuth-protected APIs, they are issued with an access token and optionally a refresh token. Revoking an OAuth authorization means that the access and refresh tokens that the client application has are no longer valid.

For more details, see the [API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/).
