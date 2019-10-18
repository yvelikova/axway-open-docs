{
"title": "Retrieve WSDL files from a UDDI registry",
"linkTitle": "Retrieve WSDL files from a UDDI registry",
"date": "2019-10-17",
"description": "You can use WSDL files to register web services in the **Web Service Repository**\\nand to add WSDL documents and XML schemas to the global cache. Policy Studio can retrieve a WSDL file from the file system, from a URL, or from a UDDI registry. This topic explains how to retrieve a WSDL file from a UDDI registry. "
}
﻿
<div id="p_general_uddi_overview">

Overview
--------

You can use WSDL files to register web services in the **Web Service Repository**
and to add WSDL documents and XML schemas to the global cache. Policy Studio can retrieve a WSDL file from the file system, from a URL, or from a UDDI registry. This topic explains how to retrieve a WSDL file from a UDDI registry.

You can also browse a UDDI registry in Policy Studio directly without registering a WSDL file. Under the **APIs**
node in the tree, right-click the **Web Service Repository**
node, and select **Browse UDDI Registry**.

</div>

<div id="p_general_uddi_uddi_intro">

UDDI concepts
-------------

Universal Description, Discovery and Integration (UDDI) is an OASIS-led initiative that enables businesses to publish and discover web services on the Internet. A business publishes services that it provides to a public XML-based registry so that other businesses can dynamically look up the registry and discover these services. Enough information is published to the registry to enable other businesses to find services and communicate with them. In addition, businesses can also publish services to a private or semi-private registry for internal use.

A business registration in a UDDI registry includes the following components:

-   **Green Pages**:\
    Contains technical information about the services exposed by the business
-   **Yellow Pages**:\
    Categorizes the services according to standard taxonomies and categorization systems
-   **White Pages**:\
    Gives general information about the business, such as name, address, and contact information

You can search the UDDI registry according to a whole range of search criteria, which is of key importance to Policy Studio. You can search the registry to retrieve the WSDL file for a particular service. Policy Studio can then use this WSDL file to create a policy for the service, or to extract a schema from the WSDL to check the format of messages attempting to use the operations exposed by the Web service.

For a more detailed description of UDDI, see the UDDI specification. In the meantime, the next section gives high-level definitions of some of the terms displayed in the Policy Studio interface.

</div>

<div id="p_general_uddi_uddi">

UDDI definitions
----------------

Because UDDI terminology is used in Policy Studio windows, such as the **Import WSDL**
wizard, the following list of definitions explains some common UDDI terms. For more detailed explanations, see the UDDI specification.

**businessEntity**\
This represents all known information about a particular business (for example, name, description, and contact information). A `businessEntity`
can contain a number of `businessService`
entities. A `businessEntity`
may have an `identifierBag`, which is a list of name-value pairs for identifiers, such as Data Universal Numbering System (DUNS) numbers or taxonomy identifiers. A `businessEntity`
may also have a `categoryBag`, which is a list of name-value pairs used to tag the `businessEntity`
with classification information such as industry, product, or geographic codes. There is no mapping for a WSDL item to a `businessEntity`. When a WSDL file is published, you must specify a `businessEntity`
for the `businessService`.

**businessService**\
A `businessService`
represents a logical service classification, and is used to describe a web service provided by a business. It contains descriptive information in business terms outlining the type of technical services found in each `businessService`
element. A `businessService`
may have a `categoryBag`, and may contain a number of `bindingTemplate`
entities. In the WSDL to UDDI mapping, a `businessService`
represents a `wsdl:service`. A `businessService`
has a `businessEntity`
as its parent in the UDDI registry.

**bindingTemplate**\
A `bindingTemplate`
contains pointers to the technical descriptions and the access point URL of the web service, but does not contain the details of the service specification. A `bindingTemplate`
may contain references to a number of `tModel`
entities, which do include details of the service specification. In the WSDL to UDDI mapping, a `bindingTemplate`
represents a `wsdl:port`.

