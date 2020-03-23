---
title: GetCaseResponse
linkTitle: GetCaseResponse
weight: 35
date: 2020-03-05
description: Response format for the Get Case method.
---

### Case

| Property Name | Data Type                     | Optional | Description |
|---------------|-------------------------------|----------|-------------|
| caseNumber    | string                        |       no | Business identifier assigned to this case. |
| subject       | string                        |       no | Brief description of this case. |
| status        | string                        |       no | The current status of this case. |
| createdDate   | string                        |       no | Date and time of case creation. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| modifiedDate  | string                        |       no | Date and time of the latest update. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| closedDate    | string                        |      yes | Date and time of case closure. [Format](../miscellaneous#common-date-and-time-format-for-responses). |
| severity      | [Severity](../severity)       |       no | The severity level calculated for this case. |
| impact        | [Impact](../impact)           |      yes | Impact level. |
| urgency       | [Urgency](../urgency)         |      yes | Urgency level. |
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
| customerEnhancementRequest | [CustomerEnhancementRequest](#customerenhancementrequest) | no | Present if and only if this case is an Enhancement Request and any related details are available. |

### CustomerEnhancementRequest

| Property Name         | Data Type                     | Optional | Description |
|-----------------------|-------------------------------|----------|-------------|
| response              | [string](#customerenhancementrequest---response)    | yes | Response from Axway as to whether the Enhancement is planned to be delivered in the product. |
| deliveryTargetDate    | string | yes | Indicates the target delivery date based on current planning. |
| deliveryTargetVersion | string | yes | Indicates the target product release based on current planning. **Maximum length**: 255. |
| responseDetails       | string | yes | Detailed response from Axway. **Maximum length**: 32000. |

#### CustomerEnhancementRequest - Response

An open-ended enumeration.

* **Data Type**: string
* **Enumeration Elements**:
    * Planned
    * Not Planned

### Contact

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| email         | string    |       no | The e-mail of this contact. |
| name          | string    |       no | The name of this contact. |

### Product

| Property Name | Data Type                         | Optional | Description |
|---------------|-----------------------------------|----------|-------------|
| id            | string                            |       no | Identifier of this product for the purposes of Axway Support case management. |
| name          | string                            |       no | The name of the affected product. |
| os            | [ProductOs](#productos)           |       no | Operating system on which the product is run.. |
| version       | [ProductVersion](#productversion) |       no | Version of the affected product. |
| patch         | string                            |      yes | Service pack or patch in effect. Free form text. |

### ProductOs

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
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

### Account

| Property Name | Data Type | Optional | Description |
|---------------|-----------|----------|-------------|
| name          | string    |      yes | Name of the Axway customer account. |
| sac           | string    |       no | Support access code. |

### CaseNote

| Property Name   | Data Type                     | Optional | Description |
|-----------------|-------------------------------|----------|-------------|
| subject         | string                        |       no | Title or subject of this note. |
| description     | string                        |       no | Detailed information included in this note. |
| addedDate       | string                        |       no | Date and time of case note creation. |
| createdBy       | string                        |      yes | Name of the creator of this note. |
| noteAttachments | [ [Attachment](#attachment) ] |      yes | Summary information about the files attached to this case note. |
