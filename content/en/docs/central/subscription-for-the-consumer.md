---
title: Subscription for the consumer
description: A subscription provides the consumer, or subscriber, with the
  required security, quota and endpoint materials to correctly consume the API.
---
## Subscription workflow

1. An administrator creates an application on Axway API Manager that provides the necessary security feature (API key / OAuth...) and quota, if needed:

   * Add a custom field to the application to track the AMPLIFY Central subscription. Refer to `<API_Gateway_install_dir>/apigateway/webapps//apiportal/vordel/apiportal/app/app.config file` in the **customPropertiesConfig** section. For more details, see Customize API Manager.

     ````
      Sample application:

      ```
      customPropertiesConfig: {
              user: {
                  // custom properties...
              },
              organization: {
                  // custom properties...
              },
              application: {
                  subscriptions: {
                     label: 'Subscriptions'
                  },
              },
              api: {
                  // custom properties...
              }
          } 
      ```
     ````
2. A consumer initiates the subscription in AMPLIFY Central:

   * Open an AMPLIFY Catalog item.
   * Click **Subscribe**.
   * Enter the Team and API Manager Application name (created in Step 1). \
     **Warning**: The names must match. Otherwise, the subscription will fail.

   For additional information, see Manage AMPLIFY Catalog subscriptions.
3. The Discovery Agent receives the subscription event:

   Subscription status: **Subscribing...**

   * Associate the API to the selected application.
   * Send back the subscription status.

   Subscription status: **Active**

   * Subscription ID is automatically added to the **Custom** field of the application.
   * If failure, subscription status: **Subscription failed**. Refer to the Discovery Agent log for more information. You can delete the subscription and start again from Step 2.
4. The subscriber consumes the API:

   * The API can be consumed once the subscription details are received.

{{< alert title="Note" color="primary" >}}The API Manager application and the API must be in the same organization. Otherwise,  an error message is displayed in the Discovery Agent log.{{< /alert >}}

**Workaround**: You can grant the API access to the organization where the application belongs:

1. In the UI, select the API.
2. Expand **Manage selected**.
3. Select **Grant access**.

## Unsubscribe workflow

1. A consumer initiates unsubscribe:

   * Open the AMPLIFY Catalog and navigate to the **Subscription** tab.
   * Delete the subscription.

   For additional information, see Manage AMPLIFY Catalog subscriptions.
2. The Discovery Agent receives the Unsubscribe event:

   * The subscription ID is removed from the application's Custom field.