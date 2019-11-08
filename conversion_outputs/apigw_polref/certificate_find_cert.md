{
"title": "Find certificate",
"linkTitle": "Find certificate",
"date": "2019-10-17",
"description": "The **Find Certificate**\\nfilter locates a certificate and sets it in the message for use by other certificate-based filters. Certificates can be extracted from several different locations. For example, this includes the certificate store, user store, selector expressions, HTTP headers, and message attachments."
}
﻿
<div id="p_certificate_find_cert_overview">

Overview
--------

The **Find Certificate**
filter locates a certificate and sets it in the message for use by other certificate-based filters. Certificates can be extracted from several different locations. For example, this includes the certificate store, user store, selector expressions, HTTP headers, and message attachments.

By default, API Gateway stores the extracted certificate in the `certificate`
message attribute. However, it can store the certificate in any message attribute, including any arbitrary attribute (for example, `user_certificate`). The certificate can be extracted from this attribute by a successor filter in the policy.

</div>

<div id="p_certificate_find_cert_group_conf">

Configuration
-------------

Complete the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Attribute Name**:\
Enter or select the name of the message attribute to store the extracted certificate in. When the target message attribute has been selected, the next step is to specify the location of the certificate from one of the following options. Defaults to `certificate`.

**Certificate Store**:\
Click **Select**, and select a certificate from the certificate store.

**User**:\
This field provides an alternative way to specify the user certificate. You can enter an explicitly named user in the API Gateway user store, or you can enter a selector expression that evaluates to a string that contains the name of a user in the user store. For example:

    ${authentication.subject.id}

{{< alert title="Tip" color="primary" >}}You can associate a certificate with this user using the **Signing Key**
option in the user configuration. For more details, see
[Manage API Gateway users](/csh?context=637&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
. In this way, the specified user name is used to retrieve the certificate associated with that user.{{< /alert >}}

</div>

<div>

**Selector Expression**:\
You can specify a selector expression by enclosing the message attribute name that contains the certificate in curly brackets, and prefixing this with `$`
(for example, `${certificate}`). Using a selector is a more flexible way of locating certificates than specifying the user directly. For more details on selector expressions, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

{{< alert title="Note" color="primary" >}}This selector expression must return an X.509 certificate. Selectors used in other fields return a string that is then used to look up the certificate (for example, in the certificate store, user store, HTTP header, or attachment).{{< /alert >}}

</div>

<div>

**HTTP Header Name**:\
Enter the name of the HTTP header that contains the certificate. Alternatively, you can enter a selector expression that evaluates to a string that contains the HTTP header name, and whose value is the certificate.

**Attachment Name**:\
Enter the name of the attachment (`Content-Id`) that contains the certificate. Alternatively, you can enter a selector expression that evaluates to a string that contains the ID of the attachment that encapsulates the certificate.

**Certificate Alias**:\
Enter the alias name of the certificate. Alternatively, you can enter a selector expression that evaluates to a string that contains the certificate alias in the certificate store.

{{< alert title="Tip" color="primary" >}}This certificate alias refers to a certificate in the API Gateway's trusted certificate store, and not to a certificate in the Java keystore. For more details, see
[Manage X.509 certificates and keys](/csh?context=619&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.{{< /alert >}}

</div>
