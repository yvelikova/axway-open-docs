{
"title": "Read from JMS",
"linkTitle": "Read from JMS",
"date": "2019-10-17",
"description": "The **Read from JMS**\\nfilter enables you to configure a JMS messaging system from which the API Gateway reads messages. You can configure various settings for the JMS message source, message type, and processing options."
}
﻿

The **Read from JMS**
filter enables you to configure a JMS messaging system from which the API Gateway reads messages. You can configure various settings for the JMS message source, message type, and processing options.

API Gateway provides all the required third-party JAR files for IBM WebSphere MQ and Apache ActiveMQ (both embedded and external).

{{< alert title="Note" color="primary" >}}For other third-party JMS providers only, you must add the required third-party JAR files to the API Gateway classpath for messaging to function correctly. If the provider's implementation is platform-specific, copy the provider JAR files to `INSTALL_DIR/ext/PLATFORM`.\
`INSTALL_DIR`
is your API Gateway installation, and `PLATFORM`
is the platform on which API Gateway is installed (`Linux.x86_64`). If the provider implementation is platform-independent, copy the JAR files to `INSTALL_DIR/ext/lib`.{{< /alert >}}

Message source
--------------

The **Message source**
settings enable you to configure the following:

**JMS Service**:\
Click the browse button on the right, and select an existing JMS service in the tree. To add a JMS Service, right-click the **JMS Services**
tree node, and select **Add a JMS Service**. Alternatively, you can configure JMS services under the **Environment Configuration** > **External Connections**
node in the Policy Studio tree. For more details, see [*Configure messaging services* on page 1](general_messaging.htm).

**Source type**:\
Select one of the following from the list:

-   **Queue**
-   **Topic**
-   **JNDI lookup**

Defaults to **Queue**.

**Source Name**:\
Enter the name of the JMS queue, JMS topic, or JNDI lookup to specify where you want read the messages from.

{{< alert title="Note" color="primary" >}}The source name to use depends on the configured **Source type**. For example, for IBM WebSphere MQ, this name may need to use a format of `queue://`. For details on source name requirements, please see the user documentation for your third-party JMS provider tool.{{< /alert >}}

**Selector**:\
Enter an SQL selector expression that specifies a response message. The expression entered specifies the messages that the consumer is interested in receiving. By using a selector, the task of filtering the messages is performed by the JMS provider instead of by the consumer.

The selector is a string that specifies an expression whose syntax is based on the SQL92 conditional expression syntax. The API Gateway instance only receives messages whose headers and properties match the selector. For example, the following expression gets the selected message from the queue:

    JMSCorrelationID='${params.query.id}'

**Read timeout (ms)**:\
Enter the timeout after which the **Read from JMS**
filter fails. The accepted range of values is 1–20000 ms. Defaults to `1000`
ms.

JMS consumer type
-----------------

The **JMS consumer type**
settings enable you to configure the following:

**Durable subscription**:\
Create or use a durable topic subscription to consume messages from the server. This option is only available for **Topic**
and **JNDI lookup**
source types.

{{< alert title="Note" color="primary" >}}This is only available with a **Topic**
source and the JMS service used must have a client ID configured. If a **JNDI lookup**
source is configured, the name must not point to a topic. {{< /alert >}}

**Topic subscriber name**:\
Enter the JMS subscriber name used to identify the durable subscription.

Message processing
------------------

The **JMS consumer type**
settings enable you to configure the following:

**Extraction Method**:\
Specify how to extract the data from the JMS message from the list:

-   Insert the JMS message directly into the attribute named below (this is the default)
-   Populate the attribute below with the value inferred from message type to Java

**Attribute Name**:\
The name of the API Gateway message attribute that holds the data extracted from the JMS message. Defaults to the `jms.message`
message attribute.

**Policy**:\
Select the appropriate policy to run on the JMS message after it has been consumed by the API Gateway.

**Send Response to Configured Destination**:\
Specifies whether the API Gateway sends a reply to the response queue named in the incoming message (in the `ReplyTo`
header). This option is selected by default. Deselecting this option means that the API Gateway never sends a reply to the response queue named in the `ReplyTo`
header.
