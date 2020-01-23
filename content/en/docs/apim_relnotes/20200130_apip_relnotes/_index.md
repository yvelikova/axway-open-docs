---
title: API Portal 7.7.20200130 Release Notes
linkTitle: API Portal 7.7.20200130
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

Installing API Portal in unattended mode no longer requires ordering the parameters when running the install script. We now support named parameters, which can be supplied in any order.

### Home page customization

The home page has been completely rebuilt using Joomla! modules, which allow for a more extensively customization using the configuration settings in the Joomla! Admin Interface (JAI). No source code changes are required.

For more information, see [Customize your home page layout](/docs/apim_administration/apiportal_admin/customize_getting_started/#customize-your-home-page-layout).

### Application tab improvements

New slogan explaining the applications concept, better information messaging and a consistent message style now applied across info, warning and error messages.

### API information source setting

Previously this setting applied to both the API listing and API details view at the same time. Now it applied to the API listing only. API details view now respects the API Manager configuration for the Description field under the API tab in API Manager . This is useful if you want to only a display a summary of the API on the API listing but want a full description when viewing the API details.

### Add tags to APIs

A new setting, **Do not show APIs with tags**, was added to the API Catalog menu options. This setting supports `*` and `?` wildcards, and it is a powerful option when used in combination with **Show APIs with tags** setting.

For more information, see [Group APIs with tags](/docs/apim_administration/apiportal_admin/customize_apicatalog_overview/#group-apis-with-tags).

### Open API Specification (OAS) 3.0 Support

OAS3 support is now enabled! We have integrated with the Swagger.io UI component to bring the standardized look & feel of Swagger.io right into the core of API Portal. With additional configurations added on top of the basic integration there is now more control than ever over your favorite Swagger interface.

For more information, see [Additional features for API Catalog view](/docs/apim_administration/apiportal_admin/apip_overview/#additional-features-api-catalog-view).

## Important changes

<!-- Use this section to describe any changes in the behavior of the product (as a result of features or fixes). This section could also be used for any important information that doesn't fit elsewhere.-->

## Limitations of this release

This release has the following limitations:

* This release is not available as a virtual appliance, or as a managed service on Axway Cloud.
* The ready-made API Portal Docker image is strictly for development environments only, and is not recommended for use in production environments. You must use the Dockerfile to build and run API Portal containers in production environments.
* Upgrade to API Portal 7.7 is supported from API Portal 7.6.2 only. To upgrade from earlier versions, you must first upgrade to 7.6.2.
* API Portal 7.7 is compatible with API Gateway and API Manager 7.7 only.

## Fixed issues

<!-- Fixed issues are maintained in another topic -->

See [Fixed issues](/docs/apim_relnotes/20200130_apip_relnotes/fixed_issues/) for a complete list.

## Known issues

The following are known issues in this version of API Portal.

### Page layout and alignment for Arabic language

If you change the API Portal language to Arabic (or any other right to left language) there are issues with page layout and alignment on the API Portal Home and Pricing pages, and some buttons are not visible. As a workaround, you can turn on development mode in JAI. Follow these steps:

1. Log in to Joomla! Admin Interface (JAI).
2. In the JAI top navigation bar, click **Extensions > Templates**.
3. Click your template style (for example, `purity_III * Default`) to open it.
4. Click the **General** tab.
5. Change **Development Mode** to `ON`.
6. Click **Save** and click **Close** to close the template style.

Related Issue: IAP-308

### Uploading files in API Endpoints with Content-Type application/octer-stream is not possible while using OAS3 

The execution of an endpoint with Content-Type application/octer-stream is not possible and the request results in an infinite loader in the response section.

Related Issue: IAP-2952

### Imported Swagger 2.0 definitions into API Manager are not translated to OAS3 so their definitions could lead to unexpected behavior in API Portal

If a Swagger definition 2.0 is uploaded into API Manager its visualization and behavior in API Portal are unpredictable. This happens because Swagger 2.0 is not correctly translated into OAS3 definition by API Manager. One of the known problems is that the body parameters of POST endpoints are not displayed.

Related Issue: RDAPI-18389

## Install or upgrade a non-container deployment

<!-- Add install instructions here -->

## Install or upgrade a container deployment

<!-- Add install instructions here -->

## Documentation

This section describes documentation enhancements and related documentation.

### Documentation enhancements

<!-- Add a summary of doc changes or enhancements here-->

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

Email <mailto:support@axway.com> or visit <https://support.axway.com/>.

See [Get help with API Gateway](/docs/apim_administration/apigtw_admin/trblshoot_get_help/) for the information that you should be prepared to provide when you contact Axway Support.
