{
"title": "Create session",
"linkTitle": "Create session",
"date": "2019-10-17",
"description": "The **Create Session**\\nfilter enables the API Gateway to create an HTTP session and configure various session attributes (for example, expiry, domain, and security). This filter requires an `authentication.subject.id`\\nattribute for the user, and stores it in the HTTP session. This session ID is used to create a cookie with a specified name, which is stored in the generated `http.session.cookie.name`\\nattribute. The cookie is then sent to the user specified by the `authentication.subject.id`\\nattribute."
}
﻿
<div id="authn_session_create_overview">

Overview
--------

The **Create Session**
filter enables the API Gateway to create an HTTP session and configure various session attributes (for example, expiry, domain, and security). This filter requires an `authentication.subject.id`
attribute for the user, and stores it in the HTTP session. This session ID is used to create a cookie with a specified name, which is stored in the generated `http.session.cookie.name`
attribute. The cookie is then sent to the user specified by the `authentication.subject.id`
attribute.

The **Create Session**
filter should be used with the **Check Session**
and **End Session**
filters to manage HTTP sessions. For more details, see:

-   [*Check session* on page 1](authn_session_check.htm)
-   [*End session* on page 1](authn_session_end.htm)

{{< alert title="Tip" color="primary" >}}The **Create Session**
filter offers a more flexible approach to managing HTTP sessions than using the **HTTP Form-Based Authentication**
filter. For example, the form-based approach does not include the ability to check or end sessions, and sessions are auto-renewed on each invocation of the filter. For more details, see [*HTML form-based authentication* on page 1](authn_html_form.htm).{{< /alert >}}

</div>

<div id="authn_session_create_conf">

Configuration
-------------

Complete the following fields to configure this filter:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Expiration time of session in milliseconds**:\
Enter the HTTP session expiry timeout in milliseconds. When the session reaches the specified lifetime, it is automatically invalidated, and can no longer pass the **Check Session**
filter.

**Session cookie**:\
Enter the name of the HTTP cookie used for the session. This filter uses the HTTP session ID to create the cookie named by this field. The specified cookie name is output in the generated `http.session.cookie.name`
message attribute. Defaults to `VIDUSR`.

**Session cookie domain**:\
Enter the domain value for the `Set-Cookie`
header (for example, `example.com`).This informs the browser that cookies should be sent back to the server for the specified domain only.

**Session cookie path**:\
Enter the path value for the `Set-Cookie`
header (for example, `/sales`). This informs the browser that cookies should be sent back to the server for the specified path only. Defaults to `/`.

**Session sent over SSL only**:\
Select whether the session uses SSL only. When selected, this adds a `Secure`
flag to the cookie.

**HTTP-only cookie**:\
Select whether the session uses HTTP only. When selected, this adds an `HTTPOnly`
flag to the cookie.

</div>
