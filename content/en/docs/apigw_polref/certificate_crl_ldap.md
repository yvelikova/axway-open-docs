{
"title": "CRL LDAP validation",
"linkTitle": "CRL LDAP validation",
"date": "2019-10-17",
"description": "A Certificate Revocation List (CRL) is a signed list indicating a set of certificates that are no longer considered valid (revoked certificates) by the certificate issuer. API Gateway can query a CRL to find out if a given certificate has been revoked. If the certificate is present in the CRL, it should not be trusted."
}
﻿
<div id="p_certificate_crl_ldap_over">

Overview
--------

A Certificate Revocation List (CRL) is a signed list indicating a set of certificates that are no longer considered valid (revoked certificates) by the certificate issuer. API Gateway can query a CRL to find out if a given certificate has been revoked. If the certificate is present in the CRL, it should not be trusted.

To validate a certificate using a CRL lookup, the certificate's issuing CA certificate should be trusted by API Gateway. This is because for a CRL lookup, the CA public key is needed to verify the signature on the CRL. The issuing CA public key is not always included in the certificates that it issues, so it is necessary to retrieve it from API Gateway's certificate store instead.

</div>

<div id="p_certificate_crl_ldap_conf">

Configuration
-------------

The **Name**
and **URL**
of all currently configured LDAP directories are displayed in the table on the **CRL Certificate Validation**
window. API Gateway checks the CRL of all selected LDAP directories to validate the client certificate. The filter fails as soon as API Gateway determines that one of the CRLs has revoked the certificate.

To configure LDAP connection information, complete the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**LDAP Connection**:\
Click the button on the right, and select the LDAP directory to check its CRL. To use an existing LDAP directory, (for example, `Sample Active Directory Connection`), you can select it in the tree. To add an LDAP directory, right-click the **LDAP Connections**
tree node, and select **Add an LDAP Connection**.

Alternatively, you can add LDAP connections under the **Environment Configuration** > **External Connections**
node in the Policy Studio tree. For more details on how to configure LDAP connections, see
[Configure LDAP directories](/csh?context=617&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
