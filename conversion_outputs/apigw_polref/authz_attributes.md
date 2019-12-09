{
"title": "Attribute authorization",
"linkTitle": "Attribute authorization",
"date": "2019-10-17",
"description": "The purpose of the filters in the **Attributes**\\nfilter group is to extract user attributes from various sources. You can use these filters to retrieve attributes from the message, an LDAP directory, a database, the API Gateway user store, HTTP headers, a SAML attribute assertion, and so on."
}
﻿
<div id="p_authz_attributes_overview">

Overview
--------

The purpose of the filters in the **Attributes**
filter group is to extract user attributes from various sources. You can use these filters to retrieve attributes from the message, an LDAP directory, a database, the API Gateway user store, HTTP headers, a SAML attribute assertion, and so on.

After retrieving a set of user attributes, API Gateway stores them in the `attribute.lookup.list`
message attribute, which is essentially a map of name-value pairs. It is the role of the **Attributes**
authorization filter to check the value of these attributes to authorize the user.

</div>

<div id="p_authz_attributes_conf">

Configuration
-------------

Configure the following fields on the **Attributes**
configuration window:

**Name**:\
Enter a suitable name for this filter to display in a policy.

**Attributes**:\
The **Attributes**
table lists the checks that the API Gateway performs on user attributes stored in the `attribute.lookup.list`
message attribute. The API Gateway performs the following checks:

-   The entries in the table are OR-ed together so that if any one of them succeeds, the filter returns a pass.
-   The attribute checks listed in the table are run in series until one of them passes.
-   You can add a number of attribute-value pairs to a single attribute check by separating them with commas (for example, `company=axway, department=engineering, role=engineer`).
-   If multiple attribute-value pairs are present in a given attribute check, these pairs are AND-ed together so that the overall attribute check only passes if all the attribute-value pairs pass. For example, if the attribute check comprises, `department=engineering, role=engineer`, this check only passes if both attributes are found with the correct values in the `attribute.lookup.list`
    message attribute.

To add an attribute check to the **Attributes**
table, click **Add**, and enter attributes in the dialog. For attribute checks involving attributes extracted from a SAML attribute assertion, you must specify the namespace of the attribute given in the assertion. For example, API Gateway can extract the `role`
attribute from the following SAML `<Attribute Statement>`, and store it in the `attribute.lookup.list`
map:

``` {space="preserve"}
<saml:AttributeStatement>
  <saml:Attribute Name="role" NameFormat="http://www.company.com">
    <saml:AttributeValue>admin</saml:AttributeValue>
  </saml:Attribute>
  <saml:Attribute Name="email" NameFormat="http://www.company.com">
    <saml:AttributeValue>joe@company.com</saml:AttributeValue>
  </saml:Attribute>
  <saml:Attribute Name="dept" NameFormat="">
    <saml:AttributeValue>engineering</saml:AttributeValue>
  </saml:Attribute> 
</saml:AttributeStatement>
```

The `NameFormat`
attribute of the `<Attribute>`
gives the namespace of the attribute name. You must enter this namespace (together with a corresponding prefix) in the **Add Attributes**
dialog. For example, to extract the `role`
attribute from the SAML attribute statement above, enter `pre:role=admin`
in the **Attribute Requirement**
field. Then you must also map the `pre`
prefix to the `http://www.company.com`
namespace, as specified by the `NameFormat`
attribute in the attribute statement.

</div>
