{
"title": "Content Filtering - Request Parameters",
"linkTitle": "Content Filtering - Request Parameters",
"date": "2019-10-17",
"description": "The API Gateway can check both the request *Query String*\\nand HTTP header values for threatening content. This ensures that only properly configured names and values appear in the Query String and HTTP request headers. *Regular expressions*\\nare used to test the attribute values."
}
<div id="p_content_req_params_overview">

Overview
--------

The API Gateway can check both the request *Query String*
and HTTP header values for threatening content. This ensures that only properly configured names and values appear in the Query String and HTTP request headers. *Regular expressions*
are used to test the attribute values.

</div>

<div id="p_content_req_params_xml_sig">

Query String Overview
---------------------

The request Query String is that portion of the URL that comes after the '?' character, and contains the request parameters. It is typically used for HTTP GET requests in which form data is submitted as name-value pairs on the URL. This contrasts to the HTTP POST method where the data is submitted in the body of the request. The following example shows a request URL that contains a Query String:

    http://hostname.com/services/getEmployee?first=john&last=smith

In the above example the Query String is "first=john&last=smith". As is clear from the example, Query Strings consist of attribute name-value pairs. Each name-value pair is separated by the '&' character.

</div>

<div id="p_content_req_params_qsregexp">

1. Query String/HTTP Header Attribute Regular Expressions
---------------------------------------------------------

The table contains the list of attribute names, together with their legitimate values, that must be received either as part of the request Query String or as an HTTP request header. For this filter to run successfully, all
of the required attributes must be present in the request, and must have the correct value.

The **Name**
column gives the name of the HTTP header field or Query String attribute. In order for this filter to succeed, all
named headers and Query String attributes must
be present in the incoming request.

The **Type**
column indicates whether the request parameter is an HTTP header or a Query String attribute.

The **Regular Expression**
column gives the name of the regular expression that the API Gateway will use to restrict the value of the named request parameter. The value of the named request parameter must
comply with the constraints imposed by the regular expression. As we will see a little later, a number of common regular expression are available for selection.

The **Required**
field indicates whether the attribute must be present or not. If this field is marked as "Yes", the corresponding parameter name must
be present in the request. If it is not present, the filter will fail. If it is marked as "No", the attribute need not be present in order for the filter to pass.

If the **Allow unspecified attributes**
checkbox has been checked, additional un-named header names and Query String attributes will not be filtered by the API Gateway. This is useful in cases where we are interested in filtering the content of only a small number of Query String attributes, for example, but the request may contain many attributes. In such cases, it is only necessary to filter those few attributes, and by checking this checkbox, the API Gateway will ignore all other Query String attributes.

New regular expressions can be added, edited, and removed by selecting the **Add**
, **Edit**
, and **Delete**
buttons respectively. Regular expressions are added/edited through the **Configure Query String or HTTP Header**
interface.

This dialog allows you to configure regular expressions to restrict the values of request Query Strings or HTTP headers. To configure such a regular expression, simply complete the following fields:

1.  The regular expression can be applied to a Query String attribute or to the value of a named HTTP header. Select the appropriate type of request parameter using the **Type**
    field.

2.  Enter the name of the Query String attribute or HTTP header in the **Name**
    field.

3.  Specify whether this request parameter is **Optional**
    or **Required**
    using the appropriate radio button.

4.  The regular expression which is to restrict the value of the request parameter can be entered either manually, or selected from the regular expression library of previously stored expressions. A number of common regular expressions are provided for convenience. For example, regular expressions are supplied for alphanumeric values, dates, and email addresses.\
    Enter or select an appropriate regular expression which will restrict the value of the specified request parameter. A regular expression can be added to the library by selecting the **Add/Edit**
    button. Simply enter a **Name**
    for the expression followed by the **Regular Expression**
    itself.

</div>

<div id="p_content_req_params_threat_content">

2. Threatening Content Regular Expressions
------------------------------------------

The purpose of the regular expressions entered in this section is to guard against the possibility of an HTTP header or Query String attribute containing malicious content. For example, an expression could be written to identify SQL syntax, thus preventing SQL injection attacks.

*All*
of these expressions will be run against *all*
attribute values in the QueryString and/or HTTP headers. If the expression matches *any*
of the values, the filter will fail.

Threatening content regular expressions can be added using the **Add**
button. Existing expressions can be edited or removed by highlighting them in the listbox and clicking the **Edit**
or **Delete**
buttons respectively.

To configure a threatening content regular expression, complete the following fields.

-   The specified regular expression can be applied to HTTP headers only, Query String attributes only, or both HTTP headers and Query String attributes. Select the appropriate option from the **Type**
    dropdown.

-   The regular expressions themselves can either be entered manually or selected from a library of previously stored threatening content regular expressions. A number of useful regular expressions which guard against common attacks, including SQL injection and buffer overflow style attacks, are provided for convenience. For example, a number of expressions are supplied which guard against some common SQL injection style attacks (e.g. "SQL Insert", "SQL Delete", etc), buffer overflow attacks (i.e. "Content longer than 1024 characters"), and the presence of control characters in parameter values (i.e. "ASCII Control Character").\
    Enter or select an appropriate regular expression which will restrict the value of the specified request parameter. A regular expression can be added to the library by selecting the **Add/Edit**
    button. Simply enter a **Name**
    for the expression followed by the **Regular Expression**
    itself.

</div>
