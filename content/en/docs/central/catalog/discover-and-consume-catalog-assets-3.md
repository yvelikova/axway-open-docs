---
title: Discover and consume Catalog assets
description: Learn how to discover and share your asset via the AMPLIFY Unified
  Catalog. The assets can be APIs, MFT flows, SOAP (WSDL) and unstructured data
  (eg. gRPC, Avro, Thrift)
---
*Estimated reading time*: 10 minutes

## Find a Catalog asset

Follow these steps to find your asset in the Catalog

* Select **Catalog** in the left navigation bar and this will open up a **Explore Catalog** sub-menu.
* Find your catalog asset in the list, you have two options

  1. Manually and scroll-down, if needed.
  2. Use the **Filter** menu in the header and search by asset 'name' or 'tags'. Explore the **Filter** menu option by clicking on the chevron for further options to filter by asset type (Eg. API, MFT, CUSTOM). 

Watch the animation to learn how to do this in AMPLIFY Central UI.

![find demo](/Images/central/catalog/find_demo.gif)

## Subscribe to an API

### Before you start

* You will need to create an app in AMPLIFY Central and secure it with an [API Key](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/quickstart/index.html) or [JWT](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/secure_api_jwt/index.html) or [](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/feauth_oauth/index.html)[OAuth](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/feauth_oauth/index.html)

### Subscribe to an API

Follow these steps to subscribe to an API asset

* Select **Catalog** in the left navigation bar and this will open up a **Explore Catalog** sub-menu.
* Click an API asset in the list to see a detailed view of its description, test methods and subscriptions.
* Click **Subscribe** in the upper-right corner.
* On the dialog box, select **Team**, enter a **Subscription name** and select **Application**.
* Click **Subscribe**.

Watch the animation to learn how to subscribe to an API asset.

![subscribe demo](/Images/central/catalog/subscribe_demo.gif)

## Subscribe to an MFT Service

When a partner subscribes to an MFT service in the catalog they are prompted to provide details to realize the file transfer.

Follow these steps to subscribe to an MFT service

* Select **Catalog** in the left navigation bar and this will open up a **Explore Catalog** sub-menu.

  \*\*more info TBA\*\*

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