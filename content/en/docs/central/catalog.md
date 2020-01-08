---
title: AMPLIFY Catalog
linkTitle: AMPLIFY Catalog
weight: 150
date: 2019-12-16
description: Normalize discovery for APIs from multiple gateways, classify your services to support multiple audiences (partners, IT, business), control consumer subscription to access your APIs, and extend your APIs to be reused in other integration ﬂows.
---

*Estimated reading time*: 5 minutes

## AMPLIFY Catalog Overview

The AMPLIFY Central and Catalog work together to help customers to have a common place to import their APIs from all of their distributed API gateways throughout their enterprise.

The AMPLIFY Catalog provides a common view of all endpoints belonging to an organization. It enables more sophisticated integration ﬂows combining cloud and public on-premise APIs together.
Alongside API interfaces, you can find Managed File Transfer (MFT) and B2B connectors that move data across your enterprise and outside its boundaries. The endpoints in the catalog can be in different environments such as in the cloud, on-premise, within a microservice mesh, or at the edge (DMZ) of the organization.

AMPLIFY Catalog allows developers to discover and understand the endpoints and protocols that they can use to integrate quickly with your services. It simplifies access and increases the speed of building, integrating, and deploying new services and apps. Platform administrators can limit content access to specific users or teams and manage subscriptions.

## AMPLIFY Catalog Subscriptions

This section describes how to manage AMPLIFY Catalog subscriptions.

## Before you start

* You will need to create an app in AMPLIFY Central and secure it with an API key. See [Get started with AMPLIFY Central](/docs/central/quickstart).

## Objectives

Learn how to manage subscriptions to an endpoint in the AMPLIFY Catalog

## Subscribe to an endpoint

To subscribe to an endpoint:

* Select Catalog in the left navigation bar.
* Click aN endpoint in the list to see a detailed view of its description and test methods.
* Click **Subscribe** in the upper-right corner.
* On the dialog box, select **Team** and **Application**.
* Click **Subscribe**.

Watch the animation to learn how to subscribe to an endpoint.

![Subscribe to a catalog item](/Images/central/catalog_subscribe.gif)

## View the subscriptions of an endpoint

To view the subscriptions of an endpoint:

* Click the **Subscriptions** tab on the endpoint detail page.

The result shows a table with the current subscriptions to the endpoint.

## Unsubscribe from an endpoint

To unsubscribe from an endpoint:

* Click the **Subscriptions** tab on the endpoint detail page.
* Click the **Gear** icon next to the subscription you want to unsubscribe to.
* Click **Unsubscribe**.

Watch the animation to learn how to unsubscribe from an endpoint.

![Unsubscribe from a catalog item](/Images/central/catalog_unsubscribe.gif)

## Delete the subscription of an endpoint

You can only delete subscriptions which are in `Unsubscribed` status.

To delete the subscription of an endpoint:

* Click the **Subscriptions** tab on the endpoint detail page.
* Click the **Gear** icon next to the subscription you want to delete.
* Click **Delete**.

## Promote an API from Unified Catalog to Integration Builder

Customers that are leveraging our iPaaS can now promote an API published in the Unified Catalog to Integration Builder as a custom connector with a button click. 

To promote an API as a connector template, you need to select the API from the Unified Catalog and click on the **Export to Integration Builder** button (see image below):

![export to integration builder](/Images/central/catalog_export_to_integration_builder.png)

You'll be asked to provide the Organization and User secrets for the Integration Builder environment you'd want the connector template to be created in: 

![secrets prompt](/Images/central/catalog_export_secrets_prompt.png)

Those values can be found in Integration Builder, in the bottom left corner of the menu: 

![ib secrets location](/Images/central/catalog_export_ib_secrets.png)

After all required values are filled in, click on Export. If the connector was created successfully, you'll get the message below:

![export success](/Images/central/catalog_export_success.png)

Now you can navigate to Integration Builder, and see the connector template definition: 

![view ib connector](/Images/central/catalog_export_view_exported.png)

Here is a gif of the entire process:

![export demo](/Images/central/catalog_export.gif)


## Authenticate an exported API from Unified Catalog in Integration Builder

This section describes out to configure authentication for an API exported from Unified Catalog

## Before you start

* The following assumes you already have an APIKey or JWT configured for your API as well as a valid subscription. Please refer to 'Subscribe to an endpoint' above.

Before you can use your exported connector you need to configure the authentication settings under your connectors **Setup** section. Under **Configurations** click the 'Add Configuration' button to add a blank config. This will allow you to pass in your apikey/JWT when creating a connector instance. You can fill in the config fields as follows:

* Name: Whatever makes sense to your connectors auth. Eg: apikey or jwt
* Key: this.api.key
* Type: password
* Hide UI: Make sure this is unchecked
* Required: Make sure this is checked

![config ib connector](/Images/central/catalog_export_IB_auth_config.png)

Now under the *Parameters* section you'll want to configure the instances to utilize the configured key (jwt or apikey) from the previous step as a header. Click the 'Add Parameter' button and fill in the config fields as follows:

* Name: this.api.key
* Type: configuration
* Name (Vendor): Authorization
* Type (Vendor): header

![param ib connector](/Images/central/catalog_export_IB_auth_param.png)

Now you can authenticate your Integration Builder instance by navigating to *API Docs* and selecting **Authenticate Instance**

![connector instance](/Images/central/catalog_export_IB_auth_instance.png)

You can name the instance whatever you like. You'll see the configuration field we setup earlier. You can now insert your key/jwt as follows:

* For jwt: *Bearer \<jwt token here\>*
* For apikey: *Apikey \<apikey here\>*

![connector instance key](/Images/central/catalog_export_IB_auth_instance_key.png)

Here is a gif of the entire process:

![auth demo](/Images/central/catalog_auth.gif)