{
"title": "Elements D to M",
"linkTitle": "Elements D to M",
"date": "2019-11-27",
"description": "The <DirectoryChooser> tag renders an SWT Label, Text and Button widget. When clicked, the button displays a directory browser to allow you to easily select a directory."
}
﻿

DirectoryChooser
----------------

### Description

The <DirectoryChooser> tag renders an SWT Label, Text and Button widget. When clicked, the button displays a directory browser to allow you to easily select a directory.

### Available attributes

| Attribute | Description                                                                    | M/O | Default |
|-----------|--------------------------------------------------------------------------------|-----|---------|
| label     | Text for the label to be displayed                                             | M   | -       |
| field     | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| span      | Value used in the creation of layout data for the Composite.                   
                                                                                  
  Span represents the horizontal span of the following GridData:                  
                                                                                  
  ``` {space="preserve"}                                                          
      GridData gridData = new GridData();                                         
      gridData.horizontalAlignment = GridData.FILL;                               
      gridData.grabExcessHorizontalSpace = true;                                  
      gridData.horizontalSpan = span;                                             
  ```                                                                             | O   | 1       |
| required  | Specifies whether or not the entity field is required                          | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <group label="LOCATION_LABEL" span="2">
  <panel columns="2">
   <TextAttribute field="fileName" label="FILENAME_LABEL" required="true" />
   <DirectoryChooser field="directory" label="DIRECTORY_LABEL" required="true"
    span="2" />
  </panel>
 </group>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![DirectoryChooser example](/Images/APIGatewayDeveloperGuide/0200002F.jpg)

ESPKReferenceSummaryAttribute
-----------------------------

### Description

The <ESPKReferenceSummaryAttribute> tag renders an SWT Text and Button control. When clicked, the button displays a reference browser to allow you to easily select the required entity reference.

### Available attributes

| Attribute       | Description                                                                                                                                          | M/O | Default |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| label           | Specifies the ID of the resource containing the text to display on the Label.                                                                        | O   | -       |
| field           | Specifies the name of the field of the entity backed by the rendered controls.                                                                       | M   | -       |
| required        | Specifies whether or not the entity field is required.                                                                                               | O   | false   |
| dialogTitle     | Specifies the ID of the resource containing the text to display on the title bar of the reference browser dialog.                                    | O   | -       |
| displayName     | Specifies the ID of the resource containing the attribute/control name to be displayed in the event of an error.                                     | O   | -       |
| selectableTypes | Specifies the entity types (as a comma separated list) that are selectable in the TreeViewer displayed in the Reference Selector dialog.             | M   | -       |
| searches        | Specifies the entity types (as a comma separated list) that are searchable for entities of those types specified by the “selectableTypes” attribute. | M   | -       |

### Sample XML

``` {space="preserve"}
<ui>
 <ESPKReferenceSummaryAttribute 
  displayName="EMS_CONSUMER_SELECT_CONNECTION_DISP_NAME"
  field="emsClient"
  searches="EMSClientGroup" selectableType="EMSClient"
  dialogTitle="EMS_CLIENT_DIALOG_TITLE" required="true" span="2" />
</ui>
```

### Rendered UI

The above XML renders the following UI:

![ESPKReferenceSummaryAttribute example](/Images/APIGatewayDeveloperGuide/03000030.png)

The following dialog is displayed when you click the browse button:

![Dialog displayed on browse](/Images/APIGatewayDeveloperGuide/03000031.png)

FieldTable
----------

### Description

The <FieldTable> tag renders an SWT TableViewer, along with a bank of buttons to allow you to enter a list of values, the type of which is based on the specified entity field.

### Available attributes

| Attribute       | Description                                                                       | M/O | Default |
|-----------------|-----------------------------------------------------------------------------------|-----|---------|
| label           | Text for the label to be displayed.                                               | M   | -       |
| field           | Specifies the name of the field of the entity backed by the rendered controls.    | M   | -       |
| helpID          | Help identifier used for the Add/Edit dialogs associated with the table.          | M   | -       |
| span            | Value used in the creation of layout data for the controls.                       
                                                                                     
  Span represents the horizontal span of the following GridData:                     
                                                                                     
  ``` {space="preserve"}                                                             
      GridData gridData = new GridData();                                            
      gridData.horizontalAlignment = GridData.FILL;                                  
      gridData.grabExcessHorizontalSpace = true;                                     
      gridData.horizontalSpan = span;                                                
  ```                                                                                | O   | 2       |