**tModel**\
A `tModel`
is a web service type definition, which is used to categorize a service type. A `tModel`
consists of a key, a name, a description, and a URL. `tModel`
s are referred to by other entities in the registry. The primary role of the `tModel`
is to represent a technical specification (for example, WSDL file). A specification designer can establish a unique technical identity in a UDDI registry by registering information about the specification in a `tModel`. Other parties can express the availability of web services that are compliant with a specification by including a reference to the `tModel`
in their `bindingTemplate`
data.

This approach facilitates searching for registered web services that are compatible with a particular specification. `tModel`s are also used in `identifierBag`
and `categoryBag`
structures to define organizational identity and various classifications. In this way, a `tModel`
reference represents a relationship between the keyed name-value pairs to the super-name, or namespace in which the name-value pairs are meaningful. A `tModel`
may have an `identifierBag`
and a `categoryBag`. In the WSDL to UDDI mapping, a `tModel`
represents a `wsdl:binding`
or `wsdl:portType`.

**Identifier**\
The purpose of identifiers in a UDDI registry is to enable others to find the published information using more formal identifiers such as DUNS numbers, Global Location Numbers (GLN), tax identifiers, or any other kind of organizational identifiers, regardless of whether these are private or shared.

The following are identification systems used commonly in UDDI registries:

| Identification System             | Name                            | tModel Key                                  |
|-----------------------------------|---------------------------------|---------------------------------------------|
| Dun and Bradstreet D-U-N-S Number | `dnb-com:D-U-N-S`               | `uuid:8609C81E-EE1F-4D5A-B202-3EB13AD01823` |
| Thomas Registry Suppliers         | `thomasregister-com:supplierID` | `uuid:B1B1BAF5-2329-43E6-AE13-BA8E97195039` |

**Category**\
Entities in the registry may be categorized according to categorization system defined in a `tModel`
(for example, geographical region). The `businessEntity`, `businessService`, and `tModel`
types have an optional `categoryBag`. This is a collection of categories, each of which has a name, value, and `tModel`
key.

The following are categorization systems used commonly in UDDI registries:

| Categorization System                                              | Name                  | tModel Key                                  |
|--------------------------------------------------------------------|-----------------------|---------------------------------------------|
| UDDI Type Taxonomy                                                 | `uddi-org:types`      | `uuid:C1ACF26D-9672-4404-9D70-39B756E62AB4` |
| North American Industry Classification System (NAICS) 1997 Release | `ntis-gov:naics:1997` | `uuid:C0B9FE13-179F-413D-8A5B-5004DB8E5BB2` |

<div>

### Example tModel mapping for WSDL portType

The following shows an example `tModel`
mapped for a WSDL `portType`:

    <tModel tModelKey="uuid:e8cf1163-8234-4b35-865f-94a7322e40c3">
      <name>
        StockQuotePortType
      </name>
      <overviewDoc>
        <overviewURL>
          http://location/sample.wsdl
        </overviewURL>
      </overviewDoc>
      <categoryBag>
        <keyedReference tModelKey="uuid:d01987d1-ab2e-3013-9be2-2a66eb99d824" keyName="portType namespace"
          keyValue="http://example.com/stockquote/" />
        <keyedReference tModelKey="uuid:6e090afa-33e5-36eb-81b7-1ca18373f457" keyName="WSDL type"
          keyValue="portType" />
      </categoryBag>
    </tModel>

In this example, the `tModel`
name is the same as the local name of the WSDL `portType`
(in this case, `StockQuotePortType`), and the `overviewURL`
links to the WSDL file. The `categoryBag`
specifies the WSDL namespace, and shows that the `tModel`
is for a `portType`.

</div>

</div>

<div id="p_general_uddi_conf">

Configure a registry connection
-------------------------------

You first need to select the UDDI registry to search for WSDL files. Complete the following fields to select or add a UDDI registry:

