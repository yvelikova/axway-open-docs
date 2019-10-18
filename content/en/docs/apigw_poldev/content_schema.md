{
"title": "Schema validation",
"linkTitle": "Schema validation",
"date": "2019-10-17",
"description": "API Gateway can check that XML messages conform to the structure or format expected by the web service by validating those requests against XML schemas. An XML schema precisely defines the elements and attributes that constitute an instance of an XML document. It also specifies the data types of these elements to ensure that only appropriate data is allowed through to the web service."
}
﻿
<div id="p_content_schema_overview">

Overview
--------

API Gateway can check that XML messages conform to the structure or format expected by the web service by validating those requests against XML schemas. An XML schema precisely defines the elements and attributes that constitute an instance of an XML document. It also specifies the data types of these elements to ensure that only appropriate data is allowed through to the web service.

For example, an XML schema might stipulate that all requests to a particular web service must contain a `<name>`
element, which contains at most a ten character string. If the API Gateway receives a message with an improperly formed `<name>`
element, it rejects the message.

You can find the **Schema Validation**
filter in the **Content Filtering**
category of filters in Policy Studio. Drag and drop the filter on to a policy to perform schema validation.

</div>

<div id="p_content_schema_location">

Select the schema
-----------------

To configure the XML schema to validate messages against, click the **Schema to use**
tab. You can select the schema from the WSDL for the current web service, and specific schemas from the global cache of WSDL and XML schema documents. Both validation mechanisms can be selected at the same time. Configure the following options:

**Use Schema from WSDL of web service**:\
Select this option to dynamically use the appropriate SOAP operation schema from the current web service context. When this option is selected, this filter has an additional required message attribute named `webservice.context`, which must be provided. This enables you to share this filter to perform validation across multiple web services.

**Select which XML Schema to validate message with**:\
Select this option to use schemas from the global cache. This is the default option. Click the browse button, and select a schema from the tree view. You can select multiple schemas under the **XML Schema Document Bundles**
and the **WSDL Document Bundles**
nodes. Click the check box next to the schema document to select the schema. You can also select a particular version of a schema by clicking the check box next to the version.

