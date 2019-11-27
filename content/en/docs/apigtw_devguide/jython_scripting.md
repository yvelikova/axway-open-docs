{
"title": "Automate tasks with Jython scripts",
"linkTitle": "Automate tasks with Jython scripts",
"date": "2019-11-27",
"description": "API Gateway contains several sample scripts that let you automate various common administration tasks. The scripts are based on the Java scripting interpreter, Jython ([http://www.jython.org](http://www.jython.org/)). Scripts can be extended to suit your needs by following the Jython language syntax. All Jython scripts can be found in the following location:"
}
﻿

API Gateway contains several sample scripts that let you automate various common administration tasks. The scripts are based on the Java scripting interpreter, Jython ([http://www.jython.org](http://www.jython.org/)). Scripts can be extended to suit your needs by following the Jython language syntax. All Jython scripts can be found in the following location:

``` {space="preserve"}
INSTALL_DIR/apigateway/samples/scripts
```

To run a sample script, you can call the `run` shell in this directory and point it to the script to be run. For example, to run the `changeTrace.py` sample script:

``` {space="preserve"}
> cd INSTALL_DIR/apigateway/samples/scripts
> ./run.sh config/changeTrace.py
```

The following table summarizes the Jython scripts that are available in the API Gateway installation.

| Script category     | Description                                                                                                                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| analyze             | -   Prints a list of all references in the API Gateway. For each reference it shows what store it originates from and to.                                                                                     
  -   Checks if the API Gateway is locked down.                                                                                                                                                                  
  -   Gets a list of unresolved references between entities in the API Gateway.                                                                                                                                  |
| apikeys             | -   Shows how to send an API key and associated secret as query parameters.                                                                                                                                   
  -   Shows how to send an API key only as query parameters.                                                                                                                                                     
  -   Shows how to fetch a URL with HTTP basic authentication.                                                                                                                                                   
  -   Shows how to send a signed query string.                                                                                                                                                                   
  -   Shows how to send an authenticated REST request.                                                                                                                                                           |
| cassandra           | -   Converts all Cassandra-based data stores to file-based data stores and redeploys.                                                                                                                         |
| certs               | -   Adds a new certificate to the certificate store from different sources.                                                                                                                                   |
| config              | -   Removes the sample service listeners and policies from the API Gateway.                                                                                                                                   
  -   Connects to a particular process and toggles tracing for the management port.                                                                                                                              
  -   Connects to the API Gateway and sets an address to bind to on a given port of a given interface.                                                                                                           
  -   Updates the `maxInputLen`, `maxOuputLen`, and `maxRequestMemory` configuration in Node Managers and API Gateways.                                                                                          |
| environmentalize    | -   Marks fields for environmentalization and creates associated environment setting entries.                                                                                                                 
  -   Gets the fields that have been marked for environmentalizing and outputs the associated value in environment settings.                                                                                     
  -   Removes fields marked as environmentalized.                                                                                                                                                                
  -   Creates a deployment archive from a policy package and an environment package.                                                                                                                             |
| io                  | -   Imports and exports entities to and from an API Gateway configuration.                                                                                                                                    |
| json                | -   Generates a JSON schema for a fully qualified class name.                                                                                                                                                 |
| migrate             | -   Downloads the current `.fed`, `.pol` and `.env` archives via Node Manager from an API Gateway.                                                                                                            
  -   Creates a deployment package from policy and environment packages. They can be obtained from a running API Gateway, from a source code repository (for example, Git or SVN), or via USB or FTP and so on.  
  -   Demonstrates a promotion of configuration from the development environment to the staging environment.                                                                                                     |
| monitor             | -   Prints the filter details of each policy executed in a transaction.                                                                                                                                       
  -   Prints the success or failure status of each filter in a transaction.                                                                                                                                      |
| oauth               | -   Provides OAuth 2.0 support.                                                                                                                                                                               |
| passport            | -   Creates an Axway PassPort CSD based on the API service configuration. An Axway Component Security Descriptor (CSD) file is used when registering with Axway PassPort.                                     |
| publish             | -   Adds an entity type and any defined instances to an associated entity store.                                                                                                                              |
| unpublish           | -   Removes an entity type and any defined instances from an associated entity store.                                                                                                                         |
| topology            | -   Creates API Gateway instances in a group.                                                                                                                                                                 
  -   Gets the domain topology from the Admin Node Manager.                                                                                                                                                      
  -   Gets the domain topology and outputs the IDs of the API Gateway instances.                                                                                                                                 |
| securityconstraints | -   Checks a configuration for FIPS, SuiteB, or SuiteBTS compliance.                                                                                                                                          |
| users               | -   Connects to a particular process and adds a new user to the user store.                                                                                                                                   |
| ws                  | -   Registers a WSDL in an API Gateway.                                                                                                                                                                       
  -   Lists the web services in an API Gateway.                                                                                                                                                                  
  -   Removes a registered service from the API Gateway.                                                                                                                                                         |


