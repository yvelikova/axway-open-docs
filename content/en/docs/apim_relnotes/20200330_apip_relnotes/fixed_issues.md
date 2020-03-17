---
title: Fixed issues
linkTitle: Fixed issues
weight: 5
date: 2020-03-11T00:00:00.000Z
description: Listing of fixed issues in this release of API Portal.
---

This version of API Portal includes the fixes from all 7.5.5, 7.6.2, and 7.7 service packs or updates released prior to this version. For details of all the service pack fixes included, see the corresponding SP Readme attached to each service pack on [Axway Support](https://support.axway.com).

## Fixed security vulnerabilities

<!-- TODO copy and paste the list from confluence -->

| Internal ID | Case ID | Description                                                                                                                                                                                       |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IAP-3082    |         |                                                                                                                                                                                                   |
| IAP-2878    |         | **Issue**: XSS vulnerability because arbitrary (non-existing) URIs can be accepted with "Itemid" query parameter. <br>**Resolution**: Users see Page Not Found is non-existing URI is requested. |

## Other fixed issues

<!-- TODO copy and paste the list from confluence -->

| Internal ID | Case ID | Description                                                                                                                                                                                                                                          |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IAP-2741    |         | **Issue**: There were two query parameters with same value on Try It page - "Itemid" and "menuId". <br>**Resolution**: "menuId" is removed in favour of "Itemid".                                                                                    |
| IAP-2871    | 1106851 | **Issue**: Users are unexpectedly logged out and redirected to the Sign In page after password change. <br>**Resolution**: Users are noticed that they will be logged out after successful password change, and then, a result message is displayed. |
| IAP-2952    |         | **Issue**: While testing endpoints, when the Content-Type is set to application/octet-stream the upload of files is not possible. <br>**Resolution**: No matter of the Content-Type header, files are always uploaded successfully.                  |
| IAP-3075    |         | **Issue**: Users aren't redirected to login page when they try a request with expired session due to legacy authentication mechanism. <br>**Resolution**: The legacy authentication mechanism is replaced with the newest possible.                  |
| IAP-3121    |         | **Issue**: SwaggerUI can't render when OAS 3.0 definitions has missing "component" key. <br>**Resolution**: The "component" key is first checked for existence, and then used.                                                                       |
