{"title":"Enable SSO in API Portal","linkTitle":"Enable SSO in API Portal","date":"2019-7-16","description":"After configuring `service-provider-apiportal.xml` and the single sign-on (SSO) connection in Policy Studio, enable SSO in API Portal."} ﻿

After configuring `service-provider-apiportal.xml` and the single sign-on (SSO) connection in Policy Studio, enable SSO in API Portal.

1.  In the Joomla! Administrator Interface (JAI), click **Components &gt; API Portal &gt; Single-Sign-On**.
2.  Click **Yes** to enable SSO login.
3.  In **SSO Client Entity ID**, enter the `entityId` you defined for API Portal in `service-provider-apiportal.xml`.
4.  In **SSO Whitelist**, enter the host name or IP address of your IdP to allow requests to the IdP (for example, `keycloak.lab.dubl.axway.int`). If you do not add your IdP to this field, all requests to your IdP will be rejected by API Portal.
5.  Click **Save**.

Change API Portal SSO login path
--------------------------------

The default SSO login URL is `https://<FQDN>:<port>/sso`, where `<FQDN>` is the fully qualified domain name of the machine running API Portal, and `<port>` is the API Portal listening port. To modify the SSO login URL:

1.  In JAI, click **Components &gt; API Portal &gt; Single-Sign-On**.
2.  In **SSO Path**, replace the default value `/sso` with the new path (for example, `/newpath`results in a new SSO login URL of `https://<FQDN>:<port>/newpath`.
3.  Click **Save**.

