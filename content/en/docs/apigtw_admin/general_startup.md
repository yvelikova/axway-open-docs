{
"title": "Start and stop the API Gateway",
"linkTitle": "Start and stop the API Gateway",
"date": "2019-10-14",
"description": "This topic describes how to start and stop the Node Manager and API Gateway instance on the command line, on all platforms. It also describes how to start the Policy Studio graphical tool. For details on API Gateway components and concepts, see the \\n \\n \\n \\n . "
}
﻿

This topic describes how to start and stop the Node Manager and API Gateway instance on the command line, on all platforms. It also describes how to start the Policy Studio graphical tool. For details on API Gateway components and concepts, see the
[API Gateway Concepts Guide](/bundle/APIGateway_77_ConceptsGuide_allOS_en_HTML5)
.

You can also start and stop API Gateway instances using the API Gateway Manager web console. For more details, see [Manage API Gateway instances](managetopology.htm#Manage).

Prerequisites
-------------

Before you can start API Gateway, you must first create a new domain that includes an API Gateway instance. If you installed the QuickStart tutorial, a sample API Gateway domain is automatically configured in your installation. Otherwise, you must create a new domain. For more details, see [Configure an API Gateway domain](makegateway.htm).

If you are using Apache Cassandra, before starting API Gateway, you must first ensure that Cassandra is running. For details on installing and running Cassandra, see the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
.

Set passphrases
---------------

By default, data is stored unencrypted in the API Gateway configuration store. However, you can encrypt certain sensitive information such as passwords and private keys using a passphrase. When the passphrase has been set, this encrypts the API Gateway configuration data.

You must enter the passphrase when connecting to the API Gateway configuration data (for example, using the Policy Studio, or when the API Gateway starts up). For more details on configuring this passphrase, see [Configure an API Gateway encryption passphrase](general_passphrase.htm).

Start the Node Manager
----------------------

To start the Node Manager on Linux, complete the following steps:

1.  Open a shell at the `/posix/bin`
    directory of your API Gateway installation.
2.  Run the `nodemanager.sh`
    file, for example:
3.  If you are using an encryption passphrase, you are prompted for this passphrase. Enter the correct encryption passphrase and press Return. For more details, see [Configure an API Gateway encryption passphrase](general_passphrase.htm).

Start the API Gateway instance
------------------------------

To start the API Gateway instance and Policy Studio on Linux, perform the following steps:

Open a shell at the `/posix/bin`
directory of your API Gateway installation.

Use the `startinstance`
command to start API Gateway, for example:

startinstance -n "my\_server" -g "my\_group"
{{< alert title="Note" color="primary" >}}You must ensure that the `startinstance`
file has execute permissions. {{< /alert >}}

1.  If you are using an encryption passphrase, you are prompted for this passphrase. Enter the correct encryption passphrase and press Return. For more details, see [Set passphrases](#Set).
2.  When API Gateway has successfully started up, run the`policystudio.sh`
    file in your Policy Studio installation directory. For example:
3.  When Policy Studio is starting up, you are prompted for connection details for API Gateway.

You can enter the `startinstance`
command without any arguments to display the servers registered on the machine. For example:

``` {space="preserve"}
INSTALL_DIR/apigateway/posix/bin>startinstanceusage:"startinstance 
```

``` {space="preserve"}
[[-n instance-name -g group-name [instance-args]] | [directory-location [instance-args]]]"
```

``` {space="preserve"}
The API Gateway instances listed below are available to run on this machine as follows:
```

``` {space="preserve"}
startinstance -n "server1" -g "group1"
```

``` {space="preserve"}
startinstance -n "server2" -g "group2"
```

If you have a single API Gateway instance on the host on which you run `startinstance`, that instance starts when you specify no arguments.

### Startup options

You can specify the following optional instance arguments to the `startinstance`
command:

Option

Description

`-b <file>`

Specifies the boot-time trace destination.

`-d`

Runs as daemon/service.

`-h <directory>`

Specifies the service instance directory.

`-k`

Kills the instance .

`-P`

Prompts for a passphrase at startup.

`-q`

Runs in quiet mode (equivalent to `-Dquiet`).

`-v`

Changes to the installation instance directory on startup.

`-s`

Tests if the service is running .

`-e`

Specifies the end of arguments for `vshell`.

`-D prop[=value]`

Sets a configuration file property.

The `-d`
, `-s`
and `-k`
options are designed for use with the service controller (for example, traditional SVR4 init, systemd, upstart, and so on). The `-d`
option waits until the service is running before returning, and `-k`
waits for the process to terminate. This means that when used in a script, the completion of the command indicates that the operation requested has completed.

If the service is running, `-s`
will exit with a `0`
status code, and with `1`
otherwise. For example, you can use the following to print a message if the service is running:

startinstance -s -n InstanceName -g GroupName && echo Running

Connect to API Gateway in Policy Studio
---------------------------------------

When starting the Policy Studio, you are prompted for details on how to connect to the Admin Node Manager (for example, the server session, host, port, user name, and password). The default connection URL is:

https://*HOST*:8090/api

`HOST`
is the IP address or host name of the machine on which the API Gateway runs. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Stop API Gateway
----------------

To stop the API Gateway instance, you must specify the group and instance name to the `startinstance`
command along with the `-k`
option. For example:

./startinstance -g "my\_group" -n "my\_server" -k

Stop the Node Manager
---------------------

To stop the Node Manager, you must specify the `nodemanager`
command along with the `-k`
option. For example:

./nodemanager -k
