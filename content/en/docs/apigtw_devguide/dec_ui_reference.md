{
"title": "Declarative UI reference",
"linkTitle": "Declarative UI reference",
"weight":"110",
"date": "2019-11-27",
"description": "This appendix provides in-depth details about declarative XML, which is used in API Gateway to define the user interface of filters and dialogs within Policy Studio."
}

This appendix provides in-depth details about declarative XML, which is used in API Gateway to define the user interface of filters and dialogs within Policy Studio.

## Declarative XML overview

Declarative XML is a user interface markup language defining UI elements and bindings that allows you to quickly create dialogs within Policy Studio with minimal coding.

The defined elements map to Eclipse Standard Widget Toolkit (SWT) widgets and Axway ScreenAttributes (groups of SWT widgets backed by entity instances).

This topic describes in detail the UI elements and bindings.

## ActorAttribute

### Description

The <ActorAttribute> tag renders an SWT Combo widget with an optional Label. The combo box is populated with the following entry: “Current Actor/Role only”. This is the default value for SOAP requests that contain a WS-Security block, and do not contain a SOAP Actor/Role attribute. An additional value can be entered if a WS\_Security block with a specific Actor/Role is contained in the SOAP message.

### Available attributes

| Attribute | Description                                                                    | M/O | Default |
|-----------|--------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| label     | Specifies the ID of the resource containing the text to display on the Label.  | O   | -       |
| span      | Value used in the creation of layout-data for the Button.                      
                                                                                  
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
   <panel indent="15" margin="0">
     <ActorAttribute label="ACTOR_LABEL" field="actor" required="true" />
   </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![ActorAttribute example](/Images/APIGatewayDeveloperGuide/02000002.jpg)

## AgeAttribute

### Description

The <AgeAttribute> tag renders an SWT Label (optional), Text and Combo widgets, allowing you to specify a numeric age value, and select one of the following age types:

-   Seconds
-   Minutes
-   Hours
-   Days

{{< alert title="Note" color="primary" >}}The value that is persisted to the underlying entity is stored as milliseconds.{{< /alert >}}

### Available attributes

| Attribute | Description                                                                    | M/O | Default |
|-----------|--------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| label     | Specifies the ID of the resource containing the text to display on the Label.  | O   | -       |
| span      | Value used in the creation of layout-data for the Button.                      
                                                                                  
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
  <panel columns="3" margin="0">
    <AgeAttribute field="maxAge" label="AGE_LABEL" required="true"/>
  </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![AgeAttribute example](/Images/APIGatewayDeveloperGuide/0200001B.jpg)

AuthNRepositoryAttribute
------------------------

### Description

The <AuthNRepositoryAttribute> tag renders an SWT Combo widget with an optional Label.

Authentication repositories are grouped into different types and each type of authentication repository has an associated group of filter types they are compatible with. For example, “Local Repositories” instances are compatible with the following filter types:

-   HttpBasicFilter
-   HttpDigestFilter
-   WsBasicFilter
-   WsDigestFilter
-   WsUsernameFilter
-   AttributeAuthnFilter
-   FormAuthnFilter

The Combo widget is then populated with this list of instances that are compatible with this filter type.

### Available attributes

| Attribute  | Description                                                                                                                       | M/O | Default |
|------------|-----------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| field      | Specifies the name of the field of the entity backed by the rendered controls.                                                    | M   | -       |
| label      | Specifies the ID of the resource containing the text to display on the Label.                                                     | O   | -       |
| filterType | When displaying the combo widget, only lists the authentication repositories which are compatible with this specific filter type. | M   | -       |
| refName    | Specifies Field value of the referenced entity that will be displayed in the Combo box.                                           | M   | -       |
| required   | Specifies whether or not the entity field is required                                                                             | M   | -       |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <AuthNRepositoryAttribute label="REPOSITORY_LABEL" field="repository" 
   filterType="FormAuthnFilter" refName="name" required="true"/>
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![AuthNRepositoryAttribute example](/Images/APIGatewayDeveloperGuide/0200001C.jpg)

binding
-------

### Description

The <binding> tag allows you to create a binding between various widgets.

### Available attributes

