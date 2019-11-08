---
title: API Portal overview
linkTitle: Overview
weight: 1
date: 2019-07-30T00:00:00.000Z
description: Learn the key capabilities and features of API Portal.
---

Axway API Portal is a self-service developer portal layered on both API Manager and API Gateway.

With API Portal, you can enable both internal or external client application developers to browse, consume, build, and test APIs for use in their applications on their own. You can use several channels, such as FAQs, articles, forums or blogs, to provide more information for the developers and to encourage developer engagement. The look and feel of the web-based API Portal is fully customizable to match your brand and image.

API Portal is part of the Axway AMPLIFY API Management solution. For more details, see the [AMPLIFY API Management Getting Started Guide](/bundle/APIManagementPlus_GettingStartedGuide_allOS_en_HTML5/) .

![Diagram illustrating the API Management concepts in API Portal](/Images/APIPortal/API_Portal_cncpt_api_mgmt.png)

## Key capabilities in API Portal

API Portal is built on top of [Joomla!](http://www.joomla.org/), an open source CMS platform for developing and deploying websites.

API Portal provides the following capabilities specifically for the organization administrator:

* **User and application administration** — You can execute basic operations, such as approvals and rejections, on both API Portal users and applications from your organization.

API Portal provides the following capabilities for both internal and external application developers:

* **Self-registration and profile management** — Application developers can self-register and manage their profiles.
* **Browsing and testing APIs in API Catalog** — API Catalog contains the APIs that have been registered in API Manager and are available for use. Application developers can browse these APIs and their associated documentation, and invoke APIs using the built-in test capability. They can also download API definitions (Swagger or WSDL) and client SDKs (iOS, Android, Titanium, or Node.js).
* **Creating and managing applications** — Application developers can register their applications that use the APIs, and obtain API Key or OAuth or external credentials for their applications.
* **Monitoring API usage** — Application developers can register their application's use of APIs through graphical real-time charts.
* **Pricing** - You can provide specific pricing information relating to APIs, products, plans, and services.
* **Help Center** — Provides a central point for links that you can use to offer additional information, for example, FAQs, documentation, discussion forums, or further contact information.
* **[Blog](http://stackideas.com/easyblog)** and **[Discussion forums](http://stackideas.com/easydiscuss)** - These are Joomla! plugins from a third-party vendor that you can use to share information and interact with the developer community.
* **Documentation** - You can use content management capabilities of Joomla! to provide additional content relating to your APIs, terms and conditions for their use, or best practices to your developer communities. The content can include PDF documents, images, and videos.

## Additional features – API Catalog view

API Portal offers two rendering options to customize the visualization of the APIs and their methods.

### Swagger.io SwaggerUI

This option shows the commonly known fields of a method, and it is the default option for SOAP APIs. It supports only API Gateway as an OAuth resource server.

### AMPLIFY SwaggerUI

In addition to the commonly known fields of a method, the AMPLIFY option also provides the following:

* **Body Parameters** - Shows the body of the parameter and its JSON schema.
* **Examples (or, snippets)** - This section displays a line or block of code that you can copy and paste, and run straight away using the relevant tool (curl, Titanium, node.js, web.js).
* **OAuth Authorization code flow** - Allows you to request a token to authorize access to your requests using an OAuth authorization code, as opposed to the `Client credentials` option where you need a secret key to request the token.
* **External OAuth resource servers** with authorization code flow only. 

The AMPLIFY option also allows you to customize the method colors (grayscale or colorful). It is the default option for REST APIs.

{{% alert title="Note" %}}
Clients in external OAuth servers must be created as public and their redirect URL must be set to *{apiportal-url}/cb*.
{{% /alert %}}

## API Portal users

This section describes the type of users and their roles in API Portal.

* **Organization administrators** – Full control over their organization in API Manager and the users and applications belonging to it. They have also an additional menu item, **Users**, in the API Portal menu.
* **Application developers** – API Portal users who write and test applications, and consume the exposed APIs.
* **Joomla! administrators** - Full control over API Portal configuration (look and feel, and localization).

This is the default behavior for each type of user. You can change this behavior using the [user groups mapping](/docs/apiportal_admin/role_mapping) functionality of API Portal.
