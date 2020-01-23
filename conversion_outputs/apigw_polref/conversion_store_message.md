{
"title": "Store message",
"linkTitle": "Store message",
"date": "2019-10-17",
"description": "You can use the **Store Message**\\nfilter to store message content in a specified message attribute. You can store the contents of a request message or a response message, depending on where the filter is placed in the policy."
}
﻿
<div id="p_conversion_store_message_overview">

Overview
--------

You can use the **Store Message**
filter to store message content in a specified message attribute. You can store the contents of a request message or a response message, depending on where the filter is placed in the policy.

For example, you could use this filter to store the original message content for reuse later if you need to manipulate the message for authentication or authorization. Typically, this filter is used with the **Restore Message**
filter, which is then used to restore the original message content. For more details, see [*Restore message* on page 1](conversion_restore_message.htm).

</div>

<div id="p_conversion_store_message_conf">

Configuration
-------------

**Name**:\
Enter a suitable name for this filter to display in a policy.

**Attribute to store message**:\
Enter the name of the message attribute used to store the message content. Defaults to `store.content.body`.

</div>
