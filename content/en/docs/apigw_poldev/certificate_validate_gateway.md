{
"title": "Validate certificate store",
"linkTitle": "Validate certificate store",
"date": "2019-10-17",
"description": "The **Validate Server's Certificate Store**\\nfilter checks API Gateway's certificate store for certificates that are due to expire before a specified number of days. This enables you to monitor the certificates that API Gateway is running with. "
}
﻿
<div id="p_certificate_validate_gateway_overview">

Overview
--------

The **Validate Server's Certificate Store**
filter checks API Gateway's certificate store for certificates that are due to expire before a specified number of days. This enables you to monitor the certificates that API Gateway is running with.

For example, you can configure a policy that includes a **Validate Server's Certificate Store**
filter and an **Alert**
filter, which sends an email alert when it finds certificates that are due to expire. You can also configure this policy to run at regular intervals using the policy execution scheduler provided with API Gateway.

</div>

<div id="p_certificate_validate_gateway_conf">

Configuration
-------------

Configure the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

**Days before expires**:\
Enter the number of days before the certificates are due to expire.

**Check Server's Certificate Store**:\
Select whether to check the certificates in API Gateway's certificate store. This is selected by default.

**Check Server's Java Keystore**:\
Select whether to check the certificates in API Gateway's Java Keystore. This is not selected by default. When selected, you must enter the password for this keystore.

**Check Java Keystore**:\
Select whether to check the certificates in the specified Java Keystore. This is not selected by default. When selected, you must configure the following fields:

-   **Keystore Location**: Specify the path to this keystore (for example, `/home/oracle/osr-client.jks`).
-   **Password**: Enter the password for this keystore.

</div>

<div id="p_certificate_validate_gateway_example">

Deployment example
------------------

The following example shows a **Validate Certificates**
policy that includes a **Validate Server's Certificate Store**
filter and an **Alert**
filter. This policy sends an email alert when it finds certificates that are due to expire:

![Validating Gateway Certificates](/Images/docbook/images/certs/validate_certs_policy.gif)

### Configure an email alert\

When this filter is successful, and finds certificates that are due to expire, it generates an `expired.certs.summary`
attribute, which contains a summary of certificates due to expire. You can then use this attribute in the **Alert**
filter to send an email alert to the API Gateway administrators, as shown in the following example:

![Configuring an Alert Message](/Images/docbook/images/certs/validate_certs_alert_message.gif)

You must also select a preconfigured email alert destination on the **Destination**
tab (for example, **Email API Gateway Administrators**). For more details on configuring email alert destinations, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Configure a policy execution schedule\

You can configure this policy to run at regular intervals (for example, once every day) using the policy scheduler provided with API Gateway. Under the **Environment Configuration** > **Listeners**
node, right-click the API Gateway instance node, and select **Add policy execution scheduler**. The following example runs the policy at 12 noon every day:

![Configuring a Policy Schedule](/Images/docbook/images/certs/validate_certs_schedule.gif)

For more details on policy execution scheduling, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

### Example email alert\

An email alert is sent if any certificates that are due to expire are detected. The contents of the email are obtained from the `expired.certs.summary`
message attribute. For example:

``` {space="preserve"}
Axway API Gateway running on Roadrunner contains certificates that will expire in 730 days.
2 expired certificates in API Gateway certificate store:
1. Cert details:
Cert issued to: CN=CA
Cert issued by: CN=CA
SHA1 fingerprint: 72:04:35:7C:A1:B1:C2:F5:E2:86:75:C4:83:12:9C:70:A8:D6:21:8E
MD5 fingerprint: 82:23:6F:59:F2:8F:C3:95:56:87:70:B5:51:3F:53:05
Subject Key Identifier (SKI): dfABenFoM0r7iJ3E1ZqU7HmKiyY=
Expires on: 2012-04-20
2. Cert details:
Cert issued to: CN=John Doe
Cert issued by: CN=CA
SHA1 fingerprint: 83:32:EB:3F:9C:15:87:FB:81:E1:D5:AC:CC:35:C3:F8:21:BB:DF:CD
MD5 fingerprint: 48:02:F6:3F:B9:64:EB:DA:DF:CF:F9:82:AC:CC:13:AB
Subject Key Identifier (SKI): HabJNMjAsBAWp4AcCq8yZkTEJKQ=
Expires on: 2012-04-20
```

</div>
