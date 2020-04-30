---
title: Deploy your agents
linkTitle: Deploy your agents
draft: false
weight: 30
description: Learn how to deploy your Discovery Agent and Traceability Agent so
  that you can manage  your Axway API Gateway environment within AMPLIFY
  Central.
---
{{< alert title="Note" color="primary" >}}The Axway API Gateway connectivity to AMPLIFY Central is currently available in an alpha review mode; current functionality and configuration may change before release.   Therefore, this connectivity is available for trial use only and is not supported for production API management or connectivity.{{< /alert >}}

## Before you start

* Read [AMPLIFY Central and Axway API Manager connected overview](/docs/central/connect-api-manager/)
* Prepare AMPLIFY Central
* You will need a basic knowledge of Axway API Gateway

## Objectives

Learn how to create your Discovery Agent and Traceability Agent configuration files, then install and run your agents.

## Discovery Agent

The Discovery Agent is used to discover new deployments and stage updates to existing deployments. Once they are discovered, the related APIs are published to AMPLIFY Central, in one of the following publication modes, so that they become available for any consumer. See [centralMode](/docs/central/connect-api-manager/discovery-agent-flags/).

* Catalog item publication (disconnected mode): Customers  expose their APIs globally for their consumers but keep the API management at the Gateway level.
* Environment / API Service publication (connected mode): Customers manage their APIs from the AMPLIFY platform. WILL NOT BE FULLY IMPLEMENTED UNTIL Q3-2020.

As soon as an API is published, the identifier of the asset in AMPLIFY Central is kept in a custom field at the api level. The name of the custom field is defined in [APIMANAGER_PROXYAPICIDFIELD](/docs/central/connect-api-manager/discovery-agent-variables/).

The Discovery Agent only discovers APIs that have the tag(s) defined in the agent configuration file. See [Discovery Agent variables](/docs/central/connect-api-manager/discovery-agent-variables/).

The Agent can run in the following modes:

* With a configuration file:

    * Default: located in the same directory as the agent binary.
    * Optional: use a dedicated folder where the configuration file is located (use the --pathConfig flag).

    Configuration file name should be the same as the agent binary.

    Properties inside the configuration file can reference environment variables. This enables you to set up only one configuration file that addresses different behaviors (depending on the environment variables). See [Discovery Agent variables](/docs/central/connect-api-manager/discovery-agent-variables/).
* With command line arguments. See [Discovery Agent flags](/docs/central/connect-api-manager/discovery-agent-flags/).

### Create your configuration

To create an  an `env_vars` file, see [Discovery Agent variables](/docs/central/connect-api-manager/discovery-agent-variables/). Download the zip file:

```
curl -L "https://axway.bintray.com/generic-repo/v7-agents/v7_discovery_agent/latest/discovery_agent-latest.zip" -o discovery_agent-latest.zip
```

The Discovery Agent config yaml and Discovery Agent executable are included.

### Install and run Discovery Agent

