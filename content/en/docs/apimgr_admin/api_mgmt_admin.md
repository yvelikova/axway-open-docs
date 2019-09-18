{
"title": "Administer APIs in API Manager",
"linkTitle": "Administer APIs in API Manager",
"date": "2019-09-17",
"description": "API administrators use API Manager to administer the managed APIs that are exposed to API consumers. The API administrator is a business or operational role who understands the business capability of the APIs, which clients want to access them, and for what reasons. The API administrator does not necessarily have deep knowledge of the API Gateway, and is not familiar with the Policy Studio developer tool. "
}
﻿

API administrators use API Manager to administer the managed APIs that are exposed to API consumers. The API administrator is a business or operational role who understands the business capability of the APIs, which clients want to access them, and for what reasons. The API administrator does not necessarily have deep knowledge of the API Gateway, and is not familiar with the Policy Studio developer tool.

The API administrator role is responsible for API Manager. This role manages and monitors the virtualized APIs and the clients that use those APIs. API administrator tasks include the following:

-   Managing organizations—registering organizations and defining which APIs they are authorized to access
-   Managing client applications—managing client application credentials and API authorizations
-   Managing users—API consumers, organization administrators, and API administrators
-   Managing API quotas—system-level and client application-level quotas
-   Monitoring and reporting on API usage

These tasks are performed using the intuitive API Manager web interface. This topic focuses on the concepts and workflows in API administration, and shows some examples of using the API Manager web interface.

API administration concepts
---------------------------

This section describes the main components and concepts in API administration.

### Applications

Applications invoke the virtualized APIs exposed by the API Gateway. Applications are registered by API consumers or by the API administrator using API Manager. Application authentication credentials are also defined and managed this way. Application entitlements determine which APIs the application is authorized to access and the quota management (throttling rate) for each API. Entitlements are determined by the organization that the application is part of, and any application-specific entitlements. Application entitlements are managed by the API administrator using API Manager.

In the Community organization, only users that create an application and the API administrator have management privileges for that application (for example, managing application details, or deleting the application). In a named organization, multiple users can have management privileges for an application, and management privileges can be moved from one user to another (for example, from an API consumer to an operational user, or to a team of API consumers working on the application).

The API administrator has full management privileges over all applications. The following rules apply to managing which users have management privileges for an application:

-   A user with management privileges can add another user, but not remove another user.
-   A user with management privileges can remove themselves, unless they are the last user to have management privileges. An application must always have one user with management privileges.
-   If delegated by the API administrator, the organization administrator can add and remove users.
-   The API administrator can add and remove users.

### Quotas

The API administrator can manage the maximum message traffic rate that can be sent by applications to APIs using the following types of quotas:

-   *System quota*: The maximum message rate that can be sent to APIs and their methods, aggregated across all client applications, regardless of organization. This controls the amount of incoming traffic that can be sent to any API and its methods, regardless of the client application. For example, if a system quota is configured for API A and method B, and the API is called by two different applications, both calls have the same effect on the system-wide quota. The system quota is a global setting designed to protect back-end systems (for example, if the system can only process 100 messages per second).
-   *Application-default quota*: The default quota that applies on a per-application basis to all applications unless an application-specific quota is configured. This quota specifies the default maximum message rate that any application can send to APIs and methods (for example, 25 messages per second).
-   *Application-specific quota*: This overrides the application-default quota. This quota specifies the maximum message rate that the specific application can send to APIs and methods (for example, 15 messages per second).

