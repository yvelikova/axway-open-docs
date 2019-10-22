{
"title": "Remove cached attribute",
"linkTitle": "Remove cached attribute",
"date": "2019-10-17",
"description": "The **Remove Cached Attribute**\\nfilter allows you to delete a message attribute value that has been stored in a cache. Each cache is essentially a map of name-value pairs, where each value is keyed on a particular message attribute. For example, you can store a cache of request messages according to their message ID. In this case the message's `id`\\nattribute is the key into the cache, which stores the value of the request message's `content.body`\\nmessage attribute. "
}
﻿
<div id="cache_remove_attribute_over">

Overview
--------

The **Remove Cached Attribute**
filter allows you to delete a message attribute value that has been stored in a cache. Each cache is essentially a map of name-value pairs, where each value is keyed on a particular message attribute. For example, you can store a cache of request messages according to their message ID. In this case the message's `id`
attribute is the key into the cache, which stores the value of the request message's `content.body`
message attribute.

In this example, the **Remove Cached Attribute**
filter can be used to remove a particular entry from the cache based on the runtime value of a particular message attribute. By specifying the `id`
message attribute to remove, the API Gateway looks up the cache based on the value of the `id`
message attribute. When it finds a matching message ID in the cache, it removes the corresponding entry from the cache.

The example described above might be useful in cases where a request message needs to be cached and stored until the request is fully processed and a response returned to the client. For example, if the request must be routed on to a back-end web service, but that web service is temporarily unavailable, you can configure the policy to resend the cached request instead of forcing the client to retry.

For more information on how to configure a caching policy, see
[Global caches](/csh?context=604&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="cache_remove_attribute_conf">

Configuration
-------------

**Name**:\
Enter a name for this filter to display in a policy.

**Select Cache to Use**:\
Click the button on the right, and select the cache that contains the cached values that have been keyed according to the message attribute specified below. The list of currently configured caches is displayed in the tree. To add a cache, right-click the **Caches**
tree node, and select **Add Local Cache**
or **Add Distributed Cache**. Alternatively, you can configure caches under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree. For more details, see
[Global caches](/csh?context=604&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Attribute Key**:\
Enter the message attribute that is used as the key into the cache in this field. At runtime, the API Gateway populates the value of this message attribute, which is then used to lookup the cache selected in the table above. If a match is found in the cache, the corresponding entry is deleted from the cache.

</div>