1. Move the `private_key.pem` and `public_key` files that were originally created when you set up your Service Account to a keys directory. Make sure the directory is located on the machine being used for deployment. Note that the `public_key` comes from Steps 3 and 4 of [Create a Service Account](/docs/central/connect-api-manager/prepare-amplify-central/#create-a-service-account).
2. Download the zip file from [https://axway.bintray.com/generic-repo/v7-agents/v7_discovery_agent/latest/discovery_agent-latest.zip]( https://axway.bintray.com/generic-repo/v7-agents/v7_discovery_agent/latest/discovery_agent-latest.zip). The zip contains the Discovery Agent config yaml and the Discovery Agent executable.
3. Unzip the file and install the binary on a machine that can access the APIM Manager environment.  

## Traceability Agent

The Traceability Agent is used to filter the Axway API Gateway logs that are related to discovered APIs and prepare the transaction events that are sent to AMPLIFY platform. Each time an already discovered API is called by a consumer, an event (summary + detail) is sent to AMPLIFY Central and is visible in API Observer.

The Agent can run in the following modes:

* With a configuration file

    * Default: located in the same directory as the agent binary.
    * Optional: use a dedicated folder where the configuration file is located (use the --path.config flag). See [Traceability Agent flags](/docs/central/connect-api-manager/traceability-agent-flags/).

    Configuration file name should be the same as the agent binary.

    Properties inside the configuration file can reference environment variables. This enables you to set up only one configuration file that addresses different behaviors (depending on the environment variables). See [Traceability Agent variables](/docs/central/connect-api-manager/traceability-agent-variables/).
* With a YAML configuration file

### Create your env_vars file

To create an `env_vars file`, see [Traceability Agent variables](/docs/central/connect-api-manager/traceability-agent-variables/).

### Create your YAML config file

Most Traceability Agent configurations are overridden by the environment variable, except for the APIGateway event file path(s). Note that the default `traceability_agent.inputs.paths` is set to read multiple files using wildcard.

#### YAML config file template

```
YAML config file template
      deployment: ${CENTRAL_DEPLOYMENT:preprod}
      environment: ${CENTRAL_ENVIRONMENT:""}
      auth:
        url: ${CENTRAL_AUTH_URL:https://login.axway.com/auth}
        realm: ${CENTRAL_AUTH_REALM:Broker}
        clientId: ${CENTRAL_AUTH_CLIENTID:""}
        privateKey: ${CENTRAL_AUTH_PRIVATEKEY:/keys/private_key.pem}
        publicKey: ${CENTRAL_AUTH_PUBLICKEY:/keys/public_key}
        keyPassword: ${CENTRAL_AUTH_KEYPASSWORD:""}
        timeout: 10s
      ssl:
        minVersion: ${CENTRAL_SSL_MINVERSION:""}
        maxVersion: ${CENTRAL_SSL_MAXVERSION:""}
        nextProtos: ${CENTRAL_SSL_NEXTPROTOS:""}
        cipherSuites: ${CENTRAL_SSL_CIPHERSUITES:""}
        insecureSkipVerify: ${CENTRAL_SSL_INSECURESKIPVERIFY:""}
    apigateway:
      getHeaders: ${APIGATEWAY_GETHEADERS:true}

      host: ${APIGATEWAY_HOST:localhost}
      port: ${APIGATEWAY_PORT:8090}
      pollInterval: ${APIGATEWAY_POLLINTERVAL:1m}
      auth:
        username: ${APIGATEWAY_AUTH_USERNAME:""}
        password: ${APIGATEWAY_AUTH_PASSWORD:""}
      ssl:
        minVersion: ${APIGATEWAY_SSL_MINVERSION:""}
        maxVersion: ${APIGATEWAY_SSL_MAXVERSION:""}
        nextProtos: ${APIGATEWAY_SSL_NEXTPROTOS:""}
        cipherSuites: ${APIGATEWAY_SSL_CIPHERSUITES:""}
        insecureSkipVerify: ${APIGATEWAY_SSL_INSECURESKIPVERIFY:""}
    apimanager:
      host: ${APIMANAGER_HOST:localhost}
      port: ${APIMANAGER_PORT:8075}
      pollInterval: ${APIMANAGER_POLLINTERVAL:1m}
      apiVersion: ${APIMANAGER_APIVERSION:1.3}
      auth:
        username: ${APIMANAGER_AUTH_USERNAME:""}
        password: ${APIMANAGER_AUTH_PASSWORD:""}
      ssl:
        minVersion: ${APIMANAGER_SSL_MINVERSION:""}
        maxVersion: ${APIMANAGER_SSL_MAXVERSION:""}
        nextProtos: ${APIMANAGER_SSL_NEXTPROTOS:""}
        cipherSuites: ${APIMANAGER_SSL_CIPHERSUITES:""}
        insecureSkipVerify: ${APIMANAGER_SSL_INSECURESKIPVERIFY:""}
logging:
  metrics:
    enabled: false
  # Send all logging output to stderr
  to_stderr: true
  # Set log level
  level: ${LOG_LEVEL:info}
```

#### Multiple file paths

```
traceability_agent:
  inputs:
    - type: log
      paths:
        - /home/axway/axway/apigateway/events/group-2_instance-1.log
        - /home/axway/axway/apigateway/events/group-2_instance-2.log
```

#### File path with wildcard

```
traceability_agent:
  inputs:
    - type: log
      paths:
        - /home/axway/axway/apigateway/events/group-2_instance-*.log
```

### Install and run Traceability Agent

1. Move the `private_key.pem` and `public_key` files that were originally created when you set up your Service Account to a keys directory. Make sure the directory is located on the machine being used for deployment.
2. Download the zip file:

    ```
    curl -L "https://axway.bintray.com/generic-repo/v7-agents/v7_traceability_agent/latest/traceability_agent-latest.zip" -o traceability_agent-latest.zip
    ```

    The zip contains the Traceability Agent config yaml and the Traceability Agent executable.
3. Unzip the file and install the binary on a machine that can access the APIM Manager environment.
