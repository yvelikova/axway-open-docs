{
"title": "Add XML node",
"linkTitle": "Add XML node",
"date": "2019-10-17",
"description": "You can use the **Add XML Node**\\nfilter to add an XML element, attribute, text, comment, or CDATA section node to an XML message. The new node is inserted into the location specified by an XPath expression or a SOAP actor/role. XPath is a query language that enables you to select nodes in an XML document. A SOAP actor/role provides a way of identifying a particular WS-Security block in a message."
}
﻿
<div id="p_conversion_add_node_overview">

Overview
--------

You can use the **Add XML Node**
filter to add an XML element, attribute, text, comment, or CDATA section node to an XML message. The new node is inserted into the location specified by an XPath expression or a SOAP actor/role. XPath is a query language that enables you to select nodes in an XML document. A SOAP actor/role provides a way of identifying a particular WS-Security block in a message.

</div>

<div id="p_conversion_add_node_gen_conf">

Configuration
-------------

You can configure the following settings.

<div id="p_conversion_add_node_location_">

### Where to insert new nodes

You can insert the new node into a location specified by an XPath expression or into a WS-Security header for the specified SOAP actor or role. Select one of the following options:

**Insert using XPath**:\
Select or enter an XPath expression to specify where to insert the new node. If this expression returns more than one node, the first one is used. If the expression returns no nodes, the filter returns false. You can add, edit, or delete XPath expressions using the buttons provided.

Select one of the following options to determine where the new node is placed relative to the nodes returned by the XPath expression.

-   **Append**:\
    The new node is appended as a child node of the node returned by the XPath expression. If there are already child nodes of the node returned by the XPath expression, the new node is added as the last child node.
-   **Before**:\
    The new node is inserted as a sibling node before the node returned by the XPath expression.
-   **Replace**:\
    The node pointed to by the XPath expression is completely replaced by the new node.

**Insert into WS-Security element for SOAP Actor/Role**:\
Select or enter the name of the SOAP actor/role that specifies the WS-Security element into which the XML node is inserted. A SOAP actor/role provides a way of distinguishing a particular WS-Security block from others that may be present in the message. For example, this setting is useful if there is no SOAP header or WS-Security element in the message because these are created when this option is specified.

</div>

<div id="p_conversion_add_node_source">

### Node source

Select one of the following options for the source of the new node:

-   **Create a new node**:\
    If this option is selected, a new node is created and inserted into the location pointed to by the XPath expression configured above.
-   **Insert previously removed nodes**:\
    You can configure a **Remove XML Node**
    filter to remove XML nodes from the message and store them in the `deleted.node.list`
    message attribute. You can use the **Add XML Node**
    filter to reinsert these nodes back into a different location inside the message, effectively moving the deleted nodes in the message. To use this option, select the **Save deleted nodes**
    option on a **Remove XML Node**
    filter that is configured to run before the **Add XML Node**
    filter in the policy.
-   **Message attribute**:\
    If this option is selected, a new node is created from the contents of the selected message attribute. The expected type of the message attribute is Node of List of Nodes.

</div>

<div id="p_conversion_add_node_details">

### New node details

Configure the following node details:

**Node Type**:\
Select the type of the new node from the list.

{{< alert title="Note" color="primary" >}}When choosing a node type, consider the following:{{< /alert >}}
<div class="indentTable">

-   You can only append a node to a **Node Type**
    of `Element`
    or `Text`.
-   If you append to a `Text`
    node, you must append another `Text`
    node.
-   If you add a new `Attribute`
    node using the **Replace**
    option, it must replace an existing `Attribute`
    node.

</div>

**Node Content**:\
This field contains the node to be inserted into the message. The **Node Content**
field must contain valid XML when the **Node Type**
is set to `Element`. You can also enter selector expressions, which are populated at runtime.

{{< alert title="Note" color="primary" >}}To insert an XML node containing a namespace, you must define the namespace before using it in the filter, or the insertion will fail due to invalid XML. For more details, see [Knowledge Base article 178251](https://support.axway.com/en/articles/article-details/id/178251) on Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}. {{< /alert >}}

</div>

<div id="p_conversion_add_node_attribute">

### Attribute node details

The following attribute-related fields are only enabled when you select `Attribute`
from the **Node Type**
list:

**Attribute Name**:\
Enter the name of the attribute in this field.

**Attribute Namespace URL**:\
Enter the namespace of the attribute in this field.

**Attribute Namespace Prefix**:\
Specify the prefix to use to map the element to the namespace entered above in this field. The new attribute is prefixed with this value.

</div>

</div>

<div id="p_conversion_add_node_examples">

Examples
--------

The following are some examples of using the **Add XML Node**
filter to replace and add attributes and elements.

<div>

### Replace an attribute value

To replace an attribute value, perform the following steps:

1.  In the **Configure where to insert the new nodes**
    section, select **Insert using XPath**.
2.  Select a value from the list (for example, `SOAP Header "mustUnderstand" attribute`).
3.  Select the **Replace**
    option.
4.  In the **Configure new node details**
    section, select `Attribute`
    from the a **Node Type**
    list.
5.  Enter the **Node Content**
    in the text box (for example, in this case, `1`
    or `0`).
6.  In the **Attribute Details**
    section, you must enter the **Attribute Name**.

</div>

<div>

### Add an attribute

To add an attribute to an element, perform the following steps:

1.  In the **Configure where to insert the new nodes**
    section, select **Insert using XPath**.
2.  Select a value from the drop-down list (for example, `SOAP Header Element`).
3.  Select the **Append**
    option.
4.  In the **Configure new node details**
    section, select `Attribute`
    from the a **Node Type**
    list.
5.  Enter the **Node Content**
    in the text box (for example, in this case `1`
    or `0`).
6.  In the **Attribute Details**
    section, you must enter the **Attribute Name**.

</div>

<div>

### Add an element

To add an element, perform the following steps:

1.  In the **Configure where to insert the new nodes**
    section, select **Insert using XPath**.
2.  Select a value from the drop-down list (for example, `SOAP Header Element`).
3.  Select the **Append**
    option.
4.  In the **Configure new node details**
    section, select `Element`
    from the a **Node Type**
    list.
5.  Enter the **Node Content**
    in the text box (for example, in this case, the contents of the SOAP header).

</div>

<div>

### Replace an element

To replace element A with new element B, perform the following steps:

1.  In the **Configure where to insert the new nodes**
    section, select **Insert using XPath**.
2.  Select a value from the drop-down list (for example, `SOAP Method Element`).
3.  Select the **Replace**
    option.
4.  In the **Configure new node details**
    section, select `Element`
    from the a **Node Type**
    list.
5.  Enter the **Node Content**
    in the text box (for example, in this case, the contents of the SOAP method).

</div>

</div>
