{
    "title": "Sign SMIME message",
    "linkTitle": "Sign SMIME message",
    "date": "2019-10-17",
    "description": "You can use the **SMIME Sign** filter to digitally sign a multipart Secure/Multipurpose Internet Mail Extensions (SMIME) message when it passes through the API Gateway core pipeline. The recipient of the message can then verify the integrity of the SMIME message by validating the Public Key Cryptography Standards (PKCS) #7 signature."
}

Overview
--------

You can use the **SMIME Sign**
filter to digitally sign a multipart Secure/Multipurpose Internet Mail Extensions (SMIME) message when it passes through the API Gateway core pipeline. The recipient of the message can then verify the integrity of the SMIME message by validating the Public Key Cryptography Standards (PKCS) #7 signature.

See also [*Verify SMIME message* on page 1](integrity_smime_verify.htm).



Configuration
-------------

Complete the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Sign Using Key**:\
Select the certificate that contains the public key associated with the private signing key to be used to sign the message.

**Create Detached Signature in Attachment**:\
Specifies whether to create a detached digital signature in the message attachment. This is selected by default. For example, this is useful when the software reading the message does not understand the PKCS#7 binary structure, because it can still display the signed content, but without verifying the signature.

If this is not selected, the message content is embedded with the PKCS#7 binary signature. This means that user agents that do not understand PKCS#7 cannot display the signed content. Intermediate systems between the sender and final recipient can modify the text content slightly (for example, line wrapping, whitespace, or text encoding). This might cause the message to fail signature validation due to changes in the signed text that are not malicious, nor necessarily affecting the meaning of the text.

