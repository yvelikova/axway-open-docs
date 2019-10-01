---
title: Upgrade a container deployment
linkTitle: Upgrade a container deployment
weight: 11
date: 2019-09-18
description: This page describes how to upgrade your API Gateway or API Manager container deployment from 7.6.2 or later to 7.8. In a container deployment, an upgrade is rolled out using an orchestration tool (for example, Kubernetes or OpenShift) after new Docker images containing the upgrade are pushed to the Docker registry. This enables you to perform a rolling zero downtime update of services.
---

## Upgrade to 7.8

To perform an upgrade, follow these steps:

* Download the API Gateway 7.8 Linux installer from Axway Support at [https://support.axway.com](https://support.axway.com/).
* Create a new base image using the `--installer` option to build the image from the downloaded API Gateway 7.8 installer.  

```
    $ cd emt_containers-<version>
    $ ./build_base_image.py
    --installer=apigw-770-installer.run
    --os=centos7
```

* Upgrade your existing API Gateway `fed` to version 7.8. In Policy Studio 7.8, create a new project from the existing configuration to trigger an automatic upgrade.
* Create a merge directory to contain any custom configuration (for example, `/tmp/apigateway`). The merge directory must be called `apigateway` and must have the same directory structure as the `apigateway` directory of an API Gateway installation.
* Add any custom configuration to the merge directory. For example, to add a custom `envSettings.props` file to your image, copy `envSettings.props` to `/tmp/apigateway/conf/`.
* Create new Admin Node Manager and API Gateway images using the `--fed` option to build the API Gateway image from the upgraded `fed` and the `--merge-dir` option to specify the merge directory containing the custom configuration. For example:

```
    $ cd emt_containers-<version>

    $ ./build_anm_image.py
    --domain-cert=certs/mydomain/mydomain-cert.pem
    --domain-key=certs/mydomain/mydomain-key.pem
    --domain-key-pass-file=/tmp/pass.txt
    --anm-username=gwadmin --anm-pass-file=/tmp/gwadminpass.txt
    --merge-dir=/tmp/apigateway

    $ ./build_gw_image.py
    --license=/tmp/api_gw.lic
    --domain-cert=certs/mydomain/mydomain-cert.pem
    --domain-key=certs/mydomain/mydomain-key.pem
    --domain-key-pass-file=/tmp/pass.txt
    --fed=my-upgraded-fed.fed --fed-pass-file=/tmp/my-group-fedpass.txt
    --merge-dir=/tmp/apigateway
```

Related topics

[Step 4 – Create base Docker image](/docs/container_topics/containers_docker_setup/docker_script_baseimage)

[Step 5 – Create an Admin Node Manager Docker image](/docs/container_topics/containers_docker_setup/docker_script_anmimage)

[Step 7 – Create an API Gateway Docker image](/docs/container_topics/containers_docker_setup/docker_script_gwimage)

[Upgrade log analysis](/csh?context=635&product=prod-api-gateway-77)
