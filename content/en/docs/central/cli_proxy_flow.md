---
title: Manage an API proxy using AMPLIFY CLI
linkTitle: Manage an API proxy using AMPLIFY CLI
weight: 6
date: 2019-07-30
description: Learn how your DevOps service can use AMPLIFY CLI to manage your API proxies.
---

*Estimated reading time*: 5 minutes

## Before you start

* If you are applying security to your API proxy, you will need a basic understanding of Basic Authentication ([RFC 7617](https://tools.ietf.org/html/rfc7617))
* You will need to [authorize your DevOps service to use the DevOps API](/docs/central/cli_getstarted/)

## Objectives

Learn how to use AMPLIFY CLI to manage your API proxies.

* Create a YAML configuration file representing your API proxy
* Create the API proxy using AMPLIFY CLI
* Promote the API proxy using AMPLIFY CLI
* Test the API proxy using AMPLIFY Central UI or a REST client

## Create the API configuration file

The AMPLIFY Central DevOps APIs require a YAML configuration file describing your API (the service you are proxying through AMPLIFY Central) in terms of the API name, base path, Swagger, client authentication, and so on. For example:

```
version: v1 # Version of the file format
apiVersion: v1 # This version ensures backward compatibility and would not mandate a frequent update from a client side
proxy:
    name: 'Musical Instruments secured' # name of the proxy
    basePath: /api/v1 # base path of the proxy
    swagger: 'https://ec062a054a2977120b7e721801edb38ca24dfbb3.cloudapp-enterprise.appcelerator.com/apidoc/swagger.json'
                                                                                    # optional. Swagger url of the proxy
    policies:
        clientAuth:
            type: api-key # type of client authentication policy: can be pass-through or api-key
            app: 'Sample App' # optional if policy type is pass-through
        backendAuth: # backend authentication is optional, if not specified, then no backend authentication will be enabled
            type: auth-http-basic # type of backend authentication policy: only auth-http-basic is supported now
            username: Joe # required
            password: changeme # it's allowed to be empty
    tags: ['musical', 'instruments'] # optional
    team: # the team which the proxy will be assigned to.
        name: 'Default Team'
```

If you specify `api-key` as the client authentication policy, you must specify the client `app`. If the app does not already exist in AMPLIFY Central, it is created.

You can specify additional applications in the `apps` section of the proxy. The apps are created if necessary. The `app` field under `clientAuth` can be omitted. For example:

```
version: v1 # Version of the file format
apiVersion: v1 # This version ensures backward compatibility and would not mandate a frequent update from a client side
proxy:
    name: 'Musical Instruments secured' # name of the proxy
    basePath: /api/v1 # base path of the proxy
    swagger: 'https://ec062a054a2977120b7e721801edb38ca24dfbb3.cloudapp-enterprise.appcelerator.com/apidoc/swagger.json'
                                                                                    # optional. Swagger url of the proxy
    policies:
        clientAuth:
            type: api-key # type of client authentication policy: can be pass-through or api-key
            app: 'Sample App' # optional
        backendAuth: # backend authentication is optional, if not specified, then no backend authentication will be enabled
            type: auth-http-basic # type of backend authentication policy: only auth-http-basic is supported now
            username: Joe # required
            password: changeme # it's allowed to be empty
    tags: ['musical', 'instruments'] # optional
    apps:
    * name: 'Second Sample App' # this app will be allowed to consume the proxy
    * name: 'Third Sample App' # this app will be allowed to consume the proxy
    team: # the team which the proxy will be assigned to.
        name: 'Default Team'
```

`backendAuth` is an optional field. If it is not specified, no back-end authentication is enabled. If you specify `auth-http-basic` as the back-end authentication policy, the password can be empty.

It is best to keep the YAML configuration file in the same source control repository as the source code of your service, so that you can update the configuration file when you make changes to the code for your service.

## Create an API proxy

The `create` command *creates* an API proxy if none already exists for this API, or *updates* the existing API proxy. It returns the name of the API proxy created.

Enter the following command to create an API proxy:

```
amplify central proxies create /myservices/my_service_config.yaml
```

Specify the full path to the YAML configuration file that describes your API.

This command also supports the following options:

| Option           | Description                                                                                  |
|------------------|----------------------------------------------------------------------------------------------|
| `--force` or `-f`| The default behavior is to create or update the API proxy. Use this option to force create a new API proxy.|

For details of the API, see [Create proxy API](https://d-api.docs.stoplight.io/api-reference/devops-api/create-proxy).

## Promote an API proxy

The `promote` command deploys the latest revision of the API proxy to a target runtime group. It returns the URL of the deployed API proxy and, if you specified API key client authentication, a set of API keys to access the API proxy.

Enter the following command to promote the latest revision of an API proxy to the `Prod Runtime`:

```
amplify central proxies promote /myservices/my_service_config.yaml --target="Prod Runtime"
```

Specify the full path to the YAML configuration file that describes your API and the target runtime group where the API proxy revision is to be deployed.

To promote a specific revision of an API proxy that is already deployed on a runtime group, you can optionally specify a source runtime group. Enter the following command to promote the API proxy revision deployed on `Test Runtime` to the `Prod Runtime`:

```
amplify central proxies promote /myservices/my_service_config.yaml --source="Test Runtime" --target="Prod Runtime"
```

This command supports the following options:

| Option       | Description                  |
|--------------|------------------------------|
| `--source`   | The runtime to promote from. |
| `--target`   | The runtime to promote to.   |

For details of the API, see [Promote proxy API](https://d-api.docs.stoplight.io/api-reference/devops-api/promote-proxy).

## Test the API proxy

The API proxy is now accessible on the URL returned from the `promote` command. You can test the methods and view the results in AMPLIFY Central UI or using a REST client.

To test the API methods in AMPLIFY Central UI, select **API Proxies** in the left navigation bar, click the appropriate API proxy in the list, and select the **Test Methods** tab.

## Review

You have learned how to use the AMPLIFY Central DevOps APIs by way of AMPLIFY CLI to manage your API proxies.
