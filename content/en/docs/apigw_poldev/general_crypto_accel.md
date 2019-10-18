{
"title": "Cryptographic acceleration",
"linkTitle": "Cryptographic acceleration",
"date": "2019-10-17",
"description": "The API Gateway uses OpenSSL to perform cryptographic operations, such as encryption and decryption, signature generation and validation. OpenSSL exposes an *Engine API*, which makes it possible to plug in alternative implementations of some or all of the cryptographic operations implemented by OpenSSL. When configured appropriately, OpenSSL calls the engine's implementation of these operations instead of its own."
}
﻿
<div id="p_general_crypto_accel_overview">

Overview
--------

The API Gateway uses OpenSSL to perform cryptographic operations, such as encryption and decryption, signature generation and validation. OpenSSL exposes an *Engine API*, which makes it possible to plug in alternative implementations of some or all of the cryptographic operations implemented by OpenSSL. When configured appropriately, OpenSSL calls the engine's implementation of these operations instead of its own.

For example, a particular engine might provide improved implementations of the asymmetric operations RSA and DSA. This engine can then be plugged into OpenSSL so that whenever OpenSSL needs to perform either an RSA or DSA operation, it calls out to the engine's implementation of these algorithms rather than call its own.

Typically, OpenSSL engines provide a hardware implementation of specific cryptographic operations. The hardware implementation usually offers improved performance over its software-based counterpart, which is known as *cryptographic acceleration*.

You can configure cryptographic acceleration at the instance level in the API Gateway. To configure the API Gateway instance to use an OpenSSL engine instead of the default OpenSSL implementation, perform the following steps:

1.  In the Policy Studio
    tree, expand **Environment Configuration** > **Listeners**.
2.  Right-click the API Gateway instance, and select **Cryptographic Acceleration > Add OpenSSL Engine**.

</div>

<div id="p_general_crypto_accel_overview_gen_conf">

General configuration
---------------------

The OpenSSL Engine Configuration dialog displays the name of the engine, the algorithms that it implements, together with any initialization and cleanup commands required by the engine. Complete the following fields:

**Name**:\
Enter an appropriate name for the engine in this field.

**Provides**:\
Enter a comma-separated list of cryptographic operations to be performed by the engine instead of OpenSSL. The engine must implement the listed operations, otherwise the default OpenSSL operations are used. The following operations are available:

|        |                                                         |
|--------|---------------------------------------------------------|
| `RSA`  | RSA (Rivest Shamir Adleman) asymmetric algorithm        |
| `DSA`  | DSA (Digital Signature Algorithm) asymmetric algorithm  |
| `RAND` | Random number generation                                |
| `DH`   | Diffie-Hellman anonymous key exchange algorithm         |
| `ALL`  | Engine's implementation of all cryptographic algorithms |

For example, to configure the API Gateway to use the engine's implementation of the RSA, DSA, and DH algorithms only, enter the following in the **Provides**
field:

    RSA, DSA, DH

**Commands**:\
The OpenSSL engine framework allows a number of control commands to be invoked at various stages in the loading and unloading of a specific engine library. These commands can be issued before or after the initialization of the engine, and also before or after the engine is uninitialized. Control commands are based on text name-value pairs.

Typical uses for control commands include specifying the path to a driver library, logging configuration information, a password to access protected devices, a configuration file required by the engine, and so on.

OpenSSL control commands can be added by clicking the **Add**
button. Enter the name of the command in the **Name**
field, and its value in the **Value**
field. This command *must*
be supported by the engine.

Use the **When**
drop-down list to select when the command is to be run. The options available are as follows:

|                |                                                                                       |
|----------------|---------------------------------------------------------------------------------------|
| `preInit`      | Command is run before the engine is initialized (before the call to `ENGINE_init()`). |
| `postInit`     | Command is run after the engine is initialized (after the call to `ENGINE_init()`).   |
| `preShutdown`  | Command is run before the engine shuts down (before the call to `ENGINE_finish()`).   |
| `postShutdown` | Command is run after the engine shuts down (after the call to `ENGINE_finish()`).     |

</div>

<div id="p_general_crypto_accel_conversations">

Conversations for crypto engines
--------------------------------

A Hardware Security Module (HSM) protects the private keys that it holds using a variety of mechanisms, including physical tokens, passphrases, and other methods. When use of the private key is required by an agent, it must authenticate itself with the HSM, and be authorized to access this data.

For information on how the API Gateway interacts with the HSM, see *Cryptographic acceleration conversation:request-response* on page 1. For more information on storing private keys on OpenSSL engines, see [*Manage X.509 certificates and keys* on page 1](../CommonTopics/general_certificates.htm).

</div>
