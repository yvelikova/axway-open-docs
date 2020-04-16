{
"title": "Integrate your API-Management solution into a CI/CD pipeline",
"linkTitle": "Pipeline",
"weight":"40",
"date": "2020-04-14",
"description": "Learn how to integrate the API management solution into a pipeline."
}

These days, speed to bring new products to market plays an enormous role. In the software environment, an integration pipeline is typically used to compile, test and deploy the software. APIs are no exception and should be deployed in the same way, if necessary even parallel to the application that provides the API.

In addition to the speed advantage, the integration of the Axway API Management Platform into an integration pipeline brings several benefits:

* Automated testing facilitates version management
* Less effort for the developer to manage the API
* Better feedback loop leads to a better product, i.e. API
* Working collaboratively is made easier

To integrate the Axway API Management Platform, two deployment artifacts must be considered and deployed in separate pipelines.

**Policies**\
Policies provide security, integration and routing functions and are developed by the policy developer. Policies are developed in a general way and are used by a variety of APIs. Policies are deployed to the corresponding API gateways or the API gateway group.
Policy changes and the associated deployments are significantly less frequent than individual APIs. Learn more policies.

**APIs**\
The APIs deployment unit is defined by the actual API specification and the configuration of how the API is to be managed on the API management system. Both can be described as API packages and are deployed individually. These packages are managed by API developers (also called producers).

Different deployment workflows are required for both approaches. The possible concepts and approaches are explained here.

## Policy deployment

## API deployment

The goal is the automatic management and deployment of its own APIs by the API developer in self-service mode. This means that the developer can work self-sufficiently and is not regularly dependent on other teams or persons, such as the CI/CD admin or an API administrator, as part of the process.
The requirements for the process are as follows in principle:

**API-Developer Teams**
Developers might work in different teams and not everybody should see everything. This is managed by Access-Groups in Bitbucket or GitHub, that can be used to control access permissions for each repository.

**No Jenkins-Admin**
Using the described approach of "Organization folders" no centralized Jenkins Admin-Team is required to create Jobs/Workflows in Jenkins. Once an initial setup has been done by a Jenkins-Administrator, API-Developers can control Jenkins-Job on their own.

**Support Staging**
Even if the API-Developer experierence should be simple and automated, in many enterprise companies approval or quality gates must be established. Also it must be possible to trace back to a certain version of an API exposed.

**Segregation of responsibilities**
Developers implementing an API should not be able to see or maintain configuration data for other stages, such as Pre-Production or Production.

### Process overview

The assumption is that we have a number of API developers working on different or even the same projects and repositories.
They should be able to control the deployment pipeline of their APIs independently. At least in the Development Stage before the API package for higher stages is released.

The following diagram shows the process for the development without staging concept in a simplified way:
![Jenkins Pipeline overview](/Images/api_mgmt_overview/jenkins-workflow.png)

To learn more you may read [here](https://github.com/Axway-API-Management-Plus/apimanager-swagger-promote/wiki/9.-Jenkins-Integration-with-GitHub-&-Bitbucket)

### Staging

In many companies, it is best practice to create packages/artifacts, some kind of releases for software projects. These artifacts are managed by repositories, such as Nexus, JFrog-Artifactory and used to share assets between teams and finally these artifacts are deployed to the target system. This provides several benefits, such as version auditing, segregation of concerns, rollbacks to previous version and CI/CD-Gates can be established.  
We recommend to use the same approach also for promoting and deploying APIs into all different API-Management stages.

It starts with the API-Developer/Service-Provider and of course he expects the flexibility to code/deploy/test frequently until he is satisfied with his code and creates a release package.  
The process for the API-Developer might looks like this:  
![Developer process](/Images/api_mgmt_overview/dev-to-prod-process.png)  

_Please note: Also with that process it might be efficient to use Swagger-Promote as a normal CLI._  

### Promoting to all other stages

When the process above is finished, the API-Release-Package is created to be taken over by the next stage, which might be already PROD or previous stages such TEST. But from this point on, the API-Release-Package is not changed anymore and deployed into the different stages with different configurations.  
The process in all remaining stages is different to the development stage and illustrated in the following picture:

![Non-Development stages](/Images/api_mgmt_overview/prod-process.png)  

You can watch this video to get an overview how the process works:
{{< youtube HGCZ0IQmqd8 >}}