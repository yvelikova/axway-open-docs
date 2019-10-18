{
"title": "Publish WSDL files to a UDDI registry",
"linkTitle": "Publish WSDL files to a UDDI registry",
"date": "2019-10-17",
"description": "You can register web services in the **Web Service Repository**\\nusing Web Services Description Language (WSDL) files. Policy Studio can retrieve a WSDL file from the file system, from a URL, or from a UDDI registry. When you have registered a WSDL file in the web service repository, you can use the **Publish WSDL**\\nwizard to publish the WSDL file to a UDDI registry. You can also use the **Find WSDL**\\nwizard to search for the selected WSDL file in a UDDI registry. This topic explains how to perform both of these tasks."
}
﻿
<div id="p_general_uddi_publish_overview">

Overview
--------

You can register web services in the **Web Service Repository**
using Web Services Description Language (WSDL) files. Policy Studio can retrieve a WSDL file from the file system, from a URL, or from a UDDI registry. When you have registered a WSDL file in the web service repository, you can use the **Publish WSDL**
wizard to publish the WSDL file to a UDDI registry. You can also use the **Find WSDL**
wizard to search for the selected WSDL file in a UDDI registry. This topic explains how to perform both of these tasks.

For background information and an introduction to general UDDI concepts, see [*Retrieve WSDL files from a UDDI registry* on page 1](general_uddi.htm). For details on how to register WSDL files, see [*Manage web services* on page 1](general_ws_repository.htm).

</div>

<div id="p_general_uddi_search_wiz">

Find WSDL files
---------------

You can search a UDDI registry to determine if a web service is already published in the registry. To search for a selected WSDL file in a specified UDDI registry, perform the following steps:

1.  In the Policy Studio tree, expand the **APIs** > **Web Service Repository**
    node.
2.  Right-click a WSDL node and select **Find in UDDI Registry**
    to launch the **Find WSDL**
    wizard.
3.  In the **Find WSDL**
    dialog, select a UDDI registry from the list. You can add or edit a registry connection using the buttons provided. For details on configuring a registry connection, see [*Connect to a UDDI registry* on page 1](general_uddi_connection.htm).
4.  You can select an optional language **Locale**
    from the list. The default is `No Locale`.
5.  Click **Next**. The **WSDL Found in UDDI Registry**
    window displays the result of the search in a tree. The **Node Counts**
    field shows the total numbers of each UDDI entity type returned from the search (`businessEntity`, `businessService`, `bindingTemplate`, and `tModel`).
6.  You can right-click to edit a UDDI entity node in the tree, if necessary (for example, add a description, add a category or identifier node, or delete a duplicate node).
7.  Click the **Refresh**
    button to run the search again.
8.  Click **Finish**.

The **Find WSDL**
wizard provides is a quick and easy way of finding a selected WSDL file published in a UDDI registry. For more fine-grained ways of searching a UDDI registry (for example, for specific WSDL or UDDI entities), see [*Retrieve WSDL files from a UDDI registry* on page 1](general_uddi.htm).

</div>

<div id="p_general_uddi_publish_wiz">

Publish WSDL files
------------------

To publish a WSDL file registered in the **Web Service Repository**
to a UDDI registry, perform the following steps:

1.  Expand the **API** > **Web Service Repository**
    tree node.
2.  Right-click a WSDL node and select **Publish WSDL to UDDI Registry**
    to launch the **Publish WSDL Wizard**.
3.  Perform the steps in the wizard as described in the next sections.

</div>

<div id="p_general_uddi_publish_wiz_1">

### Step 1: Enter virtualized service address and WSDL URL for publishing in UDDI registry

When you register a WSDL file in the web service repository, API Gateway exposes a *virtualized*
version of the web service. The host and port for the web service are changed dynamically to point to the machine running API Gateway. The client can then retrieve the WSDL for the virtualized web service from API Gateway, without knowing its real location.

This window enables you to optionally override the service address locations in the WSDL file with the virtualized addresses exposed by API Gateway. You can also override the WSDL URL published to the UDDI registry.

Complete the following fields:

**Mapping of Service Addresses to Virtualized Service Addresses**:\
You can enter multiple virtual service address mappings for each service address specified in the selected WSDL file. If you do not enter a mapping, the original address location in the WSDL file is published to the UDDI registry. If one or more mappings are provided, corresponding UDDI `bindingTemplates`
are published in the UDDI registry, each with a different access point (virtual service address). This enables you to publish the access points of a service when it is exposed on different ports/schemes using API Gateway.

