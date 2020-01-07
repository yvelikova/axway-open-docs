{
"title": "Access KPS data using selectors",
"linkTitle": "Access KPS data using selectors",
"date": "2020-01-06",
"description": "\\n\\t\\tData in KPS tables can be accessed using selectors that execute in policies on the \\n\\t\\tAPI Gateway at runtime. This topic explains \\n\\t\\tKPS selector syntax and provides some example selectors.\\n "
}
﻿

Data in KPS tables can be accessed using selectors that execute in policies on the
API Gateway at runtime. This topic explains
KPS selector syntax and provides some example selectors.

KPS selector syntax
-------------------

KPS selector syntax is as follows:

\${kps.*alias*\[*key*\].*property*}

The parts in the selector are described as follows:

| Selector part | Description                                                               |
|---------------|---------------------------------------------------------------------------|
| \${           | Indicates the start of the selector using a `{` bracket.                  |
| kps           | Specifies that selector should query a KPS table.                         |
| .*alias*      | Specifies the full alias of the KPS table, including the collection alias 
  prefix if any (for example, `User`).                                       |
| \[            | Indicates the start of a table property reference using a `[` bracket.    |
| *key*         | The key value to query the table (for example, `http.querystring.id`).    |
| \]            | Indicate the end of a table property reference using a `]` bracket.       |
| .*property*   | The field to retrieve from the returned row (for example,                 
  `age`).                                                                    |
| }             | Indicate the end of the selector using a `}` bracket.                     |

You can also use a composite key, for example:

\${kps.*alias*\[*key1*\]\[*key2*\].*property*}

KPS selector examples
---------------------

For an example of accessing KPS data from a selector using a primary key, see [Get started with KPS](2_Get_started.htm).
For examples of selectors that use both primary and composite keys, see [Configure database KPS storage](7_Configure_database_storage.htm).

The following table shows more examples of KPS selectors:

+-----------------------------------+-----------------------------------+
| Selector                          | Description                       |
+===================================+===================================+
| \${kps.User\[http.querystring.id\ | -   Get row from KPS table with   |
| ].firstName}                      |     `User` alias                  |
|                                   | -   Use key supplied in HTTP      |
|                                   |     query string (`id`)           |
|                                   | -   Return `firstName` field of   |
|                                   |     row                           |
+-----------------------------------+-----------------------------------+
| \${kps.User\["kathy.adams@acme.co | -   Get row from KPS table with   |
| m"\].age}                         |     `User` alias                  |
|                                   | -   Use constant key              |
|                                   |     `"kathy.adams@acme.com"` with |
|                                   |     quotation marks               |
|                                   | -   Return `age` field of row     |
+-----------------------------------+-----------------------------------+
| \${kps.User\[http.querystring.fir | -   Get row from KPS table with   |
| stName\]\                         |     `User` alias                  |
| \[http.querystring.lastName\].ema | -   Use key supplied in HTTP      |
| il}                               |     query string (`firstName`     |
|                                   |     and `lastName`)               |
|                                   | -   Return `email` field of row   |
+-----------------------------------+-----------------------------------+

For more details on selectors, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.
