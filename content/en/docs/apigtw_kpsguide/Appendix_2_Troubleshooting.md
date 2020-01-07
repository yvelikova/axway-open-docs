{
"title": "Troubleshoot KPS error messages",
"linkTitle": "Troubleshoot KPS error messages",
"date": "2020-01-06",
"description": "This appendix describes KPS error messages, and explains how to resolve them."
}
﻿

This appendix describes KPS error messages, and explains how to resolve them.

All platforms
-------------

This section explains how to troubleshoot KPS errors on all platforms:

### All host polls marked down

This error means that the API Gateway client cannot connect to the Cassandra server.

To resolve this issue, perform the following steps:

-   Check that all ports and addresses are correct in cassandra.yaml to verify that the endpoints are what you expect.
-   Enable Cassandra debug logging.
-   Contact your network administrator

For more details on Cassandra configuration, see
[Install an Apache Cassandra database](/csh?context=301&product=prod-api-gateway-77)
in the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
.\

