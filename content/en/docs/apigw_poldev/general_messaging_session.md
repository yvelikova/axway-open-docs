{
"title": "Configure a JMS session",
"linkTitle": "Configure a JMS session",
"date": "2019-10-17",
"description": "JMS services have JMS sessions, which can be shared by multiple JMS consumers, or used by a single JMS consumer only. To configure a JMS session, right-click an API Gateway instance under the **Environment Configuration** > **Listeners**\\nnode in the Policy Studio tree, and select **Messaging System**\\n> **Add JMS Session**. Alternatively, you can configure a JMS session using **Messaging System**\\n> **JMS Wizard**."
}
﻿

JMS services have JMS sessions, which can be shared by multiple JMS consumers, or used by a single JMS consumer only. To configure a JMS session, right-click an API Gateway instance under the **Environment Configuration** > **Listeners**
node in the Policy Studio tree, and select **Messaging System**
> **Add JMS Session**. Alternatively, you can configure a JMS session using **Messaging System**
> **JMS Wizard**.

{{< alert title="Note" color="primary" >}}You must have first configured a JMS service before you can configure a JMS session. For more details, see [Configure a JMS service](general_messaging_service.htm).{{< /alert >}}

JMS session configuration
-------------------------

The JMS session settings that are displayed on the **Session**
tab depend on whether you selected **Add JMS Session**
or **JMS Wizard**.

### Add JMS session only

If you selected **Messaging System**
> **Add JMS Session**, configure the following fields:

**JMS service**:\

Click the browse button on the right, and select a preconfigured JMS service. To add a service, right-click **JMS Services**, and select **Add a JMS Service**. For more details, see [Configure a JMS service](general_messaging_service.htm).

**Listener Count**:\

Specify the number of listeners permitted for this JMS session. Defaults to 1. If the volume of messages arriving at the queue is more than a single thread can process, you can increase the number of threads listening on the queue by increasing the listener count.

### Common configuration

In both cases (**Add JMS Session**
and **JMS Wizard**), configure the following fields:

**Remove message from source**:\

Select one of the following options from the list:

-   **Immediately when message is read**: Message is removed immediately after it is read.
-   **Lazily which will allow for duplicate message**: Message is removed lazily, which allows possible duplicate messages and compatibility with previous versions of API Gateway.
-   **When policy completes without error**: Message is removed if the configured policy completes, either with a succeess or failure. If the configured policy does not complete due to an error, the message is not removed. This option allows possible duplicate messages and compatibility with previous versions of API Gateway. This is the default option.
-   **When policy completes and property below evaluates to true**: Message is removed if the message attribute configured in **Message removal property**
    evaluates to `true`. This attribute is set to `true`
    by default.

After the configured policy executes, if a message is not removed, it is then rolled back. You may need to configure an error path for the messages to prevent a poison message loop.

**Message removal property**:\

Enter the message attribute name used by the **When policy completes and selector below evaluates to true**
option.

Monitoring options
------------------

The **Traffic Monitor**
tab enables you to configure traffic monitoring settings for the JMS session. To override the system-level traffic monitoring settings, select **Override system-level settings**, and configure the relevant options. For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

Next steps
----------

When the JMS session has been configured, you can configure JMS consumers for the newly added JMS session at the API Gateway instance level. For more details, see [Configure a JMS consumer](general_messaging_consumer.htm).
