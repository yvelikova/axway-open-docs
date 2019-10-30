{
"title": "Retrieve attribute from Tivoli",
"linkTitle": "Retrieve attribute from Tivoli",
"date": "2019-10-17",
"description": "You can use the **Retrieve from Tivoli** filter when you need to retrieve user attributes independently from authorizing the user against Tivoli Access Manager for e-business. This filter is found in the **Attributes** category."
}
﻿

You can use the **Retrieve from Tivoli** filter when you need to retrieve user attributes independently from authorizing the user against Tivoli Access Manager for e-business. This filter is found in the **Attributes** category.

For details on prerequisites for integration with IBM Tivoli, see the
[API Gateway Authentication and Authorization Integration Guide](/bundle/APIGateway_77_AuthAuthIntegrationGuide_allOS_en_HTML5)
.

Configuration
-------------

Complete the following fields to configure the **Retrieve from Tivoli** filter:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**User ID**:\
Enter the ID of a user to retrieve attributes for. You can enter a static user name, Distinguished Name (DName), or selector representing a message attribute. The selector is expanded to the value of the message attribute at runtime.

For example, you can enter `${authentication.subject.id}`. This means that the ID of the authenticated user, which is normally a DName, is used to retrieve attributes for. For this to work correctly, you must configure an authentication filter to run before this filter in the policy. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Attributes**:\
You can specify a list of user attributes to retrieve from the Tivoli server. To add individual attributes to be retrieved, click **Add** and enter the attributes in the dialog. If you want all attributes to be retrieved, leave the table blank.

**Tivoli Configuration Files**:\
A Tivoli configuration file that contains all the required connection details is associated with a particular API Gateway instance. Click **Settings** to display the **Tivoli Configuration** dialog. On the **Tivoli Configuration** dialog, select the API Gateway instance which connection details you want to edit. For more details on configuring this wizard, see
[Configure Tivoli connections](/csh?context=632&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
