---
title: Discover and consume catalog assets
description: "Learn how to discover and consume assets in AMPLIFY Unified
  Catalog. Assets can be REST APIs, SOAP APIs, other non-REST APIs (for example,
  gRPC, Avro, graphQL), MFT services, and custom catalog assets. "
---
*Estimated reading time*: 10 minutes

## Find a catalog asset

Start by searching the Unified Catalog to find the asset to use. By default, catalog assets are sorted by the most recently items published or updated first. Those assets are marked with **NEW** or **Updated** labels at the top of the list.  

To find a catalog assets you can:

* Search by **"name"** or **"tags"**: Type a keyword into the search bar. The result returns all catalog assets that have the search term either in the name or the tags.
* Use the **Filter** menu to filter the results by asset type (for example, API, MFT, CUSTOM) or subtype (for example, swagger2, OAS, WSDL, protobuf).

Watch the animation to learn how to search and filter in Unified Catalog.  

![find demo](/Images/central/catalog/find_demo.gif)

## Subscribe to an API

Before you start:

* You will need to create an app in AMPLIFY Central and secure it with an [API Key](/docs/central/quickstart/) or [JWT](/docs/central/secure_api_jwt/) or [OAuth](/docs/central/feauth_oauth/)

Follow these steps to subscribe to an API asset

* Select **Catalog** in the left navigation bar to open the **Explore Catalog** submenu.
* Click an API asset in the list to see a detailed view of its description, test methods, and subscriptions.
* Click **Subscribe** in the top right corner.
* On the dialog box, select **Team**, enter a **Subscription name** and select **Application**.
* Click **Subscribe**.

Watch the animation to learn how to subscribe to an API asset.

![subscribe demo](/Images/central/catalog/subscribe_demo.gif)

## Export to Integration Builder

Promote and authenticate APIs using Integration Builder.

### Before you start

* Ensure that you have access to Integration Builder.
* You must have your API secured, as well as a valid subscription. For details, see [Subscribe to an API](#subscribe-to-an-api).

### Promote an API from Unified Catalog to Integration Builder

You can promote an API published in the Unified Catalog to Integration Builder as a custom connector.

To promote an API as a connector template:

1. Select the API from the Unified Catalog and click **Export to Integration Builder**.
2. Enter a **Name** for the template, and the **Organization** and **User** secrets for the Integration Builder environment where you want to created the connector template.
3. Click **Export**.

{{< alert title="Tip" color="primary" >}}You can find the **Organization** and **User** secrets in Integration Builder, on the bottom left corner of the menu.{{< /alert >}}

Now you can navigate to Integration Builder and see the connector template definition.

Watch the animation to learn how to perform this task.

![export demo](/Images/central/catalog_export.gif)

### Authenticate an exported API from Unified Catalog in Integration Builder

Watch this short video to learn how to configure and authorize an API that has been promoted from AMPLIFY Unified Catalog into Integration Builder.

{{< youtube tGNXQo-1frE >}}

## Download a Catalog asset

Follow these steps to download an asset from the catalog:

* Select **Catalog** in the left navigation bar to open the **Explore Catalog** submenu.
* Click on the asset to download from the list to see a detailed view of its description.
* Next to the catalog name, click the **Download specification** button (hover over the icon to see it) from the available buttons.
* The catalog asset is downloaded in the format specified in its specification.

Watch the animation to learn how to download a catalog asset.

![download demo](/Images/central/catalog/download_demo.gif)