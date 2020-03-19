---
title: ListCasesRequest
linkTitle: ListCasesRequest
weight: 30
date: 2020-03-05
description: Request format for the List Cases method.
---

### Filter

| Property Name | Data Type             | Optional | Description |
|---------------|-----------------------|----------|-------------|
| created       | [TimeSpan](#timespan) |      yes | Get cases created within the specified time span. |
| updated       | [TimeSpan](#timespan) |      yes | Get cases updated within the specified time span. |
| sac           | string                |      yes | Get cases for the specified support access code. |
| types         | [IncludeCaseTypes](#includecasetypes) or [ExcludeCaseTypes](#excludecasetypes) | yes | Get cases of the specified types. |

### TimeSpan

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| before        | string    |       no | Starting date/time of the time span. [Format](../miscellanea#common-date-and-time-format-for-requests). |
| after         | string    |       no | Ending date/time of the time span. [Format](../miscellanea#common-date-and-time-format-for-requests). |

### IncludeCaseTypes

| Property Name | Data Type                 | Optional | Description |
|---------------|---------------------------|----------|-------------|
| include       | [ [CaseType](#casetype) ] |       no | Filter-in the specified case types. Filter out all others. The list of types must not be empty and must contain unique elements. |

### ExcludeCaseTypes

| Property Name | Data Type                 | Optional | Description |
|---------------|---------------------------|----------|-------------|
| exclude       | [ [CaseType](#casetype) ] |       no | Filter-out the specified case types.  The list of types must not be empty and must contain unique elements. |

### CaseType

An open-ended list of case types that are supported in a List Cases filter.

* **Data Type**: string
* **Enumeration Elements**:
    * Enhancement Request
