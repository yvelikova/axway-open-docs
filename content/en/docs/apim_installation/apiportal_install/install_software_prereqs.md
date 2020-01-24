{
"title": "Software installation prerequisites",
  "linkTitle": "Prerequisites",
  "weight": "1",
  "date": "2019-08-09",
  "description": "Your system must meet these prerequisites before you can install API Portal."
}

## Internet connection

Installing API Portal dependencies requires an Internet connection. Offline installation is not currently supported.

## Hardware requirements

The minimum hardware requirements are:

* 2 Ghz Dual Core Intel Core or AMD Opteron or faster
* 8 GB RAM
* 40 GB free disk space

## Software requirements

API Portal has the following requirements for software components.

### Operating system

You must have Red Hat Enterprise Linux (RHEL) 7 or CentOS 7 installed.

### Database

You must have one of the following installed:

* MySQL 5.6 or later

    {{< alert title="Note" color="primary" >}}API Portal does not officially support MySQL 8 as Joomla! does not support it. However, API Portal has been tested to work with MySQL 8 using a workaround. You must apply the workaround described at [Joomla! and MySQL 8](https://docs.joomla.org/Joomla_and_MySQL_8) before you install API Portal.{{< /alert >}}

* MariaDB 5.5.50 or later

For details how to install a database using `yum`, see the following:

* [My SQL installation instructions](http://dev.mysql.com/doc/refman/5.6/en/linux-installation-yum-repo.html)
* [MariaDB installation instructions](https://mariadb.com/kb/en/mariadb/yum/)

If your database is on a remote host, you must configure a MySQL client or a MariaDB client.

For more details, see following product documentation:

* [MySQL documentation](https://dev.mysql.com/doc/refman/5.6/en/)
* [MariaDB documentation](https://mariadb.com/kb/en/mariadb/documentation/)

### PHP

API Portal requires PHP 7.1 or later.

In addition you must have the following PHP modules installed:

* `php-zip`
* `php-openssl`
* `mod_php`
* `php-common`
* `php-mysqld` or `php-mysqli`
* `php-cli`
* `php-gd`
* `php-intl`
* `php-mbstring`
* `php-pdo`
* `php-xml`
* `php-json`

#### Install dependencies

For more information on installing dependencies, see [Install API Portal dependencies](/docs/apim_installation/apiportal_install/install_dependencies).

### Other software

API Portal requires the following to be installed:

* API Gateway 7.7
* API Manager 7.7
* Apache 2.4.x
* OpenSSL

{{< alert title="Note" color="primary" >}}The monitoring feature of API Portal, which enables your API consumers to monitor application and API usage, requires a connected API Manager with monitoring metrics enabled. {{< /alert >}}

## Examples of dependencies in a minimal OS installation

The following are examples of the dependencies API Portal installs in a *minimal* RHEL 7.

If you are installing API Portal on an air-gapped server, or your environment only allows installing components from a curated local repository, you can use these lists to ensure that you have all the required packages downloaded and installed on the server, or approved and made available on the curated repository.

### Dependencies with Apache

* rhel-apache-conf
* libXpm
* libtool-ltdl
* mod_ssl
* t1lib

### Dependencies with MySQL

* mysql-community-libs
* mysql-community-libs-compat
* mysql-community-server
* mysql-community-client
* mysql-community-common
* perl
* perl-Carp
* perl-Encode
* perl-Exporter
* perl-File-Path
* perl-File-Temp
* perl-Filter
* perl-Getopt-Long
* perl-HTTP-Tiny
* perl-PathTools
* perl-Pod-Escapes
* perl-Pod-Perldoc
* perl-Pod-Simple
* perl-Pod-Usage
* perl-Scalar-List-Utils
* perl-Socket
* perl-Storable
* perl-Text-ParseWords
* perl-Time-HiRes
* perl-Time-Local
* perl-constant
* perl-libs
* perl-macros
* perl-parent
* perl-podlators
* perl-threads
* perl-threads-shared

### Dependencies with PHP

* php
* php-mbstring
* php-opcache
* apr
* apr-util
* httpd
* httpd-tools
* mailcap
* php-cli
* php-common
* openssl
* openssl-libs
