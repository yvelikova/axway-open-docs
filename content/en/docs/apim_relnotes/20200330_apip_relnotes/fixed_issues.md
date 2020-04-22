---
title: Fixed issues March
draft: true
linkTitle: Fixed issues
weight: 5
date: 2020-03-11T00:00:00.000Z
description: Listing of fixed issues in this release of API Portal..
---
This version of API Portal includes the fixes from all 7.5.5, 7.6.2, and 7.7 service packs or updates released prior to this version. For details of all the service pack fixes included, see the corresponding SP Readme attached to each service pack on [Axway Support](https://support.axway.com).

## Fixed security vulnerabilities

<!-- TODO copy and paste the list from confluence -->

| Internal ID | Case ID | Description                                                                                                                                                                                     |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IAP-3082    |         | **Issue:** `node-sass` package is vulnerable to uncontrolled recursion. **Resolution:** `node-sass` was moved to development packages.                                                          |
| IAP-2878    |         | **Issue**: XSS vulnerability because arbitrary (non-existing) URIs can be accepted with `Itemid` query parameter. **Resolution**: *Page Not Found* is shown when non-existing URI is requested. |

## Other fixed issues

| Internal ID | Case ID  | Description                                                                                                                                                                                                                                      |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| IAP-2741    |          | **Issue**: There were two query parameters with same value on Try It page (itemId and menuId). **Resolution**: `menuId` is removed in favor of `itemId`.                                                                                    |
| IAP-2871    | 1106851  | **Issue**: Users are unexpectedly logged out and redirected to the Sign In page after password change. **Resolution**: Users are informed that they will be logged out after successful password change, and a result message is displayed. |
| IAP-2952    |          | **Issue**: While testing endpoints, when the Content-Type is set to application/octet-stream the upload of files is not possible. **Resolution**: Files are always uploaded successfully despite the Content-Type header.                  |
| IAP-3075    |          | **Issue**: Users are not redirected to login page when they try a request with expired session due to legacy authentication mechanism. **Resolution**: The legacy authentication mechanism is replaced with the newest possible.                 |
| IAP-3121    |          | **Issue**: SwaggerUI cannot render when OAS 3.0 definitions have missing *component* key. **Resolution**: The *component* key is first checked for existence, and then used.                                                                     |
| IAP-3132 | | **Issue:** PHP version requirements are not specific. **Resolution:** Added clarification to the documentation that PHP 7.4 is supported after Jan20 version and in API Portal 7.6.2 the supported versions for PHP are from 7.1 to 7.3. |
| IAP-3139    | 01140234 | **Issue**: There was a blank space between site navigation and page title when system messages were closed. **Resolution**: Container of system messages is removed when all of messages are closed. |
