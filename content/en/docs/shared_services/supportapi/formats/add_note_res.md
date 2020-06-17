---
title: AddNoteResponse
linkTitle: AddNoteResponse
weight: 52
date: 2020-03-05
description: Response format for the Add Note method.
---

### CaseNote

| Property Name | Data Type                     | Optional | Description |
|---------------|-------------------------------|----------|-------------|
| caseId        | string                        |       no | The ID of the case that this note is related to. The ID is also referred to as case number. |
| subject       | string                        |       no | Title or subject of this note. |
| description   | string                        |       no | Detailed information included in this note. |
| addedDate     | string                        |       no | Date and time of note creation. [Format](/docs/shared_services/supportapi/formats/miscellaneous/#common-date-and-time-format-for-responses).|
| attachments   | [ [Attachment](#attachment) ] |      yes | Summary information about the files attached to this note. |
| createdBy     | string                        |      yes | The creator of this note. |

### Attachment

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| id            | string    |       no | An identifier of this attachment. Attachment download requires this ID.|
| name          | string    |       no | The name under which this attachment was added. |
| createdDate   | string    |       no | Date and time of attachment creation. [Format](/docs/shared_services/supportapi/formats/miscellaneous/#common-date-and-time-format-for-responses). |
