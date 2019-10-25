{
"title": "SMIME encryption",
"linkTitle": "SMIME encryption",
"date": "2019-10-17",
"description": "You can use the **SMIME Encryption**\\nfilter to generate an encrypted Secure/Multipurpose Internet Mail Extensions (SMIME) message. This filter enables you to configure the certificates of the recipients of the encrypted message. You can also configure advanced options such as ciphers and Base64 encoding."
}
﻿
<div id="p_encryption_smime_enc_overview">

Overview
--------

You can use the **SMIME Encryption**
filter to generate an encrypted Secure/Multipurpose Internet Mail Extensions (SMIME) message. This filter enables you to configure the certificates of the recipients of the encrypted message. You can also configure advanced options such as ciphers and Base64 encoding.

See also [*SMIME decryption* on page 1](encryption_smime_dec.htm).

</div>

<div id="p_encryption_smime_enc_conf">

General settings
----------------

Complete the following field:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

</div>

<div id="p_encryption_smime_enc_recipients">

Recipient settings
------------------

The **Recipients**
tab enables you to configure the certificates of the recipients of the encrypted SMIME message. Select one of the following options:

**Use the following certificates**:\
This is the default option. Select the certificates of the recipients of the encrypted message. The public keys associated with these certificates are used to encrypt the data so that it can only be decrypted using the associated private keys.

**Certificate in attribute**:\
Alternatively, enter the message attribute that contains the certificate of the recipients of the encrypted message. Defaults to the `certificate`
message attribute.

</div>

<div id="p_encryption_smime_enc_adv">

Advanced settings
-----------------

The **Advanced**
tab includes the following settings:

**Cipher**:\
Enter the cipher that you want to use to encrypt the message data. Defaults to the `DES-EDE3-CBC`
cipher.

**Content-Type**:\
Enter the `Content-Type`
of the message data. Defaults to `application/pkcs7-mime`.

**Base64 encode**:\
Select whether to Base64 encode the message data. This option is not selected by default.

</div>
