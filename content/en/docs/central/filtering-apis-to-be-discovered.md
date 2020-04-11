---
title: Filtering APIs to be discovered
description: Learn how to set up tag-based condition expression(s) using the
  APIMANAGER_FILTER environment variable to discover APIs that could be added to
  AMPLIFY Central.
---
Conditional expressions statements use logical operators to compare values. This section provides sample syntax for defining expressions. 

{{< alert title="Note" color="primary" >}}For tag-based filtering, the conditional expression should have "tag" as the prefix / selector in the symbol name.
The expression can be a simple condition or a compound condition in which multiple conditions are evaluated using logical operators. See Logical operators and Comparative operators.{{< /alert >}}

```
tag.<tagName> == <tagValue>
```

## Before you start 

* Familiarize yourself with  the APIMANAGER_FILTER
* Review Logical operators and Comparative operators

## Objectives 

Learn how to set filtering based on tag name, tag value, partial value and MatchRegEx to discover APIs that can be added to AMPLIFY Central.

## Filter based on tag name


```
tag.<tagName>.Exists() == true | false
```

## Filter based on tag value

```
tag.Any() == | != <tagValue>
```

## Filter based on tag name and tag value

```
tag.<tagName> == | != <tagValue>
```

## Filter based on partial value

```
tag.<tagName>.contains(<value>) == true |  false
```

## Filter using MatchRegEx

```
tag.<tagName>.matchRegEx(<regularExpression>)
```

## Logical operators

Logical operators are used for evaluating multiple conditions. These can be combined with comparative operators and any of the above expressions.

<table style="width: 90%;margin-left: auto;margin-right: 0;mc-table-style: url('../Resources/TableStyles/SynchTableStyle.css');" class="TableStyle-test_SynchTableStyle" cellspacing="0">
            <col class="Column-Column1" />
            <col class="Column-Column1" />
            <thead>
                <tr class="Head-Header1">
                    <th class="HeadE-Column1-Header1">Operator</th>
                    <th class="HeadD-Column1-Header1">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr class="Body-Body1">
                    <td class="BodyE-Column1-Body1">&amp;&amp;</td>
                    <td class="BodyD-Column1-Body1">Logical AND operator, returns true if conditions on both sides are true.</td>
                </tr>
                <tr class="Body-Body2">
                    <td class="BodyB-Column1-Body2">||</td>
                    <td class="BodyA-Column1-Body2">Logical OR operator, returns true if the condition on either side is true.</td>
                </tr>
            </tbody>
        </table>
        

## Comparative operators 

Comparative operators are used for comparing two values. These can be combined with logical operators and any of the above expressions.

 <table style="width: 90%;margin-left: auto;margin-right: 0;mc-table-style: url('../Resources/TableStyles/SynchTableStyle.css');" class="TableStyle-test_SynchTableStyle" cellspacing="0">
            <col class="Column-Column1" />
            <col class="Column-Column1" />
            <thead>
                <tr class="Head-Header1">
                    <th class="HeadE-Column1-Header1">Operator</th>
                    <th class="HeadD-Column1-Header1">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr class="Body-Body1">
                    <td class="BodyE-Column1-Body1">==</td>
                    <td class="BodyD-Column1-Body1">
Equal to operator, returns true if values on both sides are equal.</td>
                </tr>
                <tr class="Body-Body2">
                    <td class="BodyB-Column1-Body2">!=</td>
                    <td class="BodyA-Column1-Body2">Not equal to operator, returns true if the value on the left side is not equal to the value on the right side.</td>
                </tr>
            </tbody>
        </table>