| required        | Specifies whether or not the entity field is required.                            | O   | false   |
| columnWidth     | Specifies the width of the column in the table.                                   | O   | 200     |
| addDialogTitle  | Specifies the title of the dialog that appears when the ‘Add’ button is clicked.  | O   | ‘Add’   |
| editDialogTitle | Specifies the title of the dialog that appears when the ‘Edit’ button is clicked. | O   | ‘Edit’  |
| labelText       | Specifies the text that appears on the label on the Add and Edit dialogs.         | O   | ‘Value’ |

### Sample XML

``` {space="preserve"}
<ui>
   <panel columns="2">
     <TextAttribute field="cmdLine" label="CMD_LINE_LABEL" required="true" />
     <FieldTable field="arguments" label="ARGUMENTS_LABEL" />
  </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![FieldTable example](/Images/APIGatewayDeveloperGuide/02000032.jpg)

FileChooserText
---------------

### Description

The <FileChooserText> tag renders an SWT Label, Text and Button widget. When clicked, the button displays a file browser to allow a user to easily select a file.

### Available attributes

| Attribute | Description                                                                    | M/O | Default |
|-----------|--------------------------------------------------------------------------------|-----|---------|
| label     | Text for the label to be displayed                                             | M   | -       |
| field     | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| span      | Value used in the creation of layout data for the Composite.                   
                                                                                  
  Span represents the horizontal span of the following GridData:                  
                                                                                  
  ``` {space="preserve"}                                                          
      GridData gridData = new GridData();                                         
      gridData.horizontalAlignment = GridData.FILL;                               
      gridData.grabExcessHorizontalSpace = true;                                  
      gridData.horizontalSpan = span;                                             
  ```                                                                             | O   | 1       |
| required  | Specifies whether or not the entity field is required                          | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
  <panel columns="2">
    <FileChooserText field="fileIn" label="FILE_LABEL" required="true" span="2" />
  </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![FileChooserText example](/Images/APIGatewayDeveloperGuide/0200000A.jpg)

group
-----

### Description

The <group> tag renders an SWT Group widget, which is usually used to group other widgets.

### Available attributes

| Attribute       | Description                                                                                                                                                                                                                                                                                    | M/O | Default |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| label           | Used to give the group a visual name and also employed internally for binding purposes to allow the control and its children to be enabled/disabled.                                                                                                                                           | O   | -       |
| columns         | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  Columns represent the number of cell columns of the following GridLayout:                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridLayout gridLayout = new GridLayout();                                                                                                                                                                                                                                                       
  gridLayout.numColumns = columns;                                                                                                                                                                                                                                                                
  ```                                                                                                                                                                                                                                                                                             | O   | 1       |
| span            | Value used in the creation of layout data for the Composite.                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                  
  Span represents the horizontal span of the following GridData:                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.horizontalAlignment = GridData.FILL;                                                                                                                                                                                                                                                   
  gridData.grabExcessHorizontalSpace = true;                                                                                                                                                                                                                                                      
  gridData.horizontalSpan = span;                                                                                                                                                                                                                                                                 
  ```                                                                                                                                                                                                                                                                                             | O   | 1       |
| margin          | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
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
                                                                                                                                                                                                                                                                                                  
  Margin can also be specified as a list of 4 integer values, whereby the following layout members will be set:                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridLayout gridLayout = new GridLayout();                                                                                                                                                                                                                                                       
  StringTokenizer st =                                                                                                                                                                                                                                                                            
   new StringTokenizer(margin, “,”);                                                                                                                                                                                                                                                              
  gridLayout.marginTop = st.nextToken();                                                                                                                                                                                                                                                          
  gridLayout.marginBottom = st.nextToken();                                                                                                                                                                                                                                                       
  gridLayout.marginLeft = st.nextToken();                                                                                                                                                                                                                                                         
  gridLayout.marginRight = st.nextToken();                                                                                                                                                                                                                                                        
  ```                                                                                                                                                                                                                                                                                             | O   | 5       |
