{
"title": "MIME settings",
"linkTitle": "MIME settings",
"date": "2019-10-14",
"description": "The MIME settings list a number of default common content types that are used when transmitting Multipurpose Internet Mail Extensions (MIME) messages. You can configure API Gateway's **Content Type** filter to accept or block messages containing specific MIME types. Therefore, the contents of the MIME types library act as the set of all MIME types that API Gateway can filter messages with. "
}
﻿

The MIME settings list a number of default common content types that are used when transmitting Multipurpose Internet Mail Extensions (MIME) messages. You can configure API Gateway's **Content Type** filter to accept or block messages containing specific MIME types. Therefore, the contents of the MIME types library act as the set of all MIME types that API Gateway can filter messages with.

All of the MIME types listed in the table are available for selection in the **Content Type** filter. For example, you can configure this filter to accept only XML-based types, such as `application/xml`, `application/*+xml`, `text/xml`, and so on. Similarly, you can block certain MIME types (for example, `application/zip`, `application/octet-stream`, and `video/mpeg`).

For more details on configuring the **Content Type** filter, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Configuration
-------------

To configure the MIME settings, in the Policy Studio main menu, select **Tasks > Manage Gateway Settings > General > MIME**. Alternatively, in the Policy Studio tree, select the **Environment Configuration > Server Settings** node, and click **General > MIME**. To confirm updates to these settings, click **Apply changes** at the bottom right of the screen.

The MIME settings screen lists the actual MIME types on the left column of the table, together with their corresponding file extensions (where applicable) in the right column.

To add a new MIME type, click the **Add** button. In the **Configure MIME Type** dialog, enter the new content type in the **MIME Type** field. If the new type has a corresponding file extension, enter this extension in the **Extension** field. Click the **OK** button when finished.

Similarly, you can edit or delete existing types using the **Edit** and **Delete** buttons.
