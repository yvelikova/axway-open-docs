{
"title": "Configure REST API parameters in Policy Studio",
"linkTitle": "Configure REST API parameters in Policy Studio",
"date": "2019-09-17",
"description": "The REST API wizard in Policy Studio enables policy developers to virtualize REST APIs in the **API Catalog**, and to route them to custom policies. The REST API method wizard enables you to virtualize REST API methods in the repository, and to specify any inbound parameter mappings. This topic explains in detail how to configure REST API parameter mappings in the REST API method wizard. It assumes that you are already familiar with the steps described in [Register REST APIs in](%3Ca%20href=)."
}
﻿
<div id="p_api_mgmt_register_ps_params_over">

Overview
--------

The REST API wizard in Policy Studio enables policy developers to virtualize REST APIs in the **API Catalog**, and to route them to custom policies. The REST API method wizard enables you to virtualize REST API methods in the repository, and to specify any inbound parameter mappings. This topic explains in detail how to configure REST API parameter mappings in the REST API method wizard. It assumes that you are already familiar with the steps described in [Register REST APIs in](api_mgmt_register_ps.htm).

For example, given a virtualized REST API such as the Yahoo Finance API, you can use the REST API method wizard to map stock quote URL path parameters to specific query string parameters. This enables you to expose a path such as `/stock/quote/{symbol}`, and to map `{symbol}`
to the `s`
parameter in the query string. You can then make parameterized API calls such as the following at runtime:

finance.yahoo.com/d/quotes.csv?s=symbol&f=sb2b3jk
This call returns stock quotes such as the following at runtime:

AMZN 272.99 270.03 185.51 284.72

</div>

<div id="p_api_mgmt_register_ps_params_mappings">

Supported parameters
--------------------

This section describes the supported REST API parameter mappings and how to access parameters at runtime.

<div>

### Supported parameter mappings

The supported REST API parameter mappings described in this topic are as follows:

| **Parameter Type**    | **Mapping**                      |
|-----------------------|----------------------------------|
| **Query string**      | -   Query string to query string 
  -   Query string to form body     
  -   Query string to path          |
| **Path**              | -   Path to query string         
  -   Path to form body             
  -   Path to path                  |
| **Form-encoded body** | -   Form body to query string    
  -   Form body to form body        
  -   Form body to path             |

</div>

<div>

### How to access parameter values at runtime

You can access values for these parameter types on the API Gateway message whiteboard at runtime using the following selectors:

-   `${params.path.param_name}`
-   `${params.query.param_name}`
-   `${params.form.param_name}`

This topic shows examples of specifying these selectors in the REST API method wizard. For more details on selectors, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

</div>

<div>

Before you begin
----------------

Before you perform the steps for any of the supported mappings described in this topic, perform the following steps in the REST API wizard:

1.  Select the virtualized REST API in the Policy Studio tree.
2.  Select the REST API method that you wish to configure in the screen on the right.
3.  Click **Edit**.
4.  Click the **Exposure**
    tab.

</div>

<div id="p_api_mgmt_register_ps_params_qs_qs">

Query string to query string mapping
------------------------------------

This mapping includes the following scenarios:

<div id="p_api_mgmt_register_ps_params_qs_qs_passthru">

### Scenario 1—Pass through

You can configure the REST API method to pass any or all inbound parameters untouched on to the back-end service as follows:

1.  Under **Inbound parameters**
    on the left, deselect **Fail if unspecified parameters found**.
2.  Click **OK**.

The following example screen shows the settings for this parameter mapping:

![Query string to query string: pass through parameter](/Images/docbook/images/api_mgmt/rest_api_method_param_passthru.png)

</div>

<div id="p_api_mgmt_register_ps_params_qs_qs_reject">

### Scenario 2—Reject unspecified parameters

You can configure the REST API method to reject any parameters that are not specified as inbound parameters as follows:

1.  Under **Inbound parameters**
    on the left, select **Fail if unspecified parameters found**.
