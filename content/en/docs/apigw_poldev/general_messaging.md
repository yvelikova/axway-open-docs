{
"title": "Configure messaging services",
"linkTitle": "Configure messaging services",
"date": "2019-10-17",
"description": "A *messaging system* is a loosely coupled, peer-to-peer facility where clients can send messages to, and receive messages from any other client. In a messaging system, a client sends a message to a messaging agent. The recipient of the message can then connect to the same agent and read the message. However, the sender and recipient of the message do not need to be available at the same time to communicate (for example, unlike HTTP). The sender and recipient need only know the name and address of the messaging agent to talk to."
}
﻿

A *messaging system* is a loosely coupled, peer-to-peer facility where clients can send messages to, and receive messages from any other client. In a messaging system, a client sends a message to a messaging agent. The recipient of the message can then connect to the same agent and read the message. However, the sender and recipient of the message do not need to be available at the same time to communicate (for example, unlike HTTP). The sender and recipient need only know the name and address of the messaging agent to talk to.

Java Message Service (JMS) is an implementation of such a messaging system. It provides an API for creating, sending, receiving, and reading messages. Java-based applications can use it to connect to other messaging system implementations. A *JMS provider* can deliver messages synchronously or asynchronously, which means that the client can fire and forget messages or wait for a response before resuming processing. Furthermore, the JMS API ensures different levels of reliability in terms of message delivery. For example, it can ensure that the message is delivered once and only once, or at least once.

API Gateway uses the JMS API to connect to other messaging systems that expose a JMS interface (for example, Oracle WebLogic Server, IBM WebSphere MQ, Red Hat JBoss Messaging, Apache ActiveMQ, or Progress SonicMQ). As a consumer of a JMS queue or topic, the API Gateway can read XML messages and pass them into a policy for validation. These messages can then be routed on over HTTP or dropped on to another JMS queue or topic.

API Gateway also provides a default embedded Apache ActiveMQ service, which enables it to act as a JMS server. For example, this enables API Gateway to integrate external facing REST APIs and SOAP Web services with back-end systems and applications using reliable asynchronous messaging.

Prerequisites
-------------

API Gateway provides all the required third-party JAR files for IBM WebSphere MQ and Apache ActiveMQ (both embedded and external).

{{< alert title="Note" color="primary" >}}For other third-party JMS providers only, you must add the required third-party JAR files to the API Gateway classpath for messaging to function correctly. If the provider's implementation is platform-specific, copy the provider JAR files to `INSTALL_DIR/ext/PLATFORM`.\
`INSTALL_DIR` is your API Gateway installation, and `PLATFORM` is the platform on which API Gateway is installed (`Linux.x86_64`). If the provider implementation is platform-independent, copy the JAR files to `INSTALL_DIR/ext/lib`.{{< /alert >}}

Configure API Gateway messaging using the JMS wizard
----------------------------------------------------

You can use the **JMS Wizard** to configure an API Gateway instance to consume JMS messages from a JMS queue or topic. When a message has been consumed by the API Gateway, it can be sent to a configured policy where the full range of API Gateway message filters can run on the message. The message can then be routed onwards over HTTP or dropped back on to a JMS queue or topic. The **JMS Wizard** guides you through all of the necessary steps to configure messaging (for example, the JMS service, JMS session, and JMS consumer).

To launch the **JMS Wizard**, right-click the instance under the **Environment Configuration > Listeners**
node in the Policy Studio tree, and select **Messaging System > JMS Wizard**. The wizard includes the following windows:

**JMS Service Provider**\

The first window in the wizard enables you to configure connection details to the JMS provider that produces the JMS messages that are consumed by the API Gateway. For details on configuring the fields on this window, see [*Configure a JMS service* on page 1](general_messaging_service.htm). Click **Next** when finished.

**JMS Session Configuration**\

The second window in the wizard enables you to configure settings such as **Remove message from source**
for the JMS session that is established with the JMS provider. For details on configuring these settings, see [*Configure a JMS session* on page 1](general_messaging_session.htm). Click **Next**
when finished.

**JMS Consumer Configuration**\

The third window in the wizard enables you to configure JMS consumer settings. For details on configuring the fields on this window, see [*Configure a JMS consumer* on page 1](general_messaging_consumer.htm). Click **Finish** to complete.

Configure global JMS services in external connections
-----------------------------------------------------

Alternatively, you can configure a global JMS service under the **Environment Configuration > External Connections** node in Policy Studio by right-clicking the **JMS Services** node, and selecting **Add a JMS Service**.

The configured global JMS services can then be used by the API Gateway to drop messages on to a JMS queue or topic, or to read messages from a JMS queue or topic (for example, using the **Send to JMS** or **Read from JMS** filter).

For more details, see [*Configure a JMS service* on page 1](general_messaging_service.htm).

Configure embedded Apache ActiveMQ in API Gateway settings
----------------------------------------------------------

You can use the API Gateway server settings to configure the default embedded Apache ActiveMQ broker available in API Gateway, which enables it to act as a JMS service provider.

In the Policy Studio tree, select **Environment Configuration > Server Settings > Messaging > Embedded ActiveMQ**. For example, you can enable embedded ActiveMQ, and configure location and SSL security settings.

{{< alert title="Note" color="primary" >}}Apache ActiveMQ 5.14.3 restricts serializing object message types. For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.{{< /alert >}}

Monitor messaging using API Gateway Manager
-------------------------------------------

You can use the API Gateway Manager web console to monitor messaging at runtime. For example, you can create, delete, and view JMS topics, queues, and messages at runtime.

For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.
