{
"title": "JWT Sign ",
"linkTitle": "JWT Sign ",
"date": "2019-10-17",
"description": "You can use the **JWT Sign** filter to sign arbitrary content (for example, a JWT claims set). The result is called JSON Web Signature (JWS). "
}
﻿

Overview
--------

You can use the **JWT Sign** filter to sign arbitrary content (for example, a JWT claims set). The result is called JSON Web Signature (JWS).

JWS represents digitally signed or MACed content using JSON data structures and base64url encoding.

A JWS represents the following logical values:

-   JOSE Header
-   JWS Payload
-   JWS Signature

The signed content is outputted in JWS Compact Serialization format, which is produced by base64 encoding the logical values and concatenating them with periods (`‘.’`) in between. For example:

{“iss“:“joe“,

„exp“:1300819380,

„http://example.com/is\_root“:true}

When the JOSE Header, JWS Payload, and JWS Signature is combined as follows:

BASE64URL(UTF8(JWS Protected Header)) '.'

BASE64URL(JWS Payload) '.'

BASE64URL(JWS Signature)

The following string is returned:

eyJhbGciOiJSUzI1NiJ9

.

eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFt

cGxlLmNvbS9pc19yb290Ijp0cnVlfQ

.

cC4hiUPoj9Eetdgtv3hF80EGrhuB\_\_dzERat0XF9g2VtQgr9PJbu3XOiZj5RZmh7

AAuHIm4Bh-0Qc\_lF5YKt\_O8W2Fp5jujGbds9uJdbF9CUAr7t1dnZcAcQjbKBYNX4

BAynRFdiuB—f\_nZLgrnbyTyWzO75vRK5h6xBArLIARNPvkSjtQBMHlb1L07Qe7K

0GarZRmB\_eSN9383LcOLn6\_dO—xi12jzDwusC-eOkHWEsqtFZESc6BfI7noOPqv

hJ1phCnvWh6IeYI2w9QOYEUipUTI8np6LbgGY9Fs98rqVt5AXLIhWkWywlVmtVrB

p0igcN\_IoypGlUPQGe77Rw

General settings
----------------

Configure the following settings on the **JWT Sign**
window:

**Name**:

Enter an appropriate name for the filter to display in a policy.

Signing details
---------------

Configure the following fields in the **Signing details** section:

**Token location**:

Enter the selector expression to obtain the payload to be signed. The content can be JWT claims, encrypted token, or you can enter a different option.

**Key type**:

Select whether to sign with a private (asymmetric) key or HMAC (symmetric key).

Asymmetric key details
----------------------

If you selected the asymmetric key type, configure the following fields in the **Asymmetric** section:

**Signing key**:

Select the private key from the certificate store that is used to sign the payload.

**Selector expression**:

Alternatively, enter a selector expression to get the alias of the private key in the certificate store.

**Algorithm**:

Select the algorithm used to sign.

Symmetric key details
---------------------

If you selected the symmetric key type, complete the following fields **Symmetric** section:

**Shared key**:

Enter the shared key used to sign the payload. The key should be given as a base64-encoded byte array and must use the following minimum lengths depending on the selected algorithm used to sign:

| Algorithm                  | Minimum key length  |
|----------------------------|---------------------|
| HMAC using SHA-256 (HS256) | 32 bytes (256 bits) |
| HMAC using SHA-384 (HS384) | 48 bytes (384 bits) |
| HMAC using SHA-512 (HS512) | 64 bytes (512 bits) |

**Selector expression**:

Alternatively, enter a selector expression to obtain the shared key. The value returned from the selector should contain:

-   Byte array (possibly produced by a different filter)
-   Base64-encoded byte array

**Algorithm**:

Select the algorithm used to sign.
