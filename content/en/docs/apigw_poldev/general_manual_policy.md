{
"title": "Configure policies manually",
"linkTitle": "Configure policies manually",
"date": "2019-10-17",
"description": "This topic describes how to use Policy Studio to configure an API Gateway policy manually. It also applies to cases where a web service definition is not available in a Web Services Description Language (WSDL) file, meaning that the policy used to protect a web service must be configured manually. "
}
﻿
<div id="p_general_manual_policy_overv">

Overview
--------

This topic describes how to use Policy Studio to configure an API Gateway policy manually. It also applies to cases where a web service definition is not available in a Web Services Description Language (WSDL) file, meaning that the policy used to protect a web service must be configured manually.

However, the recommended way to configure a policy to protect a web service is to import the WSDL file for that service. If your web service has WSDL-based definitions, see [*Configure policies from WSDL files* on page 1](general_policy_wsdl.htm).

</div>

<div id="p_general_manual_policy_conf">

Configuration
-------------

The following steps outline how to manually create a policy to protect a web service and then test it.

### Step 1: Create the policy

To create a policy manually, complete the following steps:

1.  Right-click the **Policies**
    node in the Policy Studio tree, and select the **Add Policy**
    menu option.
2.  Enter a suitable name (for example `TestPolicy`) for the new policy in the **Name**
    field, and click the **OK**
    button. The new policy is now visible in the tree.
3.  Click the new policy in the tree to start configuring the filters for the policy. You can easily configure the policy by dragging the required filters from the filter palette on the right of Policy Studio, and dropping them on to the policy canvas.
4.  Most policies attempt to check characteristics of the message, such as message size and format, and attempt to authenticate or authorize the sender of the message. When the message successfully passes all configured filters, it is usually routed on to the protected web service.
5.  For demonstration purposes, this example creates a simple policy consisting of two filters. The first filter checks the size of the message, and the second echoes the request message back to the client if it is below a certain size.
6.  Expand the **Content Filtering**
    category of filters from the filter palette, and drag and drop the **Message Size**
    filter on to the canvas.
7.  Enter `10`
    in the **At least**
    field and `1000`
    in the **At most**
    field to make sure that only messages between 10 bytes and 1000 bytes are reflected back to the client. Select all other defaults, and click the **Finish**
    button.
8.  Right-click the newly added filter, and select the **Set as Start**
    menu option to indicate that this is the first filter to be executed in this policy. The icon for the filter changes to indicate that it is the start of the policy.
9.  Open the **Utilities**
    category of filters, and drag the **Reflect**
    filter onto the canvas. Drop it on to the previously configured **Message Size**
    filter. Select the defaults for the **Reflect**
    filter, and click the **Finish**
    button.
10. Because you dropped the **Reflect**
    filter on to the **Message Size**
    filter, both filters are automatically linked with a *success path*. This means that if the first filter runs successfully, the next filter on the success path is executed. To link in more filters, add the filters to the canvas, and click the **Success Path**
    button at the top of the palette. Click the first filter followed by the second filter in the success path to link both filters.
11. You can also configure *failure paths*
    for filters in the same way. Failure paths are followed when the checks configured in the filter fail.

This completes the configuration of the simple policy.

### Step 2: Create a new relative path

You must now create a **Relative Path**
on the API Gateway instance, which maps incoming requests on a particular URI to the new policy. Complete the following steps:

1.  In the Policy Studio tree, select **Environment Configuration** > **Listeners** > **API Gateway**.
2.  Right-click the **Default Services**
    node, and select **Add Relative Path**.
3.  On the **Configure Relative Path**
    dialog, enter a suitable URI (for example, `TestPolicy`) on which to receive requests that are to be processed by the new policy.
4.  To map requests received on this URI to our new policy, select the `/TestPolicy`
    policy from the list of policies in the tree. Click the **OK**
    button when finished.

### Step 3: Deploy to API Gateway

Before the new configuration changes can take effect, you must deploy them to API Gateway. You can do this by clicking the **Deploy**
button on the right of the toolbar. Alternatively, press the **F6** key.

### Step 4: Test the policy\

You can use the tool of your choice (for example, Axway API Tester) to send SOAP requests to the new policy. You should send requests of different sizes to the following URL, assuming a default installation of API Gateway running on the local machine:

``` {space="preserve"}
http://localhost:8080/TestPolicy
```

Request messages that fall between the configured size are reflected to the client. Those that fall outside of the configured size are blocked, and a SOAP Fault is returned to the client.

### Step 5: Next steps\

Try running more complicated checks on request messages by adding new filters to the `TestPolicy`. Try also adding failure paths to the original **Message Size**
filter to handle messages that fall outside of the 10-1000 byte range.

Use the **Help**
button on each filter window to find out more about the configuration fields that are available on each window.

</div>
