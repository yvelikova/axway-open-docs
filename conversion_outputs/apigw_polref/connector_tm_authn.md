{
"title": "CA SOA Security Manager authentication",
"linkTitle": "CA SOA Security Manager authentication",
"date": "2019-10-17",
"description": "CA SOA Security Manager can authenticate end users and authorize them to access protected web resources. When the API Gateway receives a message containing user credentials, it can forward the message to CA SOA Security Manager where the passed credentials are extracted from the message to authenticate the end user. When the message has been passed to CA SOA Security Manager, it can authenticate the user by the following methods:"
}
﻿
<div id="p_connector_tm_authn_over">

Overview
--------

CA SOA Security Manager can authenticate end users and authorize them to access protected web resources. When the API Gateway receives a message containing user credentials, it can forward the message to CA SOA Security Manager where the passed credentials are extracted from the message to authenticate the end user. When the message has been passed to CA SOA Security Manager, it can authenticate the user by the following methods:

-   **XML Document Credential Collector**:\
    Gathers credentials from the message and maps them to fields within a user directory.
-   **XML Digital Signature**:\
    Validates the X.509 certificate contained within an XML-Signature on the message.
-   **WS-Security**:\
    Extracts user credentials from WS-Security tokens contained in the message.
-   **SAML Session Ticket**:\
    Consumes a SAML session ticket from an HTTP header, SOAP envelope, or session cookie to authenticate the end user.

By delegating the authentication decision to CA SOA Security Manager, the API Gateway acts as a Policy Enforcement Point (PEP). It *enforces*
the decisions made by the CA SOA Security Manager, which acts a Policy Decision Point (PDP). For more details, see the *CA SOA Security Manager Policy Configuration Guide*.

</div>

<div id="p_connector_tm_authn_prereq">

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

<div id="p_connector_tm_authn_agent">

Configuration
-------------

**Name**:\
Enter a name for this filter to display in a policy.

**Agent Name**:\
To act as a PEP for the CA SOA Security Manager, the API Gateway must have been set up as a *SOA Agent*
with the Policy Server. For more details on how to do this, see the *CA SOA Security Manager Agent Configuration Guide*.

Click the button on the right to select a previously configured agent to connect to SOA Security Manager. This name *must*
correspond with the name of an agent previously configured in the SOA Security Manager **Policy Server**. At runtime, the API Gateway connects as this agent to a running instance of SOA Security Manager.

To add an agent, right-click the **SiteMinder/SOA Security Manager Connections**
tree node, and select **Add a SOA Security Manager Connection**. Alternatively, you can add SOA Security Manager connections under the **Environment Configuration** > **External Connections**
node in the Policy Studio tree. For details on how to configure SOA Security Manager connections, see
[Configure SiteMinder/SOA Security Manager connections](/csh?context=602&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

<div id="p_connector_tm_authn_message">

### Message details settings

While authenticating the user against CA SOA Security Manager, the user can also be authorized for a specified action on a particular resource. Configure the following fields in the **Message Details**
section:

**Resource**:\
Enter the name of the resource for which you want to ensure that the user has access to. By default, the `http.request.uri`
message attribute is used, which contains the relative path on which the request was received by the API Gateway.

**Action**:\
Specify the action that the user is attempting to perform on the specified resource. The API Gateway checks the user's entitlements in CA SOA Security Manager to ensure that the user is allowed to perform this action on the resource entered above. By default, the `http.request.verb`
message attribute is used, which stores the HTTP verb used by the client when sending up the message.

**Protocol**:\
Enter the protocol used by the client to access the requested resource. Users can have different access rights depending on their roles in the organization. For example, managers might be allowed to FTP to a given resource, but more junior employees might only be allowed to GET a resource using HTTP. Defaults to `http`.

**Headers**:\
To carry out further authorization checks on the message, it is possible to forward the HTTP headers associated with the client message to the CA SOA Security Manager. By default, the `http.headers`
message attribute is used to ensure that the original client headers are send to the CA SOA Security Manager.

</div>

</div>

<div id="p_connector_tm_authn_xmltoolkit">

XmlToolkit.properties file
--------------------------

The `XmlToolkit.properties`
file contains default properties used by the SOA agent, such as the URL of the CA SOA Manager, an identifier for the SOA agent, and an indication to the SOA Manager if it should perform fine-grained resource identification or not. The `XmlToolkit.properties`
file can be found in the `/lib/modules/soasm`
directory of your API Gateway installation.

``` {space="preserve"}
#Wed Jul 18 15:02:16 BST 2007
WSDMResourceIdentification=yes
WS_UT_CREATION_EXPIRATION_MINUTES=60
```

The following properties are available:

-   `WSDMResourceIdentification`\
-   This value cannot be configured from the Policy Studio, and so can only be set directly in the properties file. If this property is set to `no`
    (or if the properties file cannot be found) only a coarse-grained resource identification is performed on the requested URL. If this value is set to `yes`, a fine-grained resource identification including the requested URL, web service name, and SOAP operation (`<url>/<web service name>/<soap operation>`).
-   `WS_UT_CREATION_EXPIRATION_MINUTES`\
-   Specifies the WS-Username Token age limit restriction in minutes. This setting helps prevent against replay attacks. The default token age limit is 60 minutes. See the following section for more information on modifying this setting.

<div>

### Configure the user name and password digest token age restriction

By default, the WS-Security authentication scheme imposes a 60 minute restriction on the age of user name and password digest tokens to protect against replay attacks.

You can configure a different value for the token age restriction for the API Gateway by setting the `WS_UT_CREATION_EXPIRATION_MINUTES`
parameter in the `XmlToolkit.properties`
file for that API Gateway. To configure the API Gateway to use a non-default age restriction for user name and password token authentication, complete the following steps:

1.  Navigate to the`<INSTALL_DIR>/system/lib/modules/soasm`
    directory, where `INSTALL_DIR`
    points to the root of your API Gateway installation.
2.  Open the `XmlToolkit.properties`
    file in a text editor.
3.  Add the following line, where `token_age_limit`
    specifies the token age limit in minutes:
4.  ``` {space="preserve"}
    WS_UT_CREATION_EXPIRATION_MINUTES=token_age_limit
    ```

5.  Save and close the `XmlToolkit.properties`
    file.
6.  Restart API Gateway.

{{< alert title="Note" color="primary" >}}It is important to note the following:{{< /alert >}}
<div class="indentTable">

-   The properties file is written to the `/lib/modules/soasm`
    directory when a SOA Security Manager Authentication or Authorization filter is loaded at startup, or on server refresh (for example, when a configuration update is deployed), but only if the file does not already exist in this location.
-   If the properties file already exists in the `/lib/modules/soasm`
    directory, the `WSDMResourceIdentification`
    property is *not*
    overwritten. In other words, the user is allowed to manually set this property independently of the Policy Studio.
-   If the `WSDMResourceIdentification`
    property does not exist, it is given a default value of `yes`
    and written to the file.

</div>

</div>

</div>
