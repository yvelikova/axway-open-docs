{
"title": "Convert multipart or compound body type message",
"linkTitle": "Convert multipart or compound body type message",
"date": "2019-10-17",
"description": "The **Convert Multipart/compound body type**\\nfilter is typically used to compress a MIME message before transferring a message using FTP to an FTP server. You could create a simple policy containing a **Convert Multipart/compound body type**\\nfilter as a predecessor of an **FTP Upload**\\nfilter to achieve this functionality. "
}
﻿
<div id="p_conversion_compress_multipart_over">

Overview
--------

The **Convert Multipart/compound body type**
filter is typically used to compress a MIME message before transferring a message using FTP to an FTP server. You could create a simple policy containing a **Convert Multipart/compound body type**
filter as a predecessor of an **FTP Upload**
filter to achieve this functionality.

The **Convert Multipart/compound body type**
filter outputs a `content.body`
message attribute, which represents the last part processed. For example, in a three part multipart message, the value of the `content.body`
attribute is the third and last part in the series.

</div>

<div id="p_conversion_compress_multipart_conf">

Configuration
-------------

Configure the following fields for this filter:

**Name**:\
Enter a suitable name for this filter to display in a policy.

**Multipart content type**:\
Enter the MIME content type to compress the multipart message to. For example, to compress a multipart message to a ZIP file, enter `multipart/x-zip`
in this field.

</div>
