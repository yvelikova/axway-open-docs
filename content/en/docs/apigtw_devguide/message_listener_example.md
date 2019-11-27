{
"title": "MessageListener example \\u2013 FilterInterceptor",
"linkTitle": "MessageListener example \\u2013 FilterInterceptor",
"date": "2019-11-27",
"description": "This section describes how to create a message listener using a simple example. The `FilterInterceptor` class counts the number of messages which pass, fail, or abort during processing of a request in the API Gateway."
}
﻿

This section describes how to create a message listener using a simple example. The `FilterInterceptor` class counts the number of messages which pass, fail, or abort during processing of a request in the API Gateway.

There are two parts to building this example:

1.  [*Create the TypeDoc definition for the message listener* on page 1](#Create)
2.  [*Create the message listener implementation class* on page 1](#Create2)

Create the TypeDoc definition for the message listener
------------------------------------------------------

A TypeDoc is an XML file that contains entity type definitions. Entity type definitions describe the format of data associated with a configurable item. For more details on entity types see [*Entity types* on page 1](entity_store.htm#Entity).

In this example, the `FilterInterceptorLoadableModule` extends `NamedLoadableModule`. For more information on loadable module TypeDoc definitions, see [Create the TypeDoc definition for the loadable module](loadable_module_timer.htm#Create).

The following definition lists the various fields that form the configuration data for the `FilterInterceptorLoadableModule` class and declares an instance of the type.

``` {space="preserve"}
<entityStoreData>
  <entityType name="FilterInterceptorLoadableModule" extends="NamedLoadableModule">
    <constant name="class" type="string" 
      value="com.vordel.interceptor.FilterInterceptor"/>
    <constant name="loadorder" type="integer" value="1000000"/>
  </entityType>
</entityStoreData>
```

``` {space="preserve"}
<entityStoreData>
  <entity type="FilterInterceptorLoadableModule">
    <fval name="name">
      <value>Filter Invocation Callback Listener</value>
    </fval>
  </entity>
</entityStoreData>
```

``` {space="preserve"}
<typeSet>
  <typedoc file="FilterInterceptorLoadableModule.xml"/>
  <typedoc file="instance.xml"/>
</typeSet>
```

To add the `FilterInterceptorLoadableModule` type to the primary entity store, you can use the `publish.py` script. For example:

``` {space="preserve"}
> cd INSTALL_DIR/apigateway/samples/scripts
> ./run.sh publish/publish.py
-i DEVELOPER_SAMPLES/FilterInterceptorLoadableModule/conf/typedoc/typeSet.xml
-t FilterInterceptorLoadableModule
-g "QuickStart Group" -n "QuickStart Server"
```

Alternatively, you can use the ES Explorer to add the type. For more information, see [*Use the ES Explorer* on page 1](entity_store.htm#Use).

Create the message listener implementation class
------------------------------------------------

The API Gateway server-side implementation class is responsible for monitoring message creation and lifecycle events. On each lifecycle event it writes messages to the trace output.

The following is an extract of the `FilterInterceptor` class that can be found in the `DEVELOPER_SAMPLES/FilterInterceptorLoadableModule/src` directory.

``` {space="preserve"}
public class FilterInterceptor implements LoadableModule,
  MessageCreationListener, MessageListener, FilterInterceptorMBean
{
    …
    @Override
    public void load(LoadableModule parent, String typeName) {
        Message.addCreationListener(this);
        …
    }

    @Override
    public void unload() {
        Message.removeCreationListener(this);
        …
    }

    @Override
    public void messageCreated(Message msg, Object context) {
        msg.addMessageListener(this);
    }
    …

    @Override
    public void preCircuitInvocation(Circuit circuit, Message message, 
      Object context)
    {
        Trace.info("Circuit ["+circuit.getName()+"] about to invoke message: "
          +message.correlationId+", caller context is: "+context);
    }

    @Override
    public void postCircuitInvocation(Circuit circuit, Message message, 
      boolean result, Object obj)
    {
        Trace.info("Circuit ["+circuit.getName()+"] has finished with message: "
          +message.correlationId+", result is :"+(result?"PASSED": "FAILED"));
    }
    …

    @Override
    public void preFilterInvocation(Circuit circuit, MessageProcessor processor, 
      Message message, MessageProcessor caller, Object obj)
    {
        Filter f = processor.getFilter();
        String type = f.getEntity().getType().getName();
        Trace.info("["+f.getName()+"("+type+")] msg:"+message.correlationId);
    }

    @Override
    public void postFilterInvocation(Circuit circuit, MessageProcessor processor, 
      Message message, int resultType, MessageProcessor caller, Object obj)
    {
        Trace.info("["+processor.getFilter().getName()+"] msg:"
          +message.correlationId+" Result: "+toString(resultType));
    }

    @Override
    public void onMessageCompletion(Message message) {
        Trace.info("Message ["+message.correlationId+"] completed.");
    }
    …
}
```

A `MessageListener` is registered with a message instance by first listening for a message creation event via the `addCreationListener(MessageCreationListener)` method, which is called during the loading of the `FilterInterceptor`, and then calling the `addMessageListener(MessageListener)` method on the message parameter. The message creation listener is unregistered during the unloading of the `FilterInterceptor`.

The `onMessageCompletion` method monitors the completion of a message in a policy so that resources can be cleaned up when the message is no longer useful. The preprocessing and postprocessing interceptor methods output trace information.

The following is an example of the trace output from the `FilterInterceptor` during the execution of a filter:

``` {space="preserve"}
INFO 26/Feb/2013:11:26:12.064 [1698] Circuit [Send Instant Message] about to invoke 
  message: 8a8ef28f512c9bce01980000, caller context 
  is: com.vordel.dwe.http.HTTPPlugin@2b3fab
INFO 26/Feb/2013:11:26:14.017 [1698] [Jabber(JabberFilter)] 
  msg:8a8ef28f512c9bce01980000
INFO 26/Feb/2013:11:26:16.658 [1698] [Jabber] 
  msg:8a8ef28f512c9bce01980000 Result: SUCCESS
INFO 26/Feb/2013:11:26:20.799 [1698] Circuit [Send Instant Message] has finished 
  with message: 8a8ef28f512c9bce01980000, result is :PASSED
```

{{< alert title="Note" color="primary" >}}To see the above output, you must build the FilterInterceptorLoadableModule sample and add the resulting `interceptor.jar` to the API Gateway CLASSPATH. See the `README.TXT` for more information on building the sample.{{< /alert >}}

The following is a sample style sheet that can be used with the `removeType` script in the API Gateway to remove the `FilterInterceptorLoadableModule` and its instances from the primary entity store.

``` {space="preserve"}
<?xml version="1.0" ?>
<stylesheet xmlns="http://www.w3.org/1999/XSL/Transform" 
  version="1.0" 
  xmlns:es="http://www.vordel.com/2005/06/24/entityStore">
    <template match="comment()|processing-instruction()">
      <copy />
    </template>
    <template match="@*|node()">
      <copy>
      <apply-templates select="@*|node()" />
      </copy>
    </template>
    <!-- Removing type and instances -->
    <template match=
      "/es:entityStoreData/es:entityType[@name='FilterInterceptorLoadableModule']"/>
    <template match=
      "/es:entityStoreData/es:entity[@type='FilterInterceptorLoadableModule']"/>
</stylesheet>
```

You can remove the type from the primary store by running the following command:

``` {space="preserve"}
> cd INSTALL_DIR/apigateway/samples/scripts
> ./run.sh unpublish/unpublish.py
-i DEVELOPER_SAMPLES/FilterInterceptorLoadableModule/conf/remove.xslt
-t FilterInterceptorLoadableModule
-g "QuickStart Group" -n "QuickStart Server"
```

You can use the ES Explorer tool to view new types that were added, or to verify that types were removed. For more information, see [*Use the ES Explorer* on page 1](entity_store.htm#Use).
