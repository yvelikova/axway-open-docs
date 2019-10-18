{
"title": "Configure Axway PassPort authentication repositories",
"linkTitle": "Configure Axway PassPort authentication repositories",
"date": "2019-10-17",
"description": "AE: Axway is not a variable in this instance as there is no 'Oracle' PassPort product."
}
﻿
<div id="p_connector_passport_over">

Overview
--------

Axway PassPort provides a central repository, identity broker, and security audit point for your Axway Business-to-Business Integration (B2Bi) or Managed File Transfer (MFT) solutions. Axway PassPort centralizes and simplifies provisioning and management for your entire online ecosystem, enabling secure collaboration between applications, divisions, customers, suppliers, and regulatory bodies.

To authenticate users against an Axway PassPort repository, in the Policy Studio tree, select **Environment Configuration** > **External Connections**
> **Authentication Repository Profiles**. Right-click **Axway PassPort Repositories**, and select **Add a new Repository**. This topic explains how to configure the Axway PassPort repository settings, and provides details on Axway PassPort repository registration.

</div>

<div id="p_connector_passport_conf">

Configuration
-------------

Complete the following fields to configure an Axway PassPort repository:

**Repository Name**:\
Enter a descriptive name for this repository.

**Hostname**:\
Enter the host name or IP address of the server running PassPort.

**Shared Secret**:\
Enter the PassPort shared secret. This is specified during PassPort installation.

**CSD Name**:\
Enter the name of the Axway Component Security Descriptor (CSD) file to use when registering with PassPort. Defaults to `csd.xml`.

{{< alert title="Note" color="primary" >}}The CSD file must be deployed in the API Gateway group's `conf`
directory in your API Gateway installation:{{< /alert >}}
<div class="indentTable">

``` {space="preserve"}
INSTALL_DIR/apigateway/groups/GROUP_ID/conf
```

</div>

**PassPort Certificates—HTTPS**:\
Select the certificate used for PassPort SSL communication. To export this certificate from PassPort, perform the following steps:

1.  In the PassPort user interface, click **Administration** >**Server Security Settings**.
2.  Note the certificate used for **Default\_HTTPS**.
3.  Click **Security** >**Certificates**.
4.  Select the certificate noted in step 2 (defaults to `CN=PassPortSecured,O=Axway,C=FR`
    ), and click **Export Certificate**.
5.  In the **Export Certificate**
    dialog, select a **File Extension**
    of `.cer`.
6.  Click **OK**, and select a location to save the certificate.

To import this certificate into the API Gateway, perform the following steps:

1.  In the API Gateway **Authentication Repository**
    dialog, click **Select**.
2.  In the **Select Certificate**
    dialog, click **Create/Import**.
3.  In the **Configure Certificate and Private Key**
    dialog, click **Import Certificate**.
4.  Select the certificate that was exported from PassPort.
5.  Give the certificate an **Alias Name**
    manually, or click **Use Subject**.
6.  Click **OK**.
7.  Select the certificate from the list, and click **OK**.

**PassPort Certificates—HTTPS Client Authentication (Optional)**:\
You can configure PassPort to use a different certificate for its client authentication protocol. To do this, repeat the steps for the HTTPS certificate, except when exporting from PassPort in step 2, make a note of the **Default\_HTTPS\_Client\_Auth**
certificate.

**Ports—HTTPS**:\
Enter the HTTPS port that PassPort is using. In PassPort, this is found under **Administration**
> **Server Ports Configuration**. Defaults to `6453`.

**Ports—HTTPS Client Authentication**:\
Enter the HTTPS client authentication port that PassPort is using. In PassPort, this is found under **Administration**
> **Server Ports Configuration**. Defaults to `6666`.

**Authentication—Domain**:\
Enter the PassPort domain that this repository is using for authentication and authorization. Defaults to `Synchrony`.

</div>

<div id="p_connector_passport_registration">

Axway PassPort repository registration
--------------------------------------

The external connection to Axway PassPort requires that communication with the Axway PassPort server is performed over a secure connection using two-way SSL authentication. This means that the PassPort server must be able to identify and trust the client connection, and this trust is established by registration.

The first connection from the API Gateway to PassPort initiates registration. A public-private key pair is created and a Certificate Signing Request (CSR) is submitted to PassPort. This is where the **Shared Secret**
and **HTTPS**
port values are used. While the CSR is pending, the repository is unable to process any requests. However, registration is a once off event, and when complete, it does not need to be repeated.

