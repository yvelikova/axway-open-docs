---
title: API Portal 7.7 January 2020 Release Notes
linkTitle: API Portal 7.7 Jan20
no_list: true
weight: 30
date: 2019-08-08T00:00:00.000Z
description: Learn about the new features and enhancements in this release of API Portal.
---

## Summary

API Portal provides an API consumer-facing interface that you can customize to match your corporate brand. API Portal is a layered product linked to API Manager, and requires both API Manager and API Gateway. For more information, see the API Gateway and API Manager documentation.

API Portal is available as a software installation or a virtualized deployment in Docker containers. For more information, see:

* [Install API Portal](/docs/apim_installation/apiportal_install/)
* [Deploy API Portal in containers](/docs/apim_installation/apiportal_docker/)

## New features and enhancements

The following new features and enhancements are available in this release.

### Custom install directory

The restriction to install API Portal into the `/opt/axway/apiportal/htdoc` default directory has been removed, and you can now perform the installation in a directory of your choice.

### Unattended mode installation

Installing API Portal using unattended mode no longer requires you to know the correct positions of the parameters for the install script to work. Named parameters are now supported, which allows you to specify the parameters by name rather than position.

Validation and error messaging for command line errors were improved. For more information, see [Unattended installation](/docs/apim_installation/apiportal_install/install_unattended/).

### Home page customization

The home page has been completely rebuilt using Joomla! modules, which allow for a more extensively customization using the configuration settings in the Joomla! Admin Interface (JAI). No source code changes are required.

For more information, see [Customize your home page layout](/docs/apim_administration/apiportal_admin/customize_getting_started/#customize-your-home-page-layout).

### Application tab improvements

You can customize a description to the **Applications** page header.

A new message is shown upon application's creation.

The style is consistent across all Info, Warning, and Error messages.

### Change of behavior for the API `Information source` setting

Previously, this setting applied to both the list of APIs and the API details view at the same time. Now, it applies to the list of APIs only. This is useful if you want to display only a summary of the API on the API listing, but want a full description when viewing the API details. You can set the API detail's view in API Manager.

For more information, see [Customize source of API descriptions](/docs/apim_administration/apiportal_admin/customize_apicatalog_overview/#customize-source-of-api-descriptions).

### Control the visibility of APIs in the catalog

A new setting, **Do not show APIs with tags**, was added to the API Catalog menu options. This setting supports `*` and `?` wildcards, and it is a powerful option when used in combination with **Show APIs with tags** setting.

For more information, see [Group APIs with tags](/docs/apim_administration/apiportal_admin/customize_apicatalog_overview/#group-apis-with-tags).

### Open API Specification (OAS) 3.0 Support

OAS3 support is enabled and integrated with the Swagger.io UI component to bring the standardized look and feel of Swagger.io right into the core of API Portal. The additional configuration added on top of the basic integration allows for more control than ever over your favorite Swagger interface.

For more information, see [Additional features for API Catalog view](/docs/apim_administration/apiportal_admin/apip_overview/#additional-features-api-catalog-view).

<!-- Use this section to describe any changes in the behavior of the product (as a result of features or fixes). This section could also be used for any important information that doesn't fit elsewhere.-->

## Limitations of this release

This release has the following limitations:

* API Portal 7.7.20200130 is compatible with API Gateway and API Manager 7.7.20200130 only.
* Upgrade to API Portal 7.7.20200130 is supported from API Portal 7.7 only. To upgrade from earlier versions, you must first upgrade to API Portal 7.7.
* The ready-made API Portal Docker image 7.7.20200130 is strictly for development environments only, and it is not recommended for use in production environments. Upgrading from previous API Portal Docker image is not supported.
* This release is not available as a virtual appliance, or as a managed service on Axway Cloud.

## Removed features

* Documentation is no longer provided in PDF format. You can continue to save individual topics or entire guides in PDF format using the **Save as PDF** icon on the [Axway documentation portal](https://docs.axway.com/).

## Fixed issues

See [Fixed issues](/docs/apim_relnotes/20200130_apip_relnotes/fixed_issues/) for a complete list.

## Known issues

The following are known issues in this version of API Portal.

### Page layout and alignment for Arabic language

Changing the API Portal language to Arabic (or any other right to left language) results in issues with page layout and alignment on the API Portal Home and Pricing pages, and some buttons are not visible. As a workaround, you can turn on the development mode in JAI. Follow these steps:

1. Log in to Joomla! Admin Interface (JAI).
2. In the JAI top navigation bar, click **Extensions > Templates**.
3. Click your template style (for example, `purity_III * Default`) to open it.
4. Click the **General** tab.
5. Change **Development Mode** to `ON`.
6. Click **Save** and click **Close** to close the template style.

Related Issue: IAP-308

### Uploading files in API endpoints with Content-Type application/octet-stream is not possible while using OAS3

The execution of an endpoint with Content-Type application/octet-stream is not possible and the request results in an endless loader in the response section.

Related Issue: IAP-2952

### Imported Swagger 2.0 definitions into API Manager are not translated to OAS3, which results in unexpected behavior in API Portal

When a Swagger definition 2.0 is uploaded into API Manager its visualization and behavior in API Portal are unpredictable. This happens because Swagger 2.0 is not correctly translated into OAS3 definition by API Manager. One of the known problems is that the body parameters of POST endpoints are not displayed.

Related Issue: RDAPI-18389

## Documentation

This section describes documentation enhancements and related documentation.

### Documentation enhancements

The latest version of API Gateway, API Manager, and API Portal documentation has been migrated to Markdown format and is available in a [public GitHub repository](https://github.com/Axway/axway-open-docs) to prepare for future collaboration using an open source model. As part of this migration, the documentation has been restructured to help users navigate the content and find the information they are looking for more easily.

Documentation change history is now stored in GitHub. To see details of changes on any page, click the link in the **Last modified** section at the bottom of the page.

### Related documentation

To find all available documents for this product version:

1. Go to <https://docs.axway.com/bundle>.
2. In the left pane Filters list, select your product or product version.

Customers with active support contracts need to log in to access restricted content.

The following reference documents are also available:

* [Supported Platforms](https://docs.axway.com/bundle/Axway_Products_SupportedPlatforms_allOS_en) - Lists the different operating systems, databases, browsers, and thick client platforms supported by each Axway product.
* [Interoperability Matrix](https://docs.axway.com/bundle/Axway_Products_InteroperabilityMatrix_allOS_en) - Provides product version and interoperability information for Axway products.

## Support services

The Axway Global Support team provides worldwide 24 x 7 support for customers with active support agreements.

Email [support@axway.com](mailto:support@axway.com) or visit [Axway Support](https://support.axway.com/).

See [Get help with API Gateway](/docs/apim_administration/apigtw_admin/trblshoot_get_help/) for the information that you should be prepared to provide when you contact Axway Support.
