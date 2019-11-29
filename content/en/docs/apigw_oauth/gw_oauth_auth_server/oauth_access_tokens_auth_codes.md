---
title: Manage access tokens and authorization codes
linkTitle: Manage access tokens and authorization codes
date: 2019-11-18
description: API Gateway can store generated authorization codes and access tokens in its caches, in an Apache Cassandra database, or in a relational database. The authorization server issues tokens to clients on behalf of a resource owner. These tokens are used when authenticating subsequent API calls to the resource server. These issued tokens must be persisted so that subsequent client requests to the authorization server can be validated.
---

You can configure authorization code and access token stores under the **Environment Configuration > Libraries > OAuth2 Stores**
node in the Policy Studio tree. The authorization server can cache authorization codes and access tokens depending on the OAuth flow. The steps for adding an authorization code cache are similar to adding an access token cache.

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

For more details on API Gateway caches, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

### Store in a relational database

To store access tokens or authorization codes in a relational database, perform the following steps:

1. Create the supporting schema required for the storage of access tokens, refresh tokens, and authorization codes using the SQL commands in `INSTALL_DIR\apigateway\system\conf\sql\DBMS_TYPE\oauth-server.sql` where `DBMS_TYPE` is the database management system being used. Schema are provided for Microsoft SQL Server, MySQL, Oracle, and IBM DB2.
2. Right-click **Access Token Stores** in the Policy Studio tree, and select **Add Access Token Store**.
3. In the dialog, select **Store in a database**, and select the browse button to display a database configuration dialog.
4. Complete the database configuration details. The following example uses a MySQL instance named `oauth_db`. For more details, see the[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

    ![Database Connection](/Images/OAuth/oauth_db_cxn.png)

### Store in Apache Cassandra

To store access tokens or authorization codes in Apache Cassandra, perform the following steps:

1. Right-click **Access Token Stores** in the Policy Studio tree, and select **Add Access Token Store**.
2. Select **Store in Cassandra**.
3. You can configure **Read** and **Write** consistency levels for the Cassandra database. These control how up-to-date and synchronized a row of data is on all of its replicas. The default **Read** setting of `ONE`means that the database returns a response from the closest replica. The default **Write** setting of `ANY` means that a write must be written to at least one replica node.

For more details on Apache Cassandra, see [Install an Apache Cassandra database](/csh?context=301&product=prod-api-gateway-77)
in the [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/).
