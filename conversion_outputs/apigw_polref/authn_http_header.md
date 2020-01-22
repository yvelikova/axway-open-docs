{
"title": "HTTP header authentication",
"linkTitle": "HTTP header authentication",
"date": "2019-10-17",
"description": "You can use the **HTTP Header**\\nfilter in cases where the API Gateway receives end user authentication credentials in an HTTP header. A typical scenario would see the end user (or message originator) authenticating to an intermediary. The intermediary authenticates the end user and, to propagate the end-user credentials to the destination web service, the intermediary inserts the credentials into an HTTP header and forwards them onwards."
}
﻿
<div id="p_authn_http_header_val_overview">

Overview
--------

You can use the **HTTP Header**
filter in cases where the API Gateway receives end user authentication credentials in an HTTP header. A typical scenario would see the end user (or message originator) authenticating to an intermediary. The intermediary authenticates the end user and, to propagate the end-user credentials to the destination web service, the intermediary inserts the credentials into an HTTP header and forwards them onwards.

When the API Gateway receives the message, it performs the following tasks:

-   Authenticates the sender of the message (the intermediary)
-   Extracts the *end user*
    identity from the token in the HTTP header for use in subsequent authorization filters

{{< alert title="Note" color="primary" >}}In the case outlined above, the API Gateway does *not*
attempt to reauthenticate the end user. It trusts that the intermediary has already authenticated the end user, and so the API Gateway does not authenticate the user again. However, it is good practice to authenticate the message sender (the intermediary). Any subsequent authorization filters use the end user credentials that were passed in the HTTP header.{{< /alert >}}

</div>

<div id="p_authn_http_header_val_conf">

Configuration
-------------

The following configuration fields are available on this window:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**HTTP Header Name**:\
Enter the name of the HTTP header that contains the end user credentials.

**HTTP Header Type**:\
Select the type of credentials that are passed in the named HTTP header. The following types are supported:

-   X.509 Distinguished Name
-   Certificate
-   User Name

</div>
