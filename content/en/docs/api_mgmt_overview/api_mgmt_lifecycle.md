{
    "title": "API Management lifecycle",
    "linkTitle": "API lifecycle",
    "weight": "3",
    "date": "2020-04-14",
    "description": "The entire API life cycle must be considered from both sides: The service provider and service consumer, to get the most value from the platform."
}

An API management solution must consider both API consumers and API service providers and how they should interact with the platform. 
### Self-service is the key to success
The role of central IT with specialists in API security should not be responsible for each API, but should develop global security policies that are utilized by each API. 

It is important for service providers that the integration of their interfaces does not become an additional daily burden, but can be integrated into the existing workflow. This is the only way to ensure that APIs are integrated into the platform early enough. In other words, the API management platform should be integrated via an automatic CI/CD pipeline for APIs.
The service consumer expects an API Developer Portal, which is the central entry point into the company's API economy. There he will find APIs from various service providers, both enterprise services and integrated cloud services. These should be well documented, divided into categories (business expertise, maturity level) and in a self-service test and, if necessary, consumable.

The following illustration shows the complete API lifecycle, which is passed through by various personas, including of course primarily the API service provider and consumer.

![Entire API-Lifecycle](/Images/overview/api-lifecycle-overview.png)

## API-Design
Only the pure and possibly large number of APIs in an API management platform does not necessarily make it a success. Important are valuable APIs, some call these Value-APIs (VAPI), which are based on a well thought-out API design and always have the consumption of the API and not the existing data structures in mind. 
If you want to learn more about API design, we recommend for example the book: ![Design of Web API](https://www.manning.com/books/the-design-of-web-apis). Among other things, it explains what the API Design Diamond is all about.

These Value-APIs usually start with an API-First approach and not with the implementation of an API. API-First means that the API interface, i.e. the design of the API, is first defined and this design is the starting point for further steps, such as mocking and of course the implementation of the API.
For API design, Axway works with its partner Stoplight, which offers a form-based API design editor for both OpenAPI 2.0 and 3.0. Enterprise features for tracking and approving changes in larger teams.

## Develop and Mock APIs

## Configure the API

## Test

## API-Staging

## Pipeline based integration

## Govern and monitor

## Secure your APIs

## Consume APIs in the Developer Portal

## Analytics

## API-Versioning