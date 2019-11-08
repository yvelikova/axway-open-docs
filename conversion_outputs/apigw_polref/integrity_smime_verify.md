{
    "title": "Verify SMIME message",
    "linkTitle": "Verify SMIME message",
    "date": "2019-10-17",
    "description": "You can use the **SMIME Verify** filter to check the integrity of a Secure/Multipurpose Internet Mail Extensions (SMIME) message. This filter enables you to verify the Public Key Cryptography Standards (PKCS) #7 signature over the message. "
}

Overview
--------

You can use the **SMIME Verify**
filter to check the integrity of a Secure/Multipurpose Internet Mail Extensions (SMIME) message. This filter enables you to verify the Public Key Cryptography Standards (PKCS) #7 signature over the message.

You can select the certificates that contain the public keys to be used to verify the signature. Alternatively, you can specify a message attribute that contains the certificate with the public key to be used.

See also [*Sign SMIME message* on page 1](integrity_smime_sign.htm).


Configuration
-------------

Complete the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Certificates from the following list**:\
Select the certificates that contain the public keys to be used to verify the signature. This is the default option.

**Certificate in attribute**:\
Alternatively, enter the message attribute that specifies the certificate that contains the public key to be used to verify the signature. Defaults to `${certificate}`.

**Remove Outer Envelope if Verification is Successful**:\
Select this option to remove the PKCS#7 signature and all its associated data from the message if it verifies successfully.

