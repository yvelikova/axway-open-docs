{
"title": "CA SiteMinder authorization",
"linkTitle": "CA SiteMinder authorization",
"date": "2019-10-17",
"description": "CA SiteMinder can authenticate end users and authorize them to access protected web resources. API Gateway can use the **Authorization** filter to interact directly with SiteMinder, and ask SiteMinder to make authorization decisions on behalf of end users that have successfully authenticated to API Gateway. API Gateway then enforces the decisions made by SiteMinder."
}
﻿

CA SiteMinder can authenticate end users and authorize them to access protected web resources. API Gateway can use the **Authorization** filter to interact directly with SiteMinder, and ask SiteMinder to make authorization decisions on behalf of end users that have successfully authenticated to API Gateway. API Gateway then enforces the decisions made by SiteMinder.

{{< alert title="Note" color="primary" >}}You must configure authentication to CA Siteminder before you configure the **Authorization** filter. For example, you could use a HTTP Basic authentication filter configured with the CA Siteminder authentication repository, or a CA SiteMinder **Certificate Authentication** filter. {{< /alert >}}

Integration with CA SiteMinder requires adding the required third-party binaries to your API Gateway and Policy Studio installations. For more details, see [Prerequisites](part_siteminder_filters.htm#Prerequi).

Configuration
-------------

Configure the following fields on the **Authorization** filter:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Attributes**:\
After the end user is successfully authorized, the attributes listed here are returned to API Gateway and stored in the `attribute.lookup.list` message attribute. API Gateway can use these attributes in subsequent filters in a policy to make decisions based on their values. Alternatively, API Gateway can insert the attributes into a SAML attribute assertion so that the target service can apply some business logic based on their values (for example, if role is CEO, escalate the request, and so on).

To specify an attribute to fetch from SiteMinder, select the **Retrieve attributes from CA SiteMinder**option, and click the **Add** button. If you select the **Retrieve attributes from CA SiteMinder** option, and do not specify attribute names to be retrieved, all attributes returned by SiteMinder are added to the `attribute.lookup.list` message attribute.
