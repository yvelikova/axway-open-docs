{
"title": "Insert SAML attribute assertion",
"linkTitle": "Insert SAML attribute assertion",
"date": "2019-10-17",
"description": "A Security Assertion Markup Language (SAML) attribute assertion contains information about a user in the form of a series of attributes. Having collated a certain amount of information about a user, the API Gateway can generate a SAML attribute assertion, and insert it into the downstream message."
}
﻿
<div id="p_attributes_insert_assertion_overview">

Overview
--------

A Security Assertion Markup Language (SAML) attribute assertion contains information about a user in the form of a series of attributes. Having collated a certain amount of information about a user, the API Gateway can generate a SAML attribute assertion, and insert it into the downstream message.

A *SAML Attribute*
(see example below) is generated for each entry in the `attribute.lookup.list`
attribute. Other filters from the Attributes
filter group can be used to insert user attributes into the `attribute.lookup.list`
attribute.

You can refer to the following example of a SAML attribute assertion when configuring this filter:

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

<div id="p_attributes_insert_assertion_details">

Assertion details settings
--------------------------

Configure the following fields on the **Assertion Details**
tab:

**Issuer Name**:\
Select the certificate containing the Distinguished Name (DName) to be used as the Issuer of the SAML assertion. This DName is included in the SAML assertion as the value of the `Issuer`
attribute of the `<saml:Assertion>`
element. For an example, see the sample SAML assertion above.

**Expire In**:\
Specify the lifetime of the assertion in this field. The lifetime of the assertion lasts from the time of insertion until the specified amount of time has elapsed.

**Drift Time**:\
The drift time
is used to account for differences in the clock times of the machine hosting API Gateway (that generate the assertion) and the machines that consume the assertion. The specified time is subtracted from the time at which API Gateway generates the assertion.

**SAML Version**:\
You can create SAML 1.0, 1.1, and 2.0 attribute assertions. Select the appropriate version from the list.

{{< alert title="Note" color="primary" >}}SAML 1.0 recommends the use of the `http://www.w3.org/TR/2001/REC-xml-c14n-20010315`
XML Signature Canonicalization algorithm. When inserting signed SAML 1.0 assertions into XML documents, it is quite likely that subsequent signature verification of these assertions might fail. This is due to the side effect of the algorithm including inherited namespaces into canonical XML calculations of the inserted SAML assertion that were not present when the assertion was generated.{{< /alert >}}
<div class="indentTable">

