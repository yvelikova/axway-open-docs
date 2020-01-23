{
"title": "Cache attribute",
"linkTitle": "Cache attribute",
"date": "2019-10-17",
"description": "The **Cache Attribute**\\nfilter allows you to configure what part of the message to cache. Typically, response messages are cached and so this filter is usually configured *after*\\n the routing filters in a policy. In this case, the `content.body`\\nattribute stores the response message body from the web service and so this message attribute should be selected in the **Attribute Name to Store**\\nfield."
}
﻿
<div id="p_cache_cache_attribute_over">

Overview
--------

The **Cache Attribute**
filter allows you to configure what part of the message to cache. Typically, response messages are cached and so this filter is usually configured *after*
the routing filters in a policy. In this case, the `content.body`
attribute stores the response message body from the web service and so this message attribute should be selected in the **Attribute Name to Store**
field.

For more information on how to configure this filter in a caching policy, see
[Global caches](/csh?context=604&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_cache_cache_attribute_conf">

Configuration
-------------

**Name**:\
Enter a name for this filter to display in a policy.

**Select Cache to Use**:\
Click the button on the right, and select the cache to store the attribute value. The list of currently configured caches is displayed in the tree. To add a cache, right-click the **Caches**
tree node, and select **Add Local Cache**
or **Add Distributed Cache**. Alternatively, you can configure caches under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree. For more details, see
[Global caches](/csh?context=604&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Attribute Key**:\
The value of the message attribute entered here acts as the key into the cache. In the context of a caching policy, it *must*
be the same as the attribute specified in the **Attribute containing key**
field on the **Is Cached?**
filter.

**Attribute Name to Store**:\
The value of the API Gateway message attribute entered here is cached in the cache specified in the **Cache to use**
field above.

</div>
