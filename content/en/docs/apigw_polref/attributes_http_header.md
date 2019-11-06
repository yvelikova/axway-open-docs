{
"title": "Retrieve from HTTP header",
"linkTitle": "Retrieve from HTTP header",
"date": "2019-10-17",
"description": "The **Retrieve from HTTP Header**\\nattribute retrieval filter can be used to retrieve the value of an HTTP header and set it to a message attribute. For example, this filter can retrieve an X.509 certificate from a `USER_CERT`\\nHTTP header, and set it to the `authentication.cert`\\nmessage attribute. This certificate can then be used by the filter's successors. The following HTTP request shows an example of such a header:"
}
﻿
<div id="p_attrs_retr_http_hdr_over">

Overview
--------

The **Retrieve from HTTP Header**
attribute retrieval filter can be used to retrieve the value of an HTTP header and set it to a message attribute. For example, this filter can retrieve an X.509 certificate from a `USER_CERT`
HTTP header, and set it to the `authentication.cert`
message attribute. This certificate can then be used by the filter's successors. The following HTTP request shows an example of such a header:

``` {space="preserve"}
POST /services/getEmployee HTTP/1.1
Host:localhost:8095
Content-Length:21
SOAPAction:HelloService
USER_CERT:MIIEZDCCA0 ...9aKD1fEQgJ
```

You can also retrieve a value from a named query string parameter and set this to the specified message attribute. The following example shows a request URL that contains a query string:

    http://hostname.com/services/getEmployee?first=john&last=smith

In the above example, the query string is `first=john&last=smith`
. As is clear from the example, query strings consist of attribute name-value pairs. Each name-value pair is separated by the `&`
character.

</div>

<div id="p_attrs_retr_http_hdr_conf">

Configuration
-------------

The following fields are available on the **Retrieve from HTTP Header**
filter configuration window:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**HTTP Header Name**:\
Enter the name of the HTTP header contains the value that we want to set to the message attribute.

**Base64 Decode**:\
Check this box if the extracted value should be Base64 decoded before it is set to the message attribute.

**Use Query String Parameters**:\
Select this setting if the API Gateway should attempt to extract the **HTTP Header Name**
from the query string parameters instead of from the HTTP headers.

**Attribute ID**:\
Finally, select the attribute used to store the value extracted from the request.

</div>
