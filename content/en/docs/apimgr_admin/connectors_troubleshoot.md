{
"title": "Troubleshoot connectors",
"linkTitle": "Troubleshoot connectors",
"date": "2019-09-17",
"description": "This topic describes problems you might encounter when configuring connectors, and provides possible solutions."
}
﻿

This topic describes problems you might encounter when configuring connectors, and provides possible solutions.

Configure a connector to route through a HTTP proxy
---------------------------------------------------

You need to configure an API Manager connector (for example, for Salesforce.com) to route through an outbound HTTP proxy because your company requires all access to external applications to be routed through a proxy.

Configure the API Manager connector and the imported cloud application APIs to route through a proxy.

1.  Create a file called `jvm.xml` in the folder `INSTALL_DIR/apigateway/conf` (if it does not already exist).
2.  Add the following setting:
3.  ``` {space="preserve"}
    <ConfigurationFragment>
      <SystemProperty name=”apiconnector.http.proxyHost” value=YOUR_PROXY_HOST />
      <SystemProperty name=”apiconnector.http.proxyPort” value=YOUR_PROXY_PORT />
    </ConfigurationFragment>
    ```

4.  Restart the API Manager-enabled API Gateway instance to enable the changes in `jvm.xml` to be applied.
5.  Import the cloud application APIs (for example, Salesforce APIs) in API Manager.
6.  In Policy Studio, select **Environment Configuration > External Connections > Proxy Servers** and create a new proxy server with the host and port details of your outbound HTTP proxy.
7.  Create a custom routing policy. Copy one of the templates under **Policies > Generated Policies > REST APIs > Templates** and rename the copy to **Routing via Proxy**.
8.  Edit the **Connect to URL** filter contained in the custom routing policy. Select **Settings** and under the **Proxy** section, select the proxy server you created earlier.
9.  Select **Server Settings > API Manager > Routing Policies** and add the custom routing policy.
10. Deploy the new configuration to the API Manager-enabled API Gateway instance.
11. In API Manager, change the default method routing to **Routing via Proxy** for the APIs that were generated using the connectors.

Related topics

[Configure a connector for Salesforce APIs](api_mgmt_connector_salesforce.htm)

[Configure a connector for ServiceNow APIs](api_mgmt_connector_servicenow.htm)

[Configure a connector for Axway API Runtime Services](api_mgmt_connector_api_builder.htm)

[Add custom API Manager routing policies](api_mgmt_custom_routing_policies.htm)
