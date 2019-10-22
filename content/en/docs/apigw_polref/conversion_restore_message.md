{
"title": "Restore message",
"linkTitle": "Restore message",
"date": "2019-10-17",
"description": "You can use the **Restore Message**\\nfilter to restore message content at runtime using a specified selector expression. You can restore the contents of a request message or a response message, depending on where the filter is placed in the policy."
}
﻿
<div id="p_conversion_restore_message_overview">

Overview
--------

You can use the **Restore Message**
filter to restore message content at runtime using a specified selector expression. You can restore the contents of a request message or a response message, depending on where the filter is placed in the policy.

For example, you could use this filter to restore original message content if you needed to manipulate the message for authentication or authorization. Typically, this filter is used with the **Store Message**
filter, which is first used to store the original message content. For more details, see [*Store message* on page 1](conversion_store_message.htm).

</div>

<div id="p_conversion_restore_message_conf">

Configuration
-------------

**Name**:\
Enter a suitable name for this filter to display in a policy.

**Selector Expression to retrieve message**:\
Enter the selector expression used to restore the message content. Defaults to `${store.content.body}`. For more details on selector expressions, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
