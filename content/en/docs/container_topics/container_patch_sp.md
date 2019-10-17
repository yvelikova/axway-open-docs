---
title: Apply a patch or service pack
linkTitle: Apply a patch or service pack
weight: 12
date: 2019-09-18
description: Apply a patch or a service pack (SP) to an API Gateway or API Manager container deployment.
---

In a container deployment, a patch or service pack is rolled out using an orchestration tool (for example, Kubernetes or OpenShift) after new Docker images containing the patch or service pack are pushed to the Docker registry. This enables you to perform a rolling zero downtime update of services.

## Install a patch

To install a patch, follow these steps:

1. Download the patch from Axway Support at [https://support.axway.com](https://support.axway.com/).
2. Create a merge directory to contain the patch files and any custom configuration (for example, `/tmp/apigateway`). The merge directory must be called `apigateway` and must have the same directory structure as the `apigateway` directory of an API Gateway installation.
3. Unzip and extract the patch into the merge directory.
4. Add any custom configuration to the merge directory. For example, to add a custom `envSettings.props` file to your image, copy `envSettings.props` to `/tmp/apigateway/conf/`.
5. Create new Admin Node Manager and API Gateway images using the `--merge-dir` option to specify the merge directory containing the patch files and custom configuration.

    ```
    cd emt_containers-<version>
    ./build_anm_image.py --domain-cert=certs/mydomain/mydomain-cert.pem --domain-key=certs/mydomain/mydomain-key.pem --domain-key-pass-file=/tmp/pass.txt --anm-username=gwadmin --anm-pass-file=/tmp/gwadminpass.txt --merge-dir=/tmp/apigateway
    ./build_gw_image.py --license=/tmp/api_gw.lic --domain-cert=certs/mydomain/mydomain-cert.pem --domain-key=certs/mydomain/mydomain-key.pem --domain-key-pass-file=/tmp/pass.txt --merge-dir=/tmp/apigateway
    ```

## Install a service pack

To install a service pack, follow these steps:

1. Download the latest API Gateway 7.8 Linux installer (which includes the service pack) from Axway Support at [https://support.axway.com](https://support.axway.com/).
2. Create a new base image using the `--installer` option to build the image from the downloaded API Gateway installer.

    ```
    cd emt_containers-<version>
    ./build_base_image.py --installer=apigw-new-installer.run --os=centos7
    ```

3. Create a merge directory to contain any custom configuration (for example, `/tmp/apigateway`). The merge directory must be called `apigateway` and must have the same directory structure as the `apigateway` directory of an API Gateway installation.
4. Add any custom configuration to the merge directory. For example, to add a custom `envSettings.props` file to your image, copy `envSettings.props` to `/tmp/apigateway/conf/`.
5. Create new Admin Node Manager and API Gateway images using the `--merge-dir` option to specify the merge directory containing the custom configuration.

    ```
    cd emt_containers-<version>
    ./build_anm_image.py --domain-cert=certs/mydomain/mydomain-cert.pem --domain-key=certs/mydomain/mydomain-key.pem --domain-key-pass-file=/tmp/pass.txt --anm-username=gwadmin --anm-pass-file=/tmp/gwadminpass.txt --merge-dir=/tmp/apigateway
    ./build_gw_image.py --license=/tmp/api_gw.lic --domain-cert=certs/mydomain/mydomain-cert.pem --domain-key=certs/mydomain/ mydomain-key.pem --domain-key-pass-file=/tmp/pass.txt --merge-dir=/tmp/apigateway
    ```
