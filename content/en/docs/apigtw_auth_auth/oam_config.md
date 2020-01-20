{
"title": "Configure Oracle Access Manager",
"linkTitle": "Configure Oracle Access Manager",
"date": "2020-01-20",
"description": "This section describes how create a web-server plug-in for Oracle Access Manager (OAM) using the web-based Oracle Access Administration Console. For more information, see the documentation of your OAM version."
}
﻿

This section describes how create a web-server plug-in for Oracle Access Manager (OAM) using the web-based Oracle Access Administration Console. For more information, see the documentation of your OAM version.

Depending of your OAM version, the plug-in is either called AccessGate or WebGate:

-   [Configure an AccessGate for OAM 10g](#Configur)
-   [Configure WebGate for OAM 11gR1 or 11gR2](#Configur2)

Configure an AccessGate for OAM 10g
-----------------------------------

In OAM 10 g, you can find Oracle Access Administration Console at the following URL:

``` {space="preserve"}
http://<OAM_HOST>/access/oblix
```

Replace `<OAM_HOST>` with the IP address or host name of the machine running your OAM.

Log in to the console and complete the following:

1.  [Create an AccessGate](#Create)
2.  [Step 2 - Configure a primary Access Server for the new AccessGate](#Step2)
3.  [Step 3 - Configure the AccessGate](#Step3)

### **Create an AccessGate**

1.  In the console, click **Access System Configuration**, and open the **Access System Configuration** tab.
2.  Open the **Access System Configuration** tab.
3.  Click the **Add New AccessGate** link.
4.  Complete the following fields on the **Add New AccessGate** page:
    -   **AccessGate Name**: Enter a suitable name for this AccessGate.
    -   **Hostname**: Enter the host name of the AccessGate machine.
    -   **AccessGate Password**: Specify a password.
    -   **Access Management Service**: Select `On`.
    -   **Preferred HTTP Host**: The host name entered here will appear in all HTTP requests while they attempt to access the protected resource, regardless of the way the host name was defined by the client in the HTTP request.

>

Leave all the other fields as default.

Click **Save**.

### **Step 2 - Configure a primary Access Server for the new AccessGate**

After saving the new AccessGate details, you will see a warning message at the top of the page stating that you must `"associate an Access Server or Access Server Cluster with this AccessGate"`.

To associate an Access Server with this AccessGate:

1.  Click **List Access Servers** at the bottom of the page.
2.  If you have no primary or secondary Access Servers configured for the new AccessGate, you will see the following: `"No primary Access Servers currently configured for MyAccessGate"`, `"No secondary Access Servers currently configured for MyAccessGate"`.
3.  Click **Add** to add a new Access Server to the AccessGate.
4.  Select the relevant OAM server from the **Select server** list.
5.  From the **Select priority** options, select **Primary Server**.
6.  Specify an appropriate **Number of connections** in the field provided.
7.  Click **Add**.
8.  The list of Primary Access Servers is now updated to include the newly added Access Server.

This completes the setup for the new AccessGate. The next step is to configure the AccessGate on the client side.

### **Step 3 - Configure the AccessGate**

After the AccessGate entry has been created, you must run the `configureAccessGate` tool.

The `configureAccessGate` tool is available in the following directory of your 10g ASDK:

``` {space="preserve"}
ASDK_HOME\oblix\tools\configureAccessGate
```

The `configureAccessGate` tool will create a file called `ObAccessClient.xml`, which contains data on how the AccessGate is to connect to the Access Manager server.

The following set of commands and prompts shows an example of running the tool on a Windows platform:

``` {space="preserve"}
configureAccessGate.exe -i "C:\Program Files (x86)\NetPoint\AccessServerSDK" -t AccessGate

 Please enter the Mode in which you want the AccessGate to run : 1(Open) 2(Simple) 3(Cert) : 1
 Please enter the AccessGate ID : API_SERVER-pc
 Please enter the Password for this AccessGate :
 Please enter the Access Server ID : AccessServer_01
 Please enter the Access Server Host Machine Name : oracle-access-manager.qa.com
 Please enter the Access Server Port : 7033
 Preparing to connect to Access Server.  Please wait.
 AccessGate installed Successfully.

 Press enter key to continue ...
```

Running the `configureAccessGate` tool generates the `ObAccessClient.xml` file in the following directory:

``` {space="preserve"}
ASDK_HOME/oblix/lib
```

{{< alert title="Note" color="primary" >}}When configuring the OAM-based filters in Policy Studio, you must specify this location as your OAM ASDK installation directory.{{< /alert >}}

Configure WebGate for OAM 11gR1 or 11gR2
----------------------------------------

The following steps describe how to create a 10g AccessGate or an 11g WebGate (depending on whether you have installed a 10g or an 11g OAM instance) and configure an authentication policy for it using the OAM Administration Console. F

If you are using an 11g OAM server, you must complete the instructions in this section. You can use the web-based OAM Administration Console to create the new WebGate. The web interface is available at the following URL, where `OAM_HOST` refers to the IP or host name of the machine on which OAM is running:

``` {space="preserve"}
http://OAM_HOST:7001/oamconsole
```

Log in using your WebLogic credentials and complete the following steps.

### **Step 1 - Create the 11g WebGate**

You can create a new 11g WebGate by following these steps:

1.  On the **Welcome** page, click the **New OAM 11g Webgate** link.
2.  Complete the following fields on the **Create OAM 11g Webgate** page:
    -   **Name**: Enter a unique name for this OAM 11g WebGate, for example, `oam.example.com`.
    -   **Access Client Password**: Enter a suitable password for this WebGate.
    -   **Host Identifier**: Enter the host name of the machine on which your API Gateway and ASDK have been installed. In the following screenshot, the host name (that is to say **Host Identifier**) is used as the **Name** of the new WebGate.
3.  ![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_07.png)
4.  Click **Apply** when you have completed the configuration.
5.  Note the location of the generated artifacts given in the confirmation message:
6.  ![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_08.png)
7.  The complete configuration for the new WebGate is now displayed. You must enter a non-null value in the **Logout Target URL** field, for example, `end_url`.
8.  Click **Apply** one more time to save the new **Logout Target URL**. You should see another confirmation message acknowledging the modification:
9.  ![](/Images/IntegrationGuides/OracleIntegrationGuide/oam_10g-11gR1-11gR2_09.png)

### **Step 2 - Configure the authentication policy**

The next step is to update the authentication policy for the new WebGate:

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

The next step is to copy the auto-generated WebGate artifacts generated in [Step 1 - Create the 11g WebGate](#Step). As notified in the confirmation message, the artifacts were generated in the following location after creating the 11g WebGate:

``` {space="preserve"}
/app/u01/middleware/user_projects/domains/idm_domain/output/oam.example.com
```

A directory listing on this location shows that two files were generated when the 11g WebGate was created: the `ObAccessClient.xml` and `cwallet.sso` files.

``` {space="preserve"}
[oracle@oam oam.example.com]$ ls
cwallet.sso  ObAccessClient.xml
```

Both files must be copied from the OAM machine to the machine on which you have installed the 11g ASDK and are running API Gateway. They must be copied to the `ASDK_HOME/config` directory together with the `jps-config.xml` file.

``` {space="preserve"}
C:\Oracle\AccessServerSDK11\config>dir
10/12/2012  12:09   <DIR>         .
10/12/2012  12:09   <DIR>         ..
10/12/2012  12:06       3,149 cwallet.sso
27/11/2012  12:06       1,426 jps-config.xml
10/12/2012  12:11       3,043 ObAccessClient.xml
```

### **Step 4 - Modify the API Gateway classpath**

The API Gateway's classpath must be extended to include the ASDK 11 jars. To achieve this, create a `jvm.xml` file at the following location:

``` {space="preserve"}
INSTALL_DIR/apigateway/conf/jvm.xml
```

Edit this `jvm.xml` file so that its contents are as follows. Make sure to set the value of the `ASDK_HOME` environment variable to the location where you installed ASDK 11.

``` {space="preserve"}
<ConfigurationFragment>

 <!-- OAM ASDK Settings -->
 <Environment name="ASDK_HOME" value="C:\Oracle\AccessServerSDK11" />
 <ClassDir name="$ASDK_HOME" />
 <VMArg  name="-Doracle.security.jps.config=$ASDK_HOME/config/jps-config.xml"/>

</ConfigurationFragment>
```
