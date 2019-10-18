{
"title": "Configure global policies",
"linkTitle": "Configure global policies",
"date": "2019-10-17",
"description": "Global policies enable you to label policies with specific roles in the API Gateway configuration. For example, you can label a specific policy such as **XML Threat Policy**\\nas a **Global Request policy**. This policy can be executed globally on the request path for all messages passing through API Gateway. "
}
﻿
<div id="p_general_global_policy_over">

Overview
--------

Global policies enable you to label policies with specific roles in the API Gateway configuration. For example, you can label a specific policy such as **XML Threat Policy**
as a **Global Request policy**. This policy can be executed globally on the request path for all messages passing through API Gateway.

Using a global policy in this way enables you to use the same policy on all requests, and for multiple services. It also means that you can change the labeled global policy to a different policy without needing to rewire any existing policies.

For example, using a **Policy Shortcut Chain**
filter in a policy enables you to delegate to one or more policies to perform specific tasks, before continuing execution of the remaining filters in the current policy. Using this approach to encapsulate specific functionality in a policy facilitates modularity and reusability when designing API Gateway policies. This enables you to build up a policy library of reusable routines over time.

Each shortcut in a **Policy Shortcut Chain**
points to a specific policy, which is called at each point in the execution chain. However, consider a policy whose role is to be called first in all message handling contexts before any context-specific policies are run, and call this the run-first role. To realize this, you must create a **Policy Shortcut Chain**
with a link to the run-first policy as its first entry, the context-specific policy as its second link, and so on.

One of the shortcomings of this approach is that if you have set up a large number of **Policy Shortcut Chain**
filters, each calling the run-first policy, and you need to change the run-first policy globally, you must update each **Policy Shortcut Chain**
filter individually to point to the newly designated run-first policy. Similarly, if you wish to ignore the run-first Policy globally, you must remove the first entry in each filter.

Global policies enable you to label a specific policy in terms of its role. You can delegate to the policy using its label instead of a specific link to the policy. This indirection using a label makes it very easy to globally change which policy is delegated to, merely by moving the label from one policy to another. Each filter that refers to the policy using its label now resolves the label to the new policy without needing to change the filter configuration. Similarly, if the label is not applied to a specific policy, nothing is executed for this link.

</div>

<div id="p_general_global_policy_available">

Global policy roles
-------------------

The following global policy roles have a reserved label and a specific meaning in the API Gateway policy framework:

| Role                            | Label                        | Description                                                                                                                                                                     |
|---------------------------------|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Global Request Policy**       | `system.policy.request`      | Executed globally for all messages passing through the API Gateway on the request path.                                                                                         |
| **Global Response Policy**      | `system.policy.response`     | Executed globally for all messages passing through the API Gateway on the response path.                                                                                        |
| **Global Fault Handler Policy** | `system.policy.faulthandler` | If any policy aborts during execution, or a top-level policy fails and has not specified a Fault Handler filter, this policy is executed instead of the internal **SOAP Fault** 
   filter.                                                                                                                                                                          |

You can select specific policies with these roles under the **Policies**
node in the Policy Studio tree. You can then create links to these roles when creating a **Policy Shortcut Chain**. These steps are explained in the next sections.

</div>

<div id="p_general_global_policy_select">

Select a global policy
----------------------

To select a global policy, right-click a policy under the **Policies**
node, and select one or more global policies (for example, **Set as Global Request Policy**, **Set as Global Response Policy**, or **Set as Global Fault Handler Policy**). These policies are executed globally for all messages passing through API Gateway.

The following example shows the **XML Threat Policy**
set as the **Global Request Policy**. The policy node labeled for the specific role is displayed with a globe icon:

![Selecting a Global Policy](/Images/docbook/images/general/select_global_policy.gif)

When you have selected the policy for a specific role, you can then reference the labeled policy in a **Policy Shortcut Chain**
filter, or at the service level in a relative path or web service resolver. Referencing a labeled policy is different from referencing a specific policy directly. Referencing a policy directly involves selecting a specific policy to execute in the chain. Referencing a labeled policy means selecting a filter by its label only.

