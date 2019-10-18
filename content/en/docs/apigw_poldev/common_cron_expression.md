{
"title": "Configure cron expressions",
"linkTitle": "Configure cron expressions",
"date": "2019-10-17",
"description": "Cron expressions are used in policy execution scheduling, and within several filters (for example, the **Time** utility filter). "
}
﻿
<div id="p_common_cron_expression_overview">

Overview
--------

Cron expressions are used in policy execution scheduling, and within several filters (for example, the **Time** utility filter).

The **Cron Dialog**
enables you to create a cron expression used to trigger regularly occurring events (for example, generate a report, or block or allow messages at specified times). You can use the time tabs in this dialog to guide you through the configuration steps.

Alternatively, enter the cron expression value directly in the text boxes. When you have created the cron expression, you can click the **Test Cron**
button to test the value of the cron expression and see when it is next due to fire.

For background information and details on cron expression syntax, see [*Policy execution scheduling* on page 1](general_cron_schedule.htm).

</div>

<div id="p_common_cron_expression_conf_dialog">

Create a cron expression using the time tabs
--------------------------------------------

Using the time tabs in the dialog to guide you through the configuration steps is the default option. You can create a cron expression to trigger at the specified times using the following settings:

<div>

### Seconds

Select one of the following options:

-   **Every Second of the Minute**
-   Fires every second of the minute. This is the default setting.
-   **Just on Second**
-   Fires only on the specified second of the minute.
-   **Range from Second**
-   Fires over a range of seconds. For example, if the first value is 10 and the second value is 25, the trigger starts firing on second 10 of the minute and continues to fire for 15 seconds.
-   **Start on Second**
-   Fires on the specified second of the minute and repeats every specified number of seconds. For example, if the first number is 15 and the second number is 30, the trigger fires at 15 seconds and repeats every 30 seconds until stopped.
-   **On Multiple Seconds**
-   Fires on the specified seconds of each minute. Enter a comma separated list of seconds (values of `0-59`
    inclusive). For example, `10,20,30`.

</div>

<div>

### Minutes

Select one of the following options:

-   **Every Minute of the Hour**
-   Fires every minute of the hour. This is the default setting.
-   **Just on Minute**
-   Fires only on the specified minute of the hour.
-   **Range from Minute**
-   Fires over a range of minutes. For example, if the first value is 5 and the second value is 15, the trigger starts firing on minute 5 of the hour and continues to fire for 10 minutes.
-   **Start on Minute**
-   Fires on the specified minute of the hour and repeats every specified number of minutes. For example, if the first number is 10 and the second number is 20, the trigger fires at 10 minutes and repeats every 20 minutes until stopped.
-   **On Multiple Minutes**
-   Fires on the specified minute of each hour. Enter a comma-separated list of minutes (values of `0-59`
    inclusive). For example, `5,15,30`.

</div>

<div>

### Hours

Select one of the following options:

-   **Every Hour of the Day**
-   Fires every hour of the day. This is the default setting.
-   **Just on Hour**
-   Fires only on the specified hour of the day.
-   **Range from Hour**
-   Fires over a range of hours. For example, if the first value is 9 and the second value is 17, the trigger starts firing on hour 9 of the day and continues to fire for 8 hours.
-   **Start on Hour**
-   Fires on the specified hour of the day and repeats every specified number of hours. For example, if the first number is 6 and the second number is 2, the trigger fires at hour 6 and repeats every 2 hours until stopped.
-   **On Multiple Hours**
-   Fires on the specified hours of each day. Enter a comma-separated list of hours (values of `0-23`
    inclusive). For example, `6,12,18`.
-   **Multiple Ranges**
-   Fires on the specified ranges of hours of each day. Enter comma separated ranges of hours (values of `0-23`
    inclusive). For example, `9-1,14-17`.

</div>

<div>

### Day

You must first select **Day of Week**
or **Day of Month**
from the drop-down list (using both of these fields in not supported). **Day of Month**
is selected by default.

<div>

#### Day of Month

Select one of the following options:

-   **Every Day of the Month**
-   Fires every day of the month. This is the default setting.
-   **Just on Day**
-   Fires only on the specified day of the month.
-   **Range from Day**
-   Fires over a range of days. For example, if the first value is 7 and the second value is 14, the trigger starts firing on day 7 of the month and continues to fire for 9 days.
-   **Start on Day**
-   Fires on the specified day of the month and repeats every specified number of days. For example, if the first day is 2 and the second number is 5, the trigger fires at day 2 and repeats every 5 days until stopped.
-   **On Multiple Days**
-   Fires on the specified days of each month. Enter a comma separated list of days (values of `1-32`
    inclusive). For example, `1,14,21,28`.
