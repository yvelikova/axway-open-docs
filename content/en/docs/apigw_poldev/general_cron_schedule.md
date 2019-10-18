{
"title": "Policy execution scheduling",
"linkTitle": "Policy execution scheduling",
"date": "2019-10-17",
"description": "You can configure a policy execution scheduler at the level of the API Gateway instance. This enables you to schedule the execution of any policy on a specified date and time in a recurring manner. The API Gateway provides a pre-configured library of schedules to select from when creating a policy execution scheduler. You can also add your own schedules to the globally available library in the Policy Studio. "
}
﻿
<div id="p_general_cron_schedule_over">

Overview
--------

You can configure a policy execution scheduler at the level of the API Gateway instance. This enables you to schedule the execution of any policy on a specified date and time in a recurring manner. The API Gateway provides a pre-configured library of schedules to select from when creating a policy execution scheduler. You can also add your own schedules to the globally available library in the Policy Studio.

You can use policy execution scheduling in any policy (for example, to perform a message health check). This feature is also useful when polling a service to enforce a Service Level Agreement (for example, to ensure the response time is less than 1000 ms, and if not, to send an alert).

</div>

<div id="p_general_cron_schedule_cron_expression">

Cron expressions
----------------

In the Policy Studio, policy execution schedules are based on cron expressions. A cron expression is a string that specifies a time schedule for triggering an event (for example, executing a policy). It consists of six required fields and one optional field, each separated by a space, which together specify when to trigger the event. For example, the following expression specifies to run at 10:15 am every Monday, Tuesday, Wednesday, Thursday, and Friday in 2011:

    0 15 10 ? * MON-FRI 2011

### Syntax\

The following table shows the syntax used for each field:

| Field           | Values               | Special characters |
|-----------------|----------------------|--------------------|
| Seconds         | `0-59`               | `, - * /`          |
| Minutes         | `0-59`               | `, - * /`          |
| Hours           | `0-23`               | `, - * /`          |
| Day of Month    | `1-31`               | `, - * ? / L W`    |
| Month           | `1-12 or JAN-DEC`    | `, - * / `         |
| Day of Week     | `1-7 or SUN-SAT`     | `, - * ? / L #`    |
| Year (optional) | `empty or 1970-2199` | `, - * /`          |

### Special characters\

The special characters are explained as follows:

| Special character | Description                                                                                                                                                                                                                                                 |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `,`               | Separates values in a list (for example, `MON,WED,SAT`                                                                                                                                                                                                      
  means Mondays, Wednesdays, and Saturdays only).                                                                                                                                                                                                              |
| `-`               | Specifies a range of values (for example, 2011-2015 means every year between 2011 and 2015 inclusive).                                                                                                                                                      |
| `*`               | Specifies all values of the field (for example, every minute).                                                                                                                                                                                              |
| `?`               | Specifies no value in the Day of Month and Day of Week fields. This enables you to specify a value in one field, but not in the other.                                                                                                                      |
| `/`               | Specifies time increments (for example, in the Minutes field, `0/15`                                                                                                                                                                                        
  means minutes 0, 15, 30, and 45, while `5/15`                                                                                                                                                                                                                
  means minutes `5`, `20`, `35`, and `50`). Specifying `*`                                                                                                                                                                                                     
  before the `/`                                                                                                                                                                                                                                               
  is the same as specifying `0`                                                                                                                                                                                                                                
  as the start value. The `/`                                                                                                                                                                                                                                  
  character enables you to turn on every nth value in the set of values for the specified field. For example, `7/6`                                                                                                                                            
  in the month field only turns on month `7`, and does not mean every 6th month.                                                                                                                                                                               |
| `L`               | Specifies the last value in the Day of Month and Day of Week fields. In the Day of Month field, this means the last day of the month (for example, January 31, or February 28 in non-leap years). In the Day of Week field, when used alone, this means `7` 
  or `SAT`. When used after another value, it means the last `XXX`                                                                                                                                                                                             
  day of the month (for example, `5L`                                                                                                                                                                                                                          
  means the last Thursday of the month). When using the `L`                                                                                                                                                                                                    
  character, do not specify lists or ranges because this can give confusing results.                                                                                                                                                                           |
