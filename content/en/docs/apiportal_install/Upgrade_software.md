{"title":"Upgrade API Portal software installation","linkTitle":"Upgrade API Portal software installation","date":"2019-08-09","description":"If you have an existing API Portal installation, you can upgrade that installation to a newer version without having to repeat the initial setup. "} ﻿

If you have an existing API Portal installation, you can upgrade that installation to a newer version without having to repeat the initial setup.

-   Upgrade to API Portal 7.8 is supported from API Portal 7.6.2 only. To upgrade from earlier versions, you must first upgrade to 7.6.2.
-   API Portal 7.8 is compatible with API Gateway and API Manager 7.8 only.

Upgrade API Portal
------------------

{{< alert title="Note" color="primary" >}}Ensure that you check the [Upgrade prerequisites](upgrade_prereqs.htm) before you start the upgrade.{{< /alert >}}

To upgrade your API Portal software installation, follow these steps:

1.  Download the API Portal upgrade package from the Axway Support at [https://support.axway.com](https://support.axway.com/){.hyperlink}
2.  Go to the the directory where you saved the upgrade package and extract it:
3.  \# tar xpvzf <package>.tgz
4.  Log in to the Joomla! Administrator Interface (JAI) (`https://<API Portal host>/administrator`).
5.  Click **Components > Joomla! Update**, and go to the **Upload & Update** tab.
6.  {{< alert title="Note" color="primary" >}}In case **Joomla! Update** is not visible in the menu, connect to your user database and execute the following query for API Portal database:{{< /alert >}} update s8f7h\_menu set menutype='main' where title like 'com\_joomlaupdate'
7.  Browse to the extracted API Portal upgrade package, and select the included Joomla! upgrade package file (for example, `joomla-update-package-3.8.8-package.zip`).
8.  Click **Upload & Install**, and follow the displayed instructions.
9.  Enter the following to run the upgrade script:
10. \# ./apiportal\_upgrade.sh

Post-upgrade steps
------------------

After the upgrade, perform the following tasks.

### Reinstall Joomla! components

After upgrade, you must reinstall Easyblog and EasyDiscuss in JAI to update the component version and fix compatibility issues. The API Portal data related to the components (posts, attachments) is not affected.

1.  Log in to the JAI.
2.  Click **Components > EasyBlog**, and follow the instructions in the EasyBlog installer.
3.  If prompted to select the installation method, select **Installation via Directory**, select the available package from the drop-down list, and follow the instructions in the installer to the finish.
4.  {{< alert title="Note" color="primary" >}}Do not install any of the modules and plugins unless you plan to use them. To prevent installing any modules, click **Modules** and deselect **Select All**, then repeat the same for **Plugins**.{{< /alert >}}
5.  Click **Components > EasyDiscuss**, and repeat the component installation as described for EasyBlog.

{{< alert title="Note" color="primary" >}} To resolve a known issue (caused by EasyBlog) with broken menu paths when creating new custom menus for your API Portal in JAI, you must rebuild the menu paths. In JAI, select **Menus > Main Menu** and click **Rebuild**. You only need to rebuild the menu paths once after installation or upgrade. {{< /alert >}}

### Restore footer customizations

If you customized the company name in your API Portal footer using a Joomla! language override (**Extensions > Languages > Overrides** in JAI), you must perform the following steps to restore language overrides after upgrade:

1.  Locate the backup file `/opt/axway/apiportal/htdoc/Backups/<timestamp>/administrator/language/overrides/en-GB.override.ini` that is created during an upgrade. The timestamp corresponds to the time of the upgrade, for example, `20180613105149`.
2.  Copy the backup file to the path `/opt/axway/apiportal/htdoc/language/overrides/en-GB.override.ini`.

Any customizations performed using language overrides are now restored.

### Check for updates

Before you start configuring your API Portal, check if there are any updates available for your installation and install them. For more details, see [Update API Portal](install_service_pack.htm).

### Hide blog from the API Portal landing page (optional)

After the upgrade, the blog is visible and accessible on the main menu on the API Portal landing page, because the EasyBlog plugin overrides permissions. If you want to hide your blog on the landing page, do the following:

1.  Log in to JAI.
2.  Click **Menus > Main Menu**, and select **Blog**.
3.  On the **Details** tab, set **Access** to **Registered**, and click **Save**.
4.  Refresh the API Portal landing page. Blog is no longer visible in the main menu before signing in.

### Consolidate vhosts and .htaccess files (optional)

During upgrade, the original `vhost` file is backed up to the following location:

-   **Software installation**: `/etc/httpd/conf.d/apiportal.conf.old`

A new `vhost` file is deployed at the same location.

If the you had any customizations in your `vhost` file and you want to preserve them, you must merge the old and new files together manually.

### Encrypt the Public API mode user password (optional)

If you are using the Public API mode in API Portal you must run a script to encrypt the Public API mode user password and specify a directory to store the encryption key.

\# sh ./apiportal\_encryption.sh

The directory is created along with a file. The last segment of the directory is the file name, for example: `/sample/directory/for/encryption/key` creates an empty file named "key" in the desired directory.

After the script is finished, re-enter the password for the Public API mode user in JAI to encrypt and store it correctly. For more details see .
