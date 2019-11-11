{
"title": "Set response status",
"linkTitle": "Set response status",
"date": "2019-10-17",
"description": "The **Set Response Status**\\nfilter is used to explicitly set the response status of a call. This status is then recorded as a message metric for use in reporting."
}
﻿
<div id="p_utility_response_status_overview">

Overview
--------

The **Set Response Status**
filter is used to explicitly set the response status of a call. This status is then recorded as a message metric for use in reporting.

This filter is primarily used in cases where the fault handler for a policy is a **Policy Shortcut**
filter. If the **Policy Shortcut**
passes, the overall `fail`
status still exists. You can use the **Set Response Status**
filter to explicitly set the response status back to `pass`, if necessary.

See also [*Policy shortcut* on page 1](utility_policy_shortcut.htm).

</div>

<div id="p_utility_response_status_conf">

Configuration
-------------

**Name**:\
Enter a meaningful name for the filter to display in a policy.

**Response Status**:\
Select **Pass**
or **Fail**
to set the response status.

</div>
