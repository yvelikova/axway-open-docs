{
"title": "Policy Studio additional settings",
"linkTitle": "Policy Studio additional settings",
"weight":"46",
"date": "2019-10-14",
"description": "Configure API Gateway additional settings in Policy Studio."
}

## MIME settings

The MIME settings list a number of default common content types that are used when transmitting Multipurpose Internet Mail Extensions (MIME) messages. You can configure API Gateway's **Content Type** filter to accept or block messages containing specific MIME types. Therefore, the contents of the MIME types library act as the set of all MIME types that API Gateway can filter messages with.

All of the MIME types listed in the table are available for selection in the **Content Type** filter. For example, you can configure this filter to accept only XML-based types, such as `application/xml`, `application/*+xml`, `text/xml`, and so on. Similarly, you can block certain MIME types (for example, `application/zip`, `application/octet-stream`, and `video/mpeg`).

### MIME settings configuration

To configure the MIME settings, in the Policy Studio main menu, select **Tasks > Manage Gateway Settings > General > MIME**. Alternatively, in the Policy Studio tree, select the **Environment Configuration > Server Settings** node, and click **General > MIME**. To confirm updates to these settings, click **Apply changes** at the bottom right of the screen.

The MIME settings screen lists the actual MIME types on the left column of the table, together with their corresponding file extensions (where applicable) in the right column.

To add a new MIME type, click the **Add** button. In the **Configure MIME Type** dialog, enter the new content type in the **MIME Type** field. If the new type has a corresponding file extension, enter this extension in the **Extension** field. Click the **OK** button when finished.

Similarly, you can edit or delete existing types using the **Edit** and **Delete** buttons.

## Namespace settings

API Gateway exposes global settings that enable you to configure which versions of the SOAP and WSSE specifications it supports. You can also specify which attribute is used to identify the XML Signature referenced in a SOAP message.

To configure the namespace settings, in the Policy Studio tree, select the **Environment Configuration > Server Settings** node, and click **General > Namespaces**. Alternatively, in the Policy Studio main menu, select **Tasks > Manage Gateway Settings > General > Namespaces**. To confirm updates to these settings, click **Apply changes** at the bottom right of the screen.

### SOAP Namespace

The **SOAP Namespace** tab can be used to configure the SOAP namespaces that are supported by API Gateway. In a similar manner to the way in which API Gateway handles WSSE namespaces, API Gateway will attempt to identify SOAP messages belonging to the listed namespaces in the order given in the table.

The default behavior is to attempt to identify SOAP 1.1 messages first, and for this reason, the SOAP 1.1 namespace is listed first in the table. API Gateway will only attempt to identify the message as a SOAP 1.2 message if it can't be categorized as a SOAP 1.1 message first.

### Signature ID Attribute

The **Signature ID Attribute** tab allows you to list the supported attributes that can be used by API Gateway to identify a Signature reference within an XML message.

An XML-signature `<signedInfo>` section may reference signed data via the `URI` attribute. The `URI`
value may contain an id that identifies data in the message. The referenced data will hold the "URI" field value in one of its attributes.

By default, the server uses the `Id` attribute for each of the WSSE namespaces listed above to locate referenced signed data. The following sample XML Signature illustrates the use of the `Id` attribute:

```
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

It is clear from this example that the Signature reference identified by the `URI` attribute of the `<Reference>` element refers to the nodeset identified with the `Id` attribute (the `<getProduct>` block).

Because different toolkits and implementations of the XML-Signature specification can use attributes other than the `Id` attribute, API Gateway allows the user to specify other attributes that should be supported in this manner. By default, API Gateway supports the `Id`, `ID`, and `AssertionID` attributes for the purposes of identifying the signed content within an XML Signature.

However you can add more attributes by clicking the **Add** button and adding the attribute in the interface provided. The priorities of attributes can be altered by clicking the **Up** and **Down** buttons. For example, if most of the XML Signatures processed by API Gateway use the `ID` attribute, this attribute should be given the highest priority.

### WSSE Namespace

The **WSSE Namespace** tab is used to specify the WSSE (and corresponding WSSU) namespaces that are supported by API Gateway.

API Gateway attempts to identify WS Security blocks belongingto the WSSE namespaces listed in this table. It first attempts to locate Security blocks belonging to the first listed namespace, followed by the second, then the third, and so on until all namespaces have been utilized. If no Security blocks can be found for any of the listed namespaces, the message will be rejected on the grounds that API Gateway does not support the namespace specified in the message.To add a new namespace, click the add button.

{{< alert title="Note" color="primary" >}}Every WSSE namespace has a corresponding WSSU namespace. For example, the following WSSE and WSSU namespaces are inextricably bound:{{< /alert >}}

* WSSE Namespace - `http://schemas.xmlsoap.org/ws/2003/06/secext`
* WSSU Namespace - `http://schemas.xmlsoap.org/ws/2003/06/utility`

