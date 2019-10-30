{
"title": "Introduction to certificate validation",
"linkTitle": "Introduction to certificate validation",
"date": "2019-10-17",
"description": "Whenever API Gateway receives an X.509 certificate, either as part of the SSL handshake or as part of the XML message itself, it is important to be able to\\tdetermine whether that certificate is legitimate or not. "
}
﻿
<div id="p_common_cert_validation_overview">

Overview
--------

Whenever API Gateway receives an X.509 certificate, either as part of the SSL handshake or as part of the XML message itself, it is important to be able to determine whether that certificate is legitimate or not.

Certificates can be revoked by their issuers if it becomes apparent that the certificate is being used maliciously. Such certificates should never be trusted, and so it is very important that API Gateway can perform certificate validation.

API Gateway uses the following methods/protocols to validate certificates:

-   **Online Certificate Status Protocol** (OCSP) – An automated certificate checking network protocol. API Gateway can query the OCSP responder for the status of a certificate. The responder returns whether the certificate is still trusted by the CA that issued it.
-   **Certificate Revocation List** (CRL) – A signed list indicating a set of certificates that are no longer considered valid (that is, revoked certificates) by the certificate issuer. API Gateway can query a CRL to find out if a given certificate has been revoked. If the certificate is present in the CRL, it should not be trusted.
-   **XML Key Management Services** (XKMS) – An XML-based protocol for (amongst other things) establishing the trustworthiness of a certificate over the Internet. API Gateway can query an XKMS responder to determine whether or not a given certificate can be trusted or not.

</div>

<div id="p_common_cert_validation_conf">

Certificate validation filters
------------------------------

The API Gateway can check the validity of a client certificate using any of the following filters:

-   [*OCSP client* on page 1](certificate_ocsp_client.htm)
-   [*Static CRL certificate validation* on page 1](certificate_crl_file.htm)
-   [*Dynamic CRL certificate validation* on page 1](certificate_crl_dynamic.htm)
-   [*CRL LDAP validation* on page 1](certificate_crl_ldap.htm)
-   [*XKMS certificate validation* on page 1](certificate_xkms.htm)

{{< alert title="Note" color="primary" >}}To validate a certificate using an OCSP request or CRL lookup, the issuing CA's certificate should be trusted by API Gateway. {{< /alert >}}
<div class="indentTable">

For a CRL lookup, the CA's public key is needed to verify the signature on the CRL. For an OCSP request, the CA's public key must be submitted as part of the request. The issuing CA's public key is not always present in issued certificates, so it is necessary to retrieve it from the API Gateway certificate store instead.

</div>

</div>
