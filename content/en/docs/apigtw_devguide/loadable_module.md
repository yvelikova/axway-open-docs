{
"title": "Create a loadable module",
"linkTitle": "Create a loadable module",
"date": "2019-11-27",
"description": "This section describes the `LoadableModule` interface, and provides an example of a loadable module class that implements the interface. Another example of a class that implements `LoadableModule` can be found in the `DEVELOPER_SAMPLES/FilterInterceptorLoadableModule` directory."
}
﻿

This section describes the `LoadableModule` interface, and provides an example of a loadable module class that implements the interface. Another example of a class that implements `LoadableModule` can be found in the `DEVELOPER_SAMPLES/FilterInterceptorLoadableModule` directory.

LoadableModule interface
------------------------

The `LoadableModule` interface provides methods that are invoked during startup or shutdown of the API Gateway, or when a new configuration is deployed.

A `LoadableModule` class can be loaded at startup, or when a new configuration is deployed, and can be unloaded at shutdown. Loadable modules are used to instantiate long-lived objects in the API Gateway server process (for example, a transport listener, a cache manager, an embedded broker, and so on).

The loadable module object itself is informed when it is loaded, reconfigured, and unloaded. The order in which all loadable modules are loaded and configured is specified explicitly with a `loadorder` field in the entity type description associated with that loadable module. If your loadable module depends on another loadable module then it must have a load order which is higher than the module on which it depends.

The base `LoadableModule` interface has three methods. These are used on startup of the API Gateway, on shutdown of the API Gateway, or when a new configuration is deployed to the API Gateway. The following example shows the methods.

``` {space="preserve"}
public interface LoadableModule {
    
    
    …
    
    /**
     * Load a module into the process.
     * @param parent Loadable modules may nest - @parent provides access to 
     * the containing LM, or is null for a top-level module.
     * @param entityType - The actual type of the entity that caused this 
     * class to be constructed.
     */
    public void load(LoadableModule parent, String entityType)  
            throws FatalException;
    /**
     * Unload the module from the process. This is called once 
     * when the module is no longer required.
     */
    public void unload();
    
    /**
     * Configure the loadable module. Called if the entity for the 
     * object changes.
     * Note that currently, modules are unloaded and reloaded for each 
     * refresh - this behaviour should not be relied upon.
     */
    public void configure(ConfigContext pack, Entity object)
            throws EntityStoreException,FatalException;
}
```

A loadable module is normally designed as a singleton object so that only one instance exists. The same instance is returned to all filters accessing the loadable module. (For example, the `GlobalProperties` class is global and there is only one instance that is accessible to all parts of the application.)

Loadable module classes can be subclassed to provide extra information. For example, the `TransportModule` class provides settings to indicate what traffic information should be recorded for a specific protocol.

You can load a type definition for a `LoadableModule` class using the ES Explorer tool (see [*Load a type definition* on page 1](entity_store.htm#Load)). You can also view the `LoadableModule` classes in the ES Explorer (see [*Use the ES Explorer* on page 1](entity_store.htm#Use)).
