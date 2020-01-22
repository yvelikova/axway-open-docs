{
"title": "Validate timestamp",
"linkTitle": "Validate timestamp",
"date": "2019-10-17",
"description": "You can use the **Validate Timestamp**\\nfilter to validate a timestamp that has been stored in a message attribute by a previous filter in a policy. For example, you can extract the value of a `wsu:Created`\\nelement from a WS-Security token and store it in a created attribute using the **Retrieve from Message**\\nfilter in the **Attributes**\\ncategory. You can then use the **Validate Timestamp**\\nfilter to ensure that the created timestamp is not *after*\\n the current time."
}
﻿
<div id="p_content_validate_timestamp_over">

Overview
--------

You can use the **Validate Timestamp**
filter to validate a timestamp that has been stored in a message attribute by a previous filter in a policy. For example, you can extract the value of a `wsu:Created`
element from a WS-Security token and store it in a created attribute using the **Retrieve from Message**
filter in the **Attributes**
category. You can then use the **Validate Timestamp**
filter to ensure that the created timestamp is not *after*
the current time.

Similarly, you can use the **Retrieve from Message**
filter to extract the value of the `wsu:Expires`
element and store it in a timestamp message attribute. You can then use the **Validate Timestamp**
filter to check that the timestamp is not *before*
the current time.

You can configure the drift time to resolve discrepancies between clock times on the machine that generated the timestamp, and the machine running API Gateway. If you are validating a `Created`
timestamp (**Timestamp must be in the past**
is selected), the time must be after the `Created`
time minus the drift time. Alternatively, if you are validating an `Expires`
timestamp (**Timestamp must be in the future**
is selected), the time now must be before the `Expires`
time plus the drift time.

{{< alert title="Note" color="primary" >}}To validate the timestamp stored in a WS-Security Username Token or SAML assertion, you can use the **WS-Security Username Token Authentication**, **SAML Authentication**, **SAML Authorization**, or **SAML Attribute**
filters. Furthermore, there is an implicit timestamp validation check performed by the **Extract WSS Header**
filter, which you can use to validate a WS-Utility Timestamp that appears in a WSS `Header`
block.{{< /alert >}}
The **Validate Timestamp**
filter does not require an entire WS-Utility Timestamp element. Instead, this filter only requires a single date-formatted string.

</div>

<div id="p_content_validate_timestamp_conf">

Configuration
-------------

Complete the following fields to configure the API Gateway to validate a timestamp that has been stored in a message attribute:

**Name**:\
Enter a name for the filter to display in a policy.

**Selector Expression to Retrieve Timestamp**:\
Enter the name of the selector expression that contains the value of the timestamp. Defaults to `${timestamp}`. The specified selector is expanded at runtime to the corresponding message attribute value. For more details, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

{{< alert title="Note" color="primary" >}}You must configure a predecessor of this filter to extract the timestamp from the message and store it in the specified attribute (for example, the **Retrieve from Message**
filter in the **Attributes**
category.{{< /alert >}}
**Format of Timestamp**:\
Enter the format of the timestamp that is contained in the specified message attribute. The default date/time format is `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`, which can be altered if necessary. For more information on how to use this format, see the Javadoc for the `java.text.SimpleDateFormat`
class.

**Timezone**:\
Select the time zone to use to interpret the time stored in the message attribute selected above. The default option is GMT.

**Drift (ms)**:\
Specify the drift time in milliseconds when determining whether the current time falls within a certain time interval. The drift time can be used to account for differences in the clock times of the machine running the API Gateway and the machine on which the timestamp was generated.

**Timestamp must be in the past**:\
The time in the timestamp must be *before*
the time at which the server validates the timestamp. This is used for validating a timestamp that represents a `Created`
time (the created time must be before the validation time).

**Timestamp must be in the future**:\
The time in the timestamp must be *after*
the time at which the server validates the timestamp. This is used for validating a timestamp that represents an `Expires`
time (the expiry time must be some time in the future relative to the validation time).

</div>
