{
"title": "Configure HTTP services",
"linkTitle": "Configure HTTP services",
"date": "2019-10-17",
"description": "This topic describes the function and configuration of the following HTTP services:"
}
﻿

This topic describes the function and configuration of the following HTTP services:

-   [HTTP services groups](#HTTP2)
-   [HTTP and HTTPS interfaces](#HTTP)
-   [Management services](#Manageme)

API Gateway uses *HTTP services* to handle traffic from various HTTP-based sources. The available HTTP services are as follows:

-   **HTTP interfaces**: *HTTP interfaces* define the ports and IP addresses on which API Gateway listens for incoming requests. You can also add *HTTPS interfaces* to specify SSL certificates to authenticate to clients, and certificates considered trusted for establishing SSL connections with clients. See [HTTP and HTTPS interfaces](#HTTP)
-   **Relative path**: You can configure *relative paths* so that when a request is received on a specific path, API Gateway can map it to a specific policy, or chain of policies. For more details, see [Configure relative paths](general_relative_path.htm).
-   **Static content provider**: You can use a *static content provider* to serve static HTTP content from a particular directory. In this case, API Gateway is effectively acting as a web server. For more details, see [Static content providers](general_relative_path.htm#Static).
-   **Servlet applications**: API Gateway can act as a servlet container, which enables you to drop servlets into the HTTP services configuration. This should only be used by developers with very specific requirements and under strict advice from the Axway Support. For more details, see [Servlet applications](general_relative_path.htm#Servlet).
-   **Packet sniffer**: You can add a *packet sniffer* to intercept network packets from the client, assemble them into complete HTTP messages, and log these messages to an audit trail. Because the packet sniffer operates at the network layer (unlike an HTTP-based traffic monitor at the application layer), the packets are intercepted transparently to the client. This means that the packet sniffer is a *passive service*, which is typically used for management and monitoring instead of general policy enforcement. For more details, see [Packet sniffers](general_pcap.htm).

HTTP services groups
--------------------

An *HTTP services group* is a container around one or more HTTP services. Usually, an HTTP services group is configured for a particular type of HTTP service. For example, you could have an **HTTP Interfaces** group that contains the configured HTTP interfaces, and another **Static Providers** group to manage static content providers. While organizing HTTP services by type eases the task of managing services, API Gateway is flexible enough to enable administrators to organize services into groups according to whatever scheme best suits their requirements.

This section describes a scenario where HTTP services groups can prove useful, and how to use separate services groups to process, for example, SSL traffic on a different channel.

### HTTP interfaces and relative paths

An HTTP services group must have at least one HTTP interface together with at least one relative path. The HTTP interface determines which TCP port API Gateway listens on, and the relative path maps a request received on a particular path (request URI) to specific policies. You can add several HTTP interfaces to a group, in which case requests received on any one of the opened ports are processed in the same manner. For example, `http://<HOST>:8080/test` and `http://<HOST>:8081/test` requests can both be processed by the same policy (mapped to the `/test` relative path).

You can also add multiple relative paths to a HTTP services group, where each path is bound to a specific policy or chain of policies. For example, if a request is made to `http://<HOST>:8080/a`, it is processed by Policy A. If a request is made to `http://<HOST>:8080/b`, it is handled by Policy B. Requests made to the other interface are also processed by the same policy, meaning that a request made to `http://<HOST>:8081/b` is also handled by Policy B.

This means that relative paths configured under a HTTP services group are bound to all HTTP interfaces configured for that group. If you have two interfaces listening on ports `8080` and `8081`, API Gateway handles requests to `http://<HOST>:8080/a` and `http://<HOST>:8081/a` identically.

### Example configuration

In this example configuration, a SSL validation policy is added to process requests to `http://<HOST>:443/a`, while the existing Schema Validation policy continues to handle requests for `http://<HOST>:8080/a`. To distinguish between receiving requests on the two different ports, a new `SSL HTTP Services Group` is added alongside the existing `HTTP Services Group`. The new
group opens a single HTTPS interface that listens on the SSL port `443`, and is configured with a relative path of `/a` to handle requests on this path:

| Service Group             | HTTP Port | Relative Path | Policy                   |
|---------------------------|-----------|---------------|--------------------------|
| `HTTP Services Group`     | `8080`    | `/a`          | Schema Validation Policy |
| `SSL HTTP Services Group` | `443`     | `/a`          | SSL Validation Policy    |

Using HTTP services groups in this way, you can configure API Gateway to dispatch requests received on the same path (for example, `/a`) to different policies depending on the port where the request was accepted.

### Default HTTP services groups

By default, API Gateway ships with preconfigured HTTP services groups (for example, **Default Services** and **Sample Services**). These groups contain some generic default policies you can use with an out-of-the-box installation of API Gateway.

In addition to the preconfigured services groups, you can add new HTTP services groups to dispatch requests to different policies based on the port on which the requests are received.

For details on the default service group used by the Admin Node Manager and API Gateway Analytics, see [Management services](#Manageme).

### Add an HTTP services group

1.  In Policy Studio, click **Environment Configuration > Listeners**.
2.  Right-click **API Gateway**, and select **Add HTTP Services**.
3.  Enter a name for the group.
4.  By default, Cross Origin Resource Sharing (CORS) is disabled because no profile is selected. To enable CORS for the HTTP services group, on the **CORS** tab, select a preconfigured CORS profile. If no profiles have already been configured, right-click **CORS Profiles**, and select **Add a CORS Profile**. To edit an existing profile, right-click the profile and select **Edit**. For details on CORS settings, see [Add a CORS profile](general_cors.htm#Add).
5.  For more details on CORS, see [Cross-Origin Resource Sharing](general_cors.htm).

When you have created an HTTP services group, you can configure it with the HTTP services described in this topic.

HTTP and HTTPS interfaces
-------------------------

An HTTP interface defines the address and port that API Gateway listens on. There are two types of interface: HTTP and HTTPS. The HTTP interface handles standard, non-authenticated HTTP requests, while the HTTPS interface can accept mutually authenticated SSL connections.

Before you can configure an interface, you must first configure a HTTP services group. See [HTTP services groups](#HTTP2).

### Add HTTP or HTTPS interface

To create an HTTP interface, in Policy Studio tree, click **Environment Configuration > Listeners > API Gateway**, select the HTTP services group (for example, **Default Services**), right-click the **Ports** node, and select **Add HTTP**or **Add HTTPS**.

#### Configure Network settings

The following fields on the **Network** tab are common to both HTTP and HTTPS interfaces and must be configured:

-   **Port**: The port number that API Gateway listens on for incoming HTTP requests.
-   **Address**: The IP address or host of the network interface on which instance listens.
-   For example, you can configure the instance to listen on port `80` on the external IP address of a machine, while having a web server running on the same port but on the internal IP address of the same machine. By entering `*`, the instance listens on all interfaces available on the machine hosting API Gateway.
-   **Protocol**: Select the Internet Protocol version (IPv) that this interface uses. You can select `IPv4`, `IPv6`, or both of these protocol versions. The default is `IPv4`.
-   **Trace level**: The level of trace output. The possible values in order of least verbose to most verbose output are:
-   -   `FATAL`
    -   `ERROR`
    -   `INFO`
    -   `DEBUG`
    -   `DATA`

    The default trace level is read from the system settings.

-   **Enable interface**: This setting is enabled by default. If you want to disable the HTTP interface, deselect this setting.

#### Configure Traffic Monitor settings

The fields on the **Traffic Monitor** tab are common to both HTTP and HTTPS interfaces. To override the system-level settings at HTTP or HTTPS interface level, select **Override settings for this port**, and configure the relevant options. For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

#### Configure Advanced settings

The following fields on the **Advanced**
tab are common to both HTTP and HTTPS interfaces and must be configured:

-   **Backlog**: When API Gateway is busy handling concurrent requests, the operating system can accept additional incoming connections. In such cases, a backlog of connections can build up while the operating system waits for the instance to finish handling current requests. The specified value is the maximum number of connections API Gateway instance allows the operating system to accept and queue up until the instance is ready to read them. The larger the backlog, the larger the memory usage. The smaller the backlog, the greater the potential for dropped connections.
-   **Idle Timeout**: API Gateway supports the use of HTTP 1.1 persistent connections. Typically, a client informs API Gateway that it wants to use a persistent connection. API Gateway acknowledges this and keeps the connection open for a certain time after sending the response to the client. If the client does not reuse the connection by sending up another request within the timeout period, API Gateway closes the connection. The **Idle Timeout** value is the time (in milliseconds) that API Gateway waits after sending a response over a persistent connection before closing the connection. The default value is 60000 milliseconds (60 seconds).
-   **Active Timeout**: When API Gateway receives a large HTTP request, it reads the request off the network as it becomes available. If the time between reading successive blocks of data exceeds the **Active Timeout** value, API Gateway closes the connection. For example, if the client loses network connection while sending the data, instead of being tied to the transaction for a long time, API Gateway first reads all the available data off the network and then waits the **Active Timeout** period before closing the connection. The default value is 60000 milliseconds (60 seconds).
-   **Maximum Memory per Request**: The maximum amount of memory in bytes that API Gateway allocates to each request. For more details, see the
    [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
    .
-   **Input Encodings**: The HTTP content encodings that API Gateway can accept from peers. By default, the content encodings configured in the **Default Settings** are used. You can override this setting at the HTTP interface level and in the **Remote Host Settings**. For more details, see [Compressed content encoding](common_compress_encoding.htm).
-   **Output Encodings**: The HTTP content encodings that API Gateway can apply to outgoing messages. By default, the content encodings configured in the **Default Settings** are used. You can override this setting at the HTTP interface level and in the **Remote Host Settings**. For more details, see [Compressed content encoding](common_compress_encoding.htm).
-   **Transparent Proxy - allow bind to foreign address**: This enables you to use API Gateway as a *transparent proxy* on Linux systems with the `TPROXY` kernel option set. When selected, the value in the **Address** field can specify any IP address, and API Gateway handles incoming traffic for the configured address/port combinations. For more details and an example, see [Configure a transparent proxy](common_transparent_proxy.htm).
-   **Include correlation ID in headers**: This specifies whether to insert the correlation ID (for example, `Id-54bbc74f515d52d71a4c0000`) in outbound messages. For the HTTP transport, this means that an `X-CorrelationID` header is added to the outbound message. This is a transaction ID that is tagged to each message transaction that passes through API Gateway. You can use the correlation ID to search for messages when monitoring traffic in the API Gateway Manager web console. You can also access the its value using the `id` message attribute in an API Gateway policy. This setting is selected by default.
-   **Threat Protection Settings**: This specifies the **Threat Protection Profile** that is used to protect this interface with Apache ModSecurity threat protection rules. ModSecurity is a toolkit for real-time HTTP traffic monitoring, logging, and access control, which helps to mitigate application-level threats to APIs. The ModSecurity engine is embedded in API Gateway to provide API firewalling. If no threat protection profiles have been configured, right-click the **Threat Protection Profiles** node in the dialog, and select **Add a Threat Protection Profile**. For more details, see
    [Manage API firewalling](/csh?context=104&product=prod-api-gateway-77)
    in the
    [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
    .

### Configure HTTPS-specific settings

The following settings apply only to HTTPS interfaces and are not visible when creating a HTTP interface.

#### Network settings

In addition to the fields configured for an HTTP interface on the **Network** tab, you must configure the following setting:

-   **X.509 Certificate**: Click this button to select the certificate that API Gateway uses to authenticate itself to clients during the SSL handshake. The list of certificates currently stored in the API Gateway certificate store is displayed. Select a single certificate from this list. For more details, see [Manage X.509 certificates and keys](../CommonTopics/general_certificates.htm).

#### Mutual Authentication settings

-   **Client Certificates**: Define how clients can authenticate to API Gateway on the **Mutual Authentication** tab. Choose from the following:
    -   **Ignore Client Certificates**: API Gateway ignores client certificates if they are presented during the SSL handshake.
    -   **Accept Client Certificates**: API Gateway accepts client certificates when presented, but clients that do not present certificates are not rejected.
    -   **Require Client Certificates**: API Gateway only accepts connections from clients that present a certificate during the SSL handshake.
-   **Maximum depth of client certificate chain**: Specify how many CA certificates in a chain of one or more are trusted when validating the client certificate. By default, only one issuing CA certificate is used, and this certificate must be checked in the list of trusted root certificates. If more than one certificate is used, only the top-level CA must be considered trusted, while the intermediate CA certificates are not.\
-   Client certificates are typically issued by a Certificate Authority (CA). In most cases, the CA includes a copy of its certificate in the client certificate so that consumers of the certificate can decide whether or not to trust the client based on the issuer of the certificate.\
    A *chain* of CAs can also issue the client certificate. For example, a top-level organization-wide CA (for example, Company CA) may have issued department-wide CAs (for example, Sales CA, QA CA, and so on), and each department CA is then responsible for issuing all department members with a client certificate. In such cases, the client certificate may contain a chain of one or more CA certificates.
-   **Root Certificate Authorities trusted for mutual authentication**: Select the root CA certificates that API Gateway considers trusted when authenticating clients during the SSL handshake. Only certificates signed by the CAs selected here are accepted.

### Configure Advanced SSL settings

You can configure the followingon the **Advanced (SSL)** tab:

-   **Check that the SSL certificate's Subject CN resolves to network address**: When this setting is selected, API Gateway attempts to resolve the SSL certificate's `Subject` Common Name (CN) to the network address configuring the SSL interface. If API Gateway cannot resolve the `Subject` CN to the network address, it logs a warning in the error traces. This setting is selected by default. To disable checking the certificate's `Subject` CN, deselect this setting.
-   **SSL Server Name Identifier (SNI)**: Specify the host names that clients request in the **SSL Server Name Identifier (SNI)** table. SNI is an optional TLS feature where the client indicates to the server the host name used to resolve the server address. This enables a server to present different certificates for clients to ensure the correct site is contacted.
-   For example, the server IP address is `192.168.0.1`. Clients consult the DNS to resolve a host name to an address and contact the server IP address using TCP/IP. If both `www.acme.com` and `www.anvils.com` resolve to `192.168.0.1`, without SNI, the server does not know which host name the client uses to resolve the address, because it is not party to the client DNS name resolution. The server may certify itself as either service, but when the connection is established, it does not know which host name the client connects to.\
    With SNI, the client provides the name of the host (for example, `www.anvils.com`) in the initial SSL exchange, before the server presents its certificate in its distinguished name (for example, `CN=www.anvils.com`). This way, the server can certify itself correctly as providing a service for the client's requested host name.\
    To specify an SNI, click **Add**, specify the server host name in **Client requests server name**, click **Server assumes identity** to import a Certificate Authority certificate into the Certificate Store, and click **OK**.
-   **Ciphers**: Specify the ciphers that the server supports in the **Ciphers** field. The server selects the highest-strength cipher that is also supported by the client from this list as part of the SSL handshake. The default cipher string of `FIPS:!SSLv3:!aNULL` performs the following:
    -   Enables FIPS-compatible cipher suites only
    -   Explicitly blocks cipher suites that require SSLv3 or lower
    -   Forces the use of TLSv1.2 only
    -   Forbids unauthenticated cipher suites
-   For more information on the syntax of this setting, see the [OpenSSL documentation](https://www.openssl.org/docs/man1.0.2/apps/ciphers.html).

-   **SSL session cache size**: Specify the number of idle SSL sessions that can be kept in memory. The default is `32`. If there are more simultaneous SSL sessions, new SSL connections can still be established, but no more SSL sessions are cached. If you set cache size to `0`, there is no cache. No outbound SSL connections are cached.
-   At `DEBUG` level or higher, API Gateway logs a trace when an entry goes into the cache, for example:

        DEBUG   09:09:12:953 [0d50] cache SSL session 11AA3894 to support.acme.com:443

    API Gateway also logs a trace when the cache is full, for example:

        DEBUG   09:09:12:953 [0d50] enough cached SSL sessions 11AA3894 to support.acme.com:443 already

    {{< alert title="Tip" color="primary" >}}You can use this setting to improve performance because API Gateway caches the slowest part of establishing the SSL connection. A new connection does not need to go through full authentication if it finds its target in the cache.{{< /alert >}}

-   **Ephemeral DH key parameters**: Specify the parameters used to generate Diffie Hellman (DH) keys. The DH key agreement algorithm is used to negotiate a shared secret between two SSL peers. This enables two parties without prior knowledge of each other to jointly establish a shared secret key over an insecure communication channel.
-   When DH key parameters are not specified, the SSL client uses the public RSA key in the server's certificate to encrypt data sent to the SSL server and establish a shared secret with the server. However, if the RSA key is ever discovered, any previously recorded encrypted conversations can be decrypted. DH key agreement offers Perfect Forward Secrecy (PFS) because there is no such key to be compromised.\
    There are two options when setting DH key parameters:
    -   Enter a number (for example, `512`), and the server automatically generates DH parameters with a prime number of the correct size.
    -   Paste the Base64 encoding of an existing serialized DH parameters file. You can use standard DH parameters based on known good prime numbers. OpenSSL ships with the `dh512.pem` and `dh1024.pem` files. For example, you can set the DH parameters to the following Base64-encoded string in `pdh512.pem`:
    -   ``` {space="preserve"}
        -----BEGIN DH PARAMETERS-----
        MEYCQQD1Kv884bEpQBgRjXyEpwpy1obEAxnIByl6ypUM2Zafq9AKUJsCRtMIPWakXUGfnHy9iUsiGSa6q6Jew1X
        pKgVfAgEC
        -----END DH PARAMETERS-----
        ```

    The DH parameters setting is required if the server is using a DSA-keyed certificate, but also has an effect when using RSA-based certificates. DH (or similar) key agreement is required for DSA-based certificates because DSA keys cannot be trivially used to encrypt data like RSA keys can.
-   {{< alert title="Note" color="primary" >}}The EDH key is always used once only to guarantee forward secrecy. This ensures that if the key is compromised, previous keys is not compromised.{{< /alert >}}
-   **SSL Protocol Options**: You can configure the following SSL protocol options:
-   | Option                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
    |------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Do not use the SSL v2 protocol**                         | SSL v2 is not used for incoming connections to avoid any weaknesses in this protocol. This is selected by default.                                                                                                                                                                                                                                                                                               |
    | **Do not use the SSL v3 protocol**                         | SSL v3 is not used for incoming connections to avoid any weaknesses in this protocol. This is selected by default.                                                                                                                                                                                                                                                                                               |
    | **Do not use the TLS v1 protocol**                         | TLS v1.0 is not used for incoming connections to avoid any weaknesses in this protocol. This is selected by default.                                                                                                                                                                                                                                                                                             |
    | **Do not use the TLS v1.1 protocol**                       | TLS v1.1 is not used for incoming connections to avoid any weaknesses in this protocol. This is selected by default.                                                                                                                                                                                                                                                                                             |
    | **Do not use the TLS v1.2 protocol**                       | TLS v1.2 is not use for incoming connections to avoid any weaknesses in this protocol. This is *not* selected by default.                                                                                                                                                                                                                                                                                        |
    | **Prefer local cipher preferences over client's proposal** | When choosing a cipher during the SSL/TLS handshake, the client's preferences are selected by default from the list of ciphers supported by the client and the server. When this option is selected, the server's preferences are used instead. This option is *not* selected by default. For more details on ciphers, see the [OpenSSL documentation](https://www.openssl.org/docs/man1.0.2/apps/ciphers.html). |

### Configure conditions for an HTTP Interface

You can configure API Gateway to bring down an active HTTP interface if certain *conditions*
fail to hold. For example, API Gateway can bring a HTTP interface if a remote host is not available, or if a physical network interface on the machine running API Gateway loses network connection. For more details, see [Configure conditions for HTTP interfaces](general_conditions.htm).

Management services
-------------------

The Management Services group exposes a number of services that the Admin Node Manager and API Gateway Analytics use for remote configuration and monitoring. The Management Services
interfaces and policies are displayed in the Policy Studio tree:

-   The **Management Services** policy container under **Policies**
-   The **Management Services** HTTP interfaces under **Environment Configuration > Listeners > Admin Node Manager**

{{< alert title="Note" color="primary" >}}Admin Node Manager may not function correctly if you change the HTTP interfaces, relative path, servlet applications, or static content provider exposed under the Management Services group. Because of this, the Management Services group should only be modified under strict supervision from Axway Support.{{< /alert >}}

### Management services group

By default, the Management Services group consists of the following:

-   **HTTP Interface**: The default port where Admin Node Manager exposes all its management services so that they can be configured remotely is port `8090`. At startup, Policy Studio can connect to this port to read and write API Gateway configuration data. By default, API Gateway Analytics exposes all its management services on port `8040`. For more details, see [*Change the management services port* on page 1](#Change).
-   **Relative Path**: The relative path `/` is mapped to a default management policy called **Protect Management Interface**, which is available in the **Management Services** policy container. The policy performs HTTP Basic authentication and passes control to a **Call Internal Service** filter, a special filter that passes messages to a servlet application or static content provider based on the path on which the request was received.

#### Request processing cycle

For example, with the default configuration, a request is received on `http://localhost:8090/api`. The following steps summarize the request processing cycle:

1.  The relative path `/` matches all incoming requests, and requests are dispatched to whatever policy the relative path is mapped to, in this case, the **Protect Management Interface** policy.
2.  The **Protect Management Interface** policy authenticates the originator of the request using HTTP Basic authentication. Authentication is necessary because all configuration operations are considered privileged operations and only be carried out by those with the required authority. If the originator is successfully authenticated, the policy invokes the **Call Internal Service** filter.
3.  The **Call Internal Service** filter attempts to match the relative path that the request was received on against all the servlets and content providers configured in the same services group as this interface, because the message is received on the management interface (port `8090`).
4.  The **Call Internal Service** filter finds `/api/`servlet matching the path the request was received on included in the servlets and content providers configured for the Management Services group, and invokes the servlet.

### Change the management services port

By default, Admin Node Manager uses port `8090` as the default management services port. To specify a different port, perform the following steps:

1.  In the Policy Studio tree, click **Environment Configuration > Listeners > Node Manager > Management Services > Ports**.
2.  In the **Interfaces** pane, right-click the **Management HTTPS interface**, and select **Edit**.
3.  In **Port**, enter the port you want to use (for example, `8091`), and click **OK**.
4.  Deploy the change to API Gateway.
5.  Restart Policy Studio. You must always restart Policy Studio when Management Services are updated.
6.  Use the updated port number in the URL to reconnect Policy Studio (for example, `https://HOST:8091/api`).

### Customize HTTP security headers

You edit the Management Services group the Admin Node Manager uses to customize the HTTP security headers included in the API Gateway response on port `8090`. You can edit the Admin Node Manager configuration using either Policy Studio or Entity Explorer.

{{< alert title="Note" color="primary" >}}Management Services apply to the Admin Node Manager and API Gateway Analytics only. Any modifications must be done under strict advice and supervision from the Axway Support.{{< /alert >}}

#### Edit Admin Node Manager configuration in Policy Studio

To change the Admin Node Manager configuration, create a copy of your existing configuration where to do the edits. When ready, copy the required configuration files back to your actual API Gateway configuration.

1.  In Policy Studio, click **File > New Project**.
2.  Enter a project **Name**, and click **Next**.
3.  Select to start the new project **From existing configuration**, and click **Next**.
4.  Click the browse button, select the following directory, and click **Finish**:

`INSTALL_DIR/apigateway/conf/fed`

1.  In the Policy Studio tree, click **Environment Configuration > Listeners > Node Manager > Management Services** and open **Paths**.
2.  In the **Resolvers** pane, right-click the **/** static content node, and click **Edit**.
3.  On the **General** tab, click **Add**, enter the HTTP security header name/value pair, and click **OK**. For example:
4.  -   **HTTP Header**: `X-XSS-Protection`
    -   **Value**: `1; mode=block`

5.  Repeat to add any additional HTTP security header name/value pairs (for example, `Strict-Transport-Security` or `Public-Key-Pins`), then click **OK** to return to Resolvers pane.
6.  Under **Paths**, right-click the **Login** static content node, and click **Edit**.
7.  On the **General**, click **Add**, and add the HTTP security headers that you added to the **/** static content node.
8.  After you are finished editing the configuration, manually copy the `.xml` and `.md5` configuration files from the new project you edited to `INSTALL_DIR/conf/fed/`, and make a backup.
9.  Restart the Admin Node Manager.

#### Edit Admin Node Manager configuration in Entity Explorer

Perform the following steps:

1.  Go to the following directory:
2.  `INSTALL_DIR/apigateway/posix/bin`
3.  **Linux**: `INSTALL_DIR/apigateway/posix/bin`

Run `esexplorer`.

Right-click on the store you want, select **Connect**, and browse to the following file:

`INSTALL_DIR/apigateway/conf/fed/configs.xml`

Click **System Components > Service > Management Services**, and expand **/,\*** static content node.

Right-click the **/,\*** static content node, select **Add a new Property**, and click the new property (for example, `key-0`).

In the `name` row on the right, double-click the **Value** field, and enter the name of the HTTP security header (for example, `X-XSS-Protection`).

Right-click under this field, select **Create a value** to add a `value` row, double-click **Value** on the row, and enter the value of the HTTP security header (for example, `1; mode=block`).

Repeat to add any additional HTTP security header name/value pairs (for example, `Strict-Transport-Security` or `Public-Key-Pins`).

Click **Update** to save the changes.

Select **System Components > Service > Management Services**, and expand the **/login/,\*** static content node,

Right-click **/login/,\***, select **Add a new Property**, and click the new property.

Add the HTTP security headers that you added under the **/,\*** static content node in the same way.

Click **Update** to save the changes.

Restart the Admin Node Manager.
