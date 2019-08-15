---
title: Customize CSS styles
linkTitle: Customize CSS styles
weight: 5
date: 2019-07-30
---

This section describes how you can directly edit the files in local/less/themes/<your copy of axway theme> to customize your css styles. This folder contains all files related to your API Portal theme.

There are two options available to modify the css styles. It may be easier to use a custom css file, rather than manually edit the Less files. For more details, see [Add a custom stylesheet](add_custom_stylesheet.htm).

There are several items you can change within your css, and the file you must edit depends on the element and the change in question. For some elements, you may need to edit more than one file for the changes to take effect.

{{< alert title="" color="warning">}}
It is strongly recommended that you make a copy of the theme you want to change before making any edits. For more details on copying a theme, see [Create a new theme](themingCustomStyles.htm#Create).
{{< /alert >}}

In this example, the font in the main menu is changed to uppercase.

## Check the current CSS

When planning changes to CSS files, you can quickly check which file controls the changes to the element you want to change.

1.  Go to your API Portal, right-click on an element in the main menu, such as **APIs**, and select **Inspect element**.
2.  ![](/Images/APIPortal/cssselectelement.png)

3.  Using the developer tools, find the style element you want to change. The css file reference for the element shows you the name, class, or ID of that element as well as where it is located.
4.  ![API Portal customizing the css sample modification to an element screen](/Images/APIPortal/csssamplemod.png)

## Manually edit the Less files

{{< alert title="" color="warning">}}It is not recommended to manually edit the `less/themes/axway/variables-custom.less` file. This file contains the attribute values customized in the ThemeMagic editor. For more details, see [Customize with ThemeMagic](themingCustomStyles.htm).{{< /alert >}}

1. Log in to the Joomla! Admin Interface (JAI), and click **Extensions > Templates**.
1. In the Template sidebar, click **Templates**, and select **Purity III_Details and Files**.
![API Portal customizatoin list of available templates through Purity tool](/Images/APIPortal/customation_puritIII_detailsandfiles.png)
1. On the **Editor** tab, open the following folder:

    ```
    local/css/themes/<your theme>
    ```

1. Select the `template.less` file containing the element, and locate the correct line. In this example, the value for `text-transform` is changed from inherit to uppercase.
![An example screenshot on editing a style css.](/Images/APIPortal/cssjoomlasamplecodechange.png)
1. Select **Save > Close File**, and close the editor.
1. In Templates sidebar, select **Styles**.
1. Select **Purity III - Default**, and click **</> LESS to CSS** to compile a new css file.
![Joomla Purity III styles template manager to compile changes to API Portal css](/Images/APIPortal/csspuriistylesconfig.png)
1. Refresh the API Portal home page in the browser to see the changes you have made.

## Add a custom stylesheet

If you rather use a css files to edit the look and feel of your page, add a new custom stylesheet or upload an existing one to the Purity III - Default style.

The custom css file is the last file to be loaded in your site. The custom css file is not compiled from the Less variables, so it is not overridden or lost if you decide compile another css file using the Less variables.

You can also manually edit the Less files in `local/less/themes/<your copy of axway theme>` folder. After modifications, compile the `.less` files to CSS. For more details, see [Customize CSS styles](customize_css_styles.htm).

### Create or upload a custom stylesheet

1.  Log in to Joomla! Administrator Interface (JAI), and click **Extensions > Templates**.
2.  In the Templates sidebar, click **Templates**, and select the style **Purity III_Details and Files**.
3.  On the **Editor** tab, select **New file**.
4.  Select the `css` folder, set **File Type** to `css`, enter a name for you file (such as `custom.css`), and click **Create**. To upload a css file, click **Choose File**, select the css file you want, and click **Upload**.

You can now edit your custom stylesheet in JAI like any css file.

### Copy a custom stylesheet

You can also copy a css file already included in the Purity III - Default style as your custom stylesheet.

1.  In JAI, click **Extensions > Templates**.
2.  In the Templates sidebar, click **Templates**, and select the style **Purity III_Details and Files**.
3.  On the **Editor** tab, open the css folder, select the css file to copy, and click **New file**.
4.  Select the `css` folder, enter a name for you copy (such as `copied-custom.css`) in **Copied File Name**, and click **Copy File**.

You can now edit the details you want in your copied custom stylesheet.

### Add Less functionality to a custom stylesheet

If you need the Less functionality in the custom stylesheet as well, create a less file for your custom css file. This less file compiles the Less variables to your custom css file.

1.  In JAI, click **Extensions > Templates**.
2.  In the Template sidebar, click **Templates**, and select the style **Purity III_Details and Files**.
3.  On the **Editor** tab, select **New file**.
4.  Select the `less` folder, set **File Type** to `less`, set **File Name** to `<your css file name>.less`, and click **Create**.

{{< alert title="" >}}Styles defined in `custom.less` are independent of the template's stylesheet and do not render with updated variable values in ThemeMagic's preview.{{< /alert >}}
