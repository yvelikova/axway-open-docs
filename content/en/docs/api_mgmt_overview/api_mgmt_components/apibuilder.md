{
    "title": "API Builder",
    "linkTitle": "API Builder",
    "weight":"10",
    "date": "2020-04-14",
    "description": "Integration, orchestration and mock of APIs as lightweight microservice."
}

The [Axway API builder](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_getting_started_guide.html) is based on Node.js, and acts as an integration orchestration layer between existing service providers and the API management system, or governance layer.
The API builder application is flexible and therefore able to connect to different service providers:

* Databases
* REST API based on an OpenAPI 2.0 or 3.0 specification
* Cloud applications

![API-Builder Orchestration Layer](/Images/api_mgmt_overview/api-builder-orchstration-layer.png)

Further connections can be added at any time via a plugins SDK.

## Using API-Builder

### Model

In the model-based approach, connectors are integrated, which have the task of generating one model per table from data sources such as databases. For this model a simple CRUD-API can be exposed quickly and easily.

![API from Model](/Images/api_mgmt_overview/api-builder-model-to-api.png)

The following demonstrate how to connect to a database and create a CRUD API based on it:\
{{< youtube i5euq6UCGPo >}}

### API First

In the API-First approach, a defined API is imported into the API builder, for example from the API design step. The API can be implemented individually with customizable API builder flows.

![API-First using flows](/Images/api_mgmt_overview/api-builder-api-flows.png)

Another video illustrates how to implement an API-Design using flows:
[https://youtu.be/RGhFMKKgt1I](https://youtu.be/RGhFMKKgt1I)

Both approaches can also be mixed, for example, to combine the data from a model with the data from a REST service.

### Mock

To mock an API with API-Builder you basically follow the same steps as for the API-First approach. See this video:\
{{< youtube 5paF271XmdM >}}

## Deployment

API Builder projects are designed to run as docker containers in a scalable environment such as a Kubernetes cluster.
Even though the API builder supports a low code/no code interface, a Node.js application with a set of javascript and config files is created in the background. Ideally these are versioned like any other application, built via a pipeline, tested and finally a docker image is created and published.
Based on the image, the API-Builder application is provided as a docker container. The APIs exposed in this way are registered in the API management as backend APIs.