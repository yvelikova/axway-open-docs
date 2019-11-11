{
"title": "DSS signature verification",
"linkTitle": "DSS signature verification",
"date": "2019-10-17",
"description": "The **Verify Sig Web Service**\\nfilter enables the API Gateway to verify XML signatures as a service according to the OASIS Digital Signature Services (DSS) specification. The DSS specification describes how a client can send a message containing an XML signature to a DSS signature verification web service that can verify the signature and return the result of the verification to the client."
}
﻿
<div id="p_sec_services_dss_over">

Overview
--------

The **Verify Sig Web Service**
filter enables the API Gateway to verify XML signatures as a service according to the OASIS Digital Signature Services (DSS) specification. The DSS specification describes how a client can send a message containing an XML signature to a DSS signature verification web service that can verify the signature and return the result of the verification to the client.

The advantage of this approach is that the signature verification code is abstracted from the logic of the web service and does not have to be coded into the web service. Furthermore, a centralized DSS server provides a single implementation point for all XML signature related services, which can then be accessed by all services running your system. This represents a much more manageable solution that one in which the security layer is coded into each web service.

See also [*DSS signature generation* on page 1.](sec_services_sign.htm)

</div>

<div id="p_sec_services_dss_conf">

Configuration
-------------

Complete the following fields to configure the **Verify Sig Web Service**
filter.

**Name**:\
Enter a descriptive name for the filter to display in a policy.

**Find Signing Key**:\
The public key to be used to verify the signature can be retrieved from one of the following locations:

-   **Via KeyInfo in Message**:\
    The verification certificate can be located using the `<KeyInfo>`
    block in the XML signature. For example, the certificate could be contained in a `<BinarySecurityToken>`
    element in a WSSE security header. The `<KeyInfo>`
    section of the XML signature can then reference this `BinarySecurityToken`. The API Gateway can automatically resolve this reference to locate the certificate that contains the public key necessary to perform the signature verification.
-   **Via Selector Expression**:\
    The certificate used to verify the signature can be extracted from the message attribute specified in the selector expression (for example, `${certificate}`). The certificate must have been placed into the specified attribute by a predecessor of the **Verify Sig Web Service**
    filter. For more details on selector expressions, see
    [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Via Certificate in LDAP**:\
    The certificate used to verify the signature can be retrieved from an LDAP directory. Click the button next to this field, and select a previously configured LDAP directory in the tree. To add an LDAP directory, right-click the **LDAP Connections**
    tree node, and select **Add an LDAP Connection**
    . Alternatively, you can configure LDAP connections under the **External Connections**
    node in the Policy Studio tree. For more details, see
    [Configure LDAP directories](/csh?context=617&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
    .
-   **Via Certificate in Store**:\
    Finally, the verification certificate can be selected from the certificate store. Click the **Select**
    button to view the certificate that has been added to the store. Select the verification certificate by selecting the check box next to it in the table.

</div>
