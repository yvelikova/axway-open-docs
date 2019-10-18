{
"title": "TIBCO Enterprise Message Service Routing Filter",
"linkTitle": "TIBCO Enterprise Message Service Routing Filter",
"date": "2019-10-17",
"description": "TIBCO Enterprise Message Service™\\n(EMS) provides a distributed message bus with native support for Java Message Service (JMS) and TIBCO Rendezvous, along with other protocols."
}
<div id="p_connector_ems_filter_overview">

Overview
--------

TIBCO Enterprise Message Service™
(EMS) provides a distributed message bus with native support for Java Message Service (JMS) and TIBCO Rendezvous, along with other protocols.

In general, TIBCO EMS clients *produce*
messages and send them to the TIBCO EMS Server. Similarly, TIBCO EMS clients can connect to the TIBCO EMS Server and declare an interest in a particular queue or topic on that server. In doing so, it can *consume*
messages that have been produced by another TIBCO EMS client.

The API Gateway can act as a message producer by sending messages to theTIBCO EMS Server and as a message consumer by listening on a queue or topic at the server. The TIBCO EMS Routing filter can be used as amessage producer in this manner.

</div>

<div id="p_connector_ems_filter_connection">

Connection
----------

On the **Connection**
tab, click the button on the right, and select a previously configured TIBCO EMS Connection in the tree. Messages are sent to this TIBCO EMS connection and are dropped on the queue or topic specified on the **Request**
tab.

To add a TIBCO EMS Connection, right-click the **TIBCO Enterprise Messaging Service Connections**
node, and select **Add a TIBCO EMS connection**
. For more information on configuring TIBCO EMS connections, see the TIBCO Enterprise Messaging Service Connection
topic.

</div>

<div id="p_connector_ems_filter_request">

Request
-------

The **Request**
tab is used to configure properties of the request to the messaging system. You can configure the following fields:

**Destination Type**
:\
You must specify whether the name specified in the **Queue or Topic Name**
field below is a `Queue`
or `Topic`
.

**Queue or Topic Name**
:\
Enter the name of the queue or topic that you want to drop messages on to.

**Delivery Mode**
:\
The API Gateway supports the following delivery modes:

-   **Persistent**
    :\
    Instructs the TIBCO EMS Server to ensure that a message is not lost in transit if the server fails. A message sent with this delivery mode is logged to persistent storage when it is sent.

-   **Non-persistent**
    :\
    Does not require the TIBCO EMS Server to store the message. With this mode, the message may be lost if the server fails.

-   **Reliable**
    :\
    When using reliable mode the TIBCO EMS Server never sends an acknowledgment or confirmation receipt back to the producer. Thisgreatly decreases the volume of traffic on the network and can result in improved performance.

**Priority Level**
:\
You can use message priority levels to instruct the TIBCO EMS server to deliver urgent messages first. The ten levels of priority range from 0 (lowest) to 9 (highest). If you do not specify a priority level, the default level is 1. The TIBCO EMS Server tries to deliver higher priority messages before lower priority ones but does not have to deliver messages in exact order of priority.

**Time to Live**
:\
By default, a message never expires. However, if a message becomes obsolete after a certain period, you may want to set an expiration time (in milliseconds). If the specified time to live value is 0, the message never expires.

**Message ID**
:\
Enter an identifier to be used as the unique identifier for the message. By default, the unique identifier is the ID assigned to the message by the API Gateway (`${id}`
). However, you can use a proprietary correlation system, perhaps using MIME message IDs instead of Axway message IDs.

**Correlation ID**
:\
Enter an identifier for the message that the API Gateway uses to correlate response messages with the corresponding request messages. Usually, if `${id}`
is specified in the **Message ID**
field above, it is also used here to correlate request messages with their correct response messages.

**Message Type**
:\
This enables you to specify the type of data to be serialized and sent in the message to the TIBCO EMS Server. The option selected depends on what part of the message you want to send to the consumer.

