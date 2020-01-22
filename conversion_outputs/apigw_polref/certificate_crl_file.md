{
"title": "Static CRL certificate validation",
"linkTitle": "Static CRL certificate validation",
"date": "2019-10-17",
"description": "A Certificate Authority (CA) might wish to publish a Certificate Revocation List (CRL) to a file. In this case, API Gateway can load the revoked certificates from the file-based CRL and validate user certificates against it."
}
﻿
<div id="p_certificate_crl_file_overview">

Overview
--------

A Certificate Authority (CA) might wish to publish a Certificate Revocation List (CRL) to a file. In this case, API Gateway can load the revoked certificates from the file-based CRL and validate user certificates against it.

{{< alert title="Note" color="primary" >}}Because the CRL is typically signed by the CA that owns it, the CA certificate that issued the CRL *must*
first be imported into the certificate store. In addition, the **CRL (Static)**
filter requires the `certificates`
message attribute to be set by a preceding filter.{{< /alert >}}

</div>

<div id="p_certificate_crl_file_example">

Example CRL-based validation policy
-----------------------------------

Typically, a **Find Certificate**
filter is first used to find the certificate, which is stored in a `certificate`
message attribute. You can then use a **Copy / Modify Attributes**
filter to copy the `certificate`
attribute to the `certificates`
attribute by selecting its **Create list attribute**
setting.

The following example policy shows the filters used:

![Static CRL Policy](/Images/docbook/images/certs/static_crl_policy.gif)

The following example shows the settings used in the **Copy / Modify Attributes**
filter:

![Copy / Modify Attributes Filter](/Images/docbook/images/certs/copy_modfiy_attributes_filter.gif)

{{< alert title="Note" color="primary" >}}Typically, a CA publishes a new CRL, containing the most up-to-date list of revoked certificates at regular intervals. However, the **CRL (Static)**
filter does not automatically update the CRL when it is loaded from a local file. If you need to automatically retrieve updated CRLs from a particular URL, you should use the **CRL (Dynamic)**
filter instead. For more details, see [*Dynamic CRL certificate validation* on page 1](certificate_crl_dynamic.htm).{{< /alert >}}

</div>

<div id="p_certificate_crl_file_conf">

Configuration
-------------

Enter a name for the filter to display in a policy in the **Name**
field.

Click the **Load CRL**
button to browse to the location of the CRL file. When the CRL has been loaded from the selected location, read-only information regarding revoked certificates and update dates is displayed in the other fields on the window.

</div>
