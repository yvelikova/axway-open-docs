{
"title": "Configure a JMS consumer",
"linkTitle": "Configure a JMS consumer",
"date": "2019-10-17",
"description": "You can configure multiple JMS consumers under a single JMS session, which share that session. Alternatively, you can configure a single JMS consumer per JMS session. Consumers sharing a JMS session access that session serially. Each consumer blocks until a response (if any) is received. Consumers with their own session do not encounter this problem, which may improve performance."
}
﻿

You can configure multiple JMS consumers under a single JMS session, which share that session. Alternatively, you can configure a single JMS consumer per JMS session. Consumers sharing a JMS session access that session serially. Each consumer blocks until a response (if any) is received. Consumers with their own session do not encounter this problem, which may improve performance.

You can configure JMS consumers using the JMS Wizard, or by right-clicking an existing JMS session, and selecting **Add JMS Consumer**.

{{< alert title="Note" color="primary" >}}You must first configure a JMS service and a JMS session before you can configure a JMS consumer. For more details, see [*Configure a JMS service* on page 1](general_messaging_service.htm).{{< /alert >}}

JMS Message source
------------------

On the **General**
tab, configure the following fields in the **Message source**
section:

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

JMS consumer type
-----------------

The **JMS consumer type**
settings enable you to configure the following:

**Durable subscription**:\

Select this setting to use a durable topic subscription to consume messages from the server. This option is available only for **Topic**
and **JNDI lookup**
source types.

**Topic subscriber name**:\

Enter the JMS subscriber name used to identify the durable subscription.

{{< alert title="Note" color="primary" >}}The JMS service used must have a **JMS Client ID**
configured. If a **JNDI lookup**
source is configured, the name must not point to a topic.\
Only one durable subscriber (described by the JMS client ID and subscriber name) can be active at a time. {{< /alert >}}

Message processing
------------------

The **Message processing**
settings include the following:

**Extraction Method**:\

Specify how to extract the data from the JMS message from the drop-down list:

-   Create a `content.body`
    attribute based on the SOAP over JMS draft specification (the default)
-   Insert the JMS message directly into the attribute named below
-   Populate the attribute below with the value inferred from message type to Java

**Attribute Name**:\

The name of the API Gateway message attribute that holds the data extracted from the JMS message. Defaults to the `jms.message`
message attribute.

**Policy**:\

Select the appropriate policy from the list to run on the JMS message after it has been consumed by the API Gateway. This setting is required.

**Send Response to Configured Destination**:\

Specifies whether the API Gateway sends a reply to the response queue named in the incoming message (in the `ReplyTo`
header). This option is selected by default. Deselecting this option means that the API Gateway never sends a reply to the response queue named in the `ReplyTo`
header.

Logging settings
----------------

The **Logging Settings**
tab enables you to configure the logging level for all filters in policies executed on this JMS consumer, and to configure when message payloads are logged.

### Transaction Audit Logging Level

You can configure the following settings on all filters executed on the JMS consumer:

| Logging level | Description                                                                                    |
|---------------|------------------------------------------------------------------------------------------------|
| **Fatal**     | Logs Fatal log points that occur on all filters executed.                                      |
| **Failure**   | Logs Failure log points that occur on all filters executed. This is the default logging level. |
| **Success**   | Logs Success log points that occur on all filters executed.                                    |

For details on logging levels, and configuring logging for a filter, see
[Set transaction log level and log message](/csh?context=520&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

### Transaction Audit Payload Logging

You can configure the following settings for this JMS consumer:

| Payload logging                            | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
| **On receive request from client**         | Log the message payload when a request arrives from the client.                |
| **On send response to client**             | Log the message payload before the response is sent back to the client.        |
| **On send request to remote server**       | Log the message payload before the request is sent using any **Connection**    
  or **Connect to URL**                                                           
  filters deployed in policies.                                                   |
| **On receive response from remote server** | Log the message payload when the response is received using any **Connection** 
  or **Connect to URL**                                                           
  filters deployed in a policies.                                                 |

For details on how to log message payloads at any point in a specific policy, see
[Log message payload](/csh?context=511&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.
