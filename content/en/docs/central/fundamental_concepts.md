---
title: AMPLIFY Central concepts
linkTitle: Concepts
weight: 2
date: 2019-07-30
description: Learn the fundamental concepts you will encounter in AMPLIFY Central.
---

*Estimated reading time: 1 minute*

## API and API proxy

Watch this short video to learn more about API proxies.

{{< youtube ja9HPLlzcn4 >}}

### What is an API?

An API is an interface to a service, that enables app developers to interact with it or *consume* it. For example, you might have a weather service that app developers can use to show today's weather forecast to the users of their cycling app.

An API is clearly defined by way of its endpoints, request parameters, and responses. This makes it easy for app developers to use the API, as the API specification (for example, Open API or Swagger) tells them:

- What requests they can send and to what address
- What the supported request parameters are
- What responses they can expect

An API implies a *contract*, which provides app developers with an assurance that the API will change in a predictable manner over time, meaning that their app will continue to work with future changes to the API.

### What is an API proxy?

In AMPLIFY Central, you create an API proxy to represent your back-end API to your API consumers. Instead of interacting directly with your API, app developers now interact with the API proxy.

![Interactions between app developers - API proxy - back-end API](/Images/central/api_proxy.png)

Managing your API in AMPLIFY Central by way of an API proxy offers the following benefits:

- You can change the implementation of the back-end service without impacting app developers as they continue to call the API proxy.
- You can apply policies to the API proxy to manage or secure how client apps use your API.
- You can analyze the usage of your APIs by client apps, and identify and analyze failed transactions, as all traffic that flows through an API proxy is monitored and recorded.

### What are the AMPLIFY Central Roles and Teams?

AMPLIFY Central has its own set of roles in addition to the AMPLIFY Platform roles. These AMPLIFY Central roles include AMPLIFY Central Admin, Developer and Consumer type roles to manage/use assets (i.e. API Proxies, Applications, Environments, Unified Catalog, etc).  

Users and Teams of AMPLIFY Central are managed by the AMPLIFY Platform.

An AMPLIFY Central Team is a group of users wtih varying abilities can manage/use assets. For example, a Team member can share assets and their promotion to the Unified Catalog.

For the latest information, refer to the AMPLIFY Platform documentation section for Managing Organizations: (Add proper Link to https://docs.axway.com/bundle/Appcelerator_Dashboard_allOS_en/page/managing_organizations.html )