2.  Click **OK**.

</div>

<div id="p_api_mgmt_register_ps_params_qs_qs_pass_specific">

### Scenario 3—Pass specific parameters

You can configure the REST API method to accept only specific parameters, which can then be forwarded on as outbound parameters. Perform the following steps:

1.  Under **Inbound parameters**
    on the left, click **Add**
    to add specific parameters to the table.
2.  Specify the following settings for each parameter:
    -   **Name**: Name of the parameter (for example, `customer_name`).
    -   **Description**: Description of the parameter.
    -   **Param Type**: Use the default (`query`).
    -   **Data Type**: Use the default (`string`).
    -   **Required**: Select whether the parameter is required or optional.
    -   **Allow Multiple**: Select to allow multiple parameters.

>
Click **OK**.
Select **Fail if unspecified parameters found**.
Click **OK**.
The following example shows a required parameter named `customer_name`, and an optional parameter named `customer_id`:

![Query string to query string: specific parameter](/Images/docbook/images/api_mgmt/rest_api_method_param_specific.png)

</div>

<div id="p_api_mgmt_register_ps_params_qs_qs_map_specific">

### Scenario 4—Map specific parameters

You can configure the REST API method to accept only specific parameters, and map these to back-end-specific parameters (of different names). Perform the following steps:

