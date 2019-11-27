{
"title": "Construct a policy",
"linkTitle": "Construct a policy",
"date": "2019-11-27",
"description": "You can build policies using the policy editor in Policy Studio. To build a policy, you can drag message filters from the filters palette on the right on to the policy canvas. You can then link these filters using success paths or failure paths to create a network of filters. "
}
﻿

You can build policies using the policy editor in Policy Studio. To build a policy, you can drag message filters from the filters palette on the right on to the policy canvas. You can then link these filters using success paths or failure paths to create a network of filters.

Create the policy
-----------------

To create a policy, perform the following steps:

1.  In the Policy Studio tree, right-click the **Policies** node and select **Add Policy**.
2.  Enter `Send Instant Message` as the name of the new policy in the dialog.
3.  Drag a **Jabber** filter from the **XMPP** group onto the policy canvas.
4.  Enter the following in the **Jabber** filter dialog:\
    -   **Name:** Name of the filter
    -   **From:** User email address
    -   **Password:** User password
    -   **Resource Name:** Resource name (for example, `apigateway`)
    -   **To:** Chat participant’s email address
    -   **Message:** Message to send

>

1.  To check that the help is working correctly, click the **Help** button on the filter dialog.
2.  In [Create the classes](extkit_create_psclasses.htm), as part of the `getHelp` method, you added a mapping to the `contexts.xml` file (in the `/plugins/com.vordel.rcp.policystudio.resources_<version>` directory of your Policy Studio installation). After restarting Policy Studio, the **Help** button should function correctly.
3.  To add a **Reflect Message** filter, which echoes the client message back to the client, drag it from the **Utility** group onto the policy canvas.
4.  Configure the **Reflect Message** filter as follows:
    -   **Name:** Enter a name for the filter (or use the default)
    -   **HTTP response code status:** Use the default value (`200`)
5.  Connect the Jabber node to the Reflect Message node with a success path.
6.  Right-click the **Jabber** filter, and select **Set as Start** to set it as the start filter for the policy.

Invoke the policy
-----------------

To configure the API Gateway to invoke the new policy, follow these steps:

1.  Under the **Environment Configuration > Listeners** node in Policy Studio, select the path (for example, **API Gateway > Default Services > Paths**).
2.  On the resolvers window on the right, click **Add > Relative Path**.
3.  Enter the following values on the dialog and click **OK**:
    -   **When a request arrives that matches the path:**
    -   **Path Specific Policy:** Click the browse button and select the policy. This sends all requests received on the path configured above to your newly configured policy.
4.  To deploy the new configuration to API Gateway, click the **Deploy** button on the toolbar or press **F6** and follow the instructions.

The following diagram shows the complete policy:

![Jabber policy](/Images/APIGatewayDeveloperGuide/jabber_policy.png)

Test the policy
---------------

To test the configuration, follow these steps:

1.  Start API Tester.
2.  Click the arrow next to the Play icon and select **Request Settings**.
3.  In the **Url** field, enter to send the message to the relative path you configured above.
4.  Click **Run** to send the message to API Gateway.

{{< alert title="Tip" color="primary" >}}Alternatively, you can test the policy by entering the URL into any web browser.{{< /alert >}}

API Gateway echoes the message back to the client using the **Reflect Message** filter after an instant message has been sent to an account on Google Talk. The following is an example of an instant message that appears on an account on Google Talk. This indicates that the newly added filter has worked successfully.

![Example of IM in Google Talk](/Images/APIGatewayDeveloperGuide/google_im_extkit.png)
