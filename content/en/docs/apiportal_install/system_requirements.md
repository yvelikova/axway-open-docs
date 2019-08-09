{"title":"System requirements","date":"2019-08-09","description":" This section describes the supported platforms and other system requirements for Axway API Gateway, and specific requirements for API Gateway components. For more details on API Gateway components, see the . "} ﻿

This section describes the supported platforms and other system requirements for Axway API Gateway, and specific requirements for API Gateway components. For more details on API Gateway components, see the [API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5) .

This section describes the requirements for specific API Gateway components (for example, Policy Studio). For more details on appliance components, see the [API Gateway Appliance Installation and Administration Guide](/bundle/APIGateway_753_ApplianceGuide_allOS_en_HTML5/) .

Operating systems and hardware
------------------------------

This section describes the operating system requirements for API Gateway.

| Platform    | Supported versions                                                                             | Hardware prerequisites                                                  |
|-------------|------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Linux**   | -   CentOS 6.x, 7.x                                                                            
  -   Oracle Linux 6.x, 7.x                                                                       
  -   Red Hat Enterprise Linux 6.x, 7.x                                                           
  -   SUSE Linux Enterprise Server 11.x, 12.x                                                     
  -                                                                                               
                                                                                                  
  API Gateway might not run on systems that do not meet these requirements (see **Note** below).  | -   Supports 64-bit Linux running on 64-bit hardware                    
   -   Intel Core or AMD Opteron at 2Ghz with Dual Core or faster           |
| **Windows** | -   Windows Server 2012 R2                                                                     
  -   Windows Server 2012                                                                         
  -   Windows 10                                                                                  
  -   Windows 8.1                                                                                 
                                                                                                  
  Windows Server 2012 R2 is recommended in a production environment.                              | -   Supports 32-bit Windows on both 32-bit hardware and 64-bit hardware 
                                                                            
   -   Intel Core or AMD Opteron at 2Ghz with Dual Core or faster           |

{{< alert title="Note" color="primary" >}} When new Linux kernels and distributions are released, Axway modifies and tests its products for stability and reliability on these platforms. Axway makes every effort to add support for new kernels and distributions in a timely manner. {{< /alert >}}

<div class="indentTableNested">

However, until a kernel or distribution is added to this list, its use with API Gateway is not supported. Axway endeavors to support any generally popular Linux distribution on a release that the vendor still supports.

</div>

### Disk space and RAM requirements

The disk space and RAM requirements for UNIX/Linux and Windows platforms are:

-   Disk space:
    -   Minimum 4 GB, 50 GB recommended on Windows and Linux
-   Physical memory:
    -   Minimum 4 GB on Windows
    -   Minimum 8 GB on Linux

#### UNIX/Linux permissions

{{< alert title="Note" color="primary" >}}UNIX/Linux platforms also require the following:{{< /alert >}}

-   Minimum 500 MB available in the `/tmp` directory and writable permissions on the `/tmp` , `/var/tmp` , and `/usr/tmp` directories.
-   `noexec` must not be set on `/tmp`. If `noexec` is set, you must remount `/tmp` with `noexec` disabled.

Databases
---------

This section describes the supported database versions.

### Relational databases

API Gateway Analytics and API Manager support the following relational databases to store metrics data:

-   MySQL Server 5.6, 5.7
-   Microsoft SQL Server 2012, 2014
-   Oracle 11.2, 12.1
-   IBM DB2 10.5

For more details, see [Install](../InstallGuideTopics/install_reporter.htm).

### Apache Cassandra

API Gateway and API Manager support Apache Cassandra version 2.2.8 and 2.2.5 for internal data storage. For more details, see [Install an Apache Cassandra database](../InstallGuideTopics/cassandra_install.htm).

Web browsers
------------

API Gateway Manager and other browser-based client components support the following browsers:

-   Internet Explorer 11
-   Firefox 13.0 or higher
-   Safari 5.1.7 or higher
-   Google Chrome 19 or higher
-   Microsoft Edge (on Windows 10 only)

Thick client platforms
----------------------

Policy Studio runs on the same platforms as API Gateway with the following additional requirements on Linux and UNIX:

-   X-Windows environment
-   GTK+ 2

Docker containers
-----------------

The following components support Docker version 1.13:

-   API Manager
-   API Gateway

{{< alert title="Note" color="primary" >}}This applies to the API Gateway instance, Admin Node Manager, and Node Manager only. API Gateway Analytics does not support Docker.{{< /alert >}}

Axway supports CentOS Linux version 7 only as the base image for Docker containers, and supports deployment on any host operating system or cloud provider supported by Docker version 1.13.x. For more details, see [Run API Management in Docker containers](../InstallGuideTopics/docker_intro.htm).

<div id="p_specific_requirements_reqs">

Specific component requirements
-------------------------------

This section describes requirements for specific API Gateway components.

| Component                 | Requirements                                                                                                                                                                    |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Policy Studio**         | Policy Studio is a thick client and supports the platforms described in [*Thick client platforms* on page 1](#Thick).                                                           |
| **API Gateway Manager**   | API Gateway Manager is a web-based client and supports the web browsers listed in [*Web browsers* on page 1](#Web).                                                             |
| **API Gateway Analytics** | The API Gateway Analytics server component has the same operating system and hardware requirements as API Gateway. See [*Operating systems and hardware* on page 1](#Operatin). 
                                                                                                                                                                                   
  API Gateway Analytics requires a database. For database requirements, see [*Databases* on page 1](#Database).                                                                    
                                                                                                                                                                                   
  The browser-based client component supports the same browsers as API Gateway Manager. See [*Web browsers* on page 1](#Web).                                                      |
| **API Manager**           | API Manager is a browser-based client and supports the same browsers as API Gateway Manager. See [*Web browsers* on page 1](#Web).                                              |

</div>
