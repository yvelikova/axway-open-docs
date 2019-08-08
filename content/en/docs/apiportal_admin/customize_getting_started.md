{"title":"Customize API Portal look and feel","linkTitle":"Customize API Portal look and feel","weight":"1","date":"2019-07-30","description":""}

This section provides the basic information you need to get started with customizing your branded API Portal.

For internally-facing API deployments, you can deploy API Portal "as is" using the out-of-the-box Axway branding. This type of deployment requires no customization.

For external-facing API deployments, you may want to customize API Portal to provide a branded developer portal experience. This type of deployment contains a collection of style settings that can be configured in your account, including logos, colors, fonts or you can perform advanced modification of the layout and structure.

## Supported API Portal customization

Customization can be performed at three levels:

-   **Customization through configuration**: Use the Joomla! Admin Interface (JAI) (https://<API Portal host>/administrator) to change CSS stylesheets, templates, and layouts. These types of customizations are can be upgraded and retained when you move to new version. The customization does not modify the API Portal source code and is supported by Axway.
-   **Customization through code**: API Portal is developed using the PHP scripting language and the source code is provided. This is how Joomla! applications are deployed. You can modify the PHP source code to customize API Portal, such as to change the functionality of pages and to extend by adding new pages.

    <div class="indentTableNested">

    -   The customizations are lost when you upgrade. The source code is subject to frequent changes without notice; therefore, you must reintegrate customizations into the new API Portal code to avoid restoring a deprecated code along with the customizations.
    -   If you submit a case to Axway Support and it is suspected that the customizations may be the root cause of the issue, you must reproduce the issue on a non-customized API Portal.
    -   This type of customization is only recommended for customers with Joomla!/PHP experience that need to deploy a highly tailored developer portal.\

    </div>

-   **Customization through the addition of Joomla! plug-ins**: The Joomla! CMS offers thousands of extensions that are available from their website. Axway is only responsible for the support to extensions that are delivered out of the box (EasyBlog and EasyDiscuss).
-   {{< alert title="" color="warning" >}} If you submit a case to Axway Support and it is suspected that unsupported third-party extensions may be the root cause of the issue, you must reproduce the issue on a non-customized API Portal.{{< /alert >}}

## Prerequisites

To get started with customization, you need the following:

-   API Portal installed and configured. For more details, see the [API Portal Installation and Upgrade Guide](/bundle/APIPortal_77_InstallationGuide_allOS_en_HTML5) .
-   An API Portal user account. When you log in, the default API Portal web page is displayed, so you can check how the changes look to your end users.
-   Basic understanding of [Joomla! ThemeMagic](themingCustomStyles.htm). This feature enables to change CSS stylesheets, templates, and layouts. For more advanced modifications, you can modify the PHP source code to customize API Portal, such as to change the functionality of pages and to extend by adding new pages.

# Customize with ThemeMagic
API Portal uses the Joomla! framework to extend the ThemeMagic feature. ThemeMagic is part of the Purity III template that is based on the T3 template framework.

With ThemeMagic, you have an administrative interface for creating or modifying themes, such as colors and fonts. Use the live preview to follow how your theme configuration looks before saving the changes. Themes are built using theming variables based on the [Less](http://lesscss.org/) language.

## Open ThemeMagic

1.  Log in to the Joomla! Administrator Interface (JAI), and click **Extensions > Templates**.
2.  In Templates sidebar, select **Styles**, then select the style **Purity III - Default**.
3.  ![Joomla user interface with Purity III selecting the styles](/Images/APIPortal/JoomlaThemeMagicStyles.png)

4.  Select **ThemeMagic**. ThemeMagic opens your portal home page with theme variables are displayed on the left.
5.  ![Joomla User Interface with Purity III theme magic](/Images/APIPortal/joomlathememagic.png)

6.  In the ThemeMagic window, sign in to API Portal. You are now ready to start customizing your portal.
7.  ![Screenshot on ThemeMagic](/Images/APIPortal/JoomlaThemeMagiconAPIPortal.png)

## Create a new theme

API Portal includes one theme named **Axway**. It is recommended to create any additional themes from a copy of the Axway theme to ensure they work properly.

1.  Open the ThemeMagic tool, and ensure the Theme is the default **Axway** theme.
2.  Click the drop-down menu next to the Preview button, and select **Save As**:
3.  ![API Portal customize color screen](/Images/APIPortal/portal_customize.png)

4.  Enter a name for your theme, click **Accept**, and wait until the new theme is ready. A new folder is created for your new theme in local/less/themes/.
5.  ![API Portal ThemeMagic screen to enter the theme name](/Images/APIPortal/thememagic.png)

6.  Ensure the **Theme** selected is your new theme, and change the theming variables on the left as needed to customize your theme.
7.  To check how your changes look on the page, click **Preview**.
8.  When you are happy with your theme, click the drop-down menu, and select **Save**.

### Theming variables

Theming variables are grouped into different levels:

-   **Key Colors**: These variables control the base colors for all styles. The default key colors are sea blue and gray.
-   **Basic Colors**: These variables control the colors of the major UI elements, such as buttons and menus. The default values for the basic colors are based on the key colors, but you can overridden these to control the styles of individual UI elements.
-   **Global Fonts** and **Headings**: These variables control the typefaces and sizes of the main text elements

In addition, there are some other variables for fine-grain customization of the UI elements, if needed. Most of these variables are based on Basic Color variables.

{{< alert title="" color="primary" >}}Variable names begin with the "@" character in Less language. In addition to variable values, you can also use Less expressions and functions to set the value of a theme variable.{{< /alert >}}

Use the new theme
-----------------

1.  In JAI, click **Extensions > Templates**.
2.  In the Templates sidebar, select **Styles**, then select the style **Purity III - Default**.
3.  Select the **Theme** page, and select your new theme from the **Theme** drop-down menu:
4.  ![API Portal sample screen on how to save a new theme in templates](/Images/APIPortal/portal_templates.png)

5.  Click **Save**, then click **</> Less to CSS**. This is the preferred option as it will only compile the theme you want to use.

Configuration files
-------------------

API Portal includes files added to the Purity III template's folders and files that replace those belonging to the Purity III template. All paths are relative to the Purity III template's folder.

-   Before updating the Purity III template or T3 framework, back up the Purity III files API Portal replaces. After the update, restore or merge the backed up files.
-   Before updating the API Portal plugin, if you have customized the Axway theme or any of the mentioned configuration files, back up the files to avoid losing your customizations. After the update, you may have to merge the backed up files.

#### Added files

The following list details the added files:

-   `less/themes/axway/template.less` – Styles for the theme.
-   `less/themes/axway/variables.less` – Theme values customized in a file editor.
-   `less/themes/axway/variables-custom.less` – Theme values customized in the ThemeMagic. Do not edit this file manually.

#### Replaced Purity III files

The following list summarizes the replaced Purity III files:

-   `thememagic.xml` – Configuration for the ThemeMagic GUI.
-   `language/en-GB/en-GB.tpl_purity_iii.ini` – Language strings displayed in the ThemeMagic GUI. In order to be utilized by ThemeMagic, this file must be copied to Joomla!'s main language folder, `language/en-GB/en-GB.tpl_purity_iii.ini` when the API Portal plugin is installed.
-   `less/variables.less` – Global variables for the Purity III template. Default values for theming variables must be defined in this file.

# Customize your logo
This section describes how to change the API Portal site logo using the Joomla! Media Manager.

## Upload your image file

1. In Joomla! Administrator Interface (JAI), click **Content > Media**.
2. Under **Media Folders**, click **com\_apiportal > menu**.
3. Upload the image file you want to use, and select **Save**.

## Link the logo to your home page

To configure the main menu to link your logo to the home page:

1. In JAI, click **Menus > Main Menu**. A list of menu items is displayed.
2. In the list of menu items, click **Home**. This is the first item where the logo is attached.
3. Go to the **Link Type** tab, and in **Link Image**, click **Select**.
4. In **Folder**, select the folder **com\_apiportal/menu**.
5. Select your logo from the list of the available image files, and click **Insert**.
6. Click **Save**.
7. Refresh the API Portal home page in the browser. Your selected logo is displayed.


## Customize 404 page
This section describes how you can customize a `404` page for your API Portal.

<!-- ### Create a template -->

Follow these steps create a new template for your new `404 `page.

1. Log in to the Joomla! Administrator Interface (JAI), and click **Extensions > Templates**.
2. Select **Templates** in the sidebar, and click the template **Purity\_III Details and Files**.
3. Click **Copy Template**.
4. Enter a name for the template and click **Copy Template**.
5. Click **Close**.

<!-- ### Customize the page  -->

Customize the message for the page.

1. From the list of templates, click your new template.
2. On the **Editor** tab, click **error.php** to edit this file.
3. Customize the line describing the `404 `page.
4. Save and close the template.

<!-- ### Assign the template -->

Assign your new template as the default `404 `page in API Portal.

1. Select **Styles** in the sidebar.
2. On the list of styles, locate the style created for your new template and click **Default**.
3. Click the style to open it, and select the **Assignment** tab.
4. Select **Home** in the **Main Menu**.
5. Save and close the style.
6. Refresh the API Portal home page in the browser.
Your customization is available, and is displayed when a user triggers the error page.
