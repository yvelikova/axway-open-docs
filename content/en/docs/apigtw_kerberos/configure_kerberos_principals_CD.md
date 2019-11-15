{
"title": "Configure Kerberos principals",
"linkTitle": "Configure Kerberos principals",
"date": "2019-11-14",
"description": " This section describes how to add Kerberos principals for the end user, trusted Kerberos principal, and back-end Kerberos service for KCD using Policy Studio. For more information on working in Policy Studio, see the \\n \\n \\n ."
}
﻿

This section describes how to add Kerberos principals for the end user, trusted Kerberos principal, and back-end Kerberos service for KCD using Policy Studio. For more information on working in Policy Studio, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

1.  In the node tree, click **Environment Configuration > External Connections > Kerberos Principals**.
2.  Add a new Kerberos principal for the end user:
3.  -   **Name**: `End User Principal to Impersonate in KCD`
    -   **Principal Name**: `${authentication.subject.id}@AXWAY.COM`
    -   **Principal Type**: `NT_USER_NAME`

4.  Using a selector here enables you to impersonate multiple end users.
5.  Add a new Kerberos principal for the trusted Kerberos principal account as follows:
6.  -   **Name**: `TrustedAPIGateway for KCD`
    -   **Principal Name**: `TrustedAPIGateway@AXWAY.COM`
    -   **Principal Type**: `NT_USER_NAME`

7.  Add a new Kerberos principal for the back-end service account as follows:
8.  -   **Name**: `<Back-end service name>` (for example, `Back-end Kerberos Service`)
    -   **Principal Name**: `<Service Principal Name for the back-end service>` (for example, `HOST/BackEndService.axway.com@AXWAY.COM`)
    -   **Principal Type**: `NT_USER_NAME`

For more details on the fields and options in this configuration window, see
[Configure Kerberos principals](/csh?context=612&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

For the next steps, see [Configure API Gateway](gw_configuration_CD.htm).
