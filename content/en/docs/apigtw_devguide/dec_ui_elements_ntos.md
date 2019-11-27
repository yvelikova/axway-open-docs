{
"title": "Elements N to S",
"linkTitle": "Elements N to S",
"date": "2019-11-27",
"description": "The <NumberAttribute> tag renders an SWT Label and accompanying Text widget. The Text widget only accepts numbers as input."
}
﻿

NumberAttribute
---------------

### Description

The <NumberAttribute> tag renders an SWT Label and accompanying Text widget. The Text widget only accepts numbers as input.

### Available attributes

| Attribute | Description                                                                    | M/O | Default |
|-----------|--------------------------------------------------------------------------------|-----|---------|
| label     | Specifies the ID of the resource containing the text to display on the Label.  | M   | -       |
| field     | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| span      | Value used in the creation of layout data for the Composite.                   
                                                                                  
  Span represents the horizontal span of the following GridData:                  
                                                                                  
  ``` {space="preserve"}                                                          
      GridData gridData = new GridData();                                         
      gridData.horizontalAlignment = GridData.FILL;                               
      gridData.grabExcessHorizontalSpace = true;                                  
      gridData.horizontalSpan = span;                                             
  ```                                                                             | O   | 1       |
| readOnly  | Specifies whether or not the Text widget is editable.                          | O   | false   |
| min       | Specifies the minimum permitted value for the number field.                    | O   | 0       |
| max       | Specifies the maximum permitted value for the number field.                    | O   | 100     |
| required  | Specifies whether or not the entity field is required.                         | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <NameAttribute />
  <NumberAttribute field="pause" label="PAUSE_FOR_LABEL" required="true" />
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![NumberAttribute example](/Images/APIGatewayDeveloperGuide/02000039.jpg)

panel
-----

### Description

The <panel> tag renders an SWT Composite widget, which is usually used to group other widgets.

### Available attributes

| Attribute           | Description                                                                                                                                                                                                                                                                                    | M/O | Default  |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|----------|
| label               | Used internally for binding purposes to allow the control and its children to be enabled/disabled.                                                                                                                                                                                             | O   | -        |
| columns             | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  Columns represents the number of cell columns of the following GridLayout:                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridLayout gridLayout = new GridLayout();                                                                                                                                                                                                                                                       
  gridLayout.numColumns = columns;                                                                                                                                                                                                                                                                
  ```                                                                                                                                                                                                                                                                                             | O   | 1        |
| span                | Value used in the creation of layout data for the Composite.                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                  
  Span represents the horizontal span of the following GridData:                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.horizontalAlignment = GridData.FILL;                                                                                                                                                                                                                                                   
  gridData.grabExcessHorizontalSpace = true;                                                                                                                                                                                                                                                      
  gridData.horizontalSpan = span;                                                                                                                                                                                                                                                                 
  ```                                                                                                                                                                                                                                                                                             | O   | 1        |
| margin              | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  Margin specifies the number of pixels to be used for the Composite. It can be specified as a single integer value whereby the following layout members will be set:                                                                                                                             
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridLayout gridLayout = new GridLayout();                                                                                                                                                                                                                                                       
  gridLayout.marginHeight = margin;                                                                                                                                                                                                                                                               
  gridLayout.marginWidth = margin;                                                                                                                                                                                                                                                                
  gridLayout.marginTop = margin;                                                                                                                                                                                                                                                                  
  gridLayout.marginBottom = margin;                                                                                                                                                                                                                                                               
  gridLayout.marginLeft = margin;                                                                                                                                                                                                                                                                 
  gridLayout.marginRight = margin;                                                                                                                                                                                                                                                                
  ```                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                  
  Margin can also be specified as a list of four integer values, whereby the following layout members will be set:                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridLayout gridLayout = new GridLayout();                                                                                                                                                                                                                                                       
  StringTokenizer st =                                                                                                                                                                                                                                                                            
   new StringTokenizer(margin, “,”);                                                                                                                                                                                                                                                              
  gridLayout.marginTop = st.nextToken();                                                                                                                                                                                                                                                          
  gridLayout.marginBottom = st.nextToken();                                                                                                                                                                                                                                                       
  gridLayout.marginLeft = st.nextToken();                                                                                                                                                                                                                                                         
  gridLayout.marginRight = st.nextToken();                                                                                                                                                                                                                                                        
  ```                                                                                                                                                                                                                                                                                             | O   | 5        |
