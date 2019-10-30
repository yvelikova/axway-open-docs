{
"title": "SOAP fault handling",
"linkTitle": "SOAP fault handling",
"date": "2019-10-17",
"description": "In cases where a typical SOAP transaction fails, a *SOAP fault*\\ncan be used to convey error information to the SOAP client. The following message shows the format of a SOAP fault:"
}
﻿
<div id="p_fault_soap_overview">

Overview
--------

In cases where a typical SOAP transaction fails, a *SOAP fault*
can be used to convey error information to the SOAP client. The following message shows the format of a SOAP fault:

``` {space="preserve"}
<?xml version="1.0" encoding="UTF-8"?>
<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope">
   <env:Body>
      <env:Fault>
         <env:Code>
            <env:Value>Receiver</env:Value>
            <env:Subcode>
                <env:Value>policy failed</env:Value>
            </env:Subcode>
         </env:Code>
         <env:Detail xmlns:axwayfault="axway.com/soapfaults" axwayfault:type="exception" type="exception"/>
      </env:Fault>
   </env:Body>
</env:Envelope>
```

By default, the API Gateway returns a very basic SOAP fault to the client when a message filter fails. You can add the **SOAP Fault**
filter to a policy to return more complicated error information to the client.

For security reasons, it is good practice to return as little information as possible to the client. However, for diagnostic reasons, it is useful to return as much information to the client as possible. Using the **SOAP Fault**
filter, administrators have the flexibility to configure just how much information to return to clients, depending on their individual requirements.

</div>

<div id="p_fault_soap_format">

SOAP fault format settings
--------------------------

The following configuration options are available in the **SOAP Fault Format**
section:

**SOAP Version**:\
Select the appropriate SOAP version. You can send either a SOAP Fault 1.1 or 1.2 response to the client.

**Fault Namespace**:\
Select the default namespace to use in SOAP faults, or enter a new one if necessary.

**Indent SOAP Fault**:\
If this option is selected, an XSL stylesheet is run over the SOAP fault to indent nested XML elements. The indented SOAP fault is returned to the client.

</div>

<div id="p_fault_soap_contents">

SOAP fault content settings
---------------------------

The following configuration options are available in the **SOAP Fault Contents**
section:

**Show Detailed Explanation of Fault**:\
Select this option to return a detailed explanation of the SOAP fault in the fault message. This makes it possible to suppress the reason for the exception in a tightly locked down system (the reason is displayed as `message blocked`
in the SOAP fault).

**Show Filter Execution Path**:\
Select this option to return a SOAP fault containing the list of filters run on the message before the error occurred. For each filter listed in the SOAP fault, the status is given (`pass`
or `fail`). The following message shows a *filter execution path*
returned in a SOAP fault:

``` {space="preserve"}
<?xml version="1.0" encoding="UTF-8"?>
<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope">
   <env:Header></env:Header>
   <env:Body>
      <env:Fault>
         <env:Code>
            <env:Value>Receiver</env:Value>
            <env:Subcode>
                <env:Value>policy failed</env:Value>
            </env:Subcode>
         </env:Code>
         <env:Detail xmlns:axwayfault="http://www.axway.com/soapfaults" 
             axwayfault:type="exception" type="exception">
             <axwayfault:path> 
                <axwayfault:visit node="HTTP Parser" status="Pass"></axwayfault:visit> 
                <axwayfault:visit node="/services" status="Fail"></axwayfault:visit> 
                <axwayfault:visit node="/status" status="Fail"></axwayfault:visit> 
             </axwayfault:path>
         </env:Detail>
       </env:Fault>
   </env:Body>
</env:Envelope>
```

**Show Stack Trace**:\
Select this option to return the Java stack trace for the error to the client. This option should only be enabled under instructions from Axway Support.

**Show Current Message Attributes**:\
Select this option to return the message attributes present at the time the SOAP fault was generated to the client. Each message attribute forms the content of a `<fault:attribute>`
element, as shown in the following example:

``` {space="preserve"}
<fault:attributes>
   <fault:attribute name="circuit.failure.reason" value="null">
   <fault:attribute name="circuit.lastProcessor" value="HTTP Digest">
   <fault:attribute name="http.request.clientaddr" value="/127.0.0.1:4147">
   <fault:attribute name="http.response.status" value="401">
   <fault:attribute name="http.request.uri" value="/authn">
   <fault:attribute name="http.request.verb" value="POST">
   <fault:attribute name="http.response.info" value="Authentication Required">
   <fault:attribute name="circuit.name" value="Digest AuthN">
</fault:attributes>
```

</div>

<div id="p_fault_soap_custom_faults">

Create Customized SOAP faults
-----------------------------

You can use the following approaches to create customized SOAP faults:

<div>

### Use the Generic Error filter

Instead of using the **SOAP Fault**
filter, you can use the **Generic Error**
filter to transform the SOAP fault message returned by applying an XSLT stylesheet. The **Generic Error**
filter examines the incoming message and infers the type of message to be returned (for example, JSON or SOAP). You can use the **Advanced** tab to customize the generation of a response message if the request cannot be inferred as a SOAP or JSON request.

For more details, see [*Generic error handling* on page 1](fault_generic.htm).

</div>

<div>

### Use the Set Message filter

You can create customized SOAP faults using the **Set Message**
filter with the **SOAP Fault**
filter. The **Set Message**
filter can change the contents of the message body to any arbitrary content. When an exception occurs in a policy, you can use this filter to customize the body of the SOAP fault. The following example demonstrates how to generate customized SOAP faults and return them to the client.

<div>

#### Step 1: Create the top-level policy

This example first creates a very simple policy called **Main Policy**. This policy ensures the size of incoming messages is between 100 and 1000 bytes. Messages in this range are echoed back to the client.

![Main Policy](/Images/docbook/images/fault/main_circuit_start.gif)

</div>

<div>

#### Step 2: Create the fault policy

Next, create a second policy called **Fault Circuit**. This policy uses the **Set Message**
filter to customize the body of the SOAP fault. When configuring this filter, enter the contents of the customized SOAP fault to return to clients in the text area provided.

![Fault Circuit](/Images/docbook/images/fault/fault_circuit.gif)

</div>

<div>

#### Step 3: Create a shortcut to the fault policy

Add a **Policy Shortcut**
filter to the **Main Policy**
and configure it to refer to the **Fault Circuit**. Do *not*
connect this filter to the policy. Instead, right-click the filter, and select **Set as Fault Handler**. The **Main Policy**
is displayed as follows:

![Main Policy with Fault Handler](/Images/docbook/images/fault/main_circuit.gif)

</div>

<div>

#### How this example works

Assume a 2000-byte message is received by the API Gateway and is passed to the **Main Policy**
for processing. The message is parsed by the **HTTP Parser**
filter, and the size of the message is checked by the **Message Size**
filter. Because the message is greater than the size constraints set by this filter, and because there is no failure path configured for this filter, an exception is thrown.

When an exception is thrown in a policy, it is handled by the designated *fault handler*, if one is present. In the **Main Policy**, a **Policy Shortcut**
filter is set as the fault handler. This filter delegates to the **Fault Circuit**, meaning that when an exception occurs, the **Main Policy**
invokes (or delegates to) the **Fault Circuit**.

The **Fault Circuit**
consists of two filters, which play the following roles:

1.  **Set Message**:\
    This filter is used to set the body of the message to the contents of the customized SOAP fault.
2.  **Reflect**:\
    When the SOAP fault has been set to the message body, it is returned to the client using the **Reflect**
    filter.

</div>

</div>

</div>
