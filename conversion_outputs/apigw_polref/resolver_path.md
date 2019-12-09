{
"title": "Relative path resolver",
"linkTitle": "Relative path resolver",
"date": "2019-10-17",
"description": "The **Relative Path**\\nfilter enables you to identify an incoming XML message based on the relative path on which the message is received. "
}
﻿
<div id="p_resolver_path_overview">

Overview
--------

The **Relative Path**
filter enables you to identify an incoming XML message based on the relative path on which the message is received.

The following example shows how to find the relative path of an incoming message. Consider the following SOAP message:

``` {space="preserve"}
POST /services/helloService HTTP/1.1
Host:localhost:8095
Content-Length:196
SOAPAction:HelloService
Accept-Language:en-US
UserAgent:API Gateway
Content-Type:text/XML; utf-8
```

``` {space="preserve"}
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Header></soap:Header>
   <soap:Body>
       <getHello xmlns="http://www.axway"/>.com/"/>
   </soap:Body>
</soap:Envelope>
```

The relative path for this message is as follows:

``` {space="preserve"}
/services/helloService
```

### Regular expression format

This filter uses the regular expression syntax specified by `java.util.regex.Pattern`
. For more details, see <http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html>

</div>

<div id="p_resolver_path_config">

Configuration
-------------

To configure the **Relative Path**
filter:

1.  Enter an appropriate name for the filter to display in a policy in the **Name**
    field.
2.  Enter a regular expression to match the value of the relative path on which messages are received in the **Relative Path**
    field.
3.  For example, enter `^/services/helloService$`
    to exactly match a path with a value of `/services/helloService`
    . Incoming messages received on a matching relative path value are passed on to the next filter on the success path in the policy.

</div>

<div>

Further information
-------------------

For more details, see the following filters:

-   [*SOAP action resolver* on page 1](resolver_soap_action.htm)
-   [*Operation name resolver* on page 1](resolver_soap_operation.htm)

</div>
