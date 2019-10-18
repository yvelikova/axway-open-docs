{
"title": "Manage settings",
"linkTitle": "Manage settings",
"weight":"99",
"date": "2019-10-14",
"description": "Configure the underlying settings for API Gateway using the **Server Settings** node in the Policy Studio tree."
}

You can configure the underlying settings for API Gateway using the **Server Settings** node in the Policy Studio tree. Alternatively, select the **Tasks > Manage Gateway Settings** menu option in the Policy Studio main menu.

This section describes the settings available in the **Server Settings** window. Click or expand a tree node on this window to configure the appropriate settings. You can confirm changes to these settings by clicking the **Save** button at the bottom right of each window.

API Manager settings
--------------------

The **API Manager**
settings enable you to configure the API management features that are available when Axway API Manager product is installed with API Gateway. For example, this includes settings for API Manager alerts, directory service, metrics, policies, quotas, and SMTP server.

For more details, see the
[API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
.

</div>

General settings
----------------

The top-level **General**
settings are applied to all instances of the API Gateway that use this configuration. For example, you can change the tracing level, various timeouts and cache sizes, and other such global information. For more details, see [General settings](../CommonTopics/general_settings.htm).

In addition, you can also configure the following settings under the **General**
node:

### Cache

If you have deployed several API Gateways throughout your network, you should configure a distributed cache. In a distributed cache, each cache is a peer in a group and needs to know where all the other peers in the group are located. The **Cache**
settings enable you to configure settings for peer listeners and peer discovery. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### MIME

API Gateway can filter Multipurpose Internet Mail Extensions (MIME) messages based on the content types (or MIME types) of the individual parts of the message.

The MIME settings list the default MIME types that API Gateway can filter on. These types are then used by the **Content Types**
filter to determine which MIME types to block or allow through to the back end Web service. For more details, see [MIME settings](general_mime_types.htm).

### Namespaces

The **Namespaces**
settings are used to determine the versions of SOAP, Web Services Security (WSSE) and Web Services Utility (WSU) that API Gateway supports. For more details, see [Namespace settings](general_namespaces.htm).

### HTTP session

The **HTTP Session**
settings enable you to configure HTTP session management settings for the selected cache. For example, you can configure the period of time before expired sessions are cleared from the default `HTTP Sessions`
cache. For more details, see [HTTP Session settings](general_session_settings.htm).

### Zero downtime

The Zero Downtime settings enable you to configure zero downtime deployment and shutdown settings. For more details, see [Zero downtime settings](general_zdd_settings.htm).

Logging settings
----------------

The **Logging**
settings enable you to configure the following:

### Transaction Audit Log

The **Transaction Audit Log**
settings enable you to configure the default message transaction logging behavior of API Gateway. For example, you can configure API Gateway to log to a database, text or XML file, local or remote Linux syslog, or the system console. For more details, see the topic on [Transaction audit log settings](log_global_settings.htm).

### Transaction Access Log

The **Transaction Access Log**
records a summary of all request and response messages that pass through API Gateway. For example, this includes details such as the remote hostname, username, date and time, first line of the request message, HTTP status code, and number of bytes. For details on configuring these settings per API Gateway, see [Transaction access log settings](log_access_settings.htm).

### Transaction Event Log

The **Transaction Event Log**
provides a summary of each API Gateway message transaction, which is written to a log file, and used to generate metrics for API Gateway monitoring. For example, this information can be displayed in API Gateway Analytics, in the **Monitoring**
view in
API Manager, or in third-party monitoring tools. For details on configuring these settings per API Gateway, see [Transaction event log settings](log_event_settings.htm).

Messaging settings
------------------

The **Messaging**
settings enable you to configure settings for the embedded Apache ActiveMQ server that is available in each API Gateway instance. For example, these include the listening interface, port, shared directory, and so on. For more details, see [Embedded ActiveMQ settings](general_activemq_settings.htm).

Monitoring settings
-------------------

The **Monitoring**
settings enable you to configure the following:

### Real Time Monitoring

The **Real Time Monitoring**
settings enable you to configure statistics about messages that API Gateway instances store in a local operations database. The API Gateway Manager monitoring tool can then poll this local database, and produce charts and graphs showing how API Gateway is performing. For more details, see [Real-time monitoring metrics](realtime_monitoring_setting.htm).

### Traffic Monitor

The **Traffic Monitor**
settings enable you to configure the web-based Traffic Monitor tool and its message traffic log. For example, you can configure where the data is stored and what message transaction details are recorded in the log. For more details, see [Traffic monitoring settings](traffic_monitor_settings.htm).

Security settings
-----------------

The **Security**
settings enable you to configure the following:

### Access Manager

The **Access Manager**
settings enable you to configure how the Sun Access Manager Policy Agents that are embedded in API Gateway's Sun Access Manager filters connect to Access Manager. You can also specify how and where these agents trace and log runtime information. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Security Service Module

You can configure API Gateway to act as an Oracle Security Service Module (SSM) to enable integration with Oracle Entitlements Server 10g. API Gateway acts as a Java SSM, which delegates to Oracle Entitlements Server 10g. For example, you can authenticate and authorize a user for a particular resource against an Oracle Entitlements Server 10g repository. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

{{< alert title="Note" color="primary" >}}Oracle SSM is required for integration with Oracle OES 10g only. Oracle SSM is not required for integration with Oracle OES 11g. {{< /alert >}}

### Kerberos

You can configure Kerberos settings such as the Kerberos configuration file to API Gateway, which contains information about the location of the Kerberos Key Distribution Center (KDC), encryption algorithms and keys, and domain realms.

You can also configure options for APIs used by the Kerberos system, such as the Generic Security Services (GSS) and Simple and Protected GSSAPI Negotiation (SPNEGO) APIs. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Tivoli

You can configure how API Gateway instance connects to an instance of an IBM Tivoli Access Manager server. Each API Gateway instance can connect to a single Tivoli server. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
