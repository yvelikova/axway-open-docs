{
"title": "Create a message listener",
"linkTitle": "Create a message listener",
"date": "2019-11-27",
"description": "This section describes the `MessageListener` interface, and provides an example of a message listener class that implements the interface. The sample code can be found in the `DEVELOPER_SAMPLES/FilterInterceptorLoadableModule` directory."
}
﻿

This section describes the `MessageListener` interface, and provides an example of a message listener class that implements the interface. The sample code can be found in the `DEVELOPER_SAMPLES/FilterInterceptorLoadableModule` directory.

MessageListener interface
-------------------------

The `MessageListener` interface provides a set of callbacks that are invoked during the processing of a message as it passes through the processing engine of the API Gateway. The `MessageListener` interface provides callbacks which are invoked at certain points in the processing, for example just before a policy (circuit) is run, or before and after a message is processed by a filter. A message listener can be used to track the changes in a message as it flows through API Gateway, or to monitor the status of policies or filters as messages pass through them. Commonly it is used to gather statistics on message processing, which can then be used to give an indication of the status of API Gateway.

The `MessageListener` interface defines several methods that are invoked in conjunction with the methods or lifecycle events of the message. These include:

-   Policy processing
    -   `preCircuitProcessing` – Called when the message originator has completed initializing the message, and API Gateway is about to start processing in the policy-space.
    -   `postCircuitProcessing` – Called when all processing in the policy-space is completed.
-   Policy invocation
    -   `preCircuitInvocation` – Called before the first filter in a given policy is invoked.
    -   `postCircuitInvocation` – Called after a chain of filters in the policy has been invoked.
-   Filter invocation
    -   `preFilterInvocation` – This method is called immediately before a filter's `MessageProcessor` is invoked.
    -   `postFilterInvocation` – This method is called when a filter's `MessageProcessor` has finished execution.
-   `abortedCircuitInvocation` – Called if the policy exits because of a fault with one of the filters within it.
-   `preFaultHandlerInvocation` – Called before attempting to handle a previous `CircuitAbortException` with specific fault-handling.
-   `onMessageCompletion` – Called when a message has fully exited the system.

