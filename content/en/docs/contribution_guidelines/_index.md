---
title: "Contribution guidelines"
linkTitle: "Contribution guidelines"
no_list: true
weight: 200
description: >
  How to contribute to Axway-Open-Docs
---

This documentation is open source, and we welcome your interest in contributing to improve the quality of our docs.

Please read this guide thoroughly before you start.

## Before you start

Before you can contribute to Axway-open-docs you must sign the [Axway Contributor License Agreement (CLA)](https://cla.axway.com/) using your GitHub account.

This is required just once and it should only take a few minutes.

## Contribution flows

All the documentation on this website is written in Markdown. The textual content is stored in the `/content/en/docs/` folder, and the images, in the `/static/Images/` folder.

We support the following contribution flows:

1. Pull request (PR) via GitHub UI (ideal for small or infrequent changes). See [Edit on GitHub](#option-1-edit-on-github).
2. Pull request via Netlify CMS (WYSIWYG option ideal for non-technical users). See [Edit on Netlify CMS](#option-2-edit-on-netlify-cms).

For experienced users, we also support pull requests via Git CLI (ideal for bigger changes or regular updates). See [Set up and work locally](/docs/contribution_guidelines/setup_work_locally).

{{< alert title="Note" >}}
All flows require a GitHub account.
{{< /alert >}}

Finally, if you cannot make a direct contribution, but want to report an issue with this documentation, you can do so using GitHub. See [Create an issue on GitHub](#create-an-issue-on-github).

### Option 1 - Edit on GitHub

{{< alert title="Note" color="primary">}}If you have previously contributed to this project, your fork might be out of sync (behind) the `axway-open-docs` repository. It is best practice to [sync or delete an outdated fork](/docs/contribution_guidelines/deleting_a_repository/) before making a new contribution.{{< /alert >}}

1. Click **Edit on GitHub** on the upper right corner of the page.
2. Click **Fork this repository** to create a copy (fork) of the `axway-open-docs` repository in your GitHub account. This allows you to propose changes to a repository that you don't have write access to.
3. Make your changes to the page in the Markdown editor.

    Click the **Preview changes** tab to check the formatting of your changes.

    ![Preview before creating PR](/Images/contributing/netlify_preview_beforecreating_PR.png)

4. At the bottom of the page, add a meaningful message describing your change and click **Propose file change**.
5. In the Comparing changes page, check that `Axway/axway-open-docs` is shown on the left, and that your fork is shown on the right, and click **Create pull request**. A pull request enables us to review the changes you made on your fork and _pull_ them into the original repository.

    ![Compare changes and create pull request](/Images/contributing/compare_changes_pr.png)

6. Enter a title (and optionally a description) for the pull request, and click **Create pull request** again. Leave **Allow edits from maintainers** selected, to enable us to make editorial updates to your PR if necessary.

7. To preview your changes exactly as they will appear on the live website, click the deploy preview link:

    ![Preview your PR](/Images/contributing/netlify_preview_PR.png)

    This link opens the home page of the website in the same tab. You must navigate to the page you edited.

### Option 2 - Edit on Netlify CMS

Use the Netlify CMS user interface to easily edit or create pages in a WYSIWYG editor with a real-time preview.

* [Edit an existing page](#edit-an-existing-page)
* [Make further changes after sending for review](#make-further-changes-after-sending-for-review)
* [Create a new page](#create-a-new-page)

#### Edit an existing page

To edit an existing page:

1. Click **Edit on Netlify CMS** on the upper right corner of the page.
2. Sign in to Netlify CMS using your GitHub account.
3. Click **Fork the repo** to fork the repository.

    This option is shown only on the first time that you make a contribution. This creates a copy (fork) of the Axway repository in your GitHub account, so the changes you make are applied to the files on your fork, and not to the Axway repository.
4. Make your changes on the editor and click **Save**. You can check the formatting in the live preview panel, on the right side.
5. When you are finished making changes, set the status of the content to **In review**.

    ![Set status to Review](/Images/contributing/netlify_setstatustoreview.png)

    This creates a pull request on the background and triggers an email notification to you and the Technical Writers, who will review your changes.

6. To preview your changes exactly as they will appear on the live website, reload the page and check that a new link **Check for Preview** is available. Reload the page again until this links changes to **View Preview**.

    ![Preview on CMS](/Images/contributing/cms_deploy_preview.png)

7. Optionally, you can go to GitHub and add a comment to the pull request to tell what you changed and why.

#### Make further edits after sending for review

To make further changes to a page:

{{< alert title="Note" >}}
This only applies if your pull request is **In review**, that is, it was not merged yet.
{{< /alert >}}

1. In Netlify CMS, click **Workflow** to see the page that you have edited earlier. The page should be on the **In Review** panel.

    ![Workflow](/Images/contributing/netlify_workflowButton.png)

2. Click the page to open it.
3. Verify that the status of the page is **In review**, so you do not need to change this.
4. Make your changes and click **Save**.
5. Optionally, you can go to GitHub and verify the changes that were added to your pull request.

#### Create a new page

To create a new page:

1. Go to [Netlify CMS](https://axway-open-docs.netlify.com/admin/).
2. Using the left menu, find the section where you want to create the new page.
3. Click **New page in... section** to create a new page in this section.

    ![Create a new page](/Images/contributing/netlify_createNewPage.png)

4. Give the page a title, summary, and add the content.
5. **Save** the page, and set its status to **In Review**.
6. Refresh the page and click **Check for Preview/View Preview** to see your changes.
7. Optionally, check your e-mail for the GitHub notifications.

## What to expect when you contribute

When you submit a PR, our team is notified and will respond as quickly as we can. We'll review your PR and ensure that the changes adhere to Axway style and standards by making additional edits for style or clarity.

We'll add a comment to the pull request if we need further information regards to your PR. Therefore, it is important that you keep an eye on your email notifications.

{{< alert title="Note" >}}
GitHub will send you an email notification for every update in your PR or issue.
{{< /alert >}}

When the review is finished, we'll merge your PR and publish the changes on [Axway-Open-Docs](https://axway-open-docs.netlify.com), and then on the [Axway Documentation portal](https://docs.axway.com).

## Create an issue on GitHub

Create an issue to inform us about a problem in the documentation. Please provide detailed information, for example, if it's missing information, an error in a procedure, information not clear, a broken link, and so on. The more details you provide, the more helpful the issue, and the faster we can prioritize and fix it.

To create an issue just click **Create documentation issue** on the upper right corner of the page, and add the relevant information.

## Additional resources

* [Markdown guidelines for Axway-Open-Docs](/docs/contribution_guidelines/writing_markdown/)
* [How to use Markdown for writing docs](https://docs.microsoft.com/en-us/contribute/how-to-write-use-markdown)
* [The Markdown Guide](https://www.markdownguide.org/)
* [Fork a GitHub repository](https://help.github.com/en/articles/fork-a-repo)
