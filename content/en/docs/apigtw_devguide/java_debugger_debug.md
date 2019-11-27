{
"title": "Debug custom Java code with a Java debugger",
"linkTitle": "Debug custom Java code with a Java debugger",
"date": "2019-11-27",
"description": "You can debug custom Java code running in API Gateway (for example, code for a custom filter), by attaching a remote debugger to API Gateway. To attach a remote debugger, add a JVM argument to API Gateway and restart it. "
}
﻿

You can debug custom Java code running in API Gateway (for example, code for a custom filter), by attaching a remote debugger to API Gateway. To attach a remote debugger, add a JVM argument to API Gateway and restart it.

To change the JVM settings of an API Gateway instance, follow these steps:

1.  Create a file called `jvm.xml` in the following location:
2.  ``` {space="preserve"}
    INSTALL_DIR/apigateway/groups/GROUP_ID/INSTANCE_ID/conf
    ```

3.  Edit the `jvm.xml` file so that the contents are as follows:
4.  ``` {space="preserve"}
    <ConfigurationFragment>
      <VMArg name="-Xrunjdwp:transport=dt_socket,server=y,address=9999" />
    </ConfigurationFragment>
    ```

5.  Restart API Gateway.

When you restart the API Gateway instance with the above settings, it starts up and waits for a JVM debugger to connect to the process on port 9999. You can connect to port 9999 of the API Gateway instance using a Remote Java debug (for example, in the Eclipse IDE).
