{
"title": "Configure Kerberos clients",
"linkTitle": "Configure Kerberos clients",
"date": "2019-10-17",
"description": "API Gateway can act as a Kerberos client. For this, it must authenticate to the Kerberos Key Distribution Center (KDC) as a specific Kerberos principal, and use the Ticket Granting Ticket (TGT) granted for it to obtain tickets from the Ticket Granting Service (TGS) to authenticate to Kerberos services."
}
﻿

Overview
--------

API Gateway can act as a Kerberos client. For this, it must authenticate to the Kerberos Key Distribution Center (KDC) as a specific Kerberos principal, and use the Ticket Granting Ticket (TGT) granted for it to obtain tickets from the Ticket Granting Service (TGS) to authenticate to Kerberos services.

You can configure Kerberos clients globally under **Environment Configuration > External Connections**
in the node tree. Right-click the **Kerberos Clients**
node in the tree, and select **Add a Kerberos Client**. The following sections describe how to configure the different fields int he dialog.

Once finished, you can select the configured Kerberos client when configuring other Kerberos-related filters. Ensure the check box **Enabled**
at the bottom of the window is selected.

For more details on different Kerberos setups with API Gateway, see
[API Gateway Kerberos Integration Guide](/bundle/APIGateway_77_IntegrationKerberos_allOS_en_HTML5)
.

Kerberos endpoint settings
--------------------------

Configure the following fields on the **Kerberos Endpoint**
tab:

### Ticket Granting Ticket Source

This option defines where to obtain the Kerberos client credentials and the session key used in communications with the TGS to request TGTs. A TGT can be retrieved from a cache created as part of a Java Authentication and Authorization Service (JAAS) login, from delegated credentials, or from the native GSS Library on Linux platforms.

{{< alert title="Note" color="primary" >}}Depending on the TGT source option option you select, the **Kerberos Principal**, **Password**, and **Keytab File**
fields below might be required or disabled.{{< /alert >}}

**Load via JAAS Login**:\
By default, API Gateway performs a JAAS login to the Kerberos KDC. After the login, API Gateway caches the credentials, and they are used to acquire TGTs as needed.

The JAAS login acquires the credentials in one of the following ways:

-   **Request from KDC** – Request a new TGT from the Kerberos KDC. The request is sent at server startup, server refresh (for example, when an update to configuration is deployed), and when the TGT expires.
-   **Extract from Default System Ticket Cache** – If a TGT has already been obtained outside API Gateway and has been stored in the default system ticket cache, you can use this option to retrieve the TGT from the cache. On Windows 2000, the TGT is extracted from the cache using the Local Security Authority (LSA) API. On Linux, the assumed default location of the ticket cache is `/tmp/krb5cc_<uid>`
    , where `<uid>` is a numeric user identifier. If the ticket cache cannot be found in the default locations, or on a different Windows platform, API Gateway searches the cache in `{user.home}{file.separator}krb5cc_{user.name}`.

A system ticket cache can only hold the credentials of a single Kerberos client. To load credentials for more than one Kerberos client from system ticket caches, select **Extract from System Ticket Cache**
option.

-   **Extract from System Ticket Cache** – Extract the TGT from an explicitly named system ticket cache instead of the default system ticket cache.To specify the cache, browse to the cache you want to use. You can populate ticket caches with client credentials using an external utility, such as `kinit`.

**Load from Delegated Credentials**:\
The Kerberos client can use a delegated TGT that has been already retrieved from a **Kerberos Service** authentication filter. The TGT is extracted from message attributes (for example, `authentication.delegated.credentials`
and `authentication.delegated.credentials.client.name`) that have been set by the Kerberos Service filter.

If you select this option, it is not necessary to configure the **Kerberos Principal**
or **Secret Key**
fields.

**Load via Native GSS Library**:\
Select this option to use the Native GSS-API to acquire the client's credentials. The Native GSS-API expects that the credentials already are in a system ticket cache that it can access.

The **Load via Kinit**
option determines the number of Kerberos clients you can use with API Gateway:

