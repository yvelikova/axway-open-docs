{
    "title":"Unattended installation",
    "linkTitle":"Unattended installation",
    "weight":"10",
    "date":"2019-08-09",
    "description":"Install or uninstall API Portal in unattended or silent mode."
}

## Install API Portal in unattended mode

To install the API Portal software in unattended mode:

1. Download the installation package for your OS from Axway Support at [https://support.axway.com](https://support.axway.com/), and upload it to your host machine.
2. Log in to the host machine as the `root` user.
3. Extract the installation package:

    ```
    # tar xpvzf <package_name>.tgz
    ```

1. Run the install script with the appropriate script options. For example:

    ```
    # ./apiportal_install.sh --mysql-ssl=n --install-path="/opt/axway/apiportal/htdoc" --mysql-database=joomla --mysql-host=localhost --mysql-port=3306 --mysql-username=apiportal --mysql-password=password --weak-mysql-password=y --initial-ha-instance=n --php-ini="/etc/" --apache-config="/etc/httpd/conf.d/" --use-encryption-key=n --use-ssl=y --ssl-type=2 --restart-apache=y
    ```

### Install script options

| Option                   | Description|
|--------------------------|----------|
| `-h` or `--help`             | Prints all available options for the script.|
| `--apache-without-php`     | Accepts yY/nN. Flag indicating whether user wants to continue when PHP could not be detected in Apache.|
| `--mysql-ssl`              | Accepts yY/nN. Flag indicating whether to use MySQL in SSL mode.|
| `--mysql-ssl-method`       | Accepts 1 or 2. Indicates the method used when SSL mode for MySQL is wanted. <ul><li>1 - One-way authentication</li><li>2 - Two-way authentication</li></ul>|
| `--install-path`           | The install path for API Portal. Example: `/opt/axway/apiportal/htdoc.`|
| `--mysql-database`         | The database to be used by API Portal.  |
| `--mysql-host`             | Database host. |
| `--mysql-port`             | Database port. Example: 3306 |
| `--mysql-username`         | Database user.|
| `--mysql-password`         | Database password.|
| `--weak-mysql-password`    | Accepts yY/nN. Flag indicating whether installation should continue when MySQL password is weak.|
| `--ha-instance`            | Accepts yY/nN. Flag indicating whether the HA setup is wanted. Use only for instances that are not initial. For the initial instance use the `--initial-ha-instance` option. |
| `--initial-ha-instance`    | Accepts yY/nN. Flag indicating whether that would be the initial instance of HA setup.  |
| `--php-ini`                | The directory where `php.ini` file is located. Example: `/etc` |
| `--apache-config`          | The directory where the Apache configuration files are located. Example: `/etc/httpd/conf.d`|
| `--use-encryption-key`     | Accepts yY/nN. Flag indicating whether an encryption key is wanted. This option is required when public API mode is going to be used. |
| `--encryption-key`         | The place where the encryption key will be stored. Example: `/home/encryption/key`. The last segment is the filename where the key will be stored. In this example it will be called 'key'. Used when yY is selected for `--use-encryption-key` option.|
| `--use-ssl`                | Accepts yY/nN. Flag indicating whether API Portal will be served by SSL.|
| `--ssl-type`               | Accepts 1 or 2. Indicates what SSL type is wanted. <ul><li>1 - Custom certificate and private key will be provided.</li><li>2 - Use self-signed certificate.</li></ul>|
| `--ssl-certificate`        | Path to the SSL certificate. (Used when option 1 is selected for SSL type.)|
| `--private-key`            | Path to the private key. (Used when option 1 is selected for SSL type.)|
| `--private-key-passphrase` | The passphrase of the private key. (Used when the key was generated.) Used when option 1 SSL type is selected.|
|` --passphrase-path`        | The place where passphrase will be stored. The last segment is the filename where the passphrase will be stored. That file is needed to setup Apache to start silently (without asking for a passphrase). Used when option 1 SSL type is selected.|
| `--hostname`               | The hostname of API Portal. Used when option 1 SSL type is selected.|
| -`-restart-apache`         | Accepts yY/nN. Flag indicating whether Apache restart is wanted after installation ( when the Apache service is correctly detected, otherwise a manual restart of Apache is required). |

## Uninstall API Portal in unattended mode

To uninstall the API Portal software in unattended mode:

1. Log in to the host machine as the `root` user.
2. Change to the directory containing the API Portal installation package.
3. Run the uninstall script with the appropriate script options. For example:

    ```
    # ./apiportal_uninstall.sh --mysql-database=testDB --mysql-host=localhost --mysql-port=3306 --mysql-username=root --mysql-password=Admin@123
    ```

### Uninstall script options

| Option           | Description                                  |
|------------------|----------------------------------------------|
| `-h or --help`     | Prints all available options for the script. |
| `--mysql-database` | The database to be used by API Portal.       |
| `--mysql-host`     | Database host.                               |
| `--mysql-port`     | Database port.                               |
| `--mysql-username` | Database user.                               |
| `--mysql-password` | Database password.                           |

## Encrypt the Public API user password in unattended mode

To encrypt the Public API mode user password in unattended mode:

1. Log in to the host machine as the `root` user.
2. Change to the directory containing the API Portal installation package.
3. Run the encryption script with the appropriate script options. For example:

    ```
    # ./apiportal_encryption.sh --encryption-key="/publicapi/encryption/user.key"
    ```

### Encryption script options

| Option             | Description |
|--------------------|----------------|
| `-h or --help`     | Prints all available options for the script|
| `--encryption-key` | The place where the encryption key will be stored. Example: `/home/encryption/key`. The last segment will be the filename where the key will be stored. In the example case it will be called 'key'. |
