{
"title": "Encrypt and decrypt web services",
"linkTitle": "Encrypt and decrypt web services",
"date": "2019-10-17",
"description": "The **Encrypt Web Service**\\nfilter allows the API Gateway to act as an XML *encrypting*\\nweb service, where clients can send up XML blocks to the API Gateway that are required to be encrypted. The API Gateway encrypts the XML data, replacing it with `<EncryptedData>` blocks in the message. The encrypted content is then returned to the client."
}
﻿
<div id="p_sec_services_encdec_over">

Overview
--------

The **Encrypt Web Service**
filter allows the API Gateway to act as an XML *encrypting*
web service, where clients can send up XML blocks to the API Gateway that are required to be encrypted. The API Gateway encrypts the XML data, replacing it with `<EncryptedData>` blocks in the message. The encrypted content is then returned to the client.

Similarly, the **Decrypt Web Service**
filter allows the API Gateway to act as an XML *decrypting*
web service, where clients can send up `<EncryptedData>` blocks to the API Gateway, which decrypts them and returns the plain-text data back to the client.

By deploying the API Gateway as a centralized encryption and decryption service, clients application can abstract out the security layer from their core business logic. This simplifies the logic of the client applications and makes the task of managing and configuring the security aspect a lot simpler because it is centralized.

Furthermore, the API Gateway's XML and cryptographic acceleration capabilities ensure that the process of encrypting and decrypting XML messages—a task that involves some very CPU-intensive operations—is performed at optimum speed.

See also [*DSS signature generation* on page 1.](sec_services_sign.htm)

</div>

<div id="p_sec_services_encdec_conf">

Configuration
-------------

To configure both the **Encrypt Web Service**
and **Decrypt Web Service**
filters, enter a descriptive name for the filter to display in a policy.

The settings for the filters are configured in the **XML-Encryption Settings** and **XML-Decryption Settings** filters in the Encryption category. For more details how to configure these filters, see [XML encryption settings](encryption_encrypt_settings.htm) and [XML decryption settings](encryption_decrypt_settings.htm).

</div>
