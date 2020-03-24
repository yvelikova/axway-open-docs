---
title: "Create and customize a new documentation project"
linkTitle: "Create and customize a new project"
weight: 6
date: 2020-03-24
description: >
  Understand how to create and customize your own documentation project.
---

This section provides detailed steps for you to create and customize your own documentation project using the same tools as this project. This is intended for use by other teams who want to open source their documentation and enable contributions using GitHub and Netlify CMS.

## Before you start

You must have completed all of the steps in [Set up and work locally](/docs/contribution_guidelines/setup_work_locally/).

## Create a new documentation project

This section shows how to create a new project based on the `docsy-example` project that Axway-Open-Docs is based on.

### Fork and rename the `docsy-example` project

1. Go to the [docsy-example project on GitHub](https://github.com/google/docsy-example).
2. Fork the project to your personal GitHub account. Your fork is now available at the URL `https://github.com/USERNAME/docsy-example`.
3. Go to your fork on GitHub and click **Settings**.
4. Enter a new name (for example, `open-docs-MYPROJECT`) in the **Repository name** field and click **Rename**. Your fork is now available at the URL `https://github.com/USERNAME/open-docs-MYPROJECT`.

### Clone your fork

Enter the following commands in Ubuntu WSL to clone your fork:

```
cd ~
git clone --recurse-submodules --depth 1 git@github.com:YOUR-USERNAME/open-docs-MYPROJECT.git
```

{{% alert title="Note" %}}
You must use `--recurse-submodules` or you will not pull down the Docsy theme code you need to generate a working site.
{{% /alert %}}

After running these commands, you will have a local copy of the repository in the following location:

```
/home/YOUR-UNIX-USERNAME/open-docs-MYPROJECT
```

### Build the site locally

Run the `hugo server` command in your site root:

```
cd ~/open-docs-MYPROJECT/
hugo server
```

The website is now available locally at `http://localhost:1313/`.

## Customize the new project

This section shows how to customize the new project with the project-specific settings and with the same look-and-feel and functionality as Axway-Open-Docs.

### Update `config.toml`

Open the `config.toml` file in VSCode and edit the following settings.

`baseURL`
: Set this to `https://axway-open-docs-MYPROJECT.netlify.com/`

`title`
: Set this to `Axway-Open-Docs`

`[services.googleAnalytics]`
: Set the `id` field to a valid Google Analytics ID for your project or comment it out.

`[languages.en]`
: Copy and replace all the values in this section with the values from [Axway-Open-Docs `config.toml`](https://github.com/Axway/axway-open-docs/blob/master/config.toml).

`[languages.no]`
: This is an example of language support. Remove this section in `config.toml` and you can also delete the `content/no` directory.

`[params]`
: Copy and replace all the values in this section with the values from [Axway-Open-Docs `config.toml`](https://github.com/Axway/axway-open-docs/blob/master/config.toml).
: Set the `github_repo` field to the URL of your new project, for example, `https://github.com/USERNAME/open-docs-MYPROJECT`.
: Set the `algolia_docsearch` field to `false` for now. You must have Algolia DocSearch set up to use this field.

`[params.ui]` and `[params.ui.feedback]` and `[params.links]`
: Copy and replace all the values in these sections with the values from [Axway-Open-Docs `config.toml`](https://github.com/Axway/axway-open-docs/blob/master/config.toml).
