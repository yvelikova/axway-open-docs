---
title: Download Attachment
linkTitle: Download Attachment
weight: 30
date: 2020-03-05
description: Download files attached to a specific support case or a support case note.
---

## Request

**Endpoint**: `https://apis.axway.com/support/attachment`

**HTTP verb**: `GET`

### Parameters

| Name         | Type  | Data Type | Required | Allow Multiple | Description |
| -------------|-------|-----------|----------|----------------|-------------|
| caseId       | query | string    |      yes |             no | ID of the support case. The ID is also referred to as case number. |
| attachmentId | query | string    |      yes |             no | ID of the attachment to be downloaded. |

{{% alert title="Note" %}}
Attachment identifiers can be obtained with a call to the [Get Case](/docs/shared_services/supportapi/methods/get_case) method. In the latter method's [response](/docs/shared_services/supportapi/formats/get_case_res/#case), files that are attached directly to cases are described under `attachments`. Files that are attached to notes are described under  `noteAttachments`, nested within their respective note, nested within `notes`.
{{% /alert %}}

## Response

**HTTP status code**: 200

**Content**:

| Type | Data Type | Description |
|------|-----------|-------------|
| body | file      | Contents of the retrieved file. |

**Headers**:

| Name                | Data Type | Description |
|---------------------|-----------|-------------|
| Content-Length      | integer   | Size of the file, in decimal octets. |
| Content-Disposition | string    | Disposition type: fixed to `attachment`. Disposition parameter: fixed to `filename`. See also [RFC 6266](https://tools.ietf.org/html/rfc6266). |

Example: `Content-Disposition: attachment; filename=EXAMPLE.TXT`.

### Unsuccessful responses

**Content**:

| Type | Data Type                                     | Description |
|------|-----------------------------------------------|-------------|
| body | [ErrorResponse](/docs/shared_services/supportapi/formats/error_response) | Details of the error that occurred. |
