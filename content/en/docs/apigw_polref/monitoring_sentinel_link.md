{
"title": "Send cycle link event to Sentinel",
"linkTitle": "Send cycle link event to Sentinel",
"date": "2019-10-17",
"description": "You can use the **Sentinel Cycle Link**\\nfilter to send cycle link events to Axway Sentinel. Sentinel uses *cycle links*\\nto link processing cycles sequentially. A *processing cycle*\\nis a group of related tracked events (identified by the same cycle ID). "
}
﻿
<div id="p_monitoring_sentinel_link_overview">

You can use the **Sentinel Cycle Link**
filter to send cycle link events to Axway Sentinel. Sentinel uses *cycle links*
to link processing cycles sequentially. A *processing cycle*
is a group of related tracked events (identified by the same cycle ID).

Every cycle link must specify a parent processing cycle and a child processing cycle. A processing cycle is identified by a cycle ID, and the tracked object name and version are used to identify the tracked events within the processing cycle.

This filter can be used to link related events from different products. For example, if B2Bi and API Gateway are both sending events to the same Sentinel server, each product sends the events with different cycle IDs. You can link the events from B2Bi with the events from API Gateway by sending a cycle link event to the Sentinel server. This links the two cycle IDs in Sentinel.

See also [*Send event to* on page 1](monitoring_sentinel_event.htm).

</div>

<div id="p_monitoring_sentinel_link_config">

General settings
----------------

Configure the following settings on the **Sentinel Cycle Link**
window:

**Name**
:\
Enter a suitable name for the filter.

**Sentinel Server**:\
Click the browse button to select a Sentinel server connection.

The **Parent Settings**
section enables you to specify the cycle ID for the parent processing cycle. You also need to specify the tracked object name and version to identify the relevant tracked events.

**Parent Cycle ID**:\
Enter the cycle ID of the parent processing cycle. This should be the cycle ID of the upstream product (for example, B2Bi). For example, `${http.headers["X-TRACKING-CYCLEID"]}`
retrieves the parent cycle ID from the HTTP request headers.

**Use the following tracked object**:\
Select this option and click the browse button to select a Sentinel tracked object to use. If no tracked objects are already defined, right-click **Sentinel Tracked Objects**
in the dialog and select **Add a tracked object**. Enter a **Name**
and a **Version**
for the tracked object. The values entered must correspond to the **Public name**
and **Version**
of the tracked object in Sentinel.

**Or use the following from the message**:\
Select this option to retrieve the tracked object name and tracked object version from a message received from an upstream product (for example, B2Bi). If the upstream product has inserted tracking information inside some HTTP headers, you can use selectors to retrieve these from the message.

For example, `${http.headers["X-TRACKEDOBJECT-NAME"]}`
retrieves the tracked object name from the HTTP headers, and `${http.headers["X-TRACKEDOBJECT-IDENTITY"]}`
retrieves the tracked object version from the HTTP headers.

The **Child Settings**
section enables you to specify the cycle ID for the child processing cycle. You also need to specify the tracked object name and version to identify the relevant tracked events.

**Child Cycle ID**:\
Enter the cycle ID of the child processing cycle. This should be the cycle ID of API Gateway. For example, enter `${id}`
to specify the API Gateway transaction ID.

**Use the following tracked object**:\
Select this option and click the browse button to select a Sentinel tracked object to use. If no tracked objects are already defined, right-click **Sentinel Tracked Objects**
in the dialog and select **Add a tracked object**. Enter a **Name**
and a **Version**
for the tracked object. The values entered must correspond to the **Public name**
and **Version**
of the tracked object in Sentinel.

**Or use the following from the message**:\
Select this option to retrieve the tracked object name and tracked object version from a message received from an upstream product (for example, B2Bi). If the upstream product has inserted tracking information inside some HTTP headers, you can use selectors to retrieve these from the message.

For example, `${http.headers["X-TRACKEDOBJECT-NAME"]}`
retrieves the tracked object name from the HTTP headers, and `${http.headers["X-TRACKEDOBJECT-IDENTITY"]}`
retrieves the tracked object version from the HTTP headers.

</div>

<div id="p_monitoring_sentinel_link_info">

Further information
-------------------

For more details, see the
[API Gateway Sentinel Interoperability Guide](/bundle/APIGateway_77_Sentinel_InteropGuide_allOS_en_HTML5)
.

</div>
