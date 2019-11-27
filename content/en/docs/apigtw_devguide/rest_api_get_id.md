{
"title": "Get the ID of a group or API Gateway instance",
"linkTitle": "Get the ID of a group or API Gateway instance",
"date": "2019-11-27",
"description": "Every group and API Gateway instance in a domain is assigned a unique ID, and this ID is required to route a REST request to an API Gateway instance. This section describes how to find the ID of a group and API Gateway instance in a number of ways:"
}
﻿

Every group and API Gateway instance in a domain is assigned a unique ID, and this ID is required to route a REST request to an API Gateway instance. This section describes how to find the ID of a group and API Gateway instance in a number of ways:

-   Use the **Print topology** option in the `managedomain` script. See [*Print the topology using* on page 1](#Get).
-   Call the Topology REST API using curl. See [*Use curl to call the Topology REST API* on page 1](#Get2).
-   Use Jython code to query the Topology API. See [*Use Jython to query the Topology API* on page 1](#Get3).

Print the topology using managedomain
-------------------------------------

To run the `managedomain` script, enter the following commands:

``` {space="preserve"}
> cd INSTALL_DIR/apigateway/posix/bin/
> managedomain --menu
```

Enter the domain user name and password when prompted. The topology management options are displayed as follows:

``` {space="preserve"}
Topology Management:
  13) Print topology
  14) Check topologies are in synch
  15) Check the Admin Node Manager topology against another topology
  16) Synch all topologies
  17) Reset the local topology
```

Chose option 13, `Print topology`. This results in the following output:

``` {space="preserve"}
Version: 2
Last updated: Wed Jan 30 10:17:20 GMT 2013

Hosts:
|
 ---127.0.0.1 [host-1]
Admin Node Manager:
|
 ---Node Manager on 127.0.0.1 [nodemanager-1] (https://127.0.0.1:8090)
Groups:
|
 ---QuickStart Group [group-2]
   |
    ---QuickStart Server [instance-1] (https://127.0.0.1:8085)
```

All IDs are shown in square brackets beside the node in the topology. In this example, the following are the names and associated IDs:

| Type        | Display name      | ID         |
|-------------|-------------------|------------|
| Group       | QuickStart Group  | group-2    |
| API Gateway | QuickStart Server | instance-1 |

Use curl to call the Topology REST API
--------------------------------------

The Admin Node Manager is running the Topology API, and this can be called to return a list of groups and API Gateways running in the domain.

To call the API, execute the following curl command (replace `UNAME:PWD` with the domain user name and password):

``` {space="preserve"}
curl --insecure --user UNAME:PWD https://127.0.0.1:8090/api/topology
```

The result is a JSON response with a format similar to the following.

``` {space="preserve"}
{
    "result": {
        "id": "50fd7b96-6e8f-401e-b38c-eb77891e3aeb",
        "version": 2,
        "timestamp": 1428938393531,
        "productVersion": "7.4.1",
        "hosts": [
            {
                "id": "host-1",
                "name": "ITEM-A21575.wks.axway.int"
            }
        ],
        "groups": [
            {
                "id": "group-1",
                "name": "Node Manager Group",
                "tags": {},
                "services": [
                    {
                        "id": "nodemanager-1",
                        "name": "Node Manager on ITEM-A21575.wks.axway.int",
                        "type": "nodemanager",
                        "scheme": "https",
                        "hostID": "host-1",
                        "managementPort": 8090,
                        "tags": {
                            "internal_admin_nm": "true"
                        },
                        "enabled": true
                    }
                ]
            },
            {
                "id": "group-2",
                "name": "QuickStart Group",
                "tags": {},
                "services": [
                    {
                        "id": "instance-1",
                        "name": "QuickStart Server",
                        "type": "gateway",
                        "scheme": "https",
                        "hostID": "host-1",
                        "managementPort": 8085,
                        "tags": {},
                        "enabled": true
                    }
                ]
            }
        ],
        "uniqueIdCounters": {
            "NodeManager": 2,
            "Group": 3,
            "Host": 2,
            "Gateway": 2
        },
        "fips": false,
        "services": [
            {
                "id": "nodemanager-1",
                "name": "Node Manager on ITEM-A21575.wks.axway.int",
                "type": "nodemanager",
                "scheme": "https",
                "hostID": "host-1",
                "managementPort": 8090,
                "tags": {
                    "internal_admin_nm": "true"
                },
                "enabled": true
            },
            {
                "id": "instance-1",
                "name": "QuickStart Server",
                "type": "gateway",
                "scheme": "https",
                "hostID": "host-1",
                "managementPort": 8085,
                "tags": {},
                "enabled": true
            }
        ]
    }
}
```

All IDs are found in strings named `id` and are highlighted above.

{{< alert title="Note" color="primary" >}}The Admin Node Manager is itself within a group with the ID `group-1`. {{< /alert >}}

In this example, the following are the names and associated IDs:

| Type        | Display name      | ID         |
|-------------|-------------------|------------|
| Group       | QuickStart Group  | group-2    |
| API Gateway | QuickStart Server | instance-1 |

Use Jython to query the Topology API
------------------------------------

You can call the Topology API from Jython scripts. The sample Jython script `INSTALL_DIR/apigateway/samples/scripts/topology/outputIDs.py` uses the Topology API to output the name and ID of the group and API Gateway instance.

``` {space="preserve"}
> cd INSTALL_DIR/apigateway/samples/scripts
> ./run.sh topology/outputIDs.py
API Server 'QuickStart Server' has id 'instance-1' belongs to Group 'QuickStart
Group' with id 'group-2', it is running on …
```
