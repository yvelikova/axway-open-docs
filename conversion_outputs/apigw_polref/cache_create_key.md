{
"title": "Create key",
"linkTitle": "Create key",
"date": "2019-10-17",
"description": "The **Create Key**\\nfilter is used to identify the part of the message that determines whether a message is unique. For example, you can use the request message body to determine uniqueness so that if two successive identical message bodies are received by the API Gateway, the response for the second request is taken from the cache. "
}
﻿
<div id="p_cache_create_key_over">

Overview
--------

The **Create Key**
filter is used to identify the part of the message that determines whether a message is unique. For example, you can use the request message body to determine uniqueness so that if two successive identical message bodies are received by the API Gateway, the response for the second request is taken from the cache.

You can also use other parts of the request to determine uniqueness (for example, HTTP headers, client IP address, client SSL certificate, and so on). This means that you can use the **Create Key**
filter to create keys for a range of different caching scenarios (for example, caching a user's role, or caching a session for a user).

For more information on how to configure this filter in the context of a caching policy, see
[Global caches](/csh?context=604&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
. This shows the order in which caching filters such as the **Create Key**
filter are placed in an example caching policy.

</div>

<div id="p_cache_create_key_conf">

Configuration
-------------

**Name**:\
Enter a suitable name for this filter.

**Attribute Name**:\
Select or enter the name of the message attribute to use to determine whether an incoming request is unique or not. For example, if `http.request.clientcert`
(the client SSL certificate) is selected, the API Gateway takes a cached response for successive requests in which the client SSL certificate is the same. Defaults to `content.body`.

**Output attribute name**:\
Select or enter the name of the output message attribute to be used as the key for objects in the cache. Defaults to `message.key`. This attribute contains a hash of the request message, which can then be used as the key for objects in the cache.

</div>
