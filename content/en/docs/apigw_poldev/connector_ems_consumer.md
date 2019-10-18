{
"title": "TIBCO Enterprise Message Service Consumer",
"linkTitle": "TIBCO Enterprise Message Service Consumer",
"date": "2019-10-17",
"description": "TIBCO Enterprise Message Service™\\n(EMS) provides a distributed message bus with native support for Java Messaging Service (JMS) and TIBCO Rendezvous, along with other protocols."
}
<div id="p_connector_ems_consumer_overview">

Overview
--------

TIBCO Enterprise Message Service™
(EMS) provides a distributed message bus with native support for Java Messaging Service (JMS) and TIBCO Rendezvous, along with other protocols.

In general, TIBCO EMS clients *produce*
messages and send them to the TIBCO EMS Server. Similarly, TIBCO EMS clients can connect to the TIBCO EMS Server and declare an interest in a particular queue or topic on that server. In doing so, it can *consume*
messages that have been produced by another TIBCO EMS client.

The API Gateway can act as a message producer by sending messages to theTIBCO EMS Server and as a message consumer by listening on a queue or topic at the server. Both configurations require a connection to the TIBCO EMS Server. For more information on consuming and producing messages to and from TIBCO EMS, please refer to the following pages:

</div>

<div id="p_connector_ems_consumer_conf">

Configuration
-------------

TIBCO EMS Consumers are added at the API Gateway instance level in the Policy Studio.To add a consumer, right-click the **API Gateway**
node under **Listeners**
in the Policy Studio tree view. Select the **TIBCO**
>**Enterprise Messaging Consumer Service**
>**Add**
options from the context menus. The following tabs and fields should be configured on the **TIBCO Enterprise Messaging Service Consumer**
dialog.

***Connection Tab:***\
Click the button on the right, and select a previously configured TIBCO EMS Connection for this consumer to connect to. To add a TIBCO EMS Connection, right-click the **TIBCO EMS Connections**
tree node, and select **Add a TIBCO EMS Connection**
. For more details see the TIBCO EMS Connection
topic.

***Settings Tab:***\
Configure the following fields on the **Settings**
tab:

**Destination Type**
:\
Select whether this consumer will read messages off a queue or topic.

**Queue/Topic Name**
:\
Enter the name of the queue or topic here.

**Selector**
:\
Enter a filter to restrict the messages that are read off the queue or topic.

**Do Not Receive Local Messages**
:\
Check this option if you do not want to consume messages that have beenproduced by the API Gateway. For example, if you have configured a TIBCO EMS Routing filter to place messages on to a queue and have also configured a TIBCO EMS Consumer to read messages from the same queue, you can check this option to ensure that the consumer will ignore these locally generated messages.

**Extraction Method**
:\
The option selected here determines how the API Gateway will serializethe JMS message consumed from the queue or topic so that it can be passed into the policy selected on the **Policy**
tab. Thefollowing options are available:

-   *Create a content.body attribute based on the SOAP overJMS draft specification:*\
    If this option is selected, messages are formatted according to the [SOAP over JMS](http://www.w3.org/TR/soapjms/)
    recommendation, and stored in the `content.body`
    message attribute.

-   *Insert the JMS message directly into the attribute named below:*\
    Select this option to simply store the JMS message directly intothe attribute specified in the **Attribute Name**
    field below.

-   *Populate the attribute below with the value inferredfrom message type to Java:*\
    Select this option if you wish to infer the data type of the JMSmessage from the underlying TIBCO EMS data type. In this case a TIBCO EMS TextMessage, BytesMessage, and MapMessage, will be converted into a java.lang.String, a byte\[\], and a java.lang.Map, respectively, while a JMS ObjectMessage will be deserialized into the attribute specified in the **Attribute Name**
    field below.

**Attribute Name**
:\
Once the message has been consumed it will be stored in the Axwaymessage attribute specified here. The **Extraction Method**
selected above will determine how the raw JMS message is deserialized tothe specified attribute. The consumed message can be processedat any stage hereafter in the policy selected on the **Policy**
tab by accessing this attribute. By default the message is stored in the `ems.message`
attribute.

***Policy Tab:***\
Select a previously configured policy that you want to pass messages to after consuming the messages from the queue or topic configured on the **Settings**
tab.

</div>
