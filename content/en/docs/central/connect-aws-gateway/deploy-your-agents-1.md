---
title: Deploy your agents
linkTitle: Deploy your agents
draft: true
weight: 30
description: >-
  Learn how to deploy your Discovery Agent and Traceability Agent using Docker
  containers so that you can manage  your AWS API Gateway environment within
  AMPLIFY Central.

  Once agents are correctly deployed, they can collect the data from the AWS API Gateway and send it securely to AMPLIFY Central.
---
{{< alert title="Note" color="primary" >}}The AWS API Gateway connectivity to AMPLIFY Central is currently available in an alpha review mode; current functionality and configuration may change before release.   Therefore, this connectivity is available for trial use only and is not supported for production API management or connectivity.{{< /alert >}}

## Before you start

* Read AMPLIFY Central AWS API Gateway connected overview
* Prepare AMPLIFY Central
* Prepare AWS API Gateway
* Docker must be installed and you will need a basic understanding of Docker commands

## Objectives

Learn how to create your Discovery Agent and Traceability Agent configuration files, then install and run your agents.

## Discovery Agent

The Discovery Agent is used to discover new deployments and stage updates to existing deployments. Once they are discovered, the related APIs are published to AMPLIFY Central so that they become available for any consumer.

As soon as an API is published, a new `APIC_ID` tag is added to the stage so that the Discovery Agent will not published it again.

The Discovery Agent only discovers published APIs where the stage has a  tag(s) defined in the agent configuration file. See AWS_DISCOVERYTAGS.

## Create your Discovery Agent configuration

<!-- HTML table removed here, it will need to be added back manually as a Markdown table -->

### Create your Discovery Agent environment file

Create an env_vars file using the above variables. For additional information, see <https://git.ecd.axway.int/apigov/aws_apigw_discovery_agent>.

For example:  

```
LOG_LEVEL=INFO
AWS_POLLINTERVAL=20

AWS_REGION=eu-west-2
AWS_QUEUENAME=aws-apigw-config-eu-west-2
AWS_AUTH_ACCESSKEY=XXXXXXXXXXXXXXXXXXX
AWS_AUTH_SECRETKEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AWS_LOGGROUPARN=arn:aws:logs:eu-west-2:934549265897:log-group:APIGW_Access_Logs

CENTRAL_AUTH_URL=https://login-preprod.axway.com/auth
CENTRAL_AUTH_REALM=Broker
CENTRAL_AUTH_CLIENTID=DOSA_XXXXXXXXXXXXXXXXXXX
CENTRAL_AUTH_PRIVATEKEY=/keys/private_key.pem
CENTRAL_AUTH_PUBLICKEY=/keys/public_key

AWS_FILTER=tag.PublishToAmplify==true
CENTRAL_URL=https://alpha.beano.apicentral-k8s.axwaytest.net
CENTRAL_TEAMID=e4e082f96d8cfXXXXXXXXXXXXXXXXXXX
CENTRAL_TENANTID=XXXXXXXXXXXXXXXXXXX

CENTRAL_MODE=connected
```

### Install and run Discovery Agent

1. Copy the `private_key.pem` and `public_key` files that were originally created when you set up your Service Account to a keys directory. Make sure the directory is located on the machine being used for deployment. Note that the `public_key` comes from Steps 3 and 4 of Prepare AWS Gateway to deploy the Discovery Agent AWS config setup.
2. Pull the latest image of the Discovery Agent:

    ```
    docker pull axway-docker-public-registry.bintray.io/agent/aws-apigw-discovery-agent:latest
    ```
3. Start the Discovery Agent pointing to the `env_vars` file and the keys directory:

    ```
    docker run --env-file ./env_vars -v <pwd>/keys:/keys  axway-docker-public-registry.bintray.io/agent/aws-apigw-discovery-agent:latest
    ```

{{< alert title="Note" color="primary" >}}`pwd` relates to the local directory where the docker command is run. For Windows, the absolute path is preferred.{{< /alert >}}

## Traceability Agent

The Traceability Agent is used to filter the AWS CloudWatch logs that are related to discovered APIs and prepare the transaction events that are sent to AMPLIFY platform. Each time an API is called by a consumer, an event (summary + detail) is sent to AMPLIFY Central and is visible in API Observer.

### Create your Traceability Agent configuration

<!-- HTML table removed here, it will need to be added back manually as a Markdown table -->

### Create your Traceability Agent environment file

Create an `env_vars` file using the above variables.  

For example:

```
LOG_LEVEL=debug
# AWS connectivity
AWS_REGION=us-east-2
AWS_QUEUENAME=aws-apigw-traceability-cb-us-east-2
AWS_AUTH_ACCESSKEY=XXXXXXXXXXXXXXXXXXXX
AWS_AUTH_SECRETKEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

#AMPLIFY Central connectivity
CENTRAL_TENANTID=XXXXXXXXXXXXXXX
CENTRAL_DEPLOYMENT=beano
CENTRAL_ENVIRONMENTID=XXXXXXXXXXXXXXXXXXXXXX
CENTRAL_AUTH_URL=https://login-preprod.axway.com/auth
CENTRAL_AUTH_REALM=Broker
CENTRAL_AUTH_CLIENTID=DOSA_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CENTRAL_AUTH_PRIVATEKEY=/keys/private_key.pem
CENTRAL_AUTH_PUBLICKEY=/keys/public_key

#Condor url
LOGSTASH_URL=ingestion-lumberjack.beta.trcblt.com:453
```

### Install and run Traceability Agent

1. Copy the `private_key.pem` and `public_key` files that were originally created when you set up your Service Account to a keys directory. Make sure the directory is located on the machine being used for deployment.
2. Pull the latest image of the Traceability Agent:

    ```
    docker pull axway-docker-public-registry.bintray.io/agent/aws-apigw-traceability-agent:latest
    ```
3. Start the Traceability Agent pointing to the `env_vars` file and the `keys` directory:

    ```
    docker run --env-file ./env_vars -v <pwd>/keys:/keys  axway-docker-public-registry.bintray.io/agent/aws-apigw-traceability-agent:latest
    ```

{{< alert title="Note" color="primary" >}}`pwd` relates to the local directory where the docker command is run. For Windows, the absolute path is preferred.{{< /alert >}}