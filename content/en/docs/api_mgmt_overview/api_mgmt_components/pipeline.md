{
"title": "Integrate your API-Management solution into a CI/CD pipeline",
"linkTitle": "Pipeline",
"weight":"40",
"date": "2020-04-14",
"description": "Learn how to integrate the API management solution into a pipeline."
}

The ultimate goal is to simplify the API-Developer (Service-Provider) experience and enable larger teams to manage APIs in an automated self-service fashion. This requires, that API-Developers can manage APIs on their own, without the requirement to interact with a centralized team to manage Jenkins or the API-Management platform.  

To achieve this goal, it's strongly recommended to integrate the API-Management solution into a CI/CD pipeline for instance using Jenkins. This page describes the best practice approach using Jenkins to integrate with Bitbucket or GitHub.  

You may watch this demo video on YouTube to see how to setup and use the Jenkins integration:  
[![Jenkins Integration demo](https://img.youtube.com/vi/HGCZ0IQmqd8/2.jpg)](https://youtu.be/HGCZ0IQmqd8)

## Requirements 
#### API-Developer Teams
Developers might work in different teams and not everybody should see everything. This is managed by Access-Groups in Bitbucket or GitHub, that can be used to control access permissions for each repository.
#### No Jenkins-Admin
Using the described approach of "Organization folders" no centralized Jenkins Admin-Team is required to create Jobs/Workflows in Jenkins. Once an initial setup has been done by a Jenkins-Administrator, API-Developers can control Jenkins-Job on their own.
#### Staging 
Even if the API-Developer experierence should be simple and automated, in many enterprise companies approval or quality gates must be established. Also it must be possible to trace back to a certain version of an API exposed.
#### Segregation of responsibilities
Developers implementing an API should not be able to see or maintain configuration data for other stages, such as Pre-Production or Production.

## Jenkinsfiles
To allow API-Developers to control Jenkins-Pipelines/Workflows on their own, they have to provide a [Jenkinsfile](https://jenkins.io/doc/book/pipeline/jenkinsfile/) that is used by Jenkins to automatically create a job or pipeline in Jenkins instead of using the UI.  

Now, the remaining question is, how to tell Jenkins from where to read the Jenkins files automatically, as we don't want to configure each API-Project individually? The answer are so called Organization-Folders.

## Organization-Folders
With an organization folder you can auto-discover new API projects including the belonging Jenkinsfile that creates the Job or Pipeline. You basically get the following:  
![Jenkins Pipeline overview](/Images/overview/jenkins-workflow.png)
  
There are Jenkins-Plugins available for [GitHub](https://plugins.jenkins.io/github-branch-source/) and [Bitbucket](https://plugins.jenkins.io/cloudbees-bitbucket-branch-source/).  
Once the plugin has been installed, you can configure where to scan for new projects and automatically create and execute the job/pipeline as defined in each Jenkinsfile:  
  
![Jenkins Pipeline overview](/Images/overview/bitbucket-organization-folder.png)  

For instance, when having the following Repositories in Bitbucket, they will be reflected in Jenkins like so fully automated and each API-Project has it's own Pipeline/Job:  
![Bitbucket and Jenkins Pipeline overview](/Images/overview/bitbucket-with-jenkins.png)  

The following screenshot shows an overview about three individual projects, that may contain just the API-Definition for Swagger-Promote or additional source-code for the application/service itself. Of course, each repository must contain the required Jenkinsfile.  
We are using Maven in these examples, hence every project also contains a pom.xml   
![Bitbucket and Jenkins Pipeline overview](/Images/overview/sample-repositories.png)  

## Staging
In many companies, it is best practice to create packages/artifacts, some kind of releases for software projects. These artifacts are managed by repositories, such as Nexus, JFrog-Artifactory and used to share assets between teams and finally these artifacts are deployed to the target system. This provides several benefits, such as version auditing, segregation of concerns, rollbacks to previous version and CI/CD-Gates can be established.  
We recommend to use the same approach also for promoting and deploying APIs into all different API-Management stages.  

### The Development process
It starts with the API-Developer/Service-Provider and of course he expects the flexibility to code/deploy/test frequently until he is satisfied with his code and creates a release package.  
The process for the API-Developer might looks like this:  
![Developer process](/Images/overview/dev-to-prod-process.png)  

1. The developer is maintaining the APIs in the version control system as explained above
   - providing a Jenkins-File to creates the Jenkins pipeline
   - a pom.xml used to package the API (and perhaps the application itself)
   - and of course the API-Configuration for Swagger-Promote itself
2. During development, for each commit, the Development-Pipeline for that API starts, that
   - Creates a SNAPSHOT artifact that is uploaded into the SNAPSHOT repository
   - This artifact is then automatically deployed into the Development API-Management stage
3. The developer can test & review the API and repeat the process
   - for instance running a test-suite manually or as part of the pipeline
4. Once the API is good to go, he starts a Release-pipeline based on Maven
   - He manually starts the release process on Jenkins providing the release version, etc. 
   - Jenkins checks out the code, builds the package, tags the code and uploads the artifact into the Release-Repository

_Please note: Also with that process it might be efficient to use Swagger-Promote as a normal CLI._  

### Promoting to all other stages
When the process above is finished, the API-Release-Package is created to be taken over by the next stage, which might be already PROD or previous stages such TEST. But from this point on, the API-Release-Package is not changed anymore and deployed into the different stages with different configurations.  
The process in all remaining stages is different to the development stage and illustrated in the following picture:   

![Developer process](/Images/overview/prod-process.png)  

In order to control all Non-Dev-Stages, another structure in the version control system is used that reflects the desired state of all APIs in all stages.  
The following shows the structure of ONE repository having a number folders for each API. With that, people having access to that repository, are able to manage it. If you have the requirement to distinct between Public, Private & Confidential, ... APIs, were only a limited number of people have access to, you may setup multiple repositories each having a smaller set of APIs.  
```
|-- Jenkinsfile
|-- anotherapi
|   |-- pom.xml
|   |-- prod
|   |   |-- another-image-for-prod.png
|   |   |-- myapi-config.prod.json
|   |   |-- pom.xml
|   |   `-- prod-server-certificate.crt
|   `-- tst
|       |-- myapi-config.tst.json
|       |-- pom.xml
|       `-- test-certificate.crt
`-- myapi
    |-- pom.xml
    |-- prod
    |   |-- another-image-for-prod.png
    |   |-- myapi-config.prod.json
    |   |-- pom.xml
    |   `-- server-certificate-prod.crt
    `-- tst
        |-- myapi-config.tst.json
        |-- pom.xml
        `-- test-server-certificate.crt
```
This repository might also use a Jenkinsfile, that is used to create the required Jenkins-Pipeline. However, this pipeline is taking care about all APIs in this repository.  

### API Structure details
- the main API-Folder contains 
  - the pom.xml contains a dependency to the released API version
  - For each stage (tst, preprod, prod) a sub-folder exists 
  - within each stage a Child-POM exists that might override Mavene properties
     - for instance using a different version on prod
     - it might contain a stage api-config file to override Swagger-Promote API-Config
     - it contains required assets such as images, certificates, etc.
  - the stage folder might be optional if the API shouldn't exists on a certain stage

When a  change is committed to that structure (e.g. a new API is added or an existing API-Version has changed) the Jenkins Deploy pipeline is started. It identifies the changed files (which API is changed), downloads the belonging artifact from the repository and deploys that API into the API-Manager stage using Swagger-Promote in the same way as for previous stages.  

_Please note: Additionally it should be possible to start the deployment pipeline manually. For that Jenkins can be used and is then requesting input parameters such as the API to deploy (which folder) and to which stage._