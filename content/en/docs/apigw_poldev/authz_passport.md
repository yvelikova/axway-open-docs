{
"title": "Axway PassPort authorization",
"linkTitle": "Axway PassPort authorization",
"date": "2019-10-17",
"description": "Axway PassPort provides a central repository, identity broker, and security audit point for Business-to-Business Integration (B2Bi) or Managed File Transfer (MFT) solutions. Axway PassPort centralizes and simplifies provisioning and management for your entire online ecosystem, enabling secure collaboration between applications, divisions, customers, suppliers, and regulatory bodies. "
}
﻿
<div id="p_authz_passport_overview">

Overview
--------

Axway PassPort provides a central repository, identity broker, and security audit point for Business-to-Business Integration (B2Bi) or Managed File Transfer (MFT) solutions. Axway PassPort centralizes and simplifies provisioning and management for your entire online ecosystem, enabling secure collaboration between applications, divisions, customers, suppliers, and regulatory bodies.

This topic explains how to configure the settings in the **Axway PassPort Authorization**
filter, which are used to configure integration between Axway PassPort and API Gateway.

<div>

### Axway CSD

An Axway Component Security Descriptor (CSD) file is an XML file that defines resources, privileges, and roles for each component. For more details, see the *Axway PassPort* user documentation. The **Axway PassPort Authorization**
filter checks if the specified user has the privileges to perform the action on the specified resource. The CSD file defines the available actions that a resource supports. It might also define privileges and roles, which can also be created in the PassPort administration user interface.

</div>

</div>

<div id="p_authz_passport_conf">

Configuration
-------------

Configure the following settings:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**User ID**:\
Enter the ID of the user to authorize. You can enter a static name or a selector that specifies a message attribute. The selector is expanded at runtime to the value of the message attribute. For more details on specifying settings as selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
. Defaults to `${authentication.subject.id}`.

**Resource**:\
Enter the name of the resource for which the user is seeking authorization. This resource must have been defined in the `<ResourceDefinition>`
in the PassPort repository CSD. You can enter a static name or a selector that specifies a message attribute. The selector is expanded at runtime to the value of the message attribute. Defaults to `${http.request.uri}`.

**Action**:\
Enter the action being performed on the resource for which authorization is sought. This action must have been defined in the `<AvailableActions>`
section of the PassPort repository CSD. You can enter a static name or a selector that specifies a message attribute. The selector is expanded at runtime to the value of the message attribute. Defaults to `${http.request.verb}`.

**PassPort Repository**:\
Select an existing connection to an Axway PassPort repository to use for authorization. To configure a connection in the Policy Studio tree, right-click **Environment Configuration** > **External Connections** > **Authentication Repository Profiles** > **Axway PassPort Repository**, and select **Add a new Repository**. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>
