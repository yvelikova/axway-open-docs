---
title: Discover and consume Catalog assets
description: "Learn how to discover and consume assets in the AMPLIFY Unified
  Catalog. The assets can be REST APIs, SOAP APIs, other non-REST APIs (i.e
  gRPC, Avro, graphQL), MFT services and custom catalog assets. "
---
*Estimated reading time*: 10 minutes

## Find a Catalog asset

First you will want to start by searching the Unified Catalog to find the asset you want to use. By default, Catalog assets are sorted by the most recently items published or updated first. You can find those assets mark with "NEW" or "Updated" labels at the top of the list.  

To find a catalog assets you can: 

* Search by **"name"** or **"tags"**: Type a keyword in the search bar. The result will return all catalog assets that have the search term either in the name or the tags. 
* Use the **Filter** menu to filter the results by asset type (i.e API, MFT, CUSTOM) or subtype (i.e swagger2, OAS, WSDL, protobuf). 

Watch the animation below to learn how to search and filter in the Unified Catalog.  

![find demo](/Images/central/catalog/find_demo.gif)

## Subscribe to an API

### Before you start

* You will need to create an app in AMPLIFY Central and secure it with an [API Key](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/quickstart/index.html) or [JWT](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/secure_api_jwt/index.html) or [](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/feauth_oauth/index.html)[OAuth](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/feauth_oauth/index.html)

Follow these steps to subscribe to an API asset

* Select **Catalog** in the left navigation bar and this will open up a **Explore Catalog** sub-menu.
* Click an API asset in the list to see a detailed view of its description, test methods and subscriptions.
* Click **Subscribe** in the upper-right corner.
* On the dialog box, select **Team**, enter a **Subscription name** and select **Application**.
* Click **Subscribe**.

Watch the animation to learn how to subscribe to an API asset.

![subscribe demo](/Images/central/catalog/subscribe_demo.gif)

## Export to Integration Builder

Promote and authenticate APIs using Integration Builder.

### Before you start

* Ensure that you have access to Integration Builder.
* You must have your API secured, as well as a valid subscription. For more information see 'Subscribe to an API' above.

### Promote an API from Unified Catalog to Integration Builder

You can promote an API published in the Unified Catalog to Integration Builder as a custom connector.

To promote an API as a connector template:

1. Select the API from the Unified Catalog and click **Export to Integration Builder**:
2. On the **Export Your API to Integration Builder as a Connector** dialog, enter a **Name** for the template, and the **Organization** and **User** secrets for the Integration Builder environment where you want to created the connector template.
3. Click **Export**.

{{< alert title="Tip" color="primary" >}}You can find the **Organization** and **User** secrets in Integration Builder, on the bottom left corner of the menu.{{< /alert >}}

Now you can navigate to Integration Builder and see the connector template definition.

Watch the animation to learn how to perform this task.

![export demo](/Images/central/catalog_export.gif)

### Authenticate an exported API from Unified Catalog in Integration Builder

Watch this short video to learn how to configure and authorize an API that has been promoted from Amplify Catalog into Integration Builder.

{{< youtube tGNXQo-1frE >}}

## Download a Catalog asset

Follow these steps to download an asset from the Catalog

* Select **Catalog** in the left navigation bar and this will open up a **Explore Catalog** sub-menu.
* Click on the asset you want to download from the list to see a detailed view of its description.
* Next to the Catalog name, click the 'Download specification' button (seen when hovered over the icon) from the available buttons.
* The catalog asset will be downloaded in the format specified in it's specification.

Watch the animation to learn how to download a catalog asset

![download demo](/Images/central/catalog/download_demo.gif)