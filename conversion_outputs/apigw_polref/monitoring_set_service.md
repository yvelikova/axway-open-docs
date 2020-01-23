{
"title": "Set service context",
"linkTitle": "Set service context",
"date": "2019-10-17",
"description": "The **Set Service Context**\\nfilter configures service-level monitoring details. For example, you can use the fields on this filter window to configure whether API Gateway stores service usage and service usage per client details. You can also set the name of the service displayed in the web-based API Gateway Manager monitoring tool and the API Gateway Analytics reporting tool."
}
﻿
<div id="p_monitoring_set_service_overview">

The **Set Service Context**
filter configures service-level monitoring details. For example, you can use the fields on this filter window to configure whether API Gateway stores service usage and service usage per client details. You can also set the name of the service displayed in the web-based API Gateway Manager monitoring tool and the API Gateway Analytics reporting tool.

</div>

<div id="p_monitoring_set_service_conf">

General settings
----------------

**Name**:\
Enter an appropriate name for the filter to be displayed in a policy.

**Service Name**:\
Enter an appropriate name for this service to be displayed in the web-based API Gateway Manager tool.

**Monitoring Options**:\
The fields in this group enable you to configure whether API Gateway displays usage metrics data for this web service:

-   **Enable monitoring**:\
    Select this option to enable monitoring for this web service in the **Monitoring**
    view in API Gateway Manager, and in API Gateway Analytics.
-   **Which attribute is used to identify the client**:\
    Enter the message attribute to use to identify authenticated clients. The default is `authentication.subject.id`, which stores the identifier of the authenticated user (for example, the user name or user's X.509 Distinguished Name).
-   **Composite context**:\
    This setting enables you to select a service context as a composite context in which multiple service contexts are monitored during the processing of a message. This setting is not selected by default.
-   For example, API Gateway receives a message, and sends it to `serviceA`
    first, and then to `serviceB`
    . Monitoring is performed separately for each service by default. However, you can set a composite service context before `serviceA`
    and `serviceB`
    that includes both services. This composite service passes if both services complete successfully, and monitoring is also performed on the composite service context.

For more details on monitoring and reporting, see:

-   

<!-- -->

-   

</div>
