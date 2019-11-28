{
"title": "LoadableModule example \\u2013 TimerLoadableModule",
"linkTitle": "LoadableModule example \\u2013 TimerLoadableModule",
"date": "2019-11-27",
"description": "This section describes how to create a loadable module using a simple example. The `TimerLoadableModule` class creates a timer and traces a message to the trace output at a set interval."
}
﻿

This section describes how to create a loadable module using a simple example. The `TimerLoadableModule` class creates a timer and traces a message to the trace output at a set interval.

There are two parts to building this example:

1.  [*Create the TypeDoc definition for the loadable module* on page 1](#Create)
2.  [*Create the loadable module implementation class* on page 1](#Create2)

Create the TypeDoc definition for the loadable module
-----------------------------------------------------

A TypeDoc is an XML file that contains entity type definitions. Entity type definitions describe the format of data associated with a configurable item. For more details on entity types, see [*Entity types* on page 1](entity_store.htm#Entity).

All TypeDocs for `LoadableModule` classes must:

-   Extend the `LoadableModule` type or one of its subtypes (such as `NamedLoadableModule`)
-   Define a constant `LoadableModule` class
-   Define the `loadorder` that indicates in what order the loadable module is loaded and configured
-   List the configuration fields for the entity

The following definition lists the various fields that form the configuration data for the `TimerLoadableModule` class.

``` {space="preserve"}
<entityType name="TimerLoadableModule" extends="NamedLoadableModule">
    <constant name="_version" type="integer" value="0"/>
    <constant name="class" type="string" 
      value="com.vordel.example.TimerLoadableModule "/>
    <constant name="loadorder" type="integer" value="20"/> 
    <field name="delaySecs" type="integer" cardinality="1" default="30"/>
    <field name="periodSec" type="integer" cardinality="1" default="10"/>
    <field name="textMessage" type="string" cardinality="1" default="Hello world"/>
</entityType>
```

In this definition:

-   `delaySecs` – Delay in milliseconds before task is to be executed
-   `periodSec` – Time in milliseconds between successive task executions
-   `textMessage` – Message to be output to the trace file

Create the loadable module implementation class
-----------------------------------------------

The API Gateway server-side implementation class is responsible for creating a timer and scheduling a task for repeated fixed-rate executions, beginning after a specified delay. Subsequent executions take place at regular intervals, separated by a specified period.

The following code shows the members and methods of the `TimerLoadableModule` class:

``` {space="preserve"}
public class TimerLoadableModule implements LoadableModule {

  Timer timer = null;
  int initialDelay = 30 * 1000; 
  int period = 10 * 1000;        
  String message = "Hello world";

  @Override
  public void configure(ConfigContext solutionPack, Entity entity)
    throws EntityStoreException {

      if (timer != null)
        timer.cancel();

      // load the configuration settings
      initialDelay = entity.getIntegerValue("delaySecs") * 1000; 
      period = entity.getIntegerValue("periodSec") * 1000;        
      message = entity.getStringValue("textMessage");
      TimerTask task = new TimerTask() {
          public void run() {
              Trace.error(message);
          }
      };
      timer.scheduleAtFixedRate(task, initialDelay, period);
  }

  @Override
  public void load(LoadableModule loadableModule, String arg1) {
      timer = new Timer();
  }

  @Override
  public void unload() {
      // clean up 
      if (timer != null)
          timer.cancel();
  }
}
```

The `load` method creates a `Timer` instance. The `unload` method terminates the timer, discarding any currently scheduled tasks. It does not interfere with a currently executing task (if it exists). When the timer is terminated, its execution thread terminates gracefully, and no more tasks can be scheduled on it.

The `configure` method loads the configuration data and creates a new `TimerTask` that traces a message to the trace output and schedules this task to be executed at a repeated fixed rate, beginning after a delay, with subsequent executions to take place at regular intervals, separated by a specified period.

See [*Create a message listener* on page 1](message_listener.htm) for another example of a loadable module class that is used for monitoring messages passing through policies in an *interceptor*.

{{< alert title="Note" color="primary" >}}Currently, each loadable module is unloaded and recreated at reconfiguration time, so that the `configure` method is called only once for each loadable module. This behavior should not be relied upon.{{< /alert >}}
