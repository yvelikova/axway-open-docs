{
"title": "Check the details for the directory server",
"linkTitle": "Check the details for the directory server",
"date": "2020-01-20",
"description": "Before you can configure API Gateway to connect to your directory server, you must have the connection details and the user search conditions for the directory server."
}
﻿

Before you can configure API Gateway to connect to your directory server, you must have the connection details and the user search conditions for the directory server.

-   [Check the connection details](#Check)
-   [Check the user search conditions](#Find)

Check the connection details
----------------------------

Before you can start with the configuration, you must have the following connection details:

| Setting   | Examples                                        | Description                                                                                                                                                    |
|-----------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LDAP URL  | -   `ldap://192.168.0.129:10389`                
  -   `ldaps://192.168.0.129:10636`                | The LDAP URL containing the host name and port that your directory server is listening on.                                                                     |
| User name | -   `uid=admin,ou=system`                       
  -   `cn=root`                                    
  -   `CN=Administrator,CN=users,DC=axway,DC=com`  
                                                   
  <!-- -->                                         
                                                   
  -   `cn=admin,o=Axway,I=Dublin4,st=Dublin,C=IE`  
                                                   
                                                   | The distinguished name (DN) of the user that API Gateway uses when connecting to the directory server. The format may vary depending on your directory server. |
| Password  | `secret`                                        | The password of the user API Gateway uses.                                                                                                                     |

Ensure you have these details at hand when you start configuring the connection between API Gateway and the directory server.

Check the user search conditions
--------------------------------

API Gateway searches the directory server based on the details you define when configuring the LDAP authentication repository for API Gateway.

1.  Connect and log in to the directory server using an LDAP browser.
2.  Decide how you want to search the repository and note down the following details:
3.  | Setting               | Examples                                      | Description                                                                                                                           |
    |-----------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
    | Base Criteria         | -   `ou=system`                               
      -   `CN=LOCALHOST`                             
      -   `CN=users,DC=axwayqa,DC=com`               
      -   `ou=R&D,o=Axway,I=Dublin4,st=Dublin,C=IE`  
                                                     
                                                     
                                                     
                                                     | The root DN to use when running queries against the directory server.                                                                 |
    | User Class            | -   `inetOrgPerson`                           
      -   `User`                                     
      -   `Person`                                   | The object class searched in the directory server. Each object in an LDAP directory has at least one object class associated with it. |
    | User Search Attribute | -   `uid`                                     
      -   `cn`                                       | The attribute that contains the user name.                                                                                            |

The format of the setting values may vary depending on your directory server.

When searching the directory server, API Gateway generates a search based on the User Class and User Search Attribute values:

``` {space="preserve"}
(&(objectclass=<User Class>)(<User Search Attribute>=<value>))
```

For example:

``` {space="preserve"}
(&(objectclass=inetOrgPerson)(uid=admin))
```

This example searches the repository as follows:

-   Search for an object of type `inetOrgPerson` where the attribute `uid` has the value `admin`. Start from under the value entered for Base Criteria.
-   If the user is found, return the DN.

API Gateway binds to the directory server using the returned DN and the password extracted from the request. A successful bind indicates that the user name and password are valid and the user has been authenticated.
