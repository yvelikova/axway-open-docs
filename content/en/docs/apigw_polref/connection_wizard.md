{
"title": "Routing Wizard",
"linkTitle": "Routing Wizard",
"date": "2019-10-17",
"description": "For convenience, the API Gateway provides a **Routing Wizard**\\nto enable administrators to quickly configure the filters necessary to route messages on to a specific destination. The wizard auto-generates the following filters:"
}
<div id="connection_wizard_overview">

Overview
--------

For convenience, the API Gateway provides a **Routing Wizard**
to enable administrators to quickly configure the filters necessary to route messages on to a specific destination. The wizard auto-generates the following filters:

Filter
Role
Details
**Rewrite URL**
This filter determines the request URI of the HTTP request thatis ultimately made by the **Connection**
filter below. You should enter a complete URL (for example, `http://host:8080/services`
), from which the host and port is extracted and used to configure the **Static Router**
below.
Rewrite URL
**Static Router**
The **Static Router**
filter specifies the hostof the destination server together with the port to connectto on that host.
Static Router
**Connection**
The **Connection**
filter establishes the connection to the URL, host, and port specified in the **Rewrite URL**
and **Static Router**
filters. If an SSL connectionis required, you can select a certificate from the Trusted Certificate Store to use to authenticate to the destination server. You can also select what certificates are considered trusted by the API Gateway so that the destination server's certificate can be trusted.
Connection
To use the **Routing Wizard**
for a particular policy, right-click the policy under the **Policies**
node in the Policy Studio tree, and select **Routing Wizard**
. Configuring the **URL**
field and/or the **Proxy Settings**
tab in the **Routing Wizard**
auto-generates a **Rewrite URL**
filter and a **Static Router**
filter.

</div>

<div id="connection_wizard_conf">

Configuration
-------------

You can configure the following fields in the **Routing Wizard**
:

**URL**
:\
Enter the *full*
URL of the destination Web service. The host, port, and scheme (HTTP or HTTPS) are extracted from the URL and used to configure a **Static Router**
filter.

**Proxy Host**
:\
If you want to send the request using an HTTP proxy, configure the **Proxy Host**
and **Proxy Port**
. In this case, the **Static Router**
filter is configured with the host and port entered in these fields. The **Connection**
filter sends the complete URL specified in the **URL**
field as the request URI to the proxy, as required by the HTTP specification. The proxy then knows where to route the message on to.

{{< alert title="Note" color="primary" >}}If the **Proxy Host**
and **Proxy Port**
fields are completed, the wizard automatically selects the **Send via proxy**
field on the **Advanced**
tab of the auto-generated **Connection**
filter. {{< /alert >}}
**Proxy Port**
:\
If you want to route messages using a proxy to the destination Web service, enter the port on the **Proxy Host**
specified above on which the proxy accepts requests.

**SSL Port**
:\
If the proxy is SSL-enabled, enter the SSL port in this field.

**Trusted Certificates, Client SSL Authentication, and HTTP Authentication Tabs**\
The settings configured on the remaining tabs of the wizard correspond to the settings configured on the tabs displayed on the **Connection**
filter. For more information on configuring the fields on these tabs, see the Connection
topic.

</div>