First, enter the WSSE namespace in the **Name** field. Then enter the corresponding WSSU namespace in the **WSSU Namespace** field.

## HTTP Session settings

The **HTTP Session** settings enable you to configure session management settings for the selected cache. For example, you can configure the period of timebefore expired sessions are cleared from the `HTTP Sessions` cache, which is selected by default.

To configure HTTP session settings, select the **Environment Configuration > Server Settings** node in the Policy Studio tree, and click **General > HTTP Session**.Alternatively, in the Policy Studio main menu, select **Tasks > ManageGateway Settings > General > HTTP Session**. To confirm updates to these settings, click **Apply changes** at the bottom right of the screen.

### HTTP Session Configuration

Configure the following session settings:

**Cache**:

Specifies the cache that you wish to configure. Defaults to `HTTP Sessions`.To configure a different cache, click the button on the right, and select the cache touse. The list of currently configured caches is displayed in the tree.

To add a cache, right-click the **Caches** tree node, and select **Add Local Cache** or **Add Distributed Cache**. Alternatively, you can configure caches under the **Environment Configuration > Libraries** node in the Policy Studio tree. For more details, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

**Clear Expired Sessions Period**:

Enter the number of seconds before expired sessions are cleared from the selected cache. Defaults to `60`.

## Zero downtime settings

The **Zero Downtime** settings enable you to configure zero downtime deployment and zero downtime shutdown. You can enable zero downtime deployment and set delays before and after deployment. You can also enable zero downtime shutdown and set the delay before shutdown.

To configure zero downtime settings, select the **Server Settings** node in the Policy Studio tree, and click **General > Zero Downtime**. To confirm updates to these settings, click **Save** at the bottom right of the window.

For more information of performing a zero downtime deployment, see [Perform zero downtime deployment](/docs/apigtw_admin/admin_zdd). For more information on performing a zero downtime shutdown, see [Perform zero downtime shutdown](/docs/apigtw_admin/admin_zds).

* Zero downtime deployment and shutdown rely on the **Health Check LB** policy to alert the load balancer when a maintenance operation is about to begin. To use the zero downtime deployment or shutdown features, the Health Check LB policy must be present in your API Gateway configuration.

### New projects

The Health Check LB policy is included in the default factory configuration.

When creating a new project in Policy Studio, choose **From a template configuration** and select the **Factory template with samples** template. This template includes the Health Check LB policy.

### Existing projects

If you created a project in Policy Studio from any other template (for example, **Factory template**, **Team Development – Common Project**, or **Team Development – API Project**), you must manually import the Health Check LB policy into your configuration.

To import the Health Check LB policy, select **File > Import > Import Configuration Fragment** from the Policy Studio main menu, and select the following file:

```
$VDISTDIR/samples/SamplePolicies/HealthCheck/HealthCheckLB.xml
```

You must also add the Health Check LB policy to a listener so that the load balancer can ping it to determine the health of the API Gateway (for example, path `/healthchecklb` on HTTP port `8080`).

* You can customize the Health Check LB policy for your own environment. For example, you can modify the response code and message that are returned to the load balancer.

### Zero downtime Configuration

Configure the following zero downtime settings:

**Zero-downtime deployment enabled**:

Select the check box to enable zero downtime deployment. The default is disabled.

**Delay before deployment**:

Enter the delay before deployment in seconds. This is the delay in the API Gateway between receiving a deployment request and starting the deployment. During this delay, the Health Check LB policy returns an error response, giving the load balancer time to route traffic away from the API Gateway before the deployment begins. The default is 10 seconds. You can choose a value between 1 and 20 seconds.

**Delay after deployment**:

Enter the delay after deployment in seconds. This is the delay in the API Gateway between the end of deployment and a response being sent to the deployment request. During this delay, the Health Check LB policy returns a successful response, giving the load balancer time to start routing traffic to the API Gateway before deployment begins on the next API Gateway in the group. The default is 10 seconds. You can choose a value between 1 and 20 seconds.

**Zero-downtime shutdown enabled**:

Select the check box to enable zero downtime shutdown. The default is disabled.

**Delay before shutdown**:

Enter the delay before shutdown in seconds. This is the delay in the API Gateway between receiving a shutdown request and starting the shutdown procedure. During this delay, the Health Check LB policy returns an error response, giving the load balancer time to route traffic away from the API Gateway before shutdown begins. The default is 10 seconds. You can choose a value between 1 and 20 seconds.
