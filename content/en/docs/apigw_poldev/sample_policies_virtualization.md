{
"title": "Virtualized service sample policy",
"linkTitle": "Virtualized service sample policy",
"date": "2019-10-17",
"description": "The virtualized service sample policy is more advanced and combines the following features:"
}
﻿
<div id="p_sample_policies_virtualization_overview">

Overview
--------

The virtualized service sample policy is more advanced and combines the following features:

-   Content filtering, XML complexity, and message size filters to block unwanted SOAP messages.
-   Content filtering to block unwanted REST requests.
-   Fault handling.
-   Content-based routing.

This topic describes the policies displayed in the **Sample Policies**
> **Web Services**
> **Virtualized StockQuote Service**
policy container in Policy Studio, and explains how to run this sample.

</div>

<div id="p_sample_policies_virtualization_circuit">

Virtualized service policies
----------------------------

The **Virtualized StockQuote Service**
sample policy container includes the following policies:

-   Virtualized service main policy
-   Threat protection policy
-   Content-based routing policies
-   Response transformation policy

The **Main Policy**
is as follows:

![Virtualized Service Main Policy](/Images/docbook/images/samples/virtualization_main_sample_policy.gif)

The **Main Policy**
uses policy shortcuts to perform the following tasks:

1.  The main fault handler relies on some variables to be initialized, which is performed as soon as the policy is entered.
2.  The **Threat Detection**
    policy is applied to the incoming SOAP message and HTTP headers.
3.  The symbol value is extracted from the incoming message, and used to decide whether the request should be sent to one server instance or another.
4.  The name of the instance that served the request is added to the response.
5.  In case of errors, a global fault handler is invoked. This is used to return a custom error message to the user.

The **Threat Protection**
policy is as follows:

![Threat Protection policy](/Images/docbook/images/samples/virtualization_threat_sample_policy.gif)

The **Threat Protection**
policy performs the following tasks:

1.  The incoming request size (including attachments) is checked to be less than 1500 KB.
2.  The complexity of the XML is checked in terms of number of nodes, attributes per node, or number of child nodes per node.
3.  XML and eventually HTTP headers are checked for threatening content such as SQL injection or XML processing instructions.
4.  If any of these filters return an error, the corresponding error handler is called. The error handler is implemented as a policy that sets the value of the error code and message for this error, and then re-throws the exception so that the global fault handler catches it.

<div>

### Content-based routing policies

The **Route Based on Symbol Value**
policy extracts the contents of the symbol XML node and checks whether the first letter’s value is between `A-L`
or `K-Z`. Depending on the result, it routes the request to the first or second instance of the `StockQuote`
server. These servers are simulated by the following relative path URIs defined in the API Gateway:

-   `/stockquote/instance1`
-   `/stockquote/instance2`

The **Route Based on Symbol Value**
policy is as follows:

![Route Based on Symbol Value](/Images/docbook/images/samples/virtualization_route_symbol_sample_policy.gif)

The **Route Based on Symbol Node**
policy performs the following tasks:

1.  The value of the symbol node is extracted from the request using XPath. The result is placed in a message attribute named `message.symbol.value`.
2.  A **Switch on attribute value**
    filter is used to check the value of the message attribute (using a regular expression), and a different policy is called to send the request to `instance1`
    or `instance2`.

The **Route to Instance1**
policy is as follows:

![Route to Instance1 Policy](/Images/docbook/images/samples/virtualization_route_instance_sample_policy.gif)

The **Route to Instance1**
policy (called from the Switch filter) performs the following tasks:

1.  Connects to the `instance1`
    URI.
2.  If successful, the instance name (`instance1`) is placed in a message attribute (`stockquote.instance.name`). This is used later on to insert the instance name into the response.

The **Route to Instance2**
policy performs the same tasks but using the `instance2`
URI instead.

</div>

<div>

### Response transformation policy

When the response is obtained from the back-end server, the **Add Instance Name to Response**
policy changes it to insert the instance name into a new XML node (`instanceName`). The **Add Instance Name to Response**
policy is as follows:

![Add Instance Name to Response Policy](/Images/docbook/images/samples/virtualization_route_response_sample_policy.gif)

This policy adds the instance name (the value of the `stockquote.message.name`
message attribute) to the response, using an **Add XML node**
filter, as part of the `SOAPbody`. XPath is used to define where the new node must be added.

</div>

</div>

<div id="p_sample_policies_virtualization_steps">

Run the virtualized service sample
----------------------------------

You can call the sample service using the send request (`sr`) command or the API Tester GUI:

<div>

### sr command

Enter the following command:

    sr -f INSTALL_DIR/samples/SamplePolicies/VirtualizedService/Request.xml http://HOSTNAME:8081/main/stockquote

For more details, see the topic on [*Stress test with send request (sr)* on page 1](common_sr_command.htm).

</div>

<div>

### API Tester

Perform the following steps:

1.  Specify the following URL in the **Request Settings**:
2.  http://HOSTNAME:8081/main/stockquote

3.  Select `POST`
    as the **Verb**.
4.  Click the **Close**
    button.
5.  Select **File** > **Load**, and browse to the following file as input for the request:
6.  INSTALL_DIR/samples/SamplePolicies/VirtualizedService/Request.xml

7.  Click the Send Request button.

For more details, see the topic on [*Send a request with* on page 1](sample_policies_soapbox.htm).

</div>

</div>