When you launch the wizard, the mapping table is populated with a row for each `wsdl:service`, `wsdl:port`, `soap:address`, `soap12:address`, or `http:address`
in the selected WSDL file. To modify an existing entry, select a row in the table, and click **Edit**. Alternatively, click **Add**
to add an entry. In the **Virtualize Service Address**
dialog, enter the virtualized service address. For example, if API Gateway is running on a machine named `roadrunner`, the new URL on which the web service is available to clients is: `http://roadrunner:8080/TestServices/StockQuote.svc`.

**WSDL URL**:\
You can enter a WSDL URL to be published to the UDDI registry in the corresponding `tModel overviewURL`
fields. If you do not enter a URL, the WSDL URL in the **Original WSDL URL**
field is used. For example, an endpoint service is at `http://coyote.qa.acmecorp.com/TestService/StockQuote.svc`. Assume this service is virtualized in API Gateway and exposed at `http://HOST:8080/TestService/StockQuote.svc`, where `HOST`
is the machine on which API Gateway is running. The `http://HOST:8080/TestService/StockQuote.svc`
URL is entered as the virtual service address, and `http://HOST:8080/TestService/StockQuote.svc?WSDL`
is entered as the WSDL URL to publish.

{{< alert title="Note" color="primary" >}}If incorrect URLs are published, you can edit these in the UDDI tree in later steps in this wizard, or when browsing the registry. {{< /alert >}}
Click **Next**
when finished.

</div>

<div id="p_general_uddi_publish_wiz_2">

### Step 2: View WSDL to UDDI mapping result

You can use this window to view the unpublished mapping of the WSDL file to a UDDI registry structure. You can also edit a specific mapping in the tree view. This window includes the following fields:

**Mapping of WSDL to a UDDI Registry Structure**:\
The unpublished mappings from the WSDL file to the UDDI registry are displayed in the table. For example, this includes the relevant `businessService`, `bindingTemplate`, `tModel`, `Identifier`, `Category`
mappings. You can select a tree node to display its values in the table below.

You can optionally edit the values for a specific mapping in the table (for example, update a value, or add a key or description for the selected UDDI entity). You can also right-click a tree node to edit it (for example, add a description, add a category or identifier node, or delete a duplicate node).

**Retrieve service address from WSDL instead of bindingTemplate access point**:\
When selected, this ensures that the `bindingTemplate`
access point does not contain the service port address, and is set to `WSDL`
instead. This means that you must retrieve the WSDL to get the service access point. When selected, the `bindingTemplate`
contains an additional `tModelInstanceInfo`
that points to the `uddi:uddi.org.wsdl:address tModel`. This option is not selected by default.

**Include WS-Policy as**:\
When selected, you can choose one of the following options to specify how WS-Policy statements in the WSDL file are included in the registry:

|                                 |                                                                                                                                                                                                                                                                                                                                              |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Remote Policy Expressions**   | Each WS-Policy URL in the WSDL that is associated with a mapped UDDI entity is accessed remotely. For example, a `businessService`                                                                                                                                                                                                           
  is categorized with the `uddi:w3.org:ws-policy:v1.5:attachment:remotepolicyreference tModel`                                                                                                                                                                                                                                                  
  where the `keyValue`                                                                                                                                                                                                                                                                                                                          
  holds the remote WS-Policy URL. This is the default option.                                                                                                                                                                                                                                                                                   |
