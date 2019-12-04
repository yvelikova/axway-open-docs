{
"title": "False filter",
"linkTitle": "False filter",
"date": "2019-10-17",
"description": "You can use the **False**\\nfilter to force a path in the policy to return false. This can be useful to create a *false positive*\\npath in a policy."
}
﻿
<div id="p_utility_false_overview">

Overview
--------

You can use the **False**
filter to force a path in the policy to return false. This can be useful to create a *false positive*
path in a policy.

The following policy parses the HTTP request and then runs a **Message Size**
filter on the message to make sure that the message is no larger than 1000 bytes. To make sure that the message cannot be greater than this size, you can connect a **False**
filter to the *success*
path of the **Message Size**
filter. This means that an exception is raised if a message exceeds 1000 bytes in size.

![Policy with a False filter](/Images/docbook/images/utility/utility_false_circuit.gif)

See also [*True filter* on page 1](utility_true.htm).

</div>

<div id="p_utility_false_conf">

Configuration
-------------

Enter a descriptive name for this filter to display in a policy.

</div>
