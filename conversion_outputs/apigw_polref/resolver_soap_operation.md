{
"title": "Operation name resolver",
"linkTitle": "Operation name resolver",
"date": "2019-10-17",
"description": "The **Operation Name**\\nfilter enables you to identify an incoming XML message based on the SOAP operation in the message. "
}
﻿
<div id="p_resolver_soap_operation_overview">

Overview
--------

The **Operation Name**
filter enables you to identify an incoming XML message based on the SOAP operation in the message.

The following example shows how to find the SOAP operation of an incoming message. Consider the following SOAP message:

``` {space="preserve"}
POST /services/timeservice 
HTTP/1.0Host:localhost:8095
Content-Length:374
SOAPAction:TimeService
Accept-Language:en-US
UserAgent:API Gateway
Content-Type:text/XML; utf-8
```

``` {space="preserve"}
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      <ns1:getTime xmlns:ns1="Some-URI">
         <ns1:city>Dublin</ns1:city>
      </ns1:getTime>
   </soap:Body>
</soap:Envelope>
```

The SOAP operation for this message and its namespace are as follows:

-   SOAP operation:`getTime`
-   SOAP operation namespace:`urn:timeservice`

The SOAP operation is the first child element of the SOAP `<soap:Body>`
element.

</div>

<div id="p_resolver_soap_operation_conf">

Configuration
-------------

To configure the **Operation Name**
filter:

1.  Enter an appropriate name for the filter to display in a policy in the **Name**
    field.
2.  Enter the name of the SOAP operation in the **Operation**
    field. Incoming messages with an operation name matching the value entered here are passed on to the next success filter in the policy.
3.  Enter the namespace to which the SOAP operation belongs in the **Namespace**
    field.

Further information
-------------------

For more details, see the following filters:

-   [*SOAP action resolver* on page 1](resolver_soap_action.htm)
-   [*Relative path resolver* on page 1](resolver_path.htm)

</div>
