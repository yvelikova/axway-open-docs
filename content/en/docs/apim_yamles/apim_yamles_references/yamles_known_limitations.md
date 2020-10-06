{
"title": "Known limitations",
"linkTitle": "Known limitations",
"weight":"50",
"date": "2020-09-25",
"description": "List of known limitations related to the YAML configuration."
}

## Policy Studio

There is no support for YAML configurations in Policy Studio.

## API Gateway Manager web UI

Deployment of YAML configurations via API Gateway Manager web UI is not supported.

## Custom entity types

Custom entity types are not supported in YAML configuration.

## Team development

* Limited support of Team development.
* No tooling support to look for merge conflicts.
* Ordering of tar-level merges needs to be considered.
* See [Team Development with YAML configuration](/docs/apim_yamles/apim_yamles_references/yamles_team_development) for details.

## ES Explorer

Support of ES Explorer is limited to viewing and editing YAML configurations.

When an entity store is edited via ES Explorer or the entity store API, some fields in other entities might get reordered, creating more `diffs` than are really required.

## Config Fragment

There is no YAML equivalent of a configuration fragment for export or import purposes.

## Environmentalized key fields

YAML configuration does not support environmentalized key fields.

## Windows OS

`yamles` CLI cannot run on Windows.

To run on Windows:

1. Create a Linux VM that runs on your Windows machine.
2. Run the API Gateway installer on the Linux VM, and select the **Package & Deploy Tools** option to install client tooling only.

The `yamles` CLI can then be used from the `apigateway/posix/bin` directory on your Linux VM.

## API Gateway Group Instance

An API Gateway instance cannot be added to a group when the group has a YAML configuration deployed to it.

## Certificate

Private keys are in external files in DER format.
Certificates are in external files in PEM format, with the PEM header and footer lines removed.

There is no support for either DER or PEM formats.

## API Manager

The YAML format supports API Manager. However, is not possible to run `setup-apimanager` on an API Gateway instance that has a YAML configuration deployed to it. To workaround this limitation:

1. Run `setup-apimanager` after deploying an XML federated configuration to your group.
2. When API Manager is setup, you can create a new project in Policy Studio by downloading the current configuration from the running API Gateway.
3. If the configuration is downloaded to `~/apiprojects/apimanager` you can convert this XML federated configuration to YAML and build a `.tar.gz` as follows:

    ```
    yamles fed2yaml federated:file:/home/user/apiprojects/configs.xml -o ~/yamlconfig --targz ~/yamlconfig.tar.gz
    ```

4. Deploy the `yamlconfig.tar.gz` to the API Manager enabled instance using `managedomain` or `projdeploy`.

{{< alert title="Note">}}
The format of API Manager data stored in Cassandra is the same regardless of whether a YAML configuration, or an XML federated configuration, is deployed.
{{< /alert >}}

## Node manager

YAML configuration for Node manager is not supported.

## API Gateway Analytics

YAML configuration for Analytics is not supported.

## YAML factory configuration

A YAML factory configuration is not provided out-of-the-box, but can be created by converting the XML federated factory configuration using `yamles fed2yaml`.

## Deployment archive

You can update the deployment archive package properties by choosing `option 22` of the `managedomain` script. For more information, see [Updating Deployment Archive Properties](/docs/apim_yamles/yamles_packaging_deployment/#updating-deployment-archive-properties).
