{
"title": "Extract WSS timestamp",
"linkTitle": "Extract WSS timestamp",
"date": "2019-10-17",
"description": "You can use the **Extract WSS Timestamp**\\nfilter to extract a WSS header timestamp from a message. The timestamp is stored in a specified message attribute so that it can be processed later in a policy. This filter requires the WSS header block to have been extracted previously. For more details, see *Extract WSS header* on page 1."
}
﻿
<div id="p_attributes_extract_timestamp_over">

Overview
--------

You can use the **Extract WSS Timestamp**
filter to extract a WSS header timestamp from a message. The timestamp is stored in a specified message attribute so that it can be processed later in a policy. This filter requires the WSS header block to have been extracted previously. For more details, see *Extract WSS header* on page 1.

Typically, the **Validate Timestamp**
filter is used to retrieve the timestamp from the specified message attribute and validate it. The **Validate Timestamp**
filter is available from the **Content Filtering**
filter category. For more details, see *Validate timestamp* on page 1.

</div>

<div id="p_attributes_extract_timestamp_conf">

Configuration
-------------

Configure the following fields on the **Extract WSS Timestamp**
filter configuration window:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Message Attribute to Contain the Timestamp**:\
When API Gateway extracts the WSS header timestamp from the message at runtime, it stores the timestamp in the specified message attribute. To validate the timestamp later in the policy, you *must*
specify this message attribute in the configuration window for the **Validate Timestamp**
filter.

</div>