| fill                | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  Fill specifies that the layout should resize the Composite to fill both horizontally and vertically, and, depending on its parent, should grow horizontally and vertically if the space is available. Fill is usually used in conjunction with “span”. Fill represents the following GridData:  
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.horizontalAlignment = GridData.FILL;                                                                                                                                                                                                                                                   
  gridData.verticalAlignment = GridData.FILL;                                                                                                                                                                                                                                                     
  gridData.grabExcessHorizontalSpace = true;                                                                                                                                                                                                                                                      
  gridData.grabExcessVerticalSpace = true;                                                                                                                                                                                                                                                        
  gridData.horizontalSpan = span;                                                                                                                                                                                                                                                                 
  ```                                                                                                                                                                                                                                                                                             | O   | true     |
| verticalSpacing     | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  Specifies the number of pixels from the bottom edge of one cell and the top edge of its neighboring cell underneath.                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridLayout gridLayout = new GridLayout();                                                                                                                                                                                                                                                       
  gridLayout.verticalSpacing = verticalSpacing;                                                                                                                                                                                                                                                   
  ```                                                                                                                                                                                                                                                                                             | O   | 5        |
| indent              | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  Specifies the number of pixels of the horizontal margin that will be placed along the left and right edges of the layout. The following layout member will be set:                                                                                                                              
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridLayout gridLayout = new GridLayout();                                                                                                                                                                                                                                                       
  gridLayout.marginWidth = indent;                                                                                                                                                                                                                                                                
  ```                                                                                                                                                                                                                                                                                             | O   | 0        |
| horizontalAlignment | Possible values are:                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                  
  -   “center” - `SWT.CENTER`                                                                                                                                                                                                                                                                     
  -   “right” - `SWT.RIGHT`                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                  
  Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.horizontalAlignment = SWT.CENTER;                                                                                                                                                                                                                                                      
  ```                                                                                                                                                                                                                                                                                             | O   | SWT.LEFT |
| verticalAlignment   | Possible values are:                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                  
  -   “center” - `SWT.CENTER`                                                                                                                                                                                                                                                                     
  -   “bottom” - `SWT.BOTTOM`                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                  
  Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.verticalAlignment = SWT.CENTER;                                                                                                                                                                                                                                                        
  ```                                                                                                                                                                                                                                                                                             | O   | SWT.TOP  |
| widthHint           | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.widthHint = 200;                                                                                                                                                                                                                                                                       
  ```                                                                                                                                                                                                                                                                                             | O   |          |
| heightHint          | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.heightHint = 300;                                                                                                                                                                                                                                                                      
  ```                                                                                                                                                                                                                                                                                             | O   |          |
| minWidth            | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.minimumWidth = 300;                                                                                                                                                                                                                                                                    
  ```                                                                                                                                                                                                                                                                                             | O   |          |
| minHeight           | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.minimumHeight = 300;                                                                                                                                                                                                                                                                   
  ```                                                                                                                                                                                                                                                                                             | O   |          |

### Sample XML

``` {space="preserve"}
<ui>
 <panel span=”2” columns="2" indent=”15” margin=”0” label=”SETTINGS_PANEL”>
  <ReferenceSelector field="connectionFailurePolicy"
   type="FilterCircuit"
   label="CONNECTION_FAILURE_POLICY_SELECTION_DIALOG_TITLE"
   title="CHOOSE_CONNECTION_FAILURE_POLICY" />
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

{{< alert title="Note" color="primary" >}}The red rectangle is for illustration purposes only.{{< /alert >}}

![panel example](/Images/APIGatewayDeveloperGuide/0200003A.jpg)

PasswordAttribute
-----------------

### Description

The <PasswordAttribute> tag renders an SWT Label and accompanying Text widget. The Text widget has its user-entered text masked with the ‘\*’ character.

### Available attributes

