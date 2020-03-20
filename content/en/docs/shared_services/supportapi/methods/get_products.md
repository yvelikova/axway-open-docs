---
title: Get Products
linkTitle: Get Products
weight: 35
date: 2020-03-05
description: Get all products associated with a support account.
---

## Request

**Endpoint**: `https://apis.axway.com/support/product`

**HTTP verb**: `GET`

### Parameters

| Name   | Type  | Data Type | Required | Allow Multiple | Description |
| -------|-------|-----------|----------|----------------|-------------|
| sac    | query | string    | yes      |             no | Support access code assigned to the account for which products are to be retrieved. |

## Response

**HTTP status code**: 200

**Content**:

| Type | Data Type                                             | Description |
|------|-------------------------------------------------------|-------------|
| body | [ [Product](../../formats/get_products_res#product) ] | List of products for the specified support access code. |

### Examples

```json
[
  {
   "id": "a1E9E000000oksqUAA",
      "name": "Activator",
      "versions": [
          {
              "id": "a1F9E000000iLCMUA2",
              "name": "6.0.0"
          },
          {
              "id": "a1F9E000000iLCRUA2",
              "name": "5.1"
          },
          {
              "id": "a1F9E000000iLCWUA2",
              "name": "5.5.2"
          },
          {
              "id": "a1F9E000000iLCbUAM",
              "name": "5.12"
          },
          {
              "id": "a1F9E000000iMEjUAM",
              "name": "5.2"
          },
          {
              "id": "a1F9E000000iMEkUAM",
              "name": "5.3"
          },
          {
              "id": "a1F9E000000iMElUAM",
              "name": "5.4"
          },
          {
              "id": "a1F9E000000iMEmUAM",
              "name": "5.4.1"
          },
          {
              "id": "a1F9E000000iMEnUAM",
              "name": "5.4.2"
          },
          {
              "id": "a1F9E000000iMEoUAM",
              "name": "5.5"
          },
          {
              "id": "a1F9E000000iMEpUAM",
              "name": "5.5.1"
          },
          {
              "id": "a1F9E000000iMEqUAM",
              "name": "5.6"
          },
          {
              "id": "a1F9E000000iMErUAM",
              "name": "5.7"
          },
          {
              "id": "a1F9E000000iMEsUAM",
              "name": "5.7.1"
          },
          {
              "id": "a1F9E000000iMEtUAM",
              "name": "5.8"
          },
          {
              "id": "a1F9E000000iMEuUAM",
              "name": "5.9"
          },
          {
              "id": "a1F9E000000iMEvUAM",
              "name": "5.10"
          },
          {
              "id": "a1F9E000000iMEwUAM",
              "name": "5.10.1"
          },
          {
              "id": "a1F9E000000iMExUAM",
              "name": "5.11"
          },
          {
              "id": "a1F9E000000mQBIUA2",
              "name": "14.14"
          }
      ],
      "operatingSystems": [
          {
              "id": "a1D9E000001UpPZUA0",
              "name": "Linux Station x86"
          },
          {
              "id": "a1D9E000001UpadUAC",
              "name": "win-x86-64"
          },
          {
              "id": "a1D9E000001UpZqUAK",
              "name": "linux-x86-64"
          },
          {
              "id": "a1D9E000001UpOGUA0",
              "name": "linux-x86-32"
          },
          {
              "id": "a1D9E000001UpWDUA0",
              "name": "sun-sparc-32"
          },
          {
              "id": "a1D9E000001Ugy3UAC",
              "name": "linux-x86-32"
          },
          {
              "id": "a1D9E000001UpLqUAK",
              "name": "OS400"
          },
          {
              "id": "a1D9E000001UpQaUAK",
              "name": "aix-power-32"
          },
          {
              "id": "a1D9E000001UpTOUA0",
              "name": "hpux-parisc-32"
          },
          {
              "id": "a1D9E000001UpZWUA0",
              "name": "win-x86-32"
          }
      ]
  }
]
```

### Unsuccessful responses

**Content**:

| Type | Data Type                                     | Description |
|------|-----------------------------------------------|-------------|
| body | [ErrorResponse](../../formats/error_response) | Details of the error that occurred. |
