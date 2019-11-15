{
"title": "Use Wireshark to trace Authentication Service Exchange and Ticket-Granting Service Exchange",
"linkTitle": "Use Wireshark to trace Authentication Service Exchange and Ticket-Granting Service Exchange",
"date": "2019-11-14",
"description": "You can use Wireshark to trace the Kerberos traffic between the Kerberos client and the Kerberos KDC (Windows Domain Controller). This traffic relates to the Kerberos Authentication Service Exchange (`AS-REQ` and `AS-REP`) and the Ticket-Granting Service Exchange (`TGS-REQ` and `TGS-REP`) when the client requests the TGT and service ticket."
}
﻿

You can use Wireshark to trace the Kerberos traffic between the Kerberos client and the Kerberos KDC (Windows Domain Controller). This traffic relates to the Kerberos Authentication Service Exchange (`AS-REQ` and `AS-REP`) and the Ticket-Granting Service Exchange (`TGS-REQ` and `TGS-REP`) when the client requests the TGT and service ticket.

If you have the Kerberos client and Kerberos service running on separate machines, run Wireshark on the same machine as the Kerberos client.

1.  Start a Wireshark capture with the following filter:
2.  ip.addr==<ip address of the Windows Domain Controller> and kerberos

3.  For example: ip.addr==10.0.7.78 and kerberos
4.  Restart API Gateway running the Kerberos client. If the Kerberos client is a 3rd party application, you most likely need to restart the application as well to ensure that a cached TGT and service ticket are not used.
5.  Send a message from the Kerberos client to the Kerberos service.

The Kerberos traffic is as follows:

![Example Kerberos traffice](/Images/IntegrationGuides/KerberosIntegration/Wireshark/wireshark_auth_svc_ex_ticket.png)

-   The `AS-REQ` and `AS-REP` are generated at the startup of API Gateway, because this is when the TGT for the Kerberos client is requested from the KDC. The TGT is only re-requested when it expires, because the TGT is cached in API Gateway.
-   The `TGS-REQ` and `TGS-REP` are created when the Kerberos client sends a message to the Kerberos service to request the service ticket for the Kerberos service. The `TGS-REQ` is only sent from the Kerberos client on the first request, or when the service ticket has expired, because the service ticket is cached in API Gateway.
-   The service ticket is encrypted with the secret key of the Kerberos service. To view the content decrypted, you must have the keytab of the Kerberos service imported in the Wireshark. See [Use Wireshark to trace SPNEGO Kerberos authentication between the client and service](wireshark_tracing_for_spnego_kerberos_auth_between.htm#Import_a_Kerberos_service_keytab_file_into_Wireshark).

