{
"title": "Introduction to API Portal",
"linkTitle": "API Portal",
"weight":"25",
"date": "2020-04-14",
"description": ""
}

## API Portal

API Portal is a self-service web-based portal that enables API consumers to consume APIs that you have exposed using API Manager. API consumers can register and manage their user profile, register applications, manage application credentials, browse front-end APIs and supporting documentation, monitor application API usage, and access blogs, forums, and so on.

It acts as a view to the API Manager and communicates its REST API. This includes all functionalities related to APIs. In other words, the API manager handles the following operations:

* User Login/Logout/Edit Profiles
* API Catalog View
* Application Management
* Monitoring

Conversely, this means that there is ONE place for API management, the API manager, as the API-Portal automatically reflects all changes.
For example, if a new API has been registered, it is automatically available in the API portal. If an application was created in the API portal, it is visible in the API manager and you might trigger an [alert](/docs/apim_administration/apimgr_admin/api_mgmt_alerts/index.html) for this event.

This does not have to be a 1:1 relationship, as the API portal can connect to several API managers at the same time. For example, you can connect the API portal to the Development, Pre-Prod and Prod Stage at the same time to get a complete overview of the available APIs. Of course, the visibility can be restricted accordingly.

Nevertheless, the API portal is implemented as a standalone CMS-based portal that you can operate or customise and extend using Axway's standard branding and functionality to meet your specific needs and those of your target customers. You can deploy the web-based API portal separately from the API gateway and API manager with a dedicated web interface to limit potential security breaches.

![API-Portal Catalog view](/Images/api_mgmt_overview/api-portal-catalog-overview.png)

![API-Portal Catalog view](/Images/api_mgmt_overview/api-portal-catalog-detail.png)

The main API Portal features are as follows:

**Developer self-registration and profile management**\

Client application developers can self-register and manage their profiles.

**Browse and test APIs in the API Catalog**\

The API Catalog contains the APIs that have been registered in API Manager and are available for use by client application developers. They can browse these APIs and their associated documentation, and invoke APIs using the built-in test capability.

**Create and manage applications**\

Application developers can register their applications that will use the APIs, and obtain API key or OAuth credentials for the application. They can also monitor their application's use of APIs using graphical data sourced from your API Manager metrics database.

**Content management, blogs, and discussion forums**\

API Portal runs on Joomla!™, an open source CMS platform for developing and deploying web sites. You can use the content management capabilities of Joomla! to store additional content, such as PDF documents and video, for display in API Portal. Joomla! also provides plugins for third-party blog and discussion forums.

**Customizable to provide a branded experience**\

You can deploy API Portal with no customization, using the out-of-the-box Axway branding, which is suitable for internal-facing API deployments. For external-facing API deployments, you can customize API Portal to provide a branded developer portal experience. You can customize API Portal using Joomla configuration screens (upgradeable), or by editing the API Portal PHP source code (not upgradeable).

## API Portal features

See [API Portal overview](/docs/apim_administration/apiportal_admin/apip_overview/) for details of API Portal key capabilities and features.