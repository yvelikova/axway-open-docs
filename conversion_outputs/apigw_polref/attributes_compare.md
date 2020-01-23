{
"title": "Compare attribute",
"linkTitle": "Compare attribute",
"date": "2019-10-17",
"description": "The **Compare Attribute**\\nfilter enables you to compare the value of a specified message attribute on the API Gateway white board with the values specified in the filter. For example, the following filter only passes if the `${authentication.subject.id}`\\nmessage attribute has a value of `penelope`:"
}
﻿
<div id="p_attributes_compare_overview">

Overview
--------

<div id="p_attributes_compare_overview">

The **Compare Attribute**
filter enables you to compare the value of a specified message attribute on the API Gateway white board with the values specified in the filter. For example, the following filter only passes if the `${authentication.subject.id}`
message attribute has a value of `penelope`:

![Compare Attribute Filter](/Images/docbook/images/attr/compare_attributes.png)

</div>

<div id="p_attributes_compare_conf">

Configuration
-------------

Configure the following fields:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Filter will pass if**:\
Select **all**
or **one**
of the specified conditions to apply. Defaults to **all**. Click the **Add**
button at the bottom right to specify a rule condition. In the **Attribute filter rule**
dialog, perform the following steps:

1.  Enter a message attribute selector in the **Value from**
    text box on the left (for example, `${http.request.verb}`
    or `${my.customer.attribute}`).
2.  Select one of the following rule conditions from the list:
    -   `contains`
    -   `doesn't contain`
    -   `doesn't match regular expression`
    -   `ends with`
    -   `is`
    -   `is not`
    -   `matches regular expression`
    -   `starts with`

    >
3.  Enter a value to compare with in the text box on the right (for example, `POST`). Alternatively, you can enter a selector that is expanded at runtime (for example, `${http.request.uri}`). For more details on selectors, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
4.  Click **OK**.

Finally, to edit or delete an existing rule condition, select it in the table, and click the appropriate button.

</div>

</div>

<div id="p_attributes_compare_conf">

</div>
