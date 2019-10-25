{
"title": "Set web service context",
"linkTitle": "Set web service context",
"date": "2019-10-17",
"description": "The **Set Web Service Context**\\nfilter is used in a policy to determine the service to obtain resources from in the web service repository. "
}
﻿
<div id="p_ws_context_overview">

Overview
--------

The **Set Web Service Context**
filter is used in a policy to determine the service to obtain resources from in the web service repository.

For example, by pointing this filter at a preconfigured `getQuote`
service in the web service repository, the policy knows to return the WSDL for this particular service when a WSDL request is received. The **Return WSDL**
filter is used in conjunction with this filter to achieve this.

{{< alert title="Note" color="primary" >}}The **Set Web Service Context**
filter is configured automatically when auto-generating a policy from a WSDL file and is not normally manually configured. For a detailed example, see
[Manage web services](/csh?context=638&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.{{< /alert >}}

</div>

<div id="p_ws_context_conf">

General settings
----------------

**Name**:\
Enter a meaningful name for the filter to display in a policy.

</div>

<div id="p_ws_context_wsdl">

Service WSDL settings
---------------------

The **Service WSDL**
tab enables you to select the web service to obtain resources from in the web service repository.

Click the browse button to select a service definition (WSDL file) currently registered in the web service repository from the tree. To register a web service, right-click the default **APIs** > **Web Services**
node, and select **Register Web Service**.

For more details on adding services to the web service repository, see
[Manage web services](/csh?context=638&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_ws_context_monitoring">

Monitoring settings
-------------------

The fields on this tab enable you to configure to configure whether API Gateway displays usage metrics data for this web service. For example, this information can be used by API Gateway Analytics to produce reports showing how and who is calling this web service. For details on the fields on this tab, see [Monitoring options](ws_filter.htm#Monitori).

</div>
