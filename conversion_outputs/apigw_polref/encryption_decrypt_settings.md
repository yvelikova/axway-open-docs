{
"title": "XML decryption settings",
"linkTitle": "XML decryption settings",
"date": "2019-10-17",
"description": "The API Gateway can decrypt an XML encrypted message on behalf of its intended recipients. XML Encryption is a W3C standard that enables data to be encrypted and decrypted at the application layer of the OSI stack, thus ensuring complete end-to-end confidentiality of data."
}
﻿
<div id="p_encryption_decrypt_settings_overview">

Overview
--------

The API Gateway can decrypt an XML encrypted message on behalf of its intended recipients. XML Encryption is a W3C standard that enables data to be encrypted and decrypted at the application layer of the OSI stack, thus ensuring complete end-to-end confidentiality of data.

You should use the **XML-Decryption Settings**
in conjunction with the **XML-Decryption**
filter, which performs the decryption. The **XML-Decryption Settings**
generates the `decryption.properties`
message attribute, which is required by the **XML-Decryption**
filter.

{{< alert title="Note" color="primary" >}}The output of a successfully executed decryption filter is the original unencrypted message. Depending on whether the **Remove Encrypted Key used in decryption**
has been enabled, all information relating to the encryption key can be removed from the message. For more details, see [*Options* on page 1](#Options).{{< /alert >}}
See also [*XML decryption* on page 1](encryption_decrypt.htm).

</div>

<div id="p_encryption_decrypt_settings_xmlenc_over">

XML encryption overview
-----------------------

XML encryption facilitates the secure transmission of XML documents between two application endpoints. Whereas traditional transport-level encryption schemes, such as SSL and TLS, can only offer point-to-point security, XML encryption guarantees complete end-to-end security.

Encryption takes place at the application-layer and so the encrypted data can be encapsulated in the message itself. The encrypted data can therefore remain encrypted as it travels along its path to the target Web service. Furthermore, the data is encrypted such that only its intended recipients can decrypt it.

To understand how the API Gateway decrypts XML encrypted messages, you should first examine the format of an XML encryption block. The following example shows a SOAP message containing information about Axway:

``` {space="preserve"}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Body> 
    <getCompanyInfo xmlns="www.axway.com">
       <name>Company</name>
       <description>XML Security Company</description>
    </getCompanyInfo>
  </s:Body>
</s:Envelope>
```

After encrypting the SOAP Body, the message is as follows:

``` {space="preserve"}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Header>
   <Security xmlns="http://schemas.xmlsoap.org/ws/2003/06/secext" s:actor="Enc">
    <!-- Encapsulates the recipient's key details -->
    <enc:EncryptedKey xmlns:enc="http://www.w3.org/2001/04/xmlenc#"
      Id="00004190E5D1-7529AA14" MimeType="text/xml">
      <enc:EncryptionMethod Algorithm="http://www.w3.org/2001/04xmlenc#rsa-1_5">
        <enc:KeySize>256</enc:KeySize>
      </enc:EncryptionMethod>
      <enc:CipherData>
      <!-- The session key encrypted with the recipient's public key -->
        <enc:CipherValue>AAAAAJ/lK ... mrTF8Egg==</enc:CipherValue>
      </enc:CipherData>
      <dsig:KeyInfo xmlns:dsig="http://www.w3.org/2000/09/xmldsig#">
        <dsig:KeyName>sample</dsig:KeyName>
          <dsig:X509Data>
          <!-- The recipient's X.509 certificate -->
            <dsig:X509Certificate>MIIEZzCCA0 ... fzmc/YR5gA</dsig:X509Certificate>
          </dsig:X509Data>
      </dsig:KeyInfo>
      <enc:CarriedKeyName>Session key</enc:CarriedKeyName>
      <enc:ReferenceList>
        <enc:DataReference URI="#00004190E5D1-5F889C11"/>
    </enc:ReferenceList>
    </enc:EncryptedKey>
   </Security>
  </s:Header>
  <enc:EncryptedData xmlns:enc="http://www.w3.org/2001/04/xmlenc#"
     Id="00004190E5D1-5F889C11" MimeType="text/xml"
     Type="http://www.w3.org/2001/04/xmlenc#Element">
       <enc:EncryptionMethod Algorithm="http://www.w3.org/2001/04xmlenc#aes256-cbc">
          <enc:KeySize>256</enc:KeySize>
       </enc:EncryptionMethod>
       <enc:CipherData>
         <!-- The SOAP Body encrypted with the session key -->
         <enc:CipherValue>E2ioF8ib2r ... KJAnrX0GQV</enc:CipherValue>
       </enc:CipherData>
       <dsig:KeyInfo xmlns:dsig="http://www.w3.org/2000/09/xmldsig#">
          <dsig:KeyName>Session key</dsig:KeyName>
       </dsig:KeyInfo>
  </enc:EncryptedData>
<s:Envelope>
```

The most important elements are as follows:

-   `EncryptedKey`:\
    The `EncryptedKey`
    element encapsulates all information relevant to the encryption key.
-   `EncryptionMethod`:\
    The `Algorithm`
    attribute specifies the algorithm that is used to encrypt the data. The message data (`EncryptedData`) is encrypted using the Advanced Encryption Standard (AES) *symmetric cipher*
    , but the session key (`EncryptedKey`) is encrypted with the RSA *asymmetric*
    algorithm.
-   `CipherValue`:\
    The value of the encrypted data. The contents of the `CipherValue`
    element are always Base64 encoded.
-   `KeyInfo`:\
    Contains information about the recipient and his encryption key, such as the key name, X.509 certificate, and Common Name.
-   `ReferenceList`:\
    This element contains a list of references to encrypted elements in the message. The `ReferenceList`
    contains a `DataReference`
    element for each encrypted element, where the value of a URI attribute points to the `Id`
    of the encrypted element. In the previous example, you can see that the `DataReference`
    URI attribute contains the value `#00004190E5D1-5F889C11`, which corresponds with the `Id`
    of the `EncryptedData`
    element.
-   `EncryptedData`:\
    The XML element(s) or content that has been encrypted. In this case, the SOAP `Body`
    element has been encrypted, and so the `EncryptedData`
    block has replaced the SOAP `Body`
    element.

Now that you have seen how encrypted data can be encapsulated in an XML message, it is important to discuss how this data gets encrypted in the first place. When you understand how data is encrypted, the fields that must be configured to decrypt this data become easier to understand.

When a message is encrypted, only the intended recipient(s) of the message can decrypt it. By encrypting the message with the recipient's public key, the sender can be guaranteed that only the intended recipient can decrypt the message using his private key, to which he has sole access. This is the basic principle behind *asymmetric cryptography*.

In practice, however, encrypting and decrypting data with a public-private key pair is notoriously CPU-intensive and time consuming. Because of this, asymmetric cryptography is seldom used to encrypt large amounts of data. The following steps exemplify a more typical encryption process:

1.  The sender generates a one-time *symmetric*
    (or session) key which is used to encrypt the data. Symmetric key encryption is much faster than asymmetric encryption and is far more efficient with large amounts of data.
2.  The sender encrypts the data with the symmetric key. This same key can then be used to decrypt the data. It is therefore crucial that only the intended recipient can access the symmetric key and consequently decrypt the data.
3.  To ensure that nobody else can decrypt the data, the symmetric key is encrypted with the recipient's *public key*.
4.  The data (encrypted with the symmetric key) and session key(encrypted with the recipient's public key) are then sent together to the intended recipient.
5.  When the recipient receives the message he, decrypts the encrypted session key using his *private key*. Because the recipient is the only one with access to the private key, he is the only one who can decrypt the encrypted session key.
6.  Armed with the decrypted session key, the recipient can decrypt the encrypted data into its original plaintext form.

Now that you understand how XML Encryption works, it is now time to learn how to configure the API Gateway to decrypt XML encrypted messages. The following sections describe how to configure the **XML Decryption Settings**
filter to decrypt encrypted XML data.

</div>

<div id="p_encryption_decrypt_settings_enc_data">

Nodes to decrypt
----------------

An XML message may contain several `EncryptedData`
blocks. The **Node(s) to Decrypt**
section enables you to specify which encryption blocks are to be decrypted using the following approaches:

-   Decrypt all encrypted nodes
-   Use XPath to select encrypted nodes

Configure one of the following settings:

**Decrypt All**:\
The API Gateway attempts to decrypt *all* `EncryptedData`
blocks contained in the message.

**Use XPath**:\
This option enables the administrator to explicitly choose the `EncryptedData`
block that the API Gateway should decrypt.

For example, the following skeleton SOAP message contains two `EncryptedData`
blocks:

``` {space="preserve"}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Header>...<s:Header>
  <s:Body>
    <!-- 1st EncryptedData block -->
    <e:EncryptedData xmlns:e="http://www.w3.org/2001/04/xmlenc#" 
       Encoding="iso-8859-1" Id="ENC_1" MimeType="text/xml"
       Type="http://www.w3.org/2001/04/xmlenc#Element">
        ...
    </e:EncryptedData>
    <!-- 2nd EncryptedData block -->
      <e:EncryptedData xmlns:e="http://www.w3.org/2001/04/xmlenc#"
        Encoding="iso-8859-1" Id="ENC_2" MimeType="text/xml"
        Type="http://www.w3.org/2001/04/xmlenc#Element">
         ...
    </e:EncryptedData>
  </s:Body>
</s:Envelope>
```

The `EncryptedData`
blocks are selected using XPath. You can use the following XPath expressions to select the respective `EncryptedData`
blocks:

EncryptedData Block
XPath Expression
1st
`//enc:EncryptedData[@Id='ENC_1']`
2nd
`//enc:EncryptedData[@Id='ENC_2']`
Click the **Add**, **Edit**, or **Delete**
buttons to add, edit, or remove an XPath expression.

</div>

<div id="p_encryption_decrypt_key">

Decryption key
--------------

The **Decryption Key**
section enables you to specify the key to use to decrypt the encrypted nodes. As discussed in [*XML encryption wizard* on page 1](encryption_enc_wizard.htm), data encrypted with a public key can only be decrypted with the corresponding private key. The **Decryption Key**
settings enable you to specify the private (decryption) key from the `<KeyInfo>`
element of the XML Encryption block, or the certificate stored in the Axway message attribute can be used to lookup the private key of the intended recipient of the encrypted data in the Certificate Store.

**Find via KeyInfo in Message**:\
Select this option if you wish to determine the decryption key to use from the `KeyInfo`
section of the `EncryptedKey`
block. The `KeyInfo`
section contains a reference to the public key used to encrypt the data. You can use this `KeyInfo`
section reference to find the relevant private key (from the Axway Certificate Store) to use to decrypt the data.

**Find via certificate from Selector Expression**:\
Select this option if you do not wish to use the `KeyInfo`
section in the message. Enter a selector expression that contains a certificate, (for example, `${certificate}`) whose corresponding private key is stored in the Axway Certificate Store.

Using a selector enables settings to be evaluated and expanded at runtime based on metadata (for example, in a message attribute, a Key Property Store (KPS), or environment variable). For more details, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Extract nodes from Selector Expression**:\
Specify whether to extract nodes from a specified selector expression (for example, `${node.list}`). This setting is not selected by default.

Typically, a **Find Certificate**
filter is used in a policy to locate an appropriate certificate and store it in the `certificate`
message attribute. When the certificate has been stored in this attribute, the **XML Decryption Settings**
filter can use this certificate to look up the Certificate Store for a corresponding private key for the public key stored in the certificate. To do this, select the `certificate`
attribute from the drop-down list.

</div>

<div id="p_encryption_decrypt_options">

Options
-------

The following configuration settings are available in the **Options**
section:

**Fail if no encrypted data found**:\
If this option is selected, the filter fails if no `<EncryptedData>`
elements are found within the message.

**Remove the Encrypted Key used in decryption**:\
Select this option to remove information relating to the decryption key from the message. When this option is selected, the `<EncryptedKey>`
block is removed from the message.

{{< alert title="Note" color="primary" >}}In cases where the `<EncryptedKey>`
block has been included in the `<EncryptedData>`
block, it is removed regardless of whether this setting has been selected.{{< /alert >}}
**Default Derived Key Label**:\
If the API Gateway consumes a `<DerivedKeyToken>`, the default value entered is used to recreate the derived key that is used to decrypt the encrypted data.

**Algorithm Suite Required**:\
Select the WS-Security Policy *Algorithm Suite*
that must have been used when encrypting the message. This check ensures that the appropriate algorithms were used to encrypt the message.

</div>

<div id="p_encryption_decrypt_wizard">

Auto-generation using the XML decryption wizard
-----------------------------------------------

Because the **XML-Decryption Settings**
filter must always be paired with an **XML-Decryption**
filter, it makes sense to have a wizard that can generate both of these filters at the same time. To use the wizard, right-click the name of the policy in the tree view of the Policy Studio, and select the **XML Decryption Settings**
menu option.

Configure the fields on the **XML Decryption Settings**
dialog as explained in the previous sections. When finished, an **XML-Decryption Settings**
filter is created along with an **XML-Decryption**
filter.

</div>
