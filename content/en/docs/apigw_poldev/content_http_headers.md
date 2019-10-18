{
"title": "HTTP header validation",
"linkTitle": "HTTP header validation",
"date": "2019-10-17",
"description": "The API Gateway can check HTTP header values for threatening content. This ensures that only properly configured name-value pairs appear in the HTTP request headers. *Regular expressions*\\n are used to test HTTP header values. This enables you to make decisions on what to do with the message (for example, if the HTTP header value is `X`, route to service `X`)."
}
﻿
<div id="p_content_http_headers_overview">

Overview
--------

The API Gateway can check HTTP header values for threatening content. This ensures that only properly configured name-value pairs appear in the HTTP request headers. *Regular expressions*
are used to test HTTP header values. This enables you to make decisions on what to do with the message (for example, if the HTTP header value is `X`, route to service `X`).

You can configure the following sections on the **Validate HTTP Headers**
window:

-   **Enter Regular Expression**:\
    HTTP header values can be checked using regular expressions. You can select regular expressions from the global library (**White list**) or enter them manually. For example, if you know that an HTTP header must have a value of `ABCD`, a regular expression of `^ABCD$`
    is an exact match test.
-   **Enter Threatening Content Regular Expression**:\
    You can select threatening content regular expressions from the global library
    (**Black list**) to run against all HTTP headers in the message. These regular expressions identify common attack signatures (for example, SQL injection attacks).

You can configure the global **White list**
and **Black list**
libraries of regular expressions under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree.

</div>

<div id="p_content_http_headers_header_expressions">

Configure HTTP header regular expressions
-----------------------------------------

The **Enter Regular Expression**
table displays the list of configured HTTP header names together with the White list
of regular expressions that restrict their values. For this filter to run successfully, *all*
required headers must be present in the request, and *all*
must have values matching the configured regular expressions.

The **Name**
column shows the name of the HTTP header. The **Regular Expression**
column shows the name of the regular expression that the API Gateway uses to restrict the value of the named HTTP header. A number of common regular expressions are available from the global **White list**
library.

### Configure a regular expression\

You can configure regular expressions by selecting the **Add**, **Edit**, and **Delete**
buttons. The **Configure Regular Expression**
dialog enables you to add or edit regular expressions to restrict the values of HTTP headers. To configure a regular expression, perform the following steps:

1.  Enter the name of the HTTP header in the **Name**
    field.
2.  Select whether this header is **Optional**
    or **Required**
    using the appropriate radio button. If it is **Required**
    , the header *must*
    be present in the request. If the header is not present, the filter fails. If it is **Optional**, the header does not need to be present for the filter to pass.
3.  You can enter the regular expression to restrict the value of the HTTP header manually or select it from the global **White list**
    library of regular expressions in the **Expression Name**
    drop-down list. A number of common regular expressions are provided (for example, alphanumeric values, dates, and email addresses).\
    You can use selectors representing the values of message attributes to compare the value of an HTTP header with the value contained in a message attribute. Enter the `$`
    character in the **Regular Expression**
    field to view a list of available attributes. At runtime, the selector is expanded to the corresponding attribute value, and compared to the HTTP header value that you want to check. For more details on selectors, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
4.  You can add a regular expression to the library by selecting the **Add/Edit**
    button. Enter a **Name**
    for the expression followed by the **Regular Expression**.

### Advanced settings\

The **Advanced**
section enables you to extract a portion of the header value which is run against the regular expression. The extracted substring can be Base64 decoded if necessary. This section is specifically aimed towards HTTP Basic authentication headers, which consist of the `Basic `prefix (with a trailing space), followed by the Base64-encoded user name and password. The following is an example of the HTTP Basic authentication header:

    Authorization:Basic dXNlcjp1c2Vy

The Base64-encoded portion of the header value is what you are interested in running the regular expression against. You can extract this by specifying the string that occurs directly before the substring you want to extract, together with the string that occurs directly after the substring.

