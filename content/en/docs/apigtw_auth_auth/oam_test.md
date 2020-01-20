{
"title": "Test the integration",
"linkTitle": "Test the integration",
"date": "2020-01-20",
"description": "Having completed the integration steps, you can now test the setup using the cURL testing utility. Assuming you are running API Gateway on a machine called `apigateway` on the default port of `8080`, you can send a POST request to the newly created policy on API Gateway using HTTP basic authentication with the following command:"
}
﻿

Having completed the integration steps, you can now test the setup using the cURL testing utility. Assuming you are running API Gateway on a machine called `apigateway` on the default port of `8080`, you can send a POST request to the newly created policy on API Gateway using HTTP basic authentication with the following command:

``` {space="preserve"}
> curl --user weblogic:weblogic --data "test=data" http://apiserver:8080/oam
User 'weblogic' was authenticated and authorized successfully!
```

You can see that the success message has been returned by API Gateway meaning that the `weblogic` user has been successfully authenticated and authorized by OAM to access the resource. A quick look at the API Gateway's trace output shows that the `weblogic` user has been authenticated and authorized to access the `//oam.example.com/oam` resource.

``` {space="preserve"}
DEBUG 11/Dec/2012:13:07:44.090 [0794] run circuit "OAM 11g Authentication and Authorization"...
DEBUG 11/Dec/2012:13:07:44.094 [0794] run filter [HTTP Basic via OAM 11g R2 Repository] {
DEBUG 11/Dec/2012:13:07:44.094 [0794]   Check user name via Oracle Access Manager
DEBUG 11/Dec/2012:13:07:44.338 [0794]   Creating ResourceRequest with resType: 'http', resName: '//oam.example.com/oam, operation: 'POST'.
DEBUG 11/Dec/2012:13:07:44.339 [0794]   Successfully created ResourceRequest
DEBUG 11/Dec/2012:13:07:44.543 [0794]   Login succeeded to OAM for user weblogic
DEBUG 11/Dec/2012:13:07:44.544 [0794] } = 1, filter [HTTP Basic via OAM 11g R2 Repository]
DEBUG 11/Dec/2012:13:07:44.544 [0794] Filter [HTTP Basic via OAM 11g R2 Repository] completes in 450 milliseconds.
DEBUG 11/Dec/2012:13:07:44.545 [0794] run filter [Authorization via OAM 11gR2] {
DEBUG 11/Dec/2012:13:07:44.545 [0794]   Creating ResourceRequest with resType: 'http', resName: '//oam.example.com/oam, operation: 'POST'.
DEBUG 11/Dec/2012:13:07:44.545 [0794]   Successfully created ResourceRequest
DEBUG 11/Dec/2012:13:07:44.545 [0794]   Authz for resource: oracle.security.am.asdk.ResourceRequest@33aa7b
DEBUG 11/Dec/2012:13:07:44.638 [0794]   User 'uid=weblogic,ou=people,ou=myrealm,dc=idm_domain' is authorized for resource: //oam.example.com/oam
DEBUG 11/Dec/2012:13:07:44.638 [0794] } = 1, filter [Authorization via OAM 11g R2]
DEBUG 11/Dec/2012:13:07:44.639 [0794] Filter [Authorization via OAM 11gR2] completes in 94 milliseconds.
DEBUG 11/Dec/2012:13:07:44.639 [0794] run filter [Set Success Message] {
DEBUG 11/Dec/2012:13:07:44.639 [0794]   The content type of the converted message is text/plain
DEBUG 11/Dec/2012:13:07:44.640 [0794]   handle type text/plain with factory class com.vordel.mime.Body$1
DEBUG 11/Dec/2012:13:07:44.640 [0794]   Added converted message is added to the whiteboard
DEBUG 11/Dec/2012:13:07:44.640 [0794] } = 1, filter [Set Success Message]
DEBUG 11/Dec/2012:13:07:44.640 [0794] Filter [Set Success Message] completes in 1 milliseconds.
DEBUG 11/Dec/2012:13:07:44.641 [0794] ..."OAM 11g Authentication and Authorization" complete.
```

Now, check what happens when authenticating with a user that has not been configured in OAM:

``` {space="preserve"}
> curl --user admin:changeme --data "test=data" http://apiserver:8080/oam
Access Denied!
```

If you look at the API Gateway's trace output again, you can see that the filter has blocked the authorization request:

``` {space="preserve"}
DEBUG   11/Dec/2012:14:35:42.331 [0ad4] run circuit "OAM 11g Authentication and Authorization"...
DEBUG   11/Dec/2012:14:35:42.331 [0ad4] run filter [HTTP Basic via OAM 11g R2 Repository] {
DEBUG   11/Dec/2012:14:35:42.331 [0ad4] Check user name via Oracle Access Manager
DEBUG   11/Dec/2012:14:35:42.335 [0ad4] Creating ResourceRequest with resType: 'http', 
resName: '//Tyson3-pc.vordel.com/oam, operation: 'POST'.
DEBUG   11/Dec/2012:14:35:42.336 [0ad4] Successfully created ResourceRequest
ERROR   11/Dec/2012:14:35:42.486 [0ad4] Login failed to Oracle Access Manager for user admin
ERROR   11/Dec/2012:14:35:42.487 [0ad4] java exception:
com.vordel.circuit.authn.VordelAuthNException: Login failed
      
...

DEBUG   11/Dec/2012:14:35:42.533 [0ad4] } = 0, filter [HTTP Basic via OAM 11g R2 Repository]
DEBUG   11/Dec/2012:14:35:42.534 [0ad4] Filter [HTTP Basic via OAM 11g R2 Repository] completes in 203 milliseconds.
ERROR   11/Dec/2012:14:35:42.534 [0ad4] The message [Id-71222fbb50c744be03d40000] logged Failure 
at 12.11.2012 14:35:42,534 with log description: HTTP basic authentication failed
DEBUG   11/Dec/2012:14:35:42.535 [0ad4] run filter [Set Blocked Message] {
DEBUG   11/Dec/2012:14:35:42.535 [0ad4] The content type of the converted message is text/plain
DEBUG   11/Dec/2012:14:35:42.535 [0ad4] handle type text/plain with factoryclass com.vordel.mime.Body$1
DEBUG   11/Dec/2012:14:35:42.536 [0ad4] Added converted message is added to the whiteboard
DEBUG   11/Dec/2012:14:35:42.536 [0ad4] } = 1, filter [Set Blocked Message]
DEBUG   11/Dec/2012:14:35:42.536 [0ad4] Filter [Set Blocked Message] completes in 1 milliseconds.
DEBUG   11/Dec/2012:14:35:42.536 [0ad4] ..."OAM 11g Authentication and Authorization" complete.
```
