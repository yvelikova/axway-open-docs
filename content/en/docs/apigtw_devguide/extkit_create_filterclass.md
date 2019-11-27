{
"title": "Create the Filter class ",
"linkTitle": "Create the Filter class ",
"date": "2019-11-27",
"description": "A `Filter` class is responsible for returning the corresponding API Gateway runtime class and Policy Studio class."
}
﻿

A `Filter` class is responsible for returning the corresponding API Gateway runtime class and Policy Studio class.

The `Filter` class is responsible for the following tasks:

-   Specifying the message attributes it requires, consumes, and generates.
-   Returning the corresponding API Gateway runtime class (the Processor class).
-   Returning the corresponding Policy Studio class.

The following code shows the members and methods of the `JabberFilter` class.

``` {space="preserve"}
public class JabberFilter extends DefaultFilter {

    protected final void setDefaultPropertyDefs() {
         reqProps.add(new PropDef(MessageProperties.CONTENT_BODY, 
          com.vordel.mime.Body.class));
    }

    @Override
    public void configure(ConfigContext ctx, com.vordel.es.Entity entity)
      throws EntityStoreException {
        super.configure(ctx, entity);
    }

    public Class getMessageProcessorClass() {
        return JabberProcessor.class;
    }

    public Class getConfigPanelClass() throws ClassNotFoundException {
        // Avoid any compile or runtime dependencies on SWT and other UI
        // libraries by lazily loading the class when required.
        return Class.forName("com.vordel.jabber.filter.JabberFilterUI");
    }
}
```

There are two important methods implemented in this class:

-   `setDefaultPropertyDefs`
-   `getMessageProcessorClass`

The `setDefaultPropertyDefs` method enables the filter to define the message attributes that it *requires*, *generates*, and *consumes* from the attributes message whiteboard.

The whiteboard contains all the available message attributes. When a filter generates message attributes, it puts them up on the whiteboard so that when another filter requires them, it can pull them off the whiteboard. If a filter consumes a message attribute, it is wiped from the whiteboard so that no other filter in the policy can use it.

The attributes are stored in sets of property definitions (`Set<PropDef>`). A property definition defines a property to type mapping. There are `reqProps`, `genProps`, and `consProps`, which are inherited from the Filter class.

In the case of the `JabberFilter` class, the `content.body` attribute, which is of type `com.vordel.mime.Body`, is required because the SOAP parameters must be extracted from the body of the HTTP request. The property definition is declared as follows:

``` {space="preserve"}
protected final void setDefaultPropertyDefs() {
    reqProps.add(new PropDef(MessageProperties.CONTENT_BODY, 
      com.vordel.mime.Body.class));
}
```

The next method is the `getMessageProcessorClass` method, which returns the API Gateway runtime component (the Processor class) that is associated with this Filter class. Each Filter class has a corresponding Processor class, which is responsible for processing the message.

Finally, the corresponding Policy Studio configuration class is returned by the `getConfigPanelClass` method, which in this case is the `com.vordel.jabber.filter.JabberFilterUI` class. This class is described in detail in [Create the classes](extkit_create_psclasses.htm).
