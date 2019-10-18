{
"title": "Advanced filter view",
"linkTitle": "Advanced filter view",
"date": "2019-10-17",
"description": "You can use the advanced filter view in Policy Studio to edit all filter settings as text values. This enables you to edit each field as a text value regardless of whether the field is displayed as a radio button, check box, or drop-down list in the default user-friendly view for the filter. "
}
﻿
<div id="p_general_advanced_view_over">

Overview
--------

You can use the advanced filter view in Policy Studio to edit all filter settings as text values. This enables you to edit each field as a text value regardless of whether the field is displayed as a radio button, check box, or drop-down list in the default user-friendly view for the filter.

This also means that you can specify all filter fields using the API Gateway selector syntax. This enables settings to be evaluated and expanded at runtime using metadata (for example, from message attributes, a Key Property Store (KPS), or environment variables). This is a powerful feature for System Integrators (SIs) and Independent Software Vendors (ISVs) when integrating with other systems.

{{< alert title="Note" color="primary" >}}You should only modify filter settings using the advanced filter view under strict advice and supervision from Axway Support. {{< /alert >}}

</div>

<div id="p_general_advanced_view_config">

Enable advanced filter view
---------------------------

To enable the advanced filter view for a filter in the Policy Studio, press the **Shift**
key when opening the filter. For example, you can press **Shift**, and double-click a filter on the policy canvas. Alternatively, you can press **Shift**, right-click the filter in the Policy Studio tree or policy canvas, and select **Edit**.

In the advanced filter view, settings are displayed with the following characters before the field name:

-   Required: **\***
    (for example, **\*name**)
-   Reference: **\^**
    (for example, **\^proxyServer**)
-   Radio attribute: **(:)**
    (for example, **(:)httpAuthType**)

<div>

Edit filter settings
--------------------

You can specify all fields in this view using text values (for example, values such as `http://stockquote.com/stockquote/instance1`
, `false`
, `0`
, `-1`
, `500`
, and so on). Alternatively, you can use the API Gateway selector syntax to expand values at runtime. The following example selector expands the user agent header sent by the client in the `http.headers`
message attribute:

\${http.headers\["User-Agent"\]}
For example, this selector might return a user agent header such as the following at runtime:

    Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.77 Safari/535.7

To confirm your updates, you must click **Save Changes**
at the bottom right of the dialog. Alternatively, at any stage you can click **Restore Defaults**
to return to the original factory settings.

For more details on the API Gateway selector syntax, see [*Select configuration values at runtime* on page 1](general_selector.htm).

</div>

<div>

Return to default filter view
-----------------------------

When you have finished editing filter settings in the advanced filter view, deselect the **Show Advanced Filter View**
setting in **Preferences**. Then when you edit a selected filter on the policy canvas, the default user-friendly view for the filter is displayed.

</div>

</div>