| Attribute       | Description                                                                                                                                                                                                                                                 | M/O | Default |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| driver          | Specifies the name of the attributes that designate as drivers separated by commas.                                                                                                                                                                         | M   | -       |
| driven          | Specifies a list of attributes separated by commas to be enabled/disabled.                                                                                                                                                                                  | M   | -       |
| class           | Specifies the name of the class that performs and controls the binding between attributes.                                                                                                                                                                  | M   | -       |
| uncheckOverride | This attribute only applies when using the Enabler class. It allows the Enabler to enable controls when a ButtonAttribute is not selected and disable them when a ButtonAttribute is selected. Specify ‘enabled’ to override the default Binding behavior.  | O   | -       |

### Sample XML

The binding below specifies a binding between a <ButtonAttribute> and two <ComboAttribute> attributes. The binding is controlled in the Enabler class.

``` {space="preserve"}
<ui>
 <ButtonAttribute field="sortFiles" label="SORT_FILES_LABEL"/>
 <panel columns="2" margin="0">
  <panel label="SORT_TYPE_LABEL" margin="0,0,0,7">
   <ComboAttribute field="sortType"  contentSource="com.vordel.client.manager.filter.dirscan.DirectoryScannerDialog.sortType"
    includeBlank="false" readOnly="true" required="true" stretch="true" />
  </panel>
  <panel label="SORT_DIRECTION_LABEL" margin="0,0,0,7">
   <ComboAttribute field="sortDirection" contentSource="com.vordel.client.manager.filter.dirscan.DirectoryScannerDialog.sortDirection" 
    includeBlank="false" readOnly="true" required="true" stretch="true" />
  </panel>
  <binding driver="SORT_FILES_LABEL" driven="SORT_TYPE_LABEL,SORT_DIRECTION_LABEL" 
   class="com.vordel.client.ui.declarative.Enabler" />
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

When the Sort files button is disabled the “Sort type” and “Sort direction” Combo boxes are disabled.

![binding example (button disabled)](/Images/APIGatewayDeveloperGuide/0300001D.png)

When the Sort files button is enabled they are enabled also.

![binding example (button enabled)](/Images/APIGatewayDeveloperGuide/0300001E.png)

BitMaskAttribute
----------------

### Description

The <BitMaskAttribute> tag renders a bank of SWT Button widgets, each with the `SWT.CHECK` style applied, and backed by the specified entity field.

### Available attributes

| Attribute | Description                                                                    | M/O | Default |
|-----------|--------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| columns   | Value used in the creation of the layout data for the Composite.               
                                                                                  
  Columns represents the number of cell columns of the following GridLayout:      
                                                                                  
  ``` {space="preserve"}                                                          
      GridLayout gridLayout = new GridLayout();                                   
      gridLayout.numColumns = columns;                                            
  ```                                                                             | O   | 1       |
| required  | Specifies whether or not the field is required                                 | O   | false   |

Each item in the bitmask is represented declaratively as a <choice> tag, which is a child of <BitMaskAttrbute>. The following table outlines the <choice> attributes:

| Attribute | Description                                          | M/O | Default |
|-----------|------------------------------------------------------|-----|---------|
| label     | Label to be displayed for the check box              | M   | -       |
| value     | Integer value for this choice in the overall bitmask | M   | -       |

### Sample XML

``` {space="preserve"}
<ui>
 <panel indent="15" margin="0">
  <BitMaskAttribute field="logMask" columns="3">
   <choice value="1" label="LOG_PAGE_LOG_LEVEL_FATAL"/>
   <choice value="2" label="LOG_PAGE_LOG_LEVEL_FAILURE"/>
   <choice value="4" label="LOG_PAGE_LOG_LEVEL_SUCCESS"/>
  </BitMaskAttribute>
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![BitMaskAttribute example](/Images/APIGatewayDeveloperGuide/0200001F.jpg)

button
------

### Description

The <button> tag renders an SWT Button widget with the `SWT.PUSH` style applied.

### Available attributes

| Attribute | Description                                                                                                                         | M/O | Default |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| label     | Used internally for callback purposes to allow the extents of the scroll panel to be set correctly.                                 
                                                                                                                                       
  If an image is not specified, the label is also used as the text of the button.                                                      | M   | -       |
