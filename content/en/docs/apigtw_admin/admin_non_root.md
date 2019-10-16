{
"title": "Run API Gateway on privileged ports",
"linkTitle": "Run API Gateway on privileged ports",
"date": "2019-10-14",
"description": "API Gateway is run as a non-root user to prevent any potential security issues with running as the `root` user. This topic describes the steps you must perform to grant the required privileges to API Gateway processes running as non-root. "
}
﻿

API Gateway is run as a non-root user to prevent any potential security issues with running as the `root` user. This topic describes the steps you must perform to grant the required privileges to API Gateway processes running as non-root.

Before you begin
----------------

The examples in this topic are for a non-root user named `admin` and for an API Gateway installation at `/opt/Axway-7.8/apigateway`. If you have a different non-root user name or API Gateway installation, you must modify the examples accordingly.

Step 1 – Set API Gateway file ownership to non-root user
--------------------------------------------------------

The ownership of the API Gateway files must be set to the non-root user. You can change the user and group ownership of all files under the API Gateway installation directory, for example:

    # chown -R admin:admin /opt/Axway-7.8/apigateway

### SSL accelerators for HSM

When using a Hardware Security Module (HSM), the non-root user must have access to the device corresponding to the cryptographic accelerator or HSM card. For HSMs such as Cavium and Ultimaco, this means that you must have access to the following directories:

-   Cavium: `/dev/pkp_nle_drv`
-   Ultimaco: `/dev/cs2a`

For example, when using Cavium, an `admin` user using `/dev/pkp_nle_drv` should have the following permissions:

    crw-rw-r-- 1 root admin 126, 0 /dev/pkp_nle_dev

Step 2 – Patch vshell binary with static search paths
-----------------------------------------------------

When you enable processes running as non-root to listen on privileged ports using `setcap` (see [Step 4 – Enable API Gateway processes to listen on privileged ports](#Step)), certain environment variables are disabled as a security precaution. For this reason, you must make the locations of the API Gateway library files available to the operating system.

To patch the `vshell` binary with static search paths, perform the following steps:

1.  Use `patchelf` to patch the `vshell` binary with the absolute paths of the API Gateway library files. For example, run the following command:

``` {space="preserve"}
$ patchelf --force-rpath --set-rpath 
"$VDISTDIR/platform/jre/lib/amd64/server:
$VDISTDIR/platform/jre/lib/amd64:
$VDISTDIR/platform/jre/lib/amd64/jli:
$VDISTDIR/platform/lib/engines:
$VDISTDIR/platform/lib:
$VDISTDIR/ext/lib" 
$VDISTDIR/Linux.x86_64/bin/vshell
```

Alternatively you can use `chrpath`, for example:

``` {space="preserve"}
$ chrpath -r 
"$VDISTDIR/platform/jre/lib/amd64/server:
$VDISTDIR/platform/jre/lib/amd64:
$VDISTDIR/platform/jre/lib/amd64/jli:
$VDISTDIR/platform/lib/engines:
$VDISTDIR/platform/lib:
$VDISTDIR/ext/lib" 
$VDISTDIR/Linux.x86_64/bin/vshell
```

The examples use `$VDISTDIR` to refer to the absolute path where API Gateway is installed. You must set `$VDISTDIR` or modify the example before using it on your own environment. For example, to set `VDISTDIR` to your API Gateway installation directory:

``` {space="preserve"}
export VDISTDIR=/opt/Axway-7.8/apigateway
```

{{< alert title="Note" color="primary" >}}`patchelf` is a development and administration tool, and is not installed on systems by default. If you do not wish to install extra tools on your production environment, you can patch the `vshell` binary on another non-production system and move it to the production environment.{{< /alert >}}

Step 3 – Add API Gateway library paths to jvm.xml
-------------------------------------------------

You also need to add the API Gateway library paths to `jvm.xml`. To modify your `jvm.xml` file, perform the following steps:

1.  Open the `system/conf/jvm.xml` file in your API Gateway installation.
2.  Near the top of the file, insert a new line after the following line:
3.  <JVMSettings classloader="com.vordel.boot.ServiceClassLoader">

4.  Enter the following:
5.  ``` {space="preserve"}
    <VMArg name="-Djava.library.path=
    $VDISTDIR/$DISTRIBUTION/jre/lib/amd64/server:
    $VDISTDIR/$DISTRIBUTION/jre/lib/amd64:
    $VDISTDIR/$DISTRIBUTION/lib/engines:
    $VDISTDIR/ext/$DISTRIBUTION/lib:
    $VDISTDIR/ext/lib:
    $VDISTDIR/$DISTRIBUTION/jre/lib:
    system/lib:
    $VDISTDIR/$DISTRIBUTION/lib"/>
    ```

Step 4 – Enable API Gateway processes to listen on privileged ports
-------------------------------------------------------------------

API Gateway processes must be able to listen on Internet domain privileged ports (port numbers less than `1024`). You can use the `setcap` command to enable processes running as non-root to listen on privileged ports. In this case, you must set the `CAP_NET_BIND` capability on the `vshell` binary, which enables the following processes to listen on privileged ports:

-   API Gateway instance
-   Admin Node Manager
-   API Gateway Analytics

{{< alert title="Note" color="primary" >}}Using `setcap` to set this capability is supported from kernel 2.6.24 onwards. If the kernel version is before 2.6.33, you must enable `CONFIG_SECURITY_FILE_CAPABILITIES`.{{< /alert >}}

To set the capability on the `vshell` binary, run the following command:

``` {space="preserve"}
# sudo setcap 'cap_net_bind_service=+ep' /opt/Axway-7.8/apigateway/platform/bin/vshell
```

To verify that the permission has been set, run the following command:

``` {space="preserve"}
# getcap /opt/Axway-7.8/apigateway/platform/bin/vshell
/opt/Axway-7.8/apigateway/platform/bin/vshell = cap_net_bind_service+ep
```

{{< alert title="Caution" color="warning" >}}If you set this capability, you must remove it again before applying a service pack or uninstalling, as it results in the product binaries being locked.{{< /alert >}}

To remove the capability, run the following command:

``` {space="preserve"}
# sudo setcap -r /opt/Axway-7.8/apigateway/platform/bin/vshell 
```

Step 5 – Restart API Gateway
----------------------------

When you have completed the preceding steps, start API Gateway as the non-root user. For more information on starting API Gateway, see [Start and stop the API Gateway](general_startup.htm).
