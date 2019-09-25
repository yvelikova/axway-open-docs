---
title: Before you start
linkTitle: Before you start
date: 2019-09-18
description: Your system must meet the following prerequisites before you can run the scripts to build and deploy API Gateway in Docker containers.
---

## Set up your Docker environment

You must have the following installed on your local system:

* Docker (see [Docker requirements](#Docker) for supported versions)
* Python version 2.7.x
* OpenSSL version 1.1 or later

### Docker requirements {#Docker}

The following versions of Docker are supported:

* Docker CE version 18.06 or later on CentOS 7

{{< alert title="Note" color="primary" >}}Axway supports Red Hat Enterprise Linux 7 and CentOS Linux version 7 as the base image for Docker containers. Axway supports deployment on any host operating system, cloud provider, or container orchestration system supported by your Docker version. {{< /alert >}}

For more details on Docker system requirements, see the [Docker documentation](https://docs.docker.com/engine/installation/).

### Set up API Gateway Docker scripts

You must download the following from Axway Support at [https://support.axway.com](https://support.axway.com/) 

* API Gateway Linux installer

>

* Docker scripts package

### API Gateway licenses

You must have specific API Gateway licenses to run the following:

* API Gateway container
* Admin Node Manager or API Gateway container in Federal Information Processing Standard (FIPS) mode
* API Manager-enabled API Gateway container
* API Gateway Analytics container

### Unzip and install the Docker scripts

Unzip the Docker scripts package that you downloaded from Axway Support at [https://support.axway.com](https://support.axway.com/)

```
$ unzip APIGateway_7.8-<n>_ScriptsPackageDocker_linux-x86-64_BN<bn>.zip
```

The unzipped package includes the following:

* Python scripts (`*.py`)
* Docker files
* Quickstart demo

The Quickstart demo `quickstart.sh` script enables you to quickly deploy a demo of API Gateway in Docker containers. A `readme.md` is also provided, that describes the Quickstart demo and includes a topology diagram.
For the Quickstart help, run:

``` 
$ ./quickstart.sh -h
```

{{< alert title="Tip" color="primary" >}}The `quickstart.sh` script is intended to simplify deployment of API Gateway in containers, especially for development environments and evaluation use. However, you can also use it as a starting point for customization and modify it to suit your own environment. {{< /alert >}}
