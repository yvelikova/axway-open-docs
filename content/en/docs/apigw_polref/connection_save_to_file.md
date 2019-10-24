{
"title": "Save to file",
"linkTitle": "Save to file",
"date": "2019-10-17",
"description": "The **Save to File**\\nfilter enables you to write the current message contents to a file. For example, you can save the message contents to a file in a directory where it can be accessed by an external application. This can be used to quarantine messages to the file system for offline examination. "
}
﻿
<div id="p_connection_save_to_file_over">

Overview
--------

The **Save to File**
filter enables you to write the current message contents to a file. For example, you can save the message contents to a file in a directory where it can be accessed by an external application. This can be used to quarantine messages to the file system for offline examination.

This filter can also be useful when integrating legacy systems. Instead of making drastic changes to the legacy system by adding an HTTP engine, API Gateway can save the message contents to the file system, and route them on over HTTP to another back-end system.

</div>

<div id="p_connection_save_to_file_conf">

Configuration
-------------

To configure the **Save to File**
filter, specify the following fields:

**Name**:\
Name of the filter to be displayed in a policy.

**File name**:\
Enter the name of the file that the content is saved to. You can specify this using a selector, which is expanded to the specified value at runtime. Defaults to `${id}.out`. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Directory**:\
Enter the directory that the file is saved to. You can specify this using a selector, which is expanded to the specified value at runtime. Defaults to `${environment.VINSTDIR}/message-archive`, where `VINSTDIR`
is the location of a running API Gateway instance.

**Maximum number of files in directory**:\
Enter the maximum number of files that can be saved in the directory. Defaults to `500`. When this limit is reached, the oldest file is removed.

**Maximum file size**:\
Enter the maximum file size in MB. Defaults to `1000`.

**Include HTTP Headers**:\
Select whether to include HTTP headers in the file. HTTP headers are not included by default.

**Include Request Line**:\
Select whether to include the request line in the file. This is not included by default.

</div>
