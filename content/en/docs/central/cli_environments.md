---
title: Manage an environment using AMPLIFY CLI
linkTitle: Manage an environment using AMPLIFY CLI
weight: 6
date: 2019-11-11
description: Learn how you can use the AMPLIFY CLI to manage your environments.
---

*Estimated reading time*: 5 minutes

    {{% alert title="Note" %}}This feature is currently in development and will be available soon.{{% /alert %}}

## Before you start

* You will need an administrator account for AMPLIFY Central
* Install AMPLIFY CLI

### Install AMPLIFY CLI

1. Install Node.js 8 LTS or later *(Note: Node.js > 11 is not yet supported)*
2. Run the following command to install AMPLIFY CLI:

    ```
    [sudo] npm install -g @axway/amplify-cli
    ```

    {{% alert title="Note" %}}Use `sudo` on Mac OS X or Linux if you do not own the directory that npm installs packages to. On Windows, you do not need to run as Administrator as npm installs packages into your AppData directory.{{% /alert %}}

3. Run AMPLIFY package manager to install AMPLIFY Central CLI:

    ```
    amplify pm install @axway/amplify-central-cli
    ```

4. Run AMPLIFY package manager list command to view available packages:

    ```
    amplify pm list
    AMPLIFY CLI, version 1.2.1
    Copyright (c) 2018, Axway, Inc. All Rights Reserved.
    NAME                           | INSTALLED VERSIONS | ACTIVE VERSION
    @axway/amplify-api-builder-cli | 1.0.1              | 1.0.1
    @axway/amplify-central-cli     | 0.1.1              | 0.1.1
    ```

## Objectives

Learn how to create and manage your environments using the AMPLIFY CLI.

* Create a new environment
* Retrieve a list of all available environments
* Retrieve details for a specific environment
* Update a specific environment
* Delete a specific environment

## Service account authentication and authorization

To manage API proxies in AMPLIFY Central, your DevOps service account must authenticate with AMPLIFY Platform and it must be authorized to use the AMPLIFY Central DevOps APIs.

To support DevOps service interactions, AMPLIFY Central uses the OAuth 2.0 client credentials flow with JWT:

1. Create an RSA public private key pair for your DevOps service account
2. Use the public key to register the service account with AMPLIFY Platform to obtain a client ID
3. Use the client ID and private key to authenticate with AMPLIFY Platform to obtain a JWT
4. Use the JWT to make authorized API calls to AMPLIFY Central

## Generate an RSA key pair

To authorize a DevOps service account with AMPLIFY Platform, you need a public and private key pair in RSA format. To create this key pair, use `openssl` as follows:

```
$ openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
..............................................................+++
.........................+++

user@test123 ~/test
$ openssl rsa -pubout -in private_key.pem -out public_key.pem
writing RSA key

user@test123 ~/test
$ ls
private_key.pem  public_key.pem
```

## Create a service account

Log in to AMPLIFY Central UI as an administrator, and create a service account for your DevOps service. Add the public key that you created earlier. When the account is created, copy the client identifier from the **Client ID** field.

Watch the animation to learn how to do this in AMPLIFY Central UI.

![Create service account in AMPLIFY Central UI](/Images/central/service_account_animation.gif)

## Log in to AMPLIFY CLI

To authorize the service account with AMPLIFY platform, log in to AMPLIFY CLI using the following command:

```
amplify auth login --client-id DOSA_105cf15d051c432c8cd2e1313f54c2da --secret-file ~/test/private_key.pem
```

### Save the service account client identifier

To save the service account client identifier for future operations:

```
amplify central config set --client-id DOSA_105cf15d051c432c8cd2e1313f54c2da
```

To view the saved configuration:

```
amplify central config list
{ 'client-id': 'DOSA_105cf15d051c432c8cd2e1313f54c2da' }
```

## Environment Management

AMPLIFY Central allows users to manage their environments using the CLI. The following actions and options are supported.

### Create an environment


Examples:

```
amplify central create environment <name> -f <filename>
amplify central create env <name> -o json
```

Options:

```
-o, --output = yaml | json
-f, --file = (filename.yml, filename.yaml, or filename.json)
```

### List environments

Examples:

```
amplify central get environments
amplify central get envs -o yaml
```

Options:

```
-o, --output = yaml | json
```

### Get an environment's details

Examples:

```
amplify central get environment <name>
amplify central get env <name> -o yaml
```

Options:

```
-o, --output = yaml | json
```

### Update an environment

Examples:

```
amplify central edit environment <name>
amplify central edit env <name> -o yaml
```

Options:

```
-o, --output = yaml | json
```

### Delete an environment

**WARNING:** This action cannot be reversed.

Examples:

```
amplify central delete env <name>
```

## Review

You have learned how to authorize your DevOps service to use the AMPLIFY Central DevOps APIs by way of AMPLIFY CLI to manage your environments.
