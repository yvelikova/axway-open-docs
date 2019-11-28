{
"title": "Create the Policy Studio classes",
"linkTitle": "Create the Policy Studio classes",
"date": "2019-11-27",
"description": "The next step after defining the user interface is to write two GUI classes that enable the fields defined in the `JabberFilter` type definition to be configured. When the GUI classes and resources are built, the visual components can be used in Policy Studio to configure the filter and add it to a policy. "
}
﻿

The next step after defining the user interface is to write two GUI classes that enable the fields defined in the `JabberFilter` type definition to be configured. When the GUI classes and resources are built, the visual components can be used in Policy Studio to configure the filter and add it to a policy.

The following table describes the GUI classes and resources for the `JabberFilter`:

| Class or Resource      | Description                                                                                                                                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` {space="preserve"} 
 JabberFilterUI.java     
 ```                     | This class lists the pages that are involved in a filter configuration window. Each filter has at least two pages: the main configuration page, and a page where log messages related to the filter can be customized. This class is returned by the `getConfigPanelClass` method of the `JabberFilter` class. |
| ``` {space="preserve"} 
 JabberFilterPage.java   
 ```                     | This class loads the declarative XML file which defines the layout of the visual fields on the filter's main configuration window. For example, there are five fields on the configuration window for the **Jabber Filter** corresponding to the five fields defined in the entity type definition.            |
| ``` {space="preserve"} 
 resources.properties    
 ```                     | This file contains all text displayed in the GUI configuration window (for example, dialog titles, field names, and error messages). This means that the text can be customized or internationalized easily without needing to change the code.                                                                |
| ``` {space="preserve"} 
 jabber.gif              
 ```                     | This image file is the icon that identifies the filter in Policy Studio, and is displayed in the filter palette.                                                                                                                                                                                               |

The `JabberFilterUI` class, which is returned by the `getConfigPanelClass` method of the `JabberFilter` class, is responsible for the following:

-   Listing the configuration pages that make up the user interface for the filter
-   Naming the category of filters to which this filter belongs
-   Specifying the name of the images to use as the icons and images for this filter

JabberFilterUI class
--------------------

The code for the `JabberFilterUI` class is as follows:

``` {space="preserve"}
public class JabberFilterUI extends DefaultGUIFilter 
{
    public Vector<VordelPage> getPropertyPages() {
        Vector<VordelPage> pages = new Vector<VordelPage>();       
        pages.add(new JabberFilterPage());       
        pages.add(createLogPage());        
        return pages;
    }
    
    public String[] getCategories() {
        return new String[]{_("FILTER_GROUP_JABBER")};
    }
    
    private static final String IMAGE_KEY = "jabberFilter";
    static {
        Images.getImageRegistry().put(IMAGE_KEY, 
          Images.createDescriptor(JabberFilterUI.class, "jabber.gif"));
    }
    
    public String getSmallIconId() {
        return IMAGE_KEY;
    }
    
    public Image getSmallImage() {
        return Images.get(IMAGE_KEY);
    }
    
    public ImageDescriptor getSmallIcon() {
        return Images.getImageDescriptor(IMAGE_KEY);
    }
}
```

The following table describes the important methods:

| Method                                | Description                                                                                                                                                                                                                                 |
|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` {space="preserve"}                
 public Vector getPropertyPages()       
 ```                                    | Initializes a Vector of the pages that make up the total configuration windows for this filter. Successive pages are accessible by clicking the **Next** button on the Policy Studio configuration window.                                  |
| ``` {space="preserve"}                
 public String[] getCategories()        
 ```                                    | This method returns the names of the filter categories that this filter belongs to. The filter is displayed under these categories in the filter palette in Policy Studio. The **Jabber Filter** is added to the **XMPP Filters** category. |
| ``` {space="preserve"}                
 public Image getSmallImage()           
 ```                                    | The default image for the filter, which is registered in the static block in the preceding code, can be overridden by returning a different image here.                                                                                     |
| ``` {space="preserve"}                
 public ImageDescriptor getSmallIcon()  
 ```                                    | The default icon for the filter can be overridden by returning a different icon here.                                                                                                                                                       |

A page only represents a single configuration window in Policy Studio. You can chain together several pages to form a series of configuration windows that together make up the overall configuration for a filter. By default, all filters consist of two pages: one for the filter configuration fields, and one for per-filter logging. However, more pages can be added if required. You can add additional pages to the configuration in the `getPropertyPages` method.

If you look at the `getPropertyPages` method of the `JabberFilterUI` class, you can see that the `JabberFilterPage` class forms one of the configuration windows (or pages) for the `JabberFilter`. The `JabberFilterPage` class is responsible for loading the declarative UI XML file that defines the layout of all the input fields that make up the configuration window for the `JabberFilter`.

JabberFilterPage class
----------------------

The code for the `JabberFilterPage` class is as follows:

