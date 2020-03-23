---
title: Create Case
linkTitle: Create Case
weight: 15
date: 2020-03-05
description: Create a new support case or customer enhancement request.
---

## Request

**Endpoint**: `https://apis.axway.com/support/case`

**HTTP verb**: `POST`

Create Case requests come in two forms: [simple](#create-case---simple) and [full](#create-case---full).
Simple requests allow you to send just the case information. Full requests allow you to attach files.

### Create Case - Simple

Send the case information directly as the HTTP entity-body.

**Consumes**: application/json

**Parameters**:

| Name | Type | Data Type                                  | Required | Allow Multiple | Description |
|------|------|--------------------------------------------|----------|----------------|-------------|
| n/a  | body | [Case](../../formats/create_case_req#case) |      yes |             no | Details of the case to be created. |

**Example**:

```json
{
    "ccEmails": [
        "example@axway.com"
    ],
    "description": "Sample Support API",
    "environment": "Production",
    "product": {
        "id": "a1E9E000000oksqUAA",
        "os": {
            "id": "a1D9E000001UpQaUAK"
        },
        "patch": "7.5.3",
        "version": {
            "id": "a1F9E000000iMEvUAM"
        }
    },
    "sac": "NNNNNN",
    "impact" : "4 - Low",
    "urgency" : "3 - Low",
    "subject": "Sample Support API"
}
```

### Create Case - Full

Allows for optionally attaching files at the time of case creation.
{{% alert title="Note" %}}
Files can be attached to an existing case at any time, by [adding](../add_note#add-note---full) a case note.
{{% /alert %}}

**Consumes**: multipart/form-data

Each part of the request entity must contain a Content-Disposition header field. The Content-Disposition header field must contain a name parameter. The value of the name parameter must be either `initializer` or `attachment`. In the latter case, the Content-Disposition header field must contain a filename parameter.

**Parameters**:

| Name        | Type      | Data Type                                  | Required | Allow Multiple | Description |
|-------------|-----------|--------------------------------------------|----------|----------------|-------------|
| initializer | body part | [Case](../../formats/create_case_req#case) |      yes |             no | Details of the case to be created. |
| attachment  | body part | file                                       |       no |            yes | File to attach to the case. |

Constraints:

* Maximum number of attached files: 5.
* Maximum size of an attached file: 20 megabytes.

**Example**:

The example below shows a request to create a case and attach two files to it, README.TXT and EXAMPLE.TXT.

```
POST /support/case HTTP/1.1
Host: <omitted>
Connection: <omitted>
Authorization: <omitted>
Accept: <omitted>
User-Agent: <omitted>
Content-Length: 1072
Content-Type: multipart/form-data; boundary=Gwj2nucD55htH10Ze0INOW5HHZ-X8GpyR

--Gwj2nucD55htH10Ze0INOW5HHZ-X8GpyR
Content-Disposition: form-data; name="initializer"; filename="createCase.json"
Content-Type: application/json
Content-Transfer-Encoding: binary

{
  "ccEmails": [
    "example@axway.com"
  ],
  "description": "A case with files attached to it at case-creation time.",
  "environment": "Production",
  "product": {
    "id": "AAAAAAAAAAAAAAAAAA"
    "os": {
      "id": "AAAAAAAAAAAAAAAAAA"
    },
    "patch": "7.5.3",
    "version": {
      "id": "AAAAAAAAAAAAAAAAAA"
    }
  },
  "sac": "NNNNN",
  "impact" : "4 - Low",
  "urgency" : "3 - Low",
  "subject": "A case with attached files."
}

--Gwj2nucD55htH10Ze0INOW5HHZ-X8GpyR
Content-Disposition: form-data; name="attachment"; filename="README.TXT"
Content-Type: application/txt
Content-Transfer-Encoding: binary

An example README file.

--Gwj2nucD55htH10Ze0INOW5HHZ-X8GpyR
Content-Disposition: form-data; name="attachment"; filename="EXAMPLE.TXT"
Content-Type: application/txt
Content-Transfer-Encoding: binary

Create case with attachments example.

--Gwj2nucD55htH10Ze0INOW5HHZ-X8GpyR--
```

## Response

**HTTP status code**: 201

**Content**:

| Type | Data Type                                  | Description |
|------|--------------------------------------------|-------------|
| body | [Case](../../formats/create_case_res#case) | Details of the created case. |

{{% alert title="Note" %}}
Some details, such as case severity, are automatically generated in our systems.
{{% /alert %}}

### Unsuccessful responses

**Content**:

| Type | Data Type                                     | Description |
|------|-----------------------------------------------|-------------|
| body | [ErrorResponse](../../formats/error_response) | Details of the error that occurred. |
