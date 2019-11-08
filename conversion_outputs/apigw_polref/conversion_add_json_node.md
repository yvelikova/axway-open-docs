{
"title": "Add node to JSON document",
"linkTitle": "Add node to JSON document",
"date": "2019-10-17",
"description": "You can use the **JSON Add Node**\\nfilter to add a node to a JavaScript Object Notation (JSON) document. The new node is inserted into the location specified by a JSON Path expression. JSON Path is a query language that enables you to select nodes in a JSON document."
}
﻿
<div id="p_conversion_add_json_node_overview">

Overview
--------

You can use the **JSON Add Node**
filter to add a node to a JavaScript Object Notation (JSON) document. The new node is inserted into the location specified by a JSON Path expression. JSON Path is a query language that enables you to select nodes in a JSON document.

For more details on JSON Path, see <http://code.google.com/p/jsonpath>.

</div>

<div id="p_conversion_add_json_node_gen_conf">

Configuration
-------------

You can configure the following settings:

**Name**:\
Enter a suitable name that reflects the role of this filter in the policy.

**JSON Path Expression**:\
Enter the JSON Path expression used to add the node to the JSON document (for example, `$.store`). Policy Studio warns you if you enter an unsupported JSON Path expression.

{{< alert title="Note" color="primary" >}}If this expression returns more than one node, the first node is used. If the expression returns no nodes, the filter returns false.{{< /alert >}}
**Node Source**:\
In the **Content**
area, enter the JSON node to be inserted into the message. For example, the following node source represents a new car:

``` {space="preserve"}
{
  "make":"Ford",
  "airbags":true,
  "doors":4,
  "price":1111.00
}
```

Select one of the following options for the source of the new node:

-   **Add as a new item to an array**:\
    If you select this option, the new JSON node is added as an item in an array.
-   **Add as a new item with field name**:\
    If you select this option, the new JSON node is added as a field specified in the **Field Name**
    field (for example, `car`).
-   **Insert previously removed nodes**:\
    You can configure a **JSON Remove Node**
    filter to remove JSON nodes from the message and store them in the `deleted.json.node.list`
    message attribute. You can then use the **JSON Add Node**
    filter to reinsert these nodes in a different location in the message, effectively moving the deleted nodes in the message. When selecting this option, you must also select **Save deleted nodes to be reinserted to new location**
    in the **Remove JSON Node**
    filter, which runs before the **Add JSON Node**
    filter in the policy. For more details, see [*Remove node from JSON document* on page 1](conversion_remove_json_node.htm).

**What to do with any existing siblings in the container**:\
Select one of the following options to determine where the new node is placed relative to the nodes returned by the JSON Path expression:

-   **Append**:\
    The new node is appended as a child node of the node returned by the JSON Path expression. If there are already child nodes of the node returned by the JSON expression, the new node is added as the last child node.
-   **Replace**:\
    The node pointed to by the JSON expression is completely replaced by the new node.

</div>

<div id="p_conversion_add_json_node_examples">

Examples
--------

The following are some examples of using the **JSON Add Node**
filter to add and replace JSON nodes.

<div>

### Add a JSON node

The following example shows the settings required to add a car node to the store:

![Add a JSON node](/Images/docbook/images/json/add_json_node.png)

The following example shows the corresponding request and response message in Axway API Tester:

![Add JSON node request and response](/Images/docbook/images/json/add_json_node_sb.png)

</div>

<div>

### Add an item to an array

The following example shows the settings required to add a book to an array:

![Add item to an array](/Images/docbook/images/json/add_json_node_array.png)

The following example shows the corresponding request and response message in API Tester:

![Add item to array request and response](/Images/docbook/images/json/add_json_node_array_sb.png)

</div>

<div>

### Add a field replacing others

The following example shows the settings required to add a field to the bicycle, removing any other fields that may exist:

![Add field replacing others](/Images/docbook/images/json/add_json_node_replace.png)

The following example shows the corresponding request and response message in API Tester:

![Add field replacing others request and response](/Images/docbook/images/json/add_json_node_replace_sb.png)

Exceptions
----------

The **JSON Add Node** filter aborts with a `CircuitAbortException` if:

-   Content body of the payload is not in valid JSON format
-   New node to be added (content in **Node Source**) is not in valid JSON format

</div>

</div>
