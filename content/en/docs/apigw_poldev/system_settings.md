{
"title": "System Settings",
"linkTitle": "System Settings",
"date": "2019-10-17",
"description": "The **System Settings**\\ndialog can be used to configureglobal system settings for the API Gateway process."
}
<div id="p_system_settings_overview">

Overview
--------

The **System Settings**
dialog can be used to configureglobal system settings for the API Gateway process.

</div>

<div id="p_system_settings_conf">

Configuration
-------------

The following configuration settings are available:

**realm**
:\
The realm that is used for authentication.

**dateFormat**
:\
Formats a Date in the format "mm.dd.yyyy HH:mm:ss,SSS", for example, "02.25.2006 15:49:37,459".

**homedir**
:\
The installation directory of the product.

**tracelevel**
:\
The level to trace at.

**connections**
:\
The number of parallel connections that can be opened to the API Gateway.The default number of connections is 32.

**ldapServiceProvider**
:\
This denotes the service provider used for looking up an LDAP server,for example, com.sun.jndi.ldap.LdapCtxFactory

**sunLdapConnectTimeout**
:\
This is the timeout in milliseconds for the LDAP connection. If a connection has not been created within this timeframe the operation will fail with a timeout. Similarly if a lookup operation has not succeeded within this timeframe, it will fail. If this is not configured, or set to zero, the TCP timeout for the platform is used, (defaults to 3 minutes).

**dimeMaxChunkSize**
:\
The max chunk size for DIME messages.

**samlUsernamePasswordFormat**
:\
Map internal "Username" format names to this SAML type format.

**samlUnspecifiedFormat**
:\
Map internal "Unspecified" format names to this SAML type format.

**validateDtdInMessage**
:\
Use the 'validateDtdInMessage' to control DTD-validation. Possible settings are:

-   *block*\
    The default is 'block' as DTDs can contain macros that expand to extremely large data-structures that can exhaust the memory of the server.

-   *ignore*\
    Set to 'ignore' if you wish the server to ignore the presence of DTDs in messages.

-   *validate*\
    Setting the parameter to 'validate' will instruct the server to evaluate the message's well-formedness against the DTD.

**tokenDriftTimeSecs**
:\
The number of seconds drift allowed for WS-Security tokens

**schemaParserMaxPoolSize**
:\
The size of the pool of SAX Parsers used to validate schemas.

**setuid**
:\
The UNIX user id that the API Gateway process will run under.

**reportTimeout**
:\
When a user is logged into the reporting server, their session will timeout after remaining idle for this period.

**externalDataCacheRefreshIntervalSecs**
:\
This setting configures the number of seconds that the server will cachedata loaded from an external source (e.g. database, LDAP directory) before refreshing the data from the source. The default value is 5 seconds.

</div>
