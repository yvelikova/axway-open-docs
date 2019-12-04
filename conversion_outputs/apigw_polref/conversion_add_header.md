{
"title": "Add HTTP header",
"linkTitle": "Add HTTP header",
"date": "2019-10-17",
"description": "The API Gateway can add HTTP headers to a message as it passes through a policy. It can also set a Base64-encoded value for the header. For example, you can use the **Add HTTP Header**\\nfilter to add a message ID to an HTTP header. This message ID can then be forwarded to the destination web service, where messages can be indexed and tracked by their IDs. In this way, you can create a complete *audit trail*\\nof the message from the time it is received by the API Gateway, until it is processed by the back-end system. "
}
﻿
<div id="p_conversion_add_header_overview">

Overview
--------

The API Gateway can add HTTP headers to a message as it passes through a policy. It can also set a Base64-encoded value for the header. For example, you can use the **Add HTTP Header**
filter to add a message ID to an HTTP header. This message ID can then be forwarded to the destination web service, where messages can be indexed and tracked by their IDs. In this way, you can create a complete *audit trail*
of the message from the time it is received by the API Gateway, until it is processed by the back-end system.

Each message being processed by the API Gateway is assigned a unique transaction ID, which is stored in the `id`
message attribute. You can use the `${id}`
selector to represent the value of the unique message ID. At runtime, this selector is expanded to the value of the `id`
message attribute. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_conversion_add_header_conf">

Configuration
-------------

To configure the **Add HTTP Header**
filter, complete the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**HTTP Header Name**:\
Enter the name of the HTTP header to add to the message.

**HTTP Header Value**:\
Enter the value of the new HTTP header. You can also enter selectors to represent message attributes. At runtime, the API Gateway expands the selector to the current value of the corresponding message attribute. For example, the `${id}`
selector is replaced by the value of the current message ID. Message attribute selectors have the following syntax:

``` {space="preserve"}
${message_attribute}
```

**Override existing header**:\
Select this setting to override the existing header value. This setting is selected by default.

{{< alert title="Note" color="primary" >}}When overriding an existing header, the header can be an HTTP body-related header or a general HTTP header. To override an HTTP body-related header (for example, `Content-Type`), you must select the **Override existing header**
and **Add header to body**
settings.{{< /alert >}}
**Base64 Encode**:\
Select this setting to Base64 encode the HTTP header value. For example, you should use this if the header value is an X.509 certificate.

**Add header to body**:\
Select this option to add the HTTP header to the message body. Use this option for HTTP body entity headers, which provide metadata about the message body. For example, this includes headers such as the following:

``` {space="preserve"}
Content-Language
Content-Length
Content-Location
Content-MD5
Content-Range
Content-Type
Expires
Last-Modified
Extension header
```

**Add header to HTTP headers attribute**:\
Select this option to add the HTTP header to the `http.headers`
message attribute. Use this option for general HTTP headers, which apply to both request and response messages. For example, this includes headers such as `SOAPAction`:

``` {space="preserve"}
Server:
Connection: close
X-CorrelationID: Id-9e38c653c24c0000000000009593813a 0
Host: localhost:8083
SOAPAction: "http://example.com/api/ConvertUnits"
User-Agent: Gateway
Content-Type: text/xml; charset="utf-8"
MyHeader: FOO
```

``` {space="preserve"}
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      <ConvertUnits xmlns="http://example.com/api/">
         <EnterUnit>100</EnterUnit>
         <FromUnits>K</FromUnits>
         <ToUnits>M</ToUnits>
      </ConvertUnits>
    </soap:Body>
</soap:Envelope>
```

</div>
