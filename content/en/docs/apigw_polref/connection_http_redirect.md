{
"title": "HTTP redirect",
"linkTitle": "HTTP redirect",
"date": "2019-10-17",
"description": "You can use the **HTTP Redirect**\\nfilter to enable API Gateway to send an HTTP redirect message. For example, you can send an HTTP redirect to force a client to enter user credentials on an HTML login page if no HTTP cookie already exists. Alternatively, you can send an HTTP redirect if a web page has moved to a new URL address. "
}
﻿
<div id="p_connection_http_redirect_over">

Overview
--------

You can use the **HTTP Redirect**
filter to enable API Gateway to send an HTTP redirect message. For example, you can send an HTTP redirect to force a client to enter user credentials on an HTML login page if no HTTP cookie already exists. Alternatively, you can send an HTTP redirect if a web page has moved to a new URL address.

See also [*HTTP status code* on page 1](connection_http_status.htm).

</div>

<div id="p_connection_http_redirect_settings">

Configuration
-------------

Complete the following settings:

**Name**:\
Enter a descriptive name for this filter to display in a policy.

**HTTP response code status**:\
Enter the HTTP response code status to use in the HTTP redirect message. Defaults to `301`, which means that the requested resource has been assigned a new permanent URI, and any future references to this resource should use the returned redirect URL.

**Redirect URL**:\
Enter the URL address to which the message is redirected.

**Content-Type**:\
Enter the `Content-Type`
of the HTTP redirect message (for example, `text/xml`).

**Message Body**:\
Enter the message body text to send in the HTTP redirect message.

</div>
