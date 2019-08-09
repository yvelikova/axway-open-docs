{"title":"Build and run API Portal using Dockerfile","linkTitle":"Build and run API Portal using Dockerfile","date":"2019-08-09","description":"This section describes how to build an API Portal Docker image using the `Dockerfile` in the sample package. It also describes how to download and run MySQL and Redis Docker containers, and how to run API Portal in Docker containers."} ﻿

This section describes how to build an API Portal Docker image using the `Dockerfile` in the sample package. It also describes how to download and run MySQL and Redis Docker containers, and how to run API Portal in Docker containers.

{{< alert title="Note" color="primary" >}}MySQL and Redis Docker images are not included with the API Portal Docker sample package. You must download them separately from [Docker Hub](https://hub.docker.com/).{{< /alert >}}

The process is as follows:

1.  [Upload API Portal Docker package](#Upload)
2.  [Download and run database container](#DownloadMySQL)
3.  [Build and run API PortalDocker container](#Build)
4.  [Download and run Redis container](#DownloadRedis)
5.  [Encrypt the Public API user password (optional)](#Create)

Prerequisites
-------------

The following components are required on your system before deploying API Portal in a Docker container:

-   Docker version 1.13.x
-   API Portal Docker samples package available from Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}
-   API Gateway and API Manager either installed on-premise or deployed in containers, see the [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/) or the [API Gateway Container Deployment Guide](/bundle/APIGateway_77_ContainerGuide_allOS_en_HTML5/) for more details.

{{< alert title="Note" color="primary" >}}The monitoring feature of API Portal, which enables your API consumers to monitor application and API usage, requires a connected API Manager with monitoring metrics enabled. {{< /alert >}}

The following are the recommended hardware disk space and memory requirements for the Docker host machine for a single node sample architecture:

-   100 GB or more disk space
-   8 GB or more RAM

Upload API Portal Docker package
--------------------------------

Follow these steps to upload the Docker sample package to your Docker host machine:

1.  Download the API Portal Docker sample package from Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}.
2.  Upload the package to your Docker host machine.
3.  Unzip the package.

The package includes:

-   `readme.md` – Details the contents of the package and provides brief instructions to build and run API Portal in Docker.
-   `Dockerfile` – Enables you to build an API Portal Docker image using the `docker build` command.
-   Various scripts and files that are used to build the API Portal Docker image (for example, the `.env.demo` file). See the `readme.md` for full details of these files.
-   `docker-compose.yml` sample – Enables you to use Docker Compose to run your entire API Portal Docker deployment using a single `docker-compose up` command.
    -   It provides a sample API Portal topology which you can customize to suit your requirements. For more information, see [Customize your API Portal topology in Docker](docker_config.htm).
    -   This file requires Docker Compose. Docker Compose is included by default in some Docker installations. For more information, see [Docker Compose documentation](https://docs.docker.com/compose/).

    >

Download and run database container
-----------------------------------

To run a database Docker container, complete the following steps:

1.  Ensure that you are logged in to your Docker host machine as the `root` user.
2.  Download a Docker image for your chosen database from [Docker Hub](https://hub.docker.com/). For example, to download a MySQL image, enter the following command:
3.  $ docker pull mysql:5.7

4.  {{< alert title="Note" color="primary" >}}The database must be supported by API Portal. For more information on supported databases, see [Software requirements](install_software_prereqs.htm#Software).{{< /alert >}}
5.  Run the database container following the instructions on [Docker Hub](https://hub.docker.com/). For example, to run a MySQL Docker container:
6.  $ docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=XXXXX -p 3306:3306 mysql:5.7

7.  Verify that the database container is running:
8.  $ docker ps -a | grep <your database container name>

{{< alert title="Note" color="primary" >}}When the database container is started it creates a volume to store the data from the database. This volume is created with a random name which you can identify using `docker inspect`.{{< /alert >}}

Build and run API Portal Docker container
-----------------------------------------

To build the Docker image and run the API Portal Docker container, follow these steps:

1.  Ensure that you are logged in to your Docker host machine as the `root` user.
2.  Change to the directory where you unzipped the Docker sample package.
3.  Build the API Portal image. For example, enter the following command to build the image and tag it as `apiportal`:`7.8`:
4.  ``` {space="preserve"}
    $ docker build -t apiportal:7.8
    ```

5.  Check the IP address of the database container you started earlier:
6.  $ docker inspect <your database container name>

7.  Create data volumes for API Portal customized data, for example:
8.  ``` {space="preserve"}
    $ docker volume create templates
    ```

    ``` {space="preserve"}
    $ docker volume create images
    ```

9.  {{< alert title="Tip" color="primary" >}}For more information about Docker volumes and a complete list of directories which you should preserve, see [Create Docker data volumes for persistence](docker_config.htm#Create).{{< /alert >}}
10. Run a container from the API Portal Docker image with the same data volumes. For example:
11. \$ docker run -it --name apiportal -e MYSQL\_HOST=172.19.0.2 -e MYSQL\_PORT=3306 -e MYSQL\_ROOT\_PASSWORD=XXXXX -e MYSQL\_USERNAME=joomla -e MYSQL\_PASSWORD=XXXXX\
    -e MYSQL\_DBNAME=joomla -e APIMANAGER\_HOST=XXXXX -e APIMANAGER\_PORT=XXXXX -p 443:443\
    -v templates:/opt/axway/apiportal/htdoc/templates\
    -v images:/opt/axway/apiportal/htdoc/images apiportal:7.8

This example performs the following:

-   Runs an API Portal Docker container from an image named `apiportal`:`7.8`
-   Sets environment variables for connecting to the MySQL container.
-   Sets environment variables for connecting to API Manager.
-   Binds port 443 of the container to port 443 on the host machine.
-   Mounts volumes for customized data.

{{< alert title="Note" color="primary" >}}You can safely ignore the following messages, which might be displayed when running this command:{{< /alert >}}

    "ERROR 1060 (42S21) at line 1: Duplicate column name 'termsAndCond'"

``` {space="preserve"}
"AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using <IP address>. 
Set the 'ServerName' directive globally to suppress this message"
```

API Portal is now running in a Docker container.

Before you can use API Portal, you must link it to your API Manager. For more details, see [Connect API Portal to API Manager](../../../APIPortalInstallGuideTopics/connect_to_apimgr.htm).

Download and run Redis container
--------------------------------

For better performance and scalability, you can configure API Portal to cache APIs in a Redis cache. Using a Redis cache is recommended if you plan to expose hundreds of APIs, or you plan to connect API Portal to more than one API Manager.

To download and run a Redis Docker container, complete the following steps:

1.  Download the Redis Docker image from [Redis on Docker Hub](https://hub.docker.com/_/redis/). For example, enter the following command:
2.  $ docker pull redis:latest

3.  Run the Redis Docker container, for example:
4.  $ docker run -d --name redis redis:latest

Redis is now running in a Docker container. To configure API Portal to use the Redis cache, follow these steps:

1.  Check the IP address of the Redis container:
2.  $ docker inspect <your Redis container name>

3.  Enter the following command to connect to the API Portal container:
4.  ``` {space="preserve"}
    $ docker exec -it <your API Portal container name> /bin/bash
    ```

5.  Open the following configuration file for editing:
6.  /opt/axway/apiportal/htdoc/configuration.php

7.  Locate the following line:
8.  redis_server_host = 'localhost';

9.  Change `localhost` to the IP address of the Redis container and save the file.

Encrypt the Public API user password (optional)
-----------------------------------------------

To use the Public API mode in API Portal you must first run a script to encrypt the Public API user password and specify a directory to store the encryption key.

Perform the following steps after the API Portal Docker container is started:

1.  Access the API Portal Docker container using the following command:
2.  docker exec -it <your API Portal container name> bash

3.  Change to the directory where the `apiportal_encryption.sh` script is located and execute the script. For example:
4.  ``` {space="preserve"}
    cd /
    ./apiportal_encryption.sh
    ```

5.  Enter the full path to the file in which to store the encryption key.

The directory is created along with a file. The last segment of the directory is the file name, for example: `/sample/directory/for/encryption/key` creates an empty file named "key" in the desired directory.

After the script is finished, re-enter the password for the Public API mode user in JAI to encrypt and store it correctly. For more details see .

{{< alert title="Note" color="primary" >}} You do not need to rerun the encryption script every time you start and stop the API Portal Docker container, but if you remove the container and create a new one using the same database (for example, when upgrading or setting up HA), you must rerun the encryption script and re-enter the password for the Public API user in JAI.{{< /alert >}}
