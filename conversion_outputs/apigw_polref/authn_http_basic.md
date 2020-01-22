{
"title": "HTTP Basic authentication",
"linkTitle": "HTTP Basic authentication",
"date": "2019-10-17",
"description": "In HTTP Basic authentication, a client authenticate using an `Authorization` header. When you include a **HTTP Basic Authentication** filter in a policy, API Gateway can use the `Authorization` header to authenticate the client against a user profile stored in an authentication repository."
}
﻿

In HTTP Basic authentication, a client authenticate using an `Authorization` header. When you include a **HTTP Basic Authentication** filter in a policy, API Gateway can use the `Authorization` header to authenticate the client against a user profile stored in an authentication repository.

HTTP Basic authentication has two approaches:

-   **Challenge-response handshake**:
-   This is typical of situations where a browser is talking to a web server, for example, when a user uses the browser to access a web resource. The browser does not know that the server requires HTTP Basic authentication, so the initial request to the server does not include an `Authorization` header. The server responds with an `HTTP 401` response code, instructing the browser to authenticate by sending the `Authorization` header. The browser displays a dialog to the user to enter a user name and password combination, and passes the provided credentials to the `Authorization` header. The browser then sends a second request including the `Authorization` header to the server for authentication.
-   **Direct authentication**:\
    This is used mainly for machine-to-machine transactions with no human intervention. The client sends up the `Authorization` HTTP Basic authentication header in its first request to the server, so the challenge-response handshake is omitted.

Before being passed to the `Authorization` header, the credentials are concatenated, base64-encoded, for example:

    Authorization:Basic dm9yZGVsOnZvcmRlbA==

The realm presented in the challenge for HTTP Basic authentication is the realm currently specified in **Environment Configuration > Server Settings > General**. For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

General settings
----------------

When you configure the **HTTP Basic Authentication** filter, you specify where API Gateway finds the user profiles for authentication. API Gateway can look up user profiles in a local repository on API Gateway, a database, or an LDAP directory. For details on adding users to a local repository, see
[Manage API Gateway users](/csh?context=637&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Configure the following settings:

**Credential Format**:\
This defines the format of the user name presented to API Gateway during the HTTP Basic handshake that API Gateway uses for authorization checks against third-party Identity Management servers. API Gateway has no way of telling one format from another, so you must specify the format of the credential the client presents. The most common formats are user name or Distinguished Name (DName).

**Allow client challenge**:\
This option is selected by default, and the client performs the HTTP Basic authentication challenge-response handshake with API Gateway. If you deselect this option, the client always sends the `Authorization` header to API Gateway for direct authentication.

**Allow retries**:\
If you select this option, the user can try to enter their user name and password again if, for example, the authentication fails or has not yet been provided. The number of retries is controlled by the browser (usually three times).

**Remove HTTP authentication header**:\
Select this option to remove the `Authorization` header from the downstream message. If this option is not selected, the incoming `Authorization` header is forwarded to the destination web service.

**Repository Name:**\
Select the authentication repository where the user profiles are stored. This can be a local repository, a database, or an LDAP directory. For more details on authentication repositories, see
[Configure authentication repositories](/csh?context=600&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

{{< alert title="Note" color="primary" >}}If you want to authenticate against an LDAP repository, you must set the authentication type of the LDAP connection to `Simple` . HTTP Basic authentication is not compatible with the other LDAP authentication types (`None`,` External` or `Digest-MD5`).{{< /alert >}}

Invalid attempts
----------------

The settings for invalid attempts specify how to handle invalid attempts: how many times authentication can be attempted, and what happens after this limit is crossed. By default, the number of invalid attempts is not limited.

You can select to lock user accounts, ban IP addresses, or both, and define how long that restriction lasts. In addition, you can define how many invalid attempts can be made and over what time period.

To ban IP addresses, you must also define the attribute that contains the IP address in the **Key is** field.

**Store invalid attempt information in cache:**\
To store information on invalid attempts in cache, select this option, and choose the cache (local or distributed) you want to use, or add a new one. For more details on caches, see
[Global caches](/csh?context=604&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Restrictions when using the same invalid attempts cache in multiple filters

You can configure a policy including more than one HTTP authentication filters (**HTTP Basic Authentication**, **HTTP Digest Authentication**, or **HTML Form based Authentication**), for example, to allow users to authenticate with either HTTP Basic or HTTP digest authentication. If the filters in your policy use the same cache for invalid attempts, you must use the same invalid attempts settings in all the filters sharing a cache. This ensures that if an user breaches the invalid attempts threshold, the lockout behavior and the user experience remains consistent.
