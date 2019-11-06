{
"title": "Validate selector expression",
"linkTitle": "Validate selector expression",
"date": "2019-10-17",
"description": "The **Validate Selector Expression**\\nfilter can use regular expressions to check values specified in selectors (for example, message attributes, Key Property Store, or environment variables). This enables you to make decisions on what to do with the message at runtime. Filters configured in a policy before the **Validate Selector Expression**\\nfilter can generate message attributes and store them in the message. "
}
﻿
<div id="p_content_attributes_overview">

Overview
--------

The **Validate Selector Expression**
filter can use regular expressions to check values specified in selectors (for example, message attributes, Key Property Store, or environment variables). This enables you to make decisions on what to do with the message at runtime. Filters configured in a policy before the **Validate Selector Expression**
filter can generate message attributes and store them in the message.

For example, you could use the **Validate Selector Expression**
filter to specify that if the attribute value is `X`, route the message to service `X`. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

You can configure the following sections on the **Validate Selector Expression**
window:

-   **Enter Regular Expression**:\
    You can configure selectors that are checked against a regular expression from the global library (**White list**), or against a manually configured expression. This check ensures that the value of the selector is acceptable. For example, if you know that a message attribute-based selector named `${my.test.attribute}`
    must have a value of `ABCD`, a regular expression of `^ABCD$`
    is an exact match test.
-   **Enter Threatening Content Regular Expression**:\
    You can select threatening content regular expressions from the global library (**Black list**)
    to run against each configured selector. These regular expressions identify common attack signatures (for example, SQL injection attacks, ASCII control characters, XML entity expansion attacks, and so on).

You can configure the global **White list**
and **Black list**
libraries of regular expressions under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree.

</div>

<div id="p_content_attributes_attr_expressions">

Configure selector-based regular expressions
--------------------------------------------

The **Enter Regular Expression**
table displays the list of configured selectors, together with the White list
of regular expressions that restrict their values. For this filter to run successfully, *all*
configured selector checks must have values matching the configured regular expressions.

The **Selector**
column shows the name configured for the selector. The **Regular Expression**
column shows the name of the regular expression that the API Gateway uses to restrict the value of the named selector. A number of common regular expressions are available from the global **White list**
library.

<div>

### Configure a regular expression

You can configure regular expressions by clicking **Add**, **Edit**, or **Delete**. The **Configure Regular Expression**
dialog enables you to add or edit regular expressions to restrict the values of message attributes. To configure a regular expression, perform the following steps:

1.  Enter the selector in the **Selector Expression**
    field (for example, `${my.test.attribute}`).
2.  Select whether this attribute is **Optional**
    or **Required**. If it is **Required**
    , the attribute *must*
    be present in the request. If the attribute is not present, the filter fails. If it is **Optional**, the attribute does not need to be present for the filter to pass.
3.  You can enter the regular expression to restrict the value of the attribute manually or select it from the global **White list**
    library of regular expressions in the **Expression Name**
    drop-down list. A number of common regular expressions are provided (for example, alphanumeric values, dates, and email addresses).
4.  You can add a regular expression to the library by selecting the **Add/Edit**
    button. Enter a **Name**
    for the expression followed by the **Regular Expression**
    .

The **Advanced**
section enables you to extract a portion of the attribute value that is run against the selector. The extracted substring can also be Base64 decoded if necessary.

</div>

</div>

<div id="p_content_attributes_threat_content">

Configure threatening content regular expressions
-------------------------------------------------

The regular expressions entered in this section guard against message attributes containing malicious content. The **Enter Threatening Content Regular Expression**
table lists the Black list
of regular expressions that are run against all message attributes.

For example, to guard against a SQL `DELETE`
attack, you can write a regular expression to identify SQL syntax and add to this list. The **Threatening Content Regular Expressions**
are listed in a table. *All*
of these expressions are run against *all*
message attributes configured in the **Regular Expression**
table above. If the expression matches *any*
attribute values, the filter fails.

{{< alert title="Note" color="primary" >}}If any regular expressions are configured in [*Configure selector-based regular expressions* on page 1](#Configur), these expressions are run *before*
the threatening content regular expressions. For example, if you have already configured a regular expression to extract the Base64-decoded attribute value, the threatening content regular expression is run against this value instead of the attribute value stored in the message.{{< /alert >}}
Click **Add**
to add threatening content regular expressions. You can edit or remove existing expressions by selecting them in the list, and clicking **Edit**
or **Delete**. You can enter regular expressions manually or select them from the global **Black list**
library of threatening content regular expressions.

This library is prepopulated with regular expressions that scan for common attack signatures. These include expressions to guard against common SQL injection-style attacks (for example, SQL `INSERT`, SQL `DELETE`, and so on), buffer overflow attacks (content longer than 1024 characters), and ASCII control characters in attribute values.

Enter or select an appropriate regular expression to scan all message attributes for threatening content. You can add a regular expression to the library by selecting **Add**
or **Edit**. Enter a **Name**
for the expression followed by the **Regular Expression**.

</div>
