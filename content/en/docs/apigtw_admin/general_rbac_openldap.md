{
"title": "Authentication and RBAC with OpenLDAP ",
"linkTitle": "Authentication and RBAC with OpenLDAP ",
"date": "2019-10-14",
"description": "This topic explains how to use Lightweight Directory Access Protocol (LDAP) to authenticate and perform Role-Based Access Control (RBAC) of API Gateway management services. It describes how to reconfigure API Gateway to use OpenLDAP as the LDAP repository, and to use the Apache Directory Studio as an LDAP browser."
}
﻿

This topic explains how to use Lightweight Directory Access Protocol (LDAP) to authenticate and perform Role-Based Access Control (RBAC) of API Gateway management services. It describes how to reconfigure API Gateway to use OpenLDAP as the LDAP repository, and to use the Apache Directory Studio as an LDAP browser.

This topic uses the sample **Protect Management and Interfaces (LDAP)**
policy instead of the **Protect Management Interfaces**
policy. This means that the API Gateway uses an LDAP repository instead of the local Admin User store for authentication and RBAC of users attempting to access the API Gateway management services.

This topic contains the following sections:

-   [Prerequisites](#Prerequi)
-   [Step 1: Create an OpenLDAP group for RBAC roles](#Step6)
-   [Step 2: Add RBAC roles to the OpenLDAP RBAC group](#Step7)
-   [Step 3: Add users to the OpenLDAP RBAC group](#Step3)
-   [Step 4: Create an LDAP connection](#Step2)
-   [Step 5: Create an OpenLDAP repository](#Step4)
-   [Step 6: Configure a test policy for LDAP authentication and RBAC](#Step)
-   [Step 7: Use the OpenLDAP policy to protect management services](#Step5)

{{< alert title="Note" color="primary" >}}If you have multiple Admin Node Managers in your topology, you must ensure that you apply the configuration changes to each Admin Node Manager.{{< /alert >}}

Prerequisites\
--------------

This example assumes that you already have configured a connection to the OpenLDAP server and set up your organization groups and users that you wish to use to perform RBAC. For example:

-   **LDAP URL**: `ldap://openldap.qa.axway.com:389`
-   **User**: `cn=admin,o=Vordel Ltd.,l=Dublin 4,st=Dublin,C=IE`
-   **Password**: `axway`

Step 1: Create an OpenLDAP group for RBAC roles
-----------------------------------------------

To create a new user group in OpenLDAP, perform the following steps:

1.  Select the `cn=admin,o=Vordel Ltd.,l=Dublin 4,st=Dublin,C=IE`
    directory.
2.  Right-click, and select **New** > **New Entry**.
3.  Select **Create entry from scratch**.
4.  Click **Next**.
5.  Add an `organizationalUnit`
    object class.
6.  Click **Next**.
7.  Set the **Parent**
    to `o=Vordel Ltd.,l=Dublin 4,st=Dublin,C=IE`.
8.  Set the **RDN**
    to `ou = RBAC`.
9.  Click **Next**.
10. Click **Finish**.

![Creating an OpenLDAP Group](/Images/docbook/images/admin/rbac/create_openldap_grp.gif)

You can view the new group using an LDAP Browser. For example:

![Viewing an Active Directory LDAP Group](/Images/docbook/images/admin/rbac/view_openldap_grp.gif)

Step 2: Add RBAC roles to the OpenLDAP RBAC group
-------------------------------------------------

You must add the following default RBAC roles to the `ou=RBAC,o=Vordel Ltd.,l=Dublin 4,st=Dublin,C=IE`
group to give the LDAP users appropriate access to the API Gateway management services:
These RBAC roles are located in the `roles`
section of the `acl.json`
file.

-   `API Server Administrator`
-   `API Server Operator`
-   `KPS Administrator`
-   `Policy Developer`
-   `Deployer`

### Add roles to the RBAC directory\

To add these RBAC roles to the OpenLDAP RBAC group, perform the following steps:

1.  Select the `cn=admin,o=Vordel Ltd.,l=Dublin 4,st=Dublin,C=IE`
    directory.
2.  Right-click, and select **New** > **New Entry**.
3.  Select **Create entry from scratch**.
4.  Click **Next**.
5.  Add a `groupOfNames`
    object class.
6.  Click **Next**.
7.  Set the **Parent**
    to `ou=RBAC,o=Vordel Ltd.,l=Dublin 4,st=Dublin,C=IE`.
8.  Set the **RDN**
    to `cn = Policy Developer`.
9.  Click **Next**.
10. In the **DN Editor**
    dialog, set `admin`
    as first member of the following group:`cn=admin,ou=R&D,o=Vordel Ltd.,l=Dublin 4,st=Dublin,c=IE`. You can change the member Distinguished Name at any time.
11. Click **OK**.
12. Click **Finish**.

![Adding the Role to the OpenLDAP Group](/Images/docbook/images/admin/rbac/add_role_openldap_grp.gif)

You can view the role in the OpenLDAP group in an LDAP Browser. For example:

![Viewing the Role in the OpenLDAP Group](/Images/docbook/images/admin/rbac/view_role_openldap_grp.gif)

### Add other roles to the RBAC directory

You can repeat these steps to add other roles to the RBAC directory. Alternatively, you can copy the `Policy Developer`
entry, and paste it into the `RBAC`
directory, renaming the entry with required RBAC role name. For example:

![Copying Roles to RBAC Directory](/Images/docbook/images/admin/rbac/copy_openldap_roles1.gif)

{{< alert title="Note" color="primary" >}}You should have the RBAC directory ready to add members to the role entries. By default, the `admin`
user (`“cn=admin,ou=R&D,o=Vordel Ltd.,l=Dublin 4,st=Dublin,c=IE”`) is already a member of the role entries.{{< /alert >}}

The following example shows the added roles:

![Viewing Copied Roles](/Images/docbook/images/admin/rbac/view_copy_openldap_role1.gif)

Now you can add new users to the RBAC role entries. The member attribute value should contain the user Distinguished Name. This is explained in the next section.

Step 3: Add users to the OpenLDAP RBAC group
--------------------------------------------

To add a user to the OpenLDAP RBAC group, perform the following steps:

1.  Select the required RBAC group (for example, `cn=API Gateway Administrator`) to view the group details.
2.  Right-click the list of group attributes, and select **New Attribute**.
3.  Enter `member`
    in the attribute type.

![Adding the Role to the OpenLDAP Group](/Images/docbook/images/admin/rbac/add_user_openldap_grp.gif)

1.  Click **Finish**.
2.  In the **DN Editor**
    dialog, enter the user Distinguished Name (for example, `cn=joe.bloggs,o=Vordel Ltd.,l=Dublin 4,st=Dublin,c=IE`).
3.  Click **OK**.

The `cn=joe.bloggs,o=Vordel Ltd.,l=Dublin 4,st=Dublin,c=IE`
new user has been added to the RBAC `API Server Administrator`
role.

Step 4: Create an LDAP connection
---------------------------------

To create an new LDAP Connection, perform the following steps:

1.  In Policy Studio, create a new project based on the Admin Node Manager configuration. For example:
2.  ``` {space="preserve"}
    INSTALL_DIR\apigateway\conf\fed
    ```

3.  In the Policy Studio tree, select **Environment Configuration** > **External Connections** > **LDAP Connections**.
4.  Right-click, and select **Create an LDAP Connection**.
5.  Complete the fields in the dialog as appropriate. For example:

![Creating an LDAP Connection](/Images/docbook/images/admin/rbac/create_openldap_cxn.gif)

{{< alert title="Note" color="primary" >}}The specified **User Name**
should be an LDAP administrator that has access to search the full directory for users.{{< /alert >}}

1.  Click **Test Connection**
    to ensure the connection details are correct.

Step 5: Create an OpenLDAP repository
-------------------------------------

To create an new OpenLDAP Repository, perform the following steps:

1.  In the Policy Studio tree, select **External Connections** > **Authentication Repository Profiles** > **LDAP Repositories**.
2.  Right-click, and select **Add a new Repository**.
3.  Complete the following fields in the dialog:

|                             |                                                                                                                                                                              |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Repository Name**         | Enter an appropriate name for the repository.                                                                                                                                |
| **LDAP Directory**          | Use the LDAP directory created in *Step 3: Add users to the OpenLDAP RBAC group* on page 1.                                                                                  |
| **Base Criteria**           | Enter the LDAP node that contains the users (for example, see the LDAP Browser screen in *Step 3: Add users to the OpenLDAP RBAC group* on page 1).                          |
| **User Search Attribute**   | Enter `cn`. This is the username entered at login time (in this case, `admin`).                                                                                              |
| **Authorization Attribute** | Enter `cn`                                                                                                                                                                   
  . The `authentication.subject.id`                                                                                                                                             
  message attribute is set to the value of this LDAP attribute (for example, `cn=admin,ou=R&D,o=Vordel Ltd.,l=Dublin 4,st=Dublin,c=IE`                                          
  .`authentication.subject.id`                                                                                                                                                  
  is used as the base criteria in the filter used to load the LDAP groups (the user’s roles). This allows you to narrow the search to a particular user node in the LDAP tree.  
                                                                                                                                                                                
  For more details, see the **Retrieve Attributes from Directory Server**                                                                                                       
  filter in *Step 6: Create a test policy for LDAP authentication and RBAC* on page 1.                                                                                          |

![Creating an LDAP Repository](/Images/docbook/images/admin/rbac/create_openldap_repo.gif)

### Connect to other LDAP repositories\

This topic uses OpenLDAP as an example LDAP repository. Other LDAP repositories such as Oracle Directory Server (formerly iPlanet and Sun Directory Server) and Microsoft Active Directory are also supported. For details on using a Microsoft Active Directory repository, see [*Authentication and RBAC with Active Directory* on page 1](general_rbac_ad_ldap.htm).

For an example of querying an Oracle Directory Server repository, see the **Retrieve Attributes from Directory Server**
filter in [*Step 6: Create a test policy for LDAP authentication and RBAC* on page 1](#Step).

Step 6: Configure a test policy for LDAP authentication and RBAC
----------------------------------------------------------------

To avoid locking yourself out of Policy Studio, you can configure an example test policy for LDAP authentication and RBAC, which is invoked when a test URI is called on the server (and not a management services URI). Policy Studio provides an example policy named **Protect Management Interfaces (LDAP)**
when the Admin Node Manager configuration is loaded.

You must edit this policy to change it from using the sample LDAP connection to the one that you created in [Step 4: Create an LDAP connection](#Step2). You must also change it from using the sample authentication repository to the authentication repository that you created in [Step 5: Create an OpenLDAP repository](#Step4). Then in [Step 7: Use the OpenLDAP policy to protect management services](#Step5), you must hook up this new LDAP policy to the `/` path.

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
-   **HTTP Basic Authentication** filter verifies the user name and password against the LDAP repository configured in Step 5: Create an OpenLDAP repository.
-   **Retrieve Attributes from Directory Server**
    filter finds the LDAP groups that the user belongs to using the LDAP directory connection configured in [Step 4: Create an LDAP connection](#Step2).
-   **Management Services RBAC**
    filter reads the user roles from the configured message attribute (`authentication.subject.role`). This returns `true` if one of the roles has access to the management service currently being invoked, as defined in the `acl.json`
    file. Otherwise, this returns `false` and the **Return HTTP Error 403:Access Denied (Forbidden)**
    policy is called because the user does not have the correct role.

1.  You must edit some HTTP-based filters and change them from using the **Sample Active Directory Repository** to the repository that you created in [Step 4: Create an LDAP repository](#Step3). This repository is referenced in the following filters:
2.  -   **Authenticate login attempt**
    -   **HTTP Basic**

{{< alert title="Tip" color="primary" >}}You can view all referenced filters by selecting **Environment Configuration**
> **External Connections**
> **LDAP Repositories**
> **Sample Active Directory Repository** > **Show all References**.{{< /alert >}}

1.  You must edit the LDAP-based filters and change them from using the **Sample Active Directory Connection** to using the LDAP connection that you created in [Step 3: Create an LDAP connection](#Step2). This repository is referenced in the following components:
2.  -   **Read Roles from Directory Server**
    -   **Re-Read Roles from Directory Server**
    -   **Sample Active Directory Repository**

3.  Similarly, you can view all referenced components by selecting **Environment Configuration** > **External Connections** > **LDAP Repositories** > **Sample Active Directory Connection** > **Show all References**.

For more details on creating policies, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Test the policy configuration\

To test this policy configuration, perform the following steps:

1.  In the Policy Studio tree, select **Environment Configuration** > **Listeners** > **Node Manager** > **Add HTTP Services**
    , and enter a service name (for example, `LDAP Test`).
2.  Right-click the HTTP service, and select **Add Interface** > **HTTP**
    .
3.  Enter an available port to test the created policy (for example, `8888`), and click **OK**.
4.  Right-click the HTTP service, and select **Add Relative Path**.
5.  Enter a relative path (for example, `/test`).
6.  Set the **Path Specify Policy**
    to the **Protect Management Interfaces (LDAP)**
    policy, and click **OK**.
7.  Close the connection to the Admin Node Manager file and reboot the Admin Node Manager so it loads the updated configuration.
8.  Use API Tester to call `http://localhost:8888/test`.
9.  Enter the HTTP Basic credentials (for example, username `admin`
    and password `Axway123`). If authentication is passed, the Admin Node Manager should return an HTTP 404 code (not found).

Step 7: Use the OpenLDAP policy to protect management services
--------------------------------------------------------------

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
    with its LDAP password (for example, `Axway123`). You should now be able to edit API Gateway configurations as usual.

