---
title: Save an OAuth client access token
linkTitle: Save an OAuth client access token
date: 2019-11-18
description: You can use the **Save an OAuth Client Token** filter to save a token with a different token key.
---

## Overview

This filter can fail if:

* The token has no token key
* The token has no application
* The token key is the same key that was already stored for the application
* There is a problem saving the token to persistent storage

## General settings

Configure the following general settings for the **Save an OAuth Client Token** filter:

**Name**:\
Enter a suitable name for this filter.

**Choose OAuth Token Key**:\
Enter the message attribute to be used as the token key. Defaults to `${authentication.subject.id}`.
