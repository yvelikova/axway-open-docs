---
title: List Cases
linkTitle: List Cases
weight: 5
date: 2020-03-05
description: List cases, business service requests and customer enhancement requests.
---

## Request

**Endpoint**: `https://apis.axway.com/support/case`

**HTTP verb**: `GET`

### Parameters

| Name   | Type  | Data Type | Required | Allow Multiple | Description |
| -------|-------|-----------|----------|----------------|-------------|
| query  | query | string    |       no |             no | Filtering specification. |
| limit  | query | integer   |       no |             no | Maximum number of cases wanted in the response. |
| offset | query | integer   |       no |             no | Numeric offset of the first case in the response. |
| sort   | query | string    |       no |             no | Comma-separated list of fields defining the desired sort order. |

#### query

Allows you to retrieve only the desired information. Format: [Filter](../../formats/list_cases_req#filter).

To apply filtering, construct a JSON object per the format above, [percent-encode](https://tools.ietf.org/html/rfc3986#section-2.1) it and set the result as the value of the query parameter.

{{% alert title="Note" %}}
Logical conjunction applies between properties in the filter specification.
{{% /alert %}}

#### limit

Maximum number of cases wanted in the response.

Constrains:

* **Format**: int32.
* **Minimum**: 0.
* **Maximum**: 20.
* **Default**: 20.

#### offset

Numeric offset of the first case in the response.

Constraints:

* **Format**: int32.
* **Minimum**: 0.
* **Maximum**: 2000.
* **Default**: 0.

#### sort

Comma-separated list of fields defining the desired sort order.

To indicate sorting direction, fields must be prefixed with + (ascending) or - (descending). Please note that + is a reserved character according to [RFC 3986, 2.2 Reserved Characters](https://tools.ietf.org/html/rfc3986#section-2.2). For consistency, both + and - are supported in their percent-encoded form.

Ordering is supported for the following fields:

* createdDate
* modifiedDate
* closedDate
* status
* severity

Please note that the above is an extensible enumeration and more fields can be added to the list.

```
Example (before percent-encoding): -modifiedDate,+severity
```

````
Example (percent-encoded for correct transmission): %2BmodifiedDate,%2Dstatus
````

If there is no sort parameter sent with the request, default ordering would be applied.
Please note that the default ordering is unspecified and can vary over time.

### Examples

#### List cases by update times

```json
{
  "updated": {
    "after": "2018-05-29T11:33:53Z",
    "before": "2018-05-28T11:49:51Z"
  }
}
```

#### List cases by creation times

```json
{
  "created": {
    "before": "2019-04-07T00:00:00Z",
    "after": "2019-01-06T00:00:00Z"
  }
}
```

#### List cases by creation and update times

```json
{
  "created": {
    "after": "2019-01-06T00:00:00Z",
    "before": "2019-04-07T00:00:00Z"
  },
  "updated": {
    "after": "2019-08-07T00:00:00Z",
    "before": "2019-09-07T00:00:00Z"
  }
}
```

#### List cases by support access code

```json
{
  "sac": "0######"
}
```

#### List cases by support access code and update times

```json
{
  "updated": {
    "after": "2018-12-01T11:33:53Z",
    "before": "2019-01-05T01:49:51Z"
  },
  "sac": "0######"
}
```

#### List cases by support access code and types excluding

```json
{
  "types": {
    "exclude": [
      "Enhancement Request"
    ]
  },
  "sac": "0######"
}
```

#### List cases by support access code and types including

```json
{
  "types": {
    "include": [
      "Enhancement Request"
    ]
  },
  "sac": "0######"
}
```

## Response

**HTTP status code**: 200

**Content**:

| Type | Data Type                                   | Description |
|------|---------------------------------------------|-------------|
| body | [Cases](../../formats/list_cases_res#cases) | Cases matching the specified filter criteria. |

### Unsuccessful responses

**Content**:

| Type | Data Type                                     | Description |
|------|-----------------------------------------------|-------------|
| body | [ErrorResponse](../../formats/error_response) | Details of the error that occurred. |
