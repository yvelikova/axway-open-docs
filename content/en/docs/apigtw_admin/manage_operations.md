{
"title": "Manage operations",
"linkTitle": "Manage operations",
"weight":"15",
"date": "2019-10-14",
"description": "API Gateway operations, including start and stop the gateway and its tools, configure the gateway in high availability, and backup and disaster recovery."
}

## Start and stop the API Gateway

This section describes how to start and stop the Node Manager and the API Gateway instance on the command line. It also describes how to start Policy Studio.

You can also start and stop API Gateway instances using API Gateway Manager. For more details, see [Manage API Gateway instances](/docs/apigtw_admin/managetopology#manage-api-gateway-instances).

### Prerequisites

Before you can start API Gateway, you must first create a new domain that includes a gateway instance. If you installed the QuickStart tutorial, a sample API Gateway domain is automatically configured in your installation. Otherwise, you must create a new domain. For more details, see [Configure an API Gateway domain](/docs/apigtw_admin/makegateway).

If you are using Apache Cassandra, before starting API Gateway, you must first ensure that Cassandra is running. For details on installing and running Cassandra, see the
[API Gateway Installation Guide](/docs/apim_installation/apigtw_install/).

### Set passphrases

By default, data is stored unencrypted in the API Gateway configuration store. However, you can encrypt certain sensitive information such as passwords and private keys using a passphrase. When the passphrase has been set, this encrypts the API Gateway configuration data.

You must enter the passphrase when connecting to the configuration data (for example, using the Policy Studio, or when the API Gateway starts up). For more details on configuring this passphrase, see [Configure an API Gateway encryption passphrase](/docs/apigtw_security/general_passphrase#set-passphrases).

### Start the Node Manager

To start the Node Manager on Linux, complete the following steps:

1. Open a shell at the `/posix/bin` directory of your API Gateway installation.
2. Run the `nodemanager.sh` file, for example:

    ```
    ./nodemanager
    ```

3. If you are using an encryption passphrase, you are prompted for this passphrase.

### Start the API Gateway instance

To start the gateway instance and Policy Studio on Linux, perform the following steps:

1. Open a shell at the `/posix/bin` directory of your gateway installation.
2. Ensure that the `startinstance` file has execute permissions and run the `startinstance` command, for example:

    ```
    startinstance -n "my_server" -g "my_group"
    ```

3. If you are using an encryption passphrase, you are prompted for this passphrase.
4. When API Gateway has successfully started, run the`policystudio.sh` file in your Policy Studio installation directory. For example:

    ```
    cd /usr/home/policystudio
    ./policystudio"
    ```

5. When Policy Studio is starting up, you are prompted for connection details for API Gateway.

You can enter the `startinstance` command without any arguments to display the servers registered on the machine. For example:

```
$ startinstance
usage:"startinstance [[-n instance-name -g group-name [instance-args]] | [directory-location [instance-args]]]"

The API Gateway instances listed below are available to run on this machine as follows:

startinstance -n "server1" -g "group1"
startinstance -n "server2" -g "group2"
```

If you have a single API Gateway instance on the host on which you run `startinstance`, that instance starts when you specify no arguments.

**Startup options**:

You can specify the following optional instance arguments to the `startinstance` command:

`-b <file>`

Specifies the boot-time trace destination.

`-d`

Runs as daemon/service.

`-h <directory>`

Specifies the service instance directory.

`-k`

Kills the instance.

`-P`

Prompts for a passphrase at startup.

`-q`

Runs in quiet mode (equivalent to `-Dquiet`).

`-v`

Changes to the installation instance directory on startup.

`-s`

Tests if the service is running .

`-e`

Specifies the end of arguments for `vshell`.

`-D prop[=value]`

Sets a configuration file property.

The `-d`, `-s`, and `-k` options are designed for use with the service controller (for example, traditional SVR4 init, systemd, upstart, and so on). The `-d` option waits until the service is running before returning, and `-k` waits for the process to terminate. This means that when used in a script, the completion of the command indicates that the operation requested has completed.

If the service is running, `-s` will exit with a `0` status code, and with `1` otherwise. For example, you can use the following to print a message if the service is running:

```
startinstance -s -n InstanceName -g GroupName && echo Running
```

### Connect to API Gateway in Policy Studio

When starting the Policy Studio, you are prompted for details on how to connect to the Admin Node Manager (for example, the server session, host, port, user name, and password). The default connection URL is:

```
https://<HOST>:8090/api
```

`HOST` is the IP address or host name of the machine on which the API Gateway runs.

### Stop API Gateway

To stop the API Gateway instance, you must specify the group and instance name to the `startinstance` command along with the `-k` option. For example:

```
./startinstance -g "my_group" -n "my_server" -k
```

### Stop the Node Manager

To stop the Node Manager, you must specify the `nodemanager` command along with the `-k` option. For example:

```
./nodemanager -k
```

## Shut down an API Gateway using zero downtime shutdown {#zero-downtime-shutdown}

Perform a zero downtime shutdown of a gateway in a multi-node API Gateway environment with a load balancer.

When you need to shut down a gateway for any reason (for example, during an upgrade), zero downtime shutdown enables you to indicate this to the load balancer for a set amount of time before the shutdown begins, avoiding traffic loss.

To perform a zero downtime shutdown, follow these steps:

1. Enable zero downtime shutdown in Policy Studio, and set the delay before shutdown. For more information, see [Zero downtime settings](/docs/apigtw_ref/additional_settings#zero-downtime-settings).
2. Configure your load balancer to ping the Health Check LB policy periodically to determine if each API Gateway is healthy. This is available on the following default URL:

    ```
    http://APIGATEWAY_HOST:8080/healthchecklb
    ```

3. Initiate shutdown of an API Gateway using the command line or API Gateway Manager. For more information, see [Start and stop the gateway](#start-and-stop-the-api-gateway) or [Manage API Gateway instances](/docs/apigtw_admin/managetopology#manage-api-gateway-instances).
4. When shutdown is initiated on the API Gateway:
    * The Health Check LB policy returns a `503 Service Unavailable` response. This indicates to the load balancer that the API Gateway is not available for traffic and the load balancer stops routing to it.
    * After the specified delay before shutdown (for example, 10 seconds), the API Gateway is shut down.

## Configure API Gateway high availability

System administrators can configure High Availability (HA) in the API Gateway environment to ensure that there is no single of point of failure in the system. This helps to eliminate any potential system downtime in production environments. Typically, the API Gateway platform is deployed in the Demilitarized Zone (DMZ) to provide an additional layer of security for your back-end systems.

This section describes the recommended architecture in an HA production environment. It includes recommendations on topics such as load balancing, commonly used transport protocols, caching, persistence, and connections to external systems.

### HA in production environments

The following diagram shows an overview of a Gateway platform running in an HA production environment:

![API Gateway High Availability](/Images/APIGateway/admin_ha_config.png)

The architecture shown in the diagram is described as follows:

* An external client application makes inbound calls sending business traffic over a specific message transport protocol (for example, HTTP, JMS, or FTP) to a load balancer.
* A standard third-party load balancer performs a health check on each gateway instance, and distributes the message load to the listening port on each API Gateway instance (default is `8080`).
* Each gateway instance has External Connections to third-party systems. For example, these include databases such as Oracle and MySQL, and Authentication Repositories such as CA SiteMinder, Oracle Access Manager, Lightweight Directory Access Protocol (LDAP) servers, and so on.
* Caching is replicated between each API Gateway instance using a distributed caching system based on Ehcache.
* Each gateway instance has Remote Host interfaces that specify outbound connections to back-end API systems, and which can balance the message load based on specified priorities for Remote Hosts.
* Each gateway instance connects to an external Apache Cassandra database used by certain features for persistent data storage, and which has its own HA capabilities.
* Each gateway instance contains an embedded Apache ActiveMQ messaging system, which can be configured for HA in a shared file system.
* Each back-end API is also replicated to ensure there is no single point of failure at the server level.
* Management traffic used by the Admin Node Manager, API Gateway Manager, and Policy Studio is handled separately on different port (default is `8090`).

{{< alert title="Note" color="primary" >}}For simplicity, the diagram shows two gateway instances only. However, for a resilient HA system, a minimum of at least two active gateway instances at any time, with a third and fourth in passive mode, is recommended.{{< /alert >}}

### Load Balancing

In this HA production environment, the load balancer performs a health check and distributes message load between gateway instances. The API Gateway supports a wide range of standard third-party load balancing products (for example, F5) without any special requirements. Multiple gateway instances can be deployed active/active (hot standby) or active/passive (cold standby) modes as required.

The load balancer polls each gateway instance at regular intervals to perform a health check on the message traffic port (default `8080`). The load balancer calls the API Gateway Health Check policy, available on the following default URL:

```
http://GATEWAY_HOST:8080/healthcheck
```

The health check returns a simple `<status>ok</status>` message when successful. In this way, if one gateway instance becomes unavailable, the load balancer can route traffic to an alternative gateway instance.

Both transparent load balancing and non-transparent load balancing are supported. For example, in transparent load balancing, the gateway can see that incoming messages are sent from specific client and load balancer IP addresses. The gateway can also extract specific client details from the HTTP header as required (for example, the SSL certificate, user credentials, or IP address for Mutual or 2-Way SSL Authentication). In non-transparent load balancing, the gateway sees only the virtual service address of the load balancer.

In addition, API Gateway can also act as load balancer on the outbound connection to the back-end APIs. For more details, see [Remote Hosts](#remote-hosts).

### Java Message System

API Gateway supports integration with a wide range of third-party Java Message System (JMS) products. For example, these include the following:

* IBM WebSphere MQ
* Progress SonicMQ
* Tibco Rendezvous
* Fiorano
* OpenJMS
* JBoss Messaging

API Gateway can act as a JMS client (for example, polling messages from third-party JMS products or sending message to them). For details on configuring the gateway client connections to JMS systems, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/). For details on configuring HA in supported third-party JMS systems, see the user documentation available from your JMS provider.

API Gateway also provides an embedded Apache ActiveMQ server in each API Gateway instance. For more details, see [Embedded Apache ActiveMQ](#embedded-apache-activemq).

### File Transfer Protocol

API Gateway supports the following protocols:

* File Transfer Protocol (FTP)
* FTP over SSL (FTPS)
* Secure Shell FTP (SFTP)

When using FTP protocols, the gateway writes to a specified directory in your filesystem. In HA environments, when the uploaded data is required for subsequent processing, you should ensure that the filesystem is shared across your API Gateway instances—for example, using Storage Area Network (SAN) or Network File System (NFSv4).

### Remote Hosts

You can use the **Remote Host Settings** in Policy Studio to configure how API Gateway connects to a specific external server or routing destination. For example, typical use cases for configuring Remote Hosts with the gateway are as follows:

* Mapping a host name to a specific IP address or addresses (for example, if a DNS server is unreliable or unavailable), and ranking hosts in order of priority.
* Specify load balancing settings (for example, whether load balancing is performed on a simple round-robin basis or weighted by response time).
* Allowing the gateway to send HTTP 1.1 requests to a destination server when that server supports HTTP 1.1, or resolving inconsistencies in how the destination server supports HTTP.
* Setting timeouts, session cache size, input/output buffer size, and other connection-specific settings for a destination server. For example, if the destination server is particularly slow, you can set a longer timeout.

For details on how to configure **Remote Host Settings** in Policy Studio, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

### Distributed caching

In an HA production environment, caching is replicated between each gateway instance using a distributed caching system. In this scenario, each gateway has its own local copy of the cache, but registers a cache event listener that replicates messages to the caches on other gateway instances. This enables the put, remove, expiry, and delete events on a single cache to be replicated across all other caches.

In the distributed cache, there is no master cache controlling all caches in the group. Instead, each cache is a peer in the group that needs to know where all the other peers in the group are located. Peer discovery and peer listeners are two essential parts of any distributed cache system.

For more details on configuring distributed cache settings, see the topic on Global Caches in the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/). API Gateway distributed caching system is based on Ehcache. For more details, see <http://ehcache.org/>.

### External Connections

You can use **External Connections** settings in Policy Studio to configure how the gateway connects to specific external third-party systems. For example, this includes connections such as the following:

* Authentication Repositories (LDAP, CA SiteMinder, Oracle Access Manager, and so on)
* Databases (Oracle, DB2, MySQL, and MS SQL Server)
* JMS Services
* SMTP Servers
* ICAP Servers
* Kerberos
* Tibco
* Tivoli
* Radius Clients

For details on how to configure **External Connections** in Policy Studio, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/). For details on how to configure HA for any external third-party systems, see the product documentation provided by your third-party vendor.

{{< alert title="Note" color="primary" >}}When configuring connections to server hosts, it is recommended that you specify server host names instead of IP addresses, which are less stable and are subject to change in a Domain Name System (DNS) environment.{{< /alert >}}

### External Apache Cassandra database

You can configure a gateway instance to use an external Apache Cassandra database for persistent data storage. This Cassandra database is required by the following gateway features:

* API Manager
* OAuth tokens and codes
* Client Application Registry
* API Keys
* KPS collections that you create

If your gateway system uses any of these features, you must configure an external Apache Cassandra database for HA. All API Gateways in a group can share the same external Cassandra data source. In a production environment, you must configure the gateway group to use the same Cassandra data source to provide HA.

All nodes in a Cassandra cluster must run on the same operating system.

For more details on installing and configuring an external Cassandra database for HA, see the [Install an Apache Cassandra database](/docs/apim_installation/apigtw_install/cassandra_install/).

### Embedded Apache ActiveMQ

API Gateway provides an embedded Apache ActiveMQ broker in each gateway instance. In a HA production environment, multiple ActiveMQ broker can work together as a network of brokers in a group of gateways. This requires setting up a shared directory that is accessible from all gateway instances—for example, using Storage Area Network (SAN) or Network File System (NFSv4).

In this shared network of ActiveMQ brokers, each gateway can start a local embedded ActiveMQ broker, which listens on a configured TCP port (`61616` by default). This port is accessible from both the local gateway and remote clients using the load balancer.

For details on how to configure and manage embedded Apache ActiveMQ, see the following:

* [Embedded ActiveMQ settings](/docs/apigtw_ref/general_activemq_settings)
* [Manage embedded ActiveMQ messaging](/docs/apigtw_admin/admin_messaging)

For more details on Apache ActiveMQ, see <http://activemq.apache.org/>.

### Admin Node Manager high availability

API Gateway provides an active/active high availability solution for the Admin Node Manager that supports multiple DMZ deployment patterns. Multiple Admin Node Managers in a domain are supported in an active/active configuration, in which each Admin Node Manager can perform management operations with the same shared topology and configuration. This supports the following DMZ deployment patterns:

* All nodes in the DMZ run Admin Node Managers
* Only nodes behind the internal firewall run Admin Node Managers
* DMZ has multiple zones, and only nodes behind the firewall run Admin Node Managers

You must configure at least two Admin Node Managers in a domain for high availability and security. For details on how to configure and secure multiple Admin Node Managers in a domain, see [Configure Admin Node Manager high availability](/docs/apigtw_admin/admin_node_mngr).

**Scenario 1—Admin Node Managers in DMZ**:

In this deployment pattern, all nodes in the DMZ run an Admin Node Manager in active/active mode. For example:

![Admin Node Managers in DMZ](/Images/APIGateway/admin_node_mngr_ha1.png)

Multiple gateway instances are deployed on separate nodes in the DMZ, and all nodes can communicate with each other. Each node runs an Admin Node Manager in an active/active configuration, and there are no Node Managers. This means that the API Gateway management infrastructure is deployed in the DMZ.

**Scenario 2—Admin Node Managers behind firewall**:

In this deployment pattern, only nodes behind the internal firewall run Admin Node Managers in active/active mode. For example:

![Admin Node Managers behind firewall](/Images/APIGateway/admin_node_mngr_ha2.png)

Similar to scenario 1, multiple gateway instances are deployed on separate nodes in the DMZ, and all nodes can communicate with each other. However, the management infrastructure cannot be deployed in the DMZ, and must be deployed behind the internal firewall.

All nodes in the DMZ run Node Managers instead. There are two nodes deployed behind the internal firewall running Admin Node Managers in an active/active configuration. Both Admin Node Managers can manage any Node Manager in the DMZ.

**Scenario 3—Multi-zoned DMZ with Admin Node Managers behind firewall**:

In this deployment pattern, all nodes in the DMZ run an Admin Node Manager in active/active mode. For example:

![Multi-zoned DMZ with Admin Node Managers in DMZ](/Images/APIGateway/admin_node_mngr_ha3.png)

This deployment pattern is a refinement of scenario 2. The DMZ is divided into multiple zones with no inter-zone communication. Multiple gateway instances are deployed on separate nodes in each zone, and all nodes in the zone can communicate with each other.

All nodes in the DMZ run Node Managers. There are two nodes deployed behind the internal firewall running Admin Node Managers in an active/active configuration. Both Admin Node Managers can manage any Node Manager in any zone.

## API Gateway backup and disaster recovery

You must ensure that your API Gateway system can recover from any natural disasters (for example, floods, hurricanes, or earthquakes) and human-induced disasters (for example, failures, fires, or explosions).

Many organizations have a mirrored backup and disaster recovery site with full capacity to recover from any major incidents. These systems are typically kept in a separate physical location on cold stand-by until they need to be brought into action. In this case, the backup and disaster site must be a mirrored image of production environment that replicates all resources and assets (for example, LDAP and databases), and with the same number of gateway instances. You should ensure that any required third-party systems are included in your backup and recovery solution.

Example approaches to keeping production and backup environments in sync include making backups to disk or tape, and sending these off-site at regular intervals, or cloud-based solutions that replicate on-site systems, and back up to off-site datacenters.

For details on backing up and restoring an Admin Node Manager in a highly available environment, see [Configure Admin Node Manager high availability](/docs/apigtw_admin/admin_node_mngr).

### Components that must be backed up

Whichever backup strategy you choose, in a production environment you must ensure that the gateway installations on all gateway host nodes are backed up on a regular basis. For example, this includes hosts that run the following components:

* API Gateway instance
* Admin Node Manager
* Node Manager
* API Manager
* API Gateway Analytics

You must also back up all databases and third-party systems used with the API Gateway. For example, this includes the following:

* Databases used by API Gateway and API Manager to store metrics (for example, MySQL, Oracle, MS SQL, or DB2)
* Apache Cassandra database used by API Gateway and API Manager for internal data storage.
* Shared disks used by embedded ActiveMQ to store JMS messages
* Any databases or third-party systems that the API Gateway connects to in External Connections

{{< alert title="Note" color="primary" >}}
You do not need to back up Policy Studio, Configuration Studio, or API Tester because these tools run in a temporary workspace when required. However, if you have modified any third-party dependencies on the **Preferences** page (for example, to connect to a specific database), you must also add the relevant `.jar` on the **Runtime Dependencies** page in your disaster recovery environment.{{< /alert >}}

### Back up API Gateway

Before starting the back up, you can remove the contents of the `apigateway/conf/opsdb.d` directory. This contains transient monitoring data, which can be quite large in some cases, and does not need to be backed up.

To back up the gateway installation, you must back up files that have changed in the following directory:

```
<install-dir>/apigateway
```

This backs up all Admin Node Manager, Node Manager, API Manager, and API Gateway instances in that installation.

For example, the following directories include API Gateway configuration, and will typically need to be backed up on a regular basis:

```
<install-dir>/apigateway/conf
<install-dir>/apigateway/groups
<install-dir>/apigateway/ext
<install-dir>/apigateway/system/conf/nodemanager.xml
```

### Back up before applying a service pack

A service pack requires a full backup of the gateway installation, to enable you to restore the previous installation.

For example, the following directories should always be backed up before applying a service pack:

```
<install-dir>/apigateway/conf
<install-dir>/apigateway/groups
<install-dir>/apigateway/samples
<install-dir>/apigateway/skel
<install-dir>/apigateway/system
<install-dir>/apigateway/platform (Win32 for Windows)
<install-dir>/apigateway/tools
<install-dir>/apigateway/upgrade
<install-dir>/apigateway/webapps
```

### Back up API Gateway Analytics

Similarly, to back up an API Gateway Analytics installation, you must back up files that have changed in the following directory:

```
<install-dir>\analytics
```

For example, the following directories include API Gateway Analytics configuration, and will typically need to be backed up on a regular basis:

    ```
    <install-dir>\analytics\conf
    <install-dir>\analytics\ext
    ```

    * This backs up the API Gateway Analytics installation only. You must also back up the metrics database separately. For more details, see the next section.

### Back up databases and third-party systems

You must back up all databases and third-party systems used with the gateway. For example, you can back a MySQL database by creating a dump file of the tables in use:

```
mysqldump -u root temp_backup > db_tables.dump
```

For more details, see the user documentation for your third-party system.

### Disaster recovery plan and tests

To ensure that your backup and disaster recovery processes are successful, you should conduct full restoration tests on a regular basis. You must ensure that you can restore all required files as quickly and easily as possible.

To ensure this, your backup and disaster recovery plan should include key metrics for recovery points and recovery times for your real-world business processes (for example, creating a purchase order, booking a reservation, and so on).

### Example of creating an API Gateway disaster recovery site

This simple example shows how to create a disaster recovery site from a backup of a gateway production deployment. It assumes that both the disaster recovery site and the primary production site have the same version of API Gateway installed. In this scenario, the disaster recovery site is a cold standby, and the configuration from production is replicated using a backup of production configuration.

**Back up the production environment**:

To back up the production environment, perform the following steps.

1. Browse to the directory where the API Gateway is installed (for example, `/opt/apigateway`).
2. Tar or zip the following:
    * `apigateway/groups`
    * `apigateway/conf`
    * `apigateway/system/conf/nodemanager.xml`
    * `apigateway/ext`

If you want the gateway and Node Manager to start up automatically on the new host, you should also include `/etc/init.d/vshell-*`.

This includes separate startup scripts files for the Node Manager and API Gateway instances if an `init.d` script was created using `managedomain` during initial setup.

You can create these at any time using `managedomain`, and choosing option `2`, Edit a host, for a Node Manager, or option `10`, Add script or service for an existing local API Gateway. For moredetails, see [Managedomain command reference](/docs/apigtw_admin/managedomain_ref).

For example, the following command creates a `.tar` file running from the root directory:

```
tar -cvf apigateway_backup.tar /opt/apigateway/conf /opt/apigateway/groups
/opt/apigateway/system/conf/nodemanager.xml
```

The following example creates a `.tar` file containing the startup scripts running from the root directory:

```
tar -cvf startup_scripts.tar /etc/init.d/vshell-*
```

**Copy to the disaster recovery site**:

To replicate to the disaster recovery site:

1. Ensure the files are tarred before copying because this preserves the permissions and ownership of the files.
2. Copy the created `.tar` file(s) from the primary production machine to the cold standby machine.
3. Extract the files so that they are extracted in the same directories, overwriting existing files if necessary. The following example extracts the files from the root directory:

    ```
    tar -C / -xvf apigateway_backup.tar
    ```

4. The following is optional:

    ```
    tar -C / -xvf startup_scripts.tar
    ```

5. When all the files are copied over and extracted successfully, you should be able to start the Admin Node Manager and API Gateway instances the same way as in primary production site running the same topology and configurations.

{{< alert title="Note" color="primary" >}}This example assumes that backups are collected on regular basis from the master node in the production site.{{< /alert >}}

### Further information

For details on how to back up and restore an Admin Node Manager for signing SSL certificates in an API Gateway domain, see [Configure Admin Node Manager high availability](/docs/apigtw_admin/admin_node_mngr).

For details on how to back and restore internal data stored in Apache Cassandra (for example, API Gateway KPS data or API Manager data), see the [Apache Cassandra backup and restore](/docs/cass_admin/cassandra_bur/).
