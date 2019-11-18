{
"title": "Additional content filtering filters",
"linkTitle": "Additional content filtering filters",
"weight": 87,
"date": "2019-10-17",
"description": "Additional filters that filter messages based on their content."
}

## Content validation filter

The API Gateway can examine the contents of an XML message to ensure that it meets certain criteria. It uses boolean XPath expressions to evaluate whether or not a specific element or attribute contains a certain value.

For example, you can configure XPath expressions to make sure the value of an element matches a certain string, to check the value of an attribute is greater (or less) than a specific number, or that an element occurs a fixed amount of times within an XML body.

To manually configure an XPath expression:

1. On the Content Validation dialog, click the **Add**
    button next to the **XPath Expression** field. Alternatively, you can select a previously configured XPath expression from the list.
2. In the XPath Expression dialog, enter a name for the expression in the **Name** field, and enter the expression in the **XPath Expression** field. Alternatively, use the XPath wizard to create a valid XPath expression.
3. To resolve any prefixes within the XPath expression, enter the namespace mappings in the table.

## Send to ICAP filter

You can use an **ICAP**
filter to send a message to a preconfigured ICAP server for content adaptation. For example, this includes specific operations such as virus scanning, content filtering, ad insertion, and language translation.

Configure the following settings:

**Name**:
Enter an appropriate name for the filter to display in a policy.

**ICAP Server**:
Click the button next to this field, and select a preconfigured ICAP server in the tree. To add an ICAP server, right-click the **ICAP Servers**
tree node, and select **Add an ICAP Server**. Alternatively, you can configure ICAP servers under the **Environment Configuration** > **External Connections**
node in the Policy Studio tree.

### Example policies

This section shows some example use cases of the **ICAP**
filter configured in policies.

#### Request Modification Mode

The following policy shows an ICAP filter used in Request Modification (REQMOD) mode:

![Request Modification Mode](/Images/docbook/images/content/icap_reqmod.gif)

This example policy is essentially an internet proxy but with all incoming messages being sent to an ICAP server for virus-checking before being sent to the destination. All ICAP server-bound messages in this instance are REQMOD requests.

#### Response Modification Mode

The following policy illustrates an ICAP Filter used in Response Modification (RESPMOD) mode:

![Response Modification Mode](/Images/docbook/images/content/icap_respmod.gif)

This example policy also is an internet proxy but with all responses being sent to an ICAP server for virus-checking after being sent to the destination and before being sent back to the client. All ICAP server-bound messages in this instance are RESPMOD requests.

## WS-Security policy layout filter

Web services can use the WS-Policy specification to advertise the security requirements that clients must adhere to in order to successfully connect and send messages to the service. For example, a typical WS-Policy would mandate that the SOAP request body be signed and encrypted (using XML Signature and XML Encryption) and that a signed WS-Utility Timestamp must be present in a WS-Security header.

To guarantee that the security tokens used to *protect*
the message are added to the request in the most efficient and interoperable manner, WS-Policy uses the `<wsp:Layout>`
assertion. The semantics of this assertion are implemented by the **WS-Security Policy Layout**
filter and are outlined in the configuration details in the next section.

To check a SOAP message for a particular WS-Policy layout, complete the following fields:

**Name**:
Enter an intuitive name for this filter to display in a policy (for example, `Check SOAPRequest for Lax Layout`).

**Actor**:
Enter the name of the SOAP Actor/Role where the security tokens are present.

**Select Required Layout Type**:
Select the required layout from the following WS-Policy options:

