{
"title": "Security best practices",
"linkTitle": "Security best practices",
"weight": 9,
"date": "2019-11-25",
"description": "When using this product, follow these security best practices."
}

When using this product, follow these security best practices.

## Secure connections

As stated earlier, all connections between internal components ( API Gateways and Node Managers) are secured by mutual authentication.  Best practices would recommend securing all connections to external networks with mutual authentication, where that is supported by the back-end service.

Similarly, where API Gateway is receiving messages over various protocols, ensure these connections are mutually authenticated where possible.

## Sample certificates

Axway provides sample certificates with the product. These sample certificates and key pairs can be found in the API Gateway's trusted certificate store and should be used for test purposes only.

As soon as the product goes live, or as soon as real data is managed by the product, you must use your own certificates. Using sample certificates is a security risk as all API Gateway customers have the same certificates with the same private keys.

## Self-signed certificates

Using self-signed certificates may also be a security risk for many reasons, including:

* Anyone can generate his own certificate and you need a very secure process to receive/send these certificates to make sure they are coming from the right partner. When using CA-signed certificates, you can rely on the CA.
* If self-signed certificates are not securely stored, anyone can change them. CA-signed certificates also must be securely stored, but no one can change them.
* There is no way to revoke self-signed certificates.

## Privileged access user list

The API Gateway installer sets access rights on its files so that only the user that installed the image can read or modify files.  This means that only the API Gateway itself can access its log, trace, and configuration files.

You must limit the users that have privileged access to the machine on which API Gateway is running. At a minimum, maintain a list of administrators and a list of users with access to multiple functions.

## Internet access limitation

As much as possible, limit the number of Internet access points. Do not open useless Internet connections and limit interconnections with external networks as much as possible. This limits the product’s attack surface, reduces the risk of external attacks, and makes it easier to audit the product.

For a list of default ports that are opened by the API Gateway components, see the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
.

## Session timeouts

The default idle session timeout for the API Gateway Manager web UI is 12 hours. It is recommended that you change this timeout to 120 minutes or less. For details, see the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
.

## Correct upgrade procedure

In the event of a possible vulnerability discovered in the product, you must be able to apply the patch or new Service Pack as soon as possible. Make sure you have the correct procedure to complete the upgrade. Always use the latest version of the product, if possible, as it contains fixes to known vulnerabilities.

For more information on upgrade procedures, see the following documents:

