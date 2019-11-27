{
"title": "Java interfaces for extending API Gateway",
"linkTitle": "Java interfaces for extending API Gateway",
"date": "2019-11-27",
"description": "This section describes the following Java interfaces that can be used to extend API Gateway:"
}
﻿

This section describes the following Java interfaces that can be used to extend API Gateway:

-   LoadableModule – Classes that implement this interface are used to instantiate long-lived objects in the API Gateway process. These objects can be loaded at startup or when a new configuration is deployed, and can be unloaded at shutdown.
-   MessageCreationListener – Classes that implement this interface are used to track message creation.
-   MessageListener – Classes that implement this interface are used to to track the changes in a message as it flows through API Gateway.

This section also provides examples of how to implement these interfaces.
