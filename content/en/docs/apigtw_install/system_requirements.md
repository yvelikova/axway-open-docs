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

## Default ports

This section describes the default ports used by API Gateway components.

### API Gateway

The default ports used by API Gateway are as follows:

* **Traffic port**: `8080` (between clients and API Gateway)
* **Management port**: `8085` (between API Gateway and Admin Node Manager)

### Admin Node Manager

The default port used by the Admin Node Manager for monitoring and management of API Gateway instances is `8090`.

### Policy Studio

The default URL address used by the Policy Studio tool to connect to the Admin Node Manager is as follows:

`https://localhost:8090/api`

### API Gateway Manager

The default URL address used by the API Gateway Manager web console to connect to the Admin Node Manager is as follows:

`https://localhost:8090/`

### API Manager

The default URL address used by the API Manager web console for API management is as follows:

`https://localhost:8075/`

### API Gateway Analytics

The default port used by API Gateway Analytics for reporting, monitoring, and management is `8040` . The default URL address used by the API Gateway Analytics web console is as follows:

`http://localhost:8040/`

## Software and license keys

Axway products are delivered electronically from Axway Support at [https://support.axway.com](https://support.axway.com/). A welcome email notifies you that your products are ready for download.

When you are ready, perform the following tasks:

1. Check your authorization.
2. Check the hardware and system requirements.
3. Obtain license keys.
4. Download the installation setup file from Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}.
5. Install products.

### Check your authorization

Verify that you can log in to Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink} . If you do not have an account, follow the instructions in your welcome email.

Log in to download or access:

* The product installation package
* Your product license key
* Product documentation
* Product updates, including patches and service packs
* Product announcements
* The support case center, to open a new case or to track opened cases

You can also access other resources, such as articles in the Knowledge Base, the Axway User Forum, and documentation for all Axway products.

### License keys

API Gateway requires the following license keys.

**Axway license file**:

You must have a valid Axway license file to install the following API Gateway components:

* API Gateway Server
* API Gateway Analytics
* API Manager

You can obtain an evaluation trial license to enable you to evaluate the API Gateway features. However, you must have a full license to enable all API Gateway features for use in a non-evaluation environment (for example, development, testing, or production). To obtain an evaluation trial license or a full license, contact your Axway Account Manager.

{{< alert title="Note" color="primary" >}}You can install an Admin Node Manager in isolation without an API Gateway license. For more information, see [Install the Admin Node Manager](install_node_manager).{{< /alert >}}

**McAfee license file**:

You must have a valid McAfee license file to use the **McAfee Anti-Virus** filter.

**FIPS-compliant mode license file**:

You must have a valid Axway FIPS-compliant mode license file to run API Gateway in FIPS-compliant mode.

### Multiple installations

API Gateway requires a minimum of two installations for high availability (HA). Make sure that you obtain license keys for all of the API Gateway instances that you are installing.

## Additional prerequisites

This section lists additional prerequisites for installing API Gateway.

On Linux, you must ensure that the installation executable has the appropriate permissions in your environment. For example, you can use the `chmod` command to update the file permissions.

### /tmp directory mounted with noexec

If your Linux system has the `/tmp` directory mounted with `noexec`, you must complete some additional steps before installing or running API Gateway.

**Installation**:

When installing API Gateway, do not install the QuickStart tutorial:

* When running the installer in GUI mode, you must select the **Custom** setup type and deselect the QuickStart tutorial component. For more information, see [Installation options](installation).
* When running the installer in unattended mode, you must use the `--setup_type advanced` option and specify `qstart` to the `--disable-components` option. For more information, see [Unattended installation](installation_unattended).

You must not install the QuickStart tutorial as this option starts Apache Cassandra, the API Gateway server and the Node Manager when installation completes, and in a system with `/tmp` mounted as `noexec` you must make some changes before starting these components.

**Post-installation**:

After completing the installation and before starting the services:

1. Create a new temporary directory that has `exec` privileges (for example, ` /opt/Axway-7.8/tmp`).
2. If you installed Cassandra during API Gateway installation, edit the file `CASSANDRA_INSTALL_DIR/conf/cassandra-env.sh` and add the following line:
    `JVM_OPTS="$JVM_OPTS -Djava.io.tmpdir=<TheNewTmpDir>"`
3. Create or edit the file `VDISTDIR/apigateway/conf/jvm.xml`, and add the following:

    ```
    <ConfigurationFragment>
        <VMArg name="-Djava.io.tmpdir=<TheNewTmpDir>
    </ConfigurationFragment>
    ```

### Service packs

Service packs for API Gateway are available
from Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}. If any service packs are available for API Gateway 7.8, download and apply them when the installation completes.

For more information on applying a service pack, see [Update API Gateway](install_service_packs).

### Certificates

API Gateway uses Secure Sockets Layer (SSL) for communications between all processes in a domain (for example, internal management traffic between the Admin Node Manager and API Gateway instances).

Certificates are not required during installation; however, certificates will be required after installation to secure API Gateway domains. For more information on configuring and securing API Gateway domains, see the [API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/).
