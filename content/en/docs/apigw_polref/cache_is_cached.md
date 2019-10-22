{
"title": "Check if attribute is cached",
"linkTitle": "Check if attribute is cached",
"date": "2019-10-17",
"description": "The **Is Cached?**\\nfilter looks up a named cache to see if a specified message attribute has already been cached. A message attribute (usually `message.key`) is used as the key to search for in the cache. If the lookup succeeds, the retrieved value overrides a specified message attribute, which is usually the `content.body`\\nattribute. "
}
﻿
<div id="p_cache_is_cached_over">

Overview
--------

The **Is Cached?**
filter looks up a named cache to see if a specified message attribute has already been cached. A message attribute (usually `message.key`) is used as the key to search for in the cache. If the lookup succeeds, the retrieved value overrides a specified message attribute, which is usually the `content.body`
attribute.

For example, if a response message for a particular request has already been cached, the response message overrides the request message body so that it can be returned to the client using the **Reflect**
filter.

For more information on how to configure this filter in the context of a caching policy, see
[Global caches](/csh?context=604&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_cache_is_cached_conf">

Configuration
-------------

**Name**:\
Enter a suitable name for this filter to display in a policy.

**Select Cache to Use**:\
Click the button on the right, and select the cache to lookup to find the attribute specified in the **Attribute containing key**
field below. The list of currently configured caches is displayed in the tree. To add a cache, right-click the **Caches**
tree node, and select **Add Local Cache**
or **Add Distributed Cache**. Alternatively, you can configure caches under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree. For more details, see
[Global caches](/csh?context=604&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Attribute containing key**:\
The message attribute entered here is used as the key to lookup in the cache. In the context of a caching policy, the attribute entered here *must*
be the same as the attribute specified in the **Attribute key**
field on the **Cache Attribute**
filter.

**Overwrite Attribute Name if Found**:\
Usually the `content.body`
is selected here so that value retrieved from the cache (which is usually a response message) overrides the request `content.body`
with the cached response, which can then be returned to the client using the **Reflect**
filter.

</div>