| Attribute  | Description                                                                                              | M/O | Default     |
|------------|----------------------------------------------------------------------------------------------------------|-----|-------------|
| label      | Specifies the ID of the resource containing the text to display on the Label.                            | O   | -           |
| field      | Specifies the name of the field of the entity backed by the rendered controls.                           | M   | -           |
| span       | Value used in the creation of layout data for the Composite.                                             
                                                                                                            
  Span represents the horizontal span of the following GridData:                                            
                                                                                                            
  ``` {space="preserve"}                                                                                    
  GridData gridData = new GridData();                                                                       
  gridData.horizontalAlignment = GridData.FILL;                                                             
  gridData.grabExcessHorizontalSpace = true;                                                                
  gridData.horizontalSpan = span;                                                                           
  ```                                                                                                       | O   | 1           |
| required   | Specifies whether or not the entity field is required.                                                   | O   | false       |
| widthHint  | Specifies the preferred width of the control.                                                            | O   | SWT.DEFAULT |
| heightHint | Specifies the preferred height of the control.                                                           | O   | false       |
| multiline  | Specifies whether the control is a multiline Text widget.                                                
                                                                                                            
  If this attribute is not present the control defaults to a single-line widget.                            
                                                                                                            
  No masking occurs if this attribute is set to “true”. This restriction is coded in `Text.setEchoChar();`  | O   | false       |
| wrap       | Specifies whether the text should wrapped within the control.                                            
                                                                                                            
  This attribute is conditional on the multiline attribute being present and set to true.                   | O   | false       |
| vscroll    | Specifies whether a vertical scrollbar should be rendered.                                               
                                                                                                            
  This attribute is conditional on the multiline attribute being present and set to true.                   | C   | false       |
| hscroll    | Specifies whether a horizontal scrollbar should be rendered.                                             
                                                                                                            
  This attribute is conditional on the multiline attribute being present and set to true.                   | C   | false       |

### Sample XML

``` {space="preserve"}
<ui>
 <group label="PROXY_SETTINGS_LABEL" columns="2" span="2">
  <TextAttribute field="username" label="PROXY_USERNAME_LABEL"/>
  <PasswordAttribute field="password" label="PROXY_PASSWORD_LABEL"/>
 </group>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![PasswordAttribute example](/Images/APIGatewayDeveloperGuide/0200003B.jpg)

RadioGroupAttribute
-------------------

### Description

The <RadioGroupAttribute> tag renders an SWT Composite with 0 or more Buttons (style = `SWT.RADIO`) defined using <choice> tags as children.

### RadioGroupAttribute – Available attributes

| Attribute | Description                                                                    | M/O | Default |
|-----------|--------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| columns   | Value used in the creation of layout data for the Composite.                   
                                                                                  
  Columns represents the number of cell columns in the layout:                    
                                                                                  
  ``` {space="preserve"}                                                          
      GridLayout layout = new GridLayout();                                       
      layout.numColumns = columns;                                                
  ```                                                                             | O   | 1       |
| required  | Specifies whether or not the entity field is required.                         | O   | false   |

### choice – Available attributes

| Attribute | Description                                                                                                                                                                                    | M/O | Default |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| label     | Specifies the ID of the resource containing the text to display on the Label.                                                                                                                  | M   | -       |
| value     | Specifies one of the possible entity values for the ‘field’ defined in the RadioGroupAttribute tag. This value will be tied to the button, and saved to the Entity if this button is selected. | M   | -       |
| span      | Value used in the creation of layout data for the Button.                                                                                                                                      
                                                                                                                                                                                                  
  Span represents the horizontal span of the following GridData:                                                                                                                                  
                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                          
      GridData gridData = new GridData();                                                                                                                                                         
      gridData.horizontalAlignment = GridData.FILL;                                                                                                                                               
      gridData.grabExcessHorizontalSpace = true;                                                                                                                                                  
      gridData.horizontalSpan = span;                                                                                                                                                             
  ```                                                                                                                                                                                             | O   | 1       |

### Sample XML

The following example represents the “logMaskType” entity field, of which there are two possible values: “SERVICE” and “FILTER”. If the first radio button is selected (represented by the first <choice> tag) the logMaskField will acquire the value “SERVICE”. If the second radio button is selected the logMaskField will acquire the value “FILTER”.

The <RadioGroupAttribute> tag is not restricted to just having <choice> tags as children. A good candidate is the <panel> container tag, as outlined in the example below. When the ‘USE\_FILTER’ choice is selected the children of the subsequent panel are enabled automatically. When the ‘USE\_SERVICE’ choice is selected, these children are disabled automatically.

