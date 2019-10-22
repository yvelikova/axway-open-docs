{
"title": "HTML form-based authentication",
"linkTitle": "HTML form-based authentication",
"date": "2019-10-17",
"description": "HTML form-based authentication enables users to supply their user name and password details in an HTML form, and submit them to login to a system. Using HTML form-based authentication, normal HTTP authentication features such as HTTP basic or HTTP digest are not used. Instead, the user name and password are typically sent as HTML `<FORM>`\\ndata in an HTTP `POST`\\nover SSL. "
}
﻿
<div id="p_authn_html_form_overview">

Overview
--------

HTML form-based authentication enables users to supply their user name and password details in an HTML form, and submit them to login to a system. Using HTML form-based authentication, normal HTTP authentication features such as HTTP basic or HTTP digest are not used. Instead, the user name and password are typically sent as HTML `<FORM>`
data in an HTTP `POST`
over SSL.

When the **HTML Form based Authentication**
filter is configured, the API Gateway can authenticate the user details specified in the HTML form against a user profile stored in the API Gateway local repository, a database, or an LDAP directory. The **HTML Form based Authentication**
filter also enables you to specify how HTTP sessions are managed (for example, session expiry, and applicable API Gateway domain or relative path).

{{< alert title="Tip" color="primary" >}}For an alternative approach to HTTP session management, which also includes the ability to check or to end sessions, see [*Create session* on page 1](authn_session_create.htm). {{< /alert >}}

</div>

<div id="p_authn_html_form_general_conf">

General settings
----------------

These settings enable you to configure general details such as the names of the HTML form fields, format of user credentials, and repository to validate credentials against. Complete the following settings:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Username**:\
Enter the name of the HTML form field in which the user enters their user name. Defaults to `username`.

**Password**:\
Enter the name of the HTML form field in which the user enters their password. Defaults to `password`.

**Format of Authentication Credentials**:\
You must specify the format of the user credentials presented by the client because the API Gateway has no way of telling one credential format from another. Select one of the following from the list:

-   `User Name`
-   `X.509 Distinguished Name`

The selected format is then used internally by the API Gateway when performing authorization lookups against third-party Identity Management servers.

**Repository Name**:\
This specifies the name of the authentication repository where all user profiles are stored. This can be in the API Gateway's local repository, a database, or an LDAP directory. Select a preconfigured repository from the list (for example, `Local User Store`).

You can add a new repository by right-clicking the appropriate node under **Environment Configuration** > **External Connections**
> **Authentication Repository Profiles**
(for example, **Database Repositories**), and selecting **Add a new Repository**. For more details on authentication repositories, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_authn_html_form_session_conf">

Session settings
----------------

The settings on the **Session** tab enable you to configure how HTTP sessions between the HTML form client and the API Gateway are managed. Complete the following settings:

**Create a session**:\
Select whether to create an HTTP session. This setting is selected by default.

**Expiry of session in milliseconds**:\
Enter the period of time in milliseconds before the session expires. Defaults to `600000`
(10 minutes).

**Session cookie**:\
Enter the name of the cookie used to manage the session. The default is `VIDUSR`.

**Session applicable for this domain**:\
Enter the API Gateway domain name to which the session applies (for example, `dmz`).

**Session applicable for this path**:\
Enter the API Gateway relative path to which the session applies. Defaults to `/`.

**Session sent over SSL only**:\
Select whether the session is sent over an SSL connection only. This setting is not selected by default.

**HTTP Only cookie**:\
Select the check box to add a HTTPOnly flag to the session cookie. This is not selected by default.

Invalid login attempts settings
-------------------------------

The settings on the **Invalid Login Attempts**
tab enable you to specify how to handle invalid login attempts. You can choose to lock user accounts, ban IP addresses, or both, if a specified number of invalid attempts are made in a specified time period. The invalid attempt information is also stored in a cache.

{{< alert title="Note" color="primary" >}}If you are using two or more instances of HTTP basic, HTTP digest, or HTML form-based authentication filters in the same policy, and they share the same invalid attempts cache, you must use the same invalid attempts settings on each of the filters.{{< /alert >}}
For more details on the settings on this tab, see [*Invalid attempts* on page 1](authn_http_basic.htm#Invalid).

</div>
