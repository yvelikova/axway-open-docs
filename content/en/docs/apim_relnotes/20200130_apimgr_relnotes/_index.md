{
"title": "API Gateway and API Manager 7.7.20200130 Release Notes",
  "linkTitle": "API Gateway and API Manager 7.7.20200130",
  "no_list": "true",
  "weight": "20",
  "date": "2019-09-20",
  "description": "Learn about the new features and enhancements in this release of API Gateway and API Manager."
}
## Summary

API Gateway is available as a software installation or a virtualized deployment in Docker containers. API Manager is a licensed product running on top of API Gateway, and has the same deployment options as API Gateway.

The software installation is available on Linux. For more details on supported platforms for software installation, see [System requirements](/docs/apim_installation/apigtw_install/system_requirements/).

Docker deployment is supported on Linux. For a summary of the system requirements for a Docker deployment, see [Set up Docker environment](/docs/apim_installation/apigw_containers/docker_scripts_prereqs/).

## New features and enhancements

The following new features and enhancements are available in this release.

<!-- Add the new features here -->

### Swagger 2.0 enhancements

API Manager imports, retains, and exports all Swagger v2.0 fields, except for vendor extensions.

### Open API Specification (OAS) 3.0 enhancements

* API Manager imports, retains, and exports all Open API Specification (OAS) v3.0 fields, except for vendor extensions, callbacks, links, and examples.
* Parameter content types are now supported in OAS3.

### Try It and Try Method improvements

API Manager's Try It and Try Method support the rendering of `enum`, which allows you to send multipart forms.

* When trying the method of an API, you can select files as part of the request
* The parameters object types are auto generated in the UI with nested schemes and arrays rendered fully
* The default for parameters are fully supported
* The `allOf` and `anyOf` in the request bodies are also supported

### Back-end API improvements

The API Manager UI supports OAS3 `response.content.schemes`.

* The OAS3 multiple back-ends are rendered on the screen, which allows users to select the required URL
* The UI has been extended to include all response codes available in OAS3
* Multipart request bodies are rendered in the back-end UI
* The UI allows users to define `allOf` response types for Swagger 2
* The `DataTypes` in API Manager have been changed to align with the OAS3 data types
* Users have the option to modify all back-end APIs without cloning

## Important changes

<!-- Use this section to describe any changes in the behavior of the product (as a result of features or fixes), for example, new Java system properties in the jvm.xml file. This section could also be used for any important information that doesn't fit elsewhere. -->

## Limitations of this release

<!-- Add any limitations here -->

## Deprecated features

<!-- Add features that are deprecated here -->

As part of our software development life cycle we constantly review the core API Management products and related components. As part of this review, the following capabilities have been deprecated:

* 

## Removed features

<!-- Add features that are removed here -->

In able to stay current and align our offerings with customer demand and best practices Axway may discontinue support for some capabilities. As part of this review, the following capabilities have been removed:

* API Tester - For testing APIs, it is recommended to use alternative tools, such as Postman, SoapUI, or API Fortress.
* RAML support - RESTful API Modeling Language (RAML) support has been removed in favour of widely-adopted standards like Swagger and OpenAPI 3. 

## Fixed issues

<!-- Fixed issues are maintained in another topic -->

See [Fixed issues](/docs/apim_relnotes/20200130_apimgr_relnotes/fixed_issues/) for a complete list.

## Known issues

The following are known issues for this release.

<!-- Add the known issues here -->

## Install or upgrade a classic (non-container) deployment

<!-- Add install instructions here -->

## Install or upgrade a container deployment

<!-- Add install instructions here -->

## Documentation

You can find the latest information and up-to-date user guides at the Axway Documentation portal at <https://docs.axway.com>.

This section describes documentation enhancements and related documentation.

### Documentation enhancements

<!-- Add a summary of doc changes or enhancements here-->

### Related documentation

To find all available documents for this product version:

1. Go to <https://docs.axway.com/bundle>.
2. In the left pane Filters list, select your product or product version.

Customers with active support contracts need to log in to access restricted content.

The following reference documents are also available:

* [Supported Platforms](https://docs.axway.com/bundle/Axway_Products_SupportedPlatforms_allOS_en)
  * Lists the different operating systems, databases, browsers, and thick client platforms supported by each Axway product.
* [Interoperability Matrix](https://docs.axway.com/bundle/Axway_Products_InteroperabilityMatrix_allOS_en)
  * Provides product version and interoperability information for Axway products.

## Support services

The Axway Global Support team provides worldwide 24 x 7 support for customers with active support agreements.

Email <mailto:support@axway.com> or visit Axway Support at <https://support.axway.com>.

See [Get help with API Gateway](/docs/apim_administration/apigtw_admin/trblshoot_get_help/) for the information that you should be prepared to provide when you contact Axway Support.