For example, if you wish to send the message body you should select the option to format the body according to the rules defined in the [SOAP over JMS](http://www.w3.org/TR/soapjms/)
recommendation. Alternatively, if you wish to serialize a list of name-value pairs to the message, choose the option to create a `MapMessage`
.

The following list describes the various serialization options available:

-   `Use content.body`
    attribute to create a message in the format specified in the SOAP over JavaMessage Service recommendation:\
    If this option is selected, messages are formatted according to the [SOAP over JMS](http://www.w3.org/TR/soapjms/)
    recommendation. This is the default option.

-   `Create a MapMessage from the java.lang.Map in the attribute named below:`\
    Select this option to create a `javax.jms.MapMessage`
    from the API Gateway message attribute (named below) that consists of name-value pairs.

-   `Create a ByteMessage from the attribute named below:`\
    Select this option to create a `javax.jms.ByteMessage`
    from the API Gateway message attribute named below.

-   `Create an ObjectMessage from the java.lang.Serializablein the attribute named below:`\
    Select this option to create a `javax.jms.ObjectMessage`
    from the API Gateway message attribute named below.

-   `Create a TextMessage from the attribute named below:`\
    A `javax.jms.TextMessage`
    can be created fromthe message attribute named below by selecting this option.

\
**Attribute Name**
:\
Enter the name of the API Gateway message attribute that holds the data to be serialized to a JMS message and sent over the wire to the TIBCO EMS Server. The type of the attribute named here must correspond to that selected in the **Message Type**
field above.

**Custom Message Properties**
:\
You can set custom properties for messages in addition to the standard JMS header fields. Custom properties may be useful to pass additional information to the TIBCO EMS Server. You can use message attribute selectors as property values. For example, you can create a property called `AuthNUser`
, and set its value to `${authenticated.subject.id}`
. When this message is routed to the specified queue or topic, other consumers can then filter on this property (for example, only consume messages where `AuthNUser`
equals `admin`
). For more details on selectors, see [XXX](general_selector.htm)
.

</div>

<div id="p_connector_ems_filter_response">

Response
--------

The **Response**
tab is used to configure whether the API Gateway should use asynchronous or synchronous communication when talking to the messaging system. If the API Gateway is to use asynchronous communication, select `No Response`
from the **Response**
drop-down list. If synchronous communication is required, you must configure where to read the response from the TIBCO EMS Server.

When synchronous communication is selected, the API Gateway waits on a message from a queue/topic from the TIBCO EMS Server. The API Gateway sets the `JMSReplyTo`
property on each message that it sends. The value of the `JMSReplyTo`
property is the queue, temporary queue, topic, or temporary topic that was selected in the **Response**
drop-down list. It is the responsibility of the application that consumes the message from the queue to send the message back to the destination specified in the `JMSReplyTo`
property.

The API Gateway sets the `JMSCorrelationID`
property to the value of the **Correlation ID**
field on the **Response**
tab to correlate requests messages to their corresponding response messages. If the user has selected to use a temporary queue or temporary topic, this is created when the API Gateway starts up.

**Response**
:\
Select where to read the response message from. The following options areavailable:

-   **No Response**
    :\
    Select this option if you do not expect or require a response fromthe TIBCO EMS Server.

-   **Response in Queue Named Below**
    :\
    If you want the TIBCO EMS Server to place response messages into a named queue, select this option, and enter the name of the queue in the field below.

-   **Response in Temporary Queue**
    :\
    You can also instruct the TIBCO EMS Server to place response messages on a temporary queue from which the API Gateway can pick them up.

-   **Response in Topic Named Below**
    :\
    Select this option to tell the TIBCO EMS Server to place response messages in the topic named in the field below.

-   **Response in Temporary Topic**
    :\
    If you want to read response messages from a temporary topic, selectthis option.

{{< alert title="Note" color="primary" >}}When a temporary destination is selected, this destination is created at start-up of the API Gateway. Only the API Gateway can read from the temporary destination, however, any application can write to it. The API Gateway uses the value of the `JMSReplyTo`
header to indicate the location where it reads responses from.{{< /alert >}}
**Reply Topic/Queue Name**
:\
If you have selected a named queue or topic (*not*
a temporary queue or topic) from the **Response**
field above, enter its name here.

**Time Out**
:\
The API Gateway waits a certain time period for a response to be received before times out. If the API Gateway does time out waiting for a response, this filter fails. Enter the time out value in milliseconds.

</div>
