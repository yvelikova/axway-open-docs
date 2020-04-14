---
title: ListCasesResponse
linkTitle: ListCasesResponse
weight: 32
date: 2020-03-05
description: Response format for the List Cases method.
---

### Cases

| Property Name | Data Type             | Optional | Description |
|---------------|-----------------------|----------|-------------|
| totalCount    | integer   | yes | The total count of cases matching the specified filter criteria. This does not reflect the length of the array of cases provided in the response. **Format**: `int32`. **Minimum**: 0.
| limit         | integer | no | The limit used to restrict the number of cases in the response. **Format**: int32. **Minimum**: 0. **Maximum**: 20. |
| offset        | integer | no | Numeric offset of the first element in the provided array of cases. **Format**: int32. **Minimum**: 0. |
| cases         | [ [Case](#case) ] | no | Cases matching the specified filter criteria. |

### Case

| Property Name | Data Type                | Optional | Description |
|---------------|--------------------------|----------|-------------|
| caseNumber    | string                   |       no | Business identifier assigned to this case. |
| subject       | string                   |       no | Brief description of this case. |
| status        | string                   |       no | The current status of this case. |
| severity      | [Severity](../severity)  |       no | The severity level calculated for this case. |
| createdDate   | string                   |       no | Date and time of case creation. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| modifiedDate  | string                   |       no | Date and time of the latest update. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| closedDate    | string                   |      yes | Date and time of case closure. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| type          | [CaseType](../case_type) |       no | The type of this case. |
