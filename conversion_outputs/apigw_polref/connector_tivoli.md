{
"title": "Tivoli authorization",
"linkTitle": "Tivoli authorization",
"date": "2019-10-17",
"description": "IBM Tivoli Access Manager for e-business (TAM) provides authentication and access control services for web resources. It also stores policies describing the access rights of users."
}
﻿

IBM Tivoli Access Manager for e-business (TAM) provides authentication and access control services for web resources. It also stores policies describing the access rights of users.

API Gateway can integrate with this product through the **Tivoli** filter. This filter can query Tivoli for authorization information for a particular user on a given resource. In other words, API Gateway asks Tivoli to make the authorization decision. If the user has been given authorization rights to the web service, the request is allowed through to the service. Otherwise, the request is rejected.

Prerequisites
-------------

Before you can configure the **Tivoli** filter, you must configure API Gateway for integration with TAM. For more details, see the
[API Gateway Authentication and Authorization Integration Guide](/bundle/APIGateway_77_AuthAuthIntegrationGuide_allOS_en_HTML5)

Configuration
-------------

Configure the following fields on the **Tivoli Authorization** window:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Object Space**:\
The object space represents the resource for which the client must be authorized. Enter the name of the resources in the **Object Space** field. You can also enter selectors that represent the values of message attributes. At runtime, API Gateway expands the selector to the current value of the corresponding message attribute. For example, to specify the original path on which the request was received by API Gateway as the resource, enter the selector `${http.request.uri}`. For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Permissions**:\
Clients can access a resource with a number of permissions such as read, write, and execute. A client is only authorized to access the requested resource if it has the relevant permissions checked in the table. To edit the existing permissions, click **Edit**.

**Attributes**:\
You can specify a list of user attributes to retrieve from the Tivoli server. To add attributes to be retrieved that are not listed, click **Add**, and enter the attribute name in the dialog. If you want to retrieve all attributes, leave the table blank, and select **Set attributes for SAML Attribute token**. You can then use these attributes in a **Insert SAML Attribute Assertion** filter at a later stage. If you do not want to retrieve any attributes, leave the table blank and deselect **Set attributes for SAML Attribute token**.

{{< alert title="Note" color="primary" >}}The permissions for the `primary` action group are available by default. You can also configure custom action groups and make them available for selection in the filter. The groups created here reflect custom groups created on the Tivoli server. To create a new group with custom action bits, click the **Edit** button to display the **Tivoli Action Group** dialog.{{< /alert >}}

Enter a name for the group in the **Name** field. Click **Add** to add a new action bit to the group. The **Tivoli Action** dialog is displayed. You must enter an **Action Bit** (for example, `r`) and a **Description** (for example, `Read permission`) for the new action bit. Click **OK** on the **Tivoli Action** dialog to return to the **Tivoli Action Group** dialog.

Add as many action bits as required to your new group before clicking **OK** on the **Tivoli Action Group**
dialog. The new action bits are then available for selection in the table on the main filter window.

**Tivoli Configuration Files**:\
A Tivoli configuration file that contains all the required connection details is associated with a particular API Gateway instance. Click **Settings** to display the **Tivoli Configuration** dialog.

On the **Tivoli Configuration** dialog, select the API Gateway instance whose connection details you want to configure, then follow the steps as outlined in the
[API Gateway Authentication and Authorization Integration Guide](/bundle/APIGateway_77_AuthAuthIntegrationGuide_allOS_en_HTML5)
.
