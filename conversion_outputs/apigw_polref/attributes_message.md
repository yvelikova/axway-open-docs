{
"title": "Retrieve attribute from message",
"linkTitle": "Retrieve attribute from message",
"date": "2019-10-17",
"description": "The **Retrieve from Message**\\nfilter uses XPath expressions to extract the value of an XML element or attribute from the message and set it to an internal message attribute. The XPath expression can also return a `NodeList`, and the `NodeList`\\ncan be set to the specified message attribute."
}
﻿
<div id="p_retr_attrs_message_over">

Overview
--------

The **Retrieve from Message**
filter uses XPath expressions to extract the value of an XML element or attribute from the message and set it to an internal message attribute. The XPath expression can also return a `NodeList`, and the `NodeList`
can be set to the specified message attribute.

</div>

<div id="p_retr_attrs_message_conf">

Configuration
-------------

The following fields are available on the **Retrieve from Message**
filter configuration window:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Use the following XPath**:\
Configure an XPath expression to retrieve the desired content.

Click the **Add**
button to add an XPath expression. You can add and remove existing expressions by clicking the **Edit**
and **Remove**
buttons respectively.

**Store the extracted content**:\
Select an option to specify how the extracted content is stored. The options are:

-   **of the node as text (java.lang.String)**\
    This option saves the content of the node retrieved from the XPath expression to the specified message attribute as a `String`.
-   **for all nodes found as text (java.lang.String)**\
    This option saves all nodes retrieved from the XPath expression to the specified message attribute as a `String`
    (for example, `<node1>test</node1>`). This option is useful for extracting `<Signature>`, `<Security>`, and `<UsernameToken>`
    blocks, as well as proprietary blocks of XML from messages.
-   **for all nodes found as a list (java.util.List)**\
    This option saves the nodes retrieved from the XPath expression to the specified message attribute as a Java `List`, where each item is of type `Node`. For example, if the XPath returns `<node1>test</node1>`, there is one node in the `List`
    (`<node1>`). The child text node (`test`) is accessible from that node, but is not saved as an entry in the `List`
    at the top-level.

**Extracted content will be stored in attribute named**:\
The API Gateway sets the value of the message attribute selected here to the value extracted from the message. You can also enter a user-defined message attribute.

**Optionally the message payload can be replaced by the extracted content**:\
Select this option to take the value being set into the attribute and add it to the content body of the response. This option is not selected by default.

**Use the following content type for new payload**:\
This field is only available if the preceding option is selected. This allows you to specify the content type for the response, based on what is added to the content body.

</div>
