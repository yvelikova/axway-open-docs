{
"title": "IP address authentication",
"linkTitle": "IP address authentication",
"date": "2019-10-17",
"description": "You can configure the API Gateway to allow or deny machines, or groups of machines, access to resources based on their IP addresses. The main table on the window shows the IP addresses from which the API Gateway accepts or denies messages depending on what is configured."
}
﻿
<div id="p_authn_ip_address_overview">

Overview
--------

You can configure the API Gateway to allow or deny machines, or groups of machines, access to resources based on their IP addresses. The main table on the window shows the IP addresses from which the API Gateway accepts or denies messages depending on what is configured.

The **IP Address**
authentication filter uses the value stored in the `http.request.clientaddr`
message attribute to determine whether to allow or deny access. This message attribute contains the remote host address from the TCP socket used in the connection between the client and the API Gateway.

</div>

<div id="p_authn_ip_address_conf">

Configuration
-------------

Configure the following fields:

**Name**:\
Enter a name for the filter to display in a policy.

**IP Addresses**:\
You can add IP addresses by clicking the **Add**
button, which displays the **Add IP Filter**
dialog. Enter an **IP Address**
and **Subnet Mask**
to indicate a network to filter.

Messages sent from hosts belonging to this network are accepted or rejected based on what is configured in the section below. A **Subnet Mask**
of `255.255.255.255`
can be used to filter specific IP addresses. For more details, see [*Configure subnet masks* on page 1](#Configur).

{{< alert title="Note" color="primary" >}}If requests are made across a proxy, portal, or other such intermediary, the API Gateway filters on the IP address of the intermediary. Therefore, you should enter the IP address of the intermediary on this window, and not that of the user or client machine.{{< /alert >}}
You can edit and remove existing IP addresses by selecting the **Edit**
and **Remove**
buttons.

**Access**:\
Depending on whether the **Allow Access**
or **Deny Access**
radio button is checked, the IP addresses listed in the table are allowed or denied access to the web service.

</div>

<div id="p_authn_ip_address_subnets">

Configure subnet masks
----------------------

An IP address is normally represented by a string of four numbers separated by periods (for example, `192.168.0.20`). Each number is normally represented as the decimal equivalent of an 8-bit binary number, which means that each number can take any value between 0 (all 8 bits cleared) and 255 (all 8 bits set).

A *subnet mask*
(or netmask) is also a set of four number blocks separated by periods, each of which has a value in the range 0-255. Every IP address consists of two parts: the network address and the host number. The netmask is used to determine the size of these two parts. The positions of the bits set in the netmask represent the space reserved for the network address, while the bits that are cleared represent the space reserved for the host number. The netmask determines the range of IP addresses.

The following examples illustrate how netmasks work in practice.

<div>

### Example 1 – Specify a range of IP addresses

To allow requests from the following IP addresses:

`192.168.0.16`, `192.168.0.17`, `192.168.0.18`, and `192.168.0.19`.\

Use the following address and netmask combination:

`192.168.0.16/255.255.255.252`

In more detail, the binary representation of the netmask is as follows:\

`11111111.11111111.11111111.11111100`\

The top 30 bits of the netmask indicate the network and the last 2 bits refer to the host on the network. These last 2 bits allow 4 different addresses as shown in the worked example below.

When the API Gateway receives a request from a certain IP address, the API Gateway performs a logical AND on the client IP address and the configured netmask. It also does a logical AND with the IP address entered in the IP Address filter and the configured subnet mask. If the AND-ed binary values are the same, the request from the IP address can be considered in the same network range as that configured in the filter.

The following worked example illustrates the mechanics of the IP address filtering. It assumes that you have entered the following in the IP Address and Netmask fields in the IP Address filter:

| Field          | Value             |
|----------------|-------------------|
| **IP Address** | `192.168.0.16`    |
| **Net Mask**   | `255.255.255.252` |

    Step 1: AND the IP address and Netmask configured in the IP Address Filter:
    11000000.10100000.00000000.00010000 (192.168.0.16)
    AND
    11111111.11111111.11111111.11111100 (255.255.255.252)
    =========================================
    11000000.10100000.00000000.00010000
    Step 2: Request is received from 192.168.0.18:
    11000000.10100000.00000000.00010010 (192.168.0.18)
    AND
    11111111.11111111.11111111.11111100 (255.255.255.252)
    =========================================
    11000000.10100000.00000000.00010000
    ===> AND-ed value is equal to the result for 192.168.0.16.
    ===> Therefore the client IP address is inside the configured range.
    Step 3: Request is received from 192.168.0.20:
    11000000.10100000.00000000.00010100 (192.168.0.20)
    AND
    11111111.11111111.11111111.11111100 (255.255.255.252)
    =========================================
    11000000.10100000.00000000.00010100
    ===> AND-ed value is NOT equal to the result for 192.168.0.16.
    ===> Therefore the client IP address is NOT inside the configured range.

</div>

<div>

### Example 2 – Specify an exact IP address

You can also specify an exact IP address by using a netmask of`255.255.255.255`. When this netmask is used, only requests from this client IP address is allowed or blocked, depending on what is configured in the filter. This example assumes that the following details have been configured in the IP Address filter:

Field
Value
**IP Address**
`192.168.0.36`
**Net Mask**
`255.255.255.255`
    Step 1: AND the IP address and Netmask configured in the IP Address Filter:
    11000000.10100000.00000000.00100100 (192.168.0.36)
    AND
    11111111.11111111.11111111.11111111 (255.255.255.255)
    =========================================
    11000000.10100000.00000000.00100100
    Step 2: Request is received from client with IP address of 192.168.0.37:
    11000000.10100000.00000000.00100101 (192.168.0.37)
    AND
    11111111.11111111.11111111.11111111 (255.255.255.255)
    =========================================
    11000000.10100000.00000000.00100101
    ===> AND-ed value is NOT equal to the result for 192.168.0.36
    ===> Therefore the client IP address is NOT inside the configured range.

</div>

</div>
