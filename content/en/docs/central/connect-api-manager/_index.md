---
title: Connect API Manager
linkTitle: Connect API Manager
no_list: true
draft: false
weight: 130
description: >
  Understand why you would connect Axway API Manager to AMPLIFY Central. Learn
  how you can publish to the AMPLIFY Catalog from your API Management System in
  order to obtain a global view of your APIS and present this Catalog to your
  consumers.

  Learn how you can collect the traffic of all your gateways and see it in a single place in AMPLIFY Central Observability.
---
## What is Axway API Manager connected?

Connect your API Management system (v7.6.2 or above) to AMPLIFY Central by using two agents: Discovery and Traceability. These two agents will help you to represent and expose your API Management eco-system in AMPLIFY Central:

* Create an API Gateway environment in AMPLIFY Central that represent your actual API Management eco-system.
* Detect published API using the Discovery Agent. The Discovery Agent discovers the API from API Manager and makes them available in AMPLIFY Central. An API Service in Central is created to reference the API from API Manager and then you can optionally tell the agent to publish it to the AMPLIFY Catalog to allow your consumer to discover it.
* Manage consumer subscription using the Discovery Agent. When a consumer subscribes/unsubscribes to a Catalog asset, the Discovery Agent keeps track of the changes and maintains the API Management system accordingly.  
* Filter the Axway API Gateway logs using the Traceability Agent. The Traceability Agent uses the discovered API to filter API Gateway events to extract the transaction information and send it to the AMPLIFY platform Observability module.

### Discovery Agent

The Discovery Agent is used to discover new published APIs. The Discovery Agent pushes both REST and SOAP API definitions to AMPLIFY Central.

The Discovery Agent discovers APIs that have PassTrough / API Key / OAuth security only.

The related APIs are published to AMPLIFY Central in either disconnected mode (catalog item publication) or connected mode (Environment / API Service publication and optionally as Catalog item). For additional information, see [Discovery Agent](/docs/central/connect-api-manager/deploy-your-agents/#discovery-agent).

![Service Discovery](/Images/central/ServiceDiscoveryAPIM.png)

### Traceability Agent

The Traceability Agent sends log information about APIs that have been discovered and published to AMPLIFY Central.

## Pre-requisites

* An Axway AMPLIFY Central subscription in the AMPLIFY™ platform. See [Get started with AMPLIFY Central](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/quickstart/index.html).
* An AMPLIFY Central Service Account. See [Manage an API proxy using AMPLIFY CLI](/docs/central/cli_proxy_flow/).

## System requirements

* Axway API Manager / Axway API Gateway versions 7.6.2 SPx and 7.7 SPx up and running using a Linux installation (CentOS 6.x, 7.x, 8.x,  Oracle Linux 6.x, 7.x, Red Hat Enterprise Linux 6.x, 7.x, 8.x, SUSE Linux Enterprise Server 11.x, 12.x).
* The Linux machine where API Manager and API Gateway are running must be accessible and have `sudo` rights to run the Agents.
* The agents must be installed on the same machine that API Manager and/or API Gateway is running.

## Connect Axway API Manager to AMPLIFY Central quickstart

1. Generate a key pair.

   * Create a new Service Account user in AMPLIFY Central using the key pair. See [Manage an API proxy using AMPLIFY CLI](/docs/central/cli_getstarted/).
2. Configure an environment in [AMPLIFY Central using the CLI](/docs/central/cli_environments/) or [Add your environment to AMPLIFY Central using the UI](/docs/central/mesh_management/add_env/#add-your-environment-to-amplify-central).
3. [Prepare the Discovery Agent](/docs/central/connect-api-manager/deploy-your-agents/#discovery-agent).

   1. Move key files to a keys directory.
   2. Download the latest binary of the Discovery Agent.
   3. Customize the configuration file *
   4. Start the Discovery Agent.
4. [Prepare the Traceability Agent](/docs/central/connect-api-manager/deploy-your-agents/#traceability-agent).

   1. Move key files to a keys directory.
   2. Download the latest binary of the Traceability Agent.
   3. Customize the configuration file *
   4. Start the Traceability Agent.

\* If you need assistance setting up the configuration files, please contact your Sales Account Manager, or open a support ticket on support.axway.com.
