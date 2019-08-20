---
title: Add your hybrid environment to AMPLIFY Central
linkTitle: Add your hybrid environment to AMPLIFY Central
weight: 9
date: 2019-07-30
description: Learn how to add your private cloud hybrid environment to AMPLIFY Central, so that you can manage your microservices, and any related APIs they expose.
---

*Estimated reading time: 8 minutes*

{{< alert title="Public beta" color="warning" >}}This feature is currently in **public beta** and not yet available for production use.{{< /alert >}}

## Before you start

- Read [AMPLIFY Central mesh governance overview](/docs/central/hybrid_overview).
- You will need a private cloud Kubernetes cluster that meets the minimum requirements for an AMPLIFY Central hybrid environment, and a client system from which you can access and manage the cluster remotely. See [Build your hybrid environment](/docs/central/build_hybrid_env).
- You will need a basic understanding of OAuth authorization ([RFC 6749](https://tools.ietf.org/html/rfc6749)) and JWT ([RFC 7523](https://tools.ietf.org/html/rfc7523)).
- You will need to be familiar with Kubernetes and Helm, including running Helm and kubectl commands.
- You will need an administrator account for AMPLIFY Central.

## Objectives

Learn how to add your private cloud hybrid environment to AMPLIFY Central, so that you can manage your microservices, and any related APIs they expose, from AMPLIFY Central in AMPLIFY Central public cloud.

- Add your environment to AMPLIFY Central and download the generated hybrid kit
- Generate a key pair and secret for the domain edge gateway and deploy it into the Istio namespace
- Generate key pairs and secrets for the Axway mesh agents and deploy them into the mesh agent namespace
- Deploy the Axway proprietary service mesh layer into your environment
- Create and test an API proxy for the API exposed by a demo microservice

## Add your environment to AMPLIFY Central

Log in to AMPLIFY Central UI as an administrator, and create a new environment for your private cloud Kubernetes cluster. This generates a hybrid kit specific to your environment. The hybrid kit contains Helm charts that are used later to deploy the Axway proprietary service mesh layer to your environment.

Watch the animation to learn how to do this in AMPLIFY Central UI.

![Add environment to AMPLIFY Central](/Images/central/add_env_animation_cropped.gif)

{{< alert title="Note" color="" >}} You must specify the public FQDN of the private cluster (in this case your private cloud Kubernetes cluster) in the **Host** field when defining your hybrid environment in the AMPLIFY Central UI. You must use the same FQDN in [Generate a key pair and secret for the domain edge gateway](#generate-key-pairs-and-secrets-for-the-axway-mesh-agents). {{< /alert >}}

Download the hybrid kit to your client system and unzip it to a unique directory. For example:

```
$ ls *.zip
e4fd7216693f50360169492633ab0122-override.zip
$ unzip e4fd7216693f50360169492633ab0122-override.zip -d e4fd7216693f50360169492633ab0122
$ cd e4fd7216693f50360169492633ab0122
$ ls
hybridOverride.yaml  istioOverride.yaml
```

## Generate a key pair and secret for the domain edge gateway

To expose an HTTPS endpoint of a service within your environment to external traffic, you need a public certificate and private key for the domain where your environment is hosted, and a TLS secret based on the key pair.

1. Create an X.509 certificate and key for your domain (for example, using [Let's Encrypt](https://letsencrypt.org/)).
    - The domain certificate must match the domain (FQDN) of your environment.
    - The public key certificate must be PEM encoded and match the given private key.
1. Create the Istio namespace. This is the namespace where Istio will be deployed.

    Usage: `kubectl create namespace NAMESPACE_NAME`

    - The default value of `NAMESPACE_NAME` is `istio-system` and this value is used later when the helm upgrade deployment steps are executed in [Deploy the service mesh and Axway mesh agents](#deploy-the-service-mesh-and-axway-mesh-agents).

    Example:

    ```
    $ kubectl create namespace istio-system
    namespace/istio-system created
    ```
1. Create a Kubernetes TLS secret to hold the public certificate and private key, and deploy it into the Istio namespace.

    Usage: `kubectl create secret tls SECRET_NAME -n NAMESPACE_NAME --key /PATH/TO/KEY/FILE --cert /PATH/TO/CERT/FILE`

    - `SECRET_NAME` must match the field `secretName` in the `istioOverride.yaml` Helm chart that you downloaded from AMPLIFY Central as part of the hybrid kit. The `secretName` in the Helm chart is generated from your domain name, for example, `kubernetes-cluster-example-certs` for the domain `kubernetes-cluster.example.com`.
    
    Example:

    ```
    $ kubectl create secret tls kubernetes-cluster-example-certs -n istio-system --key kubernetes-cluster.example.com.key.pem --cert kubernetes-cluster.example.com.cert.pem
    secret/kubernetes-cluster-example-certs created
    $ kubectl get secrets -n istio-system
    NAME                               TYPE                                  DATA   AGE
    kubernetes-cluster-example-certs   kubernetes.io/tls                     2      4m
    default-token-jvw9m                kubernetes.io/service-account-token   3      27m
    ```

## Generate key pairs and secrets for the Axway mesh agents

Before you can deploy the Axway mesh agents in your environment, you must generate key pairs and make those keys available to Kubernetes in the namespace where the agents will be deployed. For more information on Axway mesh agents, see [Axway mesh agents](/docs/central/hybrid_overview/#axway-mesh-agents).

### What are these keys used for?

Mesh agents use service accounts when communicating from your environment to the AMPLIFY Central SaaS control plane. A service account is provisioned in AMPLIFY Central when you create a new environment in the AMPLIFY Central UI. When a mesh agent starts for the first time it uses a one-time credential to authenticate itself to AMPLIFY Central. The agent registers a public key with AMPLIFY Central, and the agent must have access to the associated private key during registration.

AMPLIFY Central uses the public key to authenticate signed JWT tokens from the agent. The agent signs the JWT token with its private key, and the agent private key never leaves your environment. This registration step uses a one-time registration access token (`registrationToken`) that is contained in the `hybridOverride.yaml` Helm chart that you downloaded from AMPLIFY Central as part of the hybrid kit.

### Generate key pair for SDA

Use `openssl` to generate a public certificate and private key for the service discovery agent (SDA) . The following example uses the password `changeme`:

```
$ mkdir sdacerts
$ cd sdacerts/
$ echo -n "changeme" > password
$ openssl genrsa -des3 -out private_key.pem -passout file:password 2048
Generating RSA private key...
$ openssl rsa -pubout -in  private_key.pem -passin file:password -out public_key.der -outform der && base64 public_key.der > public_key
writing RSA key
```

### Generate key pair for CSA

Use `openssl` to generate a public certificate and private key for the configuration synchronization agent (CSA):

```
$ mkdir csacerts
$ cd csacerts/
$ openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
...
$ openssl rsa -pubout -in private_key.pem -out public_key.der -outform der && base64 public_key.der > public_key
writing RSA key
```

### Create namespace for mesh agents

Create the namespace where the Axway mesh agents will be deployed.

Usage: `kubectl create namespace NAMESPACE_NAME`

- The default value for `NAMESPACE_NAME` is `apic-control` and this value is used later when the helm upgrade deployment steps are executed in [Deploy the service mesh and Axway mesh agents](#deploy-the-service-mesh-and-axway-mesh-agents).

Example:

```
$ kubectl create namespace apic-control
namespace/apic-control created
```

### Create and deploy Kubernetes secrets

As the mesh agents are running within Kubernetes, you must create Kubernetes secrets for the agents' public certificates and private keys, and store them in the secret store so that the mesh agents can locate them.

Create Kubernetes secrets to hold the mesh agents' public certificates and private keys, and deploy them in the mesh agent namespace:

Usage: `kubectl create secret generic SECRET_NAME --namespace NAMESPACE_NAME  --from-file=publicKey=/PATH/TO/PUBLIC/KEY/FILE --from-file=privateKey=/PATH/TO/PRIVATE/KEY/FILE  --from-file=password=PASSWORD_FILE --from-literal=password=PASSWORD -o yaml`

- Each `SECRET_NAME` must match the corresponding SDA or CSA field `keysSecretName` in the `hybridOverride.yaml` Helm chart that you downloaded from AMPLIFY Central as part of the hybrid kit.
The SDA default value of `keysSecretName` is `sda-secrets`.
The CSA default value of `keysSecretName` is `csa-secrets`.
To change the secret store names, edit the `keysSecretName` values in the `hybridOverride.yaml` file before you execute the helm upgrade deployment steps.

Example for SDA:

```
$ cd sdacerts/
$ kubectl create secret generic sda-secrets --namespace apic-control --from-file=publicKey=public_key --from-file=privateKey=private_key.pem --from-file=password="password" -o yaml
```

Example for CSA:

```
$ cd csacerts/
$ kubectl create secret generic csa-secrets --namespace apic-control --from-file=publicKey=public_key --from-file=privateKey=private_key.pem --from-literal=password="" -o yaml
```

Verify that the secrets are deployed in the `apic-control` namespace:

```
$ kubectl get secrets -n apic-control
NAME                  TYPE                                  DATA   AGE
csa-secrets           Opaque                                3      29s
default-token-f26bp   kubernetes.io/service-account-token   3      4m
sda-secrets           Opaque                                3      3m
```

## Deploy the service mesh and Axway mesh agents

After you have created the key pairs and secrets, deploy the Axway proprietary service mesh into your environment:

1. To ensure that you have the latest Axway Helm charts, update your Helm repositories:

   ```
   $ helm repo up
   Hang tight while we grab the latest from your chart repositories...
   ...Skip local chart repository
   ...Successfully got an update from the "axway" chart repository
   Update Complete. ⎈ Happy Helming!⎈
   ```

1. Change to the directory where you unzipped the hybrid kit:

   ```
   $ cd e4fd7216693f50360169492633ab0122/
   ```

1. Deploy Istio. This step can take several minutes to complete.

    Usage: `helm upgrade --install --namespace NAMESPACE_NAME RELEASE CHART`

    Example 1: Install istio-init
   
    ```
      $ helm upgrade --install --namespace istio-system istio axway/istio-init
      Release "istio-init" does not exist. Installing it now.
      NAME:   istio-init
      LAST DEPLOYED: Tue Mar  5 08:44:59 2019
      NAMESPACE: istio-system
      STATUS: DEPLOYED

      RESOURCES:
      ==> v1/ClusterRole
      NAME                     AGE
      istio-init-istio-system  0s

      ==> v1/ClusterRoleBinding
      NAME                                        AGE
      istio-init-admin-role-binding-istio-system  0s

      ==> v1/ConfigMap
      NAME          DATA  AGE
      istio-crd-10  1     0s
      istio-crd-11  1     0s

      ==> v1/Job
      NAME               COMPLETIONS  DURATION  AGE
      istio-init-crd-10  0/1          0s        0s
      istio-init-crd-11  0/1          0s        0s

      ==> v1/Pod(related)
      NAME                     READY  STATUS             RESTARTS  AGE
      istio-init-crd-10-bxrv8  0/1    ContainerCreating  0         0s
      istio-init-crd-11-d49db  0/1    ContainerCreating  0         0s

      ==> v1/ServiceAccount
      NAME                        SECRETS  AGE
      istio-init-service-account  1        0s
    ```

    Usage: `helm upgrade --install --namespace NAMESPACE_NAME RELEASE CHART -f /PATH/TO/OVERRIDE/VALUES`

    Example 2: Install istio

    ```
      $ helm upgrade --install --namespace istio-system istio axway/istio -f ./istioOverride.yaml
      Release "istio" does not exist. Installing it now.
      NAME:   istio
      LAST DEPLOYED: Tue Mar  5 08:44:59 2019
      NAMESPACE: istio-system
      STATUS: DEPLOYED
    ```

    This example uses the `istio` Helm chart from the `axway` Helm repository, with override values from the `istioOverride.yaml` Helm chart that you downloaded from AMPLIFY Central as part of the hybrid kit.

1. Verify that Istio is deployed successfully:

    ```
    $ kubectl get services -n istio-system
    ```

    The output of this command should list an domain edge gateway and a number of Istio services.

1. Deploy the Axway mesh agents. This step can take several minutes to complete.

    Usage: `helm upgrade --install --namespace NAMESPACE_NAME RELEASE CHART -f /PATH/TO/OVERRIDE/VALUES [OPTIONS]`

    Example:

    ```
    $ helm upgrade --install --namespace apic-control apic-hybrid axway/apicentral-hybrid -f ./hybridOverride.yaml --set observer.enabled=true --set observer.filebeat.sslVerification=none
    Release "apic-hybrid" does not exist. Installing it now.
    NAME:   apic-hybrid
    LAST DEPLOYED: Tue Mar  5 10:57:27 2019
    NAMESPACE: apic-control
    STATUS: DEPLOYED
    ```

    {{< alert title="Note" color="primary" >}}The `observer.enabled` and `observer.filebeat.sslVerification` options are required to enable collection of API usage and API traffic metrics from your environment. {{< /alert >}}

1. Verify that the mesh agents are deployed in the `apic-control` namespace:

    ```
    $ kubectl get services -n apic-control
    ```

    The output of this command should list the mesh agent services.
1. Verify that the list demo service is deployed in the `apic-demo` namespace:
   
    ```
    $ kubectl get services -n apic-demo
    ```

    The output of this command should list the demo list service.

1. Verify that your environment is now connected in AMPLIFY Central UI:

    ![Connected environment in AMPLIFY Central](/Images/central/hybrid__env_connected.png)

## Create and test an API proxy for the demo service

The list demo service is now deployed in your hybrid environment. You can create an API proxy for the API exposed by the demo service, in much the same way as you would for any other API. Watch the short animation to learn how.

![Create a proxy for API exposed by microservice](/Images/central/hybrid_env_proxy_demo.gif)

You can test the API proxy in AMPLIFY Central UI or using a REST client. The following example uses `curl` to send a `GET` request to the `/list` endpoint:

Example:
```
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

## Review

You have learned how to add your private cloud hybrid environment to AMPLIFY Central, and how to create and test an API proxy for an API exposed by a demo microservice deployed in the hybrid environment.
