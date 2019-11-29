---
title: Delete an OAuth client access token
linkTitle: Delete an OAuth client access token
date: 2019-11-18
description: You can use the **Delete an OAuth Client Token** filter to explicitly delete an OAuth client access token, or refresh token, or both.
weight: 1
---

## Overview

This filter requires the message attribute `oauth.client.application` to determine if the application has an access token, or refresh token, or both. The filter returns false if the required message attribute is not set or if there is a problem removing an access or refresh token from token storage.

## General settings

Configure the following general setting for the **Delete an OAuth Client Token** filter:

**Name**:\
Enter a suitable name for this filter.