-   If **Load via Kinit**
    *is* selected, API Gateway can support multiple Kerberos clients natively. API Gateway runs `kinit` and creates a ticket cache for each client in the `/conf/plugins/kerberos/cache` directory. The Native GSS-API can automatically acquire the client credentials from these caches.
-   If **Load via Kinit** *is not* selected, API Gateway can support only one Kerberos client natively. The Kerberos client credentials must be in the default system ticket cache. API Gateway cannot support accessing credentials natively from the default system ticket cache and other system ticket caches.

{{< alert title="Note" color="primary" >}}To use the native GSS library and the `kinit`
tool, you must select to use the native GSS library on the instance-level API Gateway **Kerberos Configuration**
settings. For more details, see [Kerberos configuration](kerberos_configuration.htm). {{< /alert >}}

### Kerberos Principal

A Kerberos principal is used to assign a unique identity for API Gateway to be used in the Kerberos environment.

To select which Kerberos principal to use, click the **...** button, and select a previously configured principal from the list. To add a Kerberos principal, right-click **Kerberos Principals**, and select **Add Kerberos Principal**. You can also add Kerberos principals under **Environment Configuration > External Connections** in the node tree.

For Kerberos constrained delegation (KCD), the Kerberos Principal selected here must be configured for credential delegation to a set of Kerberos services in the Kerberos KDC.

For more details, see [*Configure Kerberos principals* on page 1](kerberos_principal.htm).

{{< alert title="Note" color="primary" >}}The semantics of this field are slightly different depending on what TGT source you selected:

-   If you selected to retrieve the TGT from the KDC, you are effectively asking the KDC to issue a TGT for the principal selected here.
-   If you selected to retrieve the TGT from a system ticket cache, the principal selected here searches the cache to retrieve the TGT.
-   If you selected to use the `kinit`
    utility, the name of the principal selected here is passed as an argument to `kinit`.
-   If you selected to retrieve a TGT from delegated credentials, it is not necessary to specify any principal.

>{{< /alert >}}

### Secret Key

The Kerberos principal uses the secret key to communicate with the KDC's Authentication Service in order to acquire a TGT. The secret key can be generated from a password, or it can be acquired from the principal's keytab file. The options available depend on what you selected as the source of the TGT.

**Enter Password**:\
You can only enter a password if you selected to request the TGT from the KDC. The password is used when generating the secret key. A secret key is not required if the TGT has been already retrieved either from a system ticket cache or from delegated credentials.

{{< alert title="Note" color="primary" >}}By default, the password entered here is stored in clear-text form in the underlying configuration data in API Gateway. If necessary, the password can be encrypted using a passphrase. For more details on encrypting sensitive API Gateway configuration data, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.{{< /alert >}}

**Keytab**:\
If you selected to request the TGT from the KDC, you can also extract the secret key for the principal from a keytab
file, which maps principal names to encryption keys. Using the `kinit`
tool also requires a keytab
file.

To load the principal-to-key mappings into the table in the dialog, select **Load Keytab**
and browse to the existing keytab file. To add a new keytab entry, select **Add Principal**. To delete a keytab entry, select the entry in the table and click **Delete Entry**. To export the entire contents of the keytab table in the dialog, click **Export Keytab**.

{{< alert title="Note" color="primary" >}}By default, the contents of the keytab table – derived from a keytab file or manually entered – stored in clear-text form in the underlying configuration data in API Gateway. If necessary, the contents of the keytab table can be encrypted using a passphrase. For more details on encrypting sensitive API Gateway configuration data, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.{{< /alert >}}

When API Gateway starts, it writes the stored keytab contents to the `/conf/plugin/kerberos/keytabs/`
directory in your API Gateway installation. It is recommended to configure directory-based or file-based access control for this directory and its contents.

For more details on configuring the **Keytab Entry**
dialog, see the [*Kerberos Keytab concepts* on page 1](kerberos_keytab.htm).

Kerberos Constrained Delegation settings
----------------------------------------

