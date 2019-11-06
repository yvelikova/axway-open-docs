{
"title": "Upload to Amazon S3",
"linkTitle": "Upload to Amazon S3",
"date": "2019-10-17",
"description": "Amazon Simple Storage Service (S3) is an online storage web service that you can use to store and retrieve any amount of data. API Gateway acts as a client to S3 and can upload data to S3. You can use the **Upload to Amazon S3**\\nfilter to upload data to Amazon S3."
}
﻿
<div id="p_aws_uploadtos3_overview">

Overview
--------

Amazon Simple Storage Service (S3) is an online storage web service that you can use to store and retrieve any amount of data. API Gateway acts as a client to S3 and can upload data to S3. You can use the **Upload to Amazon S3**
filter to upload data to Amazon S3.

For more information on Amazon S3, go to <http://aws.amazon.com/s3/>.

</div>

<div id="p_aws_uploadtos3_config">

General settings
----------------

Configure the following settings on the **Upload to Amazon S3**
window:

**Name**:\
Enter a suitable name for the filter to display in a policy.

<div>

### AWS settings

**AWS Credential**:\
Click the browse button to select your AWS security credentials (API key and secret) for Amazon S3.

**Region**:\
Select the region in which to store your data. You can choose from the following options:

-   US East (Northern Virginia)
-   US West (Oregon)
-   US West (Northern California)
-   EU (Ireland)
-   Asia Pacific (Singapore)
-   Asia Pacific (Tokyo)
-   Asia Pacific (Sydney)
-   South America (Sao Paulo)
-   US GovCloud

**Client settings**:\
Click the browse button to select the AWS client configuration to be used by API Gateway when connecting to Amazon S3. For more information on configuring client settings, see
[Configure AWS client settings](/csh?context=601&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_aws_uploadtos3_config_s3">

### S3 settings

**Bucket name**:\
Enter the name of the bucket in which to store the data. To create a new bucket with the specified name, click the **Create**
option.

**Object key**:\
Enter the object key for the object to be stored. Alternatively, you can enter a selector that is expanded at runtime. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Encryption key**:\
Click the browse button to select an encryption key for the object.

**How to store**:\
Select how to store the object. You can choose from the following options:

-   Standard – This is the standard S3 storage option.
-   Reduced Redundancy – This is a storage option within Amazon S3 for storing non-critical, reproducible data at lower levels of redundancy than standard storage.
-   Glacier – This is a low-cost storage option for data archival.

</div>

</div>

<div id="p_aws_uploadtos3_info">

Further information
-------------------

For more detailed information on Amazon Web Services integration, see the *AWS Integration Guide*
available from Axway Support.

</div>