| image     | Specifies the ID of the image to be used for the button. The ID must be specified in the `images.properties` file.                  
                                                                                                                                       
  An image takes precedence over a label, so if both are specified the image will be displayed, rather than the text.                  | O   | -       |
| tooltip   | Specifies the tooltip text.                                                                                                         | O   | -       |
| style     | Specifies the style of the button.                                                                                                  
                                                                                                                                       
  Possible values are:                                                                                                                 
                                                                                                                                       
  -   check - renders a check box                                                                                                      
  -   radio - renders a radio button                                                                                                   
  -   push - renders a push button                                                                                                     | O   | push    |
| selected  | If the style attribute is specified and the value is set to “check” or “radio”, it specifies whether or not the button is selected. 
                                                                                                                                       
  Possible values are “true” and “false”.                                                                                              | C   | true    |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <button image="browse" label="BROWSE_TIP" tooltip="BROWSE_TIP" />
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![button example](/Images/APIGatewayDeveloperGuide/02000020.jpg)

ButtonAttribute
---------------

### Description

The <ButtonAttribute> tag renders an SWT Button widget with the `SWT.PUSH` style applied, and backed by the specified entity field.

### Available attributes

| Attribute    | Description                                                                                                                                                                             | M/O | Default |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| field        | Specifies the name of the field of the entity backed by the rendered controls.                                                                                                          | M   | -       |
| label        | Specifies a textual label for the Button.                                                                                                                                               | M   | -       |
| displayName  | Specifies the name of the Button to be displayed in the event of an error.                                                                                                              | O   | -       |
| span         | Value used in the creation of layout data for the Button.                                                                                                                               
                                                                                                                                                                                           
  Span represents the horizontal span of the following GridData:                                                                                                                           
                                                                                                                                                                                           
  ``` {space="preserve"}                                                                                                                                                                   
      GridData gridData = new GridData();                                                                                                                                                  
      gridData.horizontalAlignment = GridData.FILL;                                                                                                                                        
      gridData.grabExcessHorizontalSpace = true;                                                                                                                                           
      gridData.horizontalSpan = span;                                                                                                                                                      
  ```                                                                                                                                                                                      | O   | 1       |
| on           | Specifies the attribute value when the Button is checked.                                                                                                                               | O   | -       |
| off          | Specifies the attribute value when the Button is unchecked.                                                                                                                             | O   | -       |
| required     | Specifies whether or not the field is required.                                                                                                                                         | O   | false   |
| trackChanges | Specifies whether or not changes will be tracked when the button state has changed. If set to “true” this calls the `trackChange()` method on the page on which the button is rendered. | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <group label="LOG_PAGE_ABORT_SECTION_LABEL">
  <ButtonAttribute field="abort" label="ABORT_PROCESSING_LABEL" span="2"/>
 </group>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![ButtonAttribute example](/Images/APIGatewayDeveloperGuide/02000021.jpg)

CategoryAttribute
-----------------

### Description

The <CategoryAttribute> tag renders an SWT Combo widget with either the `SWT.BORER` or `READ_ONLY` style applied. It lists all the categories available.

### Available attributes

| Attribute | Description                                                                         | M/O | Default         |
|-----------|-------------------------------------------------------------------------------------|-----|-----------------|
| label     | Specifies a textual label for the Combo.                                            | O   | -               |
| readonly  | Specifies the style of the Combo. It can be either `SWT.READ_ONLY` or `SWT.BORDER`. | O   | `SWT.READ_ONLY` |

### Sample XML

``` {space="preserve"}
<ui>
 <CategoryAttribute label="LOG_CATEGORY_LABEL"/>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![CategoryAttribute example](/Images/APIGatewayDeveloperGuide/03000022.png)

CertDNameAttribute
------------------

### Description

The <CertDNameAttribute> tag renders a SWT Combo with a list of certificates.

### Available attributes

| Attribute | Description                                                                                                 | M/O | Default |
|-----------|-------------------------------------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls.                              | O   | -       |
| label     | Specifies the ID of the resource containing the text to display on the Label (to the left of the combo box) | O   | -       |
| required  | Specifies whether or not the entity field is required                                                       | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <CertDNameAttribute label="ISSUER_DNAME_LABEL" 
  field="issuerName" required="true" />
</ui>
```

