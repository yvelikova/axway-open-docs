{
"title": "Call internal service",
"linkTitle": "Call internal service",
"weight": 19,
"date": "2019-10-17",
"description": "Pass messages to an internal servlet application or static content provider that has been deployed at the API Gateway."
}

The **Call internal service**
filter is a special filter that passes messages to an internal servlet application or static content provider that has been deployed at the API Gateway. The appropriate application is selected based on the relative path on which the request message is received.

This filter is used by Management Services that are configured to listen on the Management Interface on port 8090. For more information on how the **Call internal service**
filter is used by these services, see [Management services](/docs/apigw_poldev/gw_instances/general_services/#management-services).

## Configuration

You can configure the following fields on the filter window:

**Name**:
Enter an appropriate name for this filter to display in a policy.

**Additional HTTP Headers to Send to Internal Service**:
Click the **Add**
button to configure additional HTTP headers to send to the internal application. Specify the following fields on the **HTTP Header**
dialog:

* **HTTP Header Name**:
    Enter the name of the HTTP header to add to the message.
* **HTTP Header Value**:
    Enter the value of the new HTTP header. You can also enter selectors to represent message attributes. At runtime, API Gateway expands these selectors to the current value of the corresponding message attribute. For example, the `${id}`
    selector is replaced by the value of the current message ID.