``` {space="preserve"}
<ui>
  <panel>
    <RadioGroupAttribute field="logMaskType" columns="1">
     <choice value="SERVICE" label="USE_SERVICE" />
     <choice value="FILTER" label="USE_FILTER" />
     <panel indent="15" margin="0">
         <BitMaskAttribute field="logMask" columns="3">
        <choice value="1" label="LEVEL_FATAL"/>
        <choice value="2" label="LEVEL_FAILURE"/>
        <choice value="4" label="LEVEL_SUCCESS"/>
         </BitMaskAttribute>
      </panel>
     </RadioGroupAttribute>
  </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![RadioGroupAttribute example](/Images/APIGatewayDeveloperGuide/0200003C.jpg)

![RadioGroupAttribute example](/Images/APIGatewayDeveloperGuide/0200003D.jpg)

ReferenceSelector
-----------------

### Description

The <ReferenceSelector> tag renders an SWT Label, Text and Button control. When clicked, the button displays a reference browser to allow you to easily select the required entity reference.

### Available attributes

| Attribute       | Description                                                                                                                                          | M/O | Default     |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-----|-------------|
| label           | Specifies the ID of the resource containing the text to display on the Label.                                                                        | O   | -           |
| field           | Specifies the name of the field of the entity backed by the rendered controls.                                                                       | M   | -           |
| required        | Specifies whether or not the entity field is required.                                                                                               | O   | false       |
| title           | Specifies the ID of the resource containing the text to display on the title bar of the reference browser dialog.                                    | M   | -           |
| widthHint       | Specifies a width hint of reference browser.                                                                                                         | O   | SWT.DEFAULT |
| displayName     | Specifies the ID of the resource containing the attribute or control name to be displayed in the event of an error.                                  | O   | -           |
| selectableTypes | Specifies the entity types (as a comma separated list) that are selectable in the TreeViewer displayed in the Reference Selector dialog.             | M   | -           |
| searches        | Specifies the entity types (as a comma separated list) that are searchable for entities of those types specified by the “selectableTypes” attribute. | M   | -           |
| trackChanges    | Specifies whether or not to track selection changes.                                                                                                 | O   | false       |

### Sample XML

``` {space="preserve"}
<ui>
 <panel span="2" columns="2" indent="15" margin="0" label="SETTINGS_PANEL">
  <ReferenceSelector field="connectionFailurePolicy"
   selectableTypes="FilterCircuit"
   searches="ROOT_CIRCUIT_CONTAINER,CircuitContainer"
   label="POLICY_SELECTION_DIALOG_TITLE"
   title="CHOOSE_CONNECTION_FAILURE_POLICY" />
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![ReferenceSelector example](/Images/APIGatewayDeveloperGuide/0200003E.jpg)

The following dialog is displayed when the browse button is clicked:

![Dialog displayed on browse](/Images/APIGatewayDeveloperGuide/0200003F.jpg)

SamlAttribute
-------------

### Description

The <SamlAttribute> tag renders a SWT Combo with a list of SAML versions.

### Available attributes

| Attribute | Description                                                                                                  | M/O | Default |
|-----------|--------------------------------------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls.                               | O   | -       |
| label     | Specifies the ID of the resource containing the text to display on the Label (to the left of the combo box). | O   | -       |
| required  | Specifies whether or not the entity field is required.                                                       | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <SamlAttribute label="SAML_VERSION_REQUIRED_LABEL" 
  field="samlVersion" required="true" />
