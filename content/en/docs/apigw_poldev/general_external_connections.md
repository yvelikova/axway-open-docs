{
"title": "External connections",
"linkTitle": "External connections",
"date": "2019-10-17",
"description": "API Gateway can leverage your existing Identity Management infrastructure, thus avoiding the need to maintain separate silos of user information. For example, if you already have a database full of user credentials, API Gateway can authenticate requests against this database, rather than using its own internal user store. Similarly, API Gateway can authorize users, look up user attributes, and validate certificates against third-party Identity Management servers."
}
﻿

API Gateway can leverage your existing Identity Management infrastructure, thus avoiding the need to maintain separate silos of user information. For example, if you already have a database full of user credentials, API Gateway can authenticate requests against this database, rather than using its own internal user store. Similarly, API Gateway can authorize users, look up user attributes, and validate certificates against third-party Identity Management servers.

You can add a connection to an external system as a global *external connection* in Policy Studio so that it can be reused across all filters and policies. For example, if you create a policy that authenticates users against an LDAP directory, and then validates an XML signature by retrieving a public key from the same LDAP directory, it makes sense to create a global external connection for that LDAP directory. You can then *select* the LDAP connection in both the authentication and XML signature verification filters, rather than having to reconfigure them in both filters.

You can also use external connections to configure a group of related URLs. This allows you to round-robin between a number of related URLs to ensure high availability. When API Gateway is configured to use a *URL connection set*
(instead of a single URL), it round-robins between the URLs in the set.

To configure external connections, right-click the appropriate node in Policy Studio tree (for example, **Environment Configuration > External Connections > Database Connections**). This topic introduces the different types of external connection and shows where to obtain more details.

Authentication repository profiles
----------------------------------

API Gateway can authenticate users against external databases and LDAP repositories, in addition to its own local user store. You can also use a number of bespoke authentication connectors to enable API Gateway to authenticate against specific third-party Identity Management products.

Connection details for these authentication repositories are configured at a global level, making them available for use across authentication (and authorization) filters. This saves the administrator from reconfiguring connection details in each filter.

For example, the available authentication repository types include the following:

-   CA SiteMinder Repositories
-   Database Repositories
-   Entrust GetAccess Repositories
-   LDAP Repositories
-   Local Repositories (for example, Local User Store)
-   Oracle Access Manager Repositories
-   Oracle Entitlements Server Repositories
-   RADIUS Repositories (deprecated)
-   RSA Access Manager Repositories
-   Tivoli Repositories
-   Sun Access Manager Repositories (deprecated)

For details on how to configure the various authentication repository types, see [Configure authentication repositories](common_user_store.htm).

Connection sets
---------------

Connection sets are used by API Gateway to round-robin between groups of external servers (for example, RSA Access Manager). You can reuse these global groups when configuring connections to external servers in Policy Studio. For this reason, connection sets are available under the **External Connections** node according to the filter from which they are available. For example, connection sets under the **RSA Access Manager Connection Sets** node are available in the **RSA Access Manager** filter.

At runtime, API Gateway can round-robin between the servers in the group to ensure that if one of the servers becomes unavailable, API Gateway can use one of the other servers in the group.

To add a connection set for a particular category of filters, right-click the appropriate node under the **Connection Sets** node under the **External Connections** node. Select **Add a Connection Set** to display the **Connection Group**
dialog. For more details, see [Configure connection groups](common_connection_groups.htm).

Client credentials
------------------

Client credentials allow you to configure client authentication settings at a global level. You can configure a client credential profile for the following authentication options:

-   API keys as a client
-   HTTP basic
-   Kerberos
-   OAuth 2.0 as a client

After configuring a client credential profile globally, you can select that profile for use at the filter level (for example, in the **Connection** or **Connect To URL** filters).

To add a client credential profile for a particular authentication mechanism, right-click the appropriate node under the **Client Credentials** node under the **External Connections** node. For more details, see [Configure client credentials](common_client_credentials.htm).

Database connections
--------------------

API Gateway typically connects to databases to authenticate or authorize users using API Gateway's numerous Authentication and Authorization filters. Similarly, API Gateway can retrieve user attributes from a database (for example, which can then be used to generate SAML attribute assertions later in the policy).

