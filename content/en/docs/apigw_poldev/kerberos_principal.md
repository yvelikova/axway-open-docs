{
"title": "Configure Kerberos principals",
"linkTitle": "Configure Kerberos principals",
"date": "2019-10-17",
"description": "A Kerberos principal represents a unique identity in a Kerberos system to which Kerberos can assign tickets to access Kerberos-aware services. Principal names are made up of several components separated with the `/`\\nseparator. You can also specify a Kerberos realm as the last component of the name by using the `@`\\ncharacter. If no realm is specified, the principal is assumed to belong to the default realm, as configured in the `krb5.conf`\\nfile. For more details, see [Kerberos configuration](%3Ca%20href=)."
}
﻿

Overview
--------

A Kerberos principal represents a unique identity in a Kerberos system to which Kerberos can assign tickets to access Kerberos-aware services. Principal names are made up of several components separated with the `/`
separator. You can also specify a Kerberos realm as the last component of the name by using the `@`
character. If no realm is specified, the principal is assumed to belong to the default realm, as configured in the `krb5.conf`
file. For more details, see Kerberos configuration.

Typically, a principal name comprises three parts: the *primary*, the *instance*, and the *realm*. The format of a typical Kerberos v5 principal name is:

``` {space="preserve"}
primary/instance@realm
```

-   *Primary:*\
    If the principal represents a user in the system, the primary is the user name of the user. Alternatively, for a host, the primary is specified as the `host`
    string.
-   *Instance:*\
    The instance can be used to further qualify the primary (for example, `user/admin@foo.abc.com`).
-   *Realm:*\
    This is your Kerberos realm, which is usually a domain name in upper case letters. For example, the `foo.abc.com`
    machine is in the `ABC.COM`
    Kerberos realm.

For more details on different Kerberos setups with API Gateway, see
[API Gateway Kerberos Integration Guide](/bundle/APIGateway_77_IntegrationKerberos_allOS_en_HTML5)
.

Configuration
-------------

You can configure Kerberos principals globally under the **Environment Configuration** > **External Connections**
in the node tree. To configure a Kerberos principal, right-click the **Kerberos Principals**
node, and select **Add a Kerberos Principal**.

Configure the following fields on the **Kerberos Principal**
dialog:

**Name**:\
Enter a friendly name for the Kerberos principal. This name is shown in the drop-down lists in other Kerberos-related configuration windows in the Policy Studio.

**Principal Name**:\
Enter the name of the Kerberos principal in this field. The principal name consists of a number of components separated using the `/`
separator. Specify the realm here if the principal belongs to either a non-default realm or if a default realm is not specified in the `krb5.conf` file.

**Principal Type**:\
Select the type of principal specified in the field above. The following table lists the available principal types.

{{< alert title="Note" color="primary" >}}The principal name types and their corresponding OIDs are defined in the General Security Services API (GSS-API). {{< /alert >}}

| Principal name type          | Explanation                                                                                                                                                                            | OID                      |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| `NT_USER_NAME`               | The principal name identifies a named user on the local system                                                                                                                         | `1.2.840.113554.1.2.1.1` |
| `KERBEROS_V5_PRINCIPAL_NAME` | The principal name represents a Kerberos version 5 principal.                                                                                                                          | `1.2.840.113554.1.2.2.1` |
| `NT_EXPORT_NAME`             | The principal name represents an exported canonical byte representation of the name (for example, which can be used when searching for the principal in an Access Control List (ACL)). | `1.3.6.1.5.6.4`          |
| `NT_HOSTBASED_SERVICE`       | The principal name identifies a service associated with a specific host.                                                                                                               | `1.3.6.1.5.6.2`          |

To add new principal types, click **Add**. The name entered in the **Name**
field on the **Kerberos Principal Name OID**
must correspond to one of the constant fields defined in the `org.ietf.jgss.GSSName`
Java class. For other allowable name types, see the Javadocs for the GSSName
class.

Similarly, the corresponding OID for this name type must be entered in the **OID**
field of the dialog.

{{< alert title="Note" color="primary" >}}OIDs and principal type names must only be changed to reflect changes in the underlying GSS-API. Because of this, do not edit
the existing **Principal Types**
except under strict supervision by the Axway Support.{{< /alert >}}
