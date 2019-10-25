{
"title": "JSON error handling",
"linkTitle": "JSON error handling",
"date": "2019-10-17",
"description": "In cases where a JavaScript Object Notation (JSON) transaction fails, the API Gateway can use a *JSON error*\\nto convey error information to the client. By default, the API Gateway returns a very basic fault to the client when a message filter fails. "
}
﻿
<div id="p_fault_json_overview">

Overview
--------

In cases where a JavaScript Object Notation (JSON) transaction fails, the API Gateway can use a *JSON error*
to convey error information to the client. By default, the API Gateway returns a very basic fault to the client when a message filter fails.

You can add the **JSON Error**
filter to a policy to return more meaningful error information to the client. For example, the following message extract shows the format of a JSON error raised when a JSON Schema Validation filter fails:

``` {space="preserve"}
{
    "reasons":[
       { 
          "language":"en",
          "message":"JSON Schema Validation filter failed"
       }
    ],
    "details":{
       "msgId":"Id-f5aab7304f6c754804f70000",
       "exception message":"JSON Schema Validation filter failed",
        ...
    }
}
```

{{< alert title="Note" color="primary" >}}For security reasons, it is good practice to return as little information as possible to the client. However, for diagnostic reasons, it is useful to return as much information to the client as possible. Using the **JSON Error**
filter, administrators have the flexibility to configure just how much information to return to clients, depending on their individual requirements.{{< /alert >}}
For more details on JSON schema validation, see [*JSON schema validation* on page 1](content_schema_json.htm). For more details on JSON, see <http://www.json.org/index.html>.

</div>

<div id="p_fault_json_">

General settings
----------------

Configure the following general settings:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**HTTP Response Code Status**:\
Enter the HTTP response code status for this JSON error filter. This ensures that a meaningful response is sent to the client in the case of an error occurring in a configured policy. Defaults to `500`
(`Internal Server Error`). For a complete list of status codes, see the [HTTP Specification](http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html).

</div>

<div id="p_fault_json_contents">

JSON error contents
-------------------

The following configuration options are available in the **JSON Error Contents**
section:

**Show detailed explanation of error**:\
Select this option to return a detailed explanation of the JSON error in the error message. This makes it possible to suppress the reason for the exception in a tightly locked down system. By default, the reason is displayed as `message blocked`
in the JSON error. This option displays the value of the `${circuit.failure.reason}`
message attribute selector.

**Show filter execution path**:\
Select this option to return the list of filters run on the message before the error occurred. For each filter listed in the JSON Error, the status is output (`Pass`
or `Fail`). The following message extract shows a *filter execution path*
returned in a JSON error:

``` {space="preserve"}
"path" :{
   "policy" :"test_policy",
   "filters" :[ {
      "name" :"True Filter",
      "status" :"Pass"
   }, {
    "name" :"JSON Schema Validation",
    "status" :"Fail",
   "filterMessage" :"Filter failed"
   }, {
    "name" :"Generic Error",
    "status" :"Fail",
    "filterMessage" :"Filter failed"
   } ]
},
```

**Show stack trace**:\
Select this option to return the Java stack trace for the error to the client. This option should only be enabled under instructions from Axway Support.

**Show current message attributes**:\
Select this option to return the message attributes present when the JSON error is generated to the client. The value of each message attribute is output as shown in the following example:

``` {space="preserve"}
"attributes":[ 
   {
    "name":"circuit.exception",
    "value":"com.vordel.circuit.CircuitAbortException:JSON Schema Validation filter failed"
   },
   {
    "name":"circuit.failure.reason",
    "value":"JSON Schema Validation filter failed"
   },
   {
    "name":"content.body",
    "value":"com.vordel.mime.JSONBody@185afba1"
   },
   {
    "name":"failure.reason",
    "value":"JSON Schema Validation filter failed"
   },
   {
    "name":"http.client",
    "value":"com.vordel.dwe.http.ServerTransaction@7d3e1384"
   },
   {
    "name":"http.headers",
    "value":"com.vordel.mime.HeaderSet@76737f58"},
   {
    "name":"http.response.info",
    "value":"ERROR"
   },
   {
    "name":"http.response.status",
    "value":"500"
   },
   {
    "name":"id",
    "value":"Id-f5aab7304f6c754804f70000"
   },
   {
    "name":"json.errors",
    "value":"org.codehaus.jackson.JsonParseException: Unexpected character 
     ('\"' (code 34)):was expecting comma to separate OBJECT entries\n at 
     [Source:com.vordel.dwe.InputStream@592c34b; line:3, column:25]"
    },
...
]
```

{{< alert title="Caution" color="warning" >}}For security reasons, **Show filter execution path**, **Show stack trace**, and **Show current message attributes**
should not be used in a production environment.{{< /alert >}}

</div>

<div id="p_fault_json_custom_faults">

Create customized JSON errors
-----------------------------

You can use the following approaches to create customized JSON errors:

<div>

### Use the Generic Error filter

Instead of using the **JSON Error**
filter, you can use the **Generic Error**
filter to transform the JSON error message returned by applying an XSLT stylesheet. The **Generic Error**
filter examines the incoming message and infers the type of message to be returned (for example, JSON or SOAP). You can use the **Advanced** tab to customize the generation of a response message if the request cannot be inferred as a SOAP or JSON request.

For more details, see [*Generic error handling* on page 1](fault_generic.htm).

</div>

<div>

### Use the Set Message filter

You can create customized JSON errors using the **Set Message**
filter with the **JSON Error**
filter. The **Set Message**
filter can change the contents of the message body to any arbitrary content. When an exception occurs in a policy, you can use this filter to customize the body of the JSON error.

For details on how to use the **Set Message**
filter to generate customized faults and return them to the client, see the example in [*SOAP fault handling* on page 1](fault_soap.htm). You can use the same approach to generate customized JSON errors.

</div>

</div>
