---
title: "Contribution guidelines"
linkTitle: "Contribution guidelines"
no_list: true
weight: 30
description: >
  How to contribute to Axway-Open-Docs
---

This documentation is open source, and we welcome your interest in contributing to improve the quality of our docs.

Please read this guide thoroughly before you start.

## Before you start

Before you can contribute to Axway-open-docs you must sign the [Axway Contributor License Agreement (CLA)](https://cla.axway.com/) using your GitHub account.

This is required just once and it should only take a few minutes.

## Contribution flows

All the documentation on this website is written in Markdown. The textual content is stored in the `/content/en/docs/` folder, and the images, in the `/static/Images/<guide_name>` folder.

We support the following contribution flows:

1. Pull request (PR) via GitHub UI (ideal for small or infrequent changes). See [Edit on GitHub](#option-1-edit-on-github)
2. Pull request via Netlify CMS (WYSIWYG option ideal for non-technical users). See [Edit on Netlify CMS](#option-2-edit-on-netlify-cms)

For experienced users, we also support pull requests via Git CLI (ideal for bigger changes or regular updates). See [Set up and work locally](/docs/contribution_guidelines/setup_work_locally).

{{< alert title="Note" >}}
All flows require a GitHub account.
{{< /alert >}}

Finally, if you cannot make a direct contribution, but want to report an issue with this documentation, you can do so using GitHub. See [Create an issue on GitHub](#create-an-issue-on-github).

### Option 1 - Edit on GitHub

{{< alert title="Caution" color="warning">}}If you have previously contributed to this project, your fork might be out of sync, and we strongly recommend that you delete your old fork before continuing. See [Deleting a repository](/docs/contribution_guidelines/deleting_a_repository/) for more information.{{< /alert >}}

1. Click **Edit on GitHub** on the upper right corner of the page.
2. Click **Fork this repository** to create a copy (fork) of the Axway repository in your GitHub account. This allows you to propose changes to a repository that you don't have write access to.
3. Make your changes to the page in the Markdown editor.

    Click the **Preview changes** tab to check the formatting of your changes.

    ![Preview before creating PR](/Images/contributing/netlify_preview_beforecreating_PR.png)

4. At the bottom of the page, add a meaningful message describing your change and click **Propose file change**.
5. In the Comparing changes page, check that `Axway/axway-open-docs` is shown on the left, and that your fork is shown on the right, and click **Create pull request**. A pull request enables us to review the changes you made on your fork and _pull_ them into the original Axway repository.

    ![Compare changes and create pull request](/Images/contributing/compare_changes_pr.png)

6. Enter a title (and optionally a description) for the pull request, and click **Create pull request** again. Leave **Allow edits from maintainers** selected, to enable us to make editorial updates to your PR if necessary.

7. To preview your changes exactly as they will appear on the live website, click the deploy preview link:

    ![Preview your PR](/Images/contributing/netlify_preview_PR.png)

    * This link opens the home page of the website. You must navigate to the page you edited.
    * This link opens in the same tab.

### Option 2 - Edit on Netlify CMS

Use the Netlify CMS user interface to easily edit pages in a WYSIWYG editor with a real-time preview. You don't need to be familiar with Markdown or with GitHub forking workflows to edit in Netlify CMS.

{{< alert title="Caution" color="warning">}}If you have previously contributed to this project, your fork might be out of sync, and we strongly recommend that you delete your old fork before continuing. See [Deleting a repository](/docs/contribution_guidelines/deleting_a_repository/) for more information.{{< /alert >}}

1. Click **Edit on Netlify CMS** on the upper right corner of the page.
2. Sign in to Netlify CMS using your GitHub account.
3. Click **Fork the repo** to fork the repository. This creates a copy (fork) of the Axway repository in your GitHub account. Netlify CMS makes changes to the files on your fork, and not to the original Axway repository.
4. On the Netlify CMS landing page, locate the page you want to change and click to edit it.
5. Make your changes in the editor on the left and click **Save**. You can check the formatting in the live preview on the right.

    ![WYSIWYG editor](/Images/contributing/netlify_WYSIWYGeditor.png)

6. When you are finished making changes, change the status of the content to **In review**. This creates a pull request, which enables us to review the changes you made on your fork using Netlify CMS and _pull_ them into the original Axway repository.

    ![Set status to Review](/Images/contributing/netlify_setstatustoreview.png)

    You will receive an email automatically generated by Netlify CMS with a link for the pull request created on GitHub.

7. To ensure that we have all the information we need to review your changes, go to GitHub and add a comment to the pull request, as there is currently no ability in Netlify CMS to tell us what you changed and why.

    You can also click the deploy preview link in the pull request to preview your changes exactly as they will appear on the live website.

## What to expect when you contribute

When you submit a PR, our team is notified and will respond as quickly as we can. We'll review your PR and ensure that the changes adhere to Axway style and standards by making additional edits for style or clarity.

We'll contact you if we need further information regards to your PR.

{{< alert title="Note" >}}
GitHub will send you an email notification for every update in your PR or issue.
{{< /alert >}}

When the review is finished, we'll merge your PR to this staging website first <https://axway-open-docs.netlify.com/>, then to production <https://docs.axway.com>.

## Create an issue on GitHub

Create an issue to inform us about a problem in the documentation. Please provide detailed information, for example, if it's missing information, an error in a procedure, information not clear, a broken link, and so on. The more details you provide, the more helpful the issue, and the faster we can prioritize and fix it.

To create an issue just click **Create documentation issue** on the upper right corner of the page, and add the relevant information.

* While you can create issues on GitHub to ask for updates, improving the documentation will be faster if you create a pull request and make the updates yourself.

## Additional resources

* [Markdown guidelines for Axway-Open-Docs](/docs/contribution_guidelines/writing_markdown/)
* [How to use Markdown for writing docs](https://docs.microsoft.com/en-us/contribute/how-to-write-use-markdown)
* [The Markdown Guide](https://www.markdownguide.org/)
* [Fork a GitHub repository](https://help.github.com/en/articles/fork-a-repo)
