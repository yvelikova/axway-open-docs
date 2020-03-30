{
"title": "API Gateway and API Manager 7.7 Mar20 Release Notes",
  "linkTitle": "API Gateway and API Manager 7.7 Mar20",
  "no_list": "true",
  "weight": "20",
  "date": "2020-03-11",
  "description": "Learn about the new features and enhancements in this release of API Gateway and API Manager."
}
## Summary

API Gateway is available as a software installation or a virtualized deployment in Docker containers. API Manager is a licensed product running on top of API Gateway, and has the same deployment options as API Gateway.

The software installation is available on Linux. For more details on supported platforms for software installation, see [System requirements](/docs/apim_installation/apigtw_install/system_requirements/).

Docker deployment is supported on Linux. For a summary of the system requirements for a Docker deployment, see [Set up Docker environment](/docs/apim_installation/apigw_containers/docker_scripts_prereqs/).

## New features and enhancements

The following new features and enhancements are available in this release.

<!-- Add the new features here -->

## Important changes

It is important, especially when upgrading from an earlier version, to be aware of the following changes in the behavior or operation of the product in this release.

<!-- Use this section to describe any changes in the behavior of the product (as a result of features or fixes), for example, new Java system properties in the jvm.xml file. This section could also be used for any important information that doesn't fit elsewhere. -->

### OpenJDK JRE

API Gateway and API Manager 7.7 and later support OpenJDK JRE, and this update includes Zulu OpenJDK 1.8 JRE instead of Oracle JRE 1.8.

### OpenSSL and FIPS support

In this update OpenSSL has been upgraded to OpenSSL 1.1.1, as OpenSSL 1.0.2 is EOL.

OpenSSL 1.1.1 does not support FIPS, and running API Gateway in FIPS mode is not supported in this update. OpenSSL 3.0 (when available) will support FIPS, and FIPS support will be available again in a future update.

References to FIPS in the documentation will not be removed, but this does not mean that FIPS is still supported and the references should be ignored.

## Deprecated features

<!-- Add features that are deprecated here -->

As part of our software development life cycle we constantly review our API Management offering.

The following capabilities have been deprecated.

### Antivirus scanners

API Gateway already supports the industry standard Internet Content Adaption Protocol (ICAP). From the November 2020 release the following embedded antivirus scanners will be removed:

* McAfee
* Sophos
* Clam AV

Content scanning is still supported using the ICAP filter, which provides out-of-the-box integration with ICAP-capable servers provided by Symantec, McAfee, OPSWAT and others, promoting ease of deployment and operational control.

## Removed features

<!-- Add features that are removed here -->

To stay current and align our offerings with customer demand and best practices, Axway might discontinue support for some capabilities. As part of this review, the following capabilities have been removed.

## Fixed issues

<!-- Fixed issues are maintained in another topic -->

See [Fixed issues](/docs/apim_relnotes/20200330_apimgr_relnotes/fixed_issues/) for a complete list.

## Known issues

The following are known issues for this release.