{{< alert title="Note" color="primary" >}} API administrators can specify all quotas at the API and at API method level. For more details, see [Manage quotas](#Manage).{{< /alert >}}

### Authorization

The API administrator can manage the APIs that organizations and applications can access using the following:

-   *Organization authorization*—the API administrator can define the APIs that the organization is allowed to access. For example, a named hotel organization can only access the reservation and payment APIs.
-   *Application authorization*—the API administrator can define the APIs that the application is allowed to access. For example, a specific client application in the hotel organization can only access the reservation API.
-   *User management*—the API administrator can assign users a specific organization (Community or named) and user role (API consumer user, organization administrator, or API administrator).

{{< alert title="Note" color="primary" >}}The API administrator must first specify the APIs that an organization is allowed to access before any of its client applications can have access to them. In API Manager, you can only add APIs to an application when you have first added them to the organization. {{< /alert >}}

### Authentication

You can define the authentication mechanisms required by the API (for example, Two-Way SSL, HTTP Basic, API Key/Secret, OAuth, or AWS Signing Query String) using security profiles in API Manager. You can specify which security profiles are associated with the API to define the level of security required. The client applications can then use credentials to authenticate and identify the client application to API Gateway. This also enables the API administrator to see which client applications have used the API.

API Manager access control
--------------------------

The API Manager user roles have the following access rights:

-   **API administrator**
-   The API administrator has full access to API Manager, and can create, read, update, and delete organizations, users, and applications. The API administrator has management responsibility for applications and users. When users are being registered, the API administrator can approve or reject new users.
-   Users can create applications, but they must first be approved by the API administrator. If users want to request access to another API for an approved application, the API access must also be approved. User and application management can be automatically approved. In addition, the API administrator can delegate the user and application management responsibility to organization administrators. But only the API administrator can edit quotas.
-   **Organization administrator**
-   The organization administrator has full read access to users and applications in their organization. If application management is delegated, they can also create, update, and delete. The organization administrator can monitor all applications in their organization. They also have the same permissions as API consumers or application developer users.
-   **API consumer**
-   The API consumer can create, read, update, and delete their applications. They can also give shared access to other users, granting permissions to view and monitor, or full access. If auto-approval is disabled, the user must wait for approval for new applications from the API administrator, or organization administrator if they have been delegated management responsibility. A user has full read access to all other users in the organization.

### API consumer user registration workflow

The use cases for the API consumer user registration workflow are:

-   *Case 1: Automatic approval, delegated user management*\
    An API consumer registers in API Manager. The user is not created, and is placed in a pending queue. The user receives a security email to prove they own the email address. When they click a link, the user is created, and they receive a `created` email.
-   *Case 2: Automatic approval, no delegated user management*\
    Same behavior as case 1.
-   *Case 3: No automatic approval, no delegated user management*\
    Same behavior as case 1 and 2, except when the user clicks the link in the security email, they receive a `pending`
    email, and remain in the pending queue. An email notification is sent to the API administrator email address specified in the API Manager settings, and the API administrator approves or rejects the registration. When approved, the user is created, and receives a `created`
    email.
-   *Case 4: No automatic approval, delegated user management*\
    Same behavior as case 3, except that the email notification is sent to the contact email address for the organization, and the API administrator or organization administrator approves or rejects the registration.

The following table shows the difference between case 3 and 4 when the appropriate settings are selected in API Manager:

| Auto-approve user registration | Delegate user management | API Portal | Output                                                                                                                                                                                                      |
|--------------------------------|--------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Disabled                       | Disabled                 | Enabled    | Email sent to API admin email address for approval by API admin, and directed to API Manager.                                                                                                               |
| Disabled                       | Enabled                  | Enabled    | Email sent to the organization email address for approval by the API admin or organization admin, and directed to API Portal. If API Portal is disabled, the admin is directed to API Manager in all cases. |

For more details,
see [API Manager settings](api_mgmt_config_web.htm#setting).

### Application creation workflow

The use cases for the application creation workflow are:

-   *Case 1: Automatic approval, delegated application management*\
    A user creates a new application, requesting access to specific APIs. The application is automatically approved and created.
-   *Case 2: Automatic approval, no delegated application management*\
    Same behavior as case 1.
-   *Case 3: No automatic approval, no delegated application management*\
    Same behavior as case 1 and 2, except the application is not created, and enters a pending queue. An email notification is sent to the contact address for the organization, and the API administrator approves or rejects the registration. When approved, the user receives a `created`
    email.
-   *Case 4: No automatic approval, delegated application management*\
    Same behavior as case 3, except that the API administrator or organization administrator approves or rejects the registration.

The following table shows the difference between case 3 and 4 when the appropriate settings are selected in API Manager:

| Auto-approve applications | Delegate application management | API Portal | Output                                                                                                                                  |
|---------------------------|---------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Disabled                  | Disabled                        | Enabled    | Email sent to the organization email address for approval by API admin, and directed to API Manager.                                    |
| Disabled                  | Enabled                         | Enabled    | Email sent to the organization email address for approval by API admin or organization admin, and directed to API Manager in all cases. |

For more details,
see [API Manager settings](api_mgmt_config_web.htm#setting).

### API access workflow

The use cases for the API access workflow are:

-   *Case 1: Organization wants new API access*\
    Only the API administrator can assign API access to organizations.
-   *Case 2: User wants new API access to an existing application, automatic approval*\
    The user adds a new API, and the API access is granted immediately.
-   *Case 3: User wants new API access to an existing application, no automatic approval, no delegated application management*\
    The user adds a new API, and the API access request is placed in a `pending` queue. An email notification is sent to the contact address for the organization, and the API administrator approves or rejects the API access request. When approved, the access is granted.
-   *Case 4: User wants new API Access to an existing application, no automatic approval, delegated application management*\
    Same behavior as case 3, except that the API administrator or organization administrator approves or rejects the API access request.

{{< alert title="Note" color="primary" >}}When an organization administrator adds a new front-end API, the API enters the `pending` queue, and the API administrator receives an email to approve or reject publishing the API.{{< /alert >}}

Ensure API Manager is configured correctly {#ensure-api-manager-is-configured-correctly "api_gateway_conditions.onpremise"=""}
------------------------------------------

Before you begin using API Manager as an API administrator, you must ensure that API Manager has been enabled and configured correctly for your environment. For example, this includes configuring API Manager settings such as the following:

-   Monitoring metrics
-   Identity provider
-   Quota storage
-   SMTP server

{{< alert title="Note" color="primary" >}}You must ensure that API Manager is configured with the SMTP server used by your organization. For example, this enables you to generate emails for user registration or client application approval.{{< /alert >}}

For more details, see [Configure settings in](api_mgmt_config_ps.htm).

API administrator view
----------------------

When an API administrator logs on to API Manager, it displays a specific view for the API administrator. This includes the following:

-   **API**:\
    Register a **Backend API**, then virtualize it as a **Frontend API**, and browse all virtualized APIs in the **API Catalog**. For more details, see [API management workflow](api_mgmt_workflow.htm).
-   **Clients**:\
    Manage client **Organizations**, **Application Developers**, and **Applications**
    in the domain. For example, this includes assigning users to specific organizations (named or Community), and to specific roles (API administrator, organization administrator, or API consumer user).
-   Manage system and application **Default Quotas**, and **OAuth Authorizations**. Quotas are maximum message rates for APIs and methods (for example, the number of messages or megabytes in a specified time period). For more details, see [Manage quotas](#Manage).This view also enables you to manage stored OAuth authorizations made by protected resource owners.

<!-- -->

-   **Monitoring**:\
    View historical reports and statistics on all client applications in the domain. For more details, see [Monitor APIs and applications in API Manager](api_mgmt_monitor.htm#Monitor).

<!-- -->

-   **Settings**:\
    Manage the following settings:

|                          |                                                                                                                                                                                                |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Account**              | User account details, role, and password (in this case, for the API administrator).                                                                                                            |
| **API Manager settings** | API Manager host details, and settings such as whether API consumer users or client applications are auto-approved, and whether organization administrators can approve users or applications. |
| **Alerts**               | Alert notifications for specific events (for example, when an application request is created, or an organization is created).                                                                  |
| **Remote hosts**         | Connection settings for back-end servers invoked by front-end APIs.                                                                                                                            |

Organization administrator view
-------------------------------

The view displayed for organization administrator is a subset of the view displayed for the API administrator. For example, the organization administrator cannot view **OAuth Authorizations**, **Default Quotas**, **API Manager Settings**, or **Alerts**. The following shows an example view:

![Organization Administrator View](/Images/docbook/images/api_mgmt/api_mgmt_org_admin.png)

Manage quotas
-------------

API administrators can use the **Clients** > **Default Quotas** tab to manage the maximum message traffic rate sent by applications to APIs using application-default or system-level quotas. Alternatively, API administrators can set application-specific quotas in the **Clients** > **Applications** > **Quota** tab. For more details on quota types, see [Quotas](#Quotas).

{{< alert title="Note" color="primary" >}}API administrators can set system and application-level quotas only in API Manager. Policy developers can create custom throttling policies for user or organization-level quotas in Policy Studio. For details on creating policies,
see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.{{< /alert >}}

### System and application-default quotas

To create a system or application-default quota, perform the following steps:

1.  On the **Default Quotas** tab, click **Application Default** or **System**, depending on the quota type you wish to create.
2.  Click **Add API**, and select an API from the list (for example, a Swagger-based Petstore API). Alternatively, select **All API**.
3.  If you selected a specific API, you can select whether the quota applies to **All Methods** or to a specific method (for example, **updatePet**).
4.  Select **Throttle** and enter a number of messages, or select **Throttle MB** and enter a number of megabytes.
5.  Enter the amount of time, and select the time unit (for example 5 seconds). For more details, see [Quota time windows](#Quota).

If an application-specific quota is defined, this completely overrides the application-default quota and its associated rules. The **APIs** > **API Catalog**
view in the API Manager console only shows application-default quotas.

### Application-specific quotas

{{< alert title="Note" color="primary" >}}If your front-end API uses pass-through authentication for the inbound request, there is no client application context so application quotas cannot be enforced.{{< /alert >}}

To create an application-specific quota, perform the following steps:

1.  In the API Manager menu, click **Clients** > **Applications**.
2.  Click the application name (for example, **Test Application**), and click the **Quota** tab.
3.  Select **Override default application quota**.
4.  Click **Add API**, and select an API from the list (for example, a Swagger-based Petstore API). Alternatively, select **All API**.
5.  If you selected a specific API, you can select whether the quota applies to **All Methods** or to a specific method (for example, **deletePet**).
6.  Select **Throttle** and enter a number of messages, or **Throttle MB** and enter a number of megabytes.
7.  Enter the amount of time, and select the time unit (for example 5 seconds). For more details, see [Quota time windows](#Quota).

### Quota time windows

When specifying time windows in quota rules, the quota opens when the API is called at the current second, minute, day, or week, depending on the time unit specified in the quota rule.

For example, you have defined a quota rule on API A and method B that throttles the message count to N messages per hour. Then assume API A and method B was invoked at 14:33 for the first time. The specified rule is activated at the time of the first API call, setting the time window to start at the hour (14:00:00.000). If you get another call at 14:35, the counter is incremented, and its value is validated against the limit (N). If you get another call at 17:33, the new time window start will start at the hour (17:00:00.000), and the counter is reset to 0 before reflecting the API call from 17:33.

### Multiple quota rules per method

You can also specify quotas with multiple rules for the same API methods for all quota types (system, application default, and application specific). For example, a system-level quota for a pet store API is specified with the following rules for the `addPet`
method:

-   10 messages every 5 seconds
-   1000 messages every 1 day

Both quota rules apply to the same API method.

### Configure quota storage settings

You can configure how quota information is stored using Policy Studio in **Server Settings**
> **API Manager** > **Quota Settings**. For more details, see [Quota Settings.](api_mgmt_config_ps.htm#Quota)

Manage OAuth authorizations
---------------------------

API Manager enables API administrators to view and revoke OAuth authorizations made by protected resource owners. This enables you to manage all client application authorizations to access OAuth-protected APIs. This also means that resource owners do not need to re-authorize application requests.

When client applications are authorized to access OAuth-protected APIs, they are issued with an access token and optionally a refresh token. API Manager displays the authorizations granted to each client application, including the scope. Revoking an OAuth authorization means that the access and refresh tokens that the client application has are no longer valid.

The **Clients** > **OAuth Authorizations** tab enables you to manage the stored OAuth authorizations made by protected resource owners.

The following details are displayed:

-   **SUBJECT**: The name of the OAuth resource owner (for example, **sample\_user**).
-   **SCOPES**: The OAuth scopes used to managed access to the protected resource (for example, **resource.Write**, **openid**).
-   **CREATED**: When the authorization was first made.

To revoke a stored authorization, and block further requests from the client application, select the resource owner name under **SUBJECT**, and click **Remove**. For more details, see the
[API Gateway OAuth User Guide](/bundle/APIGateway_77_OAuthUserGuide_allOS_en_HTML5/)
.

Manage organizations
--------------------

API administrators can use the **Clients** >
**Organizations** tab to create and edit organizations.

### Create an organization

To create an organization, perform the following steps:

1.  Click **New organization** in the toolbar.
2.  Configure the following general fields:
    -   **Image**: Click to add a graphical image for the organization (for example, .png, `.gif`, or `.jpeg` file).
    -   **Organization name**: Enter a name for the organization. This field is required.
    -   **Email**: Enter an email address for the organization.
    -   **Enabled**: Select whether the organization is enabled. The organization is enabled by default.
    -   **API Development**: Select whether the organization is enabled for API development. This setting is disabled by default.

>

{{< alert title="Note" color="primary" >}}You must first enable an organization for API development before you can begin registering REST APIs for that organization. For more details, see [Register REST APIs in](api_mgmt_register_web.htm). When the organization has registered APIs, you cannot disable this setting. {{< /alert >}}

1.  -   **Virtual host**: Enter the virtual host and port on which unpublished APIs belonging to this organization are available. The host name should be DNS resolvable.

<!-- -->

3.  If **Trial mode** is enabled on the **Settings** > **API Manager Settings** page, the following settings are displayed to enable you to manage the lifespan of the organization:
4.  -   **Trial Status**: Select one of the following:
        -   **No Trial**: The organization is not in trial mode.
        -   **In Trial**: The organization is in trial mode.
        -   **Trial Ended**: The trial for this organization has ended, the organization expires, and users in the organization can no longer log in.
    -   **Trial Start**: When the trial started. The trial starts when a member of the organization logs in.
    -   **Trial End**: When the trial will end.
    -   **Trial Duration**: Duration of the trial in days. Defaults to 30 days.
    -   **Extend Trial**: Click to extend the duration of the trial.
    -   **Restart Trial**: Click to reset a trial that has ended. The trial restarts when a member of the organization logs in.

    For more details on **Trial mode**, see [API Manager settings](api_mgmt_config_web.htm#API_Manager_settings).

5.  Configure the following additional attributes:
    -   **Phone**: Enter a phone number for the organization if available.
    -   **Description**: Enter a short description of the organization.

<!-- -->

4.  Click **Add API** to select the APIs that the organization can access.
5.  Click **Generate code** to generate optional registration codes used to simplify onboarding of new users into the organization. You can specify the **Maximum number of users per code** and **The code is valid until**. These codes are provided to new users who can input them when self-registering in API Manager. These users are then automatically registered in the organization.
6.  Click **Create** in the toolbar.

### Edit an organization

When organizations have been created, you can click an organization name in the **Managing organizations** screen to edit its settings. You can also perform the following tasks:

-   Click **Add API** to select the APIs that the organization can access.
-   Click **Generate code** to generate optional registration codes used to onboard new users into the organization. You can specify the **Maximum number of users per code** and when **The code is valid until**. You can provide these registration codes to new users who can input them when self-registering in API Manager.
-   Click to view the **Users** and **Applications** in that organization.

Manage users
------------

API administrators and organization administrators can use the **Clients** >
**Application Developers** tab to create and edit the administrator users and the API consumers that use the APIs virtualized in **APIs** > **API Catalog**.

### Create a user

To create a user, perform the following steps:

1.  Click **New user** in the toolbar.
2.  Configure the following general fields:
    -   **Image**: Click to add a graphical image for the user (for example, .png, `.gif`, or `.jpeg` file).
    -   **Login Name**: Enter a globally unique name to identify the user, which is entered by the user when logging in to API Manager. This can be changed only by an API administrator, and is read-only for all other users. This field is required.

    {{< alert title="Note" color="primary" >}} Changing a user’s login-name prevents that user from logging in. You must ensure that the user is notified of any change.{{< /alert >}}
    -   **Name**: Enter the user's first name and surname to be used as a display name. This field is required.
    -   **Email**: Enter an email address for the user. This field is required.

    {{< alert title="Note" color="primary" >}}This must be globally unique when the **Login Name** is set to the email address.{{< /alert >}}
    -   **Enabled**: Select whether the user is enabled. The user is enabled by default.

<!-- -->

3.  Configure the following membership fields:
    -   **Organization**: Select the organization that the user belongs to. The default list includes the API Development organization only. For details on creating organizations, see [Manage organizations](#Manage2).
    -   **Role**: Select one of the following required roles for the user:
        -   **API Manager Administrator**: This is the API administrator with full access rights.
        -   **Organization Administrator**: This administrator has a subset of access rights within an organization.
        -   **User**: This is the client application developer user (API consumer). For more details on roles, see [API Management user roles](api_mgmt_intro.htm#user).

<!-- -->

3.  Configure the following additional attributes:
    -   **Phone**: Enter a phone number for the user.
    -   **Description**: Enter a short description of the user.
4.  Click **Create** in the toolbar.

### Edit a user

When users have been created, you can click a user name in the **Managing users** screen to edit its settings. You can also perform the following:

-   Click to view the user's **Organization** and **Applications**.
-   Click **Reset password** to generate a random password and send it to the user's email address.
-   Click **Change password** to enter a new user password in the dialog.

{{< alert title="Note" color="primary" >}}When you delete a user, their applications are reassigned to the API administrator.{{< /alert >}}

### Enforce password changes

You can configure API Manager to ask users to change their password at first login, as well as after an expired interval. These settings are enabled by default. To disable the **Enable password expiry** and **Days before passwords expire** settings, click **Settings** > **API Manager settings**.

{{< alert title="Note" color="primary" >}}If you disable **Enable password expiry**, which forces users to change password at first login, and a new user logs in after that, then this user will not be asked to change password if you decide to enable this setting again.{{< /alert >}}

Manage applications
-------------------

API administrators, organization administrators, and application developers (API consumers) can use the **Clients** >
**Applications** tab. This enables you to create and edit the client applications that use the APIs virtualized in **APIs** > **API Catalog**.

For details on managing applications, see [Consume APIs in](api_mgmt_consume.htm).
