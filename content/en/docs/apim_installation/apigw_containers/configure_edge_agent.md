---
title: Configure usage tracking
linkTitle: Configure usage tracking
weight: 65
date: 2020-02-05
description: Enable usage tracking for on-premise API management products purchased on a subscription basis.
---

Usage tracking is how Axway measures the subscription services you use on a monthly basis. Axway measures your usage to make sure it is within the prescribed thresholds specified in your subscription, and to determine whether overages require billing adjustments. For more information, see [About subscription usage tracking](https://docs.axway.com/bundle/subusage_en/page/about_subscription_usage_tracking.html).

You can log in to the [AMPLIFY Platform](https://platform.axway.com/) and look up information about your subscriptions and service entitlements. If you are unsure whether usage tracking applies to you, contact your Axway representative or [Axway support](https://support.axway.com/).

The AMPLIFY Edge Agent collects data from your on-premise API management products and uploads usage reports to the AMPLIFY Platform. You must connect your API Gateway to the Edge Agent to enable automatic upload of usage reports to the AMPLIFY Platform.

<!-- 
Ask the product team:
- what data is the input configuration file consuming from your product
- what aggregated data is the agent generating for the product
- can the user use these files as-is or must edit them
-->

## Configure API Gateway to connect with the Edge Agent

To configure API Gateway (in container mode) to send usage data to the Edge Agent, you must upload two configuration files to the agent:

* An input configuration file that defines the type of data the agent collects from API Gateway.
* A report configuration file the agent uses to aggregate the data to upload to the platform.

API Gateway will communicate with the agent over Lumberjack protocol using Filebeat.

Then, you must refer to [Deploy the agent](https://docs.axway.com/bundle/subusage_en/page/deploy_the_agent.html) for enabling usage report.

<!--
1. Go to [Axway support](https://support.axway.com/) and download the configuration files for API Gateway:

    * file 1: description
    * file 2: description

2. Extract the zip locally.
3. Upload the `<placeholder>.json` file from the package to the `<Edge_Agent_install_dir>/aggregator/usage_tracking/conf/agent/aggregation` directory.
4. Upload the `<placeholder>.json` file from the package to the `<Edge_Agent_install_dir>/conf/agent/report` directory.
5. Edit the `report configuration` file, and add the environment ID associated with your organization on the AMPLIFY Platform.
6. Restart the Edge Agent.
-->

<!-- is the the Lumberjack content in the generic doc is sufficient for your product? https://docs.axway.com/bundle/subusage_en/page/secure_the_connection_with_the_agent.html
-- >

<!-- If your product uses QLT, You will have to get the specifics from your team about how to set up communication with the agent over QLT -->

## Review subscriptions and usages on the platform

After you have completed the configuration and have enabled uploads of usage reports, you can log in to the [AMPLIFY Platform](https://platform.axway.com/) and access and review your subscriptions and usage data. For more information, see [Review subscriptions and usages on the platform](https://docs.axway.com/bundle/subusage_en/page/review_subscriptions_and_usages_on_the_platform.html).
