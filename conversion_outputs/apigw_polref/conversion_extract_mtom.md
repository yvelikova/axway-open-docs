{
"title": "Extract MTOM content",
"linkTitle": "Extract MTOM content",
"date": "2019-10-17",
"description": "Message Transmission Optimization Mechanism (MTOM) provides a way to send binary data to web services within standard SOAP messages. MTOM leverages the include mechanism defined by XML Optimized Packaging (XOP) whereby binary data can be sent as a MIME attachment (similar to SOAP with attachments) to a SOAP message. The binary data can then be referenced in the SOAP message using the `<xop:Include>`\\nelement."
}
﻿
<div id="p_conversion_extract_mtom_overview">

Overview
--------

Message Transmission Optimization Mechanism (MTOM) provides a way to send binary data to web services within standard SOAP messages. MTOM leverages the include mechanism defined by XML Optimized Packaging (XOP) whereby binary data can be sent as a MIME attachment (similar to SOAP with attachments) to a SOAP message. The binary data can then be referenced in the SOAP message using the `<xop:Include>`
element.

The following MTOM message contains a binary image that has been Base64-encoded so that it can be inserted as the contents of the `<image>`
element:

    <?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <uploadGraphic xmlns="www.example.org">
          <image>/aWKKapGGyQ=</image>
        </uploadGraphic>
      </soap:Body>
    </soap:Envelope>

When the API Gateway receives this request, the **Extract MTOM Content**
filter can be used to extract the Base64-encoded content from the `<image>`
element, replace it with an `<xop:Include>`
element, which contains a reference to a newly created MIME part that contains the binary content. The following request shows the resulting MTOM message:

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
                href='cid:http://example.org/myimage.gif' />
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

{{< alert title="Note" color="primary" >}}Note the following in the resulting MTOM message:{{< /alert >}}
<div class="indentTable">

-   The Base64-encoded contents of the `<image>`
    element have been replaced by the `<xop:Include>`
    element.
-   The `<xop:Include>`
    element points to a MIME part using the `href`
    attribute.
-   The value of the `href`
    attribute corresponds to the value of the `Content-ID`
    HTTP header of the MIME part that contains the binary octets of the actual image file.

</div>

</div>

<div id="p_conversion_extract_mtom_conf">

Configuration
-------------

Complete the following fields for the **Extract MTOM Content**
filter:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**XPath Location**:\
Use an XPath expression to locate the encoded data elements. For example, in the sample SOAP request message above, you would configure an XPath expression to point to the `<image>`
element. For more information, see
[Configure XPath expressions](/csh?context=640&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
