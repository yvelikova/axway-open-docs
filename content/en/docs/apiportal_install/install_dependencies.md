{"title":"Install API Portal dependencies","linkTitle":"Install API Portal dependencies","weight":"2","date":"2019-08-09","description":"Install required dependencies before you install API Portal."}

<!-- markdownlint-disable MD040 MD014 -->
The API Portal installation script does not install specific dependencies (such as PHP, Apache) that are required by API Portal, so you must install these dependencies yourself before you install API Portal.

## RHEL – Install dependencies from official RHEL repository

On a RHEL7 installation, the default PHP version available in the official repository is 5.4. It is best to install PHP 7.x.

To install PHP 7.x, you can use an additional official RHEL repository. By default, RHEL uses packages from Red Hat Enterprise Linux 7 base channel but RHEL provides additional repositories under the Red Hat Software Collections channel.

### Enable the official RHEL repository

1. Add an official RHEL repository that contains PHP version 7.x:

```
$ sudo subscription-manager repos --enable rhel-server-rhscl-7-rpms
```

1. Clear the cache:

```
$ sudo yum clean all
```

1. Run the update:

```
$ sudo yum update
```

### Install PHP from official RHEL repository

{{< alert title="Note" color="primary" >}}At the time of writing, the latest available PHP version in the RHEL repository is PHP 7.1.x, but the official latest PHP version is 7.2.x. It is best to install the latest 7.x version available.{{< /alert >}}

1. To find the latest PHP7 version, enter the following command:

```
$ sudo yum search php7
```

1. Install all required packages, for example:

```
$ sudo yum install rh-php71 rh-php71-php rh-php71-php-cli rh-php71-php-common rh-php71-php-gd rh-php71-php-json rh-php71-php-intl rh-php71-php-mbstring rh-php71-php-mysqlnd rh-php71-php-pdo rh-php71-php-xml rh-php71-php-zip
```

### Create symbolic link

After installation, create a symbolic link to use PHP directly in a terminal:

1. Check that PHP is located in the directory `/opt/rh/rh-php71/root/usr/bin/php` and execute the following command to verify the PHP version:

```
$ /opt/rh/rh-php71/root/usr/bin/php -v
PHP 7.1.8 (cli) (built: Nov 7 2018 18:12:07) (NTS)
```

1. To create a symbolic link, enter the command:

```
$ ln -s /opt/rh/rh-php71/root/usr/bin/php /usr/bin/php
```

1. Run the following to validate the symbolic link was created successfully:

```
$ php –v
PHP 7.1.8 (cli) (built: Nov 7 2018 18:12:07) (NTS)
```

### Upgrade PHP