### Rendered UI

The above XML renders the following UI:

![CertDNameAttribute example](/Images/APIGatewayDeveloperGuide/03000023.png)

{{< alert title="Note" color="primary" >}}The combo box is longer in width but shortened here for clarity.{{< /alert >}}

certSelector
------------

### Description

The <certSelector> tag renders a Label with an associated Button and read-only TextBox (which contains the alias of the selected certificate or (unset) if no certificate has been selected).

When the Button is clicked a certificate selection dialog similar to the following is displayed:

![Certificate selection dialog](/Images/APIGatewayDeveloperGuide/03000024.png)

### Available attributes

| Attribute     | Description                                                                                                                                                                             | M/O | Default |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| field         | Specifies the name of the field of the entity backed by the rendered controls.                                                                                                          | M   | -       |
| label         | Specifies a textual label to appear above the table.                                                                                                                                    | O   | -       |
| buttonOnRight | Specifies whether or not the button is rendered to the right of the widgets.                                                                                                            | O   | false   |
| view          | If “privateKey” is specified for this attribute the selection dialog that is displayed when the associated button is clicked will only display certificates that contain a private key. | O   | -       |
| required      | Specifies whether or not the entity field is required.                                                                                                                                  | O   | false   |

 

### Sample XML

``` {space="preserve"}
<ui>
 <panel>
  <certSelector label="SECURITY_SERVER_CERTIFICATE" field="sslCertificate" 
   required="false" view="privateKey" />
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![certSelector example](/Images/APIGatewayDeveloperGuide/03000025.png)

CertTreeAttribute
-----------------

### Description

The <CertTreeAttribute> tag renders a JFace TreeViewer, populated with certificate information read from the certificate store.

### Available attributes

| Attribute   | Description                                                                                                                                   | M/O | Default |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| field       | Specifies the name of the field of the entity backed by the rendered controls.                                                                | M   | -       |
| label       | Specifies a textual label to appear above the table.                                                                                          | O   | -       |
| multiSelect | Specifies whether or not multiple certificates can be selected in the tree.                                                                   | O   | true    |
| keysOnly    | Specifies whether or not to filter the tree and only show certificates that contain a private key. By default all certificates are displayed. | O   | false   |
| tableHeight | Specifies a height hint for the table.                                                                                                        | O   | -       |
| required    | Specifies whether or not the entity field is required.                                                                                        | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <panel>
  <CertTreeAttribute label="SSL_CERTIFICATES_LABEL" field="sslUsers" 
   required="false" multiSelect="false" keysOnly="true" tableHeight="300" />
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![CertTreeAttribute example](/Images/APIGatewayDeveloperGuide/03000026.png)

CheckboxGroupAttribute
----------------------

### Description

The <CheckboxGroupAttribute> tag renders an SWT Composite with zero or more Buttons (style = `SWT.CHECK`) defined using <choice> tags as children.

### CheckboxGroupAttribute attributes

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

### choice attributes

| Attribute | Description                                                                                                                                                                                  | M/O | Default |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| label     | Specifies the ID of the resource containing the text to display on the Label.                                                                                                                | M   | -       |
| value     | Specifies one of the possible entity values for the ‘field’ defined in the CheckboxGroupAttribute tag. This value is tied to the button, and saved to the Entity if this button is selected. | M   | -       |
| span      | Value used in the creation of layout data for the Button.                                                                                                                                    
                                                                                                                                                                                                
  Span represents the horizontal span of the following GridData:                                                                                                                                
                                                                                                                                                                                                
  ``` {space="preserve"}                                                                                                                                                                        
  GridData gridData = new GridData();                                                                                                                                                           
  gridData.horizontalAlignment = GridData.FILL;                                                                                                                                                 
  gridData.grabExcessHorizontalSpace = true;                                                                                                                                                    
  gridData.horizontalSpan = span;                                                                                                                                                               
  ```                                                                                                                                                                                           | O   | 1       |

### Sample XML

The following example represents the multi-valued “options” entity field, of which there are three possible values: “value1”, “value2”, and “custom”.

-   If the first check box button is selected (represented by the first <choice> tag) the “options” acquire the value “value1”.
-   If the second check box button is selected the “options” acquire the two values: “value1” and “value2”.
-   If all three check boxes are selected the “options” acquire all three values: “value1”, “value2” and “custom”.

The <CheckboxGroupAttribute> tag is not restricted to having only <choice> tags as children. A good candidate is the <panel> container tag, as outlined in the example below. When the ‘User Defined’ choice is selected the children of the subsequent panel are enabled automatically. When the ‘User Defined’ choice is unselected, these children are disabled automatically.

    <ui>
        <panel>
            <CheckboxGroupAttribute field="options" label="Select Values">
                <choice value="value1" label="Value1" />
                <choice value="value2" label="Value2" />
                <choice value="custom" label="User Defined" />
                    <panel indent="15" margin="0">
                        <TextAttribute field="custom" label="Value"/>
                    </panel>
            </CheckboxGroupAttribute>
        </panel>
    </ui>

### Rendered UI

The above XML renders the following UI.

The multi-valued “options” entity field has two values: “value1” and “value2”:

![CheckboxGroupAttribute example](/Images/APIGatewayDeveloperGuide/CheckboxGroupAttribute_1.png)

The multi-valued “options” entity field has two values: “value2” and “custom”:

![CheckboxGroupAttribute example 2](/Images/APIGatewayDeveloperGuide/CheckboxGroupAttribute_2.png)

CircuitChainTable
-----------------

### Description

The <CircuitChainTable> tag renders a Table widget. The table is populated with the field values of the backed entity.

### Available attributes

| Attribute       | Description                                                                                           | M/O | Default |
|-----------------|-------------------------------------------------------------------------------------------------------|-----|---------|
| flavor          | Specifies the type of entity that is backed by each Table entry in the rendered controls.             | M   | -       |
| setOrderable    | Specifies whether the table has up and down buttons to traverse the entries.                          | O   | true    |
| setCapabilities | Specifies the CRUD capabilities that are allowed. They are separated by a comma \[ADD, EDIT, DELETE\] | O   | -       |

### Sample XML

``` {space="preserve"}
<ui>
  <CircuitChainTable flavor="OperationCircuitReference" 
   setOrderable="false" setCapabilities="EDIT"/>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![CircuitChainTable example](/Images/APIGatewayDeveloperGuide/03000027.png)

