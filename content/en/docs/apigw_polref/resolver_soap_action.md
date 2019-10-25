{
"title": "SOAP action resolver",
"linkTitle": "SOAP action resolver",
"date": "2019-10-17",
"description": "The **SOAP Action Resolver**\\nfilter enables you to identify an incoming XML message based on the `SOAPAction`\\nHTTP header in the message. The **SOAP Action Resolver**\\nfilter applies to SOAP 1.1 and SOAP 1.2. "
}
﻿
<div id="p_resolver_soap_action_overview">

Overview
--------

The **SOAP Action Resolver**
filter enables you to identify an incoming XML message based on the `SOAPAction`
HTTP header in the message. The **SOAP Action Resolver**
filter applies to SOAP 1.1 and SOAP 1.2.

The following example illustrates how to locate the `SOAPAction`
header in an incoming message. Consider the following SOAP message:

``` {space="preserve"}
POST /services/helloService 
HTTP/1.1Host:localhost:8095
Content-Length:196
SOAPAction:HelloService
Accept-Language:en-US
UserAgent:API Gateway
Content-Type:text/XML; utf-8
```

``` {space="preserve"}
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Header>
   </soap:Header>
   <soap:Body>
      <getHello xmlns="http://www.axway/>.com/"/>
   </soap:Body>
</soap:Envelope>
```

The SOAP Action for this message is `HelloService`.

### Regular expression format

This filter uses the regular expression syntax specified by `java.util.regex.Pattern`
. For more details, see <http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html>

</div>

<div id="p_resolver_soap_action_config">

Configuration
-------------

To configure the **SOAP Action Resolver**
filter:

1.  Enter an appropriate name for the filter to display in policy in the **Name**
    field.
2.  Enter a regular expression to match the value of the `SOAPAction`
    HTTP header in the **SOAP Action**
    field.
3.  For example, enter `^getQuote$`
    to exactly match a `SOAPAction`
    header with a value of `getQuote`. Incoming messages with a matching `SOAPAction`
    value are passed on to the next filter on the success path in the policy.

</div>

<div>

Further information
-------------------

For more details, see the following filters:

-   [*Operation name resolver* on page 1](resolver_soap_operation.htm)
-   [*Relative path resolver* on page 1](resolver_path.htm)

</div>
