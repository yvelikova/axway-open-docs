{
"title": "Send event to Sentinel",
"linkTitle": "Send event to Sentinel",
"date": "2019-10-17",
"description": "You can use the **Sentinel Event**\\nfilter to send tracked events to Axway Sentinel. Sentinel uses *tracked objects*\\nto identify events. Every tracked object contains a unique name, version number, and a list of attributes."
}
﻿
<div id="p_monitoring_sentinel_event_overview">

You can use the **Sentinel Event**
filter to send tracked events to Axway Sentinel. Sentinel uses *tracked objects*
to identify events. Every tracked object contains a unique name, version number, and a list of attributes.

Every tracked event must specify a tracked object, and this tracked object must already be defined in Sentinel. A tracked event can also contain attributes, and the attributes must already be defined as tracked object attributes in Sentinel.

See also [*Send cycle link event to* on page 1](monitoring_sentinel_link.htm).

</div>

<div id="p_monitoring_sentinel_event_config">

General settings
----------------

Configure the following settings on the **Sentinel Event**
window:

**Name**:\
Enter a suitable name for the filter to display in a policy.

<div>

### Settings tab

Configure the following:

**Sentinel Server**:\
Click the browse button to select a Sentinel server connection.

The **Tracked object**
section enables you to specify the tracked object to use in the Sentinel event.

{{< alert title="Note" color="primary" >}}Tracked objects must exist in your Sentinel database before you can start using Sentinel to monitor your applications and track their activities. For more information on defining tracked objects in Sentinel, see the *Sentinel Configuration Guide*
available on [https://support.axway.com](https://support.axway.com/).{{< /alert >}}
**Use the following tracked object**:\
Select this option and click the browse button to select a Sentinel tracked object to use. If no tracked objects are already defined, right-click **Sentinel Tracked Objects**
in the dialog and select **Add a tracked object**.

Enter a **Name**
and a **Version**
for the tracked object. The values entered must correspond to the **Public name**
and **Version**
of the tracked object in Sentinel.

**Or use the following from the message**:\
Select this option to retrieve the tracked object name and tracked object version from a message received from an upstream product (for example, B2Bi). If the upstream product has inserted tracking information inside some HTTP headers, you can use selectors to retrieve these from the message.

For example, `${http.headers["X-TRACKEDOBJECT-NAME"]}`
retrieves the tracked object name from the HTTP headers, and `${http.headers["X-TRACKEDOBJECT-IDENTITY"]}`
retrieves the tracked object version from the HTTP headers.

The **Event will contain the following**
section enables you to specify the tracked object attributes to use in the Sentinel event.

{{< alert title="Note" color="primary" >}}The named event attributes specified in this section must be contained within the tracked object definition in Sentinel.{{< /alert >}}
**Include Cycle ID**:\
Select this option to include the cycle ID in the event, and enter a value. For example, enter `${id}`
to use the API Gateway transaction ID as the cycle ID. This value is used to populate the `CycleId`
attribute of the tracked object in Sentinel.

**Include policy name in event named**:\
Select this option to include the name of the policy in the event, in an attribute with the specified name. You can use any name for the attribute, as long as the attribute name exists in the tracked object definition in Sentinel.

**Include filter name in event named**:\
Select this option to include the name of the filter in the event, in an attribute with the specified name. You can use any name for the attribute, as long as the attribute name exists in the tracked object definition in Sentinel.

You can also add other attributes to be included in the event by populating entries in the table. Click the **Add**
button to add an attribute. Enter a **Name**
and a **Value**
for the attribute. For example, to populate an attribute named `UserName`
with the authenticated user, you would enter `UserName`
for the **Name**
and `${authentication.subject.id}`
for the **Value**.

**Send as update**:\
Select this option to send the event as an update.

</div>

<div>

### Tracking tab

Configure the following:

**Add Cycle ID in header named**:\
Select this option and enter a value, to include the cycle ID in the HTTP header.

**Add Tracked Object name in header named**:\
Select this option and enter a value, to include the tracked object name in the HTTP header.

**Add Tracked Object version in header named**:\
Select this option and enter a value, to include the tracked object version in the HTTP header.

</div>

</div>

<div id="p_monitoring_sentinel_event_info">

Further information
-------------------

For more details, see the
[API Gateway Sentinel Interoperability Guide](/bundle/APIGateway_77_Sentinel_InteropGuide_allOS_en_HTML5)
.

</div>
