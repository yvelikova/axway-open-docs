{
"title": "Get diagnostics output from a custom filter",
"linkTitle": "Get diagnostics output from a custom filter",
"date": "2019-11-27",
"description": "You can configure API Gateway to output detailed diagnostic information for a specific custom filter by setting the trace level to DEBUG or DATA. "
}
﻿

You can configure API Gateway to output detailed diagnostic information for a specific custom filter by setting the trace level to DEBUG or DATA.

To change the trace level in Policy Studio, select the **Server Settings** node, and click **General**. Select DEBUG or DATA from the **Tracing level** field, and click **Save**.

For more information on tracing and logging see
[Configure API Gateway diagnostic trace](/csh?context=106&product=prod-api-gateway-77)
in the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)

Add custom trace output to custom code
--------------------------------------

{{< alert title="Note" color="primary" >}}Some code extracts in this section are from the `jabber` sample that is no longer included in the code samples supplied with API Gateway. {{< /alert >}}

To add custom trace information to custom code, you can add `Trace` statements within your code.

For example, the following code adds `Trace` statements to output the thread ID associated with the chat, which corresponds to the thread field of the SMACK XMPP message to a custom Jabber filter (see [*Write a custom filter using the extension kit* on page 1](custom_filter_extension_kit.htm)).

``` {space="preserve"}
…
import com.vordel.trace.Trace;
…

public class JabberProcessor extends MessageProcessor {
    …    
    public boolean invoke(Circuit c, Message message)   
      throws CircuitAbortException {             
        …
        try {        
            Trace.debug("Chat Thread ID is " + chat.getThreadID());
            chat.sendMessage(messageStr.substitute(message));            
        } catch (org.jivesoftware.smack.XMPPException ex) {
            Trace.error("Error Delivering block");    
         }         
        …          
    }
    …
}
```

The Chat Thread ID is output in the API Gateway trace file as follows:

``` {space="preserve"}
DEBUG   10/Jun/2013:11:18:21.365 [01f4] run filter [Jabber] {
DEBUG   10/Jun/2013:11:18:22.880 [01f4] Chat Thread ID is VSx1B0
DEBUG   10/Jun/2013:11:18:23.037 [01f4] } = 1, filter [Jabber]
DEBUG   10/Jun/2013:11:18:23.037 [01f4] Filter [Jabber] completes in 672 milliseconds.
```

The trace level DATA can be used to provide more detailed information. To use the DATA level in the preceding example, change the `Trace.debug` statements to `Trace.data` statements.

Add custom log4j output to custom code
--------------------------------------

To output custom log4j information perform the following steps:

1.  Update the `log4j2.xml` file, located in the `INSTALL_DIR/apigateway/system/conf` directory, to specify that the log4j appender sends output to the API Gateway trace file. For example:
2.  ``` {space="preserve"}
    <Root level="debug">
    <AppenderRef ref="STDOUT" />
    <AppenderRef ref="VordelTrace" />
    </Root>                                   
    ```

3.  Add log4j statements to your code. Log4j is already on the API Gateway CLASSPATH. The following example shows the preceding code with log4j statements instead of Trace statements:
4.  ``` {space="preserve"}
    …
    import org.apache.log4j.Logger;
    …
    public class JabberProcessor extends MessageProcessor {
        private static final Logger log = LogManager.getLogger(JabberProcessor.class.getName());  
        …    
        public boolean invoke(Circuit c, Message message)   
          throws CircuitAbortException {             
            …
            try {        
                log.debug("Chat Thread ID is " + chat.getThreadID());
                chat.sendMessage(messageStr.substitute(message));            
            } catch (org.jivesoftware.smack.XMPPException ex) {
                Trace.error("Error Delivering block");    
             }          
            …          
        }
        …
    }
    ```

The following is output in the API Gateway trace file:

``` {space="preserve"}
<Date> <Time> [Thread-xx] DEBUG com.vordel.jabber.filter.JabberProcessor - Chat Thread ID is xxxxxx
```
