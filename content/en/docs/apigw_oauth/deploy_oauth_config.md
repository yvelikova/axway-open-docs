---
title: Deploy OAuth configuration
linkTitle: Deploy OAuth configuration
date: 2019-11-18
description: The OAuth service is not available in an out-of-the-box installation and you must deploy it manually.
weight: 15
---

To deploy OAuth, perform the following steps:

1. Open Policy Studio and open or create a new project

2. Select **File > Configure OAuth**

3. If you do not have any Cassandra hosts configured, you must add a Cassandra host before you can continue

    * Enter a name for the Cassandra server (for example, `local_cassandra`)
    * Enter the host name of the Cassandra host (for example, `localhost`)
    * Enter the port of the Cassandra host (for example, `9042`)

4. Click **Next**
5. Select the OAuth deployment type. The options are

    * `all` – Select this option to deploy the OAuth server components and the OAuth client demo
    * `authzserver` – Select this option to deploy the OAuth server components only
    * `clientdemo` – Select this option to deploy the OAuth client demo only

6. Click **Finish**

7. Click **Deploy** in the toolbar to deploy the updated configuration to API Gateway

    {{< alert title="Note" color="primary" >}}In earlier versions of API Gateway, OAuth was configured using the `deployOAuthConfig.py` script provided in `INSTALL_DIR/apigateway/samples/scripts/oauth` directory. This script is still supported for backwards compatibility, but we recommend that you use Policy Studio to configure OAuth in this version. For more information on running the `deployOAuthConfig.py` script, run the script with the `--help` option. Apache Cassandra must be installed and running, and the Cassandra hosts configured in Policy Studio before you run the `deployOAuthConfig.py` script.{{< /alert >}}

## Deploy the OAuth service

To deploy the OAuth 2.0 services listener, supporting policies, and client demo, configure OAuth in Policy Studio using the `all` deployment type.

This deploys the OAuth server components on port 8089 and deploys the client demo on port 8088.

{{< alert title="Note" color="primary" >}}This option does not register the sample client applications in the Client Application Registry. You must import them manually as detailed in [Import sample client applications](/docs/apigw_oauth/oauth_client_setup/oauth_setup_import).{{< /alert >}}
{{< alert title="Tip" color="primary" >}}When you use the `all` deployment type, this deploys both the server and client components. To deploy the server components only, use the `authzserver` deployment type.{{< /alert >}}

## Deploy the OAuth client demo

API Gateway ships with a preconfigured client demo that demonstrates the use of API Gateway and Google as OpenID providers, and API Gateway as a client. The client demo is not deployed during installation and must be deployed manually.

To deploy the OAuth client demo, configure OAuth in Policy Studio using the `clientdemo` deployment type.

This deploys the client demo on port 8088.

{{< alert title="Note" color="primary" >}}This option does not register the sample client applications in the Client Application Registry. You must import them manually as detailed in [Import sample client applications](/docs/apigw_oauth/oauth_client_setup/oauth_setup_import).{{< /alert >}}

{{< alert title="Tip" color="primary" >}}

* If you have already deployed OAuth in Policy Studio using the `all` deployment type, the client demo is already available.
* If you have deployed only the OAuth server configuration using the `authzserver` deployment type, or if you have installed API Manager, you must deploy it using the `clientdemo` deployment type to deploy the client demo.
{{< /alert >}}

For more information on the OAuth client demo, see [API Gateway OAuth client demo](/docs/apigw_oauth/client_demo).
