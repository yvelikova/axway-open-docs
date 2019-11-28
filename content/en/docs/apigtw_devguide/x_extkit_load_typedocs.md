{
"title": "Load the TypeDocs",
"linkTitle": "Load the TypeDocs",
"date": "2019-11-27",
"description": "You can register the type definition for the **Jabber Filter** with the entity store using Policy Studio. When the entity type is registered, any time API Gateway needs to create an instance of the **Jabber Filter**, the instance contains the correct fields with the appropriate types."
}
﻿

You can register the type definition for the **Jabber Filter** with the entity store using Policy Studio. When the entity type is registered, any time API Gateway needs to create an instance of the **Jabber Filter**, the instance contains the correct fields with the appropriate types.

Register using Policy Studio
----------------------------

To register the type definition using Policy Studio, perform the following steps:

1.  Start Policy Studio, and connect to the API Gateway.
2.  Select **File > Import > Import Custom Filters**.
3.  Browse to the `Typeset.xml` file. A TypeSet file is used to group together one or more TypeDocs. This enables multiple TypeDocs to be added to the entity store in batch mode. The `JabberTypeSet.xml` file includes the following:
4.  ``` {space="preserve"}
    <typeSet>
        <!-- JabberFilter Typedoc -->
        <typedoc file="JabberFilterDesc.xml" />
    </typeSet>
    ```

5.  When you import the TypeSet, the workspace refreshes. The new filter is available in the filter list.
6.  To verify that the Jabber filter exists, select an existing policy in the Policy Studio tree, and you should see the **XMPP Filters** category in the palette, which contains the new custom **Jabber** filter.

<!-- -->

1.  Click the **Deploy** button in the toolbar to deploy the new custom filter.

You can also save the current configuration and deploy at a later point. For more information on managing deployments, see the
[API Gateway DevOps Deployment Guide](/bundle/APIGateway_77_PromotionGuide_allOS_en_HTML5/)
.

{{< alert title="Note" color="primary" >}}Another way to verify that your new filter has been installed is to use the ES Explorer. You can use the ES Explorer tool for browsing the entity types and entity instances that have been registered with the Entity Store. For more information, see [*Use the ES Explorer* on page 1](entity_store.htm#Use).{{< /alert >}}
