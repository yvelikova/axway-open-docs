{
"title": "Kerberos configuration",
"linkTitle": "Kerberos configuration",
"date": "2019-10-17",
"description": "The **Kerberos Configuration** under **Server settings > Security > Kerberos** in the node tree enables you to configure instance-wide Kerberos settings on API Gateway and to upload a Kerberos configuration file to API Gateway. This configuration file contains information on the location of the Kerberos Key Distribution Center (KDC), as well as which encryption algorithms, encryption keys, and domain realms to use. "
}
﻿

The **Kerberos Configuration** under **Server settings > Security > Kerberos** in the node tree enables you to configure instance-wide Kerberos settings on API Gateway and to upload a Kerberos configuration file to API Gateway. This configuration file contains information on the location of the Kerberos Key Distribution Center (KDC), as well as which encryption algorithms, encryption keys, and domain realms to use.

You can also configure trace options for the various APIs used by the Kerberos system, such as the Generic Security Services (GSS) and Simple and Protected GSS-API Negotiation (SPNEGO) APIs.

Linux platforms ship with a native implementation of the GSS library, which API Gateway can leverage. You can specify the location of the GSS library in this configuration window.

For more details on different Kerberos setups with API Gateway, see
[API Gateway Kerberos Integration Guide](/bundle/APIGateway_77_IntegrationKerberos_allOS_en_HTML5)
.

Kerberos configuration file — krb5.conf
---------------------------------------

The Kerberos configuration file (`krb5.conf`) defines the location of the Kerberos KDC, supported encryption algorithms, and default realms in the Kerberos system. Both Kerberos clients and Kerberos services that are configured for API Gateway use this file.

Kerberos clients need to know the location of the KDC so that they can obtain a Ticket Granting Ticket (TGT). They also need to know what encryption algorithms to use and what realm they belong to. Kerberos services do not need to call the KDC to request a TGT, but they still require the information on supported encryption algorithms and default realms contained in the `krb5.conf`
file.

A Kerberos client or service identifies the realm it belongs to because the realm is appended to its Kerberos principal name after the `@`
symbol. Alternatively, if the realm is not specified in the principal name, the Kerberos client or service assumes the realm to be the `default_realm`
specified in the `krb5.conf`
file. The file specifies only one `default_realm`, but you can specify a number of additional named realms. The `default_realm`
setting is in the `[libdefaults]`
section of the `krb5.conf`
file. It points to a realm in the `[realms]`
section. This setting is not required.

The text input field in the Kerberos configuration window displays a default configuration for `krb5.conf`. You can type and modify the configuration as needed, and then click **OK** to upload it to your API Gateway configuration. Alternatively, if you have an existing `krb5.conf`
file that you want to use, select **Load File** and open to the configuration file. The contents of the file are displayed in the text area, and you can edit and upload it to API Gateway.

{{< alert title="Note" color="primary" >}} Refer to your Kerberos documentation for more information on the settings that can be configured in the `krb5.conf`
file.{{< /alert >}}

Advanced settings
-----------------

You can configure various tracing options for the underlying Kerberos API using the check boxes on the **Advanced settings** tab. Trace output is always written to the `/trace`
directory of your API Gateway installation.

-   **Kerberos Debug Trace**– Enables extra tracing from the Kerberos API layer.
-   **SPNEGO Debug Trace** – Switches on extra tracing from the SPNEGO API layer.
-   **Extra Debug at Login**– Provides extra tracing information during login to the Kerberos KDC.

Native GSS library
------------------

The Generic Security Services API (GSS-API) is an API for accessing security services, including Kerberos. Implementations of the GSS-API ship with the Linux platforms and can be leveraged by API Gateway when it is installed on these platforms. The fields on this tab allow you to configure various aspects of the GSS-API implementation for your target platform.

**Use Native GSS Library**:\
Select this to use the operating system's native GSS implementation. This option only applies to API Gateway installations on the Linux platforms.

{{< alert title="Note" color="primary" >}}These are instance-wide settings. If you select **Use Native GSS Library**, it is used for all Kerberos operations, and all Kerberos clients and services must be configured to load their credentials natively.\
If the native library is used, the following features are not supported:\

-   The SPNEGO mechanism
-   The WS-Trust for SPNEGO standard (requires the SPNEGO mechanism)
-   The SPNEGO over HTTP standard (requires the SPNEGO mechanism)
-   Signing and encrypting using the Kerberos session keys

>It is possible to use the KERBEROS mechanism with the SPNEGO over HTTP standard, but this would be non-standard.
{{< /alert >}}

**Native GSS Library Location**:\
If you have opted to use the native GSS library, enter the location of the GSS library in the field provided, for example, `/usr/lib/libgssapi.so`. On Linux, the library is called `libgssapi.so`. .

{{< alert title="Note" color="primary" >}}This setting is only required when this library is in a non-default location.{{< /alert >}}

**Native GSS Trace**:\
Use this option to enable debug tracing for the native GSS library.
