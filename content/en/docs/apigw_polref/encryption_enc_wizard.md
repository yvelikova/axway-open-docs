{
"title": "XML encryption wizard",
"linkTitle": "XML encryption wizard",
"date": "2019-10-17",
"description": "The following filters are involved in encrypting a message using XML encryption:"
}
﻿
<div id="encryption_enc_wizard_overview">

Overview
--------

The following filters are involved in encrypting a message using XML encryption:

| Filter                  | Role                                                                                                                                                                          | Topic                                                                  |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| Find Certificate        | Specifies the certificate that contains the public key to use in the encryption. The data is encrypted such that it can only be decrypted with the corresponding private key. | [*Find certificate* on page 1](certificate_find_cert.htm)              |
| XML-Encryption Settings | Specifies the recipient of the encrypted data, what data to encrypt, what algorithms to use, and other such options that affect the way the data is encrypted.                | [*XML encryption settings* on page 1](encryption_encrypt_settings.htm) |
| XML-Encryption          | Performs the actual encryption using the certificate selected in the **Find Certificate**                                                                                     
  filter, and the options set in the **XML-Encryption Settings**                                                                                                                 
  filter.                                                                                                                                                                        | [*XML encryption* on page 1](encryption_encrypt.htm)                   |

While these filters can be configured independently of each other, it makes sense to configure them all at the same time because they must play a role in the policy that XML-encrypts messages. You can do this using the **XML Encryption Wizard**.

The wizard is available by right-clicking the name of the policy in the tree view of the Policy Studio, and selecting the **XML Encryption Settings**
menu option. The next section describes how to configure the settings on this dialog.

</div>

<div id="encryption_enc_wizard_conf">

Configuration
-------------

The first step in configuring the **XML Encryption Wizard**
is to select the certificate that contains the public key to use to encrypt the data. When the data has been encrypted with this public key, it can only be decrypted using the corresponding private key. Select the relevant certificate from the list of **Certificates in the Trusted Certificate Store**.

When the wizard is completed, the information configured on this screen results in the auto-generation of a **Find Certificate**
filter. This filter is automatically configured to use the selected certificate from the Certificate Store. For more details, see *Find certificate* on page 1.

After clicking **Next**
on the first screen of the wizard, the configuration options for the **XML-EncryptionSettings**
filter are displayed. For more details, see [*XML encryption settings* on page 1](encryption_encrypt_settings.htm).

When you have completed all the steps in the wizard, a policy is created that comprises a **Find Certificate**, **XML-Encryption Settings**, and **XML-Encryption**
filter. You can insert other filters into this policy as required. However, the order of the encryption filters must be maintained as follows:

-   Find Certificate
-   XML-Encryption Settings
-   XML-Encryption

</div>
