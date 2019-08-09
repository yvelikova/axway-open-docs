{"title":"Connect API Portal to a single API Manager","date":"2019-08-09","description":"Before you can use API Portal, you must connect it to at least one API Manager. By default, API Portal uses ports `80` and `443`. You can access the ports using a browser."} ﻿

Before you can use API Portal, you must connect it to at least one API Manager. By default, API Portal uses ports `80` and `443`. You can access the ports using a browser.

To connect API Portal to API Manager:

1.  Log in to the Joomla! Administrator Interface (JAI) (`https://<API Portal_host>/administrator`).
2.  Select **Components > API Portal > API Manager**.
3.  Enter a public name for the API Manager. This name is shown to your API consumers in API Portal when listing the APIs and applications for this API Manager.
4.  Enter your API Manager host and port. The default port is `8075`.
5.  In **TLS Certificate Validation**, select an option to validate HTTPS connections. The default is no validation. You can choose to validate the TLS certificate only, or the TLS certificate and the certificate host name.
6.  If you choose to validate the TLS certificate, in **Certificate**, choose and upload the root API Manager certificate. This certificate is used to validate the API Manager server certificate when API Portal sends a request to API Manager. You can check which certificate API Portal uses in **Current certificate**.
7.  Enter a tag for this API Manager. You can use this tag to filter APIs that come from this particular API Manager instance, for example, to display APIs from different API Managers on different menus in API Portal.
8.  Click **Save**.

API Portal is now connected to API Manager.
