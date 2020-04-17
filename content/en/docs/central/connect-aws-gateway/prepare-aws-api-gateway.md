---
title: Prepare AWS API Gateway
linkTitle: Prepare AWS API Gateway
draft: false
weight: 20
description: Learn how to use the provided CoudFormation templates to initialize
  AWS Services, which enables the agents to collect API / traffic data.
---
{{< alert title="Note" color="primary" >}}The AWS API Gateway connectivity to AMPLIFY Central is currently available in an alpha review mode; current functionality and configuration may change before release.   Therefore, this connectivity is available for trial use only and is not supported for production API management or connectivity.{{< /alert >}}

## Before you start

* Read [AMPLIFY Central AWS API Gateway connected overview] (/docs/central/connect-aws-gateway/)
* You will need a basic knowledge of Amazon Web Services (AWS) and associated tools

## Objectives

Learn how to Configure CloudFormation to initialize the required AWS Services.

## Set up the CloudFormation

The CloudFormation template will guide you through a wizard in order to configure AWS Services.

The first template `apigw_iam_setup` will help you to create the required roles and secret key to access the AWS Services.

The second template `apigw_cloudformation` will help you to configure the AWS Services required for the agents (CloudWatch / lambdas / SimpleQueueService).

{{< alert title="Note" color="primary" >}}You can either accept or update most of the template's required parameters.{{< /alert >}}

1. Download agent config to setup the required IAM roles and configure AWS Services:

    ```
    curl -L "https://axway.bintray.com/generic-repo/aws-agents/aws_apigw_agent_config/latest/aws_apigw_agent_config-latest.zip" -o aws_apigw_agent_config-latest.zip
    ```

    This zip contains the AWS IAM CloudFormation YAML, the AWS CloudFormation YAML and the Traceability Lambda Zip.
2. Upload the Traceability Lambda in an AWS S3 bucket located on the same region the agent will run.
3. Configure the required roles using the IAM CloudFormation  template.

    1. Create a new stack using the provided template and configure the parameters:

        Set the **ConfigBucketExists** value to **true** to create a S3 bucket to store the AWS logs. If set to false, you must manually create the S3 bucket.

        Accept the **ConfigBucketName** default value of  `apigw-config-bucket` to store AWS Config logs. The accountID and AWS region is appended to the value.

        Accept the **DiscoveryQueueName** default value of `aws-apigw-discovery` to hold changes made to the API Gateway resources. The AWS region is appended to the value.

        Enable **SetupAPIGWCWRole** to create an IAM role for writing logs in CloudWatch.

        Enable **SetupConfigService** to create an IAM role for using Config Service.

        Accept the **TraceabilityQueueName** default value of `aws-apigw-traceability` to hold the API call so that the Traceability Agent can push them into the AMPLIFY platform.
    2. Execute the stack creation.

        The output of the stack contains all required information for the next cloud formation template (**ConfigServiceRoleArn / APICAgentAccessKey / APICAgentSecretKey / TraceabilityAPIGWCWRoleArn / TraceabilityLambdaRoleArn**).
4. Configure the required AWS Services using the Resource CloudFormation template.

    1. Create a new stack using the provided template and configure the parameters:

        Set the **ConfigBucketExists** default value to **true** to create a S3 bucket to store the AWS logs. If set to false, you must manually create the S3 bucket.

        Accept the C**onfigBucketName** default value of `apigw-config-bucket` to store AWS Config logs. You can re-use the same bucket name as the one used in `apigw_iam_setup`. The accountID and AWS region is appended to the value.

        Enter the **ConfigServiceRoleArn** value coming from the output of `apigw_iam_setup` in Step 4.

        Accept the **DiscoveryQueueName** default value of `aws-apigw-discovery` to hold the changes made to the API Gateway resources. The AWS region is appended to the value.

        Enable **SetupConfigService** to configure the appropriate AWS Config Service and its dependencies.

        Enter the **TraceabilityFunctionBucketname** of the S3 bucket that was created in Step 3.

        Enter the **TraceabilityFunctionKey** key value of the `subscribe_lambda function` in the bucket (open the Lambda in your bucket and identify the key value).

        Enter the **TraceabilityAPIGWCWRoleArn** value from the output of `apigw_iam_setup` in Step 4.

        Enter the **TraceabilityFunctionBucket** name of the S3 bucket that was created in Step 3.

        Enter the **TraceabilityFunctionKey** key value of the `traceability_lambda` function in the bucket (open the Lambda in your bucket and identify the key value).

        Accept the **TraceabilityQueueName** default value of `aws-apigw-traceability` as the name of the queue that will hold the API traffic logs. The AWS region is appended to the value.
    2. Execute the stack creation.

        The output of the stack contains information that will help you to configure the agents (**DiscoveryQueueName / TraceabilityLogGroupArn / TraceabilityQueueName**).

For additional information, see <https://git.ecd.axway.int/apigov/aws_apigw_agent_config/blob/master/README.md>.