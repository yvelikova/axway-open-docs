{
"title": "Message size filtering",
"linkTitle": "Message size filtering",
"date": "2019-10-17",
"description": "It is sometimes useful to filter incoming messages based not only on the internal content of the message but also on external characteristics of the message such as size. You can use the **Message Size**\\nfilter to configure the API Gateway to reject messages that are greater or less than a specified size. "
}
﻿

It is sometimes useful to filter incoming messages based not only on the internal content of the message but also on external characteristics of the message such as size. You can use the **Message Size**
filter to configure the API Gateway to reject messages that are greater or less than a specified size.

This filter only rejects messages where the actual content size, after any truncation by the network layer, exceeds the limit configured in the filter. The network layer of API Gateway reads at most the value of the Content-Length header of any incoming request, before transmitting it to the application layer (**Message Size** filter in this case). This means that API Gateway is never vulnerable to a "size control by-pass" attack, with or without this filter activated, because the network layer truncation is always active.

For example, if you configure a **Message Size** filter with a limit of 200 bytes, and send a message with a Content-Length equal to 100 bytes, but with an actual content of 300 bytes, the filter does not reject the message. This is because API Gateway reads only 100 bytes from the message (the Content-Length) and therefore when the message arrives at the Message Size filter it does not exceed the limit of 200 bytes.

{{< alert title="Note" color="primary" >}}You should not use the **Message Size**
filter on HTTP `GET`
requests.{{< /alert >}}

Configuration
-------------

To configure the API Gateway to block messages of a certain size, complete the following fields:

**At least**:\
Enter the size (in bytes) of the smallest message that should be processed. The default size is `-1`, which indicates that there is no minimum message size. You can also use a selector, for example, `${env.MIN.MESSAGE.SIZE}` to set the message size.

**At most**:\
Enter the size (in bytes) of the largest message that should be processed. The default size is `-1`, which indicates that there is no maximum message size. You can also use a selector, for example, \${env.MAX.MESSAGE.SIZE} to set the message size.

**Use in Size Calculation**:\
Select one of the following options to specify the portion of the message that is to be used when calculating the size of the message:

-   **Root body only**: The API Gateway calculates the size of the message body excluding all other MIME parts (attachments).
-   **Attachments only**: The API Gateway only calculates the size of all attachments to the message. This excludes the size of the root body payload from its calculation. The **Message Size**
    filter still works even when there are no attachments.
-   **Root body and attachments**: The API Gateway includes the root body together with all other MIME parts when it calculates the size of the message.

{{< alert title="Note" color="primary" >}}The message size measured by the API Gateway does *not*
include HTTP headers.{{< /alert >}}
