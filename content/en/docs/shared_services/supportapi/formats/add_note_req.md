---
title: AddNoteRequest
linkTitle: AddNoteRequest
weight: 50
date: 2020-03-05
description: Request format for the Add Note method.
---

### CaseNote

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| caseId        | string    |       no | The ID of the case that this note is related to. The ID is also referred to as case number. |
| subject       | string    |       no | Title or subject of this note. **Maximum length**: 100. |
| description   | string    |       no | Detailed information to be included in this note. **Maximum length**: 4000. |
