{
"title": "End session",
"linkTitle": "End session",
"date": "2019-10-17",
"description": "The **End Session**\\nfilter terminates a cookie-based HTTP session. This filter tries to locate the session based on the value of a specified cookie name, and then invalidates it."
}
﻿
<div id="authn_session_end_overview">

Overview
--------

The **End Session**
filter terminates a cookie-based HTTP session. This filter tries to locate the session based on the value of a specified cookie name, and then invalidates it.

The **End Session**
filter should be used with the **Create Session**
and **Check Session**
filters to manage HTTP sessions. For more details, see:

-   [*Create session* on page 1](authn_session_create.htm)
-   [*Check session* on page 1](authn_session_check.htm)

</div>

<div id="authn_session_end_conf">

Configuration
-------------

Complete the following fields to configure this filter:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Remove session cookie**:\
Select whether to try and remove the session cookie. When selected, the API Gateway sends a new cookie with the expiry time set in the past. You must also set the same domain and path values that were used to create the session using the **Create Session**
filter.

**Session cookie**:\
Enter the name of the HTTP cookie used for the session. This filter tries to locate the session specified by this cookie name. This is output in the generated `http.session.cookie.name`
message attribute. Defaults to `VIDUSR`.

**Session cookie domain**:\
When **Remove session cookie**
is selected, enter the same domain that was used to create the session in the **Create Session**
filter (for example, `example.com`). This removes the cookie for the specified domain only.

**Session cookie path**:\
When **Remove session cookie**
is selected, enter the same path that was used to create the session in the **Create Session**
filter (for example, `/sales`). This removes the cookie for the specified path only. Defaults to `/`.

</div>