To add a new schema, right-click the **XML Schema Document Bundles**
> **User-defined Catalog** node, and select **Add Schema**. Alternatively, you can add schemas under the **Resources**
node in the Policy Studio tree. For more details, see
[Manage WSDL and XML schema documents](/csh?context=639&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

{{< alert title="Tip" color="primary" >}}If you have a WSDL file that contains an XML schema, you can use this schema to validate messages by importing the WSDL file into the Web service repository. The **Import WSDL**
wizard automatically adds any XML schemas contained in the WSDL to the global cache under the **Resources > WSDL Document Bundles**
node. For more details, see
[Configure policies from WSDL files](/csh?context=623&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
. {{< /alert >}}

</div>

<div id="p_content_schema_content">

Select which part of the message to match
-----------------------------------------

To configure which part of the message to validate, click the **Part of message to match**
tab.

A portion of the XML message can be extracted using an XPath expression. API Gateway can then validate this portion against the specified XML schema. For example, you might need to validate only the SOAP Body element of a SOAP message. In this case, enter or select an XPath expression that identifies the SOAP Body element of the message. This portion should then be validated against an XML schema that defines the structure of the SOAP Body element for that particular message.

Click the **Add**
or **Edit**
buttons to add or edit an XPath expression using the **Enter XPath Expression**
dialog. To remove an expression, select the expression in the **XPath Expression**
field and click the **Delete**
button.

You can configure XPath expressions manually or using a wizard. For more details, see
[Configure XPath expressions](/csh?context=640&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_content_schema_advanced">

Advanced settings
-----------------

The following settings are available on the **Advanced**
tab:

**Allow RPC Schema Validation**:\
When the **Allow RPC Schema Validation**
check box is selected, the filter makes a *best attempt*
to validate an RPC-encoded SOAP message. An RPC-encoded message is defined in the WSDL as having an operation with the following characteristics:

-   The `style`
    attribute of the `<soap:operation>`
    element is set to `document`.
-   The `use`
    attribute of the `<soap:body>`
    element is set to `rpc`.

For details on the possible values for these attributes, see the [WSDL specification](http://www.w3.org/TR/wsdl#_soap:body).

The problem with RPC-encoded SOAP messages in terms of schema validation is that the schema contained in the WSDL file does not necessarily fully define the format of the SOAP message, unlike with `document-literal`
style messages. With an RPC-encoded operation, the format of the message can be defined by a combination of the SOAP operation name, WSDL message parts, and schema-defined types. As a result, the schema extracted from a WSDL file might not be able to validate a message.

Another problem with RPC-encoded messages is that type information is included in each element that appears in the SOAP message. For such element definitions to be validated by a schema, the type declarations must be removed, which is precisely what the **Schema Validation**
filter does if the check box is selected on this tab. It removes the type declarations and then makes a *best attempt*
to validate the message.

However, as explained earlier, if some of the elements in the SOAP message are taken from the WSDL file instead of the schema (for example, when the SOAP operation name in the WSDL file is used as the wrapper element beneath the SOAP Body element instead of a schema-defined type), the schema is not able to validate the message.

**Inline MTOM Attachments into Message**:\
Message Transmission Optimization Mechanism (MTOM) provides a way to send binary data to Web services in standard SOAP messages. MTOM leverages the include mechanism defined by XML Optimized Packaging (XOP), whereby binary data can be sent as a MIME attachment (similar to SOAP with Attachments) to a SOAP message. The binary data can then be referenced from within the SOAP message using the `<xop:Include>`
element.

The following SOAP request contains a binary image that has been Base64-encoded so that it can be inserted as the contents of the `<image>`
element:

``` {space="preserve"}
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <uploadGraphic xmlns="www.example.org">
      <image>/aWKKapGGyQ=</image>
    </uploadGraphic>
  </soap:Body>
</soap:Envelope>
```

When this message is converted to an MTOM message by API Gateway
the Base64-encoded content from the `<image>`
element is replaced with an `<xop:Include>`
element. This contains a reference to a newly created MIME part that contains the binary content. The following request shows the resulting MTOM message:

``` {space="preserve"}
POST /services/uploadImages HTTP/1.1
Host: API Tester
Content-Type: Multipart/Related;boundary=MIME_boundary;
type="application/xop+xml";
start="<mymessage.xml@example.org>";
start-info="text/xml"
--MIME_boundary
Content-Type: application/xop+xml;
charset=UTF-8;
type="text/xml"
Content-Transfer-Encoding: 8bit
Content-ID: <mymessage.xml@example.org>
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <uploadGraphic xmlns="www.example.org">
      <image>
        <xop:Include xmlns:xop='http://www.w3.org/2004/08/xop/include'
        href='cid:http://example.org/myimage.gif'/>
      </image>
    </uploadGraphic>
  </soap:Body>
</soap:Envelope>
--MIME_boundary
Content-Type: image/gif
Content-Transfer-Encoding: binary
Content-ID: <http://example.org/myimage.gif>
// binary octets for image
--MIME_boundary
```

When attempting to validate the MTOM message with an XML schema, it is crucial that you are aware of the format of the `<image>`
element. Will it contain the Base64-encoded binary data, or will it contain the `<xop:include>`
element with a reference to a MIME part?

For example, the XML schema definition for an `<image>`
element might look as follows:

    <xsd:element name="image" maxOccurs="1" minOccurs="1"
    type="xsd:base64Binary"
    xmime:expectedContentTypes="*/*"
    xsi:schemaLocation="http://www.w3.org/2005/05/xmlmime"
    xmlns:xmime="http://www.w3.org/2005/05/xmlmime"/>

In this case, the XML schema validator expects the contents of the `<image>`
element to be `base64Binary`. However, if the message has been formatted as an MTOM message, the `<image>`
element contains a child element, `<xop:Include>`, that the schema knows nothing about. This causes the schema validator to report an error and schema validation fails.

To resolve this issue, select the **Inline MTOM Attachments into Message**
check box on the **Advanced**
tab. At runtime, the schema validator replaces the value of the `<xop:Include>`
element with the Base64-encoded contents of the MIME part to which it refers. This means that the message now adheres to the definition of the `<image>`
element in the XML schema (the element contains data of type `base64Binary`).

This standard procedure of interpreting XOP messages is described in [XML-binary Optimized Packaging (XOP) specification](http://www.w3.org/TR/2004/CR-xop10-20040826#interpreting_xop_packages).

</div>

<div id="p_content_schema_errors">

Report schema validation errors
-------------------------------

When a schema validation check fails, the validation errors are stored in the `xsd.errors` API Gateway message attribute. You can return an appropriate SOAP Fault to the client by writing out the contents of this message attribute.

For example, you can do this by configuring a **Set Message**
filter (for more information, see [*Set message* on page 1](conversion_set_message.htm)) to write a custom response message back to the client. Place the **Set Message**
filter on the failure path of the **Schema Validation**
filter. You can enter the following sample SOAP Fault message in the **Set Message**
filter. Notice the use of the `${xsd.errors}`
message attribute selector in the `<Reason>`
element:

``` {space="preserve"}
<?xml version="1.0" encoding="UTF-8"?>
<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope">
<env:Body>
  <env:Fault>
    <env:Code>
      <env:Value>env:Receiver</env:Value>
        <env:Subcode>
        <env:Value xmlns:fault="http://www.axway.com/soapfaults">
          fault:MessageBlocked
        </env:Value>
        </env:Subcode>
    </env:Code>
    <env:Reason>
      <env:Text xml:lang="en">
        ${xsd.errors}
      </env:Text>
    </env:Reason>
    <env:Detail xmlns:fault="http://www.axway.com/soapfaults"
      fault:type="faultDetails">
    </env:Detail>
  </env:Fault>
</env:Body>
</env:Envelope>
```

At runtime, the error reported by the schema validator is set in the message.
The following example shows a SOAP Fault containing a typical schema validation error:

``` {space="preserve"}
<?xml version="1.0" encoding="UTF-8"?>
<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope">
<env:Body>
  <env:Fault>
    <env:Code>
      <env:Value>env:Receiver</env:Value>
      <env:Subcode>
      <env:Value xmlns:fault="http://www.axway.com/soapfaults">
      fault:MessageBlocked
      </env:Value>
      </env:Subcode>
    </env:Code>
    <env:Reason>
      <env:Text xml:lang="en">
      [XSD Error: Unknown element 'id' (line: 2, column: 8)]
      </env:Text>
    </env:Reason>
    <env:Detail xmlns:fault="http://www.axway.com/soapfaults"
      fault:type="faultDetails">
    </env:Detail>
  </env:Fault>
</env:Body>>
</env:Envelope>
```

The following figure shows how to use the **Set Message**
filter to return a customized SOAP Fault in a policy. If the **Schema Validation**
filter succeeds, the message is routed on to the target web service. However, if the schema validation fails, the **Set Message**
filter (named Set Custom Fault Message) is invoked. The filter sets the contents of the `xsd.errors`
message attribute (the schema validation errors) to the custom SOAP Fault message as shown in the example error. The **Reflect**
filter (named Return SOAP Fault) then writes the message back to the client.

![Policy that Returns a Custom SOAP Fault to the Client](/Images/docbook/images/fault/custom_soap_fault.gif)

</div>
