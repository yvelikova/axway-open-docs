---
title: GetProductsResponse
linkTitle: GetProductsResponse
weight: 55
date: 2020-03-05
description: Response format for the Get Products method.
---

### Product

| Property Name    | Data Type                             | Optional | Description |
|------------------|---------------------------------------|----------|-------------|
| id               | string                                |       no | Identifier of this product for the purposes of Axway Support case management. |
| name             | string                                |       no | The name of the product.
| versions         | [ [ProductVersion](#productversion) ] |       no | Supported versions of the product. |
| operatingSystems | [ [ProductOs](#productos) ]           |       no | Supported host operating systems for the product. |

### ProductVersion

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| id            | string    |       no | Identifier of this product version for the purposes of Axway Support case management. |
| name          | string    |       no | Product version name. |

### ProductOs

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| id            | string    |       no | Identifier of this operating system for the purposes of Axway Support case management. |
| name          | string    |       no | Operating system name. |
