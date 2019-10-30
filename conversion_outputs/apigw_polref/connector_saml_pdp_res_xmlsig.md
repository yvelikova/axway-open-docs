{
"title": "SAML PDP Response XML-Signature Verification",
"linkTitle": "SAML PDP Response XML-Signature Verification",
"date": "2019-10-17",
"description": "A SAML assertion contains identity information about an end-user. Depending on its type, the assertion can convey proof of an authentication event, details of user attributes, or authorization information about the end-user. Typically such assertions are issued by a SAML PDP (Policy Decision Point) after a client authenticates to it or requests access to a specified resource. "
}
<div id="p_connector_saml_pdp_res_xmlsig_overview">

Overview
--------

A SAML assertion contains identity information about an end-user. Depending on its type, the assertion can convey proof of an authentication event, details of user attributes, or authorization information about the end-user. Typically such assertions are issued by a SAML PDP (Policy Decision Point) after a client authenticates to it or requests access to a specified resource.

Clients use the SAML Protocol (SAMLP) to obtain SAML assertions from SAML PDPs. The SAMLP request usually contains identity information about the end-user. The PDP then uses this information when generating the assertion, which is then returned in a SAMLP response.

The PDP will usually *sign*
the assertion and/or the SAMLP response as proof that only it could have issued the assertion/response, and also to guarantee the integrity of the assertion.When the API Gateway receives the SAMLP response from the PDP, it can validate the signature on the assertion or on the response.

</div>

<div id="p_connector_saml_pdp_res_xmlsig_conf">

Configuration
-------------

Configure the following fields to validate the XML Signature over the SAMLP response:

**Signature Location**
:\
Because there may be multiple signatures contained within the SAMLP response, it is necessary to specify which signature the API Gateway should validate. The signature can be extracted from one of three places:

-   From the SOAP header

-   Using WS-Security Actors

-   Using XPath

Select the appropriate option from the dropdown. Take a look at the Signature Location
tutorialfor more information on configuring this section.

**What Must Be Signed**
:\
This section defines the content that must be signed in order for the signature on the SAMLP response to be considered valid. This ensures that the client has signed something meaningful (i.e. part of the SAMLP response) as opposed to some arbitrary data that would pass a "blind" signature validation.

An XPath expression is used to identify the nodeset that should be signed.To specify that nodeset, select either an existing XPath expression from the **XPath Expression**
dropdown list, or add a new one using the **Add**
button. XPath expressions can also be edited or removed with the **Edit**
and **Delete**
buttons respectively.

**Signer's Public Key/Certificate**\
Select the **Certificate in Message**
radio button in order to use the certificate from the XML-Signature specified in the **Signature Location**
section. The certificate will be extracted from the `<KeyInfo>`
block.

    <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="Sample">...<dsig:KeyInfo><dsig:X509Data><dsig:X509SubjectName>CN=Sample User...</dsig:X509SubjectName><dsig:X509Certificate>MIIE ....... EQgJ</dsig:X509Certificate></dsig:X509Data><dsig:KeyValue><dsig:RSAKeyValue><dsig:Modulus>AMfb2tT53GmMiD...NmrNht7iy18=</dsig:Modulus><dsig:Exponent>AQAB</dsig:Exponent></dsig:RSAKeyValue></dsig:KeyValue></dsig:KeyInfo></dsig:Signature>

Clients may not always want to include their public keys in their signatures. In such cases, the public key must be retrieved from a certificate stored either in a specified LDAP directory or in the the API Gateway's global Certificate Store.

For example, the following signed XML message does not include the signatory's certificate. Instead only the *Common Name*
of the signatory's certificate is included. In this case, the API Gateway must obtain the certificate from an LDAP directory or the Certificate Store to validate the signature on the assertion.

    <?xml version="1.0" encoding="UTF-8"?><soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/"><soap-env:Header><dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="User"><dsig:SignedInfo><dsig:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n"/><dsig:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><dsig:Reference URI=""><dsig:Transforms><dsig:Transform Algorithm="http://www.w3.org/TR/1999/REC-xpath-19991116"><dsig:XPath>ancestor-or-self::soap-env:Body</dsig:XPath></dsig:Transform><dsig:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n"/></dsig:Transforms><dsig:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><dsig:DigestValue>rvJMkZ1RDo3pNfqCUBa4Qhs8i+M=</dsig:DigestValue></dsig:Reference></dsig:SignedInfo><dsig:SignatureValue>AXL2gKhqqKwcKujVPftVoztySvtCdARGf97Cjt6Bbpf0w8QFiNuLJncQVnKBcQ+91KvudYZ/Sk8u7tXhoEiLvNwg76B2STPh+ypEWO+J7OSPedlUdnfVRRvWvjYLwJVjGNZ+mMTxvfO1wwcIb2Hg94n1BOaeBrNJ+2uO4i87W5TyufAGI+V8S6oSpPc5KQeHLXoyHS2+fXyqReSiwdhOeli4D4xT+HbjRgYJIwIikXn2k1FrD/hnd1/xVf/LjrOwoY9id8W3IcZAzMIRh5SBZjWHYOQzk79xy4YDpzNVYIOBlaAFqzg9G+Z4VYj+RdgrIVHhOXt+mq+fGZV6VheWGQ==</dsig:SignatureValue><dsig:KeyInfo><dsig:KeyName>CN=User,OU=R&D,O=Company Ltd.,L=Dublin 4,ST=Dublin,C=IE</dsig:KeyName></dsig:KeyInfo></dsig:Signature></soap-env:Header><soap-env:Body><ns1:getTime xmlns:ns1="urn:timeservice"></ns1:getTime></soap-env:Body></soap-env:Envelope>

To retrieve a client certificate from an LDAP directory, select a pre-configured one from **LDAP Source**
, or click **Add/Edit**
to specify a new or existing LDAP directory.Alternatively, select a certificate from the Certificate Store by selecting **Certificate in Store**
and clicking **Select**
. This certificate is then associated with the incoming message so that all subsequent certificate-based filters use this user's certificate.

</div>