| **Reusable Policy Expressions** | Each WS-Policy URL in the WSDL that is associated with a mapped UDDI entity has a separate `tModel`                                                                                                                                                                                                                                          
  published for it. Other UDDI entities (for example, `businessService`) can then refer to these `tModel`s. These are reusable because UDDI entities published in the future can also use these `tModel`s. You can do this in [*Step 4:Select a duplicate publishing approach* on page 1](#Step), by selecting the **Reuse duplicate tModels**  
  option.                                                                                                                                                                                                                                                                                                                                       |

Click **Next**
when finished.

</div>

<div id="p_general_uddi_publish_wiz_3">

### Step 3: Select a registry for publishing

Use this window to select a UDDI registry in which to publish the WSDL to UDDI mapping. Complete the following fields:

**Select Registry**:\
Select an existing UDDI registry to browse for WSDL files from the **Registry**
drop-down list. To configure the location of a new UDDI registry, click **Add**. Similarly, to edit an existing UDDI registry location, click **Edit**. For details on how to configure a UDDI connection, see [*Connect to a UDDI registry* on page 1](general_uddi_connection.htm).

**Select Locale**:\
You can select an optional language locale from this list. The default is `No Locale`.

Click **Next**
when finished.

</div>

<div id="p_general_uddi_publish_wiz_4">

### Step 4: Select a duplicate publishing approach

This window is displayed only if mapped WSDL entities already exist in the UDDI registry. Otherwise, the wizard skips to [*Step 5:Create or search for business* on page 1](#Step4). This window includes the following fields:

**Select Duplicate Mappings**:\
The **Mapped WSDL to publish**
pane on the left displays the unpublished WSDL mappings from [*Step 2: View WSDL to UDDI mapping result* on page 1](#Step2). The **Duplicates for WSDL mappings in UDDI registry**
pane on the right displays the nodes already published in the registry. The **Node List**
at the bottom right shows a breakdown of the duplicate nodes.

**Edit Duplicate Mappings**:\
You can eliminate duplicate mappings by right-clicking a tree node in the right or left pane, and selecting edit to update a specific mapping in the dialog. Select the **Refresh**
button on the right to run the search again, and view the updated **Node List**. Alternatively, you can configure the options in the next field.

**Select Publishing Approach for Duplicate Entries**:\
Select one of the following options:

|                             |                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Reuse duplicate tModels** | Publishes the selected entries from the tree on the left, and reuses the selected duplicate entries in the tree on the right. This is the default option. Some or all duplicate `tModel`s (for example, for `portType`, `binding`, and reusable WS-Policy expressions) that already exist in the registry can be reused.                                                           
                                                                                                                                                                                                                                                                                                                                                                                      
  This means that a new `businessService`                                                                                                                                                                                                                                                                                                                                             
  that points to existing `tModel`s is published. Any entries selected on the left are published, and any referred to `tModel`s on the left now point to selected duplicate `tModel`s on the right. By default, this option selects all `businessServices`                                                                                                                            
  on the left, and all duplicate `tModel`s on the right. If there is more than one duplicate `tModel`s, only the first is selected.                                                                                                                                                                                                                                                   |
| **Overwrite duplicates**    | Publishes the selected entries from the tree on the left, and overwrites the selected duplicate entries in the tree on the right. When a UDDI entity is overwritten, its UUID key stays the same, but all the data associated with it is overwritten. This is not just a transfer of additions or differences. You can also overwrite some duplicates and create some new entries. 
                                                                                                                                                                                                                                                                                                                                                                                      
  By default, this option selects all `businessService`s and `tModel`s on the left and all duplicate `businessService`s and `tModel`s on the right. If there is more than one duplicate, only the first is selected. The default overwrites all selected duplicates and does not create any new UDDI entries, unless there is a new referred to `tModel`                              
  (for example, for a reusable WS-Policy expression).                                                                                                                                                                                                                                                                                                                                 |
| **Ignore duplicates**       | Publishes the selected entries from the tree on the left, and ignores all duplicates. You can proceed to publish the mapped WSDL to UDDI data. New UDDI entries are created for each item that is selected in the tree on the left.                                                                                                                                                |

Click **Next**
when finished.

{{< alert title="Note" color="primary" >}}If you select duplicate `businessService`s in the tree, and select **Overwrite duplicates**, the wizard skips to [*Step 6:Publish WSDL* on page 1](#Step3) when you click **Next**.{{< /alert >}}

</div>

<div id="p_general_uddi_publish_wiz_5">

### Step 5: Create or search for business

Use this window to specify a `businessEntity`
for the web service. You can create a new `businessEntity`
or search for an existing one in the UDDI registry. Complete the following fields:

**Create a new businessEntity**:\
This is the default option. Enter a **Name**
and **Description**
for the `businessEntity`, and click **Publish**.

**Search for an existing businessEntity**:\
To search for an existing `businessEntity`
name, perform the following steps:

1.  Select the **Search for an existing businessEntity in the UDDI registry**
    option.
2.  In the **Search**
    tab, ensure the **Name Search**
    option is selected.
3.  Enter a **Name**
    option (for example, `Acme Corporation`).

Alternatively, you can select the **Advanced Search**
option to search by different criteria such as **Keys**, **Categories**, or **tModels**. You can also select a range of search options on the **Advanced**
tab (for example, **Exact match**, **Case sensitive**, or **Service subset**). For more details, see [*Retrieve WSDL files from a UDDI registry* on page 1](general_uddi.htm).

The **Node Counts**
field shows the total numbers of each UDDI entity type returned from the search (`businessEntity`, `businessService`, `bindingTemplate`,and `tModel`).

Click **Next**
when finished.

</div>

<div id="p_general_uddi_publish_wiz_6">

### Step 6: Publish WSDL

Use this to publish the WSDL to the UDDI registry.

**Selected businessEntity for Publishing**:\
This field displays the name and `tModel`
key of the `businessEntity`
to be published. Click the **Publish WSDL**
button on the right.

**Published WSDL**:\
This field displays the tree of the UDDI mapping for the WSDL file. You can right-click to edit or delete any nodes in the tree if necessary, and click **Refresh**
to run the search again. Click **Publish WSDL**
to publish your updates.

Click **Finish**.

</div>
