{
"title": "Validate REST request",
"linkTitle": "Validate REST request",
"date": "2019-10-17",
"description": "The **Validate REST Request** filter enables you to validate the following aspects of a REST request:"
}
﻿

The **Validate REST Request** filter enables you to validate the following aspects of a REST request:

-   The HTTP method used in the request
-   Each of the path parameters against a set of restrictive conditions called a *request parameter restriction*
-   Each of the query string parameters against a request parameter restriction

For example, a request parameter restriction enables you to specify the expected data type of a named parameter, a regular expression for the parameter value, the minimum and maximum length of a string parameter, the minimum and maximum value of a numeric parameter, and so on.

This filter is found in the **Content Filtering** category in Policy Studio. For details on how to create a REST request, see [Create REST request](conversion_create_rest_request.htm).

General settings
----------------

Complete the following general settings:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Method**:\
Enter or select the HTTP method of the incoming message (for example, `POST`, `GET`, `DELETE`, and so on). The HTTP method of the incoming request must match the method specified here.

**URI Template**:\
Enter the URI template of the inbound path. You can include parameters in the path (for example, `/twitter/{version}/statuses/{operation}.{format}`). For more information, see [URI path templates](#URI). Any path parameters are automatically added to the table of parameter restrictions below. The path of the incoming request must match the path specified here, and the path parameters must meet the restrictions defined in the parameter restrictions table.

**Query Parameters**:\
You can define query string parameters and restrictions in the parameter restrictions table below. The query string parameters must meet the restrictions defined in the parameter restrictions table. For more information, see [Add REST request parameter restrictions](#Adding).

The following figure shows the parameter restrictions table for the path `/twitter/{version}/statuses/{operation}.{format}`
and the query string parameter `count`:

![Parameter Restrictions](/Images/docbook/images/content/param_restrictions.png)

**Fail if unspecified query string parameters found**:\
Select this option to have this filter fail if a request parameter is found on the incoming query string that has not been specified in the parameter restrictions table. This option is selected by default. You can use this option to guard against processing a query string containing a potentially malicious request parameter (for example, `/uri?number=2&badParam=System.exit(1);`).

**Extract valid parameters into individual message attributes**:\
Select this option to store valid parameters in message attributes. This option is not selected by default.

**On failure save invalid parameter name as a message attribute**:\
Select this option to save the invalid parameter name as a message attribute if the filter fails. This option is not selected by default.

**Apply path matching against decoded url**:\
If this option is selected, API Gateway decodes a URL in the REST request and matches the decoded URL against a path parameter using the message attribute `http.request.path`. This is the default behavior.

If the path parameter contains URL encoded characters, the decoded URL that API Gateway uses (for example, `http://localhost:8080/myapi/myoperation/first/test`) does not match the path parameter with URL encoding (`http://localhost:8080/myapi/myoperation/first%2Ftest`). To achieve the match, deselect this option. Instead of using the decoded URL, API Gateway then uses the message attribute `http.request.rawURI.path` to match the encoded URL against the path parameter.

Add REST request parameter restrictions
---------------------------------------

Click the **Add** button to configure restrictions on the values of query string parameters. Click the **Edit**
button to configure restrictions on the values of path parameters that have been automatically added to the table. You can configure the following settings in the **REST Request Parameter Restriction** dialog:

**Request Parameter Name**:\
Enter the name of the parameter to validate (for example, `customer_name`). This field is prefilled for path parameters. This is displayed in the table of parameter restrictions.

**Description**:\
Enter a description of the restriction (for example, `Name parameter must be a string no longer than 10 characters`).This field is prefilled for path parameters. This is displayed in the table of parameter restrictions.

**Data Type**:\
Enter or select the data type of the parameter (for example, `string` or `integer`). The default type is `string`.

**Fail if request parameter not found**:\
Select this option if the specified request parameter must be present in the request. The filter fails if the parameter is not found. This option is not selected by default for query string parameters, but is selected by default for path parameters.

Complete the following fields on the **Request Parameter Restrictions** tab:

-   **Min Length**
-   Specifies the minimum number of characters or list items allowed (for example, `0`). The default value of `-1` means that this restriction is ignored.
-   **Max Length**
-   Specifies the exact number of characters or list items allowed (for example, `10`). The default value of `-1` means that this restriction is ignored.
-   **Regular Expression**
-   Specifies the exact sequence of characters that are permitted using a regular expression (for example, `[a-zA-Z\s]*`).

Do not enter the `^` character at the beginning of the expression and the `$` character at the end of the expression. This filter uses the XML Schema Pattern Facet regular expression language, which implicitly anchors all regular expressions at the head and tail.

-   **Enumeration of Allowed Values**
-   Specifies a list of permitted values. Click **Add** to enter an item in the list, and Click **OK**. Repeat as necessary to add multiple values.

Complete the following fields on the **Advanced Restrictions** tab:

-   **Greater than**
-   Specifies that the value entered in the **Minimum Value** field represents an exclusive lower bound (the value must be greater than this).
-   **Greater than or Equal to**
-   Specifies that the value entered in the **Minimum Value** field represents an inclusive lower bound (the value must be greater than or equal to this).
-   **Minimum Value**
-   Specifies the lower bounds for numeric values (for example, the value must be greater than 20).
-   **Less than**
-   Specifies that the value entered in the **Maximum Value**
    field represents an exclusive lower bound (the value must be less than this).
-   **Less than or Equal to**
-   Specifies that the value entered in the **Maximum Value** field represents an inclusive lower bound (the value must be less than or equal to this).
-   **Maximum Value**
-   Specifies the upper bounds for numeric values (for example, the value must be less than or equal to 30).
-   **Max Total Digits for Number**
-   Specifies the maximum number of digits allowed for a numeric data type. The default value of `-1` means that this restriction is ignored.
-   **Max Digits in Fraction Part of Number**
-   Specifies the exact number of digits allowed in the fraction part of a numeric type. For example, the number 1.23 has two fraction digits (two numbers after the decimal point). The default value of `-1` means that this restriction is ignored.
-   **Whitespace**
-   Specifies how white space is handled (for example, line feeds, tabs, spaces, and carriage returns). You can select one of the following values:
-   -   `Preserve` means the XML processor preserves (does not remove) any white space characters.
    -   `Replace` means the XML processor replaces any white space characters (line feeds, tabs, and carriage returns) with spaces.
    -   `Remove` means the XML processor removes any white space characters (line feeds, tabs, spaces, carriage returns are replaced with spaces, leading and trailing spaces are removed, and multiple spaces are reduced to a single space).

URI path templates
------------------

Paths are specified using a formatted Jersey `@Path` annotation string. The `@Path` annotation's value is a relative URI path (for example, `/twitter`). The Jersey `@Path` annotation enables you to parametrize the path specified in the incoming request, by embedding variables in the URIs.

URI path templates are URIs with variables embedded within the URI syntax. These variables are substituted at runtime in order for a resource to respond to a request based on the substituted URI. Variables are denoted by curly braces (for example, `/twitter/{version}`).

The following is an example URI template:

    /twitter/{version}/statuses/{operation}.{format}

It contains the variables `version`, `operation`, and `format`. At runtime, this URI template might resolve to:

    /twitter/1.1/statuses/retweets_of_me.json

For more information on Jersey `@Path` annotations, go to <https://jersey.java.net/>.
