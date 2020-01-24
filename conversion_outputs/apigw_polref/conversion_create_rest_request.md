{
"title": "Create REST request",
"linkTitle": "Create REST request",
"date": "2019-10-17",
"description": "Representational State Transfer (REST) is a client-server architectural style used to represent the state of application resources in distributed systems. Typically, servers expose resources using a URI, and clients access these resources using HTTP verbs such as HTTP GET, HTTP POST, HTTP DELETE, and so on. "
}
﻿
<div id="p_conversion_create_rest_request_over">

Overview
--------

Representational State Transfer (REST) is a client-server architectural style used to represent the state of application resources in distributed systems. Typically, servers expose resources using a URI, and clients access these resources using HTTP verbs such as HTTP GET, HTTP POST, HTTP DELETE, and so on.

The **Create REST Request**
filter enables you to create HTTP requests to RESTful web services. You can also configure the query string parameters that are sent with the REST request. For example, for an HTTP GET request, the parameters are URL-encoded and appended to the request URI as follows:

    GET /translate_a/t?client=t&sl=en&tl=ga&text=Hello

For an HTTP POST request, the parameters are URL-encoded and added to the request body as follows:

``` {space="preserve"}
POST /webservices/tempconvert.asmx/CelsiusToFahrenheit
Host:ww.w3schools.com
Accept-charset:en
Celsius=200
```

This filter is found in the **Conversion**
category in Policy Studio. For details on how to extract REST request attributes from a message, see [*Extract REST request attributes* on page 1](attributes_extract_rest_request.htm). For details on how to validate a REST request, see [*Validate REST request* on page 1](content_validate_rest_request.htm).

</div>

<div id="p_conversion_create_rest_request_conf">

Configuration
-------------

Complete the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**HTTP Method**:\
Enter or select an HTTP method from the list (for example, `POST`, `GET`, `DELETE`, and so on).

**REST Request Parameters**:\
You can add query string parameters to the REST request. These are simple name-value pairs (for example, `Name=Joe Bloggs`). To add query string parameters, click the **Add**
button, and enter the name-value pair in the **Configure REST Request Parameters**
dialog. Repeat to add multiple parameters.

This filter generates the `http.querystring`
and `http.raw.querystring`
message attributes to store the query string. For example, you can then append contents of the `http.raw.querystring`
message attribute to a **Connect to URL**
or **Rewrite URL**
filter using a message attribute selector (for example, `${http.raw.querystring}`). For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Add attributes stored in attribute lookup list to REST request**:\
If you have populated the `attribute.lookup.list`
message attribute using a previous filter in a policy, you can select this setting to include these message attributes in the serialized query string that is written to the request.

</div>
