---
title: Install AMPLIFY Central CLI
linkTitle: Install AMPLIFY Central CLI
weight: 90
date: 2020-05-29T00:00:00.000Z
description: Learn how to install the AMPLIFY CLI and authorize it to use the
  AMPLIFY Central APIs. This enables you to integrate the CLI into your DevOps
  pipeline.
---

## Before you start

* You will need an administrator account for AMPLIFY Central ([Managing Accounts](https://docs.axway.com/bundle/AMPLIFY_Dashboard_allOS_en/page/managing_accounts.html))
* AMPLIFY Central CLI supports:

    * Operational systems (OS): Mac OS, Linux, Windows 10
    * Terminal shell: Mac OS Terminal, Linux Terminal, Windows Command Prompt, Windows PowerShell
    * Not supported: Cygwin (Windows), Git Bash(Windows)

## Install AMPLIFY CLI and AMPLIFY Central CLI

1. Install `Node.js 10.13.0 LTS` or later.
2. Run the following command to install AMPLIFY CLI:

   ```
   [sudo] npm install -g @axway/amplify-cli
   ```

   Use `sudo` on Mac OS X or Linux if you do not own the directory where npm installs packages to. On Windows, you do not need to run as     Administrator as npm installs packages into your AppData directory.
3. Run AMPLIFY package manager to install AMPLIFY Central CLI:

   ```
   amplify pm install @axway/amplify-central-cli
   ```
4. Run AMPLIFY package manager list command to view available packages.

   ```
   amplify pm list
   AMPLIFY CLI, version 1.4.0
   Copyright (c) 2018, Axway, Inc. All Rights Reserved.
   NAME                           | INSTALLED VERSIONS             | ACTIVE VERSION
   @axway/amplify-central-cli     | 0.1.7,0.1.8,0.1.9              | 0.1.9
   ```

All the development versions of AMPLIFY Central CLI can be found at [NPM install of AMPLIFY Central CLI](https://www.npmjs.com/package/@axway/amplify-central-cli). To install a specific development version, run the following command:

```
amplify pm install @axway/amplify-central-cli@0.1.8-dev.10
```

### Additional installation steps on Windows

After successfully installing Amplify Central CLI, you must check if OpenSSL is installed. OpenSSL is needed to generate a public and private key pairs for service account authentication, which is a pre-requisite for the creation of service accounts.

Install OpenSSL if not installed already:

1. [Download OpenSSL](https://slproweb.com/products/Win32OpenSSL.html).
2. Install OpenSSL, and ensure it is added to your path (`C:\Program Files\OpenSSL-Win64\bin`) in environment variables.

    ![Environment variables](/Images/central/cli_central/env_variables.png)

3. Verify that OpenSSL is installed and configured correctly.

    ```
     openssl version
    ```

## Authorize your CLI to use the AMPLIFY Central APIs

Before using the AMPLIFY Central APIs you must first authorize your CLI, so you can use it, for example, as part of your DevOps pipeline.
There are two ways to authorize your CLI:

* [Use your AMPLIFY Platform login credentials](/docs/central/cli_central/cli_install#login-with-your-amplify-platform-credentials).
* [Use a service account](/docs/central/cli_central/cli_install#authenticate-and-authorize-your-service-account).

### Log in with your AMPLIFY Platform credentials

To use Central CLI to log in with your AMPLIFY Platform credentials, run the following command and used `apicentral` as the client identifier:

```
amplify auth login --client-id apicentral
```

Enter valid credentials (email address and password) on the dialog box displayed.
An "Authorization Successful" message is displayed, and you can go back to the Central CLI.

If you are a member of multiple AMPLIFY organizations, you may have to choose an organization.

To check that your client identifier is set correctly to `apicentral`, run:

```
amplify central config list
{ 'client-id': 'apicentral' }
```

If the client identifier is not set to `apicentral`, set the client identifier for future operations::

```
amplify central config set --clientid=apicentral
```

You have completed the authorization of your CLI with your AMPLIFY Platform credentials.

### Authenticate and authorize your service account

To use the Central CLI, your service account must authenticate with AMPLIFY Platform and it must be authorized to use the AMPLIFY Central APIs.

#### Create a service account using the CLI

{{% alert title="Note" %}}You must have OpenSSL installed to run this command.{{% /alert %}}

To create a service account from the CLI, run the following command

```
amplify central create service-account
```

You will be prompted to provide a name for the service account. A public and private key pair in RSA format will be generated for you.

#### Create a service account using the user interface

To create a service account from the UI, log in to AMPLIFY Central UI as an administrator, and create a service account for your CLI. Add the public key that you created earlier. When the account is created, copy the client identifier from the **Client ID** field.

Watch the animation to learn how to do this in AMPLIFY Central UI.

![Create service account in AMPLIFY Central UI](/Images/central/service_account_animation.gif)

#### Authorize the service account with AMPLIFY platform

To authorize the service account with AMPLIFY platform, log in to AMPLIFY CLI using the following command:

```
amplify auth login --client-id DOSA_105cf15d051c432c8cd2e1313f54c2da --secret-file ~/test/private_key.pem

AMPLIFY CLI, version 1.4.0
Copyright (c) 2018, Axway, Inc. All Rights Reserved.

You are logged into 8605xxxxxxx28 as DOSA_5ed74d68defxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx604.

This account has been set as active.
```

#### Set the active service account

To set the service account client identifier for future operations:

```
amplify central config set --client-id DOSA_105cf15d051c432c8cd2e1313f54c2da
```

To view the saved configuration:

```
amplify central config list
{ 'client-id': 'DOSA_105cf15d051c432c8cd2e1313f54c2da' }
```

## Review

You have learned how to install the AMPLIFY CLI and how to register or link it to a service account, or to the AMPLIFY Platform account. Now, you can integrate the AMPLIFY CLI into your DevOps pipeline to automate actions in AMPLIFY Central.