* API Gateway software:
    [API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
    and
    [API Gateway Upgrade Guide](/bundle/APIGateway_77_UpgradeGuide_allOS_en_HTML5)
* API Portal:
    [API Portal Installation and Upgrade Guide](/bundle/APIPortal_77_InstallationGuide_allOS_en_HTML5)

## Generic or anonymous users

The term “generic users” means that the password is shared among multiple specific users. This makes it easier for an attacker to retrieve this password. In addition, the procedure to change shared passwords can be complicated and risky. In case of an incident, these generic or anonymous users make it impossible to determine who completed the erroneous action.

In cases where multiple administrator users are responsible for configuring policies (via Policy Studio) to run on API Gateway, it makes a lot of sense to create distinct users for each administrator user.

## Password policy

In line with security best practices, you can configure a password policy for administrator users in API Gateway Manager. Password policy refers to the size and complexity of the password, as well as to all the rules to manage the password.

It is also possible to take certain actions when a configurable number of invalid authentication attempts has occurred via HTTP basic, HTTP digest, and HTML form-based authentication.  For example, you can lock a user account or ban an IP address if a certain number of invalid passwords have been submitted to API Gateway.

For more information on setting the password policy for administrator users, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

You can also configure password policies for API Manager and API Portal users. For details, see the
[API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/)
and the
[API Portal Administrator Guide](/bundle/APIPortal_77_AdministratorGuide_allOS_en_HTML5)
.

## Default authentication account

The default behavior of the software version of the product is to force you to set an administrator password during installation.

## Remote connections

You should limit your remote connections in the following ways:

* If no one needs to access the product remotely, make sure that the UI ports are closed in your firewall.
* If someone needs to connect remotely only occasionally, set a procedure to open the port only on demand.
* Do not turn off the secure-by-default measures already taken for the internal components of the product, for example, API Gateway, Admin Node Manager, and Policy Studio.

## Logging, audit, and alerts rules

An important aspect of security is to be notified when something wrong occurs, and to be able to investigate it. Therefore, it is important to define the right level of logging and audit, and to set the right alerts.

API Gateway can log audit and monitoring data to the following locations:

* Axway Sentinel
* Local text file
* Local XML file
* Database
* Local syslog
* Remote syslog
* System console
* Apache Access log file

Events can be audited at different levels, for example, success, failure, or abort.  The audit trails written to the local text file, local XML file, and database can all be signed to ensure integrity.

The product can also send the following types of alerts under certain configurable error conditions:

* Email messages
* OPSEC alerts
* SNMP trap
* Local and remote syslog
* Windows event log
* Amazon SNS
* Twitter feed

See the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
for more information on configuring logging and alerting in API Gateway.

## Sensitive files and databases

In general, it is good practice to limit the number of administrators with access to the product.

Ensure the default protection mechanisms on sensitive files used by API Gateway and API Portal remain in place.  For example, the product’s files are installed with read, update, and delete privileges such that only the product can access them by default.  There should be no reason to change these privileges.

The following files are deemed sensitive from a security perspective, where `GROUP` and `INSTANCE` placeholders represent the identifiers (for example, `group-2`, `instance-1`, and so on) of the group in a multi-group and a multi-instance domain, respectively.

Node Manager Entity Store

The files located in the following directory comprise the configuration for the Node Manager:

/conf/fed

API Gateway Entity Store

The files in the following directory, where \[ID\] represents the policy package ID, make up the main configuration for API Gateway.

/groups/<GROUP>/conf/<ID>

As stated earlier (see [Entity Store passphrase](../Configuration/c_secgd_config_secconfig.htm#Entity)), an encryption passphrase can be used to encrypt sensitive data in the Entity Store, including private keys, passwords, and tokens.

Administrator passwords

The following file contains the hashed passwords of administrator users that have the ability to configure the product. 

/conf/adminUsers.json

The passwords are stored as a salted hash derived from 102400 iterations of the PBKDF2 algorithm with HmacSHA-2.  Each password uses a different salt so that identical passwords result in different stored hashes.

Key Property Store

If you have configured the product to store data in a Key Property Store (KPS), the files located in the following directory must be protected:

/groups/<GROUP>/<INSTANCE>/Communion/kps

Automated startup files

In cases where API Gateway must be started automatically without manual intervention, it is necessary to store the Entity Store encryption passphrase (when used) in certain configuration files, which are as follows:

/groups/<GROUP>/<INSTANCE>/conf/service.xml

/system/conf/nodemanager.xml

/skel/service.xml

If you configure a password executable file for use with `managedomain` (see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
for details), it is important to protect the following file:

/conf/managedomain.props

You should also protect the password executable file specified by the `password_exec` parameter in the `managedomain.props` file.

API firewalling rule set

API Gateway embeds Apache ModSecurity — a toolkit for real-time HTTP traffic monitoring, logging, and access control — to help companies mitigating application-level threats on their APIs. The embedded ModSecurity engine looks for threat protection rules configuration in the `/system/conf/threat-protection/default` directory. This directory and the files within it must be protected.

Audit, trace, and log files

In terms of audit trail data written out by the API Gateway, it is important to protect the following files and directories from modification or deletion:

`/logs`

`/trace`

`/groups/<GROUP>/<INSTANCE>/logs`

`/groups/<GROUP>/<INSTANCE>/trace`

You should also protect any custom logging files if a non-default location has been configured.

API Portal

The files located in the following directory contain configuration, log, and source files:

/opt/axway/apiportal/htdoc

The following directory contains the database user and password:

/opt/axway/apiportal/htdoc/configuration.php

Files related to single sign on (SAML SSO)

SSO agent configuration file:

/groups/<GROUP>/<INSTANCE>/conf/service-provider.xml

SSO agent keystore (private key used to sign SAML messages) generated by the user in:

/groups/<GROUP>/<INSTANCE>/conf/

Identity Provider’s metadata files:

/groups/<GROUP>/<INSTANCE>/conf/idp.xml

It is a recommended practice to not change default security options:

secure-cookie = true

saml-allow-http-connection = false

Signature:

sign = true

saml-signature-algorithm = rsa-sha256

saml-allow-unsigned-assertion = false

saml-verify-metadata-signature = true

### File integrity

After downloading the product package from Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}, it is highly recommended to verify the file integrity. Use a third-party tool for your OS to compute the hash of the downloaded file and compare it with the hash that is displayed on the Details page for the product package. Both SHA-256 and MD5 hashes are provided but it is safer to use SHA-256.

It is also recommended to protect file integrity after the product has been installed using a file integrity monitoring tool. In order to be able to configure the monitoring tool, the following tables provide information about the files used by the product and which actions can modify those files.

#### Files modified when upgrading

Upgrading API Gateway, API Manager, or API Portal can modify any file in the system. Before you upgrade, it is recommended to switch off your monitoring tool.

#### Files modified on specific actions in API Gateway and API Manager

Outside upgrade, the following files in API Gateway and API Manager should not change, and it is recommended to monitor their integrity:

| Description        | Directory                                                   | Files                                           |
|--------------------|-------------------------------------------------------------|-------------------------------------------------|
| C++ files          | `INSTALL_DIR/apigateway/Linux.x86_64`                       | `*.so` in the directory and all subdirectories  |
| Oracle Java plugin | `INSTALL_DIR/apigateway/Linux.x86_64/system/conf/oracle-em` | `gateway-oracle-em-plugin.jar`                  |
| Java files         | * `INSTALL_DIR/apigateway/Linux.x86_64y/system/lib`       
  * `INSTALL_DIR/apigateway/Linux.x86_64/jre/lib/`           
  * `INSTALL_DIR/apigateway/Linux.x86_64/lib/`               
  * `INSTALL_DIR/apigateway/Linux.x86_64/java/`              
  * `INSTALL_DIR/apigateway/Linux.x86_64/java`               
  * `INSTALL_DIR/apigateway/samples/WebServices/lib/`        
  * `INSTALL_DIR/apigateway/upgrade/legacy/7.1.x/`           | `*.jar` in the directory and all subdirectories |
| Javascript files   | `INSTALL_DIR/apigateway/webapps`                            | `*.js` in the directory and all subdirectories  |
| Executables        | `INSTALL_DIR/apigateway/posix/bin`                          | `*.*` in the directory                          |

{{< alert title="Note" color="primary" >}} All other files are modified at runtime and cannot be verified using a monitoring tool.{{< /alert >}}

#### Files modified on specific actions in API Portal

Outside upgrade, the following files in API Portal are modified by specific actions:

| Description        | Directories                                  | Files                                   | Actions                                                                                  |
|--------------------|----------------------------------------------|-----------------------------------------|------------------------------------------------------------------------------------------|
| Configuration file | `INSTALL_DIR/`                               | `  configuration.php`                   | The configuration is updated manually or through Joomla! Administration Interface (JAI). |
| Static content     | * `INSTALL_DIR/views/ documentation/tmpl/` 
  * `INSTALL_DIR/views/help/tmpl/`            
  * `INSTALL_DIR/views/pricing/tmpl/`         
  * `INSTALL_DIR/views/terms/tmpl/`           
  * `INSTALL_DIR/views/home/tmpl/`            | `default.php`, `contact.php`, `faq.php` | The file contains static content that can be modified.                                   |
| Template files     | `INSTALL_DIR/templates/purity_iii/local/`    | `*.*`                                   | New themes are created or the CSS files modified.                                        |
| Custom CSS files   | `INSTALL_DIR/templates/purity_iii/css/`      | `*.*`                                   | The custom CSS file can be modified.                                                     |

{{< alert title="Note" color="primary" >}} All other files are modified at runtime and cannot be verified using a monitoring tool.{{< /alert >}}

Certificate verification
------------------------

It is recommended that you explicitly configure the API Manager certificate in API Portal and enable API Portal to verify the certificate and host of API Manager. For more information, see the
[API Portal Installation and Upgrade Guide](/bundle/APIPortal_77_InstallationGuide_allOS_en_HTML5)
.

Internet access restriction
---------------------------

In API Portal, it is recommended that you protect the Joomla! administration UI from direct Internet access. For more information, see the
[API Portal Installation and Upgrade Guide](/bundle/APIPortal_77_InstallationGuide_allOS_en_HTML5)
.

Administrator user name
-----------------------

API Portal forces you to change the administrator password on first login. For best practice, you should also change the administrator user name.
