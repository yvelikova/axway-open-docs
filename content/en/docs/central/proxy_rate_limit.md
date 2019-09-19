---
title: Rate Limit an API
linkTitle: Rate Limit an API
weight: 4
date: 2019-09-19
description: Learn how to apply a rate limit configuration to your API.
---

*Estimated reading time: x minutes*

## [TODO] Before you start

- Make yourself a nice cup of coffee. You deserve it. # TODO - remove
- You will need an administrator account for AMPLIFY Central
- Learn how to import your API as an API proxy in AMPLIFY Central (see [Register an API](/docs/central/quickstart/#register-an-api))
- Learn how to use the AMPLIFY CLI to manage an API proxy (see [Manage an API proxy using AMPLIFY CLI](/docs/central/quickstart/#register-an-api))

## Objectives

Learn how to apply a rate limit configuration to your API:

- Understand what API rate limiting is and how it can be useful
- Configure and test rate limiting on your API using the AMPLIFY Central UI
- Configure and test rate limiting on your using the AMPLIFY CLI

## [TODO] What is API rate limiting?

Rate limiting is a way to protect the use of resources underlying your API, allowing you to squeeze your customers out of a few more pennies. While Rate limiting won't make you rich it might help you buy that cruise that your partner always dreamed of going on.

API providers typically measure processing limits in Transactions Per Second (TPS). Rate limiting is a way to enforce a maximum TPS for your API consumers.

### AMPLIFY Central API rate limiting

AMPLIFY Central currently provides a fixed window rate limiting implementation with a one second window. Simply explained, each second on the minute your API gets a buget of Transactions. Each valid transaction uses one unit of the budget. At the begining of each second the budget is reset to it's configured value. If the budget is exhausted before the second is over, all transactions will be refused until the budget is reset. A valid transaction is a transaction that has been successfully processed by AMPLIFY Central.

## [TODO] Use the AMPLIFY Central UI to configure rate limiting

blah blah blah, use your mouse a lot, blah blah

## Use the AMPLIFY CLI to configure rate limiting on your API

Make sure you're logged in AMPLIFY CLI using the service account.

### Create the configuration file and promote your API

The AMPLIFY Central DevOps CLI allows you to define the `rateLimit` configuration under the `policies` section of your API configuration file. For example:

```
version: v1 # Version of the file format
apiVersion: v1 # This version ensures backward compatibility and would not mandate a frequent update from a client side
proxy:
    name: 'Musical Instruments Rate Limited' # name of the proxy
    basePath: /examples/ratelimit/api/v1 # base path of the proxy
    swagger: 'https://b84f866b716628b1badbd5fd15111d718b012418.cloudapp-enterprise.appcelerator.com/apidoc/swagger.json' # optional. Swagger url of the proxy
    policies:
        clientAuth:
            type: pass-through
        rateLimit:
            perProxy: 5 # the desired TPS limit for your API
    tags: ['musical', 'instruments', 'ratelimit']
    team:
        name: 'Default Team'
```

The `perProxy` field specifies the desired TPS limit for your API.

Create the API proxy:

```
amplify central proxies create /myservices/my_service_config.yaml
```

Promote the proxy to the test runtime group:

```
amplify central proxies promote /myservices/my_service_config.yaml --target="Test Runtime"
```

To visualize the API proxy in AMPLIFY Central UI, select **API Proxies** in the left navigation bar, click the appropriate API proxy in the list. Verify the rate limit configuration in the policies tab.

### [TODO] Use an api testing tool to test the rate limit

The API proxy is now accessible on the URL returned from the `promote` command. You can test the methods and view the results in AMPLIFY Central UI or using a REST client.

### Disable the rate limit configuration

Delete the `rateLimit` section from your API configuration file while keeping the same proxy name, as in the example:

```
version: v1 # Version of the file format
apiVersion: v1 # This version ensures backward compatibility and would not mandate a frequent update from a client side
proxy:
    name: 'Musical Instruments Rate Limited' # name of the proxy
    basePath: /examples/ratelimit/api/v1 # base path of the proxy
    swagger: 'https://b84f866b716628b1badbd5fd15111d718b012418.cloudapp-enterprise.appcelerator.com/apidoc/swagger.json' # optional. Swagger url of the proxy
    policies:
        clientAuth:
            type: pass-through
    tags: ['musical', 'instruments']
    team:
        name: 'Default Team'
```

Create a new revision of the API proxy:

```
amplify central proxies create /myservices/my_service_config.yaml
```

Promote your new revision and verify that the API proxy is not rate limited anymore.

## Review

You have learned how rate limiting can help you provide a better API and how configure a rate limit on your API using both the AMPLIFY Central UI and the AMPLIFY CLI.
