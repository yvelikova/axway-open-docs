---
title: Connect AWS Gateway
linkTitle: Connect AWS Gateway
draft: true
weight: 72
description: Understand why you would want a connected / managed environment for
  AWS API Gateway within AMPLIFY Central. Learn how you can govern and monitor
  the creation / deployment / publishing and subscriptions of the AWS API
  Gateway hosted APIs in one central location.
---
{{< alert title="Note" color="primary" >}}The AWS API Gateway connectivity to AMPLIFY Central is currently available in an alpha review mode; current functionality and configuration may change before release.   Therefore, this connectivity is available for trial use only and is not supported for production API management or connectivity.{{< /alert >}}

## Why do you want to connect AWS API Gateway and AMPLIFY Central?

Connecting AWS API Gateway to AMPLIFY Central will provide you with a global centralized view of your APIs and their related traffic.

Each AWS Gateway can be represented by an AMPLIFY Central environment allowing you to better filter APIs and their traffic. Supplied with the environment, two agents (Discovery and Traceability) interact with AWS API Gateway and AMPLIFY Central to:

* Detect changes to AWS API Gateway stages and deployments using the Discovery Agent. The Discovery Agent pushes the service configuration as an API service for the environment, which can then be published as a catalog item to be used by consumers to subscribe to the service.
* Filter the AWS Cloudwatch logs that are related to discovered APIs and prepare the transaction events that are sent to AMPLIFY platform.

### Discovery Agent

The Discovery Agent is used to discover  new deployments and stage updates to existing deployments for publishing related API in AMPLIFY Central (either as  a catalog item or as an API service). As part of the deployment package, use the provided cloud formation scripts  to set up the following agent-dependent AWS Services.

* AWS Config - Administers, audits and monitors resource configurations. Records and validates configuration changes.
* AWS CloudWatch - Monitors resources and AWS applications in real time. Receives and routes supported AWS Service events.
* AWS SQS - Decouples and scales microservices, distributed systems and serverless applications.

### Traceability Agent

The Traceability Agent is used to filter the AWS CloudWatch logs and prepare the transaction events that are sent to AMPLIFY Central and visible in the API observer. Viewing your traffic helps you to identify the bootleneck and errors. The traffic can be filtered by environment in case multiples are involved in your topography. As part of the deployment package, you can use cloud formation scripts to set up the following agent-dependent AWS Services.

* AWS CloudWatch - Monitors resources and AWS applications in real time. Receives and routes supported AWS Service events.
* AWS Lamda - Runs code in response to events and automatically manages the computing resources required by that code.
* AWS SQS - Decouples and scales microservices, distributed systems and serverless applications.

The types of logging you can do with API Gateway to CloudWatch.

* Execution logging - API Gateway manages the CloudWatch logs.
* Access logging - Developer managed custom logging.

For additional logging information, see <https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html>.

## Minimum requirements

An AMPLIFY Central Service Account. See <https://docs.axway.com/bundle/axway-open-docs/page/docs/central/cli_proxy_flow/index.html>.

* API Key credentials on AWS. Allow for CLI access
* Amazon CloudWatch Service
* Amazon Simple Queue Service (AWS SQS)
* AWS Lambda
* CloudFormation template. Download from [https://git.ecd.axway.int/apigov/aws_apigw_agent_config](<* https://git.ecd.axway.int/apigov/aws_apigw_agent_config>)

## Connect AWS API Gateway to AMPLIFY Central quickstart

1. Set up AMPLIFY Central:

   1. Create an environment object in AMPLIFY Central using either the UI, API or CLI.
   2. Set up a Service Account.
2. Set up AWS CloudFormation using the two templates at [http://swf-artifactory.lab.phx.axway.int/artifactory/phx-generic-beano/](<1. http://swf-artifactory.lab.phx.axway.int/artifactory/phx-generic-beano/>):

   1. apigw_iam_setup
   2. apigw_cloudformation
3. Create a Discovery Agent environment file:

   1. Move key files to a keys directory.
   2. Log into the Artifactory Repository and pull the latest image of the Discovery Agent.
   3. Start the Discovery Agent.
4. Create a Traceability Agent environment file:

   1. Move key files to a keys directory.
   2. Log into the Artifactory Repository and pull the latest image of the Traceability Agent.
   3. Start the Traceability Agent.