{
"title": "Dynamic CRL certificate validation",
"linkTitle": "Dynamic CRL certificate validation",
"date": "2019-10-17",
"description": "This filter enables validation of certificates against a Certificate Revocation List (CRL) that has been published by a Certificate Authority (CA). The CRL is retrieved from the specified URL and is cached by the server for certificate validation. The filter automatically fetches a potentially updated CRL from this URL when the criteria specified in the **Automatic CRL Update Preferences**\\nsection are met."
}
﻿
<div id="p_certificate_crl_dynamic_over">

Overview
--------

This filter enables validation of certificates against a Certificate Revocation List (CRL) that has been published by a Certificate Authority (CA). The CRL is retrieved from the specified URL and is cached by the server for certificate validation. The filter automatically fetches a potentially updated CRL from this URL when the criteria specified in the **Automatic CRL Update Preferences**
section are met.

{{< alert title="Note" color="primary" >}}Because the CRL is typically signed by the CA that owns it, the CA certificate that issued the CRL *must*
first be imported into the certificate store. In addition, the **CRL (Dynamic)**
filter requires the `certificates`
message attribute to be set by a preceding filter.{{< /alert >}}

</div>

<div id="p_certificate_crl_dynamic_example">

Example CRL-based validation policy
-----------------------------------

The topic on the **CRL (Static)**
filter shows a typical CRL-based policy that first uses a **Find Certificate**
filter to find the certificate, which is stored in a `certificate`
message attribute. It then uses a **Copy/Modify Attributes**
filter to copy this `certificate`
attribute to the `certificates`
attribute by selecting its **Create list attribute**
setting. This `certificates`
attribute is then used by the CRL-based filter.

You can use the same approach with the **CRL (Dynamic)**
filter instead of the **CRL (Static)**
filter. For more details, see [*Static CRL certificate validation* on page 1](certificate_crl_file.htm).

</div>

<div id="p_certificate_crl_dynamic_conf">

Configuration
-------------

Configure the following fields on the **CRL (Dynamic)**
window:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**CRL Import URL**:\
Enter the full URL of the CRL to use to validate the certificate, or browse to the CRL location.

**Automatic CRL Update Preferences**:\
Typically, a CA publishes an updated CRL at regular intervals. You can configure the filter to dynamically pull the latest CRL published by the CA at specified intervals. Select one of the following update options:

-   **Do not update**:\
    The filter never attempts to automatically retrieve the latest CRL.
-   **Update on "next update" date**:\
    The CRL published by the CA contains a *Next Update*
    date, which indicates the next date on which the CA publishes the CRL. You can choose to dynamically retrieve the updated CRL on the Next Update date by selecting this option. This effectively synchronizes the server with the CA updates.
-   **Update every number of days**:\
    The filter retrieves the CRL every number of days specified.
-   **Trigger update on cron expression**:\
    You can enter a cron expression to determine when to perform the automatic update.

</div>
