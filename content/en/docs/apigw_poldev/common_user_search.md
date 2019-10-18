{
"title": "LDAP user search",
"linkTitle": "LDAP user search",
"date": "2019-10-17",
"description": "AE: No longer used. Integrated in [*Retrieve attribute from directory server* on page 1](%3Ca%20href=)."
}
﻿

AE: No longer used. Integrated in [*Retrieve attribute from directory server* on page 1](attributes_directory_server.htm).

<div id="common_user_search_conf">

Configure directory search
--------------------------

The **User Search**
dialog is used to search a given LDAP directory for a unique user according to the criteria configured in the fields on this dialog.

**Base Criteria**
:\
The value entered here tells the API Gateway where it should begin searching the LDAP directory. For example, it may be appropriate to search for a given user under the `C=IE`
tree in the LDAP hierarchy.

**Query Search Filter**
:\
The value entered here is what the API Gateway uses to determine whether it has obtained a successful match. In this case, because you are searching for a specific user, you can use the user name of an authenticated user (the value of the `authentication.subject.id`
message attribute to lookup in the LDAP directory. You must also specify the object class that defines users for the particular type of LDAP directory that you are searching against. For example, object classes representing users amongst commonLDAP directories are `inetOrgPerson`
, `givenName`
, and `User`
.

For example, to search for an authenticated user against Microsoft's Active Directory, you might specify the following as the **Query Search Filter**
:

    (objectclass=User)(cn=${authentication.subject.id})

This example uses a selector to obtain the ID of the authenticated subject at runtime. For more details on selectors, see XXX
.

**Search Scope**
:\
These settings specify the depth of the LDAP tree that you wish tosearch. The settings selected here depends largely on the structureof your LDAP directory.

</div>
