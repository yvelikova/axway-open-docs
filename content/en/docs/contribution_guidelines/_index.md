---
title: "Contribution guidelines"
linkTitle: "Contribution guidelines"
no_list: true
weight: 9
description: >
  How to contribute to Axway-Open-Docs
---

All the documentation  on this website is written in Markdown, and it is stored in `/content/en/docs/`.

We support the following contribution flows:

* Pull request (PR) via GitHub UI (ideal for small or infrequent changes).
* Pull request via Netlify CMS (WYSIWYG option is ideal for non-technical users).
* Pull request via Git CLI (ideal for bigger changes or regular updates). See [Setup and work locally](/docs/contribution_guidelines/setup_work_locally).

While you can also create issues on GitHub to ask for updates, it's faster to create a pull request and make the updates yourself.

## What to expect when you contribute

When you submit a PR, our team is notified and will respond as quickly as we can. We'll review your PR and ensure that the changes adhere to Axway style and standards by making additional edits for style or clarity.

We'll contact you if we need further information regards to your PR.

{{< alert title="Note" >}}
GitHub will send you an email notification for every update in your PR or issue.
{{< /alert >}}

When the review is finished, we'll merge your PR to this staging website first <https://axway-open-docs.netlify.com/>, then to production <https://docs.axway.com>.

## Edit a page on GitHub

To edit a page and send a PR:

* Click **Edit this page** on the upper right corner of the page.
* Make the changes in Git UI.
  + You can use the **Preview changes** tab to preview your changes in Git before creating the PR.
    ![Preview before creating PR](/Images/docbook/images/contributing/netlify_preview_beforecreating_PR.png)
* Add a meaningful message to your commit and click to create the PR.
  + You can preview your changes in the staging site by clicking the link on the Netlify preview box.
    ![Preview your PR](/Images/docbook/images/contributing/netlify_preview_PR.png)

  + This link redirects to the main page of the documentation. You must navigate to the page you've edited.
  + This link opens in the same tab of your PR.

## Create an issue on GitHub

Create an issue to inform us about a problem in the documentation. Please provide detailed information, for example, if it's missing information, an error in a procedure, information not clear, a broken link, and so on. The more details you provide, the more helpful the issue, and the faster we can prioritize and fix it.

To create an issue just click **Create documentation issue** on the upper right corner of the page, and add the relevant information.

## Edit with Netlify CMS

Not yet available.

## Additional resources

* [How to use Markdown for writing docs](https://docs.microsoft.com/en-us/contribute/how-to-write-use-markdown)
* [Fork a GitHub repository](https://help.github.com/en/articles/fork-a-repo)
