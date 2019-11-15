{
"title": "Wireshark tracing for Kerberos authentication",
"linkTitle": "Wireshark tracing for Kerberos authentication",
"date": "2019-11-14",
"description": "You can use Wireshark, a third-party trace tool, to view the SPNEGO token data sent between a Kerberos client and service when the client authenticates to the service. For more details on Wireshark and to download and install the program, go to [Wireshark web page](https://www.wireshark.org/ "Link to Wireshark website")."
}
﻿

You can use Wireshark, a third-party trace tool, to view the SPNEGO token data sent between a Kerberos client and service when the client authenticates to the service. For more details on Wireshark and to download and install the program, go to [Wireshark web page](https://www.wireshark.org/ "Link to Wireshark website").

In SPNEGO Kerberos authentication, Kerberos tokens are sent between the client and service using the `Authorization` HTTP header. Wireshark can parse, decrypt, and view the content of these tokens.

Because Wireshark can trace any application acting either as the Kerberos client or service, the information in this section is applicable for both API Gateway and third-party applications.

-   [Use Wireshark to trace authentication between the client and service](wireshark_tracing_for_spnego_kerberos_auth_between.htm)
-   [Use Wireshark to trace Authentication Service Exchange and Ticket-Granting Service Exchange](wireshark_tracing_for_auth_svc_exchange_and_ticket_demo.htm)