The main advantage of this approach is that you can configure a policy to run in a policy shortcut chain in a specific role, and then select a different policy as the global policy for that role. All references to the global policy label in the various shortcut chain filters are changed to use the newly selected policy, without requiring you to modify each policy shortcut chain filter individually to explicitly point to a different policy.

Selecting another policy in a global role deselects the previously selected policy. The following example shows the **Health Check**
set in the global role, and the **XML Threat Policy**
is no longer selected:

![Selecting a Different Global Policy](/Images/docbook/images/general/deselect_global_policy.gif)

{{< alert title="Note" color="primary" >}}You cannot select a policy for a specific role if, in doing so, you create a loop in the policies. For example, if a **Policy Shortcut Chain**
filter has a reference to a labeled policy, and the filter’s parent policy is marked as the labeled policy, the filter would call back to itself in a loop. This error is caught, and a trace line is output to Policy Studio **Console**
view.{{< /alert >}}

</div>

<div id="p_general_global_policy_shortcut">

Configure global policies in a policy shortcut chain
----------------------------------------------------

When adding a policy shortcut in a **Policy Shortcut Chain**
filter, you can select to call a labeled policy instead of selecting a specific policy. The following example from the **Add a new Shortcut to a Policy**
dialog shows adding a shortcut to the **Global Request Policy (Health Check)**
policy label:

![Creating a Policy Shortcut](/Images/docbook/images/general/add_global_policy_shortcut.gif)

Then if you select a different policy as the request policy in the Policy Studio tree, when you subsequently view this shortcut in the chain filter, you see that the details for the shortcut have changed. The following example from the **Edit the Shortcut to the Policy**
dialog shows the policy label changed to **Global Request Policy (XML Threat Policy)**.

![Editing a Policy Shortcut](/Images/docbook/images/general/edit_global_policy_shortcut.gif)

For more details on configuring these windows, see
[Policy shortcut chain](/csh?context=512&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

{{< alert title="Note" color="primary" >}}If you remove a label from a policy by deselecting it in the Policy Studio tree, any reference to that labeled policy is not called when evaluating the shortcut in the chain, irrespective of whether **Evaluate this shortcut when executing the chain**
is selected (the **Active**
status column in the table view). {{< /alert >}}
<div class="indentTable">

This corresponds with the behavior for a specific policy in the chain. If a link to a policy is not set for a shortcut, the link is not evaluated.

</div>

In this example, the table shows that the shortcut is configured to point to the labeled policy, but the label does not resolve to a policy (for example, it is unspecified because there is no policy in the specified role):

![Unspecified Global Policy](/Images/docbook/images/general/global_policy_shortcut_table.gif)

</div>

<div id="p_general_global_policy_web_service">

Configure global policies for a service
---------------------------------------

Under the **Environment Configuration** > **Listeners**
node, you can also configure global policies at the service level to run on a specific relative path or web service resolver when messages are received by API Gateway. A relative path binds a policy to a specific relative path location (for example `/healthcheck`). A web service resolver maps messages destined for a specific web service to a **Service Handler**
or **Web Service Filter**.

You can configure a global policy at the service level to run as part of a policy chain invoked when incoming messages are received by API Gateway. The following example shows the **Global Request Policy**
configured to run first on the `/healthcheck`
relative path:

![Global Policy Configured on Relative Path](/Images/docbook/images/general/path_global_policy.gif)

For more details, see [*Configure relative paths* on page 1](general_relative_path.htm).

</div>

<div id="p_general_global_policy_locate">

Show global policies
--------------------

To view the currently configured global policies, right-click the **Policies**
root tree node, and select **Show Global Policies**. This displays all currently configured global policies in the context menu, for example:

![Showing Global Policies](/Images/docbook/images/general/show_global_policy.gif)

{{< alert title="Note" color="primary" >}}If there are no global policies configured, the **Show Global Policies**
menu item is not available.{{< /alert >}}

</div>
