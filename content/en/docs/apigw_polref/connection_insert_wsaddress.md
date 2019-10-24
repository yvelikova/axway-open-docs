{
"title": "Insert WS-Addressing information",
"linkTitle": "Insert WS-Addressing information",
"date": "2019-10-17",
"description": "The WS-Addressing specification defines a transport-independent standard for including addressing information in SOAP messages. API Gateway can generate WS-Addressing information based on a configured endpoint in a policy, and then insert this information into SOAP messages."
}
﻿
<div id="p_connection_insert_wsaddress_over">

Overview
--------

The WS-Addressing specification defines a transport-independent standard for including addressing information in SOAP messages. API Gateway can generate WS-Addressing information based on a configured endpoint in a policy, and then insert this information into SOAP messages.

See also [*Read WS-Addressing information* on page 1](connection_read_wsaddress.htm).

</div>

<div id="p_connection_insert_wsaddress_conf">

Configuration
-------------

Complete the following fields to configure API Gateway to insert WS-Addressing information into the SOAP message header.

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**To**:\
The message is delivered to the specified destination.

**From**:\
Informs the destination server where the message originated from.

**Reply To**:\
Indicates to the destination server where it should send response messages to.

**Fault To**:\
Indicates to the destination server where it should send fault messages to.

**MessageID**:\
A unique identifier to distinguish this message from others at the destination server. It also provides a mechanism for correlating a specific request with its corresponding response message.

**Action**:\
The specified action indicates what action the destination server should take on the message. Typically, the value of the WS-Addressing `Action`
element corresponds to the SOAPAction on the request message. For this reason, this field defaults to the `soap.request.action`
message attribute.

**Relates To**:\
If responses are to be received asynchronously, the specified value provides a method to associate an incoming reply to its corresponding request.

**Namespace**:\
The WS-Addressing namespace to use in the WS-Addressing block.

</div>
