{
"title": "Configure an advisory banner",
"linkTitle": "Configure an advisory banner",
"date": "2019-10-14",
"description": "You can configure API Gateway to display an advisory warning message about unauthorized use of API Gateway when establishing a successful user session from Policy Studio or API Gateway Manager."
}
﻿

You can configure API Gateway to display an advisory warning message about unauthorized use of API Gateway when establishing a successful user session from Policy Studio or API Gateway Manager.

Configure an advisory banner in API Gateway Manager
---------------------------------------------------

To enable an advisory banner, perform the following steps:

1.  Select **Settings > Advisory Banner** in the API Gateway Manager web console.
2.  Configure the following settings:
    -   **Advisory banner enabled**:\
        Select whether the banner is enabled. The default is disabled.
    -   **Advisory banner text**:\
        Enter the text to display on the advisory banner. The default text is:

    >

``` {space="preserve"}
Warning - unauthorized use of this tool is strictly prohibited and subject to audit, investigation, and potential prosecution.
```

1.  Click **Apply** to save the changes.

### Advisory banner in API Gateway Manager

When the banner is enabled, it is displayed on the API Gateway Manager login dialog:

![Advisory banner in API Gateway Manager](/Images/docbook/images/admin/advisory_banner_gwmgr.png)

For more details on API Gateway Manager, see [*Monitor services in* on page 1](monitor_service.htm).

### Advisory banner in Policy Studio

The advisory banner is also displayed when you log in to Policy Studio:

![Advisory banner in Policy Studio](/Images/docbook/images/admin/advisory_banner_ps.png)

For more details on Policy Studio, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
