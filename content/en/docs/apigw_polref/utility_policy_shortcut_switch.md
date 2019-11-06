{
"title": "Switch on attribute value",
"linkTitle": "Switch on attribute value",
"date": "2019-10-17",
"description": "The **Switch on Attribute Value**\\nfilter enables you to switch to a specific policy based on the value of a configured message attribute. You can specify various switch cases (for example, contains, is, ends with, matches regular expression, and so on). Specified switch cases are evaluated in succession until a switch case is found, and the policy specified for that case is executed. You can also specify a default policy, which is executed when none of the switch cases specified in the filter is found. "
}
﻿
<div id="p_utility_policy_shortcut_switch_over">

Overview
--------

The **Switch on Attribute Value**
filter enables you to switch to a specific policy based on the value of a configured message attribute. You can specify various switch cases (for example, contains, is, ends with, matches regular expression, and so on). Specified switch cases are evaluated in succession until a switch case is found, and the policy specified for that case is executed. You can also specify a default policy, which is executed when none of the switch cases specified in the filter is found.

See also [*Policy shortcut* on page 1](utility_policy_shortcut.htm).

</div>

<div id="p_utility_policy_shortcut_switch_conf">

Configuration
-------------

Complete the following configuration settings:

**Name**:\
Enter a meaningful name for the filter to display in a policy. For example, the name might reflect the business logic of a specified switch case.

**Switch on selector expression**:\
Enter or select the name of the message attribute selector to switch on (for example, `${http.request.path}`). This filter examines the specified message attribute value, and switches to the specified policy if this value meets a configured switch case.

**Case**:\
You can add, edit, and delete switch cases by clicking the appropriate button on the right. All configured switch cases are displayed in the table. For more details, see [*Add a switch case* on page 1](#Add).

**Default**:\
This field specifies the default behavior of the filter when none of the specified switch cases are found in the configured message attribute value. Select one of the following options:

|                                                   |                                                                                                                                                                                                                  |
|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Return result of calling the following policy** | Click the browse button, and select a default policy to execute from the dialog (for example, **XML Threat Policy**). The filter returns the result of the specified policy. This option is selected by default. |
| **Return true**                                   | The filter returns true.                                                                                                                                                                                         |
| **Return false**                                  | The filter returns false.                                                                                                                                                                                        |

</div>

<div id="p_utility_policy_shortcut_switch_add">

Add a switch case
-----------------

To add a switch case, click **Add**, and configure the following fields in the dialog:

**Comparison Type**:\
Select the comparison type to perform with the configured message attribute. The available options include the following:

-   `Contains`
-   `Doesn't Contain`
-   `Ends With`
-   `Equals`
-   `Does not Equal`
-   `Matches Regular Expression`
-   `Starts With`

All of these options are case insensitive, except for `Matches Regular Expression`.

**Compare with**:\
Enter the value to compare the configured message attribute value with. For example, if you select a **Comparison Type**
of `Matches Regular Expression`, enter the regular expression in this field.

**Policy**:\
Click the browse button next to the **Policy**
field, and select the policy to execute from the dialog (for example, **Remove All Security Tokens**). You can search for a specific policy by entering its name in the text box, and the policy tree is filtered automatically. The selected policy is executed when this switch case is found.

Click **OK**
when finished. You can click **Add**, and repeat as necessary to add more switch cases to this filter. The switch cases are examined in the order in which they are listed in the table. You can alter the sequence in which the switch cases are evaluated by selecting a policy in the table and clicking the **Up**
and **Down**
buttons on the right.

</div>
