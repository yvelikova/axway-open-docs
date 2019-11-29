---
title: Set up API Gateway as an OAuth 2.0 server
linkTitle: Set up API Gateway as an OAuth 2.0 server
date: 2019-11-18
description: If you have installed API Manager, the OAuth server capabilities are already installed. You can skip this section.
weight: 5
---

To set up API Gateway as an OAuth authorization server and OAuth resource server, you must deploy the OAuth services as detailed in [Deploy the OAuth service](/docs/apigw_oauth/deploy_oauth_config#Deploy2).

The API Gateway provides the following endpoints used to manage OAuth 2.0 client applications:

| Description                                  | URL                                                 |
|----------------------------------------------|-----------------------------------------------------|
| Authorization Endpoint (REST API)            | https://HOST:8089/api/oauth/authorize               |
| Token Endpoint (REST API)                    | https://HOST:8089/api/oauth/token                   |
| Token Info Endpoint (REST API)               | https://HOST:8089/api/oauth/tokeninfo               |
| Revoke Endpoint (REST API)                   | https://HOST:8089/api/oauth/revoke                  |
| Client Application Registry (HTML Interface) | https://HOST:8089                                   |
| Client Application Registry (REST API)       | https://HOST:8089/api/kps/ClientApplicationRegistry |

In this table, HOST refers to the machine on which API Gateway is installed.

{{< alert title="Note" color="primary" >}}To enable these endpoints, you must first enable the OAuth listener port in the API Gateway. For more details, see [Enable OAuth endpoints](#Enable).{{< /alert >}}

## Enable OAuth endpoints {#Enable}

To enable the OAuth management endpoints on your API Gateway, perform the following steps:

1. In the Policy Studio tree, select **Environment Configuration > Listeners > API Gateway > OAuth 2.0 Services > Ports**.
2. Right-click the **OAuth 2.0 Interface** in the panel on the right, and select **Edit**.
3. Select **Enable Interface** in the dialog.
4. Click the **Deploy** button in the toolbar.
5. Enter a description and click **Finish**.

    {{< alert title="Note" color="primary" >}}On Linux-based systems, such as Oracle Enterprise Linux, you must open the firewall to allow external access to port `8089`. If you need to change the port number, set the value of the `env.PORT.OAUTH2.SERVICES`
    environment variable. For details on setting external environment variables for API Gateway instances, see the
    [API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
    .{{< /alert >}}
