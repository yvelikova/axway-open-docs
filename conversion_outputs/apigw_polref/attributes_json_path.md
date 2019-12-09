{
"title": "Retrieve attributes with JSON path",
"linkTitle": "Retrieve attributes with JSON path",
"date": "2019-10-17",
"description": "JSON Path is an XPath like query language for JSON (JavaScript Object Notation) that enables you to select nodes in a JSON document. The **Retrieve Attributes with JSON Path**\\nfilter enables you to retrieve specified message attributes from a JSON message using JSON Path expressions."
}
﻿
<div id="p_attrs_json_path_overview">

Overview
--------

JSON Path is an XPath like query language for JSON (JavaScript Object Notation) that enables you to select nodes in a JSON document. The **Retrieve Attributes with JSON Path**
filter enables you to retrieve specified message attributes from a JSON message using JSON Path expressions.

For more details on JSON Path, go to <http://code.google.com/p/jsonpath/>.

</div>

<div id="p_attrs_json_path_conf">

Configuration
-------------

Configure the following fields on the **Retrieve Attributes with JSON Path**
filter window:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Extract attributes using the following JSON Path expressions**:\
Specify the list of attributes for the API Gateway to retrieve using appropriate JSON Path expressions.

To add an attribute to the list, click the **Add**
button, and enter the following values in the dialog:

-   **Attribute name**:\
    Enter the message attribute name that you wish to extract using JSON Path (for example, `bicycle.price`).
-   **JSON Path Expression**:\
    Enter the JSON Path expression that you wish to use to extract the message attribute (for example, `$.store.bicycle.price`). Policy Studio prompts if you enter an unsupported JSON Path expression.
-   **Unmarshal as**:\
    Enter the data type to unmarshal the message attribute value as (defaults to `java.util.List`). For example, typical data types to unmarshal as include the following:
    -   `java.lang.String`: Enter this value when using this filter to extract a single value and store it in an API Gateway attribute on the message whiteboard.
    -   `com.fasterxml.jackson.databind.JsonNode`: Enter this value when using this filter to store the content in a message attribute and then place it in a JSON message using a **JSON Add Node** filter.

    >
-   **Fail if JSON Path Fails**:\
    Select whether the filter should fail if the specified JSON Path expression fails. This option is not selected by default.

{{< alert title="Note" color="primary" >}}If no attributes are specified, the API Gateway retrieves all the attributes in the message and sets them to the `attribute.lookup.list`
attribute.{{< /alert >}}

</div>

<div id="p_attrs_json_path_example">

JSON Path examples
------------------

The following are some examples of using the **Retrieve Attributes with JSON Path**
filter to retrieve data from a JSON message.

**Retrieving attributes**\
The following example retrieves three different data items from the JSON message and stores them in the specified message attributes as strings:

![Retrieve Attribute with JSON Path Expression](/Images/docbook/images/json/json_path_add_attribute.png)

When the extracted attributes are added to the `content.body`
message attribute, the following example shows the corresponding request and response message in Axway API Tester:

![Retrieved Attribute](/Images/docbook/images/json/json_path_add_attribute_sb.png)

**Retrieving multiple attributes in a list**\
The following example retrieves all the authors from the JSON message and stores them in the specified message attribute as a `List`:

![Retrieve Attribute List using JSON Path Expression](/Images/docbook/images/json/json_path_add_attribute_list.png)

The following example shows the corresponding request and response in Axway API Tester:

![Retrieved Attribute List](/Images/docbook/images/json/json_path_add_attribute_list_sb.png)

Exceptions
----------

The **Retrieve Attributes with JSON Path** filter aborts with a `CircuitAbortException` if the content body of the payload is not in valid JSON format.

</div>
