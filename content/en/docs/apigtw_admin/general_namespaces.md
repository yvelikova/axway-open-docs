{
"title": "Namespace settings",
"linkTitle": "Namespace settings",
"date": "2019-10-14",
"description": "API Gateway exposes global settings that enable you to configure which versions of the SOAP and WSSE specifications it supports. You can also specify which attribute is used to identify the XML Signature referenced in a SOAP message."
}
﻿

API Gateway exposes global settings that enable you to configure which versions of the SOAP and WSSE specifications it supports. You can also specify which attribute is used to identify the XML Signature referenced in a SOAP message.

To configure the namespace settings, in the Policy Studio tree, select the **Environment Configuration > Server Settings** node, and click **General > Namespaces**. Alternatively, in the Policy Studio main menu, select **Tasks > Manage Gateway Settings > General > Namespaces**. To confirm updates to these settings, click **Apply changes** at the bottom right of the screen.

SOAP Namespace
--------------

The **SOAP Namespace** tab can be used to configure the SOAP namespaces that are supported by API Gateway. In a similar manner to the way in which API Gateway handles WSSE namespaces, API Gateway will attempt to identify SOAP messages belonging to the listed namespaces in the order given in the table.

The default behavior is to attempt to identify SOAP 1.1 messages first, and for this reason, the SOAP 1.1 namespace is listed first in the table. API Gateway will only attempt to identify the message as a SOAP 1.2 message if it can't be categorized as a SOAP 1.1 message first.

Signature ID Attribute
----------------------

The **Signature ID Attribute** tab allows you to list the supported attributes that can be used by API Gateway to identify a Signature reference within an XML message.

An XML-signature `<signedInfo>` section may reference signed data via the `URI` attribute. The `URI`
value may contain an id that identifies data in the message. The referenced data will hold the "URI" field value in one of its attributes.

By default, the server uses the `Id` attribute for each of the WSSE namespaces listed above to locate referenced signed data. The following sample XML Signature illustrates the use of the `Id` attribute:

``` {space="preserve"}
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Header>
      <dsig:Signature id="Sample" xmlns:dsig="http://www.w3.org/2000/09/xmldsig#">
       <dsig:SignedInfo>
         ...
         <dsig:Reference URI="#Axway:sLmDCph3tGZ10">
          ...
         </dsig:Reference>
       </dsig:SignedInfo>
       ....
      </dsig:Signature>
   </soap:Header>
   <soap:Body>
       <getProduct wsu:Id="Axway:sLmDCph3tGZ10" 
           xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility">
           <Name>SOA Test Client</Name>
           <Company>Company</Company>
       </getProduct>
   </soap:Body>
</soap:Envelope>
```

It is clear from this example that the Signature reference identified by the `URI` attribute of the `<Reference>`
element refers to the nodeset identified with the `Id` attribute (the `<getProduct>` block).

Because different toolkits and implementations of the XML-Signature specification can use attributes other than the `Id` attribute, API Gateway allows the user to specify other attributes that should be supported in this manner. By default, API Gateway supports the `Id`, `ID`, and `AssertionID`
attributes for the purposes of identifying the signed content within an XML Signature.

However you can add more attributes by clicking the **Add** button and adding the attribute in the interface provided. The priorities of attributes can be altered by clicking the **Up** and **Down** buttons. For example, if most of the XML Signatures processed by API Gateway use the `ID` attribute, this attribute should be given the highest priority.

WSSE Namespace
--------------

The **WSSE Namespace** tab is used to specify the WSSE (and corresponding WSSU) namespaces that are supported by API Gateway.

API Gateway attempts to identify WS Security blocks belongingto the WSSE namespaces listed in this table. It first attempts to locate Security blocks belonging to the first listed namespace, followed by the second, then the third, and so on until all namespaces have been utilized. If no Security blocks can be found for any of the listed namespaces, the message will be rejected on the grounds that API Gateway does not support the namespace specified in the message.To add a new namespace, click the add button.

{{< alert title="Note" color="primary" >}}Every WSSE namespace has a corresponding WSSU namespace. For example, the following WSSE and WSSU namespaces are inextricably bound:{{< /alert >}}

|                |                                                 |
|----------------|-------------------------------------------------|
| WSSE Namespace | `http://schemas.xmlsoap.org/ws/2003/06/secext`  |
| WSSU Namespace | `http://schemas.xmlsoap.org/ws/2003/06/utility` |

First, enter the WSSE namespace in the **Name** field. Then enter the corresponding WSSU namespace in the **WSSU Namespace** field.

Further information
-------------------

For details on XML Signature generation and verification filters, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
