{
"title": "Signature location",
"linkTitle": "Signature location",
"date": "2019-10-17",
"description": "A given XML message can contain several XML signatures. Consider an XML document (for example, a company policy approval form) that must be digitally signed by a number of users (for example, department managers) before being submitted to the destination web service (for example, a company policy approval web service). Such a message contains several XML signatures by the time it is ready to be submitted to the web service. "
}
﻿
<div id="p_common_sig_location_over">

Overview
--------

A given XML message can contain several XML signatures. Consider an XML document (for example, a company policy approval form) that must be digitally signed by a number of users (for example, department managers) before being submitted to the destination web service (for example, a company policy approval web service). Such a message contains several XML signatures by the time it is ready to be submitted to the web service.

In such cases, where multiple signatures are present within a given XML message, it is necessary to specify which signature the API Gateway should use in the validation process. You can specify the location of the signature in the XML message in the **XML Signature Verification** filter. For more information on validating XML signatures, see
[XML signature verification](/csh?context=526&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

</div>

<div id="p_common_sig_location_over_conf">

Signature location options
--------------------------

The API Gateway can extract the signature from an XML message using several different methods:

-   WS-Security block
-   SOAP message header
-   Advanced (XPath)

Select the most appropriate method from the **Signature Location**
field. Your selection depends on the types of SOAP messages that you expect to receive. For example, if incoming SOAP messages contain an XML signature within a WS-Security block, you should choose this option from the list.

<div id="p_common_sig_location_over_conf_actors">

### Use WS-Security actors

If the signature is present in a WS-Security block:

1.  Select `WS-Security block`
    from the **Signature Location**
    field.
2.  Select a SOAP actor from the **Select Actor/Role(s)**
    field. Each actor uniquely identifies a separate WS-Security block. By selecting `Current actor/role only`
    from the list, the WS-Security block with no actor is taken.
3.  In cases where there might be multiple signatures within the WS-Security block, it is necessary to extract one using the **Signature Position**
    field.

The following is a skeleton version of a message where the XML signature is contained in the `sample`
WS-Security block, (`soap-env:actor="sample"`):

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
      <s:Header>
        <wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2002/04/secext" s:actor="sample">
          <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="s1">
            ....
          </dsig:Signature>
        </wsse:Security>
      </s:Header>
      <s:Body>
        <ns1:getTime xmlns:ns1="urn:timeservice">
        </ns1:getTime>
      </s:Body>
    </s:Envelope>

</div>

<div id="p_common_sig_location_over_conf_soap_head">

### Use SOAP header

If the signature is present in the SOAP header:

1.  Select `SOAP message header`
    from the **Signature Location**
    field.
2.  If there is more than one signature in the SOAP header, then it is necessary to specify which signature the API Gateway should use. Specify the appropriate signature by setting the **Signature Position**
    field.

The following is an example of an XML message where the XML signature is contained within the SOAP header:

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
      <s:Header>
        <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="s1">
          ....
        </dsig:Signature>
      </s:Header>
      <s:Body>
        <ns1:getTime xmlns:ns1="urn:timeservice">
        </ns1:getTime>
      </s:Body>
    </s:Envelope>

</div>

<div id="p_common_sig_location_over_conf_xpath">

### Use XPath expression

To use an XPath expression to locate the signature:

1.  Select `Advanced (XPath)`
    from the **Signature Location**
    field.
2.  Select an existing XPath expression from the list, or add a new one by clicking on the **Add**
    button. XPath expressions can also be edited or removed with the **Edit**
    and **Remove**
    buttons.

The `First signature in SOAP Header`
XPath expression takes the first signature from the SOAP header. The expression is as follows:

    //s:Envelope/s:Header/dsig:Signature[1]

To edit this expression, click the **Edit**
button to display the **Enter XPath Expression**
dialog.

An example of a SOAP message containing an XML signature in the SOAP header is provided below.

    <?xml version="1.0" encoding="UTF-8"?>
    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
      <s:Header>
        <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="s1">
          ....
        </dsig:Signature>
      </s:Header>
      <s:Body>
        <product xmlns="http://www.axway.com">
          <name>SOA Product*</name>
          <company>Company</company>
          <description>Web Services Security</description>
        </product>
      </s:Body>
    </s:Envelope>

Because the elements referenced in the expression (`Envelope`
and `Signature`) are prefixed
elements, you must define the namespace mappings for each of these elements as follows:

| Prefix | URI                                         |
|--------|---------------------------------------------|
| `s`    | `http://schemas.xmlsoap.org/soap/envelope/` |
| `dsig` | `http://www.w3.org/2000/09/xmldsig#`        |

When adding your own XPath expressions, you must be careful to define any namespace mappings in a manner similar to that outlined above. This avoids any potential clashes that might occur where elements of the same name, but belonging to different namespaces, are present in an XML message.

</div>

</div>
