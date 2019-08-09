{"title":"Install API Portal software","linkTitle":"Install API Portal software","date":"2019-08-09","description":"This section describes the steps to install and uninstall the API Portal software. "} ﻿

This section describes the steps to install and uninstall the API Portal software.

Install API Portal software
---------------------------

1.  Download the installation package for your OS from Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}, and upload it to your host machine.
2.  Log in to the host machine as the `root` user.
3.  Extract the installation package:
4.  \# tar xpvzf <package>.tgz

5.  Run the install script:
6.  \# sh apiportal\_install.sh

7.  Enter the appropriate values when prompted by the installation script. The options you are prompted for include:
    -   Change the default install path. The default path that API Portal is installed in is `/opt/axway/apiportal/htdoc` or you can specify a custom path. The folders specified in the custom path are created if they do not already exist.
    -   Use MySQL in SSL mode (with one way authentication or two way authentication). The certificates generated from MySQL Server must be located in `/etc/mysql/certs/`.
    -   Database connection details. The default port is `3306` or you can specify a different one. The database user is the user you created for API Portal. See [Configure the database server](install_software_configure_database.htm).
    -   Install API Portal in a high availability cluster setup with database replication.
    -   Locations of `php.ini` and `apiportal.conf` configuration files.
    -   Encrypt the Public API mode user password and store the encryption key in a specified directory. The directory is created along with a file. The last segment of the directory is the file name. For example: `/sample/directory/for/encryption/key` creates an empty file named "key" in the desired directory. You can also use a script to encrypt the password later. For more details, see [Encrypt the Public API user password (optional)](Upgrade_software.htm#Encrypt).
    -   Configure API Portal with SSL/TLS. For HTTPS, you can either provide a certificate and private key, or use a self-signed certificate. For more details, see [Configure API Portal to run with HTTP or HTTPS](#Configur).

>

To configure the SE Linux, enter the following commands:

setsebool -P httpd\_read\_user\_content 1

setsebool -P httpd\_can\_network\_connect 1

setsebool -P httpd\_can\_network\_connect\_db 1

setsebool -P httpd\_unified 1

chcon -R -t httpd\_sys\_content\_t /opt/axway/apiportal/htdoc/

semanage fcontext -a -t httpd\_sys\_rw\_content\_t '/opt/axway/apiportal/htdoc(/.\*)?'

restorecon -R -v '/opt/axway/apiportal/htdoc'

### Configure API Portal to run with HTTP or HTTPS

This section describes the options to configure API Portal with HTTP or HTTPS.

#### Run API Portal with HTTP

If you choose not to configure SSL/TLS, API Portal runs with plain HTTP.

{{< alert title="Caution" color="warning" >}}This option increases the risk of security vulnerabilities. {{< /alert >}}

#### Run API Portal with HTTPS

If you choose to configure SSL/TLS, API Portal runs with HTTPS and you can choose one of the following options:

1.  Custom certificate:
    -   The installation prompts you for the path to a certificate and private key.
    -   It checks whether the private key is generated with a passphrase. If it is, the script prompts you for the passphrase and a path to store it. The last segment of the passphrase path is the file name. For example, if you enter `/home/passphrase`, the passphrase is stored in a file with the name `passphrase` in the `/home` directory.
    -   It prompts you for the host name.
2.  API Portal is configured to run with HTTPS using the provided certificate and key.
3.  Self-signed certificate: The installation generates a self-signed certificate and API Portal is configured to run with HTTPS using the self signed certificate.

To complete the HTTP/HTTPS configuration, you must restart Apache. The installation script tries to detect the Apache service and prompts you to restart it. If the script cannot detect Apache you must manually restart Apache.

Install Joomla! components
--------------------------

You must also install the EasyBlog and EasyDiscuss components.

1.  Log in to the Joomla! Administrator Interface (JAI) (`https://<API Portal host>/administrator`) using the default Joomla! administrator credentials.
2.  {{< alert title="Note" color="primary" >}}Contact your Axway Account Manager to retrieve the default administrator credentials. It is mandatory that you change these credentials when you first log in.\
    If after the installation you experience difficulties with the Joomla! administrator password, you can try to reset the password. For more details, see [How do you recover or reset your admin password?](https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F){{< /alert >}}
3.  Click **Components > EasyBlog**, and follow the instructions in the EasyBlog installer.
4.  If prompted to select the installation method, select **Installation via Directory**, select the package from the drop-down list, and follow the instructions in the installer to the finish.
5.  {{< alert title="Note" color="primary" >}}Do not install any of the modules and plugins unless you plan to use them. To prevent installing any modules, click **Modules** and deselect **Select All**, then repeat the same for **Plugins**.{{< /alert >}}
6.  Click **Components > EasyDiscuss**, and repeat the component installation as described for EasyBlog.

{{< alert title="Note" color="primary" >}} To resolve a known issue (caused by EasyBlog) with broken menu paths when creating new custom menus for your API Portal in JAI, you must rebuild the menu paths. In JAI, select **Menus > Main Menu** and click **Rebuild**. You only need to rebuild the menu paths once after installation or upgrade. {{< /alert >}}

Uninstall API Portal software
-----------------------------

To uninstall the API Portal software:

1.  Log in to the host machine as the `root` user.
2.  Change to the directory containing the API Portal installation package.
3.  Run the uninstall script:
4.  \# ./apiportal\_uninstall.sh

5.  Enter the appropriate values when prompted by the uninstall script.
6.  {{< alert title="Note" color="primary" >}} When prompted for the MySQL user name, do not use the SSL MySQL user. Use an ordinary MySQL user that requires only a user name and password. The user must have privileges to drop the API Portal database. {{< /alert >}}

