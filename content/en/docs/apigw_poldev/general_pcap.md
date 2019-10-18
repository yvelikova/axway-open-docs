{
"title": "Packet sniffers",
"linkTitle": "Packet sniffers",
"date": "2019-10-17",
"description": "*Packet Sniffers*\\n are a type of Passive Service. Rather than opening up a TCP port and *actively*\\n listening for requests, the Packet Sniffer *passively*\\n reads raw data packets off the network interface. The Sniffer assembles these packets into complete messages that can then be passed into an associated policy."
}
﻿
<div id="p_general_pcap_over">

*Packet Sniffers*
are a type of Passive Service. Rather than opening up a TCP port and *actively*
listening for requests, the Packet Sniffer *passively*
reads raw data packets off the network interface. The Sniffer assembles these packets into complete messages that can then be passed into an associated policy.

Because the Packet Sniffer operates passively (does not listen on a TCP port) and, therefore, completely transparently to the client, it is most useful for monitoring and managing web services. For example, the Sniffer can be deployed on a machine running a web server acting as a container for web services.

Assuming that the web server is listening on TCP port 80 for traffic, the Packet Sniffer can be configured to read all packets destined for port 80 (or any other port, if necessary). The packets can then be marshalled into complete HTTP/SOAP messages by the Sniffer and passed into a policy that logs the message to a database, for example.

{{< alert title="Note" color="primary" >}}On Linux platforms, API Gateway must be started by the root user to gain access to the raw packets. {{< /alert >}}

</div>

<div id="p_general_pcap_conf">

Configuration
-------------

Since Packet Sniffers are mainly for use as passive monitoring agents, they are usually created within their own HTTP Service Group. For example, you can create a new Service Group for this purpose by right-clicking on the API Gateway instance, selecting the **Add HTTP Services**
menu option, and entering `Packet Sniffer Group`
on the **HTTP Services**
dialog.

You can then add a relative path service to this Group by right-clicking the **Packet Sniffer Group**, and selecting the **Add Relative Path**
menu option. Enter a path in the field provided, and select the policy that you want to dispatch messages to when the Packet Sniffer detects a request for this path (after it assembles the packets). For example, if the relative path is configured as `/a`, and the Packet Sniffer assembles packets into a request for this path, the request is dispatched to the policy selected in the relative path service.

Finally, you can add the Packet Sniffer by right-clicking the **Packet Sniffer Group**
node, selecting **Packet Sniffer**, and then the **Add**
menu option. Complete the following fields on the **Packet Sniffer**
dialog:

**Device to Monitor**:\
Enter the name or identifier of the network interface that the Packet Sniffer is to monitor. The default entry is `any`.

{{< alert title="Note" color="primary" >}}This setting is only valid on Linux. On Linux-based systems, network interfaces are usually identified using names like `eth0`, `eth1`, and so on. On Windows, these names are more complicated (for example, `\Device\NPF_{00B756E0-518A-4144 ... }`.{{< /alert >}}
**Filter**:\
The Packet Sniffer can be configured to only intercept certain types of packets. For example, it can ignore all UDP packets, only intercept packets destined for port 80 on the network interface, ignore packets from a certain IP address, listen for all packets on the network, and so on.

The Packet Sniffer uses the libpcap
library filter language to achieve this. This language has a complicated but powerful syntax that allows you to *filter*
what packets are intercepted and what packets are ignored. As a general rule, the syntax consists of one or more expressions combined with conjunctions, such as `and`, `or`, and `not`. The following table lists a few examples of common filters and explains what they filter:

| Filter expresssion                           | Description                                                                           |
|----------------------------------------------|---------------------------------------------------------------------------------------|
| `port 80`                                    | Capture only traffic for the HTTP Port (`80`).                                        |
| `host 192.168.0.1`                           | Capture traffic to and from IP address `192.168.0.1`.                                 |
| `tcp`                                        | Capture only TCP traffic.                                                             |
| `host 192.168.0.1 and port 80`               | Capture traffic to and from port 80 on IP address `192.168.0.1`.                      |
| `tcp portrange 8080-8090`                    | Capture all TCP traffic destined for ports from 8080 through to 8090.                 |
| `tcp port 8080 and not src host 192.168.0.1` | Capture all TCP traffic destined for port 8080 but not from IP address `192.168.0.1`. |

The default filter of `tcp`
captures all TCP packets arriving on the network interface. For more information on how to configure filter expressions like these, refer to the `tcpdump`
man page available from <http://www.tcpdump.org/tcpdump_man.html>.

**Promiscuous Mode**:\
When listening in promiscuous mode, the Packet Sniffer captures all packets on the same Ethernet network, regardless of whether or not the packets are addressed to the network interface that the Sniffer is monitoring.

</div>
