{
"title": "Sun Access Manager authorization",
"linkTitle": "Sun Access Manager authorization",
"date": "2019-10-17",
"description": "This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](%3Ca%20href=)."
}
﻿

{{< alert title="Note" color="primary" >}}This feature has been deprecated and will be removed in a future release. See Oracle Access Manager filters.{{< /alert >}}

Sun Access Manager is an identity management product that provides authentication, authorization, and single sign-on (SSO) capabilities. API Gateway uses an access manager policy agent embedded in the **Authorization** filter to authorize previously authenticated users for a particular resource.

Configuration
-------------

Complete the following fields to authorize an authenticated user against Sun Access Manager:

**Name**:\
Enter a descriptive name for this filter.

**Service Name**:\
Enter the name of the configured access manager service to which the **Resource** specified below belongs.

**Resource**:\
Enter the name of the resource for which the request must be authorized. You can configure access rules for protected resources with Sun Access Manager. For more details, see the access manager documentation.

{{< alert title="Note" color="primary" >}}The value entered here can include one or more message attribute selectors. At runtime, each selector is replaced by the value of the corresponding API Gateway message attribute.{{< /alert >}}

For example, the `${http.request.uri}` selector is replaced by the relative path on which the request was received, while the `${http.request.verb}` selector is replaced by the HTTP verb used in the request to the API Gateway. To view a list of available message attribute selectors, enter the `$` character in this field. You can then select one or more appropriate string-based selectors from the list to specify the resource name. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

For example, the default configuration entry for this field is:

``` {space="preserve"}
http://www.yourserverhostnamehere.com${http.request.uri}
```

At runtime, each of the selectors is replaced by the corresponding value to produce a **Resource** such as the following:

``` {space="preserve"}
http://HOST_MACHINE:8080/services/getHello
```

`HOST_MACHINE` represents the IP address or host name of the machine running API Gateway.

**Action**:\
Sun Access Manager can grant or restrict access to a protected resource based on the action in the request. For example, an administrator user can `POST` to a web page resource, but a normal user can only view the resource using `GET` requests. Therefore, for web page resources, the **Action** specified typically corresponds to an HTTP verb. However, other applications might have custom operations associated with them that can also be specified.

By default, the **Action** field is configured to use the `${http.request.verb}` selector, which is replaced at runtime by the HTTP verb (for example, `POST`) used by the client to send the request to API Gateway.
