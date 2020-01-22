{
"title": "Attribute authentication",
"linkTitle": "Attribute authentication",
"date": "2019-10-17",
"description": "In cases when user credentials are passed to the API Gateway in a non-standard way, the credentials can be copied into API Gateway message attributes, and authenticated against a specified authentication repository (for example, API Gateway user store, LDAP directory, or database) using an **Attribute Authentication**\\nfilter. For example, assume user credentials are passed to API Gateway in the following XML message:"
}
﻿
<div id="authn_attributes_overview">

Overview
--------

In cases when user credentials are passed to the API Gateway in a non-standard way, the credentials can be copied into API Gateway message attributes, and authenticated against a specified authentication repository (for example, API Gateway user store, LDAP directory, or database) using an **Attribute Authentication**
filter. For example, assume user credentials are passed to API Gateway in the following XML message:

``` {space="preserve"}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Body>
    <ns:User xmlns:ns="http://www.user.com">
      <ns:Username>1</ns:Username>
      <ns:Password>2</ns:Password>
    </ns:User>
  </s:Body>
</s:Envelope>
```

In this example, the standard methods of passing credentials (for example, HTTP basic or digest authentication, SAML assertions, and WS-Security Username tokens) are bypassed, and the client sends the user name and password as parameters in a simple SOAP message.

When the API Gateway receives this message, it can extract the value of the `<Username>`
and `<Password>`
elements using an XPath expression configured in the **Retrieve from Message**
filter. This filter uses an XPath expression to retrieve the value of an element or attribute, and can then store this value in the specified message attribute.

You can configure an instance of this filter to retrieve the value of the `<Username>`
attribute, and store it in the `authentication.subject.id`
message attribute. Similarly, you can configure another filter to retrieve the value of the `<Password>`, and store it in the `authentication.subject.password`
message attribute.

The **Attribute Authentication**
filter can then use the user name and password values stored in these message attributes to authenticate the user against the specified authentication repository.

</div>

<div id="authn_attributes_conf">

Configuration
-------------

Complete the following fields to configure this filter:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Username**:\
Specify the API Gateway message attribute that contains the user name of the user to be authenticated. The default attribute is the `authentication.subject.id`
attribute, which is typically used to store a user name.

**Password**:\
Enter the API Gateway message attribute that contains the password of the user to authenticate. The default message attribute is `authentication.subject.password`, which typically stores a password.

**Credential Format**:\
Select the format of the credential stored in the API Gateway message attribute specified in the **Username**
field above. By default, `User Name`
is selected.

**Repository Name**:\
Select an existing repository to authenticate the user against from the list. Alternatively, you can configure a new authentication repository by clicking the **Add**
button. For more details on configuring the various types of repository supported by the API Gateway, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
