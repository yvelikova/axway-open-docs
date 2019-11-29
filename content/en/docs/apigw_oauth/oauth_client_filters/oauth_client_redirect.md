---
title: Redirect resource owner to authorization server
linkTitle: Redirect resource owner to authorization server
date: 2019-11-18
description: The purpose of the **Redirect resource owner to Authz Server** filter is to redirect the resource owner's user agent to the OAuth authorization server. This filter can only be used in the authorization code flow.
weight: 3
---

## General settings

Configure the following general settings for the **Redirect resource owner to Authz Server** filter:

**Name**:\
Enter a suitable name for this filter.

**Choose OAuth Token Key**:\
Enter the message attribute to be used as the key to look up the token. The token key must be set to the authentication value you require for the OAuth token. In the context of an OpenID Connect flow the OAuth token key can be a cookie value. Defaults to `${authentication.subject.id}`.

If no key is specified, this field is ignored. This is to accommodate anonymous use of OAuth whereby the user starting the process does not need to authenticate with API Gateway first.

**Override scopes setup for authz request**:\
This field allows you to override the scopes assigned to a client profile. This could potentially be used in the OpenID Connect flow whereby you could specify scopes for the OpenID Connect flow, or if you already have a session you would not need to specify OpenID Connect scopes. (For an example, see the OAuth client demo.)

**Optionally select a client credential profile**:\
Select this option and click the browse button to select an OAuth client credential profile. This can be used if no preceding filter has set the application profile on the message board, or to override the existing application profile.

**Configure OAuth State Map**:\
This allows you to configure extra parameters in the OAuth state map (for example, to implement cross-site request forgery (CSRF) protection). By default the state map contains `client_id`
and `oauth.token.id`. Any extra parameters added here are added to the state map. The message attribute `oauth.state.map`
will be available at the callback endpoint when an authorization code is exchanged for a token.

Select one of the following options:

* **Add extra state properties**:\
Click **Add** to store additional state properties, and enter the **Name** and **Value** in the dialog.
* **Retrieve properties from selector**:\
Enter the attribute that stores the properties. Defaults to `oauth.state.map`.
