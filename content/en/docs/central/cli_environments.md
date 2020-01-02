---
title: Manage an environment using AMPLIFY CLI
linkTitle: Manage an environment using AMPLIFY CLI
weight: 7
date: 2019-12-20
description: Learn how your DevOps service can use AMPLIFY CLI to manage your environments.
---

*Estimated reading time*: 5 minutes

{{< alert title="Public beta" color="warning" >}}This feature is currently in **public beta** and not yet available for production use.{{< /alert >}}

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

Create an environment by providing the environment name:

```
amplify central create env <name> -o json
```

Create an environment by providing the path to a valid .yaml, .yml, or .json file that defines a specific resource:

```
amplify central create environment <name> -f <filepath>
```

Try it out using the following sample .json and .yaml files:

### environments.json

```json
[
  {
    "apiVersion": "v1alpha1",
    "group": "management",
    "title": "Json env title one",
    "name": "env1",
    "kind": "Environment",
    "attributes": {
        "createdBy": "json",
        "randomNum": "1"
    },
    "tags": ["cli", "axway"],
    "spec": {
      "description": "spec description one"
      }
    },
    {
    "apiVersion": "v1alpha1",
    "group": "management",
    "title": "Json env title two",
    "name": "env2",
    "kind": "Environment",
    "attributes": {
        "createdBy": "json",
        "randomNum": "2"
    },
    "tags": ["cli", "axway"],
    "spec": {
        "description": "spec description two"
    }
    }
]
```

### environments.yaml

```yaml
---
apiVersion: v1alpha1
title: Title one
name: env1
kind: Environment
attributes:
  createdBy: yaml
  randomNum: 1
tags:
  - axway
  - cli
spec:
  description: description one

---
apiVersion: v1alpha1
title: Title two
name: env2
kind: Environment
attributes:
  createdBy: yaml
  randomNum: 2
tags:
  - axway
  - cli
spec:
  description: description two
```

Options:

```
-o, --output = yaml | json
-f, --file = (filename.yml, filename.yaml, filename.json)
```

### Other examples of valid resource types

Use and reference the following examples of valid resource types to practice creating multiple resources.

**API Services**\

```json
[
  {
    "apiVersion": "v1alpha1",
    "group": "management",
    "kind": "APIService",
    "name": "apisvc1",
    "title": "apisvc1 title",
    "metadata": {
        "audit": {
            "createTimestamp": "2019-12-04T23:50:43.100+0000",
            "createUserId": "DOSA_00000000000000000000000000000001",
            "modifyTimestamp": "2019-12-04T23:50:43.100+0000",
            "modifyUserId": "DOSA_00000000000000000000000000000001"
        },
        "resourceVersion": "846",
        "scope": {
            "id": "e4e0839f6efb5aa4016efc23f41d0338",
            "kind": "Environment",
            "name": "env1"
        },
        "id": "e4e0839f6efb5aa4016efc23f607033d"
    },
    "attributes": {
        "createdBy": "yaml"
    },
    "tags": ["apisvc", "cli", "axway"],
    "spec": {
        "description": "api service 1 description"
    }
  },
  {
    "apiVersion": "v1alpha1",
    "group": "management",
    "kind": "APIService",
    "name": "apisvc2",
    "title": "apisvc2 title",
    "metadata": {
        "audit": {
            "createTimestamp": "2019-12-04T23:50:43.100+0000",
            "createUserId": "DOSA_00000000000000000000000000000001",
            "modifyTimestamp": "2019-12-04T23:50:43.100+0000",
            "modifyUserId": "DOSA_00000000000000000000000000000001"
        },
        "resourceVersion": "845",
        "scope": {
            "id": "e4e0839f6efb5aa4016efc23f3040333",
            "kind": "Environment",
            "name": "env2"
        },
        "id": "e4e0839d6efb5a5c016efc23f51603e8"
    },
    "attributes": {
        "createdBy": "yaml"
    },
    "tags": ["apisvc", "cli", "axway"],
    "spec": {
        "description": "api service 2 description"
    }
  }
]
```

**API Service Instances**\

