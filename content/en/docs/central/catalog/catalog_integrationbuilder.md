---
title: Integrate with Integration Builder
draft: true
linkTitle: Integrate with Integration Builder
weight: 20
date: 2019-12-16
description: Promote and authenticate APIs using Integration Builder.
---

### Before you start

* Ensure that you have access to Integration Builder.
* You must have an `API Key` or `JWT` configured for your API, as well as a valid subscription. For more information see [Subscribe to an endpoint](#subscribe-to-an-endpoint).

## Promote an API from Unified Catalog to Integration Builder

You can promote an API published in the Unified Catalog to Integration Builder as a custom connector.

To promote an API as a connector template:

1. Select the API from the Unified Catalog and click **Export to Integration Builder**:
2. On the **Export Your API to Integration Builder as a Connector** dialog, enter a **Name** for the template, and the **Organization** and **User** secrets for the Integration Builder environment where you want to created the connector template.
3. Click **Export**.

{{< alert title="Tip" color="primary" >}}You can find the **Organization** and **User** secrets in Integration Builder, on the bottom left corner of the menu.{{< /alert >}}

Now you can navigate to Integration Builder and see the connector template definition.

Watch the animation to learn how to perform this task.

![export demo](/Images/central/catalog_export.gif)

## Authenticate an exported API from Unified Catalog in Integration Builder

Watch this short video to learn how to configure and authorize an API that has been promoted from Amplify Catalog into Integration Builder.

{{< youtube tGNXQo-1frE >}}