ComboAttribute
--------------

### Description

The <ComboAttribute> tag renders an SWT Combo widget, backed by the specified entity field.

### Available attributes

| Attribute     | Description                                                                                                                                                | M/O | Default |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| field         | Specifies the name of the field of the entity backed by the rendered controls.                                                                             | M   | -       |
| contentSource | Specifies a string array (Java String\[\]) or map (Java Map<>) with which to populate the combo box.                                                 | M   | -       |
| label         | Specifies a textual label to appear to the left of the Combo                                                                                               | O   | -       |
| includeBlank  | Specifies whether or not a blank item should be added as the first item to the combo box                                                                   | O   | false   |
| readOnly      | Specifies whether or not the combo box is read-only; that is, whether or not the user can enter their own value as well as select from the drop-down list. | O   | false   |
| required      | Specifies whether or not the entity field is required                                                                                                      | O   | false   |
| stretch       | Specifies whether or not the combo box stretches to fill the available horizontal space                                                                    | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
 <group label="TRACE_SETTINGS_LABEL" columns="2" span="2">
  <ComboAttribute field="traceLevel" label="TRACE_LEVEL_LABEL" 
   required="true" readOnly="true"
   contentSource="com.vordel.client.manager.filter.util.TraceHelper.logLevels" />
 </group>
