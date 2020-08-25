{
    "title": "API Gateway configuration files",
    "linkTitle": "API Gateway configuration files",
    "weight": 130,
    "date": "2020-07-16",
    "description": "List of files that you can use to change API Gateway configuration."
}

List of API Gateway files that you can use to change the configuration of the product, so you can test your customizations after the upgrade is complete.

## Redaction files

Contains settings for redaction.

```
apigateway/system/conf/redaction.xml
```

## Node Manager entity store

Contains the entity store configuration for Node Manager.

```
apigateway/conf/fed
```

## API Gateway group entity store

Contains the entity store configuration for the gateway.

```
apigateway/groups/group-id/conf
```

## Analytics entity store

Contains the entity store configuration for analytics.

```
analytics/conf/fed
```

## Custom OAuth

Files on disk that you can modify to change the OAuth configurations. There are also sample configs and scripts, it's possible they may be modified by users.

```
${environment.VDISTDIR}/samples/oauth/templates/login.html
${environment.VDISTDIR}/samples/oauth/templates/requestAccess.html
${environment.VDISTDIR}/samples/oauth/templates/showAccessCode.html
```

```
/opt/Axway-7.7.0/apigateway/samples/oauth/
/opt/Axway-7.7.0/apigateway/samples/scripts/oauth/
```

## Logging changes

Edit the logging configurations. We have changed the `log4j` configuration file from XML to YAML format.

```
apigateway/system/conf/log4j2.yaml
apigateway/system/conf/loggers/eventLog.yaml
apigateway/system/conf/loggers/openTrafficLog.yaml
apigateway/system/conf/loggers/topologyLog.yaml
```

## JVM changes

Configure JVM settings.

```
apigateway/system/conf/jvm.xml
```

## ext/libs entries

Directory for customer JARs. These can be third-party JARs or JARs with Java code that they have written for their own custom filters. Customers are warned that third-party JARs could conflict with those already installed with the API Gateway in the `system/lib` directory.

There is a system-wide `ext/lib` file, and another one for each API Gateway instance.

```
apigateway/ext/lib
apigateway/groups/group-id/instance-id/ext/lib
```

## ext/posix/bin

This directory contains customers custom scripts.

```
apigateway/ext/posix/bin
```

## ext/Linux.x86_64

Configure Java level properties and settings. Often used to turn legacy behavior `on/off` at system level.

```
apigateway/system/conf/jvm.xml
apigateway/conf/jvm.xml
apigateway/groups/group-id/instance-id/conf/jvm.xml
```

*Example:*

```
<?xml version="1.0" encoding="UTF-8"?>
<ConfigurationFragment>
   <VMArg name="-Ddont.expect.100.continue=true"/>
</ConfigurationFragment>
```

The following table lists ext/Linux.x86_64 properties:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `com.axway.apimanager.api.data.cache` | boolean | `false` | Enable caching to improve general system performance and speed by setting the value to `true`. External clients, API keys, and OAuth credentials cache are optimized so that updates to the cache no longer block API Manager runtime traffic, resulting in performance improvements for corresponding API Manager APIs. As a result of the non-blocking cache updates, API Manager memory consumption will increase, particularly in systems with large numbers of external clients, API keys or OAuth credentials. |
| `com.axway.apimanager.api.model.disable.confidential.fields` | boolean | `false` | Fields that contain confidential information are no longer returned in some API calls. For example, a call to `GET /api/portal/v1.3/proxies` does not return the password in the `AuthenticationProfile.parameters\["password"]` field. For compatibility with earlier versions, you can continue to return confidential fields. Set the to `true` under `groups/group-x/instance-y/conf`. **Setting this property to true is not recommended as it could pose a security risk to your API Gateway installation.** |
| `com.axway.apimanager.apirepo.allowWSDLUpdate` | boolean | `false` | By default back-end WSDL APIs cannot be updated in API Manager. Set value to `true` to allow updates. |
| `com.axway.apimanager.use404AuthSuccessNoMatch` | boolean | `false` | To configure the status code of an unsuccessful match of an API to `HTTP 404 Not Found` instead of `HTTP 403 No match found for request` when authentication is successful, set to `true`.
| `com.axway.apimanager.csrf` | boolean | `true` | If you are using the API Manager Management APIs, Client Application Registry APIs, and API Gateway APIs you might need to disable the CSRF token check implemented in v7.5.3 SP9 and later. To disable this check, set to `false`. |
| `com.coreapireg.apimethod.contenttype.legacy` | boolean | `false` | API Manager generates a `No Match For Request` error when `Content-Type` was not equal to the API method MIME type. To disable this check for single API method exact `Content-Type` matching, set to `true`.
| `com.vordel.apimanager.uri.path.trailingSlash.preserve` | boolean | `false` | When a back-end API is created from a Swagger definition file that contains trailing slashes in the path, API Manager keeps the API method paths as designed, it does not remove the trailing slashes from the paths. Set to `true`, when it is required to match inbound API Manager traffic requests with trailing slash against API methods that have no trailing slash in the path definition, and vice-versa. The outbound requests are processed by API Manager as per the corresponding Swagger API definition. |
| `com.vordel.apimanager.swagger.method.singleslash.ignore` | boolean | `false` |When this property is set to `true`, API Manager will build an API request to the back-end without trailing slash, only for an API method defined as a single slash in the Swagger API definition. |
| `com.vordel.dwe.auto204response`  | boolean | `true` | API Gateway rewrites the `HTTP 200 OK` status code by default to `HTTP 204 No Content` if the message payload is empty. When set to `false` you can disable this behavior, for example, if you require that `HEAD` requests keep the  exact same status code as `GET`.  |
| `dont.expect.100.continue` | boolean | `false` | Using an `HTTP 1.1` remote host, API Gateway always sends an `Expect: 100-Continue` HTTP header to the back-end server. Set to `true` to disable this behavior. |

