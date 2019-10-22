{
"title": "Set message",
"linkTitle": "Set message",
"date": "2019-10-17",
"description": "The **Set Message**\\nfilter replaces the body of the message. The replacement data can be plain text, HTML, XML, or any other text-based markup."
}
﻿
<div id="p_conversion_set_message_overview">

Overview
--------

The **Set Message**
filter replaces the body of the message. The replacement data can be plain text, HTML, XML, or any other text-based markup.

You can also use the **Set Message**
filter to customize SOAP faults that are returned to clients in the case of a failure or exception in the policy. For a detailed explanation of how to use this filter to customize SOAP faults, see [*SOAP fault handling* on page 1](fault_soap.htm).

</div>

<div id="p_conversion_set_message_conf">

Configuration
-------------

Perform the following steps to configure the **Set Message**
filter:

1.  Enter a name for this filter to display in a policy in the **Name**
    field.
2.  Specify the content type of the new message body in the **Content-Type**
    field. For example, if the new message body is HTML markup, enter `text/html`
    in the **Content-Type**
    field.
3.  Enter the new message body in the **Message Body**
    text area.
4.  You can use selectors to ensure that current message attribute values are inserted into the message body at the appropriate places. For more information, see [*Example of using selectors in the message body* on page 1](#Example).
5.  Alternatively, click **Populate**
    on the right of the window, and select **From file on disk**
    to load the message contents from a file, or select **From web service operation**
    to load the message contents from a web service (WSDL file) that you have already imported into the web service repository.
6.  You can also insert REST API parameters into the message body. Right-click within the message body at the point where the parameter should be inserted and select **Insert > REST API Parameter**.

</div>

<div id="p_conversion_set_message_example">

Example of using selectors in the message body
----------------------------------------------

You can use selectors representing the values of message attributes in the replacement text to insert message-specific data into the message body. For example, you can insert the authenticated user's ID into a `<Username>`
element by using a `${authentication.subject.id}`
selector as follows:

    <?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Header>
        <Username>${authentication.subject.id}</Username>
      </soap:Header>
      <soap:Body>
        <getQuote xmlns="axway.com">
          <ticker>ORM.L</ticker>
        </getQuote>
      </soap:Body>
    </soap:Envelope>

Assuming the user authenticated successfully to the API Gateway, the message body is set as follows:

    <?xml version="1.0" encoding="UTF-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Header>
        <Username>axway</Username>
      </soap:Header>
      <soap:Body>
        <getQuote xmlns="axway.com">
          <ticker>ORM.L</ticker>
        </getQuote>
      </soap:Body>
    </soap:Envelope>

For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
