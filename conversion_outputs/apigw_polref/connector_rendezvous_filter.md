{
"title": "Route to TIBCO Rendezvous",
"linkTitle": "Route to TIBCO Rendezvous",
"date": "2019-10-17",
"description": "TIBCO Rendezvous\\nis a low latency messaging product for real-time high throughput data distribution applications. It facilitates the exchange of data between applications over the network. A TIBCO Rendezvous *daemon*\\n runs on each participating node on the network. All data sent to and read by each application passes through the daemon. API Gateway uses the TIBCO Rendezvous API to communicate with a TIBCO Rendezvous daemon running locally (by default) to send messages to other TIBCO Rendezvous programs. "
}
﻿
<div id="p_connector_rendezvous_filter_overview">

Overview
--------

TIBCO Rendezvous
is a low latency messaging product for real-time high throughput data distribution applications. It facilitates the exchange of data between applications over the network. A TIBCO Rendezvous *daemon*
runs on each participating node on the network. All data sent to and read by each application passes through the daemon. API Gateway uses the TIBCO Rendezvous API to communicate with a TIBCO Rendezvous daemon running locally (by default) to send messages to other TIBCO Rendezvous programs.

You can configure the **TIBCO Rendezvous**
filter to route messages (using a TIBCO Rendezvous daemon) to other TIBCO Rendezvous programs. This filter is found in the Routing category of filters.

</div>

<div id="p_connector_rendezvous_filter_conf">

Configuration
-------------

Configure the following fields to route messages to other TIBCO Rendezvous programs:

**Name**:\
Enter an appropriate name for this filter.

**TIBCO Rendezvous Daemon to Use**:\
Click the button on the right, and select a previously configured TIBCO Rendezvous Daemon from the tree. API Gateway sends messages to the specified TIBCO **Rendezvous Subject**
on this daemon. To add a TIBCO Rendezvous Daemon, right-click the **TIBCO Rendezvous Daemons**
tree node, and select **Add a TIBCO Rendezvous Daemon**. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Rendezvous Subject**:\
The message is sent with the subject entered here meaning that all other TIBCO daemons on the network that have subscribed to this subject name will receive the message. The subject name comprises a series of elements, including wild cards (for example, `*`), separated by dot characters, for example:\

-   `news.sport.soccer`
-   `news.sport.*`
-   `FINANCE.ACCOUNT.SALES`

For more information on the subject name syntax, see the TIBCO Rendezvous documentation.

**Add Fields**\
Click the **Add**
button to add details about a particular field to add to the message. On the **Message Field Definition**
dialog, complete the following fields:

**Field Name**:\
Enter the name of the field to send in the message.

**Type**:\
Select the data type of the value specified in either of the following fields:

**Set value to the following constant value**:\
You can explicitly set this value by entering it here.

**Set value to the object found in the following attribute**:\
To dynamically populate the field value using the contents of a message attribute, select the attribute from the list. At runtime, the contents of the message attribute are placed into the message that is sent to TIBCO Rendezvous.

</div>
