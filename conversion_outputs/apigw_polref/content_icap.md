{
"title": "Send to ICAP",
"linkTitle": "Send to ICAP",
"date": "2019-10-17",
"description": "You can use an **ICAP**\\nfilter to send a message to a preconfigured ICAP server for content adaptation. For example, this includes specific operations such as virus scanning, content filtering, ad insertion, and language translation. "
}
﻿
<div id="p_content_icap_overview">

Overview
--------

You can use an **ICAP**
filter to send a message to a preconfigured ICAP server for content adaptation. For example, this includes specific operations such as virus scanning, content filtering, ad insertion, and language translation.

</div>

<div id="p_content_icap_conf">

Configuration
-------------

Configure the following settings:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**ICAP Server**:\
Click the button next to this field, and select a preconfigured ICAP server in the tree. To add an ICAP server, right-click the **ICAP Servers**
tree node, and select **Add an ICAP Server**. Alternatively, you can configure ICAP servers under the **Environment Configuration** > **External Connections**
node in the Policy Studio tree. For more details on configuring ICAP servers, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_content_icap_examples">

Example policies
----------------

This section shows some example use cases of the **ICAP**
filter configured in policies.

**Request Modification Mode**\
The following policy shows an ICAP filter used in Request Modification (REQMOD) mode:

![Request Modification Mode](/Images/docbook/images/content/icap_reqmod.gif)

This example policy is essentially an internet proxy but with all incoming messages being sent to an ICAP server for virus-checking before being sent to the destination. All ICAP server-bound messages in this instance are REQMOD requests.

**Response Modification Mode**\
The following policy illustrates an ICAP Filter used in Response Modification (RESPMOD) mode:

![Response Modification Mode](/Images/docbook/images/content/icap_respmod.gif)

This example policy also is an internet proxy but with all responses being sent to an ICAP server for virus-checking after being sent to the destination and before being sent back to the client. All ICAP server-bound messages in this instance are RESPMOD requests.

</div>
