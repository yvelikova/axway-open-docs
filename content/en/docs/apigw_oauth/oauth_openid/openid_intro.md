---
title: Introduction to API Gateway OpenID Connect
linkTitle: Introduction to API Gateway OpenID Connect
date: 2019-11-28
description: The OpenID Connect 1.0 (OID) protocol is a simple identity layer on top of the OAuth 2.0 protocol. OAuth 2.0 provides an access authorization delegation protocol, and OpenID Connect leverages OAuth features to allow authorized access to user authentication session APIs in an interoperable manner. OpenID Connect uses a REST interface and simple JSON assertions called JSON Web Tokens (JWTs) to provide identifying *claims* about users. The protocol is designed to be API-friendly and adaptable to multiple formats such as web and mobile, and it has built-in provisions for robust signing and encryption.
weight: 1
---

In its simplest form, an OpenID Connect deployment allows applications (such as browsers, mobiles, and desktop clients), to request and receive information about a user's identities. This allows the user to authenticate to a third-party application that acts as a relying party (RP) using an identity established with the OpenID Connect identity provider (IdP).

This section describes the concepts behind OpenID Connect and demonstrates how to use the API Gateway as an OpenID Connect identity provider and as a relying party. The following sections use the client demo that ships with API Gateway to illustrate OpenID Connect concepts (see [OAuth client demo](/docs/apigw_oauth/client_demo)).

## OpenID Connect concepts

OpenID Connect is specified in the [OpenID Connect 1.0 specification](http://openid.net/specs/openid-connect-core-1_0.html). It defines the following concepts:

* Claim: A piece of information about an authenticated user (for example, email or phone number).
* Relying party (RP): OAuth 2.0 client application requiring end-user authentication and claims from an OpenID Connect identity provider. API Gateway can act as a relying party consuming services from a third party such as Google.
* Identity provider (IdP): OAuth 2.0 authorization server that is capable of authenticating the end-user and providing claims to a relying party about the end user. API Gateway can act as an identity provider for relying parties.
* ID token: JSON Web Token (JWT) that contains claims about the authenticated user.
* UserInfo endpoint: Protected resource that, when presented with an access token by the client, returns authorized information about the end user.

## Relationship to OAuth 2.0

To support maximum interoperability, the OID specification defines standard scopes, defined request objects and corresponding claims, the ID token format, and a UserInfo endpoint. These features represent the primary additions to the OAuth 2.0 standard and should be available across all IdP implementations of OpenID Connect.

![OID features](/Images/OAuth/APIgw_Relationship_to_Oauth.png)

### Standard scopes

The OpenID Connect specification defines a set of predefined scopes for use in the OpenID Connect authorization flow.

* `openid` – REQUIRED. Informs the authorization server that the client is making an OpenID Connect request. This is the only scope directly supported in the OpenID Connect filters. If the `openid` scope is not present in an authorization request the OpenID Connect **Create ID Token** filter passes, leaving the message unmodified. When it is present, and the request is valid, the ID token associated with the authentication session is returned. If the `response_type` includes `token`, the ID token is returned in the authorization response along with the access token. If the `response_type` includes `code`, the ID token is returned as part of the token endpoint response.

The following scopes are not directly catered for in the OpenID Connect filters, but are made available on the message so that policy developers can correctly respond to them in policies. They differ to OAuth 2.0 scopes in that they do not need to be expressly associated with a resource or API, and are automatically considered valid scopes for client applications. However, these scopes can be considered regular OAuth 2.0 scopes when accessing the UserInfo endpoint, and if they are present in the access token, policy developers can construct an appropriate claims response.

* `profile` – OPTIONAL. This scope requests that the issued access token grants access to the end user’s default profile claims (excluding the `address` and `email` claims) at the UserInfo endpoint. The profile claims can include: `name`, `family_name`, `given_name`, `middle_name`, `nickname`, `preferred_username`, `profile`, `picture`, `website`, `gender`, `birthdate`, `zoneinfo`, `locale`, and `updated_at`.
* `email` – OPTIONAL. This scope requests that the issued access token grants access to the `email` and `email_verified` claims at the UserInfo endpoint.
* `address` – OPTIONAL. This scope requests that the issued access token grants access to the `address` claim at the UserInfo endpoint.
* `phone` – OPTIONAL. This scope requests that the issued access token grants access to the `phone_number` and `phone_number_verified` claims at the UserInfo endpoint.

### Request object and claims

The OpenID Connect request object is an optional part of the specification and is not supported in the current version of API Gateway. The request object is used to provide OpenID Connect request parameters that might differ from the default ones. Request objects might be supported in future versions of API Gateway.

### ID token

The ID token is a JWT-based security token that contains claims about the authentication of an end user by an authorization server. When using the authorization code flow the ID token is returned as a property of the access token.  For the implicit and some hybrid flows the ID token is returned in response to the authorization request. As an IdP, API Gateway will produce an ID token using the **Create ID Token** filter, either in the authorization endpoint policy or the token endpoint policy. This token will be signed for verification by the client and can include user defined claims. This provides flexibility in creating claims from any user store. Acting as an RP, a client can verify a received ID token with the **Verify ID Token** filter. This should be done in the callback policy as API Gateway does not support implicit flows as a client. After being verified, the ID token can be used to look up or create a user record and create an authenticated session for the user.

### UserInfo endpoint

The UserInfo endpoint is defined as an OAuth 2.0 protected resource that returns extended claims about the authenticated end user. To access this resource an API Gateway acting as an RP must use the access token received in the OpenID Connect authentication process. A successful request will return a JSON object with the claims for the user. As an IdP the implementation of the UserInfo endpoint should be similar to any OAuth protected resource with a minimum scope requirement of `openid`. The implementation of this endpoint is deliberately left open for policy developers to integrate their own authentication stores.

## Prerequisites

To use the OpenID Connect features of API Gateway, the following are required:

* A knowledge of the OAuth 2.0 specification
* A knowledge of API Gateway and Policy Studio
* A local installation of API Gateway and Policy Studio
* A deployed client demo (see [Deploy the OAuth client demo](/docs/apigw_oauth/deploy_oauth_config#Deploy))
