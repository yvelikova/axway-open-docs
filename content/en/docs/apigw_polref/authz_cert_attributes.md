{
"title": "Certificate attribute authorization",
"linkTitle": "Certificate attribute authorization",
"date": "2019-10-17",
"description": "The API Gateway can authorize access to a web service based on the X.509 attributes of an authenticated client's certificate. For example, a simple **Certificate Attributes**\\nfilter might only authorize clients whose certificates have a Distinguished Name (DName) containing the following attribute: `O=axway`. In other words, only `axway`\\nusers are authorized to access the web service."
}
﻿
<div id="p_authz_cert_attributes_overview">

Overview
--------

The API Gateway can authorize access to a web service based on the X.509 attributes of an authenticated client's certificate. For example, a simple **Certificate Attributes**
filter might only authorize clients whose certificates have a Distinguished Name (DName) containing the following attribute: `O=axway`. In other words, only `axway`
users are authorized to access the web service.

An X.509 certificate consists of a number of fields. The `Subject`
field is most relevant. It gives the DName of the client to which the certificate belongs. A DName is a unique name given to an X.500 directory object. It consists of a number of attribute-value pairs called Relative Distinguished Names (RDNs). Some of the most common RDNs and their explanations are as follows:

-   `CN`: CommonName
-   `OU`: OrganizationalUnit
-   `O`: Organization
-   `L`: Locality
-   `S`: StateOrProvinceName
-   `C`: CountryName

For example, the following is the DName of the *sample.p12*
client certificate supplied with API Gateway:

    CN=Sample Cert, OU=R&D, O=Company Ltd., L=Dublin 4, S=Dublin, C=IE

Using the **Certificate Attributes**
filter, it is possible to authorize clients based on attributes (for example, the `CN`, `OU`, or `C`
in the DName).

</div>

<div id="p_authz_cert_attributes_conf">

Configuration
-------------

Configure the following settings:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**X.509 Attributes**:\
To add a new X.509 attribute check, click the **Add**
button. In the **Add X.509 Attributes**
dialog, enter a comma-separated list of name-value pairs representing the X.509 attributes and their values (for example, `OU=dev,O=Company`).

The new attribute check is displayed in the **X.509 Attributes**
table. You can edit and delete existing entries by clicking the **Edit**
and **Remove**
buttons.

The **X.509 Attributes**
table lists a number of attribute checks to be run against the client certificate. Each entry tests a number of certificate attributes in such a way that the check only passes if all of the configured attribute values match those in the client certificate. In effect, the attributes listed in a single attribute check are AND-ed together.

For example, imagine the following is configured as an entry in the **X.509 Attributes**
table:

    OU=Eng, O=Company Ltd

If the API Gateway receives a certificate with the following DName, this attribute check passes because *all*
the configured attributes match those in the certificate DName:

    CN=User1, OU=Eng, O=Company Ltd, L=D4, S=Dublin, C=IECN=User2, OU=Eng, O=Company Ltd, L=D2, S=Dublin, C=IE

However, if the API Gateway receives a certificate with the following DName, the attribute check fails because the attributes in the DName do not match *all*
the configured attributes (the `OU`
attribute has the wrong value):

    CN=User1, OU=qa, O=Company Ltd, L=D4, S=Dublin, C=IE

The **X.509 Attributes**
table can contain several attribute check entries. In such cases, the attribute checks (the entries in the table) are OR-ed together, so that if any of the checks succeed, the overall **Certificate Attributes**
filter succeeds.

To summarize:

-   Attribute values within an attribute check only succeed if *all*
    the configured attribute values match those in the DName of the client certificate.
-   The filter succeeds if *any*
    of the attribute checks listed in the **X.509 Attributes**
    table succeed.

</div>
