{
"title": "JWT Verify",
"linkTitle": "JWT Verify",
"date": "2019-10-17",
"description": "You can use the **JWT Verify** filter to verify a signed JSON Web Token (JWT) with the token payload. Upon successful verification, the **JWT Verify** filter removes the headers and signature of the incoming signed JWT and outputs the original JWT payload. For example, when you verify the following signed JWT payload input:"
}
﻿

Overview
--------

You can use the **JWT Verify** filter to verify a signed JSON Web Token (JWT) with the token payload. Upon successful verification, the **JWT Verify** filter removes the headers and signature of the incoming signed JWT and outputs the original JWT payload. For example, when you verify the following signed JWT payload input:

    eyJhbGciOiJSUzI1NiJ9
    .
    eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFt
    cGxlLmNvbS9pc19yb290Ijp0cnVlfQ
    .
    cC4hiUPoj9Eetdgtv3hF80EGrhuB__dzERat0XF9g2VtQgr9PJbu3XOiZj5RZmh7
    AAuHIm4Bh-0Qc_lF5YKt_O8W2Fp5jujGbds9uJdbF9CUAr7t1dnZcAcQjbKBYNX4
    BAynRFdiuB—f_nZLgrnbyTyWzO75vRK5h6xBArLIARNPvkSjtQBMHlb1L07Qe7K
    0GarZRmB_eSN9383LcOLn6_dO—xi12jzDwusC-eOkHWEsqtFZESc6BfI7noOPqv
    hJ1phCnvWh6IeYI2w9QOYEUipUTI8np6LbgGY9Fs98rqVt5AXLIhWkWywlVmtVrB
    p0igcN_IoypGlUPQGe77Rw

The resulting payload output is:

    {“iss“:“joe“,
    „exp“:1300819380,
    „http://example.com/is_root“:true}

{{< alert title="Note" color="primary" >}}The **JWT Verify** filter automatically detects whether the input JWT is signed with hash-based message authentication code (HMAC) or asymmetric key and uses the corresponding settings as appropriate. For example, you can configure verification with HMAC or certificate, depending on the type of JWT received as input.{{< /alert >}}

General settings
----------------

Configure the following settings on the **JWT Verify** dialog:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Token location**:\
Enter the selector expression to retrieve the JWT to be verified. This must contain the value of token in the format of `HEADER.PAYLOAD.SIGNATURE`, but without the `Bearer` prefix. You can use a filter such as [Retrieve attribute from HTTP header](attributes_http_header.htm) in your policy to get the token from any header. For example: `${http.headers["Authorization"].substring(7)}`

Verify using RSA/EC public key (asymmetric)
-------------------------------------------

You can configure the following optional settings in the **Verify using RSA/EC public key** section:

**X509 certificate**:\
Select the certificate that is used to verify the payload from the API Gateway certificate store.

{{< alert title="Note" color="primary" >}}Asymmetric keys are associated with the x509 certificate, but for verification, you only need the public key, which is encoded in the certificate. Alternatively, you can use a JSON Web Key (JWK) with a **Connect to URL** filter to download the key from a known source. For more details, see [JWK from external source](#JWK).{{< /alert >}}

**Selector expression**:\
Alternatively, enter a selector expression to retrieve the alias of the certificate from the API Gateway certificate store.

Verify using symmetric key
--------------------------

You can configure the following optional settings in the **Verify using symmetric key** section:

**None**:\
Select if you do not want to verify tokens signed with HMAC.

**Shared key**:\
Enter the shared key that was used to sign the payload. The key should be provided as a base64-encoded byte array.

**Selector expression**:\
Alternatively, enter a selector expression to obtain the shared key. The value returned by the selector should contain:

-   Byte array (possibly produced by a different filter)
-   Base64-encoded byte array

JWK from external source
------------------------

You can configure the following optional setting in the **JWK from external source** section:

**JSON web key**:\
You can verify signed tokens using a selector expression containing the value of a `JSON Web Key (JWK)`. The return type of the selector expression must be of type String. For more details on converting a JSON contained in the body to a string value, see
[Access configuration values dynamically at runtime](/csh?context=272&product=prod-api-gateway-77)
in the
[API Gateway Developer Guide](/bundle/APIGateway_77_DeveloperGuide_allOS_en_HTML5)
.

Additional JWT verification steps
---------------------------------

The **JWT Verify** filter verifies the JWT signature with the token payload only. The following additional verification steps are also typically required:

Make sure that the certificate used to generate the signature is valid (for example, check that it is not blacklisted or expired). You can use the API Gateway CRL and OCSP filters in your policy for this step (for example, see the [Dynamic CRL certificate validation](certificate_crl_dynamic.htm) and [OCSP client](certificate_ocsp_client.htm) filters).

Validate the JWT token claims. For example, this includes the following checks:

-   `aud`: Audience—check that the token has been created for the correct user.

>

-   `iss`: Issuer—check that the token was issued by a trusted token provider.

<!-- -->

-   `exp`: Expiry time—check that the token has not already expired.

