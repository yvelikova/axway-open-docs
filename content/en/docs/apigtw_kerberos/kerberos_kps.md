{
"title": "Use KPS to store passwords for Kerberos authentication",
"linkTitle": "Use KPS to store passwords for Kerberos authentication",
"date": "2019-11-14",
"description": "Kerberos authentication in API Gateway relies on keeping API Gateway in sync with Active Directory. If a password changes in Active Directory, it must also be updated in API Gateway. "
}
﻿

Kerberos authentication in API Gateway relies on keeping API Gateway in sync with Active Directory. If a password changes in Active Directory, it must also be updated in API Gateway.

For example, you might have an Active Directory password policy where all passwords must change every 60 days and passwords that never change are not allowed. In this case, the updates to API Gateway are frequent, so it is important that they can be done easily, quickly, and without downtime.

To achieve this, you can use a Key Property Store (KPS) to store passwords for both Kerberos clients and Kerberos services. A KPS is a table of data that policies running on API Gateway can reference as needed using selectors. You can view, populate, and update the data in KPS tables using API Gateway Manager. When a password is changed in Active Directory, you can update the password in the KPS at runtime, instead of redeploying the API Gateway configuration, or restarting API Gateway.

-   [Configure a KPS table for Kerberos passwords](#Configur)
-   [Populate data to the KPS table](#Populate)
-   [Update your Kerberos configuration to use the KPS table](#Update)

For more details on KPS tables, see the
[API Gateway Key Property Store User Guide](/bundle/APIGateway_77_KPSUserGuide_allOS_en_HTML5)
.

Configure a KPS table for Kerberos passwords
--------------------------------------------

This section describes how to configure a KPS table for storing passwords in Policy Studio. For more information on working in Policy Studio, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

KPS tables are stored in KPS collections, so you must have a KPS collection to which you add the new KPS table. You can use an existing KPS collection, or create a new collection called, for example, `Passwords` with no collection alias prefix. For more details on how to configure a KPS collection, see the
[API Gateway Key Property Store User Guide](/bundle/APIGateway_77_KPSUserGuide_allOS_en_HTML5)
.

1.  In the node tree, select the KPS collection you want to use, and click **Add Table**.
2.  Enter a name for your table (for example, `Passwords`).
3.  Click **Add**, enter an alias (such as `Kerberos`), and click **OK**.
4.  In the KPS table you created, go to the **Structure** tab, and click **Add** to add a field to the table.
5.  Set the following, and click **OK**:
6.  -   **Name**: `name`
    -   **Type**: `java.lang.String`

7.  Click **Add**, set the following, and click **OK**:
8.  -   **Name**: `password`
    -   **Type**: `java.lang.String`

9.  Select **Primary Key** for the field `name` and **Encrypted** for the field `password`.
10. Click **Save** in the top right corner to save the configuration, and deploy the configuration to API Gateway.

Populate data to the KPS table
------------------------------

Use API Gateway Manager to populate the KPS table with entries for Kerberos principals, and to update the data when it changes. For more information on working in API Gateway Manager, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

1.  Log in to the API Gateway Manager, click **Settings > Key Property Stores**.
2.  Select the KPS table you created (`Passwords`), and select **Actions > New Entry** to add a Kerberos principal to the KPS table.
3.  In the **name** field, enter the Kerberos principal's user name in the Active Directory.
4.  In the **password** field, enter the Kerberos principal's password from Active directory, and click **Save**.
5.  Create an entry and fill in the user name and password from Active Directory for each of your Kerberos principals.

You now have a KPS table storing the passwords for Kerberos authentication.

To update the details in the table when a Kerberos principal's password changes in Active Directory, log in to API Gateway Manager, select your KPS table, select the principal you want to edit, and update the password to match Active Directory.

Update your Kerberos configuration to use the KPS table
-------------------------------------------------------

You must update the Kerberos clients and Kerberos services to use selectors in the password field to pick up the actual passwords from the KPS table.

1.  In the Policy Studio node tree, click **Environment Configuration > External Connections > Kerberos Clients**.
2.  Select the Kerberos client you want, and click **Edit**.
3.  Select **Wildcard Password**, and enter the following:
4.  `${kps.<KPS table alias>['<name>'].password}`

    For example:

    `${kps.Kerberos['TrustedGateway'].password}`

    Here, `TrustedGateway` is the value of the `name` field in the KPS table, and thus the user name of the Kerberos principal in the Active Directory (`TrustedGateway@AXWAY.COM`). The name field is used as the primary key for the KPS table.

5.  Repeat these steps for all your Kerberos clients you want to use the KPS table.
6.  In the node tree, click **Environment Configuration > External Connections > Kerberos services**, and repeat the steps for all your Kerberos services you want to use the KPS table.
7.  Deploy the configuration to API Gateway.

