---
title: Configure back-end authentication for an API
linkTitle: Configure back-end authentication
weight: 5
date: 2019-07-30
description: Learn how to configure back-end authentication for an API which supports back-end authentication.
---

*Estimated reading time: 6 minutes*

## Before you start

- You will need a user account for {{< variables/central_prod_name >}}
- You will need an API which supports back-end authentication

## Objectives

Learn how to secure your back-end API using HTTP Basic authentication.

## Add back-end HTTP basic authentication to an API proxy

The following steps demonstrate how to configure HTTP basic back-end authentication for a sample API, and how to deploy and test the API.

### Step 1 - Import an API that supports back-end authentication as an API proxy

Select **API Proxies** in the left navigation bar, click **Register API**,  and import an API with back-end authentication. 

This example uses a sample musical instruments API with HTTP basic authentication. You can import this from: <https://39cd48c2323117d7f0ec53a347aa94d8974a2174.cloudapp-enterprise.appcelerator.com/apidoc/swagger.json>

![Import an API with HTTP basic authentication](/Images/central/import-proxy.png)

### Step 2 - Configure HTTP basic back-end authentication for the API proxy

On the **Policies** tab change the back-end authentication policy to `HTTP Basic Auth` and enter the authentication credentials. The credentials can be a user name and password combination or only a user name with no password. 

The credentials for the sample musical instruments API are:

- user name/password: `admin`/`changeme`
- user name/no password: `EtHJ0DUYiqv1l5hV1Ztg2XW7HfLlBZKk`

Watch the animation to learn how to do this in AMPLIFY Central UI.

![Configure HTTP basic authentication details](/Images/central/APICBackendHTTPBasic1Cropped.gif)

Changing the back-end authentication policy (for example, from no authentication to HTTP basic authentication) always creates a new revision of the API proxy.

### Step 3 - Deploy and test the API proxy revision

On the **Deployments** tab, deploy or update a runtime group with this revision of your API proxy.

On the **Test Methods** tab, execute a method and it should return a `200 OK` result. This indicates a successful call of the API using HTTP basic as the back-end authentication.

### Update HTTP basic authentication credentials

You can update the HTTP basic authentication credentials after deploying the API proxy. The backend authentication dialog displays the previously set credentials, but as password is a secure field, it is not revealed.

Changing the HTTP basic authentication credentials for a deployed proxy revision creates a new revision of the API proxy. If the proxy revision is not deployed, the current revision is updated.

## Review

You have learned how to configure back-end authentication for your API in AMPLIFY Central.
