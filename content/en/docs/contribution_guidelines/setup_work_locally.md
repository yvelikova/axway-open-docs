---
title: "Set up and work locally"
linkTitle: "Set up and work locally"
weight: 3
date: 2019-07-09
description: >
  How to set up and build this documentation site locally.
---

If you are a maintainer of this documentation site, or a contributor who will be making frequent or major contributions to the documentation, we recommend you set up and build the site locally on your computer. This enables you to easily test changes locally before pushing to GitHub.

## Set up environment and install required tools

Before you can build the site locally you must set up an environment and install the following tools.

* Git client - This is how you will interact with the GitHub repository.
* Hugo (extended version) - This is the static site generator that builds the HTML site from Markdown.
* Docsy - This is a documentation theme for Hugo.
* NodeJS - This is required by the Docsy theme to install the PostCSS dependencies using `npm`.

### Recommended environment

Although you can build the site on Windows or macOS, it is strongly recommended to use a Linux distribution, as this is what is used to build the production site on Netlify.

#### Windows Subsystem for Linux

If you are unfamiliar with Linux environments, you can get up and running very quickly by installing the [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/about).

To install WSL on Windows 10, follow the [WSL installation guide on Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/install-win10). This guide describes how to:

1. Enable the WSL feature in your Windows 10 installation.
2. Download and install a Linux distribution from the Microsoft Store. Select **Ubuntu 18.04 LTS**.
3. Initialize the Linux distro, including how to launch it for the first time, how to set up a Linux user account, and how to update and upgrade the packages in the distro.

It is important that you complete all of the steps in the WSL installation guide before proceeding.

#### Gitbash on Windows

If for some reason you cannot use WSL or another Linux distribution, you can install and use [Gitbash for Windows](https://git-scm.com/download/win). In this case, you will need to use the Gitbash terminal to enter commands instead of the WSL terminal.

### Create a GitHub account and set up SSH keys

If you do not already have a GitHub account, go to [Sign up](https://github.com/join) to create one.

#### Generate SSH keys

Launch WSL and generate a new SSH key pair:

```
ssh-keygen -t ed25519
```

Press Enter when prompted for a path and a passphrase. You can find more detailed information in [Generating a new SSH key pair](https://docs.gitlab.com/ee/ssh/#generating-a-new-ssh-key-pair).

#### Add SSH key to your GitHub account

1. On GitHub, click the drop-down next to your profile photo at the top right, and select **Settings > SSH and GPG keys**.
2. Click **New SSH key**.
3. In WSL, enter the following to print the SSH key in your terminal:

    ```
    cat ~/.ssh/id_ed25519.pub
    ```

4. Copy and paste the key from your WSL terminal to the **Key** text box on GitHub and enter a memorable name for the key in the **Title** field. Click **Add SSH key** to save it.

### Fork or clone the Axway-Open-Docs Git repository

You have two options to clone the the [axway-open-docs Git repo](https://github.com/Axway/axway-open-docs) to your local machine:

1. Clone the Axway-Open-Docs repository directly. This requires that you have write permissions on the repository to make any changes.
2. Fork (make a copy) of the Axway-Open-Docs repository in your personal GitHub account and clone the fork. To fork the repository, follow the steps in [Fork a repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

To clone the Axway-Open-Docs repository directly, enter the following commands in WSL:

```
cd ~
git clone --recurse-submodules --depth 1 git@github.com:Axway/axway-open-docs.git
```

If you have forked the Axway-Open-Docs repository, enter the following commands to clone your _fork_ of the repo instead:

```
cd ~
git clone --recurse-submodules --depth 1 git@github.com:YOUR-USERNAME/axway-open-docs.git
```

{{% alert title="Note" %}}
In both cases, you must use `--recurse-submodules` or you will not pull down the Docsy theme code you need to generate a working site.
{{% /alert %}}

After running these commands, you will have a local copy of the repository in the following location:

```
/home/YOUR-UNIX-USERNAME/axway-open-docs
```

### Install Hugo

You need a recent **extended** version (version 0.53 or later) of Hugo to build and run the site. If you install from the [Hugo releases page](https://github.com/gohugoio/hugo/releases), make sure to get the `extended` Hugo version, which supports SCSS.

Enter the following commands in WSL to download and unpack the Linux 64 bit deb package:

```
wget https://github.com/gohugoio/hugo/releases/download/v0.56.3/hugo_extended_0.56.3_Linux-64bit.deb
sudo dpkg -i hugo_extended_0.56.3_Linux-64bit.deb
```

{{% alert title="Note" %}}
Do not use `sudo apt-get install hugo` to install on Linux, as it does not always get you the `extended` version.
{{% /alert %}}

For full installation instructions for other platforms, see [Install Hugo](https://gohugo.io/getting-started/installing/).

### Install NodeJS and PostCSS

You need a recent version (10.x or later) of [NodeJS](https://nodejs.org/en/) so you can use `npm` to install PostCSS.

Enter the following commands in WSL to install NodeJS version 10.x:

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

See [Node.js Binary Distributions](https://github.com/nodesource/distributions/blob/master/README.md) for instructions for installing other versions on Ubuntu.

Enter the following commands in WSL to install PostCSS using `npm`:

```
cd ~/axway-open-docs
sudo npm install -D --save autoprefixer
sudo npm install -D --save postcss-cli
```

## Build the site locally

Run the `hugo server` command in your site root:

```
cd ~/axway-open-docs/
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
