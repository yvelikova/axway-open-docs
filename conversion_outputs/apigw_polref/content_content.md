{
"title": "Content validation",
"linkTitle": "Content validation",
"date": "2019-10-17",
"description": "The API Gateway can examine the contents of an XML message to ensure that it meets certain criteria. It uses boolean XPath expressions to evaluate whether or not a specific element or attribute contains a certain value."
}
﻿
<div id="p_content_content_overview">

Overview
--------

The API Gateway can examine the contents of an XML message to ensure that it meets certain criteria. It uses boolean XPath expressions to evaluate whether or not a specific element or attribute contains a certain value.

For example, you can configure XPath expressions to make sure the value of an element matches a certain string, to check the value of an attribute is greater (or less) than a specific number, or that an element occurs a fixed amount of times within an XML body.

There are two ways to configure XPath expressions in a **Content Validation** filter:

-   [*Manual XPath configuration* on page 1](#Manual)
-   [*XPath wizard* on page 1](#XPath)

</div>

<div id="p_content_content_manual">

Manual XPath configuration
--------------------------

To manually configure an XPath expression:

1.  On the Content Validation dialog, click the **Add**
    button next to the **XPath Expression** field. Alternatively, you can select a previously configured XPath expression from the list.
2.  In the XPath Expression dialog, enter a name for the expression in the **Name** field, and enter the expression in the **XPath Expression** field.
3.  To resolve any prefixes within the XPath expression, enter the namespace mappings in the table.

For some example XPath expressions, see
[Configure XPath expressions](/csh?context=640&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_content_content_wizard">

XPath wizard
------------

The XPath wizard assists you with creating valid XPath expressions. For more information, see
[Configure XPath expressions](/csh?context=640&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
