{
"title": "Content type filtering",
"linkTitle": "Content type filtering",
"date": "2019-10-17",
"description": "The *SOAP Messages with Attachments*\\nspecification introduced a standard for transmitting arbitrary files along with SOAP messages as part of a multipart message using Multipurpose Internet Mail Extensions (MIME). In this way, both XML and non-XML data, including binary data, can be encapsulated in a SOAP message. "
}
﻿
<div id="p_content_types_overview">

Overview
--------

The *SOAP Messages with Attachments*
specification introduced a standard for transmitting arbitrary files along with SOAP messages as part of a multipart message using Multipurpose Internet Mail Extensions (MIME). In this way, both XML and non-XML data, including binary data, can be encapsulated in a SOAP message.

API Gateway can accept or block multipart messages with certain MIME content types. For example, you can configure a **Content Type**
filter to block multipart messages with `image/jpeg`
type parts.

</div>

<div id="p_content_types_allow_deny_types">

Allow or deny content types
---------------------------

The **Content Type Filtering**
window lists the content types that are allowed or denied by this filter.

**Allow Content Types**:\
Use this option to *accept*
most content types, but to reject a few specific types. To allow or deny incoming messages based on their content types, complete the following steps:

-   Select the **Allow content types**
    radio button to allow multipart messages to be routed onwards. To allow all content types, you do not need to select any of the MIME types in the list.
-   To deny multipart messages with certain MIME types as parts, select those types here. Multipart messages containing the selected MIME type parts are rejected.

**Deny Content Types**:\
To *block*
multipart messages containing most content types, but to allow a small number of content types, select this option. To reject multipart messages based on the content types of their parts, complete the following steps:

1.  Select the **Deny content types**
    radio button to reject multipart messages. To block all multipart messages, you do not need to select any of the MIME types in the list.
2.  To allow messages with parts of a certain MIME type, select the check box next to those types. Multipart messages with parts of the MIME types selected here are allowed. All other MIME types are denied.

MIME types can be added by clicking the **MIME Registered Types**
button.

</div>

<div id="p_content_types_types">

Configure MIME types
--------------------

The **MIME Settings**
dialog enables you to configure new and existing MIME types. When a type is added, you can configure the API Gateway to accept or block multipart messages with parts of this type.

Click the **Add**
button to add a new MIME type, or highlight a type in the table, and select the **Edit**
button to edit an existing type. To delete an existing type, select that type in the list, and click the **Remove**
button. You can edit or add types using the **Configure MIME Type**
dialog.

Enter a name for the new type in the **MIME Type**
field, and the corresponding file extension in the **Extension**
field.

</div>
