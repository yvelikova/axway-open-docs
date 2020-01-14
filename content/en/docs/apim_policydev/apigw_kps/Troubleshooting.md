{
"title": "Troubleshoot KPS error messages",
"linkTitle": "Troubleshoot KPS error messages",
"weight":"100",
"date": "2020-01-06",
"description": "This section describes KPS error messages, and explains how to resolve them."
}

## All platforms

This section explains how to troubleshoot KPS errors on all platforms:

### All host polls marked down

This error means that the API Gateway client cannot connect to the Cassandra server.

To resolve this issue, perform the following steps:

* Check that all ports and addresses are correct in cassandra.yaml to verify that the endpoints are what you expect.
* Enable Cassandra debug logging.
* Contact your network administrator

For more details on Cassandra configuration, see [Administer Apache Cassandra](/docs/cass_admin/).
