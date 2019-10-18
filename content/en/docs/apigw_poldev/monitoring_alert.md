{
"title": "[]{#\"Configur2\"}Alert",
"linkTitle": "[]{#\"Configur2\"}Alert",
"date": "2019-10-17",
"description": "You can use the \\n**Alert** filter to send system alerts to different alert destinations, for example, when another filter fails, or in API firewalling when ModSecurity detects a threat. For more details on system alerts and alert destinations, see \\n \\n in the \\n \\n \\n ."
}
﻿

You can use the
**Alert** filter to send system alerts to different alert destinations, for example, when another filter fails, or in API firewalling when ModSecurity detects a threat. For more details on system alerts and alert destinations, see
[Configure system alerts](/csh?context=644&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Typically, an **Alert** filter is placed on the failure path of another filter in the policy. In the following example, an alert is configured if a schema validation fails 10 times within a 5000 millisecond period for a specified web service, and the **Alert** filter is placed on the failure path from the **Schema Validation** filter:

![Example of a policy with an alert filter](/Images/docbook/images/log/alert_circuit.gif)

When editing policies, you can drag and drop the **Alert** filter onto the policy canvas from the **Monitoring** category.

General settings
----------------

Configure the following settings on the **Alert** filter window:

-   **Name**: Enter a descriptive name for the filter to display in a policy, especially more complicated policies might have several alert filters so good names make it easier to tell them apart.
-   **Alert Type**: Select the severity level of the alert (**Error**, **Warn**, or **Info**). This option is only relevant for alert destinations that support severity levels, such as the Windows Event Log.

Notifications settings
----------------------

You can configure the alert destination on the **Notifications** tab. The alert destinations you have already configured are nested under the respective alert destination type on the left of the window. You can also use the icons above the alert destination listing to create, edit, or delete alert destinations directly from this window. For more details, see
[Configure alert destinations](/csh?context=643&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

To select an alert destination, follow these steps:

1.  Select an alert destination or all alert destinations of a given alert destination type (for example, all **Email** destinations).
2.  Set the message that is sent to the alert destination:
3.  -   Select **Use the following message**, set the content type, and enter a custom message in the text box.
    -   Select **Use the Default Message**, and go to the **Default Message** tab to write the message you want to send.
    -   Select **Load from file**, set the content type, and browse to the file you want to use (this option is available for email destinations only).

    To register new MIME content types, click the **Registered Types** button.

The following figure shows an example of an email alert destination with a `text/html` custom message.

![Example of email alert destination](/Images/docbook/images/log/alert_filter_example_email.png)

Tracking settings
-----------------

Use the **Tracking** tab to configure how often alerts are sent. Configure the following:

-   **Accumulated number of messages**: Enter how many times this filter can be invoked before the alert is sent. The default value is `1`.
-   **In time period (secs)**: Enter the time period over which the accumulated number of messages can occur before an alert is triggered. The default is `60` seconds.
-   **Track per client**: Select this option to record the accumulated number of messages in the specified time period for each client. This option is selected by default.

Default message
---------------

Enter the default message used for alerts in **Message to send** on the **Default Message** tab.

{{< alert title="Note" color="primary" >}}An alert message is not required for alerts sent to an OPSEC firewall.{{< /alert >}}

You can include message attributes using selectors that API Gateway looks up and expands at runtime. For example, instead of sending a generic alert stating `Authentication Failed`, you can use a message attribute to include the ID of the user whose authentication failed:

``` {space="preserve"}
Authentication failure for user:${authentication.subject.id}.
```

``` {space="preserve"}
${alert.number.failures} authentication failures have occurred in ${alert.time.period} seconds.
```

``` {space="preserve"}
${alert.number.failures} exceptions have occurred in policy ${circuit.name}.
```

``` {space="preserve"}
The last exception was ${circuit.exception} with path ${circuit.path}.
```

You can also use the default message to pass information to other systems. For example, the ModSecurity threat reports in API firewalling are stored in the message attribute `modsec.error.message` in addition to being written to the trace files. You can configure an alert policy to capture the detected threats, and use an Alert filter with a selector for `modsec.error.message` in the default message to send the threat report to third-party monitoring systems.

For more information on selectors, see [](general_selector.htm)[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
