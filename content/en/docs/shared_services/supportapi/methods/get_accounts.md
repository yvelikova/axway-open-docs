---
title: Get Accounts
linkTitle: Get Accounts
weight: 40
date: 2020-03-05
description: Get all support accounts associated with the authenticated user.
---

## Request

**Endpoint**: `https://apis.axway.com/support/account`

**HTTP verb**: `GET`

## Response

**HTTP status code**: 200

**Content**:

| Type | Data Type                                             | Description |
|------|-------------------------------------------------------|-------------|
| body | [ [Account](../../formats/get_accounts_res#account) ] | List of accounts for which the authenticated user can open new or access existing support cases. |

### Examples

```json
[
    {
        "name": "Axway Customer Distinct Account 1",
        "sac": "00000"
    },
    {
        "name": "Axway Customer Distinct Account 2",
        "sac": "000001"
    }
]
```

### Unsuccessful responses

**Content**:

| Type | Data Type                                     | Description |
|------|-----------------------------------------------|-------------|
| body | [ErrorResponse](../../formats/error_response) | Details of the error that occurred. |
