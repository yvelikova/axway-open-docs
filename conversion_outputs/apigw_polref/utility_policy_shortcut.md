{
"title": "Policy shortcut",
"linkTitle": "Policy shortcut",
"date": "2019-10-17",
"description": "The **Policy Shortcut**\\nfilter enables you to reuse the functionality of one policy in another policy. For example, you could create a policy called **Security Tokens**\\nthat inserts various security tokens into the message. You can then create a policy that calls this policy using a **Policy Shortcut**\\nfilter."
}
﻿
<div id="p_utility_policy_shortcut_overview">

Overview
--------

The **Policy Shortcut**
filter enables you to reuse the functionality of one policy in another policy. For example, you could create a policy called **Security Tokens**
that inserts various security tokens into the message. You can then create a policy that calls this policy using a **Policy Shortcut**
filter.

In this way, you can adopt a design pattern of building up reusable pieces of functionality in separate policies, and then bringing them together when required using a **Policy Shortcut**
filter. For example, you can create modular reusable policies to perform specific tasks, such as authentication, content-filtering, or logging, and call them as required using a **Policy Shortcut**
filter.

For details on how to create a sequence of policy shortcuts in a single policy, see [*Create policy shortcut chain* on page 1](utility_policy_shortcut_chain.htm).

</div>

<div id="p_utility_policy_shortcut_conf">

Configuration
-------------

Complete the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Policy Shortcut**:\
Select the policy that to reuse from the tree. You can search for a specific policy by entering its name in the text box, and the policy tree is filtered automatically. The policy in which this **Policy Shortcut**
filter is configured calls the selected policy when it is executed.

{{< alert title="Tip" color="primary" >}}Alternatively, to speed up policy shortcut configuration, you can drag a policy from the tree on the left of the Policy Studio and drop it on to the policy canvas on the right. This automatically configures a policy shortcut to the selected policy.{{< /alert >}}

</div>