| Internal ID | Description                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RDAPI-11143 | Discrepancy with API retirements dates                                                                                                                             |
| RDAPI-13653 | API Portal incorrect Content-Type for SOAP + empty model schema                                                                                                    |
| RDAPI-14100 | update tuning recomends for 'High availability with local storage' config                                                                                          |
| RDAPI-15607 | Cant access NodeManager after submitting external CA signed certs                                                                                                  |
| RDAPI-15669 | Stored XSS in the application's Oauth Redirect URL. Encode OAuth Redirect URLs on output                                                                           |
| RDAPI-15760 | Request headers reflected as response headers                                                                                                                      |
| RDAPI-15981 | Scopes fields for API Key remain visible even if Application Scopes are disabled                                                                                   |
| RDAPI-16486 | Changes in the mapper always require a reload in the Execute Data Maps filter and once reloaded then providing values for the required parameters must be repeated |
| RDAPI-16576 | Duplicate headers returned when calling API Gateway Rest API                                                                                                       |
| RDAPI-17395 | APIGW Analytics - no data in DB during DB unavailability                                                                                                           |
| RDAPI-17431 | Deployment starting twice                                                                                                                                          |
| RDAPI-18082 | Regression: Policy Shortcut filters no longer automatically renamed in 7.7                                                                                         |
| RDAPI-18123 | Forgot password should force password change like first time login                                                                                                 |
| RDAPI-18128 | Trusted Certificates in API Manager configuration-instance restart required if changed                                                                             |
| RDAPI-18198 | CORS preflight fails for WSDL based API Manager APIs, thus Try-It fails                                                                                            |
| RDAPI-18294 | KPS REST API documentation missing info                                                                                                                            |
| RDAPI-18376 | "you do not have permission to access this resource" when a user create an application                                                                             |
| RDAPI-18379 | Spurious "forbidden" error in Manager UI                                                                                                                           |
| RDAPI-18469 | API Manager response contains sensitive request headers when calling a non existing path                                                                           |
| RDAPI-18519 | Performance issue with API Manager /applications API in SSO                                                                                                        |
| RDAPI-18649 | updated SSO role does not display properly in dev users view                                                                                                       |
| RDAPI-18674 | Insufficient data validation when importing an Application                                                                                                         |
| RDAPI-18776 | regex for custom property in API Manager                                                                                                                           |
| RDAPI-18777 | Overriding the quota for an application and then removing the setting causes incorrect behaviour                                                                   |
| RDAPI-18823 | 2 way SSL connection to the backend doesn't work when upgraded to 7.7                                                                                              |
| RDAPI-18876 | Extremely slow Swagger virtualization when Cassandra is under load                                                                                                 |
| RDAPI-19005 | Spelling mistakes or inconsistencies in Manager UI                                                                                                                 |
| RDAPI-19006 | Delete API "not found" after changing Application Org                                                                                                              |
| RDAPI-19028 | Sensitive headers not scrubbed from 405 responses; regression from 7.5.3 SP10                                                                                      |
| RDAPI-19119 | Set attribute in opsdb for hand made transaction                                                                                                                   |
| RDAPI-19126 | API Manager echoes request and headers on "404 Not found"                                                                                                          |
| RDAPI-19132 | Issue with selection of Retirement date when deprecating API                                                                                                       |
| RDAPI-19142 | "Skip authorization" option in Authorization Request filter causes requested scopes to be ignored                                                                  |
| RDAPI-19150 | "Try it" in Manager only shows first 10 API keys                                                                                                                   |
| RDAPI-19190 | update-apimanager fails for customer 7.7 to 7.7SP2                                                                                                                 |
| RDAPI-19220 | kpsadmin - delete row doesn't delete row                                                                                                                           |
| RDAPI-19240 | Users in "pending approval" state are visible in the Sharing tab                                                                                                   |
| RDAPI-19254 | Regular crashes SIGSEGV / SEGV_MAPERR                                                                                                                              |
| RDAPI-19258 | OAS 3.0: Default parameter serialization data seems redundant and bloats API exports                                                                               |
| RDAPI-19292 | When an APIM admin user's login name is changed, the user is directed to a blank page                                                                              |
| RDAPI-19295 | Enabled/disabled status of Oauth credentials in an application is lost when exported                                                                               |
| RDAPI-19332 | KPS caching seems to not use the table name as part of the cache-key, resulting in undesired behavior                                                              |
| RDAPI-19334 | Access to retired APIs is not removed from other organizations as expected                                                                                         |
| RDAPI-19418 | api.error.source not available in APIManager fault handler                                                                                                         |
| RDAPI-19433 | Line breaks in outbound parameter (type header) value not escaped                                                                                                  |
| RDAPI-19459 | "Jump to configuration" does nothing for certain environmentalized settings                                                                                        |
| RDAPI-19480 | RDAPI-17007 Not fixed for API-GW - Event file client wrong                                                                                                         |
| RDAPI-19490 | Modifying the email template $subject variable doesn´t work                                                                                                        |
| RDAPI-19491 | KPS Run Diagnostic Check is failing with error "HTTP 410 Gone"                                                                                                     |
| RDAPI-19525 | Bad obs-fold parsing when gateway receives an empty header                                                                                                         |
| RDAPI-19572 | Large numbers of Oauth authorizations (oauth_authorizations table) cause Manager to become unresponsive                                                            |
| RDAPI-19585 | Okta SSO not working with Microsoft Edge and Internet Explorer                                                                                                     |

## Update a classic (non-container) deployment

