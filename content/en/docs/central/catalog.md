---
title: AMPLIFY Catalog
linkTitle: AMPLIFY Catalog
weight: 150
date: 2019-12-16
description: Normalize discovery for APIs from multiple gateways, classify your services to support multiple audiences (partners, IT, business), control consumer subscription to access your APIs, and extend your APIs to be reused in other integration ﬂows.
---

*Estimated reading time*: 5 minutes

## Overview

The AMPLIFY Central and Catalog work together to help customers to have a common place to import their APIs from all of their distributed API gateways throughout their enterprise.

The AMPLIFY Catalog provides a common view of all endpoints belonging to an organization. It enables more sophisticated integration ﬂows combining cloud and public on-premise APIs together.
Alongside API interfaces, you can find Managed File Transfer (MFT) and B2B connectors that move data across your enterprise and outside its boundaries. The endpoints in the catalog can be in different environments such as in the cloud, on-premise, within a microservice mesh, or at the edge (DMZ) of the organization.

AMPLIFY Catalog allows developers to discover and understand the endpoints and protocols that they can use to integrate quickly with your services. It simplifies access and increases the speed of building, integrating, and deploying new services and apps. Platform administrators can limit content access to specific users or teams and manage subscriptions.

## Subscriptions

This section describes how to manage AMPLIFY Catalog subscriptions.

### Before you start

* You will need to create an app in AMPLIFY Central and secure it with an API Key. See [Get started with AMPLIFY Central](/docs/central/quickstart).

### Subscribe to an endpoint

To subscribe to an endpoint:

* Select Catalog in the left navigation bar.
* Click aN endpoint in the list to see a detailed view of its description and test methods.
* Click **Subscribe** in the upper-right corner.
* On the dialog box, select **Team** and **Application**.
* Click **Subscribe**.

Watch the animation to learn how to subscribe to an endpoint.

![Subscribe to a catalog item](/Images/central/catalog_subscribe.gif)

### View the subscriptions of an endpoint

To view the subscriptions of an endpoint click the **Subscriptions** tab on the endpoint detail page.

The result shows a table with the current subscriptions to the endpoint.

### Unsubscribe from an endpoint

To unsubscribe from an endpoint:

* Click the **Subscriptions** tab on the endpoint detail page.
* Click the **Gear** icon next to the subscription you want to unsubscribe to.
* Click **Unsubscribe**.

Watch the animation to learn how to unsubscribe from an endpoint.

![Unsubscribe from a catalog item](/Images/central/catalog_unsubscribe.gif)

### Delete the subscription of an endpoint

You can only delete subscriptions which are in `Unsubscribed` status.

To delete the subscription of an endpoint:

* Click the **Subscriptions** tab on the endpoint detail page.
* Click the **Gear** icon next to the subscription you want to delete.
* Click **Delete**.

## Promote an API from Unified Catalog to Integration Builder

You can promote an API published in the Unified Catalog to Integration Builder as a custom connector.

### Before you start

* Ensure that you have access to Integration Builder.

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

### Before you start

* The following assumes you already have an `API Key` or `JWT` configured for your API, as well as a valid subscription. For more information see [Subscribe to an endpoint](#subscribe-to-an-endpoint).

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