{
"title": "Create a message creation listener",
"linkTitle": "Create a message creation listener",
"date": "2019-11-27",
"description": "This section describes the `MessageCreationListener` interface, and provides an example of a message creation listener class that implements the interface. The sample code can be found in the `DEVELOPER_SAMPLES/FilterInterceptorLoadableModule` directory."
}
﻿

This section describes the `MessageCreationListener` interface, and provides an example of a message creation listener class that implements the interface. The sample code can be found in the `DEVELOPER_SAMPLES/FilterInterceptorLoadableModule` directory.

MessageCreationListener interface
---------------------------------

The `MessageCreationListener` interface provides a method that is invoked when a message is created.

A `MessageCreationListener` class is used to track message creation. It is called when a message is created but before the originator of the message has populated any properties.

An example of its usage can be seen in the following `FilterInterceptor` class:

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
}
```

The message creation listener is added when the loadable module is loaded, and removed when it is unloaded. In this example, it adds a message listener when a message is created.
