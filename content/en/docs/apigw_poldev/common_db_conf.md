{
"title": "Configure database connections",
"linkTitle": "Configure database connections",
"date": "2019-10-17",
"description": "The details entered on the **Configure Database Connection**\\ndialog specify how the API Gateway connects to the database. The API Gateway maintains a JDBC pool of database connections to avoid the overhead of setting up and tearing down connections to service simultaneous requests. This pool is implemented using *Apache Commons DBCP (Database Connection Pools)*. "
}
﻿
<div id="p_common_db_conf_overview">

The details entered on the **Configure Database Connection**
dialog specify how the API Gateway connects to the database. The API Gateway maintains a JDBC pool of database connections to avoid the overhead of setting up and tearing down connections to service simultaneous requests. This pool is implemented using *Apache Commons DBCP (Database Connection Pools)*.

The settings in the **Advanced - Connection pool**
section of this window configures the database connection pool. For details on how the fields on this window correspond to specific DBCP configuration settings, see the table in [*Database connection pool settings* on page 1](#Database).

</div>

<div id="p_common_db_conf_setup">

Prerequisites
-------------

Before configuring a database connection, you must add the JDBC driver files for your chosen database to your API Gateway and Policy Studio installations. The following sections show how to add the third-party JDBC driver files for your database to API Gateway and Policy Studio.

**Add third-party binaries to API Gateway**

To add third-party binaries to API Gateway, perform the following steps:

1.  Add the binary files as follows:
    -   Add `.jar`
        files to the `INSTALL_DIR/apigateway/ext/lib`
        directory.
    -   Add `.so`
        files to the `INSTALL_DIR/apigateway/<platform>/lib` directory.

    >
2.  Restart API Gateway.

**Add third-party binaries to Policy Studio**

To add third-party binaries to Policy Studio, perform the following steps:

1.  Select **Window > Preferences > Runtime Dependencies**
    in the Policy Studio main menu.
2.  Click **Add**
    to select a JAR file to add to the list of dependencies.
3.  Click **Apply**
    when finished. A copy of the JAR file is added to the `plugins`
    directory in your Policy Studio installation.
4.  Click **OK**.
5.  Restart Policy Studio with the `-clean` option. For example:
6.  > cd INSTALL\_DIR/policystudio/\
    > policystudio -clean

</div>

<div id="p_common_db_conf_conf">

Configure the database connection
---------------------------------

Configure the following fields on the **Configure Database Connection**
window:

**Name**:\
Enter a name for the database connection in the **Name**
field.

**URL**:\
Enter the fully qualified URL of the location of the database. The following table shows examples of database connection URLs, where `reports`
is the name of the database and `DB_HOST`
is the IP address or host name of the machine on which the database is running:

| Database                 | Example Connection URL                                                         |
|--------------------------|--------------------------------------------------------------------------------|
| **Oracle**               | `jdbc:oracle:thin:@DB_HOST:1521:reports`                                       |
| **Microsoft SQL Server** | `jdbc:sqlserver://DB_HOST:1433;DatabaseName=reports;integratedSecurity=false;` |
| **MySQL/MariaDB**        | `jdbc:mysql://DB_HOST:3306/reports`                                            |
| **IBM DB2**              | `jdbc:db2://DB_HOST:50000/reports`                                             |

{{< alert title="Note" color="primary" >}}You can use the `jdbc:mysql://DB_HOST:3306/reports` URL with both MySQL and MariaDB databases.{{< /alert >}}
**User Name**:\
The user name to use to access the database.

**Password**:\
The password for the user specified in the **User Name**
field.

**Initial pool size**:\
The initial size of the DBCP pool when it is first created.

**Maximum number of active connections**:\
The maximum number of active connections that can be allocated from the JDBC pool at the same time. The default maximum is 8 active connections.

**Maximum number of idle connections**:\
The maximum number of active connections that can remain idle in the pool without extra connections being released. The default maximum is 8 connections.

**Minimum number of idle connections**:\
The minimum number of active connections that can remain idle in the pool without extra connections being created. The default minimum is 8 connections.

**Maximum wait time**:\
The maximum number of milliseconds that the pool waits (when there are no available connections) for a connection to be returned before throwing an exception, or -1 to wait indefinitely. The default time is 10000ms, and a value of -1 indicates an indefinite time to wait.

**Time between eviction**:\
The number of milliseconds to sleep between runs of the thread that evicts unused connections from the JDBC pool.

**Number of tests**:\
The number of connection objects to examine from the pool during each run of the evictor thread. The default number of objects is 3.

**Minimum idle time**:\
The minimum amount of time, in milliseconds, an object may sit idle in the pool before it is eligible for eviction by the idle object evictor (if any).

</div>

<div id="p_common_db_conf_dbcp_conf">

Database connection pool settings
---------------------------------

The table below shows the correspondence between the fields in the **Advanced - Connection pool**
section of the window and the Apache Commons DBCP configuration properties:

| Field Name                           | DBCP Configuration Property     |
|--------------------------------------|---------------------------------|
| URL                                  | `url`                           |
| User Name                            | `username`                      |
| Password                             | `password`                      |
| Initial pool size                    | `initialSize`                   |
| Maximum number of active connections | `maxActive`                     |
| Maximum number of idle connections   | `maxIdle`                       |
| Minimum number of idle connections   | `minIdle`                       |
| Maximum wait time                    | `maxWait`                       |
| Time between eviction                | `timeBetweenEvictionRunsMillis` |
| Number of tests                      | `numTestsPerEvictionRun`        |
| Minimum idle time                    | `minEvictableIdleTimeMillis`    |

</div>

<div id="p_common_db_conf_query">

Connection validation
---------------------

By default, when the API Gateway makes a connection, it performs a simple connection validation query. This enables the API Gateway to test the database connection before use, and to recover if the database goes down (for example, if there is a network failure, or if the database server reboots).

The API Gateway validates connections by running a simple SQL query (for example, a `SELECT 1`
query with MySQL or MariaDB). If it detects a broken connection, it creates a new connection to replace it.

</div>

<div id="p_common_db_conf_test_connection">

Test the connection
-------------------

When you have specified all the database connection details, you can click the **Test Connection**
button to verify that the connection to the database is configured successfully. This enables you to detect any configuration errors at design time instead at runtime.

</div>
