{
"title": "TIBCO integration",
"linkTitle": "TIBCO integration",
"date": "2019-10-17",
"description": "The API Gateway ships with in-built support for TIBCO Rendezvous. The API Gateway can both produce and consume messages for TIBCO Rendezvous. This topic describes how to integrate TIBCO Rendezvous. "
}
﻿
<div id="p_connector_tibco_integration_overview">

Overview
--------

The API Gateway ships with in-built support for TIBCO Rendezvous. The API Gateway can both produce and consume messages for TIBCO Rendezvous. This topic describes how to integrate TIBCO Rendezvous.

</div>

<div id="p_connector_tibco_integration_rend">

TIBCO Rendezvous integration
----------------------------

The API Gateway can act as a producer and a consumer of TIBCO Rendezvous messages. In both cases, a Rendezvous daemon must be configured. This is responsible for communicating with other Rendezvous programs on the network.

**Producing TIBCO Rendezvous Messages**:\
You must perform the following steps to produce messages and send them to another Rendezvous program:

1.  Configure a Rendezvous daemon. For more information, see [*Configure TIBCO Rendezvous daemons* on page 1](connector_rendezvous_daemon.htm).
2.  Use a filter to route messages to TIBCO Rendezvous. For more information, see the **TIBCO Rendezvous** filter in the
    [API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
    .

**Consuming TIBCO Rendezvous Messages**:\
A TIBCO Rendezvous listener can be configured at the API Gateway instance level to consume Rendezvous messages. You must perform the following steps to consume Rendezvous messages:

1.  Configure a Rendezvous daemon. For more information, see [*Configure TIBCO Rendezvous daemons* on page 1](connector_rendezvous_daemon.htm).
2.  Configure a Rendezvous listener. For more information, see *TIBCO Rendezvous listener* on page 1.

</div>
