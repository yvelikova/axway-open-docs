{
"title": "Global configuration",
"linkTitle": "Global configuration",
"date": "2019-10-17",
"description": "For convenience, Policy Studio displays various global configuration options. For example, it includes libraries of users, X.509 certificates, and schemas that can be added globally and then referenced in filters and policies. This avoids the need to reconfigure details over and over again (for example, each time a schema or certificate is used)."
}
﻿

For convenience, Policy Studio displays various global configuration options. For example, it includes libraries of users, X.509 certificates, and schemas that can be added globally and then referenced in filters and policies. This avoids the need to reconfigure details over and over again (for example, each time a schema or certificate is used).

The following global configuration options are available in Policy Studio, each of which are discussed briefly in the sections below:

-   [API Gateway settings](#setting)
-   [Web service repository](#Web)
-   [API Gateway instances](#instanc)
-   [Policies](#Policies)
-   [Certificates and keys](#Certific)
-   [API Gateway user store](#user)
-   [System alerts](#System)
-   [External connections](#External)
-   [Caches](#Caches)
-   [Black list and White list](#Black)
-   [WSDL and XML schema document bundles](#WSDL)
-   [Scripts](#Scripts)
-   [Stylesheets](#Styleshe)
-   [References](#Referenc)

API Gateway settings
--------------------

You can configure the underlying configuration settings for API Gateway using the **Environment Configuration > Server Settings** node in the Policy Studio tree. This includes the following settings:

-   API Manager
-   General
-   Logging
-   Messaging
-   Monitoring
-   Security

For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

Web service repository
----------------------

The easiest way to secure a web service with API Gateway is to import the Web Services Description Language (WSDL) file for the service using Policy Studio. This creates a **Service Handler** for the web service, which is used to control and validate requests to the web service and responses from the web service.

The WSDL file is also added to the web service repository, making sure to update the URL of the web service to point at the machine on which API Gateway is running instead of that on which the web service is running. Consumers of the web service can then query API Gateway for the WSDL file for the web service. The consumer then knows to route messages to API Gateway instead of attempting to route directly to the web service, which most likely is not available on a public IP address.

The web service repository offers a very simple way of securing a web service with minimal impact on consumers of that service. Because of this, the web service repository should be used as the primary method of setting up policies within Policy Studio. For more information on using the repository to register a web service, see [Register and secure web services](general_ws_intro.htm).

API Gateway instances
---------------------

A single running instance of API Gateway enables you to configure at least two interfaces: one for public traffic, and a second for listening for and serving configuration data. The configuration interface should rarely need to be updated. However, you might need to add several HTTP interfaces. For example, an HTTP interface and an SSL-enabled HTTPS interface.

Furthermore, you can add features such as the following at the API Gateway instance level:

-   Remote hosts to control connection settings to a server
-   SMTP interfaces to configure email relay
-   File transfer services for FTP, FTPS, and SFTP
-   Policy execution schedulers to run policies at regular time intervals
-   JMS listeners to listen for JMS messages
-   Packet sniffers to inspect packets at the network level for logging and monitoring
-   FTP pollers to retrieve files to be processed by polling a remote file server
-   Directory scanners to scan messages dumped to the file system

Because API Gateway can read messages from HTTP, SMTP, FTP, JMS, or a directory, this enables it to perform protocol translation. For example, API Gateway can read a message from a JMS queue, and then route it on over HTTP to a web service. Similarly, API Gateway can read XML messages that have been put into a directory on the file system using FTP, and send them to a JMS messaging system, or route them over HTTP to a back-end system.

For more information on configuring API Gateway instances, see [Configure API Gateway instances](general_processes.htm).

Policies
--------

A policy is made up of a sequence of modular, reusable message filters, each of which processes the message in a particular way. There are many categories of filters available, including authentication, authorization, content filtering, routing, and many more. For example, a typical policy might contain an authentication filter, followed by several content-based filters (for example, Schema Validation, Threatening Content, Message Size, XML Complexity, and so on), and provided all configured filters run successfully, the message is routed on to the configured destination.

A policy can be thought of as a network of message filters. A message can traverse different paths through the network depending on what filters succeed or fail. This enables you to configure policies that, for example, route messages that pass one Schema Validation filter to one back-end system, and route messages that pass a different Schema Validation filter to a different system.

You can use *policy containers* to help manage your policies. These are typically used to group together a number of similar policies (for example, all authentication policies) or to act as an umbrella around several policies that relate to a particular policy (for example, all policies for the `getQuote` web service). A number of useful policies that ship with API Gateway are found in the **Policy Library** policy container. This container is prepopulated with policies to return various types of faults to the client and policies to block certain types of threatening content, among others. You can also add your own policies to this container, and create your own policy containers as necessary to suit your own requirements.

Certificates and keys
---------------------

API Gateway must be able to trust X.509 certificates to establish SSL connections with external servers, validate XML Signatures, encrypt XML segments for certain recipients, and for other such cryptographic operations. Similarly, a private key is required to carry out certain other cryptographic operations, such as message signing and decrypting data.

The **Certificate Store** contains all the certificates and keys that are considered to be trusted by the API Gateway. Certificates can be imported into or created by the certificate store. You can also assign a private key to the public key stored in a certificate, by importing the private key, or by generating one using the provided interface.

For more information on importing and creating certificates and keys, see [Manage X.509 certificates and keys](../CommonTopics/general_certificates.htm).

API Gateway user store
----------------------

Users are mainly used for authentication purposes in API Gateway. In this context, the **User Store** acts as a repository for user information against which users can be authenticated. You can also store user attributes for each user or user group. For example, you can then use these attributes when generating SAML attribute assertions on behalf of the user.

[Manage API Gateway users](../CommonTopics/general_users.htm) contains more details on how to create users, user groups, and attributes.

System alerts
-------------

API Gateway can send system alerts to various error reporting systems in the case of a policy error (for example, when a request is blocked by a policy). For more details on how to configure API Gateway to send these alerts, and for details of all of the alert destinations that you can configure, see [Configure system alerts](general_system_alerts.htm).

External connections
--------------------

API Gateway can leverage your existing identity management infrastructure and avoid maintaining separate silos of user information. For example, if you already have a database full of user credentials, API Gateway can authenticate requests against this database, rather than using its own internal user store. Similarly, API Gateway can authorize users, look up user attributes, and validate certificates against third-party identity management servers.

You can add each connection to an external system as a global **External Connection** in Policy Studio so that it can be reused across all filters and policies. For example, if you create a policy that authenticates users against an LDAP directory and then validates an XML signature by retrieving a public key from the same LDAP directory, it makes sense to create a global external connection for that LDAP directory. You can then select the LDAP connection in both the authentication and XML signature verification filters, rather than having to reconfigure it in both filters.

For example, you can use the external connections interface to configure global connections such as the following:

-   Authentication repository profiles
-   Database connections
-   ICAP servers
-   JMS services
-   Kerberos services
-   LDAP connections
-   Proxy servers
-   Radius clients
-   SiteMinder connections
-   TIBCO connections
-   Tivoli connections
-   XKMS connections

You can also use external connections to configure a group of related URLs. This is most useful to round-robin between a number of related URLs to ensure high availability. When API Gateway is configured to use a *URL Connection Set*
(instead of just a single URL), it round-robins between the URLs in the set.

For more information on configuring external connections and connection sets, see [External connections](general_external_connections.htm).

Caches
------

You can configure API Gateway to cache responses from a back-end web service. For example, if API Gateway receives two successive identical requests it can (if configured) take the response for this request from the cache instead of routing the request on to the web service and asking it to generate the response again.

As a result, excess traffic is diverted from the web service making it more responsive to requests for other services. API Gateway is saved the processing effort of routing identical requests unnecessarily to the web service, and the client benefits from the far shorter response time.

You can configure local caches for each running instance of API Gateway. If you have deployed multiple API Gateways throughout your network, you can configure a distributed cache where cache events on one cache are replicated across all others. For example, if a response message is cached at one instance of API Gateway, it is added to all other caches.

For more details on how to configure API Gateway to use local and distributed caches, see [Global caches](general_cache.htm).

Black list and White list
-------------------------

The **White list** is a global library of regular expressions that can be used across several different filters. For example, the **Validate HTTP Headers**, **Validate Query String**, and **Validate Message Attributes** filters all use regular expressions from the **White list** to ensure that various parts of the request contain expected content.

The **White list** is prepopulated with regular expressions that can be used to identify common data formats, such as alphanumeric characters, dates, email addresses, IP addresses, and so on. For example, if a particular HTTP header is expected to contain an email address, the **Email Address** expression from the library can be run against the HTTP header to ensure that it contains an email address as expected. This is yet another way that the API Gateway can ensure that only the correct data reaches the web service.

While the **White list** contains regular expressions to identify valid data, the **Black list** contains regular expressions that are used to identify common attack signatures. For example, this includes expressions to scan for SQL injection attacks, buffer overflow attacks, ASCII control characters, DTD entity expansion attacks, and many more.

You can run various parts of the request message against the regular expressions contained in the **Black list** library. For example, the HTTP headers, request query string, and message (MIME) parts can be scanned for SQL injection attacks by selecting the SQL-type expressions from the **Black list** .The **Threatening Content** filter also uses regular expressions from the **Black list**
to identify attack signatures in request messages.

For more details on running regular expressions, see the following filters in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
:

-   **Validate HTTP Headers**
-   **Validate Query String**
-   **Validate Message Attributes**
-   **Threatening Content**

WSDL and XML schema document bundles
------------------------------------

The WSDL documents and XML schemas that API Gateway can use to validate incoming requests against are stored in a global cache. The **Schema Validation** filter validates the format of an incoming message against a schema from the cache. This ensures that only messages of the correct format are processed by the target system.

In the Policy Studio navigation tree, you can access the global cache of WSDL documents or XML schema documents by selecting **Resources > WSDL Document Bundles** or **Resources > XML Schema Document Bundles**. Select a child node to view its contents. To add a schema, right-click the **XML Schema Document Bundles** node, and select **Add Schema**. For more details on adding XML schemas to the cache see [Manage WSDL and XML schema documents](general_schema_cache.htm).

When you have imported your XML schemas, see
[Schema validation](/csh?context=515&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
for instructions on how to validate XML messages against the schemas in the cache.

Scripts
-------

The **Scripts** library contains the JavaScript and Groovy scripts that API Gateway can use to interact with the message as it is processed. For example, you use these scripts with the **Scripting Filter** to get, set, and evaluate specific message attributes.

In the Policy Studio navigation tree, you can access the global scripts library by selecting **Resources > Scripts**. Select a child node to view or edit its contents. To add a script, right-click the **Scripts** node, and select **Add Script**.

Scripting language filter.

Stylesheets
-----------

The **Stylesheets**
library contains the XSLT style sheets that API Gateway can use to transform incoming request messages. The **XSLT Transformation**
filter enables you convert the contents of a message using these style sheets. For example, an incoming XML message that adheres to a specific XML schema can be converted to an XML message that adheres to a different schema before it is sent to the destination web service.

In the Policy Studio navigation tree, you can access the global style sheet library by selecting **Resources > Stylesheets**. Select a child node to view or edit its contents. To add a style sheet, right-click the **Stylesheets** node, and select **Add Stylesheet**.

For more details on using the **Stylesheet Library** dialog to add style sheets, and on configuring API Gateway to use XSLT style sheets, see
[Transform with XSLT](/csh?context=521&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
.

References
----------

References can occur between API Gateway configurations items (for example, a policy might include a reference to an external connection to a database). You can view references between configuration items in Policy Studio by right-clicking an item, and selecting **Show All References**. References are displayed in a tab at the bottom of the window.

The **Show All References** option is enabled only for items that have references to other items. For an example in a default API Gateway installation, right-click **Environment Configuration > External Connections > LDAP Connections > Sample Active Directory Connection**, and select **Show all References**. Showing all references is useful for impact analysis (for example, before upgrading or migrating), and is a general navigation aid.
