---
title: Add application credentials
linkTitle: Add application credentials
date: 2019-11-18
description: Each OAuth 2.0 provider can have multiple client application credentials. Each set of credentials represents an application that has been registered with the provider. Upon registering, the application is assigned a client ID and secret and can designate a redirect URL for receiving access codes.
weight: 4
---

To add an application for an existing OAuth 2.0 provider, click an OAuth 2.0 client credential node (for example, **Google**), and click the **Add** button on the **OAuth2 Credentials** tab of the **OAuth2 Credential Profile** window. Complete the following fields on the **Add OAuth2 Application** dialog:

**Name**:\
Enter a suitable name for this client application.

**Client ID**:\
This identifies the client responsible for the OAuth request. This ID is assigned by the OAuth provider.

**Client Secret**:\
This is a confidential secret key used for authentication. This secret is assigned by the OAuth provider.

**OAuth Flow Type**:\
Select an OAuth flow type. The options are:

* Authz Code
* Client Credentials
* JWT
* Resource Owner
* SAML

For more details on the authentication flows that API Gateway supports, see [OAuth 2.0 authentication flows](/docs/apigw_oauth/oauth_flows/).

**Redirect URL**:\
Enter the URL of the client's redirect endpoint (for example, `https://localhost:8088/oauth_callback`). This is the URL registered with the provider for receiving access codes via a redirect from the authorization server. This must match a listener configured on API Gateway (see [Create a callback URL listener](/docs/apigw_oauth/oauth_client/oauth_callback)).

To configure client scopes, SAML bearer settings, JWT settings, or other advanced settings, click the appropriate tabs.

## Configure scopes

You can configure the scopes that a client application can access on the **Scopes** tab. Click **Add** to add a scope. This is the set of scopes required by the application, and this list must match, or be a subset of, the required scopes registered with the OAuth provider. For more information on scopes, see [Manage OAuth scopes](/docs/apigw_oauth/gw_oauth_resource_server/oauth_scopes).

## Configure SAML bearer

