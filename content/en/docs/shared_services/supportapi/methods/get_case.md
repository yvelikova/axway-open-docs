---
title: Get Case by ID
linkTitle: Get Case
weight: 10
date: 2020-03-05
description: Get the details of an existing Axway Support case.
---

## Request

**Endpoint**: `https://apis.axway.com/support/case/{id}`

**HTTP verb**: `GET`

### Parameters

| Name | Type | Data Type | Required | Allow Multiple | Description |
| -----|------|-----------|----------|----------------|-------------|
| id   | path | string    |      yes |             no | ID of the case to be retrieved. The ID is also referred to as case number. |

## Response

**HTTP status code**: 200

**Content**:

| Type | Data Type                                   | Description |
|------|---------------------------------------------|-------------|
| body | [ [Case](/docs/shared_services/supportapi/formats/get_case_res/#case) ] | Detailed case information. |

### Examples

```json
{
   "caseNumber": "00######",
   "subject": "Example Support API",
   "status": "New",
   "createdDate": "2018-06-12T11:33:41.000+0000",
   "modifiedDate": "2018-08-10T06:26:51.000+0000",
   "severity": "2 - Urgent",
   "impact": "2 - High",
   "urgency": "2 - Medium",
   "account": {
        "name": "Test Account Name",
        "sac": "{Numeric support access code}"
    },
    "contact": {
        "email": "example@axway.com",
        "name": "Example Name"
    },
    "owner": {
        "email": "example@axway.com",
        "name": "Operators"
    },
    "description": "Example Support API.",
    "environment": "Unknown",
    "notes": [
        {
            "addedDate": "2018-06-12T11:59:22.000+0000",
            "createdBy": "External Interface",
            "description": "Example description",
            "subject": "Example description subject"
        }
    ],
    "product": {
        "id": "a1E9E000000oksqUAA",
        "name": "Activator",
        "os": {
            "id": "a1D9E000001UpQaUAK",
            "name": "aix-power-32"
        },
        "patch": "7.5.3",
        "version": {
            "id": "a1F9E000000iMEvUAM",
            "name": "5.10"
        }
    },
    "attachments": [],
    "type": "Support Case",
}
```

### Unsuccessful responses

**Content**:

| Type | Data Type                                     | Description |
|------|-----------------------------------------------|-------------|
| body | [ErrorResponse](/docs/shared_services/supportapi/formats/error_response) | Details of the error that occurred. |
