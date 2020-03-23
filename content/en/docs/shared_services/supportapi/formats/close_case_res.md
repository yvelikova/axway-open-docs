---
title: CloseCaseResponse
linkTitle: CloseCaseResponse
weight: 47
date: 2020-03-05
description: Response format for the Close Case method.
---

### Case

| Property Name | Data Type                     | Optional | Description |
|---------------|-------------------------------|----------|-------------|
| caseNumber    | string                        |       no | Business identifier assigned to this case. |
| subject       | string                        |       no | Brief description of this case. |
| status        | string                        |       no | The current status of this case. |
| closedDate    | string                        |      yes | Date and time of case closure. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| createdDate   | string                        |       no | Date and time of case creation. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| modifiedDate  | string                        |       no | Date and time of the latest update. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| severity      | [Severity](../severity)       |       no | The severity level calculated for this case. |
| account       | [Account](#account)           |       no | Details of the Axway customer account that case is registered with. |
| contact       | [Contact](#contact)           |       no | Current contact for this case. |
| owner         | [Contact](#contact)           |      yes | The current owner of this case. |
| description   | string                        |       no | Detailed description of this case. |
| environment   | [Environment](../environment) |       no | Environment for which this case is created. |
| notes         | [ [CaseNote](#casenote) ]     |      yes | List of all case notes attached to this case. |
| product       | [Product](#product)           |       no | Product for which this case was created. |
| attachments   | [ [Attachment](#attachment) ] |      yes | Summary information about the files attached to this case. |
| ccEmails      | [ string ]                    |      yes | E-mail addresses copied in communications regarding this case. |
| type          | [CaseType](../case_type)      |       no | The type of this case. |

### Account

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| name          | string    |       no | Name of the Axway customer account. |
| sac           | string    |       no | Support access code. |

### Contact

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| email         | string    |       no | The e-mail of this contact. |
| name          | string    |       no | The name of this contact. |

### CaseNote

| Property Name   | Data Type                     | Optional | Description |
|-----------------|-------------------------------|----------|-------------|
| subject         | string                        |       no | Title or subject of this note. |
| description     | string                        |       no | Detailed information included in this note. |
| addedDate       | string                        |       no | Date and time of case note creation. |
| createdBy       | string                        |      yes | Name of the creator of this note. |
| noteAttachments | [ [Attachment](#attachment) ] |      yes | List of files attached to this case note. |

### Product

| Property Name | Data Type                         | Optional | Description |
|---------------|-----------------------------------|----------|-------|
| id            | string                            |       no | Identifier of this product for the purposes of Axway Support case management. |
| name          | string                            |       no | The name of the affected product. |
| os            | [ProductOs](#productos)           |       no | Operating system on which the product is run.. |
| version       | [ProductVersion](#productversion) |       no | Version of the affected product. |
| patch         | string                            |      yes | Service pack or patch in effect. Free form text. |

### ProductOs

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------|
| id            | string    |       no | Identifier of this operating system for the purposes of Axway Support case management. |
| name          | string    |       no | Operating system name. |

### ProductVersion

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| id            | string    |       no | Identifier of this product version for the purposes of Axway Support case management. |
| name          | string    |       no | Product version name. |

### Attachment

| Property Name | Data Type           | Optional | Description |
|---------------|---------------------|----------|-------------|
| id            | string              |       no | An identifier of this attachment. Attachment download requires this ID.|
| name          | string              |       no | The name under which this attachment was added. |
| createdDate   | string              |       no | Date and time of attachment creation. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| createdBy     | [Contact](#contact) |      yes | Contact that added this attachment. |