| fill            | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  Fill specifies that the layout should resize the Composite to fill both horizontally and vertically, and, depending on its parent, should grow horizontally and vertically if the space is available. Fill is usually used in conjunction with “span”. Fill represents the following GridData:  
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridData gridData = new GridData();                                                                                                                                                                                                                                                             
  gridData.horizontalAlignment = GridData.FILL;                                                                                                                                                                                                                                                   
  gridData.verticalAlignment = GridData.FILL;                                                                                                                                                                                                                                                     
  gridData.grabExcessHorizontalSpace = true;                                                                                                                                                                                                                                                      
  gridData.grabExcessVerticalSpace = true;                                                                                                                                                                                                                                                        
  gridData.horizontalSpan = span;                                                                                                                                                                                                                                                                 
  ```                                                                                                                                                                                                                                                                                             | O   | true    |
| verticalSpacing | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  Specifies the number of pixels from the bottom edge of one cell and the top edge of its neighboring cell underneath:                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridLayout gridLayout = new GridLayout();                                                                                                                                                                                                                                                       
  gridLayout.verticalSpacing = verticalSpacing;                                                                                                                                                                                                                                                   
  ```                                                                                                                                                                                                                                                                                             | O   | 5       |
| indent          | Value used in the creation of the layout data for the Composite.                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                  
  Specifies the number of pixels of horizontal margin that will be placed along the left and right edges of the layout. The following layout member will be set:                                                                                                                                  
                                                                                                                                                                                                                                                                                                  
  ``` {space="preserve"}                                                                                                                                                                                                                                                                          
  GridLayout gridLayout = new GridLayout();                                                                                                                                                                                                                                                       
  gridLayout.marginWidth = indent;                                                                                                                                                                                                                                                                
  ```                                                                                                                                                                                                                                                                                             | O   | 0       |

### Sample XML

``` {space="preserve"}
<ui>
 <group label="LOG_PAGE_CATEGORY_LABEL" columns="2">
  <CategoryAttribute label="LOG_CATEGORY_LABEL" required="true" />
 </group>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![group example](/Images/APIGatewayDeveloperGuide/02000033.jpg)

HTTPStatusTableAttribute
------------------------

### Description

The <HTTPStatusTableAttribute> tag renders a Table and a group SWT Buttons that appear as a Button bar. When clicked, the buttons display a dialog to add, edit, or delete a HTTP status code.

### Available attributes

| Attribute   | Description                                                                    | M/O | Default |
|-------------|--------------------------------------------------------------------------------|-----|---------|
| field       | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| tableHeight | Specifies the preferred height of the control                                  | O   | -       |
| required    | Specifies whether or not the entity field is required                          | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
  <HTTPStatusTableAttribute field="retryHTTPRanges" tableHeight="100" /> 
</ui>
```

### Rendered UI

The above XML renders the following UI:

![HTTPStatusTableAttribute](/Images/APIGatewayDeveloperGuide/03000034.png)

include
-------

### Description

The <include> tag allows another declarative XML file to be included inline in the parent including XML file.

### Available attributes

| Attribute | Description                                                                                                                                                          | M/O | Default |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| resource  | The name of the declarative XML file to be included inline in the declarative parent XML file.                                                                       | M   |         |
| class     | The class, including package, used to render the included resource. Any required string resources will need to be redefined in the local `resource.properties` file. | O   |         |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <include resource="AuditSettings-page.xml"
   class="com.vordel.client.manager.AuditSettingsPage"/>
 </panel>
