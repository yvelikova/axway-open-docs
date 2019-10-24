{
"title": "HTTP status code",
"linkTitle": "HTTP status code",
"date": "2019-10-17",
"description": "This filter sets the HTTP status code on response messages. This enables you to ensure that a more meaningful response is sent to the client in the case of an error occurring in a configured policy."
}
﻿

<div id="p_connection_http_status_overview">

Overview
--------

This filter sets the HTTP status code on response messages. This enables you to ensure that a more meaningful response is sent to the client in the case of an error occurring in a configured policy.

For example, if a **Relative Path**
filter fails, it might be useful to return a `503 Service Unavailable`
response. Similarly, if a user does not present identity credentials when attempting to access a protected resource, you can configure API Gateway to return a `401 Unauthorized`
response to the client.

HTTP status codes are returned in the *status-line*
of an HTTP response. The following are some typical examples:

``` {space="preserve"}
HTTP/1.1 200 OK 
```

``` {space="preserve"}
HTTP/1.1 400 Bad Request
```

``` {space="preserve"}
HTTP/1.1 500 Internal Server Error
```

</div>

See also [*HTTP redirect* on page 1](connection_http_redirect.htm).

<div id="p_connection_http_status_conf">

Configuration
-------------

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**HTTP response code status**:\
Enter the status code returned to the client. For a complete list of status codes, see the [HTTP specification](http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html).

</div>
