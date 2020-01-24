{
"title": "Oracle Entitlements Server 11g and 11gR2 integration",
"linkTitle": "Oracle Entitlements Server integration",
"weight":"160",
"date": "2020-01-24",
"description": "Configure API Gateway to authorize and authenticate a user against Oracle Entitlements Server (OES) 11g and 11gR2."
}

* API Gateway will authenticate a user against its local user repository.
* API Gateway will then delegate the authorization decision for the specified resource to OES.

The OES 11g Authorization filter is used to delegate the authorization decision to OES. This filter assumes that an authentication filter has been configured prior to it. Therefore, by the time the authorization filter executes, the `authentication.subject.id` message attribute is populated and its value is used as the subject in the authorization request to OES.

The following diagram shows the sequence of events that occurs when a client sends a message to API Gateway. The request sender is authenticated by API Gateway and is then authorized against Oracle Entitlements Server. If the user is permitted to access the requested resource, the request is routed to the Enterprise Application. Otherwise an appropriate fault message is returned to the client.

![Authorize and authenticate a user](/Images/IntegrationGuides/auth_auth/apigw_oes_11gR2_overview.png)

## Prerequisites

### API Gateway

You must have installed API Gateway version 7.8 or higher and have received a valid license from Axway.

This integration is also valid for the API Gateway Appliance (physical or virtual) version 7.8 or higher.

### OES user

You must create an OES user called `weblogic`. Refer to the OES documentation for instructions on how to add a user.

### API Gateway local user store

You must have added the `weblogic` user to the gateway local user store. The policy you will set up later requires an authenticated user's request to be authorized against OES. By adding the `weblogic` user to the local user store, the client can authenticate as this user. The user name will then be stored in the `authentication.subject.id` message attribute, which is then passed to the OES 11g Authorization filter and subsequently on to OES to make the authorization decision.

### OES client

