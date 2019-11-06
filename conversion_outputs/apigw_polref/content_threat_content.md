{
"title": "Threatening content",
"linkTitle": "Threatening content",
"date": "2019-10-17",
"description": "The **Threatening Content**\\nfilter can run a series of regular expressions that identify different attack signatures against request messages to check if they contain threatening content. Each expression identifies a particular attack signature, which can run against different parts of the request, including the request body, HTTP headers, and the request query string. In addition, you can configure the MIME types on which the **Threatening Content**\\nfilter operates."
}
﻿
<div id="p_content_threat_content_over">

Overview
--------

The **Threatening Content**
filter can run a series of regular expressions that identify different attack signatures against request messages to check if they contain threatening content. Each expression identifies a particular attack signature, which can run against different parts of the request, including the request body, HTTP headers, and the request query string. In addition, you can configure the MIME types on which the **Threatening Content**
filter operates.

The threatening content regular expressions are stored in the global **Black list**
library, which is displayed under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree. By default, this library contains regular expressions to identify SQL syntax to guard against SQL injection attacks, DOCTYPE DTD references to avoid against DTD expansion attacks, Java exception stack trace information to prevent call stack information getting returned to the client, and expressions to identify other types of attack signature.

</div>

<div id="p_content_threat_content_scanning">

Scanning settings
-----------------

To configure the **Scanning Details**
tab, complete the following:

**Additional message parts to scan**:\
This section configures what parts of the incoming request are scanned for threatening content. By default, the **Threatening Content**
filter acts on the request body. However, it can also scan the HTTP headers and the request query string for threatening content. Select the appropriate check boxes to indicate what additional parts of the request message to scan.

**Blacklist**:\
The table lists all the regular expressions that have been added to the global **Black list**
library. These regular expressions are used to identify threatening content. For example, there are regular expressions to match SQL syntax, ASCII control characters, and XML processing instructions, all of which can be used to attack a web service. For more information on how to configure global **Black list**
library, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Select the regular expressions to run against incoming requests using the check boxes in the table. You can add new expressions using the **Add**
button. When adding new regular expressions on the **Add Regular Expression**
dialog, the expressions are added to the global **Black list**
library.

You can edit or remove existing regular expressions by selecting the expression in the tree, and selecting the **Edit**
or **Delete**
button.

</div>

<div id="p_content_threat_content_mime">

MIME type settings
------------------

The **MIME Types**
tab lists the MIME types to be scanned for incoming messages. By default, all text- and XML-related types are scanned for threatening content. However, you can select any type from the list.

Similar to the way in which the **Black list**
regular expressions are global, so too are the MIME types. You can add these globally by selecting the **Environment Configuration** > **Server Settings**
node in the Policy Studio tree, and clicking the **General > MIME**
option. For more information, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

You can add new types by selecting the **Add**
button and entering a type name and corresponding extension on the **Configure MIME Type**
dialog. You can enter a list of extensions by separating them with spaces. You can edit or delete existing types by selecting the **Edit**
and **Delete**
buttons.

</div>

<div>

Regular expression format
-------------------------

This filter uses the regular expression syntax specified by `java.util.regex.Pattern`. For more details, go to:

<http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html>

</div>
