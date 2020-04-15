{
"title": "Introduction to API Portal",
"linkTitle": "API Portal",
"weight":"25",
"date": "2020-04-14",
"description": ""
}

## API Portal features

See [API Portal overview](/docs/apim_administration/apiportal_admin/apip_overview/) for details of API Portal key capabilities and features.

## API registration and lifecycle management in API Manager

API Manager enables you to register APIs and manage their lifecycle from registration through publishing and retirement. Delegated API registration enables different teams of API owners to register and test their own APIs in isolation prior to publishing to other organizations in the API Catalog.

In API Manager, the lifecycle of an API includes the following states:

1. Unpublished - The API is registered and tested in isolation in an API owner organization. The API is available to the API administrator and API owners who are members of that organization. The API can be edited, or be moved to the published state, or deleted. These actions can only be performed by the API owner or the API administrator.

    Unpublished APIs are displayed in the API Catalog view to users in the same organization. The users in this organization are the API owners and developers on the same team working on these APIs. However, an unpublished API is not displayed to users in other organizations. The API must first be published, and then that organization must be authorized to access the API. The API is then displayed in the API Catalog for users in that organization.

    All APIs (published and unpublished) are displayed in the API Catalog for the API administrator.

2. Published - When an API is ready to be consumed by other organizations, it is published in the API Catalog by the API owner. The API administrator must then approve the API as the final step to publish to other organizations in the API Catalog. When the API is published, the API administrator can authorize other organizations to access the API. This displays the API in API Manager and API Portal to API consumers who are members of the authorized organization.

    When an API is published, only the API administrator can make changes. The published API can only be deprecated or unpublished, and cannot be deleted. Unpublishing an API stops client applications in other organizations using the API. A published API cannot be edited, and must first be unpublished. However, the API administrator can edit the API documentation of a published API. This allows changes in the API documentation without impacting the API availability.

3. Deprecated - The published API in API Manager is flagged with a date when it will be unpublished in the API Catalog, and is no longer available to client applications in other organizations. The retirement date is displayed to API consumers in API Manager and API Portal. Retiring the API is achieved by unpublishing the API in the API Catalog. Only a published API can be deprecated and unpublished. When the API is unpublished, it is then available for API owners to edit.

    When an API is deprecated, it is still in the published state, and clients can continue to discover and use the API. This gives API consumers time to port their existing applications to adopt a newer version of the API. You can undeprecate an API by selecting the undeprecate option, which removes the retirement date flag in the API Catalog.

## API Portal

API Portal is a self-service web-based portal that enables API consumers to consume APIs that you have exposed using API Manager. API consumers can register and manage their user profile, register applications, manage application credentials, browse front-end APIs and supporting documentation, monitor application API usage, and access blogs, forums, and so on.

API Portal is implemented as a stand-alone CMS-based portal, which you can run using the default Axway branding and functionality, or customize and extend to meet your specific requirements and those of your target API consumers. You can deploy the internet-facing API Portal separately from the API Gateway and API Manager, with a dedicated web interface to limit potential security breaches.

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