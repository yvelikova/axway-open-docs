{
"title": "HTTP digest authentication",
"linkTitle": "HTTP digest authentication",
"date": "2019-10-17",
"description": "A client can authenticate to API Gateway with a user name and password digest using *HTTP digest authentication*. When an **HTTP Digest Authentication**\\nfilter is configured, API Gateway requests the client to present a user name and password digest as part of the *HTTP digest challenge-response*\\nmechanism. API Gateway can then authenticate this user against a user profile stored in the API Gateway's local repository."
}
﻿
<div id="p_authn_http_digest_overview">

Overview
--------

A client can authenticate to API Gateway with a user name and password digest using *HTTP digest authentication*. When an **HTTP Digest Authentication**
filter is configured, API Gateway requests the client to present a user name and password digest as part of the *HTTP digest challenge-response*
mechanism. API Gateway can then authenticate this user against a user profile stored in the API Gateway's local repository.

The realm presented in the challenge for HTTP digest authentication is the realm currently specified in **Environment Configuration** > **Server Settings > General**. For more information on API Gateway settings, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

</div>

<div id="p_authn_http_digest_authn_conf">

General settings
----------------

The **HTTP Digest Authentication**
filter enables you to specify where API Gateway can find user profiles for authentication purposes. API Gateway can look up user profiles in the API Gateway's local repository. For more information on adding users to the local repository, see
[Manage API Gateway users](/csh?context=637&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Complete the following settings:

**Name:**\
Enter an appropriate name for the filter to display in a policy.

**Credential Format**:\
The user name presented to API Gateway during the HTTP digest handshake can be of many formats, usually user name or Distinguished Name (DName). Because API Gateway has no way of inherently telling one format from another (for example, the client's user name could be a DName), you must specify the format of the credential presented by the client. This format is then used internally by API Gateway when performing authorization lookups against third-party Identity Management servers.

**Session Timeout**:\
As part of the HTTP digest authentication protocol, API Gateway must generate a *nonce*
(number used once) value, and send it to the client. The client uses this nonce to create the digest of the user name and password. However, it should only be allowed a certain amount of time to do so. The **Session Timeout**
field specifies the length of time (in milliseconds) for which the nonce is valid.

**Allow retries**:\
Select this option to allow the user to retry their user name and password in the browser when an HTTP 401 response code is received (for example, if authentication fails, or is not yet provided). The number of times that the browser displays the user name and password dialog when an HTTP 401 is received is controlled by the browser (usually three times). This setting is not selected by default.

**Remove HTTP authentication header:**\
Select this option to remove the HTTP `Authorization`
header from the downstream message. If this option is not selected, the incoming `Authorization`
header is forwarded on to the destination web service.

**Repository Name**:\
Select the name of the local authentication repository where all user profiles are stored.

You can add a new repository under the **Environment Configuration** > **External Connections**
node. Right-click the **Local Repositories**
node under **Authentication Repositories**, and select **Add a new repository**. For more details on authentication repositories, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

<div id="p_authn_http_digest_authn_conf_attempts">

### Invalid attempts

The **Invalid Attempts**
section enables you to specify how to handle invalid attempts. You can choose to lock user accounts, ban IP addresses, or both, if a specified number of invalid attempts are made in a specified time period. The invalid attempt information is also stored in a cache.

{{< alert title="Note" color="primary" >}}If you are using two or more instances of HTTP basic, HTTP digest, or HTML form-based authentication filters in the same policy, and they share the same invalid attempts cache, you must use the same invalid attempts settings on each of the filters.{{< /alert >}}
For more details on the fields in this section, see [*Invalid attempts* on page 1](authn_http_basic.htm#Invalid).

</div>

</div>
