{
"title": "Retrieve attribute from directory server",
"linkTitle": "Retrieve attribute from directory server",
"date": "2019-10-17",
"description": "The API Gateway can leverage an existing directory server by querying it for user profile data. The **Retrieve From Directory Server** filter can look up a user and retrieve that user's attributes represented as a list of search results. Each element of the list represents a list of multivalued attributes returned from the directory server."
}
﻿

The API Gateway can leverage an existing directory server by querying it for user profile data. The **Retrieve From Directory Server** filter can look up a user and retrieve that user's attributes represented as a list of search results. Each element of the list represents a list of multivalued attributes returned from the directory server.

Database settings
-----------------

Configure the following fields on the **Database** tab:

**LDAP Directory**:\
The API Gateway queries the selected Lightweight Directory Access Protocol (LDAP) directory for user attributes. An LDAP connection is retrieved from a pool of connections at runtime. Click the browse button to select the LDAP directory to query. To use an existing LDAP directory, (for example, `Sample Active Directory Connection`), select it in the tree.

To add an LDAP directory, right-click the **LDAP Connections** tree node, and select **Add an LDAP Connection**. Alternatively, you can add LDAP connections under the **Environment Configuration > External Connections** node in the Policy Studio tree. For more details on how to configure LDAP connections, see
[Configure LDAP directories](/csh?context=617&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Retrieve Unique User Identity

The **Retrieve Unique User Identity** section enables you to select the user whose profile the API Gateway looks up in the directory server. The user ID can be taken from a message attribute or looked up from an LDAP directory. Configure the following fields:

**From Selector Expression**:\
Select this option if the user ID is stored in a message attribute, and specify the selector expression used to obtain its value at runtime (for example, `${authentication.subject.id}`). A user's credentials are stored in the `authentication.subject.id` message attribute after authenticating to the API Gateway, so this is the most likely attribute to enter in this field.

Typically, this contains the Distinguished Name (DName) or user name of the authenticated user. The name extracted from the specified message attribute is used to query the directory server. For more details on selector expressions, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**From LDAP Search**:\
In cases where you have not already obtained the user's identity and the `authentication.subject.id` attribute has not been prepopulated by a prior authentication filter, you must configure the API Gateway to retrieve the user's identity from an LDAP search. Click **Configure Directory Search** to configure the search criteria to use to retrieve the user's unique DName from the LDAP repository. The User Search dialog is used to search a given LDAP directory for a unique user according to the criteria configured in the following fields:

-   **Base Criteria**:\
-   The value entered here tells the API Gateway where it should begin searching the LDAP directory. For example, it might be appropriate to search for a given user under the `C=IE`
    tree in the LDAP hierarchy.
-   **Query Search Filter**:\
-   The value entered here is what the API Gateway uses to determine whether it has obtained a successful match. Since you are searching for a specific user, you can use the user name of an authenticated user (the value of the `authentication.subject.id` message attribute) to lookup in the LDAP directory. You must also specify the object class that defines users for the particular type of LDAP directory that you are searching against. For example, object classes representing users amongst common LDAP directories are `inetOrgPerson`, `givenName`, and `User`.
-   For example, to search for an authenticated user against Microsoft's Active Directory, you might specify the following as the **Query Search Filter**:
-   (objectclass=User)(cn=${authentication.subject.id})

-   This example uses a selector to obtain the ID of the authenticated subject at runtime. For more details on selectors, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   The string representation of the LDAP search filter must comply with the `RFC2254` grammar and format. However, you might use the following Java system property in `jvm.xml` to ignore `RFC2254` escaping mechanism in the filter:
-   <ConfigurationFragment>\
    <SystemProperty name="avoidLDAPQueryEscaping" value="true" />\
    </ConfigurationFragment>
-   **Search Scope**:\
-   These settings specify the depth of the LDAP tree to search. This depends largely on the structure of your LDAP directory.

### Retrieve Attributes

The **Retrieve Attributes** section instructs the API Gateway to search the LDAP tree to locate a specific user profile. When the appropriate profile is retrieved, the API Gateway extracts the specified user attributes. Configure the following fields:

**Base Criteria**:\
You can specify where the API Gateway should begin searching the LDAP directory using a selector. The selector represents the value of a message attribute that is expanded at runtime. The two most likely message attributes to be used here are the authenticated user's ID and Distinguished Name. Select one of the predefined selectors from the list:

-   `${authentication.subject.id}`
-   `${authentication.subject.dname}`

Alternatively, you can enter a selector representing other message attributes using the same syntax. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Search Filter**:\
This is the name given by the particular LDAP directory to the *User* class. This depends on the type of LDAP directory configured. You can also use a selector to represent the value of a message attribute. For example, you can use the `user.role` attribute to store the user class. The syntax for using the selector representing this attribute is as follows:

    (objectclass=${user.role})

**Search Scope**:\
If the API Gateway retrieves a user profile node from the LDAP tree, the option selected here dictates the level that the API Gateway searches the node to. The available options are:

-   **Object level**
-   **One level**
-   **Sub-tree**

**Unique Result**:\
Select this option to force the API Gateway to retrieve a unique user profile from the LDAP directory. This is useful in cases where the LDAP search has returned several profiles.

**Attribute Name**:\
The **Attribute Name** table lists the attributes the API Gateway retrieves from the user profile. If no attributes are listed, the API Gateway extracts all user attributes. In both cases, retrieved attributes are set to the `attribute.lookup.list` message attribute. Click **Add** to add the name of an attribute to extract from the returned user profile. Enter the attribute name to extract from the profile in the **Attribute Name** field of the **Attribute Lookup** dialog.

{{< alert title="Note" color="primary" >}}It is important to be aware of the following:{{< /alert >}}

-   If the search returns results for more than one user, and the **Unique Result**
    option is enabled, an error is generated. If this option is not enabled, all attributes are merged.
-   If an attribute is configured that does not exist in the repository, no error is generated.
-   If no attributes are configured, all attributes present for the user are retrieved.

Advanced settings
-----------------

Configure the following fields on the **Advanced** tab:

**Enable legacy attribute naming for retrieved attributes**:\
Specifies whether to enable legacy naming of retrieved message attributes. This field is not selected by default. Prior to version 7.1, retrieved attributes were stored in message attributes in the following format:

    user.<retrieved_attribute_name>

For example, `${user.email}`, `${user.role}`, and so on. If the retrieved attribute was multi-valued, you would access the values using `${user.email.1}` or `${user.email.2}`, and so on. In version 7.1 and later, by default, you can query for multivalued retrieved attributes using an array syntax (for example, `${user.email[0]}`, or `${user.email[1]}`, and so on). Select this setting to use the legacy format for attribute naming instead.

**Example of output attribute format with legacy attribute naming**\
The following table shows the output attribute format when legacy attribute naming is selected:

| **Prefix for message attribute name (optional)** | **Output attribute format (when attribute name is memberOf)**                                                                                |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `user`                                           
 (default)                                         | -   `attribute.lookup.list`: Map of retrieved attributes                                                                                     
  -   `user.memberOf`: When retrieves only a single value for the given attribute                                                               
  -   `user.memberOf.*` (for example, `user.memberOf.1`, `user.memberOf.2`, and so on): When retrieves multiple values for the given attribute  
  -   `${user.memberOf}`: Example selector                                                                                                      |
| None                                             | -   `attribute.lookup.list`: Map of retrieved attributes                                                                                     
  -   `memberOf`: When retrieves only a single value for the given attribute                                                                    
  -   `memberOf.*` (for example, `memberOf.1`, `memberOf.2`, and so on): When retrieves multiple values for the given attribute                 
  -   `${user.memberOf}`: Example selector                                                                                                      |

**Example of output attribute format without legacy attribute naming**\
The following table shows the output attribute format when legacy attribute naming is not selected:

| **Prefix for message attribute name (mandatory)** | **Output attribute format (when attribute name is user.memberOf)**                                                                     |
|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `user` (default)                                  | -   `user`: List of search results, where each element of the list corresponds to search results (pairs of attribute names and values) 
  -   Example selector: `${user[0].memberOf[0]}`                                                                                          |

**Prefix for message attribute**:\
You can specify an optional prefix for message attribute names. The default prefix is `user`. For more details, see **Enable legacy attribute naming for retrieved attributes**.

{{< alert title="Note" color="primary" >}}When legacy attribute naming is not enabled, if you call the **Retrieve from Directory Server** filter multiple times in a row, the results are appended to the original `user` attributes, instead of replacing them.\
\
For example, in single request, two **Retrieve from Directory Server** filters consecutively query an LDAP server for attributes, and both use the default prefix name of `user`. However, the attribute results of the second LDAP call do not replace the first results, and the `user` attribute gets a second entry instead. This means that to retrieve the attributes returned by the second call, you must use `${user[1].anotherattribute[0]}`.{{< /alert >}}

 
