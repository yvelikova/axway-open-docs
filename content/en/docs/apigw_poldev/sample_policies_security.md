{
"title": "Security sample policies",
"linkTitle": "Security sample policies",
"date": "2019-10-17",
"description": "The security sample policies demonstrate digital signature verification and cryptographic operations (encryption and decryption). This topic describes the sample policies, and explains how to run these samples."
}
﻿
<div id="p_sample_policies_security_overview">

Overview
--------

The security sample policies demonstrate digital signature verification and cryptographic operations (encryption and decryption). This topic describes the sample policies, and explains how to run these samples.

</div>

<div id="p_sample_policies_security_signatures">

Signature verification
----------------------

The **Signature Verification**
sample policy sends a digitally signed version of the `StockQuote`
request to the API Gateway. The message carries the signature into the web service header. A sample certificate/key pair (`Samples Test Certificate`) is used to sign the message and verify the signature. Signature verification is used for authentication purposes, and therefore an HTTP 403 error code is returned if a problem occurs.

The **Signature Verification**
policy is as follows:

![Signature Verification policy](/Images/docbook/images/samples/digital_signature_sample_policy.gif)

The **Signature Verification**
policy performs the following tasks:

1.  The signature contained in the request is verified. The signature must be located in a WS-Security block.
2.  If the verification is successful, the `StockQuote`
    demo service is invoked.
3.  The response body is signed and returned to the client.
4.  If the verification fails, an HTTP 403 error code is returned to the client.

</div>

<div id="p_sample_policies_security_steps">

Run the signature verification sample
-------------------------------------

You can call the sample service using the send request (`sr`) command or the API Tester GUI:

<div>

### sr command

Enter the following command:

    sr -f INSTALL_DIR/samples/SamplePolicies/Security/SignatureVerification/Request.xml http://localhost:8081/signatureverification

For more details, see the topic on [*Stress test with send request (sr)* on page 1](common_sr_command.htm).

</div>

<div>

### API Tester

Perform the following steps:

1.  Specify the following URL in the **Request Settings**:
2.  ``` {space="preserve"}
    http://HOSTNAME:8081/signatureverification
    ```

3.  Select `POST`
    as the **Verb**.
4.  Click the **Close**
    button.
5.  Select **File** > **Load**, and browse to the following file as input for the request:
6.  INSTALL_DIR/samples/SamplePolicies/Security/SignatureVerification/Request.xml

7.  Click the Send Request button.

For more details, see the topic on [*Send a request with* on page 1](sample_policies_soapbox.htm).

</div>

</div>

<div id="p_sample_policies_security_encryption">

Encryption and decryption
-------------------------

This sample uses XML decryption on the request and applies encryption on the response. The sample policy includes a **Main**
policy, which chains together the calls that decrypt the request, the invocation of the back-end service, and the encryption of the response.

The **Main**
policy is as follows:

![Main policy](/Images/docbook/images/samples/encryption_main_sample_policy.gif)

The **Main**
policy performs the following tasks:

1.  **Decrypt Request**
    is a policy shortcut, which invokes another policy that takes the inbound request and decrypts it.
2.  The decrypted request is routed to the back-end service.
3.  The **Encrypt Response**
    policy shortcut invokes a policy that encrypts the response from the back-end service.

The **Decrypt**
policy is as follows:

![Decrypt policy](/Images/docbook/images/samples/decrypt_sample_policy.gif)

The **Decrypt**
policy performs the following tasks:

1.  The decryption settings are defined: what to decrypt and which key to use.
2.  The XML decryption is executed based on the defined settings.

The **Encrypt**
policy is as follows:

![Encrypt policy](/Images/docbook/images/samples/encrypt_sample_policy.gif)

The **Encrypt**
policy performs the following tasks:

1.  The encryption settings are defined: what to encrypt, which symmetric key to use, which certificate to use, and how to encrypt (algorithm and where to place the encryption information).
2.  The XML encryption is executed based on the defined settings.

</div>

<div>

Run the encryption and decryption sample
----------------------------------------

You can call the sample service using the send request (`sr`) command or the API Tester GUI:

<div>

### sr command

Enter the following command:

    sr -f INSTALL_DIR/samples/SamplePolicies/Security/Encryption/Request.xml http://HOSTNAME:8081/encryption

For more details, see the topic on [*Stress test with send request (sr)* on page 1](common_sr_command.htm).

</div>

<div>

### API Tester

Perform the following steps:

1.  Specify the following URL in the **Request Settings**:
2.  http://HOSTNAME:8081/encryption

3.  Select `POST`
    as the **Verb**.
4.  Click the **Close**
    button.
5.  Select **File** > **Load**, and browse to the following file as input for the request:
6.  INSTALL_DIR/samples/SamplePolicies/Security/Encryption/Request.xml

7.  Click the Send Request button.

For more details, see the topic on [*Send a request with* on page 1](sample_policies_soapbox.htm).

</div>

</div>
