---
title: Verify an OpenID Connect ID token
linkTitle: Verify an OpenID Connect ID token
date: 2019-11-18
description: You can use the **Verify ID Token**\\nfilter to verify an OpenID Connect ID token using a JSON Web Key (JWK) set, certificate, or client secret. The ID token is a security token that contains claims about the authentication of an end user by an authorization server when using a client. The ID token is represented as a JSON Web Token (JWT).
weight: 2
---

This filter requires the message attributes `openid.idtoken` and `oauth.client.application` to be on the message whiteboard. The filter parses the ID token into a JWT header and claim and validates the signature using either a JWK set, a certificate, or a client secret. On success the filter returns true and sets the ID token (`openid.idtoken`) `claim` and `sub`values on the message whiteboard.

For more information on OpenID Connect, see the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html).

## General settings

Configure the following general settings for the **Verify ID Token** filter:

**Name**:\
Enter a suitable name for this filter.

**Clock Skew (seconds)**:\
Enter a number of seconds to allow for clock skew. This allows for clock skew when verifying the token's issued at (`iat`) time, expiration time (`exp`), and not before values. The default value is 60 seconds.

**Issuer (iss)**:\
Issuer identifier for the issuer of the response. The default value is `${oauth.client.application.getTokenURL().toString()}`.

**Verify ID Token**:\
Select one of the following options:

* **With JSON Web Key Set**:\
    Select this option to verify the ID token using a JWK set.
* **With Certificate**:\
    Select this option and click **Signing Key** to select a private key certificate, and use it to verify the ID token.
* **With Client Secret**:\
    Select this option to verify the ID token using a client secret.
