{
"title": "CA SOA Security Manager authorization",
"linkTitle": "CA SOA Security Manager authorization",
"date": "2019-10-17",
"description": "CA SOA Security Manager can authenticate end users and authorize them to access protected web resources. The API Gateway can interact directly with CA SOA Security Manager by asking it to make authorization decisions on behalf of end users that have successfully authenticated to the API Gateway. CA SOA Security Manager decides whether to authorize the user, and relays the decision back to the API Gateway where the decision is enforced. The API Gateway acts as a Policy Enforcement Point (PEP) in this situation, enforcing the authorization decisions made by the CA SOA Security Manager, which acts a Policy Decision Point (PDP)."
}
﻿
<div id="p_connector_tm_authz_over">

Overview
--------

CA SOA Security Manager can authenticate end users and authorize them to access protected web resources. The API Gateway can interact directly with CA SOA Security Manager by asking it to make authorization decisions on behalf of end users that have successfully authenticated to the API Gateway. CA SOA Security Manager decides whether to authorize the user, and relays the decision back to the API Gateway where the decision is enforced. The API Gateway acts as a Policy Enforcement Point (PEP) in this situation, enforcing the authorization decisions made by the CA SOA Security Manager, which acts a Policy Decision Point (PDP).

{{< alert title="Note" color="primary" >}}A **CA SOA Security Manager**
authentication filter must be invoked before a **CA SOA Security Manager**
authorization filter in a given policy. In other words, the end user must authenticate to CA SOA Security Manager before they can be authorized for a protected resource.{{< /alert >}}

</div>

<div id="p_connector_tm_authz_prereq">

Prerequisites
-------------

Integration with CA SOA Security Manager requires CA TransactionMinder SDK version 6.0 or later. You must add the required third-party binaries to your API Gateway and Policy Studio installations.

**Add third-party binaries to API Gateway**

To add third-party binaries to API Gateway, perform the following steps:

1.  Add the binary files as follows:
    -   Add `.jar`
        files to the `INSTALL_DIR/apigateway/ext/lib`
        directory.
    -   Add `.so`
        files to the `INSTALL_DIR/apigateway/<platform>/lib` directory.

    >
2.  Restart API Gateway.

**Add third-party binaries to Policy Studio**

To add third-party binaries to Policy Studio, perform the following steps:

1.  Select **Window > Preferences > Runtime Dependencies**
    in the Policy Studio main menu.
2.  Click **Add**
    to select a JAR file to add to the list of dependencies.
3.  Click **Apply**
    when finished. A copy of the JAR file is added to the `plugins`
    directory in your Policy Studio installation.
4.  Click **OK**.
5.  Restart Policy Studio with the `-clean` option. For example:
6.  > cd INSTALL\_DIR/policystudio/\
    > policystudio -clean

</div>

<div id="p_connector_tm_authz_conf">

Configuration
-------------

Configure the following fields on the **CA SOA Security Manager**
authorization filter:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Attributes**:\
If the end user is successfully authorized, the attributes listed here are looked up in CA SOA Security Manager, and returned to the API Gateway. These attributes are stored in the `attributes.lookup.list`
message attribute. They can be retrieved at a later stage to generate a SAML attribute assertion.

Select the **Set attributes for SAML Attribute token**
check box, and click the **Add**
button to specify an attribute to fetch from CA SOA Security Manager.

</div>
