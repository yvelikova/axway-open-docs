{
"title": "Invoke policy per message body",
"linkTitle": "Invoke policy per message body",
"date": "2019-10-17",
"description": "In cases where API Gateway receives a multipart related MIME message, you can use the **Invoke Policy per Message Body**\\nfilter to pass each body part to a specified policy for processing. "
}
﻿
<div id="p_utility_invoke_policy_over">

Overview
--------

In cases where API Gateway receives a multipart related MIME message, you can use the **Invoke Policy per Message Body**
filter to pass each body part to a specified policy for processing.

For example, if other XML documents are attached to an XML message (using the SOAP with Attachments specification), you can pass each of these documents to an appropriate policy where they can be processed by the full complement of message filters.

See also [*Convert multipart or compound body type message* on page 1](conversion_compress_multipart.htm).

</div>

<div id="p_utility_invoke_policy_conf">

Configuration
-------------

Complete the following fields:

**Name**:\
Enter a name for the filter to display in a policy.

**Policy Shortcut**:\
Select the policy to invoke for each MIME body part in the message. Each body part is passed to the selected policy in turn. The filter fails if the selected policy fails for *any*
of the passed body parts.

**Maximum level to unzip**:\
In cases where a MIME body part is a MIME message itself (which might, in turn, contain more multipart messages), this setting determines how many levels of enveloped MIME messages to attempt to unzip. A default value of 2 levels ensures that the server does not attempt to unwrap unnecessarily *deep*
MIME messages.

If one of the body parts is actually an archive file (for example, tar or zip), this setting determines the maximum depth of files to unzip in cases where the archive file contains other archive files, which might contain others, and so on.

</div>
