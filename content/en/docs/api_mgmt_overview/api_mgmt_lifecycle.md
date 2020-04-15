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
If you want to learn more about good API design, we recommend for example the book: ![Design of Web API](https://www.manning.com/books/the-design-of-web-apis). Among other things, it explains what the API Design Diamond is all about.

These Value-APIs usually start with an API-First approach and not with the implementation of an API. API-First means that the API interface, i.e. the design of the API, is first defined and this design is the starting point for further steps, such as mocking and of course the implementation of the API.
For API design, Axway works with its partner Stoplight, which offers a form-based API design editor for both OpenAPI 2.0 and 3.0. Enterprise features for tracking and approving changes in larger teams.

## Mock
Especially when using the API-First approach it makes sense to think about how to quickly and easily mock new APIs.
Mocks help to separate the API service provider from the service consumer side and give potentially interested customers a feeling what this new API will deliver.
While service providers are still busy implementing a service, they can provide a mock, allowing service consumers to advance the implementation of the client.
In addition, mocks help to improve the feedback loop, as potential consumers can now provide information about the payload to optimize it for different application purposes.

## Develop
The API management platform is not responsible for the actual development of APIs, as these are provided by backend applications.
Sometimes, however, backend APIs are too technical to provide the desired value, i.e. they do not represent a value API.
Therefore, in this context, the term "develop" is used to describe, for example, the orchestration or optimization of APIs.
In order to implement the desired API design, one can orchestrate a series of technical APIs or cloud applications. Or optimize the payload depending on the client. Mobile application vs. single page application would be an example.
In addition, a use case in the development area is a kind of integration flow to define, which includes other systems. A good example is to send a notification (teams, slack, mail, push message, etc.) when an order is received.

## Configure the API
In addition to the pure API specification in the form of an OpenAPI (Swagger) definition, the API management system needs to know a number of other information about how the API should be managed.
Which security, tags, custom policies, certificates, images, custom properties, consumer quotas, access rights, etc. should be managed? All this information must be configured or prepared on the platform.
Depending on the chosen approach, manual configuration or automatic deployment, different steps/processes have to be considered.
Here it should be considered that the API service provider, i.e. the developer, should have as little effort as possible to increase the acceptance of the platform. This is the only way to ensure that APIs are registered in the platform in the early API design phase and that the agile approach can be built with feedback loops.

## Test
That an API should be tested goes without saying and is certainly done by every API developer.
However, a general recommendation is to build an appropriate test suite to ensure that the endpoints work according to the specification. These are integration tests that check each API endpoint to see if it responds with the correct response (code + response) depending on various input parameters.
This test suite is essential for a proper lifecycle management / version management, as it allows to detect whether changes lead to a breaking change for consuming applications or not.
In the back of your mind you should keep in consideration that changes to the APIs may be implemented after 6 months or 1 year. Another developer is responsible and he does not know every detail. To give this developer security, this test suite is needed for each API.

## API-Staging
Kunden trennen Systeme in Zonen für Development, Pre-Produktion, Produktion, usw. auf.
Auch die API-Management Plattform wird jeweils in jede Zone deployed. Wie jede andere Anwendung werden auch APIs in der niedrigsten Development-Zone entwickelt, getestet und dann in die höhreren Zone deployed.
Das heißt es braucht ein Deployment Konzept welches nach Möglichkeit automatisiert werden sollte, um die APIs und auch Policies von einer Stage zur nächsten zu promoten.
Wie der genaue Prozess eingerichtet wird, hängt natürlich von den Anforderungen des Unternehmens ab. Zum Beispiel um Release-Artefakte verwenden werden sollen oder nicht. Oder welche Personenkreise welche Verantwortlichen haben.
In der AMPLIFY Axway API-Management Lösung gibt es zwei Deployment Artefakte:
**Policies**
allgemein gültige Policies die von verschiedenen APIs referenziert werden
Diese Policies bilden Security-, Routing-, Integrations- und weitere Use-Cases ab. Sie werden durch Policy-Developer mit Hilfe des Policy-Studios entwickelt und haben eine eigene Deployment-Pipeline. Sie werden relativ selten deployed.
**API**
Die API definiert sich aus der API-Spezifkation und der API-Konfiguration. Wird von Service-Providern entwickelt und jeweils als einzelne Einheit deployed.

Beide Deployment-Einheiten müssen das Staging Konzept unterstützen, da gewisse Bestandteile (z.B. Passörter, Hostnamen, etc.) pro Stage unterschiedlich sind.

## Pipeline based integration
The recommendation is to provide the API management platform, which extends over several stages, with policies and APIs via a CI/CD pipeline.
This enables an agile approach and allows APIs to be deployed quickly, receive feedback and feed it back into the API.
Furthermore, it is possible to extend this pipeline with additional customer-specific requirements, for example to establish governance steps, plausibility checks, etc.
And last but not least, it increases the acceptance of API service providers as they can focus on developing services instead of registering APIs.
Typical systems and tools for pipeline based integration are Jenkins, Bamboo, Maven and possibly an artifact repository like Nexus or Artifactory.

## Govern and monitor
Ist eine API in Produktion wird es wichtig diese zu überwachen.
Zur Überwachung gehören verschiedene Apsekte, wie ein Health-Check, welcher nicht nur prüft, ob eine API existiert sondern eine Durchstich bis zum Backend-System durchführt. Nur damit ist gewährleistet, dass die API auch wirklich Ende zu Ende funktioniert.
Ein anderer Aspekte ist die Runtime Überwachung von Security-Regeln, SLAs, woher die Konsumenten kommen und natürlich die Performance.
Hierfür können die Axway API-Management Boardmittel verwendet werden oder es ist möglich die Plattform in vorhandene zentrale Monitoring-Cockpits zu integrieren.

## Secure your APIs


## Consume APIs in the Developer Portal

## Analytics

## API-Versioning