## SSO Configuration files

Contains configuration for Single sign-on.

```
service-provider.xml
sso.jks
idp.xml
```

## ACL and roles for Node Manager management APIs

Used to edit the Access Control List roles for Node Manager management APIs.

```
apigateway/conf/acl.json
```

## Admin users

Changes and additions to admin users.

```
apigateway/conf/adminUsers.json
```

## Domain audit log

A series of rules to control entry to the domain audit log.

```
apigateway/conf/apiaudit.xml
```

## envSettings.props for Node Manager

Environment settings for Node Manager, such as host and port information.

```
apigateway/conf/envSettings.props
```

## envSettings.props for API Gateway instances

Environment settings for API Gateway instances, such as host and port information.

```
apigateway/groups/group-id/instance-id/conf
```

## managedomain.props

Used to set username and password for `managedomain` in a file, rather than required on command line.

```
apigateway/conf/managedomain.props
```

## openssl.cnf

Used for creating the default certs in the Node Manager. Contains the list of predefined variables for the cert.

```
apigateway/conf/openssl.cnf
```

## passwordPolicy.json

This file is edited through the UI, but it can be changed manually. Configures rules around password requirements.

```
apigateway/conf/passwordPolicy.json
```

## userconfig.dtd for Node Manager

User configurations for Node Manager.

```
apigateway/conf/userconfig.dtd
```

This file is pulled in via `system/conf/config.dtd`, which is used in the `system/conf/nodemanager.xml`.

## API Manager custom properties

These files contain customized settings for API Manager and API Gateway.

The `vordel/apiportal/app/app.config` allows customers to add custom fields to the API Manager objects.

```
./apigateway/webapps/emc/vordel/manager/app/app.config
./apigateway/webapps/apiportal/vordel/apiportal/app/app.config
./apigateway/webapps/apiportal/vordel/apiportal/app-login/app.config
./apigateway/webapps/apiportal/vordel/apiportal/registry-login/app.config
```

## API Manager email templates

Email templates and images for API Manager user and application registration and password workflows.

```
/apigateway/system/conf/apiportal/email
/apigateway/system/conf/apiportal/email/images
```

## Customized API Manager landing page

Contains HTML files that you can edit to change the landing page for API manager.

```
/apigateway/webapps/apiportal/vordel/apiportal/custom-login
```

## Topology

This file is automatically changed when entries are made to the topology. It is possible to edit it manually, but this is not recommended.

```
apigateway/groups/topology.json
```

## KPS data

Key Property Store data generated when the file-based KPS is used. This is data, as opposed to configuration.

```
apigateway/groups/group-id/instance-id/conf/kps/file
```

## API Firewall (WAF)

API Gateway administrators can configure the embedded ModSecurity engine to protect API Gateway HTTP traffic against threats and monitor reported exceptions.

```
/apigateway/system/conf/threat-protection/apigw-manager/modsecurity.conf
/apigateway/system/conf/threat-protection/default/modsecurity.conf
/apigateway/groups/group-id/instance-id/conf/waf.xml
```

## Traffic Monitor data

Data configuration for the traffic monitor. This is data, as opposed to configuration.

```
apigateway/groups/group-id/instance-id/conf/opsdb.d
```
