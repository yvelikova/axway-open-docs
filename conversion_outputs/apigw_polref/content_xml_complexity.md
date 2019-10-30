{
"title": "XML complexity",
"linkTitle": "XML complexity",
"date": "2019-10-17",
"description": "Parsing XML documents is a notoriously processor-intensive activity. This can be exploited by hackers by sending large and complex XML messages to web services in a type of denial-of-service attack attempting to overload them. The **XML Complexity**\\nfilter can protect against such attacks by performing the following checks on an incoming XML message:"
}
﻿
<div id="p_content_xml_complexity_over">

Overview
--------

Parsing XML documents is a notoriously processor-intensive activity. This can be exploited by hackers by sending large and complex XML messages to web services in a type of denial-of-service attack attempting to overload them. The **XML Complexity**
filter can protect against such attacks by performing the following checks on an incoming XML message:

-   Checking the total number of nodes contained in the XML message.
-   Ensuring that the message does not contain deeply nested levels of XML nodes.
-   Making sure that elements in the XML message can only contain a specified maximum number of child elements.
-   Making sure that each element can have a maximum number of attributes.

By performing these checks, the API Gateway can protect back-end web services from having to process large and potentially complex XML messages.

You can also use the **XML Complexity**
filter on the web service response to prevent a dictionary attack. For example, if the web service is a phone book service, a `name=*`
parameter could return all entries.

</div>

<div id="p_content_xml_complexity_config">

Configuration
-------------

The **XML Complexity**
filter should be configured as the first filter in the policy that processes the XML body. This enables this filter to block any excessively large or complex XML message *before*
any other filters attempt to process the XML.

To configure the **XML Complexity**
filter, complete the following fields:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Maximum Total Number of Nodes**:\
Specify the maximum number of nodes to allow in an XML message.

{{< alert title="Note" color="primary" >}}This number does not include text nodes or comments. You can use *Message size filtering* on page 1
to stop large text nodes or comments. {{< /alert >}}
**Maximum Number of Levels of Descendant Nodes**:\
Enter the maximum number of descendant nodes that an element is allowed to have. Again, this number does not include text nodes or comments.

**Maximum Number of Child Nodes per Node**:\
Enter the maximum number of child nodes that an element in an XML message is allowed to have.

**Maximum Number of Attributes per Node**:\
Enter the maximum number of attributes that an element is allowed to have.

</div>
