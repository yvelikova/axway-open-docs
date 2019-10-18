{
"title": "Transaction audit log settings",
"linkTitle": "Transaction audit log settings",
"date": "2019-10-14",
"description": "One of the most important features of a server-based product is its ability to maintain highly detailed and configurable logging. It is crucial that a record of each and every transaction is kept, and that these records can easily be queried by an administrator to carry out detailed transaction analysis. In recognition of this requirement, the API Gateway provides detailed logging to a number of possible locations. "
}
﻿

One of the most important features of a server-based product is its ability to maintain highly detailed and configurable logging. It is crucial that a record of each and every transaction is kept, and that these records can easily be queried by an administrator to carry out detailed transaction analysis. In recognition of this requirement, the API Gateway provides detailed logging to a number of possible locations.

You can configure the API Gateway so that it logs information about all requests. Such information includes the request itself, the time of the request, where the request was routed to, and the response that was returned to the client. The logging information can be written to the console, log file, local/remote syslog, and/or a database, depending on what is configured in the logging settings.

The API Gateway can also digitally sign the logging information it sends to the log files and the database. This means that the logging information can not be altered after it has been signed, thus enabling an irreversible audit trail to be created.

{{< alert title="Caution" color="warning" >}}The transaction audit log includes the complete contents of HTTP requests, including HTTP headers, body, and attachments. This may include sensitive information. You must ensure that appropriate safeguards are in place to protect this information in the different audit log locations.{{< /alert >}}

Configure log output
--------------------

To edit the default API Gateway logging settings in the Policy Studio tree, select the **Server Settings**
node, and click **Logging > Transaction Audit Log**.

You can configure the API Gateway to log to the following locations described in this topic.

### Log to Text File

To configure the API Gateway to log in text format to a file, click the **Text File**
tab, and select **Enable logging to file**. You can configure the following fields:

**File Name**:\
Enter the name of the text-based file that the API Gateway logs to. The default is `transactionLog`.

**File Extension**:\
Enter the file extension of the log file. Defaults to `.log`.

**Directory**:\
Enter the directory of the log file in this field. By default, all log files are stored in the `/logs/transaction`
directory of your API Gateway installation.

**File Size (MB)**:\
Enter the maximum size that the log file grows to. When the file reaches the specified limit, a new log file is created. By default, the maximum file size is 1000 MB.

**Roll Log Daily**:\
Specify whether to roll over the log file at the start of each day. This is enabled by default.

**Number of Files**:\
Specify the number of log files that are stored. The default number is 20.

**Format**:\
You can specify the format of the logging output using the values entered here. You can use selectors to output logging information that is specific to the request. The default logging format is as follows:

``` {space="preserve"}
${level} ${timestamp} ${id} ${text} ${filterType} ${filterName}
```

1.  The available logging properties are described as follows:
    -   **`level`**: The log level (`fatal`
        , `fail`
        , `success`).
    -   **`timestamp`**: The time that the message was processed in user-readable form. For more details, see **Date format** in [*General settings* on page 1](../CommonTopics/general_settings.htm).
    -   **`id`**: The unique transaction ID assigned to the message.
    -   **`text`**: The text of the log message that was configured in the filter itself. In the case of the **Log Message Payload**
        filter, the `${payload}`
        selector contains the message that was sent by the client.
    -   **`filterName`**: The name of the filter that generated the log message.
    -   **`filterType`**: The type of the filter that logged the message.
    -   **`ip`**: The IP address of the client that sent the request.

    >
2.  **Signing Key**:\
    To sign the log file, select a **Signing Key**
    from the Certificates Store that is used in the signing process. By signing the log files, you can verify their integrity at a later stage.

To confirm updates to these settings, click **Save**
at the bottom right of the screen.

### Log to XML File

To configure the API Gateway to log to an XML file, click the **XML File**
tab, and select **Enable logging to XML file**. The log entries are written as the values of XML elements in this file. You can view historical XML log files (not the current file) as HTML for convenience by opening the XML file in your default browser. The `/logs/xsl/MessageLog.xsl`
stylesheet is used to render the XML log entries in a more user-friendly HTML format.

You can configure the following fields on the **XML File**
tab:

-   **File Name**:\
    Enter the name of the text-based file that the API Gateway logs to. By default, the log file is called `axway`.
-   **File Extension**:\
    Enter the file extension of the log file in this field. By default, the log file is given the `.log`
    extension.
-   **Directory**:\
    Enter the directory of the log file in this field. By default, all log files are stored in the `/logs/transaction`
    directory of your API Gateway installation.
-   **File Size**:\
    Enter the maximum size that the log file grows to. When the file reaches the specified limit, a new log file is created.By default, the maximum file size is 1000 kilobytes.
-   **Roll Log Daily**:\
    Specify whether to roll over the log file at the start of each day. This is enabled by default.
-   **Number of Files**:\
    Specify the number of log files that are persisted. The default number is 20.
-   **Signing Key**:\
    To sign the log file, select a **Signing Key**
    from the Certificates Store that will be used in the signing process. By signing the log files, you can verify their integrity at a later stage.

### Log to Database

Using this option, you can configure the API Gateway to log messages to an Oracle, SQL Server, or MySQL relational database.

{{< alert title="Note" color="primary" >}}Before configuring the API Gateway to log to a database, you must first create the database tables that the API Gateway writes to. For details on setting up tables for supported databases, see the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
.{{< /alert >}}

When you have set up the logging database tables, you can configure the API Gateway to log to the database. Click the **Database**
tab, and select **Enable logging to database**
. You can configure the following fields on the **Database**
tab:

-   **Connection**:\
    Select an existing database from the **Connection**
    drop-down list. To add a database connection, click the **External Connections**
    button on the left, right-click the **Database Connections**
    tree node, and select **Add a Database Connection**. For more details, see the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Signing Key**:\
    You can sign log messages stored in the database to ensure that they are not tampered with. Click **Signing Key**
    to open the list of certificates in the Certificate Store, and select the key to use to sign log messages.

### Log to Local Syslog

To configure the API Gateway to send logging information to the local UNIX syslog, click the **Local Syslog**
tab, and select the **Enable logging to local UNIX Syslog**
checkbox. You can configure the following fields:

-   **Select Syslog server**:\
    Select the local syslog facility that the API Gateway should log to. The default is `LOCAL0`.
-   **Format**:\
    You can specify the format of the log message using the values (including selectors) entered in this field. For details on the properties that are available, see *Log to Text File* on page 1.

### Log to Remote Syslog

To configure the API Gateway to send logging information to a remote syslog, click the **Remote Syslog**
tab, and select the **Enable logging to Remote Syslog**
checkbox. You can configure the following fields:

-   **Syslog Server**:\
    Select a previously configured **Syslog Server**
    from the list.For details on how to configure Syslog Server, see the topic on External Connections in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Format**:\
    You can specify the format of the log message using the values (including properties) entered in this field. For details on the properties that are available, see *Log to Text File* on page 1.

### Log to System Console

To configure the API Gateway to send logging information to the system console, click the **System Console**
tab, and select the **Enable logging to system console**.

For details on how to use the **Format**
field to configure the format of the log message, see *Log to Text File* on page 1.
