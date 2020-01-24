{
"title": "XML Signature Authentication",
"linkTitle": "XML Signature Authentication",
"date": "2019-10-17",
"description": "The API Gateway can authenticate a client by validating the XML Signature contained within an incoming XML message. A successful signature validation proves that the client had access to the signing key. Since the signing key is only accessible by the client (i.e. is not publicly available), the validation process authenticates the client."
}
<div id="p_authn_xml_sig_over">

Overview
--------

The API Gateway can authenticate a client by validating the XML Signature contained within an incoming XML message. A successful signature validation proves that the client had access to the signing key. Since the signing key is only accessible by the client (i.e. is not publicly available), the validation process authenticates the client.

</div>

<div id="p_authn_xml_sig_conf">

Configuration
-------------

The following sections can be configured on the **XML Signature Authentication**
screen:

**Signature Location**\
There may be multiple signatures present in a given XML message. For this reason, it is necessary to tell the API Gateway which signature it should use to authenticate the client.

The signature can be extracted:

-   Using WS-Security Actors

-   From the SOAP Header

-   Using XPath

Select the most appropriate method from the **Signature Location**
dropdown. Your selection will depend on the types of SOAP messages that you expect to receive. For example, if incoming SOAP messages will contain an XML Signature within a WS-Security block, you should choose this option from the dropdown.

**What Must be Signed**\
This section defines the content that must be signed in order for a SOAP message to pass the filter. This ensures that the client has signed something meaningful (i.e. part of the SOAP message) as opposed to some arbitrary data that would pass a "blind" signature validation. This further strengthens the authentication process.

An XPath expression is used to identify the nodeset that should be signed.To specify that nodeset, select either an existing XPath expression from the **XPath Expression**
dropdown list, or add a new one using the **Add**
button. XPath expressions can also be edited and removed with the **Edit**
and **Remove**
buttons respectively.

**Signer's Public Key/Certificate**\
Select the **Certificate in Message**
radio button in order to use the certificate from the XML-Signature specified in the **Signature Location**
section. The certificate will be extracted from the `KeyInfo`
block.

    <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" id="Sample">...<dsig:KeyInfo><dsig:X509Data><dsig:X509SubjectName>CN=Sample User...</dsig:X509SubjectName><dsig:X509Certificate>MIIE ....... EQgJ</dsig:X509Certificate></dsig:X509Data><dsig:KeyValue><dsig:RSAKeyValue><dsig:Modulus>AMfb2tT53GmMiD...NmrNht7iy18=</dsig:Modulus><dsig:Exponent>AQAB</dsig:Exponent></dsig:RSAKeyValue></dsig:KeyValue></dsig:KeyInfo></dsig:Signature>

Clients may not always want to include their public keys in their signatures. In such cases, the public key can be retrieved from a specified LDAP directory or from the **Certificate Store**
.

To retrieve a client certificate from an LDAP directory, select a pre-configured one from the **LDAP Source**
dropdown, or add/edit a new/existing LDAP directory by clicking the **Add/Edit**
button.

Alternatively, select the name of a **User**
from the **Certificate**
field. This user's certificate will then be associated with the incoming message so that all subsequent certificate-based filters will use this user's certificate.

</div>
