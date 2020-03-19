---
title: ErrorResponse
linkTitle: ErrorResponse
weight: 995
date: 2020-03-05
description: Error response format.
---

### Format

| Property Name | Data Type  | Optional | Description |
|---------------|------------|----------|-------------|
| code          | string     |       no | A constant referring to a specific error class. |
| message       | string     |       no | Description of the error. |

### Error Classes

Each error class is accompanied by a specific HTTP status code. The table below shows the complete list of error classes along with the respective status codes. Example occurrences are given after the table.

| Error Class                       | Code | Usage |
|-----------------------------------|------|-------|
| `AUTHENTICATION_FAILURE`          | 401  | The end-user cannot be authenticated. |
| `ACCESS_DENIED`                   | 403  | The end-user is not is not entitled for the requested operation. |
| `BAD_REQUEST`                     | 400  | The end-user erred in the request specification. |
| `SERVICE_TEMPORARILY_UNAVAILABLE` | 503  | The length of the delay is be indicated in the 'message' field of the response, if known. |
| `SERVER_ERROR`                    | 500  | A non-atomic method completed partially. |

#### Example Occurrences

`AUTHENTICATION_FAILURE`

* Missing access token, expired access token, etc.

`ACCESS_DENIED`

* The end-user is not is not entitled for the requested operation:
    * The support access code specified is not in the list of support access codes available for the authenticated user.
* The requested operation is prohibited by business logic:
    * The user tried to add a note to a case that has been closed for more than N days ([example](#examples)).

`BAD_REQUEST`

* Missing mandatory parameter, e.g. a support access code query parameter for Get-Products.
* JSON Schema validation failed.
* Date-time format is incorrect.

`SERVICE_TEMPORARILY_UNAVAILABLE`

* Connection failure to Axway Support Portal.

`SERVER_ERROR`

* A non-atomic method, such as [Create Case](../../methods/create_case) or [Add Note](../../methods/add_note), completed only partially:
    * A case is successfully created but the subsequent call to retrieve all the case details fails. The error message will include a reference to (an identifier of) the case created in Support Portal.

### Examples

```json
{
    "code": "ACCESS_DENIED",
    "message": "The case has been closed for more than 45 days. Please contact Axway Global Support."
}
```

```
HTTP/1.1 403 Forbidden
Date: Wed, 10 Aug 2019 05:49:16 GMT
Via: 1.0 39233c900349 (AMPLIFY Sphere API)
Max-Forwards: 18
Content-Length: 132
Connection: keep-alive
Strict-Transport-Security: max-age=3153600; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Troubleshooting-ID: dc8a785d4e41fe925fb204f9
X-XSS-Protection: 1; mode=block
Content-Type: application/json

{
    "code": "ACCESS_DENIED",
    "message": "The case has been closed for more than 45 days. Please contact Axway Global Support."
}
```