For this reason, Axway recommend that SAML 1.1 or 2.0 is used when signing assertions as they both uses the exclusive canonical algorithm `http://www.w3.org/2001/10/xml-exc-c14n#`
, which safeguards inserted assertions from such changes of context in the XML document. See section 5.4.2 of the `oasis-sstc-saml-core-1.0.pdf`
and section 5.4.2 of `sstc-saml-core-1.1.pdf`
documents, both of which are available at [http://www.oasis-open.org](http://www.oasis-open.org/).

</div>

</div>

<div id="p_attributes_insert_assertion_location">

Assertion location settings
---------------------------

The options on the **Assertion Location**
tab specify where the SAML assertion is inserted in the message. By default, the SAML assertion is added to the WS-Security block with the current SOAP actor/role. The following options are available:

**Append to Root or SOAP Header**:\
Appends the SAML assertion to the message root for a non-SOAP XML message, or to the SOAP Header for a SOAP message. For example, this option is suitable for cases where this filter might process SOAP XML messages or non-SOAP XML messages.

**Add to WS-Security Block with SOAP Actor/Role**:\
Adds the SAML assertion to the WS-Security block with the specified SOAP actor (SOAP 1.0) or role (SOAP 1.1). By default, the assertion is added with the current SOAP actor/role only, which means the WS-Security block with no actor. You can select a specific SOAP actor/role when available from the list.

**XPath Location**:\
To insert the SAML assertion at an arbitrary location in the message, you can use an XPath expression to specify the exact location in the message. You can select XPath expressions from the list. The default is the `First WSSE Security Element`, which has an XPath expression of `//wsse:Security`. You can add, edit, or remove expressions by clicking the relevant button. For more details, see
[Configure XPath expressions](/csh?context=640&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

You can specify exactly how the SAML assertion is inserted using the following options:

-   **Append to node returned by XPath expression**
    (the default)
-   **Insert before node returned by XPath expression**
-   **Replace node returned by XPath expression**

**Insert into Message Attribute**:\
Specify a message attribute to store the SAML assertion from the drop-down list (for example, `saml.assertion`). Alternatively, you can also enter a custom message attribute in this field (for example, `my.test.assertion`). The SAML assertion can then be accessed downstream in the policy.

</div>

<div id="p_attributes_insert_assertion_confirm">

Subject confirmation method settings
------------------------------------

The settings on the **Subject Confirmation Method**
tab determine how the `<SubjectConfirmation>`
block of the SAML assertion is generated. When the assertion is consumed by a downstream web service, the information contained in the `<SubjectConfirmation>`
block can be used to authenticate either the end user that authenticated to the API Gateway, or the issuer of the assertion, depending on what is configured.

The following is a typical `<SubjectConfirmation>`
block:

``` {space="preserve"}
<saml:SubjectConfirmation>
  <saml:ConfirmationMethod>
    urn:oasis:names:tc:SAML:1.0:cm:holder-of-key
  </saml:ConfirmationMethod>
  <dsig:KeyInfo xmlns:dsig="http://www.w3.org/2000/09/xmldsig#">
    <dsig:X509Data>
      <dsig:X509SubjectName>CN=axway</dsig:X509SubjectName>
      <dsig:X509Certificate>
        MIICmzCCAY ...... mB9CJEw4Q=
      </dsig:X509Certificate>
    </dsig:X509Data>
  </dsig:KeyInfo>
</saml:SubjectConfirmation>
```

The following configuration fields are available on the **Subject Confirmation Method**
tab:

**Method**:\
The value selected here determines the value of the `<ConfirmationMethod>`
element. The following table shows the available methods, their meanings, and their respective values in the `<ConfirmationMethod>`
element:

| Method         | Meaning                                                                                                                                                                                                                             | Value                                          |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| Holder Of Key  | The API Gateway includes the key used to prove that the API Gateway is the holder of the key, or includes a reference to the key.                                                                                                   | `urn:oasis:names:tc:SAML:1.0:cm:holder-of-key` |
| Bearer         | The subject of the assertion is the bearer of the assertion.                                                                                                                                                                        | `urn:oasis:names:tc:SAML:1.0:cm:bearer`        |
| SAML Artifact  | The subject of the assertion is the user that presented a SAML Artifact to the API Gateway.                                                                                                                                         | `urn:oasis:names:tc:SAML:1.0:cm:artifact`      |
| Sender Vouches | Use this confirmation method to assert that the API Gateway is acting on behalf of the authenticated end user. No other information relating to the context of the assertion is sent. It is recommended that both the assertion and 
  the SOAP Body must be signed if this option is selected. These message parts can be signed by using the **XML Signature Generation** filter (see *XML signature generation* on page 1).                                              | `urn:oasis:names:tc:SAML:1.0:cm:bearer`        |

{{< alert title="Note" color="primary" >}}You can also leave the **Method**
field blank, in which case no `<ConfirmationMethod>`
block is inserted into the assertion.{{< /alert >}}
**Holder-of-Key Configuration**:\
When you select `Holder of Key`
as the SAML subject confirmation in the **Method**
field, you must configure how information about the key is to be included in the message. There are a number of configuration options available depending on whether the key is a symmetric or asymmetric key.

Asymmetric Key:\
To use an asymmetric key as proof that the API Gateway is the holder-of-key entity, you must select the **Asymmetric Key**
radio button, and then configure the following fields on the **Asymmetric**
tab:

-   **Certificate from Store**:\
    To select a key that is stored in the Certificate Store, select this option and click the **Signing Key**
    button. On the **Select Certificate**
    screen, select the box next to the certificate that is associated with the key to use.
-   **Certificate from Selector Expression**:\
    Alternatively, the key may have already been used by a previous filter in the policy (for example, to sign a part of the message). In this case, the key can be retrieved using the selector expression entered in this field. Using a selector enables settings to be evaluated and expanded at runtime based on metadata (for example, in a message attribute, Key Property Store, or environment variable). For more details, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .

Symmetric Key:\
To use a symmetric key as proof that the API Gateway is the holder of key, select the **Symmetric Key**
radio button, and configure the fields on the **Symmetric**
tab:

-   **Generate Symmetric Key, and Save in Message Attribute**:\
    If you select this option, the API Gateway generates a symmetric key, which is included in the message before it is sent to the client. By default, the key is saved in the `symmetric.key`
    message attribute.
-   **Symmetric Key Selector Expression**:\
    If a previous filter (for example, an **XML Signature Generation**
    filter) has already used a symmetric key, you can reuse this key as proof that the API Gateway is the holder-of-key entity. Enter the name of the selector expression (for example, message attribute) in the field provided, which defaults to `${symmetric.key}`. Using a selector enables settings to be evaluated and expanded at runtime based on metadata (for example, in a message attribute, Key Property Store, or environment variable). For more details, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Encrypt using Certificate from Certificate Store**:\
    When a symmetric key is used, you must assume that the recipient has no prior knowledge of this key. It must, therefore, be included in the message so that the recipient can validate the key. To avoid meet-in-the-middle style attacks, where a hacker could eavesdrop on the communication channel between the API Gateway and the recipient and gain access to the symmetric key, the key must be encrypted so that only the recipient can decrypt the key.
-   One way of doing this is to select the recipient's certificate from the Certificate Store. By encrypting the symmetric key with the public in the recipient's certificate, the key can only be decrypted by the recipient's private key, to which only the recipient has access. Select the **Signing Key**
    button and then select the recipient's certificate on the Select Certificate
    dialog.
-   **Encrypt using Certificate from Selector Expression**:\
    Alternatively, if the recipient's certificate has already been used (perhaps to encrypt part of the message), the certificate can be retrieved using the selector expression entered in this field. Using a selector enables settings to be evaluated and expanded at runtime based on metadata (for example, in a message attribute, Key Property Store, or environment variable). For more details, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Symmetric Key Length**:\
    Enter the length (in bits) of the symmetric key to use.
-   **Key Wrap Algorithm**:\
    Select the algorithm to use to encrypt (*wrap*
    ) the symmetric key.

Key Info:\
The **Key Info**
tab must be configured regardless of whether you have elected to use symmetric or asymmetric keys. It determines how the key is included in the message. The following options are available:

-   **Do Not Include Key Info**:\
    Select this option if you do not wish to include a `<KeyInfo>`
    section in the SAML assertion.
-   **Embed Public Key Information**:\
    If this option is selected, details about the key are included in a `<KeyInfo>`
    block in the message. You can include the full certificate, expand the public key, include the distinguished name, and include a key name in the `<KeyInfo>`
    block by selecting the appropriate boxes. When selecting the **Include Key Name**
    field, you must enter a name in the **Value**
    field, and select the **Text Value**
    or **Distinguished Name Attribute**
    radio button, depending on the source of the key name.
-   **Put Certificate in Attachment**:\
    Select this option to add the certificate as an attachment to the message. The certificate is then referenced from the `<KeyInfo>`
    block.
-   **Security Token Reference**:\
    The Security Token Reference (STR) provides a way to refer to a key contained in a SOAP message from another part of the message. It is often used in cases where different security blocks in a message use the same key material, and it is considered an overhead to include the key more than once in the message.\
-   When this option is selected, a `<wsse:SecurityTokenReference>`
    element is inserted into the `<KeyInfo>`
    block. It references the key material using a `URI`
    to point to the key material and a `ValueType`
    attribute to indicate the type of reference used. For example, if the STR refers to an encrypted key, you should select `EncryptedKey`
    from the list, whereas if it refers to a `BinarySecurityToken`
    , select `X509v3`
    from the list. Other options are available to enable more specific security requirements.

</div>

<div id="p_attributes_insert_assertion_advanced">

Advanced settings
-----------------

The settings on the **Advanced**
tab include the following fields.

**Select Required Layout Type**:\
WS-Policy and SOAP Message Security define a set of rules that determine the layout of security elements that appear in the WS-Security header in a SOAP message. The SAML assertion is inserted into the WS-Security header according to the layout option selected here. The available options correspond to the WS-Policy Layout assertions of`Strict`, `Lax`, `LaxTimestampFirst`, and `LaxTimestampLast`.

**Indent**:\
Select this method to ensure that the generated signature is properly indented.

**Security Token Reference**:\
The generated SAML attribute assertion can be encapsulated in a `<SecurityTokenReference>`
block. The following example demonstrates this:

``` {space="preserve"}
<soap:Header>
  <wsse:Security
     xmlns:wsse="http://schemas.xmlsoap.org/ws/2002/12/secext"
     soap:actor="axway">
    <wsse:SecurityTokenReference>
      <wsse:Embedded>
        <saml:Assertion xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"
           ID="Id-0000010a3c4ff12c-0000000000000002"
           IssueInstant="2006-03-27T15:26:12Z" Version="2.0">
          <saml:Issuer Format="urn:oasis ... WindowsDomainQualifiedName">
            TestCA
          </saml:Issuer>
          <saml:Subject>
            <saml:NameID Format="urn:oasis ... WindowsDomainQualifiedName">
              TestUser
            </saml:NameID>
          </saml:Subject>
          <saml:Conditions NotBefore="2005-03-27T15:20:40Z"
            NotOnOrAfter="2028-03-27T17:20:40Z"/>
          <saml:AttributeStatement>
            <saml:Attribute Name="role" NameFormat="http://www.example.com">
              <saml:AttributeValue>admin</saml:AttributeValue>
            </saml:Attribute>
            <saml:Attribute Name="email" NameFormat="http://www.example.com">
              <saml:AttributeValue>joe@example.com</saml:AttributeValue>
            </saml:Attribute>
            <saml:Attribute Name="attrib1" NameFormat="">
              <saml:AttributeValue xsi:nil="true"/>
              <saml:AttributeValue>value1</saml:AttributeValue>
            </saml:Attribute>
          </saml:AttributeStatement>
        </saml:Assertion>
      </wsse:Embedded>
    </wsse:SecurityTokenReference>
  </wsse:Security>
</soap:Header>
```

To add the SAML assertion to a `<SecurityTokenReference>`
block like in this example, select the **Embed SAML assertion within Security Token Reference**
option. Otherwise, select **No Security Token Reference**.

</div>
