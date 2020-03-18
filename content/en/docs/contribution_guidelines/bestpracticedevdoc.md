---
title: "Best practices for developer documentation"
linkTitle: "Best practices for developer documentation"
weight: 70
date: 2020-03-16
description: >
    This is a compilation of some best practices to observe when developing Axway product's documentation.
---

## Organizing your documentation

Present your documentation in a way that it is easy to read, and usable and helpful for customers.

### Navigation menus hierarchical structure

Clear navigation is highly usable, it helps the user to navigate through your website. Think about what are the main topics that the user will be searching for, and under those, what specific questions or documents they will be looking for.

Organize similar type of contents under the same menu, for example, you can place all Installation and Upgrade manuals under the **Installation instructions** menu. This make it easier to find all information related to installation in one place.

More than three levels can make the menu confusing to navigate.

Example:

* [Kubernetes Troubleshooting](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/)
* [Kong Enterprise Documentation](https://docs.konghq.com/enterprise/)

### Make the documentation discoverable/ SEO

Documentation is only as helpful as it is easy to find. Docs should be included in Google's search engine to help users discover the contents and improve the documentation visibility on search engines.

Some recommendations for using search engine optimization (SEO):

* Create short, unique, and accurate page titles
* Meta description should describe the content (this gives Google and other search engines a summary of what the page is about)
* The navigation of a website helps search engines to understand what content the webmaster thinks is important
* Embed URLs with words that are relevant to your site's content to improve the user experience

## Writing documentation

To help users go beyond in their understanding and provide more in-depth information:

### Add a Get started

Add a Get started section to introduce your product and detail the first steps users need to start using the product.

Example:

* [Getting Started with Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html)
* [Getting Started with](https://docs.docker.com/get-started/)

### Add a Reference section

The Reference section aims to document more detailed reference to some particular parts of the software, which can be helpful to declutter topics by removing reference information from the middle of a concept or procedure.

This should provide the relevant content to support the performance of a task. Its audience are users who are familiar with the software but need some more details or a quick guidance. You can add technical references of the software’s code, functions, APIs, CLI, parameters and etc.

Example:

* [Flow variables reference](https://docs.apigee.com/api-platform/reference/variables-reference)
* [Amazon API Gateway Documentation](https://docs.aws.amazon.com/apigateway/index.html)
* [Docker Reference documentation](https://docs.docker.com/reference/)
* [Kubernetes Reference](https://kubernetes.io/docs/reference/)
* [Oracle Administrator’s Guide](https://docs.oracle.com/en/database/other-databases/nosql-database/19.5/admin/admin-cli-reference.html)

### Add a Glossary

Defines all the terms that might be unique to your company or product. In some cases, the user’s understanding of the documentation might depends on the clarity and alignment of specific terms.

Example:

* [AWS Glossary](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html)
* [Docker Glossary](https://docs.docker.com/glossary/)

### Add Tutorials

Tutorials are lessons that walk a reader through a series of steps to complete a procedure. A tutorial shows how to accomplish a goal that is larger than a single task.

Example:

* [Tyk Create an API](https://tyk.io/docs/get-started/with-tyk-on-premise/tutorials/tyk-on-premises-pro/create-api/)
* [Kubernetes basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

### Add How-to guides

How-to guides assume that users already possess some basic knowledge of features, tools, and of how to perform simple tasks. They help intermediate or experienced users to solve a real-world task using the software.

Example:

* [Tyk Planning for Production](https://tyk.io/docs/deploy-tyk-premise-production/)
* [kubernetes Assign-memory-resource](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/)

## Code samples and scripts

Code samples and downloadable scripts help the user to get up and running fast. The code must be followed by an explanation on how to use it to achieve a goal.

### Add code samples

Code samples are small snippets of code to help the user to understand a concept previously explained. They can also be used to demonstrate the syntax of attributes or parameters.

Example:

* [Apache Configuration](https://httpd.apache.org/docs/2.4/sections.html)
* [Oracle Create and Deploy Replication Nodes](https://docs.oracle.com/en/database/other-databases/nosql-database/19.5/admin/create-and-deploy-replication-nodes.html)

### Add downloadable scripts

Provide code examples in a way that customers can copy/paste and try out your product. The sample could also be downloadable, which is less error prone than copying and pasting.

Example:

* [A Sample: Array of JSON Documents](https://docs.oracle.com/en/database/other-databases/nosql-database/19.5/full-text-search/appa-json-array.html).
* [You can find a few example schema files in Autopilot Templates repo on GitHub](https://www.twilio.com/docs/autopilot/twilio-autopilot-cli#schema-files).

## Review your work

### Delete dead documentation

Old, outdated, non-used guides can misinform and slow down the user experience on the website. They can show results in the search, which are not relevant (or, even correct) anymore.

### Do not duplicate information

Duplicated content creates inconsistency and frustration, and are very hard to maintain.

* Avoid duplication of information on your own guides
* Record the information once where it enhances the work the most
* Do not write your own guide to a common technology or process. Link to it instead

## Writing style

Follow these guidelines to make your content concise and clearer.

### Page length

* Determine page length by relevance of information
* it is ok to have long pages when the informational units are related. Users don't have to scroll down the page, they can use the right-side menu (available on Axway open docs pages) or they can search (Ctrl + F) for what they're looking for
* Long pages saves people from jumping back and forth between pages when the related and relevant information could be all in one place

### Place the information in the most appropriate place

Assess the best place for chunks of information by the needs of the customer of that information, where are they most likely to need it.

Think about some questions to figure out what is the best place for the content:

* Is a specific requirement best captured as part of a use case, in a business rule specification, or as an executable test?
* Where will somebody likely want a piece of documentation?
* In the code, added as note on a diagram, or best placed in an external document?

## Be minimalist

Find a balance between no documentation and excessive documentation.

* Make documentation skimmable to help users find the content they need quickly
* Action-oriented headings (strong, clear verbs)
* Remember that users scan in F-Shaped pattern
* Break up the text often
* First 3-5 words of every paragraph are the most important
* Use bullet lists
* Use variations in typeface (links, bold, etc)
* Use code snippets
* Use screenshots sparingly
* Use animated gifs

## Using hyperlinks

Readers use links as guideposts when scanning. Effective link text helps readers to understand where each link leads and decide whether they want to click the link or not.

Observe these guidelines to improve user experience and accessibility.

* Do not paste the actual URL in the page as this does not read well, specially for screen readers (accessibility)
* Do not use **Click here**. it is bad for SEO, and does not describe the target. Provide a meaningful description, label to the link indicating what the user will see after following the link
* Choose keywords or phrases that best represent the content of the destination

## Do not overuse tables

In general, you should use tables to display data as a way to make your document or web page look the way you want it to.

Not all analyses or results warrant a table or image. Some simple results are best stated in a simple and short paragraph.

Tables can be used as quick references and can reveal trends, patterns, or relationships that might otherwise be difficult to grasp in plain-text format. They permit rapid access to and relatively easy comparison of information.

Contrary, overly complicated tables may be difficult to understand, so strive for simplicity (single-cell tables). Complex tables can be a challenge for adaptive technology users (users of screen reader software).

Accessible tables are simple, and they have an identified header row, and include a table summary, either as a caption or as alt text. These techniques help screen reader users read the information contained in the table.

## Do not overuse screenshots

Screenshots are hard to maintain, and if they aren't up to date they can be misleading.

Too many unnecessary screenshots can also clutter the page.

If you can present your results clearly in a few short sentences, or in a list of steps, this means that an image is probably unnecessary.