```json
[
  {
    "apiVersion": "v1alpha1",
    "group": "management",
    "kind": "APIServiceInstance",
    "name": "apisvcinst1",
    "title": "apisvcinst1 title",
    "metadata": {
        "references": [
            {
                "id": "e4e0839d6efb5a5c016efc23f81703f3",
                "kind": "APIServiceRevision",
                "name": "apisvcrev1",
                "type": "HARD"
            }
        ],
        "audit": {
            "createTimestamp": "2019-12-12T22:04:06.280+0000",
            "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
            "modifyTimestamp": "2019-12-12T22:04:06.280+0000",
            "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
        },
        "resourceVersion": "849",
        "scope": {
            "id": "e4e0839f6efb5aa4016efc23f41d0338",
            "kind": "Environment",
            "name": "env1"
        },
        "id": "e4e0839d6efb5a5c016efc23f90803f9"
    },
    "attributes": {
        "createdBy": "yaml"
    },
    "tags": ["cli", "apisvcinst", "axway"],
    "spec": {
        "endpoint": [
            {
                "host": "test-endpoint.com",
                "port": 8080,
                "protocol": "https"
            }
        ],
        "apiServiceRevision": "apisvcrev1"
    }
  },
  {
    "apiVersion": "v1alpha1",
    "group": "management",
    "kind": "APIServiceInstance",
    "name": "apisvcinst2",
    "title": "apisvcinst2 title",
    "metadata": {
        "references": [
            {
                "id": "e4e0839d6efb5a5c016efc23f70d03ed",
                "kind": "APIServiceRevision",
                "name": "apisvcrev2",
                "type": "HARD"
            }
        ],
        "audit": {
            "createTimestamp": "2019-12-12T22:04:06.581+0000",
            "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
            "modifyTimestamp": "2019-12-12T22:04:06.581+0000",
            "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
        },
        "resourceVersion": "850",
        "scope": {
            "id": "e4e0839f6efb5aa4016efc23f3040333",
            "kind": "Environment",
            "name": "env2"
        },
        "id": "e4e0839d6efb5a5c016efc23fa3503ff"
    },
    "attributes": {
        "createdBy": "yaml"
    },
    "tags": ["cli", "apisvcinst", "axway"],
    "spec": {
        "endpoint": [
            {
                "host": "test-endpoint2.com",
                "port": 8080,
                "protocol": "https"
            }
        ],
        "apiServiceRevision": "apisvcrev2"
    }
  }
]
```

**API Service Revisions**\

