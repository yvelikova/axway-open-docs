{
"title": "What to sign",
"linkTitle": "What to sign",
"date": "2019-10-17",
"description": "AE: No longer used. Integrated with [*XML signature generation* on page 1](%3Ca%20href=)."
}
﻿

AE: No longer used. Integrated with [*XML signature generation* on page 1](content_sign_message.htm).

<div id="p_common_what_must_be_signed_overview">

Overview
--------

The **What To Sign**
section enables the administrator to define the exact content that must be signed for a SOAP message to pass the corresponding filter. The purpose of this configuration section is to ensure that the client has signed something meaningful (part of the SOAP message) instead of some arbitrary data that would pass a blind signature validation.

This prevents clients from simply pasting technically correct, but unrelated signatures into messages in the hope that they pass any blind signature verification. For example, the user may be able to generate a valid XML Signature over any arbitrary XML document. Then by including the signature and XML portion into a malicious SOAP message, the signature passes a blind signature validation, and the harmful XML is allowed to reach the Web service.

The **What To Sign**
section ensures that clients must sign a part of the SOAP message, and therefore prevents them from pasting arbitrary XML Signatures into the message. This section enables you to use any combination of **Node Locations**
, **XPath Expressions**
, **XPath Predicates**
,and/or **Message Attribute**
to specify message content that must be signed. This topic describes how to configure each of the corresponding tabs displayed in this section.

</div>

<div id="p_common_what_must_be_signed_gen">

ID configuration
----------------

With WSU IDs, an ID attribute is inserted into the root element of the nodeset that is to be signed. The XML Signature then references this ID to indicate to verifiers of the signature the nodes that were signed.The use of WSU IDs is the default option because they are WS-I compliant.

Alternatively, a generic ID attribute (that is not bound to the WSUnamespace) can be used to dereference the data. The ID attribute isinserted into the top-level element of the nodeset to be signed.The generated XML Signature can then reference this ID to indicate whatnodes were signed.

You can also use `AssertionID`
attributes when signing SAMLassertions. The following options provide more details and examples of the different styles of IDs that are available.

**Use WSU IDs**
:\
Select this option to reference the signed data using a `wsu:Id`
attribute. In this case, a `wsu:Id`
attribute is inserted into the root node of the nodeset that is signed. This id is then referenced in the generated XML Signature as an indication of what nodes were signed. The following example shows the correlation:

    <s:Envelope xmlns:s="..."><s:Header><wsse:Security xmlns:wsse="..."><dsig:Signature xmlns:dsig="..." Id="Id-00000112e2c98df8-0000000000000004"><dsig:SignedInfo><dsig:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/><dsig:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><dsig:Reference URI="#Id-00000112e2c98df8-0000000000000003"><dsig:Transforms><dsig:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/></dsig:Transforms><dsig:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><dsig:DigestValue>xChPoiWJJrrPZkbXN8FPB8S4U7w=</dsig:DigestValue></dsig:Reference></dsig:SignedInfo><dsig:SignatureValue>KG4N .... /9dw==</dsig:SignatureValue><dsig:KeyInfo Id="Id-00000112e2c98df8-0000000000000005"><dsig:X509Data><dsig:X509Certificate>MIID ... ZiBQ==</dsig:X509Certificate></dsig:X509Data></dsig:KeyInfo></dsig:Signature></wsse:Security></s:Header><s:Body xmlns:wsu="..." wsu:Id="Id-00000112e2c98df8-0000000000000003"><vs:getProductInfo xmlns:vs="http://ww.MadCap:variable name="api_gateway_variables.lc_company"/>.com"><vs:Name>API Gateway</vs:Name><vs:Version>7.8</vs:Version></vs:getProductInfo></s:Body></s:Envelope>

In the above example, a `wsu:Id`
attribute has been inserted into the `<s:Body>`
element. This `wsu:Id`
attribute is then referenced by the `URI`
attribute of the `<dsig:Reference>`
element in the actualSignature.

When the Signature is being verified, the value of the `URI`
attribute can be used to locate the nodes that have been signed.

**Use IDs**
:\
Select this option to use generic IDs (that are not bound to theWSU namespace) to dereference the signed data. Under this schema, the`URI`
attribute of the `<Reference>`
points at an ID attribute, which is inserted into the top-level node of the nodeset that is signed. Take a look at the following example, noting how the ID specified inthe Signature matches the ID attribute that has been inserted into the `<Body>`
element, indicating that the Signatureapplies to the entire contents of the SOAP Body.

    lt;soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Header><dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" Id="Id-0000011a101b167c-0000000000000013"><dsig:SignedInfo><dsig:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/><dsig:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><dsig:Reference URI="#Id-0000011a101b167c-0000000000000012"><dsig:Transforms><dsig:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/></dsig:Transforms><dsig:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><dsig:DigestValue>JCy0JoyhVZYzmrLrl92nxfr1+zQ=</dsig:DigestValue></dsig:Reference></dsig:SignedInfo><dsig:SignatureValue>......<dsig:SignatureValue><dsig:KeyInfo Id="Id-0000011a101b167c-0000000000000014"><dsig:X509Data><dsig:X509Certificate>......</dsig:X509Certificate></dsig:X509Data></dsig:KeyInfo></dsig:Signature></soap:Header><soap:Body Id="Id-0000011a101b167c-0000000000000012"><product version="7.8"><name>API Gateway</name><company>Axway</company><description>SOA Security and Management</description></product></soap:Body></soap:Envelope>

