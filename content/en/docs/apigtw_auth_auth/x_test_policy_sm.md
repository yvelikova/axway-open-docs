{
"title": "Test the policy",
"linkTitle": "Test the policy",
"date": "2020-01-21",
"description": "This section describe how to test your SiteMinder policy using a standard browser."
}
﻿

This section describe how to test your SiteMinder policy using a standard browser.

1.  Open a web browser in private (incognito) mode to ensure no user is yet logged in.
2.  Enter the URL to call your policy:
3.  http://<ip address>:<port>/<path>

    For example:

    http://localhost:8080/siteminder\_sso

4.  Enter the login credentials. API Gateway authenticates the user against SiteMinder and returns the response along with the SiteMinder session cookie.
5.  Refresh the browser to access the protected resource. Because the custom cookie (`smcookie`) is available this time, API Gateway does not prompt for credentials. Instead of re-authentication, API Gateway validates the cookie against the SiteMinder.

The **Traffic Monitor** tab on the API Gateway Manager (`https://localhost:8090`) is an excellent place to view and troubleshoot the message flows. For more details, see .
