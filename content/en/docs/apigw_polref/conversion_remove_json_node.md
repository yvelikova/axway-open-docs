{
"title": "Remove node from JSON document",
"linkTitle": "Remove node from JSON document",
"date": "2019-10-17",
"description": "You can use the **JSON Remove Node**\\nfilter to remove a JSON node from a JSON message. You can specify the node to remove using a JSON Path expression. The JSON Path query language enables you to select nodes in a JSON document. "
}
﻿
<div id="p_conversion_remove_json_node_overview">

Overview
--------

You can use the **JSON Remove Node**
filter to remove a JSON node from a JSON message. You can specify the node to remove using a JSON Path expression. The JSON Path query language enables you to select nodes in a JSON document.

For more details on JSON Path, see <http://code.google.com/p/jsonpath>.

</div>

<div id="p_conversion_remove_json_node_conf">

Configuration
-------------

To configure this filter, specify the following fields:

**Name**:\
Enter a suitable name that reflects the role of the filter in the policy.

**JSON Path Expression**:\
Enter a JSON Path expression to specify the node to remove (for example, `$.store.bicycle`). Policy Studio warns you if you enter an unsupported JSON Path expression.

{{< alert title="Note" color="primary" >}}If the specified expression returns more than one node, all returned nodes are removed.{{< /alert >}}
**Fail if no nodes returned from JSON Path**:\
When this option is selected, and the JSON Path expression returns no nodes, the filter returns false. If this option is *not*
selected, and the JSON Path returns no nodes, the filter returns true, and no nodes are removed. This option is not selected by default.

**Save deleted nodes to be reinserted to new location**:\
Select this option if you want to move JSON nodes from one location in the message to another. The deleted nodes are stored in the `deleted.json.node.list`
message attribute. You can then use the **JSON Add Node**
filter to insert the deleted nodes into a different location in the message. For more details, see [*Add node to JSON document* on page 1](conversion_add_json_node.htm).

</div>

<div id="p_conversion_remove_json_node_examples">

Examples
--------

The following are some examples of using the **JSON Remove Node**
filter.

<div>

### Remove a node

The following example shows removing a bicycle from the store:

![Remove JSON node](/Images/docbook/images/json/remove_json_node.png)

The following example shows the corresponding request and response message in Axway API Tester:

![Remove JSON node request and response](/Images/docbook/images/json/remove_json_node_sb.png)

</div>

<div>

### Remove all items in an array

The following example shows removing all books in an array:

![Remove JSON array](/Images/docbook/images/json/remove_json_node_array.png)

The following example shows the corresponding request and response message in API Tester:

![Remove JSON array request and response](/Images/docbook/images/json/remove_json_node_array_sb.png)

Exceptions
----------

The **JSON Remove Node** filter aborts with a `CircuitAbortException` if:the content body of the payload is not in valid JSON format.

</div>

</div>
