{
"title": "JWT decrypt filter",
"linkTitle": "JWT decrypt filter",
"date": "2019-10-17",
"description": "You can use the **JWT Decrypt** filter to decrypt encrypted JWTs. "
}
﻿

Overview
--------

You can use the **JWT Decrypt** filter to decrypt encrypted JWTs.

Upon successful decryption, the filter removes all metadata, such as headers and encryption-specific information of the incoming encrypted JWT, and outputs the originally encrypted payload.

For example, when you decrypt the following JWE Payload:

eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZHQ00ifQ.

OKOawDo13gRp2ojaHV7LFpZcgV7T6DVZKTyKOMTYUmKoTCVJRgckCL9kiMT03JGe

ipsEdY3mx\_etLbbWSrFr05kLzcSr4qKAq7YN7e9jwQRb23nfa6c9d-StnImGyFDb

Sv04uVuxIp5Zms1gNxKKK2Da14B8S4rzVRltdYwam\_lDp5XnZAYpQdb76FdIKLaV

mqgfwX7XWRxv2322i-vDxRfqNzo\_tETKzpVLzfiwQyeyPGLBIO56YJ7eObdv0je8

1860ppamavo35UgoRdbYaBcoh9QcfylQr66oc6vFWXRcZ\_ZT2LawVCWTIy3brGPi

6UklfCpIMfIjf7iGdXKHzg.

48V1\_ALb6US04U3b.

5eym8TW\_c8SuK0ltJ3rpYIzOeDQz7TALvtu6UG9oMo4vpzs9tX\_EFShS8iB7j6ji

SdiwkIr3ajwQzaBtQD\_A.

XFBoMYUZodetZdvTiFvSkQ

The output is:

The true sign of intelligence is not knowledge but imagination.

{{< alert title="Note" color="primary" >}}The JWT Decrypt filter automatically detects whether the input JWT is encrypted with symmetric or asymmetric key and automatically uses the corresponding settings. For example, you can configure decryption with symmetric key and certificate; however, the filter uses the former or latter depending on the type of JWE it receives as input.{{< /alert >}}

General settings
----------------

Configure the following field on the **JWT Decrypt** window:

**Name**:

Enter an appropriate name for the filter to display in a policy.

**Token location**:

Enter the selector expression to obtain the JWT to be decrypted.

Decryption using key selection
------------------------------

Optionally, configure the following fields in the **Key selection** section:

**X509 certificate**:

Select the certificate from the certificate store that is used to decrypt the payload.

**Selector expression**:

Alternatively, enter a selector expression to retrieve the alias of the certificate in the certificate store.

Shared key selection details
----------------------------

Optionally, configure the following fields in the **Shared key selection** section:

**None**:

Select if you do not want to decrypt tokens that are encrypted with shared keys.

**Shared key**:

Enter the shared key that is used to [encrypt](jwt_encrypt.htm) the payload. The key should be given as a base64-encoded byte array.

**Selector expression**:

Alternatively, enter a selector expression to obtain the shared key. The value returned by the selector should contain:

-   Byte array (possibly produced by a different filter)
-   Base64-encoded byte array

 