-   **Last Day of the Month**
-   Fires on the last day of each month (for example, 31 January, or 28 February in non-leap years).
-   **Last Week Day of the Month**
-   Fires on the last week day of each month (Monday-Friday inclusive only).

</div>

<div>

#### Day of Week

Select one of the following options:

-   **Every Day of the Week**
-   Fires every day of the week. This is the default setting.
-   **Just on *Day***
-   Fires only on the specified day of the week. Defaults to `SUN`.
-   **Range from *Day***
-   Fires over a range of days. For example, if the first value is `MON`
    and the second value is `FRI`, the trigger starts firing on `MON`
    and continues to fire until `FRI`.
-   **Start on *Day***
-   Fires on the specified day of the week and repeats every specified number of days. For example, if the first day is `TUES`
    and the number is 3, the trigger fires on `TUES`
    and repeats every 3 days until stopped.
-   **On Multiple *Days***
-   Fires on the specified days of each week. Enter a comma separated list of days. For example, `MON,WED,FRI`.
-   **Last Day of the Week**
-   Fires on the last day of each week (`SAT`).
-   **On the *Nth Day***
-   Fires on the Nth day of the week of each month (for example, the second `FRI`
    of each month).

</div>

</div>

<div>

### Month

Select one of the following options:

-   **Every Month of the Year**
-   Fires every month of the year. This is the default setting.
-   **Just on *Month***
-   Fires only on the specified month of the year. Defaults to `JAN`.
-   **Range from *Month***
-   Fires over a range of months. For example, if the first value is `MAY`
    and the second value is `JUL`, the trigger starts firing on `MAY`
    and continues to fire until `JUL`.
-   **Start on *Month***
-   Fires on the specified month of the year and repeats every specified number of months. For example, if the first month is `FEB`
    and the number is 2, the trigger fires in `FEB`
    and repeats every 2 months until stopped.
-   **On Multiple *Months***
-   Fires on the specified months of each year. Enter a comma-separated list of months (values of `JAN-DEC`
    or `1-12`
    inclusive). For example, `MAR,JUN,SEPT`.

</div>

<div>

### Year

Select one of the following options:

-   **Every Year**
-   Fires every year. This is the default setting.
-   **No Specific Year**
-   Fires no specific year.
-   **Just on *Year***
-   Fires only on the specified year. Defaults to current year.
-   **Range from *Year***
-   Fires over a range of years. For example, if the first value is `2012`
    and the second value is `2015`, the trigger starts firing on `2012`
    and continues to fire until `2015`.
-   **Start on *Year***
-   Fires on the specified year and repeats every specified number of years. For example, if the first year is `2012`
    and the number is 2, the trigger fires in `2012`
    and repeats every 2 years until stopped.
-   **On Multiple *Years***
-   Fires on the specified Year. Enter a comma-separated list of years (for example, `2012,2013,2015`).

</div>

</div>

<div id="p_common_db_cron_expression_conf_syntax">

Enter a cron expression
-----------------------

To enter the cron expression value directly in the dialog, click **Create cron expression using edit boxes**, and enter the values in the appropriate boxes. For example, the following cron expression fires on April 27 and 28, at any time except between 10:00:01 and 10:59:59:

    * * 0-9,11-23 27-28 APR ?

For details on cron expression syntax and special characters, see [*Policy execution scheduling* on page 1](general_cron_schedule.htm).

</div>

<div id="p_common_cron_expression_test">

Test the cron expression
------------------------

When you have configured the cron expression using either approach, click the **Test Cron**
button to test the syntax of the cron expression value and view when it is next due to fire. If the configured cron expression is invalid, a warning dialog is displayed.

<div>

### Results

The test results include the following output:

**Expression**
Displays the configured cron expression. For example: `* * 9-17 * * ? *`
**Next Fire Times**
Displays when cron expression is next due to fire. For example: `Next fire event:Fri Jul 22 10:26:09 EST 2012`

</div>

</div>

<div id="p_common_cron_expression_info">

Further information
-------------------

For details on using the **Cron Dialog**
to create cron expressions that trigger regularly occurring events (for example, generate reports, or block or allow messages at specified times), see the following topics:

-   The **Time** filter in the
    [API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
-   Configure scheduled reports in the
    [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)

</div>
