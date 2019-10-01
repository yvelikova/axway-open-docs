---
title: Step 5 - Create an Admin Node Manager Docker image
linkTitle: Step 5 Create an Admin Node Manager Docker image
date: 2019-09-18
description: 
---
Use the `build_anm_image.py` script to create an Admin Node Manager Docker image.

To create an Admin Node Manager Docker image, use the `build_anm_image.py` script. This script builds an Admin Node Manager Docker image using the base image you created in [Step 4 – Create base Docker image](/docs/container_topics/containers_docker_setup/docker_script_baseimage).

## Admin Node Manager image script options

You must specify the following as options when using the `build_anm_image.py` script:

* Domain certificate, private key, and password.
* User name and password for the administrator user. You can use this user name and password to log in to the API Gateway Manager web console.

This script also supports additional options when generating an Admin Node Manager image. For example:

* Enable API metrics processing in the Admin Node Manager Docker image. This enables you to monitor APIs and applications in API Manager.
* Reuse the same configuration in multiple domains by specifying a `.fed` file containing Admin Node Manager configuration to include in the Admin Node Manager Docker image.
* Specify a merge directory to add to the Admin Node Manager Docker image. This directory can include custom configuration, JAR files, and so on.
* Enable FIPS mode for the Admin Node Manager Docker image.

For the latest script usage and options, run the script with no options, or with the `-h` option.

```
$ cd emt_containers-<version>
$ ./build_anm_image.py -h
```

## Create a metrics-enabled Admin Node Manager image {#Create9}

The following example creates an Admin Node Manager Docker image with a specified domain certificate that runs with metrics processing enabled. The Admin Node Manager container processes event logs from API Gateway containers and writes them to a specified metrics database. This is the recommended option and is suitable for a production environment.

* Use the `--merge-dir` option to specify the `apigateway` directory containing the JDBC driver JAR file for the metrics database in the `ext/lib` directory:
  * The merge directory must be called `apigateway` and must have the same directory structure as in an API Gateway installation.
  * Copy the JAR file to a new directory `/tmp/apigateway/ext/lib/` and specify `/tmp/apigateway` to the `--merge-dir` option.
