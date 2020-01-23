{
"title": "SAML authorization",
"linkTitle": "SAML authorization",
"date": "2019-10-17",
"description": "A Security Assertion Markup Language (SAML) authorization assertion contains proof that a certain user has been authorized to access a specified resource. Typically, such assertions are issued by a SAML Policy Decision Point (PDP) when a client requests access to a specified resource. The client must present identity information to the PDP, which ensures that the client does have permission to access the resource. The PDP then issues a SAML authorization assertion stating whether the client is allowed access the resource. "
}
﻿
<div id="p_authz_saml_assertion_over">

Overview
--------

A Security Assertion Markup Language (SAML) authorization assertion contains proof that a certain user has been authorized to access a specified resource. Typically, such assertions are issued by a SAML Policy Decision Point (PDP) when a client requests access to a specified resource. The client must present identity information to the PDP, which ensures that the client does have permission to access the resource. The PDP then issues a SAML authorization assertion stating whether the client is allowed access the resource.

When the API Gateway receives a request containing such an assertion, it performs the following validation on the assertion details:

-   Ensures the resource in the assertion matches that configured in the **SAML Authorization**
    filter
-   Checks the client's access permissions for the resource
-   Ensures the assertion has not expired

If the information validates, the API Gateway authorizes the message for the resource specified in the assertion.

The following example of a SAML authorization assertion might be useful when configuring the **SAML Authorization**
filter.

``` {space="preserve"}
<saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:1.0:assertion"
  xmlns:ds="http://www.w3.org/2000/09/xmldsig#"
  MajorVersion="1" MinorVersion="0"
  AssertionID="192.168.0.131.1010924615489"
  Issuer="AA" IssueInstant="2002-03-26 16:23:35">
  <saml:Conditions NotBefore="2002-04-18T09:19:00Z"
    NotOnOrAfter="2003-06-28T09:21:00Z"/>
  <saml:AuthorizationDecisionStatement
    Resource="http://www.abc.org/services/getPrice"
    Decision="Permit">
      <saml:Action>Read</saml:Action>
  </saml:AuthorizationDecisionStatement>
</saml:Assertion>
```

</div>

<div id="p_authz_saml_assertion_details">

Details settings
----------------

The following fields are available on the **Details**
tab:

**SOAP Actor/Role**:\
There might be several authorization assertions contained in a message. You can identify the assertion to validate by entering the name of the SOAP actor/role of the WS-Security header that contains the assertion.

**XPath Expression**:\
Alternatively, you can enter an XPath expression to locate the authorization assertion. You can configure XPath expressions using the **Add**, **Edit**,
and **Delete**
buttons.

**SAML Namespace**:\
Select the SAML namespace that must be used on the SAML assertion for this filter to succeed. To not check the namespace, select the `Do not check version`
option from the list.

**SAML Version**:\
Enter the SAML version that the assertion must adhere to by entering the major version in the first field, followed by the minor version in the second field. For example, for SAML version 2.0, enter `2`
in the first field and `0`
in the second field.

**Drift Time**:\
The *drift time*, specified in seconds, is used when checking the validity dates on the authorization assertion. The drift time allows for differences between the clock times of the machine on which the assertion was generated and the machine hosting the API Gateway.

**Remove enclosing WS-Security element on successful validation**:\
Select this check box to remove the WS-Security block that contains the SAML assertion after the assertion has been successfully validated.

</div>

<div id="p_authz_saml_assertion_issuers">

Trusted issuer settings
-----------------------

You can use the table on the **Trusted Issuers**
tab to select the issuers that you consider trusted. In other words, this filter only accepts assertions that have been issued by the selected SAML authorities.

Click the **Add**
button to display the **Trusted Issuers**
dialog. Select the Distinguished Name of a SAML authority whose certificate has been added to the certificate store, and click **OK**. Repeat this step to add more SAML authorities to the list of trusted issuers.

</div>

<div id="p_authz_saml_assertion_options">

Optional settings
-----------------

The optional settings enable further examination of the contents of the authorization assertion. The assertion can be checked to ensure that the authorized subject matches a specified value, and that the resource specified in the assertion matches the one entered here.

The API Gateway can verify that the subject in the SAML assertion (the `<NameIdentifier>`
) matches one of the following options:

-   **The subject of the authentication filter**
-   **The following value**: (for example, `user@axway.com`)
-   **Neither of the above**

The API Gateway examines the `<Resource>`
tag inside the SAML authorization assertion. By default, it compares the `<Resource>`
to the `destination.uri`
attribute that is set in the policy. If they are identical, this filter passes. Otherwise, it fails.

You can enter a value for the resource in the **Resource**
field. The API Gateway then compares the `<Resource>`
in the assertion to this value instead of the `destination.uri`
attribute. The filter passes if the `<Resource>`
value matches the value entered in the **Resource**
field.

</div>
