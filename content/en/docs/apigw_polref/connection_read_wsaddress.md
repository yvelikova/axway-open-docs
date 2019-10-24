{
"title": "Read WS-Addressing information",
"linkTitle": "Read WS-Addressing information",
"date": "2019-10-17",
"description": "The WS-Addressing specification defines a transport-independent standard for including addressing information in SOAP messages. API Gateway can read WS-Addressing information contained in a SOAP message and subsequently use this information to route the message to its intended destination."
}
﻿
<div id="p_connection_read_wsaddress_over">

Overview
--------

The WS-Addressing specification defines a transport-independent standard for including addressing information in SOAP messages. API Gateway can read WS-Addressing information contained in a SOAP message and subsequently use this information to route the message to its intended destination.

See also [*Insert WS-Addressing information* on page 1](connection_insert_wsaddress.htm).

</div>

<div id="p_connection_read_wsaddress_conf">

Configuration
-------------

Complete the following fields to configure API Gateway to read WS-Addressing information contained in a SOAP message.

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Address location**:\
Specify the name of the element in the WS-Addressing block that contains the address of the destination server to which the API Gateway routes the message. For more information on configuring XPath expressions, see
[Configure XPath expressions](/csh?context=640&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

By default, XPath expressions are available to extract the destination server from the `From`, `To`, `ReplyTo`, and `FaultTo`
elements. Click the **Add**
button to add a new XPath expression to extract the address from a different location.

**Remove enclosing WS-Addressing element**:\
If this option is selected, the WS-Addressing element returned by the XPath expression configured above is removed from the SOAP header when it has been consumed.

</div>
