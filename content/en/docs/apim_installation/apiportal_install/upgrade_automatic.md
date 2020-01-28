{
"title": "Upgrade API Portal",
  "linkTitle": "Upgrade API Portal",
  "weight": "20",
  "date": "2019-08-09",
  "description": "Upgrade your existing API Portal to 7.7."
}
This section does not describe how to upgrade API Gateway. For information on upgrading API Gateway, see [API Gateway Upgrade Guide](/docs/apim_installation/apigw_upgrade/).

## Upgrade prerequisites

Before you upgrade, complete the following prerequisites. These prerequisites apply for all installations: software installation and Docker containers.

* If you intend to use the EasyBlog and EasyDiscuss plugins, you must install them before you start the upgrade. For more details, see [Install API Portal](/docs/apim_installation/apiportal_install/install_software/).
* Stop and back up the existing API Portal files and database. There is no option to roll back after you start the upgrade.
* To back up an API Portal software installation, perform a file system backup and export the database.

## Upgrade API Portal

If you have an existing API Portal installation, you can upgrade that installation to a newer version without having to repeat the initial setup.

* Upgrade to API Portal 7.7.20200130 is supported from API Portal 7.7.x only. To upgrade from earlier versions, you must first upgrade to 7.7.
* Upgrade to API Portal 7.7 is supported from API Portal 7.6.2 only. To upgrade from earlier versions, you must first upgrade to 7.6.2.
* API Portal 7.7 GA and API Portal 7.7 SP1 to SP4 is compatible with API Gateway and API Manager 7.7 GA and    API Gateway and API Manager SP1 to SP2 only.
* API Portal 7.7.20200130 is compatible with API Gateway and API Manager 7.7.20200130 only.

To upgrade your API Portal software installation, follow these steps:

1. Download the API Portal upgrade package from the Axway Support at [https://support.axway.com](https://support.axway.com/).
2. Go to the the directory where you saved the upgrade package and extract it:
   ```
   # tar xpvzf <package_name>.tgz
   ```
3. Extract `joomla-update-package-3.9.14-package.zip` from the API Portal upgrade package to your local file system.
4. Log in to the Joomla! Administrator Interface (JAI) (`https://<API Portal host>/administrator`).
5. Click **Components > Joomla! Update**, and go to the **Upload & Update** tab.
   If **Joomla! Update** is not visible in the menu, connect to your user database and execute the following query for API Portal database:
   ```
   update s8f7h_menu set menutype='main' where title like 'com_joomlaupdate'
   ```
6. Select `joomla-update-package-3.9.14-package.zip` from your file system.
7. Click **Upload & Install**, and follow the displayed instructions.
8. Enter the following to run the upgrade script:
   ```
   # ./apiportal_upgrade.sh
   ```
9. Run the upgrade script with the appropriate arguments. For example:
   ```
   # ./apiportal_upgrade.sh
   ```

## Post-upgrade steps

After the upgrade, perform the following tasks.

### Reinstall Joomla! components

After upgrade, you must reinstall Easyblog and EasyDiscuss in JAI to update the component version and fix compatibility issues. The API Portal data related to the components (posts, attachments) is not affected.

1. Log in to the JAI.
2. Click **Components > EasyBlog**, and follow the instructions in the EasyBlog installer.
3. If prompted to select the installation method, select **Installation via Directory**, select the available package from the drop-down list, and follow the instructions in the installer to the finish.
   Do not install any of the modules and plugins unless you plan to use them. To prevent installing any modules, click **Modules** and deselect **Select All**, then repeat the same for **Plugins**.
4. Click **Components > EasyDiscuss**, and repeat the component installation as described for EasyBlog.

{{< alert title="Note" color="primary" >}} To resolve a known issue (caused by EasyBlog) with broken menu paths when creating new custom menus for your API Portal in JAI, you must rebuild the menu paths. In JAI, select **Menus > Main Menu** and click **Rebuild**. You only need to rebuild the menu paths once after installation or upgrade. {{< /alert >}}

### Restore footer customizations

If you customized the company name in your API Portal footer using a Joomla! language override (**Extensions > Languages > Overrides** in JAI), you must perform the following steps to restore language overrides after upgrade:

1. Locate the backup file `/opt/axway/apiportal/htdoc/Backups/<timestamp>/administrator/language/overrides/en-GB.override.ini` that is created during an upgrade. The timestamp corresponds to the time of the upgrade, for example, `20180613105149`.
2. Copy the backup file to the path `/opt/axway/apiportal/htdoc/language/overrides/en-GB.override.ini`.

Any customizations performed using language overrides are now restored.

### 

### Hide blog from the API Portal landing page (optional)

After the upgrade, the blog is visible and accessible on the main menu on the API Portal landing page, because the EasyBlog plugin overrides permissions. If you want to hide your blog on the landing page, do the following:

1. Log in to JAI.
2. Click **Menus > Main Menu**, and select **Blog**.
3. On the **Details** tab, set **Access** to **Registered**, and click **Save**.
4. Refresh the API Portal landing page. Blog is no longer visible in the main menu before signing in.

### Consolidate vhosts and .htaccess files (optional)

During upgrade, the original `vhost` file is backed up to the following location: `/etc/httpd/conf.d/apiportal.conf.old`

A new `vhost` file is deployed at the same location.

If the you had any customizations in your `vhost` file and you want to preserve them, you must merge the old and new files together manually.

### Encrypt the Public API mode user password (optional)

If you are using the Public API mode in API Portal you must run a script to encrypt the Public API mode user password and specify a directory to store the encryption key.

```
# sh ./apiportal_encryption.sh
```

The directory is created along with a file. The last segment of the directory is the file name, for example: `/sample/directory/for/encryption/key` creates an empty file named "key" in the desired directory.

After the script is finished, re-enter the password for the Public API mode user in JAI to encrypt and store it correctly. For more details see .
