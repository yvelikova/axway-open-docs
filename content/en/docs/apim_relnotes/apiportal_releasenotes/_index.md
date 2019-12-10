---
title: API Portal 7.8 Release Notes
linkTitle: API Portal 7.8
weight: 30
no_list: true
date: 2019-08-08
description: Learn about the new features and enhancements in this release.
---

## Summary

API Portal provides an API consumer-facing interface that you can customize to match your corporate brand. API Portal is a layered product linked to API Manager, and requires both API Manager and API Gateway. For more information, see the API Gateway and API Manager documentation.

API Portal is available as a software installation or a virtualized deployment in Docker containers. For more information, see:

* [Install API Portal](/docs/apim_installation/apiportal_install/)
* [Deploy API Portal in containers](/docs/apim_installation/apiportal_docker/)

## New features and enhancements

The following new features and enhancements are available in this release.

<!-- Add the new features here -->

## Limitations of this release

This release has the following limitations:

* This release is not available as a virtual appliance, or as a managed service on Axway Cloud.
* The ready-made API Portal Docker image is strictly for development environments only, and is not recommended for use in production environments. You must use the Dockerfile to build and run API Portal containers in production environments.
* Upgrade to API Portal 7.8 is supported from API Portal 7.7 only. To upgrade from earlier versions, you must first upgrade to 7.7.
* API Portal 7.8 is compatible with API Gateway and API Manager 7.8 only.

## Fixed issues

See [Fixed issues](/docs/apim_relnotes/apiportal_releasenotes/fixed_issues/) for a complete list.

## Known issues

The following are known issues in this version of API Portal.

### Page layout and alignment for Arabic language

If you change the API Portal language to Arabic (or any other right to left language) there are issues with page layout and alignment on the API Portal Home and Pricing pages, and some buttons are not visible. As a workaround, you can turn on development mode in JAI. Follow these steps:

1. Log in to Joomla! Admin Interface (JAI).
1. In the JAI top navigation bar, click **Extensions > Templates**.
1. Click your template style (for example, `purity_III * Default`) to open it.
1. Click the **General** tab.
1. Change **Development Mode** to `ON`.
1. Click **Save** and click **Close** to close the template style.

Related Issue: IAP-308

## Documentation

This section describes documentation enhancements, known issues, and related documentation.

### Related documentation

To find all available documents for this product version:

1. Go to <https://docs.axway.com/bundle>.
1. In the left pane Filters list, select your product or product version.

Customers with active support contracts need to log in to access restricted content.

The AMPLIFY API Management solution enables you to create, publish, promote, and manage Application Programming Interfaces (APIs) in a secure and scalable environment. For more information, see [Get started with API Management](/bundle/APIManagementPlus_GettingStartedGuide_allOS_en_HTML5/).

The following reference documents are also available:

* [Supported Platforms](/bundle/Axway_Products_SupportedPlatforms_allOS_en) - Lists the different operating systems, databases, browsers, and thick client platforms supported by each Axway product.
* [Interoperability Matrix](/bundle/Axway_Products_InteroperabilityMatrix_allOS_en) - Provides product version and interoperability information for Axway products.

## Support services

The Axway Global Support team provides worldwide 24 x 7 support for customers with active support agreements.

Email <support@axway.com> or visit <https://support.axway.com/>.

See [Get help with API Gateway](/csh?context=103&product=prod-api-gateway-77) in the [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/) for the information that you should be prepared to provide when you contact Axway Support.
