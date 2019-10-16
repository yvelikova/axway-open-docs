{
"title": "Zero downtime settings",
"linkTitle": "Zero downtime settings",
"date": "2019-10-14",
"description": "The **Zero Downtime**\\nsettings enable you to configure zero downtime deployment and zero downtime shutdown. You can enable zero downtime deployment and set delays before and after deployment. You can also enable zero downtime shutdown and set the delay before shutdown. "
}
﻿

The **Zero Downtime**
settings enable you to configure zero downtime deployment and zero downtime shutdown. You can enable zero downtime deployment and set delays before and after deployment. You can also enable zero downtime shutdown and set the delay before shutdown.

To configure zero downtime settings, select the **Server Settings**
node in the Policy Studio tree, and click **General
> Zero Downtime**. To confirm updates to these settings, click **Save**
at the bottom right of the window.

For more information of performing a zero downtime deployment, see [*Perform zero downtime deployment* on page 1](admin_zdd.htm). For more information on performing a zero downtime shutdown, see [*Perform zero downtime shutdown* on page 1](admin_zds.htm).

Prerequisites
-------------

Zero downtime deployment and shutdown rely on the **Health Check LB** policy to alert the load balancer when a maintenance operation is about to begin. To use the zero downtime deployment or shutdown features, the Health Check LB policy must be present in your API Gateway configuration.

### New projects

The Health Check LB policy is included in the default factory configuration.

When creating a new project in Policy Studio, choose **From a template configuration** and select the **Factory template with samples** template. This template includes the Health Check LB policy.

### Existing projects

If you created a project in Policy Studio from any other template (for example, **Factory template**, **Team Development – Common Project**, or **Team Development – API Project**), you must manually import the Health Check LB policy into your configuration.

To import the Health Check LB policy, select **File > Import > Import Configuration Fragment** from the Policy Studio main menu, and select the following file:

    $VDISTDIR/samples/SamplePolicies/HealthCheck/HealthCheckLB.xml

You must also add the Health Check LB policy to a listener so that the load balancer can ping it to determine the health of the API Gateway (for example, path `/healthchecklb` on HTTP port `8080`). For more information on listeners, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

{{< alert title="Tip" color="primary" >}}You can customize the Health Check LB policy for your own environment. For example, you can modify the response code and message that are returned to the load balancer.{{< /alert >}}

Configuration
-------------

Configure the following zero downtime settings:

**Zero-downtime deployment enabled**:

Select the check box to enable zero downtime deployment. The default is disabled.

**Delay before deployment**:

Enter the delay before deployment in seconds. This is the delay in the API Gateway between receiving a deployment request and starting the deployment. During this delay, the Health Check LB policy returns an error response, giving the load balancer time to route traffic away from the API Gateway before the deployment begins. The default is 10 seconds. You can choose a value between 1 and 20 seconds.

**Delay after deployment**:

Enter the delay after deployment in seconds. This is the delay in the API Gateway between the end of deployment and a response being sent to the deployment request. During this delay, the Health Check LB policy returns a successful response, giving the load balancer time to start routing traffic to the API Gateway before deployment begins on the next API Gateway in the group. The default is 10 seconds. You can choose a value between 1 and 20 seconds.

**Zero-downtime shutdown enabled**:

Select the check box to enable zero downtime shutdown. The default is disabled.

**Delay before shutdown**:

Enter the delay before shutdown in seconds. This is the delay in the API Gateway between receiving a shutdown request and starting the shutdown procedure. During this delay, the Health Check LB policy returns an error response, giving the load balancer time to route traffic away from the API Gateway before shutdown begins. The default is 10 seconds. You can choose a value between 1 and 20 seconds.
