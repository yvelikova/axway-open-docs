{
"title": "Extract path parameters",
"linkTitle": "Extract path parameters",
"date": "2019-10-17",
"description": "The **Extract Path Parameters**\\nfilter enables API Gateway to parse the contents of a specified HTTP path into message attributes. This means that you can define HTTP path parameters, and then extract their values at runtime using selectors. For example, this is useful when passing in parameters to REST-based requests. For more details on selectors, see \\n \\n in the \\n \\n \\n ."
}
﻿
<div id="p_connection_extract_path_parameters_over">

Overview
--------

The **Extract Path Parameters**
filter enables API Gateway to parse the contents of a specified HTTP path into message attributes. This means that you can define HTTP path parameters, and then extract their values at runtime using selectors. For example, this is useful when passing in parameters to REST-based requests. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_connection_extract_path_parameters_config">

Configuration
-------------

Complete the following settings:

**Name**:\
Enter a descriptive name for this filter to display in a policy.

**URI Template**:\
Enter the URI template for the path to be parametrized. This is a formatted Jersey `@Path`
annotation string, which enables you to parametrize the path specified in the incoming `http.request.path`
message attribute. The following is an example URI template entry:

    /twitter/{version}/statuses/{operation}.{format}

**Path Parameters**:\
The **Path Parameters**
table enables you to map the path parameters specified in the **URI Template**
to user-defined message attributes. These attributes can then be used by other filters downstream in the policy. Click **Add**
to configure a path parameter, and specify the following in the dialog:

-   **Path Parameter**:
-   Enter the name of the path parameter (for example, `version`).
-   **Type**:
-   Enter the type of the path parameter (for example, `java.lang.String`).
-   **Message Attribute**:
-   Enter the name of the message attribute that stores the parameter value (for example, `twitter_version`).

The following figure shows the example path parameters:

![Configured path parameters](/Images/docbook/images/connection/extract_path_params.gif)

</div>

<div id="p_connection_extract_path_parameters_input_output">

Required input and generated output
-----------------------------------

The incoming `http.request.path`
message attribute is required as input to this filter.

This filter generates the message attributes for the parameters that you specify in the **Path Parameters**
table. For example, in the previous figure, the following attributes are generated:

-   `twitter_format`
-   `twitter_operation`
-   `twitter_version`

</div>

<div id="p_connection_extract_path_parameters_outcomes">

Possible outcomes
-----------------

The possible outcomes of this filter are as follows:

-   `True`
    if the specified **URI Template**
    is successfully parsed.
-   `False`
    if an error occurs during **URI Template**
    parsing.
-   `CircuitAbortException`
    if an exception occurs during **URI Template**
    parsing.

</div>
