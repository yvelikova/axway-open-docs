---
title: Tips and Troubleshooting
linkTitle: Tips and Troubleshooting
draft: true
weight: 60
description: This section provides troubleshooting, known limitations and
  restrictions that you may encounter while you are working with the connected /
  managed environment for AWS API Gateway within AMPLIFY Central. It also
  provides tips you may find useful when working with this environment.
---
{{< alert title="Note" color="primary" >}}The AWS API Gateway connectivity to AMPLIFY Central is currently available in an alpha review mode; current functionality and configuration may change before release.   Therefore, this connectivity is available for trial use only and is not supported for production API management or connectivity.{{< /alert >}}

## Troubleshooting

| Question                                                                                                                  | Answer                                                                                                                                  |
|---------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Why isn't my API discovered?                                                                                              | Check that the tag set on the stage has a correct name and value based on the AWS_FILTER variable. See AWS_FILTER.                      |
| Why can't my agents connect to AWS API Gateway?                                                                           | Go to AWS console / IAM service and make sure that AWS_REGION, AWS_AUTH_ACCESSKEY and AWS_AUTH_SECRETKEY are valid and not inactivated. |
| Why can't my agents connect to AMPLIFY Central?                                                                           | Go to AMPLIFY Central UI > Access > Service Accounts and make sure that the Service Account is correctly named and valid. Make sure that the tenantID and teamID are correct.|
| Why don't I see traffic in AMPLIFY Central?                                                                               | Make sure that the Condor URL is accessible from the machine where Traceability Agent is installed.                                     |
