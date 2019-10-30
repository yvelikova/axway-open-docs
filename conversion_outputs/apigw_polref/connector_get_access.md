{
"title": "Entrust GetAccess authorization",
"linkTitle": "Entrust GetAccess authorization",
"date": "2019-10-17",
"description": "Entrust GetAccess provides identity management and access control services for web resources. It centrally manages access to web applications, enabling users to benefit from a single sign-on capability when accessing the applications that they are authorized to use."
}
﻿
<div id="p_connector_get_access_overview">

Overview
--------

Entrust GetAccess provides identity management and access control services for web resources. It centrally manages access to web applications, enabling users to benefit from a single sign-on capability when accessing the applications that they are authorized to use.

The **GetAccess**
filter enables integration with Entrust GetAccess. This filter can query GetAccess for authorization information for a particular user for a given resource. In other words, the API Gateway asks GetAccess to make the authorization decision. If the user has been given authorization rights to the web service, the request is allowed through to the service. Otherwise, the request is rejected.

</div>

<div id="p_connector_get_access_sts">

GetAccess WS-Trust STS settings
-------------------------------

This tab enables you to configure how the API Gateway authenticates to the GetAccess WS-Trust Security Token Service (STS). You can configure the API Gateway to connect to a group of GetAccess STS servers in a round-robin fashion. This provides the necessary failover capability when one or more STS servers are not available.

Configure the following fields:

-   **URL Group**:\
    Click the button on the right, and select an STS URL group in the tree. This group consists of a number of GetAccess STS servers to which the API Gateway round-robins connection attempts. To add a URL group, right-click the **Entrust GetAccess URL Sets**
    node, and select **Add a URL Set**. Alternatively, you can configure a URL connection set under the **Environment Configuration** > **External Connections**
    node in the Policy Studio tree. For more details, see
    [Configure URL groups](/csh?context=636&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Drift Time**:\
    Having successfully authenticated to a GetAccess STS server, the STS server issues a SAML authentication assertion and returns it to the API Gateway. When checking the validity period of the assertion, the specified **Drift Time**
    is used to account for a possible difference between the time on the STS server and the time on the machine hosting the API Gateway.
-   **WS-Trust STS Attribute Field Name**:\
    Specify the field name for the `Id`
    field in the WS-Trust request. The default is `Id`.

</div>

<div id="p_connector_get_access_saml_pdp">

GetAccess SAML PDP settings
---------------------------

When the API Gateway has successfully authenticated to a GetAccess STS server, it can then obtain authorization information about the end user from the GetAccess SAML PDP. The authorization details are returned in a SAML authorization assertion, which is then validated by the API Gateway to determine whether the request should be denied.

Configure the following fields:

-   **URL Group**:\
    Click the button on the right, and select an SAML PDP URL group in the tree. This group consists of a number of GetAccess SAML PDP servers to which the API Gateway round-robins connection attempts. To add a URL group, right-click the **Entrust GetAccess URL Sets**
    node, and select **Add a URL Set**. Alternatively, you can configure a URL connection set under the **Environment Configuration** > **External Connections**
    node in the Policy Studio tree. For more details, see
    [Configure URL groups](/csh?context=636&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Drift Time**:\
    The specified **Drift Time**
    is used to account for the possible difference between the time on the GetAccess SAML PDP and the time on the machine hosting the API Gateway. This comes into effect when validating the SAML authorization assertion.
-   **Resource**:\
    This is the resource for which the client is requesting access. You can enter a selector representing a message attribute, which is looked up and expanded to a value at runtime. For example, to specify the original path on which the request was received by the API Gateway as the resource, enter the selector `${http.request.uri}`. For more details on selectors, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Actor/Role**:\
    To add the SAML authorization assertion to the downstream message, select a SOAP actor/role to indicate the WS-Security block where the assertion is added. Leave this field blank if the assertion is not to be added to the message.

</div>
