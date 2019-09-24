{
    "title": "Promote managed APIs between environments",
    "linkTitle": "Promote managed APIs between environments",
    "date": "2019-09-17",
    "description": "Promote APIs between environments."
}

When APIs have been registered in API Manager, you can promote them directly between environments using the API Manager export/import mechanism. This exports registered APIs in JSON
format, which you can then import into API Manager as required. For more details, see the [Manage the front-end REST API lifecycle](api_mgmt_virtualize_web.htm#Manage).

The following approaches to promoting managed APIs are also available:

* Use the `apimanager-promote` script to automatically promote APIs between environments with zero downtime for DevOps.
* Use a promotion policy that you have configured in Policy Studio to automate promotion between environments.
* When APIs have been developed using Policy Studio, you can also promote them between environments using the API Gateway mechanism for promotion and deployment of standard API Gateway configuration.

This topic describes each of these approaches to API promotion.

## Promote registered APIs with zero downtime using a script

The `apimanager-promote` script enables you to:

* Promote APIs and client applications registered in API Manager to another environment with zero downtime. For example, this ensures that you will not lose service due to any APIs that are unpublished.
* Perform automatic bulk import of APIs and applications previously exported using the API Manager REST API or web console.
* Ensure that pre-configured credentials continue to work between environments.
* Export a subset of APIs and applications and re-import with customized settings in a properties file.
* Handle updates of any conflicting APIs, applications, or application credentials without causing downtime for any published APIs.

### How to use the apimanager-promote script

When using the `apimanager-promote` script, the high-level steps are as follows:

1. Export the APIs and applications that you wish to promote from API Manager (as a `.dat` file in JSON format). For example, select the front-end APIs that you wish to export, and click **Manage selected** > **Export API collection**. For more details, see [Manage the front-end REST API lifecycle](api_mgmt_virtualize_web.htm#Manage) and [Manage the client application lifecycle](api_mgmt_consume.htm#Manage).
    Alternatively, you can export using the API Manager REST API. For more details, see [API Manager REST APIs](api_mgmt_rest_api.htm).
2. Create your `promotion.properties` file to specify how your APIs and applications are promoted. See [Generate your promotion.properties file](#Specify).
3. Place your exported API and application files (`.dat`) and your generated `promotion.properties` file in the same directory.

    {{< alert title="Note" color="primary" >}}You must ensure that the respective files names are `api-*.dat`, `application-*.dat`, and `promotion.properties`, and change the file names if necessary.{{< /alert >}}

4. Run the `apimanager-promote` script to import the APIs into the target API Manager environment.
    This script is available in the following directory:

```
INSTALL_DIR/apigateway/posix/bin
```

#### Run the apimanager-promote command

You must specify the target environment that you wish to promote into, your API administrator credentials, along with your source API data files and promotion properties file. For example:

```
apimanager-promote --target https://apimanager.company.com:8075 --username my_admin --passfile users/apiadmins/my_admin-pass <path/to/my_api_data>
```

{{< alert title="Note" color="primary" >}}The `path/to/my_api_data` directory must include the exported `.dat` file for the source APIs (and optional applications if exported) and your `promotion.properties` file.{{< /alert >}}

#### Specify apimanager-promote command options

You can specify the following command options:

| **Command option**      | **Description**                                                                       |
|-------------------------|---------------------------------------------------------------------------------------|
| `-? --help`             | Print help message and exit.                                                          |
| `-f , --passfile <arg>` | Specify an API administrator password file.                                           |
| `-p , --password <arg>` | Specify an API administrator password.                                                |
| `-t , --target <arg>`   | Specify the target API Manager environment URL.                                       |
| `--template`            | Print out the `promotion.properties` template file to help specify the required data. |
| `-u,--username <arg>`   | Specify the API administrator user name.                                              |

#### Generate your promotion.properties file

You must create a `promotion.properties` file to specify options for the APIs and applications to be promoted. For example, this enables you to specify how to manage any conflicts and an optional virtual host for the target environment.

You can use the `apimanager-promote --template` command to generate a default properties file, which you can then customize as needed. For example:

```
>apimanager-promote --template

# promotion.properties (generated 09/05/17 15:55)

organization.apipromotion.import=API Development
organization.target=Community
api.conflict.upgrade=false
application.conflict.upgrade=false
application.apikey.upgrade=false
application.oauthclient.upgrade=false
application.oauthresource.upgrade=false
api.publish.virtualhost=
api.unpublished.remove=false
```

{{< alert title="Note" color="primary" >}}You must ensure that the target organizations specified in the `promotion.properties` file already exist in that instance before running the `apimanager-promote` command.{{< /alert >}}

The promotion properties are described as follows:

| **Property**                        | **Description**  |
|-------------------------------------|------------------|
| `organization.apipromotion.import`  | Specify the target development organization that all the APIs are imported into (for example, the default `API Development` organization). |
| `organization.target`               | Specify the target consumer organization that all the client applications are imported into. This organization is also given access to all the imported APIs (for example, the `Community` organization). |
| `api.conflict.upgrade`              | Specify whether to promote an existing API if there is a conflict in the development organization (`true` or `false`). |
| `application.conflict.upgrade`      | Specify whether to promote an existing application if there is a conflict in the consumer organization (`true` or `false`). |
| `application.apikey.upgrade`        | Specify whether to promote an existing API key if there is a conflict in the consumer organization (`true` or `false`). |
| `application.oauthclient.upgrade`   | Specify whether to promote an existing OAuth client application if there is a conflict in the consumer organization (`true` or `false`). |
| `application.oauthresource.upgrade` | Specify whether to promote an existing OAuth resource if there is a conflict in the consumer organization (`true` or `false`). |
| `api.publish.virtualhost`           | Specify an optional virtual host name and port on which the promoted APIs are available. The host name should be DNS resolvable. |
| `api.unpublished.remove`            | Specify whether to remove an old unpubished API from the development organization (`true` or `false`). This only applies when an upgrade occurs. For example, if there is a conflict and `api.conflict.upgrade` is set to `true`, this results in two APIs (existing and upgraded). The `api.unpublished.remove` option specifies whether to keep or delete the existing API that has been unpublished. |

{{< alert title="Tip" color="primary" >}}After running the `apimanager-promote` command, press **F5** to reload the API Manager web console in the target environment.{{< /alert >}}

## Promote registered APIs using a promotion policy

APIs and applications registered using API Manager can be exported from one API Manager environment and imported into another API Manager environment using a file-based package (`.dat` file in JSON format). For example, this enables APIs to be promoted from a sandbox API group where client applications are developed and tested to the production API group. You can use a custom promotion policy that has already been developed in Policy Studio to automate this process in API Manager.

{{< alert title="Note" color="primary" >}}If you use a custom promotion policy, you must also promote this policy as part of the standard API Gateway configuration. For more details, see [Promote APIs registered in](#Promote).{{< /alert >}}

### Create the promotion policy in Policy Studio

You must first create your custom promotion policy in Policy Studio to import APIs into a target environment. For example, the following promotion policy is based on the `proxies/import` method provided in the API Manager REST API:

![API Manager Promotion Policy](/Images/docbook/images/api_mgmt/api_mgmt_promotion_policy.png)

This policy imports a previously exported API as follows:

* If the API was exported using a password, the file is encrypted, and a password must be set to decrypt.
* The target API Manager environment is specified by setting the target organization ID.
* The import creates a virtualized API and all the back-end API definitions necessary for the front-end API in JSON format.
* This approach is similar to the `proxies/importFromUrl` method except that it supports traditional form-based file upload to the target environment using `multipart/form-data`.

For more details on the on the `proxies/import` method, see [API Manager REST APIs](api_mgmt_rest_api.htm).

{{< alert title="Tip" color="primary" >}} You can also use the **Set Attribute** filter in your promotion policy to configure the `errorMessage` message attribute with a meaningful error message. For example, when used in conjunction with a **False** filter, this message can then be displayed in API Manager if the API promotion policy fails.{{< /alert >}}

For more details on how to create policies, see the [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/).

### Enable the promotion policy in Policy Studio

To enable your custom promotion policy in Policy Studio, select **Server Settings** > **API Manager** > **API Promotion** in the Policy Studio tree. For more details, see [*Configure API management settings in* on page 1](api_mgmt_config_ps.htm).

### Enable the promotion policy in API Manager

When you have configured and deployed a promotion policy in Policy Studio, you must also then enable the policy in API Manager. You can do this by selecting **Settings** > **API Manager settings** > **API REGISTRATION** > **API promotion via policy**. A **Promote API** option is then added to the **Frontend API** management menu when you log in again. For more details, see [*Configure web-based settings in* on page 1](api_mgmt_config_web.htm).

For details of onboarding a client application from sandbox APIs to production APIs, see [*Deploy sandbox and production APIs* on page 1](api_mgmt_environment.htm).

## Promote APIs developed in Policy Studio

APIs created with the REST API development wizard in Policy Studio are part of the standard API Gateway configuration. This means that you can promote APIs between environments using the API Gateway mechanism for promotion and deployment of API Gateway configuration (using `.fed`, `.pol`, and `.env` packages). For example, you can use this mechanism to promote APIs from a testing environment to a production environment and to handle differences between each environment.

For more details on the API Gateway mechanism for promoting configuration between environments, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
. For details of onboarding a client application from sandbox APIs to production APIs, see *Deploy sandbox and production APIs* on page 1.
