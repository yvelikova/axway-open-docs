{
"title": "DSS signature generation",
"linkTitle": "DSS signature generation",
"date": "2019-10-17",
"description": "The **Sign Web Service**\\nfilter enables the API Gateway to generate XML signatures as a service according to the OASIS Digital Signature Services (DSS) specification. The DSS specification describes how a client can send a message containing an XML signature to a DSS signature web service that can sign the relevant parts of the message, and return the resulting XML signature to the client."
}
﻿
<div id="p_sec_services_sign_over">

Overview
--------

The **Sign Web Service**
filter enables the API Gateway to generate XML signatures as a service according to the OASIS Digital Signature Services (DSS) specification. The DSS specification describes how a client can send a message containing an XML signature to a DSS signature web service that can sign the relevant parts of the message, and return the resulting XML signature to the client.

The advantage of this approach is that the signature generation code is abstracted from the logic of the web service and does not have to be coded into the web service. Furthermore, a centralized DSS server provides a single implementation point for all XML signature related services, which can then be accessed by all services running in your API Gateway domain. This represents a much more manageable solution than one in which the security layer is coded into each service.

See also [*DSS signature verification* on page 1.](sec_services_dss.htm)

</div>

<div id="p_sec_services_sign_conf">

Configuration
-------------

Complete the following fields:.

**Name**:\
Enter a descriptive name for the filter to display in a policy.

**Signing Key**:\
Click to select a private key from the certificate store. This key is used to perform the signing operation.

</div>
