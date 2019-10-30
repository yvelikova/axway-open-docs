{
"title": "Route to SMTP",
"linkTitle": "Route to SMTP",
"date": "2019-10-17",
"description": "You can use the **SMTP**\\nfilter to relay messages to an email recipient using a configured SMTP server. "
}
﻿
<div id="p_connection_smtp_over">

Overview
--------

You can use the **SMTP**
filter to relay messages to an email recipient using a configured SMTP server.

</div>

<div id="p_connection_smtp_settings">

General settings
----------------

Complete the following general settings:

**Name**:\
Specify a descriptive name for this filter to display in a policy.

**SMTP Server Settings**:\
Click the browse button and select a preconfigured SMTP server in the tree.

</div>

<div id="p_connection_smtp_msg_settings">

Message settings
----------------

Complete the following fields in the **Message settings**
section:

**To**:\
Enter the email address of the recipients of the messages. You can enter multiple addresses by separating each one using a semicolon. For example:

    joe.soap@example.com;joe.bloggs@example.com;john.doe@example.com

**From**:\
Enter the email address of the senders of the messages. You can enter multiple addresses by separating each one using a semicolon.

**Subject**:\
Enter some text as the subject of the email messages.

**Send content in body**:\
Select this option to send the message content in the body of the message. This is selected by default.

**Send content as attachment**:\
Select this option to send the message content as an attachment.

**Send content in body and as attachment**:\
Select this option to send the message content in the body of the message and as an attachment.

**Attachment name**:\
If you selected **Send content as attachment**
or **Send content in body and as attachment**, enter a name for the attachment in this field. The default is `${id}.bin`. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
