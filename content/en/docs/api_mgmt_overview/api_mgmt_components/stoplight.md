{
"title": "API Design & Prototype with Stoplight",
"linkTitle": "Stoplight",
"weight":"5",
"date": "2020-04-14",
"description": "The API Design Management Platform powering the world's leading API first companies."
}

For API design, Axway & [Stoplight](https://stoplight.io) work in partnership. The following page gives an overview of the possibilities Stoplight offers and how it can be integrated into the Axway API management platform.
Following the API First approach, it is important to have a powerful API design tool that can be used by non-technical people to develop OpenAPI 2.0 / 3.0 API definitions.

## Stoplight Studio

* Form-Based or Code-Based OpenAPI 3.0 and 2.0 Editor
* Available as Rich Client (Windows, Mac & Linux) or Web-based
* Fully based on Git - Easy integration into
* API Design, File and Documentation View
* Integrated Mock Service based on [Prism](https://stoplight.io/mocking)

![Entire API-Lifecycle](/Images/api_mgmt_overview/stoplight_studio.png)

To get a full overview about what Stoplight Studio provides please visit: [https://stoplight.io](https://stoplight.io/design)

Watch this video to learn how to use Stoplight:\
[![API Design with Stoplight](https://img.youtube.com/vi/7olnV8rR1xc/0.jpg)](https://youtu.be/7olnV8rR1xc?t=610)

## Integrate into the Axway API-Management platform

Since Stoplight creates standard OpenAPI (Swagger) files under the hood, they can be directly transferred to the API management platform.
Besides the possibility of manual transfer, i.e. importing the OpenAPI specification via the API Manager Web UI, it can also be imported via for example: swagger-promote directly or via a CI/CD pipeline.

Since Stoplight creates standard OpenAPI (Swagger) files under the hood, they can be directly transferred to the API management platform.
As an API designer you have the option of manual import of the OpenAPI specification via the API Manager Web UI, but direct integration via: swagger-promote is preferable because it makes the process fast, easy and repeatable.
In addition, Stoplight Studio works on the basis of a checked-out git repository, which allows a fully automatic coupling with CI/CD-System.

The following diagram shows simplified integration between Stoplight and the Axway API management solution:
![Entire API-Lifecycle](/Images/api_mgmt_overview/stoplight-integration-overview.png)

The following video demonstrates the possible integration and how the process looks like:
{{< youtube ddOhO_BmVeE >}}

Read more about how to setup a [pipeline](./pipeline    ).