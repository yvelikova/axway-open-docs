---
title: Get access token using resource owner credentials
linkTitle: Get access token using resource owner credentials
date: 2019-11-18
description: The OAuth 2.0 **Resource Owner Credentials** filter is used to directly obtain an access token and an optional refresh token. This supports the OAuth 2.0 resource owner password credentials flow, which can be used as a replacement for an existing login when the consumer client already has the user's credentials. For more details on this OAuth flow, see [Resource owner password credentials flow](/docs/apigw_oauth/oauth_flows/oauth_flows_resource_owner). 
weight: 8 
---

## Overview

OAuth access tokens are used to grant access to specific resources in an HTTP service for a specific period of time (for example, photos on a photo sharing website). This enables users to grant third-party applications access to their resources without sharing all of their data and access permissions. An OAuth access token can be sent to the resource server to access the protected resources of the resource owner (user). This token is a string that denotes a specific scope, lifetime, and other access attributes.

## Application validation settings

Configure the following fields on this tab:

**Authenticate Resource Owner**\
Select one of the following:

* **Authenticate credentials using this repository**: \
Select one of the following from the list:
  * Simple Active Directory Repository
  * Local User Store

* **Call this policy**:\
    Click the browse button to select a policy to authenticate the resource owner. You can use the **Policy will store subject in selector** text box to specify where the subject is stored. Defaults to the `${authentication.subject.id}`message attribute. For more details on selectors, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/) .

**Find client application information from message**:

Select one of the following:

* **In Authorization Header**:
This is the default setting.
* **In Form Body**:
The **Client Id** defaults to `client_id`, and **Client Secret** defaults to `client_secret`.

## Access token settings

Configure the following fields on the this tab:

**Access Token will be stored here**:

Click the browse button to select where to store the access token (for example, in the default **OAuth Access Token Store**). To add an access token store, right-click **Access Token Stores**, and select **Add Access Token Store**. You can store tokens in a cache, in a relational database, or in an Apache Cassandra database. For more details, see *Manage access tokens and authorization codes*.

**Access Token Expiry (in secs)**:\
Enter the number of seconds before the access token expires. Defaults to `3600`(one hour).

**Access Token Length**:\
Enter the number of characters in the access token. Defaults to `54`.

**Access Token Type**:\
Enter the access token type. This provides the client with information required to use the access token to make a protected resource request. The client cannot use an access token if it does not understand the token type. Defaults to `Bearer`.

**Refresh Token Details**:\
Select one of the following options:

* **Generate a new refresh token**:
Select this option to generate a new access token and refresh token pair. The old refresh token passed in the request is removed. This option is selected by default.
Enter the number of seconds before the refresh token expires in the **Refresh Token Expiry (in secs)** field, and enter the number of characters in the refresh token in the **Refresh Token Length** field. The expiry defaults to `43200` (12 hours), and the length defaults to `46`.
* **Do not generate a refresh token**:
Select this option to generate a new access token only. The old refresh token passed in the request is removed.
* **Preserve the existing refresh token**:
Select this option to generate a new access token and preserve the existing refresh token. The refresh token passed in the request is sent back with the access token response.

**Store additional meta data with the access token which can subsequently be retrieved**:\
Click **Add** to store additional access token parameters, and enter the **Name** and **Value** in the dialog (for example, `Department`and `Engineering`).

**Generate Token Scopes**:\
When requesting a token from the authorization server, you can specify a parameter for the OAuth scopes that you wish to access. When scopes are sent in the request, you can select whether the access token is generated only if the scopes in the request match all or any scopes registered for the application. Alternatively, for extra flexibility, you can get the scopes by calling out to a policy.

Select one of the following options to configure how access tokens are generated based on specified scopes:

* **Get scopes from a registered application**:
Select whether the scopes must match **Any** or **All** of the scopes registered for the application in the Client Application Registry. Defaults to **Any**. If no scopes are sent in the request, the token is generated with the scopes registered for the application.
* **Get scopes by calling policy**:
Select a preconfigured policy to get the scopes, and enter the attribute that stores the scopes in the **Scopes approved for token are stored in the attribute** field. Defaults to `scopes.for.token`. The configured filter requires the scopes as a set of strings on the message whiteboard.

## Monitoring settings

The real-time monitoring options enable you to view service usage in API Gateway Manager. For more information on real-time monitoring, see the API Gateway Administrator Guide.

**Enable monitoring**\
Select this option to enable real-time monitoring. If this is enabled you can view service usage in the web-based API Gateway Manager tool.

**Which attribute is used to identify the client**\
Enter the message attribute to use to identify authenticated clients. The default is `authentication.subject.id`, which stores the identifier of the authenticated user (for example, the user name or user's X.509 Distinguished Name).

**Composite Context**\
This setting enables you to select a service context as a composite context in which multiple service contexts are monitored during the processing of a message. This setting is not selected by default.

For example, the API Gateway receives a message and sends it to `serviceA`first, and then to `serviceB`. Monitoring is performed separately for each service by default. However, you can set a composite service context before `serviceA`and `serviceB`that includes both services. This composite service passes if both services complete successfully, and monitoring is also performed on the composite service context.

The traffic monitoring options enable you to view message traffic in API Gateway Manager. For more information on traffic monitoring, see the .

**Record Outbound Transactions**\
Select whether to record outbound message traffic. You can use this setting to override the **Record Outbound Transactions**
setting in **Server Settings
> Monitoring > Traffic Monitor**. This setting is selected by default.
