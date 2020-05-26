---
title: Security concerns
description: |-
  This section summarizes the security aspects tied to the agents:
  how agents communicate with the Axway platform and what kind of data are sent?
---
## Connectivity with AMPLIFY Platform

![Agent networking](/Images/central/connect-api-manager/agents-proxy.png "Agent networking")

All communications are initiated by the agents. Connections from the agents to the AMPLIFY platform are secured using TLS/SSL. By default TLS 1.2 is used. See [SSL/TLS advanced](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/connect-api-manager/ssl-tls-advanced/index.html) for more information if you want to change the default settings.

In case a proxy / firewall is in place, the following urls must be accessible from where the agents are installed (typically DMZ):

* <https://platform.axway.com> (Discovery / Traceability Agents)
* <https://login.axway.com> (Discovery / Traceability Agents)
* ingestion-lumberjack.datasearch.axway.com:453 (Traceability Agent)

In order for the agent to communicate correctly with the Axway platform, the agent configuration provides variables to connect through the proxy:

Discovery Agent: **central.proxyurl**

sample: `central.proxyurl: http[s]://username:password@hostname:port`

Traceability Agent: **output.traceability.proxyurl**

sample: `output.traceability.proxyurl: sock5://username:password@hostname:port`

Once the agent gets through the proxy, the communication with the AMPLIFY platform is JWT token based: Axway platform knows the public key and the agents know the private key. A service account is created on the AMPLIFY platform with the public key. Agents sign their request with their private key, send the request using the service account identifier and the Axway platform decodes it with the corresponding public key. The private key is never exchanged with the platform and it remains in the DMZ.  See [Prepare AMPLIFY Central / Create a Service Account](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/connect-api-manager/prepare-amplify-central/index.html) for insructions on creating the public/private key pair and assigning the public key to the service accounts.

## Connectivity with API Manager/API Gateway

Since the agent are installed on the same machine as the API management system, `localhost` url can be used in the agent configuration to connect to API Manager/Gateway. The ports are the same as the ones used to access the API Management system UI (`8075` for API Manager and `8090` for API Gateway by default). Refer to `apimanager.host` / `apimanager.port` and `apigateway.host` / `apigateway.port` variables.

Each agent requires a specific user to access the API Management system. It is recommended to use a dedicated user in order to avoid conflicts with existing users and to allow an easier follow up.

### Discovery agent user

In order to be able to use API Manager APIs across all organizations, the Discovery Agent user must have an "API Manager Administrator" or "Organization administrator" role. With the "Organization administrator" role, the user can only discover APIs that belong to the same organization that he belongs to. If APIs from other organizations need to be discovered, then the user must be granted access to these organizations as well.  

The user is set using the following set of variables: `apimanager.auth.username` and `apimanager.auth.password`

### Traceability Agent users

Two users are needed for Traceability Agent: one with the "API Gateway Operator" role to read the data from the API Gateway, and the second user to read API Manager APIs and know which API are published. This user is the same as the one needed for Discovery Agent.  

The users are set using variables: `apimanager.auth.username` / `apimanager.auth.password` and `apigateway.auth.username` / `apigateway.auth.password`

## Data exchanged

### Discovery Agent

Use variable `apimanager.filter` to select which API should be sent to the AMPLIFY platform. Only the matching APIs are transferred to the AMPLIFY platform. See [Filtering APIs to be discovered](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/connect-api-manager/filtering-apis-to-be-discovered/index.html). The Discovery Agent sends the following information to the Axway platform:

* API definition using Swagger or WSDL depending on the API type (REST vs SOAP)
* API documentation

### Traceability Agent

Logs written on the file system (<INSTALL_DIR>/apigateway/events/group-X_instance-Y.log) by the Gateway(s) are read by the agent. In order to submit details of the transaction, the Traceability agent reads the Gateway system to get:

* transaction HTTP status
* transction URIs (frontend / backend API)
* transaction headers (request/response from frontend and backend API)  

Once the information is extracted it is sent to the Axway platform using the TLS encryption.
