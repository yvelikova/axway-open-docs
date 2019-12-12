{
    "title":"Install Redis cache",
    "linkTitle":"Install Redis",
    "weight":"3",
    "date":"2019-08-09",
    "description":"Optionally install a Redis cache for better performance."
}

For better performance and scalability, you can configure API Portal to cache APIs in a Redis cache. Using a Redis cache is recommended if you plan to expose hundreds of APIs, or you plan to connect API Portal to more than one API Manager.

## Install PHP dependencies

Before installing Redis, you must install `phpize` that prepares your environment for compiling and installing PHP extensions, and `phpredis` extension.

1. `phpize` is installed as part of the PHP development package (for example, `php5.6-dev` or `php7.0-dev`). If you do not have a PHP development package installed, install the correct package for your PHP version:

    ```
    $ yum install php-devel
    ```

1. Download the latest available version of `phpredis` from the [Github repository](https://github.com/phpredis/phpredis), and extract the package. For example:

    ```
    $ wget https://github.com/phpredis/phpredis/archive/3.1.4.zip
    $ unzip phpredis-3.1.4.zip
    ```

1. Change to the directory where you extracted the `phpredis` package, and run the following:

    ```
    $ phpize
    $ ./configure
    $ make && make install
    ```

1. You must enable the `phpredis` extension. To do so, you can either edit the `php.ini` file, or add a `redis.ini` file in the folder that PHP uses to load additional modules from. By default, this folder is one of the following:

    - `/etc/php5/conf.d` if you have a PHP 5.x installation.
    - `/etc/php7/conf.d` if you have a PHP 7.x installation.
    - `/etc/php/conf.d` if you have installed PHP from the official repository.

1. The `redis.ini` file should have the following contents:

    ```
    extension=redis.so
    ```

## Install Redis

To install Redis, follow these steps:

1. Download the Redis package:

    ```
    $ wget http://download.redis.io/redis-stable.tar.gz
    ```

1. Extract the package:

    ```
    $ tar xvzf redis-stable.tar.gz
    ```

1. Change to the directory where you extracted the package and run the following:

    ```
    $ make && make install
    ```

## Configure Redis

By default Redis runs on the same host machine as API Portal and uses the default port 6379. In this case, no additional configuration is necessary for API Portal to use the Redis cache.

However, if you have installed Redis on a different host machine, or configured Redis to use a different port, you must update the Redis settings in the `configuration.php` file. Follow these steps:

1. Open the following configuration file for editing: `/opt/axway/apiportal/htdoc/configuration.php`

1. Locate the following lines:

    ```
    redis_server_host = 'localhost';
    redis_server_port = '6379';
    ```

1. Change the values for the Redis host and port as required and save the file.

## Verify Redis installation

For information on how to start the Redis server, check that Redis is working correctly, and secure Redis, see the [Redis Quick Start documentation](https://redis.io/topics/quickstart).

To verify that Redis is running, enter one of the following commands:

```
$ netstat -tupan | grep <REDIS_PORT>
```

```
$ ps aux | grep redis
```

```
$ redis-cli ping
```

To verify that Redis is being used by API Portal, refresh the API Catalog page and enter the following command:

```
$ redis-cli keys *_apicatalog
```

## Configure Redis cache settings in API Portal after installation

To change how long data is preserved in the cache:

1. In the JAI, click **Components > API Portal > Additional Settings**.
2. In **Cache Timeout**, enter how long (in seconds) APIs are preserved in the cache.
3. Click **Save**.
Use the **Purge cache** button to clear the cache at any time.
