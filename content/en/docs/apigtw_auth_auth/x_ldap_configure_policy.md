{
"title": "Configure API Gateway policy",
"linkTitle": "Configure API Gateway policy",
"date": "2020-01-20",
"description": "This section describes the steps required to configure integration between API Gateway and your directory server in Policy Studio. For more information on working in Policy Studio, see the \\n \\n \\n ."
}
﻿

This section describes the steps required to configure integration between API Gateway and your directory server in Policy Studio. For more information on working in Policy Studio, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

-   [Create a authentication policy](#Create3)
-   [Test the policy](#Test)
-   [Retrieve roles from the directory server](#Enhance)
-   [Validate a retrieved attribute](#Insert)
-   [Insert a SAML token](#Insert2)

Create an authentication policy
-------------------------------

You must configure an authentication policy to set API Gateway to authenticate against your directory server. This example uses the **HTTP Basic** authentication filter with a user name and password combination, but you can configure a different authentication mechanism as required.

1.  Add a new policy named, for example, `LDAP Authentication`.
2.  Open the **Authentication** category in the filter palette, and drag an **HTTP Basic** filter onto the policy canvas.
3.  Set the following, and click **Finish**:
4.  -   **Credential Format**: `User Name`
    -   **Repository Name**: The LDAP repository you configured (`LDAP Repository`)

5.  For more details on the fields and options in this configuration window, see .
6.  Click on the **Add Relative Path** icon to create a new relative path (for example, `/ldap`) that links to this policy, and deploy the policy to API Gateway.

![Diagram showing the one filter in the initial policy](/Images/IntegrationGuides/auth_auth/ldap_policy_http.png)

Test the policy
---------------

To test that the policy works and trace the operation in the log files, add a **Reflect** and a **Trace** filter to the policy. These filters are not required in the production environment.

1.  Open the **Utility** category in the palette, drag a **Reflect** filter onto the policy canvas, and click **Finish**.
2.  Drag a **Trace** filter onto the policy canvas, and click **Finish**.
3.  Connect the filters with success paths.
4.  ![Diagram showing the three filters cinnected with success paths](/Images/IntegrationGuides/auth_auth/ldap_policy_test.png)
5.  Deploy the updated configuration to API Gateway.
6.  Test the policy (for example, using the `sr` command). See the for more information on testing tools.

Retrieve attributes from the directory server
---------------------------------------------

You can enhance your LDAP policy to retrieve attributes for the user after a successful authentication. API Gateway stores the credentials of the user in the `authentication.subject.id` message attribute. Typically, this contains the Distinguished Name (DN) or user name of the authenticated user. API Gateway extracts the name from the message attribute and uses the name to query the directory server.

1.  Open the **Attributes** category in the filter palette, and drag a **Retrieve from Directory Server** filter onto the policy canvas.
2.  In **LDAP Directory**, select the LDAP connection you configured (`LDAP connection`).
3.  Select **From Selector Expression**, and enter `${authentication.subject.id}` to obtain the value of this message attribute at runtime.
4.  In **Base Criteria**, enter the Base Criteria of your directory server.
5.  In **Search Filter**, enter the following:
6.  `(&(objectclass=<User Class>)(<User Search Attribute>=<value>))`

    For example:

    ``` {space="preserve"}
    (&(objectclass=inetOrgPerson)(CN=Administrator))
    ```

7.  In **Attribute Name** table, list the attributes you want to retrieve from the user profile. If no attributes are explicitly listed, API Gateway extracts all user attributes. The retrieved attributes are set to `attribute.lookup.list` for that user.
8.  For example, a user `CN=Administrator` could have an attribute `memberOf` with the value `CN=Group Policy Creator Owners`. If you choose to retrieve the Attribute Name `memberOf`, API Gateway returns the value `CN=Group Policy Creator Owners`.

9.  Click **Finish**.
10. For more details on the fields and options in this configuration window, see .
11. Connect the filters with success paths.

![](/Images/IntegrationGuides/auth_auth/ldap_policy_retrieve.png)

Validate a retrieved attribute
------------------------------

After retrieving user attributes, API Gateway can validate a retrieved attribute value using an **Evaluate Selector** filter. Based on whether the filter fails or passes, API Gateway can then make a decision in the policy, such as allow the user to access a particular resource.

In this example, API Gateway checks if the user `CN=Administrator` belongs to the group "Policy Creator Owners".

1.  Open the **Utility** category in the palette, and drag an **Evaluate Selector** filter onto the policy canvas.
2.  In the **Expression** field, enter the selector expression to evaluate, and click **Finish**:
3.  `${<user>[<place in attribute.lookup.list>].<Attribute Name>.contains("<attribute value>")}`

    For example:

    `${Administrator[0].memberOf.contains("CN=Group Policy Creator Owners,CN=Users,DC=axwayqa,DC=com")}`

    The selector expression reads as follows:

    -   Check if the retrieved attribute `memberOf` in the `attribute.lookup.list` for the user `Administrator` contains the value `CN=Group Policy Creator Owners,CN=Users,DC=axwayqa,DC=com` .
    -   If this matches, the filter passes.

4.  Connect the filters with success paths. For testing, connect the **Evaluate Selector** filter between the **Trace** and **Reflect Message** filters.

![Diagram showing the filters connected with success paths](/Images/IntegrationGuides/auth_auth/ldap_policy_evaluate.png)

This example prints the following in the trace file:

``` {space="preserve"}
DEBUG 14/02/2013 16:54:21.205 }
DEBUG   14/02/2013 16:54:21.205  user {
DEBUG   14/02/2013 16:54:21.205  Value: [CN=Administrator: null:null:
{memberof=memberOf: CN=Group Policy Creator Owners,CN=Users,DC=axwayqa,DC=com, 
CN=Domain Admins,CN=Users,DC=axwayqa,DC=com, CN=Enterprise Admins,CN=Users,DC=axwayqa,DC=com, 
CN=Schema Admins,CN=Users,DC=axway,DC=com, CN=Administrators,CN=Builtin,DC=axwayqa,DC=com}]
```

For more information on configuring selectors, see the
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Insert a SAML token
-------------------

You can extend the authentication to downstream web services, if required. After the end user is successfully authenticated and the attibutes retrieved, API Gateway adds a SAML authentication assertion to the response message for the web services to consume.

1.  Open the **Authentication** category in the palette, and drag an **Insert SAML Authentication Assertion** filter onto the policy canvas.
2.  On the **Assertion details** tab, select any issuer on the **Issuer Name** list, and set the expiry date for the SAML authentication assertion.
3.  On the **Assertion Location** tab, make sure that **Add to WS-Security Block with SOAP Actor/Role** is selected and **SOAP Actor/Role** set to **Current Actor/Role Only**.
4.  On the **Advanced** tab, select **Insert SAML Attribute Statement** and **Indent**, then click **Finish**.
5.  Connect the filters with success paths.

For more details on how to configure an **Insert SAML Authentication Assertion** filter, see .

![](/Images/IntegrationGuides/auth_auth/ldap_policy_final.png)
