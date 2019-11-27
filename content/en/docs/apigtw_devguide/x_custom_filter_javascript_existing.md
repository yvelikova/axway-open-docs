{
"title": "Use JavaScript to call existing Java code",
"linkTitle": "Use JavaScript to call existing Java code",
"date": "2019-11-27",
"description": "In this approach, you write your custom requirement in Java and invoke it using JavaScript in a **Scripting Language** filter. "
}
﻿

In this approach, you write your custom requirement in Java and invoke it using JavaScript in a **Scripting Language** filter.

Follow these guidelines:

1.  Create a Java class that meets your custom requirement.
2.  Build a JAR file from the Java class and add it, and any third-party dependencies, to the API Gateway CLASSPATH and to the runtime dependencies in Policy Studio.
3.  Create a policy (for example, called **InvokeJava**) in Policy Studio that contains only a **Scripting Language** filter. Configure the filter to invoke the Java code using JavaScript.

We recommend that you select `JavaScript` in the **Language** field of the **Scripting Language** filter, and ensure that the JavaScript syntax in the script conforms with Nashorn engine syntax. For more information about migrating from Rhino to Nashorn, see the [Rhino Migration Guide](https://wiki.openjdk.java.net/display/Nashorn/Rhino+Migration+Guide).

1.  Configure API Gateway to invoke the policy. For more information, see [Invoke the policy](#Invoke).
2.  Test the policy using API Tester. For more information, see [Test the policy](#Test).

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

Invoke the policy
-----------------

To configure the API Gateway to invoke the new policy, follow these steps:

1.  Under the **Environment Configuration > Listeners** node in Policy Studio, select the path (for example, **API Gateway > Default Services > Paths**).
2.  On the resolvers window on the right, click **Add > Relative Path**.
3.  Enter the following values on the dialog and click **OK**:
    -   **When a request arrives that matches the path:**
    -   **Path Specific Policy:** Click the browse button and select the policy. This sends all requests received on the path configured above to your newly configured policy.

    >
4.  To deploy the new configuration to API Gateway, click the **Deploy** button on the toolbar or press **F6** and follow the instructions.

Test the policy
---------------

To test the configuration, follow these steps:

1.  Start API Tester.
2.  Click the arrow next to the Play icon and select **Request Settings**.
3.  In the **Url** field, enter to send the message to the relative path you configured above.
4.  Click **Run** to send the message to API Gateway.

{{< alert title="Tip" color="primary" >}}Alternatively, you can test the policy by entering the URL into any web browser.{{< /alert >}}