**Select Registry**:\
Select an existing UDDI registry to browse for WSDL files from the **Registry**
drop-down list. To configure the location of a new UDDI registry, click **Add**. Similarly, to edit an existing UDDI registry location, click **Edit**. Then configure the fields in the **Registry Connection Details**
dialog. For more details, see *Connect to a UDDI registry* on page 1.

**Select Locale**:\
You can select an optional language locale from this list. The default is `No Locale`.

</div>

<div id="p_general_uddi_wsdl_search">

WSDL search
-----------

When you have configured a UDDI registry connection, you can search the registry using a variety of different search options on the **Search**
tab. **WSDL Search**
is the default option. This enables you to search for the UDDI entries that the WSDL file is mapped to. You can also do this using the **Advanced Search**
option. The following different types of WSDL searches are available:

**WSDL portType (UDDI tModel)**:\
Searches for a `uddi:tModel`
that corresponds to a `wsdl:portType`. You can enter optional search criteria for specific categories in the `uddi:tModel`
(for example, **Namespace of portType**).

**WSDL binding (UDDI tModel)**:\
Searches for a `uddi:tModel`
that corresponds to a `wsdl:binding`. You can enter optional search criteria for specific categories in the `uddi:tModel`
(for example, **Name of binding**, or **Binding Transport Type**).

**WSDL service (UDDI businessService)**:\
Searches for a `uddi:businessService`
that corresponds to a `wsdl:service`. You can enter optional search criteria for specific categories in the `uddi:businessService`
(for example, **Namespace of service**).

**WSDL port (UDDI bindingTemplate)**:\
Searches for a `uddi:bindingTemplate`
that corresponds to a `wsdl:port`.This search is more complex because a `serviceKey`
is required to find a `uddi:bindingTemplate`. This means that at least two queries are carried out, first to find the `uddi:businessService`, and another to find the `uddi:bindingTemplate`.

For example, a `bindingTemplate`
contains a reference to the `tModel`
for the `wsdl:portType`. You can use the `tModel`
key to find all implementations (`bindingTemplate`s) for that `wsdl:portType`. The search looks for `businessService`s that have `bindingTemplate`s that refer to the `tModel`
for the `wsdl:portType`. Then with the `serviceKey`, you can find the `bindingTemplate`
that refers to the `tModel`
for the `wsdl:portType`.

In all cases, click **Next**
to start the WSDL search. The **Search Results**
tree shows the `tModel`
URIs as top-level nodes. These URIs are all WSDL URIs, and you can use these to generate policies on import by selecting the URI, and clicking the **Finish**
button.

You can click any of the nodes in the tree to display detailed properties about that node in the table below the **Search Results**
tree. The properties listed depend on the type of the node that is selected. You can also right-click a node to edit it (for example, add a description, add a category or identifier node, or delete a duplicate node).

</div>

<div id="p_general_uddi_quick_search">

Quick search
------------

The **Quick Search**
option enables you to search the UDDI registry for a specific `tModel`
name or category.

**tModel Name**:\
You can enter a **tModel Name**
for a fine-grained search. This is a partial or full name pattern with wildcard searching as specified by the *SQL-92 LIKE*
specification. The wildcard characters are percent `%`, and underscore `_`, where an underscore matches any single character and a percent matches zero or more characters.

**Categories**:\
You can select one of the following options to search by:

| **wsdlSpec**                       | Search for `tModel`s classified as `wsdlSpec`                      
  (`uddi-org:types`                                                   
  category set to `wsdlSpec`). This is the default.                   |
|------------------------------------|--------------------------------------------------------------------|
| **Reusable WS-Policy Expressions** | Search for `tModel`s classified as reusable WS-Policy Expressions. |
| **All**                            | Search for all `tModel`s.                                          |

