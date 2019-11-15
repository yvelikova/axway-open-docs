{
"title": "Configure Active Directory",
"linkTitle": "Configure Active Directory",
"date": "2019-11-14",
"description": "This section describes how to configure a trusted Kerberos client principal for API Gateway in Active Directory acting as the Key Distribution Centre (KDC) . "
}
﻿

This section describes how to configure a trusted Kerberos client principal for API Gateway in Active Directory acting as the Key Distribution Centre (KDC) .

Before you configure the user account for the trusted Kerberos principal, you must have configured the user account and Service Principal Names (SPN) for the back-end services you want API Gateway to request service tickets for. For an example configuration, see [Configure a user account for the Kerberos service](../Kerberos_demo/active_directory_configuration_demo.htm#Configur2).

Configure user account for the trusted Kerberos principal
---------------------------------------------------------

1.  On the Windows Domain Controller, click **Control panel > Administrative Tools > Active Directory User and Computers**
2.  Right-click **Users**, and select **New > User**.
3.  Enter a name for the Kerberos principal (`TrustedAPIGateway`) in the **First Name** and **User Logon Name** fields, select your Active Directory domain from the drop-down menu (`@axway.com`), and click **Next**.
4.  Enter the password, and do the following:
5.  -   **User must change password at next logon**: Deselect this.
    -   **User cannot change password**: Select this.
    -   **Password never expires**: Select this.

    This ensures that a working API Gateway configuration does not stop working when a user chooses, or is prompted to change their password. API Gateway does not track these actions.

    If these options are not suitable in your implementation and a user password changes in Active Directory, you must then update the password or keytab of the Kerberos client or service related to the user in Policy Studio, and redeploy the configuration to API Gateway.\
    If you cannot deselect **User must change password at next logon**, ensure the user changes the password and that the new password or keytab is deployed to API Gateway *before* API Gateway attempts to connect as this user.\

{{< alert title="Tip" color="primary" >}}You can store Kerberos passwords in a KPS table to update a changed password in runtime. For more details, see [Use KPS to store passwords for Kerberos authentication](../../../KerberosIntegration/kerberos_kps.htm).{{< /alert >}}

1.  Click **Next > Finish**.
2.  Open a command prompt on the Windows Domain Controller, and enter the following command to set the Service Principal Name (SPN):
3.  `> setspn -A <service class>/<host> <service name>`

    For example:

    `> setspn -A HTTP/TrustedAPIGateway.axway.com TrustedAPIGateway`

    This command creates the SPN, but does not create a keytab file.

4.  Right-click on the new user, and select **Properties > Delegation**, and select **Trust this user for delegation to specified services only** and **Use any authentication protocol**. API Gateway does not support the option **Use Kerberos only**.
5.  Add the back-end services (here `HTTP/BackEndService.axway.com` and `HOST/BackEndService.axway.com`), then click **OK**. The trusted Kerberos principal can request service tickets for these back-end services on behalf of the impersonated end users.
6.  ![](/Images/IntegrationGuides/KerberosIntegration/KerberosConstrainedDelegation/Overview_4.png)

For the next steps, see [Configure Kerberos principals](configure_kerberos_principals_CD.htm).
