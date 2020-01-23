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

### Traffic monitor externalization showcase

An example dashboard for Elasticsearch leverages existing capabilities to output traffic monitor data using the open logging functionality and showcases this capability.

Easy to integrate with and to set up, [ELK](https://www.elastic.co/what-is/elk-stack) enables you to extend your analytics needs using easy customization options.

The showcase provides a html version of the Traffic Monitor dashboard to visualise data while demonstrating how ELK can be leveraged to increase performance and storage capacity.

This showcase is ###not for use in a production envirnoment, its been designed to run locally along side a running Gateway for demo purposes. To avail of auto scaling in a multi node envirnoment custom configuration of Elasticsearch indexes will be required.

### Beta Multi Organisation 
A new beta version (1.4) version of the following APIs have been shipped with the release:
* users
* currentuser
* apirepo 
* discovery 

These API manage 2 new variables the 'orgs2Role' and 'orgs2Name' maps. The user is assigned to a 'primary' organisation as was the case in previous versions of the product however these new variable store additional organisations and the users role within the each organisation.
 
The 'user' API facliates the get, post, update and delete of additional orgs and roles
The 'currentuser' API is called on every screen in API Manager and returns the orgs and role information as part of a vaidation check
The 'apirepo' API encapsuates all of the actions that can be preformed to manage a backend API in API Manager. The caller can pass in an 'organizationId={uuid}' to filter by org or, by not supplying any '{uuid}', return all of the backend APIs for all orgs that the user is a member of.
The 'discovery' API manages all APIs in the API Catalog and all virtualized Frontend APIs. The ability to return all APIs associated with an user or to filter by an organizationId={uuid} is also available in this API
 
 The beta 1.4 version of the APIs are generated in OAS3 format and published on the swagger-ui page 
 http://apidocs.axway.com/swagger-ui/index.html. In addition, the user can enable these 1.4 beta APIs in Policy Studio by browsing to the 'API Portal v1.4' Servlet and setting the 'com.axway.portal.servlet.disabled' flag to false. This flag should ###not be enabled on the Production envirnoment as the features hasn't been fully completed but can be used in test envirnoments and feedback on the implementation would be welcomed. 


## Important changes

<!-- Use this section to describe any changes in the behavior of the product (as a result of features or fixes), for example, new Java system properties in the jvm.xml file. This section could also be used for any important information that doesn't fit elsewhere. -->

### Increased validation of WSDLs

In this release the xerces library has been updated to `xerces 2.12.0`. This library enforces stricter rules when validating malformed schemas. This means that some WSDLs that were previously imported successfully by API Manager might not import successfully in this version.

To suppress schema validation errors and relax the stricter validation of XML files a new flag `-DwsdlImport.suppressSchemaValidationErrors` is available in the `policystudio.ini` file. Set this flag to `true` if required. The default value is `false`.

### Filebeat v6.2.2

Filebeat has been updated to use v6.2.2. When installing Filebeat, follow the [official Filebeat documentation](https://www.elastic.co/guide/en/beats/filebeat/6.6/index.html).

## Limitations of this release

<!-- Add any limitations here -->

## Deprecated features

<!-- Add features that are deprecated here -->

As part of our software development life cycle we constantly review our API Management offering.

The following capabilities have been deprecated:

* API Gateway already supports the industry standard Internet Content Adaption Protocol (ICAP), so from the November 2020 release we will remove the existing embedded Anti-Virus scanners:
    * McAfee
    * Sophos
    * Clam AV

    Content scanning is still supported using the ICAP filter, which provides out-of-the-box integration with ICAP-capable servers provided by Symantec, McAfee, OPSWAT and others, promoting ease of deployment and operational control.

## Removed features

<!-- Add features that are removed here -->

To stay current and align our offerings with customer demand and best practices, Axway might discontinue support for some capabilities.

As part of this review, the following capabilities have been removed:

* API Tester - For testing APIs, it is recommended to use alternative tools, such as Postman, SoapUI, or API Fortress.
* RAML support - RESTful API Modeling Language (RAML) support has been removed in favour of widely-adopted standards like Swagger and OpenAPI 3.
* A security issue with the `api/portal/v1.3/users` API means that the behavior has changed. This API now returns all organizations for the API Admin role only. Previously, all organizations were returned for all roles.
* The functionality to export back-end APIs converts all API formats to Swagger 1. With the introduction of OAS3, API Manager uses the `io.swagger.parser.v3.swagger-parser-v3:2.0.16` and `io.swagger.swagger-parser:1.0.48` libraries during the import process. This means that the export of back-end APIs is not supported for OAS3 or WSDL APIs, as this functionality relied on custom code in the old parser that is no longer available.

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

All API Manager APIs are now representation as both Swagger 2 and OAS3 (previously these APIs where only available in Swagger 2 format). The OAS3 representation of the APIs provide additional information and are better aligned to the https://editor.swagger.io/ standard.

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
