{
"title": "RSA Access Manager authorization",
"linkTitle": "RSA Access Manager authorization",
"date": "2019-10-17",
"description": "RSA Access Manager (formerly RSA ClearTrust) provides identity management and access control services for web applications. It centrally manages access to web applications, ensuring that only authorized users are allowed access to resources."
}
﻿

RSA Access Manager (formerly RSA ClearTrust) provides identity management and access control services for web applications. It centrally manages access to web applications, ensuring that only authorized users are allowed access to resources.

The **Access Manager** filter enables integration with RSA Access Manager. This filter can query Access Manager for authorization information for a particular user on a given resource. In other words, API Gateway asks Access Manager to make the authorization decision. If the user has been given authorization rights to the web service, the request is allowed through to the service. Otherwise, the request is rejected.

Prerequisites
-------------

You must copy RSA Access Manager libraries to API Gateway, so you must have RSA Access Manager installed on a server.

1.  Copy the following files from the `lib` directory on your RSA Access Manager installation:
2.  -   `axm-core-6.2.jar`
    -   `cryptojce-6.1.jar`
    -   `cryptojcommon-6.1.jar`
    -   `jcm-6.1.jar`

3.  Add the files to the `INSTALL_DIR/apigateway/ext/lib` directory on API Gateway:
4.  Restart API Gateway.

General settings
----------------

Configure the following general settings.

### Connection Details

The **Connection Details** section enables you to specify a group of Access Manager servers to connect to in order to authenticate clients. You can select a group of Access Manager servers to provide failover in cases where one or more servers are not available.

**Connection Group Type**:\
API Gateway can connect to a group of Access Manager authorization servers or dispatcher servers. When multiple Access Manager authorization servers are deployed for load-balancing purposes, API Gateway should first connect to a dispatcher server, which returns a list of active authorization servers. An attempt is then made to connect to one of these authorization servers using round-robin DNS. If the first dispatcher server in the connection group is not available, API Gateway attempts to connect to the dispatcher server with the next highest priority in the group, and so on.

If a dispatcher server has not been deployed, API Gateway can connect directly to an authorization server. If the authorization server with the highest priority in the connection group is not available, API Gateway attempts to connect to the authorization server with the next highest priority, and so on. Select the type of the connection group (**Authorization Server** or **Dispatcher Server**). All servers in the group must be of the same type.

**Connection Group**:\
Click the button on the right, and select the connection group to use for authenticating clients. To add a connection group, right-click the **RSA Access Manager Connection Sets** tree node, and select **Add a Connection Set**. Alternatively, you can configure a connection set under the **Environment Configuration > External Connections** node in the Policy Studio tree. For more details, see
[Configure connection groups](/csh?context=606&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Authorization Details

The **Authorization Details** section describes the resource for which the user is requesting access.

-   **Server**:\
    Enter the name of the server that is hosting the requested resource. The name entered must correspond to a preconfigured server name in Access Manager.
-   **Resource**:\
    Enter the name of the requested resource. This resource must be preconfigured in Access Manager.

Alternatively, you can enter a selector representing a message attribute in the **Resource** field. API Gateway expands this selector at runtime to the value of the corresponding message attribute. API Gateway message attribute selectors take the following format:

    ${message.attribute}

The following example of a typical SOAP message received by API Gateway shows how this works:

``` {space="preserve"}
POST /services/timeservice HTTP/1.0
Host:localhost:8095
Content-Length:374
SOAPAction:TimeService
Accept-Language:en-US
Content-Type:text/XML; utf-8
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <ns1:getTime xmlns:ns1="urn:timeservice"></ns1:getTime>
    </soap:Body>
</soap:Envelope>
```

The following table shows an example of selector expansion:

| Selector              | Expanded To             |
|-----------------------|-------------------------|
| `${http.request.uri}` | `/services/timeservice` |

For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
