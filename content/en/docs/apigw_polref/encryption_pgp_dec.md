{
"title": "PGP decrypt and verify",
"linkTitle": "PGP decrypt and verify",
"date": "2019-10-17",
"description": "You can use the **PGP Decrypt and Verify**\\nfilter to decrypt a message encrypted with Pretty Good Privacy (PGP). This filter decrypts an incoming message using the specified PGP private key, and creates a new message body using the specified content type. The decrypted message can be processed by API Gateway, and then encrypted again using the **PGP Encrypt and Sign**\\nfilter."
}
﻿
<div id="p_encryption_pgp_dec_overview">

Overview
--------

You can use the **PGP Decrypt and Verify**
filter to decrypt a message encrypted with Pretty Good Privacy (PGP). This filter decrypts an incoming message using the specified PGP private key, and creates a new message body using the specified content type. The decrypted message can be processed by API Gateway, and then encrypted again using the **PGP Encrypt and Sign**
filter.

An example use case for this filter would be when files are sent to API Gateway over Secure Shell File Transfer Protocol (SFTP) in PGP-encrypted format. API Gateway can use the **PGP Decrypt and Verify**
filter to decrypt the message, and then use threat detection filters to perform virus scanning. The clean files can be PGP-encrypted again using the **PGP Encrypt and Sign**
filter before being sent over SFTP to their target destination. For more details, see [*PGP encrypt and sign* on page 1](encryption_pgp_enc.htm).

You can also use the **PGP Decrypt and Verify**
filter to verify signed messages passing through the API Gateway pipeline. Signed messages received by API Gateway can be verified by validating the signature using the public PGP key of the message signer.

{{< alert title="Note" color="primary" >}}PGP decryption and verification require two different keys: your own private key for decryption, and the sender's public key for verification. {{< /alert >}}

</div>

<div id="p_encryption_pgp_dec_conf">

Configuration
-------------

Complete the following fields to configure this filter:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Decrypt**:\
Select whether to use this filter to PGP decrypt an incoming message with a private key.

**PGP Private Key to be retrieved from one of the following locations**:\
If you selected the **Decrypt**
option, select the location of the private key from one of the following options:

-   **PGP Key Pair list**:\
    Click the browse button on the right, and select a PGP key pair configured in the certificate store. If no PGP key pairs have already been configured, right-click **PGP Key Pairs**, and select **Add PGP Key**. For details on configuring PGP key pairs, see
    [Manage X.509 certificates and keys](/csh?context=619&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Alias**:\
    Enter the alias name used to look up the PGP key in the certificate store (for example, `My PGP Test Key`). Alternatively, you can enter a selector expression with the name of a message attribute that contains the alias. The value of the selector is expanded at runtime (for example, `${my.pgp.test.key.alias}`).
-   **Message attribute**:\
    Enter a selector expression with the name of the message attribute that contains the key. The value of the selector is expanded at runtime (for example, `${my.pgp.test.private.key}`).

For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Verify**:\
Select whether to use this filter to verify an incoming signed message with the public key used to sign the message.

**Verification Key Location (Public Key)**:\
If you selected the **Verify**
option, select the location of the public key from one of the following options:

-   **PGP Key Pair list**:\
    Click the browse button on the right, and select a PGP key pair configured in the certificate store. If no PGP key pairs have already been configured, right-click **PGP Key Pairs**, and select **Add PGP Key**. For details on configuring PGP key pairs, see
    [Manage X.509 certificates and keys](/csh?context=619&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Alias**:\
    Enter the alias name used to look up the PGP key in the certificate store (for example, `My PGP Test Key`). Alternatively, you can enter a selector expression with the name of a message attribute that contains the alias. The value of the selector is expanded at runtime (for example, `${my.pgp.test.key.alias}`).
-   **Message attribute**:\
    Enter a selector expression with the name of the message attribute that contains the key. The value of the selector is expanded at runtime (for example, `${my.pgp.test.public.key}`).

For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Signing Method**:\
If you selected to verify but not decrypt the incoming message, select a signing method from one of the following options:

-   **Compressed**:\
    Verifies a compressed signature. Because the message is contained in the signature, this signature is used in place of the message. This is the default.
-   **Clear signed**:\
    In a clear signed message, the message is intact with a signature attached beneath the clear message text. Verifying this message verifies the sender and the message integrity.
-   **Detached signature (MIME)**:\
    Verifies a multipart MIME document where the message is in clear text and the signature is attached as a MIME part.

**Decrypt and Verify Method**:\
If you selected to decrypt and verify the incoming message, select the decrypt and verify method from one of the following options:

-   **Decrypt and Verify in One Pass**:\
    Decrypts and verifies the message in a single pass. This is the default. API Gateway decrypts the message while reading the data packet, and continues on sequentially when it reaches the signature packet.
-   **Decrypt and Verify in Two Passes**:\
    Decrypts the message in the first pass, and then verifies the signature in the second pass. Use this option when the message has been encrypted and signed in two passes.

**Content type**:\
Enter the `Content-Type`
of the unencrypted message data. Defaults to `application/octet-stream`.

</div>
