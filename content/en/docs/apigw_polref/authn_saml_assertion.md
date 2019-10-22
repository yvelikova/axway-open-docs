{
"title": "SAML authentication",
"linkTitle": "SAML authentication",
"date": "2019-10-17",
"description": "A Security Assertion Markup Language (SAML) *authentication assertion*\\nis issued as proof of an authentication event. Typically, an end user authenticates to an intermediary, who generates a SAML authentication assertion to prove that it has authenticated the user. The intermediary inserts the assertion into the message for consumption by a downstream web service."
}
﻿
<div id="p_authn_saml_assertion_overview">

Overview
--------

A Security Assertion Markup Language (SAML) *authentication assertion*
is issued as proof of an authentication event. Typically, an end user authenticates to an intermediary, who generates a SAML authentication assertion to prove that it has authenticated the user. The intermediary inserts the assertion into the message for consumption by a downstream web service.

When the API Gateway receives a message containing a SAML authentication assertion, it does not attempt to authenticate the end user again. Instead, it authenticates the sender of the assertion (the intermediary) to ensure that only the intermediary could have issued the assertion, and then validates the authentication details contained in the assertion. Therefore, the API Gateway performs the following tasks in this scenario:

-   Authenticates the sender of the message (the intermediary)
-   Extracts the end user's identity from the authentication assertion and validates the authentication details

The **SAML Authentication**
filter performs the second task. A separate authentication filter must be placed before this filter in the policy to authenticate the sender of the assertion. The end user's identity is used in any subsequent authorization filters.

The following sample SOAP message contains a SAML authentication assertion:

``` {space="preserve"}
<?xml version="1.0" encoding="UTF-8"?>
<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">
<soap-env:Header xmlns:wsse="http://schemas.xmlsoap.org/ws/2002/04/secext">
<wsse:Security>
  <saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:1.0:assertion"
    AssertionID="axway-1056477425082"
    Id="axway-1056477425082"
    IssueInstant="2003-06-24T17:57:05Z"
    Issuer="CN=Sample User,....,C=IE"
    MajorVersion="1"
    MinorVersion="0">
    <saml:Conditions
      NotBefore="2003-06-20T16:20:10Z"
      NotOnOrAfter="2003-06-20T18:20:10Z"/>
      <saml:AuthenticationStatement
        AuthenticationInstant="2003-06-24T17:57:05Z"
        AuthenticationMethod="urn:oasis:names:tc:SAML:1.0:am:password">
        <saml:SubjectLocality IPAddress="192.168.0.32"/>
        <saml:Subject>
          <saml:NameIdentifier
            Format="urn:oasis:names:tc:SAML:1.0:assertion#X509SubjectName">
            sample
          </saml:NameIdentifier>
        </saml:Subject>
      </saml:AuthenticationStatement>
      <dsig:Signature xmlns:dsig="http://www.w3.org/2000/09/xmldsig#"
        id="Sample User">
       <dsig:SignedInfo>
         .....
       </dsig:SignedInfo>
       <dsig:SignatureValue>
         rpa/......0g==
       </dsig:SignatureValue>
       <dsig:KeyInfo>
         .....
       </dsig:KeyInfo>
     </dsig:Signature>
  </saml:Assertion>
</wsse:Security>
</soap-env:Header>
<soap-env:Body>
  <ns1:getTime xmlns:ns1="urn:timeservice">
  </ns1:getTime>
</soap-env:Body>
</soap-env:Envelope>
```

</div>

<div id="p_authn_saml_assertion_details">

Details settings
----------------

Configure the following fields on the **Details**
tab:

**SOAP Actor/Role**:\
If you expect the SAML assertion to be embedded in a WS-Security block, you can identify this block by specifying the SOAP Actor or Role of the WS-Security header that contains the assertion.

**XPath Expression**:\
Alternatively, if the assertion is not contained in a WS-Security block, you can enter an XPath expression to locate the authentication assertion. You can configure XPath expressions using the **Add**, **Edit**,
and **Delete**
buttons.

**SAML Namespace**:\
Select the SAML namespace that must be used on the SAML assertion for this filter to succeed. If you do not wish to check the namespace, select the `Do not check version`
option from the list.

**SAML Version**:\
Specify the SAML version that the assertion must adhere to by entering the major version in the first field, and the minor version in the second field. For example, for SAML 2.0, enter `2`
in the first field and `0`
in the second field.

**Drift Time**:\
The *drift time*, specified in seconds, is used when checking the validity dates on the authentication assertion. The drift time allows for differences between the clock times of the machine on which the assertion was generated and the machine hosting the API Gateway.

**Remove enclosing WS-Security element on successful validation**:\
Select this check box to remove the WS-Security block that contains the SAML assertion after the assertion has been successfully validated.

</div>

<div id="p_authn_saml_assertion_trusted">

Trusted issuer settings
-----------------------

You can use the table on the **Trusted Issuers**
tab to select the issuers that you consider trusted. In other words, this filter only accepts assertions that have been issued by the SAML authorities selected here.

Click the **Add**
button to display the **Trusted Issuers**
window. Select the Distinguished Name of a SAML authority whose certificate has been added to the certificate store, and click **OK**. Repeat this step to add more SAML authorities to the list of trusted issuers.

</div>
