{
    "title": "API Manager custom policies",
    "linkTitle": "API Manager custom policies",
    "date": "2019-09-17",
    "description": "API Manager custom policies are optional policies developed in Policy Studio that can be applied to APIs registered in API Manager. For example, these include custom policies for inbound security, request or response processing, or routing."
}

API Manager custom policies are optional policies developed in Policy Studio that can be applied to APIs registered in API Manager. For example, these include custom policies for inbound security, request or response processing, or routing.

This topic describes the API Manager HTTP request flow, and explains the different custom policies that you can add at different stages in the flow. It also gives examples of why you would use these custom policies and explains what happens when they are executed at runtime.

For details on how to configure policies in Policy Studio, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

## API Manager HTTP request flow

When custom policies are configured for front-end APIs in API Manager, the request flow is in the following order:

1. Client request
2. Default inbound security or optional inbound security policy
3. Optional request policy
4. Outbound authentication profile and/or default routing or optional routing policy
5. Back-end service
6. Optional response policy
7. Client response

This HTTP client request flow is shown in the following swim lane diagram:

![API Manager HTTP Request Flow](/Images/docbook/images/api_mgmt/api_mgmt_http_request_flow.png)

The API Manager policy flow is described as follows:

* When the client makes an API call to API Manager, and the API request is first verified. If the request is not valid or not permitted, API Manager returns an HTTP error such as:
    * `HTTP 400 Bad Request`
    * `HTTP 404 Not Found`
    * `HTTP 405 Method Not Allowed`
    * `HTTP 429 Too Many Requests`
* When the API request has been verified, the optional custom inbound security policy is invoked if configured. This means that the default security no longer applies, and all authentication and access to the API by the API Manager organization must be provided by the custom policy. When inbound security returns `false`, API Manager returns an HTTP error such as:
    * `HTTP 401 Unauthorized`
    * `HTTP 403 Authentication Failed`
    * `HTTP 500 Internal Server Error`
* If an optional request policy is configured, it could perform some customization on the client request, which is controlled by the API Manager administrator, before sending it to the routing policy.
* The default routing uses a **Connect to URL** filter to route to the back-end service. If you need to customize this, you can configure an custom routing policy instead.
* The client request is then routed to the back-end service.
* When the response is returned from the back-end service to API Manager, if an optional response policy is configured, it processes the response and can customize it as needed before the response is returned to the client.

## API Manager custom policies

The order of execution of the different custom policies is as follows:

![API Manager Custom Policy Flow](/Images/docbook/images/api_mgmt/api_mgmt_custom_policy_flow.png)

### Custom policy execution

The following general rules apply when API Manager custom polices are executed:

* If a filter in a custom policy is aborted, the execution flow is interrupted, and an `HTTP 500 Internal Server Error` is returned to the client. You can add an API Gateway **Generic Error** fault handler filter to a policy, but this will print the stack trace and the execution flow will continue to the next policies.
* If a filter in a custom policy returns `false`, and there is no false flow defined in the policy, an `HTTP 500 Internal Server Error` is returned to the client. However, in this case, you can customize the false flow and return a custom HTTP code and error message. For example, you could use a **Set Attributes** or **Copy/Modify Attributes** filter to set the following message attributes when your request policy fails:
* You can then use a custom routing policy to control processing and routing to the back-end. For example, you can test the value of the `request.policy.failure` attribute to check if the request policy succeeded, and then route to back-end. If the request policy failed, you can stop processing, and use the values from `request.policy.httpcode` and `request.policy.error.msg` to create a custom message that is reflected to the end user.
* You can define API Manager fault handler policies at the API Manager, API, and method level. However, if a local fault handler is configured for any custom policies, and an exception occurs in any of these policies, the local fault handler is executed for the exception. The flow then continues as if the exception did not occur, which may not be the desired behavior.
* A workaround is to define a policy that acts as the fault handler using an API Gateway **Policy Shortcut** filter, and for that policy to return `false`. This ensures that any API Manager fault handler policies also get executed. For more details, see [Add API Manager fault handler policies](api_mgmt_fault_handler.htm).
* In the case of failure, an `HTTP 500 Internal Server Error` response code is always returned for a SOAP 1.1 response, or an `HTTP 400` and `HTTP 500` for a SOAP 1.2 response with the corresponding SOAP fault code in the SOAP response body.

### Custom policy types

These API Manager custom policies are described as follows:

{{< alert title="Note" color="primary" >}}These custom policies apply to APIs registered using API Manager only, and do not apply to policies registered using Policy Studio. These custom policies enable policy developers to implement enterprise-specific policies in Policy Studio that can be applied to multiple APIs in API Manager.{{< /alert >}}

## Further information

For more details, see the following related topics:

* [Enforce API Manager global policies](api_mgmt_global_policies.htm)
* [Add custom API Manager routing policies](api_mgmt_custom_routing_policies.htm)
* [Add API Manager fault handler policies](api_mgmt_fault_handler.htm)
* [Configure API Manager settings in Policy Studio](api_mgmt_config_ps.htm)
* [Configure web-based settings in API Manager](api_mgmt_config_web.htm)
* [Virtualize REST APIs in API Manager](api_mgmt_virtualize_web.htm)
