---
title: Integrate with Integration Builder
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

This section describes how to configure authentication for an API exported from Unified Catalog.

### Configure the authentication settings

Before you can use your exported connector you must configure the authentication settings under your connectors **Setup** section:

1. From the **Connectors** menu, click tab **SETUP**, and click **Authentication** on the left side menu.
2. Under **Configurations** click **Add Configuration** to add a blank config.
    * This will allow you to pass in your `API Key` or `JWT` when creating a connector instance.
3. Enter the required fields as follows:
    * Name: Enter a meaningful name to your connectors authorizaton. For example: `API Key` or `JWT`
    * Key: Enter your API Key
    * Type: Enter a password
    * Hide UI: This is unchecked by default. If selected, this will hide the configuration screen.
    * Required: This is checked by default. If unselected, this will not require an authentication.

### Configure the instances to utilize the configured key

Configure the instances to utilize the configured key from the previous section a header.

1. From the **Connectors** menu, click tab **SETUP**, and click **Parameters** on the left side menu.
2. Click **Add Parameter** and Enter the required fields as follows:
    * Name: Enter a meaningful name to your API Key
    * Type: Select configuration
    * Name (Vendor): Authorization
    * Type (Vendor): header

### Authenticate your Integration Builder instance

To authenticate your Integration Builder instance:

1. From the **Connectors** menu, click tab **API Docs** and select **Authenticate Instance**.
    * The configuration field set up previously is shown.
2. Enter a name for the instance and insert your `API Key` or `JWT`.
    * For JWT: `Bearer \<jwt token here\>`
    * For API Key: `API Key \<apikey here\>`

Watch the animation to learn how to perform this task.

![auth demo](/Images/central/catalog_auth.gif)
