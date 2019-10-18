{
"title": "Conversion sample policy",
"linkTitle": "Conversion sample policy",
"date": "2019-10-17",
"description": "The conversion sample policy takes a REST-style request and converts it into a SOAP call. This topic describes the **REST to SOAP**\\npolicy, and explains how to run this sample."
}
﻿
<div id="p_sample_policies_conversion_overview">

Overview
--------

The conversion sample policy takes a REST-style request and converts it into a SOAP call. This topic describes the **REST to SOAP**
policy, and explains how to run this sample.

</div>

<div id="p_sample_policies_conversion_circuit">

REST to SOAP policy
-------------------

The **REST to SOAP**
policy is as follows:

![Conversion policy](/Images/docbook/images/samples/conversion_sample_policy.gif)

The **REST to SOAP**
policy performs the following tasks:

1.  Extracts the information from the request (a message attribute is created for each query string and/or HTTP header).
2.  Creates a SOAP message using the **Set Message**
    filter.
3.  Sends the request to the `StockQuote`
    demo service.
4.  Extracts the value of the stock from the response using XPath.
5.  Creates a plain text response.
6.  Sets the HTTP status code to 200.

</div>

<div id="p_sample_policies_conversion_steps">

Run the conversion sample
-------------------------

You can call the sample service using the send request (`sr`) command or the API Tester GUI:

<div>

### sr command

Enter the following command:

    sr http://HOSTNAME:8081/rest2soap?symbol=ABC

For more details, see [*Stress test with send request (sr)* on page 1](common_sr_command.htm).

</div>

<div>

### API Tester

Perform the following steps:

1.  Specify the following URL in the **Request Settings**:

<!-- -->

    http://HOSTNAME:8081/rest2soap?symbol=ABC

1.  Select `GET`
    as the verb.
2.  Click the **Run**
    button.

For more details, see the topic on [*Send a request with* on page 1](sample_policies_soapbox.htm).

</div>

</div>