1.  Under **Inbound parameters**
    on the left, click **Add**
    to add specific parameters to the table. For more details, see [Scenario 3—Pass specific parameters](#Scenario2).
2.  Select **Fail if unspecified parameters found**.
3.  Under **Destination parameters**, click **Add**, and specify the following settings for each parameter:
    -   **Name**: Name of the parameter (for example, `cn`).
    -   **Source**: Source of the parameter value (for example, `${params.query.param_name}`).
    -   **Param Type**: Use the default (`query`).
4.  Click **OK**.

In the following example, `customer_name`
and `customer_id`
are specified as inbound parameters, but the back-end service accepts parameters named `cn`
and `cid`. The mapping is achieved using selectors to retrieve the values of the inbound parameters at runtime. In this case, `${params.query.customer_name}`
and `${params.query.customer_id}`
resolve the values of the `cn`
and `cid`
parameters:

![Query string to query string: map specific parameter](/Images/docbook/images/api_mgmt/rest_api_method_param_map_specific.png)

</div>

</div>

<div id="p_api_mgmt_register_ps_params_qs_form">

Query string to form body mapping
---------------------------------

This mapping includes the following scenarios:

<div id="p_api_mgmt_register_ps_params_qs_form_simple">

### Scenario 1—Simple parameter mapping

You can configure a REST API method to accept an unspecified query string parameter that maps to form-encoded body parameter as follows:

1.  Deselect **Fail if unspecified parameters found**
    to allow all parameters in this case.
2.  On the right, change the destination **HTTP Method**
    to `PUT`. This is necessary because the inbound **HTTP Method**
    is set to `*`, which allows any method, and the API Gateway will not create a request body for `GET`
    requests.
3.  Under **Destination parameters**
    , click **Add**
    ,and specify the following settings:
    -   **Name**: Name of the parameter (for example, `customer_name`).
    -   **Source**: Source of the parameter value (for example, `${params.query.customer_name}`).
    -   **Param Type**: Select `body`.
4.  Click **OK**.

In the following example, `customer_name`
has been specified as an inbound query string parameter that is mapped to a form-encoded body parameter and sent to the back-end service. The mapping is achieved using a selector to retrieve the value of the inbound parameters at runtime (in this case, `${params.query.customer_name}`:

![Query string to form body: simple mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_qs_form_simple.png)

</div>

<div id="p_api_mgmt_register_ps_params_qs_form_multiple">

### Scenario 2—Multiple parameter mapping

This is similar to [Scenario 1—Simple parameter mapping](#Scenario3)
but with more parameters. Perform the following steps:

1.  Under **Inbound parameters**
    on the left, click **Add**
    to add specific parameters to the table. For more details, see [Scenario 3—Pass specific parameters](#Scenario2).
2.  Select **Fail if unspecified parameters found**.
3.  On the right, change the destination **HTTP Method**
    to `PUT`.
4.  Under **Destination parameters**, click **Add**
    to add back-end-specific parameters to the table. For more details, see [Scenario 1—Simple parameter mapping](#Scenario3).
5.  Click **OK**.

For example, `customer_name`
and `customer_id`
are passed as required inbound parameters. If unspecified parameters are present in the incoming request, an error is reported. Both inbound parameters are mapped to form-encoded body parameters and sent to the back-end service. The mapping is achieved using the `${params.query.customer_name}`
and `${params.query.customer_id}`
selectors as destination parameter sources.

</div>

<div id="p_api_mgmt_register_ps_params_qs_form_change">

### Scenario 3—Change mapped parameter names

This is similar to [Scenario 2—Multiple parameter mapping](#Scenario15). The REST API method again maps inbound query parameters to form-encoded parameters, but this time the names of the destination parameters differ from those supplied. The steps are the same except that the names entered when adding the **Destination Parameters**
are different.

For example, `customer_name`
and `customer_id`
are passed as required inbound parameters. If unspecified parameters are present in the incoming request, an error is reported. Both inbound parameters are mapped to form-encoded body parameters and sent to the back-end service, but in this case, the names of the mapped parameters differ (`cname`
and `cid`) from the supplied query string parameters. The mapping is achieved using the `${params.query.customer_name}`
and `${params.query.customer_id}`
selectors as destination parameter sources:

![Query string to query string: change mapped parameter names](/Images/docbook/images/api_mgmt/rest_api_method_param_qs_form_names.png)

</div>

<div id="p_api_mgmt_register_ps_params_qs_form_mixed">

### Scenario 4—Map both form and query parameters

In this scenario, the back-end service accepts both form-encoded and query string parameters. The steps are similar to [Scenario 2—Multiple parameter mapping](#Scenario15), except that some parameters are mapped to form body parameter, and some are mapped to query string parameters. You can do this by specifying a different **Param Type**
when adding the **Destination Parameters**.

In the following example, the method accepts three parameters:`customer_name`
and `customer_id`
are required, and `customer_greeting`
is optional. `customer_name`
and `customer_id`
are mapped to form body parameters, whereas `customer_greeting`, if present, is mapped to a query string parameter. The parameter mappings are achieved using the `${params.query.customer_name}`, `${params.query.customer_id}`, and `${params.query.customer_greeting}`
selectors:

![Query string to query string: map both form and query parameters](/Images/docbook/images/api_mgmt/rest_api_method_param_qs_form_mixed.png)

</div>

</div>

<div id="p_api_mgmt_register_ps_params_qs_path">

Query string to path mapping
----------------------------

This mapping includes the following scenarios:

<div id="p_api_mgmt_register_ps_params_qs_path_simple">

### Scenario 1—Simple parameter mapping

You can configure a REST API method to accept query string parameters that are mappedto the destination path parameters as follows:

1.  Deselect **Fail if unspecified parameters found**
    to allow all parameters in this case.
2.  In the **Destination Path**
    field, add parameters using the appropriate selector (for example, `${params.query.param_name}`.
3.  Click **OK**.

In the following example, `customer_name`
is passed as an unspecified inbound query string parameter that is resolved in the destination path using the `${params.query.customer_name}`
selector at runtime:

![Query string to path body: simple mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_qs_path_simple.png)

</div>

<div id="p_api_mgmt_register_ps_params_qs_path_simple_specified">

### Scenario 2—Specific parameter mapping

This is similar to Scenario 1—Simple Parameter Mapping, but with a check for unspecified parameters. Perform the following steps:

1.  Under **Inbound parameters**
    on the left, click **Add**
    to add specific parameters to the table (for example, `customer_name`). For more details, see [Scenario 3—Pass specific parameters](#Scenario2).
2.  Select **Fail if unspecified parameters found**.
3.  In the **Destination Path**
    field, add parameters using the appropriate selector (for example, `${params.query.param_name}`).
4.  Click **OK**.

In this example, `customer_name`
is passed as an inbound parameter and resolved in the destination path using the `${params.query.customer_name}`
selector. If unspecified parameters are present in the incoming request, an error is reported:

![Query string to path body: specific parameter mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_qs_path_specified.png)

</div>

<div id="p_api_mgmt_register_ps_params_qs_path_mixed">

### Scenario 3—Map inbound query string to path and query string

You can configure the REST API method to accept query-string parameters that are mapped to both destination path parameters and outbound query-string parameters. Perform the following steps:

1.  Under **Inbound parameters**
    on the left, click **Add**
    to add specific parameters to the table (for example, `customer_name`
    and `customer_id`
    ). For more details, see [Scenario 3—Pass specific parameters](#Scenario2).
2.  Select **Fail if unspecified parameters found**.
3.  In the **Destination Path**
    field, add parameters using the appropriate selector (for example, `${params.query.param_name}`.
4.  Under **Destination parameters**, click **Add**
    to add back-end-specific parameters to the table (for example, `cid`). For more details, see [Scenario 1—Simple parameter mapping](#Scenario3).
5.  Click **OK**.

In this example, `customer_name`
and `customer_id`
are specified as inbound parameters. The `customer_name`
is mapped to a path parameter, and `customer_id`
is mapped to a back-end query parameter named `cid`. These mappings are implemented at runtime using the `${params.query.customer_name}`
and `${params.query.customer_id}`
selectors:

![Query string to query string: map inbound query string to path and query string](/Images/docbook/images/api_mgmt/rest_api_method_param_qs_path_mixed.png)

</div>

</div>

<div id="p_api_mgmt_register_ps_params_path_qs">

Path to query string mapping
----------------------------

This mapping includes the following scenarios:

<div id="p_api_mgmt_register_ps_params_path_qs_simple">

### Scenario 1—Simple parameter mapping

You can configure the REST API method to accept parameters that are mapped to the destination query string parameters. This scenario shows how to map one inbound path parameter to an outbound query string parameter as follows:

1.  Enter a specific path parameter in the inbound **Using path**
    field on the left (for example, `/my_path/{param_name}`). When an inbound path parameter is detected, the outbound **Destination path**
    on the right is auto-completed with the appropriate selector (for example `${params.path.param_name}`).
2.  Deselect **Fail if unspecified parameters found**
    to allow unspecified parameters.
3.  Select **Copy query-string/form parameters from inbound to outbound request**
    to allow parameters to be copied to the destination path.
4.  Under **Destination parameters**, click **Add**
    to add a back-end-specific query string parameter to the table using the auto-generated selectors from the destination path.
5.  Remove the auto-generated path parameter from the destination path to prevent sending any path parameters to the destination.
6.  Click **OK**.

The following example screen shows the settings for this parameter mapping:

![Path to query string: simple mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_path_qs_simple.png)

</div>

<div id="p_api_mgmt_register_ps_params_path_qs_multiple">

### Scenario 2—Multiple path parameters

In this scenario, you can map multiple path parameters to destination query-string parameters. The steps are the same as for Scenario 1—Simple Parameter Mapping
except that you add multiple inbound and outbound parameters. In addition, you must select **Fail if unspecified parameters found**
to reject unspecified parameters.

For example, the inbound path could be `/my_test_path/{customer_name}/{customer_id}`, and the back-end-specific parameters could be based on the `${params.path.customer_name}`
and `${params.path.customer_id}`
selectors.

</div>

<div id="p_api_mgmt_register_ps_params_path_qs_mixed">

### Scenario 3—Map inbound query string to path and query string

You can configure the REST API method to map multiple path parameters to destination query-string parameters, with an additional inbound query-string parameter being passed through to the back-end.The steps are the same as for [Scenario 2—Multiple path parameters](#Scenario4)
except you must also add specific query string parameters to the **Inbound Parameters**
table.

For example, the inbound path could be `/my-test-path/{customer_name}/{customer_id}`, and the back-end-specific query string parameters could use the `${params.path.customer_name}`
and `${params.path.customer_id}`
selectors. Finally, you could add a `customer_request`
inbound query string parameter to the table.

</div>

</div>

<div id="p_api_mgmt_register_ps_params_path_form">

Path to form body mapping
-------------------------

This mapping includes the following scenarios:

<div id="p_api_mgmt_register_ps_params_path_form_simple">

### Scenario 1—Simple parameter mapping

You can configure the REST API method to accept path parameters that are mapped to destination form-encoded parameters as follows:

1.  Enter a specific path parameter in the inbound **Using path**
    field on the left (for example, `/my_path/{param_name}`). When an inbound path parameter is detected, the outbound **Destination path**
    on the right is auto-completed with the appropriate selector (for example `${params.path.param_name}`).
2.  Select **Fail if unspecified parameters found**
    to reject unspecified parameters.
3.  Deselect **Copy query-string/form parameters from inbound to outbound request**
    because you are defining the mapping in this case.
4.  Under **Destination parameters**, click **Add**
    to add a back-end-specific form body parameter to the table using the auto-generated selectors from the destination path.
5.  Remove the auto-generated path parameter from the destination path to prevent sending any path parameters to the destination.
6.  Click **OK**.

The following example screen shows the settings for this parameter mapping:

![Path to form body: simple mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_path_form_simple.png)

</div>

<div id="p_api_mgmt_register_ps_params_path_form_multiple">

### Scenario 2—Multiple path parameters mapped to multiple form body parameters

In this scenario, you can map multiple path parameters to destination form body parameters. The steps are the same as for [Scenario 1—Simple parameter mapping](#Scenario5)
except that you add multiple inbound and outbound parameters.

For example, the inbound path could be `/my_test_path/{customer_name}/{customer_id}`, and the back-end-specific body parameters could use the `${params.path.customer_name}`
and `${params.path.customer_id}`
selectors.

</div>

<div id="p_api_mgmt_register_ps_params_path_form_mixed">

### Scenario 3—Multiple path parameters mapped to form body and query parameters

You can configure the REST API method to accept path parameters that are mapped to the destination form-encoded and query string parameters. The steps are the same as for [Scenario 2—Multiple path parameters mapped to multiple form body parameters](#Scenario6)
except you must also add specific query string parameters to the **Destination parameters**
table.

In the following example, `customer_name`
and `customer_id`
have been specified as inbound path parameters. `customer_id`
is mapped to a form parameter, whereas `customer_name`
is mapped to a query parameter called `cname`. These mappings are achieved using the `${params.path.customer_name}`
and `${params.path.customer_id}`
selectors:

![Path to form body and query string mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_path_form_mixed.png)

</div>

<div id="p_api_mgmt_register_ps_params_path_form_mixed_more">

### Scenario 4—Multiple path parameters mapped to path, form body, and query parameters

This is similar to [Scenario 3—Multiple path parameters mapped to form body and query parameters](#Scenario7), the difference being that one of the inbound path parameters is mapped to an outbound path parameter. In addition, this method accepts inbound query-string parameters, which are subsequently copied to the outbound request.

The following example screen shows the settings for this parameter mapping:

![Path to form body: mapped to path, form body, and query parameters](/Images/docbook/images/api_mgmt/rest_api_method_param_path_form_mixed_more.png)

</div>

</div>

<div id="p_api_mgmt_register_ps_params_path_path">

Path to path mapping
--------------------

This mapping includes the following scenarios:

<div id="p_api_mgmt_register_ps_params_path_path_simple">

### Scenario 1—Simple path parameter mapping

You can configure the REST API method to accept path parameters that are mapped to the destination path as follows:

1.  Enter a specific path parameter in the inbound **Using path**
    field on the left (for example, `/my_path/{param_name}`). When an inbound path parameter is detected, the outbound **Destination path**
    on the right is auto-completed with the appropriate selector (for example `${params.path.param_name}`).
2.  Select **Fail if unspecified parameters found**
    to reject unspecified parameters.
3.  Select **Copy query-string/form parameters from inbound to outbound request**
    to allow parameters to be copied to the destination path.
4.  Click **OK**.

The following example specifies an inbound path parameter called `customer_name`, which is resolved in the destination path using the `${params.path.customer_name}`
selector:

![Path to path: simple mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_path_path_simple.png)

</div>

<div id="p_api_mgmt_register_ps_params_path_path_multiple">

### Scenario 2—Multiple path parameters

In this scenario, you can configure the REST API method to accept multiple path parameters. The steps are the same as for [Scenario 1—Simple path parameter mapping](#Scenario8)
except that you add multiple inbound and outbound path parameters.

For example, you can specify inbound path parameters named `customer_name`
and `customer_id`
in the **Using path**
field as follows:

/my\_test\_path/{customer\_name}/{customer\_id}
You can resolve these parameters in the destination path by specifying the `${params.path.customer_name}`
and `${params.path.customer_id}`
selectors in the **Destination Path**
field as follows:

/my\_test\_path/\${params.path.customer\_name}/\${params.path.customer\_id}

</div>

<div id="p_api_mgmt_register_ps_params_path_path_order">

### Scenario 3—Change order of path parameters

You can configure the REST API method to accept multiple path parameters and to send them to the destination path in a different order. The steps are the same as for [Scenario 2—Multiple path parameters](#Scenario9)
except that you must change the order of the destination path parameters.

For example, you can specify inbound path parameters named `customer_name`
and `customer_id`
in the **Using path**
field as follows:

/my\_test\_path/{customer\_name}/{customer\_id}
You can resolve these parameters in the destination path in a different order by specifying the `${params.path.customer_name}`
and `${params.path.customer_id}`
selectors in the **Destination Path**
field as follows:

/my\_test\_path/\${params.path.customer\_id}/\${params.path.customer\_name}

</div>

</div>

<div id="p_api_mgmt_register_ps_params_form_query">

Form body to query string mapping
---------------------------------

This mapping includes the following scenarios:

<div id="p_api_mgmt_register_ps_params_form_query_simple">

### Scenario 1—Simple parameter mapping

You can configure the REST API method to accept form body parameters that are mapped to query string parameters as follows:

1.  In the inbound **HTTP Method**
    field, select `POST`.
2.  Deselect **Fail if unspecified parameters found**
    to allow unspecified parameters.
3.  Deselect **Copy query-string/form parameters from inbound to outbound request**
    to prevent parameters from being copied.
4.  Under **Destination parameters**, click **Add**
    to add back-end-specific query string parameters to the table.
5.  Click **OK**.

In the following example, `customer_name`
is sent as an unspecified inbound parameter that is mapped to a query string parameter and sent to the back-end service. This mapping is achieved using the `${params.form.customer_name}`
selector to retrieve the value of the inbound parameters at runtime:

![Form body to query string: simple mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_form_query_simple.png)

</div>

<div id="p_api_mgmt_register_ps_params_form_query_multiple">

### Scenario 2—Multiple parameter mapping

This scenario is similar to [Scenario 1—Simple parameter mapping](#Scenario10)
but with multiple parameters. The following steps differ:

1.  Under **Inbound parameters**
    on the left, click **Add**
    to add specific form body parameters to the table (for example, `customer_name`
    and `customer_id`).
2.  Select **Fail if unspecified parameters found**
    to reject unspecified parameters.
3.  Click **OK**.

In the following example, `customer_name`
and `customer_id`
as inbound body parameters and resolved as outbound query parameters using the `${params.form.customer_name}`
and `${params.form.customer_id}`
selectors. If unspecified parameters are present in the incoming request an error is reported:

![Form body to query string: multiple parameter mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_form_query_multiple.png)

</div>

<div id="p_api_mgmt_register_ps_params_form_query_name">

### Scenario 3—Change names of parameters mapped

This scenario is the same as [Scenario 2—Multiple parameter mapping](#Scenario11) except that the outbound query parameters are named differently from the inbound body parameters.

For example, you can specify `customer_name`
and `customer_id`
as inbound form body parameters. These are resolved as outbound query parameters named `cname`
and `cid`
using the `${params.form.customer_name}`
and `${params.form.customer_id}`
selectors. If unspecified parameters are present in the incoming request an error is reported.

</div>

<div id="p_api_mgmt_register_ps_params_form_query_mixed">

### Scenario 4—Map query and form parameters

You can configure the REST API method to accept inbound form body parameters that are mapped to both outbound form body and query string parameters. The steps are the same as for [Scenario 2—Multiple parameter mapping](#Scenario11), except that the outbound parameters include both query string and body parameters, and are named differently from the inbound body parameters.

In the following example, the `customer_name`
and `customer_greeting`
parameters are optional, and only appear in the outbound request if they in the inbound request:

![Form body to query string: query and form parameter mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_form_query_mixed.png)

</div>

</div>

<div id="p_api_mgmt_register_ps_params_form_form">

Form body to form body mapping
------------------------------

This mapping includes the following scenarios:

<div id="p_api_mgmt_register_ps_params_form_form_pass">

### Scenario 1—Pass through

You can configure the REST API method to pass any inbound form body parameters untouched on to the back-end service as follows:

1.  In the inbound and outbound **HTTP Method**
    fields, select `POST`.
2.  Deselect **Fail if unspecified parameters found**
    to allow unspecified parameters.
3.  Select **Copy query-string/form parameters from inbound to outbound request**.
4.  Click **OK**.

The following example screen shows the settings for this parameter mapping:

![Form body to form body: pass through mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_form_form_pass.png)

</div>

<div id="p_api_mgmt_register_ps_params_form_form_reject">

### Scenario 2—Reject unspecified parameters

This scenario is similar to [Scenario 1—Pass through](#Scenario13). The steps are the same except that you must select **Fail if unspecified parameters found**
to reject unspecified parameters.

</div>

<div id="p_api_mgmt_register_ps_params_form_form_specific">

### Scenario 3—Pass specific parameters

This scenario is similar to [Scenario 1—Pass through](#Scenario13). The steps are the same except that you must perform the following steps:

1.  Under **Inbound parameters**
    on the left, click **Add**
    to add specific form body parameters to the table (for example, `customer_name`
    and `customer_id`).
2.  Select **Fail if unspecified parameters found**
    to reject unspecified parameters.

In the following example, `customer_name`
is a required parameter and `customer_id`
is an optional parameter:

![Form body to form body: pass specific parameters](/Images/docbook/images/api_mgmt/rest_api_method_param_form_form_specific.png)

</div>

<div id="p_api_mgmt_register_ps_params_form_form_map">

### Scenario 4—Map specific parameters

You can configure the REST API method to accept only specific parameters and map those to back-end-specific parameters of different names. Perform the following steps:

1.  In the inbound and outbound **HTTP Method**
    fields, select `POST`.
2.  Under **Inbound parameters**, click **Add**
    to add specific form body parameters to the table (for example, `customer_name`
    and `customer_id`).
3.  Select **Fail if unspecified parameters found**
    to reject unspecified parameters.
4.  Deselect **Copy query-string/form parameters from inbound to outbound request**.
5.  Under **Destination parameters**, click **Add**
    to add back-end-specific form body of different names parameters to the table.
6.  Click **OK**.

In the following example, `customer_name`
and `customer_id`
are specified as inbound form body parameters, but the back-end service accepts parameters named `cn`
and `cid`
. The mapping is achieved using selectors to retrieve the values of the inbound parameters at runtime. In this case, `${params.form.customer_name}`
and `${params.form.customer_id}`
resolve the values of the `cn`
and `cid`
parameters:

![Form body to form body: map specific parameters](/Images/docbook/images/api_mgmt/rest_api_method_param_form_form_map.png)

</div>

</div>

<div id="p_api_mgmt_register_ps_params_form_path">

Form body to path mapping
-------------------------

This mapping includes the following scenarios:

<div id="p_api_mgmt_register_ps_params_form_path_simple">

### Scenario 1—Simple mapping

You can configure the REST API method to accept form body parameters that are mapped to the destination path parameters as follows:

1.  Deselect **Fail if unspecified parameters found**
    to allow unspecified parameters.
2.  Deselect **Copy query-string/form parameters from inbound to outbound request**.
3.  In the **Destination Path**
    field, add specific parameters using the appropriate selector (for example, `${params.form.customer_name}`.
4.  Click **OK**.

In this example, `customer_name`
is passed as an unspecified inbound form body parameter and resolved in the destination path using the `${params.form.customer_name}`
selector:

![Form body to path: pass through mapping](/Images/docbook/images/api_mgmt/rest_api_method_param_form_path_simple.png)

</div>

<div id="p_api_mgmt_register_ps_params_form_path_specific">

### Scenario 2—Simple mapping with specified parameters

This scenario is similar to [Scenario 1—Simple mapping](#Scenario12)
except that you must specify inbound parameters. The steps are as follows:

1.  Under **Inbound parameters**, click **Add**
    to add specific form body parameters to the table (for example, `customer_name`).
2.  Select **Fail if unspecified parameters found**
    to reject unspecified parameters.
3.  Deselect **Copy query-string/form parameters from inbound to outbound request**.
4.  In the **Destination Path**
    field, add specific parameters using the appropriate selector (for example, `${params.form.customer_name}`.
5.  Click **OK**.

</div>

<div id="p_api_mgmt_register_ps_params_form_path_mixed">

### Scenario 3—Map inbound form body to path and form body

You can configure the REST API method to accept form body parameters that are mapped to both destination path parameters and outbound form body parameters. Perform the following steps:

1.  Under **Inbound parameters**, click **Add**
    to add specific form body parameters to the table (for example, `customer_name`
    and `customer_id`).
2.  Select **Fail if unspecified parameters found**
    to reject unspecified parameters.
3.  Deselect **Copy query-string/form parameters from inbound to outbound request**
    .
4.  In the **Destination Path**
    field, add specific parameters using the appropriate selector (for example, `${params.form.customer_name}`).
5.  Under **Destination parameters**, click **Add**
    to add back-end-specific form body parameters to the table (for example, `cid`).
6.  Click **OK**.

In this example, `customer_name`
and `customer_id`
are specified as inbound parameters. The `customer_name`
is mapped to a path parameter, and `customer_id`
is mapped to a back-end form body parameter named `cid`. These mappings are achieved using the `${params.form.customer_name}`
and `${params.form.customer_id}`:

![Form body to path: pass specific parameters](/Images/docbook/images/api_mgmt/rest_api_method_param_form_path_mixed.png)

</div>

<div id="p_api_mgmt_register_ps_params_form_path_multiple_mixed">

### Scenario 4—Map inbound form body to path, query string, and form body

This scenario is similar to Scenario 3—Map inbound form body to path and form body. The steps are the same except that you must also map one of the inbound form body parameters to an outbound query string parameter.

In this example, the `customer_name`
and `customer_greeting`
parameters are optional, and only appear in the outbound request if they are present in the inbound request:

![Form body to path: map inbound form body to path, query string, and form body](/Images/docbook/images/api_mgmt/rest_api_method_param_form_path_multiple_mixed.png)

</div>

</div>
