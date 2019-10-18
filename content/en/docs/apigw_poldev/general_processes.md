{
"title": "Configure API Gateway instances",
"linkTitle": "Configure API Gateway instances",
"date": "2019-10-17",
"description": "This topic shows how to configure a running instance of the API Gateway. You can configure the options described in the following sections on the API Gateway instance in the Policy Studio tree (for example, under **Environment Configuration** > **Listeners** > **API Gateway**)."
}
﻿
<div id="p_general_processes_over">

Overview
--------

This topic shows how to configure a running instance of the API Gateway. You can configure the options described in the following sections on the API Gateway instance in the Policy Studio tree (for example, under **Environment Configuration** > **Listeners** > **API Gateway**).

</div>

<div id="p_general_processes_remote_host">

Add remote hosts
----------------

Remote host settings configure the way in which the API Gateway routes to another host machine. For example, if a destination server may not fully support HTTP 1.1, you can configure **Remote Host**
settings for the server to optimize the way in which the API Gateway sends messages to it. Similarly, if the server requires an exceptionally long timeout, you can configure this in the **Remote Host**
settings.

For more details, see [*Configure remote host settings* on page 1](general_remote_hosts.htm).

</div>

<div id="p_general_processes_interfaces">

Add HTTP services
-----------------

You can add a container for HTTP-related services, including HTTP and HTTPS Interfaces, Directory Scanners, Static Content Providers, Servlet Applications, and Packet Sniffers.

HTTP services act as a container for all HTTP-related interfaces to the API Gateway's core messaging pipeline. You can configure HTTP and HTTPS interfaces to accept plain HTTP and SSL messages respectively. A relative path interface is available to map requests received on a particular URI or path to a specific policy. The Static Content Provider interface can retrieve static files from a specified directory, while the Servlet Application enables you to deploy servlets under the service.

Finally, the Packet Sniffer interface can read packets directly of the network interface, assemble them into HTTP messages, and dispatch them to a particular policy. [*Configure HTTP services* on page 1](general_services.htm)
explains how to configure the available HTTP interfaces.

</div>

<div id="p_general_processes_smtp_interfaces">

Add SMTP services
-----------------

Simple Mail Transfer Protocol (SMTP) support enables the API Gateway to receive email and to act as a mail relay. The API Gateway can accept email messages using the SMTP protocol, and forward them to a mail server. You can also configure optional policies for specific SMTP commands (for example, `HELO/EHLO`
and `AUTH`).

[*Configure SMTP services* on page 1](general_smtp_services.htm)
explains how to configure SMTP services, interfaces, and handler policies.

</div>

<div id="p_general_processes_file_transfer">

Add file transfer services
--------------------------

You can configure the API Gateway to listen for remote clients that connect to it as a file server. This enables the API Gateway to apply configured policies on transferred files (for example, for schema validation, threat detection or prevention, routing, and so on). The API Gateway supports File Transfer Protocol (FTP), FTP over SSL (FTPS), and Secure Shell FTP (SFTP).

[*Configure a file transfer service* on page 1](general_file_transfer.htm)
explains how to configure the API Gateway as a file transfer service.

</div>

<div id="p_general_processes_cron_scheduling">

Add policy execution scheduling
-------------------------------

Policy execution scheduling enables you to schedule the execution of any policy on a specified date and time in a recurring manner. The API Gateway provides a preconfigured library of schedules to select from. You can also add your own schedules to the library.

[*Policy execution scheduling* on page 1](general_cron_schedule.htm)
explains how to add a policy execution schedule, and how to add schedules.

</div>

<div id="p_general_processes_messaging">

Configure JMS messaging system
------------------------------

You can configure the API Gateway to read JMS messages from a JMS queue or topic, run them through a policy, and then route onwards to a web service or JMS queue or topic.

The API Gateway can consume a JMS queue or topic as a means of passing XML messages to its core message processing pipeline. When the message has entered the pipeline, it can be validated against all authentication, authorization, and content-based message filters. Having passed all configured message filters, it can be routed to a destination web service over HTTP, or it can be dropped back on to a JMS queue or topic using the **Messaging System**
connection filter.

For more details, see [*Configure messaging services* on page 1](general_messaging.htm).

</div>

<div id="p_general_processes_aws_poller">

Add Amazon SQS queue listener
-----------------------------

The **Amazon SQS Queue Listener**
enables you to poll an Amazon SQS queue for messages at a specified rate. When messages are retrieved from the queue, they can be passed to a specified policy for processing.

For more details, see [*Configure Amazon SQS queue listener* on page 1](general_aws_poller.htm).

</div>

<div id="p_general_processes_ftp_scan">

Add FTP poller
--------------

The **FTP Poller**
enables you to query and retrieve files by polling a remote file server. When files are retrieved, they can be passed into the API Gateway core message pipeline for processing. For example, this is useful in cases where an external application drops files on to a remote file server, which can then be validated, modified, or routed on over HTTP or JMS by the API Gateway.

For more details, see [*Configure an FTP poller* on page 1](general_ftp_scanner.htm).

</div>

<div id="p_general_processes_dir_scan">

Add directory scanner
---------------------

The **Directory Scanner**
reads XML files from a specified directory and dispatches them to a selected policy. This enables you to search a local directory for XML files, which can then be fed into a security policy for validation. Typically, XML files are transferred by FTP or saved to the file system by another application. The API Gateway can then pick these files up, run the full array of authentication, authorization, and content-based filters on the messages, and then route them over HTTP or JMS to a back-end system.

For more details, see [*Configure directory scanner* on page 1](general_directory_scanner.htm).

</div>

<div id="p_general_processes_pop_client">

Add POP client
--------------

The **POP Client**
enables you to poll a POP mail server to read email messages from it, and pass them into a policy for processing.

For more details, see [*Configure a POP client* on page 1](general_pop_client.htm).

</div>

<div id="p_general_processes_tibco">

Configure TIBCO
---------------

You can configure a TIBCO Rendezvous
listener for real-time messaging.

For more details, see [*TIBCO Rendezvous listener* on page 1](connector_rendezvous_listener.htm).

</div>

<div id="p_general_processes_settings">

API Gateway settings
--------------------

You can configure per-instance global configuration settings by clicking the **Environment Configuration** > **Server Settings**
node in the Policy Studio tree. For example, these include settings for timeouts, caches, logging, monitoring, security, and so on.

For more details on configuring API Gateway instance settings, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

</div>

<div id="p_general_process_crypto_acc">

Cryptographic acceleration
--------------------------

The API Gateway can leverage the OpenSSL Engine API to offload complex cryptographic operations (for example, RSA and DSA) to a hardware-based cryptographic accelerator, and to act as an extra layer of security when storing private keys on a Hardware Security Module (HSM).

The API Gateway uses OpenSSL to perform cryptographic operations, such as encryption and decryption, signature generation and validation. OpenSSL exposes an *Engine API*, which enables you to plug in alternative implementations of some or all of the cryptographic operations implemented by OpenSSL. OpenSSL can, when configured appropriately, call the engine's implementation of these operations instead of its own.

For more information on configuring API Gateway to use an OpenSSL engine, see [*Cryptographic acceleration* on page 1](general_crypto_accel.htm).

</div>
