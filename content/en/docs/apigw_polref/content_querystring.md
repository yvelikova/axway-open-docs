{
"title": "Query string validation",
"linkTitle": "Query string validation",
"date": "2019-10-17",
"description": "The API Gateway can check the request *query string*\\n to ensure that only properly configured name and value pairs appear. *Regular expressions*\\n are used to test the attribute values. This enables you to make decisions on what to do with the message (for example, if the query sting value is `X`, route to service `X`)."
}
﻿
<div id="p_content_querystring_overview">

Overview
--------

The API Gateway can check the request *query string*
to ensure that only properly configured name and value pairs appear. *Regular expressions*
are used to test the attribute values. This enables you to make decisions on what to do with the message (for example, if the query sting value is `X`, route to service `X`).

You can configure the following sections on the **Validate Query String**
window:

-   **Enter Regular Expression**:\
    Query string values can be checked using regular expressions. You can select regular expressions from the global library (**White list**) or enter them manually. For example, if you know that a query string must have a value of `ABCD`, a regular expression of `^ABCD$`
    is an exact match test.
-   **Enter Threatening Content Regular Expression**:\
    You can select threatening content regular expressions from the global library (**Black list**) or to run against all query string names and values. These regular expressions identify common attack signatures (for example, SQL injection attacks).

You can configure the global **White list**
and **Black list**
libraries of regular expressions under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree.

</div>

<div id="p_content_querystring_qs_overview">

Request query string
--------------------

The request query string is the portion of the URL that comes after the `?`
character, and contains the request parameters. It is typically used for HTTP `GET`
requests in which form data is submitted as name-value pairs on the URL. This contrasts with the HTTP `POST`
method where the data is submitted in the body of the request. The following example shows a request URL that contains a query string:

    http://hostname.com/services/getEmployee?first=john&last=smith

In this example, the query string is `first=john&last=smith`. Query strings consist of attribute name-value pairs, and each name-value pair is separated by the `&`
character.

The **Query String Validation**
filter can also operate on the form parameters submitted in an HTTP Form `POST`. Instead of encoding the request parameters in the query string, the client uses the `application/x-www-form-urlencoded`
content-type, and submits the parameters in the HTTP `POST`
body, for example:

    POST /services/getEmployee HTTP/1.1
    Host: localhost:8095
    Content-Length: 21
    SOAPAction: HelloService
    Content-Type: application/x-www-form-urlencoded
    first=john&last=smith

If the API Gateway receives an HTTP request body such as this, the **Query String Validation**
filter can validate the form parameters.

</div>

<div id="p_content_querystring_reg_expr">

Configure query string attribute regular expressions
----------------------------------------------------

The **Enter Regular Expression**
table displays the list of configured query string names together with the white list of regular expressions that restrict their values. For this filter to run successfully, *all*
required attributes must be present in the request, and *all*
must have the correct value.

The **Name**
column shows the name of the query string attribute. The **Regular Expression**
column shows the name of the regular expression that the API Gateway uses to restrict the value of the named query string attribute. A number of common regular expressions are available from the global **White list**
library.

If the **Allow unspecified names**
check box is selected, additional unnamed query string attributes are not filtered by the API Gateway. For example, this is useful if you are interested in filtering the content of only a small number of query string attributes but the request may contain many attributes. In such cases, you only need to filter those few attributes, and by selecting this check box, the API Gateway ignores all other query string attributes.

### Configure a regular expression\

 You can configure regular expressions by selecting the **Add**, **Edit**, and **Delete**
buttons. The **Configure Regular Expression**
dialog enables you to add or edit regular expressions to restrict the values request query string attributes. To configure a regular expression, perform the following steps:

1.  Enter the name of the query string attribute in the **Name**
    field.
2.  Select whether this request parameter is **Optional**
    or **Required**
    using the appropriate radio button. If it is **Required**, the parameter name *must*
    be present in the request. If the parameter is not present, the filter fails. If it is **Optional**, the attribute does not need to be present for the filter to pass.
