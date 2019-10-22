{
"title": "String replace",
"linkTitle": "String replace",
"date": "2019-10-17",
"description": "The **String Replace**\\nfilter enables you to replace all or part of the value of a specified message attribute. You can use this filter to replace any specified string or substring in a message attribute. For example, changing the `from`\\nattribute in an email, or changing all or part of a URL. "
}
﻿
<div id="p_utility_string_replace_over">

Overview
--------

The **String Replace**
filter enables you to replace all or part of the value of a specified message attribute. You can use this filter to replace any specified string or substring in a message attribute. For example, changing the `from`
attribute in an email, or changing all or part of a URL.

See also [*Copy or modify attributes* on page 1](utility_attributes.htm).

</div>

<div id="p_utility_string_replace_conf">

Configuration
-------------

To configure the **String Replace**
filter, specify the following fields:

|                                   |                                                                                                                                                                                                                                                                                                 |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                          | Enter the name of the filter to be displayed in a policy.                                                                                                                                                                                                                                       |
| **Message Attribute**             | Select the name of the message attribute to be replaced from the list. This is required. If this is not specified, a `MissingPropertyException`                                                                                                                                                 
  is thrown, which results in a `CircuitAbortException`.                                                                                                                                                                                                                                           |
| **Specify Destination Attribute** | By default, the value of the specified **Message Attribute**                                                                                                                                                                                                                                    
  is both the source and destination, and is therefore overwritten. To specify a different destination attribute, select this check box to enable the **Destination Attribute**                                                                                                                    
  field, and select a value from the list.                                                                                                                                                                                                                                                         |
| **Replacement String**            | The string used to replace the value of the specified source attribute. You can specify this as a selector, which is expanded to the specified value at runtime (for example, `${http.request.uri}`). This is a required field if you specify the **Specify Destination Attribute**.            |
| **Straight**                      | A match string used to search the value of the specified source attribute. You can specify this as a selector, which is expanded to the specified value at runtime. If a straight (exact) match is found, it is replaced with the specified **Replacement String**                              
  .                                                                                                                                                                                                                                                                                                |
| **Regexp**                        | A match string, specified as a regular expression, used to search the value of the specified source attribute. You can specify this as a selector, which is expanded to the specified attribute value at runtime. If a match is found, it is replaced with the specified **Replacement String** 
  . For more details on selectors, see                                                                                                                                                                                                                                                             
  [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)                                                                                                                                                                                                           
  in the                                                                                                                                                                                                                                                                                           
  [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)                                                                                                                                                                                                       
  .                                                                                                                                                                                                                                                                                                |
| **First Match**                   | If a match is found, only replace the first occurrence.                                                                                                                                                                                                                                         |
| **All Matches**                   | If a match is found, replace all occurrences.                                                                                                                                                                                                                                                   |

{{< alert title="Note" color="primary" >}}The possible paths available through this filter are `True`
(even if no replacement takes place), and `CircuitAbort`. Under certain circumstances, if the **Replacement String**
contains a selector, a `MissingPropertyException`
can occur, which results in a `CircuitAbortException`. {{< /alert >}}

</div>
