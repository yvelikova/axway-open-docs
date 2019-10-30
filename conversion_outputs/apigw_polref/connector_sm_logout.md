{
"title": "CA SiteMinder logout",
"linkTitle": "CA SiteMinder logout",
"date": "2019-10-17",
"description": "When API Gateway has authenticated successfully to CA SiteMinder on behalf of an end user, SiteMinder can issue a *single sign-on* token (a session cookie) and return it to API Gateway. API Gateway returns the cookie along with the response to the end user. The client includes the session cookie in subsequent requests to API Gateway. API Gateway can then use the **Session Validation**\\nfilter to ensure that the session cookie is still valid and hence that the user is still authenticated. "
}
﻿

When API Gateway has authenticated successfully to CA SiteMinder on behalf of an end user, SiteMinder can issue a *single sign-on* token (a session cookie) and return it to API Gateway. API Gateway returns the cookie along with the response to the end user. The client includes the session cookie in subsequent requests to API Gateway. API Gateway can then use the **Session Validation**
filter to ensure that the session cookie is still valid and hence that the user is still authenticated.

You can use the **Logout** filter to terminate a previously issued session cookie. After the cookie has been terminated, the client is no longer considered authenticated.

{{< alert title="Note" color="primary" >}}You must have already validated the session before calling the **Logout** filter in your policy. For more details, see [CA SiteMinder session validation](connector_sm_session.htm).{{< /alert >}}

Integration with CA SiteMinder requires adding the required third-party binaries to your API Gateway and Policy Studio installations. For more details, see [Prerequisites](part_siteminder_filters.htm#Prerequi).
