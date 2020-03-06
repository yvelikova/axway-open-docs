---
title: "Markdown guidelines for Axway-Open-Docs"
linkTitle: "Markdown guidelines"
weight: 1
date: 2019-07-30
description: >
  Markdown guidelines and Markdown extensions available for Axway-Open-Docs.
---

This docs-as-code implementation uses the [Hugo](https://gohugo.io/) static site generator and the Google [Docsy theme](https://www.docsy.dev/) to build this website from the Markdown content files. Hugo uses [Blackfriday](https://github.com/russross/blackfriday) to parse Markdown.

## Editor recommendations

If you are editing Markdown locally, we recommend using VSCode with the `markdownlint` extension.

## Basic rules

Follow these basic rules when sending contributions.

### Italic and bold

Surround a word with single underscores (`_`) to apply _italics_ for emphasis.

Surround a word with double asterisks (`**`) to apply **bold** for emphasis.

### Headings

Use hash characters (`#`) for headings. The number of hash characters determines the heading level.

The first heading in a file must be a H2 (`##`). Subsequent headings should not skip levels.

For example:

```md
## First heading
some text
### First subheading
some text
## Second heading
some text
```

Do not use bold for headings.

### Tables

Markdown has limited support for tables.

Use pipe tables for simple tables, where each table cell contain only a single item.

If you need a complex table, consider using lists instead.

## Tips and tricks

Here are some tips and tricks for Markdown. Feel free to add your own!

### Nested lists

The Blackfriday Markdown parser has some known issues with nested lists. To avoid these, follow these guidelines and always preview any nested lists on Netlify or in a local Hugo server.

* Always use 4 spaces to indent nested lists. Ensure that tabs are set to 4 spaces in your editor.
* Do not specify a language for fenced code blocks within a nested list.

### Code samples

Use 3 or more backticks to open and close a code sample block. You can specify a language after the first set of backticks to easily apply syntax highlighting.

For example:

```md
# This is a H1

This is some text

## This is a H2

This is more text
```

Renders as:

```md
# This is a H1

This is some text

## This is a H2

This is more text
```

Use code block styling for single and multiple-line code blocks. Do not use inline code styling for single line code blocks.

{{% alert title="Note" color="primary" %}}
Do not use indentation for code blocks. Although indentation is supported by Markdown, it causes issues with nesting code blocks inside lists, and with publishing on production.
{{% /alert %}}

### Inline code

Use single backticks to apply code or monospace formatting to a command or short code sample within a sentence (inline code).

For example, this `command` is inline.

{{% alert title="Caution" color="warning" %}}
The Zoomin plugin used when publishing docs to production <https://docs.axway.com> is very sensitive to `<`, `>`, and `\` characters. Ensure that these characters are always enclosed in backticks to have them processed as code instead of as HTML tags.
{{% /alert %}}

## Markdown extensions

Hugo and Docsy provide some useful extensions to standard Markdown that you can use to simplify editing and formatting.

### Notes or alerts

Use an alert shortcode for any text that you want to draw attention to. For example:

```go-html-template
{{%/* alert title="Note" */%}}
This is a note.
{{%/* /alert */%}}

```

Renders to:

{{% alert title="Note" %}}
This is a note.
{{% /alert %}}

See <https://www.docsy.dev/docs/adding-content/shortcodes/#alert> for more details.

Do not use any other styling to highlight information, such as bold, bullet lists, and so on. If you want to draw attention to something, always use an alert.

### YouTube video links

To display a YouTube video preview on a page, use the following Hugo shortcode. You only need to specify the ID of the video.

```go-html-template
{{</* youtube QTpB3e2DZBg */>}}
```

Renders to:

{{< youtube QTpB3e2DZBg >}}

See <https://gohugo.io/content-management/shortcodes/#youtube> for more details.

<!-- Tables TODO-->
