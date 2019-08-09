{"title":"Run API Portal using ready-made Docker image","linkTitle":"Run API Portal using ready-made Docker image","date":"2019-08-09","description":"This topic describes how to use the ready-made API Portal Docker image to run in Docker containers. The image is ready out-of-the-box, so you do not have to build it using the `Dockerfile`."} ﻿

This topic describes how to use the ready-made API Portal Docker image to run in Docker containers. The image is ready out-of-the-box, so you do not have to build it using the `Dockerfile`.

Axway does not provide a ready-made Docker image for MySQL. You must have the MySQL Docker container running before you can load the ready-made API Portal Docker image and run the Docker container. For more details on MySQL image, see the [official MySQL Docker repository](https://hub.docker.com/_/mysql/).

{{< alert title="Note" color="primary" >}}The ready-made API Portal Docker image is strictly for development environments only, and is not recommended for use in production environments. You must use the `Dockerfile` to build and run API Portal containers in production environments. For more details, see [Build and run API Portal using Dockerfile](docker_portal_deploy.htm).{{< /alert >}}

Prerequisites
-------------

The following components are required on your system before you can deploy API Portal in Docker containers:

-   Docker version 1.13.x
-   MySQL Docker container running
-   API Portal Docker image available from Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}
-   API Gateway and API Manager either installed on-premise or deployed in containers (see the [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/) for more details)

{{< alert title="Note" color="primary" >}}The monitoring feature of API Portal, which enables your API consumers to monitor application and API usage, requires a connected API Manager with monitoring metrics enabled. {{< /alert >}}

The following are the recommended hardware disk space and memory requirements for the Docker host machine for a single node sample architecture:

-   100 GB or more disk space
-   8 GB or more RAM

Run a Docker container using the image
--------------------------------------

1.  Download the API Portal Docker image from Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}.
2.  Upload the file to your Docker host machine.
3.  Enter the following command to load the image:
4.  $ docker load -i APIPortal_7.8_Docker_Image_linux-x86-64_<build number>.tar.gz

5.  Run the API Portal Docker container, for example:
6.  ``` {space="preserve"}
    $ docker run -it --name apiportal -e MYSQL_HOST=172.19.0.2 -e MYSQL_PORT=3306 
    -e MYSQL_ROOT_PASSWORD=XXXXX -e MYSQL_USERNAME=joomla -e MYSQL_PASSWORD=XXXXX 
    -e MYSQL_DBNAME=joomla -e APIMANAGER_HOST=XXXXX -e APIMANAGER_PORT=XXXXX -p 443:443
    apiportal:7.8
    ```

This example performs the following:

-   Runs an API Portal Docker container from an image named `apiportal`:`7.8`.
-   Sets environment variables for connecting to the MySQL container.
-   Sets environment variables for connecting to API Manager.
-   Binds port 443 of the container to port 443 on the host machine.

API Portal is now running in a Docker container.

Before you can use API Portal, you must link it to your API Manager. For more details, see [Connect API Portal to API Manager](../../../APIPortalInstallGuideTopics/connect_to_apimgr.htm).

The Docker image contains an encryption script which you can use to encrypt and store the Public API mode user password. For details on running the script in a Docker container, see [Encrypt the Public API user password (optional)](docker_portal_deploy.htm#Create).
