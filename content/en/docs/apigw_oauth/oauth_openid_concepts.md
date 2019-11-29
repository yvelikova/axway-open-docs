---
title: OAuth and OpenID Connect concepts
linkTitle: Concepts
weight: 10
date: 2019-11-18
description: Understand the main concepts involved in OAuth and OpenID Connect and learn about using API Gateway as an OAuth server.
---

OAuth 2.0 is a *delegation protocol* that is useful for conveying *authorization decisions* across a network of web-enabled applications and APIs. OAuth 2.0 is not an authentication protocol; however, OpenID Connect can be used along with OAuth to create an authentication and identity protocol on top of this delegation and authorization protocol.

## OAuth 2.0

OAuth 2.0 is specified in the [OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749). OAuth can be used to provide:

* Delegated access
* Reduction of password sharing between users and third-parties
* Revocation of access

For example, when users share their credentials with a third-party application, the only way to revoke access from that application is for the user to change their password. However, this means that access from all other applications is also revoked. With OAuth, users can revoke access from specific applications without breaking other applications that should be allowed to continue to act on their behalf.

OAuth achieves this by introducing an authorization layer and separating the role of the client from that of the resource owner. OAuth defines four primary roles:

* Resource owner (RO): The entity that is in control of the data exposed by an API (for example, an end user).
* Client: The mobile application, web site, and so on, that wants to access data on behalf of the resource owner.
* Authorization server (AS): The Security Token Service (STS) or OAuth server that issues tokens.
* Resource server (RS): The service that exposes the data (for example, an API).

The client requests access to resources controlled by the resource owner and hosted by the resource server, and is issued a different set of credentials than those of the resource owner. Instead of using the resource owner's credentials to access protected resources, the client obtains an access token - a string denoting a specific scope, lifetime, and so on. Access tokens are issued to third-party clients by an authorization server with the approval of the resource owner. The client uses the access token to access the protected resources hosted by the resource server.

OAuth defines two kinds of tokens:

* Access tokens: These tokens are presented by a client to the resource server (for example, an API), to get access to a protected resource.
* Refresh tokens: These are used by the client to get a new access token from the authorization server (for example, when the access token expires).

OAuth tokens can include a scope. Scopes are like permissions or rights that a resource owner delegates to a client, so that they can perform certain actions on their behalf. A client can request specific rights, but a user might only grant a subset, or might grant others that were not requested. The OAuth specification does not define specific scopes, meaning that you can use any string to represent an OAuth scope.

OAuth defines several different flows or message exchange patterns. The most commonly used is the authorization code (web server) flow. For more details on this flow and the other flows that API Gateway supports, see [OAuth 2.0 authentication flows](/docs/apigw_oauth/oauth_flows).

## OpenID Connect 1.0

