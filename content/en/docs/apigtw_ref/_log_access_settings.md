{
"title": "Transaction access log settings",
"linkTitle": "Transaction access log settings",
"date": "2019-10-14",
"description": "The access log records a summary of the request and response messages that pass through the API Gateway. By default, the API Gateway records this in the `access.log`\\nfile in the `log`\\ndirectory. This file rolls over with a version number added for each new version of the file (for example, `access.log.0`, `access.log.1`, and so on)."
}
﻿

The access log records a summary of the request and response messages that pass through the API Gateway. By default, the API Gateway records this in the `access.log`
file in the `log` directory. This file rolls over with a version number added for each new version of the file (for example, `access.log.0`, `access.log.1`, and so on).

The transaction access log file format is based on that used by Apache HTTP Server. This means that the log file can be consumed by third-party Web analytics tools such as Webtrends to generate charts and statistics.

### Access log format

The syntax used to specify the access log file is based on the syntax of available patterns used by the access log files in Apache HTTP Server. For example, the default pattern used by API Gateway is as follows:

```
%h %l %u %t "%r" %s %b
```

The log format strings in this example are explained in [*Supported log format strings* on page 1](#Supporte).

The following extract from the `access.log` file illustrates the log format resulting from the default access log patern:

```
s1.axway.com - lisa [09/05/2012:18:24:48 00] "POST / HTTP/1.0" 200 429 
s2.axway.com - dave [09/05/2012:18:25:26 00] "POST / HTTP/1.0" 200 727 
s3.axway.com - fred [09/05/2012:18:27:12 00] "POST / HTTP/1.0" 200 596 
................
................
```

### Supported log format strings

API Gateway supports the following subset of the Apache HTTP Server log format strings:

| Log format string | Description                                                                |
|-------------------|----------------------------------------------------------------------------|
| **`%a`**          | Remote IP address.                                                         |
| **`%A`**          | Local IP address.                                                          |
| **`%b`**          | Bytes sent, excluding HTTP headers, in Common Log Format (for example, `-` instead of `0` if no bytes were sent).|
| **`%B`**          | Bytes sent, excluding HTTP headers.                                        |
| **`%D`**          | Time taken to process the request, in milliseconds.                        |
| **`%h`**          | Remote host name.                                                          |
| **`%H`**          | Request protocol.                                                          |
| **`%I`**          | Current request thread name (can compare later with stack traces).         |
| **`%l`**          | Remote logical user name (always `-`).                                    |
| **`%m`**          | Request method.                                                            |
| **`%p`**          | Local port.                                                                |
| **`%q`**          | Query string (prepended with `?` if it exists, otherwise an empty string). |
| **`%r`**          | First line of the request that originated at the client.                   |
| **`%s`**          | HTTP status code returned to the client in the response.                   |
| **`%t`**          | Date and time of the request in Common Log Format.                         |
| **`%{format}t`**  | Date and time, in any format supported by `SimpleDateFormat`.               |
| **`%T`**          | Time taken to process the request, in seconds.                             |
| **`%u`**          | Remote user that was authenticated.                                        |
| **`%U`**          | Requested URL path.                                                        |
| **`%v`**          | Local server name.                                                         |
| **`%{xxx}i`**     | Incoming request header, where `xxx` is the header name.                   |
| **`%{xxx}o`**     | Outgoing request header, where `xxx` is the header name.                    |
| **`%{xxx}c`**     | Cookie value, where `xxx` is the cookie name.                               |
| **`%{xxx}r`**     | API Gateway message attribute, where `xxx` is the attribute name.           |

### Aliases for commonly used patterns

In addition, you can specify one of the following aliases for commonly used patterns:

* **`common`**: `%h %l %u %t "%r" %s %b`
* **`combined`**: `%h %l %u %t "%r" %s %b "%{Referer}i" "%{User-Agent}i"`

For more details on Apache HTTP Server access log formats, see <http://httpd.apache.org/docs/current/logs.html)<http://httpd.apache.org/docs/current/logs.html>.

### Configure the access log

To configure the access log in the Policy Studio tree, select the **Server Settings** node, and click **Logging** >**Transaction Access Log**. To confirm updates to these settings, click **Save** at the bottom right of the window.

You can configure the following fields to enable the server to write an access log to file:

**Writing to Transaction Access Log**:

Select whether to configure the API Gateway instance to start writing event data to the transaction access log. This setting is disabled by default.

**File name**:

Enter the name of the access log file. When the file rolls over (because the maximum file size has been reached, or because the date has changed), a suitable increment is appended to the file name. Defaults to `access`.

**File extension**:

Enter the file extension for the log file. Defaults to `.log`.

**Directory**:

Enter the directory for the access log file. Defaults to the `logs/access` directory of your product installation.

**File size (MB)**:

Specify the maximum size that the log file is allowed reach before it rolls over to a new file. Defaults to `1000` MB.

**Roll log daily**:

Select whether to roll over the log file at the start of each day. This is enabled by default.

**Number of log files**:

Specify the number of log files that are stored. Defaults to `20`.

**Format**:
Enter the access log file format. This is based on the syntax used in Apache HTTP Server access log files, for example:

```
%h %l %u %t "%r" %s %b
```

For more details, see [Supported log format strings](#supported-log-format-strings).

{{< alert title="Note" color="primary" >}}These settings configure the access log at the API Gateway level. You must also configure the access log at the service level on a specific relative path. {{< /alert >}}

For example, in the Policy Studio tree, select the relative path, right-click it in the **Resolvers** pane, and select **Edit**. Then click the **Logging Settings** tab, and select **Include in server access log records**. For more details, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

###  Redact sensitive details from the access log

The default syntax for the access log is as follows:

```
%h %l %u %t "%r" %s %b
```

The `%r` format string results in the entire HTTP request line being added to the access log file, including the query string. For example:

```
127.0.0.1 - - [02/07/2014:12:39:29 00] "POST /healthcheck?name=value HTTP/1.0" 200 19
```

The query string may contain sensitive information (for example, credit card number, or social security number). If you do not wish the query string to be included in the access log, it is recommended that you use the following format instead:

```
%h %l %u %t "%m %U% %H" %s %b
```

For example, this results in the following output instead:

```
127.0.0.1 - - [02/07/2014:12:39:29 00] "POST /healthcheck HTTP/1.0" 200 19
```

The `"%m %U %H"` options log the method, path, and HTTP version. This results in the same output as `%r`, but without the query string.

To confirm updates to these settings, click **Save** at the bottom right of the screen. Click **Deploy** in the toolbar to deploy the updated configuration to the API Gateway.