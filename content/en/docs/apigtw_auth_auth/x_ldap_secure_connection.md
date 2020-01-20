{
"title": "Secure the connection to the directory server",
"linkTitle": "Secure the connection to the directory server",
"date": "2020-01-20",
"description": "For security, you can use an SSL connection between API Gateway and your directory server. This section describes how to configure this in Policy Studio. For more information on working in Policy Studio, see the ."
}
﻿

For security, you can use an SSL connection between API Gateway and your directory server. This section describes how to configure this in Policy Studio. For more information on working in Policy Studio, see the .

API Gateway and Policy Studio require the CA certificate of your directory server. You must import the CA certificate into the API Gateway and Policy Studio Java keystores.

Add the LDAP server certificate to the API Gateway certificate store
--------------------------------------------------------------------

1.  In the node tree, click **Environment Configuration > Certificates and Keys > Certificates**.
2.  Click **Create/Import > Import Certificate**, and select the CA certificate of your directory server.
3.  In **Alias Name**, give the certificate a name or click **Use Subject** to use the subject name , then click **OK**.

Add the LDAP server certificate to the API Gateway Java keystore
----------------------------------------------------------------

1.  In the node tree, click **Environment Configuration > Certificates and Keys > Certificates**.
2.  Click **Keystore**, click the browse button next to the **Keystore** field, and browse to the keystore file:
3.  `INSTALL_DIR/apigateway/posix/jre/lib/security/cacerts`
4.  **Windows**: `INSTALL_DIR\apigateway\win32\jre\lib\security\cacerts`

Click **Open**, and enter the keystore password.

Click **Add to keystore**.

Select the CA certificate of your directory server, and click **OK**.

Give a name to the certificate, or use the default name, and click **OK**.

Click **OK** to save the configuration, and deploy the updated configuration to API Gateway.

Add the LDAP server certificate to the Policy Studio Java keystore
------------------------------------------------------------------

1.  In the node tree, click **Environment Configuration > Certificates and Keys > Certificates**.
2.  Click **Keystore**, click the browse button next to the **Keystore** field, and browse to the keystore file:
3.  `INSTALL_DIR/policystudio/posix/jre/lib/security/cacerts`
4.  **Windows**: `INSTALL_DIR\policystudio\win32\jre\lib\security\cacerts`

Click **Open**, and enter the keystore password.

Click **Add to keystore**.

Select the CA certificate of your directory server, and click **OK**.

Give a name to the certificate, or use the default name, and click **OK**.

Click **OK** to save the configuration, and restart Policy Studio.

Configure the LDAP connection over SSL
--------------------------------------

1.  In the node tree, click **Environment Configuration > External Connections > LDAP Connections**.
2.  Right-click the appropriate directory server connection, and click **Edit**.
3.  In the **URL** field, enter the LDAPS host name and port. For example:

``` {space="preserve"}
ldaps://ldap_host:636
```

1.  Select the **SSL Enabled** check box, and click **Test Connection**.
2.  After a successful connection, click **OK**, and deploy the deploy the updated configuration to API Gateway.