3.  You can enter the regular expression to restrict the value of the query string attribute manually or select it from the global **White list**
    library of regular expressions in the **Expression Name**
    drop-down list. A number of common regular expressions are provided (for example, alphanumeric values, dates, and email addresses).\
    You can use selectors representing the values of message attributes to compare the value of the query string attribute with the value contained in a message attribute. Enter the `$`
    character in the **Regular Expression**
    field to view a list of available attributes. At runtime, the selector is expanded to the corresponding attribute value, and compared to the query string attribute value that you want to check.
4.  You can add a regular expression to the library by selecting the **Add/Edit**
    button. Enter a **Name**
    for the expression followed by the **Regular Expression**.

### Advanced settings\

The **Advanced**
section enables you to extract a portion of the query string attribute value that is run against the regular expression. The extracted substring can also be Base64 decoded if necessary. The following is an example of a URL containing a query string. The value of the `password`
attribute is Base64 encoded, and must be extracted from the query string and decoded before it is run against the regular expression.

    http://axway.com/services?username=user&password=dXNlcg0K&dept=eng

You can extract the encoded value of the `password=`
attribute value by specifying the string that occurs directly before the substring you want to extract, together with the string that occurs directly after the substring. Enter `password=`
in the **Start substring**
field, and `&`
in the **End substring**
field.

{{< alert title="Note" color="primary" >}}You must select the start and end substrings to ensure that the exact substring is extracted. For example, in this example, `password=`
(including the equals sign) should be entered in the **Start substring**
field, and not `password`
(without the equals sign).{{< /alert >}}
By specifying the correct substrings, you are left with the Base64-encoded attribute value (`dXNlcg0K`). However, you still need to Base64 decode it before you can run a regular expression on it. Make sure to select the **Base64 decode**
check box. The Base64-decoded password value is `user`. This is the value that you need to run the regular expression against.

{{< alert title="Note" color="primary" >}}If both **Start substring**
and **End substring**
fields are blank, the regular expression is run against the entire attribute value. Furthermore, if both fields are blank and the **Base64 decode**
check box is selected, the entire attribute value is Base64 encoded before the regular expression is run against it.{{< /alert >}}

</div>

<div id="p_content_querystring_threat_content">

Configure threatening content regular expressions
-------------------------------------------------

The regular expressions entered in this section guard against the possibility of a query string attribute containing malicious content. The **Enter Threatening Content Regular Expression**
table lists the Black list
of regular expressions to run to ensure that the header values do not contain threatening content.

For example, to guard against an SQL `DELETE`
attack, you can write a regular expression to identify SQL syntax and add it to this list. The **Threatening Content Regular Expressions**
are listed in a table. *All*
of these expressions are run against *all*
attribute values in the query string. If the expression matches *any*
of the values, the filter fails.

If any regular expressions are configured in [*Configure query string attribute regular expressions* on page 1](#Configur), these expressions are run *before*
the threatening content regular expressions. For example, if you have already configured a regular expression to extract the Base64-decoded attribute value, the threatening content regular expression is run against this value instead of the attribute value stored in the message.

You can add threatening content regular expressions using the **Add**
button. You can edit or remove existing expressions by selecting them in the drop-down list and clicking the **Edit**
or **Delete**
button.

You can enter the regular expressions manually or select them from the global **Black list**
library of threatening content regular expressions. This library is prepopulated with regular expressions that guard against common attack signatures. These include a expressions to guard against common SQL injection style attacks (for example, SQL `INSERT`, SQL `DELETE`, and so on), buffer overflow attacks (content longer than 1024 characters), and the presence of control characters in attribute values (ASCII control character).

Enter or select an appropriate regular expression to restrict the value of the specified query string. You can add a regular expression to the library by selecting the **Add/Edit**
button. Enter a **Name**
for the expression followed by the **Regular Expression**.

</div>

<div>

Regular expression format
-------------------------

This filter uses the regular expression syntax specified by `java.util.regex.Pattern`. For more details, go to:

<http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html>

</div>
