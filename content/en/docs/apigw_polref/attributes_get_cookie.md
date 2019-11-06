{
"title": "Get cookie",
"linkTitle": "Get cookie",
"date": "2019-10-17",
"description": "An HTTP cookie is data sent by a server in an HTTP response to a client. The client can then return an updated cookie value in subsequent requests to the server. For example, this enables the server to store user preferences, manage sessions, track browsing habits, and so on. "
}
﻿
<div id="p_attributes_get_cookie_over">

Overview
--------

An HTTP cookie is data sent by a server in an HTTP response to a client. The client can then return an updated cookie value in subsequent requests to the server. For example, this enables the server to store user preferences, manage sessions, track browsing habits, and so on.

The **Get Cookie**
filter is used to read the `Cookie`
and `Set-Cookie`
HTTP headers. The `Cookie`
header is used when a client sends a cookie to a server. The `Set-Cookie`
header is used when the server instructs the client to store a cookie.

For more details, see [*Create cookie* on page 1](conversion_create_cookie.htm).

</div>

<div id="p_attributes_get_cookie_conf">

Configuration
-------------

Configure the following fields on the **Get Cookie** filter configuration
window:

**Filter Name**:\
Enter an appropriate name for this filter to display in a policy..

**Cookie Name**:\
Enter a regular expression that matches the name of the cookie. This value can use wildcards. Defaults to the`.*`
wildcard.

**Remove all Cookie Headers from Message after retrieval**:\
When this setting is selected, all `Cookie`
and `Set-Cookie`
headers are removed from the message after retrieving the target cookie. This setting is not selected by default.

</div>

<div id="p_attributes_get_cookie_attributes">

Attribute storage
-----------------

When a cookie is retrieved, it is stored in the appropriate API Gateway message attribute. The following message attributes are used to store cookies:

| Cookie Header Type | Message Attribute Name                     |
|--------------------|--------------------------------------------|
| `Cookie`           | `cookie.cookie_name.value`                 
  (for example, `cookie.mytest.value`)        |
| `Set-Cookie`       | `cookie.cookie_name.cookie_attribute_name` 
  (for example, `cookie.mytest.header`)       |

### **Set-Cookie attribute list**\

The `Set-Cookie`
HTTP header includes the following cookie attributes (reflected in the `Set-Cookie`
message attribute name):

| Cookie Attribute Name | Description                                                                                                                                                  |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `header`              | The HTTP header name.                                                                                                                                        |
| `value`               | The value of the cookie.                                                                                                                                     |
| `domain`              | The domain name for this cookie.                                                                                                                             |
| `path`                | The path on the server to which the browser returns this cookie.                                                                                             |
| `maxage`              | The maximum age of the cookie in days, hours, minutes, and/or seconds.                                                                                       |
| `secure`              | Whether sending this cookie is restricted to a secure protocol. This setting is not selected by default, which means that it can be sent using any protocol. |
| `HTTPOnly`            | Whether the browser should use cookies over HTTP only. This setting is not selected by default.                                                              |

</div>
