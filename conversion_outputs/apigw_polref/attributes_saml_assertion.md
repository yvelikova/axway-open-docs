{
"title": "Retrieve attribute from SAML attribute assertion",
"linkTitle": "Retrieve attribute from SAML attribute assertion",
"date": "2019-10-17",
"description": "A SAML (Security Assertion Markup Language) attribute assertion contains information about a user in the form of a series of attributes. The **Retrieve from SAML Attribute Assertion**\\nfilter can retrieve these attributes and store them in the `attribute.lookup.list`\\nmessage attribute."
}
﻿
<div id="p_attributes_saml_assertion_over">

Overview
--------

A SAML (Security Assertion Markup Language) attribute assertion contains information about a user in the form of a series of attributes. The **Retrieve from SAML Attribute Assertion**
filter can retrieve these attributes and store them in the `attribute.lookup.list`
message attribute.

The following SAML attribute assertion contains three attributes, `"role"`, `"email"`, and `"dept"`. The **Retrieve from SAML Attribute Assertion**
filter stores all three attributes and their values in the `attribute.lookup.list`
message attribute.

``` {space="preserve"}
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:xsi="http://www.w3.org/2000/10/XMLSchema-instance">
    <soap:Header>
      <wsse:Security>
        <saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
          ID="Id-0000010a3c4ff12c-0000000000000002"
          IssueInstant="2006-03-27T15:26:12Z" Version="2.0">
        <saml:Issuer Format="urn:oasis ... WindowsDomainQualifiedName">
          TestCA
        </saml:Issuer>
        <saml:Subject>
          <saml:NameIdentifier Format="urn:oasis ... WindowsDomainQualifiedName">
            TestUser
          </saml:NameIdentifier>
        </saml:Subject>
        <saml:Conditions NotBefore="2005-03-27T15:20:40Z"
          NotOnOrAfter="2028-03-27T17:20:40Z"/>
        <saml:AttributeStatement>
          <saml:Attribute Name="role" NameFormat="http://www.axway.com">
            <saml:AttributeValue>admin</saml:AttributeValue>
          </saml:Attribute>
          <saml:Attribute Name="email" NameFormat="http://www.axway.com">
            <saml:AttributeValue>joe@axway.com</saml:AttributeValue>
          </saml:Attribute>
          <saml:Attribute Name="dept" NameFormat="">
            <saml:AttributeValue>engineering</saml:AttributeValue>
          </saml:Attribute>
        </saml:AttributeStatement>
        </saml:Assertion>
      </wsse:Security>
    </soap:Header>
    <soap:Body>
      <product>
        <name>API Gateway</name>
        <company>Axway</company>
        <description>Web Services Security</description>
      </product>
    </soap:Body>
</soap:Envelope>
```

</div>

<div id="p_attributes_saml_assertion_gen_conf">

Details settings
----------------

The following fields are available on the **Details**
tab:

**SOAP Actor/Role**:\
If you expect the SAML assertion to be embedded within a WS-Security block, you can identify this block by specifying the SOAP Actor or Role of the WS-Security header that contains the assertion.

**XPath Expression**:\
Alternatively, if the assertion is not contained within a WS-Security block, you can enter an XPath expression to locate the attribute assertion. XPath expressions can be added by selecting the **Add**
button. Expressions can be edited and deleted by selecting an XPath expression and clicking the **Add**
and **Delete**
buttons respectively.

**SAML Namespace**:\
Select the SAML namespace that must be used on the SAML assertion for this filter to succeed. If you do not wish to check the namespace, select the `Do not check version`
option from the list.

**SAML Version**:\
Enter the SAML version that the assertion must adhere to by entering the major version in the first field, followed by the minor version in the second field. For example, for SAML 2.0, enter `2`
in the first field and `0`
in the second field.

**Drift Time**:\
When the API Gateway receives a SAML attribute assertion, it first checks to make sure that it has not expired. The lifetime of the assertion is specified using the `NotBefore` and `NotOnOrAfter` attributes of the `<Conditions>`
element in the assertion itself. The API Gateway makes sure that the time at which it validates the assertion is between the `NotBefore` and `NotOnOrAfter` times.

The **Drift Time**
is used to account for differences in the clock time of the machine that generated the assertion and the machine hosting the API Gateway. The time specified here is subtracted from the time at which the API Gateway attempts to validate the assertion.

</div>

<div id="p_attributes_saml_assertion_trusted">

Trusted issuer settings
-----------------------

You can use the table on this tab to select the issuers that you consider trusted. In other words, this filter only accepts assertions that have been issued by the SAML authorities selected here.

Click the **Add**
button to display the **Trusted Issuers**
window. Select the Distinguished Name of a SAML authority whose certificate has been added to the certificate store and click the **OK**
button. Repeat this step to add more SAML authorities to the list of trusted issuers.

</div>

<div id="p_attributes_saml_assertion_subject">

Subject settings
----------------

The API Gateway can perform some very basic authentication checks on the subject or sender of the assertion using the options available on the **Subject**
tab. The API Gateway can compare the subject of the assertion (for example, the `<NameIdentifier>`) to one of the following values:

-   **The subject of the authentication filter**:\
    Select this option if the user specified in the `<NameIdentifier>`
    element must match the user that authenticated to the API Gateway. The subject of the authentication event is stored in the `authentication.subject.id`
    message attribute.
-   **The following value**:\
    This option can be used if the `<NameIdentifier>`
    must match a user-specified value. Select this radio button and enter the value in the field provided.
-   **Neither of the above**:\
    If the **Neither of the above**
    radio button is selected, the API Gateway does not attempt to match the `<NameIdentifier>`
    to any value.

</div>

<div id="p_attributes_saml_assertion_lookup">

Lookup attributes settings
--------------------------

The **Lookup Attributes**
tab is used to determine what attributes the API Gateway should extract from the SAML attribute assertion. Extracted attributes and their values are set to the `attribute.lookup.list`
message attribute.

The table lists the attributes that the API Gateway extracts from the assertion and set to the `attribute.lookup.list`.

Alternatively, check the **Extract all of the attributes from the SAML assertion**
check box to configure the API Gateway to extract all attributes from the assertion. All attributes are set to the `attribute.lookup.list`
message attribute.

To configure a specific attribute to look up in the message, click the **Add**
button to display the **Attribute Lookup**
dialog. Enter the value of the "Name" attribute of the `<Attribute>`
element in the **Attribute name**
field. Enter the value of the "NameFormat" attribute of the `<Attribute>`
element in the **Namespace**
field.

</div>
