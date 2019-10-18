{
"title": "TIBCO Enterprise Message Service Connection",
"linkTitle": "TIBCO Enterprise Message Service Connection",
"date": "2019-10-17",
"description": "TIBCO Enterprise Message Service™\\n(EMS) provides a distributed message bus with support for JMS (Java Messaging Service) and TIBCO Rendezvous, along with other protocols."
}
<div id="p_connector_ems_connection_overview">

Overview
--------

TIBCO Enterprise Message Service™
(EMS) provides a distributed message bus with support for JMS (Java Messaging Service) and TIBCO Rendezvous, along with other protocols.

In general, TIBCO EMS clients *produce*
messages and send them to the TIBCO EMS Server. Similarly, TIBCO EMS clients can connect to the TIBCO EMS Server and declare an interest in a particular queue or topic on that server. In doing so, it can *consume*
messages that have been produced by another TIBCO EMS client.

The API Gateway can act as a message producer by sending messages to theTIBCO EMS Server and as a message consumer by listening on a queue or topic at the server. Both configurations require a connection to the TIBCO EMS Server.

XXX

[XXX](connector_ems_consumer.htm)

[XXX](connector_ems_filter.htm)

This topic describes how to configure a connection to an TIBCO EMS Server. For more detailed information on configuring TIBCO EMS Connections, see the TIBCO EMS documentation.

</div>

<div id="p_connector_ems_connection_conf">

Configuration
-------------

The TIBCO EMS Connection is configured globally so that it can be referenced when configuring TIBCO EMS consumers and TIBCO EMS producers in the API Gateway. To configure a global connection to an TIBCO EMS Server, right-click the **External Connections**
>**TIBCO Enterprise Message Service Connections**
node in the Policy Studio tree, and select **Add a TIBCO EMS Connection**
from the context menu. The remainder of this topic describes how to configure the tabs and fields on the **TIBCO Enterprise Messaging System Connection**
dialog.

Before configuring the following fields you must enter a name for this TIBCO EMS Connection in the **Name**
field. This connection is then available when configuring a TIBCO EMS Consumer and when configuring a TIBCO EMS Routing filter.

***General Tab:***\
The following fields are available on the **General Tab**
:

**Server URL**
:\
Enter the full URL of the TIBCO EMS Server in this field, for example`tcp://hostname:7222`
for non-SSL connections or `ssl://server:7243`
for SSL-enabled TIBCO EMS Servers.

**User Name**
:\
Enter a username to use when the API Gateway connects to the TIBCO EMS Server.

**Password**
:\
Enter the password for this user.

***SSL Tab:***\
The following tabs and fields are available on the **SSL Tab**
:

**Limit the use of SSL to improve performance**
:\
If this option is selected, SSL is only used for establishing (mutual) authentication with the TIBCO EMS Server, which takes place during the initial SSL handshaking process. When the channel is set up, data sent over this channel is sent in the clear and is not encrypted like in a typical SSL session.

**Enable client verification of the host certificate or host name**
:\
Select this option if you want to compare the Common Name (`cn`
) X.509 attribute of the Distinguished Name in the TIBCO EMS Server's certificate. Typically, the SSL handshake requires that the common name in the host's certificate matches the name of the host machine. For example, to trust the certificate associated with the `www.abc.com site`
, the certificate must have the common name attribute set to this name (`cn=www.abc.com`
). If you wish to perform this check on the TIBCO EMS Server's certificate presented to the API Gateway during SSL setup, select this setting.

**Expected Host Name**
:\
In cases where the common name in the certificate is *not*
the same as the host machine, you can override the default validation by specifying a host name that you expect instead of the host given in the common name of the server's certificate.

For example, a generic TIBCO EMS Server certificate is issued for testing purposes, and this certificate is created with a common name of `server`
(`cn=server`
). Now, assume that you want to create an SSL session with a TIBCO EMS Server running on a machine that is called `host`
.

The default client verification of the host name setting checks to make sure that the host on which the TIBCO EMS Server is running is called `server`
because this is what is in the common name of the certificate. However, the host name of this machine is `host`
, and so this check fails.

In such cases, you must override the default host checking behavior by specifying the *expected*
host name in this field. In this case, enter `host`
in the **Expected Host Name**
field.

**Cipher suites to be used**
:\
Specify the OpenSSL cipher suites that the API Gateway supports. Theciphers are negotiated during the SSL handshake with the TIBCO EMS Server so that the strongest and most secure ciphers that are common to both parties are used.

***Trusted Certificates Tab:***\
You can select the CA (Certificate Authority) certificates that you consider trusted for setting up the connection to the TIBCO EMS Server on this tab.

The TIBCO EMS Server's certificate can be explicitly trusted by importing it into the Certificate Store and selecting it in the list.Alternatively, in a solution more typical for a Public Key Infrastructure, the CA certificate that issued the TIBCO EMS Server's certificate is imported into the Certificate Store and is selected in the list. In this case, a chain of trust is established because all certificates issued bythe CA are implicitly trusted if the CA is considered trusted.

***Client Identity Tab:***\
If you want to configure mutual authentication to the TIBCO EMS Server you must select a client certificate from the list that the API Gateway can use to authenticate to the TIBCO EMS Server. For the SSL channel to be established successfully, the TIBCO EMS Server must trust the client certificate selected here.

{{< alert title="Note" color="primary" >}}If the selected client certificate has been issued by a CA (it is not self-signed), the certificate of this CA *must*
be imported into the TrustedCertificate Store. If a chain of certificates exists (for example, the client certificate was issued by an intermediary CA, which was issued by the root CA), all intermediary CA certificates must be imported into the Certificate Store. {{< /alert >}}

</div>
