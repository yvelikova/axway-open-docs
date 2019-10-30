{
"title": "Remove XML node",
"linkTitle": "Remove XML node",
"date": "2019-10-17",
"description": "You can use the **Remove XML Node** filter to remove an XML element, attribute, text, or comment node from an XML message. You can specify the node to remove using an XPath expression. The XPath query language enables you to select nodes in an XML document. "
}
﻿
<div id="p_conversion_remove_node_overview">

Overview
--------

You can use the **Remove XML Node** filter to remove an XML element, attribute, text, or comment node from an XML message. You can specify the node to remove using an XPath expression. The XPath query language enables you to select nodes in an XML document.

</div>

<div id="p_conversion_remove_node_conf">

Configuration
-------------

To configure this filter, specify the following fields:

**Name**:\
Enter a suitable name that reflects the role of the filter in the policy. For example, if the purpose of this filter is to remove an `<ID>`
element from the message, it would be appropriate to name this filter **Remove ID Element**.

**XPath Location**:\
Specify an XPath expression to indicate the node to remove. When the expression is configured correctly, you can remove an element, attribute, text, or comment node. If this expression returns more than one node, all returned nodes are removed.

You can select XPath expressions from the list, and edit or add expressions by clicking the relevant button. The following are some example expressions:

| Name                            | XPath Expression                  | Prefix | URI                                                                                 |
|---------------------------------|-----------------------------------|--------|-------------------------------------------------------------------------------------|
| The First WSSE Security element | `//wsse:Security[1]`              | `wsse` | `http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd` |
| Text Nodes in SOAP Body         | `/soap:Envelope/soap:Body/text()` | `soap` | `http://schemas.xmlsoap.org/soap/envelope/`                                         |

**Fail if no nodes returned from XPath**:\
If this option is selected, and the XPath expression returns no nodes, the filter returns false. If this option is *not*
selected, and the XPath returns no nodes, the filter returns true, and no nodes are removed.

**Save deleted nodes to be reinserted to new location**:\
You can use this option in cases where you want to move XML nodes from one location in the message to another. By selecting this option, the deleted nodes are stored in the `deleted.node.list`
message attribute. You can then use the **Add XML Node**
filter to insert the deleted nodes back into a different location in the message. For more details, see [*Add XML node* on page 1](conversion_add_node.htm).

Exceptions
----------

The **Remove XML Node** filter aborts with a `CircuitAbortException` if the content body of the payload is not in valid JSON format.

</div>
