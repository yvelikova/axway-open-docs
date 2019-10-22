{
"title": "Transform with XSLT",
"linkTitle": "Transform with XSLT",
"date": "2019-10-17",
"description": "Extensible Stylesheet Language Transformations (XSLT) is a declarative, XML-based language used to transform XML documents into other XML documents. An XSL stylesheet is used to transform an XML document into another document type. The stylesheet defines how elements in the XML source document should appear in the resulting XML document. "
}
﻿
<div id="p_conversion_stylesheet_overview">

Overview
--------

Extensible Stylesheet Language Transformations (XSLT) is a declarative, XML-based language used to transform XML documents into other XML documents. An XSL stylesheet is used to transform an XML document into another document type. The stylesheet defines how elements in the XML source document should appear in the resulting XML document.

The API Gateway can convert XML data to other data formats using XSL files. For example, an incoming XML message adhering to a specific XML schema can be converted to an XML message adhering to a different schema before it is sent to the destination web service. You can use the **XSLT Transformation**
filter to convert the contents of a message using an XSLT stylesheet.

This type of conversion is especially valuable in the web services arena, where a web service might receive SOAP requests from various types of clients, such as browsers, applications, and mobile phones. Each client might send up a different type of SOAP request to the web service. Using stylesheets, the API Gateway can then convert each type of request to the same format. The requests can then be processed in the same fashion.

{{< alert title="Note" color="primary" >}}The **XSLT Transformation**
filter supports XSLT version 1.0 by default.{{< /alert >}}

</div>

<div id="p_conversion_stylesheet_config">

Configuration
-------------

Configure the following fields for the **XSLT Transformation**
filter:

**Name**:\
Enter a suitable name to reflect the role of this filter in a policy.

<div id="p_conversion_stylesheet_location">

### Stylesheet location settings

On the **Stylesheet Location**
tab, select an XSL stylesheet from the **Stylesheet Location**
list, which is populated with the contents of the Stylesheets library.

To import a new stylesheet into the library, click the **View/Import**
button, and click **Add**
on the dialog that appears. Alternatively, you can add stylesheets under the **Resources > Stylesheets**
node in the Policy Studio tree.

You can also modify existing stylesheets in the **XSLT Contents**
text area of the dialog. Click the **Update**
button to update them in the API Gateway configuration.

</div>

<div id="p_conversion_stylesheet_params">

### Stylesheet parameter settings

You can pass parameters to an XSL stylesheet using specified values in `<xsl:param>`
elements. These values are then used in the templates defined throughout the stylesheet.

Using the **XSLT Transformation**
filter, you can pass the values of message attributes to the configured stylesheet. For example, you can take the value of the `authentication.subject.id`
message attribute, pass it to the configured XSL stylesheet, and then output this value to the result produced by the conversion.

To use this feature, select the **Use Message Attributes as Stylesheet Parameters**
check box, and click **Add**
to specify the message attribute to pass to the stylesheet.

The following example from an XSL stylesheet that uses parameters shows how to configure this:

``` {space="preserve"}
<xsl:param name="authentication.subject.id"/>
<xsl:param name="authentication.issuer.id"/>
```

To pass the corresponding message attribute values to the stylesheet, you must add the `authentication.subject.id`
and `authentication.issuer.id`
message attributes to the **Message Attributes to use**
table.

{{< alert title="Note" color="primary" >}}The name of the specified parameter must be a valid API Gateway message attribute name, and there *must*
be an equivalent parameter name in the stylesheet. {{< /alert >}}

</div>

<div id="p_conversion_stylsheet_advanced">

### Advanced settings

Complete the following fields on the **Advanced**
tab:

**Provider class name**:\
Enter the fully qualified name of the XSLT provider class of the XSLT library to be used. This class *must*
be added to the API Gateway's classpath. If this field is left blank, the default provider is used.

{{< alert title="Tip" color="primary" >}}The simplest way to add a provider class to the API Gateway's classpath is to drop the required JAR file into the `INSTALL_DIR/apigateway/ext/lib`
directory, where `INSTALL_DIR`
refers to the root of your API Gateway installation.{{< /alert >}}
**Result will be XML**:\
You can convert an incoming XML message to other data formats. Select this option if the result of the XSLT conversion is always XML. If not, the content-type of the result document depends on the output method of the XSLT stylesheet. For example, if the stylesheet specifies an output method of HTML (`<xsl:output method="html">`), this field should be left blank so that the API Gateway can forward on the HTML output document to the target web service.

**Do not change the content type header**:\
You can select whether to change the HTTP `Content-Type`
header in this XSLT transformation. This setting is selected by default, so the content type is preserved.

</div>

</div>
