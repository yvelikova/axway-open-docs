{
"title": "Authentication and RBAC with Active Directory",
"linkTitle": "Authentication and RBAC with Active Directory",
"date": "2019-10-14",
"description": "This topic explains how to use Lightweight Directory Access Protocol (LDAP) to authenticate and perform Role-Based Access Control (RBAC) of API Gateway management services. It describes how to reconfigure API Gateway to use a Microsoft Active Directory LDAP repository."
}
﻿

This topic explains how to use Lightweight Directory Access Protocol (LDAP) to authenticate and perform Role-Based Access Control (RBAC) of API Gateway management services. It describes how to reconfigure API Gateway to use a Microsoft Active Directory LDAP repository.

This topic uses the sample **Protect Management Interfaces (LDAP)**
policy instead of the **Protect Management Interfaces**
policy. This means that the API Gateway uses an LDAP repository instead of the local Admin User store for authentication and RBAC of users attempting to access API Gateway management services.

This topic contains the following sections:

-   [Step 1: Create an Active Directory group](#Step5)
-   [Step 2: Create an Active Directory user](#Step6)
-   [Step 3: Create an LDAP connection](#Step2)
-   [Step 4: Create an LDAP repository](#Step3)
-   [Step 5: Configure a test policy for LDAP authentication and RBAC](#Step)
-   [Step 6: Use the LDAP policy to protect management services](#Step4)
-   [Add an LDAP user with limited access to management services](#Add)

{{< alert title="Note" color="primary" >}}If you have multiple Admin Node Managers in your topology, you must ensure that you apply the configuration changes to each Admin Node Manager.{{< /alert >}}

Step 1: Create an Active Directory group
----------------------------------------

To create a new user group in Active Directory, perform the following example steps:

1.  Click **Start** > **Administrative Tools** > **Active Directory Users and Computers**.
2.  On the **Users**
    directory, right-click, and select **New** > **Group**.
3.  Enter the Group name (for example, `APIGatewayAdministrator`).

You should add groups for the following default RBAC roles to give the LDAP users appropriate access to the API Gateway management services:

-   `API Gateway Administrator`
-   `API Gateway Operator`
-   `Deployer`
-   `KPS Administrator`
-   `Policy Developer`

These RBAC roles are located in the `roles`
section of the following file:

``` {space="preserve"}
INSTALL_DIR\apigateway\conf\acl.json
```

![Create an Active Directory LDAP group](/Images/docbook/images/admin/rbac/create_ldap_grp.png)

You can view the newly created groups using an LDAP browser.

Step 2: Create an Active Directory user
---------------------------------------

You will most likely be unable to create an `admin`
user with a default password because the default password is not strong enough to be accepted by Active Directory. Using **Active Directory Users and Computers**, perform the following steps:

1.  On the **Users**
    directory, right-click, and select **New** > **User**.
2.  Enter a user name (for example, `admin`).

![Creating an Active Directory LDAP User](/Images/docbook/images/admin/rbac/create_ldap_user.gif)

1.  Click **Next**.
2.  Enter a password (for example, `Axway123`).
3.  Select **User cannot change password**
    and **Password never expires**.
4.  Ensure **User must change password at next logon**
    is not selected.
5.  Click **Next**.
6.  Click **Finish**.

![Create an Active Directory LDAP user password](/Images/docbook/images/admin/rbac/create_ldap_user_pwd.gif)

### Add the user to the group

To make the user a member of the group using **Active Directory Users and Computers**
, perform the following steps:

1.  Select the **APIGatewayAdministrator**
    group, right-click, and select **Properties**.
2.  Click the **Members**
    tab.
3.  Click **Add**.
4.  Click **Advanced**.
5.  Click **Find Now**.
6.  Select the `admin`
    user.
7.  Click **OK**.
8.  ![Add the user to the LDAP group](/Images/docbook/images/admin/rbac/add_user_ldap_grp.png)

You can view the newly created user using an LDAP browser.

{{< alert title="Note" color="primary" >}}The `memberOf`
attribute points to the Active Directory group. The user has an instance of this attribute for each group they are a member of.{{< /alert >}}

Step 3: Create an LDAP connection
---------------------------------

To create an new LDAP Connection, perform the following steps:

1.  In Policy Studio, create a new project based on the Admin Node Manager configuration. For example:

``` {space="preserve"}
INSTALL_DIR\apigateway\conf\fed
```

1.  In Policy Studio tree, select **Environment Configuration** > **External Connections** > **LDAP Connections**.
2.  Right-click, and select **Create an LDAP Connection**.
3.  Complete the fields in the dialog as appropriate. The specified **User Name**
    should be an LDAP administrator that has access to search the full directory for users. For example:

![Create an LDAP connection](/Images/docbook/images/admin/rbac/create_ldap_cxn.gif)

1.  Click **Test Connection**
    to ensure the connection details are correct.

Step 4: Create an LDAP repository
---------------------------------

To create an new LDAP Repository, perform the following steps:

1.  In the Policy Studio tree, select **Environment Configuration** > **External Connections** > **Authentication Repository Profiles** > **LDAP Repositories**.
2.  Right-click, and select **Add a new Repository**.
3.  Complete the following fields in the dialog:

|                             |                                                                                                                                                                                                                                                     |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Repository Name**         | Enter an appropriate name for the repository.                                                                                                                                                                                                       |
| **LDAP Directory**          | Use the LDAP directory created in *Step 3: Create an LDAP connection* on page 1.                                                                                                                                                                    |
| **Base Criteria**           | Enter the LDAP node that contains the users.                                                                                                                                                                                                        |
| **User Search Attribute**   | Enter `cn`. This is the username entered at login time (in this case, `admin`).                                                                                                                                                                     |
| **Authorization Attribute** | Enter `distinguishedName`. This is the username entered at login time (`admin`). The `authentication.subject.id`                                                                                                                                    
  message attribute is set to the value of this LDAP attribute (see example below).                                                                                                                                                                    
                                                                                                                                                                                                                                                       
  The `authentication.subject.id`                                                                                                                                                                                                                      
  is used as the base criteria in the filter that loads the LDAP groups (the user’s roles). This enables you to narrow the search to a particular user node in the LDAP tree. For more details, see the **Retrieve Attributes from Directory Server**  
  filter in [*Step 5:create a test policy for LDAP authentication and RBAC* on page 1](#Step).                                                                                                                                                         |

An example value of the `authentication.subject.id`
message attribute is as follows:

``` {space="preserve"}
CN=admin, CN=Users,DC=kerberos3,DC=qa,DC=vordel,DC=comn
```

![Creating an LDAP Repository](/Images/docbook/images/admin/rbac/create_ldap_repo.gif)

### Connect to other LDAP repositories\

This topic uses Microsoft Active Directory as an example LDAP repository. Other LDAP repositories such as Oracle Directory Server (formerly iPlanet and Sun Directory Server) and OpenLDAP are also supported.

For an example of querying an Oracle Directory Server repository, see the **Retrieve Attributes from Directory Server**
filter in [*Step 5:create a test policy for LDAP authentication and RBAC* on page 1](#Step). For details on using OpenLDAP, see [*Authentication and RBAC with OpenLDAP* on page 1](general_rbac_openldap.htm).

Step 5: Configure a test policy for LDAP authentication and RBAC
----------------------------------------------------------------

To avoid locking yourself out of Policy Studio, you can configure an example test policy for LDAP authentication and RBAC, which is invoked when a test URI is called on the server (and not a management services URI). Policy Studio provides an example policy named **Protect Management Interfaces (LDAP)**
when the Admin Node Manager configuration is loaded.

You must edit this policy to change it from using the sample LDAP connection to the one that you created in [Step 3: Create an LDAP connection](#Step2). You must also change it from using the sample authentication repository to the authentication repository that you created in [Step 4: Create an LDAP repository](#Step3). Then in [Step 6: Use the LDAP policy to protect management services](#Step4), you must hook up this new LDAP policy to the `/` path.

### Configure the example test policy\

Perform the following steps:

1.  In Policy Studio, create a new project based on the Admin Node Manager configuration. For example:
2.  ``` {space="preserve"}
    INSTALL_DIR\apigateway\conf\fed
    ```

3.  For the example policy, select **Policies** > **Management Services** > **Sample LDAP Policies** > **Protect Management Interfaces (LDAP)**
    when the Admin Node Manager configuration is loaded. This policy is summarized at a high-level as follows:

-   **Scripting Language**
    filter returns `true` if the Node Manager is the Admin Node Manager. This enables subsequent HTTP authentication and RBAC, and updates the HTTP headers based on the user role. Otherwise, this filter calls the **Call Internal Service (no RBAC)**
    filter without updating the
    HTTP headers.
-   **HTTP Basic Authentication** filter verifies the user name and password against the LDAP repository configured in Step 4: Create an LDAP repository.
-   **Retrieve Attributes from Directory Server**
    filter finds the LDAP groups that the user belongs to using the LDAP directory connection configured in [Step 3: Create an LDAP connection](#Step2).
-   **Management Services RBAC**
    filter reads the user roles from the configured message attribute (`authentication.subject.role`). This returns `true` if one of the roles has access to the management service currently being invoked, as defined in the `acl.json`
    file. Otherwise, this returns `false` and the **Return HTTP Error 403:Access Denied (Forbidden)**
    policy is called because the user does not have the correct role.

1.  You must edit some HTTP-based filters and change them from using the **Sample Active Directory Repository** to using the repository that you created in [Step 4: Create an LDAP repository](#Step3). This repository is referenced in the following filters in the example policy:
2.  -   **Authenticate login attempt**
    -   **HTTP Basic**

{{< alert title="Tip" color="primary" >}}You can view all referenced filters by selecting **Environment Configuration**
> **External Connections**
> **LDAP Repositories**
> **Sample Active Directory Repository** > **Show all References**.{{< /alert >}}

1.  You must edit the LDAP-based filters and change them from using the **Sample Active Directory Connection** to using the LDAP connection that you created in [Step 3: Create an LDAP connection](#Step2). This repository is referenced in the following components in the example policy:
2.  -   **Read Roles from Directory Server**
    -   **Re-Read Roles from Directory Server**
    -   **Sample Active Directory Repository**

3.  Similarly, you can view all referenced components by selecting **Environment Configuration** > **External Connections** > **LDAP Repositories** > **Sample Active Directory Connection** > **Show all References**.

For more details on creating policies, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Test the policy configuration

To test this policy configuration, perform the following steps:

1.  Update the `acl.json`
    file with the new LDAP group, for example:

``` {space="preserve"}
"CN=APIGatewayAdministrator,CN=Users,DC=kerberos3,DC=qa,DC=vordel,DC=com" :[
   "emc", "mgmt", "mgmt_modify", "dashboard", "dashboard_modify", "deploy" "config", 
   "monitoring", "events", "traffic_monitor", "settings", settings_modify", "logs" ]
```

1.  Update the `adminUsers.json`
    file with the new role, for example:

``` {space="preserve"}
{
   "name" :"CN=APIGatewayAdministrator,CN=Users,DC=kerberos3,DC=qa,DC=vordel,
    DC=com","id" :"role-8"
}
```

1.  And increase the number of roles, for example:

``` {space="preserve"}
"uniqueIdCounters" :{"Role" :9,"User" :2},
```

1.  In the Policy Studio tree, select **Environment Configuration** > **Listeners** > **Node Manager** > **Add HTTP Services**, and enter a service name (for example, `LDAP Test`).
2.  Right-click the HTTP service, and select **Add Interface** > **HTTP**.
3.  Enter an available port to test the created policy (for example, `8888`), and click **OK**.
4.  Right-click the HTTP service, and select **Add Relative Path**.
5.  Enter a relative path (for example, `/test`).
6.  Set the **Path Specify Policy**
    to the **Protect Management Interfaces (LDAP)**
    policy, and click **OK**.
7.  Close the connection to the Admin Node Manager file, and restart the Admin Node Manager so it loads the updated configuration.
8.  Use an API test client such as Postman or `curl` to call `http://localhost:8888/test`.
9.  Enter the HTTP Basic credentials (for example, username `admin`
    and password `Axway123`). If authentication is passed, the Admin Node Manager should return an HTTP 404 code (not found).

{{< alert title="Note" color="primary" >}}Do not use the **Admin Users**
tab in the API Gateway Manager to manage user roles because these are managed in LDAP.{{< /alert >}}

Step 6: Use the LDAP policy to protect management services
----------------------------------------------------------

If the authentication and RBAC filters pass, you can now use this policy to protect the management interfaces. To ensure that you do not lock yourself out of the server, perform the following steps:

1.  Make a copy of the `conf/fed`
    directory contents from the server installation, and put it into a directory accessible from the Policy Studio.
2.  Make another backup copy of the `conf/fed`
    directory, which will remain unmodified.
3.  In the Policy Studio, select **File** > **New project**, enter a name, and click **Next**.
4.  Select **From existing configuration**, and click **Next**.
5.  Browse to `INSTALL_DIR/apigateway/conf/fed`, and click **Finish**.
6.  Under the **Environment Configuration** > **Listeners** > **Node Manager** > **Management Services**
    node, select the `/`
    and the `/configuration/deployments`
    relative paths, and set the **Path Specify Policy**
    to the **Protect Management Interfaces (LDAP)**
    policy.
7.  Remove the previously created `LDAP Test`
    HTTP Services, and close the connection to the file.
8.  Copy the `fed`
    directory back to the Admin Node Manager’s `conf`
    directory.
9.  Reboot the Admin Node Manager.
10. Start the Policy Studio, and connect to the Admin Node Manager using `admin`
    and password `Axway123`
    (the LDAP user credentials). You should now be able to edit API Gateway configurations as usual.

Add an LDAP user with limited access to management services
-----------------------------------------------------------

You can add an LDAP user with limited access to management services. For example, assume there is already a user named `Fred`
defined in Active Directory. `Fred`
has the following DName:

``` {space="preserve"}
CN=Fred,CN=Users,DC=kerberos3,DC=qa,DC=vordel,DC=com
```

`Fred`
belongs to an existing LDAP group called `TraceAnalyzers`
. He can also belong to other LDAP groups that have no meaning for RBAC in the API Gateway. The `TraceAnalyzers`
LDAP group has the following DName:

``` {space="preserve"}
CN=TraceAnalyzers,CN=Users,DC=kerberos3,DC=qa,DC=vordel,DC=com
```

The user `Fred`
should be able to read server trace files in a browser. No other access to management services should be given to `Fred`.

### Add limited access rights

You must perform the following steps to allow `Fred`
to view the trace files:

1.  Add the following entry in the `roles`
    section in the `acl.json`
    file:

``` {space="preserve"}
"CN=TraceAnalyzers,CN=Users,DC=kerberos3,DC=qa,DC=vordel,DC=com" : 
   [ "emc", "mgmt", "logs" ]
```

1.  Update the `adminUsers.json`
    file with the new role as follows:

``` {space="preserve"}
{
```

``` {space="preserve"}
   "name" :"CN=TraceAnalyzers,CN=Users,DC=kerberos3,DC=qa,DC=vordel,
    DC=com","id" :"role-8"
```

``` {space="preserve"}
}]
```

1.  And increase the number of roles, for example:

``` {space="preserve"}
"uniqueIdCounters" : {
   "Role" :9,
   "User" :2
},
```

1.  Restart the Admin Node Manager so that the `acl.json`
    and `adminUsers.json`
    file updates are picked up.
2.  Enter the following URL in your browser:

``` {space="preserve"}
http://localhost:8090/
```

1.  Enter user credentials for `Fred`
    when prompted in the browser.
2.  The API Gateway Manager displays a **Logs**
    tab enabling access to the trace files that `Fred`
    can view.

{{< alert title="Note" color="primary" >}}`Fred`
is not allowed to access the server APIs used by the Policy Studio. If an attempt is made to connect to the server using the Policy Studio with his credentials, an `Access denied`
error is displayed. {{< /alert >}}

<div class="indentTable">

No other configuration is required to give user `Fred`
the above access to the management services. Other users in the same LDAP group can also view trace files without further configuration changes because the LDAP group is already defined in the `acl.json`
file.

</div>
