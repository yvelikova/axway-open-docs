{
"title": "Manage admin users",
"linkTitle": "Manage admin users",
"date": "2019-10-22",
"description": "When logging into the Policy Studio or API Gateway Manager, you must enter the user credentials stored in the local admin user store to connect to the API Gateway server instance. Admin users are responsible for managing API Gateway instances using the API Gateway management APIs. To manage admin users, click the **Settings** > **Admin Users**\\ntab in the API Gateway Manager."
}
﻿

When logging into the Policy Studio or API Gateway Manager, you must enter the user credentials stored in the local admin user store to connect to the API Gateway server instance. Admin users are responsible for managing API Gateway instances using the API Gateway management APIs. To manage admin users, click the **Settings** > **Admin Users**
tab in the API Gateway Manager.

{{< alert title="Note" color="primary" >}}Admin users provide access to the API Gateway configuration management features available in the Policy Studio and API Gateway Manager. However, *API Gateway users*
provide access to the messages and services protected by the API Gateway. For more details, see [*Manage users* on page 1](general_users.htm). {{< /alert >}}

Admin user privileges
---------------------

After installation, a single admin user is defined in the API Gateway Manager with a user name of `admin`. Admin user rights in the system include the following:

-   Add another admin user
-   Delete another admin user
-   Update an admin user
-   Reset admin user passwords

{{< alert title="Note" color="primary" >}}An admin user *cannot*
delete itself.{{< /alert >}}

### Remove the default admin user

If you need to remove the default admin user, perform the following steps:

1.  Add another admin user.
2.  Log in as the new admin user.
3.  Delete the default admin user.

The **Admin Users**
tab displays all existing admin users. You can use this tab to add, update, and delete admin users. These tasks are explained in the sections that follow.

Admin user roles
----------------

The API Gateway uses Role-Based Access Control (RBAC) to restrict access to authorized users based on their assigned roles in a domain. Using this model, permissions to perform specific system operations are assigned to specific roles only. This simplifies system administration because users do not need to be assigned permissions directly, but instead acquire them through their assigned roles.

For example, the default admin user (`admin`) has the following user roles:

-   `Policy Developer`
-   `API Server Administrator`
-   `KPS Administrator`

### API Gateway user roles and privileges

User roles have specific tools and privileges assigned to them. These define who can use which tools to perform what tasks. The user roles provided with the API Gateway assign the following privileges to admin users with these roles:

| Role                       | Tool                | Privileges                                                                                    |
|----------------------------|---------------------|-----------------------------------------------------------------------------------------------|
| `API Server Administrator` | API Gateway Manager | Read/write access to API Gateway Manager.                                                     |
| `API Server Operator`      | API Gateway Manager | Read-only access to API Gateway Manager.                                                      |
| `Deployer`                 | Deployment scripts  | Deploy a new configuration.                                                                   |
| `KPS Administrator`        | API Gateway Manager | Perform create, read, update, delete (CRUD) operations on data in a Key Property Store (KPS). |
| `Policy Developer`         | Policy Studio       | Download, edit, deploy, version, and tag a configuration.                                     |

{{< alert title="Note" color="primary" >}}A single admin user typically has multiple roles. For example, in a development environment, a policy developer admin user would typically have the following roles:{{< /alert >}}

<div>

-   `Policy Developer`
-   `API Server Administrator`

</div>

Add a new admin user
--------------------

Complete the following steps to add a new admin user to the system:

1.  Click the **Settings** > **Admin Users**
    tab in API Gateway Manager.
2.  Click the **Create**
    button.
3.  In the **Create New Admin User**
    dialog, enter a name for the user in the **Username**
    field.
4.  Enter a user password in the **Password**
    field.
5.  Re-enter the user password in the **Confirm Password**
    field.
6.  Select roles for the user from the list of available roles (for example, `Policy Developer`
    and `API Server Administrator`).
7.  Click **Create**.

Remove an admin user
--------------------

To remove an admin user, select it in the **Username**
list, and click **Delete**. The admin user is removed from the list and from the local admin user store.

Reset an admin user password
----------------------------

You can reset an admin user password as follows:

1.  Select the admin user in the **Username**
    list.
2.  Click the **Edit**
    button.
3.  Enter and confirm the new password in the **Password**
    and **Confirm Password**
    fields.
4.  Click **OK**.

Manage admin user roles
-----------------------

You can manage the roles that are assigned to specific admin users as follows:

1.  Select the admin user in the **Username**
    list.
2.  Click the **Edit**
    button.
3.  Select the user roles to enable for this admin user in the dialog (for example, `Policy Developer`
    and/or `API Server Administrator`).
4.  Click **OK**.

### Edit API Gateway user roles\

To add or delete specific API Gateway roles, you must edit the available roles in the `adminUsers.json`
and `acl.json`
files in the `conf`
directory of your API Gateway installation.

Configure a password policy for admin users
-------------------------------------------

To configure the password policy that applies to admin user passwords, perform the following steps:

1.  Click the **Settings** > **Admin Users**
    tab in API Gateway Manager.
2.  Select **Password Policy enabled** to enable the password policy rules on this page. This is not selected by default.
3.  Configure the following in **PASSWORD RULES**:
    -   **Password must not be equal to the account name**: The password cannot be identical to the admin user name. This is selected by default.
    -   **Password must not be the reverse of the account name**: The password cannot be the reverse of the admin user name. This is selected by default.
    -   **Password must not contain the account name**: The password cannot contain the admin user name. This is selected by default.
    -   **Minimum password length**: The password must be the specified minimum length. Defaults to 4 characters. If no value is specified, this rule is disabled.
    -   **Password history length**: Enter the number of previous passwords to be compared. Leave this field empty to disable this rule.
    -   **Minimum character differences from last password**: Enter the minimum number of different characters from the last password. Leave this field empty to disable this rule.
    -   **Password lifetime (days)**: Enter how long the password is valid for in days. Leave this field empty to disable password expiry.

>

1.  Configure the following in **PASSWORD COMPOSITION RULES**:
    -   **Minimum uppercase characters**: Defaults to 1 uppercase alphabetic character.
    -   **Minimum lowercase characters**: Defaults to 1 lowercase alphabetic character.
    -   **Minimum numeric characters**: Defaults to 1 numeric character.
    -   **Minimum special characters**: Defaults to 1 special character (`~!@#$%^&*()-_=+\[{}];:"",< >/?`).
    -   If no value is specified in these fields, these rules are disabled.
2.  Click **Apply**
    when finished.