An end user application requesting a TGT for a back-end Kerberos service might be unable to authenticate to the Kerberos service with Kerberos credentials, for example, if accessing the service from outside the Kerberos domain. KCD enables the Kerberos principal you selected on the **Kerberos Endpoint** tab to act as a trusted Kerberos principal. The trusted Kerberos principal authenticates the end user application using some other authentication method than Kerberos credentials, then authenticates to the back-end Kerberos service as the end user application, and acquires a TGT in the name of the end user application.

To enable KCD, configure the following fields on the **Kerberos Constrained Delegation**
tab:

**Kerberos Principal to Impersonate**:

Select the end user principal being impersonated. The principal to impersonate is normally configured using a selector, so that many end user principals can be impersonated. A typical setup might be that the principal on the **Kerberos Endpoint** tab might be, for example, `TrustedAPIGateway@AXWAY.COM` and the Kerberos Principal to Impersonate is `${authentication.subject.id}@AXWAY.COM`.

If you don't set this field, the Kerberos Client does not attempt to impersonate other Kerberos principals in Kerberos Constrained Delegation.

**Select Cache for Impersonated Subjects**:

Select the cache used to store impersonated user credentials. These will be refreshed automatically so that expired credentials are not sent to the service-side.

You must define this field for KCD.

Advanced settings
-----------------

You can configure the following fields on the **Advanced**
tab:

**Mechanism**:\
Select the mechanism used to establish a context between the Kerberos client and the Kerberos service. The Kerberos service must use the same mechanism.

**Mutual Authentication**:\
Select this to carry out mutual authentication . This means that the service authenticates back to the client during the context setup. For SPNEGO mechanism, you must select this.

**Integrity**:\
Select to enable data integrity for GSS operations.

**Confidentiality**:\
Select to enables data confidentiality for GSS operations.

**Credential Delegation**:\
Select this to delegate the request initiator's credentials to the acceptor during context setup. If you select this option, the acceptor can assume the initiator's identity and authenticate to other Kerberos services on behalf of the initiator.

**Anonymity**:\
Select to prevent disclosing the Kerberos client's identity to the Kerberos service.

**Replay Detection**:\
Select to enable replay detection for the per-message security services after context establishment.

**Sequence Checking**:\
Select to switch on sequence checking for the per-message security services after context establishment.

**Synchronize to Avoid Replays Errors at Service**:

If a Kerberos client is running under stress and is attempting to send many requests to a Kerberos service within a very short (millisecond) time frame, the sequential Kerberos Authenticator
tokens the Kerberos client generates might contain identical values for the `ctime`
(the current time on the client's host) and `cusec`
(the microsecond portion of the client's timestamp) fields.

Since Kerberos service implementations often compare the `ctime` and `cusec` values on successive Kerberos Authenticator tokens to discover replay attacks, it is possible that the Kerberos service might reject Kerberos Authenticator requests in which the `ctime` and `cusec` fields have the same value.

To avoid this scenario, you can select this option to synchronize the creation of the Kerberos Authenticator requests using the **Pause Time**
value.

{{< alert title="Note" color="primary" >}}
On Linux, this setting is not required, so ensure it is deselected for better performance.{{< /alert >}}

**Pause Time**:\
Specify the time interval (in milliseconds) to wait before generating the client-side Kerberos Authenticator tokens when synchronizing to avoid over-zealous replay detection on the Kerberos service. You can only set this value if you have also selected the **Synchronize to Avoid Replays Errors at Service**
option.

{{< alert title="Note" color="primary" >}}The default value of 15 milliseconds matches the clock resolution time of operating systems. For more details on the clock resolution on your target operating system, consult your operating system documentation .{{< /alert >}}

**Refresh credential when remaining validity is X secs**:

Select this to enable refresh the Kerberos credentials shortly before they expire to avoid expiry failures on the service-side.

When API Gateway receives a request that uses a Kerberos client, API Gateway refreshes any cached Kerberos credentials used to process that request, if the time that this credential can be validly used is less than or equal to this number of seconds.

It is possible that a credential is only refreshed long after it has expired, as triggering the refresh requires a request that uses the expired credential.
