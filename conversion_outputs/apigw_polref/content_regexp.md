{
"title": "Regular Expression Configuration",
"linkTitle": "Regular Expression Configuration",
"date": "2019-10-17",
"description": "*Regular expressions*\\nare strings (or patterns) that match a set\\nof strings or patterns. For example, you can to write regular expressions that match all email addresses, alphabetic characters only, or even IP addresses."
}
<div id="p_content_regexp_overview">

Overview
--------

*Regular expressions*
are strings (or patterns) that match a set
of strings or patterns. For example, you can to write regular expressions that match all email addresses, alphabetic characters only, or even IP addresses.

For example, the API Gateway can use regular expressions to ensure that HTTP header values and query string attributes conform to configured patterns. For example, you can configure a regular expression to make sure that the value of a `User`
HTTP header or a `User`
query string attribute is a valid email address. The following examples show how the regular expression can be applied to both cases:

**HTTP Header**
:\

    POST /services/getEmployee HTTP/1.1Content-Type:text.htmlUser:user@MadCap:variable name="api_gateway_variables.lc_company"/>.com

**Query String**
:\

    http://hostname.com/services/getEmployee?User=user@MadCap:variable name="api_gateway_variables.lc_company"/>.com

The following regular expression can be used to ensure that both the header and attribute values conform to the standard email format:

    \b[a-zA-Z0-9._%-]+@[a-zA-Z0-9._%-]+\.[a-zA-Z]{2,4}\b

For more details on how to configure regular expressions for the respective request parameters, see the appropriate topic:

-   [XXX](content_querystring.htm)

-   [XXX](content_http_headers.htm)

</div>
