{
"title": "Configure a JMS service",
"linkTitle": "Configure a JMS service",
"date": "2019-10-17",
"description": "You can configure a global JMS service under the **Environment Configuration** > **External Connections**\\nnode in Policy Studio by right-clicking the **JMS Services**\\nnode, and selecting **Add a JMS Service**\\n. The details entered in the **JMS Service**\\ndialog can then be used by the API Gateway to drop messages on to a JMS queue or topic, or to read messages from a JMS queue or topic. For more details, see the following filters:"
}
﻿

You can configure a global JMS service under the **Environment Configuration** > **External Connections**
node in Policy Studio by right-clicking the **JMS Services**
node, and selecting **Add a JMS Service**
. The details entered in the **JMS Service**
dialog can then be used by the API Gateway to drop messages on to a JMS queue or topic, or to read messages from a JMS queue or topic. For more details, see the following filters:

-   [*Send to JMS* on page 1](connection_messaging.htm)
-   [*Read from JMS* on page 1](connection_messaging_read.htm)

Alternatively, you can configure a JMS service at the API Gateway instance level, and configure the API Gateway to consume a JMS queue or topic. Right-click the instance under the **Environment Configuration** > **Listeners**
node in the Policy Studio, and select **JMS Wizard**.

General configuration
---------------------

Configure the following fields on the **JMS Service**
tab:

**Name**:\

Enter a descriptive name for the JMS provider in the **Name**
field.

**Service type**:\

Select one of the following from the list:

-   **Embedded Apache ActiveMQ**: The default Apache ActiveMQ service that is embedded in the API Gateway.
-   **Apache ActiveMQ**: An external Apache ActiveMQ service that is not embedded in the API Gateway.
-   **IBM MQ**: An IBM WebSphere MQ service. See [*IBM WebSphere MQ settings* on page 1](#IBM).
-   **Standard JMS**: Other systems that support the JMS standard (for example, Oracle WebLogic Server, IBM MQSeries, JBoss Messaging, or Progress SonicMQ).

Apache ActiveMQ and Standard JMS settings
-----------------------------------------

The following settings are displayed when you select a **Service Type**
of Embedded Apache ActiveMQ, Apache ActiveMQ, or Standard JMS:

**Provider URL**:\

Enter the URL of the JMS provider. For example, a URL for a JBoss application server might be `jnp://localhost:1099`. Defaults to `local`
for Embedded Apache ActiveMQ.

**Initial Context Factory**:\

API Gateway uses a connection factory to create a connection with a JMS provider. A connection factory encapsulates a set of connection configuration parameters that have been defined by the administrator. The following are some example default values:

-   Embedded Apache ActiveMQ: `com.vordel.ama.jndi.InitialContextFactory`
-   External Apache ActiveMQ: `com.vordel.jms.apache.activemq.InitialContextFactory`
-   JBoss application server: `org.jnp.interfaces.NamingContextFactory`

**Connection Factory**:\

Enter the name of the connection factory to use when connecting to the JMS provider. The name of the connection factory is vendor-specific. For example, the connection factory for the JBoss application server is `org.jnp.interfaces:javax.jnp`. Defaults to `connectionFactory`
for embedded and external ActiveMQ.

IBM WebSphere MQ settings
-------------------------

The following settings are displayed when you select a **Service Type**
of **IBM MQ**:

**Host name**:\

Enter the host name of the JMS provider (for example, `localhost`).

**Port number**:\

Enter the port number of the JMS provider (for example, `1414`).

**Queue manager**:\

Enter the virtual queue manager name by which IBM WebSphere Application Server is known to WebSphere MQ (for example, `TEST_BUS`).

**Channel**:\

Enter the IBM WebSphere MQ channel name on the WebSphere MQ system (for example, `MY_QM.TO.TEST_BUS`).

**Initial Context Factory**:\

The API Gateway uses a connection factory to create a connection with a JMS provider. A connection factory encapsulates a set of connection configuration parameters that have been defined by the administrator. Defaults to `com.vordel.jms.ibm.mq.InitialContextFactory`.

**Connection Factory**:\

Enter the name of the connection factory to use when connecting to the JMS provider. Defaults to `connectionFactory`.

Settings for all service types
------------------------------

The following optional settings are common to all service types:

**Username**:\

If a user name is required to connect to this JMS provider, enter it here.

**Password**:\

Enter the password for this user.

**Custom Message Properties**:\

You can add JNDI context settings by clicking **Add**, and entering name and value properties in the fields.

For the **Embedded Apache ActiveMQ**
service type, you can define Apache ActiveMQ URI parameters using JNDI properties. For example, see the following:

-   <http://activemq.apache.org/tcp-transport-reference.html>
-   <http://activemq.apache.org/connection-configuration-uri.html>
-   <http://activemq.apache.org/redelivery-policy.html>
-   <http://activemq.apache.org/ssl-transport-reference.html>
-   <http://activemq.apache.org/what-is-the-prefetch-limit-for.html>

Configure advanced settings
---------------------------

You can configure the following options on the **Advanced Settings**
tab:

### JMS service settings

The advanced JMS service settings are as follows:

**JMS Client ID**:

Enter the client ID required by JMS durable topic subscriptions to consume messages from the service. For more details, see the following:

-   [*Configure a JMS consumer* on page 1](general_messaging_consumer.htm)
-   [*Read from JMS* on page 1](connection_messaging_read.htm)

**Max sessions for JMS filters**:

Enter the maximum number of sessions that are created for the JMS filters (**Send To JMS** and **Read From JMS**) using this JMS service. The default value is 20.

**Automatic reconnection**:

Select whether a reconnection to the JMS server is performed when the configured JMS provider raises a connection error. This setting is selected by default.

**Start first connection asynchronously**:

Select whether the first connection attempt is detached from the API Gateway startup sequence. When this setting is selected, API Gateway starts even if the JMS connection cannot be established.

### SSL settings

{{< alert title="Note" color="primary" >}}SSL settings are available only for the **IBM MQ**
and external **Apache ActiveMQ**
JMS service types.{{< /alert >}}

You can configure the following SSL settings:

**Cipher suite**:\

Click the browse button on the right, and select SSL cipher suites from the list of JSSE or IBM cipher suites in the dialog (for example, **SSL\_RSA\_WITH\_RC4\_128\_MD5**).

{{< alert title="Note" color="primary" >}}When using an **IBM MQ**
JMS service type, you can select only one SSL cipher suite. For more details, see your IBM WebSphere MQ documentation. When using an **Apache ActiveMQ**
JMS service type, you can select multiple cipher suites.{{< /alert >}}

**Trusted certificates**:\

When a cipher suite is selected, you can select SSL trusted certificates and authorities from the list. The selected certificates are used to check the JMS server certificate.

**Client certificate (SSL mutual authentication)**:\

Click **Client Certificate**
to select the SSL client certificate and key to use. This setting is required only for SSL mutual authentication.

Next steps
----------

When the JMS service has been configured, you can configure the API Gateway to drop messages on to a queue or topic exposed by this service. You can do this when configuring a policy by selecting the service in the **Send to JMS**
or **Read from JMS**
filters. For more details, see the following:

-   [*Send to JMS* on page 1](connection_messaging.htm)
-   [*Read from JMS* on page 1](connection_messaging_read.htm)

You can also configure JMS sessions for the newly added JMS service at the API Gateway instance level. For more details, see [*Configure a JMS session* on page 1](general_messaging_session.htm).
