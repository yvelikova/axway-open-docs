{
"title": "Use Wireshark to trace authentication between the client and service",
"linkTitle": "Use Wireshark to trace authentication between the client and service",
"date": "2019-11-14",
"description": "SPNEGO tokens are used only for the Client-Server Authentication Exchange (the `AP_REQ` and `AP_REP` Kerberos messages) between the client and service. The `AP_REP` the Kerberos client sends to the Kerberos service contains a service ticket encrypted with the service\\u2019s secret key. To view this data decrypted, you must import the service\\u2019s keytab to Wireshark."
}
﻿

SPNEGO tokens are used only for the Client-Server Authentication Exchange (the `AP_REQ` and `AP_REP` Kerberos messages) between the client and service. The `AP_REP` the Kerberos client sends to the Kerberos service contains a service ticket encrypted with the service’s secret key. To view this data decrypted, you must import the service’s keytab to Wireshark.

The messages sent between the client and the KDC to acquire TGTs and service tickets are not covered by SPNEGO. For information on how to view these messages in Wireshark, see [Use Wireshark to trace Authentication Service Exchange and Ticket-Granting Service Exchange](wireshark_tracing_for_auth_svc_exchange_and_ticket_demo.htm).

-   [Import a Kerberos service keytab file into Wireshark](#Import)
-   [Capture and analyze a Wireshark trace](#Capture)

Import a Kerberos service keytab file into Wireshark
----------------------------------------------------

1.  If you do not yet have a keytab file for your Kerberos service, create one by running the following command on the Windows Domain Controller:
2.  ktpass -princ <Kerberos service>@<Kerberos realm> -pass \*\*\*\*\*\* -out wireshark.keytab -ptype KRB5\_NT\_PRINCIPAL
3.  For example:
    ktpass -princ ServiceGateway@AXWAY.COM -pass \*\*\*\*\*\* -out wireshark.keytab -ptype KRB5\_NT\_PRINCIPAL
4.  In Wireshark, click **Edit > Preferences > Protocols > KRB5**.
5.  Click **Browse**, and select the keytab file of your Kerberos service.
6.  ![Wireshark Preferences page](/Images/IntegrationGuides/KerberosIntegration/Wireshark/wireshark_tracing_spnego_kerb_protocol.png)
7.  Select **Try to decrypt Kerberos blobs**, and click **Apply**.
8.  Click **OK**.

Capture and analyze a Wireshark trace
-------------------------------------

If you have the Kerberos client and Kerberos service running on separate machines, run Wireshark on the same machine as the Kerberos client.

1.  Start a Wireshark capture with the following filter:
2.  ip.addr==<ip address of the machine running Kerberos service> and kerberos
3.  For example:
    ip.addr==10.142.9.178 and kerberos
4.  Send a message from the Kerberos client to the Kerberos service.\
    The Kerberos client calls the Kerberos service on the configured path (for example, `POST /service` in the Wireshark trace details).
5.  ![Wireshark trace details example](/Images/IntegrationGuides/KerberosIntegration/Wireshark/wireshark_tracing_spnego_kerb_path.png)
6.  Select one of the `POST /<path>` lines in the top panel, and open the `Hypertext Transfer Protocol` in the lower panel.
7.  To view the contents of the SPNEGO token sent from the Kerberos client to the Kerberos service, open the `Authorization` HTTP header. For example:
8.  ![Example SPNEGO token contents](/Images/IntegrationGuides/KerberosIntegration/Wireshark/wireshark_tracing_spnego_kerb_viewtoken.png)
9.  To view the response SPNEGO token the Kerberos service sends to the Kerberos client in the `WWW-Authenticate HTTP` header, select one of the `HTTP/1.1 200 OK` lines in the top panel, and expand the `Hypertext Transfer Protocol` in the lower panel. For example:
10. ![Example response SPNEGO token contents](/Images/IntegrationGuides/KerberosIntegration/Wireshark/wireshark_tracing_spnego_kerb_viewresptoken.png)
11. When tracing credential delegation, you must set the `forwardable` flag and the `delegFlag` in the `reqFlag` to `true` in the tickets.
12. ![](/Images/IntegrationGuides/KerberosIntegration/Wireshark/wireshark_tracing_spnego_kerb_delegation_flags.png)

