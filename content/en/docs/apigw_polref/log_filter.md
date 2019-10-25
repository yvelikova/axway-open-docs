{
"title": "Log message payload",
"linkTitle": "Log message payload",
"date": "2019-10-17",
"description": "The **Log Message Payload**\\nfilter is used to log the message payload at any point in the policy. The message payload includes the HTTP headers and MIME attachments."
}
﻿
<div id="p_log_filter_overview">

Overview
--------

The **Log Message Payload**
filter is used to log the message payload at any point in the policy. The message payload includes the HTTP headers and MIME attachments.

By placing the **Log Message Payload**
filter at various key locations in the policy, a complete audit trail of the message can be achieved. For example, by placing the filter after each filter in the policy, the complete history of the message can be logged. This is especially useful in cases where the message has been altered by the API Gateway (for example, by signing or encrypting the message, inserting security tokens, or by converting the message to another grammar using XSLT).

Log messages can be stored in several locations, including a database, a file, or the system console. For more details on configuring logging destinations,
see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

See also [*Set transaction log level and log message* on page 1](log_filter_page.htm).

</div>

<div id="p_log_filter_conf">

Configuration
-------------

Enter an appropriate name for the **Log Message Payload**
filter in the **Name**
field. It is good practice to use descriptive names for these filters. For example, **Log message before signing message**
and **Log message after signing**
would be useful names to give to two **Log Message Payload**
filters that are placed before and after a **Sign Message**
filter.

By default, the **Log Message Payload**
filter writes entries to the log file in the following format:

``` {space="preserve"}
${timestamp} ${id} ${filterName} ${payload}
```

However, you can alter the format of the logging output using the values entered in the **Format**
field. You can use selectors to output logging information that is specific to the request. You can specify the following properties:

-   **`level`**:\
    The log level (i.e. fatal, fail, success).
-   **`id`**:\
    The unique transaction ID assigned to the message.
-   **`ip`**:\
    The IP address of the client that sent the request.
-   **`timestamp`**:\
    The time that the message was processed in user-readable form.
-   **`filterName`**:\
    The name of the filter that generated the log message.
-   **`filterType`**:\
    The type of the filter that logged the message.
-   **`text`**:\
    The text of the log message that was configured in the filter itself.
-   **`payload`**:\
    The complete contents of the HTTP request, including HTTP headers, body, and attachments.

</div>
