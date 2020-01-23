{
"title": "Insert WS-Security UsernameToken",
"linkTitle": "Insert WS-Security UsernameToken",
"date": "2019-10-17",
"description": "When a client has been successfully authenticated, the API Gateway can insert a *WS-Security UsernameToken*\\ninto the downstream message as proof of the authentication event. The `<wsse:UsernameToken>`\\ntoken enables a user's identity to be inserted into the XML message so that it can be propagated over a chain of web services."
}
﻿
<div id="p_authn_insert_ws_username_over">

Overview
--------

When a client has been successfully authenticated, the API Gateway can insert a *WS-Security UsernameToken*
into the downstream message as proof of the authentication event. The `<wsse:UsernameToken>`
token enables a user's identity to be inserted into the XML message so that it can be propagated over a chain of web services.

A typical example would see a user authenticating to the API Gateway using HTTP digest authentication. After successfully authenticating the user, the API Gateway inserts a WS-Security UsernameToken into the message and digitally signs it to prevent anyone from tampering with the token.

The following example shows the format of the `<wsse:UsernameToken>`
token:

``` {space="preserve"}
<wsse:UsernameToken wsu:Id="axway"
  xmlns:wsu="http://schemas.xmlsoap.org/ws/2003/06/utility">
    <wsu:Created>2006.01.13T-10:42:43Z</wsu:Created>
    <wsse:Username>axway</wsse:Username>
    <wsse:Nonce EncodingType="UTF-8">
        KFIy9LgzhmDPNiqU/B9ZiWKXfEVNvFyn6KWYP+1zVt8=
    </wsse:Nonce>
    <wsse:Password Type="wsse:PasswordDigest">
        CxWj1OMnYj7dddMnU/DrOhyY3j4=
    </wsse:Password>
</wsse:UsernameToken>
```

This topic explains how to configure the API Gateway to insert a WS-Security UsernameToken after successfully authenticating a user.

</div>

<div id="p_authn_insert_ws_username_conf_general">

General settings
----------------

To configure general settings, complete the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Actor**:\
The UsernameToken is inserted into the WS-Security block identified by the specified SOAP *Actor*.

<div id="p_authn_insert_ws_username_conf_credentials">

### Credential details

To configure the credential details, complete the following fields:

**Username**:\
Enter the name of the user included in the UsernameToken. By default, the `authentication.subject.id`
message attribute is stored, which contains the name of an authenticated user.

**Include Nonce**:\
Select this option to include a nonce in the UsernameToken. A nonce is a random number that is typically used to help prevent replay attacks.

**Include Password**:\
Select this option if you wish to include a password in the UsernameToken.

**Password**:\
If the **Include Password**
check box is selected, the API Gateway inserts the user's password into the generated WS-Security UsernameToken. It can insert a **Clear**
or **SHA1 Digest**
version of the password, depending on which radio button you select. Axway recommends the digest form of the password to avoid potential eavesdropping.

You can either explicitly enter the password for this user in the **Password**
field, or use a message attribute by selecting the **Wildcard**
option, and entering the message attribute selector in the field provided. The default is `${authentication.subject.password}`, which contains the user password to authenticate to the API Gateway.

</div>

<div id="p_authn_insert_ws_username_conf_advanced">

### Advanced options

To configure advanced options, complete the following field:

**Indent**:\
Select this option to add indentation to the generated `UsernameToken`
and `Signature`
blocks. This makes the security tokens more human-readable.

</div>

</div>
