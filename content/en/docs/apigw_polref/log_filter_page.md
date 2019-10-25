{
"title": "Set transaction log level and log message",
"linkTitle": "Set transaction log level and log message",
"date": "2019-10-17",
"description": "By default, logging is configured for a service with logging level of failure. You can also configure each filter in a policy to log its own message depending on whether it succeeds, fails, and/or throws an exception. Log messages can be stored in several locations, including a database, a file, or the system console. "
}
﻿
<div id="p_log_filter_page_over">

Overview
--------

By default, logging is configured for a service with logging level of failure. You can also configure each filter in a policy to log its own message depending on whether it succeeds, fails, and/or throws an exception. Log messages can be stored in several locations, including a database, a file, or the system console.

Logging levels apply to the following cases:

-   A filter succeeds if it returns a true result after carrying out its processing. For example, if an LDAP directory returns an `authorized`
    result to an authorization filter, the filter succeeds.
-   A filter fails if it returns a false result after performing its processing. For example, an authorization filter returns false if an LDAP directory returns a `not authorized`
    result to the filter.
-   A filter aborts when it cannot make the decision it is configured to make. For example, if an LDAP-based authorization filter cannot connect to the LDAP directory, it aborts because it can neither authorize nor refuse access. This is regarded as a *fatal*
    error.

For more details on configuring logging destinations, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

See also [*Log message payload* on page 1](log_filter.htm).

</div>

<div id="p_log_filter_page_conf">

Configuration
-------------

You can access the **Transaction Log Level and Message**
window by clicking **Next**
on the main window of any filter. This window includes the following fields:

**Logging Level**:\
Configure one of the following options:

|                                            |                                                                                                                                                                       |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Use Service Level Settings**             | This option is selected by default. Logging is configured for the Web service with logging level of **Failure**.                                                      |
| **Override Logging Level for this Filter** | Alternatively, select this option to configure log messages for this filter when it succeeds, fails, and/or aborts. Select **Success**, **Failure**, and/or **Fatal** 
  to configure this filter to log at the respective levels.                                                                                                              |

**Log Messages**:\
Default log message values are provided at each level for all filters. When you select the checkbox for a particular level, the default log message for that level is used. You can specify an alternative log message by entering the message in the text field provided.

All filters *require*
and *generate*
message attributes, while some *consume*
attributes. In some cases, it may be useful to log the value of these attributes. For example, instead of an authentication filter logging a generic `Authentication Failed`
message, you can use the value of the `authentication.subject.id`
attribute to log the ID of the user that could not be authenticated.

Use the following format to enter a message attribute selector in a log message:

``` {space="preserve"}
${name_of_attribute}
```

At runtime, the API Gateway expands these selectors to the value of the message attribute. For example, to make sure the ID of a non-authenticated user is logged in the message, enter something like the following in the text field for the **Failure**
case:

``` {space="preserve"}
The user '${authentication.subject.id}' could not be authenticated.
```

Then if a user with ID `MadCap:variable name="api_gateway_variables.lc_company"/>`
cannot be authenticated by the API Gateway (a failure case), the following message is logged:

``` {space="preserve"}
The user 'axway' could not be authenticated.
```

For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Transaction Logging Behavior**:\
This setting is relevant only in cases where you have configured the API Gateway to log audit trail messages to a database. For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

You can select **Abort policy processing on database log error**
if you have configured the API Gateway to write log messages to a database, but that database is not available at runtime. If you have selected this setting, and the database is not available, the filter aborts, which in turn causes the policy to abort. In this case, the Fault Handler for the policy is invoked.

**Filter Category**:\
The category selected here identifies the category of filters to which this filter belongs. The default selection should be appropriate in most cases.

</div>
