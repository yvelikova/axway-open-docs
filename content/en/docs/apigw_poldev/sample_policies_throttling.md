{
"title": "Throttling sample policy",
"linkTitle": "Throttling sample policy",
"date": "2019-10-17",
"description": "The throttling sample policy is used to limit the number of calls for a service. This topic describes the **Throttle**\\npolicy, and explains how to run this sample."
}
﻿
<div id="p_sample_policies_throttling_overview">

Overview
--------

The throttling sample policy is used to limit the number of calls for a service. This topic describes the **Throttle**
policy, and explains how to run this sample.

Throttling refers to restricting incoming connections and the number of messages to be processed. It can be applied to XML, SOAP, REST, or any payload, request, or protocol. Traffic can be regulated for a single API Gateway or for a cluster of API Gateways. You can apply traffic restrictions rules for a service, an operation, or even time of day. For example, these restrictions can be applied depending on the service name, user identity, IP address, content from the payload, protocol headers, and so on.

</div>

<div id="p_sample_policies_throttling_circuit">

Throttling policy
-----------------

The **Throttle**
policy is as follows:

![Throttling policy](/Images/docbook/images/samples/throttle_sample_policy.gif)

The **Throttle**
policy performs the following tasks:

1.  The first filter checks whether the limit has been reached. The limit is set to 3 requests per 15 sec. The caller’s IP address is used to track the consumer ID. The counter is kept in a local cache.
2.  If the limit has been reached, an error message is created, and the response status code is set to 500.
3.  If the authorized limit has not been reached, the back-end service is invoked, and the HTTP status code is set to 200.

</div>

<div id="p_sample_policies_throttling_steps">

Run the throttling sample
-------------------------

You can call the sample service using the send request (`sr`) command or the API Tester GUI:

<div>

### sr command

Enter the following command:

    sr -f INSTALL_DIR/samples/SamplePolicies/Throttling/Request.xml http://HOSTNAME:8081/throttle

For more details, see the topic on [*Stress test with send request (sr)* on page 1](common_sr_command.htm).

</div>

<div>

### API Tester

Perform the following steps:

1.  Specify the following URL in the **Request Settings**:
2.  http://HOSTNAME:8081/throttle

3.  Select `POST`
    as the **Verb**.
4.  Click the **Close**
    button.
5.  Select **File** > **Load**, and browse to the following file as input for the request:
6.  INSTALL_DIR/samples/SamplePolicies/Throttling/Request.xml

7.  Click the Send Request button.

For more details, see the topic on [*Send a request with* on page 1](sample_policies_soapbox.htm).

</div>

</div>
