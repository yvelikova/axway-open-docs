---
title: Request to backend API
linkTitle: Request to backend API
weight: 5
date: 2019-10-16
description: Learn about Transport Layer Security (TLS) for your Request to the backend API.
---

*Estimated reading time*: 10 minutes

## Before you start

* You will need an administrator account for AMPLIFY Central
* Learn how to import your API as an API proxy in AMPLIFY Central (see [Register an API](/docs/central/quickstart/#register-an-api))
* Learn how to use the AMPLIFY CLI to manage an API proxy (see [Manage an API proxy using AMPLIFY CLI](/docs/central/cli_proxy_flow))

## Objectives

Learn how Transport Layer Security is applied to your Request to the backend API:

* Understand what Transport Layer Security is and how it can be useful
* Understand how to confirm Transport Layer Security is negotiated for your API using the AMPLIFY Central UI

## What is Transport Layer Security (TLS) ?

Transport Layer Security (TLS) is a internet protocol standard designed to allow security communications over the publice Internet.   It is similar in nature what is used on most modern broswers to secure the communication from the browser to the server application.  As part of the TLS protocol, a cryptographic ciper mechnanism and key used to secure the commincations is established between the client (AMPLIFY Central API Gateway) and the backend API when it is configured as an HTTPS endpoint (i.e. Backend URL:  HTTPS://petstore.swagger.io/v2).  

There are two versions of TLS Protocol.   Version 1.2 is described in [RFC 5246](https://tools.ietf.org/html/rfc5246).   Version 1.3 is described in [RFC 8446](https://tools.ietf.org/html/rfc8446).
In all versions of TLS, it can be configured to support one-way or two-way TLS.  In one-way TLS, the client (AMPLFIY Central API Gateway) will request for a signed certificate from the backend API endpoint.   In two-way TLS, its the same as one-way TLS with the additional step of the backend API endpoint requesting for a signed certificate from the AMPLIFY Central API Gateway as well.

### TLS from AMPLIFY Central API Gateway to the backend API

AMPLIFY Central currently provides one-way TLS from the API Gateway to the backend API.   One-way TLS is automatically negotiated for each API registered to an HTTPS Backend URL endpoint.

## Use the AMPLIFY Central UI to establish a TLS connection

To begin, [register an api proxy](/docs/central/quickstart/#register-an-api).

### Confirm that TLS is negotiated for your API

1. Navigate to the **API Proxies** tab.
2. Click the API proxy name to open the API proxy details page.
3. On the **Policies** tab, edit the rate limit policy under the **Request to backend** section. 
4. The Backend URL line should indicate an HTTPS endpoint and a line for HTTPS certificate should display a green checkmark with a valid until date.
5. Click on the gear icon to the right of the HTTPS certificate line to view details and optionally update/fetch a new certficate manually.

TBD - Get updated image of TLS
![Enter the desired TPS](/Images/central/proxy_rate_limit_box.png)




## Review

You have learned how Transport Layer Security (TLS) is setup rate limiting can help you provide a better API experience to consumers and how to configure a rate limit on your API using both the AMPLIFY Central UI and the AMPLIFY CLI.