</ui>
```

label
-----

### Description

The <label> tag renders an SWT Label widget.

### Available attributes

| Attribute | Description                                                                   | M/O | Default |
|-----------|-------------------------------------------------------------------------------|-----|---------|
| label     | Specifies the ID of the resource containing the text to display on the Label. | M   | -       |
| span      | Value used in the creation of layout data for the Label..                     
                                                                                 
  Span represents the horizontal span of the following GridData:                 
                                                                                 
  ``` {space="preserve"}                                                         
      GridData gridData = new GridData();                                        
      gridData.horizontalAlignment = GridData.FILL;                              
      gridData.grabExcessHorizontalSpace = true;                                 
      gridData.horizontalSpan = span;                                            
  ```                                                                            | O   | 1       |
| bold      | Value used to specify whether or not the font is rendered bold.               | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <NameAttribute />
  <label label="FILE_TO_LOAD_SUMMARY" span="2" />
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![label example](/Images/APIGatewayDeveloperGuide/02000035.jpg)

LifeTimeAttribute
-----------------

### Description

The <LifeTimeAttribute> tag renders a Label, Text, and a group of Spin controls, representing a time span. This allows you to enter values for Days, Hours, Minutes and Seconds.

### Available attributes

| Attribute | Description                                                                                              | M/O | Default |
|-----------|----------------------------------------------------------------------------------------------------------|-----|---------|
| label     | Specifies the ID of the resource containing the text to display on the Label to the left of all controls | O   | -       |
| field     | Specifies the name of the field of the entity backed by the rendered controls.                           | M   | -       |
| required  | Specifies whether or not the entity field is required                                                    | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <panel span="2" columns="3" margin="0">
   <LifeTimeAttribute label="VALIDITY_LABEL" field="validity" required="true" />
  </panel>
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![LifeTimeAttribute example](/Images/APIGatewayDeveloperGuide/0200000D.jpg)

NameAttribute
-------------

### Description

The <NameAttribute> tag renders an SWT Label and accompanying Text widget. It is used to wrap the following TextAttribute:

``` {space="preserve"}
<TextAttribute field="name" label="NAME_LABEL" required="true" />
```

The label `NAME_LABEL` must exist in the appropriate `resource.properties` file.

### Sample XML

``` {space="preserve"}
<ui>
  <panel columns="2">
    <NameAttribute />
  </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![NameAttribute example](/Images/APIGatewayDeveloperGuide/02000036.jpg)

MsgAttrAttribute
----------------

### Description

The <MsgAttrAttribute> tag renders an SWT Label and accompanying Combo widget populated with a list of Axway message attributes.

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
| required  | Specifies whether or not the entity field is required.                         | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <MsgAttrAttribute field="sourceAttribute" 
   label="STRING_REPLACE_SRC_ATTRIBUTE_LABEL" required="true"/>
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![MsgAttrAttribute example](/Images/APIGatewayDeveloperGuide/02000037.jpg)

MultiValueTextAttrAttribute
---------------------------

### Description

The <MultiValueTextAttribute> tag is similar to the TextAttribute tag in that it renders an SWT Text widget (and optionally, a Label widget), backed by the specified field for the entity being configured. The difference is that it caters for multiple values interspersed with the specified separator.

### Available attributes

| Attribute | Description                                                                                                                                                                   | M/O | Default |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls.                                                                                                
                                                                                                                                                                                 
  The default value of the field will automatically appear in the Text widget.                                                                                                   | M   | -       |
| label     | Indicates that a Label should be rendered to the left of the Text widget.                                                                                                     
                                                                                                                                                                                 
  The value of this field is set to a resource identifier, specified in a `resource.properties` file.                                                                            | O   | -       |
| required  | Specifies whether or not the field is required. If required and the user does not enter a value, a warning dialog appears, prompting the user to enter a value for the field. | O   | -       |
| span      | Value used in the creation of layout data for the controls that are rendered.                                                                                                 
                                                                                                                                                                                 
  If a single-line control is being rendered, the span represents the horizontal span of the following GridData:                                                                 
                                                                                                                                                                                 
  ``` {space="preserve"}                                                                                                                                                         
      GridData gridData = new GridData();                                                                                                                                        
      gridData.horizontalAlignment = GridData.FILL;                                                                                                                              
      gridData.grabExcessHorizontalSpace = true;                                                                                                                                 
      gridData.horizontalSpan = colSpan;                                                                                                                                         
  ```                                                                                                                                                                            
                                                                                                                                                                                 
  If multiline control is being rendered, the span represents the horizontal span of the following GridData:                                                                     
                                                                                                                                                                                 
  ``` {space="preserve"}                                                                                                                                                         
      GridData gridData = new GridData();                                                                                                                                        
      gridData.horizontalAlignment = GridData.FILL;                                                                                                                              
      gridData.verticalAlignment = GridData.FILL;                                                                                                                                
      gridData.grabExcessHorizontalSpace = true;                                                                                                                                 
      gridData.grabExcessVerticalSpace = true;                                                                                                                                   
      gridData.horizontalSpan = colSpan;                                                                                                                                         
  ```                                                                                                                                                                            | O   | 1       |
| split     | Specifies the string used as a separator to the list of multiple values.                                                                                                      | O   | ,       |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <MultiValueTextAttribute field="extension" label="EXTENSION_LABEL" 
   required="false" split=";"/>
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![MultiValueTextAttribute example](/Images/APIGatewayDeveloperGuide/02000038.jpg)

In this case, `EXTENSION_LABEL` is resolved to the localized string “Extension:”.
