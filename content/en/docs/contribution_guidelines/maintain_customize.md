---
title: "Maintain and customize this site"
linkTitle: "Maintain and customize"
weight: 5
date: 2019-07-11
description: >
  Understand how to maintain and customize this documentation site.
---

{{% alert title="Note" %}}
This topic is for documentation site maintainers only!
{{% /alert %}}

If you are a maintainer of this documentation site, this topic includes all the information you need to maintain and customize the site.

## Before you start

* Complete the steps in [Set up and work locally](setup_work_locally)

## Overview of tools

This documentation site uses the following tools:

* GitHub - All source files are stored in a Github repo.
* Hugo - The documentation site is built using the Hugo static site generator.
* Docsy - The documentation site uses the Docsy documentation theme from Google.
* Netlify - The site is deployed on Netlify. Deployments are triggered by pushes to GitHub.
* Netlify CMS - Provides a WYSIWYG view of documentation pages.

<!--- TODO Add info about TravisCI, linters, recommended editors --->

## Overview of config files

This following configuration files can be found in the site root:

* `config.toml` - Hugo and Docsy theme configuration
* `netlify.toml` - Netlify deployment configuration
* `static/admin/config.yml` - Netlify CMS configuration

## Update the Docsy theme

The Docsy theme is installed in this site's git repo as a git submodule. To update the theme with the latest commits from the [Docsy GitHub repo](https://github.com/google/docsy):

1. In Git CLI, navigate to the root of the local repo and checkout **master**. For example:

    ```
    cd axway-open-docs
    git checkout master
    ```

2. To update the submodule, run:

    ```
    git submodule update --remote
    ```

3. Add and then commit the change:

    ```
    git add .
    git commit -m "Updating Docsy theme submodule"
    ```

4. Push the commit to your project repo. For example:

    ```
    git push
    ```

5. Tell  all project maintainers to run:

    ```
    git checkout master
    git pull
    git submodule update --recursive
    ```

## Customize the Docsy theme

This section explains how to customize various elements of the Docsy theme.

### Add code to head and body end of pages

To add code to the `head` and end of the `body` sections of each page (for example if using Netlify Identity with Netlify CMS), create the files `layouts/partials/hooks/head-end.html` and `layouts/partials/hooks/body-end.html` and add the code in those files. For details, see [the Docsy instructions](https://docsydocs.netlify.com/docs/adding-content/lookandfeel/#add-code-to-head-or-before-body-end).

### Change colors and fonts

To change the theme colors and fonts, modify the file `assets/scss/_variables_project.scss` as detailed in [the Docsy instructions](https://docsydocs.netlify.com/docs/adding-content/lookandfeel/).

### Change the logo and background images

To change the logo, add a logo file as `assets/icons/logo.svg`. This overrides the theme logo.

To change the background image on the home page (`content/en/_index.html`) add an image containing `background` in the file name to the `content/en/` folder, for example, `content\en\featured-background.jpg`.

For more details, see [the Docsy instructions](https://docsydocs.netlify.com/docs/adding-content/iconsimages/).

<!-- TODO Change the favicon for the browser tab-->

### Change icons

To change a specific Font Awesome icon, locate an alternative icon on <https://fontawesome.com/> and replace the icon class in the code. The exact steps tdiffer depending on whether the icon is being used in a content page, a shortcode, a partial layout, and so on.

### Remove the About section

To remove the About section in the main navigation, delete the folder `content\en\about` and set the following parameter in `config.toml`:

```
footer_about_disable = true
```

### Add or change buttons on right nav

The right nav for each page or post shows **Edit this page** and other buttons.

To change the text of a button:

1. Create an override file `i18n/en.toml`
2. Copy the field to override from `themes/docsy/i18n/en.toml` and edit the string value. For example, to change the Edit button from **Edit this page** to **Improve this page**:

```
[post_edit_this]
other = "Improve this page"
```

To create a new buttton in the right nav:

1. Create a new partial layout `layouts/partials/page-meta-links.html`
2. Copy the content from `themes/docsy/layouts/partials/page-meta-links.html`
3. Customize the code to implement a new button
4. Add the button text string to `i18n/en.toml`

### Using variables

A list of variables can be found in `axway-open-docs/layouts/shortcodes/variables`, stored as HTML files, where the name of the file is the name of the variable. These HTML files just contain the value of the variable.

Variables are called in markdown documentation files with the following:

`{{</*  variables/variable_name  */>}}`

Where `variable_name` is the name of the HTML file that contains the variable value, without the `.html` extension.

For example, 

*"We love Axway Open Docs!"*

would be written in markdown as 

*"We love {{</* variables/company_name */>}} Open Docs!"*

Where `company_name` is stored in `axway-open-docs/layouts/shortcodes/variables` as a HTML file called `company_name.html` and simply contains `Axway`.
 
### Creating variables

Variables are stored in the `axway-open-docs project` as HTML files.

#### Using File explorer

Navigate to `axway-open-docs/layouts/shortcodes/variables` and create a HTML file. Consider the file name carefully since the shortcode name will mirror that of the file but without the `.html` extension. For example, `axway-open-docs/layouts/shortcodes/variables/company_name.html` will be called with `{{</* variables/company_name */>}}` in the markdown file.

Once you've created the file, open it up with your favorite text editor and simply add the value of the variable into it. For example, `axway-open-docs/layouts/shortcodes/variables/company_name.html` simply contains `Axway`.

#### Using Shell

You can customize and run the following bash command (using relative paths):

`echo "Variable value here!" > axway-open-docs/layouts/shortcodes/variables/name_of_variable_file.html`

This will create the HTML file inside of the `shortcodes/variables` directory and add whatever value you want to it.
