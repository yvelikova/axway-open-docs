{
"title": "Oracle Access Manager integration",
"linkTitle": "Oracle Access Manager integration",
"date": "2020-01-20",
"description": "Oracle Access Manager (OAM) is Oracle's access management service that prevents unauthorized access to web service applications and web content. You can integrate API Gateway to act as a client for and delegate authentication and authorization to the OAM server."
}
﻿

Oracle Access Manager (OAM) is Oracle's access management service that prevents unauthorized access to web service applications and web content. You can integrate API Gateway to act as a client for and delegate authentication and authorization to the OAM server.

You can configure your existing OAM as an authentication repository, and leverage the existing user information in the authentication filters in API Gateway. The OAM filters in Policy Studio enable API Gateway to query the access manager for authorization information for a user on a given resource.

This section describes how to configure API Gateway to authenticate and authorize user requests against the following versions of OAM:

-   Oracle Access Manager 10g
-   Oracle Access Manager 11gR1
-   Oracle Access Manager 11gR2

Flow description
----------------

![Diagram illustrating the Oracle Access Manager integration.](/Images/IntegrationGuides/auth_auth/oam_integration.png)

1.  End user trying to access a web service is prompted to provide the login credentials.
2.  API Gateway authenticates and authorizes the user against OAM.
3.  If the authentication and authorization are successful, API Gateway routes the message to the web service.

Prerequisites
-------------

Before you start, you must have the following:

-   API Gateway installed
-   Oracle Access Manager installed, configured, and running
-   an user for API Gateway configured in the OAM.

For more details on installing and configuring Oracle Access Manager and a, see the [Oracle Access Manager documention](http://www.oracle.com/technetwork/middleware/id-mgmt/index-090417.html). It is recommended you familiarize yourself with this documentation before you start integrating API Gateway with Oracle Access Manager.
