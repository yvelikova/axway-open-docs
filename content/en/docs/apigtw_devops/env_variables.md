{
"title": "Externalize API Gateway instance configuration",
"linkTitle": "Externalize API Gateway instance configuration",
"date": "2019-11-19",
"description": "When API Gateway configuration is deployed to a group, the configuration package settings are applied to all API Gateway instances in the group. You can also specify API Gateway configuration values on a per-API Gateway instance basis using environment variables in the `envSettings.props`\\n file. For example, you can specify different values for the port on which the API Gateway listens for HTTP traffic, depending on the environment in which the API Gateway is deployed. "
}
﻿

When API Gateway configuration is deployed to a group, the configuration package settings are applied to all API Gateway instances in the group. You can also specify API Gateway configuration values on a per-API Gateway instance basis using environment variables in the `envSettings.props`
file. For example, you can specify different values for the port on which the API Gateway listens for HTTP traffic, depending on the environment in which the API Gateway is deployed.

The environment variable settings in the `envSettings.props`
file are external to the API Gateway core configuration. The API Gateway runtime settings are determined by a combination of external environment variable settings and core configuration. This mechanism provides a simple and powerful approach to configuring specific API Gateway instances in the context of API Gateway group configuration defined in policy and environment packages.

{{< alert title="Note" color="primary" >}}Environment variables in the `envSettings.props`
file apply to the API Gateway instance only. Configuration packages (`.fed`, `.pol`, and `.env`
files) apply to the API Gateway group.{{< /alert >}}

The `envSettings.props`
file is located in the `conf`
directory of your API Gateway installation, and is read each time the API Gateway starts up. Environment variable values specified in the `envSettings.props`
file are displayed as environment variable selectors in the Policy Studio (for example, `${env.PORT.TRAFFIC}`). For more details on selectors, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

<div id="p_env_variables_config">

Configure environment variables
-------------------------------

The `envSettings.props`
file enables you to externalize configuration values and set them on a per-server environment basis. This section shows the configuration syntax used, and shows some example values in this file.

### Environment variable syntax

If the API Gateway configuration contains a selector with a format of `${env.X}`, where *X*
is any string (for example, `MyCustomSetting`), the `envSettings.props`
file must contain an equivalent name-value pair with the following format:

    env.MyCustomSetting=MyCustomValue

When the API Gateway starts up, every occurrence of the `${env.MyCustomSetting}`
selector is expanded to the value of `MyCustomValue`. For example, by default, the HTTP port in the server configuration is set to `${env.PORT.TRAFFIC}`. Specifying a name-value pair of `env.PORT.TRAFFIC=8080`
in the `envSettings.props`
file results in the server opening up port 8080 at startup.

### Example settings

The following simple example shows some environment variables set in the `envSettings.props`
file:

``` {space="preserve"}
# default port API Gateway listens on for HTTP traffic
env.PORT.TRAFFIC=8080
# default port API Gateway listens on for management & configuration HTTP traffic
env.PORT.MANAGEMENT=8090
# path to sample directory in API Gateway instance directory
env.SAMPLE.PATH=${environment.VINSTDIR}/sampleDir
```

The following example shows the corresponding `${env.PORT.TRAFFIC}`
selector displayed in the **Configure HTTP Interface**
dialog. At runtime, this is expanded to the value of the `env.PORT.TRAFFIC`
environment variable specified in the `envSettings.props`
file:

![Environment variable in Policy Studio](/Images/docbook/images/promotion/env_variable.png)

{{< alert title="Note" color="primary" >}}All entries in the `envSettings.props`
file use the `env.`
prefix, and the corresponding selectors specified in Policy Studio use the `${env.*}`
syntax. If you update the `envSettings.props`
file, you must restart or deploy the API Gateway for updates to be applied to the currently running API Gateway configuration. {{< /alert >}}

</div>
