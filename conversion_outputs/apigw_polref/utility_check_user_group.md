{
"title": "Check group membership",
"linkTitle": "Check group membership",
"date": "2019-10-17",
"description": "The **Check Group Membership**\\nfilter checks whether the specified API Gateway user is a member of the specified API Gateway user group. The user and the group are both stored in the API Gateway user store. For more details, see \\n \\n in the \\n \\n \\n . "
}
﻿
<div id="p_utility_check_user_group_over">

Overview
--------

The **Check Group Membership**
filter checks whether the specified API Gateway user is a member of the specified API Gateway user group. The user and the group are both stored in the API Gateway user store. For more details, see
[Manage API Gateway users](/csh?context=637&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_utility_check_user_group_conf">

Configuration
-------------

Configure the following required fields:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**User**:\
Enter the user name configured in the API Gateway user store. You can specify this value as a string or as a selector that expands to the value of the specified message attribute at runtime. Defaults to `${authentication.subject.id}`.

**Group**:\
Enter the user group name configured in the API Gateway user store (for example, `engineering`
or `sales`
). You can specify this value as a string or as selector that expands to the value of the specified message attribute at runtime (for example, `${groupName}`).

{{< alert title="Note" color="primary" >}}The message attribute specified in the selector must exist on the message whiteboard prior to calling the filter. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.{{< /alert >}}

</div>

<div id="p_utility_check_user_group_paths">

Possible results
----------------

The possible paths through this filter are as follows:

| Result         | Description                                                |
|----------------|------------------------------------------------------------|
| `True`         | The specified user is a member of the specified group.     |
| `False`        | The specified user is not a member of the specified group. |
| `CircuitAbort` | An exception occurred while executing the filter.          |

</div>
