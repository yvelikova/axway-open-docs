{
    "title": "API administration overview",
    "linkTitle": "API administration overview",
    "weight": "2",
    "date": "2019-09-17",
    "description": "Learn about the concepts and workflows in API administration."
}

API administrators use API Manager to administer the managed APIs that are exposed to API consumers. The API administrator is a business or operational role who understands the business capability of the APIs, which clients want to access them, and for what reasons. The API administrator does not necessarily have deep knowledge of the API Gateway, and is not familiar with the Policy Studio developer tool.

The API administrator role is responsible for API Manager. This role manages and monitors the virtualized APIs and the clients that use those APIs. API administrator tasks include the following:

* Managing organizations—registering organizations and defining which APIs they are authorized to access
* Managing client applications—managing client application credentials and API authorizations
* Managing users—API consumers, organization administrators, and API administrators
* Managing API quotas—system-level and client application-level quotas
* Monitoring and reporting on API usage

## API administration concepts

This section describes the main components and concepts in API administration.

### Applications

Applications invoke the virtualized APIs exposed by the API Gateway. Applications are registered by API consumers or by the API administrator using API Manager. Application authentication credentials are also defined and managed this way. Application entitlements determine which APIs the application is authorized to access and the quota management (throttling rate) for each API. Entitlements are determined by the organization that the application is part of, and any application-specific entitlements. Application entitlements are managed by the API administrator using API Manager.

In the Community organization, only users that create an application and the API administrator have management privileges for that application (for example, managing application details, or deleting the application). In a named organization, multiple users can have management privileges for an application, and management privileges can be moved from one user to another (for example, from an API consumer to an operational user, or to a team of API consumers working on the application).

The API administrator has full management privileges over all applications. The following rules apply to managing which users have management privileges for an application:

* A user with management privileges can add another user, but not remove another user.
* A user with management privileges can remove themselves, unless they are the last user to have management privileges. An application must always have one user with management privileges.
* If delegated by the API administrator, the organization administrator can add and remove users.
* The API administrator can add and remove users.

### Quotas

The API administrator can manage the maximum message traffic rate that can be sent by applications to APIs using the following types of quotas:

* *System quota*: The maximum message rate that can be sent to APIs and their methods, aggregated across all client applications, regardless of organization. This controls the amount of incoming traffic that can be sent to any API and its methods, regardless of the client application.

    For example, if a system quota is configured for API A and method B, and the API is called by two different applications, both calls have the same effect on the system-wide quota. The system quota is a global setting designed to protect back-end systems (for example, if the system can only process 100 messages per second).

* *Application-default quota*: The default quota that applies on a per-application basis to all applications unless an application-specific quota is configured. This quota specifies the default maximum message rate that any application can send to APIs and methods (for example, 25 messages per second).
* *Application-specific quota*: This overrides the application-default quota. This quota specifies the maximum message rate that the specific application can send to APIs and methods (for example, 15 messages per second).