Click **Next**
to start the search. The **Search Results**
tree shows the `tModel`
URIs as top-level nodes. These URIs are all WSDL URIs, and you can use these to generate policies on import by selecting the URI, and clicking the **Finish**
button.

You can click any of the nodes in the tree to display detailed properties about that node in the table below the **Search Results**
tree. The properties listed depend on the type of the node that is selected. You can also right-click a node to edit it (for example, add a description, add a category or identifier node, or delete a duplicate node).

</div>

<div id="p_general_uddi_name_search">

Name search
-----------

The **Name Search**
option enables you to search for a `businessEntity`, `businessService`, or `tModel`
by name. In the **Select Registry Data Type**, select one of the following UDDI entity levels to search for:

-   **businessEntity**
-   **businessService**
-   **tModel**

You can enter a name in the **Name**
field to narrow the search. You can also use wildcards in the name. The name applies to a `businessEntity`, `businessService`, or `tModel`, depending on which registry entity type has been selected. If no name is entered, all entities of the selected type are retrieved.

Click the **Search**
button to start the search. The search results display the matching entities in the tree. For example, if you enter `MyTestBusiness`
for **Name**, and select **businessEntity**, this searches for a `businessEntity`
with the name `MyTestBusiness`. Child nodes of the matching `businessEntity`
nodes are also shown. `tModel`s are displayed in the results if any child nodes of the `businessEntity`
refer to `tModel`s. Only referred to `tModel`s are displayed. The same applies if you search for a `businessService`. If you select `tModel`, and search for `tModel`s, only `tModel`s are displayed.

{{< alert title="Note" color="primary" >}}The `tModel`
URIs shown in the resulting tree may not all be categorized as `wsdlSpec`
according to the `uddi-org:types`
categorization system. You can choose to load any of these URIs as a WSDL file, but you are warned if it is not categorized as `wsdlSpec`.{{< /alert >}}
As before, you can click any node in the results tree to display properties about that node in the table. You can also right-click a node to edit it (for example, add a description, add a category or identifier node, or delete a duplicate node).

<div>

### UDDI v3 name searches

By default, a UDDI v3 name search is an exact match. To perform a search using wildcards (for example, `%`, `_`, and so on), you must select the **approximateMatch**
find qualifier in the **Advanced Options**
tab. This applies to anywhere you enter a name for search purposes (for example, **Name Search**, **Quick Search**, and **Advanced Search**).

</div>

</div>

<div id="p_general_uddi_advance_search">

Advanced search
---------------

The **Advanced Search**
option enables you to search the UDDI registry using any combination of **Names**, **Keys**, **tModels**, **Discovery URLs**, **Categories**, and **Identifiers**. You can also specify the entity level to search for in the tree. All of these options combine to provide a very powerful search facility. You can specify search criteria for any of the categories listed above by right-clicking the folder node in the **Enter Search Criteria**
tree, and selecting the **Add**
menu option. You can enter more than one search criteria of the same type (for example, two **Key**
search criteria).

{{< alert title="Note" color="primary" >}}The `tModel`
URIs shown in the resulting tree may not all be categorized as `wsdlSpec`
according to the `uddi-org:types`
categorization system. You can choose to load any of these URIs as a WSDL file, but you are warned if it is not categorized as `wsdlSpec`.{{< /alert >}}
The following options enable you to add a search criteria for each of the types listed in the **Enter Search Criteria**
tree. All search criteria are configured by right-clicking the folder node, and selecting the **Add**
menu option.

**Names**:\
Enter a name to be used in the search in the **Name**
field in the **Name Search Criterion**
dialog. For example, the name could be the **businessEntity**
name. The name is a partial or full name pattern with wildcards allowed as specified by the *SQL-92 LIKE*
specification. The wildcard characters are percent `%`, and underscore `_`, where an underscore matches any single character and a percent matches zero or more characters. A name search criterion can be used for `businessEntity`, `businessService`, and `tModel`
level searches.

