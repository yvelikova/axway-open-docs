{
"title": "Create the TypeDoc",
"linkTitle": "Create the TypeDoc",
"date": "2019-11-27",
"description": "A *TypeDoc* is an XML file that contains entity type definitions. Entity type definitions describe the format of data associated with a configurable item. For more details on entity types, see [*Entity types* on page 1](%3Ca%20href=)."
}
﻿

A *TypeDoc* is an XML file that contains entity type definitions. Entity type definitions describe the format of data associated with a configurable item. For more details on entity types, see *Entity types* on page 1.

All TypeDocs for custom filters must:

-   Extend the `Filter` type
-   Define a constant filter class (for example, JabberFilter)
-   List the configuration fields for the entity

The following example shows how the TypeDoc lists the various fields that form the configuration data for the JabberFilter.

``` {space="preserve"}
<entityStoreData>
  <entityType name="JabberFilter" extends="Filter">
      <constant name="class" type="string" 
        value="com.vordel.jabber.filter.JabberFilter"/>
      <field name="fromEmailAddress" type="string" cardinality="1"/>
      <field name="password" type="string" cardinality="1"/>
      <field name="resourceName" type="string" cardinality="1"/>
      <field name="toEmailAddress" type="string" cardinality="1"/>
      <field name="messageStr" type="string" cardinality="1"/>
   </entityType>    
</entityStoreData>
```

You can also provide internationalized log messages by specifying an `<entity>` block of type `InternationationalizationFilter` in the `<entityStoreData>` elements. For example:

``` {space="preserve"}
<entityStoreData>
 <!-- Internationalization for logging / audit trail -->
 <entity xmlns="http://www.vordel.com/2005/06/24/entityStore" 
   type="InternationalizationFilter">
    <key type="Internationalization">
        <id field="name" value="Internationalization Default"/>
    </key>
    <fval name="type">
        <value>JabberFilter</value>
    </fval>
    <fval name="logFatal">
        <value>Error in the Jabber Filter sending instant message. 
          Error: ${circuit.exception}</value>
    </fval>
    <fval name="logFailure">
        <value>Failed in the Jabber Filter sending instant message</value>
    </fval>
    <fval name="logSuccess">
        <value>Success in the Jabber Filter sending instant message</value>
    </fval>
 </entity>    
</entityStoreData>
```
