{
"title": "Transform with data map",
"linkTitle": "Transform with data map",
"date": "2019-10-17",
"description": "Data maps enable you to define how to map XML and JSON messages to other XML and JSON message formats. You can use the **Execute Data Map** filter to execute a data map as part of a policy. This filter is available in the **Conversion** category in Policy Studio"
}
﻿

Data maps enable you to define how to map XML and JSON messages to other XML and JSON message formats. You can use the **Execute Data Map** filter to execute a data map as part of a policy. This filter is available in the **Conversion** category in Policy Studio

Configuration
-------------

Configure the following fields:

**Name**:

Enter a name that reflects the role of this filter in the policy.

**Data Map**:

Click the browse button to view the list of available data maps and select the required data map.

You can create data maps under the **Resources > Data Maps** node in the Policy Studio tree. For more information, see
[Manage data maps](/csh?context=646&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Default Encoding**:

Enter the default encoding for the data map. The default value is `UTF-8`.

**Source Document**:

This section is automatically populated with the input schemas when you select a data map. The ordering of the schemas in the filter matches the ordering in the data map.

You must specify the message attribute to map to the inputs of each schema. Click **Edit** to edit the message attributes.

-   If you select a data map with a single input schema, the message attribute defaults to `content.body`.
-   If you select a data map with multiple input schemas, you must specify the message attribute to map to the inputs of each schema. For example:

![Execute data map source document](/Images/PolDevGuide/Mapper/execute_data_map_filter_src_doc.png)

**External Parameters**:

This section is automatically populated when you select a data map. Click **Edit** to edit the expression for each parameter. For more details on parameters, see the
[API Gateway Visual Mapper User Guide](/bundle/API_VisualMapper_762_UserGuide_allOS_en_HTML5)
.

Example policy
--------------

For an example of how to use a data map in a policy, see
[Manage data maps](/csh?context=646&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
