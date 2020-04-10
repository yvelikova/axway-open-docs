---
title: Prepare AMPLIFY Central
description: Learn how to create an environment and Service Account for Axway
  API Gateway within AMPLIFY Central.
---
<!--StartFragment-->

<!--StartFragment-->

The Axway API Gateway connectivity to AMPLIFY Central is currently available in an alpha review mode; current functionality and configuration may change before release. Therefore, this connectivity is available for trial use only and is not supported for production API management or connectivity.

<!--EndFragment-->

## Before you start

* Read *AMPLIFY Central and Axway API Manager connected overview*
* You will need a basic knowledge of Axway API Manager
* Verify that @axway/amplify-central-cli version is at minimum 0.1.3

## Objectives

Learn how to create an environment and Service Account for Axway API Gateway within AMPLIFY Central.

## Create an environment

Create an environment object in AMPLIFY Central that represents the effective Axway API Gateway environment. Depending on your needs, you can create as many environments as required.

Each discovered API or Traffic is associated to this environment and eases the filtering.

You can create your environment using either the UI, API or CLI.

### Create environment using the UI

Create an environment in **AMPLIFY Central UI > Topology > Environments > create** and give it a relevant name. It is not necessary to have a real environment at this point, but it is important to have an environment name. You can find this environment name in your environment details in the UI.

**Example**: https:/<AMPLIFY Central URL>/topology/environments/apigtw-v77

### Create environment using the CLI

Examples:

|     |
| --- |

Options:

|     |
| --- |

Sample file:

|     |
| --- |

For information, see [Manage an environment using AMPLIFY CLI](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/cli_environments/index.html).

## [](<>)Create a Service Account

Create a Service Account in AMPLIFY Central.

1. Generate a private and public key pair:

|     |
| --- |

The public key can be either of type .der format or of type base64 encoded of the .der format.

1. Create a new Service Account user in API Central using the key pair from above. For additional information, see[Manage an API proxy using AMPLIFY CLI](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/cli_proxy_flow/index.html).

<!--EndFragment-->