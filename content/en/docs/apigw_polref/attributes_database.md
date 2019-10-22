{
"title": "Retrieve attribute from database",
"linkTitle": "Retrieve attribute from database",
"date": "2019-10-17",
"description": "The API Gateway can retrieve user attributes from a specified database, or write user attributes to a specified database. It can do this by running an SQL query on the database, or by invoking a stored procedure call. The query results are represented as a list of properties. Each element in the list represents a query result row returned from the database for the specified SQL query or stored procedure call. These properties represent pairs of attribute names and values for each column in the row."
}
﻿

The API Gateway can retrieve user attributes from a specified database, or write user attributes to a specified database. It can do this by running an SQL query on the database, or by invoking a stored procedure call. The query results are represented as a list of properties. Each element in the list represents a query result row returned from the database for the specified SQL query or stored procedure call. These properties represent pairs of attribute names and values for each column in the row.

Database settings
-----------------

Configure the following fields on the **Database**
tab:

**Database Location**:\
The API Gateway searches the selected database for the user's attributes. Click the browse button to select the database to search. To use an existing database connection (for example, `Default Database Connection`), select it in the tree. To add a database connection, right-click the **Database Connections**
tree node, and select **Add DB connection**. Alternatively, you can add database connections under the **Environment Configuration** > **External Connections**
node in the Policy Studio tree view. For more information on configuring database connections, see
[Configure database connections](/csh?context=608&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Database Statements**:\
The **Database Statements**
table lists the currently configured SQL queries or stored procedure calls. These queries and calls retrieve certain user attributes from the database selected in the **Database Location**
field. You can edit and delete existing queries by selecting them from the list and clicking the **Edit**
and **Delete**
buttons. Queries are executed in the order they are listed in the filter. You can change the order of execution using the **Up** and **Down** buttons. For more information on how to configure a **Database Query**, see
[Configure database queries](/csh?context=609&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Advanced settings
-----------------

On the **Advanced**
tab, configure the following fields in the **User Attribute Extraction**
section:

**Place query results into user attribute list**:\
Select whether to place database query results in message attributes. When selected, the message attribute names are generated based on the message attribute prefix and the attribute name. For example, if the specified prefix is `user`
and the attributes are `PHONE`
and `EMAIL`, the `user.PHONE`
and `user.EMAIL`
attributes are generated. This setting is selected by default.

**Associate attributes with user ID returned by selector**:\
When the **Place query results into message attribute list**
setting is selected, you can specify a user ID to associate with the user attributes. For example, if the user name is stored as `admin`
in the database, you must select the message attribute containing the value `admin`. The API Gateway then looks up the database using this name. By default, the user ID is stored in the `${authentication.subject.id}`
message attribute.

Configure the following fields on the **Attribute Naming**
section:

**Enable legacy attribute naming for retrieved attributes**:\
Specifies whether to enable legacy naming of retrieved message attributes. This field is not selected by default. Prior to version 7.1, retrieved attributes were stored in message attributes in the following format:

    user.<retrieved_attribute_name>

For example, `${user.email}`, `${user.role}`, and so on. If the retrieved attribute was multivalued, you would access the values using `${user.email.1}`
or `${user.email.2}`, and so on. In version 7.1 and later, by default, you can query for multivalued retrieved attributes using an array syntax (for example, `${user.email[0]}`, or `${user.email[1]}`, and so on). Select this setting to use the legacy format for attribute naming instead.

**Example of output attribute format with legacy attribute naming**\
The following table shows the output attribute format when legacy attribute naming is selected:

| **Place query results into user attribute list** | **Prefix for message attribute name (optional)** | **Output attribute format (when attribute name is PHONE)** |
|--------------------------------------------------|--------------------------------------------------|------------------------------------------------------------|
| Selected (default)                               | `user`                                           
  (default)                                         | -   `attribute.lookup.list`: Map of retrieved attributes   
                                                               
   -   `user.PHONE`: Attribute value                           
                                                               
   -   `${user.PHONE}`: Example selector                       |
| Selected (default)                               | None                                             | -   `attribute.lookup.list`: Map of retrieved attributes   
                                                               
   -   `PHONE`: Attribute value                                
                                                               
   -   `${PHONE}`: Example selector                            |
| Not selected                                     | `user`                                           
  (default)                                         | -   `user.PHONE`: Attribute value                          
                                                               
   -   `${user.PHONE}`: Example selector                       |
| Not selected                                     | None                                             | -   `PHONE`: Attribute value                               
                                                               
   -   `${PHONE}`: Example selector                            |

**Example of output attribute format without legacy attribute naming**\
The following table shows the output attribute format when legacy attribute naming is not selected:

| **Place query results into user attribute list** | **Prefix for message attribute name (mandatory)** | **Output attribute format (when attribute name is PHONE)**                                                      |
|--------------------------------------------------|---------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| Selected (default)                               | `user`                                            
  (default)                                          | -   `user`: List of properties, where each corresponds to a retrieved row (attribute name and value pair)       
                                                                                                                    
   -   `${user[0].PHONE}`: Example selector                                                                         |
| Not selected                                     | `user`                                            
  (default)                                          | -   `user.PHONE`: List of properties, where each corresponds to a retrieved row (attribute name and value pair) 
                                                                                                                    
   -   `${user.PHONE[0]}`: Example selector                                                                         |

**Prefix for message attribute**:\
Specifies an optional prefix for message attribute names used to store query results. The default prefix is `user`. For more details, see **Place query results into user attribute list**
and **Enable legacy attribute naming for retrieved attributes**.

**Attribute name for stored procedure out parameters**:\
You can also specify an attribute name for stored procedure out parameters. The default prefix is `out.param.value`.

**Case for attribute names**:\
You can specify whether attribute names are in lower case or upper case. The default is lower case.

Configure the following fields on the **Result Set Options**
section:

**Fail on empty result set**:\
Specify whether this filter fails if the result set is empty. This setting is not selected by default.

**Attribute name for result set size**:\
Specify the attribute name used to store the size of the result set. Defaults to `db.result.count`.
