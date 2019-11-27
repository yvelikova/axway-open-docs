{
"title": "Create the Processor class",
"linkTitle": "Create the Processor class",
"date": "2019-11-27",
"description": "This is the API Gateway runtime component of the filter that is returned by the `getMessageProcessorClass` of the Filter class. The Processor class is responsible for performing the processing on messages. It uses the configuration data to process each message. "
}
﻿

This is the API Gateway runtime component of the filter that is returned by the `getMessageProcessorClass` of the Filter class. The Processor class is responsible for performing the processing on messages. It uses the configuration data to process each message.

The following code shows how the Processor attaches to the Filter class and uses its data to process the message. It gets the configuration data using selectors to set up a connection to an XMPP server, creates a chat, and sends a message to a chat participant. The complete code for the class is available in the `DEVELOPER_SAMPLES/jabber` directory.

``` {space="preserve"}
public class JabberProcessor extends MessageProcessor {

    …

    @Override
    public void filterAttached(ConfigContext ctx, com.vordel.es.Entity entity) 
      throws EntityStoreException {
        super.filterAttached(ctx, entity);
        to = new Selector<String>(entity.getStringValue("toEmailAddress"), 
          String.class);
        byte[] passwordBytes = entity.getEncryptedValue("password");
        if (passwordBytes != null) {
            try {
                passwordBytes = ctx.getCipher().decrypt(passwordBytes);
            } catch (GeneralSecurityException exp) {
             Trace.error(exp);
         }
        }
        String pass = new String(passwordBytes);
        password = new Selector<String>(pass, String.class);
        resourceName = new Selector<String>(entity.getStringValue("resourceName"), 
          String.class);
        from = new Selector<String>(entity.getStringValue("fromEmailAddress"), 
          String.class);
        messageStr = new Selector<String>(entity.getStringValue("messageStr"), 
          String.class);
    }

    public boolean invoke(Circuit c, Message message)
      throws CircuitAbortException {
        XMPPConnection connection = null;
       try {
           ConnectionConfiguration config =
           new ConnectionConfiguration("talk.google.com", 5222, "gmail.com");
           connection = new XMPPConnection(config);
            SASLAuthentication.supportSASLMechanism("PLAIN", 0);
           connection.connect();
           connection.login(from.substitute(message), password.substitute(message),
             resourceName.substitute(message));
        } catch (org.jivesoftware.smack.XMPPException ex) {
            Trace.error("Error establishing connection to XMPP Server");
        }
       Chat chat = connection.getChatManager().createChat(to.substitute(message), 
         new MessageListener(){
           @Override
           public void processMessage(Chat arg0, 
             org.jivesoftware.smack.packet.Message arg1) {
               Trace.debug(arg1.getBody());
           }
       });
       try {
           chat.sendMessage(messageStr.substitute(message));
           connection.disconnect();
       } catch (org.jivesoftware.smack.XMPPException ex) {
           Trace.error("Error Delivering block");
       }
       return true;
    }
}
```

There are two important methods that must be implemented by every Processor class:

-   `filterAttached`
-   `invoke`

The `filterAttached` method should contain any API Gateway server-side initialization or configuration to be performed by the filter, such as connecting to third-party products or servers.

The `invoke` method is responsible for using the configuration data to perform the message processing. This method is called by API Gateway as it executes the series of filters in any given policy. In the case of the `JabberFilter`, the `invoke` method uses the configuration data to set up a connection to an XMPP server, creates a chat, sends a message to a chat participant, and disconnects from the XMPP server.

The `invoke` method can have the following possible results:

| Result                | Description                                                                                                                                                                                                                                                                                                                                                                              |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| True                  | If the filter processed the message successfully (for example, successful authentication, schema validation passed, and so on), the `invoke` method should return a true result, meaning that the next filter on the success path for the filter is invoked.                                                                                                                             |
| False                 | If the filter processing fails (for example, the user was not authenticated, message failed integrity check, and so on), the `invoke` method should return false, meaning that the next filter on the failure path for the filter is invoked.                                                                                                                                            |
| CircuitAbortException | If for some reason the filter cannot process the message at all (for example, if it cannot connect to an Identity Management server to authenticate a user), it should throw a `CircuitAbortException`. If a `CircuitAbortException` is thrown in a policy, the designated fault processor (if any) is invoked instead of any successive filters on either the success or failure paths. |


