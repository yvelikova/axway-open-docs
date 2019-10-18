{
"title": "Connect to a UDDI registry",
"linkTitle": "Connect to a UDDI registry",
"date": "2019-10-17",
"description": "This topic explains how to configure a connection to a UDDI registry in the **Registry Connection Details**\\ndialog. It explains how to configure connections to UDDI v2 and UDDI v3 registries, and how to secure a connection over SSL. "
}
﻿
<div id="p_general_uddi_connection_overview">

Overview
--------

This topic explains how to configure a connection to a UDDI registry in the **Registry Connection Details**
dialog. It explains how to configure connections to UDDI v2 and UDDI v3 registries, and how to secure a connection over SSL.

</div>

<div id="p_general_uddi_connection_conf">

Configure a registry connection
-------------------------------

Configure the following fields in the **Registry Connection Details**
dialog:

**Registry Name**:\
Enter the display name for the UDDI registry.

**UDDI v2**:\
Select this option to use UDDI v2.

**UDDI v3**:\
Select this option to use UDDI v3.

**Inquiry URL**:\
Enter the URL on which to search the UDDI registry (for example, `http://HOSTNAME:PORT/uddi/inquiry`).

**Publish URL**:\
Enter the URL on which to publish to the UDDI registry, if required (for example, `http://HOSTNAME:PORT/uddi/publishing`).

**Security URL (UDDI v3)**:\
For UDDI v3 only, enter the URL for the security service, if required (for example, `http://HOSTNAME:PORT/uddi/security.wsdl`).

{{< alert title="Note" color="primary" >}}For UDDI v3, the **Inquiry URL**, **Publish URL**, and **Security URL**
specify the URLs of the WSDL for the inquiry, publishing, and security web services that the registry exposes. These fields can use the same URL if the WSDL for each service is at the same URL. {{< /alert >}}
For example, a WSDL file at `http://HOSTNAME:PORT/uddi/uddi_v3_registry.wsdl`
can contain three URLs:

-   `http://HOSTNAME:PORT/uddi/inquiry`
-   `http://HOSTNAME:PORT/uddi/publishing`
-   `http://HOSTNAME:PORT/uddi/security`

These are the service endpoint URLs that Policy Studio uses to browse and publish to the registry. These URLs are not set in the connection dialog, but discovered using the WSDL. However, for UDDI v2, WSDL is *not*
used to discover the service endpoints, so you must enter these URLs directly in the connection dialog.

**Max Rows**:\
Enter the maximum number of entries returned by a search. Defaults to `20`.

**Registry Authentication**:\
The registry authentication settings are as follows:

-   **Type**
-   This optional field applies to UDDI v2 only. The only supported authentication type is `UDDI_GET_AUTHTOKEN`.
-   **Username**
-   Enter the user name required to authenticate to the registry, if required.
-   **Password**
-   Enter the password for this user, if required.

The user name and password apply to UDDI v2 and v3. These are generally required for publishing, but depend on the configuration on the registry side.

**HTTP Proxy**:\
The HTTP proxy settings apply to UDDI v2 and v3:

-   **Proxy Host**
-   If the UDDI registry location entered above requires a connection to be made through an HTTP proxy, enter the host name of the proxy.
-   **Proxy Port**
-   If a proxy is required, enter the port on which the proxy server is listening.
-   **Username**
-   If the proxy has been configured to only accept authenticated requests, Policy Studio sends this user name and password to the proxy using HTTP Basic authentication.
-   **Password**
-   Enter the password to use with the user name specified in the field above.

**HTTPS Proxy**:\
The HTTPS proxy settings apply to UDDI v2 and v3:

-   **SSL Proxy Host**
-   If the **Inquiry URL**
    or **Publish URL**
    uses the HTTPS protocol, the SSL proxy host entered is used instead of the HTTP proxy entered above. In this case, the HTTP proxy settings are not used.
-   **Proxy Port**
-   Enter the port that the SSL proxy is listening on.

</div>

<div id="p_general_uddi_connection_secure">

Secure a connection to a UDDI registry
--------------------------------------

You can communicate with the UDDI registry over SSL. All communication may not need to be over SSL (for example, you may wish publish over SSL, and perform inquiry calls without SSL). For UDDI v2 and v3, you can use a mix of `http`
and `https`
URLs for WSDL and service address locations.

You can specify some or all of the **Inquiry URL**, **Publish URL**, and **Security URL**
settings as `https`
URLs. For example, with UDDI v3, you could use a single URL like the following:

    https://HOSTNAME:PORT/uddi/wsdl/uddi_v3_registry.wsdl

If any URLs (WSDL or service address location) use `https`
, you must configure the Policy Studio so that it trusts the registry SSL certificate.

<div>

### Configure Policy Studio to trust a registry certificate

For an SSL connection, you must configure the registry server certificate as a trusted certificate. Assuming mutual authentication is not required, the simplest way to configure an SSL connection between Policy Studio and UDDI registry is to add the registry certificate to the Policy Studio default truststore (the `cacerts`
file). You can do this by performing the following steps in Policy Studio:

1.  Select the **Environment Configuration** > **Certificates and Keys** > **Certificates**
    node in the Policy Studio tree.
2.  Click **Create/Import**, and click **Import Certificate**.
3.  Browse to the UDDI registry SSL certificate file, and click **Open**.
4.  Click **Use Subject**
    on the right of the **Alias Name**
    field, and click **OK**. The registry SSL certificate is now imported into the certificate store, and must be added to the Java keystore.
5.  Click **Keystore**
    on the **Certificate**
    window.
6.  Click **Browse**
    next to the **Keystore**
    field.
7.  Browse to the following file:\
8.  ``` {space="preserve"}
    INSTALL_DIR/policystudio/jre/lib/security/cacerts
    ```

9.  Click **Open**, and enter the **Keystore password**.
10. Click **Add to Keystore**.
11. Browse to the registry SSL certificate imported earlier, select it, and click **OK**.
12. Restart Policy Studio. You should now be able to connect to the registry over SSL.

</div>

<div>

### Configure mutual SSL authentication

If mutual SSL authentication is required (if Policy Studio must authenticate to the registry), Policy Studio must have an SSL private key and certificate. In this case, you should create a keystore containing the Policy Studio key and certificate. You must configure Policy Studio to load this file. For example, edit the `INSTALL_DIR/policystudio/policystudio.ini`
file, and add the following arguments:

``` {space="preserve"}
-Djavax.net.ssl.keyStore=/home/axway/osr-client.jks 
-Djavax.net.ssl.keyStorePassword=changeit
```

This example shows an `osr-client.jks`
keystore file used with Oracle Service Registry (OSR), which is the UDDI registry provided by Oracle.

{{< alert title="Note" color="primary" >}}You can also use Policy Studio to create a new keystore (`.jks`) file. Click **New keystore**
instead of browsing to the `cacerts`
file as described earlier.{{< /alert >}}

</div>

</div>
