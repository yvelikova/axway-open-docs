---
title: Configure an OAuth proxy policy
linkTitle: Configure and OAuth proxy policy
weight: 4
date: 2019-07-30
description: API proxies can be secured with a client authentication policy. Learn how to setup an OAuth front-end security policy on an API Proxy.
---

*Estimated reading time: 5 minutes*

## Before you start

* You will need a Client ID, Issuer, and Metadata Path provided by your third-party OAuth server.

## Objectives

Learn how to setup an OAuth front-end security policy on an API Proxy.

### Set up OAuth security on an API proxy

Follow these steps to require an OAuth policy on an API Proxy:

1. Select the API proxy you want to add the OAuth policy.
2. Click the **Policies** tab.
3. Click the gear icon next to **Client authentication**.
4. On the dialog box, select **OAuth Token** from the **Authentication type** list.

    ![Select OAuth Token from the list](/Images/central/oauth_client_auth_dropdown.png)

    You should now see that **OAuth Token** has been set as the selected **Client authentication** policy.

    ![OAuth Token has been selected](/Images/central/oauth_client_auth.png)

5. On the **Deployments** tab, click **Deploy** to deploy or update a runtime group with the OAuth security.

    ![Runtime has been deployed](/Images/central/oauth_deployed_runtime.png)

## Use an API proxy secured with an OAuth policy

To use the proxy, the provider will need to setup a third-party OAuth server with a valid application. A single application from the third-party server's application will directly relate to a single AMPLIFY Central application.

{{< alert title="Note" >}}At this time, Okta is the only supported third-party OAuth provider. Additional providers will be included in the future.{{< /alert >}}

### Create an application profile

After you have created an application within your third-party OAuth server, you must create an application profile to use your secured proxy.

1. Select **Apps** in the left navigation bar, and click your API proxy in the list.
2. On the **Identity Profiles** tab, click **+ OAuth Profile** to add an Oauth profile.
3. Enter the required information, and click **Save**.

![OAuth Token has been selected](/Images/central/oauth_profile.png)

### Make an API call

1. Inside the API Proxy with an OAuth Client authentication policy, click the "Test Methods" tab.
2. If you have more than one valid Deployment, choose the one you want to test. If you only have one, it will automatically be selected for you.
3. If you have more than one valid OAuth Profile, choose the one you want to test. If you only have one, it will automatically be selected for you.

When you select a valid OAuth Profile, you will see your Client ID displayed in a read-only field. This will assist you, the provider, in generating an OAuth token from the correct application in your third-party OAuth server.

After your third-party OAuth server has generated a valid OAuth token, paste that token into the large "OAuth token" field. You may now attempt to make valid API calls with your proxy.

{{< alert title="Note" >}} If your token is invalid, expired, or empty, the API call will result in a **403: Unauthorized** response.{{< /alert >}}

## Review

You have learned how to setup an OAuth front-end security policy on an API proxy in AMPLIFY Central.
