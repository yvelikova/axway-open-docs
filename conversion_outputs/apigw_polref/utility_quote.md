{
"title": "Quote of the day",
"linkTitle": "Quote of the day",
"date": "2019-10-17",
"description": "The **Quote of the day**\\nfilter is a useful test utility for returning a simple SOAP response to a client. The API Gateway wraps the quote in a SOAP response, which can then be returned to the client."
}
﻿
<div id="p_utility_quote_overview">

Overview
--------

The **Quote of the day**
filter is a useful test utility for returning a simple SOAP response to a client. The API Gateway wraps the quote in a SOAP response, which can then be returned to the client.

See also [*Reflect message* on page 1](utility_reflect.htm).

</div>

<div id="p_utility_quote_conf">

Configuration
-------------

Simply enter the quote in the **Quotes**
text area. This quote can be returned in a SOAP response to the client by setting the **Reflect**
filter to be the successor of this filter in the policy.

The **Quote of the day**
filter can also load a file containing a list of quotes at runtime. In this case, a random quote from the file is returned to the client in the SOAP response. Each quote should be delimited by a `%`
character on a new line. This is analogous to the *BSD fortune format*. The format of this file is shown in the following example:

``` {space="preserve"}
Most powerful is he who has himself in his own power.
%
All science is either physics or stamp collecting.
%
A cynic is a man who knows the price of everything and the value of nothing.
% 
Intellectuals solve problems; geniuses prevent them.
%
If you can't explain it simply, you don't understand it well enough.
```

You can also enter the quotes in this format into the **Quotes**
text area to achieve the same goal.

The following example shows a SOAP response returned by the API Gateway to a client who requested the **Quote of the day**
service:

``` {space="preserve"}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
   <s:Header/>
   <s:Body xmlns:axway/>="axway.com">
      <axway:getQuoteResponse>
         Every cloud has a silver lining
      <axway:getQuoteResponse>
   </s:Body>
</s:Envelope>
```

</div>
