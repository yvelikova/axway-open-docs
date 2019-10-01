---
title: Step 3 - Generate domain SSL certificates
linkTitle: Step 3 Generate domain SSL certificates
date: 2019-09-18
description: 
---
To secure the communications between the Admin Node Manager and API Gateways, you can use the `gen_domain_cert.py` script to generate a self-signed CA certificate for a domain, or a Certificate Signing Request (CSR) to be signed by an external Certificate Authority (CA).

{{< alert title="Note" color="primary" >}}If you already have a domain certificate (for example, from another API Gateway installation) you can skip this section. You can specify your existing domain certificate (certificate and private key in .pem format) to the `build_anm_image.py`
and `build_gw_image.py`
scripts. You cannot use one domain certificate for both a container deployment and a classic deployment if they are running in parallel.{{< /alert >}}

## Generate domain certificates script options

You must specify the following as options when using the `gen_domain_cert.py` script:

* Domain identifier
* Passphrase for the domain private key

This script also supports additional options when generating certificates. For example:

* Specify a signing algorithm (SHA256, SHA384, or SHA512)
* Generate a CSR
* Specify custom values for the fields in the domain certificate (for example, organization)

For the latest script usage and options, run the script with no options, or with the `-h` option.

```
$ cd emt_containers-<version>
$ ./gen_domain_cert.py -h
```

The following examples show how you can use the script to generate domain certificates:

* [Generate a default certificate and key](#Generate)
* [Generate a self-signed certificate and key](#Generate2)
* [Generate a CSR](#Generate3)

## Generate a default certificate and key {#Generate}

The following example creates a certificate and private key using default values.

{{< alert title="Caution" color="warning" >}} Do not use default options on production systems. The `--default-cert` option is provided only as a convenience for development environments.{{< /alert >}}

``` 
$ cd emt_containers-<version>
$ ./gen_domain_cert.py --default-cert
```

This example creates a default certificate and private key:

* The certificate uses a domain identifier of `DefaultDomain`
* The certificate and key are stored in the `certs/DefaultDomain` directory
* The certificate uses a default passphrase

## Generate a self-signed certificate and key {#Generate2}

The following example creates a self-signed certificate and private key.

```
$ cd emt_containers-<version>
$ ./gen_domain_cert.py --domain-id=mydomain --pass-file=/tmp/pass.txt
```

This example creates a self-signed certificate and private key:

* The certificate uses a domain identifier of `mydomain`.
* The certificate and key are stored in the `certs/mydomain` directory
* The certificate uses a specified passphrase

## Generate a CSR {#Generate3}

The following example creates a certificate signing request (CSR).

* You must send the generated CSR to a CA for signing.
* When running the scripts to build Admin Node Manager or API Gateway images, specify the certificate and private key returned from the CA, and not the CSR.

```
$ cd emt_containers-<version>
$ ./gen_domain_cert.py --domain-id=mydomain --pass-file=/tmp/pass.txt --out=csr --O=MyOrg
```

This example creates a CSR that:

* Uses a domain identifier of `mydomain`
* Is stored in the `certs/mydomain` directory
* Uses a specified passphrase and organization