</ui>
```

### Rendered UI

The above XML renders the following UI:

![ComboAttribute example](/Images/APIGatewayDeveloperGuide/02000028.jpg)

comboBinding
------------

### Description

The <comboBinding> tag allows you to create a binding between various widgets.

### Available attributes

| Attribute     | Description                                                                                   | M/O | Default |
|---------------|-----------------------------------------------------------------------------------------------|-----|---------|
| driver        | Specifies the name of the ComboAttribute that designates as the driver.                       | M   | -       |
| driven        | Specifies a list of Attributes separated by ‘,’ to be enabled or disabled.                    | M   | -       |
| class         | Specifies the name of the class that will perform and control the binding between attributes. | M   | -       |
| valueSelected | Designates the value to be initially selected.                                                | M   | null    |
| enableDriven  | Specifies by default where the attributes will be enabled or disabled on startup.             | O   | true    |

### Sample XML

The binding below specifies a binding between a ComboAttribute and a TextAttribute.

``` {space="preserve"}
<ui>
 <ComboAttribute field="extractMethod" 
  label="JMS_CONSUMER_EXTRACTION_METHOD_LABEL"
  contentSource="com.vordel.client.manager.filter.jms.JMSConsumerDialog.extractMethods"
  includeBlank="false" readOnly="true" 
  required="true" stretch="true"/>
 <TextAttribute field="attributeName" 
  label="JMS_MESSAGE_ATTRIBUTE_NAME" 
  required="false"/>
 <comboBinding driver="JMS_CONSUMER_EXTRACTION_METHOD_LABEL"
  driven="JMS_MESSAGE_ATTRIBUTE_NAME"
  class="com.vordel.client.ui.declarative.ComboEnabler"
  valueSelected="1" enableDriven="false"/>  
</ui>
```

### Rendered UI

The above XML renders the following UI:

![ComboAttribute example](/Images/APIGatewayDeveloperGuide/03000029.png)

ComboStackPanel
---------------

### Description

The <ComboStackPanel> tag primarily renders an SWT Combo widget, backed by the specified entity field. If the tag contains <panel> children it also renders those controls as part of an SWT StackLayout control, with each panel being ‘flipped’ when the selection in the combo box changes.

### Available attributes

| Attribute | Description                                                                     | M/O | Default |
|-----------|---------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered combo box. | M   | -       |
| label     | Specifies a textual label to appear to the left of the Combo                    | O   | -       |
| required  | Specifies whether or not the entity field is required                           | O   | false   |
| span      | Value used in the creation of layout-data for the Combo.                        
                                                                                   
  Span represents the horizontal span of the following GridData:                   
                                                                                   
  ``` {space="preserve"}                                                           
      GridData gridData = new GridData();                                          
      gridData.horizontalAlignment = GridData.FILL;                                
      gridData.grabExcessHorizontalSpace = true;                                   
      gridData.horizontalSpan = span;                                              
  ```                                                                              | O   | 1       |

### Sample XML

``` {space="preserve"}
<ui>
 <panel columns="2">
  <NameAttribute />
  <ComboStackPanel field="connectionType" label="FTP_UPLOAD_CONNECTION_TYPE_LABEL">
   <panel label="FTP" columns="2">
    <TextAttribute label="FTP_UPLOAD_SSL_PROTOCOL_LABEL" field="sslProtocol"/>
   </panel>
     
   <panel label="FTPS" columns="2">
    <TextAttribute label="FTP_UPLOAD_SSL_PROTOCOL_LABEL" field="sslProtocol"/>
    <ButtonAttribute label="FTP_UPLOAD_SSL_IS_IMPLICIT" field="isImplicit" />
    <tabFolder span="2">
     <tab label="FTP_UPLOAD_SSL_TRUSTED_CERTS_TAB">
      <panel>
       <CertTreeAttribute label="FTP_UPLOAD_SSL_TRUSTED_CERTS_LABEL" 
        field="trustedCerts" required="false" 
        tableHeight="100" />
      </panel>
     </tab>
     <tab label="FTP_UPLOAD_SSL_CLIENT_CERTS_TAB">
      <panel>
       <CertTreeAttribute label="FTP_UPLOAD_SSL_CLIENT_CERTS_LABEL" 
        field="clientCert" required="false" 
        multiSelect="false" keysOnly="true" 
        tableHeight="100" />  
      </panel>
     </tab>
    </tabFolder>
   </panel>
  </ComboStackPanel>
 </panel>
