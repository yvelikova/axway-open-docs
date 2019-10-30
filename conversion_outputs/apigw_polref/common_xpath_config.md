{
"title": "Configure XPath expressions",
"linkTitle": "Configure XPath expressions",
"date": "2019-10-17",
"description": "The API Gateway uses XPath expressions in a number of ways. These include to locate an XML signature in a SOAP message, to determine what elements of an XML message to validate against an XML schema, to check the content of a particular element within an XML message, amongst many more uses. For example, see the **Locate XML Nodes**, **Content Validation**, or **XML Signature Generation** filters in the \\n \\n \\n ."
}
﻿
<div id="p_common_xpath_config">

Overview
--------

The API Gateway uses XPath expressions in a number of ways. These include to locate an XML signature in a SOAP message, to determine what elements of an XML message to validate against an XML schema, to check the content of a particular element within an XML message, amongst many more uses. For example, see the **Locate XML Nodes**, **Content Validation**, or **XML Signature Generation** filters in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

You can configure XPath expressions as follows:

-   [*Manual XPath configuration* on page 1](#Manual)
-   [*XPath wizard* on page 1](#XPath)

</div>

<div id="p_common_xpath_config_manual">

Manual XPath configuration
--------------------------

If you are already familiar with XPath and wish to configure the expression manually, complete the following fields, using the examples below if necessary:

1.  Enter or select a name for the XPath expression in the **Name**
    drop-down list.
2.  Enter the XPath expression to use in the **XPath Expression**
    field.
3.  In order to resolve any prefixes within the XPath expression, the namespace mappings (Prefix
    , URI
    ) should be entered in the table.

For example, consider the following SOAP message:

``` {space="preserve"}
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header>
    <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="sig1">
      ...............
    </dsig:Signature>
  </soap:Header>
  <soap:Body>
    <prod:product xmlns:prod="http://www.company.com">
      <prod:name>SOA Product</prod:name>
      <prod:company>Company</prod:company>
      <prod:description>WebServices Security</prod:description>
    </prod:product>
  </soap:Body>
</soap:Envelope>
```

The following XPath expression evaluates to true if the `<company>`
element contains the value `Company`:

``` {space="preserve"}
//prod:company[text()='Company']
```

In this case, you must define a mapping for the *prod*
namespace as follows:

| Prefix | URI                      |
|--------|--------------------------|
| `prod` | `http://www.company.com` |

In another example, the element to be examined by the XPath expression belongs to a default namespace. Consider the following SOAP message:

``` {space="preserve"}
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header>
    <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="sig1">
      ...............
    </dsig:Signature>
  </soap:Header>
  <soap:Body>
    <product xmlns="http://www.company.com">
      <name>SOA Product</name>
      <company>Company</company>
      <description>Web Services Security</description>
    </product>
  </soap:Body>
</soap:Envelope>
```

The following XPath expression evaluates to true if the `<company>`
element contains the value `Company`:

``` {space="preserve"}
//ns:company[text()='Company']
```

Because the `<company>`
element belongs to the default (`xmlns`) namespace (`http://www.company.com`), you must make up an arbitrary prefix (`ns`) for use in the XPath expression, and assign it to `http://www.company.com`. This is necessary to distinguish between potentially several default namespaces which might exist throughout the XML message. The following mapping illustrates this:

Prefix
URI
`ns`
`http://www.company.com`
<div>

### Return a nodeset

Both of the examples above dealt with cases where the XPath expression evaluated to a Boolean value. For example, the expression in the above example asks does the `<company>`
element in the `http://www.company.com`
namespace contain a text node with the value `Company`.

It is sometimes necessary to use the XPath expression to return a subset of the XML message. For example, when using an XPath expression to determine what nodes should be signed in a signed XML message, or when retrieving the nodeset to validate against an XML Schema.

The API Gateway ships with an XPath expression that returns `All Elements inside SOAP Body`. To view this expression, select it from the **Name**
field. It appears as follows:

``` {space="preserve"}
/soap:Envelope/soap:Body//*
```

This XPath expression simply returns all child elements of the SOAP `<Body>`
element. To construct and test more complicated expressions, use the XPath wizard.

</div>

</div>

<div id="p_common_xpath_config_wizard">

XPath wizard
------------

The XPath wizard
assists you in creating correct and accurate XPath expressions. The wizard enables you to load an XML message and then run an XPath expression on it to determine what nodes are returned. To launch the XPath wizard, click the **XPath Wizard** button
on the XPath Expression
dialog.

To use the XPath wizard, enter (or browse to) the location of an XML file in the **File**
field. The contents of the XML file are displayed in the main window of the wizard. Enter an XPath expression in the **XPath**
field, and click the **Evaluate**
button to run the XPath against the contents of the file. If the XPath expression returns any elements (or returns true), those elements are highlighted in the main window.

If you are not sure how to write the XPath expression, you can select an element in the main window. An XPath expression to isolate this element is automatically generated and displayed in the **Selected**
field. To use this expression, select the **Use this path**
button, and click **OK**.

</div>
