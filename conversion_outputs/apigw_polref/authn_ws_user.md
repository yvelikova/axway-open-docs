{
"title": "WS-Security UsernameToken authentication",
"linkTitle": "WS-Security UsernameToken authentication",
"date": "2019-10-17",
"description": "A WS-Security *UsernameToken*\\nenables an end user identity to be passed over multiple hops before reaching the destination web service. The user identity is inserted into the message and is available for processing at each hop on its path."
}
﻿
<div id="p_authn_ws_user_over">

Overview
--------

A WS-Security *UsernameToken*
enables an end user identity to be passed over multiple hops before reaching the destination web service. The user identity is inserted into the message and is available for processing at each hop on its path.

The client user name and password are encapsulated in a WS-Security `<wsse:UsernameToken>`. When the API Gateway receives this token, it can perform one of the following tasks, depending on the requirements:

-   Ensure that the timestamp on the token is still valid
-   Authenticate the user name against a repository
-   Authenticate the user name and password against a repository

The following sample SOAP message contains two `<wsse:UsernameToken>`
blocks:

``` {space="preserve"}
<?xml version="1.0" encoding="iso-8859-1"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
<soap:Header>
    <wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2003/06/secext">
        <wsse:UsernameToken wsu:Id="sample"
          xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility">
            <wsse:Username>sample</wsse:Username>
            <wsse:Password Type="wsse:PasswordText">axway</wsse:Password>
            <wsu:Created>2004-05-19T08:44:51Z</wsu:Created>
        </wsse:UsernameToken>
    </wsse:Security>
    <wsse:Security soap:actor="axway"
      xmlns:wsse="http://schemas.xmlsoap.org/ws/2003/06/secext">
        <wsse:UsernameToken wsu:Id="axway"
          xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility">
            <wsse:Username>axway</wsse:Username>
            <wsse:Password Type="wsse:PasswordText">axway</wsse:Password>
            <wsu:Created>2004-05-19T08:46:04Z</wsu:Created>
        </wsse:UsernameToken>
    </wsse:Security>
</soap:Header>
<soap:Body>
    <getHello xmlns="http://www.axway.com"/>
</soap:Body>
</soap:Envelope>
```

This topic explains how to use the **WS-Security UsernameToken** filter to authenticate users using a WS-Security `<wsse:UsernameToken>`.

</div>

<div id="p_authn_ws_user_conf_general">

General settings
----------------

To configure general settings, complete the following fields.

<div id="p_authn_ws_user_conf_actor">

### Actor Details

**Actor**:\
The example SOAP message at the top of this page contains two `<wsse:UsernameToken>`
blocks. You must specify which block contains the `<wsse:UsernameToken>`
used to authenticate the end user. Specify the SOAP Actor/Role of the WS-Security block that contains the token.

**Credential Format**:\
The API Gateway can authenticate users against a user profile repository based on User Names, X.509 Distinguished Names, or email addresses. Unfortunately, the WS-Security specification does not provide a means of specifying the type of `<wsse:UsernameToken>`, and so it is necessary for the administrator to do so using the **Credential Format**
field. The type specified here is used internally by the API Gateway in subsequent authorization filters.

</div>

<div id="p_authn_ws_user_conf_token">

### Token Validation

Each `wsse:UsernameToken`
contains a timestamp inserted into the `<wsu:Created>`
element. Using this timestamp together with the details entered in this section, the API Gateway can determine whether the WS-Security `UsernameToken`
has expired. The `<wsu:Created>`
element is as follows:

``` {space="preserve"}
<wsse:UsernameToken wsu:Id="axway"
  xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility">
    <wsu:Created>2006.01.13T-10:42:43Z</wsu:Created>
        ...
</wsse:UsernameToken>
```

 

To configure token validation settings, complete the following fields:

**Drift Time**:\
Specified in seconds to account for differences in the clock times between the machine on which the token was generated and the machine running the API Gateway. Using the *start time*, *end time*, and *drift time*, the token is considered valid if the current time falls between the following times:

    [start - drift] and [start + drift + end]

**Validity Period**:\
Specifies the lifetime of the token, where the value of the `<wsu:Created>`
element represents the *start time*
of the assertion, and the time period entered represents the *end time*.

**Timestamp Required**:\
Select this option to ensure that the UsernameToken contains a timestamp. If no timestamp is found in the UsernameToken, a SOAP Fault is returned.

</div>

<div id="p_authn_ws_user_conf_nonce">

### Nonce Settings

**Nonce Required**:\
Select this option to ensure that the UsernameToken contains a `<wsse:Nonce>`
element. This is a randomly generated number that is added to the message. You can use the combination of a timestamp and a nonce to help prevent replay attacks.

**Select cache to store WSS UsernameToken nonces in**:\
Click the button on the right, and select the cache that stores the nonce value. Defaults to the local `WSS UsernameToken Nonce Cache`.

To add a cache, right-click the **Caches**
tree node, and select **Add Local Cache**
or **Add Distributed Cache**. Alternatively, you can configure caches under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree. For more details on caches, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_authn_ws_user_conf_repository">

### Token Validation via Repository

Having validated the timestamp on the token, the API Gateway can then optionally authenticate the user name and password contained in the token. The following options are available:

-   **No Verification**\
    No verification of the user name and password is performed. Only the timestamp on the token is validated. This is the default behavior.
-   **Verify Username Only**\
    Only the user name is looked up in the selected repository. If the user name is found in this repository, the user is authenticated. Select the **No password allowed**
    check box to block messages that contain a UsernameToken with a `<wsse:Password>`
    element.
-   **Verify Username and Password**\
    The user name is looked up in the selected repository and is only authenticated if the corresponding password matches the one configured in the repository. If you select this option, you must select the type of the password. Both clear text and digest formats are supported. Select the appropriate option.

**Repository Name**:\
The API Gateway attempts to authenticate users against the selected **Authentication Repository**. User profiles can be stored in the local store, a database, or an LDAP directory. For more details on authentication repositories, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_authn_ws_user_conf_adv">

### Advanced

**Remove enclosing WS-Security element on successful validation**:\
Select this option to remove the WS-Security block that contains the UsernameToken after the token has been successfully authenticated. For example, in the above sample SOAP message that contains two `<wsse:UsernameToken>`
elements in two different WS-Security blocks, you could configure the API Gateway to remove one of these on successful authentication.

</div>

</div>