If you already have PHP 5.4 or earlier and API Portal 7.8 or earlier installed, you cannot uninstall the old PHP version due to a dependency in API Portal. Perform the steps in [Install PHP from official RHEL repository](#install-php-from-official-rhel-repository) and leave the old PHP version installed. If there is already a symbolic link to the old PHP version, update it with the new location of PHP (for example, using `ln -sf` instead of `ln-s`).

### Configure existing Apache

If Apache is not already installed, skip this section and follow the steps in [Install Apache and PHP from official RHEL repository](#install-apache-and-php-from-official-rhel-repository).

Depending on your existing Apache installation, you might need to configure Apache. Use the following command to check your existing Apache package:

```
$ rpm -qa | grep httpd
```

Follow the appropriate steps for your version (`httpd-2.4.*` or `httpd24-httpd-2.4.*`).

#### Configure existing Apache (httpd-2.4.*)

By default, Apache does not use the newly installed PHP, so you must perform some additional configuration steps. The following steps apply to the default Apache 2.4 (for example, `yum install httpd`) only.

1. Open the file `/etc/httpd/conf/httpd.conf`.
1. Above the line `Include conf.modules.d/*`, remove any existing entry for PHP and add the line:

```
LoadModule php7_module /opt/rh/httpd24/root/usr/lib64/httpd/modules/librh-php71-php7.so
```

1. Add `index.php` to the `<IfModule dir_module>` directive. For example, change:

    ```
    <IfModule dir_module>
            DirectoryIndex index.html
    </IfModule>
    ```

    to:

    ```
    <IfModule dir_module>
            DirectoryIndex index.php index.html
    </IfModule>
    ```

1. Add the following after the `<IfModule dir_module>` directive:

```
# Allow php to handle Multiviews
    AddType text/html .php
    # mod_php options
    <IfModule  mod_php7.c>
        # Cause the PHP interpreter to handle files with a .php extension.
        <FilesMatch \.php$>
            SetHandler application/x-httpd-php
        </FilesMatch>
        # Uncomment the following lines to allow PHP to pretty-print .phps
        # files as PHP source code:
        #<FilesMatch \.phps$>
        #    SetHandler application/x-httpd-php-source
        #</FilesMatch>
        # Apache specific PHP configuration options
        # those can be override in each configured vhost
        #
        php_value session.save_handler "files"
        php_value session.save_path    "/var/opt/rh/rh-php71/lib/php/session"
        php_value soap.wsdl_cache_dir  "/var/opt/rh/rh-php71/lib/php/wsdlcache"
        #php_value opcache.file_cache   "/var/opt/rh/rh-php71/lib/php/opcache"
    </IfModule>
```

1. Save the file and restart Apache:

```
$ systemctl restart httpd
```

#### Configure existing Apache (httpd24-httpd-2.4.*)

This package does not require any additional configuration for PHP.

- You do not have to perform any additional steps if you have installed `httpd24-httpd` (and `httpd24-mod_ssl`) and want to use `rh-php71`.
- If you are using the newer Apache (for example, `yum install httpd24-httpd`) its configuration files are usually located in `/opt/rh/httpd24/root/etc/httpd/`.

### Install Apache and PHP from official RHEL repository

RHEL offers a newer version of Apache that is also available in the additional repository you enabled for PHP.

Follow these steps to install Apache and PHP from the Red Hat Software Collections channel:

1. Enable the additional repository as detailed in [Enable the official RHEL repository](#Enable).
3. If you have Apache already, remove it:

```
$ yum remove httpd
```

4. Install the packages:

```
$ yum install httpd24-httpd httpd24-httpd-tools httpd24-mod_ssl
```

4. Verify you have the package `httpd24-httpd` with the command:

```
$ rpm -qa  grep httpd24-httpd
```

1. Create a symbolic link:

```
$ ln -sf /opt/rh/httpd24/root/sbin/httpd /usr/bin/httpd 
```

1. Restart the terminal to enable the symbolic link.
1. Verify:

```
$ httpd -v
```

1. Perform the steps in [Install PHP from official RHEL repository](#install-php-from-official-rhel-repository).
1. Restart Apache:

```
$ systemctl restart httpd24-httpd
```

No additional PHP configuration is required.

## RHEL – Install dependencies from community repository EPEL with Remi

EPEL (Extra Packages for Enterprise Linux) is an open source repository which provides add-on software packages for Linux distributions including RHEL, CentOS, and Scientific Linux. Using this repository allows you to install the latest available PHP. For example, at the time of writing, you can install PHP 7.2.* from this repository, whereas only PHP 7.1.* is available in the official RHEL repository.

### Install PHP from EPEL repository

1. Turn on the EPEL repository and search for PHP:

```
$ yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
$ yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
$ yum install yum-utils
$ subscription-manager repos --enable=rhel-7-server-optional-rpms
$ yum-config-manager --enable remi-php72
$ yum update
$ yum search php72
```

    All available PHP packages are listed.
1.  Install PHP:

```
$ yum install php72 php72-php php72-php-cli php72-php-gd php72-php-json php72-php-mbstring php72-php-mysqlnd php72-php-xml php72-php-zip php72-php-pdo php72-php-intl
```

1. After PHP is installed, create a symbolic link:

```
$ ln -sf /opt/remi/php72/root/bin/php /usr/bin/php
```

1. Reopen the terminal if you cannot verify with `php -v` and try again.
1. Configure Apache. Follow the steps in [Configure existing Apache](#configure-existing-Apache).
1. Because the location of the PHP `.so` file is different, use the following when setting the PHP module in the Apache configuration:

```
LoadModule php7_module /opt/remi/php72/root/lib64/httpd/modules/libphp7.so.
```

1. Follow the steps in [Upgrade PHP](#upgrade-php) to upgrate your PHP.

## CentOS – Install dependencies from community repository EPEL with Remi

CentOS also does not offer the latest PHP version in the default repositories. To install the latest PHP, it is best to use the EPEL repository.

### Install PHP from community repository EPEL with Remi

1. Install the EPEL repository:

```
$ yum install epel-release
```

1. Install the Remi repository:

```
$ yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

1. Install `yum-utils` packages (if not already installed):

```
$ yum install yum-utils
```

1. Enable the Remi repository:

```
$ yum-config-manager --enable remi-php72
$ yum update
```

1. Verify the repository is enabled:

```
$ yum search php72
```

1. Install PHP:

```
$ yum install php72 php72-php php72-php-cli php72-php-gd php72-php-json php72-php-mbstring php72-php-mysqlnd php72-php-xml php72-php-zip php72-php-pdo php72-php-intl
```

1. Configure Apache.

  - Use the steps in [Configure existing Apache (httpd-2.4.\*)](#configure-existing-apache-httpd-2-4) as a reference, but because the location of the PHP `.so` file is different, search for the location of a file similar to `libphp72.so` and use that path when setting the PHP module in the Apache configuration.

  - You do not need to configure Apache if you have already installed it through the package manager.

1. Restart Apache:

```
$ systemctl restart httpd
```

1. Verify that the installed version is set:

```
php -v
```

1. If the result is not the newly installed version, modify the PHP symbolic link with the path to the new version:

```
/opt/remi/php72/root/bin/php
```

1. Remove the old version of PHP.

### Install Apache from community repository EPEL with Remi

1. To install Apache, enter the following command:

```
$ yum install httpd httpd-tools mod_ssl
```

1. To start Apache, enter the following command:

```
$ systemctl start httpd
```
