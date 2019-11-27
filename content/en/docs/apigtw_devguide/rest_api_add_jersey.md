{
"title": "Add a Jersey-based REST API",
"linkTitle": "Add a Jersey-based REST API",
"date": "2019-11-27",
"description": "The following sections refer to `restJabber` sample code that is no longer included in the code samples supplied with API Gateway. We recommend that you use this section only as a general guide for adding a Jersey-based REST API. "
}
﻿

{{< alert title="Note" color="primary" >}}The following sections refer to `restJabber` sample code that is no longer included in the code samples supplied with API Gateway. We recommend that you use this section only as a general guide for adding a Jersey-based REST API. {{< /alert >}}

The following example shows how to add a Jersey REST service to your API Gateway and configure a corresponding servlet in Policy Studio. The REST service implements the SMACK API. The example also demonstrates how invoking a REST request sends an instant message to an account on Google Talk.

1.  Annotate your Java class. The following example shows a code snippet of a Jersey-annotated Java class for the Smack API. The full class definition can be found in the `DEVELOPER_SAMPLES/restJabber` directory. You must replace the `username` and `password` in the sample code with appropriate values.
2.  ``` {space="preserve"}
    @Path("/jabber")
    public class RestJabberRequest {

        private static final String username = "yourEmailaddresst@here.com";
        private static final String password = "yourPassword";
        private static final String resource = "apiServer";
        XMPPConnection connection;   

        // This method is called if TEXT_PLAIN is request
        @GET
        @Produces(MediaType.TEXT_PLAIN)
        @Path("{msg}/{to}")
        public String sendPlainMessage(@PathParam("msg") String msg, 
                @PathParam("to") String to) {
            try {
                sendMessage(msg, to);     
            } catch (XMPPException e) {
                System.err.println("Sending message failed:");
                e.printStackTrace();       
            }
            return "Sent a message of : " + msg + " to " + to;
        }

        …

        private void sendMessage(String msg, String to) throws XMPPException {
            try {
                ConnectionConfiguration config = 
                  new ConnectionConfiguration("talk.google.com", 5222, "gmail.com");
                connection = new XMPPConnection(config);
                SASLAuthentication.supportSASLMechanism("PLAIN", 0);
                connection.connect();
                connection.login(username, password, resource);
                Chat chat = 
                  connection.getChatManager().createChat(to, new MessageListener(){
                    @Override
                    public void processMessage(Chat arg0, Message arg1) {
                        Trace.debug(arg1.getBody());
                    }
                });
                chat.sendMessage(msg);
                connection.disconnect();
            } catch (org.jivesoftware.smack.XMPPException ex) {
                System.out.println("Exception throw");
            }
        }

    } 
    ```

3.  Follow the instructions in the `README.TXT` in the sample directory to build the JAR file for the restJabber sample.
4.  Add the new JAR and any third-party JAR files used by the restJabber classes (for example, the SMACK API JAR files) to the CLASSPATH for all API Gateways and Node Managers on a host by copying them to the `INSTALL_DIR/apigateway/ext/lib` directory.
5.  Alternatively, you can add the JARs to the CLASSPATH for a single API Gateway instance only, by copying them to the `INSTALL_DIR/apigateway/groups/GROUP_ID/INSTANCE_ID/ext/lib` directory.
6.  Restart API Gateway. The REST Jabber service is now available.
7.  Add your servlet application and servlet using Policy Studio or ES Explorer. See [*Add a Servlet using* on page 1](#Adding).
8.  Test the REST service. See [*Test the REST Jabber service* on page 1](#Test).

Add a servlet using Policy Studio
---------------------------------

To create a servlet using Policy Studio, perform the following steps:

1.  Start Policy Studio, and connect to the API Gateway.
2.  Select **Environment Configuration > Listeners > API Gateway > Default Services > Paths**.
3.  Right-click **Paths** and select **Add Servlet Application**.
4.  On the **General** tab, enter `/` in the **Relative Path** field.
5.  Click **OK**.
6.  Right-click the servlet application path you just created in the Paths window, and select **Add Servlet**.
7.  Enter `smack` in the **Name** field.
8.  Enter `smack` in the **URI** field.
9.  Enter `org.glassfish.jersey.servlet.ServletContainer` in the **Class** field.
10. Click **Add** under the Servlet Properties table to add a new property with the following values:
    -   Name: `jersey.config.server.provider.packages`
    -   Value: `com.vordel.jabber.rest`

    >
11. Click **OK**.
12. Click **Deploy** or press **F6** to deploy the new configuration on the API Gateway.

Test the REST Jabber service
----------------------------

To test the service, launch a web browser and enter the following URL:

``` {space="preserve"}
http://localhost:8080/smack/jabber/{msg}/{to_email_address}
```

Replace `msg` and `to_email_address` in the URL with the message and the email address of the recipient.

Alternatively, you can execute the REST client that is included with the REST classes in the the `DEVELOPER_SAMPLES/restJabber` directory. Fill in the details of the message and the recipient's email address in the client class. You can then build and execute the client using the Ant targets supplied.

If the service is working correctly, an IM is sent and a string message is returned.