```json
[
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "APIServiceRevision",
        "name": "apisvcrev1",
        "title": "apisvcrev1 title",
        "metadata": {
            "references": [
                {
                    "id": "e4e0839f6efb5aa4016efc23f607033d",
                    "kind": "APIService",
                    "name": "apisvc1",
                    "type": "HARD"
                }
            ],
            "audit": {
                "createTimestamp": "2019-12-12T22:04:06.040+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:06.040+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "848",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f41d0338",
                "kind": "Environment",
                "name": "env1"
            },
            "id": "e4e0839d6efb5a5c016efc23f81703f3"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["apisvcrev", "cli", "axway"],
        "spec": {
            "apiService": "apisvc1",
            "definition": {
                "type": "swagger",
                "value": "{'swagger':'2.0','info':{'title':'MusicalInstrumentsAPI','description':'This is a sample Musical Instruments API.','version':'2.0.2'},'host':'ec062a054a2977120b7e721801edb38ca24dfbb3.cloudapp-enterprise.appcelerator.com','basePath':'/music/v2','schemes':['http'],'consumes':['application/json','application/x-www-form-urlencoded','multipart/form-data'],'produces':['application/json','application/xml','text/yaml','text/csv','text/plain'],'paths':{'/instruments/{id}':{'get':{'responses':{'200':{'description':'The find succeeded, and the results are available.','schema':{'$ref':'#/definitions/instruments'}},'400':{'description':'Bad request.'},'401':{'description':'This request requires user authentication, as configured by the server.'},'404':{'description':'No results were found.'},'500':{'description':'Something went wrong during the request; check out the logs on your server.'}},'description':'Find instrument by ID','operationId':'FindInstrumentByID','consumes':['application/json'],'parameters':[{'name':'id','in':'path','description':'The instrument ID','required':true,'type':'string'}],'produces':['application/json'],'tags':['instruments'],'x-flow':'instruments-findByID'}},'/instruments':{'get':{'responses':{'200':{'description':'The find all succeeded, and the results are available.','schema':{'type':'array','items':{'$ref':'#/definitions/instruments'}}},'401':{'description':'This request requires user authentication, as configured by the server.'},'404':{'description':'No results were found.'},'500':{'description':'Something went wrong during the request; check out the logs on your server.'}},'description':'Retrieve all instruments','operationId':'FindInstruments','consumes':['application/json'],'produces':['application/json'],'tags':['instruments'],'x-flow':'instruments-findAll'}},'/instruments/query':{'get':{'responses':{'200':{'description':'The query succeeded, and the results are available.','schema':{'type':'array','items':{'$ref':'#/definitions/instruments'}}},'400':{'description':'Bad request.'},'401':{'description':'This request requires user authentication, as configured by the server.'},'404':{'description':'No results were found.'},'500':{'description':'Something went wrong during the request; check out the logs on your server.'}},'description':'Query instrument(s)','operationId':'QueryInstrument','consumes':['application/json'],'parameters':[{'in':'query','name':'limit','description':'The number of records to fetch. The value must be greater than 0, and no greater than 1000.','required':false,'type':'number','default':10},{'in':'query','name':'skip','description':'The number of records to skip. The value must not be less than 0.','required':false,'type':'number','default':0},{'in':'query','name':'where','description':'Constrains values for fields. The value should be encoded JSON.','required':false,'type':'string','format':'json'},{'in':'query','name':'order','description':'A dictionary of one or more fields specifying sorting of results. In general, you can sort based on any predefined field that you can query using the where operator, as well as on custom fields. The value should be encoded JSON.','required':false,'type':'string','format':'json'},{'in':'query','name':'sel','description':'Selects which fields to return from the query. Others are excluded. The value should be encoded JSON.','required':false,'type':'string','format':'json'},{'in':'query','name':'unsel','description':'Selects which fields to not return from the query. Others are included. The value should be encoded JSON.','required':false,'type':'string','format':'json'},{'in':'query','name':'page','description':'Request page number starting from 1.','required':false,'type':'number','default':1},{'in':'query','name':'per_page','description':'Number of results per page.','required':false,'type':'number','default':10}],'produces':['application/json'],'tags':['instruments'],'x-flow':'instruments-query'}}},'definitions':{'ResponseModel':{'type':'object','required':['success','request-id'],'additionalProperties':true,'properties':{'code':{'type':'integer','format':'int32'},'success':{'type':'boolean','default':false},'request-id':{'type':'string'},'message':{'type':'string'},'url':{'type':'string'}}},'ErrorModel':{'type':'object','required':['message','code','success','request-id'],'properties':{'code':{'type':'integer','format':'int32'},'success':{'type':'boolean','default':false},'request-id':{'type':'string'},'message':{'type':'string'},'url':{'type':'string'}}},'instruments':{'type':'object','properties':{'type':{'description':'The type of instrument.','type':'string'},'price':{'description':'The price of the instrument.','type':'integer'},'currency':{'description':'The price currency.','type':'string'}}}}}"
            }
        }
    },
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "APIServiceRevision",
        "name": "apisvcrev2",
        "title": "apisvcrev2 title",
        "metadata": {
            "references": [
                {
                    "id": "e4e0839d6efb5a5c016efc23f51603e8",
                    "kind": "APIService",
                    "name": "apisvc2",
                    "type": "HARD"
                }
            ],
            "audit": {
                "createTimestamp": "2019-12-12T22:04:05.774+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:05.774+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "847",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f3040333",
                "kind": "Environment",
                "name": "env2"
            },
            "id": "e4e0839d6efb5a5c016efc23f70d03ed"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["apisvcrev", "cli", "axway"],
        "spec": {
            "apiService": "apisvc2",
            "definition": {
                "type": "swagger",
                "value": "{'swagger':'2.0','info':{'title':'MusicalInstrumentsAPI','description':'This is a sample Musical Instruments API.','version':'2.0.2'},'host':'ec062a054a2977120b7e721801edb38ca24dfbb3.cloudapp-enterprise.appcelerator.com','basePath':'/music/v2','schemes':['http'],'consumes':['application/json','application/x-www-form-urlencoded','multipart/form-data'],'produces':['application/json','application/xml','text/yaml','text/csv','text/plain'],'paths':{'/instruments/{id}':{'get':{'responses':{'200':{'description':'The find succeeded, and the results are available.','schema':{'$ref':'#/definitions/instruments'}},'400':{'description':'Bad request.'},'401':{'description':'This request requires user authentication, as configured by the server.'},'404':{'description':'No results were found.'},'500':{'description':'Something went wrong during the request; check out the logs on your server.'}},'description':'Find instrument by ID','operationId':'FindInstrumentByID','consumes':['application/json'],'parameters':[{'name':'id','in':'path','description':'The instrument ID','required':true,'type':'string'}],'produces':['application/json'],'tags':['instruments'],'x-flow':'instruments-findByID'}},'/instruments':{'get':{'responses':{'200':{'description':'The find all succeeded, and the results are available.','schema':{'type':'array','items':{'$ref':'#/definitions/instruments'}}},'401':{'description':'This request requires user authentication, as configured by the server.'},'404':{'description':'No results were found.'},'500':{'description':'Something went wrong during the request; check out the logs on your server.'}},'description':'Retrieve all instruments','operationId':'FindInstruments','consumes':['application/json'],'produces':['application/json'],'tags':['instruments'],'x-flow':'instruments-findAll'}},'/instruments/query':{'get':{'responses':{'200':{'description':'The query succeeded, and the results are available.','schema':{'type':'array','items':{'$ref':'#/definitions/instruments'}}},'400':{'description':'Bad request.'},'401':{'description':'This request requires user authentication, as configured by the server.'},'404':{'description':'No results were found.'},'500':{'description':'Something went wrong during the request; check out the logs on your server.'}},'description':'Query instrument(s)','operationId':'QueryInstrument','consumes':['application/json'],'parameters':[{'in':'query','name':'limit','description':'The number of records to fetch. The value must be greater than 0, and no greater than 1000.','required':false,'type':'number','default':10},{'in':'query','name':'skip','description':'The number of records to skip. The value must not be less than 0.','required':false,'type':'number','default':0},{'in':'query','name':'where','description':'Constrains values for fields. The value should be encoded JSON.','required':false,'type':'string','format':'json'},{'in':'query','name':'order','description':'A dictionary of one or more fields specifying sorting of results. In general, you can sort based on any predefined field that you can query using the where operator, as well as on custom fields. The value should be encoded JSON.','required':false,'type':'string','format':'json'},{'in':'query','name':'sel','description':'Selects which fields to return from the query. Others are excluded. The value should be encoded JSON.','required':false,'type':'string','format':'json'},{'in':'query','name':'unsel','description':'Selects which fields to not return from the query. Others are included. The value should be encoded JSON.','required':false,'type':'string','format':'json'},{'in':'query','name':'page','description':'Request page number starting from 1.','required':false,'type':'number','default':1},{'in':'query','name':'per_page','description':'Number of results per page.','required':false,'type':'number','default':10}],'produces':['application/json'],'tags':['instruments'],'x-flow':'instruments-query'}}},'definitions':{'ResponseModel':{'type':'object','required':['success','request-id'],'additionalProperties':true,'properties':{'code':{'type':'integer','format':'int32'},'success':{'type':'boolean','default':false},'request-id':{'type':'string'},'message':{'type':'string'},'url':{'type':'string'}}},'ErrorModel':{'type':'object','required':['message','code','success','request-id'],'properties':{'code':{'type':'integer','format':'int32'},'success':{'type':'boolean','default':false},'request-id':{'type':'string'},'message':{'type':'string'},'url':{'type':'string'}}},'instruments':{'type':'object','properties':{'type':{'description':'The type of instrument.','type':'string'},'price':{'description':'The price of the instrument.','type':'integer'},'currency':{'description':'The price currency.','type':'string'}}}}}"
            }
        }
    }
]
```

