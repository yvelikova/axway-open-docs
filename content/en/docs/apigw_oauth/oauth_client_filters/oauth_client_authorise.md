---
title: Get OAuth client access token
linkTitle: Get OAuth client access token
date: 2019-11-18
description: You can use the **Get OAuth Access Token**\\nfilter to request a token. This filter attempts to get the access token from persistent storage, and if a token is not available it sends an outbound token request.
weight: 2
---

## General settings

Configure the following general settings for the **Get OAuth Access Token** filter:

**Name**:\
Enter a suitable name for this filter.

**Choose OAuth Token Key**:\
Enter the message attribute to be used as the key to look up the token. Defaults to `${authentication.subject.id}`.

If no key is specified in this field, the access token is not saved. This is to accommodate anonymous use of OAuth whereby the user starting the process does not need to authenticate with API Gateway first.

**Optionally select a client credential profile**:\
Select this option and click the browse button to select an OAuth client credential profile. This can be used if no preceding filter has set the application profile on the message board, or to override the existing application profile.

## SSL settings

You can configure SSL settings, such as trusted certificates, client certificates, SSL/TLS protocols, and ciphers on the **SSL**
tab. For details on the fields on this tab, see [Connect to URL](https://docs.axway.com/csh?context=502&product=prod-api-gateway-77) and [API Gateway Policy Developer Filter Reference](https://docs.axway.com/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/).

## Additional settings

The **Settings** tab allows you to configure the following additional settings:

* **Retry**
* **Failure**
* **Proxy**
* **Redirect**
* **Headers**

By default, these sections are collapsed. Click a section to expand it.