* When running the Admin Node Manager and API Gateway Docker containers, use the `docker run -v` option to mount a volume for the API Gateway events directory:
  * Run the API Gateway container with a volume mounted for the events directory (for example, `-v /tmp/events:/opt/Axway/apigateway/events` writes API Gateway event logs to `/tmp/events` on the host machine).
  * Run the Admin Node Manager container with the same volume mounted (for example, `-v /tmp/events:/opt/Axway/apigateway/events` enables the Admin Node Manager to read API Gateway event logs from `/tmp/events` on the host machine). For details, see [Start a metrics-enabled Admin Node Manager container](/docs/container_topics/containers_docker_setup/docker_script_anmstart#Start).

* Use the metrics options to specify the URL, user name, and password for your metrics database. If not specified, the metrics options have the following default values:
  * `--metrics-db-url`: Defaults to `${environment.METRICS_DB_URL}`
  * `--metrics-db-username`: Defaults to `${environment.METRICS_DB_USERNAME}`
  * `--metrics-db-pass-file`: Default value for password if password file not specified is `${environment.METRICS_DB_PASS}`

{{< alert title="Note" color="primary" >}}When running in a multi-node system, you must mount a shared network volume that is accessible from the Admin Node Manager and from all API Gateways.{{< /alert >}}

```
$ cd emt_containers-<version>
$ ./build_anm_image.py
--domain-cert=certs/mydomain/mydomain-cert.pem
--domain-key=certs/mydomain/mydomain-key.pem
--domain-key-pass-file=/tmp/pass.txt
--anm-username=gwadmin --anm-pass-file=/tmp/gwadminpass.txt
--parent-image=my-gw-base:1.0 --out-image=my-metrics-admin-node-manager:1.0
--metrics --merge-dir=/tmp/apigateway
```

This example creates an Admin Node Manager Docker image named `my-metrics-admin-node-manager` with a tag of `1.0`. This image has the following characteristics:

* Based on the `my-gw-base:1.0` image
* Uses a specified domain certificate, key, and password
* Uses a specified user name of `gwadmin` and a specified password for the administrator user
* Runs with metrics processing enabled
* Uses a specified merge directory (containing the JDBC driver JAR file for the metrics database) that is merged into the API Gateway image

## Other options for creating Admin Node Manager Docker images  

The following are additional examples of using the `build_anm_image.py`
script to build Admin Node Manager Docker images:

* [Create an Admin Node Manager image using existing fed and customized configuration](#create-an-admin-node-manager-image-using-existing-fed-and-customized-configuration)
* [Create a FIPS-enabled Admin Node Manager image](#create-a-fips-enabled-admin-node-manager-image)
* [Create an Admin Node Manager image for a development environment](create-an-admin-node-manager-image-for-a-development-environment)

### Create an Admin Node Manager image using existing fed and customized configuration

The following example creates an Admin Node Manager Docker image using an existing Admin Node Manager deployment package (`.fed` file) and customized configuration from an existing API Gateway installation.

* Ensure that your `.fed` contains the following:
  * Admin Node Manager configuration. You can open the `.fed` in Policy Studio and verify that it is identified as a Node Manager configuration in the navigation pane.
  * Only IP addresses that are accessible at runtime. For example, the `.fed` cannot contain IP addresses of container-based Admin Node Managers and API Gateways, because IP addresses are usually dynamically assigned in a Docker network.
* Use the `--merge-dir` option to add more files and folders to the `apigateway` directory inside the image:
  * The merge directory must be called `apigateway` and must have the same directory structure as in an API Gateway installation.
  * For example, to add an optional custom `envSettings.props` file to your image, copy `envSettings.props` to a new directory named `/tmp/apigateway/conf/`, and specify `/tmp/apigateway` to the `--merge-dir` option.
  * To add custom JAR files to your image, copy the JAR files to a new directory named `/tmp/apigateway/ext/lib/`, and specify `/tmp/apigateway` to the `--merge-dir` option.

    {{< alert title="Note" color="primary" >}}`envSettings.props` specifies settings such as the port the Admin Node Manager listens on (default of `8090`), and the session timeout for API Gateway Manager (default of 12 hours). `envSettings.props` must contain only IP addresses and host names that are accessible at runtime. It cannot contain IP addresses of container-based Admin Node Managers and API Gateways because these are usually dynamically assigned in a Docker network.{{< /alert >}}

```
$ cd emt_containers-<version>
$ ./build_anm_image.py
--domain-cert=certs/mydomain/mydomain-cert.pem
--domain-key=certs/mydomain/mydomain-key.pem
--domain-key-pass-file=/tmp/pass.txt
--anm-username=gwadmin --anm-pass-file=/tmp/gwadminpass.txt
--parent-image=my-gw-base:1.0 --out-image=my-fed-admin-node-manager:1.0
--fed=my-anm-fed.fed --fed-pass-file=/tmp/anmfedpass.txt
--merge-dir=/tmp/apigateway
```

This example creates an Admin Node Manager Docker image named `my-fed-admin-node-manager` with a tag of `1.0`. This image has the following characteristics:

* Based on the `my-gw-base:1.0` image
* Uses a specified certificate and key
* Uses a specified user name of `gwadmin` and a specified password for the administrator user
* Uses a specified `.fed` that contains Admin Node Manager configuration
* Uses a specified merge directory that is merged into the Admin Node Manager image

### Create a FIPS-enabled Admin Node Manager image

The following example creates an Admin Node Manager Docker image that runs in FIPS-compliant mode.

* You must have a valid FIPS-compliant mode API Gateway license file to create an image that can run in FIPS-compliant mode.

```
$ cd emt_containers-<version>
$ ./build_anm_image.py
--domain-cert=certs/mydomain/mydomain-cert.pem
--domain-key=certs/mydomain/mydomain-key.pem
--domain-key-pass-file=/tmp/pass.txt
--anm-username=gwadmin --anm-pass-file=/tmp/gwadminpass.txt
--parent-image=my-gw-base:1.0 --out-image=my-fips-admin-node-manager:1.0
--fips --license=/tmp/api_gw_fips.lic
```

This example creates an Admin Node Manager Docker image named `my-fips-admin-node-manager` with a tag of `1.0`. This image has the following characteristics:

* Based on the `my-gw-base:1.0` image
* Uses a specified domain certificate, key, and password
* Uses a specified user name of `gwadmin` and a specified password for the administrator user
* Runs in FIPS-compliant mode

### Create an Admin Node Manager image for a development environment

The following example creates a simple Admin Node Manager Docker image suitable for a development environment only using default certificates and a default administrator user.

* Do not use default options on production systems. The `--default-cert` and `--default-user` options are provided only as a convenience for development environments.

```
$ cd emt_containers-<version>
$ ./build_anm_image.py
--default-cert --default-user
```

This example creates an Admin Node Manager Docker image named `admin-node-manager` with a tag of `latest`. This image has the following characteristics:

* Based on the `apigw-base:latest` image
* Uses a default domain certificate and key (generated from running `./gen_domain_cert.py --default-cert`)
* Uses a default user name of `admin` and a default password for the administrator user