These instructions apply to API Gateway and API Manager classic deployments only. For container deployments, see [Update a container deployment](#update-a-container-deployment).

### Prerequisites

This update has the following prerequisites in addition to the [System requirements](/docs/apim_installation/apigtw_install/system_requirements/).

1. Shut down any Node Manager or API Gateway instances on your existing installation.
2. Back up your existing installation. For details on backing up, see [API Gateway backup and disaster recovery](/docs/apim_administration/apigtw_admin/manage_operations/#api-gateway-backup-and-disaster-recovery). Ensure that you back up any customized files. You should merge updated files instead of copying them back directly to avoid any regex matching issues. For example, the following directories might contain customized files:

   ```
   webapps/apiportal/vordel/apiportal
   webapps/emc/vordel/manager/app
   webapps/emc
   system/conf/apiportal/email
   system/conf
   samples/scripts/
   tools/filebeat-VERSION-PLATFORM
   ```
3. Remove old third-party libraries by deleting the following directories:

   ```
   INSTALL_DIR/apigateway/system/lib/modules
   INSTALL_DIR/analytics/system/lib/modules
   ```
4. Remove old JRE versions by deleting the following directories:

   ```
   INSTALL_DIR/apigateway/platform/jre
   ```
5. If you have an existing Apache Cassandra installation, ensure that you back up your data (Cassandra and `kpsadmin`), and that the `JAVA_HOME` variable is set correctly in `cassandra.in.sh` and `cassandra.in.bat`.
6. Remove the old Filebeat folder `/apigateway/tools/filebeat-5.2.0`. Check any customized files to see if they are compatible with the new version. See [Filebeat](#filebeat-v6-2-2) for more information.
7. On Linux, remove existing capabilities on product binaries (which might prevent overwriting files):

   ```
   setcap -r INSTALL_DIR/apigateway/platform/bin/vshell
   ```

### Installation

This section describes how to install the update on existing 7.7 installations of API Gateway or API Manager.

* If you have installed an existing version of API Manager, installing the API Gateway server update automatically also installs the updates and fixes for API Manager.
* If you have installed a licensed version of API Gateway or API Manager 7.7, you do not require a new license to install updates.

#### Install the API Gateway server update

To install the update on your existing API Gateway 7.7 server installation, perform the following steps:

1. Ensure that your existing API Gateway instance and Node Manager have been stopped.
2. Remove any previous patches from your `INSTALL_DIR/ext/lib` and `INSTALL_DIR/META-INF` directories (or the `ext/lib` directory in an API Gateway instance). These patches have already been included in this update. You do not need to copy patches from a previous version.
3. Verify the owners of API Gateway binaries before extracting the update.

   ```
   ls -l INSTALL_DIR/apigateway/posix/bin
   ```
4. Using the same user who owns the API Gateway binaries, unzip and extract API Gateway 7.7 server Update over the `apigateway` directory in your existing installation directory . For example:

   ```
   tar -xzvf APIGateway_7.7.YYYYMMDD_Core_linux-x86-64_BNnn.tar.gz -C /opt/Axway-7.7/apigateway/
   ```
5. Change to the `apigateway` directory in your installation.

   ```
   cd INSTALL_DIR/apigateway
   ```
6. Run the post-install script, and ensure that the correct permissions are set:

   ```
   apigw_sp_post_install.sh
   ```

#### Install the Policy Studio update

To install the update on your existing Policy Studio installation, perform the following steps:

1. Shut down Policy Studio.
2. Back up your existing `INSTALL_DIR/policystudio` directory.
3. Remove old JRE versions by deleting the following directories:

   ```
   INSTALL_DIR/policystudio/jre
   ```
4. Unzip and extract API Gateway 7.7 Policy Studio Update over the `policystudio` directory in your existing API Gateway 7.7 installation directory. For example:

   ```
   tar -xzvf APIGateway_7.7.YYYYMMDD_PolicyStudio_linux-x86-64_BNnn.tar.gz -C /opt/Axway-7.7/policystudio/
   ```
5. Start Policy Studio with `policystudio -clean`

#### Install the Configuration Studio update

To install the update on your existing Configuration Studio installation, perform the following steps:

1. Shut down Configuration Studio.
2. Back up your existing `INSTALL_DIR/configurationstudio` directory.
3. Remove old JRE versions by deleting the following directories:

   ```
   INSTALL_DIR/configurationstudio/jre
   ```
4. Unzip and extract API Gateway 7.7 Configuration Studio Update over the `configurationstudio` directory in your existing API Gateway 7.7 installation directory. For example:

   ```
   tar -xzvf APIGateway_7.7.YYYYMMDD_ConfigurationStudio_linux-x86-64_BNnn.tar.gz -C /opt/Axway-7.7/configurationstudio/
   ```
5. Start Configuration Studio with `configurationstudio  -clean`

#### Install the API Gateway Analytics update

To install the update on your existing API Gateway Analytics 7.7 installation, perform the following steps:

1. Ensure that your existing API Gateway Analytics instance and Node Manager have been stopped.
2. Verify the owners of API Gateway binaries before extracting the update.

   ```
   ls -l INSTALL_DIR/analytics/posix/bin
   ```
3. Using the same user who owns the API Gateway Analytics binaries, unzip and extract API Gateway 7.7 Analytics Update over the `analytics` directory in your existing API Gateway 7.7 installation directory. For example:

   ```
   tar -xzvf APIGateway_7.7.YYYYMMDD_Analytics_linux-x86-64_BNnn.tar.gz -C /opt/Axway-7.7/analytics/
   ```
4. Change to the `analytics` directory in your installation:

   ```
   cd INSTALL_DIR/analytics
   ```
5. Run the post-install script for API Gateway Analytics.

   ```
   apigw_analytics_sp_post_install.sh
   ```

You must also install an update for your existing API Gateway 7.7 server.

### After installation

The following steps apply after installing the update.

#### API Gateway

To allow an unprivileged user to run the API Gateway on a Linux system, perform the following steps:

1. Add the following line to the `INSTALL_DIR/system/conf/jvm.xml` file:

   ```
   <VMArg name="-Djava.library.path=$VDISTDIR/$DISTRIBUTION/jre/lib/amd64/server:$VDISTDIR/$DISTRIBUTION/jre/lib/amd64:$VDISTDIR/$DISTRIBUTION/lib/engines:$VDISTDIR/ext/$DISTRIBUTION/lib:$VDISTDIR/ext/lib:$VDISTDIR/$DISTRIBUTION/jre/lib:system/lib:$VDISTDIR/$DISTRIBUTION/lib"/>
   ```
2. Run the command `setcap 'cap_net_bind_service=+ep cap_sys_rawio=+ep' INSTALL_DIR/platform/bin/vshell` to allow the API Gateway to listen on privileged ports.

#### API Manager

When API Manager is installed, you must run the `update-apimanager` script after the API Gateway post-install script to ensure that all paths are up-to-date.

{{< alert title="Caution" color="warning" >}} Before executing the `update-apimanager` script:

* Apply the update to all API Gateways.
* Ensure that all Node Managers and API Gateway instances are running.

{{< /alert >}}

This script updates the active deployment in the API Manager group. After running the script, you must recreate the API Manager project (common project, containing Server Settings) from the deployment, so that you will not need to revert the changes the next time you perform a project deployment.

As an alternative to recreating the API Manager project, you can deploy only your common project to a development server and run the `update-apimanager` script against it, and then create a new common project from this API Gateway instance. Finally, you must deploy your updated policies to your API Manager group.

You can run this command once at the API Gateway group level, instead of on every API Gateway instance, for example:

```
/opt/Axway-7.7/apigateway/posix/bin/update-apimanager --username=admin --password=MY_PASSWORD --group=API_MGR_GROUP
```

If the API Gateway group is protected by a passphrase, you must append the command with `--passphrase=API_MGR_GROUP_PASSPHRASE`.

The following command shows an example of running the `update-apimanager` script when the Client Application Registry is installed:

```
/opt/Axway-7.7/apigateway/posix/bin/update-apimanager --username=admin --password=MY_PASSWORD --group=API_MGR_GROUP   --productname=clientappreg
```

If the API Gateway group is protected by a passphrase, you must append the command with `--passphrase=API_MGR_GROUP_PASSPHRASE`.

## Update a container deployment

If a `fed` file is provided as part of building the API Manager container, you must follow these steps to update the `fed` with the configuration changes:

1. Install the update on a installation of the API Gateway.
2. Run the following command:

   ```
   /opt/Axway-7.7/apigateway/posix/bin/update-apimanager --fed <path to old file>.fed --oa <path to update file>.fed
   ```

You do not need to run any API Manager instances.

The `fed` now contains the updates for the API Manager configuration and can be used to build containers.

## Documentation

You can find the latest information and up-to-date user guides at the Axway Documentation portal at <https://docs.axway.com>.

This section describes documentation enhancements and related documentation.

### Documentation enhancements

<!-- Add a summary of doc changes or enhancements here-->

The latest version of API Gateway, API Manager, and API Portal documentation has been migrated to Markdown format and is available in a [public GitHub repository](https://github.com/Axway/axway-open-docs) to prepare for future collaboration using an open source model. As part of this migration, the documentation has been restructured to help users navigate the content and find the information they are looking for more easily.

Documentation change history is now stored in GitHub. To see details of changes on any page, click the link in the last modified section at the bottom of the page.

### Related documentation

To find all available documents for this product version:

1. Go to <https://docs.axway.com/bundle>.
2. In the left pane Filters list, select your product or product version.

Customers with active support contracts need to log in to access restricted content.

The following reference documents are also available:

* [Supported Platforms](https://docs.axway.com/bundle/Axway_Products_SupportedPlatforms_allOS_en) - Lists the different operating systems, databases, browsers, and thick client platforms supported by each Axway product.
* [Interoperability Matrix](https://docs.axway.com/bundle/Axway_Products_InteroperabilityMatrix_allOS_en) - Provides product version and interoperability information for Axway products.

## Support services

The Axway Global Support team provides worldwide 24 x 7 support for customers with active support agreements.

Email [support@axway.com](mailto:support@axway.com) or visit Axway Support at <https://support.axway.com>.

See [Get help with API Gateway](/docs/apim_administration/apigtw_admin/trblshoot_get_help/) for the information that you should be prepared to provide when you contact Axway Support.