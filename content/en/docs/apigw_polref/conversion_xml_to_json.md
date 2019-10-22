{
"title": "Convert XML to JSON",
"linkTitle": "Convert XML to JSON",
"date": "2019-10-17",
"description": "You can use the **XML to JSON**\\nfilter to convert an XML document to a JavaScript Object Notation (JSON) document. "
}
﻿
<div id="p_conversion_xml_to_json_overview">

Overview
--------

You can use the **XML to JSON**
filter to convert an XML document to a JavaScript Object Notation (JSON) document.

For details on the mapping conventions used, go to:

<https://github.com/beckchr/staxon/wiki/Mapping-Convention>

</div>

<div id="p_conversion_xml_to_json_conf">

Configuration
-------------

To configure the **XML to JSON**
filter, specify the following fields:

**Name**:\
Enter a suitable name to reflect the role of this filter in a policy.

**Automatically insert JSON array boundaries**:\
Select this option to attempt to automatically reconstruct JSON arrays from the incoming XML document. This option is selected by default.

**Convert number/boolean/null elements to primitives**:\
Select this option to convert number, boolean, or null elements in the incoming XML document to JSON primitive types. This option is selected by default.

When this option is selected, the filter converts an XML number element to a JSON primitive. Otherwise, an XML number element is converted to a JSON text node. For example:

Incoming XML:

    <number>123.4</number>

JSON output with this option selected:

    "number" :12.4

JSON output with this option not selected:

    "number" :"12.4"

Similarly, XML boolean or null elements are converted to JSON primitives if this option is selected.

**Convert namespace declarations**:\
Select this option to convert namespace declarations in the incoming XML and add them to the resulting JSON. This option is not selected by default, and any namespace declarations are removed from the resulting JSON.

**Use the following XPath to convert**:\
Select an XPath expression to specify which elements of the incoming XML to convert. The options are:

-   All elements inside SOAP body (SOAP 1.1 or SOAP 1.2)
-   All elements inside SOAP body (SOAP 1.1)
-   The entire message

{{< alert title="Note" color="primary" >}}If the incoming XML document includes the `<?xml multiple>`
processing instruction, the JSON array is reconstructed regardless of this option setting. If the XML document does not contain `<?xml multiple>`, and this option is selected, the filter makes an attempt at guessing what should be part of the array by examining the element names.{{< /alert >}}
For more details and examples of `<?xml multiple>`
processing instructions, see [*Convert JSON to XML* on page 1](conversion_json_to_xml.htm).

Exceptions
----------

The **XML to JSON** filter aborts with a `CircuitAbortException` if the JSON parser has a problem parsing the stream converted from XML to JSON.

</div>
