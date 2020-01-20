{
"title": "RSA Access Manager integration",
"linkTitle": "RSA Access Manager integration",
"date": "2020-01-20",
"description": "RSA Access Manager (formerly RSA ClearTrust) provides Identity Management and access control services for web applications. It centrally manages access to web applications, ensuring that only authorized users are allowed access to resources. You can configure API Gateway to act as a client to the RSA Access Manager, and leverage the user information stored in RSA Access Manager for user authentication and authorization."
}
﻿

RSA Access Manager (formerly RSA ClearTrust) provides Identity Management and access control services for web applications. It centrally manages access to web applications, ensuring that only authorized users are allowed access to resources. You can configure API Gateway to act as a client to the RSA Access Manager, and leverage the user information stored in RSA Access Manager for user authentication and authorization.

API Gateway uses the **Access Manager** filter to query authorization information for a particular user on a given resource from RSA Access Manager and to make the authorization decision. If the user has been authorized for the resource in question, the request is allowed through to the service. Otherwise, the request is rejected. In addition, you can also configure an authentication filter to authenticate users against a RSA Access Manager authentication repository.

Integration with RSA Access Manager requires RSA Access Manager SDK version 6.2 or server installation libraries.

For more details on the product, see the [RSA Access Manager documentation](https://community.rsa.com/community/products/access-manager/server-62).

RSA Access Manager server connections
-------------------------------------

API Gateway can connect to a number of Access Manager authorization servers or dispatcher servers using *connection sets* (connection groups). A connection set consists of a globally configured set of servers that API Gateway connects to. API Gateway round-robins between groups of external servers, providing a high degree of failover. If one of the servers becomes unavailable, API Gateway can use one of the other servers in the group.

You can deploy multiple Access Manager authorization servers for load-balancing purposes. In this case, API Gateway first connects to a dispatcher server that returns a list of active authorization servers. If the first dispatcher server in the connection group is not available, API Gateway attempts to connect to the dispatcher server with the next highest priority in the group. If a dispatcher server has not been deployed,API Gateway can connect directly to an authorization server. API Gateway then attempts to connect to one of the authorization servers.

API Gateway attempts to connect to the listed servers according to the priorities assigned to them. For example, a connection group could include two high-priority servers, one medium-priority server, and one low-priority server configured. If API Gateway can successfully connect to the two high-priority servers, it alternates requests only between these two servers, and the other servers in the group are not used. However, if *both* high-priority servers are unavailable, API Gateway attempts to connect to the medium-priority server. Only if the medium-priority server fails as well, API Gateway connects to the low-priority server.

Flow description
----------------

1.  An end user attempts to access a resource protected with RSA Access Manager on API Gateway.
2.  API Gateway authenticates the end user against the RSA Access Manager authentication repository.
3.  API Gateway requests RSA Access Manager to make the security decision for the user.
4.  RSA Access Manager makes the security decision based on the user information, and returns the decision to API Gateway.
5.  API Gateway enforces the security decision.
6.  -   On success, API Gateway routes the message on to a configured target system.
    -   On failure, API Gateway blocks the message and returns an error to the end user.

Prerequisites
-------------

Before you start, you must have the following:

-   API Gateway installed
-   RSA Access Manager v6.2 installed and configured

Configuration process
---------------------

This guide provides a simple policy to demonstrate how API Gateway integrates with RSA Access Manager to authenticate and authorize users to specific resources. The example policy uses HTTP Basic to authenticate the end user, but you can replace it with another authentication mechanism, if required.

The following steps are required to integrate API Gateway with RSA Access Manager:

1.  [Add RSA Access Manager binaries to API Gateway](import_rsa_binaries.htm).
2.  [Configure RSA Access Manager connection](configure_rsa_connection.htm).
3.  [Configure an RSA Access Manager authentication repository](configure_rsa_repository.htm).
4.  [Configure API Gateway policy](configure_rsa_policy.htm).

