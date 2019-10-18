{
"title": "TIBCO Rendezvous listener",
"linkTitle": "TIBCO Rendezvous listener",
"date": "2019-10-17",
"description": "TIBCO Rendezvous is a low latency messaging product for real-time high throughput data distribution applications. A message can be sent from the TIBCO daemon running on the local machine to a single TIBCO daemon running on a separate host machine or it can be broadcast to several daemons running on multiple machines. Each message has a subject associated with it, which acts as the *destination*\\nof the message. "
}
﻿
<div id="p_connector_rendezvous_listener_overview">

Overview
--------

TIBCO Rendezvous is a low latency messaging product for real-time high throughput data distribution applications. A message can be sent from the TIBCO daemon running on the local machine to a single TIBCO daemon running on a separate host machine or it can be broadcast to several daemons running on multiple machines. Each message has a subject associated with it, which acts as the *destination*
of the message.

A listener, which is itself a TIBCO daemon, can declare an interest in a subject on a specific daemon. Whenever a message is delivered to this subject on the daemon, the message is delivered to the listening daemon.

The API Gateway can act as a listener on a specific subject at a TIBCO daemon, in which case it said to be acting as a *consumer*
of TIBCO messages. Similarly, it can also send messages to a TIBCO daemon, effectively acting as a *producer*
of messages.

</div>

<div id="p_connector_rendezvous_listener_conf">

Configuration
-------------

You can configure a TIBCO Rendezvous Listener at the API Gateway instance level in the Policy Studio. To add a listener, perform the following steps: 

1.  In the Policy Studio tree, expand the **Environment Configuration** > **Listeners** node.
2.  Right-click the API Gateway instance, and select **TIBCO** > **Rendezvous Listener** > **Add**.
3.  Configure the following fields on the **TIBCO Rendezvous Listener**
    dialog:
    -   **TIBCO Settings tab**:\
        Enter the name of the subject that you want this consumer to listen for in the **Rendezvous Subject**
        field. Only messages addressed with this subject are consumed by the listener.
    -   Click the button next to the **TIBCO Rendezvous Daemon to use**
        field, and select a previously configured TIBCO Rendezvous Daemon to communicate with other TIBCO programs. To add a TIBCO Rendezvous Daemon, right-click the **TIBCO Rendezvous Daemons**
        tree node, and select **Add a TIBCO Rendezvous Daemon**. For more details, see *Configure TIBCO Rendezvous daemons* on page 1.
    -   **Policy to Use**:\
        When messages with the specified subject have been consumed they must be passed into a policy where they can be processed accordingly. Select the policy that you want to use to process consumed messages from the tree.

    >

</div>
