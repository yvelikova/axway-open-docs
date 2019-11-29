---
title: Register and manage client applications in API Manager
linkTitle: Register and manage client applications in API Manager
date: 2019-11-28
description: In the API Manager web-based interface you can use the **Client Registry** > **Applications** tab to create and edit client applications and give them access to the APIs virtualized in API Manager. When an application is created, you can set authentication, quota, and sharing settings on the appropriate tab.
weight: 4
---

{{< alert title="Note" color="primary" >}}The API administrator must first specify the APIs that an organization is allowed to access before any of its client applications can have access to them. In API Manager, you can only add APIs to an application when they have been added to the organization.{{< /alert >}}

To register a new client application, click the **New application** button.

To edit an existing client application, click the application name in the list of applications. You can edit the following:

* On the **Application** tab, you can add APIs that the client application can access in the API ACCESS section.
* On the **Authentication** tab, you can add API keys, OAuth credentials, and external OAuth credentials for the application.

You can also add OAuth scopes at the client application level if you have enabled global scopes as described in [Enable global scopes in API Manager](/docs/apigw_oauth/apimgr_resource_server/apimgr_scopes/).

* On the **Quota** tab, you can override the application-default quota and specify application-specific quota rules.
* On the **Sharing** tab, you can manage access to the application for specified users.

![Manage client applications in API Manager](/Images/OAuth/api_mgmt_app.png)

For more information on registering and managing client applications in API Manager, see the [API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/).
