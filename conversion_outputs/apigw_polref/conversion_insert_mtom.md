{
"title": "Insert MTOM attachment",
"linkTitle": "Insert MTOM attachment",
"date": "2019-10-17",
"description": "Message Transmission Optimization Mechanism (MTOM) provides a way to send binary data to web services in standard SOAP messages. MTOM leverages the include mechanism defined by XML Optimized Packaging (XOP) whereby binary data can be sent as a MIME attachment (similar to SOAP with attachments) to a SOAP message. The binary data can then be referenced in the SOAP message using the `<xop:Include>`\\nelement."
}
﻿
<div id="p_conversion_insert_mtom_overview">

Overview
--------

Message Transmission Optimization Mechanism (MTOM) provides a way to send binary data to web services in standard SOAP messages. MTOM leverages the include mechanism defined by XML Optimized Packaging (XOP) whereby binary data can be sent as a MIME attachment (similar to SOAP with attachments) to a SOAP message. The binary data can then be referenced in the SOAP message using the `<xop:Include>`
element.

The following MTOM message contains a binary image encapsulated in a MIME part:

{{< alert title="Note" color="primary" >}}The MIME part that contains the binary image is referenced in the SOAP request body using the `<xop:Include>`
element. The `href`
attribute of this element refers to the `Content-ID`
HTTP header of the MIME part.{{< /alert >}}
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

When the API Gateway receives this request, the **Insert MTOM Attachment**
filter can be used to read the binary data in the MIME parts pointed to by the `<xop:Include>`
elements embedded in the SOAP request. The binary data is then Base64-encoded and inserted into the message in place of the `<xop:Include>`
elements. The resulting message is as follows:

    <?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <uploadGraphic xmlns="www.example.org">
          <image>/aWKKapGGyQ=</image>
        </uploadGraphic>
      </soap:Body>
    </soap:Envelope>

</div>

<div id="p_conversion_insert_mtom_conf">

Configuration
-------------

Complete the following fields for the **Insert MTOM Attachment**
filter:

**Name**:\
Enter a name for the filter.

**XPath Location**:\
Use an XPath expression to point to the location of the `<xop:Include>`
element that refers to the binary attachment. The specified XPath expression can point to multiple `<xop:Include>`
elements if necessary. For example, an XPath expression of `//xop:Include`
returns all `<xop:Include>`
elements in the SOAP envelope. For more information, see
[Configure XPath expressions](/csh?context=640&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Remove attachments once they have been included in the message:**\
Select this option to remove the MIME parts that contain the actual binary content from the message after they have been inserted into the message.

</div>