</ui>
```

### Rendered UI

The above XML renders the following UI:

![SamlAttribute example](/Images/APIGatewayDeveloperGuide/03000040.png)

SamlSubjectConfirmationAttribute
--------------------------------

### Description

The <SamlSubjectConfirmationAttribute> tag renders a SWT Combo with a list of available SAML subject confirmation methods. The Attribute is very specific to using the SAML filter. You can only have one <SamlSubjectConfirmationAttribute> per window.

When a SAML assertion is consumed by a downstream web service, the information contained in the <SubjectConfirmation> block can be used to authenticate the end-user that authenticated to the API Gateway, or the issuer of the assertion, depending on what is configured.

The following table shows the available methods and their meanings :

| Method         | Meaning                                                                                                                                                                                                                                                                                    |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Holder Of Key  | The API Gateway includes the key used to prove that the API Gateway is the holder of the key, or it includes a reference to the key.                                                                                                                                                       |
| Bearer         | The subject of the assertion is the bearer of the assertion.                                                                                                                                                                                                                               |
| SAML Artifact  | The subject of the assertion is the user that presented a SAML Artifact to the API Gateway.                                                                                                                                                                                                |
| Sender Vouches | Use this confirmation method to assert that the API Gateway is acting on behalf of the authenticated end user. No other information relating to the context of the assertion is sent. It is recommended that both the assertion *and* the SOAP Body are signed if this option is selected. |
|                | If the Method field is blank then no <ConfirmationMethod> block is inserted into the assertion.                                                                                                                                                                                      |

{{< alert title="Note" color="primary" >}}The entity field defaults to “subjectConfirmationMethod”. {{< /alert >}}

### Available attributes

| Attribute | Description                                                                  | M/O | Default |
|-----------|------------------------------------------------------------------------------|-----|---------|
| label     | Specifies the ID of the resource containing the text to display on the Label | O   | -       |
| required  | Specifies whether or not the entity field is required.                       | M   | -       |
| span      | Value used in the creation of layout data for the Combo.                     
                                                                                
  Span represents the horizontal span of the following GridData:                
                                                                                
  ``` {space="preserve"}                                                        
      GridData gridData = new GridData();                                       
      gridData.horizontalAlignment = GridData.FILL;                             
      gridData.grabExcessHorizontalSpace = true;                                
      gridData.horizontalSpan = span;                                           
  ```                                                                           | O   | 1       |
| columns   | Value used in the creation of the layout data for the Composite.             
                                                                                
  Columns represents the number of cell columns of the following GridLayout:    
                                                                                
  ``` {space="preserve"}                                                        
      GridLayout gridLayout = new GridLayout();                                 
      gridLayout.numColumns = columns;                                          
  ```                                                                           | O   | 2       |

### Sample XML

``` {space="preserve"}
<ui>
  <SamlSubjectConfirmationAttribute label="SAML_SUBJECT_CONF_METHOD_LABEL" 
   required="true" />
</ui>
```

### Rendered UI

The above XML renders the following UI:

![SamlSubjectConfirmationAttribute example](/Images/APIGatewayDeveloperGuide/03000041.png)

scrollpanel
-----------

### Description

The <scrollpanel> tag renders an SWT ScrolledComposite widget. When rendered the control automatically calculates the extent of its children so that the scroll bars are rendered correctly.

To facilitate ease-of-use, one of the following tags must be a direct child of scrollpanel:

-   panel
-   group
-   tabFolder

### Available attributes

| Attribute  | Description                                                                                        | M/O | Default |
|------------|----------------------------------------------------------------------------------------------------|-----|---------|
| label      | Used internally for callback purposes to allow the extents of the scrollpanel to be set correctly. | M   | -       |
| widthHint  | Value used in the creation of the layout data for the Composite:                                   
                                                                                                      
  ``` {space="preserve"}                                                                              
  GridData gridData = new GridData();                                                                 
  gridData.widthHint = 200;                                                                           
  ```                                                                                                 | O   |         |
| heightHint | Value used in the creation of the layout data for the Composite:                                   
                                                                                                      
  ``` {space="preserve"}                                                                              
  GridData gridData = new GridData();                                                                 
  gridData.heightHint = 300;                                                                          
  ```                                                                                                 | O   |         |
| minWidth   | Value used in the creation of the layout data for the Composite:                                   
                                                                                                      
  ``` {space="preserve"}                                                                              
  GridData gridData = new GridData();                                                                 
  gridData.minimumWidth = 300;                                                                        
  ```                                                                                                 | O   |         |
| minHeight  | Value used in the creation of the layout data for the Composite:                                   
                                                                                                      
  ``` {space="preserve"}                                                                              
  GridData gridData = new GridData();                                                                 
  gridData.minimumHeight = 300;                                                                       
  ```                                                                                                 | O   |         |

### Sample XML

``` {space="preserve"}
<ui>
 <scrollpanel>
  <panel columns="2">
    <TextAttribute field="name" label="EXCEPTION_NAME" required="true" />
    <TextAttribute field="name" label="EXCEPTION_NAME" required="true" />
    <TextAttribute field="name" label="EXCEPTION_NAME" required="true" />
    <TextAttribute field="name" label="EXCEPTION_NAME" required="true" />
    <TextAttribute field="name" label="EXCEPTION_NAME" required="true" />
    <TextAttribute field="name" label="EXCEPTION_NAME" required="true" />
  </panel>
 </scrollpanel>    
