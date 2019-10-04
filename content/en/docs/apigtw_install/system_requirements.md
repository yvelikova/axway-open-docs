{
"title": "System requirements",
"linkTitle": "System requirements",
"weight":"4",
"date": "2019-10-02",
"description": "This page describes the supported platforms and other system requirements for Axway API Gateway, and specific requirements for API Gateway components."
}

{{< alert title="Note" color="primary" >}}Windows is supported only for a limited set of developer tools, see [Install developer tools on Windows](../../../InstallGuideTopics/install_dev_tools.htm). API Gateway and API Manager do not support Windows.{{< /alert >}}

For more details on API Gateway components, see the [API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5).

## Operating systems and hardware

This section describes the operating system requirements for API Gateway.

| Platform       | Supported versions                                        | Hardware prerequisites |
|----------------|-----------------------------------------------------------|------------------------|
| **Linux**      | - CentOS 6.x, 7.x<br>- Oracle Linux 6.x, 7.x<br>- Red Hat Enterprise Linux 6.x, 7.x<br>- SUSE Linux Enterprise Server 11.x, 12.x<br>API Gateway might not run on systems that do not meet these requirements (see **Note** below).|- Supports 64-bit Linux running on 64-bit hardware <br>Intel Core or AMD Opteron at 2Ghz with Dual Core or faster|
| **Windows**<br>(Policy Studio, Configuration Studio, Package and Deployment Tools only) | - Windows 10<br>Windows 8.1 |- Supports 32-bit Windows on both 32-bit hardware and 64-bit hardware<br> - Intel Core or AMD Opteron at 2Ghz with Dual Core or faster|

{{< alert title="Note" color="primary" >}}When new Linux kernels and distributions are released, Axway modifies and tests its products for stability and reliability on these platforms.
Axway makes every effort to add support for new kernels and distributions in a timely manner. However, until a kernel or distribution is added to this list, its use with API Gateway is not supported. Axway endeavors to support any generally popular Linux distribution on a release that the vendor still supports. {{< /alert >}}

### Disk space and RAM requirements

The disk space and RAM requirements for Linux platforms are:

The disk space and RAM requirements for the developer tools on Windows platforms are:

* Disk space: minimum 2 GB
* Physical memory (RAM): minimum 4 GB

There are also specific requirements for the `/tmp` directory:

* Minimum 500 MB available in the `/tmp` directory and writable permissions on the `/tmp`, `/var/tmp`, and `/usr/tmp` directories.
* `noexec` must not be set on `/tmp`. If `noexec` is set, you must remount `/tmp` with `noexec` disabled or follow the additional steps detailed in [/tmp directory mounted with noexec](/docs/apigtw_install/prereqs_additional).

## Databases

This section describes the supported database versions.

### Relational databases

API Gateway and API Manager support the following relational databases to store metrics data:

* MySQL Server 5.6, 5.7
* MariaDB 5.5, 10.1
* Microsoft SQL Server 2012, 2014
* Oracle 11.2, 12.1
* IBM DB2 10.5

For more details, see [Configure the metrics database](/docs/apigtw_install/metrics_db_install.htm).

### Apache Cassandra

API Gateway and API Manager support Apache Cassandra version 2.2.12 for internal data storage. For more details, see [Install an Apache Cassandra database](/docs/apigtw_install/cassandra_install).

## Web browsers

API Gateway Manager and other browser-based client components support the following browsers:

* Internet Explorer 11
* Firefox 13.0 or higher
* Safari 5.1.7 or higher
* Google Chrome 19 or higher
* Microsoft Edge (on Windows 10 only)

## Thick client platforms

Policy Studio has the following additional requirements on Linux:

* X-Windows environment
* GTK+ 2

## Docker containers

API Gateway and API Manager support the following versions of Docker:

* Docker CE version 17.09 or later on CentOS
* Docker EE version 17.06 or later on RHEL

Axway supports Red Hat Enterprise Linux 7 (recommended) and CentOS Linux version 7 as the base image for Docker containers, and supports deployment on any host operating system or cloud provider supported by your Docker version.

{{< alert title="Note" color="primary" >}}If you are using API Manager monitoring, you also require a shared file system between your API Gateway instances and Admin Node Manager. This is required for processing of transaction event logs and writing API metrics to a database.{{< /alert >}}

API Gateway elastic topology is supported in Docker deployments only. For more details, see the [API Gateway Container Deployment Guide](/bundle/APIGateway_77_ContainerGuide_allOS_en_HTML5/).

## Specific component requirements

This section describes requirements for specific API Gateway components.

| Component                 | Requirements |
|---------------------------|---------------|
| **Policy Studio**         | Policy Studio is a thick client and supports the platforms described in [Thick client platforms](#thick-client-platforms).|
| **API Gateway Manager**   | API Gateway Manager is a web-based client and supports the web browsers listed in [Web browsers](#web-browsers). |
| **API Gateway Analytics** | The API Gateway Analytics server component has the same operating system and hardware requirements as API Gateway. See [*Operating systems and hardware* on page 1](#operating-systems-and-hardware).<br>API Gateway Analytics requires a database. For database requirements, see [*Databases* on page 1](#databases).<br> The browser-based client component supports the same browsers as API Gateway Manager. See [*Web browsers* on page 1](#web-browsers).  |
| **API Manager**           | API Manager is a browser-based client and supports the same browsers as API Gateway Manager. See [Web browsers](#web-browsers). |
