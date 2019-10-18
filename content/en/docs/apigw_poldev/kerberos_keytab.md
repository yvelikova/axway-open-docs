{
"title": "Kerberos keytab concepts",
"linkTitle": "Kerberos keytab concepts",
"date": "2019-10-17",
"description": "The Kerberos keytab\\nfile contains mappings between Kerberos principal names and DES-encrypted keys that are derived from the password used to log into the Kerberos Key Distribution Center (KDC). The purpose of the keytab file is to allow the user to access distinct Kerberos services without being prompted for a password at each service. Furthermore, it allows scripts and daemons to log in to Kerberos services without the need to store clear-text passwords or the need for human intervention. "
}
﻿

The Kerberos keytab
file contains mappings between Kerberos principal names and DES-encrypted keys that are derived from the password used to log into the Kerberos Key Distribution Center (KDC). The purpose of the keytab file is to allow the user to access distinct Kerberos services without being prompted for a password at each service. Furthermore, it allows scripts and daemons to log in to Kerberos services without the need to store clear-text passwords or the need for human intervention.

{{< alert title="Note" color="primary" >}}Anyone with read access to the keytab file has full control of all keys contained in the file. For this reason, it is imperative that the keytab file is protected using very strict file-based access control.{{< /alert >}}

Each key entry in the Kerberos keytab file is identified by a Kerberos principal and an encryption type. For this reason, a keytab file can hold multiple keys for the same principal, each key belonging to a different encryption type. If the keytab file contains several keys for a principal, the Kerberos client or service uses the key with the strongest encryption type as agreed during the negotiation of previous messages with the KDC.

A keytab file can also contain keys for several different principals. In this case, at runtime, the Kerberos client or service only considers keys mapped to the Kerberos principal name you selected in the **Kerberos Principal**
drop-down list when configuring that Kerberos client or service.

The **Keytab** table in the **Secret Key**
section of the configuration window for a Kerberos client or Kerberos service is essentially a graphical interface to entries in a Kerberos keytab file. To generate a keytab entry, select **Keytab > Add Principal**. To remove an entry, select the entry and click **Delete Entry**.
You can configure Kerberos clients and services under **Environment Configuration > External Connections** in the node tree.

For more details on different Kerberos setups with API Gateway, see
[API Gateway Kerberos Integration Guide](/bundle/APIGateway_77_IntegrationKerberos_allOS_en_HTML5)
.

Configuration
-------------

Configure the following fields on the **Keytab Entry**
dialog:

**Kerberos Principal**:\
Select an existing Kerberos principal from the drop-down list. To add a Kerberos principal, right-click **Kerberos Principals**, and select **Add Kerberos Principal**. You can also add Kerberos principals under **Environment Configuration > External Connections** in the node tree. For more details, see [Configure Kerberos principals](kerberos_principal.htm).

**Password**:\
Enter the password to seed the encryption algorithms for the encryption types.

**Key version number**:\
Set the version number for the encryption key.

**Encryption Types**:\
Select the encryption types. The encryption types determine the algorithms used to generate the encryption keys stored in the keytab file. If the keytab file contains multiple keys for a Kerberos principal, the encryption type is used to select an appropriate encryption key.

To ensure maximum interoperability between Kerberos clients and Kerberos services configured in API Gateway and different KDCs, all encryption types are selected by default. This way, the generated keytab entry contains a separate encryption key for each encryption type listed here, and each key is mapped to the selected Kerberos principal name.

{{< alert title="Note" color="primary" >}}You must ensure that the required encryption types exist in the keytab as defined in Kerberos system settings in the `krb5.conf` file. For a Kerberos client to request a Ticket Granting Ticket (TGT), it must have at least one key that matches one of the encryption types listed in the `default_tkt_enctypes`
setting in `krb5.conf`. A Kerberos service requires a key of a matching encryption type to be able to decrypt a TGT a Kerberos client presents.\
For more details on the `krb5.conf` file, see [Kerberos configuration](kerberos_configuration.htm).{{< /alert >}}

By default, for Windows 2003 Active Directory, TGT is encrypted using the `rc4-hmac`
encryption type. However, if the service user has enabled **Use DES encryption types for this account**, the `des-cbc-md5`
encryption type is used.
