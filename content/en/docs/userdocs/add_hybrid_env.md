{"title":"Add your hybrid environment to AMPLIFY Central","linkTitle":"Add your hybrid environment to AMPLIFY Central","date":"2019-7-16","description":"*Estimated reading time: 8 minutes* "} ﻿

*Estimated reading time: 8 minutes*

{{&lt; alert title="Note" color="primary" &gt;}}This feature is currently in **public beta** and not yet available for production use.{{&lt; /alert &gt;}}

Before you start
----------------

-   Read [AMPLIFY Central hybrid environments overview](hybrid_overview.htm).
-   You will need a private cloud Kubernetes cluster that meets the minimum requirements for an AMPLIFY Central hybrid environment, and a client system from which you can access and manage the cluster remotely. See [Build your hybrid environment](build_hybrid_env.htm).
-   You will need a basic understanding of OAuth authorization ([RFC 6749](https://tools.ietf.org/html/rfc6749)) and JWT ([RFC 7523](https://tools.ietf.org/html/rfc7523)).
-   You will need to be familiar with Kubernetes and Helm, including running Helm and kubectl commands.
-   You will need an administrator account for AMPLIFY Central.

Objectives
----------

Learn how to add your private cloud hybrid environment to AMPLIFY Central, so that you can manage your microservices, and any related APIs they expose, from AMPLIFY Central in AMPLIFY Central public cloud.

-   Add your environment to AMPLIFY Central and download the generated hybrid kit
-   Generate a key pair and secret for the domain edge gateway and deploy it into the Istio namespace
-   Generate key pairs and secrets for the Axway mesh agents and deploy them into the mesh agent namespace
-   Deploy the Axway proprietary service mesh layer into your environment
-   Create and test an API proxy for the API exposed by a demo microservice

Add your environment to AMPLIFY Central
---------------------------------------

Log in to AMPLIFY Central UI as an administrator, and create a new environment for your private cloud Kubernetes cluster. This generates a hybrid kit specific to your environment. The hybrid kit contains Helm charts that are used later to deploy the Axway proprietary service mesh layer to your environment.

Watch the animation to learn how to do this in AMPLIFY Central UI.

{{&lt; alert title="Note" color="primary" &gt;}} You must specify the public FQDN of the private cluster (in this case your private cloud Kubernetes cluster) in the **Host** field when defining your hybrid environment in the AMPLIFY Central UI. You must use the same FQDN in [Generate a key pair and secret for the domain edge gateway](#Generate). {{&lt; /alert &gt;}}

![Add environment to AMPLIFY Central](/Images/add_env_animation_cropped.gif)

Download the hybrid kit to your client system and unzip it to a unique directory. For example:

``` {space="preserve"}
$ ls *.zip
e4fd7216693f50360169492633ab0122-override.zip
$ unzip e4fd7216693f50360169492633ab0122-override.zip -d e4fd7216693f50360169492633ab0122
$ cd e4fd7216693f50360169492633ab0122
$ ls
hybridOverride.yaml  istioOverride.yaml
```

[]{#Generate}Generate a key pair and secret for the domain edge gateway
-----------------------------------------------------------------------

To expose an HTTPS endpoint of a service within your environment to external traffic, you need a public certificate and private key for the domain where your environment is hosted, and a TLS secret based on the key pair.

1.  Create an X.509 certificate and key for your domain (for example, using [Let's Encrypt](https://letsencrypt.org/)).
    -   The domain certificate must match the domain (FQDN) of your environment
    -   The public key certificate must be PEM encoded and match the given private key
2.  Create the Istio namespace. This is the namespace where Istio will be deployed.
3.  Usage: `kubectl create namespace NAMESPACE_NAME`
4.  {{&lt; alert title="Note" color="primary" &gt;}}The default value of `NAMESPACE_NAME` is `istio-system` and this value is used later when the helm upgrade deployment steps are executed in [Deploy the service mesh and Axway mesh agents](#Deploy). {{&lt; /alert &gt;}}
5.  Example:
6.  ``` {space="preserve"}
    $ kubectl create namespace istio-system
    ```

    ``` {space="preserve"}
    namespace/istio-system created
    ```

7.  Create a Kubernetes TLS secret to hold the public certificate and private key, and deploy it into the Istio namespace.
8.  Usage: `kubectl create secret tls SECRET_NAME -n NAMESPACE_NAME --key /PATH/TO/KEY/FILE --cert /PATH/TO/CERT/FILE`
9.  {{&lt; alert title="Note" color="primary" &gt;}}`SECRET_NAME` must match the field `secretName` in the `istioOverride.yaml` Helm chart that you downloaded from AMPLIFY Central as part of the hybrid kit. The `secretName` in the Helm chart is generated from your domain name, for example, `kubernetes-cluster-example-certs` for the domain `kubernetes-cluster.example.com`.{{&lt; /alert &gt;}}
10. Example:
11. ``` {space="preserve"}
    $ kubectl create secret tls kubernetes-cluster-example-certs -n istio-system 
        --key kubernetes-cluster.example.com.key.pem --cert kubernetes-cluster.example.com.cert.pem
    ```

    ``` {space="preserve"}
    secret/kubernetes-cluster-example-certs created
    ```

    ``` {space="preserve"}
    $ kubectl get secrets -n istio-system
    ```

    ``` {space="preserve"}
    NAME                               TYPE                                  DATA   AGE
    kubernetes-cluster-example-certs   kubernetes.io/tls                     2      4m
    default-token-jvw9m                kubernetes.io/service-account-token   3      27m
    ```

Generate key pairs and secrets for the Axway mesh agents
--------------------------------------------------------

Before you can deploy the Axway mesh agents in your environment, you must generate key pairs and make those keys available to Kubernetes in the namespace where the agents will be deployed. For more information on Axway mesh agents, see [Axway mesh agents](hybrid_overview.htm#mesh).

### What are these keys used for?

Mesh agents use service accounts when communicating from your environment to the AMPLIFY Central SaaS control plane. A service account is provisioned in AMPLIFY Central when you create a new environment in the AMPLIFY Central UI. When a mesh agent starts for the first time it uses a one-time credential to authenticate itself to AMPLIFY Central. The agent registers a public key with AMPLIFY Central, and the agent must have access to the associated private key during registration.

AMPLIFY Central uses the public key to authenticate signed JWT tokens from the agent. The agent signs the JWT token with its private key, and the agent private key never leaves your environment. This registration step uses a one-time registration access token (`registrationToken`) that is contained in the `hybridOverride.yaml` Helm chart that you downloaded from AMPLIFY Central as part of the hybrid kit.

### Generate key pair for SDA

Use `openssl` to generate a public certificate and private key for the service discovery agent (SDA) . The following example uses the password `changeme`:

``` {space="preserve"}
$ mkdir sdacerts
$ cd sdacerts/
$ echo -n "changeme" > password
$ openssl genrsa -des3 -out private_key.pem -passout file:password 2048
```

``` {space="preserve"}
Generating RSA private key...
```

``` {space="preserve"}
$ openssl rsa -pubout -in  private_key.pem -passin file:password -out public_key.der -outform der && base64 public_key.der > public_key
```

``` {space="preserve"}
writing RSA key
```

### Generate key pair for CSA

Use `openssl` to generate a public certificate and private key for the configuration synchronization agent (CSA):

``` {space="preserve"}
$ mkdir csacerts
$ cd csacerts/
$ openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
```

``` {space="preserve"}
...
```

``` {space="preserve"}
$ openssl rsa -pubout -in private_key.pem -out public_key.der -outform der && base64 public_key.der > public_key
```

``` {space="preserve"}
writing RSA key
```

### Create namespace for mesh agents

Create the namespace where the Axway mesh agents will be deployed.

Usage: `kubectl create namespace NAMESPACE_NAME`

{{&lt; alert title="Note" color="primary" &gt;}}The default value for `NAMESPACE_NAME` is `apic-control` and this value is used later when the helm upgrade deployment steps are executed in [Deploy the service mesh and Axway mesh agents](#Deploy). {{&lt; /alert &gt;}}

Example:

``` {space="preserve"}
$ kubectl create namespace apic-control
```

``` {space="preserve"}
namespace/apic-control created
```

### Create and deploy Kubernetes secrets

As the mesh agents are running within Kubernetes, you must create Kubernetes secrets for the agents' public certificates and private keys, and store them in the secret store so that the mesh agents can locate them.

Create Kubernetes secrets to hold the mesh agents' public certificates and private keys, and deploy them in the mesh agent namespace:

Usage: `kubectl create secret generic SECRET_NAME --namespace NAMESPACE_NAME  --from-file=publicKey=/PATH/TO/PUBLIC/KEY/FILE --from-file=privateKey=/PATH/TO/PRIVATE/KEY/FILE  --from-file=password=PASSWORD_FILE --from-literal=password=PASSWORD -o yaml`

{{&lt; alert title="Note" color="primary" &gt;}} Each `SECRET_NAME` must match the corresponding SDA or CSA field `keysSecretName` in the `hybridOverride.yaml` Helm chart that you downloaded from AMPLIFY Central as part of the hybrid kit.\
The SDA default value of `keysSecretName` is `sda-secrets`.\
The CSA default value of `keysSecretName` is `csa-secrets`.\
To change the secret store names, edit the `keysSecretName` values in the `hybridOverride.yaml` file before you execute the helm upgrade deployment steps.{{&lt; /alert &gt;}}

Example for SDA:

``` {space="preserve"}
$ cd sdacerts/
$ kubectl create secret generic sda-secrets --namespace apic-control 
--from-file=publicKey=public_key --from-file=privateKey=private_key.pem 
--from-file=password="password" -o yaml
```

Example for CSA:

``` {space="preserve"}
$ cd csacerts/
$ kubectl create secret generic csa-secrets --namespace apic-control 
--from-file=publicKey=public_key --from-file=privateKey=private_key.pem 
--from-literal=password="" -o yaml
```

Verify that the secrets are deployed in the `apic-control` namespace:

``` {space="preserve"}
$ kubectl get secrets -n apic-control
```

``` {space="preserve"}
NAME                  TYPE                                  DATA   AGE
csa-secrets           Opaque                                3      29s
default-token-f26bp   kubernetes.io/service-account-token   3      4m
sda-secrets           Opaque                                3      3m
```

[]{#Deploy}Deploy the service mesh and Axway mesh agents
--------------------------------------------------------

After you have created the key pairs and secrets, deploy the Axway proprietary service mesh into your environment:

1.  To ensure that you have the latest Axway Helm charts, update your Helm repositories:
2.  $ helm repo up
        Hang tight while we grab the latest from your chart repositories...
        ...Skip local chart repository
        ...Successfully got an update from the "axway" chart repository
        Update Complete. ⎈ Happy Helming!⎈

3.  Change to the directory where you unzipped the hybrid kit:
4.  ``` {space="preserve"}
    $ cd e4fd7216693f50360169492633ab0122/
    ```

5.  Deploy Istio. This step can take several minutes to complete.
6.  Usage: `helm upgrade --install --namespace NAMESPACE_NAME RELEASE CHART -f /PATH/TO/OVERRIDE/VALUES`
7.  Example:
8.  ``` {space="preserve"}
    $ helm upgrade --install --namespace istio-system istio axway/istio -f ./istioOverride.yaml
    ```

    ``` {space="preserve"}
    Release "istio" does not exist. Installing it now.
    NAME:   istio
    LAST DEPLOYED: Tue Mar  5 08:44:59 2019
    NAMESPACE: istio-system
    STATUS: DEPLOYED 
    ```

9.  This example uses the `istio` Helm chart from the `axway` Helm repository, with override values from the `istioOverride.yaml` Helm chart that you downloaded from AMPLIFY Central as part of the hybrid kit.
10. Verify that Istio is deployed successfully:
11. $ kubectl get services -n istio-system

12. The output of this command should list an domain edge gateway and a number of Istio services.
13. Deploy the Axway mesh agents. This step can take several minutes to complete.
14. Usage: `helm upgrade --install --namespace NAMESPACE_NAME RELEASE CHART -f /PATH/TO/OVERRIDE/VALUES [OPTIONS]`
15. Example:
16. ``` {space="preserve"}
    $ helm upgrade --install --namespace apic-control apic-hybrid axway/apicentral-hybrid -f ./hybridOverride.yaml 
        --set observer.enabled=true --set observer.filebeat.sslVerification=none
    ```

    ``` {space="preserve"}
    Release "apic-hybrid" does not exist. Installing it now.
    NAME:   apic-hybrid
    LAST DEPLOYED: Tue Mar  5 10:57:27 2019
    NAMESPACE: apic-control
    STATUS: DEPLOYED
    ```

17. {{&lt; alert title="Note" color="primary" &gt;}}The `observer.enabled` and `observer.filebeat.sslVerification` options are required to enable collection of API usage and API traffic metrics from your environment. {{&lt; /alert &gt;}}
18. Verify that the mesh agents are deployed in the `apic-control` namespace:
19. ``` {space="preserve"}
    $ kubectl get services -n apic-control
    ```

20. The output of this command should list the mesh agent services.
21. Verify that the list demo service is deployed in the `apic-demo` namespace:
22. ``` {space="preserve"}
    $ kubectl get services -n apic-demo
    ```

23. The output of this command should list the demo list service.
24. Verify that your environment is now connected in AMPLIFY Central UI:
25. ![Connected environment in AMPLIFY Central](/Images/hybrid__env_connected.png)

Create and test an API proxy for the demo service
-------------------------------------------------

The list demo service is now deployed in your hybrid environment. You can create an API proxy for the API exposed by the demo service, in much the same way as you would for any other API. Watch the short animation to learn how.

![Create a proxy for API exposed by microservice](/Images/hybrid_env_proxy_demo.gif)

You can test the API proxy in AMPLIFY Central UI or using a REST client. The following example uses `curl` to send a `GET` request to the `/list` endpoint:

Example:

``` {space="preserve"}
$ curl -is -X GET 'http://kubernetes-cluster.example.com:8080/listapi/list'
HTTP/1.1 200 OK
server: envoy
request-id: c14a76d6-5ec6-4831-9650-e8a11258edbb
start-time: 1552319365217
content-type: application/json; charset=utf-8
response-time: 2
content-md5: 8e9f6888c977fa5494181d57aeb9d242
content-length: 152
etag: W/"98-umYiZYKr43H9eDmrYoXeehz5zHw"
vary: Accept-Encoding
date: Mon, 11 Mar 2019 15:49:24 GMT
x-envoy-upstream-service-time: 5

[{"id":1,"name":"dog","price":"20","store":"pet"},
    {"id":2,"name":"cat","price":"30","store":"pet"},
    {"id":3,"name":"monkey","price":"600","store":"zoo"}]
```

Review
------

You have learned how to add your private cloud hybrid environment to AMPLIFY Central, and how to create and test an API proxy for an API exposed by a demo microservice deployed in the hybrid environment.
