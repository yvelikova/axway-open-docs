{
"title": "Certificate validity",
"linkTitle": "Certificate validity",
"date": "2019-10-17",
"description": "The validity period of an X.509 certificate is encoded in the certificate. The **Certificate Validity**\\nfilter performs a simple check on a certificate to ensure that it has not expired. "
}
﻿
<div id="p_certificate_validity_overview">

Overview
--------

The validity period of an X.509 certificate is encoded in the certificate. The **Certificate Validity**
filter performs a simple check on a certificate to ensure that it has not expired.

By default, the **Certificate Validity**
filter searches for the X.509 certificate in the `certificate`
message attribute, which must be set by a predecessor filter in the policy (for example, by an **SSL Authentication**
filter).

</div>

<div id="p_certificate_validity_conf">

Configuration
-------------

Configure the following fields on the **Certificate Validity**
window:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Certificate Selector Expression**:\
Enter the selector expression that specifies where to obtain the certificate (for example, from a message attribute). The filter checks the validity of the specified certificate. If no certificate is found, the filter returns an error. Defaults to `${certificate}`.

Using a selector enables settings to be evaluated and expanded at runtime based on metadata (for example, in a message attribute, Key Property Store (KPS), or environment variable). For more details, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
