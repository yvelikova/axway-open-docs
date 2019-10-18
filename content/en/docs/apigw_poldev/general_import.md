{
"title": "Import API Gateway configuration fragment",
"linkTitle": "Import API Gateway configuration fragment",
"date": "2019-10-17",
"description": "You can import XML-based configuration data into your API Gateway configuration (for example, policies, certificates, and users). For example, this is useful in a development environment if you wish to share and test configuration with other developers. "
}
﻿
<div id="p_general_import_overview">

Overview
--------

You can import XML-based configuration data into your API Gateway configuration (for example, policies, certificates, and users). For example, this is useful in a development environment if you wish to share and test configuration with other developers.

If you have XML-based configuration data that was previously exported from one API Gateway installation, by importing into another API Gateway installation, you can share API Gateway configuration in a development environment. This also enables you to manage differences and references between configuration components.

For details on exporting configuration data, see [Export configuration](general_export.htm).

{{< alert title="Note" color="primary" >}}The recommended way to export configuration between different environments is to use configuration packages. Select **File** > **Export** from the main menu. For more details, see [Manage projects](general_project.htm).{{< /alert >}}

</div>

<div id="p_general_import_steps">

Import configuration fragment
-----------------------------

To import previously-exported API Gateway configuration data, perform the following steps:

1.  Click the **Import Configuration Fragment**
    button in the Policy Studio toolbar.
2.  Browse to the location of the XML file that contains the previously exported configuration data that you wish to import.
3.  Select the XML file, and click **Open**.
4.  If a passphrase was set on the configuration from which the data was previously exported, enter it in the **Enter Passphrase**
    dialog, and click **OK**.
5.  In the **Import Configuration**
    dialog, all configuration items are selected for import by default. If you do not wish to import specific items, deselect them in the tree. For more details, see [*View differences* on page 1](#View).
6.  Click **OK**
    to import the selected configuration items.
7.  The selected configuration items are imported into your API Gateway configuration and displayed in the Policy Studio tree. For example, any imported policies and containers are displayed under the **Policies**
    node.

{{< alert title="Note" color="primary" >}}Be careful when deselecting configuration nodes for import. Deselecting certain nodes might make the imported configuration inconsistent by removing supporting configuration. {{< /alert >}}

</div>

<div id="p_general_import_differences">

View differences
----------------

The **Import Configuration**
dialog displays the differences between the existing stored configuration data (destination) and the configuration data to be imported (source). Differences are displayed in the tree as follows:

|              |                                                                                                                             |
|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Addition** | Exists in the source Configuration being imported but not in the destination Configuration. Displayed as a green plus icon. |
| **Deletion** | Exists in the destination Configuration but not in the source Configuration being imported. Displayed as a red minus icon.  |
| **Conflict** | Exists in both Configurations but is not the same. Displayed as a yellow warning icon.                                      |

If you select a particular node in the **Import Configuration**
tree, the **Differences Details**
panel at the bottom of the screen shows details for this Configuration entity (for example, added or removed fields). In the case of conflicts, changed fields are highlighted.

Some Configuration entities also contain references to other entities. In this case, an icon is displayed for the field in the **Difference Details**
panel. If you double-click a row with an icon, you can drill down to view further **Difference Details**
dialogs for those entities.

</div>

<div id="p_general_import_items">

What is imported
----------------

When configuration data is imported, some configuration items are imported in their entirety. For example, if the contents of a particular policy are different, the entire policy is replaced (new filters are added, missing filters are removed, and conflicting filters are overwritten). In addition, if a complex filter differs in its children, child items are removed and added as required (for example, WS Filter, Web service, User, and so on).

Other imports are additive only. For example, importing a single certificate does not remove the certificates already in the destination Certificate store. All references to other policies are also maintained during import.

{{< alert title="Note" color="primary" >}}Although importing some configuration items removes child items by default, you can deselect child nodes to keep existing child items. However, you should take care to avoid inconsistencies. The default selection applies in most cases.{{< /alert >}}

</div>

<div id="p_general_import_migrate">

Upgrade configuration from an earlier version
---------------------------------------------

When you import configuration created using an earlier version of API Gateway, the configuration is automatically upgraded to the current API Gateway version configuration. This results in the migration of the configuration entities present in the `.xml`
file that is being imported.

The **Migration Report**
trace console at the bottom of the window displays the migration report output that is generated when the configuration is upgraded. For example:

![Migration Report Console](/Images/docbook/images/general/import_migrate_report.png)

The **Migration Report**
console also displays links that navigate to the appropriate upgraded configuration entity. For example, the following window is displayed when the `MyFirstDirectoryScanner`
link is clicked:

![Migration Report Navigation](/Images/docbook/images/general/import_migrate_link.png)

For more details on upgrading, see the
[API Gateway Upgrade Guide](/bundle/APIGateway_77_UpgradeGuide_allOS_en_HTML5)
.

</div>
