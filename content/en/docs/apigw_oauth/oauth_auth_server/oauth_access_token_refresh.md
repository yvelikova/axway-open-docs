---
title: Refresh access token
linkTitle: Refresh access token
date: 2019-11-18
description: The OAuth 2.0 **Refresh Access Token**\\nfilter enables an OAuth client to get a new access token using a refresh token. This filter supports the OAuth 2.0 refresh token flow. After the client consumer has been authorized for access, they can use a refresh token to get a new access token (session ID). This is only done after the consumer already has received an access token using either the web server or user-agent flow. For more details on supported OAuth flows, see [OAuth 2.0 authentication flows](/docs/apigw_oauth/oauth_flows/).
weight: 7
---

## Application validation settings

Configure the following fields on this tab:

**Find client application information from message**: \
Select one of the following:

* **In Authorization Header**: \
This is the default setting.
* **In Form Body**: \
The **Client Id** defaults to `client_id`, and **Client Secret** defaults to `client_secret`.

## Access token settings

Configure the following fields on this tab:

**Access Token will be stored here**: \
Click the browse button to select where to store the access token (for example, in the default **OAuth Access Token Store**). To add an access token store, right-click **Access Token Stores**, and select **Add Access Token Store**. You can store tokens in a cache, in a relational database, or in an Apache Cassandra database. For more details, see *Manage access tokens and authorization codes*.

**Access Token Expiry (in secs)**: \
Enter the number of seconds before the access token expires. Defaults to `3600`(one hour).

**Access Token Length**: \
Enter the number of characters in the access token. Defaults to `54`.

**Access Token Type**: \
Enter the access token type. This provides the client with information required to use the access token to make a protected resource request. The client cannot use an access token if it does not understand the token type. Defaults to `Bearer`.

**Refresh Token Details**: \
Select one of the following options:

* **Generate a new refresh token**: \
    Select this option to generate a new access token and refresh token pair. The old refresh token passed in the request is removed. This option is selected by default.
    Enter the number of seconds before the refresh token expires in the **Refresh Token Expiry (in secs)** field, and enter the number of characters in the refresh token in the **Refresh Token Length** field. The expiry defaults to `43200` (12 hours), and the length defaults to `46`.
* **Do not generate a refresh token**: \
    Select this option to generate a new access token only. The old refresh token passed in the request is removed.

**Store additional meta data with the access token which can subsequently be retrieved**: \
Click **Add** to store additional access token parameters, and enter the **Name** and **Value** in the dialog (for example, `Department`and `Engineering`).

## Monitoring settings

The real-time monitoring options enable you to view service usage in API Gateway Manager. For more information on real-time monitoring, see the .

**Enable monitoring** \
Select this option to enable real-time monitoring. If this is enabled you can view service usage in the web-based API Gateway Manager tool.

**Which attribute is used to identify the client** \
Enter the message attribute to use to identify authenticated clients. The default is `authentication.subject.id`, which stores the identifier of the authenticated user (for example, the user name or user's X.509 Distinguished Name).

**Composite Context** \
This setting enables you to select a service context as a composite context in which multiple service contexts are monitored during the processing of a message. This setting is not selected by default.

For example, the API Gateway receives a message and sends it to `serviceA` first, and then to `serviceB`. Monitoring is performed separately for each service by default. However, you can set a composite service context before `serviceA`and `serviceB` that includes both services. This composite service passes if both services complete successfully, and monitoring is also performed on the composite service context.
