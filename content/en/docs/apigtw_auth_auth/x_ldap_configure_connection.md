{
"title": "Configure an LDAP connection",
"linkTitle": "Configure an LDAP connection",
"date": "2020-01-20",
"description": "API Gateway binds to the directory server using the connection details and user credentials specified in the LDAP connection. Usually, the connection details include the user name and password of an administrator user who has read access to all users in the LDAP server you want to auhtenticate or retrieve attributes for."
}
﻿

API Gateway binds to the directory server using the connection details and user credentials specified in the LDAP connection. Usually, the connection details include the user name and password of an administrator user who has read access to all users in the LDAP server you want to auhtenticate or retrieve attributes for.

This section describes the steps required to configure the connection between API Gateway and your directory server in Policy Studio. For more information on working in Policy Studio, see the .

<!-- -->

1.  -   **URL**: `<LDAP url>`
    -   **Type**: `Simple`
    -   **User Name**: `<user name for API Gateway>`
    -   **Password**: `<password for API Gateway>`

<!-- -->

4.  Click **Test Connection** to verify that the connection to the directory server is configured successfully.
5.  Click **OK** to save the entry in **LDAP Connections**.

