---
title: Refresh an OAuth client access token
linkTitle: Refresh an OAuth client access token
date: 2019-11-18
description: OAuth 2.0 client tokens are designed to be short lived and have an expiry time, however, tokens can be issued with refresh tokens. If a token has expired, and it has a refresh token, you can use the **Refresh an OAuth Client Access Token** filter to explicitly refresh the token. This filter looks up the token and checks for a refresh token. If it finds a refresh token, the filter sends an outbound refresh token request to the OAuth authorization server to obtain a new access token (and possibly a new refresh token). 
weight: 4
---

## General settings

Configure the following general settings for the **Refresh an OAuth Client Access Token** filter:

**Name**:\
Enter a suitable name for this filter.

**Choose OAuth Token Key**:\
Enter the message attribute to be used as the key to lookup the token. Defaults to `${authentication.subject.id}`.

**Optionally select a client credential profile**:\
Select this option and click the browse button to select an OAuth client credential profile. This can be used if no preceding filter has set the application profile on the message board, or to override the existing application profile.

## SSL settings

You can configure SSL settings, such as trusted certificates, client certificates, SSL/TLS protocols, and ciphers on the **SSL**
tab. For details on the fields on this tab, see [Connect to URL](https://docs.axway.com/csh?context=502&product=prod-api-gateway-77) and [API Gateway Policy Developer Filter Reference](https://docs.axway.com/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/).

## Additional settings

The **Settings**
tab allows you to configure the following additional settings:

* **Retry**
* **Failure**
* **Proxy**
* **Redirect**
* **Headers**

By default, these sections are collapsed. Click a section to expand it.