API administrators can specify all quotas at the API and at API method level. For more details, see [Manage quotas](/docs/apimgr_admin/api_mgmt_admin/#manage-quotas).

### Authorization

The API administrator can manage the APIs that organizations and applications can access using the following:

* *Organization authorization*: the API administrator can define the APIs that the organization is allowed to access. For example, a named hotel organization can only access the reservation and payment APIs.
* *Application authorization*: the API administrator can define the APIs that the application is allowed to access. For example, a specific client application in the hotel organization can only access the reservation API.
* *User management*: the API administrator can assign users a specific organization (Community or named) and user role (API consumer user, organization administrator, or API administrator).

{{< alert title="Note" color="primary" >}}The API administrator must first specify the APIs that an organization is allowed to access before any of its client applications can have access to them. In API Manager, you can only add APIs to an application when you have first added them to the organization. {{< /alert >}}

### Authentication

You can define the authentication mechanisms required by the API (for example, Two-Way SSL, HTTP Basic, API Key/Secret, OAuth, or AWS Signing Query String) using security profiles in API Manager. You can specify which security profiles are associated with the API to define the level of security required. The client applications can then use credentials to authenticate and identify the client application to API Gateway. This also enables the API administrator to see which client applications have used the API.

## API Manager access control

The API Manager user roles have the following access rights:

* **API administrator**: The API administrator has full access to API Manager, and can create, read, update, and delete organizations, users, and applications. The API administrator has management responsibility for applications and users. When users are being registered, the API administrator can approve or reject new users.

    Users can create applications, but they must first be approved by the API administrator. If users want to request access to another API for an approved application, the API access must also be approved. User and application management can be automatically approved. In addition, the API administrator can delegate the user and application management responsibility to organization administrators. But only the API administrator can edit quotas.

* **Organization administrator**: The organization administrator has full read access to users and applications in their organization. If application management is delegated, they can also create, update, and delete. The organization administrator can monitor all applications in their organization. They also have the same permissions as API consumers or application developer users.
* **API consumer**: The API consumer can create, read, update, and delete their applications. They can also give shared access to other users, granting permissions to view and monitor, or full access. If auto-approval is disabled, the user must wait for approval for new applications from the API administrator, or organization administrator if they have been delegated management responsibility. A user has full read access to all other users in the organization.

### API consumer user registration workflow

The use cases for the API consumer user registration workflow are:

* *Case 1: Automatic approval, delegated user management* - An API consumer registers in API Manager. The user is not created, and is placed in a pending queue. The user receives a security email to prove they own the email address. When they click a link, the user is created, and they receive a `created` email.
* *Case 2: Automatic approval, no delegated user management* - Same behavior as case 1.
* *Case 3: No automatic approval, no delegated user management* - Same behavior as case 1 and 2, except when the user clicks the link in the security email, they receive a `pending` email, and remain in the pending queue. An email notification is sent to the API administrator email address specified in the API Manager settings, and the API administrator approves or rejects the registration. When approved, the user is created, and receives a `created` email.
* *Case 4: No automatic approval, delegated user management* - Same behavior as case 3, except that the email notification is sent to the contact email address for the organization, and the API administrator or organization administrator approves or rejects the registration.

The following table shows the difference between case 3 and 4 when the appropriate settings are selected in API Manager:

| Auto-approve user registration | Delegate user management | API Portal | Output |
|--------------------------------|--------------------------|------------|--------|
| Disabled                       | Disabled                 | Enabled    | Email sent to API admin email address for approval by API admin, and directed to API Manager. |
| Disabled                       | Enabled                  | Enabled    | Email sent to the organization email address for approval by the API admin or organization admin, and directed to API Portal. If API Portal is disabled, the admin is directed to API Manager in all cases. |

For more details, see [API Manager settings](/docs/apimgr_ref/api_mgmt_config_web/#api-manager-settings).

### Application creation workflow

The use cases for the application creation workflow are:

* *Case 1: Automatic approval, delegated application management* - A user creates a new application, requesting access to specific APIs. The application is automatically approved and created.
* *Case 2: Automatic approval, no delegated application management* - Same behavior as case 1.
* *Case 3: No automatic approval, no delegated application management* - Same behavior as case 1 and 2, except the application is not created, and enters a pending queue. An email notification is sent to the contact address for the organization, and the API administrator approves or rejects the registration. When approved, the user receives a `created` email.
* *Case 4: No automatic approval, delegated application management* - Same behavior as case 3, except that the API administrator or organization administrator approves or rejects the registration.

The following table shows the difference between case 3 and 4 when the appropriate settings are selected in API Manager:

| Auto-approve applications | Delegate application management | API Portal | Output |
|---------------------------|---------------------------------|------------|--------|
| Disabled                  | Disabled                        | Enabled    | Email sent to the organization email address for approval by API admin, and directed to API Manager. |
| Disabled                  | Enabled                         | Enabled    | Email sent to the organization email address for approval by API admin or organization admin, and directed to API Manager in all cases. |

For more details, see [API Manager settings](/docs/apimgr_ref/api_mgmt_config_web/#api-manager-settings).

### API access workflow

The use cases for the API access workflow are:

* *Case 1: Organization wants new API access* - Only the API administrator can assign API access to organizations.
* *Case 2: User wants new API access to an existing application, automatic approval* - The user adds a new API, and the API access is granted immediately.
* *Case 3: User wants new API access to an existing application, no automatic approval, no delegated application management* -     The user adds a new API, and the API access request is placed in a `pending` queue. An email notification is sent to the contact address for the organization, and the API administrator approves or rejects the API access request. When approved, the access is granted.
* *Case 4: User wants new API Access to an existing application, no automatic approval, delegated application management* - Same behavior as case 3, except that the API administrator or organization administrator approves or rejects the API access request.

{{< alert title="Note" color="primary" >}}When an organization administrator adds a new front-end API, the API enters the `pending` queue, and the API administrator receives an email to approve or reject publishing the API.{{< /alert >}}

## API administrator view

When an API administrator logs on to API Manager, it displays a specific view for the API administrator. This includes the following:

### API

Register a **Backend API**, then virtualize it as a **Frontend API**, and browse all virtualized APIs in the **API Catalog**. For more details, see [Get started with API Manager](/docs/apimgr_admin/api_mgmt_workflow/).

### Clients

Manage client **Organizations**, **Application Developers**, and **Applications** in the domain. For example, this includes assigning users to specific organizations (named or Community), and to specific roles (API administrator, organization administrator, or API consumer user).

Manage system and application **Default Quotas**, and **OAuth Authorizations**. Quotas are maximum message rates for APIs and methods (for example, the number of messages or megabytes in a specified time period). For more details, see [Manage quotas](#Manage).This view also enables you to manage stored OAuth authorizations made by protected resource owners.

### Monitoring

View historical reports and statistics on all client applications in the domain. For more details, see [Monitor APIs and applications in API Manager](/docs/apimgr_admin/api_mgmt_monitor/).

### Settings

Manage the following settings:

* **Account**: User account details, role, and password (in this case, for the API administrator).
* **API Manager settings**: API Manager host details, and settings such as whether API consumer users or client applications are auto-approved, and whether organization administrators can approve users or applications.
* **Alerts**: Alert notifications for specific events (for example, when an application request is created, or an organization is created).
* **Remote hosts**: Connection settings for back-end servers invoked by front-end APIs.

## Organization administrator view

The view displayed for organization administrator is a subset of the view displayed for the API administrator. For example, the organization administrator cannot view **OAuth Authorizations**, **Default Quotas**, **API Manager Settings**, or **Alerts**. The following shows an example view:

![Organization Administrator View](/Images/docbook/images/api_mgmt/api_mgmt_org_admin.png)