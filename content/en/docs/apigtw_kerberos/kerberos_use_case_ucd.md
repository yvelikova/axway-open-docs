{
"title": "API Gateway in unconstrained credentials delegation",
"linkTitle": "API Gateway in unconstrained credentials delegation",
"date": "2019-11-14",
"description": "When authenticating to API Gateway using Kerberos, a client application can delegate its Kerberos credentials to API Gateway. API Gateway acts as an intermediary between a Kerberos client and Kerberos back-end services, and requests service tickets to *any* other Kerberos service in the same Kerberos realm on behalf of the client. These service tickets can then be used to authenticate the original end user to the other Kerberos services. This type of Kerberos delegation is often called *unconstrained* or *open*."
}
﻿

When authenticating to API Gateway using Kerberos, a client application can delegate its Kerberos credentials to API Gateway. API Gateway acts as an intermediary between a Kerberos client and Kerberos back-end services, and requests service tickets to *any* other Kerberos service in the same Kerberos realm on behalf of the client. These service tickets can then be used to authenticate the original end user to the other Kerberos services. This type of Kerberos delegation is often called *unconstrained* or *open*.

-   **Client application**: Supports Kerberos authentication.
-   **Back-end service**: Requires Kerberos authentication with the end user's credentials. Multiple back-end services may exist.
-   **API Gateway**: Acts as both a Kerberos service and client, and authenticates to different back-end services as the end user.

API Gateway receives a request from the Kerberos client containing a SPNEGO token with the credentials to be delegated (the Ticket Granting Ticket (TGT)). The token also contains a service ticket that allows the Kerberos client to authenticate to API Gateway that is itself acting as a Kerberos service.

Using Kerberos authentication, API Gateway authenticates the Kerberos client. API Gateway then requests a service ticket to the back-end Kerberos service on behalf of the client, and authenticates to the back-end service as the original end user. The client application itself does not need to have any knowledge of any of the back-end services that API Gateway might invoke on its behalf.

![Diagram illustrating the unconstrained credential delegation.](/Images/IntegrationGuides/KerberosIntegration/cred_deleg_spnego/kerberos_use_case_UCD.png)

A safer method for credentials delegation in Kerberos authentication is *constrained* delegation. In constrained delegation with protocol transition, the Kerberos service can obtain a Kerberos service ticket to itself on behalf of a Kerberos principal (end user) without requiring the principal to initially authenticate using Kerberos. Constrained delegation also restricts which back-end services the Kerberos service can request Kerberos service tickets on behalf of the client. The credential delegation is only allowed to a constrained set of Kerberos services that are configured in the Kerberos Key Distribution Center (KDC). For more details, see [API Gateway in Kerberos constrained delegation](../KerberosConstrainedDelegation/kerberos_use_case_KCD.htm).

Prerequisites
-------------

Before you start configuration, you must have API Gateway installed on any machine with access to the Windows Domain Controller. The machine does *not* have to be a Windows machine that is part of the Windows Domain.

Configuration process
---------------------

The configuration process has the following steps:

1.  [Configure Active Directory](active_directory_configuration_ucd.htm)
2.  [Configure Kerberos principals](configure_kerberos_principals_in_ucd.htm)
3.  [Configure API Gateway policy](configure_inter_gw_ucd.htm)
4.  -   [Configure an intermediary Kerberos service](configure_inter_gw_ucd.htm#Configur)
    -   [Configure a Kerberos client for the delegated credentials](configure_inter_gw_ucd.htm#Configur2)
    -   [Configure a Kerberos profile for the intermediary Kerberos service](configure_inter_gw_ucd.htm#Configur3)
    -   [Configure an intermediary policy](configure_inter_gw_ucd.htm#Configur4)
    -   [Configure Kerberos system settings](configure_inter_gw_ucd.htm#Configur5)

### Example names

The example name for the intermediary Kerberos service used in this guide is `IntermediaryGateway`. You can use this name, or replace it with a name of your own.

The example Kerberos realm name `AXWAY.COM` is specific to the examples in this guide. Replace the example realm name with your own realm name.
