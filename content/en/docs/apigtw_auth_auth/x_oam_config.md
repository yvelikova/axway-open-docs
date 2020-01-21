{
"title": "Configure Oracle Access Manager",
"linkTitle": "Configure Oracle Access Manager",
"date": "2020-01-21",
"description": "This section describes how to create a 11g WebGate and configure an authentication policy for it using the OAM Administration Console. For more detailed instructions on OAM configuration, refer to the OAM documentation for your OAM version."
}
﻿

This section describes how to create a 11g WebGate and configure an authentication policy for it using the OAM Administration Console. For more detailed instructions on OAM configuration, refer to the OAM documentation for your OAM version.

<!-- -->

Configure an 11g WebGate with OAM 11gR2
---------------------------------------

Use the web-based OAM Administration Console to create the new WebGate. The web interface is available at the following URL, where `OAM_HOST` refers to the IP or host name of the machine on which OAM is running:

``` {space="preserve"}
http://OAM_HOST:7001/oamconsole
```

Log in using your WebLogic credentials and complete the following steps.

### **Step 1 - Create the 11g WebGate**

1.  On the **Welcome** page, click the **New OAM 11g Webgate** link.
2.  Complete the following fields on the **Create OAM 11g Webgate** page:
    -   **Name**: Enter a unique name for this OAM 11g WebGate, for example, `oam.example.com`.
    -   **Access Client Password**: Enter a suitable password for this WebGate.
    -   **Host Identifier**: Enter the host name of the machine on which your API Gateway and ASDK have been installed. In the following screenshot, the host name (that is to say **Host Identifier**) is used as the **Name** of the new WebGate.

    >
3.  ![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_07.png)
4.  Click **Apply** when you have completed the configuration.
5.  Write down the location of the generated artifacts given in the confirmation message:
6.  ![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_08.png)
7.  The complete configuration for the new WebGate is now displayed. You must enter a non-null value in the **Logout Target URL** field, for example, `end_url`.
8.  Click **Apply** one more time to save the new **Logout Target URL**. You should see another confirmation message acknowledging the modification:
9.  ![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_09.png)

### **Step 2 - Configure the authentication policy**

Update the authentication policy for the new WebGate:

1.  Double-click the **Application Domains** node in the tree view under the **Policy Configuration** tab.
2.  Click **Search** in the **Search** area. You do not need to enter anything in the **Search** field.
3.  You will be able to see your newly created 11g WebGate in the list of application domains.
4.  Click the newly created `oam.example.com` WebGate link in the table.
5.  Open the **Authentication Policies** tab to display the list of policies.
6.  Click the `Protected Resource Policy` link in the table.
7.  Change the **Authentication Scheme** field from `LDAPScheme` to `BasicScheme`.
8.  Click **Apply**.
9.  You will see a confirmation message indicating that the update was successful.

### **Step 3 - Copy the WebGate artifacts to the API Gateway machine**

Copy the auto-generated WebGate artifacts generated in [*Step 1 - Create the 11g WebGate* on page 1](#Step).

As notified in the confirmation message, the artifacts were generated in the following location after creating the 11g WebGate:

``` {space="preserve"}
/app/u01/middleware/user_projects/domains/idm_domain/output/oam.example.com
```

A directory listing on this location shows that two files were generated when the 11g WebGate was created: the `ObAccessClient.xml` and `cwallet.sso` files.

``` {space="preserve"}
[oracle@oam oam.example.com]$ ls
cwallet.sso  ObAccessClient.xml
```

Both files must be copied from the OAM machine to the machine on which you have installed the 11g ASDK and are running API Gateway. They must be copied to the `ASDK_HOME/config` directory together with the `jps-config.xml` file.

    $ ls -l /opt/oracle/AccessServerSDK11/config/
    -rw-r--r--. 1 axway axway 3141 Feb 12 08:35 cwallet.sso
    -rw-r--r--. 1 axway axway 1358 Feb 12 08:35 jps-config.xml
    -rw-r--r--. 1 axway axway 3033 Feb 12 08:35 ObAccessClient.xml

### **Step 4 - Modify the API Gateway classpath**

The API Gateway's classpath must be extended to include the ASDK 11 jars.

1.  To achieve this, create a `jvm.xml` file at the following location:

``` {space="preserve"}
INSTALL_DIR/apigateway/conf/jvm.xml
```

1.  Edit this `jvm.xml` file so that its contents are as follows. Make sure to set the value of the `ASDK_HOME` environment variable to the location where you installed ASDK 11.

``` {space="preserve"}
<ConfigurationFragment>

 <!-- OAM ASDK Settings -->
 <Environment name="ASDK_HOME" value="/opt/oracle/AccessServerSDK11" />
 <ClassDir name="$ASDK_HOME" />
 <VMArg  name="-Doracle.security.jps.config=$ASDK_HOME/config/jps-config.xml"/>

</ConfigurationFragment>
```
