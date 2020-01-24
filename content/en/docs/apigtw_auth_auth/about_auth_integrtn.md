{
"title": "Authentication and authorization overview",
"linkTitle": "Authentication and authorization overview",
"weight":"110",
"date": "2020-01-20",
"description": "API Gateway contains a set of message filters that directly or indirectly restrict access to resources or web services."
}

Filters that directly control access include XML-signature verification, CA certificate chain verification, and SAML assertion verification. With these filters, policy decisions are made and enforced within API Gateway itself.

Filters that _indirectly_ control access offload the policy decision to an external access management system. With these filters, the policy decision is made by the external system but then enforced by API Gateway.

API Gateway can leverage your existing Identity Management infrastructure, thus avoiding the need to maintain separate silos of user information. For example, if you already have a database full of user credentials, API Gateway can authenticate requests against this database rather than using its own internal user store. Similarly, the API Gateway can authorize users, look up user attributes, and validate certificates against third-party Identity Management servers.

This guide describes how to configure API Gateway to integrate with the following products:

* LDAP servers — see [LDAP integration](/docs/apigtw_auth_auth/ldap_overview/)
* CA SiteMinder — see [CA SiteMinder integration](C/docs/apigtw_auth_auth/ca_siteminder_overview/)
* RSA Access Manager — see [RSA Access Manager integration](/docs/apigtw_auth_auth/rsa_access_mgr_overview/)
* Oracle Access Manager integration - see [Oracle Access Manager integration](/docs/apigtw_auth_auth/oracle_access_manager_integration/)
* Oracle Entitlements Server integration - see [Oracle Entitlements Server integration](/docs/apigtw_auth_auth/oracle_entitlements_server_integration/)

The intended audience for this guide is personnel in charge of the technical integration of an API Gateway solution.
