{
"title": "Abort policy",
"linkTitle": "Abort policy",
"date": "2019-10-17",
"description": "You can use the **Abort**\\nfilter to force a policy to throw an exception. You can use it to test the behavior of the policy when an exception occurs."
}
﻿
<div id="p_utility_abort_overview">

Overview
--------

You can use the **Abort**
filter to force a policy to throw an exception. You can use it to test the behavior of the policy when an exception occurs.

For example, to quickly test how the policy behaves when a **Message Size**
filter throws an exception, you can place an **Abort**
filter before it in the policy. The following policy diagram illustrates this:

![Abort policy](/Images/docbook/images/utility/utility_abort.gif)

</div>

<div id="p_utility_abort_conf">

Configuration
-------------

Enter a meaningful name for the filter to display in a policy.

See also [*False filter* on page 1](utility_false.htm).

</div>
