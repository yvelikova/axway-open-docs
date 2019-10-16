{
"title": "Configure a gateway domain",
"linkTitle": "Configure a gateway domain",
"weight":"10",
"date": "2019-10-14",
"description": "Use the `managedomain` command to register a host gateway in a new domain, and create a new gateway instance."
}

This topic describes how to use the `managedomain` command in interactive mode to configure a managed gateway. It shows how to register a host in a new domain, and create a new gateway instance. These are the minimum steps required to configure a domain.

{{< alert title="Note" color="primary" >}}This topic assumes that you have already installed your gateway (see the [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)). To use the gateway, you must have a domain configured in your installation.
If you installed the QuickStart tutorial, an example domain was created automatically. If you did not install QuickStart, you must configure a domain using `managedomain`.{{< /alert >}}

A single gateway installation supports a single gateway domain only. If you wish to run gateways in different domains on the same host, you need separate installations for each domain. For details on gateway domains and groups, see the [API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5).

You can also use the topology view in the web-based API Gateway Manager tool to manage a newly created domain. For example, you can perform tasks such as create or delete API Gateway groups and instances,and start or stop the gateway instances. For more details, see [Manage domain topology in API Gateway Manager](managetopology).

## Managedomain script

When configuring a domain, the `managedomain` script enables you to perform tasks such as the following:

* Host management (registering and deleting hosts, or changing Admin Node Manager credentials)
* API Gateway management (creating and deleting API Gateway instances, or adding Linux services)
* Group management (editing or deleting API Gateway groups)
* Topology management (viewing topologies)
* Deployment (deploying to a group, listing deployments, creating or downloading deployment archives, and editing group passphrases)
* Domain SSL certificates (regenerating SSL certificates on localhost)

For example, you can use the `managedomain` script to register a host in a domain and create a new API Gateway instance. These are the minimum tasks required to create a new domain, and which are documented in this topic.

### Managedomain options

For details on selecting specific options, enter the `managedomain` command in the following directory, and follow the instructions at the command prompt:

```
INSTALL_DIR/apigateway/posix/bin
```

{{< alert title="Note" color="primary" >}}To register an API Gateway instance as a service on Linux, you must run the `managedomain` command as `root`.{{< /alert >}}

For more details on `managedomain` options, see [Managedomain command reference](/docs/apigtw_admin/managedomain_ref). For details on how to use the `managedomain` command to configure SSL certificates and Admin Node Manager high availability, see [Configure Admin Node Manager high availability](/docs/apigtw_admin/admin_node_mngr).

## Register a host in a domain

Before registering multiple hosts in a domain, you must first ensure that a licensed API Gateway is installed on each host machine. Then to register each host, you must select option `1` on each host machine.

To register a host in a managed domain, perform the following steps:

1. Change to the following directory in your API Gateway installation:

    ```
    INSTALL_DIR/apigateway/posix/bin
    ```

2. Enter the following command:

    ```
    managedomain --menu
    ```

3. Enter **`1`** to register your host, and follow the instructions when prompted. For example, if this is the first host in the domain, enter **`y`** to configure an Admin Node Manager on the host. Alternatively, to add the host to an existing domain, enter **`n`** to configure a local Node Manager that connects to the Admin Node Manager in the existing domain.
4. Enter **`q`** to quit when finished.
5. Enter the following command to start the Admin Node Manager or local Node Manager on the registered host:

    ```
    nodemanager
    ```

You must ensure the Admin Node Manager is running in the domain to enable monitoring and management of the gateway instances.

## Create an API Gateway instance

To create an API Gateway instance, perform the following steps:

1. Open a new command window.
2. Change to the following directory in your API Gateway installation:

    ```
    INSTALL_DIR/apigateway/posix/bin
   ```

3. Enter the following command:

    ```
    managedomain --menu
    ```

4. Enter **`5`** to create a new API Gateway instance, and follow the instructions when prompted. You can repeat to create multiple API Gateway instances on local or remote hosts.
5. Enter **`q`** to quit when finished.
6. Use the `startinstance` command to start API Gateway, for example:

    ```
    startinstance -n "my_server" -g "my_group"
    ```

* You can add a gateway instance on any registered host in the domain, not just the local host. However, if you are creating Linux services for the gateway, you must run `managedomain` on the same host.
* You must run `startinstance` on the host on which you intend to start the instance.
* You must ensure that the `startinstance` file has execute permissions. Running `startinstance` without any arguments lists all API Gateway instances available on the host.

## Test the health of an API Gateway instance

You can test the connection to the new gateway instance by connecting to the Health Check service. For example, enter the following default URL in your browser: <http://HOST:8080/healthcheck>

This should display a simple `<status>ok</status>` message.

You can view the newly created gateway instance on the API Gateway Manager dashboard. For example, the default URL is as follows: <https://HOST:8090>

The port numbers used to connect depend on those entered when configuring the domain using `managedomain`, and are available from the localhost only.

Start and stop the gateway.
