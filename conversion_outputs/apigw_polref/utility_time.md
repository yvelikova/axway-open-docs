{
"title": "Time filter",
"linkTitle": "Time filter",
"date": "2019-10-17",
"description": "The **Time**\\nfilter enables you to block or allow messages on a specified time of day, or day of week, or both. You can input the time of day directly in the **Time**\\nfilter window, or configure message attributes to supply this information using the Java `SimpleDateFormat`, or specify a cron expression."
}
﻿
<div id="p_utility_time_overview">

Overview
--------

The **Time**
filter enables you to block or allow messages on a specified time of day, or day of week, or both. You can input the time of day directly in the **Time**
filter window, or configure message attributes to supply this information using the Java `SimpleDateFormat`, or specify a cron expression.

You can use the **Time**
filter in any policy (for example, to block messages at specified times when a web service is not available, or has not been subscribed for by a consumer). In this way, this filter enables you to meter the availability of a web service and to enforce Service Level Agreements (SLAs).

</div>

<div id="p_utility_time_conf_general">

General settings
----------------

Configure the following general options:

**Name**:\
Enter an appropriate name for this filter.

**Block Messages**:\
Select this option to use this filter to block messages. This is the default option.

**Allow Messages**:\
Select this option to use this filter to allow messages.

</div>

<div id="p_utility_time_conf_basic">

Basic time settings
-------------------

Select **Basic**
to block or allow messages at specified times of the day. This is the default option. You can configure following settings:

**User defined time**:\
Select this option to input the times to block or allow messages directly in this screen. This is the default option. Configure the following settings:

|          |                                                                                                             |
|----------|-------------------------------------------------------------------------------------------------------------|
| **From** | The time to start blocking or allowing messages from in hours, minutes, and seconds. Defaults to `9:00:00`. |
| **To**   | The time to end blocking or allowing messages in hours, minutes, and seconds. Defaults to `17:00:00`.       |

**Time from attribute**:\
Select this option to specify times to block or allow messages using configured message attributes. You can specify these attributes using selectors, which are replaced at runtime with the values of the specified message attributes set in previous filters or messages. For more details, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
. You must configure the following settings:

|             |                                                                                                                                                                                                         |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **From**    | Message attribute that contains the time to start blocking or allowing messages from (for example, `$(message.starttime)`). Defaults to a time of `9:00:00`.                                            |
| **To**      | Message attribute that contains the time to end blocking or allowing messages (for example, `$(message.endtime)`). Defaults to a time of `17:00:00`.                                                    |
| **Pattern** | Message attribute that contains the time format based on the Java `SimpleDateFormat`                                                                                                                    
  class (for example,`$(message.pattern)`). This enables you to format and parse dates in a locale-sensitive manner. Day, month, years, and milliseconds are ignored. Defaults to a format of `HH:mm:ss`.  |

**Days**:\
To block or allow messages on specific days of the week, select the check boxes for those days. For example, to block messages on Saturday and Sunday only.

</div>

<div id="p_utility_time_conf_advanced">

Advanced time settings
----------------------

Select **Advanced**
to block or allow messages at specified times based on a cron expression. Configure the following setting:

**Cron Expression**:\
Enter a cron expression or a message attribute that contains a cron expression in this field. Alternatively, click the browse button next to this field to select a preconfigured cron expression or to create and test a new cron expression. For more details, see
[Configure cron expressions](/csh?context=607&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

For example, the following cron expression blocks all messages received on April 27 and 28 2012, at any time except those received between 10:00:01 and 10:59:59.

    * * 0-9,11-23 27-28 APR ? 2012

The default value is `* * 9-17 * * ? *`, which specifies a time of 9:00:00 to 17:00:00 every day.

</div>
