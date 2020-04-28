---
title: Tips, troubleshooting and limitations
linkTitle: Tips, troubleshooting and limitations
draft: false
weight: 110
description: This section provides troubleshooting, known limitations and
  restrictions that you may encounter while you are working with the connected /
  managed environment for AMPLIFY Central and Axway API Manager. It also
  provides tips you may find useful when working with this environment.
---
{{< alert title="Note" color="primary" >}}The Axway API Gateway connectivity to AMPLIFY Central is currently available in an alpha review mode; current functionality and configuration may change before release.   Therefore, this connectivity is available for trial use only and is not supported for production API management or connectivity.{{< /alert >}}

## Tips

### API summary

In Axway API Manager, you can edit an unpublished API to include an API summary (description) that displays in the API's Catalog Overview once the API is published. If the API summary field is empty when the API is published, then "API From V7 APIManager" is displayed in the Catalog Overview. To update the API summary once the API is published, you must unpublish the API.

## Troubleshooting

| Question                                                   | Answer                                                                                                                                                                       |   |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| Why can't Discovery Agent connect to Axway API Manager?    | Make sure that the Axway API Manager hostname and port are correct. Also Make sure that the connected user has the Axway API Manager Administrator role.                     |   |
| Why can't Traceability Agent connect to Axway API Gateway? | Make sure that the Axway API Gateway hostname and port are correct. Also Make sure that the connected user has the Axway API Gateway Operator role.                          |   |
| Why can't my agents connect to AMPLIFY Central?            | Go to AMPLIFY Central UI > Access > Service Accounts and make sure that the Service Account is correctly named and valid.Make sure that the tenantID and teamID are correct. |   |
| Why don't I see traffic in AMPLIFY Central?                | Make sure that the Condor URL is accessible from the machine where Traceability Agent is installed.                                                                          |   |
| Why isn't my API discovered?                               | Check that the tag set on the frontend API has a correct name and its value is True. See [Deploy your Agent] (/docs/central/connect-api-manager/deploy-your-agents/).                                                           |   |

## Limitations

A change of front-end image only is not detected. Changing the name of the API will create a new one on Central and not delete the previous one.