``` {space="preserve"}
public class JabberFilterPage extends VordelPage 
{    
    public JabberFilterPage() {
        super("jabberPage");
        setTitle(_("JABBER_PAGE"));
        setDescription(_("JABBER_PAGE_DESCRIPTION"));
        setPageComplete(false);
    }
    
    public String getHelpID() {
        return "jabber.help";
    }

    public boolean performFinish() {
        return true;
    }

    public void createControl(Composite parent) {
        Composite panel = 
          render(parent, 
          getClass().getResourceAsStream("send_instant_message.xml"));
        setControl(panel);
        setPageComplete(true);
    } 
}
```

There are four important interface methods that must be implemented in this class:

| Method                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` {space="preserve"}                      
 public JabberFilterPage()                    
 ```                                          | The constructor performs some basic initialization, such as setting a unique ID for the page, and setting the title and description for the page. The text representing the page title and description are kept in the `resources.properties` file so that they can be localized or customized easily.                                                                                                                |
| ``` {space="preserve"}                      
 public String getHelpID()                    
 ```                                          | This method is called by the Policy Studio help system. There is a **Help** button on every configuration page in Policy Studio. When you click this button, the help system is invoked. Every page has a help ID (for example, `jabber`\_`help`) associated with it, which is mapped to an HTML help page. This mapping is defined in the following file under the directory where you have installed Policy Studio: 
                                                                                                                                                                                                                                                                                                                                                                                                                         
  ``` {space="preserve"}                                                                                                                                                                                                                                                                                                                                                                                                 
  /plugins/com.vordel.rcp.policystudio.gateway.help_<version>/csh.xml                                                                                                                                                                                                                                                                                                                                                    
  ```                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                         
  To define a mapping for the help page, follow these steps:                                                                                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                                                                                                         
  1.  Open the `csh.xml` file.                                                                                                                                                                                                                                                                                                                                                                                           
  2.  Add the following XML to the file:                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                         
  <div class="indentTable">                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                         
  ``` {space="preserve"}                                                                                                                                                                                                                                                                                                                                                                                                 
  <context id="jabber_help">                                                                                                                                                                                                                                                                                                                                                                                             
     <description>Jabber Filter</description>                                                                                                                                                                                                                                                                                                                                                                            
     <topic label="Jabber Filter" href="Content/PolicyDevTopics/jabber.htm"/>                                                                                                                                                                                                                                                                                                                                            
  </context>                                                                                                                                                                                                                                                                                                                                                                                                             
  ```                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                         
  </div>                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                         
  1.  Create a help file called `jabber.htm` to contain the help for the filter in HTML format.                                                                                                                                                                                                                                                                                                                          
  2.  All URLs specified in the `csh.xml` file are relative from the `/plugins/com.vordel.rcp.policystudio.gateway.help_<version>` directory of your Policy Studio installation.                                                                                                                                                                                                                                         |
| ``` {space="preserve"}                      
 public boolean performFinish()               
 ```                                          | This method gives you the chance to process the user-specified data before it is submitted to the entity store. For example, any validation on the data should be added to this method.                                                                                                                                                                                                                               |
| ``` {space="preserve"}                      
 public void createControl(Composite parent)  
 ```                                          | This method is responsible for loading the declarative UI XML file that creates the configuration pages. Localization keys from the `resources.properties` file are used to give labels for the input fields in the XML file.                                                                                                                                                                                         |

resources.properties file
-------------------------

Both the declarative UI XML file and the GUI classes use localized keys for all text that is displayed on the configuration window. This makes it easy to localize or customize all text displayed in Policy Studio. The localization keys and their corresponding strings are stored in the `resources.properties` file, which takes the following format:

``` {space="preserve"}
#
# Palette category for Jabber filters
#
FILTER_GROUP_JABBER=XMPP Filters

#
# Properties for the JabberFilter Configuration Wizard
#
JABBER_PAGE=Jabber Filter Configuration
JABBER_PAGE_DESCRIPTION=Configure parameter values for the Jabber Filter

#
# Field labels and descriptions
#
CONNECTION_SETTINGS_LABEL=Connection Settings
FROM_EMAIL_ADDRESS_LABEL=From :
FROM_EMAIL_ADDRESS_DISP_NAME=Person sending the instant message
FROM_PASSWORD_LABEL=Password :
FROM_PASSWORD_DISP_NAME=Password of Person sending the message
RESOURCE_NAME_LABEL=Resource Name:
RESOURCE_NAME_DISP_NAME=Unique resource Name
CHAT_SETTINGS_LABEL=Chat Settings
TO_EMAIL_ADDRESS_LABEL=To : 
TO_EMAIL_ADDRESS_DISP_NAME=Person receiving the instant message   
MESSAGE_LABEL=Message :
MESSAGE_DISP_NAME=Message Content
```

The final resource is the `jabber.gif` file, which is displayed as the icon for the **Jabber Filter** in Policy Studio.
