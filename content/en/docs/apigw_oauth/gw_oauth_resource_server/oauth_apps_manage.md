---
title: Manage client applications in the Client Application Registry
linkTitle: Manage client applications in the Client Application Registry
date: 2019-11-18
description: API Gateway provides the Client Application Registry web-based interface for managing client applications. API Gateway also provides the Client Application Registry REST API to enable you to manage client applications on the command line. 
weight: 2
---

You can access the Client Application Registry web interface at the following URL: https://localhost:8089

{{< alert title="Note" color="primary" >}}You must perform the steps described in [Set up as an OAuth server](/docs/apigw_oauth/oauth_server_setup_part) (for example, enable the OAuth endpoints and import or migrate client applications) before you can manage client applications using the Client Application Registry. {{< /alert >}}

Log in using the Client Application Registry user name and password.

To register a new client application, click the **New application** button.

To edit an existing client application, click the application name in the list of applications. You can add API keys, OAuth credentials, and OAuth scopes for the application. For more information on OAuth scopes, see [Manage OAuth scopes in the Client Application Registry](oauth_scopes).

![Edit application in Client Application Registry](/Images/OAuth/oauth_app_reg_ui_detail.png)