* **Strict**:
    Select this option to check that a SOAP message adheres to the WS-Policy strict layout rules. For more information, see the [WS-Policy specification](http://docs.oasis-open.org/ws-sx/ws-securitypolicy/v1.3/errata01/ws-securitypolicy-1.3-errata01-complete.html).
* **Lax**:
    Select this option if you want to ensure that the security tokens in the SOAP header have been inserted according to the Lax WS-Policy layout rules. The WS-Policy Lax rules are effectively identical to those stipulated by the SOAP Message Security specification.
* **LaxTimestampFirst**:
    This layout option ensures that the WS-Policy Lax rules have been followed, but also checks to make sure that the WS-Utility Timestamp is the first security token in the WS-Security header.
* **LaxTimestampLast**:
    This option ensures that the WS-Utility Timestamp is the last security token in the WS-Security header and that all other Lax layout rules have been followed.

**WS-Security Version**:
The layout rules for WS-Security versions 1.0 and 1.1 are slightly different. Select the version of the layout rules to apply to SOAP requests. For details on the differences between these versions, see the WS-Security specifications ([WSS 1.0](http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0.pdf) and [WSS 1.1](http://www.oasis-open.org/committees/download.php/16790/wss-v1.1-spec-os-SOAPMessageSecurity.pdf)).

## Threatening content filter

The **Threatening Content**
filter can run a series of regular expressions that identify different attack signatures against request messages to check if they contain threatening content. Each expression identifies a particular attack signature, which can run against different parts of the request, including the request body, HTTP headers, and the request query string. In addition, you can configure the MIME types on which the **Threatening Content**
filter operates.

The threatening content regular expressions are stored in the global **Black list**
library, which is displayed under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree. By default, this library contains regular expressions to identify SQL syntax to guard against SQL injection attacks, DOCTYPE DTD references to avoid against DTD expansion attacks, Java exception stack trace information to prevent call stack information getting returned to the client, and expressions to identify other types of attack signature.

### Scanning settings

To configure the **Scanning Details**
tab, complete the following:

**Additional message parts to scan**:
This section configures what parts of the incoming request are scanned for threatening content. By default, the **Threatening Content**
filter acts on the request body. However, it can also scan the HTTP headers and the request query string for threatening content. Select the appropriate check boxes to indicate what additional parts of the request message to scan.

**Blacklist**:
The table lists all the regular expressions that have been added to the global **Black list**
library. These regular expressions are used to identify threatening content. For example, there are regular expressions to match SQL syntax, ASCII control characters, and XML processing instructions, all of which can be used to attack a web service.

Select the regular expressions to run against incoming requests using the check boxes in the table. You can add new expressions using the **Add**
button. When adding new regular expressions on the **Add Regular Expression**
dialog, the expressions are added to the global **Black list**
library.

You can edit or remove existing regular expressions by selecting the expression in the tree, and selecting the **Edit**
or **Delete**
button.

This filter uses the regular expression syntax specified by `java.util.regex.Pattern`. For more details, go to <http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html>.

### MIME type settings

The **MIME Types**
tab lists the MIME types to be scanned for incoming messages. By default, all text- and XML-related types are scanned for threatening content. However, you can select any type from the list.

Similar to the way in which the **Black list**
regular expressions are global, so too are the MIME types. You can add these globally by selecting the **Environment Configuration** > **Server Settings**
node in the Policy Studio tree, and clicking the **General > MIME**
option.

You can add new types by selecting the **Add**
button and entering a type name and corresponding extension on the **Configure MIME Type**
dialog. You can enter a list of extensions by separating them with spaces. You can edit or delete existing types by selecting the **Edit**
and **Delete**
buttons.

## XML complexity filter

Parsing XML documents is a notoriously processor-intensive activity. This can be exploited by hackers by sending large and complex XML messages to web services in a type of denial-of-service attack attempting to overload them. The **XML Complexity**
filter can protect against such attacks by performing the following checks on an incoming XML message:

* Checking the total number of nodes contained in the XML message.
* Ensuring that the message does not contain deeply nested levels of XML nodes.
* Making sure that elements in the XML message can only contain a specified maximum number of child elements.
* Making sure that each element can have a maximum number of attributes.

By performing these checks, the API Gateway can protect back-end web services from having to process large and potentially complex XML messages.

You can also use the **XML Complexity**
filter on the web service response to prevent a dictionary attack. For example, if the web service is a phone book service, a `name=*`
parameter could return all entries.

The **XML Complexity**
filter should be configured as the first filter in the policy that processes the XML body. This enables this filter to block any excessively large or complex XML message *before*
any other filters attempt to process the XML.

To configure the **XML Complexity**
filter, complete the following fields:

**Name**:
Enter an appropriate name for this filter to display in a policy.

**Maximum Total Number of Nodes**:
Specify the maximum number of nodes to allow in an XML message.

{{< alert title="Note" color="primary" >}}This number does not include text nodes or comments. You can use the **Message size** filter to stop large text nodes or comments. {{< /alert >}}

**Maximum Number of Levels of Descendant Nodes**:
Enter the maximum number of descendant nodes that an element is allowed to have. Again, this number does not include text nodes or comments.

**Maximum Number of Child Nodes per Node**:
Enter the maximum number of child nodes that an element in an XML message is allowed to have.

**Maximum Number of Attributes per Node**:
Enter the maximum number of attributes that an element is allowed to have.