</ui>
```

### Rendered UI

The above XML renders the following UI:

{{< alert title="Note" color="primary" >}}The red rectangles are for illustrative purposes, and show the controls rendered by the ComboStackPanel and its children.{{< /alert >}}

![ComboStackPanel example](/Images/APIGatewayDeveloperGuide/0200002A.jpg)

![ComboStackPanel example](/Images/APIGatewayDeveloperGuide/0200002B.jpg)

Condition
---------

### Description

The <Condition> tag introduces control statements.

### Available attributes

| Attribute | Description                                                                                                | M/O | Default |
|-----------|------------------------------------------------------------------------------------------------------------|-----|---------|
| criteria  | Specifies the control statement. Currently “if” and “ifnot” are supported.                                 | M   | -       |
| property  | Specifies a property value to be evaluated.                                                                | M   | -       |
| type      | Specifies the type of Condition. Currently only “JRE” is supported.                                        | O   | JRE     |
| value     | Specifies the value of the property. If not specified an attempt is made to get the value of the property. | O   | -       |

### Sample XML

``` {space="preserve"}
<ui>
 <Condition criteria="ifnot" property="httphostheader.disabled">
   <group label="HOST_HEADER_GROUP_NAME" columns="2" fill="false">
     <RadioGroupAttribute field="forwardClientHostHeader" columns="2">
       <choice value="1" label="HOST_HEADER_FROM_CLIENT"/>
       <choice value="0" label="HOST_HEADER_FROM_VORDEL" />
     </RadioGroupAttribute>
   </group>
 </Condition> />
</ui>
```

### Rendered UI

If the “httphostheader” property is not enabled nothing is displayed. If the “httphostheader” property is enabled it renders the following UI:

![Condition example](/Images/APIGatewayDeveloperGuide/0300002C.png)

CronAttribute
-------------

### Description

The <CronAttribute> tag renders an SWT Button widget and a SWT Text widget, backed by the specified entity field.

### Available attributes

| Attribute | Description                                                                    | M/O | Default |
|-----------|--------------------------------------------------------------------------------|-----|---------|
| field     | Specifies the name of the field of the entity backed by the rendered controls. | M   | -       |
| label     | Specifies a textual label to appear to the left of the Combo.                  | O   | -       |
| required  | Specifies whether or not the entity field is required.                         | M   | false   |

### Sample XML

``` {space="preserve"}
<ui>
   <CronAttribute field="expression" 
    label="CRON_EXPRESSION_DIALOG_EXPRESSION_LABEL" 
    required="true"/> 
</ui>
```

### Rendered UI

The above XML renders the following UI:

![CronAttribute example](/Images/APIGatewayDeveloperGuide/0300002D.png)

ContentEncodingAttribute
------------------------

### Description

The <ContentEncodingAttribute> tag renders an SWT Text widget and a SWT Button widget, backed by the specified entity field.

### Available attributes

| Attribute    | Description                                                                                                                                                                              | M/O | Default |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|---------|
| field        | Specifies the name of the field of the entity backed by the rendered controls.                                                                                                           | M   | -       |
| label        | Specifies the ID of the resource containing the text to display on the Label (to the left of the Text box)                                                                               | O   | -       |
| trackChanges | Specifies whether or not changes will be tracked when the button state has changed. If set to “true” this will call the trackChange() method on the page on which the button is rendered | O   | false   |
| span         | Value used in the creation of layout data for the Button..                                                                                                                               
                                                                                                                                                                                            
  Span represents the horizontal span of the following GridData:                                                                                                                            
                                                                                                                                                                                            
  ``` {space="preserve"}                                                                                                                                                                    
      GridData gridData = new GridData();                                                                                                                                                   
      gridData.horizontalAlignment = GridData.FILL;                                                                                                                                         
      gridData.grabExcessHorizontalSpace = true;                                                                                                                                            
      gridData.horizontalSpan = span;                                                                                                                                                       
  ```                                                                                                                                                                                       | O   | 1       |
| required     | Specifies whether or not the entity field is required                                                                                                                                    | O   | false   |

### Sample XML

``` {space="preserve"}
<ui>
   <ContentEncodingAttribute field="inputEncodings" 
    label="inputEncodings" trackChanges="true"/> 
</ui>
```

### Rendered UI

The above XML renders the following UI:

![ContentEncodingAttribute example](/Images/APIGatewayDeveloperGuide/0300002E.png)
