{
"title": "Configure an API Gateway encryption passphrase",
"linkTitle": "Configure an API Gateway encryption passphrase",
"date": "2019-10-14",
"description": "By default, the API Gateway configuration data is stored unencrypted. However, you can encrypt sensitive information such as passwords and private keys using an encryption passphrase. When the passphrase has been set (and the data has been encrypted with it), you must then enter the passphrase when connecting to the API Gateway with Policy Studio, or when the API Gateway is starting up, so that the encrypted data can be decrypted. You can enter an encryption passphrase at the level of a local Policy Studio project on the local file system, and at the level of a running API Gateway group instance. "
}
﻿

By default, the API Gateway configuration data is stored unencrypted. However, you can encrypt sensitive information such as passwords and private keys using an encryption passphrase. When the passphrase has been set (and the data has been encrypted with it), you must then enter the passphrase when connecting to the API Gateway with Policy Studio, or when the API Gateway is starting up, so that the encrypted data can be decrypted. You can enter an encryption passphrase at the level of a local Policy Studio project on the local file system, and at the level of a running API Gateway group instance.

All sensitive information in the API Gateway configuration data is encrypted when you set an encryption passphrase. For example, this sensitive information includes passwords that the API Gateway requires for connecting to external systems (databases, LDAP, and so on), or private keys that are not stored on a Hardware Security Module (HSM). All sensitive information is encrypted using the Password-Based Encryption (PBE) system specified by the Public-Key Cryptography Standard (PKCS\#12). For more details, see Appendix B of the PKCS\#12 documentation.

This topic describes how to specify an encryption passphrase for a local Policy Studio project or when connecting to an API Gateway in Policy Studio, in an API Gateway configuration file, or when the API Gateway is starting up. It also describes how to change the passphrase when it has been set initially.

{{< alert title="Caution" color="warning" >}}It is *crucial*
that you remember the passphrase when you change it. Failure to remember the passphrase results in the loss of encrypted data, and may prevent the API Gateway from functioning correctly.{{< /alert >}} 

Configure the project passphrase using projchangepass
-----------------------------------------------------

You can use the `projchangepass` command to change the encryption passphrase for a Policy Studio project. This example shows how to change the project passphrase on proj1 from `changeme` to `newpassPhrase`:

``` {space="preserve"}
projchangepass --proj=/home/user1/apiprojects/proj1 --oldpass=changeme --newpass=newpassPhrase --confirmpass=newpassPhrase
```

For more information on `projchangepass`, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
.

Configure the group passphrase using managedomain
-------------------------------------------------

You can use the `managedomain` command to change the encryption passphrase for an API Gateway group. The following example shows this using `managedomain` in command interpreter mode:

For more details on using `managedomain`, see [Managedomain command reference](managedomain_ref.htm).

{{< alert title="Note" color="primary" >}}You must also re-encrypt Key Property Store tables after an encryption passphrase for an API Gateway group has been changed. You can do this using the `kpsadmin`
tool. For more details, see the
[API Gateway Key Property Store User Guide](/bundle/APIGateway_77_KPSUserGuide_allOS_en_HTML5)
.{{< /alert >}}

Enter the passphrase when editing configuration in Policy Studio
----------------------------------------------------------------

If you have set an encryption passphrase for the API Gateway configuration data, you must enter this passphrase every time you open a configuration for editing in Policy Studio. You can specify this in the **Enter Passphrase**
dialog, which is displayed before editing an active server configuration.

{{< alert title="Tip" color="primary" >}}When you first open a connection to an API Gateway in Policy Studio, you specify a **Password**. The different roles of the **Passphrase**
and the **Password**
fields are as follows:{{< /alert >}}

|                |                                                                                                                                                                                                                         |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Passphrase** | Used to decrypt sensitive data that has already been encrypted (for example, private keys and passwords) . Not required by default, and only needed if you have already set the encryption passphrase in Policy Studio. |
| **Password**   | Used to authenticate to the API Gateway's management interface using HTTP basic authentication when opening a connection to a server. Required by default.                                                              |

Provide the passphrase in a configuration file or at startup
------------------------------------------------------------

For API Gateway to read (decrypt) encrypted data from its configuration, it must be primed with the passphrase key. You can enter the passphrase directly in a configuration file, prompt for it at startup, or obtain it automatically with a script.

{{< alert title="Note" color="primary" >}} Typically, the passphrase is only entered directly in the file if the server must be started as a Linux daemon. In this case, the administrator cannot enter the passphrase manually when the server is starting. To avoid this, you must enter the passphrase in the configuration file. {{< /alert >}}

### Enter the Node Manager passphrase in a configuration file

You can enter a passphrase directly in the Node Manager configuration file. Open the following file in your API Gateway installation:

This file contains values for general system settings, such as the server name and trace level, and also (if required) the passphrase key that the Node Manager uses to decrypt its own configuration data.

You should specify the passphrase as the value of the `secret`
attribute as follows:

### Enter the API Gateway passphrase in a configuration file

You can also enter the passphrase for API Gateway instances created using the `managedomain`
script. To do this, enter the `secret`
attribute in the `group.xml`
file for your API Gateway instance. For example:

### Prompt for the passphrase at server startup

If you do not wish to enter the passphrase directly in the Node Manager or API Gateway instance configuration file, and do not need to start as a Linuxdaemon, you can configure the Node Manager or API Gateway to prompt the administrator for the passphrase on the command line when starting up. To do this, enter the `"(prompt)"`
special value for the `secret`
attribute as follows:

To configure this for the Node Manager, update your `nodemanager.xml`
file. To configure for an API Gateway group, update the relevant `group.xml`
file.

### Provide the passphrase automatically at startup using a script

Alternatively, you can use a script to automatically provide the passphrase when the API Gateway server starts up. Perform the following steps:

1.  Open the following file in your API Gateway installation:
2.  Add the following to your `service.xml`
    file:
3.  {{< alert title="Note" color="primary" >}}The `passphraseExec` option is only used if it is present and the `secret` option (described in the previous sections) is not used.{{< /alert >}}
4.  >Create the passphrase script in the specified location.
5.  For example, the contents of the `passwd.sh` script is as follows:

{{< alert title="Note" color="primary" >}} The script must be secured by the operating system file permissions so that it is only accessible by, and can only be invoked by the API Gateway. The command should write the password to standard output.{{< /alert >}}

The following files should also be protected:

-   ../system/conf/nodemanager.xml
-   ../skel/service.xml

>

Promotion between environments
------------------------------

When you promote and deploy passphrase-protected configuration between environments (for example, from testing to production), the passphrase for the target configuration (production) can be different from the passphrase in the source configuration (testing).

If you are using a different passphrase in each environment, when the deployment takes place, you can specify the correct passphrase for the target configuration. For more details, see [*Deploy configuration in Policy Studio* on page 1](../CommonTopics/deploy_wizard.htm#Deploy2).

For more details on promoting configuration between environments, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
.

Further information
-------------------

For more details on supported security features, see the
[API Management Security Guide](/bundle/APIGateway_77_SecurityGuide_allOS_en_HTML5)
.
