{
"title": "HTTP Session settings",
"linkTitle": "HTTP Session settings",
"date": "2019-10-14",
"description": "The **HTTP Session** settings enable you to configure session management settings for the selected cache. For example, you can configure the period of timebefore expired sessions are cleared from the `HTTP Sessions` cache, which is selected by default."
}
﻿

The **HTTP Session** settings enable you to configure session management settings for the selected cache. For example, you can configure the period of timebefore expired sessions are cleared from the `HTTP Sessions` cache, which is selected by default.

To configure HTTP session settings, select the **Environment Configuration > Server Settings** node in the Policy Studio tree, and click **General > HTTP Session**.Alternatively, in the Policy Studio main menu, select **Tasks > ManageGateway Settings > General > HTTP Session**. To confirm updates to these settings, click **Apply changes** at the bottom right of the screen.

Configuration
-------------

Configure the following session settings:

**Cache**:\
Specifies the cache that you wish to configure. Defaults to `HTTP Sessions`.To configure a different cache, click the button on the right, and select the cache touse. The list of currently configured caches is displayed in the tree.

To add a cache, right-click the **Caches** tree node, and select **Add Local Cache** or **Add Distributed Cache**. Alternatively, you can configure caches under the **Environment Configuration > Libraries** node in the Policy Studio tree. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Clear Expired Sessions Period**:\
Enter the number of seconds before expired sessions are cleared from the selected cache. Defaults to `60`.
