{
"title": "Management services RBAC",
"linkTitle": "Management services RBAC",
"date": "2019-10-17",
"description": "Role-Based Access Control (RBAC) is used to protect access to the API Gateway management services. For example, management services are invoked when a user accesses the server using Policy Studio or API Gateway Manager (`https://localhost:8090/`). For more information on RBAC, see the \\n \\n \\n ."
}
﻿
<div id="p_authz_rbac_overview">

Overview
--------

Role-Based Access Control (RBAC) is used to protect access to the API Gateway management services. For example, management services are invoked when a user accesses the server using Policy Studio or API Gateway Manager (`https://localhost:8090/`). For more information on RBAC, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

The **Management Services RBAC**
filter can be used to perform the following tasks:

-   Read the user roles from the configured message attribute (for example, `authentication.subject.role`).
-   Determine which management service URI is currently being invoked.
-   Return true if one of the roles has access to the management service currently being invoked, as defined in the `acl.json`
    file.
-   Otherwise, return false.

{{< alert title="Caution" color="warning" >}}This filter is for management services use only. The **Management Services** HTTP services group should only be modified under strict supervision from Axway Support. For more details, see the
[Management services](/csh?context=620&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.{{< /alert >}}

</div>

<div id="p_authz_rbac_conf">

Configuration
-------------

Configure the following settings:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Role Attribute**:\
Select or enter the message attribute that contains the user roles.

</div>