When registration is complete, the key and signed certificate are stored in a Java Key Store file in the following directory of your API Gateway installation:

``` {space="preserve"}
INSTALL_DIR/apigateway/groups/GROUP_ID/conf
```

<div>

### Troubleshooting registration issues

In the unlikely event that automatic registration fails, you should check the following:

-   Ensure the time on the API Gateway is synchronized with the time on the PassPort machine. When PassPort processes the CSR, it sets the **Valid From**
    date to the current time. If the PassPort time is ahead of the API Gateway time, the API Gateway is unable to use the certificate because it is not yet valid. The error in the trace log is as follows:
-   java.security.cert.CertificateNotYetValidException:java.security.cert.CertificateNotYetValidException

-   By default, PassPort blocks for up to 2 seconds waiting for the CSR to be processed. You can configure this value in the PassPort administration user interface under **Administration** > **System Properties**
    (`am.registration.cert.signature.wait.time`). If the signing request takes longer than this, one of the following errors may be logged:
-   ``` {space="preserve"}
    Authentication exception when authenticating system:
    com.axway.passport.am.api.v2.service.external.PassportConnectionException:Registration is still in progress. 
    Certificate Signing Request has not yet been validated, please try again later. 
    [Status:Waiting Validation]
    Authentication exception when authenticating system:
    com.axway.passport.am.api.v2.service.external.PassportConnectionException:Registration is still in progress. 
    Certificate Signing Request has not yet been signed, please try again later. 
    [Status:Waiting Signing]
    ```

-   This is generally a transient error that may be generated when the initial registration is in progress. Resubmitting the request should succeed. If the error persists, check in the PassPort administration user interface for the reason why the signing request has been delayed.
-   If the registration request has been refused by the PassPort administrator, the following error is displayed:
-   ``` {space="preserve"}
    Registration has been refused. 
    Please contact the PassPort Administrator for further information. 
    [Status:Validation Refused]
    ```

-   If CSR processing fails for some other reason, the following error is logged:
-   ``` {space="preserve"}
    Registration has failed and API Gateway is unable to communicate with PassPort. 
    Please contact the PassPort Administrator or try manually re-triggering registration. 
    [Status:...]
    ```

-   To resolve this, contact the PassPort administrator to see why the signing request failed. To retry registration, you need to manually re-trigger registration, as explained in the next subsection.

</div>

<div>

### Retrigger registration manually

When registration is complete, the API Gateway does not repeat the process, the generated Java Key Store (JKS) is used for all subsequent connection attempts. However, if for any reason the key pair in the JKS is no longer trusted by PassPort, or if registration is not being processed, you can trigger the registration procedure manually.

The simplest way to retrigger registration is to change the repository name and redeploy. However, if this is not an option, you can manually remove the keystores.

The format of the JKS file names is as follows:

``` {space="preserve"}
keystore_REPOSITORYNAME_HOSTNAME_HTTPSCLIENTAUTHPORT.jks
```

All non-alphanumerics are replaced with an underscore (`_`).

For example, given the following repository details:

-   **Repository Name**: `PassPort - local`
-   **Hostname**: `passport-host`
-   **HTTPS Client Authentication**: `6666`

The keystore name is `keystore_PassPort___local_passport_host_6666.jks`.

To trigger registration, perform the following steps:

1.  Back up the JKS associated with the Axway PassPort Authentication Repository being reset.
2.  Delete this JKS.
3.  Restart the API Gateway instance. The deleted file is recreated and registration is initiated.

{{< alert title="Note" color="primary" >}}If registration has not been completed when the registration is being retriggered, you must delete the following additional temporary files to ensure clean registration:
{{< /alert >}}
<div class="indentTable">

``` {space="preserve"}
keystore_REPOSITORYNAME_HOSTNAME_HTTPSCLIENTAUTHPORT.jks.csrid
keystore_REPOSITORYNAME_HOSTNAME_HTTPSCLIENTAUTHPORT.jks.pub
keystore_REPOSITORYNAME_HOSTNAME_HTTPSCLIENTAUTHPORT.jks.key
```

</div>

<div class="indentTable">

In addition, to avoid future confusion, it is good practice to ensure that all redundant certificates and signing requests are removed from PassPort using the PassPort administration user interface.

</div>

</div>

</div>
