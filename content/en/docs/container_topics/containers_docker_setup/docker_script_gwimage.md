---
title: Step 7 Create an API Gateway Docker image
linkTitle: Step 7 Create an API Gateway Docker image
date: 2019-09-18
description: To create an API Gateway Docker image, use the `build_gw_image.py` script.
---

## Build API Gateway image script options

You must specify the following as options when using the `build_gw_image.py` script:

* Domain certificate, private key, and password.
* API Gateway license. Your license must also include any optional licensed features that you are using (for example, API Manager, FIPS mode).

This script also supports additional options when generating an API Gateway image. For example, you can:

* Specify a group ID for the API Gateway group. All containers started from this image are part of this API Gateway group.
* Build an image from existing API Gateway configuration by specifying an existing `fed` file (or existing `pol` and `env` files). If OAuth or API Manager are enabled in the `fed`, they are enabled the API Gateway Docker image.
* Specify a merge directory to add to the API Gateway Docker image. This merge directory can include custom configuration, JAR files, and so on.
* Enable FIPS mode for the API Gateway Docker image.

For the latest script usage and options, run the script with no options, or with the `-h` option.

``` {space="preserve"}
$ cd emt_containers-<version>
$ ./build_gw_image.py -h
```

The following examples show how you can use the script to build API Gateway Docker images:

* [Create an API Gateway image using defaults](#Create4)
* [Create an API Manager image using defaults](#Create4apimgr)
* [Create an API Gateway image using domain certificate](#Create5)
* [Create an API Gateway image using existing FED and customized configuration](#Create6)
* [Create a FIPS-enabled API Gateway image](#Create8)
* [Create an API Manager or OAuth enabled API Gateway image](#createapimgroauth)

## Create an API Gateway image using defaults {#Create4}

The following example creates an API Gateway Docker image using default certificates and a default factory `fed`.

Usage guidelines

* Do not use default options on production systems. The `--default-cert` option is provided only as a convenience for development environments.

Example command

``` {space="preserve"}
$ cd emt_containers-<version>
$ ./build_gw_image.py 
--license=/tmp/api_gw_license_complete.lic 
--default-cert 
--factory-fed
```

This example creates an API Gateway Docker image named `api-gateway-defaultgroup` with a tag of `latest`. This image has the following characteristics:

* Uses a default certificate and key (generated from running `./gen_domain_cert.py --default-cert`)
* Uses a default factory `fed`

## Create an API Manager image using defaults {#Create4apimgr}

The following example creates an API Manager Docker image using default certificates and a default factory `fed` with samples.

Usage guidelines

* Do not use default options on production systems. The `--default-cert` and `--api-manager` options are provided only as a convenience for development environments.

<!-- -->

* When using the `--api-manager` default option:
  * You must have an Apache Cassandra server running at the host name specified by `${environment.CASS_HOST}`.
  * You must have a metrics database running at `${environment.METRICS_DB_URL}`, with credentials of `${environment.METRICS_DB_USERNAME}` and `${environment.METRICS_DB_PASS}`.
  * You can log in to the API Manager web console using a default user name of `apiadmin` and the default password.

<!-- -->

* You must have a valid API Manager license file to create an API Manager image.

<!-- -->

* Use the `--merge-dir` option to specify the `apigateway` directory containing the JDBC driver JAR file for the metrics database in the `ext/lib` directory:
  * The merge directory must be called `apigateway` and must have the same directory structure as in an API Gateway installation.
  * Copy the JAR file to a new directory `/tmp/apigateway/ext/lib/` and specify `/tmp/apigateway` to the `--merge-dir` option.

Example command

``` {space="preserve"}
$ cd emt_containers-<version>
$ ./build_gw_image.py
--license=/tmp/api_gw_api_mgr.lic
--merge-dir /tmp/apigateway
--default-cert --api-manager
```

This example creates an API Gateway Docker image named `api-gateway-defaultgroup` with a tag of `latest`. This image has the following characteristics:

* Uses a default certificate and key (generated from running `./gen_domain_cert.py --default-cert`)
* Uses a default factory `fed` with samples and with API Manager configured
* Uses a specified merge directory (containing the JDBC driver JAR file for the metrics database) that is merged into the API Gateway image

## Create an API Gateway image using domain certificate {#Create5}

The following example creates an API Gateway Docker image using a specified domain certificate and a default factory `fed`.

Example command

``` {space="preserve"}
$ cd emt_containers-<version>
$ ./build_gw_image.py
--license=/tmp/api_gw_license_complete.lic
--domain-cert=certs/mydomain/mydomain-cert.pem
--domain-key=certs/mydomain/mydomain-key.pem
--domain-key-pass-file=/tmp/pass.txt
--factory-fed
--parent-image=my-gw-base:1.0 --out-image=my-api-gateway:1.0
```

This example creates an API Gateway Docker image named `my-api-gateway` with a tag of `1.0`. This image has the following characteristics:

* Based on the `my-gw-base:1.0` image
* Uses a specified certificate and key
* Uses a default factory `fed`

## Create an API Gateway image using existing fed and customized configuration {#Create6}

The following example creates an API Gateway Docker image using an existing API Gateway deployment package (`fed` file) and customized configuration from an existing API Gateway installation.

Usage guidelines

* Ensure that your `fed` contains the following:
  * API Gateway version 7.8 configuration.
  * You can upgrade existing projects (from version 7.5.1 or later) using `projupgrade`, see
        [Upgrade an API Gateway project](/csh?context=461&product=prod-api-gateway-77)
        in the
        [API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
        .
  * You can also upgrade existing `fed` files using Policy Studio or `upgradeconfig`, see the
        [API Gateway Upgrade Guide](/bundle/APIGateway_77_UpgradeGuide_allOS_en_HTML5)
        .
  * Only IP addresses that are accessible at runtime. For example, the `fed` cannot contain IP addresses of container-based Admin Node Managers and API Gateways, as IP addresses are usually dynamically assigned in a Docker network.

<!-- -->

* Use the `--merge-dir` option to add more files and folders to the `apigateway` directory inside the image:
  * The merge directory must be called `apigateway` and must have the same directory structure as in an API Gateway installation.
  * For example, to add an optional custom `envSettings.props` file to your image, copy `envSettings.props` to a new directory named `/tmp/apigateway/groups/emt-group/emt-service/conf/`, and specify `/tmp/apigateway` to the `--merge-dir` option.
  * To add custom JAR files to your image, copy the JAR files to a new directory named `/tmp/apigateway/ext/lib/`, and specify `/tmp/apigateway` to the `--merge-dir` option.

    {{< alert title="Note" color="primary" >}}`envSettings.props` specifies settings such as the port the Admin Node Manager listens on (default of `8090`), and the session timeout for API Gateway Manager (default of 12 hours). `envSettings.props` must contain only IP addresses and host names that are accessible at runtime. It cannot contain IP addresses of container-based Admin Node Managers and API Gateways because these are usually dynamically assigned in a Docker network.{{< /alert >}}

Example command

``` {space="preserve"}
$ cd emt_containers-<version>
$ ./build_gw_image.py
--license=/tmp/api_gw.lic
--domain-cert=certs/mydomain/mydomain-cert.pem
--domain-key=certs/mydomain/mydomain-key.pem
--domain-key-pass-file=/tmp/pass.txt
--parent-image=my-gw-base:1.0
--fed=my-group-fed.fed --fed-pass-file=/tmp/my-group-fedpass.txt
--group-id=my-group
--merge-dir=/tmp/apigateway
```

This example creates an API Gateway Docker image named `api-gateway-my-group` with a tag of `latest`. This image has the following characteristics:

* Based on the `my-gw-base:1.0` image.
* Uses a specified certificate and key.
* Uses a specified `fed` that contains API Gateway 7.8 configuration.
* Belongs to the API Gateway group `my-group`. All containers started from this image belong to this group.
* Uses a specified merge directory that is merged into the API Gateway image.

## Create a FIPS-enabled API Gateway image {#Create8}

The following example creates an API Gateway Docker image that runs in FIPS-compliant mode.

Usage guidelines

* You must have a valid FIPS-compliant mode API Gateway license file to create an image that can run in FIPS-compliant mode.

Example command

``` {space="preserve"}
$ cd emt_containers-<version>
$ ./build_gw_image.py
--license=/tmp/api_gw_fips.lic
--domain-cert=certs/mydomain/mydomain-cert.pem
--domain-key=certs/mydomain/mydomain-key.pem
--domain-key-pass-file=/tmp/pass.txt
--parent-image=my-gw-base:1.0 --out-image=my-fips-api-gateway:1.0
--fips
```

This example creates an API Gateway Docker image named `my-fips-api-gateway` with a tag of `1.0`. This image has the following characteristics:

* Based on the `my-gw-base:1.0` image.
* Uses a specified certificate and key.
* Runs in FIPS-compliant mode.

## Create an API Manager or OAuth enabled API Gateway image {#createapimgroauth}

The following example creates an API Manager enabled API Gateway Docker image using a deployment package exported from Policy Studio that has API Manager configured.

You can create an OAuth-enabled API Gateway Docker image in the same way (using a deployment package exported from Policy Studio that has OAuth configured).

Usage guidelines

To create an API Manager enabled image:

* You must have a valid API Manager license file to create an API Manager image.

<!-- -->

* Use the `--merge-dir` option to specify the `apigateway` directory containing the JDBC driver JAR file for the metrics database in the `ext/lib` directory:
  * The merge directory must be called `apigateway` and must have the same directory structure as in an API Gateway installation.
  * Copy the JAR file to a new directory `/tmp/apigateway/ext/lib/` and specify `/tmp/apigateway` to the `--merge-dir` option.

<!-- -->

* Before running the `build_gw_image.py`
    script you must first create a project in Policy Studio, configure API Manager in that project, and export the configuration from Policy Studio as a `fed` file (or `pol` and `env` files). For more information, see [Step 1 – Configure API Manager in Policy Studio](/docs/container_topics/container_apimgr_oauth#apimgrps).
* You must specify the configuration exported from Policy Studio to the `build_gw_image.py`
    script when building the API Gateway Docker image.

To create an OAuth-enabled image:

* Before running the `build_gw_image.py`
    script you must first create a project in Policy Studio, configure OAuth in that project, and export the configuration from Policy Studio as a `fed` file (or `pol` and `env` files). For more information, see see [Step 1 – Configure API Manager in Policy Studio](/docs/container_topics/container_apimgr_oauth#apimgrps).
* You must specify the configuration exported from Policy Studio to the `build_gw_image.py`
    script when building the API Gateway Docker image.

Example command

``` {space="preserve"}
$ cd emt_containers-<version>
$ ./build_gw_image.py
--license=/tmp/api_gw_api_mgr.lic
--domain-cert=certs/mydomain/mydomain-cert.pem
--domain-key=certs/mydomain/mydomain-key.pem
--domain-key-pass-file=/tmp/pass.txt
--parent-image=my-gw-base:1.0
--fed=api-mgr-group-fed.fed --fed-pass-file=/tmp/api-mgr-group-fedpass.txt
--group-id=api-mgr-group
--merge-dir=/tmp/apigateway
```

This example creates an API Gateway Docker image named `api-gateway-api-mgr-group` with a tag of `latest`. This image has the following characteristics:

* Based on the `my-gw-base:1.0` image.
* Uses a specified certificate and key.
* Uses a specified `fed` that contains API Manager configuration that was exported from Policy Studio.
* Belongs to the API Gateway group `api-mgr-group`. All containers started from this image belong to this group.
* Uses a specified merge directory (containing the JDBC driver JAR file for the metrics database) that is merged into the API Gateway image
