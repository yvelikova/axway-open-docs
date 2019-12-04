{
"title": "Call internal service",
"linkTitle": "Call internal service",
"date": "2019-10-17",
"description": "The **Call internal service**\\nfilter is a special filter that passes messages to an internal servlet application or static content provider that has been deployed at the API Gateway. The appropriate application is selected based on the relative path on which the request message is received."
}
﻿
<div id="p_connection_call_internal_over">

Overview
--------

The **Call internal service**
filter is a special filter that passes messages to an internal servlet application or static content provider that has been deployed at the API Gateway. The appropriate application is selected based on the relative path on which the request message is received.

This filter is used by Management Services that are configured to listen on the Management Interface on port 8090. For more information on how the **Call internal service**
filter is used by these services, see
[Management services](/csh?context=620&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_connection_call_internal_config">

Configuration
-------------

You can configure the following fields on the filter window:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Additional HTTP Headers to Send to Internal Service**:\
Click the **Add**
button to configure additional HTTP headers to send to the internal application. Specify the following fields on the **HTTP Header**
dialog:

-   **HTTP Header Name**:\
    Enter the name of the HTTP header to add to the message.
-   **HTTP Header Value**:\
    Enter the value of the new HTTP header. You can also enter selectors to represent message attributes. At runtime, API Gateway expands these selectors to the current value of the corresponding message attribute. For example, the `${id}`
    selector is replaced by the value of the current message ID. For more details on selectors, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .\

</div>
