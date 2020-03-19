---
title: Close Case
linkTitle: Close Case
weight: 20
date: 2020-03-05
description: Close an existing Axway Support case.
---

## Request

**Endpoint**: `https://apis.axway.com/support/case`

**HTTP verb**: `DELETE`

{{% alert title="Note" %}}
The affected case is marked closed and not deleted from our systems.
{{% /alert %}}

### Parameters

| Name | Type | Data Type                                         | Required | Allow Multiple | Description |
| -----|------|---------------------------------------------------|----------|----------------|-------------|
| n/a  | body | [CaseNote](../../formats/close_case_req#casenote) |      yes |             no | Details required for case closure. |

**Example**:

```json
{
    "caseId": "00######",
    "subject": "Closure of case Example Case",
    "description": "Closing Example Case as it was resolved after feedback from Axway RnD."
}
```

## Response

**HTTP status code**: 200

**Content**:

| Type | Data Type                                     | Description |
|------|-----------------------------------------------|-------------|
| body | [ [Case](../../formats/close_case_res#case) ] | Details of the closed case. |

### Unsuccessful responses

**Content**:

| Type | Data Type                                     | Description |
|------|-----------------------------------------------|-------------|
| body | [ErrorResponse](../../formats/error_response) | Details of the error that occurred. |
