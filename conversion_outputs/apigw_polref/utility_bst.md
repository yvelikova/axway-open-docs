{
"title": "Insert BST",
"linkTitle": "Insert BST",
"date": "2019-10-17",
"description": "You can use the **Insert BST**\\nfilter to insert a Binary Security Token (BST) into a message. A BST is a security token that is in binary form, and therefore not necessarily human readable. For example, an X.509 certificate is a binary security token. Inserting a BST into a message is normally performed as a side effect of signing or encrypting a message. However, there are also some scenarios where you might insert a certificate into a message in a BST without signing or encrypting the message."
}
﻿
<div id="p_utility_bst_overview">

Overview
--------

You can use the **Insert BST**
filter to insert a Binary Security Token (BST) into a message. A BST is a security token that is in binary form, and therefore not necessarily human readable. For example, an X.509 certificate is a binary security token. Inserting a BST into a message is normally performed as a side effect of signing or encrypting a message. However, there are also some scenarios where you might insert a certificate into a message in a BST without signing or encrypting the message.

For example, you can use the **Insert BST**
filter when the API Gateway is acting as a client to a Security Token Service (STS) that issues security tokens (for example, to create `OnBehalfOf`
tokens). For more details, see the topic on [*STS client authentication* on page 1](authn_sts_client.htm). Finally, you can also use the **Insert BST**
filter to generate XML nodes without inserting them into the message. In this case, the **WS-Security Actor**
is set to blank.

</div>

<div id="p_utility_bst_conf">

Configuration
-------------

You can configure the following settings on the filter dialog:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**WS-Security Actor**:\
Select or enter the WS-Security element in which to place the BST. Defaults to `Current actor / role only`. To use the **Insert BST**
filter to generate XML nodes without inserting them into the message, you must ensure that this field is set to blank.

**Message Attribute**:\
Select or enter the message attribute that contains the BST. The message attribute type can be `byte[]`, `String`, `X509Certificate`, or `X509Certificate[]`.

**Value Type**:\
Select the BST value type, or enter a custom type. Example value types include the following:

-   `http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3`
-   `http://docs.oasis-open.org/wss/oasis-wss-kerberos-token-profile-1.1#GSS_Kerberosv5_AP_REQ`
-   `http://xmlns.oracle.com/am/2010/11/token/session-propagation`

**Base64 Encode**:\
Select this option to Base64-encode the data. This option applies only when the data in the message attribute is not already Base64 encoded. In some cases, the input might already be Base64 encoded, so you should deselect this setting in these cases.

</div>
