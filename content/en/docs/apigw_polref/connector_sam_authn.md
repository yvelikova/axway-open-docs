{
"title": "Sun Access Manager certificate authentication",
"linkTitle": "Sun Access Manager certificate authentication",
"date": "2019-10-17",
"description": "This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](%3Ca%20href=)."
}
﻿

{{< alert title="Note" color="primary" >}}This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](part_oam_filters.htm).{{< /alert >}}

Sun Access Manager is an identity management product that provides authentication, authorization, and single sign-on (SSO) capabilities. API Gateway uses X.509 certificates to authenticate to Sun Access Manager. When users have been successfully authenticated, they receive an SSO token, which they can use to obtain access to resources that are protected by the access manager. The **X.509 Certificate Authentication** is filter configures how API Gateway uses X.509 certificates to authenticate to Sun Access Manager.

See also Sun Access Manager authorization.

Configuration
-------------

Complete the following fields.

### Sun Access Manager settings

Complete the following fields to configure Sun Access Manager login details:

**Login module name**:\
Enter the name of the access manager *module instance* that is responsible for logging in users. The module entered must be registered with the **Realm** specified below.

**Realm**:\
Specify the realm that the access manager *module instance* specified above belongs to.

### SSO settings

Complete the following fields to configure SSO details:

**Create SSO Token**:\
Select this check box if Sun Access Manager should create an SSO (Single Sign-On) token when a user has successfully authenticated. The user can then use this SSO token to gain access to other resources that are protected by Access Manager.

**Store SSO Token in attribute named**:\
Enter the name of the message attribute in which to store the SSO token. Most of API Gateway's access manager integration filters require the name of this attribute to retrieve the SSO token and process it.

**Add SSO Token to user attributes**:\
If this option is selected, the SSO token that is retrieved after successfully authenticating to Sun Access Manager is stored in the `attribute.lookup.list` message attribute, which contains a list of user attributes.

{{< alert title="Note" color="primary" >}}Do not select this option if you plan to insert a SAML attribute statement into the message (using one of the SAML injection filters) later in the policy. If this option is unselected, the SSO token is inserted into the SAML attribute statement, which might not always be desirable. For this reason, the decision is left to you on whether to add the SSO token to the `attribute.lookup.list` of user attributes depending on your specific requirements.{{< /alert >}}
