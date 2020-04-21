{
    "title": "Introduction to API Builder",
    "linkTitle": "API Builder",
    "weight":"10",
    "date": "2020-04-14",
    "description": "Integration, orchestration, and mocking of APIs as a lightweight microservice."
}

The [Axway API Builder](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_getting_started_guide.html) is based on Node.js, and acts as an integration orchestration layer between existing service providers and the API management system, or governance layer.

The API Builder application is flexible and therefore able to connect to different service providers:

* Databases
* REST API based on an OpenAPI 2.0 or 3.0 specification
* Cloud applications
* Using an SDK additional plugins/connectors can be added

![API-Builder Orchestration Layer](/Images/api_mgmt_overview/api-builder-orchstration-layer.png)

## Use API Builder

The basic principle of API Builder is to expose APIs in the same way as any other application, such as a Node.js or Spring Boot application.
The advantage of API Builder is the speed of implementing integration usecases faster than implementing them manually. Instead of having to deal with how to integrate into a system, there may be a ready-to-use plugin that can be installed in the API-Builder project.
The API builder is not an API gateway or security component but an integration and orchestration layer. The APIs exposed by the API builder are typically imported into the API management solution as backend APIs.

This is what the API-Builder offers:

* a low code/no code approach
* based on standards: OpenAPI/Swagger, Node.js, Javascript, JSON
* A powerful flow engine
* optimized for use in containers
* Easily expandable via an available [SDK](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_sdk.html)

To expose and implement APIs, the API builder offers two different options.

### Model approach  

Connectors are the key in the model-based approach. These connectors have the task of generating a model from data sources such as databases. For this model a simple CRUD-API can be provided quickly and easily. With this approach, a CRUD-API can be generated within minutes, which can of course be reduced to read access, for example.

![API from Model](/Images/api_mgmt_overview/api-builder-model-to-api.png)

The following demonstrate how to connect to a database and create a CRUD API based on it:\
{{< youtube i5euq6UCGPo >}}

Learn more about API-Builder [Models](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_models.html)

### API First approach

In the API-First approach, a defined API specification (Open-API/Swagger) is imported into the API Builder as the initial step. This steps tells API what endpoint should be exposed, what parameters each endpoint has and so one. The API-Specification might come from the API-Design phase where you have used your perfered API-Design editor.
Based on the initial step, all endpoints are disabled by default and now you can implement each endpoint with a flow using the plugins, connectors and model you need for your use case.

![API-First using flows](/Images/api_mgmt_overview/api-builder-api-flows.png)

Another video illustrates how to implement an API-Design using flows:
[https://youtu.be/RGhFMKKgt1I](https://youtu.be/RGhFMKKgt1I)

Learn more about [API-Builder flows](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_flows.html).

Both approaches can also be mixed, for example, to combine the data from a model with the data from a REST service.

### Mock

To mock an API with API-Builder you basically follow the same steps as for the API-First approach and just use the Create Mock option after you have imported your API-Specification. See this video:\
{{< youtube 5paF271XmdM >}}

## Deployment

API Builder projects are designed to run as docker containers in a scalable environment such as a Kubernetes cluster.
Even though the API builder supports a low code/no code interface, a Node.js application with a set of javascript and config files is created in the background. Ideally these are versioned like any other application, built via a pipeline, tested and finally a docker image is created and published.
Based on the image, the API-Builder application is provided as a docker container. The APIs exposed in this way are registered in the API management as backend APIs.