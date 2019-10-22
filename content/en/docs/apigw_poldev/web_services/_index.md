{
"title": "Register and secure web services",
"linkTitle": "Register and secure web services",
"weight": 7,
"date": "2019-10-17",
"description": "Policy Studio provides the following features that enable you to register and secure web services:"
}

Policy Studio provides the following features that enable you to register and secure web services:

* You can register a web service in Policy Studio by importing a WSDL file into the web service repository. For more information on registering web services, see [Manage web services](/docs/apigw_poldev/web_services/general_ws_repository/).
* The **Import WSDL** wizard enables you to automatically generate the policies to protect web services. For more information on using the wizard, see [*Configure policies from WSDL files](/docs/apigw_poldev/web_services/general_policy_wsdl/).
* You can also manually configure policies to protect web services (for example, if a WSDL file is not available). For more information, see [Configure policies manually](general_manual_policy.htm).
* You can also invoke registered web services from policies, for example, when you expose a SOAP web service as a REST API, the REST API you define calls a policy to implement the API, which in turn invokes the SOAP web service. For more information, see [Expose a web service as a REST API](mapper_soap_to_rest.htm).

## WSDL and XML schema cache

API Gateway maintains a global cache of WSDL and XML schema documents. For more information on adding, updating, and deleting WSDL and XML schema documents, and how API Gateway validates them during import, see [Manage WSDL and XML schema documents](/docs/apigw_poldev/web_services/general_schema_cache/).

## JSON schema cache

API Gateway maintains a global cache of JSON schemas. For more information, see [Manage JSON schemas](resources_json_schemas.htm).

## WSDLs from a UDDI registry

WSDL documents can be imported from and published to a Universal Description, Discovery, and Integration (UDDI) registry. For more information, see the following topics:

* [Connect to a UDDI registry](general_uddi_connection.htm)
* [Retrieve WSDL files from a UDDI registry](general_uddi.htm)
* [Publish WSDL files to a UDDI registry](general_uddi_publish.htm)

## Data maps

You can create data maps to map XML and JSON messages to other XML and JSON message formats using a graphical editor. For more information, see [Manage data maps](resources_data_maps.htm).

## Policy Studio filters

The following Policy Studio filters are of interest when working with web services:

* The **Web Service** filter is the main filter generated when a WSDL file is imported into the web service repository. It contains all the routing information and links all the policies that are to be run on the request and response messages into a logical flow.
* The **Schema Validation** filter is used to validate XML messages against XML schemas stored in the global cache.
* The **JSON Schema Validation** filter is used to validate JSON messages against JSON schemas stored in the global cache.
* You can use the **Execute Data Map** filter to execute a mapping you defined in a data map as part of a policy.
