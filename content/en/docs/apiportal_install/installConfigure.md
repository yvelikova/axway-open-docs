{"title":"Additional configuration","linkTitle":"Additional configuration","date":"2019-08-09","description":"This section describes some additional configuration you might want to perform after installation. "} ﻿

This section describes some additional configuration you might want to perform after installation.

For details on how to configure the look and feel of your API Portal end-user interface, see the [API Portal Administrator Guide](/bundle/APIPortal_77_AdministratorGuide_allOS_en_HTML5) .

Configure Redis cache settings
------------------------------

If you are using Redis cache to cache APIs for API Portal, you can control how long data is preserved in the cache:

1.  In the JAI, click **Components > API Portal > Additional Settings**.
2.  In **Cache Timeout**, enter how long (in seconds) APIs are preserved in the cache.
3.  Click **Save**.

Use the **Purge cache** button to clear the cache at any time.

Configure terms and conditions text
-----------------------------------

To modify the API Portal *Terms & Conditions* content, edit the following file:

`/opt/axway/apiportal/htdoc/components/com_apiportal/views/terms/tmpl/default.php`

Configure copyright notice
--------------------------

To customize the copyright notice that is displayed at the bottom of the API Portal pages, edit the following file:

`/opt/axway/apiportal/htdoc/templates/purity_iii/tpls/blocks/footer.php`
