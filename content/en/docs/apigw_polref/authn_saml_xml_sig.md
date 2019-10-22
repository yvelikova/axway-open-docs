{
"title": "SAML Authentication XML-Signature Verification",
"linkTitle": "SAML Authentication XML-Signature Verification",
"date": "2019-10-17",
"description": "A SAML (Security Assertions Markup Language) *authentication assertion*\\nis issued as proof of an authentication event. Typically an end-user will authenticate to an intermediary, who generates a SAML authentication assertion to prove that it has authenticated the user. The intermediary will usually *sign*\\nthe assertion as proof that only it could have signed the assertion, and also to guarantee the integrity of the assertion. It then inserts the assertion, together with its signature, into the message for consumption by a downstream Web service."
}
<div id="p_authn_saml_xml_sig_over">

Overview
--------

A SAML (Security Assertions Markup Language) *authentication assertion*
is issued as proof of an authentication event. Typically an end-user will authenticate to an intermediary, who generates a SAML authentication assertion to prove that it has authenticated the user. The intermediary will usually *sign*
the assertion as proof that only it could have signed the assertion, and also to guarantee the integrity of the assertion. It then inserts the assertion, together with its signature, into the message for consumption by a downstream Web service.

The following sample SOAP message contains a signed SAML authentication assertion:

    <?xml version="1.0" encoding="UTF-8"?><soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/"><soap-env:Header xmlns:wsse="http://schemas.xmlsoap.org/ws/2002/04/secext"><wsse:Security><saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:1.0:assertion" AssertionID="MadCap:variable name="api_gateway_variables.lc_company"/>-1056477425082" Id="MadCap:variable name="api_gateway_variables.lc_company"/>-1056477425082" IssueInstant="2003-06-24T17:57:05Z" Issuer="CN=Sample User,....,C=IE" MajorVersion="1" MinorVersion="0"><saml:Conditions NotBefore="2003-06-20T16:20:10Z" NotOnOrAfter="2003-06-20T18:20:10Z"/><saml:AuthenticationStatement AuthenticationInstant="2003-06-24T17:57:05Z" AuthenticationMethod="urn:oasis:names:tc:SAML:1.0:am:password"><saml:SubjectLocality IPAddress="192.168.0.32"/><saml:Subject><saml:NameIdentifier Format="urn:oasis:names:tc:SAML:1.0:assertion#X509SubjectName">sample</saml:NameIdentifier></saml:Subject></saml:AuthenticationStatement><dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="User"><dsig:SignedInfo>.....</dsig:SignedInfo><dsig:SignatureValue>rpa/......0g==</dsig:SignatureValue><dsig:KeyInfo>.....</dsig:KeyInfo></dsig:Signature></saml:Assertion></wsse:Security></soap-env:Header><soap-env:Body><ns1:getTime xmlns:ns1="urn:timeservice"></ns1:getTime></soap-env:Body></soap-env:Envelope>

</div>

<div id="p_authn_saml_xml_sig_conf">

Configuration
-------------

Configure the following fields to validate the XML Signature over a SAML assertion:

**SAML Signature**
:\
Use this section to specify the location of the signature to validate. The signature can be selected using 3 options:

-   ***Check signature inside the assertion**
    :*\
    Select this option if the signature will be present inside the SAML assertion itself.

-   ***Check signature contained in WS-Security Block**
    :*\
    If the signature is contained within a WS-Security block (but outside the assertion), it is necessary to specify whether the signature covers only the assertion, or the assertion and the SOAP Body. Select the appropriate option depending on what the signature covers.

-   ***Use advanced XPath**
    :*\
    If the signature is to be found in a non-standard location, an XPath expression can be used to identify it. Use the **Signature location XPath**
    to find a signature in a non-standard place.\
    It is also necessary to specify the nodes that are signed by the signature. Use the **What must be signed XPath**
    to configure this.

**Signer's Public Key/Certificate**\
Select the **Certificate in Message**
radio button in order to use the certificate from the XML-Signature specified in the **SAML Signature**
section. The certificate will be extracted from the `KeyInfo`
block.

    <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="Sample">...<dsig:KeyInfo><dsig:X509Data><dsig:X509SubjectName>CN=Sample User...</dsig:X509SubjectName><dsig:X509Certificate>MIIE ....... EQgJ</dsig:X509Certificate></dsig:X509Data><dsig:KeyValue><dsig:RSAKeyValue><dsig:Modulus>AMfb2tT53GmMiD...NmrNht7iy18=</dsig:Modulus><dsig:Exponent>AQAB</dsig:Exponent></dsig:RSAKeyValue></dsig:KeyValue></dsig:KeyInfo></dsig:Signature>

Clients may not always want to include their public keys in their signatures. In such cases, the public key must be retrieved from an LDAP directory of the API Gateway's Certificate Store.

For example, the following signed XML message does not include the signatory's certificate. Instead only the *Common Name*
of the signatory's certificate is included. In this case, the API Gateway must obtain the certificate from either an LDAP directory or the Certificate Store in order to validate the signature on the assertion.

    <?xml version="1.0" encoding="UTF-8"?><soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/"><soap-env:Header><dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="User"><dsig:SignedInfo><dsig:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n"/><dsig:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><dsig:Reference URI=""><dsig:Transforms><dsig:Transform Algorithm="http://www.w3.org/TR/1999/REC-xpath-19991116"><dsig:XPath>ancestor-or-self::soap-env:Body</dsig:XPath></dsig:Transform><dsig:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n"/></dsig:Transforms><dsig:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><dsig:DigestValue>rvJMkZ1RDo3pNfqCUBa4Qhs8i+M=</dsig:DigestValue></dsig:Reference></dsig:SignedInfo><dsig:SignatureValue>AXL2gKhqqKwcKujVPftVoztySvtCdARGf97Cjt6Bbpf0w8QFiNuLJncQVnKBcQ+91KvudYZ/Sk8u7tXhoEiLvNwg76B2STPh+ypEWO+J7OSPedlUdnfVRRvWvjYLwJVjGNZ+mMTxvfO1wwcIb2Hg94n1BOaeBrNJ+2uO4i87W5TyufAGI+V8S6oSpPc5KQeHLXoyHS2+fXyqReSiwdhOeli4D4xT+HbjRgYJIwIikXn2k1FrD/hnd1/xVf/LjrOwoY9id8W3IcZAzMIRh5SBZjWHYOQzk79xy4YDpzNVYIOBlaAFqzg9G+Z4VYj+RdgrIVHhOXt+mq+fGZV6VheWGQ==</dsig:SignatureValue><dsig:KeyInfo><dsig:KeyName>CN=User,OU=R&D,O=Org Ltd.,L=Dublin 4,ST=Dublin,C=IE</dsig:KeyName></dsig:KeyInfo></dsig:Signature></soap-env:Header><soap-env:Body><ns1:getTime xmlns:ns1="urn:timeservice"></ns1:getTime></soap-env:Body></soap-env:Envelope>

To retrieve a client certificate from an LDAP directory, select a pre-configured one from the **LDAP Source**
dropdown, or add/edit a new/existing LDAP directory by clicking the **Add/Edit**
button.

Alternatively, select a certificate from the Trusted Certificate Store by selecting the **Certificate in Store**
radio button and clicking on the **Select**
button. This certificate will then be associated with the incoming message so that all subsequent certificate-based filters will use this user's certificate.

</div>
