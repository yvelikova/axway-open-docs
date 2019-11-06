{
"title": "XML decryption",
"linkTitle": "XML decryption",
"date": "2019-10-17",
"description": "The **XML-Decryption**\\nfilter is responsible for decrypting data in XML messages based on the settings configured in the **XML-Decryption Settings**\\nfilter."
}
﻿
<div id="p_encryption_decrypt_overview">

Overview
--------

The **XML-Decryption**
filter is responsible for decrypting data in XML messages based on the settings configured in the **XML-Decryption Settings**
filter.

The **XML-Decryption Settings**
filter generates the `decryption.properties`
message attribute based on configuration settings. The **XML-Decryption**
filter uses these properties to perform the decryption of the data.

See also [*XML encryption* on page 1](encryption_encrypt.htm).

</div>

<div id="p_encryption_decrypt_conf">

Configuration
-------------

Enter an appropriate name for the filter to display in a policy.

</div>

<div id="p_encryption_decrypt_wiz">

Auto-generation using the XML decryption wizard
-----------------------------------------------

Because the **XML-Decryption**
filter must always be paired with an **XML-Decryption Settings**
filter, the Policy Studio provides a wizard that can generate both of these filters at the same time. To use the wizard, right-click a policy node under the **Policies**
node in the Policy Studio tree, and select **XML Decryption Settings**.

Configure the fields on the **XML Decryption Settings**
dialog as explained in the [*XML decryption settings* on page 1](encryption_decrypt_settings.htm). When finished, an **XML-Decryption Settings**
filter is created along with an **XML-Decryption**
filter.

</div>
