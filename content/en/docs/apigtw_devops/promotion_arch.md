{
"title": "Deployment and promotion tasks",
"linkTitle": "Deployment and promotion tasks",
"weight":"4",
"date": "2019-11-19",
"description": "Learn about the tasks, tools, and architecture used in API Gateway deployment and promotion."
}

This topic describes the tasks, tools, and architecture used in API Gateway deployment and promotion. It explains the breakdown of tasks performed by a policy developer in a development environment, and the tasks performed by an API Gateway administrator in an upstream environment (for example, testing or production).

## Deploy in a development environment

In a development environment, the policy developer works in a continuous cycle of iterative development, deployment, and testing. In this environment, it makes sense to keep all API Gateway configuration in a single package. This enables the policy developer to deploy the API Gateway configuration directly from Policy Studio in a single *deployment package*. The following diagram shows an example environment topology.

![Deploying in a development environment](/Images/docbook/images/promotion/deploy_dev_env.png)

The deployment package contains the entire API Gateway configuration, and is implemented as a `.fed` file.

## Environmentalize configuration

When development is complete, the policy developer must prepare the configuration for promotion to upstream environments. This involves *environmentalizing*
the configuration that will require environment-specific settings in upstream environments. The policy developer performs the following tasks in Policy Studio:

* Selects the policy, listener, and external connection configuration settings that are environment specific.
* Enters values for these environment-specific settings to ensure that the configuration remains deployable in the Development environment. These environment-specific settings are contained in the environment settings in the deployment package. If you have already entered values for these settings, these are used so you do not have to manually re-enter them.
* Exports a *policy package* (`.pol` file) on disk for promotion. For example, this enables you to transfer the file using FTP to the upstream environments, or to load the file into a CM repository.

The following diagram shows an example environment topology.

![Externalizing configuration](/Images/docbook/images/promotion/extern_config.png)

The policy package that is exported for promotion is implemented as a `.pol` file. This file should remain unchanged when it is promoted to upstream environments.

## Promote upstream (first cycle)

A *first cycle* promotion refers to promoting to an upstream environment in which no previous promotions have been performed. This means that the upstream environment is still running the default factory configuration that is installed with API Gateway. In this case, there is no existing upstream *environment package* (`.env`) to load into Configuration Studio at promotion time.

### Create an environment package

In an upstream environment (for example, testing), the API Gateway administrator uses Configuration Studio to create an environment package that is specific to their environment. Because this is the first promotion cycle, the administrator opens the policy package (`.pol`) received from the development environment, and performs the following tasks:

* Specifies values for the environment-specific settings selected in the development environment (for example, policy, listener, and external connections).
* Imports or creates certificates and keys.
* Defines users and user groups.
* Exports the environment package to a file on disk. The environment package is implemented as an `.env` file. For version history and rollback, you could also load the file into a CM repository.

### Deploy the policy and environment packages

When the environment package has been created, the administrator can use API Gateway Manager or scripts to deploy both the policy package from the development environment and the newly created environment package. Each environment will have its own version of the `.env` file containing environment-specific settings, certificates, users, and so on. This constitutes a full deployable configuration when combined with the unmodified `.pol` file from the development environment.

{{< alert title="Note" color="primary" >}}Alternatively, the administrator can save a deployment package (`.fed`) from Configuration Studio, which merges the policy and environment package data. If you are not concerned with moving an unmodified policy package from the development environment to all upstream environments, you can save a single `.fed`
file, and deploy this using API Gateway Manager or scripts (for example, if you want a single file for convenience).{{< /alert >}}
The following diagram shows an example environment topology.

![Upstream administration (first phase)](/Images/docbook/images/promotion/upstream_phase1.png)

{{< alert title="Note" color="primary" >}}The environment settings in the environment package (`.env`) override the environment settings in the policy package (`.pol`). The environment settings in the policy package indicate settings for which you need to specify environment-specific values. {{< /alert >}}

## Promote upstream (subsequent cycles) {#promote-upstream}

A *subsequent cycle* promotion refers to promoting to an upstream environment that has already had configuration promoted to it (any number of times). In this case, there is an existing version of the upstream environment package (`.env`) to load into Configuration Studio at promotion time.

### Create the environment package

In the upstream environment, the API Gateway administrator uses the Configuration Studio to create an environment package specific to their environment that contains all the environment-specific settings, certificates, and so on. This is required for the new policy package received from the development environment. Because this is not the first promotion cycle, there is already an environment package deployed in this environment. The administrator must merge this with the new policy package from the development environment, which enables reuse of environment-specific settings already entered.

The administrator opens the new policy package from the development environment, and the environment package currently deployed in their environment. Opening these `.pol` and `.env` files displays a merged view of the environment settings. The administrator then performs the following tasks:

* Specifies values for new environment-specific settings required by the new policy package from the development environment.
* Updates values for environment-specific settings that previously existed (if necessary).
* Adds or removes certificates and keys.
* Adds or removes users and user groups.
* Exports the environment package to a file on disk. Alternatively, for version history and rollback, you could load the file into a CM repository.

### Deploy policy and environment packages

When the environment package has been created, the API Gateway administrator can then deploy both the policy package received from the development environment, and the new environment package using API Gateway Manager, or using scripts.

The following diagram shows an example environment topology.

![Subsequent upstream administration](/Images/docbook/images/promotion/upstream_phase2.png)

## Roll back configuration

You must ensure that you maintain a copy of previous configuration versions (policy and environment packages) in case you need to roll back and deploy an earlier configuration version. For example, you could use a Configuration Management (CM) repository to manage and roll back configuration package versions.

## Multisite HA environments

Some environments might require different environment values for connections, certificates, and so on (for example, a remote High Availability (HA) site for a production environment in an active/passive configuration). In this scenario, the primary site is actively processing requests. The remote site is the backup passive configuration, deployed but not processing requests, and only becomes active if the primary site goes down. The same API Gateway configuration is deployed in both sites. Each site could be a separate domain, or one domain with different groups for each site. Specific environment values could be different for each site, for example, the remote site might connect to a different backup authentication server.

When the administrator receives the policy package (`.pol`) from the downstream environment, they can use Configuration Studio to create separate environment packages (`.env`) for the primary site and the remote site. The only difference between both environment packages is in the environment values required. In the primary site, the administrator deploys the policy package and the primary site environment package. In the remote HA site, the administrator deploys the same policy archive and the remote site environment package.

## Passphrase-protected configuration

When you promote and deploy passphrase-protected configuration between environments (for example, from testing to production), the passphrase for the target configuration (production) can be different from the passphrase in the source configuration (testing).

If you are using a different passphrase in each environment, when the deployment takes place, you can specify the correct passphrase for the target configuration in Policy Studio.
