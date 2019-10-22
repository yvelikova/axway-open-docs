{
"title": "Check session",
"linkTitle": "Check session",
"date": "2019-10-17",
"description": "The **Check Session**\\nfilter checks for the presence of a valid cookie-based HTTP session. This filter tries to locate a valid session based on the value of a specified cookie name. If the session is found, the filter retrieves the user and sets it in the `authentication.subject.id`\\nattribute."
}
﻿
<div id="authn_session_check_overview">

Overview
--------

The **Check Session**
filter checks for the presence of a valid cookie-based HTTP session. This filter tries to locate a valid session based on the value of a specified cookie name. If the session is found, the filter retrieves the user and sets it in the `authentication.subject.id`
attribute.

The **Check Session**
filter should be used with the **Create Session**
and **End Session**
filters to manage HTTP sessions. For more details, see:

-   [*Create session* on page 1](authn_session_create.htm)
-   [*End session* on page 1](authn_session_end.htm)

</div>

<div id="authn_session_check_conf">

Configuration
-------------

Complete the following fields to configure this filter:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Session cookie**:\
Enter the name of the HTTP cookie used for the session. This filter tries to locate a valid session based on the value of the specified cookie name. The cookie name is output in the generated `http.session.cookie.name`
message attribute. Defaults to `VIDUSR`.

</div>
