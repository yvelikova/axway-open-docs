---
title: Scopes in API Gateway
linkTitle: Scopes in API Gateway
date: 2019-11-18
description: An OAuth scope is a text string used to control access to protected resources. The resource that the scope is associated with determines the meaning of the scope. For example, if a `customer_details` scope is associated with a particular resource, and a client application is associated with the `customer_details` scope, the client application will have access to that resource. Client applications and resources can have multiple OAuth scopes.
weight: 3
---

For example, in the following overview diagram:

* Client application A can access the `customer_details` scope.
* Client application B can access the `customer_details` and `photos`scopes.
* Client application C can access the `photos`scope only.

![OAuth Scopes](/Images/OAuth/oauth_scopes_overview.png)

In API Gateway, a global OAuth scopes model is used:

* Scopes are defined in policies.
* There can be 1…N listeners routing to 1…N policies. There is no explicit URL to scope mapping defined, instead it is implicitly determined by the listener to policy routing.
* Scopes can be dynamically defined and assigned to registered client applications in the Client Application Registry.
* Supports default scopes, which are scopes assigned if no scopes are requested in the authorization request.

{{< alert title="Note" color="primary" >}}This scopes model is also supported in API Manager. For more details, see [Scopes in API Manager](docs/apigw_oauth/apimgr_resource_server/apimgr_scopes).{{< /alert >}}

## Manage OAuth scopes in the Client Application Registry

You can configure the scopes that a client application can access in the Client Application Registry web interface. When editing the client application, select the **Authentication** tab. In the OAUTH SCOPES section you can specify scopes as free-form text or select a scope from a list of known configured scopes. You can also select a scope as a default scope for the client application. Default scopes are used when an authorization or token request does not contain scopes. The full list of scopes (default and non-default) represents the list of scopes that can be included in an authorization or token request.

{{< alert title="Tip" color="primary" >}}In general, good OAuth design involves a finite number of OAuth scopes. You should decide on the set of scopes to be used in your system instead of creating too many scopes later on. {{< /alert >}}

The following figure shows the default scopes for a client application:

![Configure client application scopes](/Images/OAuth/oauth_scopes.png)

{{< alert title="Note" color="primary" >}}You can specify any text string for an OAuth scope (for example, `customer_details`
or `readonly`).{{< /alert >}}

When an authorization code or access token request is received from a client application, the API Gateway OAuth access token filters check that the scopes in the message match the scopes configured for the client application. If no scopes are provided in the message, the filter creates an access token for the scopes that are configured as default. The scope for which the access token was created is checked against the list of available scopes in the Client Application Registry web interface. This list is generated from the scopes defined in the **Validate Access Token** filter in the server configuration. For more details on this filter, see [Validate access token](oauth_validate_token).

{{< alert title="Note" color="primary" >}}You can also specify OAuth scopes using selectors (for example, use `${http.request.verb}`
to map HTTP `GET`and `PUT` requests). However, the Client Application Registry web interface does not display selectorized scopes in the list of available scopes. This is because selectorized scopes in the **Validate Access Token** filter cannot be evaluated at registration time. {{< /alert >}}

The administrator must therefore find out about any selectorized scopes to be applied to resources at runtime. If a scope must be configured using a selector, the administrator must find out exactly which selector to specify in the scope. For more details on selectors, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).
