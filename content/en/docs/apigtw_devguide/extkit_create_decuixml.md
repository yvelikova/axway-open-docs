{
"title": "Create the declarative UI XML file",
"linkTitle": "Create the declarative UI XML file",
"date": "2019-11-27",
"description": "The declarative UI XML file encapsulates the design of the user interface of filters and dialogs. It includes the markup UI elements and bindings to create the Jabber filter dialog within Policy Studio. "
}
﻿

The declarative UI XML file encapsulates the design of the user interface of filters and dialogs. It includes the markup UI elements and bindings to create the Jabber filter dialog within Policy Studio.

For more information on using declarative XML, see [Define user interfaces using declarative XML](declarative_xml_for_ps.htm). For a complete listing of the available elements and bindings, see [Declarative UI reference](dec_ui_reference.htm).

The following declarative XML shows the elements needed to create the Jabber filter dialog:

``` {space="preserve"}
<ui>
 <panel columns="2">
  <NameAttribute />

  <!-- Connection settings -->     
  <group label="CONNECTION_SETTINGS_LABEL" 
    columns="2" span="2" fill="false">            
    
    <TextAttribute field="fromEmailAddress"
      label="FROM_EMAIL_ADDRESS_LABEL"
      displayName="FROM_EMAIL_ADDRESS_DISP_NAME"/>
    <PasswordAttribute field="password" 
      label="FROM_PASSWORD_LABEL"
      displayName="FROM_PASSWORD_DISP_NAME"/>
    <TextAttribute field="resourceName" 
      label="RESOURCE_NAME_LABEL"
      displayName="RESOURCE_NAME_DISP_NAME"/>
  </group>
  
  <!-- Chat Settings -->    
  <group label="CHAT_SETTINGS_LABEL" 
    columns="2" span="2" fill="false">
    
    <TextAttribute field="toEmailAddress"
      label="TO_EMAIL_ADDRESS_LABEL"
      displayName="TO_EMAIL_ADDRESS_DISP_NAME"/>
    <TextAttribute field="messageStr" 
      label="MESSAGE_LABEL"
      displayName="MESSAGE_DISP_NAME"/>
  </group>             
 </panel>
</ui>
```

All declarative XML files start with `<ui>` elements. The preceding markup contains several `<TextAttribute>` elements and a `<PasswordAttribute>` element. Each element has a field attribute, which directly corresponds to the field definitions in the type definition, and a label attribute that correspond to localization keys in the `resources.properties` file.

The following figure shows the Jabber filter dialog that this XML creates.

![Jabber filter dialog](/Images/APIGatewayDeveloperGuide/jabber_filter.png)
