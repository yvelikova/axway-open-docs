---
title: Create an OpenID Connect ID token
linkTitle: Create an OpenID Connect ID token
date: 2019-11-18
description: You can use the **Create ID Token** filter to create an OpenID Connect ID token when API Gateway is acting as an OpenID Connect server (also known as OpenID provider or OP). It is the responsibility of the OAuth authorization server to generate an ID token. The ID token is a security token that contains claims about the authentication of an end user by an authorization server when using a client. The ID token is represented as a JSON Web Token (JWT).
weight: 1
---

To generate an ID token the following claims are required:

* `iat`
* `iss`
* `exp`
* `sub`
* `aud`

For more information on the required claims within an ID token, see the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html).This filter enables you to specify the subject (`sub`), the issuer (`iss`), and the expiration time (`exp`) of the ID token. Other claims (for example, `iat`, `exp`, and `aud`) are handled internally. The JWT expiry in seconds is appended on to the current time to give the ID token an expiry.

This filter also enables you to specify how to sign the ID token, and to add additional claims to the ID token.

## General settings

Configure the following general settings for the **Create ID Token** filter:

**Name**:\
Enter a suitable name for this filter.

**Subject (sub)**:\
Subject identifier. A locally unique and never reassigned identifier within the issuer for the end-user, which is intended to be consumed by the client. The default value is `${authentication.subject.id}`.

**Issuer (iss)**:\
Issuer identifier for the issuer of the response. The default value is `${http.request.url}`.

**Expiration time in secs (exp)**:\
Enter the expiry time for the ID token, in seconds. The default value is 60 seconds.

**Apply a signature algorithm**:\
Select one of the following options:

* **Sign ID token with private key**:\
    Select this option and click **Signing Key**
    to select a private key certificate that has been registered with the OpenID provider, and use it to sign the ID token.
* **Sign using client secret**:\
    Select this option to sign the ID token using a client secret issued by the OpenID provider.

**Add the following claims**:\
Click the **Add** button to add additional claims. You can also **Edit** or **Delete** existing claims.