You can configure database connections globally under the **External Connections** node, making them available to the various filters that require a database connection. This means that an administrator can reuse the same database connection details across multiple authentication, authorization, and attribute-based filters.

API Gateway maintains a JDBC pool of database connections to avoid the overhead of setting up and tearing down connections to service simultaneous requests. This pool is implemented using *Jakarta DBCP (Database Connection Pools)*. The settings in the **Advanced** section of the **Configure Database Connection** dialog are used internally by API Gateway to initialize the connection pool. The table at the end of this section shows how the fields correspond to specific configuration DBCP settings.

To configure details for a global database connection, right-click the **External Connections > Database Connections** node. Select the **Add a Database Connection** menu option, and configure the fields on the **Configure Database Connection** dialog. For details on configuring these fields, see [Configure database connections](common_db_conf.htm).

ICAP servers
------------

The Internet Content Adaptation Protocol (ICAP) is a lightweight HTTP-based protocol used to optimize proxy servers, which frees up resources and standardizes how features are implemented. For example, ICAP is typically used to implement features such as virus scanning, content filtering, ad insertion, or language translation in the HTTP proxy cache.

When an ICAP Server is configured under the **External Connections** node, you can then select it in multiple ICAP filters. For details on how to configure an ICAP server, see [Configure ICAP servers](common_icap_conf.htm).

Sentinel servers
----------------

You can send events from API Gateway to Axway Sentinel. When a Sentinel server is configured under the **External Connections**
node, you can then select it in multiple Sentinel monitoring filters. For details on how to configure a Sentinel server, see [Configure Sentinel servers](common_sentinel.htm).

JMS services
------------

The Java Message Service (JMS) is a Java message-oriented middleware API for sending messages between two or more clients. When a JMS Service is configured under the **External Connections** node, it is available for selection in multiple JMS-related configuration screens. This enables you to share JMS configuration across multiple filters.

For more details on configuring JMS services, see [Configure messaging services](general_messaging.htm).

Kerberos connections
--------------------

You can configure global **Kerberos Clients**, **Kerberos Services**, and **Kerberos Principals**
under the **External Connections** node. When a Kerberos item is configured, it is available for selection in all Kerberos-related configuration screens that require this item. This enables you to share Kerberos configuration items across multiple filters.

For more details, see the following topics:

-   [Configure Kerberos clients](kerberos_client.htm)
-   [Configure Kerberos services](kerberos_service.htm)
-   [Configure Kerberos principals](kerberos_principal.htm)

See also the
[API Gateway Kerberos Integration Guide](/bundle/APIGateway_77_IntegrationKerberos_allOS_en_HTML5)
.

LDAP connections
----------------

In the same way that database connections can be configured globally in Policy Studio (and then reused across individual filters), LDAP connections are also managed globally in Policy Studio. LDAP connections are used by authentication, authorization, and attribute filters. Filters that require a public key (from a public-private key pair) can also retrieve the key from an LDAP source.

When a filter that uses an LDAP directory is run for the first time, it binds to the LDAP directory using the connection details configured on the **Configure LDAP Server** dialog. Usually the connection details include the user name and password of an administrator user who has read access to all users in the LDAP directory for whom you wish to retrieve attributes or authenticate.

For details on how to configure a global LDAP connection, see [Configure LDAP directories](common_ldap_conf.htm).

Proxy servers
-------------

You can configure proxy servers under the **External Connections** node, which can then be specified in the **Connection** and **Connect To URL** filters. When configured, the filter connects to the proxy server, which routes the message to the destination server.

To configure a proxy server, click the **External Connections** node, and select **Proxy Servers > Add a Proxy Server**. For details on how to configure the settings the **Proxy Server Settings** dialog, see [Configure proxy servers](common_proxy_server.htm).

RADIUS clients
--------------

{{< alert title="Note" color="primary" >}}This feature has been deprecated and will be removed in a future release.{{< /alert >}}

The Remote Authentication Dial In User Service (RADIUS) protocol provides centralized authentication and authorization for clients connecting to remote services.

To configure a client connection to a remote server over the RADIUS protocol, click the **External Connections** node, and select **RADIUS Clients > Add a RADIUS Client**. For details on how to configure the settings the **RADIUS Client** dialog, see the [Configure RADIUS clients](common_radius_client.htm).

