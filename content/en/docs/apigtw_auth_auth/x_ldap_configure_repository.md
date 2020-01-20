{
"title": "Configure an LDAP authentication repository",
"linkTitle": "Configure an LDAP authentication repository",
"date": "2020-01-20",
"description": "API Gateway requires an authentication repository to authenticate a user using the user name and password. API Gateway compares the credentials user presents to those stored in the authentication repository. If API Gateway can retrieve a user's profile and bind to the directory server as that user, the user is authenticated."
}
﻿

API Gateway requires an authentication repository to authenticate a user using the user name and password. API Gateway compares the credentials user presents to those stored in the authentication repository. If API Gateway can retrieve a user's profile and bind to the directory server as that user, the user is authenticated.

You can leverage your existing directory server and configure API Gateway to query it for user profile data. This section describes how to configure integration between API Gateway and your directory server in Policy Studio. For more information on working in Policy Studio, see the .

1.  In the node tree, click **Environment Configuration > External Connections > Authentication Repositories**.
2.  Right-click **LDAP Repositories**, and click **Add a new Repository**.

<!-- -->

1.  -   **LDAP Directory**: The LDAP connection you created (`LDAP Connection`).
    -   **Base Criteria**: `<Base Criteria of your directory server>`.
    -   **User Class**: `<User Class of your directory server>`.
    -   **User Search Attribute**: `<User Search Attribute of your directory server>`.
    -   **Login Authentication Attribute**: This setting is optional. If left blank, API Gateway uses a default name as the authentication attribute. If not blank, the specified attribute is retrieved in the initial search for the user.
    -   **Authorization Attribute**: Enter the attribute stored LDAP for the user you want to use for authorization.
    -   **Authorization Attribute Format**: Depending on the format of your selected authorization attribute, select either `User Name` or `X.509 Distinguished Name`.

<!-- -->

4.  For more information on configuring an LDAP repository, see .
5.  Click **OK** to save the configuration.

