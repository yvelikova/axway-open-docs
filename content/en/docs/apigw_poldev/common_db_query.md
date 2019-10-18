{
"title": "Configure database queries",
"linkTitle": "Configure database queries",
"date": "2019-10-17",
"description": "The **Database Statement**\\ndialog enables you to enter an SQL query, stored procedure, or function call that the API Gateway runs to return a specific user's profile from a database."
}
﻿
<div id="p_common_db_query_overview">

Overview
--------

The **Database Statement**
dialog enables you to enter an SQL query, stored procedure, or function call that the API Gateway runs to return a specific user's profile from a database.

</div>

<div id="p_common_db_query_overview_conf">

Configuration
-------------

The following fields should be completed on this window:

**Name**:\
Enter a name for this database query here.

**Database Query**:\
Enter the actual SQL query, stored procedure, or function call in the text area provided. When executed, the query should return a single user's profile. The following are examples of SQL statements and stored procedures:

``` {space="preserve"}
select * from users where username=${authentication.subject.id} 
{ call load_user (${authentication.subject.id}, ${out.param}) }
{ call ${out.param.cursor} := p_test.f_load_user(${authentication.subject.id}) }
```

These examples show that you can use selectors in the query. The selector that is most commonly used in this context is `${authentication.subject.id}`, which specifies the message attribute that holds the identity of the authenticated user. For more details on selectors, see [*Select configuration values at runtime* on page 1](general_selector.htm).

**Statement Type**:\
The database can take the form of an SQL query, stored procedure, or function call, as shown in the above examples. Select the appropriate radio button depending on whether the database query is an SQL **Query**
or a **Stored procedure/function call**.

**Table Structure**:\
To process the result set that is returned by the database query, the API Gateway needs to know whether the user's attributes are structured as rows or columns in the database table.

The following example of a database table shows the user's attributes (Role, Dept, and Email) structured as table columns:

| Username | Role          | Dept        | Email          |
|----------|---------------|-------------|----------------|
| Admin    | Administrator | Engineering | admin@org.com  |
| Tester   | Testing       | QA          | tester@org.com |
| Dev      | Developer     | Engineering | dev@org.com    |

In the following table, the user's attributes have been structured as name-value pairs in table rows:

| Username | Attribute Name | Attribute Value |
|----------|----------------|-----------------|
| Admin    | Role           | Administrator   |
| Admin    | Dept           | Engineering     |
| Admin    | Email          | admin@org.com   |
| Tester   | Role           | Testing         |
| Tester   | Dept           | QA              |
| Tester   | Email          | tester@org.com  |
| Dev      | Role           | Developer       |
| Dev      | Dept           | Engineering     |
| Dev      | Email          | dev@org.com     |

If the user's attributes are structured as column names in the database table, select the **attributes as column names**
radio button. If the attributes are structured as name-value pair in table rows, select the **attribute name-value pairs in rows**
option.

</div>
