{
"title": "True filter",
"linkTitle": "True filter",
"date": "2019-10-17",
"description": "You can use the **True**\\nfilter to force a path in a policy to return true. For example, this can be useful to prevent a path from ending on a false case and consequently throwing an exception."
}
﻿
<div id="p_utility_true_overview">

Overview
--------

You can use the **True**
filter to force a path in a policy to return true. For example, this can be useful to prevent a path from ending on a false case and consequently throwing an exception.

The following policy parses the HTTP request, and then runs **Attachment1**
on the message. If **Attachment1**
passes, the message is echoed back to the client by the **Reflect**
filter. However, if **Attachment1**
fails, the **Attachment2**
filter is run on the message. Because this is an *end*
node, if this filter fails, an exception is thrown.

![Policy with 2 attachment filters](/Images/docbook/images/utility/utility_true_circuit1.gif)

By adding a **True**
filter to the **Attachment2**
filter, this path always ends on a true case, and so does not throw an exception if **Attachment2**
fails.

![Policy with True filter](/Images/docbook/images/utility/utility_true_circuit2.gif)

See also [*False filter* on page 1](utility_false.htm).

</div>

<div id="p_utility_true_conf">

Configuration
-------------

Enter an appropriate name for this filter to display in a policy.

</div>