OpenID Connect is specified in the [OpenID Connect 1.0 specification](http://openid.net/specs/openid-connect-core-1_0.html). OpenID Connect builds on the OAuth protocol and defines an interoperable way to use OAuth 2.0 to perform user authentication. OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It enables clients to verify the identity of the user based on the authentication performed by an authorization server, as well as to obtain basic profile information about the user.

OpenID Connect defines the following roles:

* Relying party (RP): An OAuth client that supports OpenID Connect. The mobile application, web site, and so on, that wants to access data on behalf of the resource owner.
* OpenID provider (OP): An OAuth authorization server that is capable of authenticating the user and providing claims to a relying party about the authentication event and the user.

OpenID Connect defines a new kind of token, the ID token. The OpenID Connect ID token is a signed JSON Web Token (JWT) that is given to the client application alongside the regular OAuth access token. The ID token contains a set of *claims* about the authentication session, including an identifier for the user (`sub`), an identifier for issuer of the token (`iss`), and the identifier of the client for which this token was created (`aud`). Since the format of the ID token is known by the client, it can parse the content of the token directly.

In addition to the claims in the ID token, OpenID Connect defines a standard protected resource (the UserInfo endpoint) that contains claims about the current user. OpenID Connect defines a set of standardized OAuth scopes that map to claims (`profile`, `email`, `phone`, and `address`). If the end user authorizes the client to access these scopes, the OP releases the associated data (claims) to the client when the client calls the UserInfo endpoint. OpenID Connect also defines a special `openid` scope that switches the OAuth server into OpenID Connect mode.

## API Gateway OAuth 2.0 server

OAuth 2.0 is an open standard for authorization that enables client applications to access server resources on behalf of a specific *resource owner*. OAuth also enables resource owners (end users) to authorize limited third-party access to their server resources without sharing their credentials. For example, a Gmail user could allow LinkedIn or Flickr to have access to their list of contacts without sharing their Gmail user name and password.

The API Gateway can be used as an *authorization server*
and as a *resource server*. An authorization server issues tokens to client applications on behalf of a resource owner for use in authenticating subsequent API calls to the resource server. The resource server hosts the protected resources, and can accept or respond to protected resource requests using access tokens.

{{< alert title="Note" color="primary" >}}This guide assumes that you are familiar with the terms and concepts described in the [OAuth 2.0 Authorization Framework](http://tools.ietf.org/html/rfc6749).{{< /alert >}}

### API Gateway OAuth concepts

The API Gateway uses the following definitions of basic OAuth 2.0 terms:

* Resource owner – An entity capable of granting access to a protected resource. When the resource owner is a person, it is referred to as an end user.
* Resource server – The server hosting the protected resources, and which is capable of accepting and responding to protected resource requests using access tokens. In this case, the API Gateway acts as a gateway implementing the resource server that sits in front of the protected resources.
* Client application – A client application making protected requests on behalf of the resource owner and with its authorization.
* Authorization server – The server issuing access tokens to the client application after successfully authenticating the resource owner and obtaining authorization. In this case, the API Gateway acts both as the authorization server and as the resource server.
* Scope – Used to control access to the resource owner's data when requested by a client application. You can validate the OAuth scopes in the incoming message against the scopes registered in the API Gateway. An example scope is `userinfo/readonly`.

### OAuth server example workflow

Assume that you are using an image printing website such as Canon to print some of your photos. You also have some photos on your Flickr account that you would like to print. However, you currently must download all these locally, and then upload them again to the printing website, which is inconvenient. You would like to be able to sign into Flickr from your Canon printing profile, and print your photos directly.

This problem can be solved using the example OAuth 2.0 web server flow shown in the following diagram:

![OAuth Workflow](/Images/OAuth/APIgw_Oauth_ex_client_workfl.png)

Out of band, the Canon printing client application preregisters with Flickr and obtains a client ID and secret. The client application registers a callback URL to receive the authorization code from Flickr when you, as resource owner, allow Canon to access the photos from Flickr. The printing application has also requested access to an API named `/flickr/photos`, which has an OAuth scope of `photos`.

The steps in the diagram are described as follows:

1. You are using a mobile phone and are signed into the Canon image printing website. You click to print Flickr photos. The Canon client application redirects you to the Flickr OAuth authorization server. You must already have a Flickr account.
2. You log in to your Flickr account, and the Flickr authorization server asks you "Do you want to allow the Canon printing application to access your photos?" You click **Yes**
    to authorize.
3. When successful, the printing application receives an authorization code at the callback URL that was preregistered out of band.

    {{< alert title="Note" color="primary" >}}
    You have not shared your Flickr user name and password with the printing application. At this point, you as resource owner are no longer involved in the process.
    {{< /alert >}}

4. The client application gets the authorization code, and must exchange this short-lived code for an access token. The client application sends another request to the authorization server, saying it has a code that proves the user has authorized it to access their photos, and now issues the access token to be sent on to the API (resource server). The authorization server verifies the authorization code and returns an access token.
5. The client application sends the access token to the API (resource server), and receives the photos as requested.

### API Gateway OAuth server features

API Gateway provides the following features to support OAuth 2.0:

* Web-based client application registration
* Generation of authorization codes, access tokens, and refresh tokens
* Support for the following OAuth authentication flows:
    * Authorization code grant (web server)
    * Implicit grant (user agent)
    * Resource owner password credentials
    * Client credentials grant
    * JWT
    * Refresh token
    * Revoke token
    * Token information service
    * SAML assertion

    For more information on the supported flows, see [OAuth 2.0 authentication flows](/docs/apigw_oauth/oauth_flows).
* Sample client applications for all supported flows

The following diagram shows the roles of the API Gateway as an OAuth 2.0 resource server and authorization server:

![OAuth roles](/Images/OAuth/APIgw_OAuth_Roles1.png)
