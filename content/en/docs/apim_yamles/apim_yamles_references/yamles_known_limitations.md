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
The format of API Manager data stored in Cassandra is the same regardless of whether a YAML configuration or an XML federated configuration is deployed.
{{< /alert >}}

## Encrypt or change the passphrase of YAML Configuration that contains API Manager configuration

When the default factory API Manager configuration is included in the YAML configuration it cannot be encrypted or re-encrypted. This issue occurs because some fields in the factory configuration do not adhere to the cardinality defined in the Entity Store model.

This issue occurs when the `encrypt` or `change-passphrase` options are used in the `yamles` CLI tool, or when the group passphrase is changed through the `managedomain --change_passphrase` command.

To workaround this, add values or a `/null` value for the missing fields.

## Encrypt or change the passphrase of YAML Configuration that contains environmentalized settings

When a YAML configuration with environmentalized settings is encrypted or re-encrypted, the resolved values are written into the YAML entity files when encryption completes. For example if my YAML policy file has the following content:

```yaml
---
type: FilterCircuit
fields:
  name: Test
  start: ./Trace Filter
children:
- type: TraceFilter
  fields:
    traceBody: true
    traceMsg: '{{ env "TRACE_MESSAGE" }}'
    traceLevel: 2
    doIndent: true
    name: Trace Filter
```

after an encryption the file will get rewritten as follows (assuming the environment variable `TRACE_MESSAGE` is set and has a value `"The trace message"`):

```yaml
---
type: FilterCircuit
fields:
  name: Test
  start: ./Trace Filter
children:
- type: TraceFilter
  fields:
    traceBody: true
    traceMsg: The trace message
    traceLevel: 2
    doIndent: true
    name: Trace Filter
```

If the environment variable is not set, the string `"invalid field"` is added to the YAML file.

This issue occurs when the `encrypt` or `change-passphrase` options are used in the `yamles` CLI tool, or when the group passphrase is changed through the `managedomain --change_passphrase` command. The changes to the deployed configuration (using `managedomain`) might not be problematic as long as the configuration is not pulled back from the runtime and used to create a new YAML configuration project.

To workaround this, encrypt the passphrase before applying environmentalization, or reset the environmentalized values after encryption.

## Node Manager

YAML configuration for Node manager is not supported.

## API Gateway Analytics

YAML configuration for Analytics is not supported.

## YAML factory configuration

A YAML factory configuration is not provided out-of-the-box, but can be created by converting the XML federated factory configuration using `yamles fed2yaml`.

## Deployment archive

You can update the deployment archive package properties by choosing `option 22` of the `managedomain` script. For more information, see [Updating Deployment Archive Properties](/docs/apim_yamles/yamles_packaging_deployment/#updating-deployment-archive-properties).

## Schema Validation filter

In YAML format, when the XML Schema Validation filter uses multiple XML schemas to validate the message body, an issue will occur when the filter attempts to find the schema. To workaround, select one XML schema per Schema Validation filter.

## Configuration containing `{{` in entity field values

If your original XML federated configuration held the content `{{` in an entity field value, the converted YAML might fail to load in the API Gateway because of a `com.github.jknack.handlebars.HandlebarsException`. This could be the case if the field contains JSON. The error occurs as the YAML engine is interpreting the `{{` as the start of its envrionmentalization syntax. To workaround, edit the entity value by placing a whitespace between the curly brackets.
