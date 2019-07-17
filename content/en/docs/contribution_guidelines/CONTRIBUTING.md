---
title: "WIP - Guidelines for contributing"
linkTitle: "Contribution Guidelines"
weight: 9
description: >
  How to contribute to API Management documentation
---
API Management documentation include the following guides:

- API Portal 7.8 Installation Guide.
- API Portal 7.8 Administrator Guide.
- API Gateway 7.8 Apache Cassandra Administrator Guide.
- API Gateway 7.8 Installation Guide (currently not open for contribution)
- API Gateway 7.8 Administrator Guide (currently not open for contribution)
- API Manager 7.8 Installation Guide (currently not open for contribution)
- API Manager 7.8 Administrator Guide (currently not open for contribution)

The documentation is written in Markdown, and it is stored in `/content/en/docs/`.

While you can create issues to ask for updates, it's faster to create a pull request (PR) to fix the issue. 

### What to expect when you contribute

When you submit a pull request, our team is notified and will respond as quickly as we can. We'll review your PR and ensure that the changes adhere to Axway style and standards by making additional edits for style or clarity.

We'll contact you if we need further information regards to your PR.

When the review is finished, we'll merge your PR to the staging website first (axwaydocs.netlify.com), then to production (docs.axway.com).

> Git will send you and email notification for every update in the PR

### Edit with Github

To edit a content and send a PR:

- Click [Edit this page] on the upper right corner of the page
- Make the changes in Git UI
- Add a meaningful message to your commit and create the PR
> If you have a Jira ticket for this change, rename your branch with the ID of the ticket (for example, APIGOV-1234, RDAPI-1234) to be able to preview the topic with your changes on the staging portal).

---
**TIP**

In order to submit changes to multiple pages under a single pull request, or create new topics you must clone the documentation project, make the changes on your local branch, and submit a (PR) to the `master` branch. Having the project locally also gives you more flexibility to make the updates on you preferable editor, instead of using Git UI.

---

### Create an issue

When you submit a pull request, our team is notified and will respond as quickly as we can. 
To create an issue:

Click [Edit this page] on the upper right corner of the page


### Additional resources

- [Axway quick reference for writing.](https://techweb.axway.com/confluence/display/RIE/Quick+Reference+Do%27s+and+Don%27t%27s) (on confluence, should we move it to this project)
- [How to use Markdown for writing Docs.](https://docs.microsoft.com/en-us/contribute/how-to-write-use-markdown)
- [Cloning a Git repository.](https://help.github.com/en/articles/cloning-a-repository)
- Contribute with API Management documentation using Netlify CMS (WYSYWYG editor).

### Axway API Management technical writers

- Alex Earnshaw (aearnshaw)
- Andrea Mussap (amussap)
