{
"title": "Insert timestamp",
"linkTitle": "Insert timestamp",
"date": "2019-10-17",
"description": "In any secure communications protocol, it is crucial that secured messages do not have an indefinite life span. In secure web services transactions, a WS-Utility (WSU) timestamp can be inserted into a WS-Security Header to define the lifetime of the message in which it is placed. A message containing an expired timestamp should be rejected immediately by any web service that consumes the message. "
}
﻿
<div id="p_authn_timestamp_overview">

Overview
--------

In any secure communications protocol, it is crucial that secured messages do not have an indefinite life span. In secure web services transactions, a WS-Utility (WSU) timestamp can be inserted into a WS-Security Header to define the lifetime of the message in which it is placed. A message containing an expired timestamp should be rejected immediately by any web service that consumes the message.

Typically, the timestamp contains `Created`
and `Expires`
times, which combine to define the lifetime of the timestamp. The following shows an example `wsu:Timestamp`:

``` {space="preserve"}
<wsu:Timestamp xmlns:wsu="http://schemas.xmlsoap.org/ws/2002/07/utility">
  <wsu:Created>2009-03-16T16:32:22Z</wsu:Created>
  <wsu:Expires>2009-03-16T16:42:22Z</wsu:Expires>
</wsu:Timestamp>
```

Because the WS-Utility timestamp is inserted into the WS-Security header block, it is also referred to as a WSS timestamp. For example, see [*Extract WSS timestamp* on page 1](attributes_extract_timestamp.htm).

</div>

<div id="p_authn_insert_timestamp_conf">

Configuration
-------------

Complete the following fields to configure the API Gateway to insert a timestamp into the message:

**Name**:\
Enter an intuitive name for the filter to display in a policy.

**Actor**:\
The timestamp is inserted into the WS-Security header identified by the SOAP Actor selected here.

**Expires In**:\
Configure the lifetime of the timestamp (and hence the message into which the timestamp is inserted) by specifying the expiry time of the assertion. The expiry time is expressed in days, hours, minutes, and seconds.

**Layout Type**:\
In cases where the timestamp must adhere to a particular layout as mandated by the WS-Policy `<Layout>`
assertion, you must select the appropriate layout type. A web service that enforces a WS-Policy might reject the message if the layout of security elements in the SOAP header is incorrect. Therefore, you must ensure that you select the correct layout type.

</div>
