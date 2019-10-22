{
"title": "Remove HTTP header",
"linkTitle": "Remove HTTP header",
"date": "2019-10-17",
"description": "The API Gateway can strip a named HTTP header from the message as it passes through a policy. This is especially useful in cases where end user credentials are passed to the API Gateway in an HTTP header. After processing the credentials, you can use the **Remove HTTP Header**\\nfilter to strip the header from the message to ensure that it is not forwarded on to the destination web service."
}
﻿
<div id="p_conversion_remove_header_overview">

Overview
--------

The API Gateway can strip a named HTTP header from the message as it passes through a policy. This is especially useful in cases where end user credentials are passed to the API Gateway in an HTTP header. After processing the credentials, you can use the **Remove HTTP Header**
filter to strip the header from the message to ensure that it is not forwarded on to the destination web service.

</div>

<div id="p_conversion_remove_header_conf">

Configuration
-------------

To configure the **Remove HTTP Header**
filter, perform the following steps:

1.  Enter an appropriate name for this filter in the **Name**
    field.
2.  Specify the name of the HTTP header to remove in the **HTTP Header Name**
    field.
3.  Select **Fail if header is not present**
    to configure the API Gateway to abort the filter if the message does not contain the named HTTP header. Headers can be added to the message using the **Add HTTP Header** filter (see [*Add HTTP header* on page 1](conversion_add_header.htm)).

</div>
