---
title: Protect APIs with OAuth
linkTitle: Protect APIs with OAuth
date: 2019-11-28
description: API Manager provides a web-based interface that enables API owners to register existing back-end REST APIs, apply standard policies, and virtualize them on API Gateway as public front-end APIs. When you virtualize a REST API, you can configure it with security devices, which provide prebuilt authentication and authorization mechanisms for the REST API. This enables you to control the authentication and authorization mechanisms that are supported for the API. 
weight:  1
---

The security devices supported for the inbound request (between the client and API Gateway) include OAuth and OAuth (External). This enables you to protect the virtualized API using OAuth where the OAuth provider is API Gateway, or using OAuth with an external OAuth provider.

In addition to the prebuilt OAuth security devices, you can also create custom security profiles with multiple security devices, which can be applied as per-method overrides. This enables you to control the authentication and authorization mechanisms that are supported for the API not just at the API level, but also at the API method level.

For more information on virtualizing APIs in API Manager and protecting those APIs with OAuth, see the [API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/).
