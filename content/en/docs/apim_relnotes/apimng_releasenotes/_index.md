{
    "title": "API Manager 7.7 Release Notes",
    "linkTitle": "API Manager 7.7",
    "no_list": "true",
    "weight": "20",
    "date": "2019-09-20",
    "description": "Learn about the new features and enhancements in this release."
}

## Summary

API Manager is a licensed product running on top of API Gateway, and has the same deployment options as API Gateway: software installation, or virtualized deployment in Docker containers. For more information on API Gateway, see the [API Gateway Release Notes](/bundle/APIGateway_77_ReleaseNotes_allOS_en_HTML5/).

The software installation is available on Linux. For more details on supported platforms for software installation, see [System requirements](/csh?context=305&product=prod-api-gateway-77) in the [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/).

Docker deployment is supported on Linux. For a summary of the system requirements for a Docker deployment, see [System requirements](/csh?context=305&product=prod-api-gateway-77) in the [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/), and for more details see [What you need before you start](/csh?context=900&product=prod-api-gateway-77) in the [API Gateway Container Deployment Guide](/bundle/APIGateway_77_ContainerGuide_allOS_en_HTML5/).

## New features and enhancements

The following new features and enhancements are available in this release.

### Swagger 2.0 enhancements

API Manager now imports, retains, and exports all Swagger v2.0 fields, except for the ventor extentions. 

### Open API Specification (OAS) 3.0 enhancements

* API Manager now imports, retains, and exports all Open API Specification (OAS) v3.0 fields, except for the ventor extentions, callbacks, links and examples.
* Parameter content types are now supported in OAS3.

### Try It and Try Method improvements

API Manager's TryIt and TryMethod now support the rendering of `enum`, which allows you to send multipart forms

* When trying the method of an API, you can now select files as part of the request
* The parameters object types are auto generated in the UI with nested schemes and arrays rendered fully
* The default for parameters are now fully supported
* The `allOf` and `anyOf` in the request bodies are also supported

### Back-end API improvements

The API Manager UI now supports OAS3 `response.content.schemes`. 

* The OAS3 multiple back ends are rendered on the screen, which allows users to select the required URL
* The UI has been extended to include all response codes available in OAS3
* Multipart request bodies are rendered in the back-end UI
* The UI allows users to define `allOf` response types for Swagger 2
* The `DataTypes` in API Manager have been changed to align with the OAS3 datatypes
* Users now have the option to modify all back-end APIs without cloning 

## Limitations of this release

placeholder

## Deprecated features

As part of our software development life cycle we constantly review the core API Management products and related components. As part of this review, the following capabilities have been deprecated:

* RAML support

## Removed features

In our efforts to continually upgrade our products in response to the needs of our customers’ IT environments, Axway occasionally discontinues support for some capabilities. As part of this review, the following capabilities have been removed:

* API Tester

## Known issues

The following are known issues for this release of API Manager.

### placeholder3

placeholder

## Documentation

You can find the latest information and up-to-date user guides at the Axway Documentation portal at <https://docs.axway.com>.

This section describes documentation enhancements and related documentation.

### Documentation enhancements

See [What's new in documentation](whats_new_doc.htm) for a summary of the documentation changes in this release.

### Related documentation

The AMPLIFY API Management solution enables you to create, publish, promote, and manage Application Programming Interfaces (APIs) in a secure and scalable environment. For more information, see the AMPLIFY API Management Getting Started Guide.

The following reference documents are also available:

* [Supported Platforms](https://docs.axway.com/bundle/Axway_Products_SupportedPlatforms_allOS_en)
    * Lists the different operating systems, databases, browsers, and thick client platforms supported by each Axway product.
* [Interoperability Matrix](https://docs.axway.com/bundle/Axway_Products_InteroperabilityMatrix_allOS_en)
    * Provides product version and interoperability information for Axway products.

## Support services

The Axway Global Support team provides worldwide 24 x 7 support for customers with active support agreements.

Email <support@axway.com> or visit Axway Support at <https://support.axway.com>.

See for the information that you should be prepared to provide when you contact Axway Support.
