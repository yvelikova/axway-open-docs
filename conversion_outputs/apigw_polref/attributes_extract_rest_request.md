{
"title": "Extract REST request attributes",
"linkTitle": "Extract REST request attributes",
"date": "2019-10-17",
"description": "This filter extracts the values of query string parameters and HTTP headers from a REST request and stores them in separate message attributes. The request can be an HTTP GET or HTTP POST request. This filter is in the **Attributes**\\ncategory in Policy Studio. For details on creating a REST request, see [*Create REST request* on page 1](%3Ca%20href=)."
}
﻿
<div id="p_attributes_extract_rest_request_over">

Overview
--------

This filter extracts the values of query string parameters and HTTP headers from a REST request and stores them in separate message attributes. The request can be an HTTP GET or HTTP POST request. This filter is in the **Attributes**
category in Policy Studio. For details on creating a REST request, see *Create REST request* on page 1.

<div>

### HTTP GET requests

The following example shows an incoming HTTP GET request with query string and HTTP headers:

``` {space="preserve"}
GET /services?name=Niall&location=Dublin&location=Pembroke%20St HTTP/1.1
Host:mail.google.com
User-Agent:Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.2.15) 
Gecko/20110303 Firefox/3.6.15
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language:en-gb,en;q=0.5
Accept-Encoding:gzip,deflate
Accept-Charset:ISO-8859-1,utf-8;q=0.7,*;q=0.7
```

Using this example, when **Request Querystring** is selected, the **Extract REST Request Attributes**
filter generates the following attributes:

``` {space="preserve"}
http.header.Host = mail.google.com
http.header.User-Agent = Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.2.15) 
Gecko/20110303 Firefox/3.6.15
http.header.Accept = text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
http.header.Accept-Language = en-gb,en;q=0.5
http.header.Accept-Encoding = gzip,deflate
http.header.Accept-Charset = ISO-8859-1,utf-8;q=0.7,*;q=0.7
params.query.name = Niall
params.query.location.1 = Dublin
params.query.location.2 = Pembroke St
```

This filter extracts all parameters from an incoming REST request, and stores them in separate message attributes so that they can be validated easily.

{{< alert title="Note" color="primary" >}}For multi-valued query string parameters, each value is given an incremental index. For example, the multi-valued `location`
parameter results in the creation of the `params.query.location.1`
and `params.query.location.2`
message attributes. {{< /alert >}}

</div>

<div>

### HTTP POST requests

When you POST a form to the API Gateway, the parameters are placed in the message body, and not in the query string. However, the **Extract REST Request Attributes**
filter treats posted parameters the same as normal query parameters, and also adds them to the `params.query`
message attribute in a similar way to the HTTP GET request. For example, an HTTP POST message body contains the following:

    grant_type=password&username=johndoe&password=A3ddj3w

This means that the `${params.query.grant_type}`
message attribute selector contains a value of `password`.

</div>

</div>

<div id="p_attributes_extract_rest_request_conf">

Configuration
-------------

Configure the following fields on the **Extract REST Request Attributes**
window:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Request Querystring**:\
Select whether to extract the values of query string parameters from an HTTP POST or GET request. These are simple name-value pairs (for example, `Name=Joe Bloggs`). This setting is selected by default.

**HTTP Headers**:\
Select whether to extract the HTTP header values from an HTTP POST or GET request (selected by default).

**Decode Extracted Attributes**:\
Select whether to decode URI paths that have been percent-encoded (for example, using `%2F`
for `/`). This setting enables compatibility with previous API Gateway versions, which decoded URI paths, and is not selected by default. For example, this means that URI path components such as the following stay in a raw state:

    /s8koID4%2FAd6AqgADSghC%2Bg%3D%3D/book%20repo/first%20book.pdf

This results in:

``` {space="preserve"}
path[0] = ""
path[1] = "s8koID4%2FAd6AqgADSghC%2Bg%3D%3D"
path[2] = "book%20repo"
path[3] = "first%20book.pdf"
```

When this setting is selected, the URI path is decoded. This results in:

``` {space="preserve"}
path[0] = ""
path[1] = "s8koID4%/Ad6AqgADSghC+g=="
path[2] = "book repo"
path[3] = "first book.pdf"
```

</div>
