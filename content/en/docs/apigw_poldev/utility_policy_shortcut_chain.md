{
"title": "Policy shortcut chain",
"linkTitle": "Policy shortcut chain",
"date": "2019-10-17",
"description": "The **Policy Shortcut Chain**\\nfilter enables you to run a series of configured policies in sequence without needing to wire up a policy containing several **Policy Shortcut**\\nfilters. This enables you to adopt a design pattern of creating modular reusable policies to perform specific tasks, such as authentication, content-filtering, or logging. You can then link these policies together into a single, coherent sequence using this filter."
}
﻿
<div id="p_utility_policy_shortcut_chain_over">

Overview
--------

The **Policy Shortcut Chain**
filter enables you to run a series of configured policies in sequence without needing to wire up a policy containing several **Policy Shortcut**
filters. This enables you to adopt a design pattern of creating modular reusable policies to perform specific tasks, such as authentication, content-filtering, or logging. You can then link these policies together into a single, coherent sequence using this filter.

Each policy in the **Policy Shortcut Chain**
is evaluated in succession. The evaluation proceeds as each policy in the chain passes, until finally the filter exits with a pass status. If a policy in the chain fails, the entire **Policy Shortcut Chain**
filter also fails at that point.

See also [*Policy shortcut* on page 1](utility_policy_shortcut.htm).

</div>

<div id="p_utility_policy_shortcut_chain_conf">

General settings
----------------

Complete the following general setting:

**Name**:\
Enter a meaningful name for the filter to display in a policy. For example, the name might reflect the business logic of the policies that are chained together in this filter.

</div>

<div id="p_utility_policy_shortcut_chain_add">

Add a policy shortcut
---------------------

Click the **Add**
button to display the **Policy Shortcut Editor**
dialog, which enables you to add a policy shortcut to the chain. Complete the following settings in this dialog:

**Shortcut Label**:\
Enter an appropriate name for this policy shortcut.

**Evaluate this shortcut when executing the chain**:\
Select whether to evaluate this policy shortcut when executing a policy shortcut chain. When this option is selected, the policy shortcut has an **Active**
status in the table view of the policy shortcut chain. This option is selected by default.

**Choose a specific policy to execute**:\
Select this option to choose a specific policy to execute. This option is selected by default.

**Policy**:\
Click the browse button next to the **Policy**
field, and select a policy to reuse from the tree (for example, **Health Check**). You can search for a specific policy by entering its name in the text box, and the policy tree is filtered automatically. The policy in which this **Policy Shortcut Chain**
filter is configured calls the selected policy when it is executed.

**Choose a policy to execute by label**:\
Select this option to choose a policy to execute based on a specific policy label. For example, this enables you to use the same policy on all requests or responses, and also enables you to update the assigned policy without needing to rewire any existing policies. For more details on global policies, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Policy Label**:\
Click the browse button next to the **Policy Label**
field, and select a policy label to reuse from the tree (for example, **API Gateway request policy (Health Check)**). The policy in which this **Policy Shortcut Chain**
filter is configured calls the selected policy label when it is executed.

Click **OK**
when finished. You can click **Add**
and repeat as necessary to add more policy shortcuts to the chain. You can alter the sequence in which the policies are executed by selecting a policy in the table and clicking the **Up**
and **Down**
buttons on the right. The policies are executed in the order in which they are listed in the table.

</div>

<div id="p_utility_policy_shortcut_chain_edit">

Edit a policy shortcut
----------------------

Select an existing policy shortcut, and click the **Edit**
button to display the **Policy Shortcut Editor**
dialog. Complete the following settings in this dialog:

**Shortcut Label**:\
Enter an appropriate name for this policy shortcut.

**Evaluate this shortcut when executing the chain**:\
Select whether to evaluate this policy shortcut when executing a policy shortcut chain. When this option is selected, the policy shortcut has an **Active**
status in the table view of the policy shortcut chain.

**Policy**
or **Policy Label**:\
Click the browse button next to the **Policy**
or **Policy Label**
field (depending on whether you chose a specific policy or a policy label when creating the policy shortcut). Select a policy or policy label to reuse from the tree (for example, **Health Check**
or **API Gateway request policy (Health Check)**). The policy in which this **Policy Shortcut Chain**
filter is configured calls the selected policy or policy label when it is executed.

</div>
