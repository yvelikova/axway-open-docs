{"title":"API Portal 7.8 Release Notes","linkTitle":"API Portal 7.8 Release Notes","no_list":"true","date":"2019-08-08","description":""} ﻿

- [Summary](#Summary)
- [New features and enhancements](#New)
- [Limitations of this release](#Limitati)
- [Fixed issues](#Fixed)
- [Known issues](#Known)
- [Documentation](#Doc)
- [Support services](#Support)

Summary
-------

API Portal provides an API consumer-facing interface that you can customize to match your corporate brand. API Portal is a layered product linked to API Manager, and requires both API Manager and API Gateway. For more information, see the API Gateway and API Manager documentation.

API Portal is available as a software installation or a virtualized deployment in Docker containers. For more information, see the [API Portal Installation and Upgrade Guide](/bundle/APIPortal_77_InstallationGuide_allOS_en_HTML5) .

New features and enhancements
-----------------------------

The following new features and enhancements are available in this release.

### GDPR compliance and privacy management

This release includes the following capabilities for improved GDPR compliance and privacy management.

#### Privacy policy support

Enables you to define and manage privacy policies that your users must accept when signing up to your API Portal. This includes support for adding and configuring privacy policies, auditing user acceptances, and privacy notice version control and management.

#### Improved application sharing

Enhanced privacy controls provide you with a configurable way to restrict the amount of user data (user names and emails) that is exposed when users share applications in your API Portal.

#### New password expiration policies

Enables you to apply improved governance controls on user passwords. For example:

- Enforce password changes at first login to API Portal
- Set a password expiry interval to enforce how often users must change their password

API Portal applies the password policies configured in API Manager.

### API Catalog and Application views

The following improvements have been made to the API Portal API Catalog and Application views to make it easier for your application developers to browse and consume your APIs.

- New Application tab on API details page to enable app developers to create new applications quickly and directly without navigating away from the API details page.
- API statuses (deprecated or unpublished) are now shown in the Application view to give app developers better information and help prevent accidental subscriptions to deprecated APIs.
- New option to show summaries instead of descriptions for APIs to give the app developer a quicker summary view of what the API is about instead of a long description.
- API versions are now shown in the Application view to give app developers better information when subscribing to APIs.
- Monitoring information is not shown for applications or APIs from a connected API Manager with metrics disabled.

### Customization options

To increase flexibility when customizing API Portal, the following new customization options are available.

- View and update custom properties that are set and configured in API Manager, directly in API Portal.
- Map users to roles after login, to control which parts of the Joomla! Administrator Interface (JAI) they can access. User role mapping enables you to expose different capabilities of the (JAI) to users, based on whether they are a standard user or an organization administrator, the organization they belong to, and even their email address.
- Wildcard support for tags, so you can more easily control which APIs are displayed or hidden in your API catalogs.
- Customize the default API Portal 404 error page.
- Configure a consent message to be shown to users when logging in to API Portal.
- Option to enforce users to supply an employer name when signing up.

Using these standard customization options ensures a smooth upgrade process and will enable you to preserve your customizations when you upgrade to future API Portal releases.

Limitations of this release
---------------------------

This release has the following limitations:

- This release is not available as a virtual appliance, or as a managed service on Axway Cloud.
- The ready-made API Portal Docker image is strictly for development environments only, and is not recommended for use in production environments. You must use the Dockerfile to build and run API Portal containers in production environments.
- Upgrade to API Portal 7.8 is supported from API Portal 7.6.2 only. To upgrade from earlier versions, you must first upgrade to 7.6.2.
- API Portal 7.8 is compatible with API Gateway and API Manager 7.8 only.

Known issues
------------

The following are known issues in this version of API Portal.

### Page layout and alignment for Arabic language

If you change the API Portal language to Arabic (or any other right to left language) there are issues with page layout and alignment on the API Portal Home and Pricing pages, and some buttons are not visible. As a workaround, you can turn on development mode in JAI. Follow these steps:

1. Log in to Joomla! Admin Interface (JAI).
1. In the JAI top navigation bar, click **Extensions > Templates**.
1. Click your template style (for example, `purity_III - Default`) to open it.
1. Click the **General** tab.
1. Change **Development Mode** to `ON`.
1. Click **Save** and click **Close** to close the template style.

Related Issue: IAP-308

Documentation
-------------

This section describes documentation enhancements, known issues, and related documentation.

### Documentation enhancements

See [What's new in documentation](whats_new_doc_apiportal.htm) for a summary of the documentation changes in this release.

### Related documentation

To find all available documents for this product version:

1. Go to <https://docs.axway.com/bundle>.
1. In the left pane Filters list, select your product or product version.

{{< alert title="" color="primary" >}}Customers with active support contracts need to log in to access restricted content.{{< /alert >}}

The AMPLIFY API Management solution enables you to create, publish, promote, and manage Application Programming Interfaces (APIs) in a secure and scalable environment. For more information, see the .

The following reference documents are also available:

[Supported Platforms](https://axway.zoominsoftware.io/bundle/Axway_Products_SupportedPlatforms_allOS_en)

- Lists the different operating systems, databases, browsers, and thick client platforms supported by each Axway product.

[Interoperability Matrix](https://axway.zoominsoftware.io/bundle/Axway_Products_InteroperabilityMatrix_allOS_en)

- Provides product version and interoperability information for Axway products.

Support services
----------------

The Axway Global Support team provides worldwide 24 x 7 support for customers with active support agreements.

Email <support@axway.com> or visit .

See for the information that you should be prepared to provide when you contact Axway Support.
