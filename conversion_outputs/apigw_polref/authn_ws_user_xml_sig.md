{
"title": "WS-Security Username Token XML-Signature Verification",
"linkTitle": "WS-Security Username Token XML-Signature Verification",
"date": "2019-10-17",
"description": "The API Gateway can validate the integrity of a signed WS-Security `<Username>`\\ntoken. A successful signature validation proves that the credentials passed in the token have not changed since they were signed originally."
}
<div id="p_authn_ws_user_xml_sig_over">

Overview
--------

The API Gateway can validate the integrity of a signed WS-Security `<Username>`
token. A successful signature validation proves that the credentials passed in the token have not changed since they were signed originally.

A **WS-Security Username Token**
filter must be placed before this filter in a policy in order to select the WS-Security block in which to locate the signature to validate.

</div>

<div id="p_authn_ws_user_xml_sig_conf">

Configuration
-------------

The following configuration fields are available on the **WS-Security Username Token XML-Signature Verification**
screen:

**Signature Type**\
Select one of the following options:

-   **Signature Must Sign Token Only**
    :\
    Use this option if the signature in the WS Security block only covers the token itself. Clients may only sign the token in cases where they do not wish to bind the signed token to any particular SOAP message, but instead want to reuse the signed token for several different SOAP messages.

-   **Signature Must Sign Token and SOAP Body**
    :\
    If a client wishes to bind a `<Username>`
    token to a particular SOAP Body, the signature will cover both the Body and the token. This prevents the signed token from beingcopied and pasted into different SOAP messages.

**Signer's Public Key/Certificate**\
Select the **Certificate in Message**
radio button in order to use the certificate from the XML-Signature contained in the WS-Security block. The certificate will be extracted from the `KeyInfo`
block.

    <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="Sample">...<dsig:KeyInfo><dsig:X509Data><dsig:X509SubjectName>CN=Sample User...</dsig:X509SubjectName><dsig:X509Certificate>MIIE ....... EQgJ</dsig:X509Certificate></dsig:X509Data><dsig:KeyValue><dsig:RSAKeyValue><dsig:Modulus>AMfb2tT53GmMiD...NmrNht7iy18=</dsig:Modulus><dsig:Exponent>AQAB</dsig:Exponent></dsig:RSAKeyValue></dsig:KeyValue></dsig:KeyInfo></dsig:Signature>

Clients may not always want to include their public keys in their signatures. In such cases, the public key can be retrieved from a specified LDAP directory or from the **Certificate Store**
.

To retrieve a client certificate from an LDAP directory, select a pre-configured one from the **LDAP Source**
dropdown, or add/edit a new/existing LDAP directory by clicking the **Add/Edit**
button.

Alternatively, select a certificate from the Certificate Store by selecting the **Certificate in Store**
radio button and clicking on the **Select**
button. This certificate will then be associated with the incoming message so that all subsequent certificate-based filters will use this user's certificate.

</div>
