---
title: Revoke token
linkTitle: Revoke token
date: 2019-11-18
description: The OAuth 2.0 Revoke a Token filter is used to revoke a specified OAuth 2.0 access or refresh token. A revoke token request causes the removal of the client permissions associated with the specified token used to access the user's protected resources. For more details on this OAuth flow, see [Revoke token](/docs/apigw_oauth/oauth_flows/oauth_flows_revoke_token).
weight: 9
---

## Overview

OAuth access tokens are used to grant access to specific resources in an HTTP service for a specific period of time (for example, photos on a photo sharing website). This enables users to grant third-party applications access to their resources without sharing all of their data and access permissions. OAuth refresh tokens are tokens issued by the authorization server to the client that can be used to obtain a new access token.

## Revoke token settings

Configure the following fields on this tab:

**Token to be revoked can be found here**:\
Click the browse button to select the cache to revoke the token from (for example, in the default **OAuth Access Token Store**). To add an access token store, right-click **Access Token Stores**, and select **Add Access Token Store**. You can store tokens in a cache, in a relational database, or in an Apache Cassandra database. For more details, see *Manage access tokens and authorization codes* .

**Find client application information from message**:\
Select one of the following:

* **In Authorization Header**:\
This is the default setting.
* **In Form Body**:\
The **Client Id** defaults to `client_id`, and **Client Secret** defaults to `client_secret`.

## Monitoring settings

The real-time monitoring options enable you to view service usage in API Gateway Manager. 

**Enable monitoring**\
Select this option to enable real-time monitoring. If this is enabled you can view service usage in the web-based API Gateway Manager tool.

**Which attribute is used to identify the client** \
Enter the message attribute to use to identify authenticated clients. The default is `authentication.subject.id`, which stores the identifier of the authenticated user (for example, the user name or user's X.509 Distinguished Name).

**Composite Context**\
This setting enables you to select a service context as a composite context in which multiple service contexts are monitored during the processing of a message. This setting is not selected by default.

For example, the API Gateway receives a message and sends it to `serviceA` first, and then to `serviceB`. Monitoring is performed separately for each service by default. However, you can set a composite service context before `serviceA`and `serviceB`that includes both services. This composite service passes if both services complete successfully, and monitoring is also performed on the composite service context.