**Keys**:\
In the **Key Search Criterion**
dialog, you can specify a key to search the registry for in the **Key**
field. The key value is a Universally Unique Identifier (UUID) value for a registry object. You can use the **Key Search Criterion**
on all levels of searches. If one or more keys are specified with no other search criteria, the keys are interpreted as the keys of the selected type of registry object and used for a direct lookup, instead of a find/search operation. For example, if you enter `key1`
and `key2`, and select the `businessService`
entity type, the search retrieves the `businessService`
object with key `key1`, and another `businessService`
with key `key2`.

If you enter a key with other search criteria, a key criterion is interpreted as follows:

-   For a businessService entity lookup, the key is the `businessKey`
    of the services.
-   For a `bindingTemplate`
    entity lookup, the key is the `serviceKey`
    of the binding templates.
-   Not applicable for any other object type.

**tModels**:\
You can enter a key in the **tModel Key**
field on the **tModel Search Criterion**
window. The key entered should correspond to the UUID of the `tModel`
associated with the type of object you are searching for. A `tModel`
search criterion may be used for `businessEntity`, `businessService`, and `bindingTemplate`
level searches.

**Discovery URLs**:\
Enter a URL in the **Discovery URL**
field on the **Discovery URL Search Criterion**
dialog. The **Use Type**
field is optional, but can be used to further fine-grain the search by type. You can use a Discovery URL search criterion for `businessEntity`
level searches only.

**Categories**:\
Select a previously configured categorization system from the **Type**
drop-down list in the **Category Search Criterion**
dialog. This prepopulated with a list of common categorization systems. You can add a new categorization system using the **Add**
button.

In the **Add/Edit Category**
dialog, enter a **Name**, **Description**, and **UUID**
for the new category type in the fields provided. When the categorization system has been selected or added, enter a value to search for in the **Value**
field. The **Name**
field is optional.

**Identifiers**:\
Select a previously configured identification system from the **Type**
drop-down list in the **Identifier Search Criterion**
dialog. This is prepopulated with well-known identification systems. To add a new identification system, click the **Add**
button.

In the **Add/Edit Identifier**
dialog, enter a **Name**, **Description**, and **UUID**
for the new identifier in the fields provided.

**Select Registry Data Type**:\
Select one of the following UDDI entity levels to search for:

-   **businessEntity**
-   **businessService**
-   **bindingTemplate**
-   **tModel**

The search also displays child nodes of the matching nodes. `tModel`s are also returned if they are referred to.

</div>

<div id="p_general_uddi_options">

Advanced options
----------------

This tab enables you to configure various aspects of the search conditions specified on the previous tabs. The following options are available:

