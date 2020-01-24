{
"title": "XML encryption",
"linkTitle": "XML encryption",
"date": "2019-10-17",
"description": "The **XML-Encryption**\\nfilter is responsible for encrypting parts of XML messages based on the settings configured in the **XML-Encryption Settings**\\nfilter."
}
﻿
<div id="p_encryption_encrypt_overview">

Overview
--------

The **XML-Encryption**
filter is responsible for encrypting parts of XML messages based on the settings configured in the **XML-Encryption Settings**
filter.

The **XML-Encryption Settings**
filter generates the `encryption.properties`
message attribute based on configuration settings. The **XML-Encryption**
filter uses these properties to perform the encryption of the data.

See also [](encryption_encrypt.htm)[XML encryption settings](encryption_encrypt_settings.htm).

</div>

<div id="p_encryption_encrypt_conf">

Configuration
-------------

Enter a suitable name for the filter to display in a policy.

</div>

<div id="p_encryption_encrypt_wiz">

Auto-generation using the XML encryption settings wizard
--------------------------------------------------------

Because the **XML-Encryption**
filter must always be used in conjunction with the **XML-Encryption Settings**
and **Find Certificate**
filters, the Policy Studio provides a wizard that can generate these three filters at the same time. To use this wizard, right-click a policy node under the **Policies**
node in the Policy Studio tree, and select the **XML Encryption Settings**
menu option.

For more information on how to configure the **XML Encryption Settings Wizard**
see [*XML encryption wizard* on page 1](encryption_enc_wizard.htm).

</div>
