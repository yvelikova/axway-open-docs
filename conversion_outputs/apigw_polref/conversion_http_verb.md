{
"title": "Set HTTP verb",
"linkTitle": "Set HTTP verb",
"date": "2019-10-17",
"description": "You can use the **Set HTTP Verb**\\nfilter to explicitly set the HTTP verb in the message that is sent from the API Gateway. By default, all messages are routed onwards using the HTTP verb that the API Gateway received in the request from the client. If the message originated from a non-HTTP client (for example, JMS), the messages are routed using the HTTP POST verb."
}
﻿
<div id="p_conversion_http_verb_overview">

Overview
--------

You can use the **Set HTTP Verb**
filter to explicitly set the HTTP verb in the message that is sent from the API Gateway. By default, all messages are routed onwards using the HTTP verb that the API Gateway received in the request from the client. If the message originated from a non-HTTP client (for example, JMS), the messages are routed using the HTTP POST verb.

</div>

<div id="p_conversion_http_verb_conf">

Configuration
-------------

Complete the following fields:

**Name**:\
Enter a name for the filter to display in a policy.

**HTTP Verb**:\
Specify the HTTP verb to use in the message that is routed onwards.

</div>
