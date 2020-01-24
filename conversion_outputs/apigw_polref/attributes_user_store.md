{
"title": "Retrieve attribute from user store",
"linkTitle": "Retrieve attribute from user store",
"date": "2019-10-17",
"description": "The API Gateway user store contains user profiles, including attributes relating to each user. After a user has successfully authenticated to the API Gateway, the **Retrieve From User Store**\\nfilter can retrieve attributes belonging to that user from the user store."
}
﻿
<div id="p_attrs_user_store_overview">

Overview
--------

The API Gateway user store contains user profiles, including attributes relating to each user. After a user has successfully authenticated to the API Gateway, the **Retrieve From User Store**
filter can retrieve attributes belonging to that user from the user store.

</div>

<div id="p_attr_user_store_database">

Database settings
-----------------

Configure the following fields on the **Database**
tab:

**User ID**:\
Select or enter the name of the message attribute that contains the name of the user to look up in the user store. For example, if the user name is stored as `admin`, select the message attribute containing the value `admin`. The API Gateway then looks up the user in the user store using this name.

**Attributes**:\
Enter the list of attributes that the API Gateway should retrieve if it successfully looks up the user specified by the **User ID**
field. To add attributes, click the **Add**
button. Similarly, to edit or remove existing attributes, click the **Edit**
or **Remove**
buttons.

</div>

<div id="p_attr_user_store_advanced">

Advanced settings
-----------------

Configure the following fields on the **Advanced**
tab:

**Enable legacy attribute naming for retrieved attributes**:\
Specifies whether to enable legacy naming of retrieved message attributes. This field is not selected by default. Prior to version 7.1, retrieved attributes were stored in message attributes in the following format:

    user.<retrieved_attribute_name>

For example, `${user.email}`, `${user.role}`, and so on. If the retrieved attribute was multivalued, you would access the values using `${user.email.1}`
or `${user.email.2}`, and so on. In version 7.1 and later, by default, you can query for multivalued retrieved attributes using an array syntax (for example, `${user.email[0]}`, or `${user.email[1]}`, and so on). Select this setting to use the legacy format for attribute naming instead.

**Prefix for message attribute**:\
You can specify an optional prefix for message attribute names. The default prefix is `user`.

**Fail on empty result set**:\
Specify whether this filter fails if the result set is empty. This setting is not selected by default.

</div>