You can configure SAML bearers on the **SAML Bearer** tab. According to the IETF draft document [SAML 2.0 Profile for OAuth 2.0](http://tools.ietf.org/html/draft-ietf-oauth-saml2-bearer-18), a SAML assertion can be used to request an access token when a client wishes to utilize an existing trust relationship, expressed through the semantics of the SAML assertion, without a direct user approval step at the authorization server. When a client application is configured to use the SAML grant type, a SAML assertion must be either configured/generated or made available on the message board.

To generate an assertion select the **Generate assertion using following configuration** option and complete the following fields:

**Use private key to sign SAML assertion**:\
Click **Signing Key**
to select a private key to use to sign the assertion. This will be the private key certificate registered with the OAuth provider.

**Resource Owner ID**:\
Enter the identity of the resource owner as expected by the resource server. This can be specified using a selector (for example, `${authentication.subject.id}`).

**Assertion expires in**:\
Enter the time duration that the assertion is valid for. Expressed in days, hours, minutes, and seconds.

**Drift time (secs)**:\
Enter a drift time in seconds to allow for clock skew.

Alternatively, you can generate the assertion through other means and take it from the message board by selecting the option **Get assertion from message attribute named**
and entering the name of the attribute (for example, `${oauth.saml.assertion}`).

{{< alert title="Note" color="primary" >}}The IETF draft document also describes how to use SAML 2.0 for client authentication. This is *not*
supported in API Gateway.{{< /alert >}}

The API Gateway uses a SAML template to generate the SAML assertion. The template file is stored under the `Resources/Stylesheets`
directory in Policy Studio when the client demo is deployed (see [Deploy the OAuth client demo](/docs/apigw_oauth/deploy_oauth_config#Deploy)). Alternatively, you can find this file in `INSTALL_DIR/apigateway/samples/oauth/templates/samltemplate.xml`
and import it via Policy Studio. At runtime the values in the template are substituted with values configured for the OAuth client SAML application.

## Configure JWT

You can configure JWT on the **JWT** tab. This enables you to configure JWT for authorization grant, as defined by the IETF draft document [JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants](http://tools.ietf.org/html/draft-ietf-oauth-jwt-bearer-07).

{{< alert title="Note" color="primary" >}}API Gateway only supports the use of JWT as authorization grant and does *not* support JWT for client authentication.{{< /alert >}}

Configure the following fields:

**Sign using private key**:\
Select this option and click **Signing Key** to select a private key certificate that has been registered with the OAuth provider, and use it to sign the JWT claim.

**Sign using client secret**:\
Select this option to sign the JWT claim using a client secret issued by the OAuth provider.

**JWT expiry (in secs)**:\
Enter the expiry time for the JWT claim, in seconds.

**Add additional JWT claims**:\
Click the **Add** button to add additional JWT claims. You can also **Edit** or **Delete** existing claims.

By default a JWT is generated with the following claim set:

| Claim | Default value                                                                                                         |
|-------|-----------------------------------------------------------------------------------------------------------------------|
| `iss` | The application client ID.                                                                                            |
| `aud` | The token endpoint of the provider.                                                                                   |
| `exp` | The expiry time from the field **JWT expiry (in secs)**.                                                              |
| `iat` | The issued assertion time, the time the assertion was issued measured in seconds since 00:00:00 UTC, January 1, 1970. |

These claims can be overridden or extended by adding additional claims. It is also possible to add claims like `scope` to define scopes, and `prn` (for SalesForce), or `sub` (as defined in the IETF draft document) to identify the resource owner for whom a token is being requested. Service defined claims must also be added here. Unrecognized claims should be ignored by service providers.

| Claim   | Default value                                                                                                                     |
|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| `sub`   | The subject ID of the resource owner. This identifies the resource owner for whom the request is being made. The property **prn** can also be used here for some providers (for example, SalesForce), but the use of this property has been superseded by **sub** in the IETF specification.                                                                                                         |
| `scope` | A space delimited list of scopes within the claim, defining the required permissions of the request.                              |

{{< alert title="Note" color="primary" >}}Scopes must be added to a claim on this tab if they are required by the provider to be present in a claim. The scopes defined on the **Scopes** tab are added to the query string of the token request, but for flexibility they are not automatically added to the claim. The reason for this is because JWT authorization grants are non-normative and claim sets must be agreed in advance with individual OAuth providers. For example, SalesForce does not allow the addition of scopes to a JWT claim, whereas Google requires a scope claim. Automatically adding scopes from the **Scopes** tab to a claim could preclude a JWT grant flow where scopes must be present in the request but not the claim.{{< /alert >}}

## Configure advanced settings

You can use the following options to specify where to add the client credentials in token requests (the authorization header or the query string). This option applies to all standard grant types excluding JWT and SAML.

**In Authorization Header**:\
Select this option to add the client credentials to the authorization header.

**In Query String**:\
Select this option to add the client credentials to the query string.

Use the following options to specify where to find resource owner credentials, for the resource owner grant type.

**Resource Owner ID**:\
Enter the resource owner ID. This can be specified as a selector.

**Resource Owner Password**:\
Enter the resource owner password. This can be specified as a selector.

Finally, in the **Properties** table you can add additional properties to pass with authorization or token requests. These properties can be used to set up provider-specific options, for example, Google authorization requests require the parameter `access_type=offline`
to issue a refresh token.

After you have configured your OAuth 2.0 client credentials globally, you can select the client credential profile to use for authentication on the **Authentication** tab of your filter (for example, in the **Connection** and **Connect To URL** filters) in the policy calling the resource server. The selected client credential links back to the access token store holding the access token received from the OAuth2 server. When you invoke the policy, the filter sets the bearer token in the authorization header. For more information, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).
