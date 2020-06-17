---
title: Add Note
linkTitle: Add Note
weight: 25
date: 2020-03-05
description: Add a note to an existing Axway Support case.
---

## Request

**Endpoint**: `https://apis.axway.com/support/note`

**HTTP verb**: `POST`

Add Note requests come in two forms: [simple](#add-note-simple) and [full](#add-note-full).
Simple requests allow you to send just the note information. Full requests allow you to attach files.

### Add Note - Simple

Send the note information directly as the HTTP entity-body.

**Consumes**: application/json

**Parameters**:

| Name | Type | Data Type                                       | Required | Allow Multiple | Description |
|------|------|-------------------------------------------------|----------|----------------|-------------|
| n/a  | body | [CaseNote](/docs/shared_services/supportapi/formats/add_note_req/#casenote) |      yes |             no | Details of the note to be added. |

**Example**:

```json
{
    "description": "A sample description.",
    "subject": "Add case note via Axway Support Portal API.",
    "caseId": "00######"
}
```

### Add Note - Full

Allows for optionally attaching files to the case note.

Each part of the request entity must contain a Content-Disposition header field. The Content-Disposition header field must contain a name parameter. The value of the name parameter must be either `initializer` or `attachment`. In the latter case, the Content-Disposition header field must contain a filename parameter.

**Parameters**:

| Name        | Type      | Data Type                                        | Required | Allow Multiple | Description |
|-------------|-----------|--------------------------------------------------|----------|----------------|-------------|
| initializer | body part | [CaseNote](/docs/shared_services/supportapi/formats/add_note_req/#casenote)  |      yes |             no | Details of the case to be created. |
| attachment  | body part | file                                             |       no |            yes | File to attach to the case. |

Constraints:

* Maximum number of attached files: 5.
* Maximum size of an attached file: 20 megabytes.

**Example**:

The example below shows a request to add a note and attach two files to it, README.TXT and EXAMPLE.TXT.

```
POST /support/note HTTP/1.1
Host: <omitted>
Connection: <omitted>
Authorization: <omitted>
Accept: <omitted>
User-Agent: <omitted>
Content-Length: 828
Content-Type: multipart/form-data; boundary=c-SaFVSu9pm0M-ZO7FhYhfWbdXO9HeRbKgVVfoJ

--c-SaFVSu9pm0M-ZO7FhYhfWbdXO9HeRbKgVVfoJ
Content-Disposition: form-data; name="initializer"; filename="addNoteWithAttachments.json"
Content-Type: application/json
Content-Transfer-Encoding: binary

{
  "description": "A note with attachments added at note-creation tome.",
  "subject": "Add note with attachments.",
  "caseId": "00######"
}

--c-SaFVSu9pm0M-ZO7FhYhfWbdXO9HeRbKgVVfoJ
Content-Disposition: form-data; name="attachment"; filename="README.TXT"
Content-Type: application/txt
Content-Transfer-Encoding: binary

An example README file.

--c-SaFVSu9pm0M-ZO7FhYhfWbdXO9HeRbKgVVfoJ
Content-Disposition: form-data; name="attachment"; filename="EXAMPLE.TXT"
Content-Type: application/txt
Content-Transfer-Encoding: binary

Add note with attachments example.

--c-SaFVSu9pm0M-ZO7FhYhfWbdXO9HeRbKgVVfoJ--
```

## Response

**HTTP status code**: 201

**Content**:

| Type | Data Type                                       | Description |
|------|-------------------------------------------------|-------------|
| body | [CaseNote](/docs/shared_services/supportapi/formats/add_note_res/#casenote) | Details of the added note. |

### Unsuccessful responses

**Content**:

| Type | Data Type                                     | Description |
|------|-----------------------------------------------|-------------|
| body | [ErrorResponse](/docs/shared_services/supportapi/formats/error_response) | Details of the error that occurred. |
