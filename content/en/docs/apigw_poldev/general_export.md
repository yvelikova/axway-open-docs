{
"title": "Export API Gateway configuration",
"linkTitle": "Export API Gateway configuration",
"date": "2019-10-17",
"description": "You can export API Gateway configuration data by right-clicking a Policy Studio tree node (for example, policy or policy container), and selecting the relevant export menu option (for example, **Export Policy**). The configuration is exported to an XML file, which you can then import into a different API Gateway configuration. "
}
﻿
<div id="p_general_export_overview">

Overview
--------

You can export API Gateway configuration data by right-clicking a Policy Studio tree node (for example, policy or policy container), and selecting the relevant export menu option (for example, **Export Policy**). The configuration is exported to an XML file, which you can then import into a different API Gateway configuration.

For example, this is useful in a development environment if you wish to share and test configuration with other developers. By exporting configuration data from one API Gateway installation, and importing into another API Gateway installation, you can effectively share your API Gateway configuration in a development environment. This also enables you to manage differences and references between configuration components.

For details on importing configuration data, see [*Import configuration* on page 1](general_import.htm).

{{< alert title="Note" color="primary" >}}For details on migrating API Gateway configuration between development, testing, and production environments, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
.{{< /alert >}}

</div>

<div id="p_general_export_items">

What is exported
----------------

You can export API Gateway configuration items by right-clicking a node in the Policy Studio tree. For example, this includes the following types of Policy Studio tree nodes:

-   Policies
-   Policy containers
-   Schemas
-   Alerts
-   Caches
-   Regular expressions (White list)
-   Attacks (Black list)
-   Users
-   Certificates and Keys
-   Relative paths
-   Remote hosts
-   Database Connections
-   Server Settings

In addition, you can also export configuration items that are associated with the selected tree node. For example, this includes referenced policies, MIME types, regular expressions, schemas, and remote hosts. For details on exporting additional configuration items, see the next section.

</div>

<div id="p_general_export_items_steps">

Export configuration items
--------------------------

To export API Gateway configuration items, perform the following steps:

1.  Right-click a Policy Studio tree node (for example, policy or policy container), and select the relevant menu option (for example, **Export Policy**).
2.  The first window in the export wizard is a read-only window that displays the configuration items to be exported. The **Exporting**
    tree displays the selected tree node (in this case, policy), which is exported by default. **The following configuration items will also be exported**
    tree includes additional referenced items that are also exported by default along with the policy (for example, MIME types, regular expressions, and schemas).
3.  You can click **Finish**
    if this selection suits your requirements. Otherwise, click **Next**
    to refine the selection.
4.  In the next window, you can select optional configuration items for export. The **Additional configuration items that may be exported**
    tree on the left includes dependent items that are not exported by default. For example, these include the following:
    -   Outbound references: Configuration items directly referenced out from the export set to other configuration stores (for example, certificates, users, or external connections).
    -   Inbound references: Configuration items in other configuration stores that directly reference items in the export set.
    -   Associated configuration directly related to the export set (for example, remote hosts or relative paths).

    >
5.  To add an item for export, select it in the **Additional configuration that may be exported**
    tree on the left, and click **Add**.
6.  To remove an item for export, select it in the **Additional configuration that will be exported**
    tree on the right, and click **Remove**.

The original set of items in the **Additional configuration that will be exported**
tree cannot be removed. Only items added from the **Additional configuration that may be exported**
tree can be removed.

1.  By default, items displayed in the **Additional configuration that may be exported**
    tree are scoped to direct references to the export set (inbound, outbound, and associated). You can select **Display additional configuration that depends on items to be exported**
    to recursively add references to this tree when additional configuration items are added to the export set.
2.  Click **OK**
    to export the selected configuration.

### Referenced Policies\

When exporting a policy or policy container, by default, any policies referenced by the policy are included for export and displayed in the **Additional configuration that will be exported**
list.

</div>

<div id="p_general_export_entire_steps">

</div>
