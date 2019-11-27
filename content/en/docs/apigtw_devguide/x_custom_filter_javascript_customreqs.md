{
"title": "Use JavaScript for custom requirements",
"linkTitle": "Use JavaScript for custom requirements",
"date": "2019-11-27",
"description": "In this approach, you write your custom requirement using the **Scripting Language** filter alone. "
}
﻿

In this approach, you write your custom requirement using the **Scripting Language** filter alone.

Follow these guidelines:

1.  Create a policy (for example, called **InvokeScript**) in Policy Studio that contains only a **Scripting Language** filter. Configure the filter to invoke JavaScript that meets your custom requirement.

We recommend that you select `JavaScript` in the **Language** field of the **Scripting Language** filter, and ensure that the JavaScript syntax in the script conforms with Nashorn engine syntax. For more information about migrating from Rhino to Nashorn, see the [Rhino Migration Guide](https://wiki.openjdk.java.net/display/Nashorn/Rhino+Migration+Guide).

1.  Configure API Gateway to invoke the policy. For more information, see [Invoke the policy](#Invoke).
2.  Test the policy using API Tester. For more information, see [Test the policy](#Test).

Invoke the policy
-----------------

To configure the API Gateway to invoke the new policy, follow these steps:

1.  Under the **Environment Configuration > Listeners** node in Policy Studio, select the path (for example, **API Gateway > Default Services > Paths**).
2.  On the resolvers window on the right, click **Add > Relative Path**.
3.  Enter the following values on the dialog and click **OK**:
    -   **When a request arrives that matches the path:**
    -   **Path Specific Policy:** Click the browse button and select the policy. This sends all requests received on the path configured above to your newly configured policy.

    >
4.  To deploy the new configuration to API Gateway, click the **Deploy** button on the toolbar or press **F6** and follow the instructions.

Test the policy
---------------

To test the configuration, follow these steps:

1.  Start API Tester.
2.  Click the arrow next to the Play icon and select **Request Settings**.
3.  In the **Url** field, enter to send the message to the relative path you configured above.
4.  Click **Run** to send the message to API Gateway.

{{< alert title="Tip" color="primary" >}}Alternatively, you can test the policy by entering the URL into any web browser.{{< /alert >}}
