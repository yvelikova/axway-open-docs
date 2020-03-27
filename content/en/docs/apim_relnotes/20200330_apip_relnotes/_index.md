---
title: API Portal 7.7 March 2020 Release Notes
linkTitle: API Portal 7.7 Mar20
no_list: true
weight: 30
date: 2020-03-11T00:00:00.000Z
description: Learn about the new features and enhancements in this release of API Portal.
---
## Summary

API Portal provides an API consumer-facing interface that you can customize to match your corporate brand. API Portal is a layered product linked to API Manager, and requires both API Manager and API Gateway. For more information, see the API Gateway and API Manager documentation.

API Portal is available as a software installation or a virtualized deployment in a Docker container. For more information, see:

* [Install API Portal](/docs/apim_installation/apiportal_install/)
* [Upgrade API Portal to 7.7](/docs/apim_installation/apiportal_install/upgrade_automatic/)
* [Deploy API Portal in containers](/docs/apim_installation/apiportal_docker/)

## New features and enhancements

The following new features and enhancements are available in this release.

### API Details page improvements

* You can now set a payload limit size to download the response as a file if the response exceeds the size you have set.
* You can configure the colors of the different methods for both SOAP and REST APIs.
* You can now set a flag to include or exclude the value for the "externalDocs" attribute. If the flag is on, the value for the externalDocs attribute is appended to the Description field and rendered as part of that field. By default this toggle is on.
* You can now configure whether or not to show Try it for groups of http methods per connected API Manager instance. This allows for finer grained control of the Try it functionality. 

For more information, see [Customize API Catalog](https://axway-open-docs.netlify.com/docs/apim_administration/apiportal_admin/customize_apicatalog_overview/)

## Limitations of this release

This release has the following limitations:

* API Portal 7.7.20200330 has been tested and is compatible with API Gateway and API Manager 7.7.20200330 only.
* Upgrade to API Portal 7.7.20200330 is supported from API Portal 7.7.0 only. To upgrade from earlier versions (e.g. 7.5.x, 7.6.x) you must first upgrade to API Portal 7.7.
* The ready-made API Portal Docker image 7.7.20200330 is strictly for development environments only, and it is not recommended for use in production environments. 
* The reason the image is not fit for production is that the image is built with CentOS as a base OS and our Axway security scans have detected multiple security concerns with this OS. We continue to monitor the latest versions of this base OS to determine if these issue have been resolved, but until we can ship a hardened image that passes our security concerns, we cannot advise customers that it is ok for a production environment. It is on our 2020 roadmap to create a docker image for production use. Keep an eye on the roadmap [here](https://community.axway.com/s/api-portal).
* Upgrading from previous API Portal Docker image is not supported.
* This release is not available as a virtual appliance, or as a managed service on Axway Cloud.

## Removed features

* Documentation is no longer provided in PDF format. You can continue to save individual topics or entire guides in PDF format using the **Save as PDF** icon on the [Axway documentation portal](https://docs.axway.com/).

## Fixed issues

See [Fixed issues](/docs/apim_relnotes/20200330_apip_relnotes/fixed_issues/) for a complete list.

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