</ui>
```

### Rendered UI

The above XML renders the following UI:

![scrollpanel example](/Images/APIGatewayDeveloperGuide/02000042.jpg)

section
-------

### Description

The <section> tag renders an SWT ExpandableComposite widget, which allows for groups of controls to be expanded or hidden from view.

To facilitate ease-of-use, one of the following tags must be a direct child of section:

-   panel
-   group
-   tabFolder

### Available attributes

| Attribute | Description                                       | M/O | Default |
|-----------|---------------------------------------------------|-----|---------|
| label     | Specifies the text heading of the section.        | M   | -       |
| expanded  | Specifies whether or not the section is expanded. | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <section label="RS_STATUS_LABEL" expanded="true">
  <panel columns="2">
   <TextAttribute field="name" label="RS_STATUS_LABEL" required="true" />
  </panel>
 </section>    
</ui>
```

### Rendered UI

The above XML renders the following UI:

![section example](/Images/APIGatewayDeveloperGuide/02000043.jpg)

The section can also be collapsed as follows:

![section example (collapsed)](/Images/APIGatewayDeveloperGuide/02000044.jpg)

SigningKeyAttribute
-------------------

### Description

The <SigningKeyAttribute> tag renders a SWT Radio Button and a Tab Folder which has three tabs whose content includes SWT Buttons, Radio Buttons, Combo boxes, and so on.

### Available attributes

| Attribute               | Description                                                                                                                                              | M/O | Default |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| subjectConfirmationNote | Specifies whether a generic signing panel is displayed or a specific SAML signing panel is displayed. By default the generic signing panel is displayed. | O   | false   |
| label                   | Specifies the ID of the resource containing the text to display on the Label.                                                                            | O   | -       |
| required                | Specifies whether or not the entity field is required.                                                                                                   | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
  <SigningKeyAttribute 
   subjectConfirmationNote="SUBJECT_CONFIRMATION_ASYMMETRIC_NOTE_LABEL" 
   required="false"/> 
</ui>
```

### Rendered UI

The above XML renders the following UI:

![SigningKeyAttribute example](/Images/APIGatewayDeveloperGuide/03000045.png)

SizeAttribute
-------------

### Description

The <SizeAttribute> tag renders an SWT Label (optional), Text, and Combo widgets, allowing you to specify a numeric size value, and select one of the following age types:

-   Kb
-   Mb
-   Gb

{{< alert title="Note" color="primary" >}}The value that is persisted to the underlying entity is stored as bytes.{{< /alert >}}

### Available attributes

| Attribute | Description                                                                    | M/O | Default |
|-----------|--------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| label     | Specifies the ID of the resource containing the text to display on the Label.  | O   | -       |
| span      | Value used in the creation of layout data for the Button.                      
                                                                                  
  Span represents the horizontal span of the following GridData:                  
                                                                                  
  ``` {space="preserve"}                                                          
     GridData gridData = new GridData();                                          
     gridData.horizontalAlignment = GridData.FILL;                                
     gridData.grabExcessHorizontalSpace = true;                                   
     gridData.horizontalSpan = span;                                              
  ```                                                                             | O   | 1       |
| required  | Specifies whether or not the entity field is required.                         | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="3" margin="0">
   <SizeAttribute field="maxDbSize" label="OPDB_MAX_DB_SIZE_LABEL" required="true"/>
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![SizeAttribute example](/Images/APIGatewayDeveloperGuide/03000046.png)

SoftRefListAttribute
--------------------

### Description

The <SoftRefListAttribute> renders a SWT Combo  that shows a list of entities of a certain type.

### Available attributes

| Attribute   | Description                                                                              | M/O | Default |
|-------------|------------------------------------------------------------------------------------------|-----|---------|
| field       | Specifies the name of the field of the entity backed by the rendered controls.           | M   | -       |
| label       | Specifies the ID of the resource containing the text to display on the Label.            | O   | -       |
| refName     | Specifies Field value of the referenced entity that is displayed in the Combo box.       | M   | -       |
| displayName | Specifies the name of the SoftRefListAttribute to be displayed in the event of an error. | O   | -       |
| src         | Specifies the Shorthand Key to get the list of referenced entities of a particular type. | M   | -       |
| required    | Specifies whether or not the entity field is required.                                   | M   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <SoftRefListAttribute label="WS_USERNAME_TOKEN_REPOSITORY_NAME_LABEL" 
  field="repository" refName="name" 
  src="/[AuthnRepositoryGroup]name=Authentication Repositories/[AuthnRepositoryBaseGroup]allowedFilter=WsUsernameFilter/[AuthnRepositoryBase]" />
</ui>
```