For details on how to configure a RADIUS Authentication Repository, see [Configure authentication repositories](common_user_store.htm).

SiteMinder and SOA Security Manager
-----------------------------------

To add a CA SiteMinder or CA SOA Security Manager connection, right-click the **SiteMinder/SOA Security Manager** node under the **External Connections** node, and select **Add a SiteMinder Connection** to display the **SiteMinder Connection Details** dialog. For details on configuring the fields on this dialog, see [Configure SiteMinder/SOA Security Manager connections](connector_ca_connection.htm).

SMTP servers
------------

You can configure a Simple Mail Transfer Protocol (SMTP) server as a global configuration item under the **External Connections** node. The **SMTP** filter in the **Routing** category can then reference this SMTP server. To configure an SMTP server, right-click the **External Connections > SMTP Servers** node, and select **Add an SMTP Server**. For more details, see [Configure SMTP servers](common_smtp_server.htm).

Syslog servers
--------------

You can configure syslog servers globally, and then select them as a customized logging destination for an API Gateway instance. Right-click the **External Connections > Syslog Servers** node, and select **Add a Syslog Server**. Complete the following fields on the **Syslog Server** dialog:

**Name**:\
Enter an appropriate name for the syslog server.

**Host**:\
Enter the host and UDP port on which the syslog daemon is running. Enter in the format of `HOST_OR_IP_ADDRESS:UDP_PORT` (for example, `192.0.2.0:514`). Alternatively, you can enter `HOST_OR_IP_ADDRESS` only, and the default port of `514` is used.

**Facility**:\
Select the syslog facility to log to (for example, `local0`).

{{< alert title="Note" color="primary" >}}For details on how to configure the API Gateway instance to enable logging to this remote syslog server, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.{{< /alert >}}

TIBCO
-----

You can add a connection to TIBCO Rendezvous daemon. To add a connection, right-click the **External Connections > TIBCO Rendezvous Daemon** node in the tree, and select **Add a TIBCO Rendezvous Daemon**. For details on configuring the fields on the dialog, see [Configure TIBCO Rendezvous daemons](connector_rendezvous_daemon.htm).

Tivoli
------

You can create a connection to an IBM Tivoli server to enable integration between the API Gateway and Tivoli Access Manager for e-business 6.1. Tivoli connections can then be used by API Gateway's Tivoli filter to delegate authentication and authorization decisions to Tivoli Access Manager, and to leverage existing Tivoli Access Manager policies.

To add a Tivoli connection, right-click the **External Connections > Tivoli Connections** node in the tree, and select **Add a Tivoli Connection**. For more details on configuring the fields on the **Tivoli Configuration** dialog, see [Configure Tivoli connections](connector_tivoli_connection.htm).

URL connection sets
-------------------

URL connection sets are used by API Gateway filters to round-robin between groups of external servers (for example, Entrust GetAccess, SAML PDP, or XKMS). These global groups can then be reused when configuring these filters in Policy Studio. For this reason, URL connection sets are available under the **External Connections**
node in the tree, according to the filters from which they are available. For example, URL sets under the **XKMS URL Sets** node are only available from the **XKMS Certificate Validation** filter.

At runtime, API Gateway can round-robin between the servers in the group to ensure that if one of the servers becomes unavailable, API Gateway can use one of the other servers in the group.

To add a URL connection set for a particular category of filters, right-click the appropriate node under the **External Connections > URL Connection Sets** node in the tree. Select the **Add a URL Set** option to display the **URL Group** dialog. For more details, see [Configure URL groups](common_url_groups.htm).

XKMS connections
----------------

API Gateway can also validate certificates against an XKMS (XML Key Management Service) responder or group of responders. An XKMS consists of a group of XKMS responders to validate certificates against, coupled with the signing key to use for signing requests to each of the responders in the group.

To add a global XKMS connection, right-click the **External Connections > XKMS Connection** node in the tree, and select the **Add an XKMS Connection** option to display the **Certificate Validation - XKMS** dialog. For more details, see [Configure XKMS connections](certificate_xkms_connection.htm).

All global XKMS Connections are available for selection when configuring the **Certificate Validation - XKMS**
filter. This saves the administrator from reconfiguring XKMS connection details across multiple filters.