| UDDI Find Qualifier                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **andAllKeys**                     | By default, identifier search criteria are ORed together. This setting ensures that they are ANDed instead. This is already the default for `categoryBag`                                                                                                                                                                                                                                                                                                                            
  and `tModelBag`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **approximateMatch (v3)**          | This applies to a UDDI v3 registry only. Specifies wildcard searching as defined by the `uddi-org:approximatematch:SQL99 tModel`, which means approximate matching where percent sign (`%`) indicates any number of characters, and underscore (`_`) indicates any single character. The backslash character (`\`) is an escape character for the percent sign, underscore and backslash characters. This option adjusts the matching behavior for `name`, `keyValue`, and `keyName` 
  (where applicable).                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **binarySort (v3)**                | This applies to a UDDI v3 registry only. Enables greater speed in sorting, and causes a binary sort by name, as represented in Unicode codepoints.                                                                                                                                                                                                                                                                                                                                   |
| **bindingSubset (v3)**             | This applies to a UDDI v3 registry only. Specifies that the search uses only `categoryBag`                                                                                                                                                                                                                                                                                                                                                                                           
  elements from contained `bindingTemplate`                                                                                                                                                                                                                                                                                                                                                                                                                                             
  elements in the registered data, and ignores any entries found in the `categoryBag`                                                                                                                                                                                                                                                                                                                                                                                                   
  that are not direct descendents of registered `businessEntity`                                                                                                                                                                                                                                                                                                                                                                                                                        
  or `businessService`                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  elements.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **caseInsensitiveMatch (v3)**      | This applies to a UDDI v3 registry only. Specifies that that the matching for `name`, `keyValue`, and `keyName`                                                                                                                                                                                                                                                                                                                                                                      
  (where applicable) should be performed without regard to case.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **caseInsensitiveSort (v3)**       | This applies to a UDDI v3 registry only. Specifies that the result set should be sorted without regard to case. This overrides the default case sensitive sorting behavior.                                                                                                                                                                                                                                                                                                          |
| **caseSensitiveMatch (v3)**        | This applies to a UDDI v3 registry only. Specifies that that the matching for `name`, `keyValue`, and `keyName`                                                                                                                                                                                                                                                                                                                                                                      
  (where applicable) should be case sensitive. This is the default behavior.                                                                                                                                                                                                                                                                                                                                                                                                            |
| **caseSensitiveSort (v3)**         | This applies to a UDDI v3 registry only. Specifies that the result set should be sorted with regard to case. This is the default behavior.                                                                                                                                                                                                                                                                                                                                           |
| **combineCategoryBags**            | Makes the `categoryBag`                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  entries of a `businessEntity`                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  behave as if all `categoryBag`                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  s found at the `businessEntity`                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  level and in all contained or referenced `businessService`                                                                                                                                                                                                                                                                                                                                                                                                                            
  s are combined. Searching for a category yields a positive match on a registered business if any of the `categoryBag`s contained in a `businessEntity`                                                                                                                                                                                                                                                                                                                                
  (including the `categoryBag`s in contained or referenced `businessService`s) contain the filter criteria.                                                                                                                                                                                                                                                                                                                                                                             |
| **diacriticInsensitiveMatch (v3)** | This applies to a UDDI v3 registry only. Specifies that matching for `name`, `keyValue`, and `keyName`                                                                                                                                                                                                                                                                                                                                                                               
  (where applicable) should be performed without regard to diacritics. Support for this qualifier by nodes is optional.                                                                                                                                                                                                                                                                                                                                                                 |
| **diacriticSensitiveMatch (v3)**   | This applies to a UDDI v3 registry only. Specifies that matching for `name`, `keyValue`, and `keyName`                                                                                                                                                                                                                                                                                                                                                                               
  (where applicable) should be performed with regard to diacritics. This is the default behavior.                                                                                                                                                                                                                                                                                                                                                                                       |
| **exactMatch (v3)**                | This applies to a UDDI v3 registry only. Specifies that only entries with `name`, `keyValue`, and `keyName`                                                                                                                                                                                                                                                                                                                                                                          
  (where applicable) that exactly match the name argument passed in, after normalization, are returned. This qualifier is sensitive to case and diacritics where applicable. This is the default behavior.                                                                                                                                                                                                                                                                              |
| **exactNameMatch (v2)**            | This applies to a UDDI v2 registry only. Specifies that the name entered as part of the search criteria must exactly match the name specified in the UDDI registry.                                                                                                                                                                                                                                                                                                                  |
| **orAllKeys**                      | By default, `tModel`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  and category search criteria are ANDed. This setting ORs these criteria instead.                                                                                                                                                                                                                                                                                                                                                                                                      |
| **orLikeKeys**                     | When a bag container contains multiple `keyedReference`                                                                                                                                                                                                                                                                                                                                                                                                                              
  elements (`categoryBag`                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  or `identifierBag`), any `keyedReference`                                                                                                                                                                                                                                                                                                                                                                                                                                             
  filters from the same namespace (for example, with the same `tModelKey`                                                                                                                                                                                                                                                                                                                                                                                                               
  value) are ORed together rather than ANDed. For example, this enables you to search for `any of these four values from this namespace, and any of these two values from this namespace`.                                                                                                                                                                                                                                                                                              |
| **serviceSubset**                  | Causes the component of the search that involves categorization to use only the `categoryBag`s from directly contained or referenced `businessService`s in the registered data. The search results return only those businesses that match based on this modified behavior, in conjunction with any other search arguments provided.                                                                                                                                                 |
| **signaturePresent (v3)**          | This applies to a UDDI v3 registry only. This restricts the result to entities that contain, or are contained in, an XML Digital `Signature`                                                                                                                                                                                                                                                                                                                                         
  element. The `Signature`                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  element should be verified by the client. This option, or the presence of a `Signature`                                                                                                                                                                                                                                                                                                                                                                                               
  element, should only be used to refine a search result, and should not be used as a verification mechanism by UDDI clients.                                                                                                                                                                                                                                                                                                                                                           |
| **sortByDateAsc (v3)**             | This applies to a UDDI v3 registry only. Sorts the results alphabetically in order of ascending date.                                                                                                                                                                                                                                                                                                                                                                                |
| **sortByDateDsc (v3)**             | This applies to a UDDI v3 registry only. Sorts the results alphabetically in order of descending date.                                                                                                                                                                                                                                                                                                                                                                               |
| **sortByNameAsc**                  | Sorts the results alphabetically in order of ascending name.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **sortByNameDsc**                  | Sorts the results alphabetically in order of descending name.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **suppressProjectedServices (v3)** | This applies to a UDDI v3 registry only. Specifies that service projections must not be returned when searching for services or businesses. This option is enabled by default when searching for a service without a `businessKey`.                                                                                                                                                                                                                                                  |
| **UTS-10 (v3)**                    | This applies to a UDDI v3 registry only. Specifies sorting of results based on the Unicode Collation Algorithm on elements normalized according to Unicode Normalization Form C. A sort is performed according to the Unicode Collation Element Table in conjunction with the Unicode Collation Algorithm on the name field, and normalized using Unicode Normalization Form C. Support for this qualifier by nodes is optional.                                                     |

</div>

<div id="p_general_uddi_publish">

Publish
-------

Click the **Publish**
radio button to view the **Published UDDI Entities Tree View**. This enables you to manually publish UDDI entities to the specified UDDI registry (for example, `businessEntity`, `businessService`, `bindingTemplate`, and `tModel`
entities). You must already have the appropriate permissions to write to the UDDI registry.

<div>

### Add a businessEntity

To add a business, perform the following steps:

1.  Right-click the tree view, and select **Add businessEntity**.
2.  In the **Business**
    dialog, enter a **Name**
    and **Description**
    for the business. Click **OK**.
3.  You can right-click the new `businessEntity`
    node to add child UDDI entities in the tree (for example, `businessService`, `Category`, and `Identifier`
    entities).

</div>

<div>

### Add a tModel

To add a `tModel`
, perform the following steps:

1.  Right-click the tree view, and select **Add tModel**.
2.  In the **tModel**
    dialog, enter a **Name**, **Description**, and **Overview URL**
    for the `tModel`
    . For example, you can use the **Overview URL**
    to specify the location of a WSDL file. Click **OK**.
3.  You can right-click the new `tModel`
    node to add child UDDI entities in the tree (for example, `Category`
    and `Identifier`
    entities).

</div>

As before, you can click any node in the results tree to display properties about that node in the table. You can also right-click a node to edit it (for example, add a description, add a category or identifier node, or delete a duplicate node). At any stage, you can click the **Clear**
button on the right to clear the entire contents of the tree. This does not delete the contents of the registry.

For more details on UDDI entities such as `businessEntity`
and `tModel`, see [*UDDI definitions* on page 1](#UDDI). For details on how to publish web services automatically using a wizard, see [*Publish WSDL files to a UDDI registry* on page 1](general_uddi_publish.htm).

</div>
