{
"title": "Configure a KCD demo setup",
"linkTitle": "Configure a KCD demo setup",
"date": "2019-11-14",
"description": "To test or demonstrate KCD, you may want to configure a test back-end service as well as sample users."
}
﻿

To test or demonstrate KCD, you may want to configure a test back-end service as well as sample users.

-   [Configure a back-end service for testing](#Configur)
-   [Configure sample authentication](#Configur2)
    -   [Configure sample users](#Configur3)
    -   [Configure HTTP Basic authentication](#Configur4)

Configure a back-end service for testing
----------------------------------------

For demonstration purposes, you can use another API Gateway instance as the back-end Kerberos service. API Gateway is configured as the Kerberos service for the most part the same way for both KCD and standard Kerberos authentication in the client-side transaction. For more details, see [Configure API Gateway to act as the Kerberos service](../Kerberos_demo/configure_gw_to_act_as_kerberos_svc_demo.htm).

The difference between KCD and standard SPNEGO configuration is that for KCD, the back-end service must have a Service Principal Name (SPN). For more details, see [Map an SPN to the user account](../Kerberos_service/active_directory_configuration_service.htm#Map2).

Configure sample authentication
-------------------------------

For demonstration purposes, you can configure HTTP Basic authentication against a local user repository as the incoming authentication mechanism on API Gateway for the end user.

### Configure sample users

You can quickly add some sample users to a local repository in Policy Studio.

The user identity in the local repository must be mappable to an end user Kerberos principal name, so that when the trusted Kerberos principal impersonates an end user, the original end user can be identified in Active Directory. The setup in this guide uses a selector expression `${authentication.subject.id}@AXWAY.COM` for the mapping. For more details, see [Configure Kerberos principals](configure_kerberos_principals_CD.htm).

For example, if your end user Kerberos principal names were `Bob@AXWAY.COM`, and `Bill@AWAY.COM`, then add users named Bob and Bill to the local user repository.

1.  In the node tree, click **Environment Configuration > Users and Groups > Users**.
2.  Click **Add**, and fill in the details for your user. For example:
3.  | Bob                  | Bill                 |
    |----------------------|----------------------|
    | User Name: `Bob`     | User Name: `Bill`    |
    | Password: `changeme` | Password: `changeme` |

The passwords in the local user repository do *not* need to match these users' Kerberos passwords in the Key Distribution Center. Here, the user names and passwords configured in the local repository are passed to API Gateway over HTTP Basic.

### Configure HTTP Basic authentication

In this example, API Gateway authenticates the end users using HTTP Basic.

1.  Open the **Authentication** category, and drag a **HTTP Basic** filter onto the policy canvas.
2.  Set **Credential Format** to **User Name**, and select **Allow client challenge**.
3.  Set **Repository Name** to **Local User Store**, and click **Finish**.\
    For more details on the fields and options in this configuration window, see
    [HTTP basic authentication](/csh?context=506&product=prod-api-gateway-77)
    in the
    [API Gateway Policy Developer Filter Reference](/bundle/APIGateway_77_PolicyDevFilterReference_allOS_en_HTML5/)
    .
4.  Right-click the **HTTP Basic** filter, and select **Set as Start**.
5.  Connect the filters with a success path.
6.  ![Demo policy](/Images/IntegrationGuides/KerberosIntegration/KerberosConstrainedDelegation/demo_policy.png)

 

To test the configuration, see [Test the policies](gw_configuration_CD.htm#Test).
