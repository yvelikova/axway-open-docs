{
"title": "File download",
"linkTitle": "File download",
"date": "2019-10-17",
"description": "You can use the **File download**\\nfilter to download files from a file transfer server and store their contents in the `content.body`\\nmessage attribute. The **File download**\\nfilter supports the following protocols:"
}
﻿
<div id="p_connection_ftp_download_overview">

Overview
--------

You can use the **File download**
filter to download files from a file transfer server and store their contents in the `content.body`
message attribute. The **File download**
filter supports the following protocols:

-   **FTP**: File Transfer Protocol
-   **FTPS**: FTP over Secure Sockets Layer (SSL)
-   **SFTP**: Secure Shell (SSH) File Transfer Protocol

Configuring a **File download**
filter can be useful when integrating with Business-to-Business (B2B) partner destinations or with legacy systems. For example, instead of making drastic changes to either system, API Gateway can download files from the other system. The added benefit is that the files are exposed to the full compliment of API Gateway message processing filters. This ensures that only properly validated files are downloaded from the target system. The **File download**
filter is available from the **Routing**
category of filters in Policy Studio.

See also [*File upload* on page 1](connection_ftp_upload.htm).

</div>

<div id="p_connection_ftp_download_general">

General settings
----------------

Configure the following general settings:

**Name**:\
Enter a descriptive name for this filter to display in a policy.

**Host**:\
Enter the name of the host machine on which the file transfer server is running.

**Port**:\
Enter the port number to connect to the file transfer server. Defaults to `21`.

**Username**:\
Enter the user name to connect to the file transfer server.

**Password**:\
Specify the password for this user.

</div>

<div id="p_connection_ftp_download_file">

File details
------------

Configure the following fields in the **File details**
section:

**Filename**:\
Specifies the file name to download from the file transfer server. The default value is `filename.xml`. You can enter a different file name or use a message attribute selector, which is expanded at runtime (for example, `${authentication.subject.id}`).

When downloading a file from the file transfer server, API Gateway uses a temporary file name of `filename.part`. When the file has been downloaded, it then uses the file name specified in this filter (for example, the default `filename.xml`). This prevents an incomplete file from being downloaded.

**Directory**:\
Specify the directory where the file is stored.

</div>

<div id="p_connection_ftp_download_cxn">

Connection type
---------------

The fields configured in the **Connection Type**
section determine the type of file transfer connection. Select the FTP connection type from the following options:

-   FTP - File Transfer Protocol
-   FTPS - FTP over SSL
-   SFTP - SSH File Transfer Protocol

</div>

<div id="p_connection_ftp_download_ftp">

### FTP and FTPS connections

The following general settings apply to FTP and FTPS connections:

**Passive transfer mode**:\
Select this option to prevent problems caused by opening outgoing ports in the firewall relative to the file transfer server (for example, when using *active*
FTP connections). This is selected by default.

{{< alert title="Note" color="primary" >}}To use passive transfer mode, you must perform the steps described in
[Configure passive transfer mode](/csh?context=622&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.{{< /alert >}}
**File Type**:\
Select **ASCII**
mode for sending text-based data, or **Binary**
mode for sending binary data over the file transfer connection. Defaults to **ASCII**
mode.

</div>

<div id="p_connection_ftp_download_cxn_ftps">

### FTPS connections

The following security settings apply to FTPS connections only:

**SSL Protocol**:\
Enter the SSL protocol used (for example, `SSL`
or `TLS`). Defaults to `SSL`.

**Implicit**:\
When this option is selected, security is automatically enabled as soon as the **File Download**
client makes a connection to the remote file transfer service. No clear text is passed between the client and server at any time. In this case, a specific port is used for secure connections (`990`). This option is not selected by default.

**Explicit**:\
When this option is selected, the remote file transfer service must explicitly request security from the **File Download**
client, and negotiate the required security. If the file transfer service does not request security, the client can allow the file transfer service to continue insecure or refuse or limit the connection. This option is selected by default.

**Trusted Certificates**:\
To connect to a remote file server over SSL, you must trust that server's SSL certificate. When you have imported this certificate into the Certificate Store, you can select it on the **Trusted Certificates**
tab.

**Client Certificates**:\
If the remote file server requires the **File Download**
client to present an SSL certificate to it during the SSL handshake for mutual authentication, you must select this certificate from the list on the **Client Certificates**
tab. This certificate must have a private key associated with it that is also stored in the Certificate Store.

</div>

<div id="p_connection_ftp_download_cxn_sftp">

### SFTP connections

The following security settings apply to SFTP connections only:

**Present following key for authentication**:\
Click the button on the right, and select a previously configured key to be used for authentication from the tree. To add a key, right-click the **Key Pairs**
node, and select **Add**. Alternatively, you can import key pairs under the **Environment Configuration** > **Certificates and Keys**
node in the Policy Studio tree. For more details, see
[Manage X.509 certificates and keys](/csh?context=619&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**SFTP host must present key with the following finger print**:\
Enter the fingerprint of the public key that the SFTP host must present (for example, `43:51:43:a1:b5:fc:8b:b7:0a:3a:a9:b1:0f:66:73:a8`).

</div>