You must have installed the OES client (security module) on the machine running the gateway. The OES client has its own installer, which is available from [www.oracle.com](http://www.oracle.com./).

{{< alert title="Note" color="primary" >}}In the following integration steps, this version of the OES client was used: Oracle Entitlements Server Security Module 11g - 11.1.2.0.0.{{< /alert >}}

The OES client installer requires that a JRE is available on the target machine. In the absence of a preferred JVM on the target machine, API Gateway ships with a JRE that can be used.   On UNIX, the JRE is located in `INSTALL_DIR/apigateway/platform/jre`.

Start the OES client installer from the command line and pass the JRE location using the `jreLoc` argument as follows:

**UNIX/Linux**\

```
./runInstaller –jreLoc INSTALL_DIR/apigateway/platform/jre
```

### OES 11g or 11gR2

You must have installed, configured, and started OES 11g or 11gR2. For example, you can start it using the following commands on a UNIX-based system:

```
cd ~/Middleware/user_projects/domains/oes_domain
./startWebLogic.sh
```

{{< alert title="Note" color="primary" >}} This command assumes a WebLogic domain of `oes_domain` has already been configured.{{< /alert >}}

### cURL testing utility

To test the integration steps, the cURL testing utility is used to POST requests to the gateway. It is available from the [cURL Releases and Downloads](http://curl.haxx.se/download.html).

Alternatively, you can use any client capable of sending HTTP POST requests with HTTP basic authentication.

## Configure API Gateway

This section describes how to configure API Gateway to work with Oracle Entitlements Server.

### Modify the API Gateway classpath

API Gateway's classpath must be extended to include the OES client JAR. To achieve this, create a `jvm.xml` file at the following location:

```
INSTALL_DIR/apigateway/conf/jvm.xml
```

Edit this `jvm.xml` so that its contents are as follows, providing values for `OES_CLIENT_HOME` and `SM_NAME` that are based on the location where the OES client was installed and the SM name used when enrolling the OES client (`MySM`):

```xml
<ConfigurationFragment>
<!-- Change these ENV VARS to match the location where the OEM Client has
been installed and configured -->
<Environment name="OES_CLIENT_HOME" value="/home/oes/Oracle/Middleware/oes_client" />
<Environment name="SM_NAME" value="MySM" />
<Environment name="INSTANCE_HOME"
value="$OES_CLIENT_HOME/oes_sm_instances/$SM_NAME" />

<!-- Add OES Client JAR to the classpath -->
<ClassPath name="$OES_CLIENT_HOME/modules/oracle.oes.sm_11.1.1/oes-client.jar" />

<!-- Add OES JARs to the classpath →
<ClassPath name=”[PATH_TO_OES_JARS]/api.jar”/>
<ClassPath name=”[PATH_TO_OES_JARS]/asi_classes.jar”/>

<VMArg name="-Doracle.security.jps.config=$INSTANCE_HOME/config/jps-config.
xml"/>
<!-- Optional argument to add enhanced logging (via log4j) for the OES Client -->
<VMArg name=”-Djava.util.logging.config.file=$INSTANCE_HOME/logging.properties”/>
</ConfigurationFragment>
```

The following is an example `jvm.xml` file for Windows:

```xml
<ConfigurationFragment>
  <!-- Environment variables -->
  <!-- change these to match the location where the OEM Client has been installed and configured -->
<Environment name="OES_CLIENT_HOME" value="C:\Oracle\product\11.1.1\as_1" />
<Environment name="SM_NAME" value="MySSM" />
<Environment name="INSTANCE_HOME" value="$OES_CLIENT_HOME/oes_sm_instances/$SM_NAME" />
<!-- Add OES Client to classpath -->
<ClassPath name="$OES_CLIENT_HOME/modules/oracle.oes.sm_11.1.1/oes-client.jar" />
<VMArg name="-Doracle.security.jps.config=$INSTANCE_HOME/config/jps-config.xml"/>  
</ConfigurationFragment>
```

### Start API Gateway

Start API Gateway so that it runs with the OES client classpath and the associated environment settings. For more information, see [Start API Gateway](/docs/apim_installation/apigtw_install/install_gateway/#start-api-gateway).

Command example:

```
startinstance -n "APIGateway1" -g "Group1"
```

<!-- Configure Oracle Entitlements Server -->



### Configure API Gateway to delegate authorization to OES

This section explains how to configure API Gateway to delegate authorization decisions to Oracle Entitlements Server.

The resulting policy created in API Gateway will appear as follows:

![Policy](/Images/IntegrationGuides/auth_auth/oracle_entitlements_server_11gR2_10.png)

#### Configure the authentication filter

In this example, it is assumed that the user profile to be authorized through OES is also stored in the local user store of API Gateway. API Gateway can also delegate authentication decisions to other systems (for example, LDAP directories, databases, and other third-party identity management systems, including CA SiteMinder, Oracle Access Manager, RSA Access Manager, and so on). For simplicity, API Gateway's local user store is used in this example.

Configure the authentication filter as follows:

1. In Policy Studio, create a new policy called `OES Authorization`.
2. Drag a **HTTP Basic** filter from the **Authentication** category in the palette onto the canvas and configure it as follows:
    * **Name**: Enter `HTTP Basic Authentication` in the field provided.
    * **Credential Format**: Select `User Name` from the drop-down list.
    * **Allow Client Challenge**: Select the **Allow client challenge** check box.
    * **Repository Name**: Select `Local User Store` from the drop-down list.
3. Click **OK**.
4. To set this authentication filter to be the starting filter of the policy, right-click the filter in the canvas and select **Set as Start**.

The completed configuration for the filter appears as follows:

![Configuration for the filter](/Images/IntegrationGuides/auth_auth/oracle_entitlements_server_11gR2_11.png)

#### Configure the OES 11g authorization filter

Configure the OES 11g authorization filter as follows:

1. From the **Oracle Entitlements Server** category in the palette on the right of Policy Studio, drag the **11g Authorization** filter onto the canvas, and configure it as follows:
    * **Resource**: Enter a formatted string representing the resource that you created in OES and for which API Gateway will ask OES for authorization decisions. The resource you created earlier in OES can be represented with the string `MyApplication/MyResourceType/MyResource`.
    * **Action**: The rules created in the OES policy can permit/deny access to a resource based on the requested action, for example, POST, GET, DELETE, and so on. In this example, you will be POST-ing the request to the resource, so you must enter `POST` in the **Action** field. Remember, you configured POST access to the this resource earlier when configuring the OES policy.
    * You can optionally configure environment context attributes. However, for the purposes of this integration example it is not necessary to configure this section.
2. Click **OK**.
3. Set the success path from the **HTTP Basic Authentication** filter to point at the newly created OES 11g authorization filter.

#### Add the success message filter

Display a success message after successfully authorizing the user by adding a **Set Message** filter.

1. Drag a **Set Message** filter from the **Conversion** category onto the canvas and configure it as follows:\
    * **Name**: Enter `Set Success Message` in the text field.
    * **Content-type**: Enter `text/plain` as the content-type of the message to return to the client.
    * **Message Body**: Enter the following message to return to the client: `User '${authentication.subject.id}' was authorized successfully!`
2. Click **OK**.
3. Set the success path of the 11g authorization filter to the **Set Success Message** filter.

#### Add the failure message filter

If OES returns false for the authorization request you should return an appropriate error message to the client.

Display a failure message after an unsuccessful authorization event by adding another **Set Message** filter:

1. Drag a **Set Message** filter from the **Conversion** category onto the canvas, and configure it as follows:
    * **Name**: Enter `Set Failure Message` in the text field.
    * **Content-type**: Enter `text/plain` as the content-type of the message to return to the client.
    * **Message Body**: Enter the following message to return the client: `The user '${authentication.subject.id}' was NOT authorized to access the resource!`
2. Click **OK**.
3. Set the failure path of the 11g authorization filter to the **Set Failure Message** filter.

#### Add a relative path for the OES authorization policy

In order for API Gateway to invoke this policy for certain requests you must create a relative path and map it to the policy. All requests received on this path are automatically forwarded to the policy for processing.

To add a relative path for this policy click **Add Relative Path** in the toolbar beneath the policy canvas.

Enter the path on which to receive requests for this policy in the field provided in the Resolve path to Policies dialog:

![Policies dialog](/Images/IntegrationGuides/auth_auth/oracle_entitlements_server_11gR2_16.png)

For example, if you enter a relative path of `/oes`, you can see that this path is automatically mapped to the `OES Authorization` policy created earlier in this section.

### Deploy the policy

To push the configuration changes to the live API Gateway instance you must deploy the new policy. You can do this by pressing the **F6** button.

### Test the integration

Having completed the integration steps, you can now test the setup using the cURL testing utility.

{{< alert title="Note" color="primary" >}}You must have added a `weblogic` user to the API Gateway local user store as outlined in [Prerequisites](#Prerequisites).{{< /alert >}}

Assuming you are running API Gateway on a machine called `apigateway` on the default port of 8080, you can send a POST request to the authorization policy on API Gateway using HTTP basic authentication with the following command:

```
curl  --user weblogic:weblogic --data "test=data" http://apigateway:8080/oes
User 'weblogic’ was authorized successfully!
```

You can see that the success message has been returned by API Gateway meaning that the `weblogic` user has been successfully authorized by OES to access the resource. A quick look at the API Gateway’s trace output shows the OES 11g Authorization filter making the successful authorization request for the `MyApplication/MyResourceType/MyResource` resource:

```
DEBUG   23/Oct/2012:15:28:45.183 [42687940] run circuit "OES Authorization"...
DEBUG   23/Oct/2012:15:28:45.183 [42687940] run filter [HTTP Basic Authentication] {
DEBUG   23/Oct/2012:15:28:45.183 [42687940]     VordelRepository.checkCredentials: username=weblogic
DEBUG   23/Oct/2012:15:28:45.183 [42687940]     Attempt to map incoming format Username to repository authZ format Username
DEBUG   23/Oct/2012:15:28:45.183 [42687940] } = 1, filter [HTTP Basic Authentication]
DEBUG   23/Oct/2012:15:28:45.183 [42687940] Filter [HTTP Basic Authentication] completes in 0 milliseconds.
DEBUG   23/Oct/2012:15:28:45.183 [42687940] run filter [11g Authorization] {
DEBUG   23/Oct/2012:15:28:45.183 [42687940]     creating subject from 'weblogic'
DEBUG   23/Oct/2012:15:28:45.183 [42687940]     checking 'POST' to resource: MyApplication/MyResourceType/MyResource
DEBUG   23/Oct/2012:15:28:45.185 [42687940]     Request: {weblogic, POST, MyApplication/MyResourceType/MyResource}
Result: true
DEBUG   23/Oct/2012:15:28:45.185 [42687940]     result from OES: true
DEBUG   23/Oct/2012:15:28:45.185 [42687940]     no obligations in response
DEBUG   23/Oct/2012:15:28:45.185 [42687940] } = 1, filter [11g Authorization]
DEBUG   23/Oct/2012:15:28:45.185 [42687940] Filter [11g Authorization] completes in 2 milliseconds.
```

Now let's see what happens when you authenticate with a user that is present in the API Gateway's local user store, but that has not been configured with authorization rights in OES. To demonstrate this, you can send up a request using the credentials of the default API Gateway `admin` user:

```
curl  --user admin:changeme --data "test=data" http://apigateway:8080/oes
User 'admin’ was NOT authorized to access the resource!
```

If you take a quick look at the API Gateway's trace output again, you can see that the 11g Authorization filter has blocked the authorization request:

```
DEBUG   23/Oct/2012:15:29:22.678 [41f67940] run circuit "OES Authorization"...
DEBUG   23/Oct/2012:15:29:22.678 [41f67940] run filter [HTTP Basic Authentication] {
DEBUG   23/Oct/2012:15:29:22.678 [41f67940]     VordelRepository.checkCredentials: username=admin
DEBUG   23/Oct/2012:15:29:22.678 [41f67940]     Attempt to map incoming format Username to repository authZ format Username
DEBUG   23/Oct/2012:15:29:22.678 [41f67940] } = 1, filter [HTTP Basic Authentication]
DEBUG   23/Oct/2012:15:29:22.678 [41f67940] Filter [HTTP Basic Authentication] completes in 0 milliseconds.
DEBUG   23/Oct/2012:15:29:22.678 [41f67940] run filter [11g Authorization] {
DEBUG   23/Oct/2012:15:29:22.678 [41f67940]     creating subject from 'admin'
DEBUG   23/Oct/2012:15:29:22.678 [41f67940]     checking 'POST' to resource: MyApplication/MyResourceType/MyResource
DEBUG   23/Oct/2012:15:29:22.679 [41f67940]     Request: {admin, POST, MyApplication/MyResourceType/MyResource}
Result: false
DEBUG   23/Oct/2012:15:29:22.679 [41f67940]     result from OES: false
ERROR   23/Oct/2012:15:29:22.679 [41f67940]     Failed to authZ to OES
DEBUG   23/Oct/2012:15:29:22.680 [41f67940] } = 0, filter [11g Authorization]
DEBUG   23/Oct/2012:15:29:22.680 [41f67940] Filter [11g Authorization] completes in 2 milliseconds.
```