**Consumer Instances**\

```json
[
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "ConsumerInstance",
        "name": "consumerinst1",
        "title": "consumerinst1 title",
        "metadata": {
            "references": [
                {
                    "id": "e4e0839d6efb5a5c016efc23f90803f9",
                    "kind": "APIServiceInstance",
                    "name": "apisvcinst1",
                    "type": "HARD"
                },
                {
                    "id": "e4e0839f6efb5aa4016efc240001034d",
                    "kind": "ConsumerSubscriptionDefinition",
                    "name": "consumersubdef1",
                    "type": "SOFT"
                }
            ],
            "audit": {
                "createTimestamp": "2019-12-12T22:04:08.576+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:08.576+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "858",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f41d0338",
                "kind": "Environment",
                "name": "env1"
            },
            "id": "e4e0839f6efb5aa4016efc2401ff0358"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["cli", "axway", "consumerinst"],
        "spec": {
            "icon": {
                "data": "string",
                "contentType": "image/jpeg"
            },
            "name": "Consumer Instance Name",
            "tags": ["instance", "cli"],
            "state": "UNPUBLISHED",
            "status": "statusValue",
            "version": "1.0",
            "owningTeam": "team1",
            "visibility": "RESTRICTED",
            "description": "Catalog description",
            "subscription": {
                "enabled": false,
                "autoSubscribe": true,
                "subscriptionDefinition": "consumersubdef1"
            },
            "documentation": "documentation string",
            "apiServiceInstance": "apisvcinst1"
        }
    },
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "ConsumerInstance",
        "name": "consumerinst2",
        "title": "consumerinst1 title",
        "metadata": {
            "references": [
                {
                    "id": "e4e0839d6efb5a5c016efc23fa3503ff",
                    "kind": "APIServiceInstance",
                    "name": "apisvcinst2",
                    "type": "HARD"
                },
                {
                    "id": "e4e0839d6efb5a5c016efc245a4f0423",
                    "kind": "ConsumerSubscriptionDefinition",
                    "name": "consumersubdef2",
                    "type": "SOFT"
                }
            ],
            "audit": {
                "createTimestamp": "2019-12-12T22:04:31.657+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:31.657+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "873",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f3040333",
                "kind": "Environment",
                "name": "env2"
            },
            "id": "e4e0839f6efb5aa4016efc245c28038d"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["cli", "axway", "consumerinst"],
        "spec": {
            "icon": {
                "data": "string",
                "contentType": "image/jpeg"
            },
            "name": "Consumer Instance Name",
            "tags": ["instance", "cli"],
            "state": "UNPUBLISHED",
            "status": "statusValue",
            "version": "1.0",
            "owningTeam": "team1",
            "visibility": "RESTRICTED",
            "description": "Catalog description",
            "subscription": {
                "enabled": false,
                "autoSubscribe": true,
                "subscriptionDefinition": "consumersubdef2"
            },
            "documentation": "documentation string",
            "apiServiceInstance": "apisvcinst2"
        }
    }
]
```

