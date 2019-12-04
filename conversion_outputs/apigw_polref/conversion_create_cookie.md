{
"title": "Create cookie",
"linkTitle": "Create cookie",
"date": "2019-10-17",
"description": "An HTTP cookie is data sent by a server in an HTTP response to a client. The client can then return an updated cookie value in subsequent requests to the server. For example, this enables the server to store user preferences, manage sessions, track browsing habits, and so on. "
}
﻿
<div id="p_conversion_create_cookie_overview">

Overview
--------

An HTTP cookie is data sent by a server in an HTTP response to a client. The client can then return an updated cookie value in subsequent requests to the server. For example, this enables the server to store user preferences, manage sessions, track browsing habits, and so on.

The **Create Cookie**
filter is used to create a `Set-Cookie`
header or a `Cookie`
header. The `Set-Cookie`
header is used when the server instructs the client to store a cookie. The `Cookie`
header is used when a client sends a cookie to a server. This filter adds the appropriate HTTP cookie header to the message header, and saves the cookie as a message attribute.

For more details, see [*Get cookie* on page 1](attributes_get_cookie.htm).

</div>

<div id="p_conversion_create_cookie_config">

Configuration
-------------

Configure the following fields:

**Filter Name**:\
Enter an appropriate name to display for this filter to display in a policy.

**HTTP Header Type**:\
Select the HTTP cookie header type to create: **Set-Cookie (Server)**
or **Cookie (Client)**. When this is set to **Set-Cookie (Server)**, all attributes from the **Cookie Details**
list are used. When this is set to **Cookie (Client)**, only the **Cookie Value**
attribute is used.

<div>

### Cookie details

You can configure the following settings for the cookie in the **Cookie Details**
section:

**Cookie Name**:\
Enter the name of the cookie.

**Cookie Value**:\
Enter the value of the cookie.

**Domain**:\
Enter the domain name for this cookie.

**Path**:\
Enter the path on the server to which the browser returns this cookie.

**Max-Age**:\
Enter the maximum age of the cookie in days, hours, minutes, and seconds.

**Secure**:\
Select this option to restrict sending this cookie to a secure protocol. This setting is not selected by default, which means that it can be sent using any protocol.

**HTTPOnly**:\
Select this option to restrict the browser to use cookies over HTTP only. This setting is not selected by default.

</div>

</div>
