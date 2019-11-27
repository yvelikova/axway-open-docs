{
"title": "Build the classes",
"linkTitle": "Build the classes",
"date": "2019-11-27",
"description": "Perform the following steps to build the JAR file for the Jabber sample:"
}
﻿

Perform the following steps to build the JAR file for the Jabber sample:

1.  Change to the sample directory (`DEVELOPER_SAMPLES/jabber`).
2.  Run the following command to compile the code and build the JAR:
3.  ``` {space="preserve"}
    ant -f build.xml
    ```

See the `README.TXT` file for additional instructions.

1.  Add the new JAR and any third-party JAR files used by the Jabber classes (for example, the SMACK API JAR files) to the CLASSPATH for all API Gateways and Node Managers on a host by copying them to the `INSTALL_DIR/apigateway/ext/lib` directory.
2.  Alternatively, you can add the JARs to the CLASSPATH for a single API Gateway instance only, by copying them to the `INSTALL_DIR/apigateway/groups/GROUP_ID/INSTANCE_ID/ext/lib` directory.
3.  Add the new JAR and any third-party JAR files used by the Jabber classes (for example, the SMACK API JAR files) to the runtime dependencies in Policy Studio. Select **Window > Preferences > Runtime Dependencies**, and click **Add** to browse to the new JAR and any third-party JARs, and add them to the list. Click **Apply** to save the changes.
4.  The following figure shows the runtime dependencies.
5.  ![Policy Studio runtime dependencies](/Images/APIGatewayDeveloperGuide/ps_runtime_dependencies.png)
6.  Restart the API Gateway instances and Node Managers.
7.  Restart Policy Studio using the following command:
8.  ``` {space="preserve"}
    policystudio -clean
    ```

The extension kit includes all of the associated resources and classes to create the **Jabber Filter**.

Custom filter dependencies
--------------------------

If your custom filter introduces a dependency on a new third-party library, you must first check if the required library is already available under the following directory and sub-directories:

INSTALL\_DIR/apigateway/system/lib

{{< alert title="Note" color="primary" >}}Any JAR file that you add under the following directories will be pushed ahead of `apigateway/system` JAR files on the CLASSPATH:{{< /alert >}}

-   `INSTALL_DIR/apigateway/ext/lib`
-   `INSTALL_DIR/apigateway/groups/GROUP_ID/INSTANCE_ID/ext/lib`

For example, API Gateway ships with specific versions of several Apache Commons JARs. Introducing conflicting versions of these JARs could adversely affect the ability of the API Gateway and Node Manager to function correctly.
