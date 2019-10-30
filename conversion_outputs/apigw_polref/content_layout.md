{
"title": "Verify the WS-Policy security header layout",
"linkTitle": "Verify the WS-Policy security header layout",
"date": "2019-10-17",
"description": "Web services can use the WS-Policy specification to advertise the security requirements that clients must adhere to in order to successfully connect and send messages to the service. For example, a typical WS-Policy would mandate that the SOAP request body be signed and encrypted (using XML Signature and XML Encryption) and that a signed WS-Utility Timestamp must be present in a WS-Security header. "
}
﻿
<div id="p_content_layout_overview">

Overview
--------

Web services can use the WS-Policy specification to advertise the security requirements that clients must adhere to in order to successfully connect and send messages to the service. For example, a typical WS-Policy would mandate that the SOAP request body be signed and encrypted (using XML Signature and XML Encryption) and that a signed WS-Utility Timestamp must be present in a WS-Security header.

To guarantee that the security tokens used to *protect*
the message are added to the request in the most efficient and interoperable manner, WS-Policy uses the `<wsp:Layout>`
assertion. The semantics of this assertion are implemented by the **WS-Security Policy Layout**
filter and are outlined in the configuration details in the next section.

</div>

<div id="p_content_layout_conf">

Configuration
-------------

To check a SOAP message for a particular WS-Policy layout, complete the following fields:

**Name**:\
Enter an intuitive name for this filter to display in a policy (for example, `Check SOAPRequest for Lax Layout`).

**Actor**:\
Enter the name of the SOAP Actor/Role where the security tokens are present.

**Select Required Layout Type**:\
Select the required layout from the following WS-Policy options:

-   **Strict**:\
    Select this option to check that a SOAP message adheres to the WS-Policy strict layout rules. For more information, see the [WS-Policy specification](http://docs.oasis-open.org/ws-sx/ws-securitypolicy/v1.3/errata01/ws-securitypolicy-1.3-errata01-complete.html).
-   **Lax**:\
    Select this option if you want to ensure that the security tokens in the SOAP header have been inserted according to the Lax WS-Policy layout rules. The WS-Policy Lax rules are effectively identical to those stipulated by the SOAP Message Security specification.
-   **LaxTimestampFirst**:\
    This layout option ensures that the WS-Policy Lax rules have been followed, but also checks to make sure that the WS-Utility Timestamp is the first security token in the WS-Security header.
-   **LaxTimestampLast**:\
    This option ensures that the WS-Utility Timestamp is the last security token in the WS-Security header and that all other Lax layout rules have been followed.

**WS-Security Version**:\
The layout rules for WS-Security versions 1.0 and 1.1 are slightly different. Select the version of the layout rules to apply to SOAP requests. For details on the differences between these versions, see the WS-Security specifications ([WSS 1.0](http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0.pdf) and [WSS 1.1](http://www.oasis-open.org/committees/download.php/16790/wss-v1.1-spec-os-SOAPMessageSecurity.pdf)).

</div>
