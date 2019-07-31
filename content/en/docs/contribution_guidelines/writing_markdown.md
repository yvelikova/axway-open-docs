---
title: "Write with Markdown"
linkTitle: "Write with Markdown"
weight: 1
date: 2019-07-30
description: >
  Tips on writing and editing using Markdown.
---

This docs-as-code implementation uses the [Hugo](https://gohugo.io/) static site generator and the Google [Docsy theme](https://www.docsy.dev/) to build this website from the Markdown content files. Hugo uses [Blackfriday](https://github.com/russross/blackfriday) to parse Markdown.

## Editor recommendations

If you are editing Markdown locally, we recommend using VSCode with the `markdownlint` extension.

## Tips and tricks

Here are some tips and tricks for Markdown. Feel free to add your own!

### Nested lists

The Blackfriday Markdown parser has some known issues with nested lists. To avoid these, follow these guidelines and always preview any nested lists on Netlify or in a local Hugo server.

* Always use 4 spaces to indent nested lists. Ensure that tabs are set to 4 spaces in your editor.
* Do not specify a language for fenced code blocks within a nested list.

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


### YouTube video links

To display a YouTube video preview on a page, use the following Hugo shortcode. You only need to specify the ID of the video.

```go-html-template
{{</* youtube QTpB3e2DZBg */>}}
```

Renders to:

{{< youtube QTpB3e2DZBg >}}

See <https://gohugo.io/content-management/shortcodes/#youtube> for more details.

<!-- Tables TODO-->
