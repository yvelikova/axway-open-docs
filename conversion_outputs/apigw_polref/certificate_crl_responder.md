{
"title": "CRL responder",
"linkTitle": "CRL responder",
"date": "2019-10-17",
"description": "This filter enables API Gateway to behave as Certificate Revocation List (CRL) responder, which returns CRLs to clients. This filter imports the CRL from a specified URL. You can also configure it to periodically retrieve the CRL from this URL to ensure that it always has the latest version. "
}
﻿
<div id="p_certificate_crl_responder_over">

Overview
--------

This filter enables API Gateway to behave as Certificate Revocation List (CRL) responder, which returns CRLs to clients. This filter imports the CRL from a specified URL. You can also configure it to periodically retrieve the CRL from this URL to ensure that it always has the latest version.

</div>

<div id="p_certificate_crl_responder_conf">

Configuration
-------------

Configure the following fields on the **CRL Responder**
window:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**CRL Import URL**:\
Enter the full URL of the CRL that you want to return to clients. Alternatively, browse to the location of the CRL file by clicking the browse button on the right.

**Automatic CRL Update Preferences**:\
Because keeping up-to-date with the latest list of revoked certificates is crucial in any *trust network*
, it is important that you configure the filter to retrieve the latest version of the CRL on a regular basis. The following automatic update options are available:

-   **Do not update**:\
    The CRL is not automatically updated.
-   **Update on "next update" date**:\
    The CRL published by the CA contains a *Next Update*
    date, which indicates the next date on which the CA publishes the CRL. You can choose to dynamically retrieve the updated CRL on the Next Update date by selecting this option. This effectively synchronizes the server with the CA updates.
-   **Update every number of days**:\
    The CRL is updated after the specified number of days has elapsed (for example, every `3`
    days).
-   **Trigger update on cron expression**:\
    You can enter a cron expression to determine when to perform the automatic update.

</div>
