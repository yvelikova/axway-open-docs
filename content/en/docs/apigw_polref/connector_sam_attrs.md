{
"title": "Retrieve attributes from Sun Access Manager",
"linkTitle": "Retrieve attributes from Sun Access Manager",
"date": "2019-10-17",
"description": "This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](%3Ca%20href=)."
}
﻿

{{< alert title="Note" color="primary" >}}This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](part_oam_filters.htm).{{< /alert >}}

Sun Access Manager is an identity management product that provides authentication, authorization, and single sign-on (SSO) capabilities. When a user authenticates to Sun Access Manager they are granted an SSO token, which they can use to obtain access to other services without having to reauthenticate at each service.

The token contains details about the authentication or authorization event, including the token lifetime, the resource for which the user was authorized, and attributes relating to the authenticated user, amongst others. An access manager policy agent
deployed at the web services endpoint can retrieve the user attributes directly from the SSO token without the need to connect back to the access manager server.

API Gateway can be configured to act as such a policy agent
through the use of the **Retrieve Attributes** filter. The filter is parametrized by the message attribute that contains the SSO token, from which the user attributes can be retrieved.

The retrieved attributes are stored in the `attributes.lookup.list` message attribute, which is a map of user attributes to their values. The keys correspond to the names of the attributes as they are stored in access manager. For example, if the user has `role`, `email`, and `department` attributes configured in access manager, the `attributes.lookup.list` message attribute contains entries for each of these attributes, together with their retrieved values.

To enable you to easily access individual attributes, the retrieved user attributes are also stored in separate message attributes. These message attributes are dynamically named according to the following convention:

``` {space="preserve"}
user.[attribute_name].[index]
```

Each message attribute is prefixed with `user.`, followed by the name of the user attribute as configured in access manager (for example, `role`). The `[index]` part of the name is used in cases where the user attribute has multiple values, such as multiple roles or phone numbers.

For example, assuming that the `email`, (multivalued) `role`, and `department` attributes have been configured for the user, the following message attributes would be created for each of these attributes respectively:

| Message attribute   | User attribute | Value                     |
|---------------------|----------------|---------------------------|
| `user.email.1`      | `email`        | `eng_manager@company.org` |
| `user.role.1`       | `role`         | Engineer                  |
| `user.role.2`       | `role`         | Manager                   |
| `user.role.3`       | `role`         | Administrator             |
| `user.department.1` | `department`   | Engineering               |

The table above illustrates how a multivalued user attribute such as `role` is processed so that each value is stored in a separate indexed message attribute, for example, `user.role.1`, `user.role.2`, and `user.role.3`.

Configuration
-------------

The following fields must be configured for this filter:

**Name**:\
Enter a descriptive name for this filter in the field provided.

**Selector expression to retrieve SSO token ID**:\
The attributes are retrieved from the Sun Access Manager SSO token, which is stored by default in the `sun.sso.token` message attribute after a user authenticates to access manager.

In cases where the user has authenticated to Sun Access Manager independently of the API Gateway but has, for example, injected the SSO token into a SAML authentication or authorization assertion, the **Retrieve from Message** filter (see [Retrieve attribute from message](attributes_message.htm)) can be used to extract the token from the assertion and store it in a message attribute. This message attribute must be specified in this field.

Similarly, if the SSO token was inserted into an HTTP header, the **Retrieve from HTTP Header** filter (see Retrieve attribute from HTTP header) can be used to extract the token from the HTTP header and store it in a message attribute.

**Retrieve the following attributes from Sun Access Manager**:\
In cases where only a certain named subset of the total number of available attributes need to be retrieved for a given user, you can list the names of the attributes to retrieve in this table. The filter only retrieves these named attributes. If no attributes are explicitly named in this section, the filter retrieves all available attributes for the user.

Click the **Add** button to add a named attribute to the table. Simply enter a name for the attribute in the field provided. Existing named attributes can be edited and deleted by clicking the **Edit** and **Remove** buttons.

The retrieved attributes are added to the `attribute.lookup.list` message attribute. The contents of the `attribute.lookup.list` attribute can be used, for example, to create a SAML attribute assertion for the user. If a list of named attributes is configured in this section, only these attributes appear in the SAML attribute assertion.

For example, if you configure this filter to only retrieve the `EMPLOYEENUMBER` and `SN` attributes from Sun Access Manager (despite the fact that are several more attributes configured for this user), you can generate the following SAML attribute assertion:

    <saml:AttributeStatement>
      <saml:Subject>
        <saml:NameIdentifier Format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified">
          qauser
        </saml:NameIdentifier>
      </saml:Subject>
      <saml:Attribute AttributeName="EMPLOYEENUMBER" AttributeNamespace="urn:vordel:attribute:1.0">
        <saml:AttributeValue>12345</saml:AttributeValue>
      </saml:Attribute>
      <saml:Attribute AttributeName="SN" AttributeNamespace="urn:vordel:attribute:1.0">
        <saml:AttributeValue>User</saml:AttributeValue>
      </saml:Attribute>
    </saml:AttributeStatement>
