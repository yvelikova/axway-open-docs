{
"title": "Configure API Gateway as the SiteMinder agent",
"linkTitle": "Configure API Gateway as the SiteMinder agent",
"date": "2020-01-21",
"description": "This section describes how to configure API Gateway to act as an agent for CA SiteMinder."
}
﻿

This section describes how to configure API Gateway to act as an agent for CA SiteMinder.

-   [Add CA binaries to API Gateway](#Add)
-   [Register API Gateway as the SiteMinder agent](#top)

Add CA binaries to API Gateway
------------------------------

Integration with CA SiteMinder requires CA SiteMinder SDK version 12.52-sp02 or later. You must add the required third-party binaries to your API Gateway installation.

1.  Ensure that any SiteMinder binaries you may have previously added to API Gateway have been deleted.
2.  Install CA SiteMinder SDK.
3.  Copy the following `jar` files from the `java` directory of the CA SDK :
4.  -   `cryptoj.jar`
    -   `smagentapi.jar`
    -   `smjavasdk2.jar`

5.  Add the files to the following directory on API Gateway:
6.  `INSTALL_DIR/apigateway/<platform>/lib`
7.  **Windows**: `INSTALL_DIR\apigateway\ext\lib`

Restart API Gateway.

Register API Gateway as the SiteMinder agent
--------------------------------------------

Before API Gateway can act as a Policy Enforcement Point (PEP) for SiteMinder, you must register API Gateway as an agent for CA SiteMinder Policy Server. With the `smreghost` tool, you can register the agent from the command line, and create the `SmHost.conf` file.

The agent needs to be registered on the machine running the API Gateway instance. You must run the `smreghost` tool separately on each individual API Gateway instance. The `SmHost.conf` file is generated in the same directory as the `smreghost` tool.

Before you start, you need the following information on your CA SiteMinder Policy Server:

-   IP address
-   Login credentials (user name and password)
-   Host Configuration Object name

To obtain this information, contact your SiteMinder administrator.

1.  Go to `INSTALL_DIR/apigateway/<platform>/lib`.
2.  Run the following:
3.  ``` {space="preserve"}
    export LD_LIBRARY_PATH=INSTALL_DIR/apigateway/<platform>/lib
    ```

4.  Run the `smreghost` tool as follows:
5.  ``` {space="preserve"}
    smreghost -i <CA SiteMinder IP address> -u <user name> -p <password> -hc <Host Configuration Object name> –hn <hostname
    ```

    For example:

    ``` {space="preserve"}
    smreghost -i 192.168.0.99 -u GatewayAgent -p XXXXXX -hc V6HostConfObject –hn apigateway.axway.int
    ```

    The hostname must be the fully qualified machine name of the host machine running API Gateway.

6.  To enable debug output from the Siteminder agent, add the following to `jvm.xml` if needed:
7.  `<ConfigurationFragment>`

    `<VMArg name="-DSMJAVASDK_LOG_INFO=true"/>`

    `</ConfigurationFragment>`