**Consumer Subscription Definitions**\

```json
[
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "ConsumerSubscriptionDefinition",
        "name": "consumersubdef1",
        "title": "consumersubdef1 title",
        "metadata": {
            "references": [
                {
                    "id": "e4e0839f6efb5aa4016efc23fe000347",
                    "kind": "Webhook",
                    "name": "webhook1",
                    "type": "SOFT"
                }
            ],
            "audit": {
                "createTimestamp": "2019-12-12T22:04:08.065+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:08.065+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "856",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f41d0338",
                "kind": "Environment",
                "name": "env1"
            },
            "id": "e4e0839f6efb5aa4016efc240001034d"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["cli", "apisvcinst", "axway"],
        "spec": {
            "schema": {
                "properties": [
                    {
                        "key": "key1name",
                        "value": {
                            "subKey": "subKeyValue"
                        }
                    }
                ]
            },
            "webhooks": ["webhook1"]
        }
    },
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "ConsumerSubscriptionDefinition",
        "name": "consumersubdef2",
        "title": "consumersubdef2 title",
        "metadata": {
            "references": [
                {
                    "id": "e4e0839f6efb5aa4016efc2458790382",
                    "kind": "Webhook",
                    "name": "webhook2",
                    "type": "SOFT"
                }
            ],
            "audit": {
                "createTimestamp": "2019-12-12T22:04:31.183+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:31.183+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "871",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f3040333",
                "kind": "Environment",
                "name": "env2"
            },
            "id": "e4e0839d6efb5a5c016efc245a4f0423"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["cli", "apisvcinst", "axway"],
        "spec": {
            "schema": {
                "properties": [
                    {
                        "key": "key1name",
                        "value": {
                            "subKey": "subKeyValue"
                        }
                    }
                ]
            },
            "webhooks": ["webhook2"]
        }
    }
]
```

