{
"title": "Extract WSS header",
"linkTitle": "Extract WSS header",
"date": "2019-10-17",
"description": "The **Extract WSS Header**\\nfilter extracts a WS-Security `Header`\\nblock from a message. The extracted security header is stored in the `authentication.ws.wsblockinfo`\\nmessage attribute."
}
﻿
<div id="p_attributes_extract_wss_header_over">

Overview
--------

The **Extract WSS Header**
filter extracts a WS-Security `Header`
block from a message. The extracted security header is stored in the `authentication.ws.wsblockinfo`
message attribute.

To process this security header later in the policy, you can specify this message attribute in the configuration window for the specific processing filter. For example, to sign the security header, you can specify the `authentication.ws.wsblockinfo`
message attribute in the **What to Sign**
section of the **XML Signature Generation**
filter. Open the **Message Attribute**
tab on the **What to Sign**
window, and specify this attribute to sign the security header.

<div>

### Timestamp validity

The **Extract WSS Header**
filter implicitly checks the `wsu:Timestamp`
in the WSS `Header`
block, if present. It checks the `Expires`
and `Created`
time to determine whether the current time is between the following values:

    [Created time - drift time], [Expires time + drift time]

The drift time is taken from the value set in **Environment Configuration** > **Server Settings > General > Token drift time (secs)**, which defaults to 300 seconds. This filter fails if the extracted WSS header block contains an invalid timestamp.

</div>

</div>

<div id="p_attributes_extract_wss_header_conf">

Configuration
-------------

Configure the following fields on the **Extract WSS Header**
filter configuration window:

**Name**:\
Enter an intuitive name for this filter to display in a policy (for example, `ExtractCurrent Actor WSS Header`).

**Actor or Role**:\
Specify the name of the SOAP Actor or Role of the WS-Security header that you want to extract. Remember, the WS-Security header is stored in the `authentication.ws.wsblockinfo`
message attribute.

**Remove enclosing WS-Security element**:\
This option removes the enclosing `wsse:Security`
element from the message.

</div>
