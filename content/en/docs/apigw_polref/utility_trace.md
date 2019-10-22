{
"title": "Trace filter",
"linkTitle": "Trace filter",
"date": "2019-10-17",
"description": "The **Trace**\\nfilter outputs the current message attributes to the configured trace destinations. By default, output is traced to the system console."
}
﻿

The **Trace**
filter outputs the current message attributes to the configured trace destinations. By default, output is traced to the system console.

For more details on API Gateway tracing, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

Configuration
-------------

Configure the following settings:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Include the following text in trace**:\
Enter an optional custom text message to include in the trace output.

**Trace Level**:\
Select the trace level. `DATA`
is the most verbose level, while `FATAL`
is the least verbose.

**Include Attributes**:\
Select this option to trace all current message attributes to the configured trace destination.

**Include Body**:\
Select this option to trace the entire message body.

**Indent XML**:\
If this option is selected, the XML message is pretty-printed (indented) before it is output to the trace destination.
