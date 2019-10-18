{
"title": "Copy or modify attributes",
"linkTitle": "Copy or modify attributes",
"date": "2019-10-17",
"description": "The **Copy/Modify Attributes**\\nfilter copies the values of message or user attributes to other message or user attributes. You can also set the value of a message or user attribute to a user-specified value."
}
﻿
<div id="p_utility_attributes_over">

Overview
--------

The **Copy/Modify Attributes**
filter copies the values of message or user attributes to other message or user attributes. You can also set the value of a message or user attribute to a user-specified value.

See also [*Remove attribute* on page 1](utility_remove_attribute.htm).

</div>

<div id="p_utility_attributes_conf">

Configuration
-------------

The table lists the configured attribute-copying rules. To add a new rule, click **Add** and enter values in the dialog to copy a message or user attribute to a different message or user attribute. The **From attribute**
represents the source attribute, while the **To attribute**
represents the destination attribute.

### From attribute settings

The attribute value can be copied from one of the following sources:

-   **Message**:\
    Select this option to copy the value of a message attribute. Enter the name of the source attribute in the **Name**
    field.
-   **User**:\
    Select this option to copy a user attribute stored in the `attribute.lookup.list`. Enter the name (and namespace if the attribute was extracted from a SAML attribute assertion) of the user attribute in the **Name**
    and **Namespace**
    fields.
-   If there are multiple values stored in the `attribute.lookup.list`
    for the attribute entered in the **Name**
    field, only the first value is copied.
-   **User entered value**:\
    Select this option to copy a user-specified value to an attribute. Enter the new attribute value in the **Value**
    field. You can enter a selector to represent the value of a message attribute instead of entering a specific value directly (for example, `${authentication.subject.id}`). In this case the value of the `authentication.subject.id`
    attribute is copied to the named attribute.

### To attribute settings

The message can be copied to one of the following types of attributes:

-   **Message**:\
    The attribute can be copied to any message attribute. Enter the name of the attribute in the **Name**
    field.
-   **User**:\
    Select this option if the attribute or value should be copied to a user attribute stored in the `attribute.lookup.list`. Specify the name and namespace (if necessary) of this attribute in the **Name**
    and **Namespace**
    fields.
-   If there are multiple values stored in the `attribute.lookup.list`
    for the attribute entered in the **Name**
    field of the **From attribute**
    section, the attribute value is copied to the first occurrence of the attribute name in list.

Select **Create list attribute**
if the new attribute can contain several items.

</div>
