{
"title": "Extract WSS UsernameToken element",
"linkTitle": "Extract WSS UsernameToken element",
"date": "2019-10-17",
"description": "You can use the **Extract WSS Username Token**\\nfilter to extract a WS-Security `UsernameToken`\\nfrom a message if it exists. The extracted `UsernameToken`\\ntoken is stored in the `wss.usernameToken`\\nmessage attribute."
}
﻿
<div id="p_attributes_extract_usernametoken_over">

Overview
--------

You can use the **Extract WSS Username Token**
filter to extract a WS-Security `UsernameToken`
from a message if it exists. The extracted `UsernameToken`
token is stored in the `wss.usernameToken`
message attribute.

To process the `UsernameToken`
later in the policy, you can specify this message attribute in the configuration window for the processing filter. For example, to sign the `UsernameToken`, you can simply specify the `wss.usernameToken`
message attribute in the **What to Sign**
section of the **XML Signature Generation**
filter. Open the **Message Attribute**
tab on the **What to Sign**
window, and specify this attribute to sign the user name token.

</div>

<div id="p_attributes_extract_usernametoken_conf">

Configuration
-------------

Configure the following field on the **Extract WSS Username Token**
filter configuration window:

**Name**:\
Enter an appropriate name for the filter. Remember that the WS-Security `UsernameToken`
is stored in the `wss.usernameToken`
message attribute.

</div>
