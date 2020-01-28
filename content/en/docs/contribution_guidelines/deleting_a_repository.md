---
title: "Delete an outdated fork before contributing to Axway documentation"
linkTitle: "Delete an outdated fork"
weight: 6
date: 2019-10-15
description: >
    A fork is a copy of a repository. You must make sure that your fork is up to date with the upstream repository before contributing to the documentation.
author: Andrea Mussap
---

The first time you make a contribution to the Axway documentation by way of the [Edit a page on GitHub](/docs/contribution_guidelines/#1-edit-a-page-on-github) flow, this creates a copy (fork) of the [axway-open-docs](https://github.com/Axway/axway-open-docs) project on your GitHub account.

Since there are other users collaborating with Axway documentation, it's highly likely that your fork will be behind the upstream repository quickly and you might encounter errors, or conflicts, the next time you try to send a pull request to `axway-open-docs`.

To avoid issues when sending a pull request, you can [delete and recreate](#delete-and-recreate-your-fork) or [synchronize](#sync-your-fork) your old fork before starting a new contribution.

{{< alert title="Caution" color="warning">}}Do not delete your fork if you have pending PRs, otherwise this will erase work that is not merged yet.{{< /alert >}}

## Delete and recreate your fork

The easiest way to make sure that your fork is up-to-date with the latest changes of the project is to delete and recreate your fork every time you make a new contribution:

1. You must log off from the [Netlify CMS](https://axway-open-docs.netlify.com/admin).

2. Go to your axway-open-docs fork on GitHub, and click **Settings**

    ```
    https://github.com/<your GitHub username>/axway-open-docs
    ```
    
    For example: 
    
    ```
    https://github.com/amussapvordel/axway-open-docs
    ```

    ![Delete fork Settings](/Images/contributing/deletefork_settings.png)

3. Under Danger Zone, click **Delete this repository**.

    ![Delete fork Danger Zone](/Images/contributing/deletefork_dangerzone.png)

4. Follow the [Edit a page on GitHub](/docs/contribution_guidelines/#1-edit-a-page-on-github) procedure to create a new fork and start contributing.

To know more about how to delete your fork, see [Deleting a repository](https://help.github.com/en/articles/deleting-a-repository).

## Sync your fork

You can sync your fork with the latest changes added to the upstream repository. However, this procedure involves running Git commands in a line interface (CLI).

See [Keep your fork synced](https://help.github.com/en/articles/fork-a-repo#keep-your-fork-synced) to know more about this.

If you have any question or suggestion, create an Issue at [axway-open-docs](https://github.com/Axway/axway-open-docs/issues) project.
