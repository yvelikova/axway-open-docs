{
"title": "Create thumbprint from certificate",
"linkTitle": "Create thumbprint from certificate",
"date": "2019-10-17",
"description": "The **Create Thumbprint**\\nfilter can be used to create a human-readable thumbprint (or fingerprint) from the X.509 certificate that is stored in the `certificate`\\nmessage attribute. The generated thumbprint is stored in the `certificate.thumbprint`\\nattribute."
}
﻿
<div id="p_certificate_thumbprints_overview">

Overview
--------

The **Create Thumbprint**
filter can be used to create a human-readable thumbprint (or fingerprint) from the X.509 certificate that is stored in the `certificate`
message attribute. The generated thumbprint is stored in the `certificate.thumbprint`
attribute.

</div>

<div id="p_certificate_thumbprints_conf">

Configuration
-------------

Configure the following fields on this filter:

**Name**:\
Enter a name for this filter to display in a policy.

**Digest Algorithm**:\
Select the digest algorithm to create the thumbprint of the certificate from the list.

</div>
