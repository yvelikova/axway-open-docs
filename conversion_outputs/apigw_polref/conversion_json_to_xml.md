{
"title": "Convert JSON to XML",
"linkTitle": "Convert JSON to XML",
"date": "2019-10-17",
"description": "You can use the **JSON to XML**\\nfilter to convert a JavaScript Object Notation (JSON) document to an XML document. "
}
﻿
<div id="p_conversion_json_to_xml_overview">

Overview
--------

You can use the **JSON to XML**
filter to convert a JavaScript Object Notation (JSON) document to an XML document.

For details on the mapping conventions used, go to:

<https://github.com/beckchr/staxon/wiki/Mapping-Convention>

</div>

<div id="p_conversion_json_to_xml_conf">

Configuration
-------------

To configure the **JSON to XML**
filter, specify the following fields:

**Name**:\
Enter a suitable name that reflects the role of the filter in the policy.

**Virtual root element**:\
If the incoming JSON document has multiple root elements, enter a virtual root element to be added to the output XML document. This is required because multiple root elements are not valid in XML. Otherwise, the XML parser fails. For more details, see [*Examples* on page 1](#Examples).

**Insert processing instructions into the output XML representing JSON array boundaries**:\
Select this option to enable round-trip conversion back to JSON. This inserts the necessary processing instructions into the output XML. This option is not selected by default. For more details, see [*Examples* on page 1](#Examples).

{{< alert title="Note" color="primary" >}}This option is recommended if you wish to convert back to the original JSON array structures. This information would be lost during the translation back to XML.{{< /alert >}}
For more details, see [*Convert XML to JSON* on page 1](conversion_xml_to_json.htm).

**Convert JSON object names to valid XML element names**:\
Select this option to convert your JSON object names to XML element names. This option is not selected by default.

{{< alert title="Note" color="primary" >}}You should ensure that your JSON object names are also valid XML element names. If this is not possible, this option analyzes each object name and automatically performs the conversion. This has a performance overhead and is not recommended if you wish to convert back to the original JSON.{{< /alert >}}

</div>

<div id="p_conversion_json_to_xml_examples">

Examples
--------

This section shows examples of using **JSON to XML**
filter options.

<div>

### Multiple root elements

For example, the following incoming JSON message has multiple root elements:

``` {space="preserve"}
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25,
  "address":
  {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021"
  },
  "phoneNumber":
  [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "fax",
      "number": "646 555-4567"
    }
  ]
}
```

If you enter `customer`
in the **Virtual root element**
field, this results in the following output XML:

    <?xml version="1.0" encoding="utf-8"?>
    <customer>
      <firstName>John</firstName>
      <lastName>Smith</lastName>
      <age>25</age>
      <address>
        <streetAddress>21 2nd Street</streetAddress>
        <city>New York</city>
        <state>NY</state>
        <postalCode>10021</postalCode>
      </address>
      <phoneNumber>
        <type>home</type>
        <number>212 555-1234</number>
      </phoneNumber>
      <phoneNumber>
        <type>fax</type>
        <number>646 555-4567</number>
      </phoneNumber>
    </customer>

</div>

<div>

### Insert processing instructions into the output XML

For example, take the following incoming JSON message:

``` {space="preserve"}
{
"customer" : 
{
  "first-name" : "Jane",
  "last-name" : "Doe",
  "address" : 
  {
    "street" : "123 A Street"
  },
  "phone-number" : 
  [ 
    {
      "@type" : "work",
      "$" : "555-1111"
    }, 
    {
      "@type" : "cell",
      "$" : "555-2222"
    } 
  ]
}   
}
```

When the **Insert processing instructions into the output XML representing JSON array boundaries**
option is selected, the output XML is as follows:

    <?xml version="1.0" encoding="utf-8"?>
    <customer>
      <first-name>Jane</first-name>
      <last-name>Doe</last-name>
      <address>
        <street>123 A Street</street>
      </address>
    <?xml-multiple phone-number?>
      <phone-number type="work">555-1111</phone-number>
      <phone-number type="cell">555-2222</phone-number>
    </customer>

Exceptions
----------

The **JSON to XML** filter aborts with a `CircuitAbortException` if:

-   Content body of the payload is not in valid JSON format
-   **Convert JSON object names to valid XML element names** option is selected, and there is a problem with the conversion process

</div>

</div>
