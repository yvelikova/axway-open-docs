---
title: Manage an environment using AMPLIFY CLI
linkTitle: Manage an environment using AMPLIFY CLI
weight: 7
date: 2019-11-11
description: Learn how your DevOps service can use AMPLIFY CLI to manage your environments.
---

*Estimated reading time*: XX minutes

{{% alert title="Note" %}}This feature is currently in development and will be available soon.{{% /alert %}}

## Before you start

* You will need to [authorize your DevOps service to use the DevOps API](/docs/central/cli_getstarted/)
* Verify the @axway/amplify-central-cli version is at minimum 0.1.3.

## Objectives

Learn how to create and manage your distributed cloud and on-premise environments using the AMPLIFY CLI.

* Create a new environment
* Retrieve a list of all available environments
* Retrieve details for a specific environment
* Update a specific environment
* Delete a specific environment

## Create an environment

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

## List environments

Examples:

```
amplify central get environments
amplify central get envs -o yaml
```

Options:

```
-o, --output = yaml | json
```

## Get an environment's details

Examples:

```
amplify central get environment <name>
amplify central get env <name> -o yaml
```

Options:

```
-o, --output = yaml | json
```

## Update an environment

Examples:

```
amplify central edit environment <name>
amplify central edit env <name> -o yaml
```

Options:

```
-o, --output = yaml | json
```

## Delete an environment

{{% alert title="Warning" color="warning"%}}This action cannot be reversed.{{% /alert %}}

Examples:

```
amplify central delete env <name>
```

## Review

You have learned how to use the AMPLIFY Central DevOps APIs by way of AMPLIFY CLI to manage your environments.
