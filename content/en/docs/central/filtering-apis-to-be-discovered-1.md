---
title: Filtering APIs to be discovered
description: >-
  You can set up tag-based condition expression(s) using the APIMANAGER_FILTER
  environment variable to discover APIs that could be added to AMPLIFY Central.


  Conditional expressions statements use logical operators to compare values. This section provides sample syntax for defining expressions.
---


{{< alert title="Note" color="primary" >}}For tag based filtering, the conditional expression should have "tag" as the prefix / selector in the symbol name:  `tag.<tagName> == <tagValue>`. The expression can be a simple condition or a compound condition in which multiple conditions are evaluated using logical operators. See Logical operators and Comparative operators.{{< /alert >}}

## Filter based on tag name

`tag.<tagName>.Exists() == true | false`

## Filter based on tag value

`tag.Any() == | != <tagValue>`

## Filter based on tag name and tag value

`tag.<tagName> == | != <tagValue>`

## Filter based on partial value

`tag.<tagName>.contains(<value>) == true |  false`

## Filter using MatchRegEx

`tag.<tagName>.matchRegEx(<regularExpression>)`

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

<?xml version="1.0" encoding="utf-8"?>

<html xmlns:MadCap="http://www.madcapsoftware.com/Schemas/MadCap.xsd">
    <head>
        <link href="../Resources/TableStyles/SynchTableStyle.css" rel="stylesheet" MadCap:stylesheetType="table" />
        <link href="../Resources/TableStyles/code_window.css" rel="stylesheet" MadCap:stylesheetType="table" />
    </head>
    <body>
        <h1 MadCap:autonum=" 1 &#160;">Filtering APIs to be discovered</h1>
        <p>You can set up tag-based condition expression(s) using the <MadCap:xref href="Deploy your environment.htm#APIMANAGER_FILTER"><span style="color: #0073a5;" class="mcFormatColor"><i>APIMANAGER_FILTER</i> on page 1</span></MadCap:xref> environment variable to discover APIs that could be added to AMPLIFY Central.</p>
        <p>Conditional expressions statements use logical operators to compare values. This section provides sample syntax for defining expressions.</p>
        <p><strong>Notes</strong>:</p>
        <p>For tag based filtering, the conditional expression should have "tag" as the prefix / selector in the symbol name: <code>tag.&lt;tagName&gt; == &lt;tagValue&gt;</code></p>
        <p>The expression can be a simple condition or a compound condition in which multiple conditions are evaluated using logical operators. See <MadCap:xref href="#Logical"><span style="color: #0073a5;" class="mcFormatColor"><i>Logical operators</i></span></MadCap:xref> and <MadCap:xref href="#Comparat"><span style="color: #0073a5;" class="mcFormatColor"><i>Comparative operators</i></span></MadCap:xref>.</p>
        <h2>Filter based on tag name</h2>
        <table style="width: 90%;mc-table-style: url('../Resources/TableStyles/code_window.css');margin-left: auto;margin-right: 0;" class="TableStyle-code_window" cellspacing="0">
            <col class="TableStyle-code_window-Column-Column1" />
            <tbody>
                <tr class="TableStyle-code_window-Body-Body1">
                    <td class="TableStyle-code_window-BodyA-Column1-Body1">tag.&lt;tagName&gt;.Exists() == true | false
</td>
                </tr>
            </tbody>
        </table>
        <h2>Filter based on tag value</h2>
        <table style="width: 90%;margin-left: auto;margin-right: 0;mc-table-style: url('../Resources/TableStyles/code_window.css');" class="TableStyle-code_window" cellspacing="0">
            <col class="TableStyle-code_window-Column-Column1" />
            <tbody>
                <tr class="TableStyle-code_window-Body-Body1">
                    <td class="TableStyle-code_window-BodyA-Column1-Body1">tag.Any() == | != &lt;tagValue&gt;</td>
                </tr>
            </tbody>
        </table>
        <h2>Filter based on tag name and tag value</h2>
        <table style="width: 90%; mc-table-style: url('../Resources/TableStyles/code_window.css'); margin-left: auto; margin-right: 0;" class="TableStyle-code_window" cellspacing="0">
            <col class="TableStyle-code_window-Column-Column1" />
            <tbody>
                <tr class="TableStyle-code_window-Body-Body1">
                    <td class="TableStyle-code_window-BodyA-Column1-Body1">tag.&lt;tagName&gt; == | != &lt;tagValue&gt;</td>
                </tr>
            </tbody>
        </table>
        <h2>Filter based on partial value</h2>
        <table style="width: 90%; mc-table-style: url('../Resources/TableStyles/code_window.css'); margin-left: auto; margin-right: 0;" class="TableStyle-code_window" cellspacing="0">
            <col class="TableStyle-code_window-Column-Column1" />
            <tbody>
                <tr class="TableStyle-code_window-Body-Body1">
                    <td class="TableStyle-code_window-BodyA-Column1-Body1">tag.&lt;tagName&gt;.contains(&lt;value&gt;) == true |  false</td>
                </tr>
            </tbody>
        </table>
        <h2>Filter using MatchRegEx</h2>
        <table style="width: 90%; mc-table-style: url('../Resources/TableStyles/code_window.css'); margin-left: auto; margin-right: 0;" class="TableStyle-code_window" cellspacing="0">
            <col class="TableStyle-code_window-Column-Column1" />
            <tbody>
                <tr class="TableStyle-code_window-Body-Body1">
                    <td class="TableStyle-code_window-BodyA-Column1-Body1">tag.&lt;tagName&gt;.matchRegEx(&lt;regularExpression&gt;)</td>
                </tr>
            </tbody>
        </table>
        <h2><a name="Logical"></a>Logical operators</h2>
        <p>Logical operators are used for evaluating multiple conditions. These can be combined with comparative operators and any of the above expressions.</p>
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
        <h2><a name="Comparat"></a>Comparative operators</h2>
        <p>Comparative operators are used for comparing two values. These can be combined with logical operators and any of the above expressions.</p>
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