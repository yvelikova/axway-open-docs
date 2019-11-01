---
title: "Set up and work locally"
linkTitle: "Set up and work locally"
weight: 3
date: 2019-07-09
description: >
  How to set up and build this documentation site locally.
---

If you are a maintainer of this documentation site, or a contributor who will be making frequent or major contributions to the documentation, we recommend you set up and build the site locally on your computer. This enables you to easily test changes locally before pushing to GitHub.

You can build the site locally on Windows, macOS, or Linux, but the following steps are verified for Windows 10 and for [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) Ubuntu Linux on Windows 10.

## Before you start

* You will need a GitHub account
* You will need a Git client installed, such as [Gitbash for Windows](https://git-scm.com/download/win), and basic familiarity with Git CLI commands.
* You will need write access to the [axway-open-docs Git repo](https://github.com/Axway/axway-open-docs) or alternatively, you can [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) (make a copy) of the repo in your own GitHub account.

## Clone the Git repo

In your Git CLI client, clone the repo to your local machine:

```
git clone --recurse-submodules --depth 1 https://github.com/Axway/axway-open-docs.git
```

{{% alert title="Note" %}}
Don't forget to use `--recurse-submodules` or you won't pull down some of the Docsy theme code you need to generate a working site.
{{% /alert %}}

If you don't have write access to the repo, clone your _fork_ of the repo instead:

```
git clone --recurse-submodules --depth 1 https://github.com/YOUR-USERNAME/axway-open-docs.git
```

## Install Hugo

You need a [recent **extended** version](https://github.com/gohugoio/hugo/releases) (version 0.53 or later) of Hugo to build and run the site. If you install from the releases page, make sure to get the `extended` Hugo version, which supports SCSS (for example, `hugo_extended_0.59.1_Windows-64bit.zip`).

For full installation instructions for each platform, see [Install Hugo](https://gohugo.io/getting-started/installing/).

### Install Hugo on WSL Ubuntu Linux

Do not use `sudo apt-get install hugo`, as it currently doesn't get you the `extended` version.

Download and unpack the Linux 64 bit deb package:

```
wget https://github.com/gohugoio/hugo/releases/download/v0.56.3/hugo_extended_0.56.3_Linux-64bit.deb
sudo dpkg -i hugo_extended_0.56.3_Linux-64bit.deb
```

## Install NodeJS

You need a recent version (10.x or later) of [NodeJS](https://nodejs.org/en/) so you can use `npm` to install PostCSS.

### Install NodeJS on WSL Ubuntu Linux

This example installs NodeJS version 10.x:

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

See <https://github.com/nodesource/distributions/blob/master/README.md> for instructions for installing other versions on Ubuntu.

## Install PostCSS theme dependencies

The Docsy theme uses `PostCSS` to generate the site resources the first time you run the server. Install it using `npm`:

```
[sudo] npm install -D --save autoprefixer
[sudo] npm install -D --save postcss-cli
```

For more information, see the Docsy [Getting started](https://www.docsy.dev/docs/getting-started/) documentation.

## Build the site locally

Run the `hugo server` command in your site root:

```
cd axway-open-docs/
hugo server
```

The website is now available locally at `http://localhost:1313/`.

## Make changes locally

You can now add or edit Markdown files in the `content\en\docs\` directory and Hugo will automatically rebuild the site with your changes.

For editing Markdown we recommend using [VSCode](https://code.visualstudio.com/download) with the following extensions:

* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
* [Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts)
* [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
* [Remote Development pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) (work with files on WSL from VSCode on Windows)

When you are ready for your changes to be reviewed:

1. In your Git CLI client, `add`, `commit`, and `push` your files to the remote Git repo.
2. Create a pull request to enable a site maintainer to review the changes you made on your feature branch or fork and _pull_ them into the original Axway repository.

## Learn more

* [Hugo documentation](https://gohugo.io/documentation/)
* [Docsy theme documentation](https://www.docsy.dev/docs/)
* [Maintain and customize this site](/docs/contribution_guidelines/maintain_customize/)
