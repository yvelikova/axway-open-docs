---
title: Client Application Registry storage and settings
linkTitle: Client Application Registry storage and settings
date: 2019-11-18
description: By default, OAuth client application data is stored in a Key Property Store (KPS) backed by an Apache Cassandra database. For more details on KPS, see the [API Gateway Key Property Store User Guide](/bundle/APIGateway_77_KPSUserGuide_allOS_en_HTML5). For more details on Apache Cassandra, see [Install an Apache Cassandra database](/csh?context=301&product=prod-api-gateway-77) in the [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/).
weight: 4
---


## Relational database-backed Client Application Registry

The Client Application Registry KPS can also be backed by a relational database such as Oracle, MySQL, IBM DB2, or Microsoft SQL Server. For more information on KPS and database storage, see the [API Gateway Key Property Store User Guide](/bundle APIGateway_77_KPSUserGuide_allOS_en_HTML5).

### OAuth relational database schemas

The OAuth relational database schemas can be found in the following directory in your installation:

``` {space="preserve"}
INSTALL_DIR/apigateway/system/conf/sql/
```

## Data security

If you have set an encryption passphrase for API Gateway, the OAuth secret and API secret are encrypted in the Client Application Registry.

If you change the encryption passphrase at any point, you must re-encrypt the data in the Client Application Registry or you will not be able to connect to the Client Application Registry web-based interface.

To re-encrypt the data, use the `kpsadmin` tool, and select the option to `Re-encrypt All`. This re-encrypts all data in all tables in a collection. You are prompted for the old passphrase (needed to decrypt the data). The data is then re-encrypted with the current API Gateway passphrase. Repeat this process for each KPS collection.

For more information on the `kpsadmin` tool, see the [API Gateway Key Property Store User Guide](/bundle/APIGateway_77_KPSUserGuide_allOS_en_HTML5).

## Client Application Registry authentication settings

You can configure the Client Application Registry authentication settings in Policy Studio. Click **Environment Configuration > Server Settings** In the Policy Studio tree and select **Security > Client Application Registry**.

### Authentication settings

You can configure the following fields in the **Authentication Settings** section:

**Circuit for authentication**: \
Select a policy to use to authenticate the user. If you have deployed the OAuth server components (see [Deploy the OAuth service](/docs/apigw_oauth/deploy_oauth_config#Deploy2)), a sample policy `Client Registry AuthN-AuthZ` is provided. This policy authenticates the user credentials against the local user store and sets two required attributes on the message whiteboard, which are used to complete authentication and authorization process.

**Subject**:\
Enter a selector for the message attribute that contains the user ID (for example, `${authentication.subject.id}`).

**Role**:\
Enter a selector for the message attribute that contains the user role (for example, `${authentication.subject.role}`).

**Email**:\
Enter a selector for the message attribute that contains the user email (for example, `${user.email}`).

### Cookie settings

You can configure the following fields in the **Cookie Settings** section:

**Cookie Name**:\
Name of the session cookie. Defaults to `CLIENTREGISTRYCOOKIE`.

**Cookie Path**:\
Path value for the `Set-Cookie` header. Defaults to `/`.

**Cookie Domain**:\
Domain value for the `Set-Cookie` header.

**Cookie Max Age**:\
The length of time until the cookie expires. Defaults to 1 day.

**Secure**:\
Select the check box to add a `secure` flag to the `Set-Cookie` header.

**HttpOnly**:\
Select the check box to add a HttpOnly flag to the `Set-Cookie` header.
