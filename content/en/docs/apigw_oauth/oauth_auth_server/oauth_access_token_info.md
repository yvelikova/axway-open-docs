---
title: Get access token information
linkTitle: Get access token information
date: 2019-11-18
description: The OAuth 2.0 **Access Token Information** filter is used to return a JSON description of the specified OAuth 2.0 access token. OAuth access tokens are used to grant access to specific resources in an HTTP service for a specific period of time (for example, photos on a photo sharing website). This enables users to grant third-party applications access to their resources without sharing all of their data and access permissions.
weight: 1
---

## Overview

An OAuth access token can be sent to the resource server to access the protected resources of the resource owner (user). This token is a string that denotes a specific scope, lifetime, and other access attributes. For details on this OAuth flow, see [Token information service flow](/docs/apigw_oauth/oauth_flows/oauth_flows_token_info).

## Token settings

Configure the following fields on the **Access Token Info Settings** tab:

**Token to verify can be found here** \
Click the browse button to select the location of the access token to verify (for example, in the default **OAuth Access Token Store**). To add a store, right-click **Access Token Stores**, and select **Add Access Token Store**. You can store tokens in a cache, in a relational database, or in an Apache Cassandra database. For more details, see [Manage access tokens and authorization codes](/docs/apigw_oauth/gw_oauth_auth_server/oauth_access_tokens_auth_codes).

**Where to get access token from** \
Select one of the following:

* **In Query String/Form Body**:
    This is the default setting. Defaults to the `access_token`
    parameter.
* **In a selector**:
    Defaults to the `${http.client.getCgiArgument('access_token')}`
    selector. For more details on API Gateway selectors, see the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

## Monitoring settings

The real-time monitoring options enable you to view service usage in API Gateway Manager. For more information on real-time monitoring, see the .

* **Enable monitoring** \
Select this option to enable real-time monitoring. If this is enabled you can view service usage in the web-based API Gateway Manager tool.

* **Which attribute is used to identify the client** \
Enter the message attribute to use to identify authenticated clients. The default is `authentication.subject.id`, which stores the identifier of the authenticated user (for example, the user name or user's X.509 Distinguished Name).

* **Composite Context** \
This setting enables you to select a service context as a composite context in which multiple service contexts are monitored during the processing of a message. This setting is not selected by default.

For example, the API Gateway receives a message and sends it to `serviceA` first, and then to `serviceB`. Monitoring is performed separately for each service by default. However, you can set a composite service context before `serviceA`and `serviceB` that includes both services. This composite service passes if both services complete successfully, and monitoring is also performed on the composite service context.

## Advanced settings

The settings on the **Advanced** tab include the following:

**Return additional Access Token parameters**:\
Click **Add** to return additional access token parameters, and enter the **Name** and **Value** in the dialog. For example, you could enter `Department` in **Name**, and the following selector in **Value**:

``` {space="preserve"}
${accesstoken.getAdditionalInformation().get("Department")
```