**Secrets**\

```json
[
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "Secret",
        "name": "secret1",
        "title": "secret1 title",
        "metadata": {
            "audit": {
                "createTimestamp": "2019-12-12T22:04:07.083+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:07.083+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "852",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f41d0338",
                "kind": "Environment",
                "name": "env1"
            },
            "id": "e4e0839f6efb5aa4016efc23fc2a0342"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["secret", "cli", "axway"],
        "spec": {
            "data": {
                "key1": "val1",
                "key2": "val2"
            }
        }
    },
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "Secret",
        "name": "secret2",
        "title": "secret2 title",
        "metadata": {
            "audit": {
                "createTimestamp": "2019-12-12T22:04:06.837+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:06.837+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "851",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f3040333",
                "kind": "Environment",
                "name": "env2"
            },
            "id": "e4e0839d6efb5a5c016efc23fb350405"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["secret", "cli", "axway"],
        "spec": {
            "data": {
                "key1": "val1",
                "key2": "val2"
            }
        }
    }
]
```

**Webhooks**\

```json
[
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "Webhook",
        "name": "webhook1",
        "title": "webhook1 title",
        "metadata": {
            "references": [
                {
                    "id": "e4e0839f6efb5aa4016efc23fc2a0342",
                    "kind": "Secret",
                    "name": "secret1",
                    "type": "SOFT"
                }
            ],
            "audit": {
                "createTimestamp": "2019-12-12T22:04:07.553+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:07.553+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "854",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f41d0338",
                "kind": "Environment",
                "name": "env1"
            },
            "id": "e4e0839f6efb5aa4016efc23fe000347"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["webhook", "cli", "axway"],
        "spec": {
            "url": "https://webhookurl.com/path",
            "auth": {
                "secret": {
                    "key": "key1",
                    "name": "secret1"
                }
            },
            "enabled": true,
            "headers": {
                "header1": "header1val",
                "header2": "header2val"
            }
        }
    },
    {
        "apiVersion": "v1alpha1",
        "group": "management",
        "kind": "Webhook",
        "name": "webhook2",
        "title": "webhook2 title",
        "metadata": {
            "references": [
                {
                    "id": "e4e0839d6efb5a5c016efc23fb350405",
                    "kind": "Secret",
                    "name": "secret2",
                    "type": "SOFT"
                }
            ],
            "audit": {
                "createTimestamp": "2019-12-12T22:04:30.714+0000",
                "createUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7",
                "modifyTimestamp": "2019-12-12T22:04:30.714+0000",
                "modifyUserId": "DOSA_c6222da2490c46a1a34a1aeeee4bb7e7"
            },
            "resourceVersion": "869",
            "scope": {
                "id": "e4e0839f6efb5aa4016efc23f3040333",
                "kind": "Environment",
                "name": "env2"
            },
            "id": "e4e0839f6efb5aa4016efc2458790382"
        },
        "attributes": {
            "createdBy": "yaml"
        },
        "tags": ["webhook", "cli", "axway"],
        "spec": {
            "url": "https://webhookurl.com/path",
            "auth": {
                "secret": {
                    "key": "key1",
                    "name": "secret2"
                }
            },
            "enabled": true,
            "headers": {
                "header1": "header1val",
                "header2": "header2val"
            }
        }
    }
]
```

## List environments

Examples:

```
amplify central get environments
amplify central get envs -o yaml
```

## Get the details of an environment

Examples:

```
amplify central get environment <name>
amplify central get env <name> -o yaml
```

## Update an environment

Examples:

```
amplify central edit environment <name>
amplify central edit env <name> -o yaml
```

## Delete an environment

{{% alert title="Warning" color="warning"%}}This action cannot be reversed.{{% /alert %}}

Examples:

```
amplify central delete env <name>
```

## Review

You have learned how to use the AMPLIFY Central DevOps APIs by way of AMPLIFY CLI to manage your environments.