**Use SAML IDs for SAML Elements**
:\
This ID option is specifically intended for use where a SAML assertionis to be signed. When this option is selected, an `AssertionID`
attribute is inserted into a SAML 1.1 assertion, or a more generic ID attribute is used for a SAML 2.0 assertion.

</div>

<div id="p_common_what_must_be_signed_nodes">

Node locations
--------------

Node locations are perhaps the simplest way to configurethe message content that must be signed. The table on this screen is pre-populated with a number of common SOAP security headers, including the SOAP Body, WS-Security block, SAML assertion, WS-Security UsernameToken and Timestamp, and the WS-Addressing headers.For each of these headers, there are several namespace options available. For example, you can sign both a SOAP 1.1 and/or a SOAP 1.2 block by distinguishing between their namespaces.

On the **Node Locations**
tab, you can select one or more nodesets to sign from the default list. You can also add more default nodesets by clicking the **Add**
button. Enter the **Element Name**
, **Namespace**
, and **Index**
of the nodeset in the fields provided. The **Index**
field is used to distinguish between two elements of the same name that occur in the same message.

</div>

<div id="p_common_what_must_be_signed_xpath">

XPath configuration
-------------------

You can use an XPath expression to identify the nodeset (the series of elements) that must be signed. To specify that nodeset, select an existing XPath expression from the table, which contains severalXPath expressions that can be used to locate nodesets representingcommon SOAP security headers, including SAML assertions. Alternatively,you can add a new XPath expression using the **Add**
button. XPath expressions can also be edited and removed with the **Edit**
and **Remove**
buttons.

An example of a SOAP message is provided below. The following XPath expression indicates that all the contents of the SOAP body, including the `Body`
element itself, should be signed:

    /soap:Envelope/soap:Body/descendant-or-self::node()

You must also supply the namespace mapping for the `soap`
prefix, for example:

Prefix
URI
`soap`
`http://schemas.xmlsoap.org/soap/envelope/`
    <?xml version="1.0" encoding="UTF-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Header></soap:Header><soap:Body><product xmlns="http://www.MadCap:variable name="api_gateway_variables.lc_company"/>.com"><name>SOA Product</name><company>Company</company><description>Web services Security</description></product></soap:Body></soap:Envelope>

</div>

<div id="p_common_what_must_be_signed_pred">

XPath predicates
----------------

Select this option if you wish to use an XPath transform to reference the signed content. You must select an XPath predicate from the table to do this. The table is prepopulated with several XPath predicates that can be used to identify common security headers that occur in SOAP messages, including SAML assertions.

To illustrate the use of XPath predicates, the following example shows how the SOAP message is signed when the default *Sign SOAP Body*
predicate is selected:

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><vs:getProductInfo xmlns:vs="http://www.MadCap:variable name="api_gateway_variables.lc_company"/>.com"><vs:Name>API Gateway</vs:Name><vs:Version>7.8</vs:Version></vs:getProductInfo></s:Body></s:Envelope>

The default XPath expression (Sign SOAP Body) identifies the contents of the SOAP `Body`
element, including the `Body`
element itself. The following is the XML Signature produced when this XPath predicate is used:

    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><dsig:Signature id="Sample" xmlns:dsig="http://www.w3.org/2000/09/xmldsig#"><dsig:SignedInfo>...<dsig:Reference URI=""><dsig:Transforms><dsig:Transform Algorithm="http://www.w3.org/TR/1999/REC-xpath-19991116"><dsig:XPath xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">ancestor-or-self::soap:Body</dsig:XPath></dsig:Transform><dsig:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n"/></dsig:Transforms>...</dsig:Reference></dsig:SignedInfo>...</dsig:Signature></s:Header><s:Body><vs:getProductInfo xmlns:vs="http://ww.MadCap:variable name="api_gateway_variables.lc_company"/>.com"><vs:Name>API Gateway</vs:Name><vs:Version>7.8</vs:Version></vs:getProductInfo></s:Body></s:Envelope>

This XML Signature includes an extra `Transform`
element, which has a child `XPath`
element. This element specifies the XPath predicate that validating applications must use to identify the signed content.

</div>

<div id="p_common_what_must_be_signed_attr">

Message attribute
-----------------

Finally, you can use the contents of a message attribute to determine what must be signed in the message. For example, you can configure a XXX
filter to extract certain content from the message and store it in aparticular message attribute. You can then specify this message attribute on the **Message Attribute**
tab.

To do this, select the **Extract nodes from message attribute**
check box, and enter the name of the attribute that contains the nodes in the field provided.

</div>