To extract the Base64-encoded section of the `Authorization`
header above, enter `Basic `(with a trailing space) in the **Start substring**
field, and leave the **End substring**
field blank to extract the entire remainder of the header value.

{{< alert title="Note" color="primary" >}}You must select the start and end substrings to ensure that the exact substring is extracted. For example, in the HTTP Basic example above, you should enter `Basic `(with a trailing space) in the **Start substring**
field, and *not*` Basic`
(with no trailing space).{{< /alert >}}
By specifying the correct substrings, you are left with the Base64-encoded header value (`dXNlcjp1c2Vy`). However, you still need to Base64 decode it before you can run a regular expression on it. Make sure to select the **Base64 decode**
check box. The Base64-decoded header value is `user:user`, which conforms to the standard format of the `Authorization`
HTTP header. This is the value that you need to run the regular expression against.

The following example shows an example of an HTTP Digest authentication header:

    Authorization: Digest username="user", realm="axway.com", qop="auth",
    algorithm="MD5", uri="/editor", nonce="Id-00000109924ff10b-0000000000000091",
    nc="1", cnonce="ae122a8b549af2f0915de868abff55bacd7757ca",
    response="29224d8f870a62ce4acc48033c9f6863"

You can extract single values from the header value. For example, to extract the `realm`
field, enter `realm="`
(including the `"`
character), in the **Start substring**
field and `"`
in the **End substring**
field. This leaves you with `axway.com`
to run the regular expression against. In this case, there is no need to Base64 decode the extracted substring.

{{< alert title="Note" color="primary" >}}If both **Start substring**
and **End substring**
fields are blank, the regular expression is run against the entire header value. Furthermore, if both fields are blank and the **Base64 decode**
check box is selected, the entire header value is Base64 encoded before the regular expression is run against it.{{< /alert >}}
While the above examples deal specifically with the HTTP authentication headers, the interface is generic enough to enable you to extract a substring from other header values.

</div>

<div id="p_content_http_headers_threat_content">

Configure threatening content regular expressions
-------------------------------------------------

The regular expressions entered in this section guard against the possibility of an HTTP header containing malicious content. The **Enter Threatening Content Regular Expression**
table lists the Black list
of regular expressions to run to ensure that the header values do not contain threatening content.

For example, to guard against an SQL `DELETE`
attack, you can write a regular expression to identify SQL syntax and add it to this list. The **Threatening Content Regular Expressions**
are listed in a table. *All*
of these expressions are run against *all*
HTTP header values in an incoming request. If the expression matches *any*
of the values, the filter fails.

{{< alert title="Note" color="primary" >}}If any regular expressions are configured in [*Configure HTTP header regular expressions* on page 1](#Configur), these expressions are run *before*
the threatening content regular expressions. For example, if you have already configured a regular expression to extract the Base64-decoded attribute value, the threatening content regular expression is run against this value instead of the attribute value stored in the message.{{< /alert >}}
You can add threatening content regular expressions using the **Add**
button. You can edit or remove existing expressions by selecting them in the drop-down list, and clicking the **Edit**
or **Delete**
button.

You can enter the regular expressions manually or select them from the global **Black list**
library of threatening content regular expressions. This library is prepopulated with a number of regular expressions that scan for common attack signatures. These include expressions to guard against common SQL injection-style attacks (for example, SQL `INSERT`, SQL `DELETE`, and so on), buffer overflow attacks (content longer than 1024 characters), and the presence of control characters in attribute values (ASCII control characters).

Enter or select an appropriate regular expression to restrict the value of the specified HTTP header. You can add a regular expression to the library by selecting the **Add/Edit**
button. Enter a **Name**
for the expression followed by the **Regular Expression**.

</div>

<div>

Regular expression format
-------------------------

This filter uses the regular expression syntax specified by `java.util.regex.Pattern`. For more details, go to:

<http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html>

</div>
