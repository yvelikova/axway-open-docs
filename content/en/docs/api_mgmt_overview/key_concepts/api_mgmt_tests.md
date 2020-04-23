{
    "title": "Test your APIs",
    "linkTitle": "Tests your APIs",
    "weight": "5",
    "date": "2020-04-23",
    "description": "Learn how to ensure a clean API lifecycle using tests"
}

## Why testing an API is important

Testing of APIs are essential, especially in the long run, to successfully manage the API lifecycle of an API. The goal of an API is to provide an interface that can be used by a range of consumers. To get the most value out of an API, it is important that as many consumers as possible use the API instead of having a separate version of the API for each consumer. This would be equivalent to a point-to-point integration, which should be avoided.

Therefore, if a number of consumers use an API, it is important that this API remains stable, even if changes are made to the implementation or interface.
There are two types of changes: Breaking and non-breaking changes.

A breaking change forces a consumer to adapt its own implementation, which is not always feasible in practice because you do not have control over all applications. Therefore an API should remain stable as long as possible, i.e. only non-breaking changes should be introduced.

Changes to an API are normal and intended to add more functionality, corrections, etc. to the API. Thus, with each iteration the value of the API increases.
But in order to be able to recognize in the long run whether a change is breaking or non-breaking, tests should be provided for each API from the beginning. For example, if an API is changed 6 months after the last change or introduction by another developer, the developer must be sure that the change is non-breaking. Only tests can help here.

## What is means to test an API

An API, we describe the example here using a REST API defines a set of endpoints/methods to be tested.

The following should be tested:

* all endpoints
    * all parameters
    * Provide all return codes (e.g. with wrong parameters) and test
* the payload should be tested with schema validations
    * for example JSON scheme
    * Get GET check the response
    * send corresponding payload for POST, PUT, etc.
    * Payload content should not be tested

These tests are combined in a test suite and can be executed manually if required or as part of the pipeline. The example refers to REST APIs but the principles are also applicable to other interfaces/formats.

## Test-Tools

Axway itself, as part of the API Management Platform, does not offer dedicated testing tools and only provides recommendations here.

### Postman

![Postman Logo](/Images/api_mgmt_overview/postman-logo.png)

Postman is an established and popular REST client that allows any form of REST interface to be addressed with various parameters and security formats.

Besides simple requests Postman can:

* define different tests per endpoint
* Define assertions, for example to check return codes or payload
* Run scripts for individual use cases
* Use environment variables to run tests on different stages
* The test suite can be exported, versioned and executed as part of the CI/CD pipeline ([Continuous API Testing with Postman](https://blog.postman.com/continuous-api-testing-with-postman/))

Learn more about how to test your APIs with Postman: [Writing tests with Postman](https://learning.postman.com/docs/postman/scripts/test-scripts/)