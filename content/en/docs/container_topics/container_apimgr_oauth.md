---
 title :  Deploy API Manager or OAuth in Docker containers 
 linkTitle :  Deploy API Manager or OAuth 
 weight: 6
 date :  2019-09-18 
 description :  Deploy API Manager or OAuth services in your API Gateway containers.
---

These steps are optional and only for users who wish to use API Manager or OAuth in their environment.

For details on how to deploy API Manager or OAuth services in a classic deployment (non-containerized), see the following:

* [Enable API Manager](/csh?context=1026&product=prod-api-manager-77) in the [API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
* [Deploy OAuth configuration](/csh?context=400&product=prod-api-gateway-77) in the [API Gateway OAuth User Guide](/bundle/APIGateway_77_OAuthUserGuide_allOS_en_HTML5/)

## Deploy API Manager

To deploy API Manager in a Docker container, follow these steps:

* [Configure API Manager in Policy Studio](#apimgrps)
* [Deploy API Manager enabled API Gateway container](#apimgrdeploy)

### Configure API Manager in Policy Studio {#apimgrps}

Follow these steps:

* Open Policy Studio and open or create a new project.
* Select **File > Configure API Manager**.
* If you do not have any Cassandra hosts configured, you must add a Cassandra host before you can continue:
    * Enter a name for the Cassandra server (for example, `container_cassandra`).
    * Enter the name of the Cassandra container as the host name (for example, `cassandra228`).
    * Enter the port of the Cassandra container (for example, `9042`).

* Click **Next**.
* Enter the appropriate API Manager settings. For full details, see [Enable API Manager](/csh?context=1026&product=prod-api-manager-77) in the [API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/).

{{< alert title="Note" color="primary" >}}The default API administrator user name and password set in Policy Studio are used only when creating the administrator account in Apache Cassandra. After the account has been created in Cassandra, you cannot change the credentials in Policy Studio. You must use API Manager to change the administrator credentials. You can also reset the administrator password by running the `setup-apimanager` script with the option `--resetPassword` inside the Admin Node Manager container. For details, see [Reset the default API administrator password](/docs/container_topics/container_troubleshoot#Reset).{{< /alert >}}

* Click **Finish**.
* Configure additional API Manager settings under **Server Settings > API Manager**. For example, you can specify custom policies that are called as traffic passes through API Manager.
* Select **File > Export** and select a package to export the configuration as a package (`fed`, `pol`, or `env`).

### Deploy API Manager enabled API Gateway container {#apimgrdeploy}

Follow the steps in [Deploy API Gateway in Docker containers](/docs/container_topics/containers_docker_setup). When creating the API Gateway Docker image using `build_gw_image.py`, specify the deployment package you exported from Policy Studio. For an example, see [Create an API Manager or OAuth enabled API Gateway image](/docs/container_topics/containers_docker_setup/docker_script_gwimage#createapimgroauth).

## Deploy OAuth services

To deploy OAuth services in a Docker container, follow these steps:

* [Configure OAuth in Policy Studio](#oauthps)
* [Deploy OAuth-enabled API Gateway container](#oauthdeploy)

### Configure OAuth in Policy Studio {#oauthps}

Follow these steps:

* Open Policy Studio and open or create a new project.
* Select **File > Configure OAuth**.
* If you do not have any Cassandra hosts configured, you must add a Cassandra host before you can continue:
    * Enter a name for the Cassandra server (for example, `container_cassandra`).
    * Enter the name of the Cassandra container as the host name (for example, `cassandra228`).
    * Enter the port of the Cassandra container (for example, `9042`).
* Click **Next**.
* Select the OAuth deployment type. For full details, see
    [Deploy OAuth configuration](/csh?context=400&product=prod-api-gateway-77)
    in the
    [API Gateway OAuth User Guide](/bundle/APIGateway_77_OAuthUserGuide_allOS_en_HTML5/).
* Click **Finish**.
* Select **File > Export** and select a package to export the configuration as a package (`fed`, `pol`, or `env`).

{{< alert title="Note" color="primary" >}}When you configure OAuth in Policy Studio, this does not register the sample client applications in the Client Application Registry. You must import the sample client applications manually, as detailed in
[Import sample client applications](/csh?context=402&product=prod-api-gateway-77) in the [API Gateway OAuth User Guide](/bundle/APIGateway_77_OAuthUserGuide_allOS_en_HTML5/).{{< /alert >}}

### Deploy OAuth-enabled API Gateway container {#oauthdeploy}

Follow the steps in [Deploy API Gateway in Docker containers](/docs/container_topics/containers_docker_setup). When creating the API Gateway Docker image using `build_gw_image.py`, specify the deployment package you exported from Policy Studio. For an example, see [Create an API Manager or OAuth enabled API Gateway image](/docs/container_topics/containers_docker_setup/docker_script_gwimage#createapimgroauth).
