---
title: Prepare AWS API Gateway
linkTitle: Prepare AWS API Gateway
draft: false
weight: 20
description: Learn how to use the provided CoudFormation templates to initialize
  AWS Services, which enables the agents to collect API / traffic data.
---
## Before you start

* Read [AMPLIFY Central AWS API Gateway connected overview](/docs/central/connect-aws-gateway/)
* You will need a basic knowledge of Amazon Web Services (AWS) and associated tools

## Objectives

Learn how to configure CloudFormation to initialize the required AWS Services for operating in the continuous discovery mode.

## Download the CloudFormation templates

```
curl -L "https://axway.bintray.com/generic-repo/aws-agents/aws_apigw_agent_config/latest/aws_apigw_agent_config-latest.zip" -o aws_apigw_agent_config-latest.zip
```

This zip contains three files:

* `cloudformation-continuous-discovery.zip`: CloudFormation templates for operating in a continuous discovery mode
* `cloudformation-synchronous-discovery.zip`: CloudFormation templates for operating in a synchronous discovery mode
* `traceability_lambda.zip`: a lambda used to parse the log

Extract the files from the `cloudformation-continuous-discovery.zip` archive

{{< alert title="Note" color="primary" >}}You can either accept or update most of the template's required parameters.{{< /alert >}}

## Upload all files to an S3 bucket

Upload the yaml files from the `cloudformation-continuous-discovery.zip` archive and the `traceability_lambda.zip` archive to an AWS S3 bucket located on the same region the Cloud Formation template will be deployed.

Note the bucket name where these are uploaded to and save the URL to the `amplify-agents-deploy-all.yaml` file.

Within this bucket create a path of directories resources\keys:

* **da_env_vars** which has all environment variable overrides to run the Discovery Agent, including the LogGroup of `aws-apigw-traffic-logs`
* **ta_env_vars** which has all environment variable overrides to run the Traceability Agent
* In the keys directory **private_key.pem** which is the private key associated with the AMPLIFY Central service account
* In the keys directory **public_key.pem** which is the public key associated with the AMPLIFY Central service account

For the values in these **\*\_env_var** files, see [Deploy agents](/docs/central/connect-aws-gateway/deploy-your-agents-1).

## Create an EC2 SSH key

An SSH key is required to use the EC2 instance. If you don't have one for the region where the stack will be deployed, you must create one. Once created, use the name of this key as the EC2StackKeyname below. The Cloudformation will assign it to the EC2 instance for being able to connect to it. See [Amazon EC2 key pairs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html).

## Configure all roles and services via CloudFormation

Create a new stack with the S3 URL of the `amplify-agents-deploy-all.yaml` template. Use the "**With new resources (standard)**" option and configure the parameters:

* Set the **AgentResourcesBucket** value to the S3 Bucket where you saved all of the files.
* Enable **APIGWCWRoleSetup** to create an IAM role for writing API Gateway logs in CloudWatch.
* Enable **ConfigServiceSetup** to create an IAM role for using Config Service.
* Set the **ConfigBucketExists** value to **true** to use an existing S3 bucket to store the AWS logs. Be sure the S3 bucket is accessible and is located in the same region where you run the Cloud Formation template. If set to **false**, the S3 bucket will be created for you using the ConfigBucketName value below.
* Accept the **ConfigBucketName** default value of `apigw-config-bucket` to store AWS Config logs. The accountID and AWS region is appended to the value. Or use an existing S3 bucket name if previous option **ConfigBucketExists** has been set to true.
* Accept the **DiscoveryAgentLogGroupName** default value of `amplify-discovery-agent-logs` to create a log group for the Discovery agent logs.
* Accept the **DiscoveryQueueName** default value of `aws-apigw-discovery` to hold changes made to the API Gateway resources. The AWS region is appended to the value.
* Enable **EC2AgentDeploy** value to deploy the EC2 stack and agents within it.
* Accept the **EC2StackInstanceType** default value of `t2.micro` for the type of EC2 instance the agents will run in.
* Set the **EC2StackKeyName** to the SSH Key you want to use for connecting to the EC2 instance.
* Enable **EC2StackPublicIPAddress** value to assign a public IP to your EC2 instance so it can connect to the Internet and the AMPIFY Platform.
* Accept the **EC2StackSecurityGroup** default value of blank to create all EC2 resources.
* Accept the **EC2StackSSHLocation** default value of `0.0.0.0/0` to allow all SSH connections with a valid key access to the instance.
* Accept the **EC2StackSubnet** default value of blank to create all EC2 resources.
* Accept the **EC2StackVPCID** default value of blank to create all EC2 resources.
* Enter the **TraceabilityFunctionBucket** of the S3 bucket that was created in "Upload the Traceability Lambda to an S3 bucket" section.
* Accept the **TraceabilityLogGroupName** default value of `aws-apigw-traffic-logs` to store API call logs for the Traceability Agent to read when constructing usage events.
* Accept the **TraceabilityQueueName** default value of `aws-apigw-traceability` to hold the API call so that the Traceability Agent can push them into the AMPLIFY platform.

Execute the stack creation.

At this point your agents will be deployed in the EC2 instance and start automatically. Once started, go to CloudWatch to see the logs.

Now you are ready to [deploy agents](/docs/central/connect-aws-gateway/deploy-your-agents-1).