| `W`               | Specifies the weekday (Monday-Friday) nearest the given day. For example, `15W`                                                                                                                                                                             
  means the nearest weekday to the 15th of the month. If the 15th is a Saturday, the trigger fires on Friday 14th. If the 15th is a Sunday, it fires on Monday 16th. If the 15th is a Tuesday, it fires on Tuesday 15th. However, if you specify `1W`          
  , and the 1st is a Saturday, the trigger fires on Monday 3rd to avoid crossing the month boundary. You can only specify the `W`                                                                                                                              
  character for a single day, and not a range or list of days.                                                                                                                                                                                                 |
| `#`               | Specifies the nth `XXX`                                                                                                                                                                                                                                     
  weekday of the month in the Day of Week field. For example, a value of `FRI#2`                                                                                                                                                                               
  means the second Friday of the month. However, if you specify `#5`, and there are not 5 of the specified Day of the Week in the month, no policy is run that month. When the `#`                                                                             
  character is specified, there can only be one expression in the Day of Week field (for example, `2#1,6#4`                                                                                                                                                    
  is not valid because there are two expressions).                                                                                                                                                                                                             |

### Examples\

The following are some of the cron expressions provided in the **Schedule Library**
in the Policy Studio:

| Cron expression            | Description                                                                                                                    |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `0 15 10 ? * *`            | Run at 10:15am every day.                                                                                                      |
| `0 15 10 ? * 6L 2011-2015` | Run at 10:15am on every last Friday of every month during the years 2011, 2012, 2013, 2014, and 2015.                          |
| `0 15 10 ? * 6#3`          | Run at 10:15am on the third Friday of every month.                                                                             |
| `0 0 10 1,15 * ?`          | Run at 10am on the 1st and 15th days of the month.                                                                             |
| `0 10,44 14 ? 3 WED`       | Run at 2:10pm and at 2:44pm every Wednesday in the month of March.                                                             |
| `0,30 * * ? * SAT,SUN`     | Run every 30 seconds but only on Weekends (Saturday and Sunday).                                                               |
| `0 0/5 14,18 * * ?`        | Run every 5 minutes starting at 2pm and ending at 2:55pm, and every 5 minutes starting at 6pm and ending at 6:55pm, every day. |
| `0 0-5 14 * * ?`           | Run every minute starting at 2pm and ending at 2:05pm, every day.                                                              |

{{< alert title="Note" color="primary" >}}Note the following:{{< /alert >}}
<div class="indentTable">

-   Support for specifying both a Day of Week and a Day of Month value is not complete. You must use the `?`
    or `*`
    character in one of these fields.
-   Overflowing ranges with a larger number on the left than the right are supported (for example, `21-2`
    for 9pm until 2am, or `OCT-MAR`). However, overuse may cause problems with daylight savings (for example, `0 0 14-6 ? * FRI-MON`).

</div>

</div>

<div id="p_general_cron_schedule_cron_expression_add">

Add a schedule
--------------

To add a schedule to the globally available library in the Policy Studio, perform the following steps:

1.  Select the **Environment Configuration** > **Libraries** > **Schedules**
    node in the tree.
2.  Click the **Add**
    button at the bottom of the **Schedules**
    window.
3.  In the **Schedules**
    dialog, enter a **Name**
    (for example, `Run every 30 seconds`).
4.  Enter a **Cron expression**
    (for example, `0/30 * * * * ?`). Alternatively, click the browse button to select an expression in **Cron dialog**. For more details, see *Configure cron expressions* on page 1.
5.  Click **OK**.

You can also edit or delete a selected schedule using the appropriate button.

</div>

<div id="p_general_cron_schedule_policy_execution">

Add a policy execution scheduler
--------------------------------

To add a policy execution scheduler in the Policy Studio, perform the following steps:

1.  Select the **Environment Configuration** > **Listeners**
    node on the left.
2.  Right-click the instance node (for example, **API Gateway**), and select **Add policy execution scheduler**.
3.  Click the button next to the **Schedule**
    field, select a cron expression in the dialog, and click **OK**.
4.  Click the button next to the **Policy**
    field, select a policy in the dialog, and click **OK**. You can search for a specific policy by entering its name in the text box, and the policy tree is filtered automatically.
5.  Click **OK**.

</div>