### Rendered UI

The above XML renders the following UI:

![SoftRefListAttribute example](/Images/APIGatewayDeveloperGuide/03000047.png)

SoftRefTreeAttribute
--------------------

### Description

The <SoftRefTreeAttribute> renders a jFace TreeViewer that shows the policies of a certain type.

### Available attributes

| Attribute       | Description                                                                                                      | M/O | Default |
|-----------------|------------------------------------------------------------------------------------------------------------------|-----|---------|
| field           | Specifies the name of the field of the entity backed by the rendered controls.                                   | M   | -       |
| searches        | Comma separated list of Portable ESPKs. It will then display all the entities represented by each Portable ESPK. | M   | -       |
| selectableTypes | Specifies the type of entities that are selectable.                                                              | M   | -       |
| displayName     | Specifies the name of the SoftRefTreeAttribute to be displayed in the event of an error.                         | O   | -       |
| span            | Value used in the creation of layout data for the controls that are rendered.                                    
                                                                                                                    
  ``` {space="preserve"}                                                                                            
  GridData gridData =                                                                                               
   new GridData(GridData.FILL_BOTH);                                                                                
  gridData.horizontalSpan = 1;                                                                                      
  ```                                                                                                               | O   | 1       |
| width           | Specifies the preferred width of the control.                                                                    | O   | 300     |
| height          | Specifies the preferred height of the control.                                                                   | O   | 300     |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <group label="POP_POLICY_LABEL" span="1" columns="1">
   <SoftRefTreeAttribute field="filterCircuit"
    searches="/[CircuitContainer]**/[FilterCircuit],/[FilterCircuit]"
    selectableType="FilterCircuit"                   
    displayName="POP_CIRCUIT_DISP_NAME"
    height="80"
    width="100"
   />
  </group>
 </panel>    
</ui>
```

### Rendered UI

The above XML renders the following UI:

![SoftRefTreeAttribute example](/Images/APIGatewayDeveloperGuide/03000048.png)

In this case, POP\_POLICY\_LABEL is resolved to the localized string “Policy to use”.

SpinAttribute
-------------

### Description

The <SpinAttribute> tag renders an SWT Text widget (and optionally, a Label widget), along with two buttons, one for incrementing the current entity value, and one for decrementing the value.

### Available attributes

| Attribute | Description                                                                                                                                                                      | M/O | Default |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls.                                                                                                   
                                                                                                                                                                                    
  The default value of the field will automatically appear in the Text widget.                                                                                                      | M   | -       |
| label     | Specifies the ID of the resource containing the text to display on the Label (to the left of the spin control).                                                                  | O   | -       |
| required  | Specifies whether or not the field is required. If required and the user doesn’t enter a value, a warning dialog will appear, prompting the user to enter a value for the field. | O   | -       |
| rangeMin  | Specifies the minimum value for the permitted range for the entity value. rangeMax must also be present for the range to be set correctly.                                       | C   | -       |
| rangeMax  | Specifies the maximum value for the permitted range for the entity value. rangeMin must also be present for the range to be set correctly.                                       | C   |         |
| unitLabel | Additional label to appear to the right of the spin control. Specifies the ID of the resource containing the text to display on the Label.                                       | O   | -       |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="7">
  <SpinAttribute field="hrs" label="HOUR" required="true" 
   rangeMin="0" rangeMax="23" />
  <SpinAttribute field="mins" label="MIN" required="true" 
   rangeMin="0" rangeMax="59" />
  <SpinAttribute field="secs" label="SEC" required="true" 
   rangeMin="0" rangeMax="59" />
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![SpinAttribute example](/Images/APIGatewayDeveloperGuide/02000049.jpg)
